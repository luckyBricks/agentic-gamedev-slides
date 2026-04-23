# 03｜Why Generic AI Breaks in GameDev｜通用 AI 为何在游戏研发里失真

## 页面目标
让观众承认：GameDev 对 AI 的难度不在“写代码”，而在“理解引擎、资产、工具链与性能后果”。

## 建议 Slidev 布局
- 推荐布局：problem / four-quadrant
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
四象限信息海报：Unreal 宏与 Blueprints、Unity Prefab/Scene/Shader、Perforce changelist 与 shelve、性能与内存回归曲线。整体像工程风险雷达图，深色背景，带红橙风险标记。

## 信息图 / 结构图提示词
做一个“File View → Project View → Engine View → Delivery View”四级放大镜，每一级暴露新的复杂性。

## 页面文案提示词
- 症状：只会读写文件的 AI，看不到 Blueprint、Prefab、Scene、构建图和性能回归。
- 结果：它能产出代码，但不一定能产出可上线的游戏改动。
- 结论：GameDev 需要的是 system-aware AI，而不是 file-only AI。
- 过桥句：这正是 Rider 这类 IDE-native 能力的价值起点。

## 可直接改写的 Slidev 草图
```md
---
layout: default
---

# Why Generic AI Breaks in GameDev

- Unreal: 宏、Reflection、Blueprints
- Unity: Prefab、Scene、Shader、Tests、Profiler
- Perforce: Changelist、Shelve、锁文件流程
- Shipping: Build、Quality Gate、性能与内存回归
```

## 讲者备注
讲解时不要贬低通用 AI，而是指出它默认优化的是“通用编程任务”，而游戏公司需要的是“引擎化、资产化、流水线化”的工程语境。

## 事实锚点（不上屏，用于校正文案）
证据锚点：Rider 官方对 Unreal 强调对宏、Blueprint、build files 的理解；对 Unity 强调 quick-fixes、tests、profiling、shader、assets；TeamCity 官方强调 Perforce Helix、Unity、Unreal 等游戏开发集成。
