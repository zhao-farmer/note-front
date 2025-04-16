<template><div><h1 id="七、网格项属性" tabindex="-1"><a class="header-anchor" href="#七、网格项属性"><span>七、网格项属性</span></a></h1>
<h2 id="_7-1-指定网格项的行列的开始和结束位置" tabindex="-1"><a class="header-anchor" href="#_7-1-指定网格项的行列的开始和结束位置"><span>7.1 指定网格项的行列的开始和结束位置</span></a></h2>
<h3 id="_7-1-1-grid-column-start" tabindex="-1"><a class="header-anchor" href="#_7-1-1-grid-column-start"><span>7.1.1 grid-column-start</span></a></h3>
<p>grid-column-start CSS属性指定了一个网格项的列的开始位置， 左边框所在的垂直网格线。</p>
<p>取值：</p>
<ul>
<li>auto关键字，指示该属性对网格项的放置没有任何影响。</li>
<li>取值为具有名称的列的名称</li>
<li>n将第 n 条网格线用于放置网格项。如果给定负整数，则从显式网格的端边缘开始反向计数，为0无效，默认是1。</li>
<li>n &amp;&amp; 取所有名称为custom-ident的列的第n个作为起始值</li>
<li>span &amp;&amp; [ n || ]为网格单元定义一个跨度，表示两个列之间的距离是n个单位单元列的宽度。 的值不能取span</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* Keyword value */</span></span>
<span class="line">    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* &lt;custom-ident> value */</span></span>
<span class="line">    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> somegridarea<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* &lt;integer> + &lt;custom-ident> values */</span></span>
<span class="line">    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> somegridarea 4<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* span + &lt;integer> + &lt;custom-ident> values */</span></span>
<span class="line">    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> span 3<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> span somegridarea<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">grid-column-start</span><span class="token punctuation">:</span> span somegridarea 5<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-1-2-grid-complate-end" tabindex="-1"><a class="header-anchor" href="#_7-1-2-grid-complate-end"><span>7.1.2 grid-complate-end</span></a></h3>
<p>grid-column-end CSS属性指定了一个网格项的列的结束位置， 右边框所在的垂直网格线。
和grid-column-start取值一样。</p>
<h3 id="_7-1-3-grid-row-start" tabindex="-1"><a class="header-anchor" href="#_7-1-3-grid-row-start"><span>7.1.3 grid-row-start</span></a></h3>
<p>grid-row-start CSS属性指定了一个网格项的行的开始位置， 上边框所在的垂直网格线
和grid-column-start取值一样。</p>
<h3 id="_7-1-4-grid-row-end" tabindex="-1"><a class="header-anchor" href="#_7-1-4-grid-row-end"><span>7.1.4 grid-row-end</span></a></h3>
<p>grid-row-end CSS属性指定了一个网格项的行的结束位置， 下边框所在的垂直网格线
和grid-column-end取值一样。</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">.wrapper</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-auto-rows</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> lemonchiffon<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">border</span><span class="token punctuation">:</span> orange 1px solid<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.box1</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-column-end</span><span class="token punctuation">:</span> 4<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.box2</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">grid-column-start</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-row-start</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-row-end</span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1 box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2 box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box3 box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box4 box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Four<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box5 box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Five<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_grid/images/029.png" alt=""></p>
<h2 id="_7-2-设置单元格内的对齐方式" tabindex="-1"><a class="header-anchor" href="#_7-2-设置单元格内的对齐方式"><span>7.2 设置单元格内的对齐方式</span></a></h2>
<h3 id="_7-2-1-justify-items" tabindex="-1"><a class="header-anchor" href="#_7-2-1-justify-items"><span>7.2.1 justify-items</span></a></h3>
<p>指定单元格内容的水平对齐方式，属性值有：</p>
<ul>
<li>stretch: [默认值]拉伸，栈满单元格整个宽度</li>
<li>start：对齐单元格的起始边缘。</li>
<li>end：对齐单元格的结束边缘。</li>
<li>center：单元格内部居中。</li>
</ul>
<h3 id="_7-2-2-align-items" tabindex="-1"><a class="header-anchor" href="#_7-2-2-align-items"><span>7.2.2. align-items</span></a></h3>
<p>指定单元格内容的垂直对齐方式，属性值有：</p>
<ul>
<li>normal：【默认值】会根据使用场景的不同表现为stretch或者start。</li>
<li>stretch：拉伸，占满单元格的整个宽度。</li>
<li>start：对齐单元格的起始边缘。</li>
<li>end：对齐单元格的结束边缘。</li>
<li>center：单元格内部居中。</li>
<li>baseline：基线对齐（align-items属性特有属性值）</li>
</ul>
</div></template>


