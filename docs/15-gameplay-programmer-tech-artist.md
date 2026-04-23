# 15｜角色 1｜Gameplay Programmer + Technical Artist

## 页面目标
把最容易感知“效率提升”的两个角色放在一起，形成 demo 友好页。

## 建议 Slidev 布局
- 推荐布局：persona split / left-right
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
左边玩法程序员在 Rider 中迭代 gameplay logic、tests、debugging；右边技术美术在 shader、材质、渲染调试界面中工作。整体像双职业海报。

## 信息图 / 结构图提示词
左右双卡：角色职责 / Rider + AI 如何提效 / 最适合 demo 的场景。

## 页面文案提示词
- Gameplay Programmer：更快实现玩法、调试脚本、验证行为、迭代局部重构。
- Technical Artist：更快处理 shader、材质、渲染相关脚本与问题定位。
- 共同点：他们都需要“懂引擎上下文”的 AI，而不是泛化聊天助手。

## 可直接改写的 Slidev 草图
```md
---
layout: two-cols
---

# Gameplay Programmer + Technical Artist

::left::
### Gameplay Programmer
- 实现更快
- 调试更稳
- 验证更短

::right::
### Technical Artist
- Shader / 材质支持
- 引擎内上下文
- 可视问题更快定位
```

## 讲者备注
这页建议配一个 Unity 或 Unreal shader / test / debug 的实操演示预告。

## 事实锚点（不上屏，用于校正文案）
证据锚点：Unity 文档明确写到 shader files 语法高亮、debugging Unity scripts、running and debugging Unity tests、profiling Unity games；Rider for Unreal 页面列出 Shaders development 及语义与 control-flow analysis。
