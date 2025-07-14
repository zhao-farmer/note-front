<template><div><h1 id="颜色混合-mix-blend-mode" tabindex="-1"><a class="header-anchor" href="#颜色混合-mix-blend-mode"><span>颜色混合 mix-blend-mode</span></a></h1>
<h2 id="_1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-介绍"><span>1. 介绍</span></a></h2>
<blockquote>
<p>mix-blend-mode 是一种 CSS 属性，它定义了一个元素的颜色如何与其父元素的颜色以及兄弟元素的颜色混合。它允许您创建令人惊艳的视觉效果，可以用于创建半透明效果、添加阴影、制作图片蒙版和很多其他效果。</p>
</blockquote>
<p>具体来说，mix-blend-mode 定义了两个元素之间的颜色混合模式。</p>
<p><strong>元素写入</strong>：最上层的图层，与背景颜色进行混合</p>
<ol>
<li><code v-pre>normal</code>
默认值。使用正常的颜色混合模式。</li>
<li><code v-pre>multiply</code>
将两个颜色的值相乘，得到一个更暗的颜色。这通常用于创建阴影效果。</li>
<li><code v-pre>screen</code>
将两个颜色的值相加，然后减去相乘的值，得到一个更亮的颜色。这通常用于创建高光效果。</li>
<li><code v-pre>overlay</code>
根据背景颜色的亮度来选择颜色混合模式。如果背景颜色较暗，则使用 multiply 模式；如果背景颜色较亮，则使用 screen 模式。</li>
<li><code v-pre>darken</code>
将两个颜色的值比较，使用较暗的那个颜色。</li>
<li><code v-pre>lighten</code>
将两个颜色的值比较，使用较亮的那个颜色。</li>
<li><code v-pre>color-dodge</code>
将前景色分解为 RGB 分量，并将每个分量分别除以（1 减去背景色的对应分量）。然后将每个分量限制在 0 到 1 之间，并使用限制后的前景色作为混合色。</li>
<li><code v-pre>color-burn</code>
将前景色分解为 RGB 分量，并将每个分量分别除以背景色的对应分量。然后将每个分量限制在 0 到 1 之间，并使用限制后的前景色作为混合色。</li>
<li><code v-pre>difference</code>
将前景色减去背景色的值，并取绝对值。这会导致一个反相的效果。</li>
<li><code v-pre>exclusion</code>
将前景色和背景色的值相加，然后减去相乘的值的两倍。这通常用于创建反相效果。</li>
<li><code v-pre>hue</code>
将前景色的色相（Hue）与背景色的饱和度（Saturation）和亮度（Lightness）混合。这可以用于在不改变亮度和饱和度的情况下改变颜色。</li>
<li><code v-pre>saturation</code>
将前景色的饱和度与背景色的色相和亮度混合。这可以用于在不改变颜色的情况下改变饱和度。</li>
<li><code v-pre>color</code>
将前景色的色相、饱和度和亮度与背景色混合。这可以用于在改变所有颜色属性的情况下改变前景色的颜色。</li>
<li><code v-pre>luminosity</code>
将前景色的亮度与背景色的色相和饱和度混合。这可以用于在不改变颜色的情况下改变亮度。</li>
</ol>
<blockquote>
<p><code v-pre>mix-blend-mode</code>属性可以应用于任何具有背景颜色或背景图像的元素，包括文本、图像和 SVG 图形。通常情况下，您会将 mix-blend-mode 应用于子元素，使其与父元素或其他兄弟元素混合。</p>
</blockquote>
<h2 id="_2-混合模式算法" tabindex="-1"><a class="header-anchor" href="#_2-混合模式算法"><span>2. 混合模式算法</span></a></h2>
<p>在混合模式中，元素的颜色值可以是任何一种表示颜色的方式，包括十六进制值、RGB值、RGBA值等。当进行混合计算时，CSS会将两个元素的颜色值转换成标准的RGBA表示方式，并根据混合模式算法对这两个颜色值进行计算，最终生成一个新的RGBA颜色值。
混合模式中的算法涉及到了数学计算，不同的算法使用不同的计算公式。以 multiply 算法为例，它的计算公式是将两个颜色值的每个通道（即红、绿、蓝、透明度四个通道）分别相乘，得到新的颜色值的每个通道。</p>
<ul>
<li>
<p><code v-pre>rgb(255,255,0)</code>与一个<code v-pre>rgb(0,255,0)</code>相加
两个颜色值相加通常是通过混合模式中的color算法实现的。这个算法将两个颜色值的每个通道（即红、绿、蓝三个通道）进行相加，然后将结果截取到最大值255以内，得到新的颜色值的每个通道。如果通道相加的结果超过了255，则将结果截取到255。因为每个通道的值都在0-255之间，所以相加的结果也应该在这个范围内。
因此，将<code v-pre>rgb(255, 255, 0)</code>与<code v-pre>rgb(0, 255, 0)</code>相加的结果为<code v-pre>rgb(255, 255, 0)</code>，因为红色通道相加为255，绿色通道相加为255，蓝色通道相加为0，符合上述算法。</p>
</li>
<li>
<p><code v-pre>rgb(255,255,0)</code>与一个<code v-pre>rgb(0,255,0)</code>相乘
两个颜色值相乘通常是通过混合模式中的multiply算法实现的。这个算法将两个颜色值的每个通道（即红、绿、蓝三个通道）进行相乘，然后将结果除以255，得到新的颜色值的每个通道。如果通道相乘的结果超过了255，则将结果除以255后截取到1以内。
因此，将<code v-pre>rgb(255, 255, 0)</code>与<code v-pre>rgb(0, 255, 0)</code>相乘的结果为<code v-pre>rgb(0, 255, 0)</code>，因为红色通道相乘为0，绿色通道相乘为255，蓝色通道相乘为0，符合上述算法。</p>
</li>
</ul>
<h2 id="_3-案例演示" tabindex="-1"><a class="header-anchor" href="#_3-案例演示"><span>3.案例演示</span></a></h2>
<p>以下用几个简单的例子来用一下比较常用的属性值</p>
<p><strong>原图</strong>
<img src="/style/css_records/mix-blend-mode/001.png" alt=""></p>
<ol>
<li>mix-blend-mode: multiply;
此属性值会将两个图层的颜色值相乘，产生一种暗色调的效果。以下是一个简单的例子：</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.parent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'background-image.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.child</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'foreground-image.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> multiply<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/style/css_records/mix-blend-mode/002.png" alt=""></p>
<ol start="2">
<li>mix-blend-mode: screen;
此属性值会将两个图层的颜色值进行屏幕混合，产生一种亮色调的效果。以下是一个简单的例子：</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.parent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'background-image.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.child</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'foreground-image.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> screen<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/style/css_records/mix-blend-mode/003.png" alt=""></p>
<ol start="3">
<li>mix-blend-mode: overlay;
此属性值会将两个图层进行叠加混合，产生一种高亮度的效果。以下是一个简单的例子：</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.parent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'background-image.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.child</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'foreground-image.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> overlay<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/style/css_records/mix-blend-mode/004.png" alt=""></p>
<ol start="4">
<li>mix-blend-mode: difference;
此属性值会将两个图层的颜色值进行差值计算，产生一种反色效果。以下是一个简单的例子：</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.parent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'background-image.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.child</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'foreground-image.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> difference<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/style/css_records/mix-blend-mode/005.png" alt=""></p>
<ol start="5">
<li>mix-blend-mode: hue;
此属性值会将两个图层的色相进行混合，产生一种颜色平衡的效果。以下是一个简单的例子：</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.parent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'background-image.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.child</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'foreground-image.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> hue<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/style/css_records/mix-blend-mode/006.png" alt=""></p>
<ol start="6">
<li>mix-blend-mode: luminosity;
此属性值会将两个图层的亮度进行混合，产生一种亮度平衡的效果。以下是一个简单的例子：</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.parent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'background-image.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.child</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'foreground-image.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> luminosity<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/style/css_records/mix-blend-mode/007.png" alt=""></p>
<ol start="7">
<li>mix-blend-mode: color-dodge;
此属性值会将两个图层的颜色值进行颜色减淡计算，产生一种颜色亮度较高的效果。以下是一个简单的例子：</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.parent</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'background-image.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.child</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'foreground-image.png'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">mix-blend-mode</span><span class="token punctuation">:</span> color-dodge<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/style/css_records/mix-blend-mode/008.png" alt=""></p>
</div></template>


