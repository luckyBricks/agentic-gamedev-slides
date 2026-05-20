# 13b｜Workflow 6 — Multi-Agent Bake-off &amp; Follow-the-Sun

## 页面目标
把前 5 个 workflow 都不能覆盖、**只有 Workbench 才能跑通的「多 agent 协作模式」**单独立一页。强调这不是又一个工作流细化，而是一种新的协作颗粒度：之前需要开三个工具、来回粘贴 stack 才能完成的事，现在变成一个 IDE 面板里的 tab 切换。

## 建议 Slidev 布局
- 推荐布局：rider 内建 layout，标题区上方紧凑头部 + 主体 3 列时间轴并排
- 章节色：**amber**（与 06b 同段、与 07 / 13 / 14 之间过渡自然）；mandalaOpacity 0.55
- 风格关键词：A/B 对比、跨时区接力、agent 编排、persistent session、tab 切换

## 主视觉提示词
3 列时间轴（MultiAgentTimeline）并排展开，每列内部 3 步骤：
- Lane 1 / Bake-off：Junie · Claude · Engineer（picks studio-fit agent）
- Lane 2 / Follow-the-Sun：Tokyo · persistent session · Helsinki
- Lane 3 / Junie + Claude 编排：Junie · Claude · Lead（picks plan）

每列顶部一个色块标题区（amber / pink / violet），底部一行 italic 注脚点出本 lane 的核心价值。

## 信息图 / 结构图提示词
每个步骤左侧一个小方块图标（agent icon，38×38），右侧一行 agent role + 一行 detail 文案。三列之间不连横向箭头——读者按列纵向读。

## 页面文案提示词
- 主标题：Multi-Agent Bake-off &amp; Follow-the-Sun
- 引子：「Three patterns the Workbench unlocks — none of them existed before persistent multi-agent sessions.」
- Lane 标题：
  - 01 A/B Bake-off — Junie vs Claude · ~200 file refactor — fair comparison the CTO can cite
  - 02 Follow-the-Sun — Tokyo → Helsinki tools-pipeline refactor — persistent sessions across time zones
  - 03 Junie + Claude — Issue → Plan orchestration — each agent at its strength · human picks the better plan
- 底部 Tip：Granularity of multi-agent collaboration drops from「open another tool」to「tab switch」

## 可直接改写的 Slidev 草图
```md
---
layout: rider
chapter: amber
page: '13b'
mandalaOpacity: 0.55
---
<div class="h-full flex flex-col">
  <Kicker>Workflow 6</Kicker>
  <StatusChip label="New" />
  <h1>Multi-Agent Bake-off &amp; Follow-the-Sun</h1>
  <MultiAgentTimeline />
  <TipChip /> ...tab switch...
</div>
```

## 讲者备注
讲三条 lane 时反复强调「这是 Workbench 独有」、「离开共享 IDE context 跑不通」。Bake-off 是 CTO 论证 license 选型时要的弹药——不是供应商 marketing benchmark。Follow-the-Sun 是 persistent session 第一次让 agent 协作真正支持跨时区研发。Junie + Claude 编排是把多 agent 协作颗粒度降到 tab 切换级别。讲完三条立刻收尾——这页是 13 之后、role map 之前的过渡，不应停留过久。

## 事实锚点（不上屏，用于校正文案）
- Workbench 的 persistent session 与 automatic code context 是官方核心卖点
- 「Bring your own AI agent」战略允许在同一 IDE 内并接 Junie / Claude Code / Codex 等
- A/B bake-off 场景的关键约束：两个 agent 必须共享同一 PSI Index、同一 inspection 引擎，bake-off 结果才公平
- Follow-the-sun 模式来自分布式研发实践（Tokyo / Helsinki / SF 三班接力）；之前 agent session 无法持久化是该模式的最大障碍
