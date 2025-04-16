<template><div><h1 id="五、数据类型" tabindex="-1"><a class="header-anchor" href="#五、数据类型"><span>五、数据类型</span></a></h1>
<p>Scss 支持以下几种主要的数据类型：</p>
<ol>
<li>字符串（ 有引号或无引号的字符串 ）：”foo”, ‘bar’, baz, …</li>
<li>数字：1, 2.5, 18px, 30%, 9a, …</li>
<li>颜色：blue, #00ff00, rgba(0, 0, 0, .1)</li>
<li>布尔型：true, false</li>
<li>空值：null</li>
<li>数组 (list)， 用逗号或空格分割：1em 2em 2.5em 或 Helvetica, Arial, sans-serif, …</li>
<li>maps，相当于 JavaScript 中的 object：key1: value1, key2: value2, …</li>
</ol>
<p>判断数据类型的方式: type-of($value)</p>
<h2 id="_5-1-字符串-strings" tabindex="-1"><a class="header-anchor" href="#_5-1-字符串-strings"><span>5.1 字符串 (Strings)</span></a></h2>
<p>支持有引号的字符串与无引号的字符串，有引号的字符串，无论单引号还是双引号，编译后都为双引号，无引号的字符串编译后同样没有引号。如果一段话由多个单词组成，并且包含空格，需要将引号加上。</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$info01</span></span><span class="token punctuation">:</span><span class="token string">'hello'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$info02</span></span><span class="token punctuation">:</span><span class="token string">"world"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$info03</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">p</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector"><span class="token parent important">&amp;</span>::before</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$info01</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$info03</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector"><span class="token parent important">&amp;</span>::after</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$info02</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$info03</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">p::before</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"hello"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">p::after</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"world"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-2数字-numbers" tabindex="-1"><a class="header-anchor" href="#_5-2数字-numbers"><span>5.2数字 (Numbers)</span></a></h2>
<ol>
<li>支持数字或带单位的数字，</li>
<li>支持整数或小数</li>
<li>支持正数与负数</li>
</ol>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$height</span></span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span>30%<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">p</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$height</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：数字后接的任何字母都会视为单位，单位会和数字当作一个整体进行计算</p>
<h2 id="_5-3颜色-colors" tabindex="-1"><a class="header-anchor" href="#_5-3颜色-colors"><span>5.3颜色 (Colors)</span></a></h2>
<p>Css 原有颜色类型，包括十六进制、RGB、RGBA、HSL、HSLA和色彩单词</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$color01</span></span><span class="token punctuation">:</span>#fff00099<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$color02</span></span><span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.6<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color01</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color02</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 240<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.6<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-4布尔型-booleans" tabindex="-1"><a class="header-anchor" href="#_5-4布尔型-booleans"><span>5.4布尔型 (Booleans)</span></a></h2>
<p>只有两个值 “true” 和 “false”，只有自身是 false 或 null 才会返回 false，其他一切都会返回 true，主要用于逻辑判断。</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$bool</span></span><span class="token punctuation">:</span><span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$bool</span>  </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">@else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-5空值-null" tabindex="-1"><a class="header-anchor" href="#_5-5空值-null"><span>5.5空值 (Null)</span></a></h2>
<p>只有一个值 “null”，如 “$name: null;”。由于他为空，因此不能使用它与任何类型进行运算，主要用于逻辑判断。</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$null</span></span><span class="token punctuation">:</span><span class="token null keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$null</span> == null  </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">@else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-6数组-lists" tabindex="-1"><a class="header-anchor" href="#_5-6数组-lists"><span>5.6数组 (Lists)</span></a></h2>
<p>通过空格或半角逗号分割的一系列的值，数组中还可以包含子数组，如下方的 “$list2” 和 “$list3″，当数组被编译为 css 时，圆括号不会被添加</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token property"><span class="token variable">$list1</span></span><span class="token punctuation">:</span> 1px 2px 3px 4px<span class="token punctuation">;</span> <span class="token comment">//一维数字</span></span>
<span class="line"><span class="token property"><span class="token variable">$list2</span></span><span class="token punctuation">:</span> 1px 2px<span class="token punctuation">,</span> 3px 4px<span class="token punctuation">;</span> <span class="token comment">//二维数字</span></span>
<span class="line"><span class="token property"><span class="token variable">$list3</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px 2px<span class="token punctuation">)</span> <span class="token punctuation">(</span>3px 4px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//二维数字</span></span>
<span class="line"><span class="token comment">// 指定数组中的某个值进行调用</span></span>
<span class="line"><span class="token function">nth</span><span class="token punctuation">(</span> <span class="token variable">$list</span><span class="token punctuation">,</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$block-base-padding</span></span><span class="token punctuation">:</span> 6px 10px 6px 10px<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$fonts</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"Helvetica Neue"</span><span class="token punctuation">,</span> <span class="token string">"Consolas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token variable">$block-base-padding</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token variable">$fonts</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 6px 10px 6px 10px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Helvetica Neue"</span><span class="token punctuation">,</span> <span class="token string">"Consolas"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-7映射-maps" tabindex="-1"><a class="header-anchor" href="#_5-7映射-maps"><span>5.7映射 (Maps)</span></a></h2>
<p>Maps 必须被圆括号包裹，可以映射任何键值对</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token property"><span class="token variable">$map</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token property">key1</span><span class="token punctuation">:</span> value1<span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">key2</span><span class="token punctuation">:</span> value2<span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">key3</span><span class="token punctuation">:</span> value3</span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 01、 map-get(map, key) </span></span>
<span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.p1</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"small"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 02、 map-has-key(map, key)</span></span>
<span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.p2</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">map-has-key</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"big"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//03、map-keys(map)</span></span>
<span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.p3</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property"><span class="token variable">$info</span></span> <span class="token punctuation">:</span><span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$info</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//04、map-values(map)</span></span>
<span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.p4</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property"><span class="token variable">$info</span></span> <span class="token punctuation">:</span><span class="token function">map-values</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$info</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 05、map-merge(map1, map2)</span></span>
<span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$font-sizes2</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"x-large"</span><span class="token punctuation">:</span> 30px<span class="token punctuation">,</span> <span class="token string">"xx-large"</span><span class="token punctuation">:</span> 36px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.p5</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property"><span class="token variable">$info</span></span> <span class="token punctuation">:</span><span class="token function">map-merge</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token variable">$font-sizes2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token variable">$info</span><span class="token punctuation">)</span> <span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">map-values</span><span class="token punctuation">(</span><span class="token variable">$info</span><span class="token punctuation">)</span> <span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//06、map-remove(map, keys...)</span></span>
<span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.p6-1</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property"><span class="token variable">$info</span></span> <span class="token punctuation">:</span><span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"small"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token variable">$info</span><span class="token punctuation">)</span> <span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">map-values</span><span class="token punctuation">(</span><span class="token variable">$info</span><span class="token punctuation">)</span> <span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.p6-2</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property"><span class="token variable">$info</span></span> <span class="token punctuation">:</span><span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"small"</span><span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token variable">$info</span><span class="token punctuation">)</span> <span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">map-values</span><span class="token punctuation">(</span><span class="token variable">$info</span><span class="token punctuation">)</span> <span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.p1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.p2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> false<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.p3</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"small"</span><span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.p4</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> 18px<span class="token punctuation">,</span> 24px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.p5</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"small"</span><span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">,</span> <span class="token string">"x-large"</span><span class="token punctuation">,</span> <span class="token string">"xx-large"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> 18px<span class="token punctuation">,</span> 24px<span class="token punctuation">,</span> 30px<span class="token punctuation">,</span> 36px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.p6-1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"normal"</span><span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> 24px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.p6-2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"normal"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


