# 计划：将 slides.md 拆分为每页独立文件

## Context

`slides.md` 目前是 827 行的单体文件，包含 26 张幻灯片（主页 1–22 + 附录 A1–A4）。随着内容演进，单文件越来越难以导航和按页设计。Slidev 原生支持通过 `src:` frontmatter 将任意外部 Markdown 文件引入主文件，`pages/` 目录已存在但目前仅有一个示例文件。

目标：**每张幻灯片对应一个独立文件**，`slides.md` 精简为全局配置 + cover 页 + 一列 `src:` 导入。

---

## Approach

使用 Slidev 的 `src:` frontmatter 机制：

```markdown
---
src: ./pages/02-executive-thesis.md
---
```

`src:` 所在 `---` 块中的其余内容会被忽略，只有外部文件内容生效。因此只需：
1. 保留 `slides.md` 中的全局 YAML 前置信息（lines 1–16）和 cover 页（lines 17–42）不动。
2. 将第 2–26 张幻灯片的内容各自提取为 `pages/` 下的独立文件。
3. 在 `slides.md` 中用对应的 `src:` 块替换原内容。

---

## File Changes

### 保留不变
- `slides.md` 开头：全局 YAML frontmatter（title、fonts、transition 等，lines 1–16）
- `slides.md` cover 页（lines 17–43）：layout、chapter 声明 + HTML 内容 + 讲者备注

### 新建（每张幻灯片一个文件）

命名规则：`pages/NN-slug.md`，与 `docs/NN-*.md` 对应。

| 文件 | 对应页 |
|---|---|
| `pages/02-executive-thesis.md` | page 2 |
| `pages/03-why-generic-ai-breaks.md` | page 3 |
| `pages/04-jetbrains-stack.md` | page 4 |
| `pages/05-shared-ide-hub.md` | page 5 |
| `pages/06-acp-mcp-junie.md` | page 6 |
| `pages/07-mcp-steroid.md` | page 7 |
| `pages/08-workflow-0-tool-gen.md` | page 8 |
| `pages/09-workflow-1-issue-plan.md` | page 9 |
| `pages/10-workflow-2-gameplay.md` | page 10 |
| `pages/11-workflow-3-refactor.md` | page 11 |
| `pages/12-workflow-4-quality-gate.md` | page 12 |
| `pages/13-workflow-5-perf-triage.md` | page 13 |
| `pages/14-role-map.md` | page 14 |
| `pages/15-role-1-programmer.md` | page 15 |
| `pages/16-role-2-engine-engineer.md` | page 16 |
| `pages/17-role-3-studio-tools.md` | page 17 |
| `pages/18-role-4-cto.md` | page 18 |
| `pages/19-semantic-moat.md` | page 19 |
| `pages/20-integration-proof.md` | page 20 |
| `pages/21-adoption-roadmap.md` | page 21 |
| `pages/22-closing.md` | page 22 |
| `pages/A1-product-map.md` | page A1 |
| `pages/A2-mcp-steroid-deep-dive.md` | page A2 |
| `pages/A3-demo-menu.md` | page A3 |
| `pages/A4-kpi-framework.md` | page A4 |

### 修改
- `slides.md`：cover 页之后，原有 25 个内容块 → 替换为 25 个 `src:` 导入块

---

## Implementation Steps

### Task 1：提取每张幻灯片内容
对 `slides.md` 中从第 44 行起的每个 `---` 分隔块，完整复制 frontmatter + HTML body + 讲者备注到对应 `pages/NN-slug.md`。

每个 pages 文件格式（以 frontmatter 直接开头，无前导空行）：
```markdown
---
layout: rider
chapter: violet
page: 2
---

<div class="grid grid-cols-12 ...">
  ...
</div>

<!--
讲者备注
-->
```

### Task 2：精简 slides.md
将 cover 页之后的所有内容替换为 25 个 `src:` 导入块，最终 slides.md 约 60 行。

---

## Acceptance Criteria

- `pnpm dev` 启动无报错，全部 26 张幻灯片正常渲染
- 每张幻灯片的 layout、chapter、page、mandalaOpacity 等 frontmatter 属性与原 slides.md 完全一致
- 讲者备注保留在对应 pages 文件中
- `slides.md` 精简为仅含全局配置 + cover + 25 个 `src:` 导入块

---

## Verification

```bash
pnpm dev   # 访问 http://localhost:3030，翻页检查全部 26 张
```

手动抽查 page 2、page 6、page A2，验证 layout 和 chapter color 正确，Presenter View 讲者备注可见。

---

## Risks & Mitigations

| 风险 | 缓解 |
|---|---|
| src: 文件首行有多余空行导致解析出错 | 每个 pages 文件以 `---` frontmatter 直接开头 |
| 全局 frontmatter（fonts、transition）被误移走 | 全局 YAML 保留在 slides.md 第一个 `---` 块内 |
| mandalaOpacity、mandala 等自定义属性漏复制 | 逐页对比原文件，确保所有 frontmatter key 完整 |
