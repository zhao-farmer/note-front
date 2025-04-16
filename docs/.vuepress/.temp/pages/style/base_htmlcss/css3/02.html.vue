<template><div><h1 id="二、css3私有前缀" tabindex="-1"><a class="header-anchor" href="#二、css3私有前缀"><span>二、CSS3私有前缀</span></a></h1>
<h2 id="_2-1-什么是私有前缀" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是私有前缀"><span>2.1 什么是私有前缀</span></a></h2>
<p>如下代码中的 -webkit- 就是私有前缀</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">div</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span>400px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span>    </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-为什么要有私有前缀" tabindex="-1"><a class="header-anchor" href="#_2-2-为什么要有私有前缀"><span>2.2 为什么要有私有前缀</span></a></h2>
<ul>
<li>W3C 标准所提出的某个 CSS 特性，在被浏览器正式支持之前，浏览器厂商会根据浏览器的内核，使用私有前缀来测试该 CSS 特性，在浏览器正式支持该 CSS 特性后，就不需要私有前缀了。</li>
<li>举个例子：</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">-webkit-border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-moz-border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-ms-border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-o-border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>查询 CSS3 兼容性的网站：https://caniuse.com/</li>
</ul>
<h2 id="_2-3-常见浏览器私有前缀" tabindex="-1"><a class="header-anchor" href="#_2-3-常见浏览器私有前缀"><span>2.3 常见浏览器私有前缀</span></a></h2>
<ul>
<li>Chrome 浏览器： -webkit</li>
<li>Safari 浏览器： -webkit</li>
<li>Firefox 浏览器： -moz</li>
<li>Edge 浏览器： -webkit</li>
<li>旧 Opera 浏览器： -o</li>
<li>旧 IE 浏览器： -ms</li>
</ul>
<p><strong>注意</strong>：</p>
<blockquote>
<p>我们在编码时，不用过于关注浏览器私有前缀，不用绞尽脑汁的去记忆，也不用每个都去查询，因
为常用的 CSS3 新特性，主流浏览器都是支持的，即便是为了老浏览器而加前缀，我们也可以借助
现代的构建工具，去帮我们添加私有前缀。</p>
</blockquote>
</div></template>


