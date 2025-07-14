<template><div><h1 id="二、-em和rem" tabindex="-1"><a class="header-anchor" href="#二、-em和rem"><span>二、 em和rem</span></a></h1>
<h2 id="_2-1-em和rem的基本概念" tabindex="-1"><a class="header-anchor" href="#_2-1-em和rem的基本概念"><span>2.1 em和rem的基本概念</span></a></h2>
<p>em和rem都是CSS中的长度单位，用于设置元素的字体大小、高度、宽度等属性。</p>
<ul>
<li>
<p>em是相对单位，相对于父元素的字体大小。如果父元素的字体大小未被指定，则em会相对于浏览器的默认字体大小，通常是16px。例如，如果父元素字体大小是20px，那么“1em”就等于20px，“0.5em”就等于10px。</p>
</li>
<li>
<p>rem是相对单位，和em类似，不过rem是相对于根元素（html）的字体大小，而不是相对于父元素的字体大小。例如，如果html的字体大小是20px，那么“1rem”就等于20px，“0.5rem”就等于10px。</p>
</li>
</ul>
<p><strong>代码示例</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token comment">/* 设置根元素的字体大小为20px */</span></span>
<span class="line">    <span class="token selector">html</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">div</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">/* 2rem = 40px */</span></span>
<span class="line">    <span class="token selector">p</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token comment">/* 2em 的实际大小取决于其父元素div的字体大小，因此是2*40px=80px */</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        这段文字的字体大小是2rem，实际大小为40px。</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这段文字的字体大小是2em，实际大小为80px。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，p元素的字体大小是2em。因为其父元素div的字体大小是40px（2rem），所以2em实际上等于80px。因此，用em和rem作为长度单位可以方便地实现相对布局和响应式设计。</p>
<p>使用em和rem的好处是能够让网页在不同的设备和浏览器上更好地显示，并且可以轻松地实现响应式设计。</p>
<h2 id="_2-2-vscode插件px-to-rem" tabindex="-1"><a class="header-anchor" href="#_2-2-vscode插件px-to-rem"><span>2.2 vscode插件px to rem</span></a></h2>
<p>vscode中推荐使用px to rem插件</p>
<p><img src="/style/records_layout/layout_phone/001.png" alt=""></p>
<p>px与rem都是CSS样式中的长度单位。在不同的设备和显示屏上，px的尺寸是固定的，而rem的尺寸是相对的，可以根据网页的根字体大小(root em)进行缩放。在响应式设计中，为了使网页的布局和元素能在不同大小的设备上自适应显示，通常会使用rem作为长度单位。</p>
<p>VSCode插件px to rem可以帮助你在编写CSS样式时自动将px单位转换为rem单位，使得你无需手动进行计算和转换，提高了编程的效率。只需要你在设置中定义好根字体大小，该插件就会根据这个大小将你输入的px值自动转换为对应的rem值。</p>
<ul>
<li>配置转换率</li>
</ul>
<p><img src="/style/records_layout/layout_phone/002.png" alt="">
<img src="/style/records_layout/layout_phone/003.png" alt=""></p>
<p>在这里配置转换单位，就是1rem等于多少px,一般设置为100方便计算。</p>
<ul>
<li>转换快捷键 alt + z</li>
</ul>
<p><img src="/style/records_layout/layout_phone/004.png" alt=""></p>
<p>使用也很简单，将你写的px代码选中，再按alt+z就可以转换成rem拉。</p>
<h2 id="_2-3-动态使用rem" tabindex="-1"><a class="header-anchor" href="#_2-3-动态使用rem"><span>2.3 动态使用rem</span></a></h2>
<p>因为rem的基准点是根元素html的字体大小，因此我们只需要设置不同屏幕的html的font-size大小不一样就可以达到不同屏幕的适配了。</p>
<h3 id="_2-3-1-rem与媒体查询" tabindex="-1"><a class="header-anchor" href="#_2-3-1-rem与媒体查询"><span>2.3.1 rem与媒体查询</span></a></h3>
<p>使用rem配合媒体查询可以适配多个终端</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 320px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/*font-size: 100/750 * 320px*/</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 42.67px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 414px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 55.2px<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 64px<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 640px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 85.33px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 750px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用媒体查询适配，速度快。</p>
<p>缺点：适配多个终端时，需要添加响应的代码</p>
<h3 id="_2-3-2-rem与javascript" tabindex="-1"><a class="header-anchor" href="#_2-3-2-rem与javascript"><span>2.3.2 rem与javascript</span></a></h3>
<p>通过javascript获取可视区的宽度，计算font-size的值，也可以适配多个终端。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> base <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> design <span class="token operator">=</span> <span class="token number">750</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">responsive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> pageWidth <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span> pageWidth <span class="token operator">&lt;=</span> <span class="token number">320</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    pageWidth <span class="token operator">=</span> <span class="token number">320</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span> pageWidth <span class="token operator">>=</span> <span class="token number">750</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    pageWidth <span class="token operator">=</span> <span class="token number">750</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">var</span> size <span class="token operator">=</span> base <span class="token operator">/</span> design <span class="token operator">*</span> pageWidth<span class="token punctuation">;</span></span>
<span class="line">  document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> size <span class="token operator">+</span> <span class="token string">"px"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">responsive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resize"</span><span class="token punctuation">,</span> responsive<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：直接适配所有的终端</p>
<p>缺点：必须在页面加载之前设置html的font-size值，不然会出现文字大小调动的情况。</p>
</div></template>


