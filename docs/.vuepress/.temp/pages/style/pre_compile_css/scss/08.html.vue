<template><div><h1 id="八、插值语句" tabindex="-1"><a class="header-anchor" href="#八、插值语句"><span>八、插值语句</span></a></h1>
<h2 id="_8-1-动态属性或变量" tabindex="-1"><a class="header-anchor" href="#_8-1-动态属性或变量"><span>8.1 动态属性或变量</span></a></h2>
<p>通过 #{} 插值语句可以在选择器或属性名中使用变量：</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$name</span></span><span class="token punctuation">:</span> foo<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$attr</span></span><span class="token punctuation">:</span> border<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">p.<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property"><span class="token variable">#{$attr}</span>-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">p.foo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-避免运算" tabindex="-1"><a class="header-anchor" href="#_8-2-避免运算"><span>8.2 避免运算</span></a></h2>
<p>#{} 插值语句也可以在属性值中插入 SassScript，大多数情况下，这样可能还不如使用变量方便，但是使用 #{} 可以避免 Sass 运行运算表达式，直接编译 CSS。</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$name</span></span><span class="token punctuation">:</span> foo<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$attr</span></span><span class="token punctuation">:</span> border<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">p.<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property"><span class="token variable">#{$attr}</span>-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font</span><span class="token punctuation">:</span> 12px/30px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


