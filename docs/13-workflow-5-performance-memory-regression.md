# 13｜Workflow 5｜Performance / Memory / Regression Triage

## 页面目标
把 deck 从“AI coding”拉高到“游戏体验与运行质量”。

## 建议 Slidev 布局
- 推荐布局：observability / dashboard
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
游戏性能分析控制台：帧时间图、CPU flame chart、memory snapshot、GC spike、call stack，旁边是 Rider/dotTrace/dotMemory 风格的分析面板。

## 信息图 / 结构图提示词
三层仪表盘：Frame Time / Memory / Test Coverage。每层都标注“发现 → 定位 → 修复 → 回归验证”。

## 页面文案提示词
- 游戏研发里，最贵的常常不是“写功能”，而是“修体验”。
- Rider + dotTrace + dotMemory + dotCover 把性能、内存、覆盖率拉进同一套开发工作台。
- 在 agentic workflow 中，分析与复核仍然需要专业工具而不是纯对话界面。

## 可直接改写的 Slidev 草图
```md
---
layout: image-right
---

# Workflow 5
## Performance / Memory / Regression Triage

- dotTrace：性能瓶颈与热点
- dotMemory：内存问题定位
- dotCover：覆盖率与回归保障
```

## 讲者备注
如果面对的是游戏 CTO 或引擎负责人，这页权重可以再升高，因为它直接把 IDE 价值从“写代码”延伸到“保体验”。

## 事实锚点（不上屏，用于校正文案）
证据锚点：dotUltimate 官方包含 dotTrace、dotMemory、dotCover；Rider 2026.1 官方博客提到 Unity Profiler integration；Unity 文档列出 profiling Unity games、Unity Profiler assistance 和 dotCover 集成。
