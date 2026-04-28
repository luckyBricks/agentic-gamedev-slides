# 13｜Workflow 5｜Performance / Memory / Regression Triage

## 页面目标
把 deck 从“AI coding”拉高到“游戏体验与运行质量”，但不要把 JetBrains profiler 讲成 Unity / Unreal 原生 profiling 工具的替代品。

这一页的核心结论：引擎原生 profiler 负责确认 frame / engine runtime 里发生了什么；JetBrains 工具负责把这些证据拉进源码、托管内存、测试覆盖和 CI 回归控制。

## 建议 Slidev 布局
- 推荐布局：workflow matrix / profiler loop
- 风格关键词：深色玻璃面板、cyan chapter accent、游戏研发控制台、证据链、边界清晰。
- 建议比例：16:9。左侧只保留 thesis 和 support boundary；右侧放三条横向 workflow cards，每条都是“原生证据 → JetBrains drill-down → regression guard”。

## 主视觉提示词
游戏性能分析 workflow matrix：Unity Profiler frame spike、Unreal Insights trace、Memory snapshot、dotTrace Timeline / Call Tree、dotMemory retained objects、dotCover / TeamCity regression guard。视觉上像一个工程 triage board，而不是单纯产品清单。

## 信息图 / 结构图提示词
三条具体 workflow：
- Unity frame hitch：Unity Profiler frame spike → Rider CPU hints + dotTrace Timeline / Call Tree → compare snapshot / rerun scenario。
- Memory regression：Unity Memory Profiler 或 Unreal Memory Insights snapshot → dotMemory 分析 managed allocations、retained objects、GC pressure → coverage 或 smoke test guard where supported。
- Unreal native perf：Unreal Insights trace → dotTrace Unreal application with PDB symbols + native allocations → Rider UE tests / TeamCity perf gate。

每条 workflow 都需要 compact support chips：
- `Unity: direct`
- `Unreal: dotTrace direct`
- `Memory: native tool first`
- `Coverage: managed / Unity tests caveat`

## 页面文案提示词
- Performance triage is a loop, not a tool window.
- Unity Profiler / Unreal Insights find the runtime symptom; dotTrace / dotMemory / dotCover turn it into source-level diagnosis and regression control.
- Engine-native profilers stay the source of truth for GPU, rendering, assets, and engine-level telemetry.
- Native profiler + JetBrains profiler: runtime evidence becomes code navigation, managed-memory diagnosis, test coverage, and CI regression gates.

## 三个最终用例（中文讲法）
- Unity 卡帧排查：先用 Unity Profiler 找到 frame spike，再进入 Rider / dotTrace 看 Timeline、Call Tree 和源码路径，最后用同一场景重跑或对比 snapshot，确认修复没有回退。
- 内存回归排查：先用 Unity Memory Profiler 或 Unreal Memory Insights 确认引擎侧、资源侧、native runtime 的事实，再用 dotMemory 追 managed allocation、retained object 和 GC pressure，最后用 smoke test 或支持范围内的 coverage guard 兜住回归。
- Unreal native performance triage：先以 Unreal Insights trace 作为引擎 runtime 的事实源，再用 dotTrace 的 Unreal standalone profiling、PDB symbols、Timeline native call stacks 和 native allocation collection 进入源码级分析，最后接 Rider UE tests 或 TeamCity performance gate 做可重复验证。

## 可直接改写的 Slidev 草图
```md
---
layout: rider
chapter: cyan
page: 13
---

# Workflow 5
## Performance Triage Is a Loop, Not a Tool Window

Unity Profiler / Unreal Insights find the runtime symptom; dotTrace / dotMemory / dotCover turn it into source-level diagnosis and regression control.

<ProfilerWorkflowMatrix />
```

## 讲者备注
如果面对的是游戏 CTO 或引擎负责人，这页权重可以再升高，因为它直接把 IDE 价值从“写代码”延伸到“保体验”。但讲法一定要精确：JetBrains tools 不是替代 Unity Profiler、Unity Memory Profiler、Unreal Insights 或 Unreal Memory Insights；它们是在引擎证据之后，把问题推进到代码、托管内存、测试和 CI 的下一环。

不要说 dotMemory 替代 Unity Memory Profiler 或 Unreal Memory Insights。更准确的说法是：engine-native memory tools 负责引擎 / native / asset 视角；dotMemory 负责 .NET / managed process 视角，包括 allocations、retained objects 和 GC pressure。

不要说 dotCover 支持 Unreal C++ coverage。更准确的说法是：dotCover 是 managed / Unity-test regression guard where supported。由于 Unity / Mono runtime 支持在当前版本存在兼容性 caveat，覆盖率只作为 regression guard 的一部分，不作为本页 headline promise。

## 事实锚点（不上屏，用于校正文案）
- Unity support 最强的是 dotTrace：Rider / dotTrace 文档支持 Unity 2018.3+ profiling，覆盖 Editor / standalone workflows，并可在 Windows 上启用 Unity native profiling。
- Rider Unity Profiler assistance 可以把 Unity Profiler snapshot 拉进 Rider 并展示 CPU 数据，但边界是 CPU-only，不覆盖 GPU 或 memory data。
- Unreal support 的 profiler claim 只放在 dotTrace：使用 standalone Unreal Engine application profiling，需要 symbols / PDBs；native call stack data 使用 Timeline；可收集 native allocation data。
- dotMemory 定位为 .NET memory profiler：回答 managed allocations、leaks、retained objects、GC pressure 等问题。不要把它说成 Unity Memory Profiler 或 Unreal Memory Insights 的替代品。
- dotCover 定位为 .NET / Unity-test coverage where supported。注意当前 dotCover changelog 中关于 Mono / Unity runtime support removed until Unity switches to CoreCLR 的兼容性 caveat；不要宣称 Unreal C++ coverage。
- Unreal Insights 仍是一等引擎工具：CPU / GPU timing tracks、Memory Insights、trace sessions、allocation / leak queries 都应由 Unreal native tooling 作为事实源。
- Unity Profiler / Unity Memory Profiler 仍是一等引擎工具：CPU、GPU、rendering、memory、audio 等 module diagnosis 和 memory snapshot compare 都应由 Unity native tooling 作为事实源。
