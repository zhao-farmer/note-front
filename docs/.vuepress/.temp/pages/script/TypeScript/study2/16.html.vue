<template><div><h1 id="十六、declare-关键字" tabindex="-1"><a class="header-anchor" href="#十六、declare-关键字"><span>十六、declare 关键字</span></a></h1>
<h2 id="_16-1-简介" tabindex="-1"><a class="header-anchor" href="#_16-1-简介"><span>16.1 简介</span></a></h2>
<p>declare 关键字用来告诉编译器，某个类型是存在的，可以在当前文件中使用。</p>
<p>它的主要作用，就是让当前文件可以使用其他文件声明的类型。举例来说，自己的脚本使用外部库定义的函数，编译器会因为不知道外部函数的类型定义而报错，这时就可以在自己的脚本里面使用<code v-pre>declare</code>关键字，告诉编译器外部函数的类型。这样的话，编译单个脚本就不会因为使用了外部类型而报错。</p>
<p>declare 关键字可以描述以下类型。</p>
<ul>
<li>变量（const、let、var 命令声明）</li>
<li>type 或者 interface 命令声明的类型</li>
<li>class</li>
<li>enum</li>
<li>函数（function）</li>
<li>模块（module）</li>
<li>命名空间（namespace）</li>
</ul>
<p>declare 关键字的重要特点是，它只是通知编译器某个类型是存在的，不用给出具体实现。比如，只描述函数的类型，不给出函数的实现，如果不使用<code v-pre>declare</code>，这是做不到的。</p>
<p>declare 只能用来描述已经存在的变量和数据结构，不能用来声明新的变量和数据结构。另外，所有 declare 语句都不会出现在编译后的文件里面。</p>
<h2 id="_16-2-declare-variable" tabindex="-1"><a class="header-anchor" href="#_16-2-declare-variable"><span>16.2 declare variable</span></a></h2>
<p>declare 关键字可以给出外部变量的类型描述。</p>
<p>举例来说，当前脚本使用了其他脚本定义的全局变量<code v-pre>x</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">x <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>是其他脚本定义的，当前脚本不知道它的类型，编译器就会报错。</p>
<p>这时使用 declare 命令给出它的类型，就不会报错了。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 declare 关键字没有给出变量的具体类型，那么变量类型就是<code v-pre>any</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">let</span> x<span class="token punctuation">;</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，变量<code v-pre>x</code>的类型为<code v-pre>any</code>。</p>
<p>下面的例子是脚本使用浏览器全局对象<code v-pre>document</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">var</span> document<span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，declare 告诉编译器，变量<code v-pre>document</code>的类型是外部定义的（具体定义在 TypeScript 内置文件<code v-pre>lib.d.ts</code>）。</p>
<p>如果 TypeScript 没有找到<code v-pre>document</code>的外部定义，这里就会假定它的类型是<code v-pre>any</code>。</p>
<p>注意，declare 关键字只用来给出类型描述，是纯的类型代码，不允许设置变量的初始值，即不能涉及值。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// 报错</span></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">let</span> x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，declare 设置了变量的初始值，结果就报错了。</p>
<h2 id="_16-3-declare-function" tabindex="-1"><a class="header-anchor" href="#_16-3-declare-function"><span>16.3 declare function</span></a></h2>
<p>declare 关键字可以给出外部函数的类型描述。</p>
<p>下面是一个例子。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，declare 命令给出了<code v-pre>sayHello()</code>的类型描述，因此可以直接使用它。</p>
<p>注意，这种单独的函数类型声明语句，只能用于<code v-pre>declare</code>命令后面。一方面，TypeScript 不支持单独的函数类型声明语句；另一方面，declare 关键字后面也不能带有函数的具体实现。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// 报错</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">"你好，"</span> <span class="token operator">+</span> name<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，单独写函数的类型声明就会报错。</p>
<h2 id="_16-4-declare-class-​" tabindex="-1"><a class="header-anchor" href="#_16-4-declare-class-​"><span>16.4 declare class <a href="#declare-class">​</a></span></a></h2>
<p>declare 给出 class 的描述描述写法如下。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个复杂一点的例子。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 静态成员</span></span>
<span class="line">  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">s0</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">private</span> <span class="token keyword">static</span> s1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 属性</span></span>
<span class="line">  <span class="token keyword">public</span> a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">private</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 构造函数</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 方法</span></span>
<span class="line">  <span class="token function">m</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 存取器</span></span>
<span class="line">  <span class="token keyword">get</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">set</span> <span class="token function">c</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 索引签名</span></span>
<span class="line">  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样的，declare 后面不能给出 Class 的具体实现或初始值。</p>
<h2 id="_16-5-declare-module-declare-namespace" tabindex="-1"><a class="header-anchor" href="#_16-5-declare-module-declare-namespace"><span>16.5 declare module，declare namespace</span></a></h2>
<p>如果想把变量、函数、类组织在一起，可以将 declare 与 module 或 namespace 一起使用。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">namespace</span> AnimalLib <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">type</span> <span class="token class-name">Animals</span> <span class="token operator">=</span> <span class="token string">"Fish"</span> <span class="token operator">|</span> <span class="token string">"Dog"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 或者</span></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> AnimalLib <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">type</span> <span class="token class-name">Animals</span> <span class="token operator">=</span> <span class="token string">"Fish"</span> <span class="token operator">|</span> <span class="token string">"Dog"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，declare 关键字给出了 module 或 namespace 的类型描述。</p>
<p>declare module 和 declare namespace 里面，加不加 export 关键字都可以。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">namespace</span> Foo <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">var</span> a<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"io"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">readFile</span><span class="token punctuation">(</span>filename<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，namespace 和 module 里面使用了 export 关键字。</p>
<p>下面的例子是当前脚本使用了<code v-pre>myLib</code>这个外部库，它有方法<code v-pre>makeGreeting()</code>和属性<code v-pre>numberOfGreetings</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> myLib<span class="token punctuation">.</span><span class="token function">makeGreeting</span><span class="token punctuation">(</span><span class="token string">"你好"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"欢迎词："</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> count <span class="token operator">=</span> myLib<span class="token punctuation">.</span>numberOfGreetings<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>myLib</code>的类型描述就可以这样写。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">namespace</span> myLib <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">makeGreeting</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> numberOfGreetings<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>declare 关键字的另一个用途，是为外部模块添加属性和方法时，给出新增部分的类型描述。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Foo <span class="token keyword">as</span> Bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"moduleA"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"moduleA"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span></span>
<span class="line">    custom<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      prop1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，从模块<code v-pre>moduleA</code>导入了<code v-pre>Foo</code>接口，将其重命名为<code v-pre>Bar</code>，并用 declare 关键字为<code v-pre>Bar</code>增加一个属性<code v-pre>custom</code>。</p>
<p>下面是另一个例子。一个项目有多个模块，可以在一个模型中，对另一个模块的接口进行类型扩展。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// a.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span></span>
<span class="line">  x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// b.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">A</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./a"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"./a"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span></span>
<span class="line">    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> a<span class="token operator">:</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，脚本<code v-pre>a.ts</code>定义了一个接口<code v-pre>A</code>，脚本<code v-pre>b.ts</code>为这个接口添加了属性<code v-pre>y</code>。<code v-pre>declare module './a' {}</code>表示对<code v-pre>a.ts</code>里面的模块，进行类型声明，而同名 interface 会自动合并，所以等同于扩展类型。</p>
<p>使用这种语法进行模块的类型扩展时，有两点需要注意：</p>
<p>（1）<code v-pre>declare module NAME</code>语法里面的模块名<code v-pre>NAME</code>，跟 import 和 export 的模块名规则是一样的，且必须跟当前文件加载该模块的语句写法（上例<code v-pre>import { A } from './a'</code>）保持一致。</p>
<p>（2）不能创建新的顶层类型。也就是说，只能对<code v-pre>a.ts</code>模块中已经存在的类型进行扩展，不允许增加新的顶层类型，比如新定义一个接口<code v-pre>B</code>。</p>
<p>（3）不能对默认的<code v-pre>default</code>接口进行扩展，只能对 export 命令输出的命名接口进行扩充。这是因为在进行类型扩展时，需要依赖输出的接口名。</p>
<p>某些第三方模块，原始作者没有提供接口类型，这时可以在自己的脚本顶部加上下面一行命令。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"模块名"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 例子</span></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"hot-new-module"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加上上面的命令以后，外部模块即使没有类型，也可以通过编译。但是，从该模块输入的所有接口都将为<code v-pre>any</code>类型。</p>
<p>declare module 描述的模块名可以使用通配符。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"my-plugin-*"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">PluginOptions</span> <span class="token punctuation">{</span></span>
<span class="line">    enabled<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">    priority<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">initialize</span><span class="token punctuation">(</span>options<span class="token operator">:</span> PluginOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token operator">=</span> initialize<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，模块名<code v-pre>my-plugin-*</code>表示适配所有以<code v-pre>my-plugin-</code>开头的模块名（比如<code v-pre>my-plugin-logger</code>）。</p>
<h2 id="_16-6-declare-global" tabindex="-1"><a class="header-anchor" href="#_16-6-declare-global"><span>16.6 declare global</span></a></h2>
<p>如果要为 JavaScript 引擎的原生对象添加属性和方法，可以使用<code v-pre>declare global {}</code>语法。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> global <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">String</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">toSmallString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">String<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toSmallString <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 具体实现</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，为 JavaScript 原生的<code v-pre>String</code>对象添加了<code v-pre>toSmallString()</code>方法。declare global 给出这个新增方法的类型描述。</p>
<p>这个示例第一行的空导出语句<code v-pre>export {}</code>，作用是强制编译器将这个脚本当作模块处理。这是因为<code v-pre>declare global</code>必须用在模块里面。</p>
<p>下面的示例是为 window 对象添加一个属性<code v-pre>myAppConfig</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> global <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">window</span> <span class="token punctuation">{</span></span>
<span class="line">    myAppConfig<span class="token operator">:</span> object<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> config <span class="token operator">=</span> window<span class="token punctuation">.</span>myAppConfig<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>declare global 只能扩充现有对象的类型描述，不能增加新的顶层类型。</p>
<h2 id="_16-7-declare-enum" tabindex="-1"><a class="header-anchor" href="#_16-7-declare-enum"><span>16.7 declare enum</span></a></h2>
<p>declare 关键字给出 enum 类型描述的例子如下，下面的写法都是允许的。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">enum</span> <span class="token constant">E1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">A</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">B</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">enum</span> <span class="token constant">E2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">A</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token keyword">enum</span> <span class="token constant">E3</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">A</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">B</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token keyword">enum</span> <span class="token constant">E4</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">A</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">B</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_16-8-declare-module" tabindex="-1"><a class="header-anchor" href="#_16-8-declare-module"><span>16.8 declare module</span></a></h2>
<p>用于类型声明文件</p>
<p>我们可以为每个模块脚本，定义一个<code v-pre>.d.ts</code>文件，把该脚本用到的类型定义都放在这个文件里面。但是，更方便的做法是为整个项目，定义一个大的<code v-pre>.d.ts</code>文件，在这个文件里面使用<code v-pre>declare module</code>定义每个模块脚本的类型。</p>
<p>下面的示例是<code v-pre>node.d.ts</code>文件的一部分。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"url"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Url</span> <span class="token punctuation">{</span></span>
<span class="line">    protocol<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">    hostname<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">    pathname<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">parse</span><span class="token punctuation">(</span></span>
<span class="line">    urlStr<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">    parseQueryString<span class="token operator">?</span><span class="token punctuation">,</span></span>
<span class="line">    slashesDenoteHost<span class="token operator">?</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token operator">:</span> Url<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"path"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">normalize</span><span class="token punctuation">(</span>p<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">join</span><span class="token punctuation">(</span><span class="token operator">...</span>paths<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">var</span> sep<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>url</code>和<code v-pre>path</code>都是单独的模块脚本，但是它们的类型都定义在<code v-pre>node.d.ts</code>这个文件里面。</p>
<p>使用时，自己的脚本使用三斜杠命令，加载这个类型声明文件。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">/// &lt;reference path="node.d.ts"/></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果没有上面这一行命令，自己的脚本使用外部模块时，就需要在脚本里面使用 declare 命令单独给出外部模块的类型。</p>
</div></template>


