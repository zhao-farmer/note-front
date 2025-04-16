<template><div><h1 id="七、函数" tabindex="-1"><a class="header-anchor" href="#七、函数"><span>七、函数</span></a></h1>
<h2 id="_7-1string-字符串-函数" tabindex="-1"><a class="header-anchor" href="#_7-1string-字符串-函数"><span>7.1String(字符串) 函数</span></a></h2>
<ol>
<li>quote(string)</li>
</ol>
<p>给字符串添加引号</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">quote</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">//"hello"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>unquote(string)</li>
</ol>
<p>移除字符串的引号</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span> <span class="token comment">//hello</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>str-index(string, substring)</li>
</ol>
<p>返回 substring 子字符串第一次在 string 中出现的位置。如果没有匹配到子字符串，则返回 null。区分大小写。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">str-index</span><span class="token punctuation">(</span>abcd<span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">// 1  </span></span>
<span class="line"><span class="token function">str-index</span><span class="token punctuation">(</span>abcd<span class="token punctuation">,</span> ab<span class="token punctuation">)</span> <span class="token comment">// 1  </span></span>
<span class="line"><span class="token function">str-index</span><span class="token punctuation">(</span>abcd<span class="token punctuation">,</span> X<span class="token punctuation">)</span>  <span class="token comment">// null   </span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>str-insert(string, insert, index)</li>
</ol>
<p>在字符串 string 中 index 位置插入 insert。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">,</span> <span class="token string">" xiaoming"</span><span class="token punctuation">,</span> 6<span class="token punctuation">)</span> <span class="token comment">//"Hello xiaoming world!"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="5">
<li>str-length(string)</li>
</ol>
<p>返回字符串的长度。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">str-length</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span> <span class="token comment">//5</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="6">
<li>str-slice(string, start, end)</li>
</ol>
<p>从 string 中截取子字符串，通过 start-at 和 end-at 设置始末位置，未指定结束索引值则默认截取到字符串末尾。是不是感觉合js的操作有些类似。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token string">"abcd"</span><span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 3<span class="token punctuation">)</span>   => <span class="token string">"bc"</span></span>
<span class="line"><span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token string">"abcd"</span><span class="token punctuation">,</span> 2<span class="token punctuation">)</span>      => <span class="token string">"bcd"</span></span>
<span class="line"><span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token string">"abcd"</span><span class="token punctuation">,</span> -3<span class="token punctuation">,</span> -2<span class="token punctuation">)</span> => <span class="token string">"bc"</span></span>
<span class="line"><span class="token function">str-slice</span><span class="token punctuation">(</span><span class="token string">"abcd"</span><span class="token punctuation">,</span> 2<span class="token punctuation">,</span> -2<span class="token punctuation">)</span>  => <span class="token string">"bc"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>to-lower-case(string)</li>
</ol>
<p>将字符串转成小写</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">to-lower-case</span><span class="token punctuation">(</span><span class="token string">"HELLO"</span><span class="token punctuation">)</span> <span class="token comment">// "hello"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="8">
<li>to-upper-case(string)</li>
</ol>
<p>将字符串转成大写</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">to-upper-case</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span> <span class="token comment">// "HELLO"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="9">
<li>unique-id()</li>
</ol>
<p>返回一个无引号的随机字符串作为 id。</p>
<p>不过也只能保证在单次的 Sass 编译中确保这个 id 的唯一性。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">unique-id</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 3a153b3ds</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>SCSS代码</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">/* ====字符串====== */</span></span>
<span class="line"><span class="token selector">.p1</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//添加引号</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">quote</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//"hello"</span></span>
<span class="line">    <span class="token comment">//移除引号</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//hello</span></span>
<span class="line">    <span class="token comment">//截取字符串</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">str-index</span><span class="token punctuation">(</span>abcd<span class="token punctuation">,</span> a<span class="token punctuation">)</span> <span class="token comment">// 1  </span></span>
<span class="line">    <span class="token function">str-index</span><span class="token punctuation">(</span>abcd<span class="token punctuation">,</span> ab<span class="token punctuation">)</span> <span class="token comment">// 1  </span></span>
<span class="line">    <span class="token function">str-index</span><span class="token punctuation">(</span>abcd<span class="token punctuation">,</span> X<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// null   </span></span>
<span class="line">    <span class="token comment">//插入字符串</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">str-insert</span><span class="token punctuation">(</span><span class="token string">"Hello world!"</span><span class="token punctuation">,</span> <span class="token string">" xiaoming"</span><span class="token punctuation">,</span> 6<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//"Hello xiaoming world!"</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">str-length</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5</span></span>
<span class="line">    <span class="token comment">// 转小写</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">to-lower-case</span><span class="token punctuation">(</span><span class="token string">"HELLO"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "hello"</span></span>
<span class="line">    <span class="token comment">//转大写</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">to-upper-case</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "HELLO"</span></span>
<span class="line">    <span class="token comment">//生成编号</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">unique-id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3a153b3ds</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后的CSS代码</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">"UTF-8"</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token comment">/* ====字符串====== */</span></span>
<span class="line"><span class="token selector">.p1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"hello"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> hello<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1 1<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"Hello xiaoming world!"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"hello"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"HELLO"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> uhfzcsl<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-2数字函数" tabindex="-1"><a class="header-anchor" href="#_7-2数字函数"><span>7.2数字函数</span></a></h2>
<ol>
<li>abs(number)</li>
</ol>
<p>返回一个数值的绝对值。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">abs</span><span class="token punctuation">(</span>13<span class="token punctuation">)</span> <span class="token comment">// 13</span></span>
<span class="line"><span class="token function">abs</span><span class="token punctuation">(</span>-13<span class="token punctuation">)</span> <span class="token comment">// 13</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>comparable(num1, num2)</li>
</ol>
<p>返回一个布尔值，判断 num1 与 num2 是否可以进行比较 ，注意是否可以比较，不是比较的结果。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">comparable</span><span class="token punctuation">(</span>15px<span class="token punctuation">,</span> 10px<span class="token punctuation">)</span> <span class="token comment">// true </span></span>
<span class="line"><span class="token function">comparable</span><span class="token punctuation">(</span>20mm<span class="token punctuation">,</span> 1cm<span class="token punctuation">)</span> <span class="token comment">// true </span></span>
<span class="line"><span class="token function">comparable</span><span class="token punctuation">(</span>35px<span class="token punctuation">,</span> 2em<span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>ceil(number)</li>
</ol>
<p>向上取整 。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">ceil</span><span class="token punctuation">(</span>13.24<span class="token punctuation">)</span> <span class="token comment">//14</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>floor(number)</li>
</ol>
<p>向下取整 。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">floor</span><span class="token punctuation">(</span>15.84<span class="token punctuation">)</span> <span class="token comment">// 15</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="5">
<li>max(number...)</li>
</ol>
<p>返回最大值 。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">max</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 7<span class="token punctuation">,</span> 9<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> -3<span class="token punctuation">,</span> -7<span class="token punctuation">)</span> <span class="token comment">// 9</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="6">
<li>min(number...)</li>
</ol>
<p>返回最小值 。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">min</span><span class="token punctuation">(</span>7<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> -2<span class="token punctuation">,</span> -7<span class="token punctuation">)</span> <span class="token comment">// -7</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="7">
<li>percentage(number)</li>
</ol>
<p>将数字转化为百分比的表达形式。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">percentage</span><span class="token punctuation">(</span>1.2<span class="token punctuation">)</span> <span class="token comment">// 120</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="8">
<li>random()</li>
</ol>
<p>返回 0-1 区间内的小数。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 0.2783</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="9">
<li>random(number)</li>
</ol>
<p>返回 1 至 number 之间的整数，包括 1 和 limit。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">random</span><span class="token punctuation">(</span>10<span class="token punctuation">)</span> <span class="token comment">// 4</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="10">
<li>round(number)</li>
</ol>
<p>返回最接近该数的一个整数，四舍五入。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">round</span><span class="token punctuation">(</span>15.20<span class="token punctuation">)</span> <span class="token comment">// 15 round(15.80) // 16</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>SCSS代码</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">/* ===数字运算=== */</span></span>
<span class="line"><span class="token selector">.p2</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">abs</span><span class="token punctuation">(</span>13<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 13</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">abs</span><span class="token punctuation">(</span>-13<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 13</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">ceil</span><span class="token punctuation">(</span>13.24<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//14</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">floor</span><span class="token punctuation">(</span>15.84<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 15</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">max</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 7<span class="token punctuation">,</span> 9<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> -3<span class="token punctuation">,</span> -7<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 9</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">min</span><span class="token punctuation">(</span>7<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> -2<span class="token punctuation">,</span> -7<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -7</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后的CSS代码</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">"UTF-8"</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token comment">/* ====字符串====== */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">"UTF-8"</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token comment">/* ===数字运算=== */</span></span>
<span class="line"><span class="token selector">.p2</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 13<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 13<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 14<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 15<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 9<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> -7<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3列表-list-函数" tabindex="-1"><a class="header-anchor" href="#_7-3列表-list-函数"><span>7.3列表(List)函数</span></a></h2>
<p>三大注意点：</p>
<ul>
<li>Sass 列表(List)函数用于处理列表，可以访问列表中的值，向列表添加元素，合并列表等。</li>
<li>Sass 列表是不可变的，因此在处理列表时，返回的是一个新的列表，而不是在原有的列表上进行修改。</li>
<li>列表的起始索引值为 1，记住不是 0。</li>
</ul>
<ol>
<li>append(list, value, [separator])</li>
</ol>
<p>将单个值 value 添加到列表尾部。separator 是分隔符，默认会自动侦测，或者指定为逗号或空格。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span> <span class="token comment">// a b c d </span></span>
<span class="line"><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">,</span> comma<span class="token punctuation">)</span> <span class="token comment">// a, b, c, d</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>index(list, value)</li>
</ol>
<p>返回元素 value 在列表中的索引位置。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">index</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token comment">// 2 </span></span>
<span class="line"><span class="token function">index</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token comment">// null</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>is-bracketed(list)</li>
</ol>
<p>判断列表中是否有中括号</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">is-bracketed</span><span class="token punctuation">(</span>[a b c]<span class="token punctuation">)</span> <span class="token comment">// true </span></span>
<span class="line"><span class="token function">is-bracketed</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>list-separator(list)</li>
</ol>
<p>返回一列表的分隔符类型。可以是空格或逗号。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">list-separator</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span> <span class="token comment">// "space" </span></span>
<span class="line"><span class="token function">list-separator</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> <span class="token comment">// "comma"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>join(list1, list2, [separator, bracketed])</li>
</ol>
<p>合并两列表，将列表 list2 添加到列表 list1 的末尾。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line">separator 是分隔符，默认会自动侦测，或者指定为逗号或空格。</span>
<span class="line">bracketed 默认会自动侦测是否有中括号，可以设置为 <span class="token boolean">true</span> 或 <span class="token boolean">false</span>。</span>
<span class="line"><span class="token function">join</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> d e f<span class="token punctuation">)</span> <span class="token comment">// a b c d e f </span></span>
<span class="line"><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d e f<span class="token punctuation">)</span><span class="token punctuation">,</span> comma<span class="token punctuation">)</span> <span class="token comment">// a, b, c, d, e, f </span></span>
<span class="line"><span class="token function">join</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> d e f<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$bracketed</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// [a b c d e f]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>length(list)</li>
</ol>
<p>返回列表的长度</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">length</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span> <span class="token comment">// 3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="7">
<li>set-nth(list, n, value)</li>
</ol>
<p>设置列表第 n 项的值为 value。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">set-nth</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token comment">// a x c</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="8">
<li>nth(list, n)</li>
</ol>
<p>获取第 n 项的值。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">nth</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> 3<span class="token punctuation">)</span> <span class="token comment">// c</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="9">
<li>zip(lists)</li>
</ol>
<p>将多个列表按照以相同索引值为一组，重新组成一个新的多维度列表。这个排列组合非常的人性，需要安排！</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">zip</span><span class="token punctuation">(</span>1px 2px 3px<span class="token punctuation">,</span> solid dashed dotted<span class="token punctuation">,</span> red green blue<span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">// 1px solid red, 2px dashed green, 3px dotted blue</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line">@charset <span class="token string">"UTF-8"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">/* ====list运算=== */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* ====list运算=== */</span></span>
<span class="line"><span class="token selector">.p3</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a b c d </span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">,</span> comma<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a, b, c, d</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">index</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2 </span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">index</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">is-bracketed</span><span class="token punctuation">(</span>[a b c]<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true </span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">is-bracketed</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line">    </span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">list-separator</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span> <span class="token punctuation">;</span> <span class="token comment">// "space" </span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">list-separator</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// "comma"</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">join</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> d e f<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a b c d e f </span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>d e f<span class="token punctuation">)</span><span class="token punctuation">,</span> comma<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a, b, c, d, e, f </span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">join</span><span class="token punctuation">(</span>a b c<span class="token punctuation">,</span> d e f<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$bracketed</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [a b c d e f]</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">length</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span><span class="token function">zip</span><span class="token punctuation">(</span>1px 2px 3px<span class="token punctuation">,</span> solid dashed dotted<span class="token punctuation">,</span> red green blue<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">    <span class="token comment">// 1px solid red, 2px dashed green, 3px dotted blue</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">"UTF-8"</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token comment">/* ====list运算=== */</span></span>
<span class="line"><span class="token selector">.p3</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> a b c d<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> true<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> false<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> space<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> space<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> a b c d e f<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> d<span class="token punctuation">,</span> e<span class="token punctuation">,</span> f<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> [a b c d e f]<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">,</span> 2px dashed green<span class="token punctuation">,</span> 3px dotted blue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-4map-映射-函数" tabindex="-1"><a class="header-anchor" href="#_7-4map-映射-函数"><span>7.4Map(映射)函数</span></a></h2>
<p>Sass Map 是不可变的，因此在处理 Map 对象时，返回的是一个新的 Map 对象，而不是在原有的 Map 对象上进行修改。
Map(映射)对象是以一对或多对的 key/value 来表示。</p>
<ol>
<li>map-get(map, key)</li>
</ol>
<p>返回 Map 中 key 所对应的 value(值)。如没有对应的 key，则返回 null 值。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> </span>
<span class="line"><span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"small"</span><span class="token punctuation">)</span> <span class="token comment">// 12px</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>map-has-key(map, key)</li>
</ol>
<p>判断 map 是否有对应的 key，存在返回 true，否则返回 false。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> </span>
<span class="line"><span class="token function">map-has-key</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"big"</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>map-keys(map)</li>
</ol>
<p>返回 map 中所有的 key 组成的队列。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> </span>
<span class="line"><span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">)</span> <span class="token comment">// "small", "normal, "large"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>map-values(map)</li>
</ol>
<p>返回 map 中所有的 value 并生成一个队列。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> </span>
<span class="line"><span class="token function">map-values</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">)</span> <span class="token comment">// 12px, 18px, 24px</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>map-merge(map1, map2)</li>
</ol>
<p>合并两个 map 形成一个新的 map 类型，即将 map2 添加到 map1的尾部</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> </span>
<span class="line"><span class="token property"><span class="token variable">$font-sizes2</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"x-large"</span><span class="token punctuation">:</span> 30px<span class="token punctuation">,</span> <span class="token string">"xx-large"</span><span class="token punctuation">:</span> 36px<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">map-merge</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token variable">$font-sizes2</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token comment">//"small": 12px, "normal": 18px, "large": 24px, "x-large": 30px, "xx-large": 36px</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>map-remove(map, keys...)</li>
</ol>
<p>移除 map 中的 keys，多个 key 使用逗号隔开。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> </span>
<span class="line"><span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"small"</span><span class="token punctuation">)</span> <span class="token comment">// ("normal": 18px, "large": 24px) </span></span>
<span class="line"><span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"small"</span><span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">)</span> <span class="token comment">// ("normal": 18px)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-5选择器函数" tabindex="-1"><a class="header-anchor" href="#_7-5选择器函数"><span>7.5选择器函数</span></a></h2>
<p>这个可算得上是高级操作了，没有见过其他大神怎么去使用。</p>
<ol>
<li>is-superselector(super, sub)</li>
</ol>
<p>比较两个选择器匹配的范围，即判断 super 选择器是否包含了 sub 选择器所匹配的范围，是的话返回 true，否则返回 false。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">is-superselector</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">,</span> <span class="token string">"div.myInput"</span><span class="token punctuation">)</span> <span class="token comment">// true </span></span>
<span class="line"><span class="token function">is-superselector</span><span class="token punctuation">(</span><span class="token string">"div.myInput"</span><span class="token punctuation">,</span> <span class="token string">"div"</span><span class="token punctuation">)</span> <span class="token comment">// false </span></span>
<span class="line"><span class="token function">is-superselector</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">,</span> <span class="token string">"div"</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>selector-append(selectors)</li>
</ol>
<p>将第二个 (也可以有多个) 添加到第一个选择器的后面。selector.</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">selector-append</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">,</span> <span class="token string">".myInput"</span><span class="token punctuation">)</span> <span class="token comment">// div.myInput </span></span>
<span class="line"><span class="token function">selector-append</span><span class="token punctuation">(</span><span class="token string">".warning"</span><span class="token punctuation">,</span> <span class="token string">"__a"</span><span class="token punctuation">)</span> <span class="token comment">//结果: .warning__a</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>selector-nest(selectors)</li>
</ol>
<p>返回一个新的选择器，该选择器通过提供的列表选择器生成一个嵌套的列表。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">selector-nest</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">,</span> <span class="token string">"li"</span><span class="token punctuation">)</span> <span class="token comment">// ul li </span></span>
<span class="line"><span class="token function">selector-nest</span><span class="token punctuation">(</span><span class="token string">".warning"</span><span class="token punctuation">,</span> <span class="token string">"alert"</span><span class="token punctuation">,</span> <span class="token string">"div"</span><span class="token punctuation">)</span> <span class="token comment">// .warning div, alert div</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>selector-parse(selector)</li>
</ol>
<p>将字符串的选择符 selector 转换成选择器队列。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">selector-parse</span><span class="token punctuation">(</span><span class="token string">"h1 .myInput .warning"</span><span class="token punctuation">)</span> <span class="token comment">// ('h1''.myInput''.warning')</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="5">
<li>selector-replace(selector, original, replacement)</li>
</ol>
<p>给定一个选择器，用replacement 替换 original 后返回一个新的选择器队列。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">selector-replace</span><span class="token punctuation">(</span><span class="token string">"p.warning"</span><span class="token punctuation">,</span> <span class="token string">"p"</span><span class="token punctuation">,</span> <span class="token string">"div"</span><span class="token punctuation">)</span> <span class="token comment">// div.warning</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="6">
<li>selector-unify(selector1, selector2)</li>
</ol>
<p>将两组选择器合成一个复合选择器。如两个选择器无法合成，则返回 null 值。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">selector-unify</span><span class="token punctuation">(</span><span class="token string">"myInput"</span><span class="token punctuation">,</span> <span class="token string">".disabled"</span><span class="token punctuation">)</span> <span class="token comment">// myInput.disabled </span></span>
<span class="line"><span class="token function">selector-unify</span><span class="token punctuation">(</span><span class="token string">"p"</span><span class="token punctuation">,</span> <span class="token string">"h1"</span><span class="token punctuation">)</span> <span class="token comment">// null</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>simple-selectors(selectors)</li>
</ol>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">simple-selectors</span><span class="token punctuation">(</span><span class="token string">"div.myInput"</span><span class="token punctuation">)</span> <span class="token comment">// div, .myInput</span></span>
<span class="line"><span class="token function">simple-selectors</span><span class="token punctuation">(</span><span class="token string">"div.myInput:before"</span><span class="token punctuation">)</span> <span class="token comment">// div, .myInput, :before</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>将合成选择器拆为单个选择器。</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token comment">/* =====map运算======= */</span></span>
<span class="line"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"small"</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">:</span> 18px<span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">:</span> 24px<span class="token punctuation">)</span> <span class="token punctuation">;</span></span>
<span class="line"><span class="token property"><span class="token variable">$font-sizes2</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">"x-large"</span><span class="token punctuation">:</span> 30px<span class="token punctuation">,</span> <span class="token string">"xx-large"</span><span class="token punctuation">:</span> 36px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token selector">.p4</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"small"</span><span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// 12px</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">map-has-key</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"big"</span><span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// false</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// "small", "normal, "large"</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">map-values</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// 12px, 18px, 24px</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token function">map-merge</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token variable">$font-sizes2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//"small": 12px, "normal": 18px, "large": 24px, "x-large": 30px, "xx-large": 36px</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"small"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ("normal": 18px, "large": 24px) </span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">map-keys</span><span class="token punctuation">(</span><span class="token function">map-remove</span><span class="token punctuation">(</span><span class="token variable">$font-sizes</span><span class="token punctuation">,</span> <span class="token string">"small"</span><span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ("normal": 18px)</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">"UTF-8"</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token comment">/* =====map运算======= */</span></span>
<span class="line"><span class="token selector">.p4</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> false<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"small"</span><span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span> 18px<span class="token punctuation">,</span> 24px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"small"</span><span class="token punctuation">,</span> <span class="token string">"normal"</span><span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">,</span> <span class="token string">"x-large"</span><span class="token punctuation">,</span> <span class="token string">"xx-large"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"normal"</span><span class="token punctuation">,</span> <span class="token string">"large"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"normal"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-6-颜色相关函数" tabindex="-1"><a class="header-anchor" href="#_7-6-颜色相关函数"><span>7.6 颜色相关函数</span></a></h2>
<h3 id="_7-6-1颜色函数-一-颜色设置" tabindex="-1"><a class="header-anchor" href="#_7-6-1颜色函数-一-颜色设置"><span>7.6.1颜色函数（一）颜色设置</span></a></h3>
<p>对颜色的设置和编辑永远是前端设计的首要一步。</p>
<ol>
<li>rgb(red, green, blue)</li>
</ol>
<p>创建一个 Red-Green-Blue (RGB) 色。其中 R 是 &quot;red&quot; 表示红色，而 G 是 &quot;green&quot; 绿色，B 是 &quot;blue&quot; 蓝色。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>rgba(red, green, blue, alpha)</li>
</ol>
<p>根据红、绿、蓝和透明度值创建一个颜色。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>hsl(hue, saturation, lightness)</li>
</ol>
<p>通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span> <span class="token comment">// 绿色 </span></span>
<span class="line"><span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 75%<span class="token punctuation">)</span><span class="token comment">// 浅绿色 </span></span>
<span class="line"><span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 25%<span class="token punctuation">)</span> <span class="token comment">// dark green </span></span>
<span class="line"><span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 60%<span class="token punctuation">,</span> 70%<span class="token punctuation">)</span><span class="token comment">// 柔和的绿色</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>hsla(hue, saturation, lightness, alpha)</li>
</ol>
<p>通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span> <span class="token comment">// 绿色带有透明度</span></span>
<span class="line"><span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 75%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span> <span class="token comment">// 浅绿色带有透明度</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>grayscale(color)</li>
</ol>
<p>将一个颜色变成灰色，相当于 desaturate( color,100%)。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">grayscale</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #c6c6c6</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="6">
<li>complement(color)</li>
</ol>
<p>返回一个补充色，相当于adjust-hue($color,180deg)。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">complement</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token comment">// #ff7faa</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="7">
<li>invert(color, weight)</li>
</ol>
<p>返回一个反相色，红、绿、蓝色值倒过来，而透明度不变。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">invert</span><span class="token punctuation">(</span>white<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// black</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_7-6-2颜色函数-二-颜色获取" tabindex="-1"><a class="header-anchor" href="#_7-6-2颜色函数-二-颜色获取"><span>7.6.2颜色函数（二）颜色获取</span></a></h3>
<ol>
<li>red(color)</li>
</ol>
<p>从一个颜色中获取其中红色值（0-255），可用于取出某个hex颜色中的红色值。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">red</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token comment">// 127 </span></span>
<span class="line"><span class="token function">red</span><span class="token punctuation">(</span>red<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 255</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>green(color)</li>
</ol>
<p>从一个颜色中获取其中绿色值（0-255）。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">green</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token comment">// 255 </span></span>
<span class="line"><span class="token function">green</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span> <span class="token comment">// 0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>blue(color)</li>
</ol>
<p>从一个颜色中获取其中蓝色值（0-255）。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">blue</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token comment">// 212 </span></span>
<span class="line"><span class="token function">blue</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span> <span class="token comment">// 255</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>hue(color)</li>
</ol>
<p>返回颜色在 HSL 色值中的角度值 (0deg - 255deg)。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">hue</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 160deg</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="5">
<li>saturation(color)</li>
</ol>
<p>获取一个颜色的饱和度值(0% - 100%)。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">saturation</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token comment">// 100%</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="6">
<li>lightness(color)</li>
</ol>
<p>获取一个颜色的亮度值(0% - 100%)。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">lightness</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token comment">// 74.9%</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="7">
<li>alpha(color)</li>
</ol>
<p>返回颜色的alpha，返回值为0 或1。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">alpha</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token comment">// 1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="8">
<li>opacity(color)</li>
</ol>
<p>获取颜色透明度值(0-1)。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">opacity</span><span class="token punctuation">(</span><span class="token function">rgba</span><span class="token punctuation">(</span>127<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 212<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 0.5</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_7-6-3颜色函数-三-颜色操作" tabindex="-1"><a class="header-anchor" href="#_7-6-3颜色函数-三-颜色操作"><span>7.6.3颜色函数（三）颜色操作</span></a></h3>
<ol>
<li>mix(color1, color2, weight)</li>
</ol>
<p>把两种颜色混合起来。</p>
<p>weight 参数必须是 0% 到 100%。默认 weight 为 50%，表明新颜色各取 50% color1 和 color2 的色值相加。如果 weight 为 25%，那表明新颜色为 25% color1 和 75% color2 的色值相加。</p>
<ol start="2">
<li>adjust-hue(color, degrees)</li>
</ol>
<p>通过改变一个颜色的色相值（-360deg - 360deg），创建一个新的颜色。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">adjust-hue</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">,</span> 80deg<span class="token punctuation">)</span> <span class="token comment">// #8080ff</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>rgba(color, alpha)</li>
</ol>
<p>根据红、绿、蓝和透明度值创建一个颜色。</p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token function">rgba</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">,</span> 30%<span class="token punctuation">)</span><span class="token comment">// rgba(127, 255, 212, 0.3)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>lighten(color, amount)</li>
</ol>
<p>通过改变颜色的亮度值（0% - 100%），让颜色变亮，创建一个新的颜色。</p>
<ol start="5">
<li>darken(color, amount)</li>
</ol>
<p>通过改变颜色的亮度值（0% - 100%），让颜色变暗，创建一个新的颜色。</p>
<ol start="6">
<li>saturate(color, amount)</li>
</ol>
<p>提高传入颜色的色彩饱和度。等同于 adjust-color( color, saturation: amount)</p>
<ol start="7">
<li>desaturate(color, amount)</li>
</ol>
<p>调低一个颜色的饱和度后产生一个新的色值。同样，饱和度的取值区间在 0% ~ 100%。等同于 adjust-color(color, saturation: -amount)</p>
<ol start="8">
<li>opacify(color, amount)</li>
</ol>
<p>降低颜色的透明度，取值在 0-1 之。等价于 adjust-color(color, alpha: amount)</p>
<ol start="9">
<li>fade-in(color, amount)</li>
</ol>
<p>降低颜色的透明度，取值在 0-1 之。等价于 adjust-color(color, alpha: amount)</p>
<ol start="10">
<li>transparentize(color, amount)</li>
</ol>
<p>提升颜色的透明度，取值在 0-1 之间。等价于 adjust-color(color, alpha: -amount)</p>
<ol start="11">
<li>fade-out(color, amount)</li>
</ol>
<p>提升颜色的透明度，取值在 0-1 之间。等价于 adjust-color(color, alpha: -amount)</p>
<p><strong>编译前SCSS</strong></p>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre v-pre><code><span class="line"><span class="token comment">// scss 代码编辑</span></span>
<span class="line"><span class="token comment">/* ====颜色====== */</span></span>
<span class="line"><span class="token selector">.p6</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span>  <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span>  <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// 绿色 </span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 75%<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 浅绿色 </span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 25%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// dark green </span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 60%<span class="token punctuation">,</span> 70%<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 柔和的绿色</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 绿色带有透明度</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 75%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 浅绿色带有透明度</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">grayscale</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// #c6c6c6</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">complement</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// #ff7faa</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">invert</span><span class="token punctuation">(</span>white<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// black</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">red</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// 127 </span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">red</span><span class="token punctuation">(</span>red<span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// 255</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">green</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// 255 </span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">green</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// 0</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">blue</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// 212 </span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">blue</span><span class="token punctuation">(</span>blue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 255</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span>  <span class="token function">hue</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// 160deg</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">saturation</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 100%</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">lightness</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span> <span class="token punctuation">;</span><span class="token comment">// 74.9%</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">alpha</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">opacity</span><span class="token punctuation">(</span><span class="token function">rgba</span><span class="token punctuation">(</span>127<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 212<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0.5</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">adjust-hue</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">,</span> 80deg<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #8080ff</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>#7fffd4<span class="token punctuation">,</span> 30%<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// rgba(127, 255, 212, 0.3)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">"UTF-8"</span><span class="token punctuation">;</span></span></span>
<span class="line"><span class="token comment">/* ====颜色====== */</span></span>
<span class="line"><span class="token selector">.p6</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 75%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 25%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 60%<span class="token punctuation">,</span> 70%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>120<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 75%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #bfbfbf<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #ff7faa<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 127<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 255<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 255<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 212<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 255<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 159.84375deg<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 74.9019607843%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> 0.5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> #7f7fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>127<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 212<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


