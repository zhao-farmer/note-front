<template><div><h1 id="六、html5兼容性处理" tabindex="-1"><a class="header-anchor" href="#六、html5兼容性处理"><span>六、HTML5兼容性处理</span></a></h1>
<ol>
<li>添加元信息，让浏览器处于最优渲染模式。</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line">    <span class="token comment">&lt;!--设置IE总是使用最新的文档模式进行渲染--></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=Edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!--优先使用 webkit ( Chromium ) 内核进行渲染, 针对360等壳浏览器--></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>renderer<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>webkit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用 html5shiv 让低版本浏览器认识 H5 的语义化标签。</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line">    <span class="token comment">&lt;!--[if lt ie 9]></span>
<span class="line">    &lt;script src="../sources/js/html5shiv.js">&lt;/script></span>
<span class="line">    &lt;![endif]--></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>扩展</strong></p>
<ul>
<li>t 小于</li>
<li>lte 小于等于</li>
<li>gt 大于</li>
<li>gte 大于等于</li>
<li>! 逻辑非</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line">    <span class="token comment">&lt;!--[if IE 8]>仅IE8可见&lt;![endif]--></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!--[if</span> <span class="token attr-name">gt</span> <span class="token attr-name">IE</span> <span class="token attr-name">8]</span><span class="token punctuation">></span></span>仅IE8以上可见<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>![endif]—</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!--[if</span> <span class="token attr-name">lt</span> <span class="token attr-name">IE</span> <span class="token attr-name">8]</span><span class="token punctuation">></span></span>仅IE8以下可见<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>![endif]—</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!--[if</span> <span class="token attr-name">gte</span> <span class="token attr-name">IE</span> <span class="token attr-name">8]</span><span class="token punctuation">></span></span>IE8及以上可见<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>![endif]—</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!--[if</span> <span class="token attr-name">lte</span> <span class="token attr-name">IE</span> <span class="token attr-name">8]</span><span class="token punctuation">></span></span>IE8及以下可见<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>![endif]—</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!--[if !IE 8]>非IE8的IE可见&lt;![endif]--></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


