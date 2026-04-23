# 04｜The JetBrains Stack｜从个人 IDE 到组织级生产基础设施

## 页面目标
给出全景架构图，让高层看到这不是单点工具，而是完整的生产层级。

## 建议 Slidev 布局
- 推荐布局：architecture / layered
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
层级式软件架构图，四层堆栈悬浮在深色背景上：Human Workspace、Agent Access Layer、Quality Delivery Layer、Governance Layer，每层用不同亮度的紫蓝色发光面板表示。

## 信息图 / 结构图提示词
四层架构建议：1) Rider / ReSharper / ReSharper C++；2) Junie / ACP / MCP Server；3) Qodana / TeamCity / YouTrack；4) AI Enterprise。右侧加一根纵向说明：dotUltimate = developer toolkit。

## 页面文案提示词
- Human Workspace：Rider 负责高保真编码、理解、调试与复核。
- Agent Access Layer：Junie、ACP、MCP 让 agent 进入同一工程上下文。
- Quality Delivery Layer：Qodana、TeamCity、YouTrack 把语义规则延伸到团队工作流。
- Governance Layer：AI Enterprise 负责预算、权限、模型与合规控制。

## 可直接改写的 Slidev 草图
```md
            ---
            layout: center
            ---

            # The JetBrains Stack

            ```mermaid
            flowchart TB
              A[Human Workspace
Rider / ReSharper / ReSharper C++] --> B[Agent Access Layer
Junie / ACP / MCP Server]
              B --> C[Quality Delivery Layer
Qodana / TeamCity / YouTrack]
              C --> D[Governance Layer
AI Enterprise]
            ```
            ```

## 讲者备注
这一页的关键词是“分层”，不是“产品罗列”。让听众看到：JetBrains 已经覆盖从个人开发到团队交付再到组织治理。

## 事实锚点（不上屏，用于校正文案）
证据锚点：Rider 2026.1 带来 ACP Registry；Rider 2025.2 起集成 MCP Server；Junie CLI 可连接运行中的 IDE；Qodana 用原生 JetBrains inspections 和 profiles；AI Enterprise 提供 security、spending、legal compliance 控制。
