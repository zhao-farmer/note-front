<template><div><h1 id="object-fit和object-position" tabindex="-1"><a class="header-anchor" href="#object-fit和object-position"><span>object-fit和object-position</span></a></h1>
<h2 id="序言" tabindex="-1"><a class="header-anchor" href="#序言"><span>序言</span></a></h2>
<p>img元素加上固定宽高后图片被拉伸变形</p>
<p>如果我们需要让该元素占据固定的宽高大小，而又不希望图片被拉伸变形，可以在img标签外套一个div（或其他父级元素），然后将固定的宽高加在父级元素上，这样img标签本身就可以只设定宽或高，让另一边自适应。除此之外，还可以将该图片作为元素背景，然后通过background-size和background-position等背景相关样式属性来设置该图片显示的位置和大小。
但这些方法要么看上去颇为不便，要么并不适用于video标签中的视频元素。
为了更好且更方便地解决这类问题，我们可以使用接下来的这两个css属性——object-fit和object-position。</p>
<h3 id="原图展示" tabindex="-1"><a class="header-anchor" href="#原图展示"><span>原图展示</span></a></h3>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/01.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：
<img src="/style/css_records/object-fit/001.png" alt=""></p>
<h3 id="拉伸后的效果" tabindex="-1"><a class="header-anchor" href="#拉伸后的效果"><span>拉伸后的效果</span></a></h3>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/01.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：
<img src="/style/css_records/object-fit/002.png" alt=""></p>
<h2 id="_1-object-fit" tabindex="-1"><a class="header-anchor" href="#_1-object-fit"><span>1 object-fit</span></a></h2>
<p>css属性object-fit一般用在img或video标签上，定义了元素内容要如何适应容器的宽高，IE15及以前的版本不支持此属性。</p>
<h3 id="_1-1-object-fit-fill" tabindex="-1"><a class="header-anchor" href="#_1-1-object-fit-fill"><span>1.1 <code v-pre>object-fit: fill;</code></span></a></h3>
<p>默认值，内容可能会被拉伸以完全适应容器的宽高。和不使用该属性的效果一致。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-fit</span><span class="token punctuation">:</span> fill<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/002.png" alt=""></p>
<blockquote>
<p><code v-pre>object-fit: fill;</code>效果与不使用该属性一致，图片会被拉伸以完全适应元素宽高</p>
</blockquote>
<h3 id="_1-2-object-fit-cover" tabindex="-1"><a class="header-anchor" href="#_1-2-object-fit-cover"><span>1.2 <code v-pre>object-fit: cover;</code></span></a></h3>
<p>保持内容的原有宽高比例进行缩放，让图片的内容能够完全覆盖元素容器，图片可能会被剪切掉一部分。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-fit</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/003.png" alt=""></p>
<blockquote>
<p>可以看见图片没有被拉伸，显示出来的部分在原图中处于中间位置</p>
</blockquote>
<h3 id="_1-3-object-fit-contain" tabindex="-1"><a class="header-anchor" href="#_1-3-object-fit-contain"><span>1.3 <code v-pre>object-fit: contain;</code></span></a></h3>
<p>保持内容原有宽高比例进行缩放，使内容能够完全呈现出来。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/004.png" alt=""></p>
<blockquote>
<p>图片会在img标签内按原有比例进行缩放，使图片全部显示出来，可以看见图片默认显示在容器正中间</p>
</blockquote>
<h3 id="_1-4-object-fit-scale-down" tabindex="-1"><a class="header-anchor" href="#_1-4-object-fit-scale-down"><span>1.4 <code v-pre>object-fit: scale-down;</code></span></a></h3>
<p>保持内容的原有宽高比例进行缩放，显示的效果将与属性值分别为none和contain时内容尺寸较小的那个相同（contain的效果见上方，none的效果见下方）。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-fit</span><span class="token punctuation">:</span> scale-down<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/004.png" alt=""></p>
<blockquote>
<p>当object-fit属性值为contain时图片的显示尺寸更小，所以scale-down属性值与contain属性值效果相同</p>
</blockquote>
<h3 id="_1-5-object-fit-none" tabindex="-1"><a class="header-anchor" href="#_1-5-object-fit-none"><span>1.5 <code v-pre>object-fit: none;</code></span></a></h3>
<p>保持元素内容原有的尺寸宽高，不会进行缩放，元素内容可能填不满容器，也可能会被剪切掉一部分。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-fit</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/005.png" alt=""></p>
<blockquote>
<p>内容保持了原有的宽高尺寸，因为原图过大所以没有完全显示出来，显示出来的部分在原图中处于中间位置</p>
</blockquote>
<h3 id="_1-6-object-fit-initial" tabindex="-1"><a class="header-anchor" href="#_1-6-object-fit-initial"><span>1.6 <code v-pre>object-fit: initial;</code></span></a></h3>
<p>将该属性的属性值设为默认值（object-fit属性的默认属性值是fill）。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-fit</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/002.png" alt=""></p>
<blockquote>
<p>将object-fit设为默认值，显示效果与fill相同</p>
</blockquote>
<h3 id="_1-7-object-fit-inherit" tabindex="-1"><a class="header-anchor" href="#_1-7-object-fit-inherit"><span>1.7 <code v-pre>object-fit: inherit;</code></span></a></h3>
<p>将该属性的属性值设为默认值（object-fit属性的默认属性值是fill）。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">object-fit</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../images/01.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/004.png" alt=""></p>
<blockquote>
<p>子元素img的object-fit属性设为inherit后，从父元素继承了该属性的值</p>
</blockquote>
<h2 id="_2-object-position" tabindex="-1"><a class="header-anchor" href="#_2-object-position"><span>2 object-position</span></a></h2>
<p>object-position属性常与object-fit一起使用，一般用于img和video标签，它规定了元素内容在容器内显示的位置，默认为居中。该属性同样不被IE15及以前的浏览器支持。</p>
<h3 id="_2-1-x" tabindex="-1"><a class="header-anchor" href="#_2-1-x"><span>2.1 x%</span></a></h3>
<p>可以用百分比来表示内容在容器中显示的位置。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">object-position</span><span class="token punctuation">:</span> 100% 0%<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../images/01.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/006.png" alt=""></p>
<blockquote>
<p>object-fit属性值为“contain”时，内容的高撑满容器，此时object-position的第二个表示y轴位置的值无论是百分之几都不会影响内容显示的位置（但如果是具体的距离则可以）。同理，当object-fit值为“cover”时，内容的宽撑满容器，object-position的第一个表示x轴位置的值无论是百分之几都不会影响内容显示的位置，这里不再做测试。</p>
</blockquote>
<h3 id="_2-2-left-right-top-bottom-center" tabindex="-1"><a class="header-anchor" href="#_2-2-left-right-top-bottom-center"><span>2.2 left/right/top/bottom/center</span></a></h3>
<p>可以使用方位值进行设置。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-position</span><span class="token punctuation">:</span> right bottom<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/006.png" alt=""></p>
<blockquote>
<p>同百分比一样，当内容的高（或宽）撑满容器的高（或宽）时，第二个（或第一个）方位值不会影响内容显示的位置。这里第二个方位值无论是“top”还是“bottom”、“center”，图片的位置都不会发生改变。</p>
</blockquote>
<h3 id="_2-3-具体的距离-包括数值和单位" tabindex="-1"><a class="header-anchor" href="#_2-3-具体的距离-包括数值和单位"><span>2.3 具体的距离（包括数值和单位）</span></a></h3>
<p>还可以为内容的位置指定具体的x轴和y轴上的距离（包含数值和单位），以容器的左上角为(0,0)坐标，向右和向下分别为x轴和y轴的正半轴，可以设置负值。内容超出容器的部分可能会被剪切。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-position</span><span class="token punctuation">:</span> 50px 50px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/007.png" alt=""></p>
<blockquote>
<p>使用具体的距离进行设置可以准确明了的定位内容在x轴和y轴上的位置，内容超出容器的部分会被剪切</p>
</blockquote>
<h3 id="_2-4-混合使用" tabindex="-1"><a class="header-anchor" href="#_2-4-混合使用"><span>2.4 混合使用</span></a></h3>
<p>指定内容在容器内的具体位置时，上述三种位置表示方法可以混合使用。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-position</span><span class="token punctuation">:</span> 50px 50px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/008.png" alt=""></p>
<blockquote>
<p>不同的位置表示方法可以混合使用，一样会生效</p>
</blockquote>
<h3 id="_2-5-initial" tabindex="-1"><a class="header-anchor" href="#_2-5-initial"><span>2.5 initial</span></a></h3>
<p>设为默认值，object-position属性的默认值是“50% 50%”。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">object-position</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/008.png" alt=""></p>
<blockquote>
<p>object-position属性值默认为居中显示</p>
</blockquote>
<h3 id="_2-6-inherit" tabindex="-1"><a class="header-anchor" href="#_2-6-inherit"><span>2.6 inherit</span></a></h3>
<p>从父元素继承属性值。</p>
<p><strong>代码</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">div</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">object-position</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">object-fit</span><span class="token punctuation">:</span> contain<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">object-position</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../images/01.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong>：</p>
<p><img src="/style/css_records/object-fit/010.png" alt=""></p>
<blockquote>
<p>img标签可以从父元素div处继承object-position的属性值，如图，图片不再默认居中显示，而是和div元素样式中定义的一样靠左显示</p>
</blockquote>
</div></template>


