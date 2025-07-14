<template><div><h1 id="十、渐变元素" tabindex="-1"><a class="header-anchor" href="#十、渐变元素"><span>十、渐变元素</span></a></h1>
<p>渐变是一种图形效果，用于实现平滑的颜色过渡。同时也用于填充图形元素，例如矩形、圆形、文本等，或者描边。</p>
<p>在SVG中，有两种渐变方式 -- 线性渐变和径向渐变，相对应的元素也有两个 -- <code v-pre>&lt;linearGradient&gt;</code>和<code v-pre>&lt;radialGradient&gt;</code>。</p>
<p>渐变定义好之后并不会直接显示出来，而是应用在其他SVG元素上时才会显示，通常是定义在<code v-pre>&lt;defs&gt;</code>元素中，等待其他SVG元素调用。</p>
<h2 id="_10-1-lineargradient" tabindex="-1"><a class="header-anchor" href="#_10-1-lineargradient"><span>10.1 <code v-pre>&lt;linearGradient&gt;</code></span></a></h2>
<p><code v-pre>&lt;linearGradient&gt;</code>用于定义<strong>线性渐变</strong>。线性渐变是从某个点沿着一个方向到另一个点的变化。</p>
<ol>
<li>属性</li>
</ol>
<table>
<thead>
<tr>
<th>属性名</th>
<th>值</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>x1</code></td>
<td>长度/百分比/number</td>
<td>渐变起始的X坐标。</td>
</tr>
<tr>
<td><code v-pre>y1</code></td>
<td>长度/百分比/number</td>
<td>渐变起始的Y坐标。</td>
</tr>
<tr>
<td><code v-pre>x2</code></td>
<td>长度/百分比/number</td>
<td>渐变终点的X坐标。</td>
</tr>
<tr>
<td><code v-pre>y2</code></td>
<td>长度/百分比/number</td>
<td>渐变终点的Y坐标。</td>
</tr>
<tr>
<td><code v-pre>gradientUnits</code></td>
<td><code v-pre>userSpaceOnUse</code>/<code v-pre>y1objectBoundingBox</code>（默认值）</td>
<td>定义属性<code v-pre>x1</code>、<code v-pre>y1</code>、<code v-pre>x2</code>和<code v-pre>y2</code>的坐标系.</td>
</tr>
<tr>
<td><code v-pre>gradientTransform</code></td>
<td><a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Content_type" target="_blank" rel="noopener noreferrer">转换列表</a></td>
<td>定义从渐变坐标系到目标坐标系的可选附加变换。</td>
</tr>
<tr>
<td><code v-pre>href</code></td>
<td>urlstring</td>
<td>对模板渐变元素的URL引用。</td>
</tr>
<tr>
<td><code v-pre>spreadMethod</code></td>
<td><code v-pre>pad</code>/<code v-pre>reflect</code>/<code v-pre>repeat</code></td>
<td>定义渐变在目标矩形的边界内开始或结束时会发生的情况。</td>
</tr>
</tbody>
</table>
<blockquote>
<p>如果<code v-pre>x1</code> = <code v-pre>x2</code>或<code v-pre>y1</code> = <code v-pre>y2</code>，那么将使用最后一个渐变停止的颜色和不透明度进行绘制。</p>
</blockquote>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 定义 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>linearGradient</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>MyGradient<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5%<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightblue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>95%<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightpink<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>linearGradient</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!-- 使用 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#MyGradient)<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg  width="500" height="200">
    <defs>
        <linearGradient id="MyGradient">
        <stop offset="5%" stop-color="lightblue" />
        <stop offset="95%" stop-color="lightpink" />
        </linearGradient>
    </defs>
    <rect fill="url(#MyGradient)" x="25" y="25" width="250" height="150"/>
</svg>
<h2 id="_10-2-radialgradient" tabindex="-1"><a class="header-anchor" href="#_10-2-radialgradient"><span>10.2 <code v-pre>&lt;radialGradient&gt;</code></span></a></h2>
<p><code v-pre>&lt;radialGradient&gt;</code>用于定义<strong>径向渐变</strong>。径向渐变是一种从中心到边缘逐渐变化的颜色或亮度过渡效果</p>
<ol>
<li>属性</li>
</ol>
<table>
<thead>
<tr>
<th>属性名</th>
<th>值</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>fr</code></td>
<td>长度/百分比/number</td>
<td>定义渐变的起始圆的半径。</td>
</tr>
<tr>
<td><code v-pre>fx</code></td>
<td>长度/百分比/number</td>
<td>定义渐变的起始圆的x坐标。</td>
</tr>
<tr>
<td><code v-pre>fy</code></td>
<td>长度/百分比/number</td>
<td>定义渐变的起始圆的y坐标。</td>
</tr>
<tr>
<td><code v-pre>r</code></td>
<td>长度/百分比/number</td>
<td>定义渐变结束时圆的半径。</td>
</tr>
<tr>
<td><code v-pre>cx</code></td>
<td>长度/百分比/number</td>
<td>定义渐变结束时圆的x坐标。</td>
</tr>
<tr>
<td><code v-pre>cy</code></td>
<td>长度/百分比/number</td>
<td>定义渐变结束时圆的y坐标。</td>
</tr>
<tr>
<td><code v-pre>gradientUnits</code></td>
<td><code v-pre>userSpaceOnUse</code>/<code v-pre>y1objectBoundingBox</code>（默认值）</td>
<td>定义属性<code v-pre>cx</code>、<code v-pre>cy</code>、<code v-pre>r</code>、<code v-pre>fr</code>、<code v-pre>fx</code>和<code v-pre>fy</code>的坐标系.</td>
</tr>
<tr>
<td><code v-pre>gradientTransform</code></td>
<td><a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG/Content_type" target="_blank" rel="noopener noreferrer">转换列表</a></td>
<td>定义从渐变坐标系到目标坐标系的可选附加变换。</td>
</tr>
<tr>
<td><code v-pre>href</code></td>
<td>urlstring</td>
<td>对模板渐变元素的URL引用。</td>
</tr>
<tr>
<td><code v-pre>spreadMethod</code></td>
<td><code v-pre>pad</code>/<code v-pre>reflect</code>/<code v-pre>repeat</code></td>
<td>定义渐变在目标矩形的边界内开始或结束时会发生的情况。</td>
</tr>
</tbody>
</table>
<p>径向渐变要比线性渐变复杂一点，如果不使用<code v-pre>fx</code>、<code v-pre>fy</code>、<code v-pre>fr</code>和<code v-pre>cx</code>、<code v-pre>cy</code>、<code v-pre>cr</code>的话，那么渐变就以元素中心向四周扩散；如果使用了的话，<code v-pre>fx</code>、<code v-pre>fy</code>和<code v-pre>fr</code>定义起始圆，<code v-pre>cx</code>、<code v-pre>cy</code>和<code v-pre>cr</code>定义结束圆。这时会有几种情况：</p>
<ol>
<li>
<p>如果起始圆在结束圆之外，那么会创建一个类圆锥图形，椎体区域外的区域没有渐变：</p>
<p><img src="/animation/svg/base/image/043.png" alt=""></p>
<p>两个圆越靠近，锥体角度就越大，反之越小。</p>
</li>
<li>
<p>如果起始圆在结束圆内，渐变会以起始圆为中心向四周扩散，最多扩散到结束圆。</p>
</li>
<li>
<p>如果起始圆和结束圆大小位置相同，则不会出现渐变效果。</p>
</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- 起始圆在结束圆内 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radialGradient</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gradient<span class="token punctuation">"</span></span> <span class="token attr-name">fx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30%<span class="token punctuation">"</span></span> <span class="token attr-name">fy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50%<span class="token punctuation">"</span></span> <span class="token attr-name">fr</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10%<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40%<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50%<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40%<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pink<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stop</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightblue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>stop</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radialGradient</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#gradient)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg width="500" height="250">
    <defs>
        <radialGradient id="gradient" fx="30%" fy="50%" fr="10%" cx="40%" cy="50%" r="40%" >
        <stop offset="0" stop-color="pink"></stop>
        <stop offset="1" stop-color="lightblue"></stop>
        </radialGradient>
    </defs>
    <circle cx="120" cy="120" r="100" fill="url(#gradient)" />
</svg>
<h2 id="_10-3-stop" tabindex="-1"><a class="header-anchor" href="#_10-3-stop"><span>10.3 <code v-pre>&lt;stop&gt;</code></span></a></h2>
<p><code v-pre>&lt;stop&gt;</code>元素定义<strong>渐变的颜色向量和位置</strong>。<code v-pre>&lt;stop&gt;</code>元素只能作为<code v-pre>&lt;linearGradient&gt;</code>和<code v-pre>&lt;radialGradient&gt;</code>的子元素使用。</p>
<ol>
<li>属性</li>
</ol>
<table>
<thead>
<tr>
<th>属性名</th>
<th>值</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>offset</code></td>
<td>number/百分比</td>
<td>定义渐变停止点。</td>
</tr>
<tr>
<td><code v-pre>stop-color</code></td>
<td>currentcolor</td>
<td>定义在渐变停止点使用的颜色。</td>
</tr>
<tr>
<td><code v-pre>stop-opacity</code></td>
<td>百分比/number（0 - 1）</td>
<td>定义渐变停止点的不透明度。</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>如果<code v-pre>offset</code>属性的值小于<code v-pre>0</code>，则会向上舍入为<code v-pre>0</code>（<code v-pre>0%</code>）；大于<code v-pre>1</code>，则会向下舍入为<code v-pre>1</code>（<code v-pre>100%</code>）。</p>
</li>
<li>
<p>下一个<code v-pre>&lt;stop&gt;</code>的<code v-pre>offset</code>属性值必须大于上一个<code v-pre>&lt;sto&gt;</code>的<code v-pre>offset</code>属性值，否则<code v-pre>offset</code>属性值将等于之前所有偏移值中的最大值。</p>
</li>
<li>
<p>如果两个相邻的<code v-pre>&lt;stop&gt;</code>的<code v-pre>stop-color</code>属性的颜色值不同，但是<code v-pre>offset</code>属性值一样，则以后一个<code v-pre>&lt;stop&gt;</code>的<code v-pre>stop-color</code>属性的颜色值为主。</p>
</li>
</ul>
<h2 id="_10-4-颜色相关属性" tabindex="-1"><a class="header-anchor" href="#_10-4-颜色相关属性"><span>10.4 颜色相关属性</span></a></h2>
<h3 id="_10-4-1-color" tabindex="-1"><a class="header-anchor" href="#_10-4-1-color"><span>10.4.1 <code v-pre>color</code></span></a></h3>
<p><code v-pre>color</code>属性用于为<code v-pre>fill</code>、<code v-pre>stroke</code>、<code v-pre>stop-color</code>、<code v-pre>flood-color</code>和<code v-pre>lighting-color</code>属性提供一个潜在的间接值，它不会直接影响元素，当这些属性的值为<code v-pre>currentcolor</code>时，其颜色值就是<code v-pre>color</code>属性的值。</p>
<h3 id="_10-4-2-color-interpolation" tabindex="-1"><a class="header-anchor" href="#_10-4-2-color-interpolation"><span>10.4.2 <code v-pre>color-interpolation</code></span></a></h3>
<p><code v-pre>color-interpolation</code>属性用于指定在渐变或插值过程中如何处理颜色的插值。它决定了在哪个颜色空间中进行颜色操作。</p>
<p>当一个子元素与背景混合时，子元素上的<code v-pre>color-interpolation</code>属性的值决定了混合的方式，而不是父元素上的<code v-pre>color-interpolation</code>属性的值。对于使用<code v-pre>href</code>属性引用另一个渐变的渐变，渐变会使用直接由<code v-pre>fill</code>或<code v-pre>stroke</code>属性引用的渐变元素上的属性值。在对颜色进行动画处理时，会根据正在进行动画处理的元素上的<code v-pre>color-interpolation</code>属性的值来执行颜色的过渡。</p>
<ol>
<li>取值</li>
</ol>
<table>
<thead>
<tr>
<th>关键字</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>auto</code></td>
<td>由用户代理选择<code v-pre>sRGB</code>或<code v-pre>linearRGB</code>空间不要求在特定颜色空间中进行颜色插值。</td>
</tr>
<tr>
<td><code v-pre>sRGB</code></td>
<td>指示颜色插值应在<code v-pre>sRGB</code>颜色空间中进行。</td>
</tr>
<tr>
<td><code v-pre>linearRGB</code></td>
<td>指示颜色插值应发生在线性化的RGB颜色空间中。</td>
</tr>
</tbody>
</table>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>220<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>linearGradient</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gradient<span class="token punctuation">"</span></span> <span class="token attr-name">x1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0%<span class="token punctuation">"</span></span> <span class="token attr-name">y1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0%<span class="token punctuation">"</span></span> <span class="token attr-name">x2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">y2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0%<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightpink<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightblue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>linearGradient</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#gradient)<span class="token punctuation">"</span></span> <span class="token attr-name">color-interpolation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sRGB<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>120<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#gradient)<span class="token punctuation">"</span></span> <span class="token attr-name">color-interpolation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>linearRGB<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg width="400" height="220">
    <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="lightpink" />
            <stop offset="100%" stop-color="lightblue" />
        </linearGradient>
    </defs>
    <rect width="100" height="100" fill="url(#gradient)" color-interpolation="sRGB" />
    <rect y="120" width="100" height="100" fill="url(#gradient)" color-interpolation="linearRGB" />
</svg>
<h3 id="_10-4-3-color-interpolation-filters" tabindex="-1"><a class="header-anchor" href="#_10-4-3-color-interpolation-filters"><span>10.4.3 <code v-pre>color-interpolation-filters</code></span></a></h3>
<p><code v-pre>color-interpolation-filters</code>属性与<code v-pre>color-interpolation</code>类似，用于指定通过滤镜效果执行的成像操作的颜色空间。它可以控制滤镜操作期间颜色的平滑过渡。该属性接受与<code v-pre>color-interpolation</code>属性同类型的值。</p>
<p><code v-pre>color-interpolation-filters</code>有一个与<code v-pre>color-interpolation</code>不同的初始值。<code v-pre>color-interpolation-filters</code>有一个初始值linearRGB，而<code v-pre>color-interpolation</code>有一个初始值sRGB。因此，在默认情况下，在linearRGB色彩空间中会出现滤镜效果操作，而在sRGB色彩空间中默认情况下会出现所有其他颜色插值。</p>
<h2 id="_10-5-与其他元素结合" tabindex="-1"><a class="header-anchor" href="#_10-5-与其他元素结合"><span>10.5 与其他元素结合</span></a></h2>
<h3 id="_10-5-1-渐变路径" tabindex="-1"><a class="header-anchor" href="#_10-5-1-渐变路径"><span>10.5.1 渐变路径</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>800<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>linearGradient</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>linear-grad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#f7ff00<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#db36a4<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>linearGradient</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>radialGradient</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radial-grad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#f7ff00<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#db36a4<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>radialGradient</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grad-path<span class="token punctuation">"</span></span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M 50,50 H 200 V 150 L 50,100 V 200 H 200<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#grad-path<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#grad-path<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#linear-grad)<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>9<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>250<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#grad-path<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#radial-grad)<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>9<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg图</li>
</ul>
 <svg width="800" height="300">
    <defs>
        <linearGradient id="linear-grad">
            <stop offset="0" stop-color="#f7ff00" />
            <stop offset="1" stop-color="#db36a4" />
        </linearGradient>
        <radialGradient id="radial-grad">
            <stop offset="0" stop-color="#f7ff00" />
            <stop offset="1" stop-color="#db36a4" />
        </radialGradient>
        <path id="grad-path" d="M 50,50 H 200 V 150 L 50,100 V 200 H 200"/>
    </defs>
    <use xlink:href="#grad-path" stroke="black" fill="none" stroke-width="3" />
    <use xlink:href="#grad-path" stroke="url(#linear-grad)" fill="none" stroke-width="9" x="250" />
    <use xlink:href="#grad-path" stroke="url(#radial-grad)" fill="none" stroke-width="9" x="500" />
</svg>
<h3 id="_10-5-2-渐变蒙版" tabindex="-1"><a class="header-anchor" href="#_10-5-2-渐变蒙版"><span>10.5.2 渐变蒙版</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mask</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mask3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>linearGradient</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gradient<span class="token punctuation">"</span></span> <span class="token attr-name">x1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0%<span class="token punctuation">"</span></span> <span class="token attr-name">y1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0%<span class="token punctuation">"</span></span> <span class="token attr-name">x2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">y2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0%<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">stop-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>linearGradient</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#gradient)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mask</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>purple<span class="token punctuation">"</span></span> <span class="token attr-name">mask</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#mask3)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<p><img src="/animation/svg/base/image/044.svg" alt=""></p>
<h3 id="_10-5-3-渐变文字" tabindex="-1"><a class="header-anchor" href="#_10-5-3-渐变文字"><span>10.5.3 渐变文字</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>linearGradient</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>textGradient<span class="token punctuation">"</span></span> <span class="token attr-name">x1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0%<span class="token punctuation">"</span></span> <span class="token attr-name">y1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0%<span class="token punctuation">"</span></span> <span class="token attr-name">x2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0%<span class="token punctuation">"</span></span> <span class="token attr-name">y2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0%<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stop-color: red;stop-opacity:1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>stop</span> <span class="token attr-name">offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100%<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stop-color: yellow;stop-opacity: 1<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>linearGradient</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span> <span class="token attr-name">font-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span> <span class="token attr-name">font-family</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Arial<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#textGradient)<span class="token punctuation">"</span></span> <span class="token attr-name">font-weight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        渐变的文字测试</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg width="300" height="100">
    <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color: red;stop-opacity:1" />
        <stop offset="100%" style="stop-color: yellow;stop-opacity: 1"/>
        </linearGradient>
    </defs>
    <text x="60" y="30" font-size="30" font-family="Arial" fill="url(#textGradient)" font-weight="700">
        渐变的文字测试
    </text>
</svg></div></template>


