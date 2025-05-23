<template><div><h1 id="三、-vw" tabindex="-1"><a class="header-anchor" href="#三、-vw"><span>三、 vw</span></a></h1>
<h2 id="_3-1-vw基本概念" tabindex="-1"><a class="header-anchor" href="#_3-1-vw基本概念"><span>3.1 vw基本概念</span></a></h2>
<p>vw是在CSS中使用的相对单位，全称是viewport width，即视口宽度。1vw等于视口宽度的1%。</p>
<p>在响应式设计中，vw单位被广泛用于创建可在不同屏幕尺寸和分辨率下正常工作的布局。因为它们是相对于视口尺寸的，而不是像像素那样是固定的，所以在改变视口大小时，使用vw单位的元素可以自动调整大小，以保持在视口中的相对位置和尺寸。</p>
<p>例如，如果你将一个元素的宽度设置为50vw，那么无论视口的宽度如何，这个元素的宽度始终为视口宽度的50%。这使得在不同设备和屏幔尺寸上保持布局的一致性成为可能。</p>
<h2 id="_3-2-px转换vw" tabindex="-1"><a class="header-anchor" href="#_3-2-px转换vw"><span>3.2 px转换vw</span></a></h2>
<p>在不同的设备和视口中，1vw的尺寸表示的是视口宽度的1%，vw单位能帮助创建更加灵活和可适应的布局。</p>
<p>将px转换vw可以手动计算，也可以通过在线工具或插件自动转换。</p>
<ul>
<li>
<p>手动计算:</p>
<ul>
<li>转化的公式是: 1vw = 100 / 设计稿的宽度(px)。</li>
<li>所以px转为vw就是: 元素的宽度(px) * (100 / 设计稿的宽度(px)) = 元素的宽度(vw)。例如设计稿的宽度是750px，那么元素的宽度20px就可以转为: 20 * (100 / 750) = 2.667vw。</li>
</ul>
</li>
<li>
<p>在线工具:
可以使用在线单位转换工具，例如PX to VW/VH转换工具。</p>
</li>
<li>
<p>插件:
一些前端开发工具和IDE提供了插件支持自动转换，例如VSCode就有px to vw等插件。</p>
<p><img src="/style/records_layout/layout_phone/005.png" alt=""></p>
<p>这个使用方式和px-to-rem差不多，就不多赘述了。</p>
</li>
</ul>
<p>需要注意，vw单位不一定在所有浏览器和设备上都能完美支持，可以根据实际需求选择使用。</p>
<h2 id="_3-3-实际应用" tabindex="-1"><a class="header-anchor" href="#_3-3-实际应用"><span>3.3 实际应用</span></a></h2>
<p>在移动端开发页面时，vw（Viewport-Width）是一种相对于视口宽度的单位，可以用来实现响应式布局。下面是一个完整案例，具体步骤如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>使用vw实现响应式布局<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">h1</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">font-size</span><span class="token punctuation">:</span> 6vw<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin-top</span><span class="token punctuation">:</span> 3vw<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">font-size</span><span class="token punctuation">:</span> 4vw<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">line-height</span><span class="token punctuation">:</span> 6vw<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>使用vw实现响应式布局<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是一段文字，会随着屏幕大小的变化而改变大小。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中，h1的字体大小和margin-top都是使用vw作为单位的，表示它们的大小和视口宽度成比例。p元素的字体大小和行高也是使用vw单位的，这样就可以实现在不同屏幕大小下，文字大小和行距的适配。</p>
</div></template>


