export const data = JSON.parse("{\"key\":\"v-0d719fb4\",\"path\":\"/pages/c1edd70a6b7c7872/\",\"title\":\"let 和 const 命令\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"let 和 const 命令\",\"date\":\"2020-02-09T16:00:29.000Z\",\"permalink\":\"/pages/c1edd70a6b7c7872\",\"author\":\"阮一峰\",\"categories\":[\"《ES6 教程》笔记\"],\"tags\":[\"ES6\"]},\"excerpt\":\"<h1 id=\\\"let-和-const-命令\\\" tabindex=\\\"-1\\\"><a class=\\\"header-anchor\\\" href=\\\"#let-和-const-命令\\\" aria-hidden=\\\"true\\\">#</a> let 和 const 命令</h1>\\n<h2 id=\\\"let-命令\\\" tabindex=\\\"-1\\\"><a class=\\\"header-anchor\\\" href=\\\"#let-命令\\\" aria-hidden=\\\"true\\\">#</a> let 命令</h2>\\n<h3 id=\\\"基本用法\\\" tabindex=\\\"-1\\\"><a class=\\\"header-anchor\\\" href=\\\"#基本用法\\\" aria-hidden=\\\"true\\\">#</a> 基本用法</h3>\\n<p>ES6 新增了<code v-pre>let</code>命令，用来声明变量。它的用法类似于<code v-pre>var</code>，但是所声明的变量，<strong>只在<code v-pre>let</code>命令所在的代码块内有效(块级作用域)</strong>。</p>\\n<div class=\\\"language-javascript ext-js line-numbers-mode\\\"><pre v-pre class=\\\"language-javascript\\\"><code>{\\n  let a = 10;\\n  var b = 1;\\n}\\n\\na // ReferenceError: a is not defined.\\nb // 1\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"headers\":[{\"level\":2,\"title\":\"let 命令\",\"slug\":\"let-命令\",\"children\":[{\"level\":3,\"title\":\"基本用法\",\"slug\":\"基本用法\",\"children\":[]},{\"level\":3,\"title\":\"不存在变量提升\",\"slug\":\"不存在变量提升\",\"children\":[]},{\"level\":3,\"title\":\"暂时性死区\",\"slug\":\"暂时性死区\",\"children\":[]},{\"level\":3,\"title\":\"不允许重复声明\",\"slug\":\"不允许重复声明\",\"children\":[]}]},{\"level\":2,\"title\":\"块级作用域\",\"slug\":\"块级作用域\",\"children\":[{\"level\":3,\"title\":\"为什么需要块级作用域？\",\"slug\":\"为什么需要块级作用域\",\"children\":[]},{\"level\":3,\"title\":\"ES6 的块级作用域\",\"slug\":\"es6-的块级作用域\",\"children\":[]},{\"level\":3,\"title\":\"块级作用域与函数声明\",\"slug\":\"块级作用域与函数声明\",\"children\":[]}]},{\"level\":2,\"title\":\"const 命令\",\"slug\":\"const-命令\",\"children\":[{\"level\":3,\"title\":\"基本用法\",\"slug\":\"基本用法-1\",\"children\":[]},{\"level\":3,\"title\":\"本质\",\"slug\":\"本质\",\"children\":[]},{\"level\":3,\"title\":\"ES6 声明变量的六种方法\",\"slug\":\"es6-声明变量的六种方法\",\"children\":[]}]},{\"level\":2,\"title\":\"顶层对象的属性\",\"slug\":\"顶层对象的属性\",\"children\":[]},{\"level\":2,\"title\":\"globalThis 对象\",\"slug\":\"globalthis-对象\",\"children\":[]}]}")