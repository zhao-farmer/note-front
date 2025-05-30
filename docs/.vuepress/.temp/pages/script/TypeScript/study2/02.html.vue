<template><div><h1 id="二、typescript-基本用法" tabindex="-1"><a class="header-anchor" href="#二、typescript-基本用法"><span>二、TypeScript 基本用法</span></a></h1>
<p>本章介绍 TypeScript 的一些最基本的语法和用法。</p>
<h2 id="_2-1-类型声明" tabindex="-1"><a class="header-anchor" href="#_2-1-类型声明"><span>2.1 类型声明</span></a></h2>
<p>TypeScript 代码最明显的特征，就是为 JavaScript 变量加上了类型声明。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>foo</code>的后面使用冒号，声明了它的类型为<code v-pre>string</code>。</p>
<p>类型声明的写法，一律为在标识符后面添加“冒号 + 类型”。函数参数和返回值，也是这样来声明类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">String</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数<code v-pre>toString()</code>的参数<code v-pre>num</code>的类型是<code v-pre>number</code>。参数列表的圆括号后面，声明了返回值的类型是<code v-pre>string</code>。更详细的介绍，参见《函数》一章。</p>
<p>注意，变量的值应该与声明的类型一致，如果不一致，TypeScript 就会报错。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// 报错</span></span>
<span class="line"><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>foo</code>的类型是字符串，但是赋值为数值<code v-pre>123</code>，TypeScript 就报错了。</p>
<p>另外，TypeScript 规定，变量只有赋值后才能使用，否则就会报错。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>没有赋值就被读取，导致报错。而 JavaScript 允许这种行为，不会报错，没有赋值的变量会返回<code v-pre>undefined</code>。</p>
<h2 id="_2-2-类型推断" tabindex="-1"><a class="header-anchor" href="#_2-2-类型推断"><span>2.2 类型推断</span></a></h2>
<p>类型声明并不是必需的，如果没有，TypeScript 会自己推断类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>foo</code>并没有类型声明，TypeScript 就会推断它的类型。由于它被赋值为一个数值，因此 TypeScript 推断它的类型为<code v-pre>number</code>。</p>
<p>后面，如果变量<code v-pre>foo</code>更改为其他类型的值，跟推断的类型不一致，TypeScript 就会报错。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line">foo <span class="token operator">=</span> <span class="token string">"hello"</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>foo</code>的类型推断为<code v-pre>number</code>，后面赋值为字符串，TypeScript 就报错了。</p>
<p>TypeScript 也可以推断函数的返回值。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">toString</span><span class="token punctuation">(</span>num<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">String</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数<code v-pre>toString()</code>没有声明返回值的类型，但是 TypeScript 推断返回的是字符串。正是因为 TypeScript 的类型推断，所以函数返回值的类型通常是省略不写的。</p>
<p>从这里可以看到，TypeScript 的设计思想是，类型声明是可选的，你可以加，也可以不加。即使不加类型声明，依然是有效的 TypeScript 代码，只是这时不能保证 TypeScript 会正确推断出类型。由于这个原因。所有 JavaScript 代码都是合法的 TypeScript 代码。</p>
<p>这样设计还有一个好处，将以前的 JavaScript 项目改为 TypeScript 项目时，你可以逐步地为老代码添加类型，即使有些代码没有添加，也不会无法运行。</p>
<h2 id="_2-3-typescript-的编译" tabindex="-1"><a class="header-anchor" href="#_2-3-typescript-的编译"><span>2.3 TypeScript 的编译</span></a></h2>
<p>JavaScript 的运行环境（浏览器和 Node.js）不认识 TypeScript 代码。所以，TypeScript 项目要想运行，必须先转为 JavaScript 代码，这个代码转换的过程就叫做“编译”（compile）。</p>
<p>TypeScript 官方没有做运行环境，只提供编译器。编译时，会将类型声明和类型相关的代码全部删除，只留下能运行的 JavaScript 代码，并且不会改变 JavaScript 的运行结果。</p>
<p>因此，TypeScript 的类型检查只是编译时的类型检查，而不是运行时的类型检查。一旦代码编译为 JavaScript，运行时就不再检查类型了。</p>
<h2 id="_2-4-值与类型" tabindex="-1"><a class="header-anchor" href="#_2-4-值与类型"><span>2.4 值与类型</span></a></h2>
<p>学习 TypeScript 需要分清楚“值”（value）和“类型”（type）。</p>
<p>“类型”是针对“值”的，可以视为是后者的一个元属性。每一个值在 TypeScript 里面都是有类型的。比如，<code v-pre>3</code>是一个值，它的类型是<code v-pre>number</code>。</p>
<p>TypeScript 代码只涉及类型，不涉及值。所有跟“值”相关的处理，都由 JavaScript 完成。</p>
<p>这一点务必牢记。TypeScript 项目里面，其实存在两种代码，一种是底层的“值代码”，另一种是上层的“类型代码”。前者使用 JavaScript 语法，后者使用 TypeScript 的类型语法。</p>
<p>它们是可以分离的，TypeScript 的编译过程，实际上就是把“类型代码”全部拿掉，只保留“值代码”。</p>
<p>编写 TypeScript 项目时，不要混淆哪些是值代码，哪些是类型代码。</p>
<h2 id="_2-5-typescript-playground" tabindex="-1"><a class="header-anchor" href="#_2-5-typescript-playground"><span>2.5 TypeScript Playground</span></a></h2>
<p>最简单的 TypeScript 使用方法，就是使用官网的在线编译页面，叫做 <a href="http://www.typescriptlang.org/play/" target="_blank" rel="noopener noreferrer">TypeScript Playground</a>。</p>
<p>只要打开这个网页，把 TypeScript 代码贴进文本框，它就会在当前页面自动编译出 JavaScript 代码，还可以在浏览器执行编译产物。如果编译报错，它也会给出详细的报错信息。</p>
<p>这个页面还具有支持完整的 IDE 支持，可以自动语法提示。此外，它支持把代码片段和编译器设置保存成 URL，分享给他人。</p>
<p>本书的示例都建议放到这个页面，进行查看和编译。</p>
<h2 id="_2-6-tsc-编译器" tabindex="-1"><a class="header-anchor" href="#_2-6-tsc-编译器"><span>2.6 tsc 编译器</span></a></h2>
<p>TypeScript 官方提供的编译器叫做 tsc，可以将 TypeScript 脚本编译成 JavaScript 脚本。本机想要编译 TypeScript 代码，必须安装 tsc。</p>
<p>根据约定，TypeScript 脚本文件使用<code v-pre>.ts</code>后缀名，JavaScript 脚本文件使用<code v-pre>.js</code>后缀名。tsc 的作用就是把<code v-pre>.ts</code>脚本转变成<code v-pre>.js</code>脚本。</p>
<h3 id="_2-6-1-安装" tabindex="-1"><a class="header-anchor" href="#_2-6-1-安装"><span>2.6.1 安装</span></a></h3>
<p>tsc 是一个 npm 模块，使用下面的命令安装（必须先安装 npm）。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令是全局安装 tsc，也可以在项目中将 tsc 安装为一个依赖模块。</p>
<p>安装完成后，检查一下是否安装成功。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 或者 tsc --version</span></span>
<span class="line">$ tsc <span class="token parameter variable">-v</span></span>
<span class="line">Version <span class="token number">5.1</span>.6</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令中，<code v-pre>-v</code>或<code v-pre>--version</code>参数可以输出当前安装的 tsc 版本。</p>
<h3 id="_2-6-2-帮助信息" tabindex="-1"><a class="header-anchor" href="#_2-6-2-帮助信息"><span>2.6.2 帮助信息</span></a></h3>
<p><code v-pre>-h</code>或<code v-pre>--help</code>参数输出帮助信息。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc <span class="token parameter variable">-h</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>默认情况下，“--help”参数仅显示基本的可用选项。我们可以使用“--all”参数，查看完整的帮助信息。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc <span class="token parameter variable">--all</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-6-3-编译脚本" tabindex="-1"><a class="header-anchor" href="#_2-6-3-编译脚本"><span>2.6.3 编译脚本</span></a></h3>
<p>安装 tsc 之后，就可以编译 TypeScript 脚本了。</p>
<p><code v-pre>tsc</code>命令后面，加上 TypeScript 脚本文件，就可以将其编译成 JavaScript 脚本。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc app.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令会在当前目录下，生成一个<code v-pre>app.js</code>脚本文件，这个脚本就完全是编译后生成的 JavaScript 代码。</p>
<p><code v-pre>tsc</code>命令也可以一次编译多个 TypeScript 脚本。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc file1.ts file2.ts file3.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令会在当前目录生成三个 JavaScript 脚本文件<code v-pre>file1.js</code>、<code v-pre>file2.js</code>、<code v-pre>file3.js</code>。</p>
<p>tsc 有很多参数，可以调整编译行为。</p>
<p><strong>（1）--outFile</strong></p>
<p>如果想将多个 TypeScript 脚本编译成一个 JavaScript 文件，使用<code v-pre>--outFile</code>参数。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc file1.ts file2.ts <span class="token parameter variable">--outFile</span> app.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令将<code v-pre>file1.ts</code>和<code v-pre>file2.ts</code>两个脚本编译成一个 JavaScript 文件<code v-pre>app.js</code>。</p>
<p><strong>（2）--outDir</strong></p>
<p>编译结果默认都保存在当前目录，<code v-pre>--outDir</code>参数可以指定保存到其他目录。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc app.ts <span class="token parameter variable">--outDir</span> dist</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令会在<code v-pre>dist</code>子目录下生成<code v-pre>app.js</code>。</p>
<p><strong>（3）--target</strong></p>
<p>为了保证编译结果能在各种 JavaScript 引擎运行，tsc 默认会将 TypeScript 代码编译成很低版本的 JavaScript，即 3.0 版本（以<code v-pre>es3</code>表示）。这通常不是我们想要的结果。</p>
<p>这时可以使用<code v-pre>--target</code>参数，指定编译后的 JavaScript 版本。建议使用<code v-pre>es2015</code>，或者更新版本。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc <span class="token parameter variable">--target</span> es2015 app.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-6-4-编译错误的处理" tabindex="-1"><a class="header-anchor" href="#_2-6-4-编译错误的处理"><span>2.6.4 编译错误的处理</span></a></h3>
<p>编译过程中，如果没有报错，<code v-pre>tsc</code>命令不会有任何显示。所以，如果你没有看到任何提示，就表示编译成功了。</p>
<p>如果编译报错，<code v-pre>tsc</code>命令就会显示报错信息，但是这种情况下，依然会编译生成 JavaScript 脚本。</p>
<p>举例来说，下面是一个错误的 TypeScript 脚本<code v-pre>app.ts</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// app.ts</span></span>
<span class="line"><span class="token keyword">let</span> foo<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line">foo <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>foo</code>是数值类型，赋值为字符串，<code v-pre>tsc</code>命令编译这个脚本就会报错。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc app.ts</span>
<span class="line"></span>
<span class="line">app.ts:2:1 - error TS2322: Type <span class="token string">'string'</span> is not assignable to <span class="token builtin class-name">type</span> <span class="token string">'number'</span><span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"><span class="token number">2</span> foo <span class="token operator">=</span> <span class="token string">'abc'</span><span class="token punctuation">;</span></span>
<span class="line">  ~~~</span>
<span class="line"></span>
<span class="line">Found <span class="token number">1</span> error <span class="token keyword">in</span> app.ts:2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>tsc</code>命令输出报错信息，表示变量<code v-pre>foo</code>被错误地赋值为字符串。</p>
<p>这种情况下，编译产物<code v-pre>app.js</code>还是会照样生成，下面就是编译后的结果。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// app.js</span></span>
<span class="line"><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line">foo <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，尽管有错，tsc 依然原样将 TypeScript 编译成 JavaScript 脚本。</p>
<p>这是因为 TypeScript 团队认为，编译器的作用只是给出编译错误，至于怎么处理这些错误，那就是开发者自己的判断了。开发者更了解自己的代码，所以不管怎样，编译产物都会生成，让开发者决定下一步怎么处理。</p>
<p>如果希望一旦报错就停止编译，不生成编译产物，可以使用<code v-pre>--noEmitOnError</code>参数。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc <span class="token parameter variable">--noEmitOnError</span> app.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令在报错后，就不会生成<code v-pre>app.js</code>。</p>
<p>tsc 还有一个<code v-pre>--noEmit</code>参数，只检查类型是否正确，不生成 JavaScript 文件。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc <span class="token parameter variable">--noEmit</span> app.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令只检查是否有编译错误，不会生成<code v-pre>app.js</code>。</p>
<p>tsc 命令的更多参数，详见《tsc 编译器》一章。</p>
<h3 id="_2-6-5-tsconfig-json" tabindex="-1"><a class="header-anchor" href="#_2-6-5-tsconfig-json"><span>2.6.5 tsconfig.json</span></a></h3>
<p>TypeScript 允许将<code v-pre>tsc</code>的编译参数，写在配置文件<code v-pre>tsconfig.json</code>。只要当前目录有这个文件，<code v-pre>tsc</code>就会自动读取，所以运行时可以不写参数。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc file1.ts file2.ts <span class="token parameter variable">--outFile</span> dist/app.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面这个命令写成<code v-pre>tsconfig.json</code>，就是下面这样。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"file1.ts"</span><span class="token punctuation">,</span> <span class="token string">"file2.ts"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"outFile"</span><span class="token operator">:</span> <span class="token string">"dist/app.js"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了这个配置文件，编译时直接调用<code v-pre>tsc</code>命令就可以了。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ tsc</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>tsconfig.json</code>的详细介绍，参见《tsconfig.json 配置文件》一章。</p>
<h2 id="_2-7-ts-node-模块" tabindex="-1"><a class="header-anchor" href="#_2-7-ts-node-模块"><span>2.7 ts-node 模块</span></a></h2>
<p><a href="https://github.com/TypeStrong/ts-node" target="_blank" rel="noopener noreferrer">ts-node</a> 是一个非官方的 npm 模块，可以直接运行 TypeScript 代码。</p>
<p>使用时，可以先全局安装它。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> ts-node</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装后，就可以直接运行 TypeScript 脚本。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ ts-node script.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令运行了 TypeScript 脚本<code v-pre>script.ts</code>，给出运行结果。</p>
<p>如果不安装 ts-node，也可以通过 npx 调用它来运行 TypeScript 脚本。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ npx ts-node script.ts</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令中，<code v-pre>npx</code>会在线调用 ts-node，从而在不安装的情况下，运行<code v-pre>script.ts</code>。</p>
<p>如果执行 ts-node 命令不带有任何参数，它会提供一个 TypeScript 的命令行 REPL 运行环境，你可以在这个环境中输入 TypeScript 代码，逐行执行。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ ts-node</span>
<span class="line"><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，单独运行<code v-pre>ts-node</code>命令，会给出一个大于号，这就是 TypeScript 的 REPL 运行环境，可以逐行输入代码运行。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">$ ts-node</span>
<span class="line"><span class="token operator">></span> const twice <span class="token operator">=</span> <span class="token punctuation">(</span>x:string<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> x + x<span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">></span> twice<span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token string">'abcabc'</span></span>
<span class="line"><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，在 TypeScript 命令行 REPL 环境中，先输入一个函数<code v-pre>twice</code>，然后调用该函数，就会得到结果。</p>
<p>要退出这个 REPL 环境，可以按下 Ctrl + d，或者输入<code v-pre>.exit</code>。</p>
<p>如果只是想简单运行 TypeScript 代码看看结果，ts-node 不失为一个便捷的方法。</p>
</div></template>


