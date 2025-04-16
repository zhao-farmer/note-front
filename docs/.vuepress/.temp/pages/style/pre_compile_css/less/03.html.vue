<template><div><h1 id="三、注释" tabindex="-1"><a class="header-anchor" href="#三、注释"><span>三、注释</span></a></h1>
<p>块式注释和行内注释都可以使用：</p>
<p><strong>编译前LESS</strong></p>
<div class="language-less line-numbers-mode" data-highlighter="prismjs" data-ext="less" data-title="less"><pre v-pre><code><span class="line"><span class="token comment">// less 代码编辑</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* One heck of a block</span>
<span class="line"> * style comment! */</span></span>
<span class="line"> <span class="token variable">@var<span class="token punctuation">:</span></span> red<span class="token punctuation">;</span></span>
<span class="line"> <span class="token comment">// Get in line!</span></span>
<span class="line"> <span class="token variable">@var<span class="token punctuation">:</span></span> white<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>编译后CSS</strong></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 编译后的 css */</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* One heck of a block</span>
<span class="line"> * style comment! */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


