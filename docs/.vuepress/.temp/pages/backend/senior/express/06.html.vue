<template><div><h1 id="六、静态资源" tabindex="-1"><a class="header-anchor" href="#六、静态资源"><span>六、静态资源</span></a></h1>
<p>通过 Express 内置的 express.static 可以方便地托管静态文件，例如图片、CSS、JavaScript 文件等。
将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问了。例如，假设在 public 目录放置了图片、CSS 和 JavaScript 文件，你就可以：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//直接将public里的index.html当成/的网页</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，public 目录下面的文件就可以访问了。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">http://localhost:3000/images/kitten.jpg</span>
<span class="line">http://localhost:3000/css/style.css</span>
<span class="line">http://localhost:3000/js/app.js</span>
<span class="line">http://localhost:3000/images/bg.png</span>
<span class="line">http://localhost:3000/hello.html</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。
如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'files'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件。
如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录（即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/static'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>现在，你就可以通过带有 “/static” 前缀的地址来访问 public 目录下面的文件了。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">http://localhost:3000/static/images/kitten.jpg</span>
<span class="line">http://localhost:3000/static/css/style.css</span>
<span class="line">http://localhost:3000/static/js/app.js</span>
<span class="line">http://localhost:3000/static/images/bg.png</span>
<span class="line">http://localhost:3000/static/hello.html</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态资源种使用其他静态资源</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 直接进行调用</span></span>
<span class="line"><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"/css/index.css"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">    </span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/static'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'public'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 虚拟目录进行调用</span></span>
<span class="line"><span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"/static/css/index.css"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


