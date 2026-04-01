# Survival of the Best Fit 游戏汉化规划

## 项目概览

Survival of the Best Fit 是一个教育类网页游戏，旨在展示AI在招聘过程中可能存在的偏见问题。游戏通过交互式体验让用户了解算法偏见如何影响招聘决策。

**技术栈：**
- 前端框架：原生 JavaScript + Pug 模板引擎
- 构建工具：Gulp
- 样式：SCSS

## 主要文本资源位置

### 1. 核心游戏文本
- **文件路径**: `game-source/public/game/assets/text/textTemplate.js`
- **内容**: 包含90%以上的游戏文本，包括：
  - 游戏标题、副标题
  - 游戏说明和教程
  - 投资者和软件工程师的对话
  - 新闻标题
  - 候选人自我推销信息
  - 统计分析对话

### 2. 简历数据
- **文件路径**: `game-source/public/game/assets/text/cvCollection.js`
- **内容**: 简历特征名称定义
- **相关JSON文件**:
  - `cvData.json` - 候选人数据
  - `equalCvData.json` - 平等候选人数据
  - `badCvTestData.json` / `goodCvTestData.json` / `equalCvTestData.json` - 测试数据

### 3. Pug 模板文件
- **路径**: `game-source/public/game/components/**/*.pug`
- **内容**: UI界面文本，可能包含硬编码文本

## 汉化阶段规划

### 阶段一：创建中文语言包（高优先级）

**任务：**
1. 在 `textTemplate.js` 中添加 `chinese` 对象
2. 参照 `english` 对象的完整结构进行翻译
3. 翻译所有核心文本内容

**翻译内容清单：**
- `header` - 标题和副标题
- `about` - 关于游戏描述
- `resources` - 资源页面文本
- `titleStage` - 开场阶段文本
- `instructions` - 游戏说明
- `smallOfficeStage` / `mediumOfficeStage` / `largeOfficeStage` - 各办公室阶段文本
- `mlTransition` - AI引入阶段文本
- `conversation` - 软件工程师对话（6个步骤）
- `stats_conversation` - 统计分析对话（7个步骤）
- `mlLabStage` - AI实验室阶段叙事（6个部分）
- `selfPromoMessages` - 候选人自我推销信息（18条）

### 阶段二：翻译候选人数据（中优先级）

**任务：**
1. 翻译 `cvCollection.js` 中的简历特征名称
2. 为候选人创建中文译名（可选）
3. 保持特殊候选人 "Elvan Yang" 的原名或译为中文

**特征名称：**
- Skill → 技能
- School Prestige → 学校声望
- Work Experience → 工作经验
- Ambition → 事业心

### 阶段三：检查和翻译 Pug 模板（中优先级）

**任务：**
1. 扫描所有 Pug 模板文件
2. 识别硬编码文本
3. 将文本移至语言包或直接翻译

**需要检查的文件：**
- `ui-desktop.pug`
- `ui-instruction.pug`
- `ui-textbox.pug`
- `yes-no.pug`
- 以及其他界面组件

### 阶段四：配置语言切换（高优先级）

**任务：**
1. 在 `textTemplate.js` 中添加语言切换逻辑
2. 更新 `language` 变量支持 'chinese'
3. 更新 switch 语句
4. 将默认语言设置为中文

### 阶段五：测试和验证（高优先级）

**任务：**
1. 安装项目依赖：`npm install`
2. 运行开发服务器：`npm start`
3. 完整测试游戏流程
4. 验证所有文本正确显示
5. 检查UI布局在中文下的兼容性

## 关键文件清单

| 文件 | 优先级 | 说明 |
|------|--------|------|
| textTemplate.js | 高 | 核心语言文件，包含90%文本 |
| cvCollection.js | 中 | 简历特征定义 |
| *.pug 模板 | 中 | UI界面文本 |
| cvData.json 等 | 低 | 候选人英文名（可选翻译） |

## 注意事项

1. **保持代码结构不变**：翻译时保持对象结构与原英文版本一致
2. **HTML标签保留**：保留文本中的 HTML 标签（如 `<i>`, `<u>`, `<b>`）
3. **特殊字符处理**：注意特殊字符的正确显示
4. **UI布局考虑**：中文文本可能更长，需确保UI正常显示
5. **术语一致性**：保持关键术语翻译的一致性（如 AI、算法、偏见等）

## 翻译原则

- 准确传达原意
- 保持游戏的教育性和严肃性
- 使用通俗易懂的中文表达
- 专业术语使用业界通用译法
