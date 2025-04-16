<template><div><h1 id="十六、响应式布局" tabindex="-1"><a class="header-anchor" href="#十六、响应式布局"><span>十六、响应式布局</span></a></h1>
<p>媒体查询</p>
<h2 id="_16-1-媒体类型" tabindex="-1"><a class="header-anchor" href="#_16-1-媒体类型"><span>16.1 媒体类型</span></a></h2>
<table>
<thead>
<tr>
<th>值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>all</td>
<td>检测所有设备。</td>
</tr>
<tr>
<td>screen</td>
<td>检测电子屏幕，包括：电脑屏幕、平板屏幕、手机屏幕等。</td>
</tr>
<tr>
<td>print</td>
<td>检测打印机。</td>
</tr>
</tbody>
</table>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media" target="_blank" rel="noopener noreferrer">完整列表请参考</a></p>
<h2 id="_16-2-媒体特性" tabindex="-1"><a class="header-anchor" href="#_16-2-媒体特性"><span>16.2 媒体特性</span></a></h2>
<table>
<thead>
<tr>
<th>值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>检测视口宽度。</td>
</tr>
<tr>
<td>max-width</td>
<td>检测视口最大宽度。</td>
</tr>
<tr>
<td>min-width</td>
<td>检测视口最小宽度。</td>
</tr>
<tr>
<td>height</td>
<td>检测视口高度。</td>
</tr>
<tr>
<td>max-height</td>
<td>检测视口最大高度。</td>
</tr>
<tr>
<td>min-height</td>
<td>检测视口最小高度。</td>
</tr>
<tr>
<td>device-width</td>
<td>检测设备屏幕的宽度。</td>
</tr>
<tr>
<td>max-device-width</td>
<td>检测设备屏幕的最大宽度。</td>
</tr>
<tr>
<td>orientation</td>
<td>检测视口的旋转方向（是否横屏）。<br>1. portrait ：视口处于纵向，即高度大于等于宽度。<br>2. landscape ：视口处于横向，即宽度大于高度。</td>
</tr>
</tbody>
</table>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media" target="_blank" rel="noopener noreferrer">完整列表请参考</a></p>
<h2 id="_16-3-运算符" tabindex="-1"><a class="header-anchor" href="#_16-3-运算符"><span>16.3 运算符</span></a></h2>
<table>
<thead>
<tr>
<th>值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>and</td>
<td>并且</td>
</tr>
<tr>
<td>,或or</td>
<td>或</td>
</tr>
<tr>
<td>not</td>
<td>否定</td>
</tr>
<tr>
<td>only</td>
<td>肯定</td>
</tr>
</tbody>
</table>
<h2 id="_16-4-常用阈值" tabindex="-1"><a class="header-anchor" href="#_16-4-常用阈值"><span>16.4 常用阈值</span></a></h2>
<p><em>在实际开发中，会将屏幕划分成几个区间，例如：</em></p>
<p><img src="/style/htmlcss/css3/026.png" alt=""></p>
<h2 id="_16-5-结合外部样式的用法" tabindex="-1"><a class="header-anchor" href="#_16-5-结合外部样式的用法"><span>16.5 结合外部样式的用法</span></a></h2>
<ul>
<li>用法一：</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>具体的媒体查询<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mystylesheet.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>用法二：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*CSS-Code;*/</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span>768px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*CSS-Code;*/</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


