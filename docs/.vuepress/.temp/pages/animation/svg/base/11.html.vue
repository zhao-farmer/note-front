<template><div><h1 id="十一、滤镜" tabindex="-1"><a class="header-anchor" href="#十一、滤镜"><span>十一、滤镜</span></a></h1>
<p>滤镜元素允许我们为SVG元素添加各种滤镜效果。每种滤镜都有一个相应的元素表示，这些元素我们称之为_原子滤镜_或者_滤镜基元_。有点类似CSS<code v-pre>filter</code>属性，但是滤镜元素比<code v-pre>filter</code>更强更复杂。一个滤镜通常由多个滤镜基元构成一个完整的滤镜效果。</p>
<p>在学习滤镜元素前，请自备两张图片（两张图片最好要有不重叠部分）：</p>
<p><img src="/animation/svg/base/image/045.png" alt=""><img src="/animation/svg/base/image/046.png" alt=""></p>
<h2 id="_11-1-in和in2属性" tabindex="-1"><a class="header-anchor" href="#_11-1-in和in2属性"><span>11.1 <code v-pre>in</code>和<code v-pre>in2</code>属性</span></a></h2>
<p>这两个属性可以和很多个滤镜元素一起使用，并且是比较复杂的属性，因此这里先介绍一下他们。</p>
<p><code v-pre>in</code>和<code v-pre>in2</code>属性分别用于指定滤镜效果的第一和第二输入源。输入源（input source）是指滤镜效果将被应用到的元素或图像的特定部分。输入源确定了滤镜操作的基础，决定了滤镜如何影响元素或图像的可视外观。不同的输入源可以用来实现不同的图形处理效果。</p>
<p>这两个属性接受的值一致：</p>
<table>
<thead>
<tr>
<th>关键字</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>SourceGraphic</code></td>
<td>将以元素自身的图形为基础进行处理。</td>
</tr>
<tr>
<td><code v-pre>SourceAlpha</code></td>
<td>将以要应用滤镜的元素的图形内容的不透明度（alpha通道）作为输入源。</td>
</tr>
<tr>
<td><code v-pre>BackgroundImage</code></td>
<td>将以元素的背景图像的不透明度作为输入源。如果元素没有背景图像，则这个值与<code v-pre>SourceAlpha</code>相同。</td>
</tr>
<tr>
<td><code v-pre>FillPaint</code></td>
<td>将以元素的填充颜色（或填充图案）作为输入源。</td>
</tr>
<tr>
<td><code v-pre>StrokePaint</code></td>
<td>将以元素的描边颜色（或描边图案）作为输入源。</td>
</tr>
<tr>
<td><code v-pre>filter-primitive-reference</code></td>
<td>一种自定义的名称，用于标识滤镜中的滤镜基元。</td>
</tr>
</tbody>
</table>
<ol>
<li><code v-pre>filter-primitive-reference</code>类型的值有两种情况：</li>
</ol>
<ul>
<li>如果给一个滤镜基元起了一个名字（例如<code v-pre>result=&quot;xxx&quot;</code>），那么可以在同一个滤镜元素中的其他滤镜基元中使用这个名字来处理前一个滤镜生成的图形。这种方式可以在滤镜链中重复使用相同的图形结果，而不必每次都重新生成。</li>
<li>如果没有提供名称，那么前一个滤镜基元的输出仍然可以作为隐式的输入传递给下一个滤镜基元，但只有在下一个滤镜基元没有为其<code v-pre>in</code>属性提供值时才有效。在MDN中也有这么说明：在现代浏览器中不支持<code v-pre>BackgroundImage</code>作为过滤器源(请参阅feComposite兼容性表)。因此，我们需要使用<code v-pre>&lt;feImage&gt;</code>元素导入其中一个图像，以便在过滤器本身中混合：</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>imageMultiply<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- &lt;feImage>作为隐式输入传递给下一个滤镜基元 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feImage</span></span>
<span class="line">      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mdn_logo_only_color.png<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10%<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10%<span class="token punctuation">"</span></span></span>
<span class="line">     <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80%<span class="token punctuation">"</span></span></span>
<span class="line">     <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80%<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feBlend</span> <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiply<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>可用于元素</li>
</ol>
<ul>
<li><code v-pre>&lt;feBlend&gt;</code></li>
<li><code v-pre>&lt;feColorMatrix&gt;</code></li>
<li><code v-pre>&lt;feComponentTransfer&gt;</code></li>
<li><code v-pre>&lt;feComposite&gt;</code></li>
<li><code v-pre>&lt;feConvolveMatrix&gt;</code></li>
<li><code v-pre>&lt;feDiffuseLighting&gt;</code></li>
<li><code v-pre>&lt;feDisplacementMap&gt;</code></li>
<li><code v-pre>&lt;feDropShadow&gt;</code></li>
<li><code v-pre>&lt;feGaussianBlur&gt;</code></li>
<li><code v-pre>&lt;feMergeNode&gt;</code></li>
<li><code v-pre>&lt;feMorphology&gt;</code></li>
<li><code v-pre>&lt;feOffset&gt;</code></li>
<li><code v-pre>&lt;feSpecularLighting&gt;</code></li>
<li><code v-pre>&lt;feTile&gt;</code></li>
</ul>
<p>下文对应的元素属性当中就不再过多说明<code v-pre>in</code>和<code v-pre>in2</code>属性。</p>
<h2 id="_10-2-filter" tabindex="-1"><a class="header-anchor" href="#_10-2-filter"><span>10.2 <code v-pre>&lt;filter&gt;</code></span></a></h2>
<p><code v-pre>&lt;filter&gt;</code>元素是<strong>滤镜基元的容器</strong>，通过对滤镜基元进行分组来自定义滤镜效果。<code v-pre>&lt;filter&gt;</code>元素及其内容不会直接呈现，需要被引用时才会显示，通常定义在<code v-pre>&lt;defs&gt;</code>元素中。使用时通过<code v-pre>fliter=&quot;url(id)&quot;</code>或者<code v-pre>style=&quot;filter: url(id)&quot;</code>的形式引用。</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>值</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>x</code></td>
<td>长度/百分比</td>
<td>滤镜区域的X坐标。</td>
</tr>
<tr>
<td><code v-pre>y</code></td>
<td>长度/百分比</td>
<td>滤镜区域的y坐标。</td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td>长度/百分比</td>
<td>滤镜</td>
</tr>
<tr>
<td><code v-pre>height</code></td>
<td>长度/百分比</td>
<td>滤镜</td>
</tr>
<tr>
<td><code v-pre>filterUnits</code></td>
<td><code v-pre>userSpaceOnUse</code>/<code v-pre>objectBoundingBox</code>（默认值）</td>
<td>定义<code v-pre>x</code>, <code v-pre>y</code>, <code v-pre>width</code>, <code v-pre>height</code>的坐标系统。</td>
</tr>
<tr>
<td><code v-pre>primitiveUnits</code></td>
<td><code v-pre>userSpaceOnUse</code>（默认值）/<code v-pre>objectBoundingBox</code></td>
<td>为<code v-pre>&lt;filter&gt;</code>中的各种长度值和定义原子滤镜区域的属性指定坐标系统。</td>
</tr>
</tbody>
</table>
<h2 id="_10-3-feimage" tabindex="-1"><a class="header-anchor" href="#_10-3-feimage"><span>10.3 <code v-pre>&lt;feImage&gt;</code></span></a></h2>
<p><code v-pre>&lt;feImage&gt;</code>元素用于<strong>从外部源获取图像数据，并提供像素数据作为输出，以便对其进行处理和操作</strong>。</p>
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
<td><code v-pre>href</code></td>
<td>urlstring</td>
<td>图像资源或元素的URL。</td>
</tr>
<tr>
<td><code v-pre>preserveAspectRatio</code></td>
<td><code v-pre>[&quot;meet&quot; &quot;slice&quot;]</code></td>
<td>如果SVG片段嵌入到具有不同纵横比的容器中，则必须如何变形。</td>
</tr>
<tr>
<td><code v-pre>crossorigin</code></td>
<td><code v-pre>anonymous</code>/<code v-pre>use-credentials</code></td>
<td>是否允许跨域访问，并与<code v-pre>&lt;feDisplacementMap&gt;</code>元素一起使用</td>
</tr>
</tbody>
</table>
<ul>
<li>示例代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feImage</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xxx.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#img);<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：如果目标图像资源是SVG图像，会被栅格化。</p>
</blockquote>
<h2 id="_10-4-feblend" tabindex="-1"><a class="header-anchor" href="#_10-4-feblend"><span>10.4 <code v-pre>&lt;feBlend&gt;</code></span></a></h2>
<p><code v-pre>&lt;feBlend&gt;</code>元素用于在图像或图形之间应用混合效果。它通过将两个图像或图形的像素进行混合来创建新的视觉效果。类似CSS的<code v-pre>mix-blend-mode</code>属性。</p>
<ul>
<li>属性</li>
</ul>
<table>
<thead>
<tr>
<th>属性</th>
<th>值</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>mode</code></td>
<td>与CSS<code v-pre>mix-blend-mode</code>属性的取值一致。<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode" target="_blank" rel="noopener noreferrer">blend-mode</a></td>
<td>定义混合模式。</td>
</tr>
</tbody>
</table>
<ul>
<li>示例代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200px<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blendFilter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feImage</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/water.png<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feImage</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/fire.png<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">&lt;!-- 相乘 --></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feBlend</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>multiply<span class="token punctuation">"</span></span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p1<span class="token punctuation">"</span></span> <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#blendFilter)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/047.png" alt=""></p>
<h2 id="_10-5-fetile" tabindex="-1"><a class="header-anchor" href="#_10-5-fetile"><span>10.5 <code v-pre>&lt;feTile&gt;</code></span></a></h2>
<p><code v-pre>&lt;feTile&gt;</code>元素用<strong>输入图像的重复平铺模式填充目标矩形</strong>。</p>
<ul>
<li>示例代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tile<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feImage</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/fire.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fire<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">            <span class="token comment">&lt;!-- 情况一：正常使用 --></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feTile</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fire<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">&lt;!-- 情况二：第一个&lt;feTile>元素将图像平铺到100x100的区域，然后第二个&lt;feTile>元素将这个100x100的区域再次平铺到整个&lt;rect>元素的大小 --></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feTile</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fire<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feTile</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#tile)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/048.png" alt=""></p>
<h2 id="_10-6-feoffset" tabindex="-1"><a class="header-anchor" href="#_10-6-feoffset"><span>10.6 <code v-pre>&lt;feOffset&gt;</code></span></a></h2>
<p><code v-pre>&lt;feOffset&gt;</code>将输入图像相对于其在图像空间中的当前位置通过指定向量进行偏移。</p>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>dx</code></td>
<td>number</td>
<td>输入图形沿x轴偏移的量。</td>
</tr>
<tr>
<td><code v-pre>dy</code></td>
<td>number</td>
<td>输入图形沿y轴偏移的量。</td>
</tr>
</tbody>
</table>
<ul>
<li>示例代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feOffset</span> <span class="token attr-name">dx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">dy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!-- 原图 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/fire.png<span class="token punctuation">"</span></span>  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!-- 偏移之后 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/fire.png<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#offset)<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/049.png" alt=""></p>
<h2 id="_10-7-feflood" tabindex="-1"><a class="header-anchor" href="#_10-7-feflood"><span>10.7 <code v-pre>&lt;feFlood&gt;</code></span></a></h2>
<p><code v-pre>&lt;feFlood&gt;</code>元素用于在图像上创建一个填充效果。它通过<code v-pre>flood-color</code>和<code v-pre>flood-opacity</code>来填充整个图像或特定区域，以改变图像的外观。</p>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>flood-color</code></td>
<td>color</td>
<td>指示使用什么颜色来填充当前滤镜区域。</td>
</tr>
<tr>
<td><code v-pre>flood-opacity</code></td>
<td>不透明度</td>
<td>定义在整个过滤器原语子区域中使用的不透明度值。</td>
</tr>
</tbody>
</table>
<ul>
<li>示例代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>floodFilter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feFlood</span></span>
<span class="line">            <span class="token attr-name">flood-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightpink<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">flood-opacity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.5<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flood<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feComposite</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span> <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flood<span class="token punctuation">"</span></span> <span class="token attr-name">operator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arithmetic<span class="token punctuation">"</span></span> <span class="token attr-name">k1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">k2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">k3</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">k4</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#floodFilter)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/050.png" alt=""></p>
<h2 id="_10-8-fedropshadow" tabindex="-1"><a class="header-anchor" href="#_10-8-fedropshadow"><span>10.8 <code v-pre>&lt;feDropShadow&gt;</code></span></a></h2>
<p><code v-pre>&lt;feDropShadow&gt;</code>创建输入图像的投影。类似于CSS <code v-pre>filter: drop-shadow(xxx)</code>。</p>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>dx</code></td>
<td>number</td>
<td>输入图形沿x轴偏移的量。</td>
</tr>
<tr>
<td><code v-pre>dy</code></td>
<td>number</td>
<td>输入图形沿y轴偏移的量。</td>
</tr>
<tr>
<td><code v-pre>stdDeviation</code></td>
<td>number</td>
<td>定义投影中模糊操作的标准偏差。</td>
</tr>
<tr>
<td><code v-pre>flood-color</code></td>
<td>color</td>
<td>指定阴影的颜色</td>
</tr>
<tr>
<td><code v-pre>flood-opacity</code></td>
<td>[0, 1]/百分比</td>
<td>指定阴影的不透明度。</td>
</tr>
</tbody>
</table>
<ul>
<li>示例代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>shadow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feDropShadow</span></span>
<span class="line">            <span class="token attr-name">dx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">dy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">stdDeviation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">flood-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightblue<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">flood-opacity</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#shadow)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/051.png" alt=""></p>
<h2 id="_10-9-fedisplacementmap" tabindex="-1"><a class="header-anchor" href="#_10-9-fedisplacementmap"><span>10.9 <code v-pre>&lt;feDisplacementMap&gt;</code></span></a></h2>
<p><code v-pre>&lt;feDisplacementMap&gt;</code>元素使用来自<code v-pre>in2</code>的图像的像素值来对来自<code v-pre>in</code>的图像进行空间位移，从而在图像或图形上创建一种扭曲或变形的效果。</p>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>scale</code></td>
<td>number</td>
<td>定义要在<code v-pre>&lt;feDisplacementMap&gt;</code>过滤器基元上使用的置换比例因子</td>
</tr>
<tr>
<td><code v-pre>xChannelSelector</code></td>
<td><code v-pre>R</code>/<code v-pre>G</code>/<code v-pre>B</code>/<code v-pre>A</code></td>
<td>指示从<code v-pre>in2</code>中使用哪个颜色通道沿x轴替换<code v-pre>in</code>中的像素。</td>
</tr>
<tr>
<td><code v-pre>yChannelSelector</code></td>
<td><code v-pre>R</code>/<code v-pre>G</code>/<code v-pre>B</code>/<code v-pre>A</code></td>
<td>指示从<code v-pre>in2</code>中使用哪个颜色通道沿y轴替换<code v-pre>in</code>中的像素。</td>
</tr>
</tbody>
</table>
<ul>
<li>转换公式：</li>
</ul>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line">$$ P'(x,y) = P(x + scale <span class="token italic"><span class="token punctuation">*</span><span class="token content"> (XC(x, y) - 0.5), y + scale </span><span class="token punctuation">*</span></span> (YC(x, y) - 0.5)) $$</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中：其中<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">P(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>为输入图像，<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>P</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">P&#x27;(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0019em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>为目标图像。<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>X</mi><mi>C</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">XC(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">XC</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>和<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>Y</mi><mi>C</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">YC(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.22222em;">Y</span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>是<code v-pre>xChannelSelector</code>和<code v-pre>yChannelSelector</code>指定的通道的组件值。</p>
<ul>
<li>
<p>公式的计算过程如下：</p>
<ol>
<li>首先，计算位图中对应像素的亮度值的差异，即<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>X</mi><mi>C</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>−</mo><mn>0.5</mn><mtext>和</mtext><mi>Y</mi><mi>C</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>−</mo><mn>0.5</mn></mrow><annotation encoding="application/x-tex">XC(x,y) - 0.5和YC(x,y) - 0.5</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">XC</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0.5</span><span class="mord cjk_fallback">和</span><span class="mord mathnormal" style="margin-right:0.22222em;">Y</span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0.5</span></span></span></span>。这个差异值表示位图像素的亮度相对于中间值0.5的偏移量。</li>
<li>将这个差异值乘以缩放比例<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mi>c</mi><mi>a</mi><mi>l</mi><mi>e</mi></mrow><annotation encoding="application/x-tex">scale</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">sc</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">e</span></span></span></span>。这样可以控制位图像素的偏移量的大小。</li>
<li>最后，将源图像中的像素位置<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">P(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>分别加上缩放后的位图像素的偏移量，即<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi><mo>+</mo><mi>s</mi><mi>c</mi><mi>a</mi><mi>l</mi><mi>e</mi><mo>∗</mo><mo stretchy="false">(</mo><mi>X</mi><mi>C</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>−</mo><mn>0.5</mn><mo stretchy="false">)</mo><mtext>和</mtext><mi>y</mi><mo>+</mo><mi>s</mi><mi>c</mi><mi>a</mi><mi>l</mi><mi>e</mi><mo>∗</mo><mo stretchy="false">(</mo><mi>Y</mi><mi>C</mi><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo><mo>−</mo><mn>0.5</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">x + scale * (XC(x,y) - 0.5)和y + scale * (YC(x,y) - 0.5)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">x</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">sc</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">e</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.07153em;">XC</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0.5</span><span class="mclose">)</span><span class="mord cjk_fallback">和</span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">sc</span><span class="mord mathnormal">a</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">e</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.22222em;">Y</span><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">0.5</span><span class="mclose">)</span></span></span></span>。这样就得到了源图像像素的最终位置<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>P</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi>x</mi><mo separator="true">,</mo><mi>y</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">P&#x27;(x,y)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0019em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose">)</span></span></span></span>。</li>
</ol>
</li>
<li>
<p>示例代码</p>
</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span></span>
<span class="line">    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 220 220<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>displacementFilter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feTurbulence</span></span>
<span class="line">        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>turbulence<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">baseFrequency</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.05<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">numOctaves</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>turbulence<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feDisplacementMap</span></span>
<span class="line">        <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>turbulence<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">xChannelSelector</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>R<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">yChannelSelector</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>G<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>filter: url(#displacementFilter)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><svg
    width="200"
    height="200"
    viewBox="0 0 220 220"
    xmlns="http://www.w3.org/2000/svg">
<filter id="displacementFilter">
<feTurbulence
        type="turbulence"
        baseFrequency="0.05"
        numOctaves="2"
        result="turbulence" />
<feDisplacementMap
        in2="turbulence"
        in="SourceGraphic"
        scale="50"
        xChannelSelector="R"
        yChannelSelector="G" />
</filter>
<circle cx="100" cy="100" r="100" style="filter: url(#displacementFilter)" />
</svg></p>
<h2 id="_10-10-feturbulence" tabindex="-1"><a class="header-anchor" href="#_10-10-feturbulence"><span>10.10 <code v-pre>&lt;feTurbulence&gt;</code></span></a></h2>
<p><code v-pre>&lt;feTurbulence&gt;</code>元素使用Perlin湍流函数创建图像。生成的图像将填充该滤镜的整个滤镜子区域。可以用来实现如说云纹、大理石纹、水波、有机形状等等效果。</p>
<blockquote>
<p>Perlin湍流函数是一种用于生成连续、自然的随机数值的算法。其主要思想是通过插值和梯度向量来生成平滑的随机数值。可以用于生成连续的二维或三维噪声图像，这些图像可以用于模拟自然界中的各种效果，如云彩、水波纹、山脉等。</p>
<p>具体来说，Perlin湍流函数通过将输入坐标映射到一个网格中的控制点，并计算控制点周围的梯度向量来生成随机数值。然后，通过插值算法将这些随机数值平滑地连接起来，形成一个连续的函数。这个函数可以根据输入坐标的变化而变化，从而实现平滑的随机数值生成。</p>
<p>Perlin湍流函数在计算机图形学中被广泛应用，特别是在生成逼真的纹理和动画效果方面。它可以用于创建自然景观、水面效果、火焰效果等。此外，Perlin湍流函数还被用于生成随机地形、模拟流体动力学等领域。</p>
</blockquote>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>type</code></td>
<td><code v-pre>fractalNoise</code>/<code v-pre>turbulence</code></td>
<td>指示滤波器基元是否应执行噪声或湍流函数。</td>
</tr>
<tr>
<td><code v-pre>seed</code></td>
<td>number</td>
<td>伪随机数生成器的起始数。</td>
</tr>
<tr>
<td><code v-pre>stitchTiles</code></td>
<td><code v-pre>stitch</code>/<code v-pre>noStitch</code>（默认值）</td>
<td>定义了噪声函数在边界处的行为。</td>
</tr>
<tr>
<td><code v-pre>baseFrequency</code></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#number-optional-number" target="_blank" rel="noopener noreferrer">number-optional-number</a></td>
<td>噪声函数的基频参数。</td>
</tr>
<tr>
<td><code v-pre>numOctaves</code></td>
<td>正整数</td>
<td>控制噪声的复杂程度。它定义了生成噪声的频率数量，每个频率都会产生不同的纹理效果。较低的值会生成较简单的纹理，而较高的值会生成更复杂的纹理。</td>
</tr>
</tbody>
</table>
<blockquote>
<p>注意：如果<code v-pre>stitchTiles=&quot;noStitch&quot;</code>，则不会在包含湍流函数的tiles边界上实现平滑过渡。可能会显示明显的不连续的边界。</p>
</blockquote>
<ul>
<li>示例代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noise1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feTurbulence</span> <span class="token attr-name">baseFrequency</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.03<span class="token punctuation">"</span></span> <span class="token attr-name">numOctaves</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#noise1)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<svg xmlns="http://www.w3.org/2000/svg">
    <filter id="noise1">
        <feTurbulence baseFrequency="0.03" numOctaves="2" />
    </filter>
    <rect x="0" y="0" width="300" height="300" filter="url(#noise1)" />
</svg>
<h2 id="_10-11-fecomposite" tabindex="-1"><a class="header-anchor" href="#_10-11-fecomposite"><span>10.11 <code v-pre>&lt;feComposite&gt;</code></span></a></h2>
<p><code v-pre>&lt;feComposite&gt;</code>用于在图像空间中以像素为单位对两个输入图像进行组合，使用了Porter-Duff合成操作在图像空间中按像素执行两个输入图像的组合。</p>
<blockquote>
<p>Porter-Duff合成操作是一组用于图像合成的算法，它定义了如何将两个图像的像素进行组合以生成最终的合成图像。这些操作通常用于图形处理和计算机图形学中，用于实现图像的混合、遮罩、透明度等效果。</p>
<p>Porter-Duff合成操作基于两个输入图像的像素值和Alpha通道值，通过不同的算法来计算输出图像的像素值。这些算法可以根据像素的位置关系和Alpha通道的值来决定像素的合成方式。</p>
</blockquote>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>operator</code></td>
<td><code v-pre>over</code>/<code v-pre>in</code>/<code v-pre>out</code>/<code v-pre>atop</code>/<code v-pre>xor</code>/<code v-pre>lighter</code>/<code v-pre>arithmetic</code></td>
<td>指定合成操作的类型。</td>
</tr>
<tr>
<td><code v-pre>K1~K4</code></td>
<td>number</td>
<td>在<code v-pre>operator=&quot;arithmetic&quot;</code>时用于计算结果像素的值。</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>属性值</p>
<ul>
<li>
<p>对于<code v-pre>operator</code>属性有：</p>
<ul>
<li><code v-pre>over</code>：将源图像放在目标图像上方。</li>
<li><code v-pre>in</code>：如果源图形（<code v-pre>in</code>属性定义）与目标图形（<code v-pre>in2</code>定义）有重叠部分，那么会用源图形将这些重叠部分替换掉目标图形。也就是说，源图形会覆盖在目标图形上，取代目标图形的显示，其他部分透明。</li>
<li><code v-pre>out</code>：与<code v-pre>in</code>相反。会用源图形将不重叠部分替换掉目标图形。</li>
<li><code v-pre>atop</code>：与<code v-pre>in</code>类似，但是不重叠部分保持不变。</li>
<li><code v-pre>xor</code>：指示<code v-pre>in</code>属性中定义的源图形的非重叠区域与<code v-pre>in2</code>属性中定义的目标图形合并。也就是只显示非重叠区域。</li>
<li><code v-pre>lighter</code>：将源图像和目标图像的颜色值相加，产生更亮的颜色。</li>
<li><code v-pre>arithmetic</code>：此值指示 in 属性中定义的源图形和 in2 属性中定义的目标图形使用result =k1<em>i1</em>i2 +k2<em>i1 +k3</em>i2 + k4,其中:i1 和 i2 表示输入图像对应的像素通道值，分别映射到 in 和k2 和 k4 表示同名属性 k3 的值。</li>
</ul>
</li>
<li>
<p>对于<code v-pre>K1</code>~<code v-pre>K4</code>属性，它们用于调整每个输入图像的贡献程度。在MDN中对这个四个属性有这样一个像素合成公式：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>r</mi><mi>e</mi><mi>s</mi><mi>u</mi><mi>l</mi><mi>t</mi><mo>=</mo><mi>k</mi><mn>1</mn><mo>∗</mo><mi>i</mi><mn>1</mn><mo>∗</mo><mi>i</mi><mn>2</mn><mo>+</mo><mi>k</mi><mn>2</mn><mo>∗</mo><mi>i</mi><mn>1</mn><mo>+</mo><mi>k</mi><mn>3</mn><mo>∗</mo><mi>i</mi><mn>2</mn><mo>+</mo><mi>k</mi><mn>4</mn><mo separator="true">;</mo></mrow><annotation encoding="application/x-tex">result = k1 * i1 * i2 + k2 * i1 + k3 * i2 + k4; 
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">res</span><span class="mord mathnormal">u</span><span class="mord mathnormal">lt</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7429em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">i</span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7429em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">i</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.7429em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">i</span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord">4</span><span class="mpunct">;</span></span></span></span></span></p>
<ul>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mn>1</mn><mo>∗</mo><mi>i</mi><mn>1</mn><mo>∗</mo><mi>i</mi><mn>2</mn></mrow><annotation encoding="application/x-tex">k1 * i1 * i2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span><span class="mord">2</span></span></span></span>表示两个输入图像的像素值相乘后再乘以权重系数<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mn>1</mn></mrow><annotation encoding="application/x-tex">k1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord">1</span></span></span></span>，用于调整两个输入图像的互相影响程度。</li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mn>2</mn><mo>∗</mo><mi>i</mi><mn>1</mn></mrow><annotation encoding="application/x-tex">k2 * i1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span><span class="mord">1</span></span></span></span>表示输入图像<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi><mn>1</mn></mrow><annotation encoding="application/x-tex">i1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span><span class="mord">1</span></span></span></span>乘以权重系数<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mn>2</mn></mrow><annotation encoding="application/x-tex">k2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord">2</span></span></span></span>，用于调整输入图像<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>i</mi><mn>1</mn></mrow><annotation encoding="application/x-tex">i1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span><span class="mord">1</span></span></span></span>的整体贡献程度。<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mn>3</mn><mo>∗</mo><mi>i</mi><mn>2</mn></mrow><annotation encoding="application/x-tex">k3 * i2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord">3</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6595em;"></span><span class="mord mathnormal">i</span><span class="mord">2</span></span></span></span>同理。</li>
<li><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi><mn>4</mn></mrow><annotation encoding="application/x-tex">k4</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord">4</span></span></span></span>是一个常数项，用于调整整体亮度或对比度。</li>
</ul>
</li>
</ul>
<ul>
<li>
<p>注意：</p>
<ul>
<li><code v-pre>K1</code>和<code v-pre>K2</code>有任意一方的值为正数，另一方为负数时，只会呈现为正数那一方的图像的非重叠部分，</li>
<li><code v-pre>K4</code>的值范围是[-1, 1]，1完全白色，-1完全黑色，当值小于-1时，效果与正值一样。</li>
</ul>
<p><code v-pre>operator=&quot;arithmetic&quot;</code>和<code v-pre>K1~K4</code>属性配合使用是可以达到<code v-pre>operator</code>等于其他值的效果的。</p>
</li>
</ul>
</li>
<li>
<p>示例代码</p>
</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>floodFilter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feimage</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/fire.png<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>water<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feimage</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fire<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feComposite</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>water<span class="token punctuation">"</span></span> <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fire<span class="token punctuation">"</span></span> <span class="token attr-name">operator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>xor<span class="token punctuation">"</span></span> <span class="token attr-name">k1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">k2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">k3</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">k4</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/water.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#floodFilter)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/052.png" alt=""></p>
<h2 id="_10-12-fecolormatrix" tabindex="-1"><a class="header-anchor" href="#_10-12-fecolormatrix"><span>10.12 <code v-pre>&lt;feColorMatrix&gt;</code></span></a></h2>
<p><code v-pre>&lt;feColorMatrix&gt;</code>元素根据一个转换矩阵来改变颜色。对于每个像素的颜色值[R,G,B,A]，它会将其与一个5x5的颜色矩阵相乘，从而创建出新的颜色值[R',G',B',A']。这个颜色矩阵可以通过一系列的矩阵操作来实现不同的颜色转换效果。</p>
<blockquote>
<p>转换矩阵是一个数学工具，用于描述线性变换的方式。转换矩阵是一个5x5的矩阵，其中包含了一系列的数字。这些数字可以是正数、负数或零。矩阵的每一行代表了输出颜色的一个分量（红、绿、蓝、透明度和偏移量），而每一列代表了输入颜色的一个分量。</p>
<p>转换矩阵的计算方式是通过矩阵乘法来实现的。对于每个像素的颜色值（表示为一个包含红、绿、蓝和透明度分量的矢量），将其与转换矩阵进行乘法运算，得到一个新的颜色值。</p>
<p>通过调整转换矩阵中的数字，可以实现不同的颜色变换效果。例如，可以通过改变矩阵中的数字来调整亮度、对比度、饱和度等。具体的变换效果取决于矩阵中的数字的值和顺序。</p>
<p>转换矩阵的每个元素的含义如下：</p>
<ul>
<li>第一行的前三个元素表示红色分量的输出，第四个元素表示透明度的输出，第五个元素表示偏移量的输出。</li>
<li>第二行的前三个元素表示绿色分量的输出，第四个元素表示透明度的输出，第五个元素表示偏移量的输出。</li>
<li>第三行的前三个元素表示蓝色分量的输出，第四个元素表示透明度的输出，第五个元素表示偏移量的输出。</li>
<li>第四行的前三个元素表示透明度的输出，第四个元素表示透明度的输出，第五个元素表示偏移量的输出。</li>
<li>第五行均表示偏移量的输出。</li>
</ul>
<p>通过调整转换矩阵中的数字，可以实现各种不同的颜色变换效果，从而实现对图像的颜色进行调整和变换。</p>
</blockquote>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>type</code></td>
<td><code v-pre>matrix</code>/<code v-pre>saturate</code>/<code v-pre>hueRotate</code>/<code v-pre>luminanceToAlpha</code></td>
<td>定义光源在坐标系中Y轴的位置。</td>
</tr>
<tr>
<td><code v-pre>values</code></td>
<td>number</td>
<td>指定颜色矩阵的值</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>属性值</p>
<ul>
<li>
<p>对于<code v-pre>type</code>：</p>
<ul>
<li><code v-pre>matrix</code>：使用一个5x4的矩阵来转换颜色。矩阵中的每个元素都会与输入图像的颜色值进行乘法运算，并将结果相加得到输出颜色值。</li>
<li><code v-pre>saturate</code>：通过调整颜色的饱和度来转换颜色。此时<code v-pre>values</code>属性的值为一个浮点数，表示饱和度的倍数。值为<code v-pre>0</code>时，输出图像将完全灰度化；值为<code v-pre>1</code>时，输出图像与输入图像相同；值大于<code v-pre>1</code>时，输出图像的饱和度增加。</li>
<li><code v-pre>hueRotate</code>：通过旋转颜色空间来转换颜色。此时<code v-pre>values</code>属性的值为一个角度值，表示颜色空间的旋转角度。正值表示顺时针旋转，负值表示逆时针旋转。</li>
<li><code v-pre>luminanceToAlpha</code>：将亮度转换为透明度。此时<code v-pre>values</code>属性将输入图像的亮度值转换为透明度值，亮度越高的像素将越透明。</li>
</ul>
</li>
<li>
<p><code v-pre>values</code>的值是一个数字列表，具体的值对应<code v-pre>type</code>属性：此值指示 in 属性中定义的源图形和 in2 属性中定义的目标图形使用 以下公式组合:</p>
<p>result =k1<em>i1</em>i2 +k2<em>i1 +k3</em>i2 + k4</p>
<p>其中:i1 和 i2 表示输入图像对应的像素通道值，分别映射到 in 和k2 和 k4 表示同名属性 k3 的值。in2</p>
</li>
</ul>
</li>
<li>
<p>示例代码</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>colorMeMatrix<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feColorMatrix</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>matrix<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">values</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 0 0 0</span>
<span class="line">                1 1 1 1 0</span>
<span class="line">                0 0 0 0 0</span>
<span class="line">                0 0 0 1 0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!-- 浅蓝色变绿色 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightblue<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#colorMeMatrix)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <filter id="colorMeMatrix">
        <feColorMatrix in="SourceGraphic"
            type="matrix"
            values="0 0 0 0 0
                1 1 1 1 0
                0 0 0 0 0
                0 0 0 1 0" />
        </filter>
    </defs>
    <rect width="100" height="100" fill="lightblue" filter="url(#colorMeMatrix)" />
</svg>
<h2 id="_10-13-feconvolvematrix" tabindex="-1"><a class="header-anchor" href="#_10-13-feconvolvematrix"><span>10.13  <code v-pre>&lt;feConvolveMatrix&gt;</code></span></a></h2>
<p><code v-pre>&lt;feConvolveMatrix&gt;</code>元素用于通过卷积运算来改变图像的特性。</p>
<blockquote>
<p>卷积运算是一种数学运算，它通过将一个矩阵（卷积核矩阵）应用于另一个矩阵（图像矩阵）来计算新的矩阵（输出矩阵）。</p>
<p>卷积核矩阵是一个二维矩阵，它的大小通常是奇数×奇数，例如3×3、5×5等。每个元素表示卷积核的一个权重值，用于计算图像中每个像素的新值。</p>
<p>通过调整卷积核矩阵的权重值，可以实现不同的图像处理效果。详细请查阅<a href="ttps://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix" target="_blank" rel="noopener noreferrer">feConvolveMatrix</a>。</p>
</blockquote>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>order</code></td>
<td>[+number +number]</td>
<td>确定被用作<code v-pre>&lt;feConvolveMatrix&gt;</code>元素的矩阵的大小。</td>
</tr>
<tr>
<td><code v-pre>kernelMatrix</code></td>
<td>数字列表</td>
<td>定义卷积核矩阵。</td>
</tr>
<tr>
<td><code v-pre>divisor</code></td>
<td>number</td>
<td>指定卷积运算的除数。用于对卷积运算的结果进行缩放。</td>
</tr>
<tr>
<td><code v-pre>bias</code></td>
<td>number</td>
<td>用于调整滤镜的范围。在应用<code v-pre>&lt;feConvolveMatrix&gt;</code>元素的<code v-pre>kernelMatrix</code>到输入图像并应用<code v-pre>divisor</code>属性后，<code v-pre>bias</code>属性会被添加到每个分量上。这样可以表示本来会被限制在<code v-pre>0</code>或<code v-pre>1</code>的值。</td>
</tr>
<tr>
<td><code v-pre>targetX</code></td>
<td>0 ≤ targetX &lt; order X(卷积矩阵在水平方向上的大小)</td>
<td>指定卷积矩阵的中心点在水平方向上的偏移量。</td>
</tr>
<tr>
<td><code v-pre>targetY</code></td>
<td>0 ≤ targetY &lt; order Y(卷积矩阵在垂直方向上的大小)</td>
<td>指定卷积矩阵的中心点在垂直方向上的偏移量。</td>
</tr>
<tr>
<td><code v-pre>edgeMode</code></td>
<td><code v-pre>duplicate</code>/<code v-pre>wrap</code>/<code v-pre>none</code></td>
<td>指定卷积滤镜的边缘处理模式。它决定当卷积核应用到图像边缘时如何处理边缘像素。</td>
</tr>
<tr>
<td><code v-pre>preserveAlpha</code></td>
<td>Boolean</td>
<td>指定卷积操作后是（<code v-pre>true</code>）否（<code v-pre>false</code>）保留原始图像的透明度信息。</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>属性值</p>
<ul>
<li>
<p>对于<code v-pre>order</code>属性的值：第一个整数表示卷积核的宽度，第二个整数表示卷积核的高度。例如，<code v-pre>order=&quot;3 3&quot;</code>表示卷积核的尺寸为3x3。</p>
<p><code v-pre>order</code>属性的值越大，卷积核的尺寸就越大，从而可以实现更复杂的图像处理效果。然而，较大的卷积核也会增加计算量，可能导致性能下降。需要注意的是，<code v-pre>order</code>属性的值必须是非负整数。如果指定的值不是整数，或者包含负数，则会被忽略。另外，如果只指定了一个整数，则会将其作为宽度和高度的值，即创建一个正方形的卷积核。</p>
</li>
<li>
<p>对于<code v-pre>edgeMode</code>属性值：</p>
<ul>
<li><code v-pre>duplicate</code>：当卷积核应用到图像边缘时，边缘像素将被复制并用于计算。这意味着边缘像素的值将被重复使用，从而扩展了图像的边缘。这种模式适用于需要扩展边缘的情况。</li>
<li><code v-pre>wrap</code>：当卷积核应用到图像边缘时，边缘像素将通过&quot;包裹&quot;的方式来获取。也就是说，如果卷积核超出了图像边界，它将从相对的另一侧获取像素值。这种模式适用于需要无限循环的纹理效果。</li>
<li><code v-pre>none</code>：当卷积核应用到图像边缘时，边缘像素将被忽略，不参与计算。这意味着边缘像素的值将被视为0。这种模式适用于需要保留图像边缘的情况。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>示例代码</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>convolve-filter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!-- 突出显示图像中的边缘和细节。 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feConvolveMatrix</span></span>
<span class="line">        <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">order</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">kernelMatrix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1 1 1</span>
<span class="line">                    1 -8 1</span>
<span class="line">                    1 1 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#convolve-filter)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/053.png" alt=""></p>
<h2 id="_10-14-fefuncr-、-fefuncg-、-fefuncb-和-fefunca" tabindex="-1"><a class="header-anchor" href="#_10-14-fefuncr-、-fefuncg-、-fefuncb-和-fefunca"><span>10.14 <code v-pre>&lt;feFuncR&gt;</code>、<code v-pre>&lt;feFuncG&gt;</code>、<code v-pre>&lt;feFuncB&gt;</code>和<code v-pre>&lt;feFuncA&gt;</code></span></a></h2>
<p><code v-pre>&lt;feFuncR&gt;</code>、<code v-pre>&lt;feFuncG&gt;</code>、<code v-pre>&lt;feFuncB&gt;</code>和<code v-pre>&lt;feFuncA&gt;</code>四个元素用于定义其父元素<code v-pre>&lt;feComponentTransfer&gt;</code>元素的输入图形的红色、绿色、蓝色个透明分量的Transfer函数。</p>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>type</code></td>
<td><code v-pre>identity/table/discrete/linear/gamma</code></td>
<td>指示组件Transfer函数的类型。</td>
</tr>
<tr>
<td><code v-pre>intercept</code></td>
<td>number</td>
<td>当<code v-pre>type=&quot;linear&quot;</code>时，指定颜色组件传输的linear函数的截距。</td>
</tr>
<tr>
<td><code v-pre>amplitude</code></td>
<td>number</td>
<td>当<code v-pre>type=&quot;gamma&quot;</code>时，控制gamma函数的振幅。</td>
</tr>
<tr>
<td><code v-pre>exponent</code></td>
<td>number</td>
<td>当<code v-pre>type=&quot;gamma&quot;</code>时，定义gamma函数的指数。</td>
</tr>
<tr>
<td><code v-pre>tableValues</code></td>
<td>数字列表</td>
<td>一个数字列表，用于定义颜色组件传递函数的值查找表。</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p><code v-pre>type</code>属性值解释：</p>
<ul>
<li><code v-pre>identity</code>：用于保持颜色通道的原始值不变，不进行任何修改。</li>
<li><code v-pre>table</code>：用于通过一个表格来映射输入颜色通道值到输出颜色通道值。需要再指定一个<code v-pre>tableValues</code>属性，该属性包含了一个数组，其中每个元素代表输入颜色通道值与输出颜色通道值的对应关系。</li>
<li><code v-pre>discrete</code>：用于将输入颜色通道值映射到一组离散的输出颜色通道值。同样需要指定一个<code v-pre>tableValues</code>属性，但是这里的映射是分段的，每段映射都有一个不同的输出颜色值。</li>
<li><code v-pre>linear</code>：用于执行线性插值，将输入颜色通道值映射到输出颜色通道值。需要指定<code v-pre>slope</code>（弃用）和<code v-pre>intercept</code>属性来定义线性函数。</li>
<li><code v-pre>gamma</code>：用于应用伽马校正，以改变颜色通道值的亮度。需要指定<code v-pre>amplitude</code>和<code v-pre>exponent</code>属性，分别控制伽马函数的振幅和指数。</li>
</ul>
</li>
</ul>
<h2 id="_10-15-fecomponenttransfer" tabindex="-1"><a class="header-anchor" href="#_10-15-fecomponenttransfer"><span>10.15 <code v-pre>&lt;feComponentTransfer&gt;</code></span></a></h2>
<p><code v-pre>&lt;feComponentTransfer&gt;</code>元素用于对每个像素执行颜色分量的数据重映射。其计算使用非预乘色值进行执行，通过应用不同的Transfer函数来调整图像的亮度、对比度、饱和度和色调等等。</p>
<blockquote>
<p>非预乘数据是指在计算机图形学中用于表示颜色的一种编码方式。在计算机中，颜色通常由红、绿、蓝三个分量来表示，每个分量的取值范围是0到255之间。而非预乘数据则是指在表示颜色时，每个分量没有被除以255以及乘以透明度0.8而转化为0~1范围的值。</p>
</blockquote>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>in</code></td>
<td><code v-pre>SourceGraphic</code>/<code v-pre>SourceAlpha</code>/<code v-pre>BackgroundImage</code>/<code v-pre>BackgroundAlpha</code>/<br><code v-pre>FillPaint</code>/<code v-pre>StrokePaint</code>/<code v-pre>filter-primitive-reference</code></td>
<td>标识给定过滤的输入。</td>
</tr>
</tbody>
</table>
<ul>
<li>示例代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 原图 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>200<span class="token punctuation">'</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>colorAdjust<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feComponentTransfer</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feFuncR</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>linear<span class="token punctuation">"</span></span> <span class="token attr-name">intercept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feFuncG</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>linear<span class="token punctuation">"</span></span> <span class="token attr-name">intercept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.5<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feFuncB</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>linear<span class="token punctuation">"</span></span> <span class="token attr-name">intercept</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0.3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feComponentTransfer</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#colorAdjust)<span class="token punctuation">"</span></span>  <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/054.png" alt=""></p>
<h2 id="_10-16-fegaussianblur" tabindex="-1"><a class="header-anchor" href="#_10-16-fegaussianblur"><span>10.16 <code v-pre>&lt;feGaussianBlur&gt;</code></span></a></h2>
<p><code v-pre>&lt;feGaussianBlur&gt;</code>元素用于在图像上应用高斯模糊效果。</p>
<blockquote>
<p>高斯模糊是一种图像处理技术，用于使图像变得模糊并创建出柔和的视觉效果。它是基于高斯函数的数学原理，通过对图像中的像素进行加权平均来实现模糊效果。</p>
<p>高斯函数是一种钟形曲线，具有一个中心点和一个标准差。在高斯模糊中，标准差决定了模糊的强度。标准差越大，模糊效果越明显。</p>
<p>高斯模糊的原理是将每个像素的值与其周围像素的值进行加权平均。加权平均的权重由高斯函数计算得出，距离中心像素越远的像素权重越小。这样，中心像素的值会受到周围像素的影响，从而使图像变得模糊。</p>
<p>在图像处理中，高斯模糊常用于去除图像中的噪点、减少图像的细节和平滑图像的过渡。它也可以用于创建艺术效果，如柔和的光晕或模糊的背景。</p>
</blockquote>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>stdDeviation</code></td>
<td>number</td>
<td>模糊操作的标准差。</td>
</tr>
<tr>
<td><code v-pre>edgeMode</code></td>
<td><code v-pre>duplicate</code>/<code v-pre>wrap</code>/<code v-pre>none</code></td>
<td>决定如何根据需要使用颜色值扩展输入图像，以便当内核位于输入图像的边缘或附近时可以应用矩阵操作。</td>
</tr>
</tbody>
</table>
<ul>
<li>示例代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 原图 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>200<span class="token punctuation">'</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blurFilter<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feGaussianBlur</span> <span class="token attr-name">stdDeviation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#blurFilter)<span class="token punctuation">"</span></span>  <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/055.png" alt=""></p>
<h2 id="_10-17-femerge-和-femergenode" tabindex="-1"><a class="header-anchor" href="#_10-17-femerge-和-femergenode"><span>10.17 <code v-pre>&lt;feMerge&gt;</code>和<code v-pre>&lt;feMergeNode&gt;</code></span></a></h2>
<p><code v-pre>&lt;feMerge&gt;</code>元素用于合并多个图像效果的SVG滤镜元素。它允许我们将多个滤镜效果同时（而不是按顺序）应用于一个元素，并将它们合并成一个最终的效果。</p>
<p><code v-pre>&lt;feMergeNode&gt;</code>元素是<code v-pre>&lt;feMerge&gt;</code>元素的子元素，用于拿另一个滤镜的结果，让<code v-pre>&lt;feMerge&gt;</code>元素处理。</p>
<ul>
<li>示例代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>feOffset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feOffset</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span> <span class="token attr-name">dx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">dy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offset<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feGaussianBlur</span> <span class="token attr-name">stdDeviation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blur<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token comment">&lt;!-- 同时应用偏移和高斯模糊滤镜 --></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feMerge</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feMergeNode</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offset<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feMergeNode</span> <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blur<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feMerge</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span></span>
<span class="line">        <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightblue<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#feOffset)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <filter id="feOffset">
        <feOffset in="SourceGraphic" dx="50" dy="50" result="offset" />
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
            <feMergeNode in="offset" />
            <feMergeNode in="blur" />
        </feMerge>
    </filter>
    <rect
        width="100"
        height="100"
        fill="lightblue"
        filter="url(#feOffset)" />
</svg>
<h2 id="_10-18-femorphology" tabindex="-1"><a class="header-anchor" href="#_10-18-femorphology"><span>10.18 <code v-pre>&lt;feMorphology&gt;</code></span></a></h2>
<p><code v-pre>&lt;feMorphology&gt;</code>元素用于对图像进行形态学处理。</p>
<blockquote>
<p>形态学处理是一种基于图像形状的操作，用于改变图像的形态和结构。它主要通过改变图像中的像素值来实现，可以用于图像的边缘检测、膨胀、腐蚀等。</p>
<p>形态学处理的基本操作包括膨胀（dilate）和腐蚀（erode）。</p>
<p>膨胀操作可以使图像中的边缘变得更加粗细。它通过将每个像素的值替换为其周围像素中的最大值来实现。这样可以使边缘变得更加明显，同时也会使图像中的噪点变得更加明显。</p>
<p>腐蚀操作可以使边缘变得更加细小。它通过将每个像素的值替换为其周围像素中的最小值来实现。这样可以使边缘变得更加平滑，同时也会使图像中的细节变得模糊。</p>
<p>形态学处理还可以通过改变操作的半径或大小来控制操作的效果。较大的半径会使操作的影响范围更广，较小的半径会使操作的影响范围更小。</p>
<p>形态学处理在图像处理中有很多应用。例如，可以用膨胀操作来增强图像中的边缘，使其更加明显；可以用腐蚀操作来去除图像中的噪点，使其更加清晰；还可以用形态学处理来进行图像的分割和特征提取等。</p>
</blockquote>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>operator</code></td>
<td><code v-pre>erode</code>/<code v-pre>dilate</code></td>
<td>定义是膨胀（dilate）还是腐蚀（erode）源图形。</td>
</tr>
<tr>
<td><code v-pre>radius</code></td>
<td><code v-pre>number(x-radius) number(y-radius)</code></td>
<td>定义形态学操作的半径或大小。它决定了操作的影响范围。</td>
</tr>
</tbody>
</table>
<ul>
<li>示例代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 原图 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>edge-detection<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feMorphology</span> <span class="token attr-name">operator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dilate<span class="token punctuation">"</span></span> <span class="token attr-name">radius</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#edge-detection)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/056.png" alt=""></p>
<h2 id="_10-19-光源-或者光照-元素" tabindex="-1"><a class="header-anchor" href="#_10-19-光源-或者光照-元素"><span>10.19 光源（或者光照）元素</span></a></h2>
<p>光源元素用于模拟光照效果，使图形看起来更加真实和立体。在SVG中，光源元素有三种种类型：<strong>平行光</strong>、<strong>点光源</strong>和<strong>聚光灯光</strong>。平行光是指光线是平行的，类似于太阳光；点光源是指光线是从一个点向四面八方发射的，类似于灯泡；而聚光灯光模拟了现实世界中的聚光灯效果。聚光灯光源可以用于在场景中创建具有特定方向和范围的聚焦光束。</p>
<h3 id="_10-19-1-fediffuselighting-和-fespecularlighting" tabindex="-1"><a class="header-anchor" href="#_10-19-1-fediffuselighting-和-fespecularlighting"><span>10.19.1 <code v-pre>&lt;feDiffuseLighting&gt;</code>和<code v-pre>&lt;feSpecularLighting&gt;</code></span></a></h3>
<p><code v-pre>&lt;feDiffuseLighting&gt;</code>元素用来对图像进行光照处理。它使用Alpha通道作为凹凸贴图，通过改变凹凸贴图的亮度来模拟光照效果。凹凸贴图中的亮度值越高，对应位置的像素就会被照亮得越明亮。产生的结果图像是一个RGBA不透明图像。结果图像的每个像素的颜色取决于光源的颜色、光源的位置以及输入凹凸贴图的表面几何。</p>
<p>通过使用<code v-pre>&lt;feComposite&gt;</code>滤镜的<code v-pre>arithmetic</code>运算符的乘积项，可以将这个滤镜基元产生的光照贴图与纹理图像相结合。从而实现光照效果与纹理的叠加。这样可以在纹理图像上添加光照效果，使得图像看起来更加真实。</p>
<hr>
<p><code v-pre>&lt;feSpecularLighting&gt;</code>元素使用Alpha通道作为凹凸贴图来照亮源图形。结果图像是基于浅色的RGBA图像。光照计算遵循Phong光照模型的标准镜面成分。结果图像取决于光颜色、光位置和输入凹凸贴图的表面几何。光照计算的结果被添加到图像中。滤镜基元假设观察者在z方向上处于无限远处。</p>
<p>这个滤镜基元产生的图像包含光照计算的镜面反射部分。这样的贴图意在与纹理结合使用，使用算术<code v-pre>&lt;feComposite&gt;</code>方法的<code v-pre>add</code>项。可以通过添加多个这些光照贴图来模拟多个光源，然后将其应用于纹理图像。</p>
<p>这两者的区别在于<code v-pre>&lt;feSpecularLighting&gt;</code>元素主要用于模拟<strong>镜面反射</strong>效果；而<code v-pre>&lt;feDiffuseLighting&gt;</code>元素主要用于模拟<strong>漫反射</strong>效果。镜面反射效果更加明显，可以产生明亮的高光，而漫反射效果更加柔和，可以产生均匀的光照效果。</p>
<p><strong>另外，这两者通常是作为其他光源的容器使用。</strong></p>
<ul>
<li>属性（共有）</li>
</ul>
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
<td><code v-pre>in</code></td>
<td><code v-pre>SourceGraphic</code>/<code v-pre>SourceAlpha</code>/<code v-pre>BackgroundImage</code>/<code v-pre>BackgroundAlpha</code><br>/<code v-pre>FillPaint</code>/<code v-pre>StrokePaint</code>/<code v-pre>filter-primitive-reference</code>)</td>
<td>标识给定过滤的输入。</td>
</tr>
<tr>
<td><code v-pre>surfaceScale</code></td>
<td>number</td>
<td>控制光照效果的扩散程度（即光照效果的半径大小）。</td>
</tr>
<tr>
<td><code v-pre>diffuseConstant</code></td>
<td>number</td>
<td>调整光照效果的强度。它定义了光照效果的强度与输入图像的亮度之间的关系</td>
</tr>
</tbody>
</table>
<h3 id="_10-19-2-点光源-pointlight" tabindex="-1"><a class="header-anchor" href="#_10-19-2-点光源-pointlight"><span>10.19.2 点光源（PointLight）</span></a></h3>
<p><code v-pre>&lt;fePointLight&gt;</code>用于模拟一个点光源。</p>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>x</code></td>
<td>number</td>
<td>定义光源在坐标系中X轴的位置。</td>
</tr>
<tr>
<td><code v-pre>y</code></td>
<td>number</td>
<td>定义光源在坐标系中Y轴的位置。</td>
</tr>
<tr>
<td><code v-pre>z</code></td>
<td>number</td>
<td>定义光源在坐标系中Z轴的位置。</td>
</tr>
</tbody>
</table>
<h3 id="_10-19-3-平行光-distantlight" tabindex="-1"><a class="header-anchor" href="#_10-19-3-平行光-distantlight"><span>10.19.3 平行光（DistantLight）</span></a></h3>
<p><code v-pre>&lt;feDistantLight&gt;</code>元素用于模拟远平行（距离）光源的效果。</p>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>azimuth</code></td>
<td>number</td>
<td>控制光源在XY平面上的方位角，即光源相对于目标的水平角度。默认值为<code v-pre>0</code>，位于正北方向。</td>
</tr>
<tr>
<td><code v-pre>elevation</code></td>
<td>number</td>
<td>指定光源从XY平面朝向Z轴的方向角。</td>
</tr>
</tbody>
</table>
<h3 id="_10-19-4-聚光灯-spotlight" tabindex="-1"><a class="header-anchor" href="#_10-19-4-聚光灯-spotlight"><span>10.19.4 聚光灯（SpotLight）</span></a></h3>
<p><code v-pre>&lt;feSpotLight&gt;</code>元素用于模拟一个点光源。</p>
<ul>
<li>属性</li>
</ul>
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
<td><code v-pre>x</code></td>
<td>number</td>
<td>定义光源在坐标系中X轴的位置。</td>
</tr>
<tr>
<td><code v-pre>y</code></td>
<td>number</td>
<td>定义光源在坐标系中Y轴的位置。</td>
</tr>
<tr>
<td><code v-pre>z</code></td>
<td>number</td>
<td>定义光源在坐标系中Z轴的位置。</td>
</tr>
<tr>
<td><code v-pre>pointsAtX</code></td>
<td>number</td>
<td>定义光源在坐标系中X轴的位置。</td>
</tr>
<tr>
<td><code v-pre>pointsAtY</code></td>
<td>number</td>
<td>定义光源在坐标系中Y轴的位置。</td>
</tr>
<tr>
<td><code v-pre>pointsAtZ</code></td>
<td>number</td>
<td>定义光源在坐标系中Z轴的位置。</td>
</tr>
<tr>
<td><code v-pre>specularExponent</code></td>
<td>number</td>
<td>定义光源的高光指数，决定高光的大小和亮度。</td>
</tr>
<tr>
<td><code v-pre>limitingConeAngle</code></td>
<td>number</td>
<td>定义光源的光锥角度，决定光线的散射范围</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p><code v-pre>x</code>、<code v-pre>y</code>、<code v-pre>z</code>和<code v-pre>pointsAtX</code>、<code v-pre>pointsAtX</code>、<code v-pre>pointsAtX</code>都是相对于<code v-pre>&lt;filter&gt;</code>元素的原始单位属性所定义的坐标系统来描述光源和光源指向的点的位置。它们的区别在于：前三者定义了光源在<code v-pre>&lt;filter&gt;</code>元素上的<code v-pre>primitiveUnits</code>属性所定义的坐标系统中对应轴的位置。也就是说，前三者确定了光源在<code v-pre>&lt;filter&gt;</code>元素上的对应位置。</p>
<p>后三者表示光源指向的点在<code v-pre>&lt;filter&gt;</code>元素上的<code v-pre>primitiveUnits</code>属性所建立的坐标系统中对应轴的位置。也就是说，后三者确定了光源指向的点在<code v-pre>&lt;filter&gt;</code>元素上的对应位置。</p>
</li>
</ul>
<h3 id="_10-19-5-使用示例" tabindex="-1"><a class="header-anchor" href="#_10-19-5-使用示例"><span>10.19.5 使用示例</span></a></h3>
<p>注意：<code v-pre>&lt;feSpecularLighting&gt;</code>通常需要与其他滤镜元素配合使用，在下面的中<code v-pre>&lt;feDiffuseLighting&gt;</code>和<code v-pre>&lt;feDiffuseLighting&gt;</code>都会与<code v-pre>&lt;feComposite&gt;</code>一起使用，方便区分。</p>
<ol>
<li><code v-pre>&lt;feDiffuseLighting&gt;</code>与点光源、平行光源和聚光灯光源：</li>
</ol>
<ul>
<li>示例代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lighting1<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feDiffuseLighting</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fePointLight</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">z</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feDiffuseLighting</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feComposite</span></span>
<span class="line">            <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">operator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arithmetic<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k3</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k4</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lighting2<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feDiffuseLighting</span> <span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feDistantLight</span> <span class="token attr-name">azimuth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>45<span class="token punctuation">"</span></span> <span class="token attr-name">elevation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feDiffuseLighting</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feComposite</span></span>
<span class="line">            <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light2<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">operator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arithmetic<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k3</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k4</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lighting3<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feDiffuseLighting</span> <span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feSpotLight</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>350<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">z</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">specularExponent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> </span>
<span class="line">                <span class="token attr-name">limitingConeAngle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">pointsAtX</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>350<span class="token punctuation">"</span></span> <span class="token attr-name">pointsAtY</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feDiffuseLighting</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feComposite</span></span>
<span class="line">            <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light3<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">operator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arithmetic<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k3</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k4</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>  <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#lighting1)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>  <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#lighting2)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>  <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#lighting3)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/057.png" alt=""></p>
<ol start="2">
<li><code v-pre>&lt;feSpecularLighting&gt;</code>与点光源、平行光源和聚光灯光源：</li>
</ol>
<ul>
<li>示例代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lighting1<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feSpecularLighting</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fePointLight</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">z</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feSpecularLighting</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feComposite</span></span>
<span class="line">            <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">operator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arithmetic<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k3</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k4</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lighting2<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feSpecularLighting</span> <span class="token attr-name">light-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feDistantLight</span> <span class="token attr-name">azimuth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>45<span class="token punctuation">"</span></span> <span class="token attr-name">elevation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>30<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feSpecularLighting</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feComposite</span></span>
<span class="line">            <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light2<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">operator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arithmetic<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k3</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">k4</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lighting3<span class="token punctuation">"</span></span> <span class="token attr-name">result</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feSpecularLighting</span> <span class="token attr-name">light-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feSpotLight</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>350<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">z</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">specularExponent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">limitingConeAngle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> </span>
<span class="line">            <span class="token attr-name">pointsAtX</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>350<span class="token punctuation">"</span></span> <span class="token attr-name">pointsAtY</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feSpecularLighting</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feComposite</span></span>
<span class="line">        <span class="token attr-name">in</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>SourceGraphic<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">in2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>light3<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">operator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>arithmetic<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">k1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">k2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">k3</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">k4</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>  <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#lighting1)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>  <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#lighting2)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/flower.png<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span>  <span class="token attr-name">filter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#lighting3)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/animation/svg/base/image/058.png" alt=""></p>
</div></template>


