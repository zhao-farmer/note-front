<template><div><h1 id="五、静态资源-public-文件" tabindex="-1"><a class="header-anchor" href="#五、静态资源-public-文件"><span>五、静态资源 - Public 文件</span></a></h1>
<p>你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。</p>
<p>默认的 Public 目录是 .vuepress/public ，可以通过 public 配置项来修改。</p>
<p>在下列这些情况中，你可能会用到它：</p>
<ul>
<li>你可能需要提供一些静态资源，但是它们并不直接被你的 Markdown 文件引用，比如 favicon 和 PWA 图标。</li>
<li>你可能想要托管一些共享的静态资源，甚至可能需要在你的网站外部引用它，比如 Logo 图片。</li>
<li>你可能想在你的 Markdown 内容中通过绝对路径来引入图片。</li>
</ul>
<p>以我们文档的源文件为例，我们把 VuePress 的 Logo 放在了 Public 目录下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">└─ docs</span>
<span class="line">   ├─ .vuepress</span>
<span class="line">   |  └─ public</span>
<span class="line">   |     └─ images</span>
<span class="line">   |        └─ hero.png  # &lt;- Logo 文件</span>
<span class="line">   └─ guide</span>
<span class="line">      └─ assets.md       # &lt;- 我们在这里</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以这样在当前页面引用 Logo ：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">![VuePress Logo](/images/hero.png)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


