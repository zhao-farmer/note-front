<template><div><h1 id="四、新增盒子样式" tabindex="-1"><a class="header-anchor" href="#四、新增盒子样式"><span>四、新增盒子样式</span></a></h1>
<h2 id="_4-1-box-sizing-怪异盒模型" tabindex="-1"><a class="header-anchor" href="#_4-1-box-sizing-怪异盒模型"><span>4.1. box-sizing 怪异盒模型</span></a></h2>
<p>使用 box-sizing 属性可以设置盒模型的两种类型</p>
<table>
<thead>
<tr>
<th>可选值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>content-box</td>
<td>width和height设置的是盒子内容区的大小。（默认值）</td>
</tr>
<tr>
<td>border-box</td>
<td>width和height设置的是盒子总大小。（怪异盒模型）</td>
</tr>
</tbody>
</table>
<h2 id="_4-2-resize-调整盒子大小" tabindex="-1"><a class="header-anchor" href="#_4-2-resize-调整盒子大小"><span>4.2. resize 调整盒子大小</span></a></h2>
<p>使用 resize 属性可以控制是否允许用户调节元素尺寸。</p>
<table>
<thead>
<tr>
<th>值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>不允许用户调整元素大小(默认)。</td>
</tr>
<tr>
<td>both</td>
<td>用户可以调节元素的宽度和高度。</td>
</tr>
<tr>
<td>horizontal</td>
<td>用户可以调节元素的宽度。</td>
</tr>
<tr>
<td>vertical</td>
<td>用户可以调节元素的高度。</td>
</tr>
</tbody>
</table>
<h2 id="_4-3-box-shadow-盒子阴影" tabindex="-1"><a class="header-anchor" href="#_4-3-box-shadow-盒子阴影"><span>4.3. box-shadow 盒子阴影</span></a></h2>
<p>使用 box-shadow 属性为盒子添加阴影。</p>
<p><strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> h-shadow v-shadow blur spread color inset<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>各个值的含义</strong>：</p>
<table>
<thead>
<tr>
<th>值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>h-shadow</td>
<td>水平阴影的位置，必须填写，可以为负值</td>
</tr>
<tr>
<td>v-shadow</td>
<td>垂直阴影的位置，必须填写，可以为负值</td>
</tr>
<tr>
<td>blur</td>
<td>可选，模糊距离</td>
</tr>
<tr>
<td>spread</td>
<td>可选，阴影的外延值</td>
</tr>
<tr>
<td>color</td>
<td>可选，阴影的颜色</td>
</tr>
<tr>
<td>inset</td>
<td>可选，将外部阴影改为内部阴影</td>
</tr>
</tbody>
</table>
<p><strong>默认值</strong>： box-shadow:none 表示没有阴影</p>
<p><strong>示例</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 写两个值，含义：水平位置、垂直位置 */</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 写三个值，含义：水平位置、垂直位置、颜色 */</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 写三个值，含义：水平位置、垂直位置、模糊值 */</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 写四个值，含义：水平位置、垂直位置、模糊值、颜色 */</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 10px red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 写五个值，含义：水平位置、垂直位置、模糊值、外延值、颜色 */</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 10px 10px blue<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 写六个值，含义：水平位置、垂直位置、模糊值、外延值、颜色、内阴影 */</span></span>
<span class="line">    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 10px 10px 20px 3px blue inset<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-4-opacity-不透明度" tabindex="-1"><a class="header-anchor" href="#_4-4-opacity-不透明度"><span>4.4. opacity 不透明度</span></a></h2>
<p>opacity属性能为整个元素添加透明效果，值是0到1之间的小数，0是完全透明，1表示完全不透明。</p>
<ul>
<li>opacity 与 rgba 的区别？
<ul>
<li>opacity 是一个属性，设置的是整个元素（包括元素里的内容）的不透明度。</li>
<li>rgba 是颜色的设置方式，用于设置颜色，它的透明度，仅仅是调整颜色的透明度。</li>
</ul>
</li>
</ul>
</div></template>


