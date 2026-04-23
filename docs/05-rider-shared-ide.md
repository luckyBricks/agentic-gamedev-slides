# 05｜Rider = Shared IDE for Human + Agent｜共享 IDE 的定义

## 页面目标
把“共享 IDE”这个概念讲清楚：不是 agent 替代人，而是双方复用同一份工程上下文和工具链。

## 建议 Slidev 布局
- 推荐布局：concept / hub-and-spoke
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
中心是一台打开的 IDE，左右各一只手：左边人类开发者，右边半透明 agent 形象。两边都通过同样的索引、语义分析、build/test 配置、debugger、VCS 工具接入中心。

## 信息图 / 结构图提示词
hub-and-spoke 图：中间 Rider，外圈节点包括 Indexing、Semantic Analysis、Refactoring、Tests、Debugger、Perforce、Engine Context。Human 与 Agent 都接到中间。

## 页面文案提示词
- Shared Context：人和 agent 看到的是同一份项目语义，不是各自猜测。
- Shared Tooling：重构、测试、调试、版本控制都来自同一套 IDE 基建。
- Shared Control：敏感动作可审、可停、可回退，人类仍然掌握放行权。

## 可直接改写的 Slidev 草图
```md
---
layout: image-right
---

# Rider = Shared IDE for Human + Agent

- Shared context
- Shared tooling
- Shared control

<div class="mt-6 opacity-80">人和 agent 共用同一工程工作台，而不是各自持有一个割裂的上下文副本。</div>
```

## 讲者备注
强调“共享”两字。真正的差异不在于能否接入 agent，而在于 agent 是否复用了 IDE 的真实上下文和工具链。

## 事实锚点（不上屏，用于校正文案）
证据锚点：Junie CLI 官方称可连接运行中的 JetBrains IDE，复用 indexing、semantic analysis 以及已有 build/test 配置；Rider 的 MCP Server 允许外部客户端访问 IDE 提供的工具。
