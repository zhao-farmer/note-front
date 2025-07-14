<template><div><h1 id="七、mixin混合-重要、用法多" tabindex="-1"><a class="header-anchor" href="#七、mixin混合-重要、用法多"><span>七、Mixin混合（重要、用法多）</span></a></h1>
<p>混合（Mixin）是一种将一组属性从一个规则集包含（或混入）到另一个规则集的方法；通俗地说：混合其实是把某个选择器中的样式拿过来使用
note： 混合后面的括号是可选的，但是可选的括号将在未来的版本中将变成必须的，即提议混合后面加括号</p>
<h2 id="_7-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_7-1-基本使用"><span>7.1 基本使用</span></a></h2>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.public()</span> <span class="token punctuation">{</span>  <span class="token comment">//定义一个类；在定义规则集public的后面加一个括号，就在 CSS 编译中不会出现你定义的规则集</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#test</span> <span class="token punctuation">{</span>  <span class="token comment">//定义一个类 id 选择器</span></span>
<span class="line">   <span class="token property">color</span><span class="token punctuation">:</span> red</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">button</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//使用!important 关键字在 mixin 调用后，为了去标记 mixin 中的所有属性继承通过 !important</span></span>
<span class="line">    .<span class="token function">public</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token important">!important</span><span class="token punctuation">;</span>  <span class="token comment">//混入类选择器</span></span>
<span class="line">    #test <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//混入id选择器 </span></span>
<span class="line">    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//编译成css</span></span>
<span class="line"> <span class="token selector">button</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token important">!important</span><span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token important">!important</span><span class="token punctuation">;</span>  </span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">#test</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100px <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 100px <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-2-extend" tabindex="-1"><a class="header-anchor" href="#_7-2-extend"><span>7.2 Extend</span></a></h2>
<p>在上述的案例中，nav ul把public中的样式继承了过来，但是原理却是把代码copy一份过来，这样编译后的CSS中依然会存留大量的冗余CSS代码，为了避免这一点，我们可以使用extend伪类来实现样式的继承使用</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.public</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">nav ul</span> <span class="token punctuation">{</span></span>
<span class="line">    &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.public<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//继承</span></span>
<span class="line">    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//或者写成</span></span>
<span class="line"><span class="token selector">nav ul:extend(.public)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.public,</span>
<span class="line">nav ul,</span>
<span class="line">nav ul</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">nav ul</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">nav ul</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3-复杂的选择器" tabindex="-1"><a class="header-anchor" href="#_7-3-复杂的选择器"><span>7.3 复杂的选择器</span></a></h2>
<p>混合不只能包含属性，还能包含选择器;</p>
<p>&amp;符号表示当前选择器，在后代中存在&amp;符号不会生成后代</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.myhover()</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">button</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token mixin-usage function">.myhover</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">button:hover</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在更加复杂的选择器中混合属性，可以累积多个 id 和类</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">#outer()</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">.inner-red</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">.inner-blue</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.c</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token mixin-usage function">#outer > .inner-red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.c</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-4-受保护的命名空间" tabindex="-1"><a class="header-anchor" href="#_7-4-受保护的命名空间"><span>7.4 受保护的命名空间</span></a></h2>
<p>一个命令空间受保护的意思是：它里面定义的mixins只有在保护条件返回true时才会被使用</p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token variable">@mode<span class="token punctuation">:</span></span>false<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">#namespace when (<span class="token variable">@mode</span> = huge)</span> <span class="token punctuation">{</span>  <span class="token comment">//命名空间守卫</span></span>
<span class="line">    <span class="token selector">.mixin()</span> <span class="token punctuation">{</span> <span class="token comment">/* */</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//或者写成</span></span>
<span class="line"><span class="token selector">#namespace</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">.mixin() when (<span class="token variable">@mode</span> = huge)</span> <span class="token punctuation">{</span> <span class="token comment">/* */</span> <span class="token punctuation">}</span>   <span class="token comment">//mixins 守卫</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-5-带参数的mixins" tabindex="-1"><a class="header-anchor" href="#_7-5-带参数的mixins"><span>7.5 带参数的mixins</span></a></h2>
<p>mixins可以接受参数，这些参数是mixin调用是传递给选择器的变量；可以接受多个参数，也可以设置默认值；参数以分号或逗号分隔，建议使用分号</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.mixin(<span class="token variable">@color</span>; <span class="token variable">@padding</span>; <span class="token variable">@margin</span>: 8)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">@padding</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span>#008000<span class="token punctuation">,</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #008000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 8 8 8 8<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-1-具名参数" tabindex="-1"><a class="header-anchor" href="#_7-5-1-具名参数"><span>7.5.1 具名参数</span></a></h3>
<p>mixin 传参可以通过它们的名称而不仅仅是位置。任何参数都可以通过它的名称传递，它们不必按照任何特殊的顺序</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.mixin(<span class="token variable">@color</span>; <span class="token variable">@padding</span>; <span class="token variable">@margin</span>: 8)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">@padding</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span> <span class="token variable">@margin</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span>#008000<span class="token punctuation">,</span>2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #008000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 8 8 8 8<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-2-arguments-变量" tabindex="-1"><a class="header-anchor" href="#_7-5-2-arguments-变量"><span>7.5.2 @arguments 变量</span></a></h3>
<p>@arguments 在 mixin 中的含义:当 mixin 被调用时，它包含了所有传入的参数</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.box-shadow(<span class="token variable">@x</span>: 0; <span class="token variable">@y</span>: 0; <span class="token variable">@blur</span>: 1px; <span class="token variable">@color</span>: #000)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">@arguments</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.big-block</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token mixin-usage function">.box-shadow</span><span class="token punctuation">(</span>2px<span class="token punctuation">;</span> 5px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.big-block</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 2px 5px 1px #000<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-3-rest-变量" tabindex="-1"><a class="header-anchor" href="#_7-5-3-rest-变量"><span>7.5.3 @rest 变量</span></a></h3>
<p>如果希望mixin 接受一个可变数量的参数，可以用 … ；在变量名后使用 this 将为变量分配这些参数</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.mixin(<span class="token variable">@color</span>,<span class="token variable">@rest</span>...)</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">@color</span><span class="token punctuation">;</span> </span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">@rest</span> </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span>red<span class="token punctuation">;</span> 10px<span class="token punctuation">;</span> 20px<span class="token punctuation">;</span> 5px<span class="token punctuation">;</span> 5px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px 5px 5px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-6、-important继承" tabindex="-1"><a class="header-anchor" href="#_7-6、-important继承"><span>7.6、!important继承</span></a></h2>
<p>在调用mixin之后使用!important关键字来标记它继承的所有属性为!important:</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"><span class="token selector">.foo (<span class="token variable">@bg</span>: #f5f5f5, <span class="token variable">@color</span>: #900)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@bg</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.unimportant</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token mixin-usage function">.foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.important</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token mixin-usage function">.foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.unimportant</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #900<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.important</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> #f5f5f5 <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #900 <span class="token important">!important</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


