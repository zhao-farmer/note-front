<template><div><h1 id="八、布局" tabindex="-1"><a class="header-anchor" href="#八、布局"><span>八、布局</span></a></h1>
<h2 id="_8-1-版心" tabindex="-1"><a class="header-anchor" href="#_8-1-版心"><span>8.1 版心</span></a></h2>
<ul>
<li>在 PC 端网页中，一般都会有一个固定宽度且水平居中的盒子，来显示网页的主要内容，这是网页 的版心。</li>
<li>版心的宽度一般是 960 ~ 1200 像素之间。</li>
<li>版心可以是一个，也可以是多个。</li>
</ul>
<p><img src="/style/htmlcss/css2/1737864879309.jpg" alt=""></p>
<h2 id="_8-2-常用布局名词" tabindex="-1"><a class="header-anchor" href="#_8-2-常用布局名词"><span>8.2 常用布局名词</span></a></h2>
<table>
<thead>
<tr>
<th>位置</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>顶部导航条</td>
<td>topbar</td>
</tr>
<tr>
<td>页头</td>
<td>header、page-header</td>
</tr>
<tr>
<td>导航</td>
<td>nav、navigator、navbar</td>
</tr>
<tr>
<td>搜索框</td>
<td>search、search-box</td>
</tr>
<tr>
<td>横幅、广告、宣传图</td>
<td>banner</td>
</tr>
<tr>
<td>主要内容</td>
<td>content、main</td>
</tr>
<tr>
<td>侧边栏</td>
<td>aside、sidebar</td>
</tr>
<tr>
<td>页脚</td>
<td>footer、page-footer</td>
</tr>
</tbody>
</table>
<h2 id="_8-3-重置默认样式" tabindex="-1"><a class="header-anchor" href="#_8-3-重置默认样式"><span>8.3 重置默认样式</span></a></h2>
<ul>
<li>很多元素都有默认样式，比如：
<ol>
<li>p 元素有默认的上下 margin 。</li>
<li>h1~h6 标题也有上下 margin ，且字体加粗。</li>
<li>body 元素有默认的 8px 外边距。</li>
<li>超链接有默认的文字颜色和下划线。</li>
<li>ul 元素有默认的左 pading 。</li>
<li>.......</li>
</ol>
</li>
</ul>
<p>在早期，元素默认样式，能够让我们快速的绘制网页，但如今网页的设计越来越复杂，内容越来越 多，而且很精细，这些默认样式会给我们绘制页面带来麻烦；而且这些默认样式，在不同的浏览器 上呈现出来的效果也不一样，所以我们需要重置这些默认样式。</p>
<ul>
<li>方案一：使用全局选择器</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">*</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    ......</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此种方法，在简单案例中可以用一下，但实际开发中不会使用，因为 * 选择的是所有元素，而并 不是所有的元素都有默认样式；而且我们重置时，有时候是需要做特定处理的，比如：想让 a 元 素的文字是灰色，其他元素文字是蓝色。</p>
<ul>
<li>方案二：</li>
</ul>
<p>reset.css 选择到具有默认样式的元素，清空其默认的样式。
经过 reset 后的网页，好似“一张白纸”，开发人员可根据设计稿，精细的去添加具体的样式。</p>
<ul>
<li>方案三：</li>
</ul>
<p>Normalize.css <a href="http://necolas.github.io/normalize.css/" target="_blank" rel="noopener noreferrer">官网地址</a> 是一种最新方案，它在清除默认样式的基础上，保留了一些有价值的默认样式。</p>
<p><strong>相对于 reset.css ， Normalize.css 有如下优点</strong>：</p>
<ol>
<li>保护了有价值的默认样式，而不是完全去掉它们。</li>
<li>为大部分HTML元素提供一般化的样式。</li>
<li>新增对 HTML5 元素的设置。</li>
<li>对并集选择器的使用比较谨慎，有效避免调试工具杂乱。</li>
</ol>
<p><strong>备注</strong>：</p>
<blockquote>
<p>Normalize.css 的重置，和 reset.css 相比，更加的温和，开发时可根据实际情况进行 选择</p>
</blockquote>
</div></template>


