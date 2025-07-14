<template><div><h1 id="六、-css3新增边框属性" tabindex="-1"><a class="header-anchor" href="#六、-css3新增边框属性"><span>六、 CSS3新增边框属性</span></a></h1>
<h2 id="_6-1-边框圆角" tabindex="-1"><a class="header-anchor" href="#_6-1-边框圆角"><span>6.1 边框圆角</span></a></h2>
<ul>
<li>在 CSS3 中，使用 border-radius 属性可以将盒子变为圆角。</li>
<li>同时设置四个角的圆角：</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> </span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>分开设置每个角的圆角（几乎不用）：</li>
</ul>
<table>
<thead>
<tr>
<th>属性名</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-top-left-radius</td>
<td>设置左上角圆角半径：<br>1. 一个值是正圆半径。<br>2. 两个值分别是椭圆的 x 半径、 y 半径。</td>
</tr>
<tr>
<td>border-top-right-radius</td>
<td>设置右上角圆角半径：<br>1. 一个值是正圆半径。<br>2. 两个值分别是椭圆的 x 半径、 y 半径。</td>
</tr>
<tr>
<td>border-bottom-right-radius</td>
<td>设置右下角圆角半径：<br>1. 一个值是正圆半径，<br>2. 两个值分别是椭圆的 x 半径、 y 半径。</td>
</tr>
<tr>
<td>border-bottom-left-radius</td>
<td>设置左下角圆角半径：<br>1. 一个值是正圆半径，<br>2. 两个值分别是椭圆的 x 半径、 y 半径。</td>
</tr>
</tbody>
</table>
<ul>
<li>分开设置每个角的圆角，综合写法（几乎不用）：</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* border-raidus: 左上角x 右上角x 右下角x 左下角x / 左上y 右上y 右下y 左下y */</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 100px 50px 20px 10px / 50px 20px 10px 5px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-边框外轮廓-了解" tabindex="-1"><a class="header-anchor" href="#_6-2-边框外轮廓-了解"><span>6.2 边框外轮廓（了解）</span></a></h2>
<ul>
<li>outline-width ：外轮廓的宽度。</li>
<li>outline-color ：外轮廓的颜色。</li>
<li>outline-style ：外轮廓的风格。
<ul>
<li>none ： 无轮廓</li>
<li>dotted ： 点状轮廓</li>
<li>dashed ： 虚线轮廓</li>
<li>solid ： 实线轮廓</li>
<li>double ： 双线轮廓</li>
</ul>
</li>
<li>outline-offset 设置外轮廓与边框的距离，正负值都可以设置。
<ul>
<li>注意： outline-offset 不是 outline 的子属性，是一个独立的属性。</li>
</ul>
</li>
<li>outline 复合属性
<ul>
<li>outline:50px solid blue</li>
</ul>
</li>
</ul>
</div></template>


