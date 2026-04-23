# 11｜Workflow 3｜Refactor / Engine Upgrade / API Migration

## 页面目标
让观众理解：AI 给速度，Rider 给安全边界；真正值钱的是安全迁移而不是表面生成。

## 建议 Slidev 布局
- 推荐布局：problem-solution / surgery metaphor
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
高精度手术室视觉隐喻：dependency graph 像血管网络，refactoring 像外科手术，风险点以红色光点标出。中央叠加 IDE 安全重构提示。

## 信息图 / 结构图提示词
三段式：Generate → Analyze → Safely Apply。把“Analyze / Safely Apply”画得更粗更重。

## 页面文案提示词
- AI 擅长起草迁移与大改动初稿。
- Rider 擅长 solution-wide 分析、依赖图、冲突预览与安全重构。
- 对大型游戏工程来说，迁移速度重要，但迁移后 defect leakage 更重要。

## 可直接改写的 Slidev 草图
```md
---
layout: image-left
---

# Workflow 3
## Refactor / Engine Upgrade / API Migration

- Generate the first draft fast
- Analyze whole-project impact
- Apply refactorings safely
- Review before merge
```

## 讲者备注
建议举一个具象例子：从批量 rename 到跨项目 change signature，再到引擎升级时的兼容性调整。

## 事实锚点（不上屏，用于校正文案）
证据锚点：Rider 官方强调原生支持 Unreal project model，使 refactorings 与 quick-fixes 更新 Blueprints、metadata、build files；ReSharper C++ 官方强调其对 Unreal 机制与代码模式的独特理解。
