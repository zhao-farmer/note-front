<template><div><h1 id="十五、flex" tabindex="-1"><a class="header-anchor" href="#十五、flex"><span>十五、flex</span></a></h1>
<h2 id="_15-1-伸缩盒模型简介" tabindex="-1"><a class="header-anchor" href="#_15-1-伸缩盒模型简介"><span>15.1 伸缩盒模型简介</span></a></h2>
<ul>
<li>2009 年， W3C 提出了一种新的盒子模型 —— Flexible Box （伸缩盒模型，又称：弹性盒 子）。</li>
<li>它可以轻松的控制：元素分布方式、元素对齐方式、元素视觉顺序 .......</li>
<li>截止目前，除了在部分 IE 浏览器不支持，其他浏览器均已全部支持。</li>
<li>伸缩盒模型的出现，逐渐演变出了一套新的布局方案 —— flex 布局。</li>
</ul>
<p><strong>小贴士</strong>：</p>
<ol>
<li>传统布局是指：基于传统盒状模型，主要靠： display 属性 + position 属性 + float 属性。</li>
<li>flex 布局目前在移动端应用比较广泛，因为传统布局不能很好的呈现在移动设备上</li>
</ol>
<h2 id="_15-2-伸缩容器、伸缩项目" tabindex="-1"><a class="header-anchor" href="#_15-2-伸缩容器、伸缩项目"><span>15.2 伸缩容器、伸缩项目</span></a></h2>
<ul>
<li>伸缩容器： 开启了 flex 的元素，就是：伸缩容器。
<ol>
<li>给元素设置： display:flex 或 display:inline-flex ，该元素就变为了伸缩容 器。</li>
<li>display:inline-flex 很少使用，因为可以给多个伸缩容器的父容器，也设置为伸缩 容器。</li>
<li>一个元素可以同时是：伸缩容器、伸缩项目。</li>
</ol>
</li>
<li>伸缩项目：伸缩容器所有子元素自动成为了：伸缩项目。
<ol>
<li>仅伸缩容器的子元素成为了伸缩项目，孙子元素、重孙子元素等后代，不是伸缩项 目。</li>
<li>无论原来是哪种元素（块、行内块、行内），一旦成为了伸缩项目，全都会“块状化”。</li>
</ol>
</li>
</ul>
<h2 id="_15-3-主轴与侧轴" tabindex="-1"><a class="header-anchor" href="#_15-3-主轴与侧轴"><span>15.3 主轴与侧轴</span></a></h2>
<ul>
<li>主轴： 伸缩项目沿着主轴排列，主轴默认是水平的，默认方向是：从左到右（左边是起点，右边 是终点）。</li>
<li>侧轴： 与主轴垂直的就是侧轴，侧轴默认是垂直的，默认方向是：从上到下（上边是起点，下边 是终点）。</li>
</ul>
<h2 id="_15-4-主轴方向" tabindex="-1"><a class="header-anchor" href="#_15-4-主轴方向"><span>15.4 主轴方向</span></a></h2>
<ul>
<li>属性名： flex-direction</li>
<li>常用值如下：
<ol>
<li>row ：主轴方向水平从左到右 —— 默认值</li>
<li>row-reverse ：主轴方向水平从右到左。</li>
<li>column ：主轴方向垂直从上到下。</li>
<li>column-reverse ：主轴方向垂直从下到上。</li>
</ol>
</li>
</ul>
<p><img src="/style/htmlcss/css3/017.jpg" alt=""></p>
<p><strong>注意</strong>：</p>
<blockquote>
<p>改变了主轴的方向，侧轴方向也随之改变</p>
</blockquote>
<h2 id="_15-5-主轴换行方式" tabindex="-1"><a class="header-anchor" href="#_15-5-主轴换行方式"><span>15.5 主轴换行方式</span></a></h2>
<ul>
<li>属性名： flex-wrap</li>
<li>常用值如下：
<ol>
<li>nowrap ：默认值，不换行。
<img src="/style/htmlcss/css3/018.jpg" alt=""></li>
<li>wrap ：自动换行，伸缩容器不够自动换行。
<img src="/style/htmlcss/css3/019.jpg" alt=""></li>
<li>wrap-reverse ：反向换行。
<img src="/style/htmlcss/css3/020.jpg" alt=""></li>
</ol>
</li>
</ul>
<h2 id="_15-6-flex-flow" tabindex="-1"><a class="header-anchor" href="#_15-6-flex-flow"><span>15.6 flex-flow</span></a></h2>
<p>flex-flow 是一个复合属性，复合了 flex-direction 和 flex-wrap 两个属性。 值没有顺序要求。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">flex-flow</span><span class="token punctuation">:</span> row wrap；</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-7-主轴对齐方式" tabindex="-1"><a class="header-anchor" href="#_15-7-主轴对齐方式"><span>15.7 主轴对齐方式</span></a></h2>
<ul>
<li>属性名： justify-content</li>
<li>常用值如下：
<ol>
<li>flex-start ：主轴起点对齐。—— 默认值</li>
<li>flex-end ：主轴终点对齐。</li>
<li>center ：居中对齐</li>
<li>space-between ：均匀分布，两端对齐（最常用）。</li>
<li>space-around ：均匀分布，两端距离是中间距离的一半。</li>
<li>space-evenly ：均匀分布，两端距离与中间距离一致。</li>
</ol>
</li>
</ul>
<h2 id="_15-8-侧轴对齐方式" tabindex="-1"><a class="header-anchor" href="#_15-8-侧轴对齐方式"><span>15.8 侧轴对齐方式</span></a></h2>
<h3 id="_15-8-1-一行的情况所需属性" tabindex="-1"><a class="header-anchor" href="#_15-8-1-一行的情况所需属性"><span>15.8.1 一行的情况所需属性</span></a></h3>
<p><strong>align-items 常用值如下</strong>：</p>
<ol>
<li>flex-start ：侧轴的起点对齐。</li>
<li>flex-end ：侧轴的终点对齐。</li>
<li>center ：侧轴的中点对齐。</li>
<li>baseline : 伸缩项目的第一行文字的基线对齐。</li>
<li>stretch ：如果伸缩项目未设置高度，将占满整个容器的高度。—— （默认值）</li>
</ol>
<h3 id="_15-8-2-多行的情况" tabindex="-1"><a class="header-anchor" href="#_15-8-2-多行的情况"><span>15.8.2 多行的情况</span></a></h3>
<p><strong>所需属性： align-content 常用值如下</strong>：</p>
<ol>
<li>flex-start ：与侧轴的起点对齐。</li>
<li>flex-end ：与侧轴的终点对齐。</li>
<li>center ：与侧轴的中点对齐。</li>
<li>space-between ：与侧轴两端对齐，中间平均分布。</li>
<li>space-around ：伸缩项目间的距离相等，比距边缘大一倍。</li>
<li>space-evenly : 在侧轴上完全平分。</li>
<li>stretch ：占满整个侧轴。—— 默认flex-start</li>
</ol>
<h2 id="_15-9-flex-实现水平垂直居中" tabindex="-1"><a class="header-anchor" href="#_15-9-flex-实现水平垂直居中"><span>15.9 flex 实现水平垂直居中</span></a></h2>
<ul>
<li>方法一：父容器开启 flex 布局，随后使用 justify-content 和 align-items 实现水平垂直居中</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.outer</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.inner</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>方法二：父容器开启 flex 布局，随后子元素 margin: auto</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.outer</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.inner</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-10-伸缩性" tabindex="-1"><a class="header-anchor" href="#_15-10-伸缩性"><span>15.10 伸缩性</span></a></h2>
<h3 id="_15-10-1-flex-basis" tabindex="-1"><a class="header-anchor" href="#_15-10-1-flex-basis"><span>15.10.1 flex-basis</span></a></h3>
<ul>
<li>备注：主轴横向：宽度失效；主轴纵向：高度失效</li>
<li>概念： flex-basis 设置的是主轴方向的基准长度，会让宽度或高度失效。</li>
<li>作用：浏览器根据这个属性设置的值，计算主轴上是否有多余空间，默认值 auto ，即：伸缩项目 的宽或高。</li>
</ul>
<h3 id="_15-10-2-flex-grow-伸" tabindex="-1"><a class="header-anchor" href="#_15-10-2-flex-grow-伸"><span>15.10.2 flex-grow（伸）</span></a></h3>
<ul>
<li>概念： flex-grow 定义伸缩项目的放大比例，默认为 0 ，即：纵使主轴存在剩余空间，也不拉伸 （放大）。</li>
<li>规则：
<ol>
<li>若所有伸缩项目的 flex-grow 值都为 1 ，则：它们将等分剩余空间（如果有空间的话）。</li>
<li>若三个伸缩项目的 flex-grow 值分别为： 1 、 2 、 3 ，则：分别瓜分到： 1/6 、 2/6 、 3/6 的空间。</li>
</ol>
</li>
</ul>
<h3 id="_15-10-3-flex-shrink-缩" tabindex="-1"><a class="header-anchor" href="#_15-10-3-flex-shrink-缩"><span>15.10.3 flex-shrink（缩）</span></a></h3>
<ul>
<li>概念： flex-shrink 定义了项目的压缩比例，默认为 1 ，即：如果空间不足，该项目将会缩小。</li>
<li>收缩项目的计算，略微复杂一点，我们拿一个场景举例：
<ul>
<li>三个收缩项目，宽度分别为： 200px 、 300px 、 200px ，它们的 flex-shrink 值分别 为： 1 、 2 、 3</li>
<li>若想刚好容纳下三个项目，需要总宽度为 700px ，但目前容器只有 400px ，还差 300px 所以每个人都要收缩一下才可以放下，具体收缩的值</li>
<li>计算：
<ol>
<li>计算分母： (200×1) + (300×2) + (200×3) = 1400</li>
<li>计算比例：
<ul>
<li>项目一： (200×1) / 1400 = 比例值1</li>
<li>项目二： (300×2) / 1400 = 比例值2</li>
</ul>
</li>
<li>计算最终收缩大小：
<ul>
<li>项目一需要收缩： 比例值1 × 300</li>
<li>项目二需要收缩： 比例值2 × 300</li>
<li>项目三需要收缩： 比例值3 × 300</li>
</ul>
</li>
</ol>
</li>
</ul>
</li>
</ul>
<h2 id="_15-11-flex复合属性" tabindex="-1"><a class="header-anchor" href="#_15-11-flex复合属性"><span>15.11 flex复合属性</span></a></h2>
<p><code v-pre>flex</code> 是复合属性，复合了： <code v-pre>flex-grow</code> 、 <code v-pre>flex-shrink</code> 、 <code v-pre>flex-basis</code> 三个属性，默认值为 0 1 auto 。</p>
<ul>
<li>如果写 <code v-pre>flex:1 1 auto</code> ，则可简写为： <code v-pre>flex:auto</code></li>
<li>如果写 <code v-pre>flex:1 1 0</code> ，则可简写为： <code v-pre>flex:1</code></li>
<li>如果写 <code v-pre>flex:0 0 auto</code> ，则可简写为： <code v-pre>flex:none</code></li>
<li>如果写 <code v-pre>flex:0 1 auto</code> ，则可简写为： <code v-pre>flex:0 auto</code> —— 即 flex 初始值。</li>
</ul>
<h2 id="_15-12-项目排序" tabindex="-1"><a class="header-anchor" href="#_15-12-项目排序"><span>15.12 项目排序</span></a></h2>
<p>order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0 。</p>
<h2 id="_15-13-单独对齐" tabindex="-1"><a class="header-anchor" href="#_15-13-单独对齐"><span>15.13 单独对齐</span></a></h2>
<p>通过 <code v-pre>align-self</code> 属性，可以单独调整某个伸缩项目的对齐方式 默认值为 auto ，表示继承父元素的 <code v-pre>align-items</code> 属性。</p>
</div></template>


