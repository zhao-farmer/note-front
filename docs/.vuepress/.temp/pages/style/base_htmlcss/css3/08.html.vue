<template><div><h1 id="八、-css3-新增渐变" tabindex="-1"><a class="header-anchor" href="#八、-css3-新增渐变"><span>八、 CSS3 新增渐变</span></a></h1>
<h2 id="_8-1-线性渐变" tabindex="-1"><a class="header-anchor" href="#_8-1-线性渐变"><span>8.1 线性渐变</span></a></h2>
<ol>
<li>多个颜色之间的渐变， 默认从上到下渐变。</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/002.jpg" alt=""></p>
<ol start="2">
<li>使用关键词设置线性渐变的方向。</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to top<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right top<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/003.jpg" alt=""></p>
<ol start="3">
<li>使用角度设置线性渐变的方向。</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>30deg<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/004.jpg" alt=""></p>
<ol start="4">
<li>调整开始渐变的位置</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>red 50px<span class="token punctuation">,</span>yellow 100px <span class="token punctuation">,</span>green 150px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/005.jpg" alt=""></p>
<ol start="4">
<li>文字中内嵌渐变</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.box5</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>45deg<span class="token punctuation">,</span>red 50px<span class="token punctuation">,</span>yellow 100px<span class="token punctuation">,</span>green 150px<span class="token punctuation">)</span> <span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">line-height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span>transparent<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/006.jpg" alt=""></p>
<h2 id="_8-2-径向渐变" tabindex="-1"><a class="header-anchor" href="#_8-2-径向渐变"><span>8.2 径向渐变</span></a></h2>
<ol>
<li>多个颜色之间的渐变， 默认从圆心四散。（注意：不一定是正圆，要看容器本身宽高比）</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/007.jpg" alt=""></p>
<ol start="2">
<li>使用关键词调整渐变圆的圆心位置。</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">     <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at left top<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/008.jpg" alt=""></p>
<ol start="3">
<li>使用像素值调整渐变圆的圆心位置。</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at 100px 50px<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/009.jpg" alt=""></p>
<ol start="4">
<li>通过circle关键字调整为正圆 。</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>circle<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/010.jpg" alt=""></p>
<ol start="5">
<li>通过像素值调整为正圆</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>200px 200px<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/011.jpg" alt=""></p>
<ol start="6">
<li>调整形状的半径 。</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>50px 100px<span class="token punctuation">,</span>red<span class="token punctuation">,</span>yellow<span class="token punctuation">,</span>green<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/012.jpg" alt=""></p>
<ol start="7">
<li>综合案例。</li>
</ol>
<p><strong>代码示例</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">     <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>100px 50px at 150px 150px<span class="token punctuation">,</span>red 50px<span class="token punctuation">,</span>yellow 100px<span class="token punctuation">,</span>green 150px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css3/013.jpg" alt=""></p>
<h2 id="_8-3-重复渐变" tabindex="-1"><a class="header-anchor" href="#_8-3-重复渐变"><span>8.3 重复渐变</span></a></h2>
<p>无论线性渐变，还是径向渐变，在没有发生渐变的位置，继续进行渐变，就为重复渐变。</p>
<ul>
<li>使用 repeating-linear-gradient 进行重复线性渐变，具体参数同 linear-gradient 。</li>
<li>使用 repeating-radial-gradient 进行重复径向渐变，具体参数同 radial-gradient 。</li>
</ul>
<h2 id="_8-4-小案例" tabindex="-1"><a class="header-anchor" href="#_8-4-小案例"><span>8.4 小案例</span></a></h2>
<p>我们可以利用渐变，做出很多有意思的效果：例如：横格纸、立体球等等。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>04_渐变小案例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token comment">/* 方格线 */</span></span>
<span class="line">            <span class="token selector">.box1</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">repeating-linear-gradient</span><span class="token punctuation">(</span>transparent 0px <span class="token punctuation">,</span>transparent 29px<span class="token punctuation">,</span>gray 30px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-clip</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">/* 3D小球 */</span></span>
<span class="line">            <span class="token selector">.box2</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>at 80px 80px<span class="token punctuation">,</span>white<span class="token punctuation">,</span>gray<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方格线</strong></p>
<p><img src="/style/htmlcss/css3/014.png" alt=""></p>
<p><strong>小球</strong></p>
<p><img src="/style/htmlcss/css3/015.png" alt=""></p>
</div></template>


