---
date: 2021-01-12
title: Maker Theme Markdown 语法示例
category: theme
tags:
  - VuePress
---
## Heading (h2)

### h3

#### h4

##### h5

###### h6

### [Heading link](/)

## 链接

### 内部链接

网站内部的链接，将会被转换成 `<router-link>` 用于 SPA 导航。同时，站内的每一个文件夹下的 `README.md` 或者 `index.md` 文件都会被自动编译为 `index.html`，对应的链接将被视为 `/`。

以如下的文件结构为例：

```
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```

假设你现在在 `foo/one.md` 中：

``` md
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
```

### 链接的重定向

VuePress 支持重定向到干净链接。如果一个链接 `/foo` 找不到，VuePress 会自行寻找一个可用的 `/foo/` 或 `/foo.html`。反过来，当 `/foo/` 或 `/foo.html` 中的一个找不到时，VuePress 也会尝试寻找另一个。

::: tip 注意
无论是否使用了 permalink 和 clean-urls 插件，你的相对路径都应该依赖于当前的文件结构来定义。在上面的例子中，即使你将 `/foo/one.md` 的路径设为了 `/foo/one/`，你依然应该通过 `./two.md` 来访问 `/foo/two.md`。
:::

### 外部链接

外部的链接将会被自动地设置为  `target="_blank" rel="noopener noreferrer"`:

- [vuejs.org](https://vuejs.org)
- [VuePress on GitHub](https://github.com/vuejs/vuepress)

你可以自定义通过配置 [config.markdown.externalLinks](https://vuepress.vuejs.org/zh/config/#markdown-externallinks) 来自定义外部链接的特性。

## Front Matter

Maker 提供了对 [YAML front matter](https://jekyllrb.com/docs/frontmatter/) 开箱即用的支持:

``` yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

这些数据可以在当前 markdown 的正文，或者是任意的自定义或主题组件中使用。

想了解更多，请移步官方文档 [Front Matter](https://vuepress.vuejs.org/zh/guide/frontmatter.html#%E5%85%B6%E4%BB%96%E6%A0%BC%E5%BC%8F%E7%9A%84-front-matter)。

## Task List

- [ ] Mercury
- [x] Venus
- [x] Earth (Orbit/Moon)
- [x] Mars
- [ ] Jupiter
- [ ] Saturn
- [ ] Uranus
- [ ] Neptune
- [ ] Comet Haley

## Image (click to zoom in/out)

``` markdown
<!-- new line -->
![space](https://vuepress.vuejs.org/architecture.png)
<!-- new line -->
```

![](https://vuepress.vuejs.org/architecture.png)

## Inline image

Not Bad.![](https://res.smzdm.com/images/emotions/138.png)

## hr

Below is a `<hr>`, I guess.

---

Above is a `<hr>`, I guess.

## List

### Unordered list

+ list item

+ list item

  - list item
  - list item

    + list item

    + list item

### Ordered list

1. list item

2. list item

3. list item
## GitHub 风格的表格

**输入**

``` md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

**输出**

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


## Long Table

| Sun With Face | Grinning Face | Smiling Face  | Grinning Face With Big Eyes | Smiling Face With Smiling Eyes | Full Moon Face  | Grinning Face With Smiling Eyes | Face With Monocle  | Cowboy Hat Face | Thinking Face  | Face Vomiting |
| ------------- |:-------------:| -----:| ------------- |:-------------:| -----:| ------------- |:-------------:| -----:|:-------------:| -----:|
| 🌞     | 😀 | ☺️ | 😃      | 😊 | 🌝 | 😄 | 🧐 | 🤠 | 🤔 | 🤮 |
| 🌞     | 😀 | ☺️ | 😃      | 😊 | 🌝 | 😄 | 🧐 | 🤠 | 🤔 | 🤮 |
| 🌞     | 😀 | ☺️ | 😃      | 😊 | 🌝 | 😄 | 🧐 | 🤠 | 🤔 | 🤮 |

## Blockquote

> 要么是酒，要么是女人，要么是神，家族，王，梦想，子女，力量，人如果不沉醉于某些东西估计都撑不下去吧，所有人都是某些东西的奴隶，就连那家伙... 
  
  *-- 凯尼?阿克曼 《进击的巨人》*

## Code Block

``` js
// 第 3 版规范的最终设计
try {
  doSomething();
} catch (e) {
  if (e == "thing")
    console.log("a thing")
  else if (e == 42)
    console.log("42")
  else {
    console.log(e);
    throw e; // 重新 throw
  }
} finally {
  cleanup();
}
```

## Emoji

**输入**

```
:tada: :100:
```

**输出**

:tada: :100:

你可以在[这个列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)找到所有可用的 Emoji。

## 自定义容器 <Badge text="默认主题"/>

**输入**

```md
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```

**输出**

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

你也可以自定义块中的标题：

````md
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::
````

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

**参考:**

- [vuepress-plugin-container](https://vuepress.github.io/plugins/container/)

## 代码块中的语法高亮

VuePress 使用了 [Prism](https://prismjs.com/) 来为 markdown 中的代码块实现语法高亮。Prism 支持大量的编程语言，你需要做的只是在代码块的开始倒勾中附加一个有效的语言别名：

**输入**

````
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
````

**输出**

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

**输入**

````
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
````

**输出**

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

在 Prism 的网站上查看 [合法的语言列表](https://prismjs.com/#languages-list)。


## 代码块中的行高亮

**输入**

````
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**输出**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单行以外，你也可指定多行，行数区间，或是两者都指定。

- 行数区间: 例如 `{5-8}`, `{3-10}`, `{10-17}`
- 多个单行: 例如 `{4,7,9}`
- 行数区间与多个单行: 例如 `{4,7-13,16,23-27,40}`

**Input**

````
``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```
````

**Output**

``` js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

## 行号

你可以通过配置来为每个代码块显示行号：

``` js
// .vuepress/config.js -> markdown

module.exports = {
  markdown: {
    lineNumbers: true
  }
}
```

## 导入代码段 <Badge text="beta" type="warning"/>

你可以通过下述的语法导入已经存在的文件中的代码段：

``` md
<<< @/filepath
```

它也支持 [行高亮](#代码块中的行高亮)：

``` md
<<< @/filepath{highlightLines}
```

**输入**

```
<<< @/../@vuepress/markdown/__tests__/fragments/snippet.js{2}
```

**输出**

<!--lint disable strong-marker-->

<<< @/blog/.vuepress/__tests__/snippet.js{2}

<!--lint enable strong-marker-->

::: tip 注意
由于代码段的导入将在 webpack 编译之前执行，因此你无法使用 webpack 中的路径别名，此处的 `@` 默认值是 `process.cwd()`。
:::


为了只导入对应部分的代码，你也可运用 [VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding)。你可以在文件路径后方的 `#` 紧接着提供一个自定义的区域名称（预设为 `snippet` ）

**输入**

``` md
<<< @/../@vuepress/markdown/__tests__/fragments/snippet-with-region.js#snippet{1}
```

**代码文件**

<!--lint disable strong-marker-->

<<< @/blog/.vuepress/__tests__/snippet-with-region.js

<!--lint enable strong-marker-->

**输出**

<!--lint disable strong-marker-->

<<< @/blog/.vuepress/__tests__/snippet-with-region.js#snippet{1}

<!--lint enable strong-marker-->

## 进阶配置

VuePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来渲染 Markdown，上述大多数的拓展也都是通过自定义的插件实现的。想要进一步的话，你可以通过 `.vuepress/config.js` 的 `markdown` 选项，来对当前的 `markdown-it` 实例做一些自定义的配置：

``` js
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

## mark

==Marked text==

### Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

### Abbreviations

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

