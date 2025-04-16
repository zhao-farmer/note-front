<template><div><h1 id="滚动条捕捉scroll-snap" tabindex="-1"><a class="header-anchor" href="#滚动条捕捉scroll-snap"><span>滚动条捕捉scroll-snap</span></a></h1>
<p>scroll-snap 是一个用于实现流畅滚动捕捉效果的 CSS 模块。它包含多个属性，可以应用于滚动容器和滚动子项上。</p>
<h2 id="_1、-scroll-snap-type" tabindex="-1"><a class="header-anchor" href="#_1、-scroll-snap-type"><span>1、 scroll-snap-type</span></a></h2>
<p>scroll-snap-type 属性定义滚动容器的滚动捕捉行为。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> x mandatory<span class="token punctuation">;</span> <span class="token comment">/* 水平方向捕捉，并且是强制性的 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>方向：</li>
</ol>
<ul>
<li>x：水平方向捕捉</li>
<li>y：垂直方向捕捉</li>
<li>both：双向捕捉</li>
</ul>
<ol start="2">
<li>捕捉强度：</li>
</ol>
<ul>
<li>mandatory：强制捕捉，滚动会强制停留在捕捉点上</li>
<li>proximity：弱捕捉，滚动到接近捕捉点时会自动停留在捕捉点上</li>
</ul>
<h2 id="_2、scroll-snap-align" tabindex="-1"><a class="header-anchor" href="#_2、scroll-snap-align"><span>2、scroll-snap-align</span></a></h2>
<p>scroll-snap-align 属性定义滚动子项在捕捉点上的对齐方式。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">scroll-snap-align</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span> <span class="token comment">/* 子项的起点与捕捉点对齐 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>start：子项的起点与捕捉点对齐</li>
<li>end：子项的终点与捕捉点对齐</li>
<li>center：子项的中心与捕捉点对齐</li>
<li>none：子项不参与捕捉对齐</li>
</ul>
<h2 id="_3、scroll-snap-stop" tabindex="-1"><a class="header-anchor" href="#_3、scroll-snap-stop"><span>3、scroll-snap-stop</span></a></h2>
<p>scroll-snap-stop 属性定义在滚动过程中是否强制捕捉到子项。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">scroll-snap-stop</span><span class="token punctuation">:</span> always<span class="token punctuation">;</span> <span class="token comment">/* 强制在此捕捉点停下 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>normal：正常捕捉行为</li>
<li>always：总是强制捕捉到此项，即使用户滚动得很快</li>
</ul>
<h2 id="_4、scroll-padding" tabindex="-1"><a class="header-anchor" href="#_4、scroll-padding"><span>4、scroll-padding</span></a></h2>
<p>scroll-padding 属性定义滚动容器内的内边距，用于调整捕捉点的位置。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">scroll-padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* 在滚动容器内增加20px的内边距 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scroll-padding-top、scroll-padding-right、scroll-padding-bottom、scroll-padding-left：分别定义四个方向的内边距</p>
<h2 id="_5、scroll-margin" tabindex="-1"><a class="header-anchor" href="#_5、scroll-margin"><span>5、scroll-margin</span></a></h2>
<p>scroll-margin 属性定义滚动子项的外边距，用于调整捕捉点的位置。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">scroll-margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token comment">/* 在滚动子项周围增加10px的外边距 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scroll-margin-top、scroll-margin-right、scroll-margin-bottom、scroll-margin-left：分别定义四个方向的外边距</p>
<p>实际使用示例</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Scroll Snap Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">.container</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">overflow-x</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">scroll-snap-type</span><span class="token punctuation">:</span> x mandatory<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">scroll-padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #ccc<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">flex</span><span class="token punctuation">:</span> 0 0 80%<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">margin</span><span class="token punctuation">:</span> 0 10px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">scroll-snap-align</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">scroll-snap-stop</span><span class="token punctuation">:</span> always<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Item 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Item 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Item 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Item 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Item 5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>.container:</p>
<ul>
<li>display: flex;：使子项水平排列。</li>
<li>overflow-x: scroll;：启用水平滚动。</li>
<li>scroll-snap-type: x mandatory;：启用水平强制捕捉。</li>
<li>scroll-padding: 10px;：在容器内增加10px的内边距。</li>
</ul>
</li>
<li>
<p>.item:</p>
<ul>
<li>flex: 0 0 80%;：使每个子项占据容器的80%宽度。</li>
<li>margin: 0 10px;：每个子项之间有10px的间距。</li>
<li>scroll-snap-align: start;：每个子项的起点与捕捉点对齐。</li>
<li>scroll-snap-stop: always;：滚动时总是强制捕捉到此子项。</li>
</ul>
</li>
</ul>
<p>通过这些属性，可以轻松创建流畅且用户友好的滚动捕捉效果。这些属性的结合使用能够大大提升用户在图片画廊、卡片视图等界面上的体验。</p>
</div></template>


