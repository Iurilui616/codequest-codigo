module.exports = [
"[project]/jogo/Pixelcode-codigo/codequest.game/lib/game-logic.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initGame",
    ()=>initGame
]);
// @ts-nocheck
'use client';
let gameInstance = null;
// ==========================================
// AUDIO ENGINE (Retro/NES Style)
// ==========================================
const SFX = {
    ctx: null,
    m: null,
    init () {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.m = this.ctx.createGain();
        this.m.gain.value = 0.3;
        this.m.connect(this.ctx.destination);
    },
    go () {
        if (!this.ctx) this.init();
        if (this.ctx.state === 'suspended') this.ctx.resume();
    },
    tone (f, d, t, sl, v) {
        this.go();
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        o.type = t || 'square';
        o.frequency.setValueAtTime(f, this.ctx.currentTime);
        if (sl) sl.forEach((s, i)=>o.frequency.exponentialRampToValueAtTime(s, this.ctx.currentTime + d / sl.length * (i + 1)));
        g.gain.setValueAtTime(v || 0.1, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + d);
        o.connect(g);
        g.connect(this.m);
        o.start();
        o.stop(this.ctx.currentTime + d);
    },
    play (n) {
        const fx = {
            jump: ()=>this.tone(330, 0.1, 'square', [
                    440,
                    550
                ], 0.1),
            bump: ()=>this.tone(150, 0.1, 'square', [
                    100
                ], 0.1),
            coin: ()=>{
                this.tone(988, 0.08, 'square', [], 0.1);
                setTimeout(()=>this.tone(1319, 0.3, 'square', [], 0.1), 80);
            },
            stamp: ()=>this.tone(200, 0.1, 'sawtooth', [
                    100,
                    50
                ], 0.15),
            die: ()=>{
                [
                    400,
                    350,
                    300,
                    250,
                    200,
                    150
                ].forEach((f, i)=>setTimeout(()=>this.tone(f, 0.1, 'triangle', [], 0.2), i * 100));
            },
            flag: ()=>{
                [
                    440,
                    554,
                    659,
                    880,
                    440,
                    554,
                    659,
                    880
                ].forEach((f, i)=>setTimeout(()=>this.tone(f, 0.15, 'square', [], 0.1), i * 120));
            }
        };
        if (fx[n]) fx[n]();
    }
};
// ==========================================
// TILE SYSTEM & CONSTANTS
// ==========================================
const TILE_SIZE = 32;
const GRAVITY = 0.8;
const FRICTION = 0.85;
const ACCEL = 0.5;
const MAX_SPEED = 6;
const RUN_SPEED = 10;
const JUMP_FORCE = -15; // Slightly higher
const BOUNCE_FORCE = -8;
const TILES = {
    AIR: 0,
    GROUND: 1,
    BRICK: 2,
    BLOCK: 3,
    PIPE_L: 4,
    PIPE_R: 5,
    PIPE_TOP_L: 6,
    PIPE_TOP_R: 7,
    FLAG_POLE: 8,
    FLAG_TOP: 9,
    HARD_BLOCK: 10,
    LAVA: 11
};
// ==========================================
// LEVEL GENERATORS
// ==========================================
// We define 7 distinct themes/generators
const Generators = {
    // Level 1: Tutorial Plains
    1: (map, cols, rows, entities)=>{
        let gh = 14;
        for(let x = 0; x < cols; x++){
            // Floor
            if (x < cols - 10 && (x < 25 || x > 28) && (x < 40 || x > 43)) {
                for(let y = gh; y < rows; y++)map[x][y] = TILES.GROUND;
            }
            // Blocks
            if (x === 15) {
                map[x][gh - 4] = TILES.BLOCK;
            }
            if (x > 20 && x < 26 && x % 2 !== 0) {
                map[x][gh - 4] = TILES.BRICK;
                map[x][gh - 8] = TILES.BLOCK;
            }
            // Pipes
            if (x === 35) addPipe(map, x, gh - 1, 2);
            if (x === 50) addPipe(map, x, gh - 1, 3);
            // Goombas
            if (x > 20 && x < cols - 20 && x % 15 === 0) addGoomba(entities, x, gh - 2);
        }
    },
    // Level 2: Cave (Ceiling)
    2: (map, cols, rows, entities)=>{
        let gh = 15;
        for(let x = 0; x < cols; x++){
            // Floor & Ceiling
            for(let y = gh; y < rows; y++)map[x][y] = TILES.GROUND; // Floor
            for(let y = 0; y < 3; y++)map[x][y] = TILES.HARD_BLOCK; // Ceiling
            // Random pillars
            if (x % 10 === 0 && x > 10) {
                for(let h = 0; h < Math.random() * 4 + 1; h++){
                    map[x][gh - 1 - h] = TILES.BRICK;
                    map[x][3 + h] = TILES.BRICK; // Stalactites
                }
            }
            if (x % 20 === 0 && x > 20) addGoomba(entities, x, gh - 2);
        }
    },
    // Level 3: Night Platforms
    3: (map, cols, rows, entities)=>{
        let gh = 18; // Very low ground
        for(let x = 0; x < cols; x++){
            if (x < 10) {
                for(let y = gh; y < rows; y++)map[x][y] = TILES.GROUND;
            }
            // Floating platforms
            if (x % 6 === 0 && x > 10 && x < cols - 10) {
                let h = Math.floor(Math.random() * 8) + 6;
                map[x][h] = TILES.BRICK;
                map[x + 1][h] = TILES.BRICK;
                map[x + 2][h] = TILES.BRICK;
                if (Math.random() > 0.6) addGoomba(entities, x + 1, h - 1);
            }
        }
        // Safety ground at end
        for(let x = cols - 20; x < cols; x++)for(let y = gh; y < rows; y++)map[x][y] = TILES.GROUND;
    },
    // Level 4: Castle (Lava)
    4: (map, cols, rows, entities)=>{
        let gh = 16;
        for(let x = 0; x < cols; x++){
            // Floor with lava gaps
            if (x % 15 < 10 || x < 10 || x > cols - 20) {
                for(let y = gh; y < rows; y++)map[x][y] = TILES.HARD_BLOCK; // Grey blocks
            } else {
                for(let y = rows - 2; y < rows; y++)map[x][y] = TILES.LAVA;
            }
            // Fire bars (simulated with blocks for not)
            if (x % 25 === 0 && x > 10) {
                map[x][gh - 2] = TILES.BLOCK;
                map[x][gh - 3] = TILES.BLOCK;
            }
        }
    },
    // Level 5: Forest (High canopy)
    5: (map, cols, rows, entities)=>{
        let gh = 14;
        for(let x = 0; x < cols; x++){
            map[x][gh] = TILES.GROUND; // Floor
            // Trees (Pipes as trunks)
            if (x % 12 === 0 && x > 10) {
                let kh = Math.floor(Math.random() * 5) + 4;
                for(let h = 0; h < kh; h++)map[x][gh - 1 - h] = TILES.HARD_BLOCK; // Trunk
                // Leaves
                for(let wx = -2; wx <= 2; wx++)map[x + wx][gh - 1 - kh] = TILES.BRICK;
            }
        }
    },
    // Level 6: Bridge (Flying Cheeps - simulated)
    6: (map, cols, rows, entities)=>{
        let gh = 12;
        for(let x = 0; x < cols; x++){
            if (Math.random() > 0.2 || x < 10 || x > cols - 10) {
                map[x][gh] = TILES.BRICK; // Bridge
            }
        }
    },
    // Level 7: Sky
    7: (map, cols, rows, entities)=>{
        // Cloud platforms only
        for(let x = 0; x < cols; x++){
            if (x < 15 || x > cols - 15) {
                for(let y = 15; y < rows; y++)map[x][y] = TILES.GROUND;
            } else {
                if (x % 5 === 0 && Math.random() > 0.3) {
                    let y = Math.floor(Math.random() * 10) + 5;
                    map[x][y] = TILES.BLOCK;
                    map[x + 1][y] = TILES.BLOCK;
                    map[x + 2][y] = TILES.BLOCK;
                }
            }
        }
    },
    // Level 8+: Glitch Mode
    8: (map, cols, rows, entities)=>{
        for(let x = 0; x < cols; x++){
            let gh = Math.floor(Math.random() * 10) + 10;
            if (Math.random() > 0.1) {
                for(let y = gh; y < rows; y++)map[x][y] = Math.random() > 0.5 ? TILES.GROUND : TILES.BRICK;
            }
            if (Math.random() < 0.1) map[x][gh - 4] = TILES.LAVA; // Floating lava?? Glitch
            if (Math.random() < 0.1) addGoomba(entities, x, gh - 2);
        }
    }
};
function addPipe(map, x, y, h) {
    for(let i = 0; i < h; i++){
        map[x][y - i] = TILES.PIPE_L;
        map[x + 1][y - i] = TILES.PIPE_R;
    }
    map[x][y - h] = TILES.PIPE_TOP_L;
    map[x + 1][y - h] = TILES.PIPE_TOP_R;
}
function addGoomba(entities, x, y) {
    entities.push({
        type: 'goomba',
        x: x * TILE_SIZE,
        y: y * TILE_SIZE,
        w: 24,
        h: 24,
        vx: -1,
        vy: 0,
        dead: false
    });
}
class Particles {
    constructor(){
        this.list = [];
    }
    emit(x, y, c) {
        const n = c.count || 1;
        for(let i = 0; i < n; i++){
            this.list.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * (c.speed || 4),
                vy: (Math.random() - 0.5) * (c.speed || 4),
                life: c.life || 30,
                maxLife: c.life || 30,
                color: c.color || '#fff',
                size: c.size || 4
            });
        }
    }
    update() {
        this.list = this.list.filter((p)=>{
            p.x += p.vx;
            p.y += p.vy;
            p.life--;
            return p.life > 0;
        });
    }
    draw(ctx) {
        this.list.forEach((p)=>{
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });
    }
}
class Game {
    constructor(){
        this.canvas = document.getElementById('gc');
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;
        this.resize();
        window.addEventListener('resize', ()=>this.resize());
        this.state = 'menu'; // Start in menu
        this.level = 1;
        this.frame = 0;
        this.particles = new Particles();
        this.player = {
            x: 100,
            y: 100,
            w: 24,
            h: 30,
            vx: 0,
            vy: 0,
            grounded: false,
            facing: 1,
            coins: 0,
            hp: 1,
            invincible: 0
        };
        this.keys = {};
        this.setupInput();
        // Level Data
        this.map = [];
        this.entities = [];
        this.cols = 0;
        this.rows = 0;
        this.camera = {
            x: 0,
            y: 0
        };
        // Bind Start
        this.bindUI();
        // Loop
        this.loopBound = this.loop.bind(this);
        requestAnimationFrame(this.loopBound);
    }
    resize() {
        this.W = window.innerWidth;
        this.H = window.innerHeight;
        this.canvas.width = this.W;
        this.canvas.height = this.H;
        this.scale = Math.min(this.W / 400, this.H / 300);
    }
    bindUI() {
        // Menu buttons
        const ids = [
            'btn-start-1',
            'btn-start-2',
            'btn-start-3',
            'btn-start-4'
        ];
        ids.forEach((id)=>{
            const el = document.getElementById(id);
            if (el) el.onclick = ()=>this.startGame();
        });
        // Retry button
        const btnRetry = document.getElementById('btn-retry');
        if (btnRetry) btnRetry.onclick = ()=>{
            document.getElementById('deathScreen').style.display = 'none';
            this.startGame();
        };
    }
    startGame() {
        this.level = 1;
        this.player.coins = 0;
        this.loadLevel(this.level);
        document.getElementById('menuScreen').style.display = 'none';
        document.getElementById('hud').style.display = 'block';
        this.state = 'playing';
        SFX.go();
    }
    setupInput() {
        window.addEventListener('keydown', (e)=>{
            this.keys[e.code] = true;
            if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
                if (this.player.grounded && this.state === 'playing') {
                    this.player.vy = JUMP_FORCE;
                    this.player.grounded = false;
                    SFX.play('jump');
                    this.particles.emit(this.player.x + 12, this.player.y + 32, {
                        color: '#fff',
                        count: 4,
                        size: 2
                    });
                }
            }
        });
        window.addEventListener('keyup', (e)=>{
            this.keys[e.code] = false;
        });
    }
    loadLevel(lvl) {
        this.rows = 20;
        this.cols = 200 + lvl * 10; // Levels get longer
        this.map = new Array(this.cols).fill(0).map(()=>new Array(this.rows).fill(TILES.AIR));
        this.entities = [];
        this.player.x = 100;
        this.player.y = 100;
        this.player.vx = 0;
        this.player.vy = 0;
        this.camera.x = 0;
        // Select Generator
        let gen = Generators[lvl];
        if (!gen) gen = Generators[8]; // Glitch fallback
        gen(this.map, this.cols, this.rows, this.entities);
        // Add Flag at end
        let endX = this.cols - 10;
        let endY = 14;
        // Find ground at endX
        for(let y = this.rows - 1; y > 0; y--){
            if (this.map[endX][y] === TILES.GROUND || this.map[endX][y] === TILES.BRICK) {
                endY = y;
                break;
            }
        }
        // Pole
        for(let h = 0; h < 8; h++)this.map[endX][endY - 1 - h] = TILES.FLAG_POLE;
        this.map[endX][endY - 9] = TILES.FLAG_TOP;
        // Update HUD Text
        const badge = document.getElementById('stageBadge');
        if (badge) badge.textContent = `WORLD 1-${lvl}`;
    }
    nextLevel() {
        this.level++;
        SFX.play('flag');
        this.state = 'transition';
        setTimeout(()=>{
            this.loadLevel(this.level);
            this.state = 'playing';
        }, 3000);
    }
    // ==========================================
    // PHYSICS & UPDATE
    // ==========================================
    getTile(col, row) {
        if (col < 0 || col >= this.cols || row < 0 || row >= this.rows) return TILES.AIR;
        return this.map[col][row];
    }
    resolveMapCollision(obj) {
        let startCol = Math.floor(obj.x / TILE_SIZE);
        let endCol = Math.floor((obj.x + obj.w - 1) / TILE_SIZE);
        let startRow = Math.floor(obj.y / TILE_SIZE);
        let endRow = Math.floor((obj.y + obj.h - 1) / TILE_SIZE);
        // 1. Vertical
        if (obj.vy > 0) {
            let checkRow = Math.floor((obj.y + obj.vy + obj.h) / TILE_SIZE);
            let hit = false;
            for(let c = startCol; c <= endCol; c++)if (this.getTile(c, checkRow) !== TILES.AIR) hit = true;
            if (hit) {
                obj.y = checkRow * TILE_SIZE - obj.h;
                obj.vy = 0;
                obj.grounded = true;
            } else {
                obj.grounded = false;
            }
        } else if (obj.vy < 0) {
            let checkRow = Math.floor((obj.y + obj.vy) / TILE_SIZE);
            let hit = false;
            let hitTile = TILES.AIR;
            for(let c = startCol; c <= endCol; c++){
                let t = this.getTile(c, checkRow);
                if (t !== TILES.AIR) {
                    hit = true;
                    hitTile = t;
                }
            }
            if (hit) {
                obj.y = (checkRow + 1) * TILE_SIZE;
                obj.vy = 0;
                if (hitTile === TILES.BLOCK || hitTile === TILES.BRICK) SFX.play('bump');
            }
        }
        // 2. Horizontal (Simplified for robustness)
        startRow = Math.floor(obj.y / TILE_SIZE);
        endRow = Math.floor((obj.y + obj.h - 1) / TILE_SIZE);
        if (obj.vx > 0) {
            let checkCol = Math.floor((obj.x + obj.vx + obj.w) / TILE_SIZE);
            let hit = false;
            for(let r = startRow; r <= endRow; r++){
                let t = this.getTile(checkCol, r);
                if (t !== TILES.AIR && t !== TILES.FLAG_POLE && t !== TILES.FLAG_TOP) hit = true;
                // Win Condition
                if (t === TILES.FLAG_POLE && obj === this.player) this.nextLevel();
            }
            if (hit) {
                obj.x = checkCol * TILE_SIZE - obj.w - 0.1;
                obj.vx = 0;
            }
        } else if (obj.vx < 0) {
            let checkCol = Math.floor((obj.x + obj.vx) / TILE_SIZE);
            let hit = false;
            for(let r = startRow; r <= endRow; r++){
                let t = this.getTile(checkCol, r);
                if (t !== TILES.AIR && t !== TILES.FLAG_POLE) hit = true;
            }
            if (hit) {
                obj.x = (checkCol + 1) * TILE_SIZE + 0.1;
                obj.vx = 0;
            }
        }
    }
    update() {
        if (this.state !== 'playing') return;
        this.frame++;
        const P = this.player;
        // 1. Horizontal Movement
        const topSpeed = this.keys['ShiftLeft'] ? RUN_SPEED : MAX_SPEED;
        if (this.keys['ArrowRight'] || this.keys['KeyD']) {
            if (P.vx < 0) P.vx *= 0.9;
            P.vx += ACCEL;
            P.facing = 1;
        } else if (this.keys['ArrowLeft'] || this.keys['KeyA']) {
            if (P.vx > 0) P.vx *= 0.9;
            P.vx -= ACCEL;
            P.facing = -1;
        } else {
            P.vx *= FRICTION;
            if (Math.abs(P.vx) < 0.1) P.vx = 0;
        }
        P.vx = Math.max(-topSpeed, Math.min(topSpeed, P.vx));
        // 2. Vertical
        P.vy += GRAVITY;
        P.vy = Math.min(P.vy, 12);
        // 3. Collision
        P.x += P.vx;
        this.resolveMapCollision(P); // X-Axis
        P.y += P.vy;
        this.resolveMapCollision(P); // Y-Axis (re-uses logic, slightly duplicated calc but safe)
        // 4. Entities
        this.entities.forEach((e)=>{
            if (e.dead) return;
            e.vy += GRAVITY;
            e.x += e.vx;
            // Collision for enemy
            // Simple floor check
            let ec = Math.floor(e.x / TILE_SIZE);
            let er = Math.floor((e.y + e.h) / TILE_SIZE);
            if (this.getTile(ec, er) !== TILES.AIR) {
                e.y = er * TILE_SIZE - e.h;
                e.vy = 0;
            } else {
                e.y += e.vy;
            }
            // Simple wall turn
            if (this.getTile(Math.floor((e.x + e.vx) / TILE_SIZE), Math.floor(e.y / TILE_SIZE)) !== TILES.AIR) {
                e.vx *= -1;
            }
            // Player Interaction
            if (P.x < e.x + e.w && P.x + P.w > e.x && P.y < e.y + e.h && P.y + P.h > e.y) {
                if (P.vy > 0 && P.y + P.h < e.y + e.h / 2 + 10) {
                    e.dead = true;
                    P.vy = -8;
                    SFX.play('stamp');
                    this.particles.emit(e.x, e.y, {
                        color: '#800',
                        count: 5
                    });
                } else {
                    this.die();
                }
            }
        });
        // Pit death
        if (P.y > this.rows * TILE_SIZE + 100) this.die();
        // Camera X (horizontal)
        let targetX = P.x - this.canvas.width / this.scale / 3;
        this.camera.x += (targetX - this.camera.x) * 0.1;
        this.camera.x = Math.max(0, this.camera.x);
        // Camera Y (vertical) - follow player down (raised a bit)
        let targetY = P.y - this.canvas.height / this.scale / 2 - 20;
        this.camera.y += (targetY - this.camera.y) * 0.1;
        this.camera.y = Math.max(0, Math.min(this.camera.y, this.rows * TILE_SIZE - this.canvas.height / this.scale));
        this.particles.update();
        this.updateHUD();
    }
    die() {
        SFX.play('die');
        document.getElementById('deathScreen').style.display = 'flex';
        this.state = 'dead';
    }
    updateHUD() {
        const xpText = document.getElementById('xpText');
        if (xpText) xpText.textContent = `COINS x ${this.player.coins}`;
    }
    // ==========================================
    // RENDERER
    // ==========================================
    // ==========================================
    // UNIQUE COLOR PALETTE (Cyber/Hacker Theme)
    // ==========================================
    getTheme() {
        const themes = {
            1: {
                sky: '#0a0a1a',
                ground: '#1a3a2a',
                brick: '#2a5a4a',
                accent: '#00ffa8',
                enemy: '#ff6b6b'
            },
            2: {
                sky: '#0f0520',
                ground: '#2a1a4a',
                brick: '#4a2a6a',
                accent: '#bf7fff',
                enemy: '#ff9f43'
            },
            3: {
                sky: '#000510',
                ground: '#0a2040',
                brick: '#1a3060',
                accent: '#00d4ff',
                enemy: '#ff7675'
            },
            4: {
                sky: '#1a0505',
                ground: '#3a1a1a',
                brick: '#5a2a2a',
                accent: '#ff4757',
                enemy: '#ffa502'
            },
            5: {
                sky: '#051005',
                ground: '#1a4a1a',
                brick: '#2a6a2a',
                accent: '#7bed9f',
                enemy: '#e84393'
            },
            6: {
                sky: '#050510',
                ground: '#2a2a4a',
                brick: '#3a3a6a',
                accent: '#70a1ff',
                enemy: '#fd79a8'
            },
            7: {
                sky: '#0a0510',
                ground: '#3a2a5a',
                brick: '#5a4a7a',
                accent: '#a29bfe',
                enemy: '#fdcb6e'
            }
        };
        return themes[this.level] || themes[1];
    }
    draw() {
        const ctx = this.ctx;
        const W = this.W, H = this.H;
        const S = this.scale;
        const theme = this.getTheme();
        // Sky - Dark gradient based on theme
        ctx.fillStyle = theme.sky;
        ctx.fillRect(0, 0, W, H);
        // Grid pattern overlay (cyber effect)
        ctx.strokeStyle = 'rgba(0, 255, 168, 0.03)';
        for(let gx = 0; gx < W; gx += 40){
            ctx.beginPath();
            ctx.moveTo(gx, 0);
            ctx.lineTo(gx, H);
            ctx.stroke();
        }
        for(let gy = 0; gy < H; gy += 40){
            ctx.beginPath();
            ctx.moveTo(0, gy);
            ctx.lineTo(W, gy);
            ctx.stroke();
        }
        if (this.state === 'menu') return;
        ctx.save();
        ctx.scale(S, S);
        ctx.translate(-Math.floor(this.camera.x), -Math.floor(this.camera.y));
        // 1. Map Tiles
        let startCol = Math.floor(this.camera.x / TILE_SIZE);
        let endCol = startCol + W / S / TILE_SIZE + 2;
        for(let x = startCol; x <= endCol; x++){
            if (x >= 0 && x < this.cols) {
                for(let y = 0; y < this.rows; y++){
                    let t = this.map[x][y];
                    if (t !== TILES.AIR) this.drawTile(ctx, t, x * TILE_SIZE, y * TILE_SIZE, theme);
                }
            }
        }
        // 2. Entities (BUG enemies - glitchy cube creatures)
        this.entities.forEach((e)=>{
            if (e.dead) return;
            let anim = Math.floor(this.frame / 8) % 2;
            const theme = this.getTheme();
            // Glitchy cube body
            ctx.fillStyle = theme.enemy;
            ctx.fillRect(e.x + 2, e.y + 4, 20, 16);
            // Antenna/spikes
            ctx.fillStyle = '#fff';
            ctx.fillRect(e.x + 6, e.y, 2, 6);
            ctx.fillRect(e.x + 16, e.y, 2, 6);
            // Eyes (glowing)
            ctx.fillStyle = '#000';
            ctx.fillRect(e.x + 6, e.y + 8, 4, 4);
            ctx.fillRect(e.x + 14, e.y + 8, 4, 4);
            ctx.fillStyle = theme.accent;
            ctx.fillRect(e.x + 7, e.y + 9, 2, 2);
            ctx.fillRect(e.x + 15, e.y + 9, 2, 2);
            // Legs (animated)
            ctx.fillStyle = theme.enemy;
            if (anim) {
                ctx.fillRect(e.x + 4, e.y + 20, 4, 4);
                ctx.fillRect(e.x + 16, e.y + 18, 4, 6);
            } else {
                ctx.fillRect(e.x + 4, e.y + 18, 4, 6);
                ctx.fillRect(e.x + 16, e.y + 20, 4, 4);
            }
        });
        // 3. Player (Hooded Hacker character)
        const P = this.player;
        const px = Math.floor(P.x);
        const py = Math.floor(P.y);
        const theme2 = this.getTheme();
        // Shadow
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(px + 2, py + P.h - 2, P.w - 4, 4);
        // Cloak/Body (dark with accent trim)
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(px + 4, py + 8, 16, 22);
        // Hood
        ctx.fillStyle = '#16213e';
        ctx.fillRect(px + 2, py, 20, 12);
        ctx.fillRect(px + 6, py + 12, 12, 4);
        // Face shadow
        ctx.fillStyle = '#0a0a14';
        ctx.fillRect(px + 6, py + 4, 12, 10);
        // Glowing eyes
        ctx.fillStyle = theme2.accent;
        ctx.fillRect(px + 8, py + 8, 3, 3);
        ctx.fillRect(px + 13, py + 8, 3, 3);
        // Accent trim on cloak
        ctx.fillStyle = theme2.accent;
        ctx.fillRect(px + 4, py + 28, 16, 2);
        // Visor/Facing indicator
        if (P.facing === 1) {
            ctx.fillRect(px + 16, py + 6, 4, 2);
        } else {
            ctx.fillRect(px + 4, py + 6, 4, 2);
        }
        this.particles.draw(ctx);
        ctx.restore();
    }
    drawTile(ctx, type, x, y, theme) {
        if (type === TILES.GROUND) {
            // Digital circuit block
            ctx.fillStyle = theme.ground;
            ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
            // Circuit lines
            ctx.fillStyle = theme.accent;
            ctx.globalAlpha = 0.15;
            ctx.fillRect(x + 4, y + 14, 24, 2);
            ctx.fillRect(x + 14, y + 4, 2, 12);
            ctx.globalAlpha = 1;
            // Edge highlight
            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            ctx.fillRect(x, y, TILE_SIZE, 2);
        } else if (type === TILES.BRICK) {
            // Data block
            ctx.fillStyle = theme.brick;
            ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
            ctx.fillStyle = 'rgba(0,0,0,0.3)';
            ctx.fillRect(x, y + 28, TILE_SIZE, 4);
            ctx.fillRect(x + 28, y, 4, TILE_SIZE);
            // Binary pattern
            ctx.fillStyle = theme.accent;
            ctx.globalAlpha = 0.2;
            ctx.font = '8px monospace';
            ctx.fillText('01', x + 8, y + 18);
            ctx.globalAlpha = 1;
        } else if (type === TILES.BLOCK) {
            // Power-up terminal
            ctx.fillStyle = theme.accent;
            ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
            ctx.fillStyle = '#000';
            ctx.fillRect(x + 4, y + 4, 24, 24);
            ctx.fillStyle = theme.accent;
            ctx.font = 'bold 16px monospace';
            ctx.fillText('$', x + 10, y + 22);
        } else if (type >= TILES.PIPE_L && type <= TILES.PIPE_TOP_R) {
            // Data pipe / Server rack
            ctx.fillStyle = '#2a4a5a';
            ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
            ctx.fillStyle = theme.accent;
            ctx.fillRect(x + 6, y + 8, 4, 4);
            ctx.fillRect(x + 22, y + 8, 4, 4);
        } else if (type === TILES.HARD_BLOCK) {
            // Firewall block
            ctx.fillStyle = '#3a2a4a';
            ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
            ctx.strokeStyle = '#ff4757';
            ctx.strokeRect(x + 2, y + 2, 28, 28);
        } else if (type === TILES.LAVA) {
            // Corrupted data / Malware
            ctx.fillStyle = '#ff2222';
            ctx.fillRect(x, y, 32, 32);
            ctx.fillStyle = '#ff6666';
            let wave = Math.sin(this.frame * 0.1 + x * 0.1) * 4;
            ctx.fillRect(x, y + wave, 32, 8);
        } else if (type === TILES.FLAG_POLE) {
            // Upload beam
            ctx.fillStyle = theme.accent;
            ctx.fillRect(x + 14, y, 4, 32);
            ctx.fillStyle = 'rgba(255,255,255,0.5)';
            ctx.fillRect(x + 15, y, 2, 32);
        } else if (type === TILES.FLAG_TOP) {
            // Upload complete icon
            ctx.fillStyle = theme.accent;
            ctx.beginPath();
            ctx.moveTo(x + 16, y + 4);
            ctx.lineTo(x + 28, y + 16);
            ctx.lineTo(x + 16, y + 28);
            ctx.lineTo(x + 4, y + 16);
            ctx.fill();
        }
    }
    // Stub methods
    submitCode() {}
    closeCode() {}
    skipChallenge() {}
    loop() {
        this.update();
        this.draw();
        requestAnimationFrame(this.loopBound);
    }
}
function initGame() {
    if (!gameInstance) gameInstance = new Game();
}
}),
];

//# sourceMappingURL=jogo_Pixelcode-codigo_codequest_game_lib_game-logic_ts_c579dd67._.js.map