// build.js — JetBrains GameDev deck → editable PPTX (no slidev exporter).
// Renders every slide from `pages/` into a single pptx with native shapes / text.

const path = require('path');
const pptxgen = require('pptxgenjs');
const T = require('./theme.cjs');
const { COLORS: C, FONT_SANS: SANS, FONT_MONO: MONO, FONT_SERIF: SERIF, W, H } = T;

async function build() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_WIDE'; // 13.333 × 7.5
  pres.title = 'JetBrains for Agentic-Driven Game Development';
  pres.author = '孙涛 · JetBrains';
  pres.company = 'JetBrains';

  // Cover page — single full-bleed mandala
  await slide01_cover(pres);
  await slide02_thesis(pres);
  await slide03_genericAiBreaks(pres);
  await slide04_jetbrainsStack(pres);
  await slide05_sharedIdeHub(pres);
  await slide06_acpMcpJunie(pres);
  await slide06b_agentWorkbench(pres);
  await slide07_mcpSteroid(pres);
  await slide08_workflow0(pres);
  await slide09_workflow1(pres);
  await slide10_workflow2(pres);
  await slide11_workflow3(pres);
  await slide12_workflow4(pres);
  await slide13_workflow5(pres);
  await slide13b_workflow6(pres);
  await slide14_roleMap(pres);
  await slide15_role1(pres);
  await slide16_role2(pres);
  await slide17_role3(pres);
  await slide18_role4(pres);
  await slide19_semanticMoat(pres);
  await slide20_integrationProof(pres);
  await slide21_adoptionRoadmap(pres);
  await slide22_closing(pres);
  await slideA1_productMap(pres);
  await slideA2_mcpSteroidDeep(pres);
  await slideA3_demoMenu(pres);
  await slideA4_kpiFramework(pres);
  await slideA5_workbenchUseCases(pres);

  const outPath = path.resolve(__dirname, '..', '..', 'temp', 'JetBrains-Rider-Agentic-GameDev.pptx');
  await pres.writeFile({ fileName: outPath });
  console.log('Wrote:', outPath);
}

// =====================================================================
// SLIDE 1 — Cover
// =====================================================================
async function slide01_cover(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'violet', mandalaPosition: 'right', mandalaOpacity: 0.95, showCornerBadge: false });

  // Top-left JetBrains umbrella wordmark proxy: just a tracked label
  s.addText('JETBRAINS', {
    x: 0.55, y: 0.40, w: 3.0, h: 0.30,
    fontSize: 11, fontFace: SANS, bold: true, color: C.ink,
    charSpacing: 3, align: 'left', valign: 'middle', margin: 0,
  });

  // Top-right corner badge — manual on cover, matches DESIGN.md
  const riderIcon = await T.logo('Rider/Rider_icon.svg', 96);
  s.addImage({ data: riderIcon, x: W - 1.75, y: 0.34, w: 0.32, h: 0.32 });
  s.addText('JETBRAINS IDE', {
    x: W - 1.38, y: 0.36, w: 1.36, h: 0.30,
    fontSize: 9, fontFace: SANS, bold: true,
    color: C.ink, charSpacing: 1.5, align: 'left', valign: 'middle', margin: 0,
  });

  // Hero title — Inter 44pt to keep two visual lines without bleeding to subtitle
  s.addText([
    { text: '面向 Agentic-Driven Workflow 的', options: { breakLine: true } },
    { text: 'GameDev 解决方案', options: {} },
  ], {
    x: 0.55, y: 1.55, w: 8.6, h: 3.0,
    fontSize: 44, fontFace: SANS, bold: true, color: C.ink,
    paraSpaceAfter: 6, valign: 'top', margin: 0,
  });

  s.addText('面向 Humans 与 Agents 协同编排的生产级解决方案', {
    x: 0.55, y: 4.65, w: 9.0, h: 0.5,
    fontSize: 17, fontFace: SANS, italic: true, color: C.inkDim,
    valign: 'top', margin: 0,
  });

  // Product strip — placed as text labels with separators
  s.addText([
    { text: 'dotUltimate', options: { fontSize: 11, color: C.inkDim, bold: true } },
    { text: '   ·   ', options: { fontSize: 11, color: C.inkMuted } },
    { text: 'Rider', options: { fontSize: 11, color: C.inkDim, bold: true } },
    { text: '   ·   ', options: { fontSize: 11, color: C.inkMuted } },
    { text: 'Junie', options: { fontSize: 11, color: C.inkDim, bold: true } },
    { text: '   ·   ', options: { fontSize: 11, color: C.inkMuted } },
    { text: 'Qodana', options: { fontSize: 11, color: C.inkDim, bold: true } },
    { text: '   ·   ', options: { fontSize: 11, color: C.inkMuted } },
    { text: 'TeamCity', options: { fontSize: 11, color: C.inkDim, bold: true } },
    { text: '   ·   ', options: { fontSize: 11, color: C.inkMuted } },
    { text: 'AI Assistant', options: { fontSize: 11, color: C.inkDim, bold: true } },
  ], {
    x: 0.55, y: 5.45, w: 9.0, h: 0.5,
    fontFace: SANS, valign: 'middle', margin: 0,
  });

  // Speaker line
  s.addText('孙涛 · Customer Success Engineer @ JetBrains', {
    x: 0.55, y: 6.75, w: 6.0, h: 0.40,
    fontSize: 11, fontFace: SANS, color: C.inkMuted, valign: 'middle', margin: 0,
  });

  // Tiny serif "01" page number — keep present even on cover
  s.addText('1', {
    x: W - 0.85, y: H - 0.55, w: 0.6, h: 0.30,
    fontSize: 13, fontFace: SERIF, italic: true, color: C.inkMuted,
    align: 'right', valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE 2 — Executive thesis · ValueFunnel
// =====================================================================
async function slide02_thesis(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'violet', page: 2, mandalaOpacity: 0.75 });

  T.addKicker(s, '核心论点', 0.55, 0.85);
  T.addH1(s, '最稀缺的资源已经转移', 0.55, 1.40, { size: 36, w: 5.6, h: 1.4 });

  // Three highlighted bullets
  const lineY = 3.20;
  const lineH = 0.45;
  const items = [
    { plain: '❏  最稀缺的资源不是生成 — 而是 ', hi: 'context 与控制权', tail: '' },
    { plain: '❏  最昂贵的任务不是写代码 — 而是把它写对', hi: '', tail: '' },
    { plain: '❏  关键问题不是 AI 对话 — 而是', hi: '经过验证地合入主干', tail: '' },
  ];
  items.forEach((it, i) => {
    const y = lineY + i * lineH;
    if (it.hi) {
      const runs = [
        { text: it.plain, options: { color: C.ink } },
        { text: it.hi, options: { color: '111111', highlight: C.highlight, bold: true } },
        ...(it.tail ? [{ text: it.tail, options: { color: C.ink } }] : []),
      ];
      s.addText(runs, {
        x: 0.55, y, w: 5.6, h: lineH,
        fontSize: 14, fontFace: SANS, valign: 'middle', margin: 0,
      });
    } else {
      s.addText(it.plain, {
        x: 0.55, y, w: 5.6, h: lineH,
        fontSize: 14, fontFace: SANS, color: C.ink, valign: 'middle', margin: 0,
      });
    }
  });

  // Tip line
  T.addTipChip(s, 0.55, 4.95);
  s.addText('AI 让写代码更便宜 — 但让 context、quality gate 与治理更昂贵。', {
    x: 1.05, y: 4.92, w: 5.2, h: 0.32,
    fontSize: 11.5, fontFace: SANS, italic: true, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // ValueFunnel mock: inverted-funnel layered shapes on the right
  // Two columns inside each row: label/sub on left, value tag on right (no overlap).
  const funnelX = 6.6, funnelTopW = 6.0, funnelY = 1.55;
  const stages = [
    { label: 'Generate',                sub: 'LLM tokens',                val: '便宜',   color: C.indigo },
    { label: 'Comprehend Context',      sub: 'PSI · engine awareness',    val: '关键',   color: C.violet },
    { label: 'Verify · Refactor · Test', sub: 'inspection + tests + gates', val: '昂贵',  color: C.magenta },
    { label: 'Merge to Trunk',          sub: 'Qodana · TeamCity policy',  val: '最珍贵', color: C.riderRed },
  ];
  stages.forEach((stg, i) => {
    const w = funnelTopW - i * 1.0;
    const x = funnelX + (funnelTopW - w) / 2;
    const y = funnelY + i * 1.05;
    s.addShape('rect', {
      x, y, w, h: 0.90,
      fill: { color: stg.color, transparency: 25 },
      line: { color: stg.color, width: 0.5 },
    });
    // Left label + sub, capped to leave room for the value tag on the right
    s.addText([
      { text: stg.label, options: { bold: true, color: C.ink, fontSize: 13, breakLine: true } },
      { text: stg.sub,   options: { color: C.inkDim, fontSize: 10 } },
    ], {
      x: x + 0.18, y, w: w - 1.30, h: 0.90,
      fontFace: SANS, valign: 'middle', margin: 0,
    });
    s.addText(stg.val, {
      x: x + w - 1.10, y, w: 0.95, h: 0.90,
      fontSize: 12, fontFace: SANS, bold: true, color: C.ink,
      align: 'right', valign: 'middle', margin: 0,
    });
  });
  s.addText('Value moves DOWN the funnel — that is where JetBrains earns its keep.', {
    x: funnelX, y: funnelY + 4 * 1.05 + 0.05, w: funnelTopW, h: 0.40,
    fontSize: 10, fontFace: SANS, italic: true, color: C.inkMuted,
    align: 'center', valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE 3 — Why generic AI breaks
// =====================================================================
async function slide03_genericAiBreaks(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'magenta', page: 3, mandalaOpacity: 0.75 });

  T.addKicker(s, 'The Problem', 0.55, 0.85);
  T.addH1(s, '通用 AI 为什么\n在 GameDev 中失灵', 0.55, 1.30, { size: 30, w: 4.8, h: 1.7 });

  s.addText('文件级的 AI 能生成语法正确的代码 — 但它看不到 engine 语义、资产依赖图，也看不到决定一次变更能否真正交付的交付约束。', {
    x: 0.55, y: 3.10, w: 4.6, h: 1.0,
    fontSize: 11.5, fontFace: SANS, color: C.inkDim, valign: 'top', margin: 0,
  });

  const cants = [
    'Blueprint / Prefab 执行图',
    'Engine reflection 与 macro 语义',
    'Perforce changelist 与文件锁 context',
    'Build-graph 性能回归信号',
  ];
  cants.forEach((c, i) => {
    const y = 4.20 + i * 0.32;
    s.addText('✗', { x: 0.55, y, w: 0.2, h: 0.30, fontSize: 13, fontFace: SANS, bold: true, color: 'FF4455', valign: 'middle', margin: 0 });
    s.addText(c, { x: 0.80, y, w: 4.5, h: 0.30, fontSize: 11.5, fontFace: SANS, color: C.inkMuted, valign: 'middle', margin: 0 });
  });

  // Bottom quote — red left border
  s.addShape('rect', { x: 0.55, y: 5.70, w: 0.04, h: 0.70, fill: { color: C.riderRed }, line: { type: 'none' } });
  s.addText([
    { text: 'GameDev 需要 ', options: {} },
    { text: 'system-aware', options: { highlight: C.highlight, color: '111111', bold: true } },
    { text: ' 的 AI — 而不是只看单文件的 AI。', options: {} },
  ], {
    x: 0.72, y: 5.70, w: 4.4, h: 0.70,
    fontSize: 11.5, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // Right: EngineQuadrants — 4 quadrants with engine awareness rules
  const qx = 5.80, qy = 1.0, qw = 7.0, qh = 5.6;
  // Outer glass panel
  s.addShape('rect', {
    x: qx, y: qy, w: qw, h: qh,
    fill: { color: 'FFFFFF', transparency: 89 },
    line: { color: 'FFFFFF', width: 0.75, transparency: 80 },
  });

  const qTitle = 'Engine-aware context · what generic AI cannot see';
  s.addText(qTitle, {
    x: qx + 0.25, y: qy + 0.15, w: qw - 0.5, h: 0.35,
    fontSize: 11, fontFace: SANS, bold: true, color: C.ink, charSpacing: 1,
    align: 'left', valign: 'middle', margin: 0,
  });

  const quadrants = [
    { engine: 'Unity', tone: C.cyan, items: ['MonoBehaviour lifecycle', 'Prefab variant 依赖', 'Burst / ECS 内联', 'ShaderLab 与 HLSL 符号'] },
    { engine: 'Unreal', tone: C.junieViolet, items: ['UPROPERTY · reflection', 'Blueprint EventGraph', 'Build.cs · macro 依赖', 'Perforce 文件锁 / changelist'] },
    { engine: 'Godot', tone: C.qodanaGreen, items: ['Node / Scene 关系', 'GDScript 类型推断', 'C# bindings 边界', 'Asset .import 依赖'] },
    { engine: 'Cross-Engine', tone: C.juniePink, items: ['Tests + coverage 回归', 'TeamCity 流水线 gate', 'Perforce 影响范围', 'Crash 与遥测关联'] },
  ];
  const cellW = (qw - 0.5) / 2, cellH = (qh - 0.85) / 2;
  quadrants.forEach((q, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const cx = qx + 0.25 + col * cellW;
    const cy = qy + 0.65 + row * cellH;
    s.addShape('rect', {
      x: cx, y: cy, w: cellW - 0.10, h: cellH - 0.10,
      fill: { color: '0E0E1A' }, line: { color: q.tone, width: 0.75, transparency: 35 },
    });
    s.addShape('rect', {
      x: cx, y: cy, w: 0.05, h: cellH - 0.10,
      fill: { color: q.tone }, line: { type: 'none' },
    });
    s.addText(q.engine, {
      x: cx + 0.20, y: cy + 0.12, w: cellW - 0.35, h: 0.32,
      fontSize: 14, fontFace: SANS, bold: true, color: q.tone, valign: 'middle', margin: 0,
    });
    q.items.forEach((it, j) => {
      s.addText('•  ' + it, {
        x: cx + 0.20, y: cy + 0.55 + j * 0.34, w: cellW - 0.35, h: 0.30,
        fontSize: 10.5, fontFace: SANS, color: C.ink, valign: 'middle', margin: 0,
      });
    });
  });
}

// =====================================================================
// SLIDE 4 — JetBrains stack · StackLayers
// =====================================================================
async function slide04_jetbrainsStack(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'violet', page: 4, mandalaPosition: 'left', mandalaOpacity: 0.6 });

  T.addKicker(s, '架构', 5.40, 0.85);
  T.addH1(s, 'JetBrains 技术栈', 5.40, 1.40, { size: 36, w: 7.0, h: 0.8 });

  s.addText('不是单点工具 — 而是一个从个人 IDE 到组织治理的完整生产层级。', {
    x: 5.40, y: 2.25, w: 7.2, h: 0.7,
    fontSize: 14, fontFace: SANS, color: C.inkDim, valign: 'top', margin: 0,
  });

  T.addTipChip(s, 5.40, 3.10);
  s.addText('关键词是「分层」，不是「产品罗列」。', {
    x: 5.90, y: 3.07, w: 6.0, h: 0.32,
    fontSize: 12, fontFace: SANS, italic: true, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // Stack layers — 4 horizontal tiers on the LEFT (since mandala is left, but layered tower is right)
  // Actually given mandala is left, put stack vertically on RIGHT side: x=5.4
  // Reverse: stack on right column, since mandala-left frees right
  // We already placed kicker on right. Let me put stack BELOW the text area.
  const lx = 5.40, ly = 3.70, lw = 7.2, lh = 0.78, gap = 0.10;
  const layers = [
    { name: 'Individual IDE',        tone: C.indigo,      products: ['Rider', 'ReSharper', 'dotUltimate', 'JetBrains Mono'] },
    { name: 'Agent Layer',           tone: C.junieViolet, products: ['Junie · ACP', 'AI Assistant', 'Agent Workbench', 'MCP Server'] },
    { name: 'Team Delivery',         tone: C.riderAmber,  products: ['Qodana', 'TeamCity', 'dotCover', 'YouTrack'] },
    { name: 'Organisation Control',  tone: C.qodanaGreen, products: ['IDE Services', 'AI Enterprise', 'Toolbox · License', 'Telemetry'] },
  ];
  layers.forEach((L, i) => {
    const y = ly + i * (lh + gap);
    s.addShape('rect', {
      x: lx, y, w: lw, h: lh,
      fill: { color: '0E0E1A' }, line: { color: L.tone, width: 0.75 },
    });
    s.addShape('rect', { x: lx, y, w: 0.06, h: lh, fill: { color: L.tone }, line: { type: 'none' } });
    s.addText(L.name, {
      x: lx + 0.22, y: y + 0.06, w: 2.4, h: lh - 0.10,
      fontSize: 13, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    s.addText(L.products.join('   ·   '), {
      x: lx + 2.70, y: y + 0.06, w: lw - 2.9, h: lh - 0.10,
      fontSize: 11, fontFace: MONO, color: C.inkDim, valign: 'middle', margin: 0,
    });
  });
}

// =====================================================================
// SLIDE 5 — Shared IDE hub
// =====================================================================
async function slide05_sharedIdeHub(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'violet', page: 5, mandalaOpacity: 0.85 });

  T.addKicker(s, '核心概念', 0.55, 0.85);
  T.addH1(s, 'Rider = Human + Agent\n共享的 IDE', 0.55, 1.30, { size: 32, w: 5.6, h: 1.6 });

  const shareds = [
    { bold: 'Shared Context', tail: ' — 双方看到相同的项目语义' },
    { bold: 'Shared Tooling', tail: ' — refactoring、tests、debugger、VCS 共享同一套基础设施' },
    { bold: 'Shared Control', tail: ' — 敏感操作可审计、可中止、可撤回（由 Agent Workbench 提供具体表面）' },
  ];
  shareds.forEach((it, i) => {
    const y = 3.40 + i * 0.65;
    s.addText([
      { text: '❏  ', options: { color: C.riderAmber, bold: true } },
      { text: it.bold, options: { bold: true, color: C.ink } },
      { text: it.tail, options: { color: C.inkDim } },
    ], {
      x: 0.55, y, w: 5.4, h: 0.60,
      fontSize: 13.5, fontFace: SANS, valign: 'top', margin: 0,
    });
  });

  // Right: SharedIdeHub diagram — hub-and-spokes
  const hubCx = 9.6, hubCy = 4.0, hubR = 0.95;
  // Hub
  s.addShape('ellipse', {
    x: hubCx - hubR, y: hubCy - hubR, w: hubR * 2, h: hubR * 2,
    fill: { color: '0E0E1A' }, line: { color: C.riderAmber, width: 1.5 },
  });
  s.addText('Rider', {
    x: hubCx - hubR, y: hubCy - 0.20, w: hubR * 2, h: 0.30,
    fontSize: 16, fontFace: SANS, bold: true, color: C.ink, align: 'center', valign: 'middle', margin: 0,
  });
  s.addText('PSI · refactor · debug · VCS', {
    x: hubCx - hubR - 0.2, y: hubCy + 0.06, w: hubR * 2 + 0.4, h: 0.28,
    fontSize: 9, fontFace: MONO, color: C.inkMuted, align: 'center', valign: 'middle', margin: 0,
  });

  // Spokes
  const spokes = [
    { label: 'Human', tone: C.indigo, dx: -2.4, dy: -2.4 },
    { label: 'Junie', tone: C.juniePink, dx: 2.4, dy: -2.4 },
    { label: 'Claude Code', tone: C.cyan, dx: 2.6, dy: 0 },
    { label: 'Codex', tone: C.qodanaGreen, dx: 2.4, dy: 2.0 },
    { label: 'Tech Artist', tone: C.junieViolet, dx: -2.4, dy: 2.0 },
  ];
  spokes.forEach(sp => {
    const sx = hubCx + sp.dx, sy = hubCy + sp.dy;
    // Connector line
    s.addShape('line', {
      x: hubCx, y: hubCy, w: sp.dx, h: sp.dy,
      line: { color: sp.tone, width: 1.0, dashType: 'dash' },
    });
    // Node
    s.addShape('roundRect', {
      x: sx - 0.65, y: sy - 0.22, w: 1.30, h: 0.44,
      fill: { color: '0E0E1A' }, line: { color: sp.tone, width: 1.0 }, rectRadius: 0.08,
    });
    s.addText(sp.label, {
      x: sx - 0.65, y: sy - 0.22, w: 1.30, h: 0.44,
      fontSize: 10.5, fontFace: SANS, bold: true, color: sp.tone,
      align: 'center', valign: 'middle', margin: 0,
    });
  });
}

// =====================================================================
// SLIDE 6 — ACP + MCP + Junie · ThreeLaneDiagram
// =====================================================================
async function slide06_acpMcpJunie(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'amber', page: 6, mandalaOpacity: 0.7 });

  T.addKicker(s, '官方路径', 0.55, 0.85);
  T.addH1(s, 'ACP + MCP + Junie', 0.55, 1.30, { size: 28, w: 4.6, h: 0.7 });

  const bullets = [
    { runs: [
      { text: 'ACP Registry', options: { bold: true, color: C.ink } },
      { text: ' — 在 Rider 内发现并接入 agent，无供应商锁定', options: { color: C.inkDim } },
    ] },
    { runs: [
      { text: '在集成 Workflow 中复用 ', options: { color: C.inkDim } },
      { text: 'Claude Code', options: { bold: true, color: C.ink } },
      { text: ' 或 ', options: { color: C.inkDim } },
      { text: 'Codex', options: { bold: true, color: C.ink } },
    ] },
    { runs: [
      { text: 'Built-in MCP Server', options: { bold: true, color: C.ink } },
      { text: ' — 把 Rider IDE 工具直接暴露给 agent', options: { color: C.inkDim } },
    ] },
    { runs: [
      { text: 'Junie', options: { bold: true, color: C.ink } },
      { text: ' — 规划并执行带 tests 与 terminal 的复杂多步任务', options: { color: C.inkDim } },
    ] },
  ];
  bullets.forEach((b, i) => {
    const y = 2.25 + i * 0.62;
    s.addText([
      { text: '●  ', options: { color: C.riderAmber, bold: true } },
      ...b.runs,
    ], {
      x: 0.55, y, w: 4.3, h: 0.58,
      fontSize: 11.5, fontFace: SANS, valign: 'top', margin: 0,
    });
  });

  T.addStatusChip(s, 0.55, 5.05, 'New');
  s.addText('Rider 2026.1 + Agent Workbench — 多 agent 驾驶舱已就绪', {
    x: 1.20, y: 5.02, w: 4.0, h: 0.30,
    fontSize: 11, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // Right: three lanes (ACP / MCP / Junie)
  const dx = 5.20, dy = 1.2, dw = 7.6, dh = 5.4;
  s.addShape('rect', {
    x: dx, y: dy, w: dw, h: dh,
    fill: { color: 'FFFFFF', transparency: 92 },
    line: { color: 'FFFFFF', width: 0.5, transparency: 85 },
  });
  s.addText('Three lanes — one cockpit', {
    x: dx + 0.2, y: dy + 0.10, w: dw - 0.4, h: 0.32,
    fontSize: 11, fontFace: SANS, bold: true, color: C.ink, charSpacing: 1,
    valign: 'middle', margin: 0,
  });

  const lanes = [
    {
      title: 'ACP', subtitle: 'Agent Coding Protocol', tone: C.indigo,
      side: 'Human → Agent',
      bullets: ['Vendor-neutral registry', 'Visible inside Rider', 'No lock-in for your stack'],
    },
    {
      title: 'MCP', subtitle: 'Model Context Protocol', tone: C.riderAmber,
      side: 'Rider → Agent',
      bullets: ['Built-in IDE MCP server', 'Tools: inspect · refactor · find-usages', 'Semantic PSI context'],
    },
    {
      title: 'Junie', subtitle: 'JetBrains agent runtime', tone: C.juniePink,
      side: 'Plan + Execute',
      bullets: ['Multi-step plans with tests', 'Persistent session + terminal', 'Lives next to your code'],
    },
  ];
  const laneW = (dw - 0.6) / 3;
  lanes.forEach((L, i) => {
    const lx = dx + 0.25 + i * laneW;
    const ly = dy + 0.65;
    const lh2 = dh - 0.80;
    s.addShape('rect', {
      x: lx, y: ly, w: laneW - 0.15, h: lh2,
      fill: { color: '0E0E1A' }, line: { color: L.tone, width: 0.75 },
    });
    s.addShape('rect', { x: lx, y: ly, w: laneW - 0.15, h: 0.06, fill: { color: L.tone }, line: { type: 'none' } });
    s.addText(L.title, {
      x: lx + 0.18, y: ly + 0.20, w: laneW - 0.4, h: 0.45,
      fontSize: 22, fontFace: SANS, bold: true, color: C.ink, valign: 'top', margin: 0,
    });
    s.addText(L.subtitle, {
      x: lx + 0.18, y: ly + 0.72, w: laneW - 0.4, h: 0.30,
      fontSize: 10, fontFace: MONO, color: L.tone, valign: 'top', margin: 0,
    });
    s.addText(L.side, {
      x: lx + 0.18, y: ly + 1.10, w: laneW - 0.4, h: 0.30,
      fontSize: 9.5, fontFace: MONO, color: C.inkMuted, charSpacing: 1, valign: 'top', margin: 0,
    });
    L.bullets.forEach((bb, j) => {
      s.addText('•  ' + bb, {
        x: lx + 0.18, y: ly + 1.55 + j * 0.45, w: laneW - 0.4, h: 0.40,
        fontSize: 10.5, fontFace: SANS, color: C.ink, valign: 'top', margin: 0,
      });
    });
  });
}

// =====================================================================
// SLIDE 6b — Agent Workbench
// =====================================================================
async function slide06b_agentWorkbench(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'amber', page: '6b', mandalaOpacity: 0.5 });

  T.addKicker(s, 'Official Cockpit', 0.55, 0.85);
  T.addStatusChip(s, 2.05, 0.83, 'New');
  T.addTagChip(s, 2.65, 0.83, 'Experimental', 1.1);

  s.addText('Agent Workbench', {
    x: 0.55, y: 1.30, w: 5.0, h: 0.55,
    fontSize: 28, fontFace: SANS, bold: true, color: C.ink, valign: 'top', margin: 0,
  });
  s.addText('Many agents — one IDE context', {
    x: 0.55, y: 1.85, w: 5.0, h: 0.40,
    fontSize: 18, fontFace: SANS, bold: true, color: C.inkDim, valign: 'top', margin: 0,
  });

  s.addText('"Run and manage AI coding agents — Codex, Claude, Junie, and more — directly inside your IDE."', {
    x: 0.55, y: 2.35, w: 4.7, h: 0.7,
    fontSize: 11, fontFace: SANS, italic: true, color: C.inkDim, valign: 'top', margin: 0,
  });

  const bullets = [
    { b: 'Persistent sessions', t: ' — agent state survives restarts and hand-offs' },
    { b: 'Automatic code context', t: ' — every tab sees the same PSI, refactor, debugger' },
    { b: 'Multi-agent in one cockpit', t: ' — Junie plans · Claude implements · Codex tests' },
  ];
  bullets.forEach((bl, i) => {
    s.addText([
      { text: '●  ', options: { color: C.riderAmber, bold: true } },
      { text: bl.b, options: { bold: true, color: C.ink } },
      { text: bl.t, options: { color: C.inkDim } },
    ], {
      x: 0.55, y: 3.25 + i * 0.55, w: 4.7, h: 0.55,
      fontSize: 11, fontFace: SANS, valign: 'top', margin: 0,
    });
  });

  s.addText([
    { text: 'Workbench', options: { highlight: C.highlight, color: '111111', bold: true } },
    { text: ' = human cockpit · MCP Steroid = agent runtime · complementary, not competing.', options: { italic: true, color: C.inkMuted } },
  ], {
    x: 0.55, y: 5.10, w: 4.8, h: 0.50,
    fontSize: 10, fontFace: SANS, valign: 'top', margin: 0,
  });

  // Right: cockpit mock — IDE chrome with tabs for three agents
  const cx = 5.50, cy = 0.95, cw = 7.4, cwh = 4.0;
  s.addShape('rect', { x: cx, y: cy, w: cw, h: cwh, fill: { color: '0B0B12' }, line: { color: 'FFFFFF', width: 0.5, transparency: 78 } });
  // Title bar
  s.addShape('rect', { x: cx, y: cy, w: cw, h: 0.30, fill: { color: '17171F' }, line: { type: 'none' } });
  // Window dots
  ['FF6052', 'F4BE3F', '34C84A'].forEach((col, i) => {
    s.addShape('ellipse', { x: cx + 0.10 + i * 0.22, y: cy + 0.08, w: 0.13, h: 0.13, fill: { color: col }, line: { type: 'none' } });
  });
  s.addText('Rider — Agent Workbench', {
    x: cx + 1.0, y: cy, w: cw - 1.5, h: 0.30,
    fontSize: 9, fontFace: MONO, color: C.inkMuted, align: 'center', valign: 'middle', margin: 0,
  });
  // Tab strip
  const tabs = [
    { name: 'Junie · Plan', tone: C.juniePink, active: true },
    { name: 'Claude · Implement', tone: C.cyan, active: false },
    { name: 'Codex · Tests', tone: C.qodanaGreen, active: false },
  ];
  tabs.forEach((tb, i) => {
    const tx = cx + 0.15 + i * 2.30;
    s.addShape('rect', {
      x: tx, y: cy + 0.40, w: 2.20, h: 0.40,
      fill: { color: tb.active ? '1A1A24' : '0F0F18' },
      line: { color: tb.tone, width: 0.75, transparency: tb.active ? 0 : 50 },
    });
    s.addShape('rect', { x: tx, y: cy + 0.40, w: 2.20, h: 0.045, fill: { color: tb.tone }, line: { type: 'none' } });
    s.addText(tb.name, {
      x: tx, y: cy + 0.40, w: 2.20, h: 0.40,
      fontSize: 10.5, fontFace: SANS, bold: true, color: tb.active ? C.ink : C.inkDim,
      align: 'center', valign: 'middle', margin: 0,
    });
  });

  // Body — active agent panel (Junie)
  const bx = cx + 0.20, by = cy + 0.95, bw = cw - 0.40, bh = cwh - 1.10;
  s.addShape('rect', { x: bx, y: by, w: bw, h: bh, fill: { color: '0F0F18' }, line: { color: 'FFFFFF', width: 0.5, transparency: 85 } });
  s.addText('PLAN · Inventory crash · 12 steps · 3 tools', {
    x: bx + 0.15, y: by + 0.10, w: bw - 0.3, h: 0.30,
    fontSize: 10, fontFace: MONO, color: C.juniePink, valign: 'middle', margin: 0,
  });
  const planSteps = [
    'inspect_code →  3 affected files',
    'find_usages →  PlayerInventory.Add',
    'apply_fix    →  null-guard + pool',
    'run_tests    →  PlayerInventoryTests',
    'verify_clean →  ✓ 0 new warnings',
  ];
  planSteps.forEach((p, i) => {
    s.addText(p, {
      x: bx + 0.20, y: by + 0.55 + i * 0.40, w: bw - 0.4, h: 0.32,
      fontSize: 11, fontFace: MONO, color: C.ink, valign: 'middle', margin: 0,
    });
  });

  // Featured use cases strip
  const ux = 5.50, uy = 5.10, uw = (7.4 - 2 * 0.10) / 3, uh = 1.15;
  const useCases = [
    { tag: '#1 Live Ops', body: '3 sessions on one crash · ~40 min context-rebuild saved' },
    { tag: '#5 A/B Bake-off', body: 'Junie vs Claude on same refactor · CTO-grade fairness' },
    { tag: '#8 Observatory', body: 'Per-team sessions · MCP-tool calls · policy-gate audit trail' },
  ];
  useCases.forEach((u, i) => {
    const x = ux + i * (uw + 0.10);
    s.addShape('roundRect', {
      x, y: uy, w: uw, h: uh,
      fill: { color: 'FFFFFF', transparency: 95 },
      line: { color: 'FFFFFF', width: 0.5, transparency: 80 }, rectRadius: 0.07,
    });
    s.addText(u.tag, {
      x: x + 0.15, y: uy + 0.10, w: uw - 0.3, h: 0.28,
      fontSize: 9, fontFace: SANS, bold: true, color: C.riderAmber, charSpacing: 2,
      valign: 'middle', margin: 0,
    });
    s.addText(u.body, {
      x: x + 0.15, y: uy + 0.40, w: uw - 0.3, h: uh - 0.50,
      fontSize: 10, fontFace: SANS, color: C.inkDim, valign: 'top', margin: 0,
    });
  });
}

// =====================================================================
// SLIDE 7 — MCP Steroid spotlight
// =====================================================================
async function slide07_mcpSteroid(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'amber', page: 7, mandalaOpacity: 0.8 });

  T.addKicker(s, '前沿路径', 0.55, 0.85);
  T.addStatusChip(s, 2.05, 0.83, 'Independent Research', 1.7);

  T.addH1(s, 'MCP Steroid 即 Skill Factory', 0.55, 1.35, { size: 36, w: 10.0, h: 0.8 });

  // Spotlight diagram: IDE → Skill capsule → Agent
  const sx = 0.55, sy = 2.6, sw = W - 1.10, sh = 4.4;
  s.addShape('rect', {
    x: sx, y: sy, w: sw, h: sh,
    fill: { color: 'FFFFFF', transparency: 94 },
    line: { color: C.riderAmber, width: 0.75, transparency: 40 },
  });

  // Three blocks: IDE Capability · Skill capsule · Agent runtime
  const colW = (sw - 0.6) / 3;
  const blocks = [
    { name: 'Rider IDE Capability', tone: C.indigo, items: ['Refactor', 'Inspection', 'PSI', 'Debugger', 'Tests', 'VCS state'] },
    { name: 'Skill Capsule', tone: C.riderAmber, items: ['Composable', 'Versioned', 'Studio-owned', 'Telemetry hooks', 'Policy gate', 'Promotable'] },
    { name: 'Any Agent Runtime', tone: C.juniePink, items: ['Junie', 'Claude Code', 'Codex', 'Internal agent', 'Future runtime', 'Vendor-neutral'] },
  ];
  blocks.forEach((b, i) => {
    const bx = sx + 0.3 + i * (colW + 0.25);
    s.addShape('rect', { x: bx, y: sy + 0.4, w: colW, h: sh - 0.8, fill: { color: '0E0E1A' }, line: { color: b.tone, width: 1 } });
    s.addShape('rect', { x: bx, y: sy + 0.4, w: colW, h: 0.07, fill: { color: b.tone }, line: { type: 'none' } });
    s.addText(b.name, {
      x: bx + 0.20, y: sy + 0.55, w: colW - 0.4, h: 0.45,
      fontSize: 16, fontFace: SANS, bold: true, color: C.ink, valign: 'top', margin: 0,
    });
    b.items.forEach((it, j) => {
      const row = Math.floor(j / 2), col = j % 2;
      s.addText('• ' + it, {
        x: bx + 0.20 + col * (colW / 2 - 0.1), y: sy + 1.20 + row * 0.45, w: colW / 2 - 0.20, h: 0.38,
        fontSize: 11, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
      });
    });
  });

  // Arrows between blocks
  for (let i = 0; i < 2; i++) {
    const ax = sx + 0.3 + (i + 1) * colW + i * 0.25;
    const ay = sy + sh / 2;
    s.addShape('rightTriangle', {
      x: ax, y: ay - 0.10, w: 0.25, h: 0.20,
      fill: { color: C.riderAmber }, line: { type: 'none' }, rotate: 90,
    });
  }
}

// =====================================================================
// SLIDE 8 — Workflow 0: tool generation
// =====================================================================
async function slide08_workflow0(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'amber', page: 8, mandalaOpacity: 0.7 });

  T.addKicker(s, 'Workflow 0', 0.55, 0.85, { w: 1.30 });
  T.addTagChip(s, 1.95, 0.83, 'Alpha', 0.7);
  T.addH1(s, '人类需求 → 按需生成工具', 0.55, 1.35, { size: 36, w: 10, h: 0.8 });
  s.addText('很多轻量工具会由 agent 在共享 IDE context 中即时生成。', {
    x: 0.55, y: 2.20, w: 11.0, h: 0.45,
    fontSize: 13.5, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // Workflow steps row
  const steps = [
    { label: 'Prompt', detail: '人类需求', tone: C.indigo },
    { label: 'Context', detail: 'Shared IDE 激活', tone: C.junieViolet },
    { label: 'Skill', detail: 'Agent 生成工具', tone: C.riderAmber },
    { label: 'Review', detail: '人类校验', tone: C.juniePink },
  ];
  const sy = 3.30, sh = 1.5;
  const colW = (W - 1.10 - 0.6) / 4;
  steps.forEach((st, i) => {
    const x = 0.55 + i * (colW + 0.20);
    s.addShape('rect', {
      x, y: sy, w: colW, h: sh,
      fill: { color: '0E0E1A' }, line: { color: st.tone, width: 1 },
    });
    s.addShape('rect', { x, y: sy, w: colW, h: 0.08, fill: { color: st.tone }, line: { type: 'none' } });
    s.addText('STEP ' + (i + 1), {
      x: x + 0.20, y: sy + 0.20, w: colW - 0.4, h: 0.30,
      fontSize: 10, fontFace: MONO, color: st.tone, charSpacing: 2, valign: 'top', margin: 0,
    });
    s.addText(st.label, {
      x: x + 0.20, y: sy + 0.55, w: colW - 0.4, h: 0.40,
      fontSize: 18, fontFace: SANS, bold: true, color: C.ink, valign: 'top', margin: 0,
    });
    s.addText(st.detail, {
      x: x + 0.20, y: sy + 0.98, w: colW - 0.4, h: 0.40,
      fontSize: 11.5, fontFace: SANS, color: C.inkDim, valign: 'top', margin: 0,
    });
    if (i < steps.length - 1) {
      s.addShape('rightTriangle', {
        x: x + colW + 0.02, y: sy + sh / 2 - 0.08, w: 0.16, h: 0.16,
        fill: { color: C.riderAmber }, line: { type: 'none' }, rotate: 90,
      });
    }
  });

  // Tip line
  T.addTipChip(s, 0.55, 5.50);
  s.addText('示例：命名规范检查 · 升级前依赖扫描 · Prefab / Blueprint 影响分析', {
    x: 1.05, y: 5.47, w: 10.0, h: 0.32,
    fontSize: 12, fontFace: SANS, italic: true, color: C.inkDim, valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE 9 — Workflow 1: Issue → Plan
// =====================================================================
async function slide09_workflow1(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'violet', page: 9, mandalaOpacity: 0.75 });

  T.addKicker(s, 'Workflow 1', 0.55, 0.85);
  s.addText([
    { text: 'Issue → ', options: { breakLine: true } },
    { text: 'Impact Analysis → ', options: { breakLine: true } },
    { text: 'Plan →', options: {} },
  ], {
    x: 0.55, y: 1.30, w: 4.8, h: 2.0,
    fontSize: 26, fontFace: SANS, bold: true, color: C.ink, valign: 'top', margin: 0,
    paraSpaceAfter: 2,
  });

  const bullets = [
    [
      { text: '任何来源 — YouTrack、Jira、原生 GitHub 插件、Slack，或 ', options: { color: C.inkDim } },
      { text: '任意 MCP connector / Agent Skills', options: { highlight: C.highlight, color: '111111', bold: true } },
    ],
    [
      { text: 'Rider 调用 agent，', options: { color: C.inkDim } },
      { text: '同时', options: { italic: true, color: C.inkDim } },
      { text: '暴露 ', options: { color: C.inkDim } },
      { text: 'Rider MCP Server', options: { highlight: C.highlight, color: '111111', bold: true } },
      { text: ' — agent 获得精确的语义 context，消耗更少 token，每次生成的变更都在 IDE 内 ', options: { color: C.inkDim } },
      { text: '实时评审', options: { highlight: C.highlight, color: '111111', bold: true } },
    ],
    [
      { text: 'Agent 产出可审阅的 plan，', options: { color: C.inkDim } },
      { text: '并', options: { italic: true, color: C.inkDim } },
      { text: '持续丰富 ', options: { color: C.inkDim } },
      { text: '企业知识库', options: { highlight: C.highlight, color: '111111', bold: true } },
      { text: ' — 每解决一个 issue，团队智能都在复利积累', options: { color: C.inkDim } },
    ],
  ];
  bullets.forEach((b, i) => {
    s.addText([
      { text: '●  ', options: { color: C.riderAmber, bold: true } },
      ...b,
    ], {
      x: 0.55, y: 3.65 + i * 0.90, w: 4.6, h: 0.90,
      fontSize: 10.5, fontFace: SANS, valign: 'top', margin: 0,
    });
  });

  T.addTipChip(s, 0.55, 6.40);
  s.addText([
    { text: '第一步：', options: {} },
    { text: '理解', options: { italic: true } },
    { text: '。最后一步：', options: {} },
    { text: '知识沉淀', options: { italic: true } },
    { text: '。', options: {} },
  ], {
    x: 1.05, y: 6.37, w: 4.5, h: 0.32,
    fontSize: 11, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // Right: IssueToPlanFlow — pipeline
  const px = 5.40, py = 0.95, pw = 7.6, ph = 5.8;
  s.addShape('rect', { x: px, y: py, w: pw, h: ph, fill: { color: 'FFFFFF', transparency: 94 }, line: { color: 'FFFFFF', width: 0.5, transparency: 82 } });
  s.addText('Issue-to-Plan Flow', {
    x: px + 0.2, y: py + 0.12, w: pw - 0.4, h: 0.30,
    fontSize: 11, fontFace: SANS, bold: true, color: C.ink, charSpacing: 1, valign: 'middle', margin: 0,
  });

  // Top row — sources
  const sourcesY = py + 0.65;
  const sources = ['YouTrack', 'Jira', 'GitHub', 'Slack', 'Custom MCP'];
  const srcW = (pw - 0.6) / sources.length;
  sources.forEach((src, i) => {
    const x = px + 0.30 + i * srcW;
    s.addShape('roundRect', {
      x, y: sourcesY, w: srcW - 0.10, h: 0.60,
      fill: { color: '0E0E1A' }, line: { color: C.indigo, width: 0.75 }, rectRadius: 0.06,
    });
    s.addText(src, {
      x, y: sourcesY, w: srcW - 0.10, h: 0.60,
      fontSize: 11, fontFace: SANS, bold: true, color: C.ink, align: 'center', valign: 'middle', margin: 0,
    });
  });

  // Middle — Rider hub
  s.addShape('rect', {
    x: px + 0.30, y: py + 1.65, w: pw - 0.6, h: 1.10,
    fill: { color: C.riderAmber, transparency: 88 },
    line: { color: C.riderAmber, width: 1 },
  });
  s.addText('Rider · MCP Server · PSI semantic context', {
    x: px + 0.30, y: py + 1.65, w: pw - 0.6, h: 0.60,
    fontSize: 14, fontFace: SANS, bold: true, color: C.ink, align: 'center', valign: 'middle', margin: 0,
  });
  s.addText('inspect_code · find_usages · psi_tree · refactor · apply_fix', {
    x: px + 0.30, y: py + 2.15, w: pw - 0.6, h: 0.55,
    fontSize: 10, fontFace: MONO, color: C.ink, align: 'center', valign: 'middle', margin: 0,
  });

  // Bottom — agent + plan + knowledge
  const bottomY = py + 3.05;
  const downs = [
    { name: 'Agent', detail: 'Junie · Claude · Codex', tone: C.juniePink },
    { name: 'Plan', detail: 'Reviewable · Auditable', tone: C.cyan },
    { name: 'Knowledge Base', detail: 'Compounds over time', tone: C.qodanaGreen },
  ];
  const dW = (pw - 0.6 - 0.6) / 3;
  downs.forEach((dn, i) => {
    const x = px + 0.30 + i * (dW + 0.30);
    s.addShape('rect', {
      x, y: bottomY, w: dW, h: 1.10,
      fill: { color: '0E0E1A' }, line: { color: dn.tone, width: 1 },
    });
    s.addShape('rect', { x, y: bottomY, w: 0.06, h: 1.10, fill: { color: dn.tone }, line: { type: 'none' } });
    s.addText(dn.name, {
      x: x + 0.18, y: bottomY + 0.10, w: dW - 0.3, h: 0.40,
      fontSize: 14, fontFace: SANS, bold: true, color: C.ink, valign: 'top', margin: 0,
    });
    s.addText(dn.detail, {
      x: x + 0.18, y: bottomY + 0.55, w: dW - 0.3, h: 0.45,
      fontSize: 10.5, fontFace: SANS, color: C.inkDim, valign: 'top', margin: 0,
    });
  });
  s.addText('Feedback loop — knowledge enriches the next plan', {
    x: px + 0.30, y: py + ph - 0.55, w: pw - 0.6, h: 0.35,
    fontSize: 10, fontFace: SANS, italic: true, color: C.inkMuted, align: 'center', valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE 10 — Workflow 2: Gameplay (Unity/Unreal/Godot)
// =====================================================================
async function slide10_workflow2(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'cyan', page: 10, mandalaOpacity: 0.65 });

  T.addKicker(s, 'Workflow 2', 0.55, 0.85);
  T.addH1(s, 'Gameplay / 功能实现', 0.55, 1.30, { size: 34, w: 11, h: 0.75 });

  // Engine cards
  const engines = [
    { name: 'Unity', stack: 'C# + Shader', tone: C.cyan, items: ['内联 profiling 提示', 'Quick-fix 与 inspection', 'Shader 文件支持', 'Unity tests 与 debugger'] },
    { name: 'Unreal', stack: 'C++ / BP', tone: C.junieViolet, items: ['Engine 级 debugger', 'Mobile / iOS 部署目标', 'Macro 与 Reflection 洞察', 'Blueprint 感知'] },
    { name: 'Godot', stack: 'C# + GDScript', tone: C.qodanaGreen, items: ['C# 语言支持', 'GDScript 导航', '调试工具', '一致的工作区'] },
  ];
  const ex = 0.55, ey = 2.20, ew = (W - 1.10 - 0.5) / 3, eh = 2.30;
  engines.forEach((e, i) => {
    const x = ex + i * (ew + 0.25);
    s.addShape('rect', {
      x, y: ey, w: ew, h: eh,
      fill: { color: 'FFFFFF', transparency: 84 },
      line: { color: e.tone, width: 1 },
    });
    s.addText(e.name, {
      x: x + 0.20, y: ey + 0.20, w: ew - 1.6, h: 0.40,
      fontSize: 18, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    // stack chip
    T.addStatusChip(s, x + ew - 1.40, ey + 0.27, e.stack, 1.20);
    e.items.forEach((it, j) => {
      s.addText('❏  ' + it, {
        x: x + 0.20, y: ey + 0.85 + j * 0.32, w: ew - 0.4, h: 0.28,
        fontSize: 11, fontFace: SANS, color: C.ink, valign: 'middle', margin: 0,
      });
    });
  });

  // Bottom row — three feature labels (placeholders for screenshots)
  const flY = 4.80;
  const features = [
    { label: 'Unity Profiling', captions: ['Inline profiler hints', 'Sampling allocations'] },
    { label: 'Unreal Mobile Debug', captions: ['Mobile build target', 'iOS device debugging'] },
    { label: 'Shader Debugging', captions: ['RenderDoc integration', 'Static shader analysis'] },
  ];
  features.forEach((f, i) => {
    const x = ex + i * (ew + 0.25);
    s.addText(f.label, {
      x, y: flY, w: ew, h: 0.30,
      fontSize: 10, fontFace: SANS, bold: true, color: C.inkMuted, charSpacing: 1.5, valign: 'middle', margin: 0,
    });
    f.captions.forEach((cap, j) => {
      const ry2 = flY + 0.35 + j * 0.85;
      s.addShape('rect', {
        x, y: ry2, w: ew, h: 0.75,
        fill: { color: '0E0E1A' }, line: { color: 'FFFFFF', width: 0.5, transparency: 75 },
      });
      s.addText(cap, {
        x: x + 0.15, y: ry2, w: ew - 0.3, h: 0.75,
        fontSize: 11, fontFace: MONO, color: C.inkDim, valign: 'middle', margin: 0,
      });
    });
  });

  s.addText('Engine-aware context 让 AI 真正有用 — 而不只是可用。', {
    x: 0.55, y: H - 0.55, w: W - 1.6, h: 0.30,
    fontSize: 10.5, fontFace: SANS, italic: true, color: C.inkMuted, align: 'center', valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE 11 — Workflow 3: Refactor & Inspection Bridge
// =====================================================================
async function slide11_workflow3(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'amber', page: 11, mandalaOpacity: 0.65 });

  T.addKicker(s, 'Workflow 3', 0.55, 0.85);
  T.addH1(s, '以 Inspection 为枢纽的代码评审', 0.55, 1.30, { size: 30, w: 8.6, h: 0.75 });

  s.addText([
    { text: 'AI 以机器速度产出代码。', options: { color: C.inkDim } },
    { text: '逐 diff 评审无法扩展。', options: { bold: true, color: C.ink } },
    { text: ' Rider 居中调度 — 把 engine-aware 的 inspection 同时暴露给', options: { color: C.inkDim } },
    { text: '双方', options: { italic: true, color: C.inkDim } },
    { text: '。', options: { color: C.inkDim } },
  ], {
    x: 9.30, y: 0.95, w: 3.6, h: 1.4,
    fontSize: 11, fontFace: SANS, valign: 'top', margin: 0,
  });

  // Three-surface bridge: Agent · Rider PSI core · Human
  const bY = 2.40, bH = 3.8;
  const colW = (W - 1.10 - 0.50) / 3;
  const cols = [
    {
      title: 'Junie · MCP tools', side: 'AGENT 侧', tone: C.junieViolet,
      readTools: ['inspect_code', 'find_usages', 'psi_tree', 'list_rules'],
      writeTools: ['apply_fix', 'refactor', 'verify_clean'],
      foot: '提交前根据 engine 规则自我纠正',
    },
    {
      title: 'Rider · PSI engine', side: 'INSPECTION 枢纽', tone: C.riderAmber,
      readTools: ['locate', 'analyze', 'expose', 'share'],
      writeTools: ['Unity · GC / Burst', 'Unreal · BP · UPROPERTY', 'Godot · GDScript typing'],
      foot: 'ReSharper · 20+ 年的 engine-aware 规则',
    },
    {
      title: 'Qodana · aspect 视图', side: 'HUMAN 侧', tone: C.qodanaGreen,
      readTools: ['质量趋势', '阻塞项', '漏出', '速度'],
      writeTools: ['规则策略', '结论', 'TeamCity gate · 合入编排'],
      foot: '操作的是 policy — 而不是 diff 队列',
    },
  ];
  cols.forEach((c, i) => {
    const x = 0.55 + i * (colW + 0.25);
    s.addShape('rect', {
      x, y: bY, w: colW, h: bH,
      fill: { color: 'FFFFFF', transparency: 94 },
      line: { color: c.tone, width: 1 },
    });
    s.addText(c.side, {
      x: x + 0.18, y: bY + 0.18, w: colW - 0.36, h: 0.30,
      fontSize: 9.5, fontFace: MONO, color: c.tone, charSpacing: 2, valign: 'middle', margin: 0,
    });
    s.addText(c.title, {
      x: x + 0.18, y: bY + 0.45, w: colW - 0.36, h: 0.40,
      fontSize: 15, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    // Read column
    s.addText('READ · CONTEXT', {
      x: x + 0.18, y: bY + 1.05, w: colW - 0.36, h: 0.22,
      fontSize: 9, fontFace: MONO, color: C.inkMuted, charSpacing: 1.5, valign: 'middle', margin: 0,
    });
    c.readTools.forEach((t, j) => {
      const row = Math.floor(j / 2), col = j % 2;
      const tx = x + 0.18 + col * ((colW - 0.36) / 2);
      const ty = bY + 1.30 + row * 0.36;
      s.addShape('rect', {
        x: tx, y: ty, w: (colW - 0.40) / 2 - 0.04, h: 0.32,
        fill: { color: 'FFFFFF', transparency: 92 }, line: { color: 'FFFFFF', width: 0.4, transparency: 78 },
      });
      s.addText(t, {
        x: tx + 0.08, y: ty, w: (colW - 0.40) / 2 - 0.20, h: 0.32,
        fontSize: 9.5, fontFace: MONO, color: C.ink, valign: 'middle', margin: 0,
      });
    });
    // Write column
    s.addText(i === 1 ? 'ENGINE DEPTH' : 'WRITE · SAFE-APPLY', {
      x: x + 0.18, y: bY + 2.20, w: colW - 0.36, h: 0.22,
      fontSize: 9, fontFace: MONO, color: C.inkMuted, charSpacing: 1.5, valign: 'middle', margin: 0,
    });
    c.writeTools.forEach((t, j) => {
      const ty = bY + 2.48 + j * 0.34;
      s.addShape('rect', {
        x: x + 0.18, y: ty, w: colW - 0.36, h: 0.30,
        fill: { color: 'FFFFFF', transparency: 92 }, line: { color: 'FFFFFF', width: 0.4, transparency: 78 },
      });
      s.addText(t, {
        x: x + 0.30, y: ty, w: colW - 0.50, h: 0.30,
        fontSize: 9.5, fontFace: i === 1 ? SANS : MONO, color: C.ink, valign: 'middle', margin: 0,
      });
    });
    s.addText(c.foot, {
      x: x + 0.18, y: bY + bH - 0.40, w: colW - 0.36, h: 0.30,
      fontSize: 9.5, fontFace: SANS, italic: true, color: C.inkMuted, valign: 'middle', margin: 0,
    });
  });

  // Compare strip
  const cY = 6.40, cH = 0.55;
  s.addShape('rect', {
    x: 0.55, y: cY, w: (W - 1.10 - 0.30) / 2, h: cH,
    fill: { color: C.riderRed, transparency: 88 }, line: { color: C.riderRed, width: 0.5, transparency: 60 },
  });
  s.addText('✗  无 context 的 agent — 盲修 · 破坏 reflection · 缺陷漏出', {
    x: 0.75, y: cY, w: (W - 1.10 - 0.30) / 2 - 0.4, h: cH,
    fontSize: 11, fontFace: SANS, color: C.ink, valign: 'middle', margin: 0,
  });
  s.addShape('rect', {
    x: 0.55 + (W - 1.10 - 0.30) / 2 + 0.30, y: cY, w: (W - 1.10 - 0.30) / 2, h: cH,
    fill: { color: C.qodanaGreen, transparency: 88 }, line: { color: C.qodanaGreen, width: 0.5, transparency: 60 },
  });
  s.addText([
    { text: '✓  Inspection 中介 — 基于 PSI · engine-aware · 人类可审计的 ', options: { color: C.ink } },
    { text: 'quick-fix 路径', options: { highlight: C.highlight, color: '111111', bold: true } },
  ], {
    x: 0.55 + (W - 1.10 - 0.30) / 2 + 0.50, y: cY, w: (W - 1.10 - 0.30) / 2 - 0.4, h: cH,
    fontSize: 11, fontFace: SANS, valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE 12 — Workflow 4: Quality Gate
// =====================================================================
async function slide12_workflow4(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'green', page: 12, mandalaOpacity: 0.75 });

  T.addKicker(s, 'Workflow 4', 0.55, 0.85);
  T.addStatusChip(s, 1.65, 0.83, 'Quality', 0.85);
  T.addH1(s, '合入前质量门禁', 0.55, 1.35, { size: 36, w: 10, h: 0.85 });

  s.addText('JetBrains 不只帮你写 — 它帮你交付。', {
    x: 0.55, y: 2.20, w: 11, h: 0.40,
    fontSize: 14, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // Quality gate pipeline
  const stages = [
    { name: 'Author', sub: 'Generate · refactor', tone: C.indigo },
    { name: 'Local Inspect', sub: 'Rider · ReSharper · PSI', tone: C.cyan },
    { name: 'Pre-commit', sub: 'Test · type · lint', tone: C.junieViolet },
    { name: 'CI Inspect', sub: 'Qodana semantic rules', tone: C.qodanaGreen },
    { name: 'Quality Gate', sub: 'TeamCity policy', tone: C.riderRed },
    { name: 'Trunk', sub: 'Auditable merge', tone: C.riderAmber },
  ];
  const pY = 3.00, pH = 1.75;
  const colW = (W - 1.10 - 0.8) / stages.length;
  stages.forEach((st, i) => {
    const x = 0.55 + i * (colW + 0.16);
    s.addShape('rect', {
      x, y: pY, w: colW, h: pH,
      fill: { color: '0E0E1A' }, line: { color: st.tone, width: 1 },
    });
    s.addShape('rect', { x, y: pY, w: colW, h: 0.07, fill: { color: st.tone }, line: { type: 'none' } });
    s.addText(String(i + 1).padStart(2, '0'), {
      x: x + 0.15, y: pY + 0.15, w: colW - 0.3, h: 0.28,
      fontSize: 10, fontFace: MONO, color: st.tone, valign: 'top', margin: 0,
    });
    s.addText(st.name, {
      x: x + 0.15, y: pY + 0.45, w: colW - 0.3, h: 0.50,
      fontSize: 14, fontFace: SANS, bold: true, color: C.ink, valign: 'top', margin: 0,
    });
    s.addText(st.sub, {
      x: x + 0.15, y: pY + 1.00, w: colW - 0.3, h: 0.70,
      fontSize: 10, fontFace: SANS, color: C.inkDim, valign: 'top', margin: 0,
    });
    if (i < stages.length - 1) {
      s.addShape('rightTriangle', {
        x: x + colW + 0.02, y: pY + pH / 2 - 0.06, w: 0.12, h: 0.12,
        fill: { color: C.qodanaGreen }, line: { type: 'none' }, rotate: 90,
      });
    }
  });

  // Bottom three lanes
  const lanes = [
    { name: 'Dev-time', tag: 'Rider', body: 'inspection 在本地拦截问题', tone: C.cyan },
    { name: 'Team-time', tag: 'Qodana', body: '把语义规则带到 CI', tone: C.qodanaGreen },
    { name: 'Ship-time', tag: 'TeamCity', body: '运行流水线与反馈闭环', tone: C.riderAmber },
  ];
  const lY = 5.35, lH = 1.4;
  const lW = (W - 1.10 - 0.4) / 3;
  lanes.forEach((L, i) => {
    const x = 0.55 + i * (lW + 0.20);
    s.addShape('rect', {
      x, y: lY, w: lW, h: lH,
      fill: { color: 'FFFFFF', transparency: 94 }, line: { color: L.tone, width: 0.75 },
    });
    s.addText(L.name, {
      x: x + 0.20, y: lY + 0.15, w: lW - 0.4, h: 0.40,
      fontSize: 16, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    s.addText(L.tag, {
      x: x + 0.20, y: lY + 0.55, w: lW - 0.4, h: 0.32,
      fontSize: 11, fontFace: MONO, color: L.tone, valign: 'middle', margin: 0,
    });
    s.addText(L.body, {
      x: x + 0.20, y: lY + 0.85, w: lW - 0.4, h: 0.45,
      fontSize: 11.5, fontFace: SANS, color: C.inkDim, valign: 'top', margin: 0,
    });
  });
}

// =====================================================================
// SLIDE 13 — Workflow 5: Perf triage
// =====================================================================
async function slide13_workflow5(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'cyan', page: 13, mandalaOpacity: 0.7 });

  T.addKicker(s, 'Workflow 5', 0.55, 0.85);
  T.addTagChip(s, 1.65, 0.83, 'Profiling 闭环', 1.4);

  T.addH1(s, '复杂性能问题的诊断\n在 dotUltimate 内闭环', 0.55, 1.35, { size: 28, w: 4.8, h: 1.7 });

  s.addShape('rect', {
    x: 0.55, y: 3.30, w: 4.6, h: 1.6,
    fill: { color: '0E0E1A' }, line: { color: 'FFFFFF', width: 0.5, transparency: 75 },
  });
  s.addText([
    { text: '支持边界：', options: { bold: true, color: C.ink } },
    { text: '\n', options: {} },
    { text: '原生 Engine profiler 仍是 GPU、渲染、资产和遥测的事实来源。', options: { color: C.inkDim } },
  ], {
    x: 0.75, y: 3.40, w: 4.2, h: 1.4,
    fontSize: 11.5, fontFace: SANS, valign: 'top', margin: 0,
  });

  T.addTipChip(s, 0.55, H - 0.65);
  s.addText('原生 profiler + JetBrains profiler：运行时证据变成代码导航、托管内存诊断、测试覆盖率，以及 CI 回归 gate。', {
    x: 1.05, y: H - 0.68, w: W - 2.0, h: 0.35,
    fontSize: 11, fontFace: SANS, italic: true, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // Right: matrix of profilers
  const mx = 5.40, my = 1.20, mw = 7.6, mh = 5.4;
  s.addShape('rect', { x: mx, y: my, w: mw, h: mh, fill: { color: 'FFFFFF', transparency: 94 }, line: { color: 'FFFFFF', width: 0.5, transparency: 80 } });
  s.addText('Profiler Workflow Matrix', {
    x: mx + 0.20, y: my + 0.12, w: mw - 0.4, h: 0.30,
    fontSize: 11, fontFace: SANS, bold: true, color: C.ink, charSpacing: 1, valign: 'middle', margin: 0,
  });

  // Columns: Symptom (native) → JetBrains (managed) → Action
  const headers = ['Symptom (Engine profiler)', 'Diagnose (dotUltimate)', 'Action (Rider)'];
  const rows = [
    ['Unity GC spike',          'dotTrace · Unity',                'Object pool / cache refactor'],
    ['Unreal stutter',          'dotTrace · Unreal',               'Hot-path extract C++'],
    ['Managed heap growth',     'dotMemory',                       'Leak diff + retention path'],
    ['Coverage blind spot',     'dotCover · managed',              'Add tests + verify'],
    ['CI regression',           'TeamCity perf gate',              'Block merge · alert team'],
  ];
  const colsW = [(mw - 0.6) * 0.32, (mw - 0.6) * 0.34, (mw - 0.6) * 0.34];
  const tStartY = my + 0.55;
  headers.forEach((h, ci) => {
    let x = mx + 0.30;
    for (let k = 0; k < ci; k++) x += colsW[k];
    s.addText(h, {
      x, y: tStartY, w: colsW[ci] - 0.10, h: 0.36,
      fontSize: 10, fontFace: SANS, bold: true, color: C.cyan, charSpacing: 1.3, valign: 'middle', margin: 0,
    });
  });
  rows.forEach((row, ri) => {
    const y = tStartY + 0.50 + ri * 0.85;
    row.forEach((cell, ci) => {
      let x = mx + 0.30;
      for (let k = 0; k < ci; k++) x += colsW[k];
      s.addShape('rect', {
        x, y, w: colsW[ci] - 0.10, h: 0.75,
        fill: { color: '0E0E1A' }, line: { color: 'FFFFFF', width: 0.4, transparency: 80 },
      });
      s.addText(cell, {
        x: x + 0.12, y, w: colsW[ci] - 0.30, h: 0.75,
        fontSize: 10.5, fontFace: ci === 1 ? MONO : SANS, color: ci === 1 ? C.ink : C.inkDim, valign: 'middle', margin: 0,
      });
    });
  });
}

// =====================================================================
// SLIDE 13b — Workflow 6: Multi-agent
// =====================================================================
async function slide13b_workflow6(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'amber', page: '13b', mandalaOpacity: 0.55 });

  T.addKicker(s, 'Workflow 6', 0.55, 0.85);
  T.addTagChip(s, 1.65, 0.83, 'Multi-Agent', 1.1);
  T.addStatusChip(s, 2.85, 0.83, 'New');

  T.addH1(s, 'Multi-Agent Bake-off & Follow-the-Sun', 0.55, 1.35, { size: 28, w: 11, h: 0.75 });
  s.addText('Three patterns the Workbench unlocks — none of them existed before persistent multi-agent sessions.', {
    x: 0.55, y: 2.10, w: 11.5, h: 0.40,
    fontSize: 11.5, fontFace: SANS, italic: true, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // Three patterns as lane cards
  const patterns = [
    {
      name: 'A/B Bake-off', tone: C.juniePink,
      lanes: [
        { who: 'Junie',  step1: 'Plan + tests', step2: 'Apply (variant A)', step3: 'Verify' },
        { who: 'Claude', step1: 'Plan + tests', step2: 'Apply (variant B)', step3: 'Verify' },
      ],
      result: 'CTO-grade fairness · same context, same gate',
    },
    {
      name: 'Follow-the-Sun', tone: C.cyan,
      lanes: [
        { who: 'Tokyo',    step1: 'Investigate · Plan',         step2: 'inspection + tools',  step3: 'Hand-off (session persists)' },
        { who: 'Helsinki', step1: 'Pick up plan tree',         step2: 'Continue refactor',   step3: 'Verify · merge' },
      ],
      result: 'Persistent sessions cross time zones',
    },
    {
      name: 'Junie + Claude orchestration', tone: C.riderAmber,
      lanes: [
        { who: 'Junie',  step1: 'Plan (studio style)', step2: 'Choose path',         step3: 'Hand to Claude' },
        { who: 'Claude', step1: 'Implement (Junie plan)', step2: 'Run tests',        step3: 'Diff for human' },
      ],
      result: 'Granularity drops to "tab switch"',
    },
  ];
  const pY = 2.65, pH = 3.30;
  const colW = (W - 1.10 - 0.4) / 3;
  patterns.forEach((p, i) => {
    const x = 0.55 + i * (colW + 0.20);
    s.addShape('rect', {
      x, y: pY, w: colW, h: pH,
      fill: { color: '0E0E1A' }, line: { color: p.tone, width: 1 },
    });
    s.addShape('rect', { x, y: pY, w: colW, h: 0.08, fill: { color: p.tone }, line: { type: 'none' } });
    s.addText(p.name, {
      x: x + 0.18, y: pY + 0.20, w: colW - 0.36, h: 0.40,
      fontSize: 14, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    p.lanes.forEach((ln, li) => {
      const ly = pY + 0.75 + li * 1.10;
      s.addShape('rect', {
        x: x + 0.18, y: ly, w: colW - 0.36, h: 0.95,
        fill: { color: 'FFFFFF', transparency: 94 }, line: { color: 'FFFFFF', width: 0.4, transparency: 80 },
      });
      s.addText(ln.who, {
        x: x + 0.28, y: ly + 0.05, w: 1.6, h: 0.25,
        fontSize: 10, fontFace: MONO, bold: true, color: p.tone, valign: 'middle', margin: 0,
      });
      s.addText(`1. ${ln.step1}  →  2. ${ln.step2}  →  3. ${ln.step3}`, {
        x: x + 0.28, y: ly + 0.30, w: colW - 0.56, h: 0.60,
        fontSize: 9.5, fontFace: SANS, color: C.ink, valign: 'top', margin: 0,
      });
    });
    s.addText(p.result, {
      x: x + 0.18, y: pY + pH - 0.40, w: colW - 0.36, h: 0.30,
      fontSize: 9.5, fontFace: SANS, italic: true, color: C.inkMuted, valign: 'middle', margin: 0,
    });
  });

  T.addTipChip(s, 0.55, 6.30);
  s.addText([
    { text: 'Granularity of multi-agent collaboration drops from "open another tool" to ', options: { color: C.inkDim } },
    { text: 'tab switch', options: { highlight: C.highlight, color: '111111', bold: true } },
    { text: '. Workbench is the IDE surface that makes that possible.', options: { color: C.inkDim } },
  ], {
    x: 1.05, y: 6.27, w: W - 2.0, h: 0.40,
    fontSize: 11, fontFace: SANS, valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE 14 — Role map
// =====================================================================
async function slide14_roleMap(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'violet', page: 14, mandalaOpacity: 0.6 });

  T.addKicker(s, '干系人架构', 0.55, 0.85);
  T.addH1(s, '采用范围从使用者扩展到治理者', 0.55, 1.40, { size: 36, w: 11.5, h: 0.85 });
  s.addText('从流程视角切换到角色视角。同一套技术栈对一线创作者、交付负责人和决策购买者，呈现出不同的价值信号。', {
    x: 0.55, y: 2.40, w: 9.5, h: 0.7,
    fontSize: 13, fontFace: SANS, color: C.inkDim, valign: 'top', margin: 0,
  });

  // Role tiers
  const tiers = [
    {
      band: 'CREATORS', tone: C.cyan,
      roles: [
        { title: 'Gameplay Programmer', sub: 'C# · C++ · gameplay' },
        { title: 'Technical Artist',    sub: 'Shader · VFX · pipeline' },
      ],
    },
    {
      band: 'BUILDERS', tone: C.junieViolet,
      roles: [
        { title: 'Engine / Framework / Rendering Engineer', sub: 'core systems · refactor' },
      ],
    },
    {
      band: 'PLATFORM', tone: C.qodanaGreen,
      roles: [
        { title: 'Studio Tools / AI Platform', sub: 'MCP · agent governance' },
        { title: 'QA / Build / Release',       sub: 'Qodana · TeamCity · Perforce' },
      ],
    },
    {
      band: 'DECIDERS', tone: C.riderAmber,
      roles: [
        { title: 'R&D Management / CTO', sub: 'standardise · govern · measure' },
      ],
    },
  ];
  const tY = 3.30, tH = 0.75, tGap = 0.10;
  tiers.forEach((tier, i) => {
    const y = tY + i * (tH + tGap);
    s.addShape('rect', { x: 0.55, y, w: 1.4, h: tH, fill: { color: tier.tone, transparency: 25 }, line: { type: 'none' } });
    s.addText(tier.band, {
      x: 0.55, y, w: 1.4, h: tH,
      fontSize: 11, fontFace: SANS, bold: true, color: C.ink, charSpacing: 2,
      align: 'center', valign: 'middle', margin: 0,
    });
    // Roles
    const roleStartX = 2.10;
    const roleW = (W - 1.10 - 2.10 + 0.55) / tier.roles.length - 0.20;
    tier.roles.forEach((r, j) => {
      const rx = roleStartX + j * (roleW + 0.20);
      s.addShape('rect', { x: rx, y, w: roleW, h: tH, fill: { color: '0E0E1A' }, line: { color: tier.tone, width: 0.75 } });
      s.addText(r.title, {
        x: rx + 0.20, y: y + 0.07, w: roleW - 0.4, h: 0.32,
        fontSize: 13, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
      });
      s.addText(r.sub, {
        x: rx + 0.20, y: y + 0.40, w: roleW - 0.4, h: 0.28,
        fontSize: 10.5, fontFace: MONO, color: C.inkMuted, valign: 'middle', margin: 0,
      });
    });
  });

  T.addTipChip(s, 0.55, H - 0.65);
  s.addText('把后面四页当作一份买家地图来读，而不是功能巡礼。', {
    x: 1.05, y: H - 0.68, w: W - 2.0, h: 0.35,
    fontSize: 11, fontFace: SANS, italic: true, color: C.inkDim, valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE 15 — Role 1: Programmer + Tech Artist
// =====================================================================
async function slide15_role1(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'cyan', page: 15, mandalaOpacity: 0.7 });

  T.addKicker(s, '角色 1', 0.55, 0.85);
  T.addH1(s, 'Gameplay Programmer + Technical Artist', 0.55, 1.30, { size: 30, w: 12, h: 0.85 });

  // Two persona cards
  const personas = [
    {
      title: 'Gameplay Programmer', role: '核心用户', tone: C.cyan,
      bullets: ['更快的 gameplay 实现', '更稳定的 debug 循环', '更短的验证回路', 'Engine-aware 代码生成', 'Workbench 中同时挂 Junie + Claude'],
      stack: ['Unity', 'Unreal', 'C#', 'C++'],
    },
    {
      title: 'Technical Artist', role: '核心用户', tone: C.juniePink,
      bullets: ['Shader 与 material 支持', 'Engine 内 context 感知', '视觉问题定位', '渲染管线调试'],
      stack: ['Shader', 'HLSL', 'Materials', 'VFX'],
    },
  ];
  drawPersonaCards(s, personas, 0.55, 2.40, W - 1.10, 4.8);
}

function drawPersonaCards(s, personas, x0, y0, w0, h0) {
  const colW = (w0 - 0.4) / personas.length;
  personas.forEach((p, i) => {
    const x = x0 + i * (colW + 0.4);
    s.addShape('rect', {
      x, y: y0, w: colW, h: h0,
      fill: { color: '0E0E1A' }, line: { color: p.tone, width: 1 },
    });
    s.addShape('rect', { x, y: y0, w: colW, h: 0.10, fill: { color: p.tone }, line: { type: 'none' } });

    s.addText(p.role, {
      x: x + 0.25, y: y0 + 0.22, w: colW - 0.5, h: 0.28,
      fontSize: 10, fontFace: MONO, color: p.tone, charSpacing: 2, valign: 'middle', margin: 0,
    });
    s.addText(p.title, {
      x: x + 0.25, y: y0 + 0.55, w: colW - 0.5, h: 0.55,
      fontSize: 22, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    // Bullets
    p.bullets.forEach((b, j) => {
      s.addText([
        { text: '❏  ', options: { color: p.tone, bold: true } },
        { text: b, options: { color: C.ink } },
      ], {
        x: x + 0.25, y: y0 + 1.30 + j * 0.42, w: colW - 0.5, h: 0.40,
        fontSize: 12, fontFace: SANS, valign: 'middle', margin: 0,
      });
    });
    // Stack chips at bottom
    if (p.stack) {
      const stackY = y0 + h0 - 0.55;
      const chipW = 0.85;
      p.stack.forEach((st, j) => {
        const sx = x + 0.25 + j * (chipW + 0.10);
        s.addShape('rect', {
          x: sx, y: stackY, w: chipW, h: 0.30,
          fill: { color: '050510' }, line: { color: p.tone, width: 0.5 }, rectRadius: 0.03,
        });
        s.addText(st, {
          x: sx, y: stackY, w: chipW, h: 0.30,
          fontSize: 9.5, fontFace: MONO, color: C.ink, align: 'center', valign: 'middle', margin: 0,
        });
      });
    }
  });
}

// =====================================================================
// SLIDE 16 — Role 2: Engine engineer
// =====================================================================
async function slide16_role2(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'violet', page: 16, mandalaOpacity: 0.7 });

  T.addKicker(s, '角色 2', 0.55, 0.85);
  T.addH1(s, 'Engine / Framework / Rendering Engineer', 0.55, 1.30, { size: 28, w: 12.5, h: 0.85 });

  const personas = [
    {
      title: 'Engine Engineer', role: '核心用户', tone: C.junieViolet,
      bullets: ['代码库范围内的架构级可视性', '大规模安全 refactor — 不是文本替换', '对 macro 与 reflection 的 engine-aware 语义理解', '降低复杂系统变更风险'],
      stack: ['C++', 'ReSharper C++', 'Unreal', 'Rider'],
    },
  ];
  drawPersonaCards(s, personas, 0.55, 2.30, W - 1.10, 4.0);

  T.addTipChip(s, 0.55, 6.50);
  s.addText('面向资深工程师，把「AI 生产力」替换成「降低复杂系统变更风险」。', {
    x: 1.05, y: 6.47, w: W - 2.0, h: 0.35,
    fontSize: 11, fontFace: SANS, italic: true, color: C.inkDim, valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE 17 — Role 3: Studio tools / QA / Build
// =====================================================================
async function slide17_role3(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'green', page: 17, mandalaOpacity: 0.7 });

  T.addKicker(s, '角色 3', 0.55, 0.85);
  T.addH1(s, 'Studio Tools / AI Platform / QA / Build & Release', 0.55, 1.30, { size: 25, w: 12.5, h: 0.85 });

  const personas = [
    {
      title: 'Studio Tools & AI Platform', role: '流程负责人', tone: C.riderAmber,
      bullets: ['把 Rider 变成内部 agent 与 skill 的基座', '把工作室专属工具统合到同一平台', '治理 agent 能力与模型访问权限'],
      stack: ['MCP', 'ACP', 'Junie', 'AI Enterprise'],
    },
    {
      title: 'QA & Build / Release', role: '流程负责人', tone: C.cyan,
      bullets: ['把测试、覆盖率、静态分析整合到同一条流水线', '通过合入前 quality gate 缩短反馈闭环', '通过自动化校验保护主干稳定'],
      stack: ['Qodana', 'TeamCity', 'dotCover', 'Perforce'],
    },
  ];
  drawPersonaCards(s, personas, 0.55, 2.30, W - 1.10, 4.6);
}

// =====================================================================
// SLIDE 18 — Role 4: CTO
// =====================================================================
async function slide18_role4(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'amber', page: 18, mandalaOpacity: 0.8 });

  T.addKicker(s, '角色 4', 0.55, 0.85);
  T.addH1(s, '研发管理 / CTO', 0.55, 1.30, { size: 38, w: 5.6, h: 0.85 });

  s.addText('「管理层拥有完整的、组织内的软件生产控制平面」', {
    x: 0.55, y: 2.30, w: 5.6, h: 0.9,
    fontSize: 16, fontFace: SANS, italic: true, color: C.inkDim, valign: 'top', margin: 0,
  });

  T.addTipChip(s, 0.55, 3.50);
  s.addText('dotUltimate — 覆盖整个 .NET 与 GameDev 工具套件', {
    x: 1.05, y: 3.47, w: 5.0, h: 0.35,
    fontSize: 12, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
  });
  s.addText('❏  Agent Workbench 提供 agent 使用 telemetry — 治理可见性免费送', {
    x: 0.55, y: 3.95, w: 5.6, h: 0.40,
    fontSize: 11, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // Right: 2x2 ExecutiveGrid
  const gx = 6.40, gy = 1.10, gw = W - 6.40 - 0.55, gh = 5.6;
  const cells = [
    { name: 'Standardization', tone: C.indigo, body: 'One IDE · one workflow across teams' },
    { name: 'Quality',         tone: C.qodanaGreen, body: 'Qodana semantic + TeamCity gate' },
    { name: 'Governance',      tone: C.junieViolet, body: 'Agent registry · model access · audit' },
    { name: 'Visibility',      tone: C.riderAmber, body: 'Telemetry · adoption · quality trends' },
  ];
  const cw = (gw - 0.20) / 2, ch = (gh - 0.20) / 2;
  cells.forEach((c, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = gx + col * (cw + 0.20);
    const y = gy + row * (ch + 0.20);
    s.addShape('rect', { x, y, w: cw, h: ch, fill: { color: '0E0E1A' }, line: { color: c.tone, width: 1 } });
    s.addShape('rect', { x, y, w: cw, h: 0.08, fill: { color: c.tone }, line: { type: 'none' } });
    s.addText(c.name, {
      x: x + 0.25, y: y + 0.30, w: cw - 0.5, h: 0.55,
      fontSize: 20, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    s.addText(c.body, {
      x: x + 0.25, y: y + 0.95, w: cw - 0.5, h: 0.90,
      fontSize: 12, fontFace: SANS, color: C.inkDim, valign: 'top', margin: 0,
    });
  });
}

// =====================================================================
// SLIDE 19 — Semantic moat
// =====================================================================
async function slide19_semanticMoat(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'violet', page: 19, mandalaOpacity: 0.75 });

  T.addKicker(s, '技术差异化', 0.55, 0.85);
  T.addH1(s, '语义上下文\n才是 Agent 护城河', 0.55, 1.30, { size: 32, w: 5.8, h: 1.6 });

  const moats = [
    { b: 'Flow / Value Analysis', t: ' — 沿真实执行路径追踪值' },
    { b: 'Dependency Graph',      t: ' — 可视化项目内的变更传播' },
    { b: 'Refactoring Safety',    t: ' — 跨 symbol、跨类型、跨边界的安全变更' },
  ];
  moats.forEach((m, i) => {
    s.addText([
      { text: '❏  ', options: { color: C.riderAmber, bold: true } },
      { text: m.b, options: { bold: true, color: C.ink } },
      { text: m.t, options: { color: C.inkDim } },
    ], {
      x: 0.55, y: 3.20 + i * 0.55, w: 5.6, h: 0.50,
      fontSize: 13.5, fontFace: SANS, valign: 'middle', margin: 0,
    });
  });

  s.addText([
    { text: 'LLM 看到的是 token。', options: { italic: true, color: C.inkDim } },
    { text: ' Rider 看到的是一个有机的代码系统。', options: { italic: true, highlight: C.highlight, color: '111111', bold: true } },
  ], {
    x: 0.55, y: 5.30, w: 5.6, h: 0.7,
    fontSize: 13, fontFace: SANS, valign: 'top', margin: 0,
  });

  // Right: SystemVsToken — split panel
  const rx = 6.40, ry = 0.95, rw = W - rx - 0.55, rh = 5.8;
  const halfH = rh / 2 - 0.10;
  // Token side
  s.addShape('rect', { x: rx, y: ry, w: rw, h: halfH, fill: { color: '0E0E1A' }, line: { color: '#FF4455'.slice(1), width: 0.75 } });
  s.addText('LLM · Token view', {
    x: rx + 0.25, y: ry + 0.15, w: rw - 0.5, h: 0.35,
    fontSize: 12, fontFace: MONO, bold: true, color: 'FF4455', charSpacing: 1.5, valign: 'middle', margin: 0,
  });
  s.addText('public class Player { void Update() { ... } }', {
    x: rx + 0.25, y: ry + 0.65, w: rw - 0.5, h: 0.40,
    fontSize: 11, fontFace: MONO, color: C.inkDim, valign: 'middle', margin: 0,
  });
  // Token chips
  const tokens = ['public', 'class', 'Player', '{', 'void', 'Update', '(', ')', '{', '...', '}', '}'];
  let tx = rx + 0.25;
  let ty = ry + 1.20;
  tokens.forEach((tk, i) => {
    const tw = 0.40 + tk.length * 0.10;
    if (tx + tw > rx + rw - 0.25) { tx = rx + 0.25; ty += 0.40; }
    s.addShape('roundRect', { x: tx, y: ty, w: tw, h: 0.30, fill: { color: 'FF4455', transparency: 75 }, line: { color: 'FF4455', width: 0.4 }, rectRadius: 0.03 });
    s.addText(tk, { x: tx, y: ty, w: tw, h: 0.30, fontSize: 9.5, fontFace: MONO, color: C.ink, align: 'center', valign: 'middle', margin: 0 });
    tx += tw + 0.08;
  });
  s.addText('No structure · no relationships · no semantics', {
    x: rx + 0.25, y: ry + halfH - 0.40, w: rw - 0.5, h: 0.30,
    fontSize: 10, fontFace: SANS, italic: true, color: C.inkMuted, valign: 'middle', margin: 0,
  });
  // Rider side
  const ry2 = ry + halfH + 0.20;
  s.addShape('rect', { x: rx, y: ry2, w: rw, h: halfH, fill: { color: '0E0E1A' }, line: { color: C.qodanaGreen, width: 0.75 } });
  s.addText('Rider · System view', {
    x: rx + 0.25, y: ry2 + 0.15, w: rw - 0.5, h: 0.35,
    fontSize: 12, fontFace: MONO, bold: true, color: C.qodanaGreen, charSpacing: 1.5, valign: 'middle', margin: 0,
  });
  // System graph mock: nodes connected
  const nodes = [
    { name: 'Player.Update()', x: rx + 0.50, y: ry2 + 0.80 },
    { name: 'Inventory', x: rx + 2.40, y: ry2 + 0.80 },
    { name: 'NetworkSync', x: rx + 4.50, y: ry2 + 0.80 },
    { name: 'PlayerTests', x: rx + 0.50, y: ry2 + 1.80 },
    { name: 'InventoryTests', x: rx + 2.40, y: ry2 + 1.80 },
    { name: 'PlayerPrefab', x: rx + 4.50, y: ry2 + 1.80 },
  ];
  nodes.forEach(n => {
    s.addShape('roundRect', { x: n.x, y: n.y, w: 1.65, h: 0.40, fill: { color: '050510' }, line: { color: C.qodanaGreen, width: 0.75 }, rectRadius: 0.05 });
    s.addText(n.name, { x: n.x, y: n.y, w: 1.65, h: 0.40, fontSize: 10, fontFace: MONO, color: C.ink, align: 'center', valign: 'middle', margin: 0 });
  });
  // Connectors
  const cn = [[0, 1], [1, 2], [0, 3], [1, 4], [0, 5]];
  cn.forEach(([a, b]) => {
    const A = nodes[a], B = nodes[b];
    s.addShape('line', {
      x: A.x + 0.825, y: A.y + 0.20,
      w: (B.x + 0.825) - (A.x + 0.825), h: (B.y + 0.20) - (A.y + 0.20),
      line: { color: C.qodanaGreen, width: 0.75, dashType: 'dash' },
    });
  });
  s.addText('PSI nodes · usages · tests · prefabs · references', {
    x: rx + 0.25, y: ry2 + halfH - 0.40, w: rw - 0.5, h: 0.30,
    fontSize: 10, fontFace: SANS, italic: true, color: C.inkMuted, valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE 20 — Integration proof
// =====================================================================
async function slide20_integrationProof(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'cyan', page: 20, mandalaOpacity: 0.65 });

  T.addKicker(s, '生态', 0.55, 0.85);
  T.addH1(s, '集成实证', 0.55, 1.30, { size: 36, w: 11, h: 0.85 });
  s.addText('不是 logo 墙 — 而是深度嵌入工作室现有 Workflow。', {
    x: 0.55, y: 2.20, w: 11, h: 0.4,
    fontSize: 14, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // 4 deep-integration cards
  const cards = [
    {
      name: 'Unreal Engine', tone: C.junieViolet,
      bullets: ['UPROPERTY · reflection awareness', 'Blueprint navigation', 'Engine debugger · macros', 'Build.cs targets'],
    },
    {
      name: 'Unity', tone: C.cyan,
      bullets: ['Inline profiler hints', 'ShaderLab + HLSL', 'Unity Tests runner', 'Burst / ECS rules'],
    },
    {
      name: 'Perforce', tone: C.qodanaGreen,
      bullets: ['Changelist-aware VCS', 'File locks visible in editor', 'Shelves & swarm reviews', 'Workspace switching'],
    },
    {
      name: 'Godot', tone: C.riderAmber,
      bullets: ['C# bindings', 'GDScript navigation', 'Asset .import context', 'Editor sync'],
    },
  ];
  const cy0 = 2.80, ch0 = 4.0;
  const cw0 = (W - 1.10 - 0.6) / 4;
  cards.forEach((card, i) => {
    const x = 0.55 + i * (cw0 + 0.20);
    s.addShape('rect', { x, y: cy0, w: cw0, h: ch0, fill: { color: '0E0E1A' }, line: { color: card.tone, width: 1 } });
    s.addShape('rect', { x, y: cy0, w: cw0, h: 0.10, fill: { color: card.tone }, line: { type: 'none' } });
    s.addText(card.name, {
      x: x + 0.20, y: cy0 + 0.30, w: cw0 - 0.4, h: 0.50,
      fontSize: 17, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    card.bullets.forEach((b, j) => {
      s.addText([
        { text: '❏  ', options: { color: card.tone, bold: true } },
        { text: b, options: { color: C.ink } },
      ], {
        x: x + 0.20, y: cy0 + 1.10 + j * 0.55, w: cw0 - 0.4, h: 0.50,
        fontSize: 11.5, fontFace: SANS, valign: 'middle', margin: 0,
      });
    });
  });
}

// =====================================================================
// SLIDE 21 — Adoption roadmap
// =====================================================================
async function slide21_adoptionRoadmap(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'amber', page: 21, mandalaOpacity: 0.7 });

  T.addKicker(s, '价值交付计划', 0.55, 0.85);
  T.addH1(s, '落地路线图', 0.55, 1.30, { size: 36, w: 8, h: 0.85 });
  s.addText('分阶段落地 — 无需一次性重建整套 Workflow。', {
    x: 0.55, y: 2.20, w: 11, h: 0.4,
    fontSize: 14, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // Three phases
  const phases = [
    {
      stage: 'Phase 1', name: 'Quick Wins', weeks: 'Week 0 – 2', tone: C.indigo,
      items: ['Pilot team adopts Rider', 'Enable Junie + Agent Workbench', 'Run inline inspection at dev-time'],
    },
    {
      stage: 'Phase 2', name: 'Quality Gate', weeks: 'Week 3 – 8', tone: C.junieViolet,
      items: ['Qodana on CI for pilot repo', 'TeamCity gate for merges', 'KPI dashboard live'],
    },
    {
      stage: 'Phase 3', name: 'Agentic Studio', weeks: 'Week 9 – 24', tone: C.qodanaGreen,
      items: ['Custom MCP / Skill capsules', 'AI Platform team governs agents', 'Roll out beyond pilot team'],
    },
  ];
  const px = 0.55, py = 2.85, pw = (W - 1.10 - 0.5) / 3, ph = 4.0;
  phases.forEach((p, i) => {
    const x = px + i * (pw + 0.25);
    s.addShape('rect', { x, y: py, w: pw, h: ph, fill: { color: '0E0E1A' }, line: { color: p.tone, width: 1 } });
    s.addShape('rect', { x, y: py, w: pw, h: 0.10, fill: { color: p.tone }, line: { type: 'none' } });
    s.addText(p.stage, {
      x: x + 0.20, y: py + 0.25, w: pw - 0.4, h: 0.30,
      fontSize: 10, fontFace: MONO, color: p.tone, charSpacing: 2, valign: 'middle', margin: 0,
    });
    s.addText(p.name, {
      x: x + 0.20, y: py + 0.55, w: pw - 0.4, h: 0.55,
      fontSize: 22, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    s.addText(p.weeks, {
      x: x + 0.20, y: py + 1.20, w: pw - 0.4, h: 0.30,
      fontSize: 11, fontFace: MONO, color: C.inkDim, valign: 'middle', margin: 0,
    });
    p.items.forEach((it, j) => {
      s.addText([
        { text: '❏  ', options: { color: p.tone, bold: true } },
        { text: it, options: { color: C.ink } },
      ], {
        x: x + 0.20, y: py + 1.65 + j * 0.55, w: pw - 0.4, h: 0.50,
        fontSize: 11.5, fontFace: SANS, valign: 'middle', margin: 0,
      });
    });
    if (i < phases.length - 1) {
      s.addShape('rightTriangle', {
        x: x + pw + 0.05, y: py + ph / 2 - 0.10, w: 0.15, h: 0.20,
        fill: { color: C.riderAmber }, line: { type: 'none' }, rotate: 90,
      });
    }
  });
}

// =====================================================================
// SLIDE 22 — Closing
// =====================================================================
async function slide22_closing(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'violet', page: 22, mandalaOpacity: 0.95, mandalaPosition: 'right', showCornerBadge: true });

  // Centered hero
  s.addText('Rider 不只是\n人类编码的工具', {
    x: 0.55, y: 1.40, w: W - 1.10, h: 2.2,
    fontSize: 50, fontFace: SANS, bold: true, color: C.ink, align: 'center', valign: 'top', margin: 0,
  });
  s.addText('HAX · 人机切面', {
    x: 0.55, y: 3.75, w: W - 1.10, h: 0.7,
    fontSize: 26, fontFace: SANS, bold: true, color: C.inkDim, align: 'center', valign: 'middle', margin: 0,
  });

  // Three pillars
  s.addText([
    { text: 'Context', options: { color: C.riderRed, bold: true, fontSize: 18 } },
    { text: '    ·    ', options: { color: C.inkMuted, fontSize: 18 } },
    { text: 'Execution', options: { color: '22D3EE', bold: true, fontSize: 18 } },
    { text: '    ·    ', options: { color: C.inkMuted, fontSize: 18 } },
    { text: 'Control', options: { color: 'FACC15', bold: true, fontSize: 18 } },
  ], {
    x: 0.55, y: 5.00, w: W - 1.10, h: 0.50,
    fontFace: SANS, align: 'center', valign: 'middle', margin: 0,
  });

  s.addText('下一步：按 Workflow 评估 — 从一个试点团队入手，以实际产出核定，对功能优先级排序', {
    x: 0.55, y: 6.20, w: W - 1.10, h: 0.5,
    fontSize: 12, fontFace: SANS, color: C.inkMuted, align: 'center', valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE A1 — Product map
// =====================================================================
async function slideA1_productMap(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'violet', page: 'A1', mandalaOpacity: 0.5 });

  T.addKicker(s, '附录 A1', 0.55, 0.85);
  T.addH1(s, '产品地图 / 能力矩阵', 0.55, 1.30, { size: 32, w: 11, h: 0.85 });

  // 3x3 matrix: rows = product, cols = capability
  const products = [
    { name: 'Rider', tone: C.riderRed,
      cells: ['IDE · refactor · inspection', 'Built-in MCP Server', 'Engine-aware navigation'] },
    { name: 'Junie · AI Assistant', tone: C.juniePink,
      cells: ['Agent planner', 'Multi-step execution', 'ACP / MCP runtime'] },
    { name: 'Qodana', tone: C.qodanaGreen,
      cells: ['Semantic CI rules', 'Aspect dashboard', 'Quality gate signal'] },
    { name: 'TeamCity', tone: C.riderAmber,
      cells: ['Build automation', 'Policy-driven gate', 'Trunk merge orchestration'] },
    { name: 'dotUltimate', tone: C.indigo,
      cells: ['dotTrace · dotMemory · dotCover', 'ReSharper', 'License umbrella'] },
  ];
  const headers = ['Capability A — Author', 'Capability B — Verify', 'Capability C — Govern'];
  const startY = 2.30;
  const hH = 0.45;
  const rowH = (H - startY - hH - 0.55) / products.length;
  const nameW = 2.3;
  const cellW = (W - 1.10 - nameW - 0.40) / 3;

  // Header row
  headers.forEach((h, j) => {
    const x = 0.55 + nameW + 0.20 + j * (cellW + 0.10);
    s.addText(h, {
      x, y: startY, w: cellW, h: hH,
      fontSize: 10.5, fontFace: SANS, bold: true, color: C.cyan, charSpacing: 1.5, valign: 'middle', margin: 0,
    });
  });
  products.forEach((p, i) => {
    const y = startY + hH + i * rowH;
    s.addShape('rect', { x: 0.55, y, w: nameW, h: rowH - 0.10, fill: { color: '0E0E1A' }, line: { color: p.tone, width: 0.75 } });
    s.addShape('rect', { x: 0.55, y, w: 0.05, h: rowH - 0.10, fill: { color: p.tone }, line: { type: 'none' } });
    s.addText(p.name, {
      x: 0.75, y, w: nameW - 0.3, h: rowH - 0.10,
      fontSize: 13, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    p.cells.forEach((cell, j) => {
      const x = 0.55 + nameW + 0.20 + j * (cellW + 0.10);
      s.addShape('rect', { x, y, w: cellW, h: rowH - 0.10, fill: { color: 'FFFFFF', transparency: 95 }, line: { color: 'FFFFFF', width: 0.4, transparency: 80 } });
      s.addText(cell, {
        x: x + 0.15, y, w: cellW - 0.3, h: rowH - 0.10,
        fontSize: 10.5, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
      });
    });
  });
}

// =====================================================================
// SLIDE A2 — MCP Steroid deep dive
// =====================================================================
async function slideA2_mcpSteroidDeep(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'amber', page: 'A2', mandalaOpacity: 0.6 });

  T.addKicker(s, '附录 A2', 0.55, 0.85);
  T.addStatusChip(s, 1.65, 0.83, 'Research', 0.85);
  T.addH1(s, 'MCP Steroid 深入解析', 0.55, 1.30, { size: 32, w: 11, h: 0.85 });

  // Diagram: Layered architecture
  const ax = 0.55, ay = 2.30, aw = W - 1.10, ah = 4.5;
  const layers = [
    { name: 'Studio Skill Layer',     tone: C.qodanaGreen, items: ['Naming convention checker', 'Pre-upgrade dependency scan', 'Prefab / BP impact'] },
    { name: 'MCP Steroid runtime',    tone: C.riderAmber,  items: ['Refactor · Inspect · UI state · Debug · Test'] },
    { name: 'Rider IDE capability',   tone: C.junieViolet, items: ['PSI · ReSharper rules · Engine awareness · VCS state'] },
    { name: 'Any agent runtime',      tone: C.indigo,      items: ['Junie · Claude Code · Codex · Future runtime'] },
  ];
  const lH = (ah - 0.4) / layers.length;
  layers.forEach((L, i) => {
    const y = ay + 0.20 + i * lH;
    s.addShape('rect', { x: ax + 0.20, y, w: aw - 0.40, h: lH - 0.10, fill: { color: '0E0E1A' }, line: { color: L.tone, width: 1 } });
    s.addShape('rect', { x: ax + 0.20, y, w: 0.08, h: lH - 0.10, fill: { color: L.tone }, line: { type: 'none' } });
    s.addText(L.name, {
      x: ax + 0.40, y: y + 0.12, w: 3.5, h: lH - 0.30,
      fontSize: 14, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    s.addText(L.items.join('   ·   '), {
      x: ax + 4.10, y: y + 0.12, w: aw - 4.60, h: lH - 0.30,
      fontSize: 10.5, fontFace: MONO, color: C.inkDim, valign: 'middle', margin: 0,
    });
  });

  s.addText('由 Eugene Petrenko 主导的独立研究项目 · 非 JetBrains 官方支持产品。', {
    x: 0.55, y: H - 0.55, w: W - 2.0, h: 0.30,
    fontSize: 10, fontFace: SANS, italic: true, color: C.inkMuted, valign: 'middle', margin: 0,
  });
}

// =====================================================================
// SLIDE A3 — Demo menu
// =====================================================================
async function slideA3_demoMenu(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'violet', page: 'A3', mandalaOpacity: 0.5 });

  T.addKicker(s, '附录 A3', 0.55, 0.85);
  T.addH1(s, 'Demo 菜单', 0.55, 1.30, { size: 36, w: 11, h: 0.85 });
  s.addText('按受众角色挑 2–3 个 demo。无需每次都跑完整套。', {
    x: 0.55, y: 2.20, w: 11, h: 0.4,
    fontSize: 13, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
  });

  // Demo cards: rows of audience → demos
  const demos = [
    {
      audience: 'Programmers', tone: C.cyan, mins: '8–10 min',
      items: ['Gameplay refactor with Junie', 'Engine-aware inspection apply_fix', 'Unity profiler → dotTrace'],
    },
    {
      audience: 'Engine Engineers', tone: C.junieViolet, mins: '10–15 min',
      items: ['Cross-file rename in C++', 'UPROPERTY / Reflection refactor', 'Macro impact analysis'],
    },
    {
      audience: 'Studio Tools / AI Platform', tone: C.riderAmber, mins: '12 min',
      items: ['Skill capsule via MCP Steroid', 'Agent Workbench with 3 agents', 'Custom MCP connector to YouTrack'],
    },
    {
      audience: 'CTO / Management', tone: C.qodanaGreen, mins: '6 min',
      items: ['Qodana + TeamCity merge gate', 'Agent Workbench telemetry', 'KPI matrix walk-through'],
    },
  ];
  const dY = 2.80, dH = (H - dY - 0.55) / demos.length;
  demos.forEach((d, i) => {
    const y = dY + i * dH;
    s.addShape('rect', { x: 0.55, y, w: W - 1.10, h: dH - 0.10, fill: { color: '0E0E1A' }, line: { color: d.tone, width: 1 } });
    s.addShape('rect', { x: 0.55, y, w: 0.08, h: dH - 0.10, fill: { color: d.tone }, line: { type: 'none' } });
    s.addText(d.audience, {
      x: 0.75, y, w: 2.6, h: dH - 0.10,
      fontSize: 14, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    T.addStatusChip(s, 0.75, y + dH - 0.50, d.mins, 1.0);
    d.items.forEach((it, j) => {
      const ix = 3.60 + j * ((W - 1.10 - 3.60) / 3);
      const iw = (W - 1.10 - 3.60) / 3 - 0.10;
      s.addShape('rect', { x: ix, y: y + 0.15, w: iw, h: dH - 0.40, fill: { color: 'FFFFFF', transparency: 93 }, line: { color: 'FFFFFF', width: 0.4, transparency: 80 } });
      s.addText(it, {
        x: ix + 0.15, y: y + 0.15, w: iw - 0.3, h: dH - 0.40,
        fontSize: 10.5, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
      });
    });
  });
}

// =====================================================================
// SLIDE A4 — KPI framework
// =====================================================================
async function slideA4_kpiFramework(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'green', page: 'A4', mandalaOpacity: 0.5 });

  T.addKicker(s, '附录 A4', 0.55, 0.85);
  T.addH1(s, 'KPI 框架', 0.55, 1.30, { size: 36, w: 11, h: 0.85 });
  s.addText('试点项目的统一度量 — 用于部署与复盘。', {
    x: 0.55, y: 2.20, w: 11, h: 0.4,
    fontSize: 13, fontFace: SANS, color: C.inkDim, valign: 'middle', margin: 0,
  });

  const families = [
    { name: 'Flow',     tone: C.indigo, kpis: [
      { k: 'Lead time / story', target: '↓ 30%' },
      { k: 'Plan → merge time', target: '↓ 25%' },
      { k: 'Context rebuild time', target: '↓ 40% (Workbench)' },
    ] },
    { name: 'Quality',  tone: C.qodanaGreen, kpis: [
      { k: 'Defect escape rate', target: '↓ 25%' },
      { k: 'Qodana blocker count', target: '0 on trunk' },
      { k: 'Coverage on managed code', target: '≥ 60%' },
    ] },
    { name: 'Adoption', tone: C.riderAmber, kpis: [
      { k: 'Pilot team Rider DAU', target: '≥ 80%' },
      { k: 'Agent tool calls / week', target: 'baseline +200%' },
      { k: 'Skill capsules in registry', target: '≥ 3 / quarter' },
    ] },
  ];
  const fX = 0.55, fY = 2.80, fW = (W - 1.10 - 0.6) / 3, fH = H - fY - 0.55;
  families.forEach((f, i) => {
    const x = fX + i * (fW + 0.30);
    s.addShape('rect', { x, y: fY, w: fW, h: fH, fill: { color: '0E0E1A' }, line: { color: f.tone, width: 1 } });
    s.addShape('rect', { x, y: fY, w: fW, h: 0.10, fill: { color: f.tone }, line: { type: 'none' } });
    s.addText(f.name, {
      x: x + 0.25, y: fY + 0.30, w: fW - 0.5, h: 0.50,
      fontSize: 22, fontFace: SANS, bold: true, color: C.ink, valign: 'middle', margin: 0,
    });
    f.kpis.forEach((kp, j) => {
      const y = fY + 1.10 + j * 1.05;
      s.addShape('rect', { x: x + 0.25, y, w: fW - 0.5, h: 0.90, fill: { color: 'FFFFFF', transparency: 94 }, line: { color: 'FFFFFF', width: 0.4, transparency: 80 } });
      s.addText(kp.k, {
        x: x + 0.40, y: y + 0.10, w: fW - 0.8, h: 0.35,
        fontSize: 11.5, fontFace: SANS, color: C.ink, valign: 'middle', margin: 0,
      });
      s.addText(kp.target, {
        x: x + 0.40, y: y + 0.45, w: fW - 0.8, h: 0.40,
        fontSize: 16, fontFace: MONO, bold: true, color: f.tone, valign: 'middle', margin: 0,
      });
    });
  });
}

// =====================================================================
// SLIDE A5 — Workbench use case matrix
// =====================================================================
async function slideA5_workbenchUseCases(pres) {
  const s = pres.addSlide();
  await T.addChrome(pres, s, { chapter: 'amber', page: 'A5', mandalaOpacity: 0.45 });

  T.addKicker(s, '附录 A5', 0.55, 0.85);
  T.addTagChip(s, 1.65, 0.83, 'Workbench Use Cases', 1.7);
  T.addH1(s, 'Roles × Workflows — where Workbench earns its keep', 0.55, 1.30, { size: 24, w: W - 1.10, h: 0.85 });
  s.addText('Each cell is a workflow that only works when multiple agents share one IDE\'s real context. Q&A ammunition for management, sales, and platform owners.', {
    x: 0.55, y: 2.15, w: W - 1.10, h: 0.45,
    fontSize: 11, fontFace: SANS, italic: true, color: C.inkDim, valign: 'middle', margin: 0,
  });

  const useCases = [
    { tag: '#1 Live Ops Triage',            role: 'Programmer · QA',                           tone: C.juniePink,    body: '3 persistent sessions diagnose a crash · ~40 min context-rebuild saved' },
    { tag: '#2 Shader Pairing',             role: 'Tech Artist + Programmer',                  tone: C.cyan,         body: 'Junie investigates shader bug · Claude proposes HLSL fix · diff in one tab' },
    { tag: '#3 Engine Kernel Rewrite',      role: 'Engine Engineer',                           tone: C.junieViolet,  body: 'Two agents stage massive refactor: planner + executor sharing PSI' },
    { tag: '#4 Refactor Swarm',             role: 'Tech Lead',                                 tone: C.indigo,       body: 'N agents fan out across modules · one Workbench reconciles the diffs' },
    { tag: '#5 A/B Bake-off',               role: 'CTO · AI Platform',                         tone: C.riderAmber,   body: 'Junie vs Claude on same refactor · vendor-neutral fairness evidence' },
    { tag: '#6 Skill Factory',              role: 'AI Platform',                               tone: C.qodanaGreen,  body: 'MCP Steroid arms agent · Workbench observes · promote to studio skill' },
    { tag: '#7 QA Fuzz Triage',             role: 'QA',                                        tone: C.cyan,         body: 'Agents triage fuzz output · attach repro + plan · feed Qodana baseline' },
    { tag: '#8 CTO Observatory',            role: 'R&D Management',                            tone: C.riderAmber,   body: 'Per-team sessions · MCP tool calls · policy-gate audit trail' },
  ];
  const x0 = 0.55, y0 = 2.80, gridW = W - 1.10, gridH = H - y0 - 0.55;
  const cols = 4, rows = 2;
  const cw = (gridW - 0.40) / cols;
  const ch = (gridH - 0.20) / rows;
  useCases.forEach((u, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = x0 + col * (cw + 0.13);
    const y = y0 + row * (ch + 0.20);
    s.addShape('rect', { x, y, w: cw, h: ch, fill: { color: '0E0E1A' }, line: { color: u.tone, width: 1 } });
    s.addShape('rect', { x, y, w: cw, h: 0.08, fill: { color: u.tone }, line: { type: 'none' } });
    s.addText(u.tag, {
      x: x + 0.20, y: y + 0.20, w: cw - 0.4, h: 0.40,
      fontSize: 13, fontFace: SANS, bold: true, color: u.tone, valign: 'middle', margin: 0,
    });
    s.addText(u.role, {
      x: x + 0.20, y: y + 0.65, w: cw - 0.4, h: 0.30,
      fontSize: 9.5, fontFace: MONO, color: C.inkMuted, charSpacing: 1, valign: 'middle', margin: 0,
    });
    s.addText(u.body, {
      x: x + 0.20, y: y + 1.00, w: cw - 0.4, h: ch - 1.10,
      fontSize: 10, fontFace: SANS, color: C.inkDim, valign: 'top', margin: 0,
    });
  });
}

build().catch(err => { console.error(err); process.exit(1); });
