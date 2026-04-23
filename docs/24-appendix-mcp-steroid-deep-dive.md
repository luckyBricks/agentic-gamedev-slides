# 24｜Appendix A2｜MCP Steroid Deep Dive

## 页面目标
给前沿技术型听众的补充页，解释为什么它值得被纳入 deck，但必须被正确定位。

## 建议 Slidev 布局
- 推荐布局：appendix / deep-dive
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
技术架构细部图：MCP client、IDE runtime、PSI/API、debugger、tests、UI state 之间的数据流。研究项目风格，但精致。

## 信息图 / 结构图提示词
上半部分是能力图，下半部分是 caveat 区：Independent research / not official support / use as vision proof。

## 页面文案提示词
- 它证明：agent 若能访问完整 IDE runtime，复杂任务效率会明显提升。
- 它强调：IDE-native access 的价值不在补全，而在 refactor / inspect / debug / test / UI state。
- 它提醒：研究项目不等于正式产品承诺。

## 可直接改写的 Slidev 草图
```md
---
layout: default
---

# Appendix A2
## MCP Steroid Deep Dive
```

## 讲者备注
可以用这页回答“为什么不直接用 Cursor / Claude / Codex”之类的问题，但记得回到官方主路径。

## 事实锚点（不上屏，用于校正文案）
证据锚点：MCP Steroid 官网与 JetBrains Marketplace 页面。
