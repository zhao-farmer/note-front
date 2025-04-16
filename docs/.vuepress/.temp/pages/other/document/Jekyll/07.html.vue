<template><div><h1 id="七、jekyll-主题-chirpy-使用教程" tabindex="-1"><a class="header-anchor" href="#七、jekyll-主题-chirpy-使用教程"><span>七、Jekyll 主题 Chirpy 使用教程</span></a></h1>
<p>jekyll-theme-chirpycotes2020/jekyll-theme-chirpy: 是一个基于 Jekyll 框架的博客主题，可以方便地实现博客的创建和部署等功能。该项目提供了一个简单易用的博客主题，可以方便地实现博客的创建和部署等功能，同时支持多种博客平台和编程语言。项目地址:https://github.com/cotes2020/jekyll-theme-chirpy</p>
<h2 id="_7-1-目录结构" tabindex="-1"><a class="header-anchor" href="#_7-1-目录结构"><span>7.1 目录结构</span></a></h2>
<ol>
<li>Jekyll 主题 Chirpy 的目录结构如下：</li>
</ol>
<div class="language-cobol line-numbers-mode" data-highlighter="prismjs" data-ext="cobol" data-title="cobol"><pre v-pre><code><span class="line">jekyll-theme-chirpy<span class="token operator">/</span></span>
<span class="line">├── _data<span class="token operator">/</span></span>
<span class="line">├── _includes<span class="token operator">/</span></span>
<span class="line">├── _layouts<span class="token operator">/</span></span>
<span class="line">├── _plugins<span class="token operator">/</span></span>
<span class="line">├── _posts<span class="token operator">/</span></span>
<span class="line">├── _sass<span class="token operator">/</span></span>
<span class="line">├── assets<span class="token operator">/</span></span>
<span class="line">│   ├── css<span class="token operator">/</span></span>
<span class="line">│   ├── images<span class="token operator">/</span></span>
<span class="line">│   └── js<span class="token operator">/</span></span>
<span class="line">├── _config<span class="token punctuation">.</span>yml</span>
<span class="line">├── <span class="token punctuation">.</span>gitignore</span>
<span class="line">├── <span class="token punctuation">.</span>jekyll-cache<span class="token operator">/</span></span>
<span class="line">├── <span class="token punctuation">.</span>jekyll-metadata</span>
<span class="line">├── <span class="token number">404</span><span class="token punctuation">.</span>html</span>
<span class="line">├── about<span class="token punctuation">.</span>md</span>
<span class="line">├── Gemfile</span>
<span class="line">├── Gemfile<span class="token punctuation">.</span><span class="token keyword">lock</span></span>
<span class="line">├── <span class="token keyword">index</span><span class="token punctuation">.</span>html</span>
<span class="line">└── README<span class="token punctuation">.</span>md</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>目录介绍</li>
</ol>
<ul>
<li><code v-pre>_data/</code>: 存储站点数据文件，如导航菜单、社交链接等。</li>
<li><code v-pre>_includes/</code>: 包含可重用的 HTML 片段，如页眉、页脚等。</li>
<li><code v-pre>_layouts/</code>: 存储页面布局模板。</li>
<li><code v-pre>_plugins/</code>: 存放自定义的 Jekyll 插件。</li>
<li><code v-pre>_posts/</code>: 存放博客文章的 Markdown 文件。</li>
<li><code v-pre>_sass/</code>: 包含 SASS 样式文件。</li>
<li><code v-pre>assets/</code>: 存放静态资源，如 CSS、JavaScript 和图片。</li>
<li><code v-pre>_config.yml</code>: 项目的配置文件。</li>
<li><code v-pre>.gitignore</code>: 指定 Git 忽略的文件和目录。</li>
<li><code v-pre>.jekyll-cache/</code>: Jekyll 生成的缓存文件夹。</li>
<li><code v-pre>.jekyll-metadata</code>: Jekyll 生成的元数据文件。</li>
<li><code v-pre>404.html</code>: 404 错误页面。</li>
<li><code v-pre>about.md</code>: 关于页面。</li>
<li><code v-pre>Gemfile</code>: 依赖管理文件。</li>
<li><code v-pre>Gemfile.lock</code>: 依赖锁定文件。</li>
<li><code v-pre>index.html</code>: 主页。</li>
<li><code v-pre>README.md</code>: 项目说明文档。</li>
</ul>
<h2 id="_7-2-配置文件与启动文件" tabindex="-1"><a class="header-anchor" href="#_7-2-配置文件与启动文件"><span>7.2 配置文件与启动文件</span></a></h2>
<p>Jekyll 主题 Chirpy 的启动文件主要是 <code v-pre>index.html</code> 和 <code v-pre>_config.yml</code>。</p>
<ol>
<li><code v-pre>index.html</code></li>
</ol>
<p><code v-pre>index.html</code> 是站点的主页文件，它使用 <code v-pre>_layouts</code> 目录下的布局模板来渲染页面内容。通常，<code v-pre>index.html</code> 会包含以下内容：</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line">---</span>
<span class="line">layout: home</span>
<span class="line">---</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这表示主页使用 <code v-pre>home</code> 布局模板。</p>
<ol start="2">
<li><code v-pre>_config.yml</code></li>
</ol>
<p><code v-pre>_config.yml</code> 是 Jekyll 的主要配置文件，包含了站点的全局配置信息，如站点标题、描述、URL、作者信息等。以下是一些常见的配置项：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> 站点标题</span>
<span class="line"><span class="token key atrule">description</span><span class="token punctuation">:</span> 站点描述</span>
<span class="line"><span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">"https://example.com"</span></span>
<span class="line"><span class="token key atrule">author</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> 作者姓名</span>
<span class="line">  <span class="token key atrule">email</span><span class="token punctuation">:</span> 作者邮箱</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3-项目的配置文件" tabindex="-1"><a class="header-anchor" href="#_7-3-项目的配置文件"><span>7.3 项目的配置文件</span></a></h2>
<p><code v-pre>_config.yml</code> 是 Jekyll 主题 Chirpy 的核心配置文件，它包含了站点的各种配置选项。以下是一些重要的配置项：</p>
<ol>
<li>基本配置</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> 站点标题</span>
<span class="line"><span class="token key atrule">description</span><span class="token punctuation">:</span> 站点描述</span>
<span class="line"><span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">"https://example.com"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>作者信息</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">author</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> 作者姓名</span>
<span class="line">  <span class="token key atrule">email</span><span class="token punctuation">:</span> 作者邮箱</span>
<span class="line">  <span class="token key atrule">avatar</span><span class="token punctuation">:</span> /path/to/avatar.jpg</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>导航菜单</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">nav</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 首页</span>
<span class="line">    <span class="token key atrule">url</span><span class="token punctuation">:</span> /</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 关于</span>
<span class="line">    <span class="token key atrule">url</span><span class="token punctuation">:</span> /about/</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 归档</span>
<span class="line">    <span class="token key atrule">url</span><span class="token punctuation">:</span> /archives/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>社交链接</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">social</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> GitHub</span>
<span class="line">    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/username</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Twitter</span>
<span class="line">    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//twitter.com/username</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>其他配置</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">markdown</span><span class="token punctuation">:</span> kramdown</span>
<span class="line"><span class="token key atrule">theme</span><span class="token punctuation">:</span> jekyll<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>chirpy</span>
<span class="line"><span class="token key atrule">plugins</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> jekyll<span class="token punctuation">-</span>feed</span>
<span class="line">  <span class="token punctuation">-</span> jekyll<span class="token punctuation">-</span>seo<span class="token punctuation">-</span>tag</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过修改 <code v-pre>_config.yml</code> 文件，可以自定义站点的各种配置，以满足不同的需求。</p>
</div></template>


