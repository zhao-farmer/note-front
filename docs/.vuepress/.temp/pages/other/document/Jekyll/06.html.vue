<template><div><h1 id="六、minima默认主题" tabindex="-1"><a class="header-anchor" href="#六、minima默认主题"><span>六、minima默认主题</span></a></h1>
<h2 id="_6-1-自定义样式" tabindex="-1"><a class="header-anchor" href="#_6-1-自定义样式"><span>6.1 自定义样式</span></a></h2>
<p>Minima 主题提供了一些默认的样式，但你可以通过覆盖默认的 Sass 文件来自定义样式。在项目根目录下创建 _sass 文件夹，并添加 minima.scss 文件：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"> </span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">"minima"</span><span class="token punctuation">;</span></span></span>
<span class="line"> </span>
<span class="line"><span class="token selector">// 自定义样式</span>
<span class="line">body</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-2-添加页面和文章" tabindex="-1"><a class="header-anchor" href="#_6-2-添加页面和文章"><span>6.2 添加页面和文章</span></a></h2>
<p>在 _posts 文件夹中添加新的 Markdown 文件来创建文章。文件名格式为 YYYY-MM-DD-title.md。例如：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> post</span>
<span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"我的第一篇文章"</span></span>
<span class="line"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2023-10-01</span></span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line">这是我的第一篇文章内容。</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目根目录下创建 about.md 文件来添加关于页面：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> page</span>
<span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> 关于</span>
<span class="line"><span class="token key atrule">permalink</span><span class="token punctuation">:</span> /about/</span>
<span class="line">这是关于页面的内容。</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-3-配置-config-yml" tabindex="-1"><a class="header-anchor" href="#_6-3-配置-config-yml"><span>6.3 配置 _config.yml</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token comment"># 底部顶部配置</span></span>
<span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> 文章列表</span>
<span class="line"><span class="token key atrule">email</span><span class="token punctuation">:</span> 邮箱名称@example.com</span>
<span class="line"><span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token punctuation">></span><span class="token punctuation">-</span> </span>
<span class="line">  在这里为你的新网站写一个很棒的描述。您可以编辑此config.yml中的行。它将出现在您的文档头元中（用于谷歌搜索结果）和您的feed.xml网站描述。</span>
<span class="line"><span class="token key atrule">twitter_username</span><span class="token punctuation">:</span> 推特名称</span>
<span class="line"><span class="token key atrule">github_username</span><span class="token punctuation">:</span>  github名称</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">baseurl</span><span class="token punctuation">:</span> <span class="token string">""</span></span>
<span class="line"><span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 构建设置</span></span>
<span class="line"><span class="token key atrule">theme</span><span class="token punctuation">:</span> minima</span>
<span class="line"><span class="token key atrule">plugins</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> jekyll<span class="token punctuation">-</span>feed</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 全局文章设置</span></span>
<span class="line"><span class="token key atrule">defaults</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">scope</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># 所有文件</span></span>
<span class="line">      <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">"posts"</span> <span class="token comment"># 限制到帖子类型</span></span>
<span class="line">    <span class="token key atrule">values</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">layout</span><span class="token punctuation">:</span> <span class="token string">"post"</span> <span class="token comment"># 默认布局为 post 布局文件</span></span>
<span class="line">      <span class="token key atrule">author</span><span class="token punctuation">:</span> <span class="token string">"张三"</span> <span class="token comment"># 默认作者为张三</span></span>
<span class="line">      <span class="token key atrule">date_format</span><span class="token punctuation">:</span> <span class="token string">"%Y-%m-%d %H:%M"</span> <span class="token comment"># 设置默认日期格式</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


