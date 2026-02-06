'use client';

import { useEffect, useRef } from 'react';
import '@/app/game.css';

export default function CodeQuestGame() {
    const isInitialized = useRef(false);

    useEffect(() => {
        if (isInitialized.current) return;
        isInitialized.current = true;

        // Load the game logic dynamically to ensure it runs only on the client
        import('@/lib/game-logic').then((module) => {
            module.initGame();
        });

        return () => {
            // Cleanup if necessary
            // location.reload(); // brute force cleanup if needed
        };
    }, []);

    return (
        <>
            <canvas id="gc"></canvas>

            {/* HUD */}
            <div id="hud">
                <div className="stat-panel">
                    <div className="stat-row">
                        <span className="stat-icon">HP</span>
                        <div className="stat-bar"><div className="stat-fill hp-fill" id="hpBar" style={{ width: '100%' }}></div></div>
                        <span className="stat-val" id="hpText">100/100</span>
                    </div>
                    <div className="stat-row">
                        <span className="stat-icon">EN</span>
                        <div className="stat-bar"><div className="stat-fill energy-fill" id="inkBar" style={{ width: '100%' }}></div></div>
                        <span className="stat-val" id="inkText">100/100</span>
                    </div>
                    <div className="stat-row">
                        <span className="stat-icon">XP</span>
                        <div className="stat-bar"><div className="stat-fill xp-fill" id="xpBar" style={{ width: '0%' }}></div></div>
                        <span className="stat-val" id="xpText">LVL 1</span>
                    </div>
                </div>
                <div className="info-panel">
                    <div className="info-pill"><span id="runesVal">0</span> solves</div>
                    <div className="stage-badge" id="stageBadge">LEVEL 1</div>
                </div>
                <div className="spell-bar">
                    <div className="spell-slot" title="Ataque"><span className="si">J</span><span className="sk">ATK</span></div>
                    <div className="spell-slot" title="Dash"><span className="si">K</span><span className="sk">DASH</span></div>
                    <div className="spell-slot" title="Pular"><span className="si">W</span><span className="sk">JUMP</span></div>
                </div>
            </div>

            {/* MENU SCREEN */}
            <div className="screen" id="menuScreen">
                <div className="menu-bg-grid"></div>
                <div className="menu-glow"></div>
                <div className="game-title">CODE<span className="accent">//</span>REALM</div>
                <div className="game-sub">compile your destiny</div>
                <div className="menu-terminal">
                    <div className="terminal-line"><span className="prompt">$</span> <span className="cmd">init code_realm --mode=adventure</span></div>
                    <div className="terminal-line"><span className="result">&gt; Loading reality compiler...</span></div>
                    <div className="terminal-line"><span className="result">&gt; Syntax engines online.</span></div>
                    <div className="terminal-line"><span className="result">&gt; Ready. Complete code challenges to reshape the world.</span></div>
                </div>
                <div className="menu-btn-grid">
                    <div className="menu-btn" id="btn-start-1"><span className="bi">&gt;_</span><span className="bt">JORNADA</span><span className="bd">Resolva desafios de codigo para avancar</span></div>
                    <div className="menu-btn" id="btn-start-2"><span className="bi">[ ]</span><span className="bt">ARENA</span><span className="bd">Desafios infinitos de programacao</span></div>
                    <div className="menu-btn" id="btn-start-3"><span className="bi">&#123;;&#125;</span><span className="bt">PRATICA</span><span className="bd">Treine seus fundamentos de codigo</span></div>
                    <div className="menu-btn" id="btn-start-4"><span className="bi">../</span><span className="bt">OPCOES</span><span className="bd">Configuracoes e controles</span></div>
                </div>
                <div className="controls-hint">
                    <span><span className="key">A</span><span className="key">D</span> mover</span>
                    <span><span className="key">SPACE</span> pular</span>
                    <span><span className="key">J</span> atacar</span>
                    <span><span className="key">K</span> dash</span>
                    <span>PORTAL = desafio de codigo</span>
                </div>
            </div>

            {/* CODE CHALLENGE OVERLAY */}
            <div className="code-overlay" id="codeOverlay">
                <div className="code-panel">
                    <div className="code-header">
                        <div className="code-header-dots"><span></span><span></span><span></span></div>
                        <div className="code-header-title" id="codeFileName">challenge.js</div>
                        <div className="code-header-level" id="codeLevelBadge">LEVEL 1</div>
                    </div>
                    <div className="progress-bar" id="progressBar"></div>
                    <div className="challenge-title" id="challengeTitle">Complete o Codigo</div>
                    <div className="challenge-desc" id="challengeDesc">Preencha a parte que falta para fazer o codigo funcionar corretamente.</div>
                    <div className="code-editor-wrap">
                        <div className="code-line-numbers" id="lineNumbers"></div>
                        <div className="code-display" id="codeDisplay"></div>
                    </div>
                    <div className="code-hint" id="codeHint">Dica: pense no que a funcao deve retornar</div>
                    <input className="answer-input" id="answerInput" type="text" placeholder="Digite sua resposta aqui..." autoComplete="off" spellCheck={false} />
                    <div className="code-output">
                        <div className="code-output-label">// output</div>
                        <div className="code-output-text" id="codeOutput">Aguardando resposta...</div>
                    </div>
                    <div className="code-btns">
                        <button className="code-btn skip" id="btn-skip">PULAR (-20HP)</button>
                        <button className="code-btn run" id="btn-submit">EXECUTAR &gt;&gt;</button>
                        <button className="code-btn" id="btn-close">VOLTAR</button>
                    </div>
                </div>
            </div>

            {/* TOAST */}
            <div className="toast" id="toast">
                <div className="toast-title" id="toastTitle">INFO</div>
                <div className="toast-text" id="toastText"></div>
            </div>

            {/* LEVEL UP */}
            <div className="lvlup" id="lvlBanner">
                <div className="lvlup-txt">LEVEL UP!</div>
                <div className="lvlup-sub">Level <span id="newLvl">2</span></div>
            </div>

            {/* DEATH */}
            <div className="death-screen" id="deathScreen">
                <div className="death-title">SEGFAULT</div>
                <div className="death-sub" id="deathSub">Seu processo foi encerrado no level 1</div>
                <button className="retry-btn" id="btn-retry">RECOMPILAR</button>
            </div>
        </>
    );
}
