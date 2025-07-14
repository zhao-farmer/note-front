<template><div><h1 id="八、grid布局的复合属性" tabindex="-1"><a class="header-anchor" href="#八、grid布局的复合属性"><span>八、grid布局的复合属性</span></a></h1>
<h2 id="_8-1-grid-template" tabindex="-1"><a class="header-anchor" href="#_8-1-grid-template"><span>8.1 grid-template</span></a></h2>
<p>grid-template 是CSS 属性grid-template-areas、grid-template-rows、grid-template-columns简写，用以定义网格中行、列与分区。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">grid-template</span><span class="token punctuation">:</span> </span>
<span class="line">    <span class="token string">"a a a"</span> 40px</span>
<span class="line">    <span class="token string">"b c c"</span> 40px</span>
<span class="line">    <span class="token string">"b c c"</span> 40px / 1fr 1fr 1fr<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个grid-template-areas的值后面的值表示的是行的高度。
最后一行grid-template-areas的值后面的添加完行的高度后 添加/ grid-template-columns的值表示，每列的宽度。</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">.wrapper</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-template</span><span class="token punctuation">:</span> <span class="token string">"a a a"</span> 40px <span class="token string">"b c c"</span> 40px <span class="token string">"b c c"</span> 40px / 1fr 1fr 1fr<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.box1</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> lime<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-area</span><span class="token punctuation">:</span> a<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.box2</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-row</span><span class="token punctuation">:</span> 2 / 4<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-area</span><span class="token punctuation">:</span> b<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.box3</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-row</span><span class="token punctuation">:</span> span 3 / 7<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">grid-area</span><span class="token punctuation">:</span> c<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wrapper<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1 box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2 box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box3 box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_grid/images/030.png" alt=""></p>
<h2 id="_8-2-grid" tabindex="-1"><a class="header-anchor" href="#_8-2-grid"><span>8.2 grid</span></a></h2>
<p>在单个声明中设置以下所有属性的简写： grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows,grid-auto-columns, grid-auto-flow （注意：只能在单个网格声明中指定显式或隐式网格属性）。</p>
<p>示例1：规定行列的大小</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">grid</span><span class="token punctuation">:</span> 100px 150px / <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        相当于：</span>
<span class="line">        grid-template: 100px 150px / repeat(3, 1fr);</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2：设置网格排列方式</p>
<p>设置auto-flow在/的右侧，相当于设置为按列布局</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">grid</span><span class="token punctuation">:</span> 100px 150px / auto-flow 100px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        相当于:</span>
<span class="line">        grid-template-rows: 100px 150px;</span>
<span class="line">        grid-auto-flow: column;</span>
<span class="line">        grid-auto-columns: 100px;</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例3：区域划分</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">grid</span><span class="token punctuation">:</span> <span class="token string">'header header header header header'</span></span>
<span class="line">        <span class="token string">'menu main main main right right'</span></span>
<span class="line">        <span class="token string">'menu footer footer footer footer'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        相当于:</span>
<span class="line">        grid-template-areas: 'header header header header header'</span>
<span class="line">            'menu main main main right right'</span>
<span class="line">            'menu footer footer footer footer';</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-3-gap-grid-gap" tabindex="-1"><a class="header-anchor" href="#_8-3-gap-grid-gap"><span>8.3 gap(grid-gap)</span></a></h2>
<p>用来设置网格行与列之间的间隙，是row-gap和column-gap的简写形式。</p>
<p>示例1：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">gap</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        相当于：</span>
<span class="line">        row-gap: 10px;</span>
<span class="line">        column-gap: 10px;</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">gap</span><span class="token punctuation">:</span> 20px 30px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        相当于：</span>
<span class="line">        row-gap: 20px;</span>
<span class="line">        column-gap: 30px;</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-4-grid-area" tabindex="-1"><a class="header-anchor" href="#_8-4-grid-area"><span>8.4 grid-area</span></a></h2>
<p>可以设置单元格在网格布局中的大小和位置，也可以对单元格进行命名</p>
<p>示例1：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">grid-area</span><span class="token punctuation">:</span> 1/1/4/5<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        设置单元格在网格布局中的大小和位置时，四个属性分别是：行开始位置/列开始位置/行结束位置/列结束位置</span>
<span class="line">        相当于：</span>
<span class="line">        grid-row: 1 / 4;</span>
<span class="line">        grid-column:1 / 5;</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        可以使用grid-area属性来命名网格元素</span>
<span class="line">        命名的网格元素可以通过容器的 grid-template-areas 属性来引用</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-5-place-content" tabindex="-1"><a class="header-anchor" href="#_8-5-place-content"><span>8.5 place-content</span></a></h2>
<p>可以同时设置align-content（内容区域在容器里面的垂直位置）和justify-content（内容区域在容器里面的水平位置）</p>
<p>示例1：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">place-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        相当于：</span>
<span class="line">        align-content: center;</span>
<span class="line">        justify-content: center;</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">place-content</span><span class="token punctuation">:</span> start end<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        相当于：</span>
<span class="line">        align-content: start;</span>
<span class="line">        justify-content: end;</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-6-place-self" tabindex="-1"><a class="header-anchor" href="#_8-6-place-self"><span>8.6 place-self</span></a></h2>
<p>可以同时设置align-self（单个单元格内容的垂直位置）和justify-self（单个单元格内容的水平位置）</p>
<p>示例1：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">place-self</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        相当于：</span>
<span class="line">        align-self: center;</span>
<span class="line">        justify-self: center;</span>
<span class="line">    */</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">place-self</span><span class="token punctuation">:</span> start end<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        相当于：</span>
<span class="line">        align-self: start;</span>
<span class="line">        justify-self: end;</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-7-grid-column-grid-row" tabindex="-1"><a class="header-anchor" href="#_8-7-grid-column-grid-row"><span>8.7 grid-column/grid-row</span></a></h2>
<p>grid-column属性定义了网格元素列的开始和结束位置，也可以使用关键字 “span” 来定义元素将跨越的列数。</p>
<p>示例1：在第 1 列开始，在第 4 列前结束</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">grid-column</span><span class="token punctuation">:</span> 1 / 4<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        相当于：</span>
<span class="line">        grid-column-start: 1;</span>
<span class="line">        grid-column-end: 4;</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2：在第 2 列开始，横跨2列</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">grid-column</span><span class="token punctuation">:</span> 2 / span 2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>grid-row属性定义了网格元素行的开始和结束位置，也可以使用关键字 “span” 来定义元素将跨越的行数。</p>
<p>示例3：在第 1 行开始，在第 4行前结束</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">grid-row</span><span class="token punctuation">:</span> 1 / 4<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/*</span>
<span class="line">        相当于：</span>
<span class="line">        grid-row-start: 1;</span>
<span class="line">        grid-row-end: 4;</span>
<span class="line">    */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例4：在第 2 行开始，横跨2行</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">grid-row</span><span class="token punctuation">:</span> 2 / span 2<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


