<template><div><h1 id="七、-css3新增文本属性" tabindex="-1"><a class="header-anchor" href="#七、-css3新增文本属性"><span>七、 CSS3新增文本属性</span></a></h1>
<h2 id="_7-1-文本阴影" tabindex="-1"><a class="header-anchor" href="#_7-1-文本阴影"><span>7.1 文本阴影</span></a></h2>
<p>在 CSS3 中，我们可以使用 text-shadow 属性给文本添加阴影。
语法：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-shadow</span><span class="token punctuation">:</span> h-shadow v-shadow blur color<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>h-shadow</td>
<td>必需写，水平阴影的位置。允许负值。</td>
</tr>
<tr>
<td>v-shadow</td>
<td>必需写，垂直阴影的位置。允许负值。</td>
</tr>
<tr>
<td>blur</td>
<td>可选，模糊的距离。</td>
</tr>
<tr>
<td>color</td>
<td>可选，阴影的颜色</td>
</tr>
</tbody>
</table>
<p><strong>默认值</strong>： text-shadow:none 表示没有阴影。</p>
<h2 id="_7-2-文本换行" tabindex="-1"><a class="header-anchor" href="#_7-2-文本换行"><span>7.2 文本换行</span></a></h2>
<p>在 CSS3 中，我们可以使用 white-space 属性设置文本换行方式。
<strong>常用值如下</strong>：</p>
<table>
<thead>
<tr>
<th>值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>normal</td>
<td>文本超出边界自动换行，文本中的换行被浏览器识别为一个空格。（默认值）</td>
</tr>
<tr>
<td>pre</td>
<td>原样输出，与pre标签的效果相同。</td>
</tr>
<tr>
<td>pre-wrap</td>
<td>在pre效果的基础上，超出元素边界自动换行。</td>
</tr>
<tr>
<td>pre-line</td>
<td>在pre效果的基础上，超出元素边界自动换行，且只识别文本中的换行，空格会忽略。</td>
</tr>
<tr>
<td>nowrap</td>
<td>强制不换行</td>
</tr>
</tbody>
</table>
<h2 id="_7-3-文本溢出" tabindex="-1"><a class="header-anchor" href="#_7-3-文本溢出"><span>7.3 文本溢出</span></a></h2>
<p>在 CSS3 中，我们可以使用 text-overflow 属性设置文本内容溢出时的呈现模式。</p>
<p><strong>常用值如下</strong>：</p>
<table>
<thead>
<tr>
<th>值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>clip</td>
<td>当内联内容溢出时，将溢出部分裁切掉。（默认值）</td>
</tr>
<tr>
<td>ellipsis</td>
<td>当内联内容溢出块容器时，将溢出部分替换为...。</td>
</tr>
</tbody>
</table>
<p><strong>注意</strong>：</p>
<blockquote>
<p>要使得text-overflow属性生效，块容器必须显式定义overflow为非visible值，white-space为nowrap值。</p>
</blockquote>
<h2 id="_7-4-文本修饰" tabindex="-1"><a class="header-anchor" href="#_7-4-文本修饰"><span>7.4 文本修饰</span></a></h2>
<ol>
<li>CSS3 升级了 text-decoration 属性，让其变成了复合属性。</li>
</ol>
<blockquote>
<p>text-decoration: text-decoration-line || text-decoration-style || text-decoration-color</p>
</blockquote>
<ol start="2">
<li>子属性及其含义：
<ul>
<li>text-decoration-line 设置文本装饰线的位置
<ul>
<li>none ： 指定文字无装饰 （默认值）</li>
<li>underline ： 指定文字的装饰是下划线</li>
<li>overline ： 指定文字的装饰是上划线</li>
<li>line-through ： 指定文字的装饰是贯穿线</li>
</ul>
</li>
<li>text-decoration-style 文本装饰线条的形状
<ul>
<li>solid ： 实线 （默认）</li>
<li>double ： 双线</li>
<li>dotted ： 点状线条</li>
<li>dashed ： 虚线</li>
<li>wavy ： 波浪线</li>
</ul>
</li>
<li>text-decoration-color 文本装饰线条的颜色</li>
</ul>
</li>
</ol>
<h2 id="_7-5-文本描边" tabindex="-1"><a class="header-anchor" href="#_7-5-文本描边"><span>7.5 文本描边</span></a></h2>
<p><strong>注意</strong>：文字描边功能仅 webkit 内核浏览器支持。</p>
<ul>
<li>-webkit-text-stroke-width ：设置文字描边的宽度，写长度值。</li>
<li>-webkit-text-stroke-color ：设置文字描边的颜色，写颜色值。</li>
<li>-webkit-text-stroke ：复合属性，设置文字描边宽度和颜色。</li>
</ul>
</div></template>


