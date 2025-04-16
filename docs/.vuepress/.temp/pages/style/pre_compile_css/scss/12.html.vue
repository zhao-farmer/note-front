<template><div><h1 id="十二、-函数指令-function-directives" tabindex="-1"><a class="header-anchor" href="#十二、-函数指令-function-directives"><span>十二、 函数指令 (Function Directives)</span></a></h1>
<p>Sass 支持自定义函数，并能在任何属性值或 Sass script 中使用：</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$grid-width</span></span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$gutter-width</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">@function</span> <span class="token function">grid-width</span><span class="token punctuation">(</span><span class="token variable">$n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">@return</span> <span class="token variable">$n</span> <span class="token operator">*</span> <span class="token variable">$grid-width</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token variable">$n</span> <span class="token operator">-</span> 1<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token variable">$gutter-width</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">#sidebar </span><span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">grid-width</span><span class="token punctuation">(</span>5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">#sidebar</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 240px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与 mixin 相同，也可以传递若干个全局变量给函数作为参数。一个函数可以含有多条语句，需要调用 @return 输出结果。
自定义的函数也可以使用关键词参数，上面的例子还可以这样写：</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token selector">#sidebar </span><span class="token punctuation">{</span> <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">grid-width</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$n</span></span><span class="token punctuation">:</span> 5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


