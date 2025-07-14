<template><div><h1 id="十二、typescript-模块" tabindex="-1"><a class="header-anchor" href="#十二、typescript-模块"><span>十二、TypeScript 模块</span></a></h1>
<h2 id="_12-1-简介" tabindex="-1"><a class="header-anchor" href="#_12-1-简介"><span>12.1 简介</span></a></h2>
<p>任何包含 import 或 export 语句的文件，就是一个模块（module）。相应地，如果文件不包含 export 语句，就是一个全局的脚本文件。</p>
<p>模块本身就是一个作用域，不属于全局作用域。模块内部的变量、函数、类只在内部可见，对于模块外部是不可见的。暴露给外部的接口，必须用 export 命令声明；如果其他文件要使用模块的接口，必须用 import 命令来输入。</p>
<p>如果一个文件不包含 export 语句，但是希望把它当作一个模块（即内部变量对外不可见），可以在脚本头部添加一行语句。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面这行语句不产生任何实际作用，但会让当前文件被当作模块处理，所有它的代码都变成了内部代码。</p>
<p>ES 模块的详细介绍，请参考 ES6 教程，这里就不重复了。本章主要介绍 TypeScript 的模块处理。</p>
<p>TypeScript 模块除了支持所有 ES 模块的语法，特别之处在于允许输出和输入类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">Bool</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，当前脚本输出一个类型别名<code v-pre>Bool</code>。这行语句把类型定义和接口输出写在一行，也可以写成两行。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Bool</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> Bool <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假定上面的模块文件为<code v-pre>a.ts</code>，另一个文件<code v-pre>b.ts</code>就可以使用 import 语句，输入这个类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Bool <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./a"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> foo<span class="token operator">:</span> Bool <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，import 语句加载的是一个类型。注意，加载文件写成<code v-pre>./a</code>，没有写脚本文件的后缀名。TypeScript 允许加载模块时，省略模块文件的后缀名，它会自动定位，将<code v-pre>./a</code>定位到<code v-pre>./a.ts</code>。</p>
<p>编译时，可以两个脚本同时编译。</p>
<p>bash</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">$ tsc a<span class="token punctuation">.</span>ts b<span class="token punctuation">.</span>ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令会将<code v-pre>a.ts</code>和<code v-pre>b.ts</code>分别编译成<code v-pre>a.js</code>和<code v-pre>b.js</code>。</p>
<p>也可以只编译<code v-pre>b.ts</code>，因为它是入口脚本，tsc 会自动编译它依赖的所有脚本。</p>
<p>bash</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">$ tsc b<span class="token punctuation">.</span>ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令发现<code v-pre>b.ts</code>依赖<code v-pre>a.js</code>，就会自动寻找<code v-pre>a.ts</code>，也将其同时编译，因此编译产物还是<code v-pre>a.js</code>和<code v-pre>b.js</code>两个文件。</p>
<p>如果想将<code v-pre>a.ts</code>和<code v-pre>b.ts</code>编译成一个文件，可以使用<code v-pre>--outFile</code>参数。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">$ tsc <span class="token operator">--</span>outFile result<span class="token punctuation">.</span>js b<span class="token punctuation">.</span>ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例将<code v-pre>a.ts</code>和<code v-pre>b.ts</code>合并编译为<code v-pre>result.js</code>。</p>
<h2 id="_12-2-import-type-语句" tabindex="-1"><a class="header-anchor" href="#_12-2-import-type-语句"><span>12.2 import type 语句</span></a></h2>
<p>import 在一条语句中，可以同时输入类型和正常接口。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// a.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span></span>
<span class="line">  foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// b.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">A</span><span class="token punctuation">,</span> a <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./a"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，文件<code v-pre>a.ts</code>的 export 语句输出了一个类型<code v-pre>A</code>和一个正常接口<code v-pre>a</code>，另一个文件<code v-pre>b.ts</code>则在同一条语句中输入了类型和正常接口。</p>
<p>这样很不利于区分类型和正常接口，容易造成混淆。为了解决这个问题，TypeScript 引入了两个解决方法。</p>
<p>第一个方法是在 import 语句输入的类型前面加上<code v-pre>type</code>关键字。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">,</span> a <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./a"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，import 语句输入的类型<code v-pre>A</code>前面有<code v-pre>type</code>关键字，表示这是一个类型。</p>
<p>第二个方法是使用 import type 语句，这个语句只能输入类型，不能输入正常接口。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// 正确</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> <span class="token constant">A</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./a"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 报错</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> a <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./a"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，import type 输入类型<code v-pre>A</code>是正确的，但是输入正常接口<code v-pre>a</code>就会报错。</p>
<p>import type 语句也可以输入默认类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token class-name">DefaultType</span> <span class="token keyword">from</span> <span class="token string">"moduleA"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>import type 在一个名称空间下，输入所有类型的写法如下。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token operator">*</span> <span class="token keyword">as</span> TypeNS <span class="token keyword">from</span> <span class="token string">"moduleA"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>同样的，export 语句也有两种方法，表示输出的是类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token string">"a"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token string">"b"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方法一</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">,</span> <span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方法二</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> <span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，方法一是使用<code v-pre>type</code>关键字作为前缀，表示输出的是类型；方法二是使用 export type 语句，表示整行输出的都是类型。</p>
<p>下面是 export type 将一个类作为类型输出的例子。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span></span>
<span class="line">  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Point <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，由于使用了 export type 语句，输出的并不是 Point 这个类，而是 Point 代表的实例类型。输入时，只能作为类型输入。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Point <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./module"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> p<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>Point</code>只能作为类型输入，不能当作正常接口使用。</p>
<h2 id="_12-3-importsnotusedasvalues-编译设置" tabindex="-1"><a class="header-anchor" href="#_12-3-importsnotusedasvalues-编译设置"><span>12.3 importsNotUsedAsValues 编译设置</span></a></h2>
<p>TypeScript 特有的输入类型（type）的 import 语句，编译成 JavaScript 时怎么处理呢？</p>
<p>TypeScript 提供了<code v-pre>importsNotUsedAsValues</code>编译设置项，有三个可能的值。</p>
<p>（1）<code v-pre>remove</code>：这是默认值，自动删除输入类型的 import 语句。</p>
<p>（2）<code v-pre>preserve</code>：保留输入类型的 import 语句。</p>
<p>（3）<code v-pre>error</code>：保留输入类型的 import 语句（与<code v-pre>preserve</code>相同），但是必须写成<code v-pre>import type</code>的形式，否则报错。</p>
<p>请看示例，下面是一个输入类型的 import 语句。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> TypeA <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./a"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>TypeA</code>是一个类型。</p>
<p><code v-pre>remove</code>的编译结果会将该语句删掉。</p>
<p><code v-pre>preserve</code>的编译结果会保留该语句，但会删掉其中涉及类型的部分。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">"./a"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面就是<code v-pre>preserve</code>的编译结果，可以看到编译后的<code v-pre>import</code>语句不从<code v-pre>a.js</code>输入任何接口（包括类型），但是会引发<code v-pre>a.js</code>的执行，因此会保留<code v-pre>a.js</code>里面的副作用。</p>
<p><code v-pre>error</code>的编译结果与<code v-pre>preserve</code>相同，但在编译过程中会报错，因为它要求输入类型的<code v-pre>import</code>语句必须写成<code v-pre>import type</code> 的形式。原始语句改成下面的形式，就不会报错。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TypeA <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./a"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_12-4-commonjs-模块" tabindex="-1"><a class="header-anchor" href="#_12-4-commonjs-模块"><span>12.4 CommonJS 模块</span></a></h2>
<p>CommonJS 是 Node.js 的专用模块格式，与 ES 模块格式不兼容。</p>
<h3 id="_12-4-1-import-语句" tabindex="-1"><a class="header-anchor" href="#_12-4-1-import-语句"><span>12.4.1 import = 语句</span></a></h3>
<p>TypeScript 使用<code v-pre>import =</code>语句输入 CommonJS 模块。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> fs <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> code <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">"hello.ts"</span><span class="token punctuation">,</span> <span class="token string">"utf8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，使用<code v-pre>import =</code>语句和<code v-pre>require()</code>命令输入了一个 CommonJS 模块。模块本身的用法跟 Node.js 是一样的。</p>
<p>除了使用<code v-pre>import =</code>语句，TypeScript 还允许使用<code v-pre>import * as [接口名] from &quot;模块文件&quot;</code>输入 CommonJS 模块。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fs <span class="token keyword">from</span> <span class="token string">"fs"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 等同于</span></span>
<span class="line"><span class="token keyword">import</span> fs <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-4-2-export-语句-​" tabindex="-1"><a class="header-anchor" href="#_12-4-2-export-语句-​"><span>12.4.2 export = 语句 <a href="#export-%E8%AF%AD%E5%8F%A5">​</a></span></a></h3>
<p>TypeScript 使用<code v-pre>export =</code>语句，输出 CommonJS 模块的对象，等同于 CommonJS 的<code v-pre>module.exports</code>对象。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token number">123</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>export =</code> 语句输出的对象，只能使用<code v-pre>import =</code>语句加载。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> obj <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">"./a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 123</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-5-模块定位" tabindex="-1"><a class="header-anchor" href="#_12-5-模块定位"><span>12.5 模块定位</span></a></h2>
<p>模块定位（module resolution）指的是确定 import 语句和 export 语句里面的模块文件位置。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> TypeA <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./a"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，TypeScript 怎么确定<code v-pre>./a</code>到底是指哪一个模块，这就叫做“模块定位”。</p>
<p>模块定位有两种方法，一种称为 Classic 方法，另一种称为 Node 方法。可以使用编译参数<code v-pre>moduleResolution</code>，指定使用哪一种方法。</p>
<p>没有指定定位方法时，就看原始脚本采用什么模块格式。如果模块格式是 CommonJS（即编译时指定<code v-pre>--module commonjs</code>），那么模块定位采用 Node 方法，否则采用 Classic 方法（模块格式为 es2015、 esnext、amd, system, umd 等等）。</p>
<h3 id="_12-5-1-相对模块-非相对模块" tabindex="-1"><a class="header-anchor" href="#_12-5-1-相对模块-非相对模块"><span>12.5.1 相对模块，非相对模块</span></a></h3>
<p>加载模块时，目标模块分为相对模块（relative import）和非相对模块两种（non-relative import）。</p>
<p>相对模块指的是路径以<code v-pre>/</code>、<code v-pre>./</code>、<code v-pre>../</code>开头的模块。下面 import 语句加载的模块，都是相对模块。</p>
<ul>
<li><code v-pre>import Entry from &quot;./components/Entry&quot;;</code></li>
<li><code v-pre>import { DefaultHeaders } from &quot;../constants/http&quot;;</code></li>
<li><code v-pre>import &quot;/mod&quot;;</code></li>
</ul>
<p>非相对模块指的是不带有路径信息的模块。下面 import 语句加载的模块，都是非相对模块。</p>
<ul>
<li><code v-pre>import * as $ from &quot;jquery&quot;;</code></li>
<li><code v-pre>import { Component } from &quot;@angular/core&quot;;</code></li>
</ul>
<h3 id="_12-5-2-classic-方法" tabindex="-1"><a class="header-anchor" href="#_12-5-2-classic-方法"><span>12.5.2 Classic 方法</span></a></h3>
<p>Classic 方法以当前脚本的路径作为“基准路径”，计算相对模块的位置。比如，脚本<code v-pre>a.ts</code>里面有一行代码<code v-pre>import { b } from &quot;./b&quot;</code>，那么 TypeScript 就会在<code v-pre>a.ts</code>所在的目录，查找<code v-pre>b.ts</code>和<code v-pre>b.d.ts</code>。</p>
<p>至于非相对模块，也是以当前脚本的路径作为起点，一层层查找上级目录。比如，脚本<code v-pre>a.ts</code>里面有一行代码<code v-pre>import { b } from &quot;b&quot;</code>，那么就会查找<code v-pre>b.ts</code>和<code v-pre>b.d.ts</code>。</p>
<h3 id="_12-5-3-node-方法" tabindex="-1"><a class="header-anchor" href="#_12-5-3-node-方法"><span>12.5.3 Node 方法</span></a></h3>
<p>Node 方法就是模拟 Node.js 的模块加载方法。</p>
<p>相对模块依然是以当前脚本的路径作为“基准路径”。比如，脚本文件<code v-pre>a.ts</code>里面有一行代码<code v-pre>let x = require(&quot;./b&quot;);</code>，TypeScript 按照以下顺序查找。</p>
<ol>
<li>当前目录是否包含<code v-pre>b.ts</code>、<code v-pre>b.tsx</code>、<code v-pre>b.d.ts</code>。</li>
<li>当前目录是否有子目录<code v-pre>b</code>，该子目录是否存在文件<code v-pre>package.json</code>，该文件的<code v-pre>types</code>字段是否指定了入口文件，如果是的就加载该文件。</li>
<li>当前目录的子目录<code v-pre>b</code>是否包含<code v-pre>index.ts</code>、<code v-pre>index.tsx</code>、<code v-pre>index.d.ts</code>。</li>
</ol>
<p>非相对模块则是以当前脚本的路径作为起点，逐级向上层目录查找是否存在子目录<code v-pre>node_modules</code>。比如，脚本文件<code v-pre>a.js</code>有一行<code v-pre>let x = require(&quot;b&quot;);</code>，TypeScript 按照以下顺序进行查找。</p>
<ol>
<li>当前目录的子目录<code v-pre>node_modules</code>是否包含<code v-pre>b.ts</code>、<code v-pre>b.tsx</code>、<code v-pre>b.d.ts</code>。</li>
<li>当前目录的子目录<code v-pre>node_modules</code>，是否存在文件<code v-pre>package.json</code>，该文件的<code v-pre>types</code>字段是否指定了入口文件，如果是的就加载该文件。</li>
<li>当前目录的子目录<code v-pre>node_modules</code>里面，是否包含子目录<code v-pre>@types</code>，在该目录中查找文件<code v-pre>b.d.ts</code>。</li>
<li>当前目录的子目录<code v-pre>node_modules</code>里面，是否包含子目录<code v-pre>b</code>，在该目录中查找<code v-pre>index.ts</code>、<code v-pre>index.tsx</code>、<code v-pre>index.d.ts</code>。</li>
<li>进入上一层目录，重复上面 4 步，直到找到为止。</li>
</ol>
<h3 id="_12-5-4-路径映射" tabindex="-1"><a class="header-anchor" href="#_12-5-4-路径映射"><span>12.5.4 路径映射</span></a></h3>
<p>TypeScript 允许开发者在<code v-pre>tsconfig.json</code>文件里面，手动指定脚本模块的路径。</p>
<p>（1）baseUrl</p>
<p><code v-pre>baseUrl</code>字段可以手动指定脚本模块的基准目录。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>baseUrl</code>是一个点，表示基准目录就是<code v-pre>tsconfig.json</code>所在的目录。</p>
<p>（2）paths</p>
<p><code v-pre>paths</code>字段指定非相对路径的模块与实际脚本的映射。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"jquery"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"node_modules/jquery/dist/jquery"</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，加载模块<code v-pre>jquery</code>时，实际加载的脚本是<code v-pre>node_modules/jquery/dist/jquery</code>，它的位置要根据<code v-pre>baseUrl</code>字段计算得到。</p>
<p>注意，上例的<code v-pre>jquery</code>属性的值是一个数组，可以指定多个路径。如果第一个脚本路径不存在，那么就加载第二个路径，以此类推。</p>
<p>（3）rootDirs</p>
<p><code v-pre>rootDirs</code>字段指定模块定位时必须查找的其他目录。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"rootDirs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/zh"</span><span class="token punctuation">,</span> <span class="token string">"src/de"</span><span class="token punctuation">,</span> <span class="token string">"src/#{locale}"</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>rootDirs</code>指定了模块定位时，需要查找的不同的国际化目录。</p>
<h3 id="_12-5-5-tsc-的-traceresolution参数" tabindex="-1"><a class="header-anchor" href="#_12-5-5-tsc-的-traceresolution参数"><span>12.5.5 tsc 的<code v-pre>--traceResolution</code>参数</span></a></h3>
<p>由于模块定位的过程很复杂，tsc 命令有一个<code v-pre>--traceResolution</code>参数，能够在编译时在命令行显示模块定位的每一步。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">$ tsc <span class="token parameter variable">--traceResolution</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>traceResolution</code>会输出模块定位的判断过程。</p>
<h3 id="_12-5-6-tsc-的-noresolve参数" tabindex="-1"><a class="header-anchor" href="#_12-5-6-tsc-的-noresolve参数"><span>12.5.6 tsc 的<code v-pre>--noResolve</code>参数</span></a></h3>
<p>tsc 命令的<code v-pre>--noResolve</code>参数，表示模块定位时，只考虑在命令行传入的模块。</p>
<p>举例来说，<code v-pre>app.ts</code>包含如下两行代码。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">A</span> <span class="token keyword">from</span> <span class="token string">"moduleA"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">B</span> <span class="token keyword">from</span> <span class="token string">"moduleB"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用下面的命令进行编译。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">$ tsc app.ts moduleA.ts <span class="token parameter variable">--noResolve</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令使用<code v-pre>--noResolve</code>参数，因此可以定位到<code v-pre>moduleA.ts</code>，因为它从命令行传入了；无法定位到<code v-pre>moduleB</code>，因为它没有传入，因此会报错。</p>
<h2 id="_12-6-参考链接" tabindex="-1"><a class="header-anchor" href="#_12-6-参考链接"><span>12.6 参考链接</span></a></h2>
<ul>
<li><a href="https://blog.51cto.com/u_13028258/5754309" target="_blank" rel="noopener noreferrer">tsconfig 之 importsNotUsedAsValues 属性</a></li>
</ul>
</div></template>


