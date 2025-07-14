<template><div><h1 id="错误类型" tabindex="-1"><a class="header-anchor" href="#错误类型"><span>错误类型</span></a></h1>
<h2 id="_1-node无法下载electron" tabindex="-1"><a class="header-anchor" href="#_1-node无法下载electron"><span>1. node无法下载electron</span></a></h2>
<ol>
<li>
<p>在目录下新建 <code v-pre>.npmrc</code> 文件</p>
</li>
<li>
<p>填充以下内容</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token constant">ELECTRON_MIRROR</span><span class="token operator">=</span><span class="token string">"https://npmmirror.com/mirrors/electron/"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


