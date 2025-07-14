<template><div><h1 id="五、设置grid布局容器" tabindex="-1"><a class="header-anchor" href="#五、设置grid布局容器"><span>五、设置Grid布局容器</span></a></h1>
<p>注意：设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。</p>
<h2 id="_5-1-display-grid" tabindex="-1"><a class="header-anchor" href="#_5-1-display-grid"><span>5.1 display: grid</span></a></h2>
<p>表示该容器是一个grid布局的块级元素</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 默认情况下，容器元素都是块级元素 */</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe src="/note-front/style/records_layout/layout_grid/html/01.html" width="900" height="550"></iframe>
<h2 id="_5-2-display-inline-display" tabindex="-1"><a class="header-anchor" href="#_5-2-display-inline-display"><span>5.2 display: inline-display</span></a></h2>
<p>div是一个行内元素，该元素内部采用网格布局。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 也可以是行内块元素 */</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> inline-grid<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe src="/note-front/style/records_layout/layout_grid/html/02.html" width="900" height="350"></iframe></div></template>


