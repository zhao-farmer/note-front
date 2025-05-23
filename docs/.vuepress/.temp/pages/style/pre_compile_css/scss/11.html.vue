<template><div><h1 id="十一、-混合指令" tabindex="-1"><a class="header-anchor" href="#十一、-混合指令"><span>十一、 混合指令</span></a></h1>
<p>混合指令（Mixin）用于定义可重复使用的样式，避免了使用无语意的 class，比如 .float-left。混合指令可以包含所有的 CSS 规则，绝大部分 Sass 规则，甚至通过参数功能引入变量，输出多样化的样式。</p>
<h2 id="_11-1-定义混合指令-mixin-defining-a-mixin-mixin" tabindex="-1"><a class="header-anchor" href="#_11-1-定义混合指令-mixin-defining-a-mixin-mixin"><span>11.1 定义混合指令 @mixin (Defining a Mixin: @mixin)</span></a></h2>
<p>混合指令的用法是在 @mixin 后添加名称与样式，比如名为 large-text 的混合通过下面的代码定义：</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token keyword">@mixin</span> <span class="token selector">large-text </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">font: </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混合也需要包含选择器和属性，甚至可以用 &amp; 引用父选择器：</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token keyword">@mixin</span> <span class="token selector">clearfix </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span></span>
<span class="line">    <span class="token selector"><span class="token parent important">&amp;</span>:after </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"."</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">* html <span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span> <span class="token property">height</span><span class="token punctuation">:</span> 1px <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-2-引用混合样式-include-including-a-mixin-include" tabindex="-1"><a class="header-anchor" href="#_11-2-引用混合样式-include-including-a-mixin-include"><span>11.2 引用混合样式 @include (Including a Mixin: @include)</span></a></h2>
<p>使用 @include 指令引用混合样式，格式是在其后添加混合名称，以及需要的参数（可选）：</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token selector">large-text </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">font: </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.page-title </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@include</span> large-text<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.page-title</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> Arial<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在最外层引用混合样式，不会直接定义属性，也不可以使用父选择器。</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token selector">silly-links </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">a </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">@include</span> silly-links<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">a</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混合样式中也可以包含其他混合样式，比如</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token selector">highlighted-background </span><span class="token punctuation">{</span> <span class="token property">background-color</span><span class="token punctuation">:</span> #fc0<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token selector">header-text </span><span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token selector">compound </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@include</span> highlighted-background<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">@include</span> header-text<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">p</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@include</span> compound<span class="token punctuation">;</span> </span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #fc0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混合样式中应该只定义后代选择器，这样可以安全的导入到文件的任何位置。</p>
<h2 id="_11-3-参数-arguments" tabindex="-1"><a class="header-anchor" href="#_11-3-参数-arguments"><span>11.3 参数 (Arguments)</span></a></h2>
<h3 id="_11-3-1-普通使用" tabindex="-1"><a class="header-anchor" href="#_11-3-1-普通使用"><span>11.3.1 普通使用</span></a></h3>
<p>参数用于给混合指令中的样式设定变量，并且赋值使用。在定义混合指令的时候，按照变量的格式，通过逗号分隔，将参数写进圆括号里。引用指令时，按照参数的顺序，再将所赋的值对应写进括号：</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$width</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">border: </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">p </span><span class="token punctuation">{</span> <span class="token keyword">@include</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span>blue<span class="token punctuation">,</span> 1in<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-width</span><span class="token punctuation">:</span> 1in<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>混合指令也可以使用给变量赋值的方法给参数设定默认值，然后，当这个指令被引用的时候，如果没有给参数赋值，则自动使用默认值：</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token function">sexy-border2</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 1in<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token selector">border: </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">p </span><span class="token punctuation">{</span> <span class="token keyword">@include</span> <span class="token function">sexy-border2</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">h1 </span><span class="token punctuation">{</span> <span class="token keyword">@include</span> <span class="token function">sexy-border2</span><span class="token punctuation">(</span>blue<span class="token punctuation">,</span> 2in<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-width</span><span class="token punctuation">:</span> 1in<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">h1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-width</span><span class="token punctuation">:</span> 2in<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-style</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-3-2-关键词参数-keyword-arguments" tabindex="-1"><a class="header-anchor" href="#_11-3-2-关键词参数-keyword-arguments"><span>11.3.2 关键词参数 (Keyword Arguments)</span></a></h3>
<p>混合指令也可以使用关键词参数，上面的例子也可以写成：</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token selector">p </span><span class="token punctuation">{</span> <span class="token keyword">@include</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> blue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">h1 </span><span class="token punctuation">{</span> <span class="token keyword">@include</span> <span class="token function">sexy-border</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> blue<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 2in<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然不够简明，但是阅读起来会更方便。关键词参数给函数提供了更灵活的接口，以及容易调用的参数。关键词参数可以打乱顺序使用，如果使用默认值也可以省缺，另外，参数名被视为变量名，下划线、短横线可以互换使用。</p>
<h3 id="_11-3-3-参数变量-variable-arguments" tabindex="-1"><a class="header-anchor" href="#_11-3-3-参数变量-variable-arguments"><span>11.3.3 参数变量 (Variable Arguments)</span></a></h3>
<p>有时，不能确定混合指令需要使用多少个参数，比如一个关于 box-shadow 的混合指令不能确定有多少个 'shadow' 会被用到。这时，可以使用参数变量 … 声明（写在参数的最后方）告诉 Sass 将这些参数视为值列表处理：</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span><span class="token variable">$shadows</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">-moz-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$shadows</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.shadows </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span>0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.shadows</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 4px 5px #666<span class="token punctuation">,</span> 2px 6px 10px #999<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数变量也可以用在引用混合指令的时候 (@include)，与平时用法一样，将一串值列表中的值逐条作为参数引用：</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token function">colors</span><span class="token punctuation">(</span><span class="token variable">$text</span><span class="token punctuation">,</span> <span class="token variable">$background</span><span class="token punctuation">,</span> <span class="token variable">$border</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$text</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$background</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$border</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token property"><span class="token variable">$values</span></span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">,</span> #00ff00<span class="token punctuation">,</span> #0000ff<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.primary </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@include</span> <span class="token function">colors</span><span class="token punctuation">(</span><span class="token variable">$values</span>...<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.primary</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #00ff00<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-color</span><span class="token punctuation">:</span> #0000ff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-4-向混合样式中导入内容-passing-content-blocks-to-a-mixin" tabindex="-1"><a class="header-anchor" href="#_11-4-向混合样式中导入内容-passing-content-blocks-to-a-mixin"><span>11.4 向混合样式中导入内容 (Passing Content Blocks to a Mixin)</span></a></h2>
<p>在引用混合样式的时候，可以先将一段代码导入到混合指令中，然后再输出混合样式，额外导入的部分将出现在 @content 标志的地方：</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token keyword">@mixin</span> <span class="token selector">apply-to-ie6-only </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">* html </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">@content</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">@include</span> <span class="token selector">apply-to-ie6-only </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">#logo </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>/logo.gif<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">* html #logo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>/logo.gif<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


