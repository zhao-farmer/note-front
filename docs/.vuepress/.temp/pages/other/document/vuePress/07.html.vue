<template><div><h1 id="七、其他设置记录" tabindex="-1"><a class="header-anchor" href="#七、其他设置记录"><span>七、其他设置记录</span></a></h1>
<h2 id="_7-1-设置内容宽度" tabindex="-1"><a class="header-anchor" href="#_7-1-设置内容宽度"><span>7.1 设置内容宽度</span></a></h2>
<p>过以下几种方式来实现：</p>
<ol>
<li>自定义CSS</li>
</ol>
<p>你可以通过添加自定义CSS来覆盖VuePress的默认样式。在VuePress中，你可以在.vuepress/styles/index.styl（如果你使用的是Stylus）或.vuepress/styles/index.scss（如果你使用的是SCSS）文件中添加自定义样式。</p>
<p>例如，如果你想设置内容的最大宽度，可以添加如下CSS：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.vp-page>div</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">max-width</span><span class="token punctuation">:</span> 800px <span class="token important">!important</span><span class="token punctuation">;</span> <span class="token comment">/* 设置最大宽度 */</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token comment">/* 水平居中 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确保你的路径是正确的，并且文件存在。如果不存在，你可以创建一个。</p>
<ol start="2">
<li>使用全局样式文件</li>
</ol>
<p>如果你不想修改默认的样式文件，也可以在你的项目中创建一个全局样式文件（例如custom.css），然后在.vuepress/config.js中引入它。</p>
<p>首先，创建一个全局样式文件，例如在docs/.vuepress/public目录下创建custom.css文件，并添加你的CSS代码：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.vp-page>div</span>  <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">max-width</span><span class="token punctuation">:</span> 800px <span class="token important">!important</span><span class="token punctuation">;</span> <span class="token comment">/* 设置最大宽度 */</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token comment">/* 水平居中 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在.vuepress/config.js中添加以下代码来引入这个CSS文件：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">'link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">'stylesheet'</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">'/custom.css'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在Markdown文件中使用内联样式</li>
</ol>
<p>你也可以在Markdown文件中直接使用内联样式来设置内容的宽度。这不是一个推荐的做法，因为它会使你的内容与样式紧密耦合，不利于维护。但是，如果你只是想临时测试或快速调整，可以这样做：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.vp-page>div</span>  <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">max-width</span><span class="token punctuation">:</span> 800px <span class="token important">!important</span><span class="token punctuation">;</span> <span class="token comment">/* 设置最大宽度 */</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span> <span class="token comment">/* 水平居中 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


