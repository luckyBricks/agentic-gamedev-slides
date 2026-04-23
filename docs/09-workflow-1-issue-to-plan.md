# 09｜Workflow 1｜Issue → Impact Analysis → Plan

## 页面目标
说明 JetBrains 生态如何把“需求/问题”与“代码影响面分析”连接起来，而不是让 agent 直接盲写。

## 建议 Slidev 布局
- 推荐布局：workflow / issue-to-code
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
左侧是 YouTrack issue 卡片，中央是 Rider 中的符号导航、依赖图和值流分析，右侧是 agent 生成的实现计划与验证清单。

## 信息图 / 结构图提示词
用三节点漏斗：Issue / Impact Analysis / Implementation Plan。给中间节点高亮，因为这是通用 AI 最薄弱的一环。

## 页面文案提示词
- 输入：新玩法需求、线上 bug、引擎升级任务。
- 中段：先做影响面分析，而不是立即动手生成代码。
- 输出：可评审的实施计划、改动范围、验证策略与风险点。
- 价值：减少方案返工与误判波及面。

## 可直接改写的 Slidev 草图
```md
---
layout: two-cols
---

# Workflow 1
## Issue → Impact Analysis → Plan

::left::
- 输入：需求 / 缺陷 / 升级任务
- 中段：影响面分析
- 输出：计划 + 风险 + 验证清单

::right::
<IssueToPlanFlow />
```

## 讲者备注
建议强调：真正专业的 agentic workflow，第一步不是 coding，而是 understanding。

## 事实锚点（不上屏，用于校正文案）
证据锚点：YouTrack 可与版本控制关联 issue、commit 与分支；Rider 提供项目级分析与依赖探索。
