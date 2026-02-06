module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CodeQuestGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jogo/Pixelcode-codigo/codequest.game/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/jogo/Pixelcode-codigo/codequest.game/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function CodeQuestGame() {
    const isInitialized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isInitialized.current) return;
        isInitialized.current = true;
        // Load the game logic dynamically to ensure it runs only on the client
        __turbopack_context__.A("[project]/jogo/Pixelcode-codigo/codequest.game/lib/game-logic.ts [app-ssr] (ecmascript, async loader)").then((module)=>{
            module.initGame();
        });
        return ()=>{
        // Cleanup if necessary
        // location.reload(); // brute force cleanup if needed
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                id: "gc"
            }, void 0, false, {
                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "hud",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "stat-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-icon",
                                        children: "HP"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 32,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-bar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat-fill hp-fill",
                                            id: "hpBar",
                                            style: {
                                                width: '100%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                            lineNumber: 33,
                                            columnNumber: 51
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 33,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-val",
                                        id: "hpText",
                                        children: "100/100"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-icon",
                                        children: "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 37,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-bar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat-fill energy-fill",
                                            id: "inkBar",
                                            style: {
                                                width: '100%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                            lineNumber: 38,
                                            columnNumber: 51
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 38,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-val",
                                        id: "inkText",
                                        children: "100/100"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 39,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stat-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-icon",
                                        children: "XP"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat-bar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat-fill xp-fill",
                                            id: "xpBar",
                                            style: {
                                                width: '0%'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                            lineNumber: 43,
                                            columnNumber: 51
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "stat-val",
                                        id: "xpText",
                                        children: "LVL 1"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 44,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "info-panel",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "info-pill",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        id: "runesVal",
                                        children: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 48,
                                        columnNumber: 48
                                    }, this),
                                    " solves"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "stage-badge",
                                id: "stageBadge",
                                children: "LEVEL 1"
                            }, void 0, false, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spell-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spell-slot",
                                title: "Ataque",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "si",
                                        children: "J"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 52,
                                        columnNumber: 64
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sk",
                                        children: "ATK"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 52,
                                        columnNumber: 93
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spell-slot",
                                title: "Dash",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "si",
                                        children: "K"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 53,
                                        columnNumber: 62
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sk",
                                        children: "DASH"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 53,
                                        columnNumber: 91
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spell-slot",
                                title: "Pular",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "si",
                                        children: "W"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 54,
                                        columnNumber: 63
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sk",
                                        children: "JUMP"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 54,
                                        columnNumber: 92
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen",
                id: "menuScreen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-bg-grid"
                    }, void 0, false, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-glow"
                    }, void 0, false, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "game-title",
                        children: [
                            "CODE",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "accent",
                                children: "//"
                            }, void 0, false, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 62,
                                columnNumber: 49
                            }, this),
                            "REALM"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "game-sub",
                        children: "compile your destiny"
                    }, void 0, false, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-terminal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "terminal-line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "prompt",
                                        children: "$"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 65,
                                        columnNumber: 52
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cmd",
                                        children: "init code_realm --mode=adventure"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 65,
                                        columnNumber: 86
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "terminal-line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "result",
                                    children: "> Loading reality compiler..."
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 66,
                                    columnNumber: 52
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "terminal-line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "result",
                                    children: "> Syntax engines online."
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 67,
                                    columnNumber: 52
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "terminal-line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "result",
                                    children: "> Ready. Complete code challenges to reshape the world."
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 68,
                                    columnNumber: 52
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "menu-btn-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-btn",
                                id: "btn-start-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bi",
                                        children: ">_"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 71,
                                        columnNumber: 64
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bt",
                                        children: "JORNADA"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 71,
                                        columnNumber: 97
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bd",
                                        children: "Resolva desafios de codigo para avancar"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 71,
                                        columnNumber: 132
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-btn",
                                id: "btn-start-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bi",
                                        children: "[ ]"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 72,
                                        columnNumber: 64
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bt",
                                        children: "ARENA"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 72,
                                        columnNumber: 95
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bd",
                                        children: "Desafios infinitos de programacao"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 72,
                                        columnNumber: 128
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-btn",
                                id: "btn-start-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bi",
                                        children: "{;}"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 73,
                                        columnNumber: 64
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bt",
                                        children: "PRATICA"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 73,
                                        columnNumber: 105
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bd",
                                        children: "Treine seus fundamentos de codigo"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 73,
                                        columnNumber: 140
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "menu-btn",
                                id: "btn-start-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bi",
                                        children: "../"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 74,
                                        columnNumber: 64
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bt",
                                        children: "OPCOES"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 74,
                                        columnNumber: 95
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bd",
                                        children: "Configuracoes e controles"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 74,
                                        columnNumber: 129
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "controls-hint",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "key",
                                        children: "A"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 77,
                                        columnNumber: 27
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "key",
                                        children: "D"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 77,
                                        columnNumber: 57
                                    }, this),
                                    " mover"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "key",
                                        children: "SPACE"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 78,
                                        columnNumber: 27
                                    }, this),
                                    " pular"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "key",
                                        children: "J"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 79,
                                        columnNumber: 27
                                    }, this),
                                    " atacar"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "key",
                                        children: "K"
                                    }, void 0, false, {
                                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                        lineNumber: 80,
                                        columnNumber: 27
                                    }, this),
                                    " dash"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "PORTAL = desafio de codigo"
                            }, void 0, false, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "code-overlay",
                id: "codeOverlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "code-panel",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "code-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "code-header-dots",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                            lineNumber: 89,
                                            columnNumber: 59
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                            lineNumber: 89,
                                            columnNumber: 72
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                            lineNumber: 89,
                                            columnNumber: 85
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "code-header-title",
                                    id: "codeFileName",
                                    children: "challenge.js"
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "code-header-level",
                                    id: "codeLevelBadge",
                                    children: "LEVEL 1"
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 91,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "progress-bar",
                            id: "progressBar"
                        }, void 0, false, {
                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                            lineNumber: 93,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "challenge-title",
                            id: "challengeTitle",
                            children: "Complete o Codigo"
                        }, void 0, false, {
                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "challenge-desc",
                            id: "challengeDesc",
                            children: "Preencha a parte que falta para fazer o codigo funcionar corretamente."
                        }, void 0, false, {
                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                            lineNumber: 95,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "code-editor-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "code-line-numbers",
                                    id: "lineNumbers"
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "code-display",
                                    id: "codeDisplay"
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "code-hint",
                            id: "codeHint",
                            children: "Dica: pense no que a funcao deve retornar"
                        }, void 0, false, {
                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                            lineNumber: 100,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "answer-input",
                            id: "answerInput",
                            type: "text",
                            placeholder: "Digite sua resposta aqui...",
                            autoComplete: "off",
                            spellCheck: false
                        }, void 0, false, {
                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                            lineNumber: 101,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "code-output",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "code-output-label",
                                    children: "// output"
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 103,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "code-output-text",
                                    id: "codeOutput",
                                    children: "Aguardando resposta..."
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 104,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "code-btns",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "code-btn skip",
                                    id: "btn-skip",
                                    children: "PULAR (-20HP)"
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "code-btn run",
                                    id: "btn-submit",
                                    children: "EXECUTAR >>"
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 108,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "code-btn",
                                    id: "btn-close",
                                    children: "VOLTAR"
                                }, void 0, false, {
                                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toast",
                id: "toast",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toast-title",
                        id: "toastTitle",
                        children: "INFO"
                    }, void 0, false, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toast-text",
                        id: "toastText"
                    }, void 0, false, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lvlup",
                id: "lvlBanner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lvlup-txt",
                        children: "LEVEL UP!"
                    }, void 0, false, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lvlup-sub",
                        children: [
                            "Level ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                id: "newLvl",
                                children: "2"
                            }, void 0, false, {
                                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                                lineNumber: 123,
                                columnNumber: 50
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "death-screen",
                id: "deathScreen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "death-title",
                        children: "SEGFAULT"
                    }, void 0, false, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "death-sub",
                        id: "deathSub",
                        children: "Seu processo foi encerrado no level 1"
                    }, void 0, false, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$jogo$2f$Pixelcode$2d$codigo$2f$codequest$2e$game$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "retry-btn",
                        id: "btn-retry",
                        children: "RECOMPILAR"
                    }, void 0, false, {
                        fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/jogo/Pixelcode-codigo/codequest.game/components/CodeQuestGame.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/jogo/Pixelcode-codigo/codequest.game/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/jogo/Pixelcode-codigo/codequest.game/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/jogo/Pixelcode-codigo/codequest.game/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/jogo/Pixelcode-codigo/codequest.game/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/jogo/Pixelcode-codigo/codequest.game/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ffae2d8b._.js.map