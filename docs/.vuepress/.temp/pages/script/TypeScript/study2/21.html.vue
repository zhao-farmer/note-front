<template><div><h1 id="二十一、typescript-的注释指令" tabindex="-1"><a class="header-anchor" href="#二十一、typescript-的注释指令"><span>二十一、TypeScript 的注释指令</span></a></h1>
<p>TypeScript 接受一些注释指令。</p>
<p>所谓“注释指令”，指的是采用 JS 双斜杠注释的形式，向编译器发出的命令。</p>
<h2 id="_21-1-ts-nocheck" tabindex="-1"><a class="header-anchor" href="#_21-1-ts-nocheck"><span>21.1 <code v-pre>// @ts-nocheck</code></span></a></h2>
<p><code v-pre>// @ts-nocheck</code>告诉编译器不对当前脚本进行类型检查，可以用于 TypeScript 脚本，也可以用于 JavaScript 脚本。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// @ts-nocheck</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>document.getElementById(123)</code>存在类型错误，但是编译器不对该脚本进行类型检查，所以不会报错。</p>
<h2 id="_21-2-ts-check" tabindex="-1"><a class="header-anchor" href="#_21-2-ts-check"><span>21.2 <code v-pre>// @ts-check</code></span></a></h2>
<p>如果一个 JavaScript 脚本顶部添加了<code v-pre>// @ts-check</code>，那么编译器将对该脚本进行类型检查，不论是否启用了<code v-pre>checkJs</code>编译选项。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// @ts-check</span></span>
<span class="line"><span class="token keyword">let</span> isChecked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>isChceked<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例是一个 JavaScript 脚本，<code v-pre>// @ts-check</code>告诉 TypeScript 编译器对其进行类型检查，所以最后一行会报错，提示拼写错误。</p>
<h2 id="_21-3-ts-ignore" tabindex="-1"><a class="header-anchor" href="#_21-3-ts-ignore"><span>21.3 <code v-pre>// @ts-ignore</code></span></a></h2>
<p><code v-pre>// @ts-ignore</code>或<code v-pre>// @ts-expect-error</code>，告诉编译器不对下一行代码进行类型检查，可以用于 TypeScript 脚本，也可以用于 JavaScript 脚本。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// @ts-expect-error</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 不报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，最后一行是类型错误，变量<code v-pre>x</code>的类型是<code v-pre>number</code>，不能等于布尔值。但是因为前面加上了<code v-pre>// @ts-expect-error</code>，编译器会跳过这一行的类型检查，所以不会报错。</p>
<h2 id="_21-4-jsdoc" tabindex="-1"><a class="header-anchor" href="#_21-4-jsdoc"><span>21.4 JSDoc</span></a></h2>
<p>TypeScript 直接处理 JS 文件时，如果无法推断出类型，会使用 JS 脚本里面的 JSDoc 注释。</p>
<p>使用 JSDoc 时，有两个基本要求。</p>
<p>（1）JSDoc 注释必须以<code v-pre>/**</code>开始，其中星号（<code v-pre>*</code>）的数量必须为两个。若使用其他形式的多行注释，则 JSDoc 会忽略该条注释。</p>
<p>（2）JSDoc 注释必须与它描述的代码处于相邻的位置，并且注释在上，代码在下。</p>
<p>下面是 JSDoc 的一个简单例子。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> somebody</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>somebody<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello "</span> <span class="token operator">+</span> somebody<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，注释里面的<code v-pre>@param</code>是一个 JSDoc 声明，表示下面的函数<code v-pre>sayHello()</code>的参数<code v-pre>somebody</code>类型为<code v-pre>string</code>。</p>
<p>TypeScript 编译器支持大部分的 JSDoc 声明，下面介绍其中的一些。</p>
<h3 id="_21-4-1-typedef" tabindex="-1"><a class="header-anchor" href="#_21-4-1-typedef"><span>21.4.1 @typedef</span></a></h3>
<p><code v-pre>@typedef</code>命令创建自定义类型，等同于 TypeScript 里面的类型别名。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@typedef</span> <span class="token punctuation">{</span>(number | string)<span class="token punctuation">}</span> NumberLike</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，定义了一个名为<code v-pre>NumberLike</code>的新类型，它是由<code v-pre>number</code>和<code v-pre>string</code>构成的联合类型，等同于 TypeScript 的如下语句。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">NumberLike</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_21-4-2-type" tabindex="-1"><a class="header-anchor" href="#_21-4-2-type"><span>21.4.2 @type</span></a></h3>
<p><code v-pre>@type</code>命令定义变量的类型。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@type</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">let</span> a<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>@type</code>定义了变量<code v-pre>a</code>的类型为<code v-pre>string</code>。</p>
<p>在<code v-pre>@type</code>命令中可以使用由<code v-pre>@typedef</code>命令创建的类型。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@typedef</span> <span class="token punctuation">{</span>(number | string)<span class="token punctuation">}</span> NumberLike</span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@type</span> <span class="token punctuation">{</span>NumberLike<span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>@type</code>命令中允许使用 TypeScript 类型及其语法。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**<span class="token keyword">@type</span> <span class="token punctuation">{</span>true | false<span class="token punctuation">}</span> */</span></span>
<span class="line"><span class="token keyword">let</span> a<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token punctuation">{</span>number[]<span class="token punctuation">}</span> */</span></span>
<span class="line"><span class="token keyword">let</span> b<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token punctuation">{</span>Array&lt;number><span class="token punctuation">}</span> */</span></span>
<span class="line"><span class="token keyword">let</span> c<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> readonly x: number, y?: string <span class="token punctuation">}</span><span class="token punctuation">}</span> */</span></span>
<span class="line"><span class="token keyword">let</span> d<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token punctuation">{</span>(s: string, b: boolean) => number<span class="token punctuation">}</span> */</span></span>
<span class="line"><span class="token keyword">let</span> e<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_21-4-3-param" tabindex="-1"><a class="header-anchor" href="#_21-4-3-param"><span>21.4.3 @param</span></a></h3>
<p><code v-pre>@param</code>命令用于定义函数参数的类型。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>  x</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是可选参数，需要将参数名放在方括号<code v-pre>[]</code>里面。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span>  [x]</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方括号里面，还可以指定参数默认值。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> [x="bar"]</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，参数<code v-pre>x</code>的默认值是字符串<code v-pre>bar</code>。</p>
<h3 id="_21-4-4-return-returns" tabindex="-1"><a class="header-anchor" href="#_21-4-4-return-returns"><span>21.4.4 @return，@returns</span></a></h3>
<p><code v-pre>@return</code>和<code v-pre>@returns</code>命令的作用相同，指定函数返回值的类型。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_21-4-5-extends-和类型修饰符" tabindex="-1"><a class="header-anchor" href="#_21-4-5-extends-和类型修饰符"><span>21.4.5 @extends 和类型修饰符</span></a></h3>
<p><code v-pre>@extends</code>命令用于定义继承的基类。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@extends</span> <span class="token punctuation">{</span>Base<span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@public</code>、<code v-pre>@protected</code>、<code v-pre>@private</code>分别指定类的公开成员、保护成员和私有成员。</p>
<p><code v-pre>@readonly</code>指定只读成员。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@public</span></span>
<span class="line">   * <span class="token keyword">@readonly</span></span>
<span class="line">   */</span></span>
<span class="line">  x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   *  <span class="token keyword">@protected</span></span>
<span class="line">   */</span></span>
<span class="line">  y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


