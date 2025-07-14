<template><div><h1 id="五、-css3-新增背景属性" tabindex="-1"><a class="header-anchor" href="#五、-css3-新增背景属性"><span>五、 CSS3 新增背景属性</span></a></h1>
<h2 id="_5-1-background-origin" tabindex="-1"><a class="header-anchor" href="#_5-1-background-origin"><span>5.1. background-origin</span></a></h2>
<p><strong>作用</strong>：设置背景图的原点。
<strong>语法</strong>:</p>
<blockquote>
<ol>
<li>padding-box ：从 padding 区域开始显示背景图像。—— 默认值</li>
<li>border-box ： 从 border 区域开始显示背景图像。</li>
<li>content-box ： 从 content 区域开始显示背景图像。</li>
</ol>
</blockquote>
<h2 id="_5-2-background-clip" tabindex="-1"><a class="header-anchor" href="#_5-2-background-clip"><span>5.2. background-clip</span></a></h2>
<p><strong>作用</strong>：设置背景图的向外裁剪的区域。
<strong>语法</strong>:</p>
<blockquote>
<ol>
<li>border-box：从 border 区域开始向外裁剪背景。 —— 默认值</li>
<li>padding-box：从 padding 区域开始向外裁剪背景。</li>
<li>content-box： 从 content 区域开始向外裁剪背景。</li>
<li>text：背景图只呈现在文字上。</li>
</ol>
</blockquote>
<p><strong>注意</strong>：</p>
<blockquote>
<p>若值为 text ，那么 backgroun-clip 要加上 -webkit- 前缀。</p>
</blockquote>
<h2 id="_5-3-background-size" tabindex="-1"><a class="header-anchor" href="#_5-3-background-size"><span>5.3. background-size</span></a></h2>
<p><strong>作用</strong>：设置背景图的尺寸。
<strong>语法</strong>：</p>
<blockquote>
<ol>
<li>用长度值指定背景图片大小，不允许负值。
<ul>
<li>background-size: 300px 200px;</li>
</ul>
</li>
<li>用百分比指定背景图片大小，不允许负值。</li>
</ol>
<ul>
<li>background-size: 100% 100%;</li>
</ul>
<ol start="3">
<li>auto ： 背景图片的真实大小。 —— 默认值</li>
<li>contain ： 将背景图片等比缩放，使背景图片的宽或高，与容器的宽或高相等，再将完整背景图片包含在容器内，但要注意：可能会造成容器里部分区域没有背景图片。
<ul>
<li>background-size: contain;</li>
</ul>
</li>
<li>cover ：将背景图片等比缩放，直到完全覆盖容器，图片会尽可能全的显示在元素上，但要
<ul>
<li><strong>注意</strong>：背景图片有可能显示不完整。—— 相对比较好的选择</li>
<li>background-size: cover;</li>
</ul>
</li>
</ol>
</blockquote>
<h2 id="_5-4-backgorund-复合属性" tabindex="-1"><a class="header-anchor" href="#_5-4-backgorund-复合属性"><span>5.4. backgorund 复合属性</span></a></h2>
<p><strong>语法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* background: 背景颜色 背景url 是否重复 位置 / 大小 原点 裁剪方式; */</span></span>
<span class="line">    <span class="token property">background</span><span class="token punctuation">:</span> color url repeat position / size origin clip<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<ol>
<li>origin 和 clip 的值如果一样，如果只写一个值，则 origin 和 clip 都设置；如果设置了两个值，前面的是 origin ，后面的 clip 。</li>
<li>size 的值必须写在 position 值的后面，并且用 / 分开。</li>
</ol>
</blockquote>
<h2 id="_5-5-多背景图" tabindex="-1"><a class="header-anchor" href="#_5-5-多背景图"><span>5.5. 多背景图</span></a></h2>
<p>CSS3 允许元素设置多个背景图片</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token comment">/* 添加多个背景图 */</span></span>
<span class="line"><span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/bg-lt.png<span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">,</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/bg-rt.png<span class="token punctuation">)</span></span> no-repeat right top<span class="token punctuation">,</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/bg-lb.png<span class="token punctuation">)</span></span> no-repeat left bottom<span class="token punctuation">,</span></span>
<span class="line">            <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>../images/bg-rb.png<span class="token punctuation">)</span></span> no-repeat right bottom<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


