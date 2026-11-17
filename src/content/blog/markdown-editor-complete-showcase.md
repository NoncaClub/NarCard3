---
title: NarCard 编辑器完整功能与公式展示
description: 一篇可直接作为写作手册使用的示例文章，集中展示 Markdown 排版、代码、提示块、表格、媒体、任务列表与 KaTeX 数学公式。
pubDate: 2026-11-16
tags: [Markdown, Editor, Formula, Showcase]
category: Guide
draft: false
featured: true
---

<p class="drop-cap">这不是一篇只列语法名称的清单，而是一份可以直接阅读、复制和修改的完整样稿。它覆盖 NarCard 编辑器能够生成的主要 Markdown 内容，并展示这些内容进入示例网站后的实际主题效果。</p>

<div class="callout callout-note">
  <strong class="callout-title">阅读提示</strong>
  <p>页面右下角可以切换默认暗夜主题与血月主题。本文中的标题、表格、代码、提示块和公式会随整站配色一起变化。</p>
</div>

## 一、编辑器能完成什么

编辑器采用左侧 Markdown、右侧实时预览的工作区布局。正文之外，还可以维护标题、Slug、发布日期、分类、标签、摘要、封面、替代文本和封面焦点。

| 功能区域 | 能力 | 典型用途 |
| :--- | :--- | :--- |
| Markdown 工具栏 | 标题、强调、列表、引用、代码、表格、链接、图片 | 快速插入常用语法 |
| 实时预览 | 主题排版、代码高亮、公式渲染 | 写作时立即检查最终效果 |
| 文章信息 | 标题、日期、分类、标签、摘要、封面 | 生成完整 Frontmatter |
| 公式编辑器 | 分类符号、模板、收藏、图片/文档辅助输入 | 编写行内与块级 LaTeX |
| 本地工作流 | 打开、导出、写入项目、草稿自动保存 | 在浏览器或桌面端持续写作 |
| 桌面端能力 | 安全文件写入、备份、封面处理、Git 发布 | 维护真实 Astro 项目 |

编辑器状态栏会统计**字数、字符数、行数、代码块数量、语言数量和预计阅读时间**。拖动中间分隔线可以调整写作区比例，双击则恢复为均分布局。

---

## 二、标题层级与主题字形

文章页标题已经承担一级标题的职责；下面仍完整展示六级标题。目录会自动收集二级和三级标题。

# 一级标题：手抄本的门扉

## 二级标题：主要章节

### 三级标题：章节中的小节

#### 四级标题：更细的主题

##### 五级标题：辅助说明

###### 六级标题：最低层级注记

对应源码如下：

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

---

## 三、段落与行内排版

普通正文适合长篇阅读。可以使用 **加粗文字**、*斜体文字*、***粗斜体***、~~删除线~~、<mark>高亮标记</mark> 与 `const theme = "bloodmoon"` 这样的行内代码。

键盘操作可以写成 <kbd>Ctrl</kbd> + <kbd>S</kbd>，化学式可以借助下标写成 H<sub>2</sub>O，指数也可以使用上标写成 2<sup>10</sup>。编辑器原生按钮负责最常用的 Markdown；`kbd`、`sub`、`sup`、`mark` 等增强效果可直接使用安全的行内 HTML。

在一行末尾输入两个空格  
即可产生一个明确的换行，而空行会开始新的段落。

需要显示 Markdown 保留符号时可以转义：\*星号\*、\# 井号、\[方括号\]。

```markdown
**加粗**  *斜体*  ***粗斜体***  ~~删除线~~
`行内代码`  <mark>高亮</mark>  <kbd>Ctrl</kbd> + <kbd>S</kbd>
```

---

## 四、链接、图片与题注

这是一个[站内 Markdown 主题页](/markdown-theme/)，这是一个带外部标记的 [Astro 官方网站](https://astro.build/)。链接可以附带可选标题，也可以直接显示 URL：<https://example.com>。

普通图片语法：

```markdown
![阅览室示意图](/images/reading-room.svg "NarCard 阅览室")
```

<figure>
  <img src="/images/reading-room.svg" alt="NarCard 阅览室示意图" />
  <figcaption>图 1 — 使用 HTML figure 与 figcaption 为图片添加语义化题注。</figcaption>
</figure>

图片支持替代文本和标题；文章封面还可以单独设置 `coverAlt` 与 `coverPosition`，确保搜索、分享和无障碍信息完整。

---

## 五、引用与嵌套引用

> 字母不是形状，而是凝固在墨里的手势。

引用可以继续嵌套：

> 第一层记录被看见的内容。
>
> > 第二层记录对它的解释。
> >
> > > 第三层留下仍未回答的问题。

```markdown
> 第一层引用
>> 第二层引用
>>> 第三层引用
```

---

## 六、列表与任务清单

### 无序列表

- 文章结构
  - 章节
    - 细节
- 视觉主题
- 发布流程

### 有序列表

1. 填写文章信息。
2. 编写并实时预览正文。
3. 检查公式、链接、图片和代码。
4. 导出或写入站点。

### 任务列表

- [x] 完成标题与摘要
- [x] 检查 Markdown 主题
- [x] 插入数学公式
- [ ] 添加最终封面
- [ ] 发布到正式站点

任务列表由 GFM 渲染，已完成项与未完成项会使用不同的复选框状态。

---

## 七、表格与对齐

表格分隔行中的冒号控制对齐方式：

| 左对齐 | 居中 | 右对齐 |
| :--- | :---: | ---: |
| `:---` | `:---:` | `---:` |
| 标题 | 数学 | 100 |
| 正文 | 代码 | 256 |

```markdown
| 左对齐 | 居中 | 右对齐 |
| :--- | :---: | ---: |
| 标题 | 数学 | 100 |
```

---

## 八、四类提示块

编辑器的提示块按钮能够插入 `note`、`tip`、`warning` 和 `danger` 四类内容。下面是它们在站点主题中的最终效果。

<div class="callout callout-note">
  <strong class="callout-title">Note · 注记</strong>
  <p>补充上下文、定义或不会打断阅读节奏的信息。</p>
</div>

<div class="callout callout-tip">
  <strong class="callout-title">Tip · 技巧</strong>
  <p>给出更快捷的写法、推荐配置或可以立即采用的建议。</p>
</div>

<div class="callout callout-warning">
  <strong class="callout-title">Warning · 警告</strong>
  <p>说明兼容性、数据覆盖、外部资源或操作顺序方面的风险。</p>
</div>

<div class="callout callout-danger">
  <strong class="callout-title">Caution · 危险</strong>
  <p>用于可能造成内容丢失、发布错误或不可逆结果的关键提醒。</p>
</div>

编辑器中输入的源码形式如下；导入站点时会转换成对应的主题组件：

```markdown
::: tip TIP
先在右侧预览确认效果，再写入主站。
:::
```

---

## 九、代码块与语法高亮

工具栏可以插入任意语言标识。编辑器内置大量常见语言高亮，并允许点击预览中的语言标签重新选择语言。

```typescript
interface ArticleMeta {
  title: string;
  tags: string[];
  draft: boolean;
}

const article: ArticleMeta = {
  title: 'NarCard 编辑器完整功能与公式展示',
  tags: ['Markdown', 'Formula'],
  draft: false,
};
```

```python
def reading_time(characters: int, speed: int = 400) -> int:
    """返回至少一分钟的预计阅读时间。"""
    return max(1, round(characters / speed))
```

```bash
npm run check
npm run build
git status --short
```

```json
{
  "theme": "bloodmoon",
  "preview": true,
  "autosave": true
}
```

围栏既可以使用三个反引号，也可以使用三个波浪号。`latex`、`tex`、`math` 与 `katex` 在编辑器预览中还会被识别成块级公式。

---

## 十、数学公式输入方式

编辑器支持行内公式与块级公式，并提供源码模式、可视化预览、自动拉伸、字号调整、输出缩放和公式收藏。

| 输入方式 | Markdown | 用途 |
| :--- | :--- | :--- |
| 行内公式 | `$E = mc^2$` | 与文字在同一行 |
| 块级公式 | `$$...$$` | 独立居中展示 |
| 围栏公式 | ` ```latex ` | 在编辑器中输入多行公式 |
| 文档提取 | TXT、Markdown、LaTeX | 提取公式候选 |
| 图片辅助 | 公式截图 | 本地预览并手动确认 OCR 结果 |

行内示例：质能方程 $E = mc^2$，欧拉恒等式 $e^{i\pi}+1=0$，向量长度 $\lVert \vec{v} \rVert$。

### 分数、根式与上下标

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}, \qquad
\sqrt[n]{x^m} = x^{\frac{m}{n}}
$$

```latex
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
```

### 希腊字母与装饰

$$
\alpha + \beta = \gamma, \qquad
\Delta x \to 0, \qquad
\hat{\theta},\ \bar{x},\ \widetilde{ABC},\ \overrightarrow{AB}
$$

### 极限、导数与对数

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad
f'(x) = \lim_{h \to 0} \frac{f(x+h)-f(x)}{h}
$$

$$
\frac{\partial f}{\partial x}, \qquad
\frac{d^2y}{dx^2}, \qquad
\log_a b = \frac{\ln b}{\ln a}
$$

### 三角函数

$$
\sin^2\theta + \cos^2\theta = 1, \qquad
\tan\theta = \frac{\sin\theta}{\cos\theta}, \qquad
\cosh^2 x - \sinh^2 x = 1
$$

### 积分与大型运算

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

$$
\iint_D f(x,y)\,dA, \qquad
\oint_C \mathbf{F}\cdot d\mathbf{r}, \qquad
\sum_{n=1}^{\infty}\frac{1}{n^2}=\frac{\pi^2}{6}
$$

$$
\prod_{k=1}^{n} k = n!, \qquad
\bigcup_{i=1}^{n} A_i, \qquad
\bigcap_{i=1}^{n} B_i
$$

### 集合、逻辑与关系符号

$$
A \subseteq B, \quad x \in A \cap B, \quad
\forall x \in \mathbb{R},\ \exists y \ge 0:\ y=x^2
$$

$$
p \land q, \qquad p \lor q, \qquad \neg p, \qquad
a \ne b, \quad a \approx b, \quad f(x) \propto x^2
$$

### 括号、取整与组合数

$$
\left(\frac{a+b}{c+d}\right), \qquad
\left\lceil \frac{n}{2} \right\rceil, \qquad
\binom{n}{k}=\frac{n!}{k!(n-k)!}
$$

### 矩阵、行列式与分段函数

$$
A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}, \qquad
\det(A)=\begin{vmatrix}a & b \\ c & d\end{vmatrix}=ad-bc
$$

$$
f(x)=\begin{cases}
x^2, & x \ge 0 \\
-x, & x < 0
\end{cases}
$$

### 多行对齐环境

$$
\begin{aligned}
(a+b)^2
  &= (a+b)(a+b) \\
  &= a^2 + 2ab + b^2
\end{aligned}
$$

### 字体、颜色与字号

$$
\mathrm{Roman}\quad
\mathbf{Bold}\quad
\mathit{Italic}\quad
\mathsf{Sans}\quad
\mathbb{R}\quad
\mathcal{F}\quad
\mathfrak{N}
$$

$$
\color{#c9a96e}{\Large \sum_{k=0}^{n}\binom{n}{k}x^k y^{n-k}}
$$

公式面板还内置二次公式、傅里叶变换、薛定谔方程、泰勒展开、高斯分布、二项式定理、洛必达法则和分部积分等模板。常用结果可以加入收藏夹，在之后的文章中重复使用。

---

## 十一、折叠内容与 HTML 增强

<details>
  <summary>点击展开一个默认收起的章节</summary>
  <p>折叠区适合放答案、补充推导、较长日志或不希望打断主线的说明。</p>
  <ul>
    <li>支持段落与列表</li>
    <li>支持行内代码 <code>npm run build</code></li>
    <li>也可以放置图片或其他 HTML 元素</li>
  </ul>
</details>

<details open>
  <summary>这个章节默认展开</summary>
  <p>为 <code>details</code> 添加 <code>open</code> 属性即可设置初始状态。</p>
</details>

```html
<details>
  <summary>点击展开</summary>
  <p>折叠内容</p>
</details>
```

---

## 十二、脚注与补充资料

正文中的注释可以使用上标链接<sup><a href="#note-1">[1]</a></sup>，也可以在文章末尾建立统一的资料区<sup><a href="#note-2">[2]</a></sup>。

<div class="footnotes">
  <ol>
    <li id="note-1">本文的数学公式由 KaTeX 在构建阶段生成 HTML，因此静态页面加载后无需再次解析公式。</li>
    <li id="note-2">GFM 指 GitHub Flavored Markdown，增加了表格、任务列表、自动链接和删除线等常用语法。</li>
  </ol>
</div>

---

## 十三、Frontmatter 与文章信息

一篇可发布文章应当以 Frontmatter 开头。编辑器的“编辑文章”面板会帮助填写这些字段：

```yaml
---
title: NarCard 编辑器完整功能与公式展示
description: 集中展示 Markdown 与 KaTeX 的示例文章
pubDate: 2026-11-16
tags: [Markdown, Editor, Formula, Showcase]
category: Guide
cover: /images/example-cover.webp
coverAlt: 示例文章封面
coverPosition: center
draft: false
---
```

- `title` 与 `description` 用于文章页、搜索、RSS 和分享元数据。
- `pubDate` 使用 `YYYY-MM-DD`。
- `tags` 会生成标签索引与关联文章入口。
- `coverAlt` 应准确描述图片，而不是重复标题。
- `draft: true` 会阻止文章进入公开列表与静态路由。

---

## 十四、从写作到发布

1. 在“编辑文章”中填写元数据与封面。
2. 使用工具栏插入 Markdown，观察右侧实时预览。
3. 用公式面板选择符号、环境或模板，并确认 KaTeX 输出。
4. 保存草稿；浏览器会自动保留当前文章的本地草稿和布局。
5. 导出 `.md`，或在支持文件系统 API / Tauri 的环境中直接写入 `src/content/blog/`。
6. 运行 `npm run check` 与 `npm run build`。
7. 桌面版可以在确认后调用 Git 工作流发布项目。

<div class="callout callout-warning">
  <strong class="callout-title">发布前检查</strong>
  <p>确认封面版权、外部链接、公式语法、移动端表格宽度和代码中的敏感信息。构建产物不应进入 Git 提交。</p>
</div>

## 十五、可复制的最小文章模板

```markdown
---
title: 我的新文章
description: 用一句话概括文章内容
pubDate: 2026-11-16
tags: [Notes]
category: Notes
draft: false
---

用一个清楚的段落开启文章。

## 第一章

正文、**重点**、`代码` 与行内公式 $E=mc^2$。

$$
\int_a^b f(x)\,dx
$$

> 留下一句值得记住的话。
```

至此，这篇文章本身就是一份功能测试：如果标题、目录、强调、列表、任务框、表格、提示块、代码高亮、图片、折叠区和全部公式都能正确显示，那么从编辑器到示例网站的主要内容链路已经工作正常。
