# 02｜Executive Thesis｜稀缺资源从“生成”转向“上下文与控制”

## 页面目标
用管理层语言定义问题：AI 时代真正稀缺的不是生成速度，而是引擎语义、项目上下文、入仓质量与治理。

## 建议 Slidev 布局
- 推荐布局：statement / split / 左大论点右视觉
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
左右对比构图，左侧是廉价 file-only AI workflow：散落文件、红色警告、broken build；右侧是 system-aware workflow：IDE semantic graph、tests、quality gate、agent orchestration。整体像咨询公司高管演示图，克制、冷静、可信。

## 信息图 / 结构图提示词
中间用一个三层漏斗：Code Generation 在上层很宽，Project Context 在中层收窄，Quality & Governance 在底层最稀缺且价值最高。

## 页面文案提示词
- 结论句：在 Agentic GameDev 里，最值钱的不是“更快写出来”，而是“在真实工程约束下写对、测过、放得进主干”。
- 支撑点 1：GameDev 不是单文件写作，而是代码、引擎、资产、流程的系统协作。
- 支撑点 2：越往主干与发布靠近，验证、治理与责任链越重要。
- 支撑点 3：因此，Rider 的价值不止于 IDE，而是共享上下文与控制面。

## 可直接改写的 Slidev 草图
```md
---
layout: two-cols-header
---

# Executive Thesis

::left::
- 最稀缺的不是生成，而是上下文与控制
- 最昂贵的不是写代码，而是改对代码
- 最关键的不是 AI 聊天，而是可验证地入仓

::right::
<HeroVisual />
```

## 讲者备注
这页最好用一句管理层能复述的话收束：AI 让写代码更便宜，反而让上下文、质量门禁和治理更贵。

## 事实锚点（不上屏，用于校正文案）
证据锚点：Qodana 官方定位是把 JetBrains IDE inspections 带入 CI；AI Enterprise 官方强调对 security、spending、legal compliance 的控制。
