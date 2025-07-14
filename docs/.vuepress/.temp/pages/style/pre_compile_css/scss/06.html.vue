<template><div><h1 id="六、运算符" tabindex="-1"><a class="header-anchor" href="#六、运算符"><span>六、运算符</span></a></h1>
<h2 id="_6-1相等运算符" tabindex="-1"><a class="header-anchor" href="#_6-1相等运算符"><span>6.1相等运算符</span></a></h2>
<p>所有数据类型都支持等号运算符，等于使用 “==” 表示，不等于使用 “!=” 表示</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$number</span></span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.container1 </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$number</span> == 1 </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">@else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> <span class="token string">"red"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.container2 </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$color</span> != "red" </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">@else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.container1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.container2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2关系-比较-运算符" tabindex="-1"><a class="header-anchor" href="#_6-2关系-比较-运算符"><span>6.2关系（比较）运算符</span></a></h2>
<p>关系运算符只支持数字，使用的符号分别是大于号 “&gt;”，小于号 “&lt;“，大于等于号 “&gt;=” 与小于等于号 “&lt;=” ，返回值 “true” 或 “false”，主要应用于条件判断</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token selector">.p</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'1>2'</span>  1>2<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'1&lt;2'</span>  1&lt;2<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'1==2'</span>  1==2<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'1>=2'</span>  1>=2<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'1&lt;=2'</span>  1&lt;=2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"1>2"</span> false<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"1&lt;2"</span> true<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"1==2"</span> false<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"1>=2"</span> false<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"1&lt;=2"</span> true<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-3布尔运算符" tabindex="-1"><a class="header-anchor" href="#_6-3布尔运算符"><span>6.3布尔运算符</span></a></h2>
<p>布尔运算符包含三种形式，分别是与 “and”、 或”or”、 非”not”。</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$height</span></span><span class="token punctuation">:</span> 200<span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$last</span></span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 两个条件都满足时</span></span>
<span class="line">    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$width</span> > 50 and <span class="token variable">$height</span> &lt; 300 </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">@else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 任意条件满足时</span></span>
<span class="line">    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$width</span> > 200 or <span class="token variable">$height</span> &lt; 300 </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">@else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 判断是否为真</span></span>
<span class="line">    <span class="token keyword">@if</span> <span class="token selector">not <span class="token variable">$last</span> </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">line-height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">@else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">line-height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-4数字运算符" tabindex="-1"><a class="header-anchor" href="#_6-4数字运算符"><span>6.4数字运算符</span></a></h2>
<p>数字运算符包含加”+”，减”-“，乘”*”，除”/”与取模”%”，取模即是两个数字相除取余数。</p>
<h3 id="_6-4-1基本用法" tabindex="-1"><a class="header-anchor" href="#_6-4-1基本用法"><span>6.4.1基本用法</span></a></h3>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token comment">// 纯数字相加</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus1</span></span><span class="token punctuation">:</span> 30 <span class="token operator">+</span> 30<span class="token punctuation">;</span> <span class="token comment">//60</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus2</span></span><span class="token punctuation">:</span> 30px <span class="token operator">+</span> 30<span class="token punctuation">;</span> <span class="token comment">//60px</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus3</span></span><span class="token punctuation">:</span> 30% <span class="token operator">+</span> 30%<span class="token punctuation">;</span> <span class="token comment">//60%</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus4</span></span><span class="token punctuation">:</span> 30px <span class="token operator">+</span> 30pt<span class="token punctuation">;</span> <span class="token comment">//70px</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus5</span></span><span class="token punctuation">:</span> 30px <span class="token operator">+</span> 30pt <span class="token operator">+</span> 30pc<span class="token punctuation">;</span> <span class="token comment">//550px</span></span>
<span class="line"><span class="token selector">.plus</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$plus1</span> <span class="token variable">$plus2</span> <span class="token variable">$plus3</span> <span class="token variable">$plus4</span> <span class="token variable">$plus5</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//纯数字相减</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus1</span></span><span class="token punctuation">:</span> 60 <span class="token operator">-</span> 30<span class="token punctuation">;</span> <span class="token comment">//30</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus2</span></span><span class="token punctuation">:</span> 60px <span class="token operator">-</span> 30<span class="token punctuation">;</span> <span class="token comment">//30px</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus3</span></span><span class="token punctuation">:</span> 60% <span class="token operator">-</span> 30%<span class="token punctuation">;</span> <span class="token comment">//30%</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus4</span></span><span class="token punctuation">:</span> 60px <span class="token operator">-</span> 30pt<span class="token punctuation">;</span> <span class="token comment">//20px</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus5</span></span><span class="token punctuation">:</span> 60px <span class="token operator">-</span> 30pt <span class="token operator">-</span> 30pc<span class="token punctuation">;</span> <span class="token comment">//-460px</span></span>
<span class="line"><span class="token selector">.minus</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$minus1</span> <span class="token variable">$minus2</span> <span class="token variable">$minus3</span> <span class="token variable">$minus4</span> <span class="token variable">$minus5</span><span class="token punctuation">;</span> </span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">//纯数字相乘</span></span>
<span class="line"><span class="token property"><span class="token variable">$multipl1</span></span><span class="token punctuation">:</span> 60 <span class="token operator">*</span> 30<span class="token punctuation">;</span> <span class="token comment">//1800</span></span>
<span class="line"><span class="token property"><span class="token variable">$multipl2</span></span><span class="token punctuation">:</span> 60px <span class="token operator">*</span> 30<span class="token punctuation">;</span> <span class="token comment">//1800px</span></span>
<span class="line"><span class="token property"><span class="token variable">$multipl3</span></span><span class="token punctuation">:</span> 60% <span class="token operator">*</span> 30<span class="token punctuation">;</span> <span class="token comment">//1800%</span></span>
<span class="line"><span class="token property"><span class="token variable">$multipl4</span></span><span class="token punctuation">:</span> 60px <span class="token operator">*</span> 30 <span class="token operator">*</span> 30<span class="token punctuation">;</span> <span class="token comment">//54000px</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.multipl</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$multipl1</span> <span class="token variable">$multipl2</span> <span class="token variable">$multipl3</span> <span class="token variable">$multipl4</span> <span class="token punctuation">;</span> </span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"></span>
<span class="line"><span class="token comment">//纯数字相除</span></span>
<span class="line"><span class="token property"><span class="token variable">$division1</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60 <span class="token operator">/</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2</span></span>
<span class="line"><span class="token property"><span class="token variable">$division2</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">/</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2px</span></span>
<span class="line"><span class="token property"><span class="token variable">$division3</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60% <span class="token operator">/</span> 30%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//2</span></span>
<span class="line"><span class="token property"><span class="token variable">$division4</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">/</span> 30pt<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1.5</span></span>
<span class="line"><span class="token property"><span class="token variable">$division5</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>60px <span class="token operator">/</span> 30 <span class="token operator">/</span> 30<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0.06667px</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.division</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$division1</span> <span class="token variable">$division2</span> <span class="token variable">$division3</span> <span class="token variable">$division4</span> <span class="token variable">$division5</span><span class="token punctuation">;</span> </span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">//纯数字取模</span></span>
<span class="line"><span class="token property"><span class="token variable">$modulo1</span></span><span class="token punctuation">:</span> 60 <span class="token operator">%</span> 9<span class="token punctuation">;</span> <span class="token comment">//6</span></span>
<span class="line"><span class="token property"><span class="token variable">$modulo2</span></span><span class="token punctuation">:</span> 60px <span class="token operator">%</span> 9<span class="token punctuation">;</span> <span class="token comment">//6px</span></span>
<span class="line"><span class="token property"><span class="token variable">$modulo3</span></span><span class="token punctuation">:</span> 60% <span class="token operator">%</span> 9%<span class="token punctuation">;</span> <span class="token comment">//6%</span></span>
<span class="line"><span class="token property"><span class="token variable">$modulo4</span></span><span class="token punctuation">:</span> 60px <span class="token operator">%</span> 9pt<span class="token punctuation">;</span> <span class="token comment">//0px</span></span>
<span class="line"><span class="token property"><span class="token variable">$modulo5</span></span><span class="token punctuation">:</span> 60px <span class="token operator">%</span> 9 <span class="token operator">%</span> 5<span class="token punctuation">;</span> <span class="token comment">//1px</span></span>
<span class="line"><span class="token selector">.modulo</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$modulo1</span> <span class="token variable">$modulo2</span> <span class="token variable">$modulo3</span> <span class="token variable">$modulo4</span> <span class="token variable">$modulo5</span><span class="token punctuation">;</span> </span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.plus</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 60 60px 60% 70px 550px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.minus</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 30 30px 30% 20px -460px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.multipl</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1800 1800px 1800% 54000px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.division</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 2 2px 2 1.5 0.0666666667px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.modulo</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 6 6px 6% 0px 1px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-2混合用法" tabindex="-1"><a class="header-anchor" href="#_6-4-2混合用法"><span>6.4.2混合用法</span></a></h3>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 数字，字符串相加</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus1</span></span><span class="token punctuation">:</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">//ab</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus2</span></span><span class="token punctuation">:</span> <span class="token string">"a"</span> <span class="token operator">+</span> <span class="token string">"b"</span><span class="token punctuation">;</span> <span class="token comment">//"ab"</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus3</span></span><span class="token punctuation">:</span> <span class="token string">'a'</span> <span class="token operator">+</span> <span class="token string">'b'</span><span class="token punctuation">;</span> <span class="token comment">//"ab"</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus4</span></span><span class="token punctuation">:</span> <span class="token string">'a'</span> <span class="token operator">+</span> b<span class="token punctuation">;</span> <span class="token comment">//"ab"</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus5</span></span><span class="token punctuation">:</span> a <span class="token operator">+</span> <span class="token string">'b'</span><span class="token punctuation">;</span> <span class="token comment">//ab</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus6</span></span><span class="token punctuation">:</span> <span class="token string">'a'</span> <span class="token operator">+</span> 1<span class="token punctuation">;</span> <span class="token comment">//"a1"</span></span>
<span class="line"><span class="token property"><span class="token variable">$plus7</span></span><span class="token punctuation">:</span> <span class="token string">"1"</span> <span class="token operator">+</span> a<span class="token punctuation">;</span> <span class="token comment">//"1a"</span></span>
<span class="line"><span class="token selector">.plus</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$plus1</span> <span class="token variable">$plus2</span> <span class="token variable">$plus3</span> <span class="token variable">$plus4</span> <span class="token variable">$plus5</span> <span class="token variable">$plus6</span>  <span class="token variable">$plus7</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 数字，字符串相减</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus1</span></span><span class="token punctuation">:</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span> <span class="token comment">//a-b</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus2</span></span><span class="token punctuation">:</span> <span class="token string">"a"</span> <span class="token operator">-</span> <span class="token string">"b"</span><span class="token punctuation">;</span> <span class="token comment">//"a"-"b"</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus3</span></span><span class="token punctuation">:</span> <span class="token string">'a'</span> <span class="token operator">-</span> <span class="token string">'b'</span><span class="token punctuation">;</span> <span class="token comment">//"a"-"b"</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus4</span></span><span class="token punctuation">:</span> <span class="token string">'a'</span> <span class="token operator">-</span> b<span class="token punctuation">;</span> <span class="token comment">//"a"-b</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus5</span></span><span class="token punctuation">:</span> a <span class="token operator">-</span> <span class="token string">'b'</span><span class="token punctuation">;</span> <span class="token comment">//a-"b"</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus6</span></span><span class="token punctuation">:</span> <span class="token string">'a'</span> <span class="token operator">-</span> 1<span class="token punctuation">;</span> <span class="token comment">//"a"-1</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus7</span></span><span class="token punctuation">:</span> <span class="token string">"1"</span> <span class="token operator">-</span> a<span class="token punctuation">;</span> <span class="token comment">//"1"-a</span></span>
<span class="line"><span class="token property"><span class="token variable">$minus8</span></span><span class="token punctuation">:</span> 1 <span class="token operator">-</span> <span class="token string">"a"</span><span class="token punctuation">;</span> <span class="token comment">//1-"a"</span></span>
<span class="line"><span class="token selector">.plus</span><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">content</span><span class="token punctuation">:</span> <span class="token variable">$minus1</span> <span class="token variable">$minus2</span> <span class="token variable">$minus3</span> <span class="token variable">$minus4</span> <span class="token variable">$minus5</span> <span class="token variable">$minus6</span>  <span class="token variable">$minus7</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 数字无法与纯字符串相乘</span></span>
<span class="line"><span class="token comment">// 数字无法与纯字符串相除</span></span>
<span class="line"><span class="token comment">// 数字无法与纯字符串取模</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.plus</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> ab <span class="token string">"ab"</span> <span class="token string">"ab"</span> <span class="token string">"ab"</span> ab <span class="token string">"a1"</span> <span class="token string">"1a"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.plus</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> a-b <span class="token string">"a"</span>-<span class="token string">"b"</span> <span class="token string">"a"</span>-<span class="token string">"b"</span> <span class="token string">"a"</span>-b a-<span class="token string">"b"</span> <span class="token string">"a"</span>-1 <span class="token string">"1"</span>-a<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>字符串相加时，如果前面一个值带引号，计算的结果同样带引号，反之；</li>
<li>数字与字符串混合相加时，第一位有引号或第一位是数字，且后最后一位有引号时，结果必定有引号</li>
</ol>
<h3 id="_6-4-3除法运算情景" tabindex="-1"><a class="header-anchor" href="#_6-4-3除法运算情景"><span>6.4.3除法运算情景</span></a></h3>
<p>如果直接在值之间使用 “/” ，不可被视为除法运算，仅当一下三种情况时会以除法进行运算：
1. 如果值或值的一部分是变量或函数的返回值
2. 如果值被圆括号包裹
3. 如果值是算数表达式的一部分
<strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">div </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span> <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">//使用变量</span></span>
<span class="line">    <span class="token property">z-index</span><span class="token punctuation">:</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$number</span></span><span class="token punctuation">:</span> 10<span class="token punctuation">)</span> <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">//使用函数</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>500px <span class="token operator">/</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//使用圆括号</span></span>
<span class="line">    <span class="token property">margin-left</span><span class="token punctuation">:</span> 5px <span class="token operator">+</span> 8/2<span class="token punctuation">;</span> <span class="token comment">//使用了+表达式</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">z-index</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-left</span><span class="token punctuation">:</span> 9px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-4规则总结" tabindex="-1"><a class="header-anchor" href="#_6-4-4规则总结"><span>6.4.4规则总结</span></a></h3>
<ol>
<li>运算符号与值之间建议使用空格隔开；</li>
<li>数字可以只声明其中一个符号或单位，计算的结果将以声明的符号或单位进行编译，声明单位或符号时，建议在第一个数字上进行声明；</li>
<li>当不同符号且符号之间不可以进行换算时，无法计算出结果，如 20px + 10%无计算，”px” + “pt” 则可进行计算；</li>
<li>当不同单位进行运算，结果会显示以运算公式开头的数字设置的单位；</li>
<li>在乘法运算时，只需为一个数字声明单位，为多个数字声明同样或不同的单位都会报错；</li>
<li>在除法运算时，如需声明单位，单位建议标注在除号前面的值；</li>
<li>书写公式时，建议将所有公式都使用圆括号包裹。</li>
</ol>
<h2 id="_6-5字符串运算" tabindex="-1"><a class="header-anchor" href="#_6-5字符串运算"><span>6.5字符串运算</span></a></h2>
<p>使用加号”+” 可连接字符串，如字符串前面带引号后面不带，编译出的结果会带引号，反之。</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token selector">.container </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"Foo"</span> <span class="token operator">+</span> bar<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> sans- <span class="token operator">+</span> <span class="token string">"serif"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"Foobar"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-6-圆括号" tabindex="-1"><a class="header-anchor" href="#_6-6-圆括号"><span>6.6 圆括号</span></a></h2>
<p>圆括号可以用来影响运算的顺序：</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token selector">p </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 1em <span class="token operator">+</span> <span class="token punctuation">(</span>2em <span class="token operator">*</span> 3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 7em<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


