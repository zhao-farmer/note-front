<template><div><h1 id="ruby-注释读音" tabindex="-1"><a class="header-anchor" href="#ruby-注释读音"><span>ruby 注释读音</span></a></h1>
<p>在HTML中，<code v-pre>&lt;ruby&gt;</code> 标签是用来显示东亚文字（如中文、日文、韩文等）的注音或注释的。它通常与 <code v-pre>&lt;rt&gt;</code>（Ruby Text）标签一起使用，用来标注 <code v-pre>&lt;ruby&gt;</code> 标签中的文本。<code v-pre>&lt;rt&gt;</code> 标签包含了注释文本，而 <code v-pre>&lt;ruby&gt;</code> 标签则将注释文本正确地显示在主文本的上方或下方，具体取决于浏览器的默认样式。</p>
<h2 id="_1、基本用法" tabindex="-1"><a class="header-anchor" href="#_1、基本用法"><span>1、基本用法</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ruby</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rb</span><span class="token punctuation">></span></span>漢字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rb</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rt</span><span class="token punctuation">></span></span>かんじ<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rt</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ruby</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code v-pre>&lt;rb&gt;</code> 标签包含了需要注音的汉字“漢字”，而 <code v-pre>&lt;rt&gt;</code> 标签包含了汉字的罗马字注音“かんじ”。</p>
<h2 id="_2、自定义样式" tabindex="-1"><a class="header-anchor" href="#_2、自定义样式"><span>2、自定义样式</span></a></h2>
<p>虽然 <code v-pre>&lt;ruby&gt;</code> 标签本身提供了基本的布局支持，但你可以通过CSS来自定义注释文本的显示方式，例如改变注释的位置（上方或下方）、字体大小等。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">  <span class="token selector">ruby</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">ruby-position</span><span class="token punctuation">:</span> over<span class="token punctuation">;</span> <span class="token comment">/* 或者 under */</span></span>
<span class="line">    <span class="token property">ruby-align</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span> <span class="token comment">/* 或者 center, space-between, space-around */</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">rt</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span> <span class="token comment">/* 注释文本字体大小 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token comment">/* 注释文本颜色 */</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ruby</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rb</span><span class="token punctuation">></span></span>漢字<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rb</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rt</span><span class="token punctuation">></span></span>かんじ<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rt</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ruby</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、使用场景" tabindex="-1"><a class="header-anchor" href="#_3、使用场景"><span>3、使用场景</span></a></h2>
<p><code v-pre>&lt;ruby&gt;</code> 标签特别适用于需要为汉字或其他东亚文字提供注音或注释的网页，比如在显示古籍、学术论文或任何需要辅助说明的文本时。它帮助用户更好地理解文本内容，尤其是在阅读不熟悉的文字时。</p>
<p>注意事项
在使用 <code v-pre>&lt;ruby&gt;</code> 和 <code v-pre>&lt;rt&gt;</code> 时，确保你的内容主要是东亚文字，因为这不是一个通用标签，主要用于东亚文字的注音或注释。</p>
<p>对于非东亚文字或不需要注音的情况，应避免使用 <code v-pre>&lt;ruby&gt;</code> 和 <code v-pre>&lt;rt&gt;</code>，因为它们可能不会按预期工作或显示。</p>
<p>浏览器的支持程度可能会有所不同，尽管现代浏览器大多支持这些标签，但在一些较旧的浏览器中可能不完全支持或者样式表现不一致。</p>
<p>通过合理使用 <code v-pre>&lt;ruby&gt;</code> 和 <code v-pre>&lt;rt&gt;</code> 标签，你可以增强东亚文字在网页上的可读性和易用性。</p>
</div></template>


