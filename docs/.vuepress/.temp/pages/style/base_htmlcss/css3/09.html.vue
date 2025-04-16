<template><div><h1 id="九、-web-字体" tabindex="-1"><a class="header-anchor" href="#九、-web-字体"><span>九、 web 字体</span></a></h1>
<h2 id="_9-1-基本用法" tabindex="-1"><a class="header-anchor" href="#_9-1-基本用法"><span>9.1 基本用法</span></a></h2>
<p>可以通过 <code v-pre>@font-face</code> 指定字体的具体地址，浏览器会自动下载该字体，这样就不依赖用户电脑上的字 体了。</p>
<ul>
<li><strong>语法（简写方式）</strong></li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"情书字体"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'./方正手迹.ttf'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>语法（高兼容性写法）</strong></li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"atguigu"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-display</span><span class="token punctuation">:</span> swap<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'webfont.eot'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token comment">/* IE9 */</span></span>
<span class="line">    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'webfont.eot?#iefix'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'embedded-opentype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* IE6-IE8 */</span></span>
<span class="line">    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'webfont.woff2'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'webfont.woff'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'woff'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox */</span></span>
<span class="line">    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'webfont.ttf'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'truetype'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">/* chrome、firefox、opera、Safari,</span>
<span class="line">    Android*/</span></span>
<span class="line">    <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'webfont.svg#webfont'</span><span class="token punctuation">)</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* iOS 4.1- */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-2-定制字体" tabindex="-1"><a class="header-anchor" href="#_9-2-定制字体"><span>9.2 定制字体</span></a></h2>
<ul>
<li>中文的字体文件很大，使用完整的字体文件不现实，通常针对某几个文字进行单独定制。</li>
<li>可使用阿里 Web 字体定制工具：https://www.iconfont.cn/webfont</li>
</ul>
<h2 id="_9-3字体图标" tabindex="-1"><a class="header-anchor" href="#_9-3字体图标"><span>9.3字体图标</span></a></h2>
<ul>
<li>相比图片更加清晰。 灵活性高，更方便改变大小、颜色、风格等。 兼容性好， IE 也能支持。</li>
<li>字体图标的具体使用方式，每个平台不尽相同，最好参考平台使用指南，视频中我们是以使用最多 的阿里图标库作为演示。 阿里图标官网地址：https://www.iconfont.cn</li>
</ul>
</div></template>


