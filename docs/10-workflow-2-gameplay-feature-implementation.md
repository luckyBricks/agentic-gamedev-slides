# 10｜Workflow 2｜Gameplay / Feature Implementation

## 页面目标
把 JetBrains 在 Unity、Unreal、Godot 三条路径上的引擎化上下文优势讲清楚，并通过功能截图为每个引擎的核心能力提供视觉佐证。

## 建议 Slidev 布局
- 实际布局：`layout: rider`，chapter: cyan，自定义 HTML 结构
- 风格关键词：深色、cyan 主调 mandala、游戏研发控制台感、信息密度高但秩序清晰
- 结构：上方三列引擎功能卡片 + 下方三列截图展示区（与引擎列对齐）

## 主视觉提示词
上半区：三列引擎卡片（Unity / Unreal / Godot），每列包含引擎图标、芯片标签、四条功能要点。  
下半区：三列截图展示区，每列两张截图，标签对应功能类别（Unity Profiling / Unreal Mobile Debug / Shader Debugging）。

## 信息图 / 结构图提示词
- 上区三列卡片，背景 `rgba(255,255,255,0.25)`，每列标题含引擎 SVG logo + StatusChip
- 下区截图 `grid-rows-2`，`object-cover` 裁切，圆角 + 白色低透边框

## 页面文案提示词

**引擎卡片（上区）：**
- Unity（C# + Shader）：Profiling hints inline / Quick-fixes & inspections / Shader file support / Unity tests & debugger
- Unreal（C++ / BP）：Engine-level debugger / Mobile / iOS deploy target / Macro & Reflection insight / Blueprint awareness
- Godot（C# + GDScript）：C# language support / GDScript navigation / Debugging tools / Consistent workspace

**截图展示（下区，与引擎列对齐）：**
- Unity Profiling：`unity-profiler.png`（内联性能提示菜单）+ `unity-profiler-tool.png`（Profiler 帧图）
- Unreal Mobile Debug：`unreal-mobile-debug.png`（平台/目标配置）+ `unreal-ios-debug-device.png`（iPhone 设备选择）
- Shader Debugging：`shader-debug-renderdoc.png`（RenderDoc GPU 渲染链）+ `shader-debug-static-analysis.png`（像素变量静态分析）

**页底结论：** Engine-aware context makes AI useful — not just available.

## 可直接改写的 Slidev 草图
```md
---
layout: rider
chapter: cyan
page: 10
mandalaOpacity: 0.6
---

<div class="h-full flex flex-col gap-3">
  <div>
    <Kicker>Workflow 2</Kicker>
    <h1 class="!text-[36px] font-extrabold !leading-tight mt-2">
      Gameplay / Feature Implementation
    </h1>
  </div>

  <!-- 引擎功能卡片 -->
  <div class="grid grid-cols-3 gap-4 shrink-0">
    <!-- Unity / Unreal / Godot 卡片，各含 logo + StatusChip + 4 条功能 -->
  </div>

  <!-- 功能截图展示（与引擎列对齐） -->
  <div class="flex-1 grid grid-cols-3 gap-3 min-h-0">
    <!-- 列1: Unity Profiling -->
    <!-- 列2: Unreal Mobile Debug -->
    <!-- 列3: Shader Debugging -->
    <!-- 每列：标签 + grid-rows-2 截图对，rounded-lg border-white/10 -->
  </div>

  <p class="text-center text-[12px] text-white/40 italic shrink-0">
    Engine-aware context makes AI useful — not just available.
  </p>
</div>
```

## 讲者备注
多用"不是任何 LLM 都有的上下文"这句，但不要抽象讲，要具体落到 prefab、Blueprint、shader、tests 上。Rider 不是 generic editor，而是 engine-aware workspace。

## 事实锚点（不上屏，用于校正文案）
- Unity：官方文档列出 quick-fixes、inspections、Unity tests、profiling integration、shader file support
- Unreal：官方文档强调 Blueprint awareness、Macro/Reflection insight、engine-level debugger、mobile/iOS platform targeting
- Godot：Rider 官方游戏开发文档覆盖 C# 与 GDScript 双栈支持
- Shader Debugging：RenderDoc 集成（TowerDefense2 Unity 项目示例）+ Rider 着色器像素级静态分析
