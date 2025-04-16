<template><div><h1 id="十三、typescript-namespace" tabindex="-1"><a class="header-anchor" href="#十三、typescript-namespace"><span>十三、TypeScript namespace</span></a></h1>
<p>namespace 是一种将相关代码组织在一起的方式，中文译为“命名空间”。</p>
<p>它出现在 ES 模块诞生之前，作为 TypeScript 自己的模块格式而发明的。但是，自从有了 ES 模块，官方已经不推荐使用 namespace 了。</p>
<h2 id="_13-1-基本用法" tabindex="-1"><a class="header-anchor" href="#_13-1-基本用法"><span>13.1 基本用法</span></a></h2>
<p>namespace 用来建立一个容器，内部的所有变量和函数，都必须在这个容器里面使用。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">namespace</span> Utils <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 正确</span></span>
<span class="line">  <span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">"yes"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">Utils<span class="token punctuation">.</span><span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">"no"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，命名空间<code v-pre>Utils</code>里面定义了一个函数<code v-pre>isString()</code>，它只能在<code v-pre>Utils</code>里面使用，如果用于外部就会报错。</p>
<p>如果要在命名空间以外使用内部成员，就必须为该成员加上<code v-pre>export</code>前缀，表示对外输出该成员。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">namespace</span> Utility <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">Utility<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Call me"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">Utility<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"maybe!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，只要加上<code v-pre>export</code>前缀，就可以在命名空间外部使用内部成员。</p>
<p>编译出来的 JavaScript 代码如下。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">var</span> Utility<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>Utility<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  Utility<span class="token punctuation">.</span>log <span class="token operator">=</span> log<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  Utility<span class="token punctuation">.</span>error <span class="token operator">=</span> error<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Utility <span class="token operator">||</span> <span class="token punctuation">(</span>Utility <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，命名空间<code v-pre>Utility</code>变成了 JavaScript 的一个对象，凡是<code v-pre>export</code>的内部成员，都成了该对象的属性。</p>
<p>这就是说，namespace 会变成一个值，保留在编译后的代码中。这一点要小心，它不是纯的类型代码。</p>
<p>namespace 内部还可以使用<code v-pre>import</code>命令输入外部成员，相当于为外部成员起别名。当外部成员的名字比较长时，别名能够简化代码。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">namespace</span> Utils <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> App <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">import</span> isString <span class="token operator">=</span> Utils<span class="token punctuation">.</span>isString<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">"yes"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 等同于</span></span>
<span class="line">  Utils<span class="token punctuation">.</span><span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">"yes"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>import</code>命令指定在命名空间<code v-pre>App</code>里面，外部成员<code v-pre>Utils.isString</code>的别名为<code v-pre>isString</code>。</p>
<p><code v-pre>import</code>命令也可以在 namespace 外部，指定别名。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">namespace</span> Shapes <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">namespace</span> Polygons <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Triangle</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> polygons <span class="token operator">=</span> Shapes<span class="token punctuation">.</span>Polygons<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 等同于 new Shapes.Polygons.Square()</span></span>
<span class="line"><span class="token keyword">let</span> sq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">polygons</span><span class="token punctuation">.</span><span class="token function">Square</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>import</code>命令在命名空间<code v-pre>Shapes</code>的外部，指定 <code v-pre>Shapes.Polygons</code>的别名为<code v-pre>polygons</code>。</p>
<p>namespace 可以嵌套。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">namespace</span> Utils <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">namespace</span> Messaging <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">Utils<span class="token punctuation">.</span>Messaging<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "hello"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，命名空间<code v-pre>Utils</code>内部还有一个命名空间<code v-pre>Messaging</code>。注意，如果要在外部使用<code v-pre>Messaging</code>，必须在它前面加上<code v-pre>export</code>命令。</p>
<p>使用嵌套的命名空间，必须从最外层开始引用，比如<code v-pre>Utils.Messaging.log()</code>。</p>
<p>namespace 不仅可以包含实义代码，还可以包括类型代码。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">namespace</span> <span class="token constant">N</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">MyInterface</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，命令空间<code v-pre>N</code>不仅对外输出类，还对外输出一个接口，它们都可以用作类型。</p>
<p>namespace 与模块的作用是一致的，都是把相关代码组织在一起，对外输出接口。区别是一个文件只能有一个模块，但可以有多个 namespace。由于模块可以取代 namespace，而且是 JavaScript 的标准语法，还不需要编译转换，所以建议总是使用模块，替代 namespace。</p>
<p>如果 namespace 代码放在一个单独的文件里，那么引入这个文件需要使用三斜杠的语法。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">/// &lt;reference path = "SomeFileName.ts" /></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_13-2-namespace-的输出" tabindex="-1"><a class="header-anchor" href="#_13-2-namespace-的输出"><span>13.2 namespace 的输出</span></a></h2>
<p>namespace 本身也可以使用<code v-pre>export</code>命令输出，供其他文件使用。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// shapes.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">namespace</span> Shapes <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Triangle</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例是一个文件<code v-pre>shapes.ts</code>，里面使用<code v-pre>export</code>命令，输出了一个命名空间<code v-pre>Shapes</code>。</p>
<p>其他脚本文件使用<code v-pre>import</code>命令，加载这个命名空间。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// 写法一</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Shapes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./shapes"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Shapes</span><span class="token punctuation">.</span><span class="token function">Triangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 写法二</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> shapes <span class="token keyword">from</span> <span class="token string">"./shapes"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">shapes</span><span class="token punctuation">.</span>Shapes<span class="token punctuation">.</span><span class="token function">Triangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，更好的方法还是建议使用模块，采用模块的输出和输入。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// shapes.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Triangle</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* ... */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Square</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* ... */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// shapeConsumer.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> shapes <span class="token keyword">from</span> <span class="token string">"./shapes"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">shapes</span><span class="token punctuation">.</span><span class="token function">Triangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，使用模块的输出和输入，改写了前面的例子。</p>
<h2 id="_13-3-namespace-的合并" tabindex="-1"><a class="header-anchor" href="#_13-3-namespace-的合并"><span>13.3 namespace 的合并</span></a></h2>
<p>多个同名的 namespace 会自动合并，这一点跟 interface 一样。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">namespace</span> Animals <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">namespace</span> Animals <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Legged</span> <span class="token punctuation">{</span></span>
<span class="line">    numberOfLegs<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 等同于</span></span>
<span class="line"><span class="token keyword">namespace</span> Animals <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Legged</span> <span class="token punctuation">{</span></span>
<span class="line">    numberOfLegs<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样做的目的是，如果同名的命名空间分布在不同的文件中，TypeScript 最终会将它们合并在一起。这样就比较方便扩展别人的代码。</p>
<p>合并命名空间时，命名空间中的非<code v-pre>export</code>的成员不会被合并，但是它们只能在各自的命名空间中使用。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">namespace</span> <span class="token constant">N</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token constant">N</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 正确</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>a</code>是第一个名称空间<code v-pre>N</code>的非对外成员，它只在第一个名称空间可用。</p>
<p>命名空间还可以跟同名函数合并，但是要求同名函数必须在命名空间之前声明。这样做是为了确保先创建出一个函数对象，然后同名的命名空间就相当于给这个函数对象添加额外的属性。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> f<span class="token punctuation">.</span>version<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> f <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">const</span> version <span class="token operator">=</span> <span class="token string">"1.0"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// '1.0'</span></span>
<span class="line">f<span class="token punctuation">.</span>version<span class="token punctuation">;</span> <span class="token comment">// '1.0'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数<code v-pre>f()</code>与命名空间<code v-pre>f</code>合并，相当于命名空间为函数对象<code v-pre>f</code>添加属性。</p>
<p>命名空间也能与同名 class 合并，同样要求 class 必须在命名空间之前声明，原因同上。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span></span>
<span class="line">  foo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token constant">C</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token constant">C</span><span class="token punctuation">.</span>bar<span class="token punctuation">;</span> <span class="token comment">// 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，名称空间<code v-pre>C</code>为类<code v-pre>C</code>添加了一个静态属性<code v-pre>bar</code>。</p>
<p>命名空间还能于同名 Enum 合并。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> <span class="token constant">E</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">A</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">B</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">C</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token constant">E</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">E</span><span class="token punctuation">.</span><span class="token constant">C</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token constant">E</span><span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，命名空间<code v-pre>E</code>为枚举<code v-pre>E</code>添加了一个<code v-pre>foo()</code>方法。</p>
<p>注意，Enum 成员与命名空间导出成员不允许同名。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> <span class="token constant">E</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">A</span><span class="token punctuation">,</span> <span class="token comment">// 报错</span></span>
<span class="line">  <span class="token constant">B</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">namespace</span> <span class="token constant">E</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 报错</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，同名 Enum 与命名空间有同名成员，结果报错。</p>
</div></template>


