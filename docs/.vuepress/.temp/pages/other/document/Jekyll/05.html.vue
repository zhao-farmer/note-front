<template><div><h1 id="五、配置信息" tabindex="-1"><a class="header-anchor" href="#五、配置信息"><span>五、配置信息</span></a></h1>
<h2 id="_5-1-配置-config-yml" tabindex="-1"><a class="header-anchor" href="#_5-1-配置-config-yml"><span>5.1 配置_config.yml</span></a></h2>
<p>_config.yml 文件是 Jekyll 站点配置的核心文件，它包含了一系列用于定义站点行为和外观的配置选项。这个文件位于你的 Jekyll 站点的根目录下。</p>
<h3 id="_5-1-1-基础配置" tabindex="-1"><a class="header-anchor" href="#_5-1-1-基础配置"><span>5.1.1 基础配置</span></a></h3>
<ol>
<li>title: 网站的标题。</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">"我的网站"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>description: 网站的描述。</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">"这是一个用Jekyll构建的静态网站"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>url: 网站的URL。如果你的网站托管在 GitHub Pages 上，这个值通常是你的仓库名（不包括 http:// 或 https://）。</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">"https://example.com"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>baseurl: 网站的子路径。如果你的网站托管在某个子目录下，例如 /blog，则设置为 /blog。</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">baseurl</span><span class="token punctuation">:</span> <span class="token string">"/blog"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-1-2-作者信息" tabindex="-1"><a class="header-anchor" href="#_5-1-2-作者信息"><span>5.1.2 作者信息</span></a></h3>
<ol>
<li>name: 作者的名字。</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">author</span><span class="token punctuation">:</span> <span class="token string">"张三"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>email: 作者的邮箱。</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">email</span><span class="token punctuation">:</span> <span class="token string">"zhangsan@example.com"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-1-3-构建设置" tabindex="-1"><a class="header-anchor" href="#_5-1-3-构建设置"><span>5.1.3 构建设置</span></a></h3>
<ol>
<li>markdown: 指定 Markdown 解析器，例如 kramdown 或 redcarpet。</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">markdown</span><span class="token punctuation">:</span> kramdown</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>permalink: 指定文章（或页面）的永久链接格式。</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">permalink</span><span class="token punctuation">:</span> /<span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>title/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>exclude: 指定在构建站点时应该排除的文件或目录。</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">exclude</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"node_modules"</span><span class="token punctuation">,</span> <span class="token string">"gulpfile.js"</span><span class="token punctuation">,</span> <span class="token string">"package.json"</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-1-4-插件和主题配置" tabindex="-1"><a class="header-anchor" href="#_5-1-4-插件和主题配置"><span>5.1.4 插件和主题配置</span></a></h3>
<ol>
<li>plugins: 指定要使用的插件列表。注意，GitHub Pages 有插件白名单，不是所有插件都可以使用。</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">plugins</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> jekyll<span class="token punctuation">-</span>seo<span class="token punctuation">-</span>tag</span>
<span class="line">  <span class="token punctuation">-</span> jekyll<span class="token punctuation">-</span>sitemap</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>theme: 指定使用的主题。如果是自定义主题，可以设置为 null，并确保有相应的布局文件和样式文件。</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">theme</span><span class="token punctuation">:</span> <span class="token string">"minima"</span> <span class="token comment"># 或者使用自定义主题路径 "my-custom-theme"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-1-5-服务器设置" tabindex="-1"><a class="header-anchor" href="#_5-1-5-服务器设置"><span>5.1.5 服务器设置</span></a></h3>
<ol>
<li>服务端口 (port)</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">4000</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>主机 (host)</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">host</span><span class="token punctuation">:</span> 0.0.0.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-1-6-其他配置" tabindex="-1"><a class="header-anchor" href="#_5-1-6-其他配置"><span>5.1.6 其他配置</span></a></h3>
<ol>
<li>时间格式</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">timezone</span><span class="token punctuation">:</span> Asia/Shanghai </span>
<span class="line"><span class="token comment"># 时区设置，例如北京时间可以使用 Asia/Shanghai</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>永久链接格式（Permalink）</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">permalink</span><span class="token punctuation">:</span> /<span class="token punctuation">:</span>year<span class="token punctuation">-</span><span class="token punctuation">:</span>month<span class="token punctuation">-</span><span class="token punctuation">:</span>day<span class="token punctuation">-</span><span class="token punctuation">:</span>title/ </span>
<span class="line"><span class="token comment"># 自定义 URL 结构，例如日期和时间加标题的方式。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>分类和标签（Categories and Tags）支持：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">category_archive_path</span><span class="token punctuation">:</span> <span class="token string">"/categories/#"</span> </span>
<span class="line"><span class="token comment"># 分类归档路径设置，例如 "/categories/我的分类" 可以设置为 "/categories/#" 来自动生成路径。 具体实现依赖于主题或插件。</span></span>
<span class="line"><span class="token key atrule">tag_archive_path</span><span class="token punctuation">:</span> <span class="token string">"/tags/#"</span> </span>
<span class="line"><span class="token comment"># 标签归档路径设置，例如 "/tags/我的标签" 可以设置为 "/tags/#" 来自动生成路径。 具体实现依赖于主题或插件。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>分页（Pagination）配置：</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">paginate</span><span class="token punctuation">:</span> <span class="token number">5</span> </span>
<span class="line"><span class="token comment"># 每页显示的文章数。需要主题或插件支持分页功能。例如：jekyll-paginate 或 jekyll-paginate-v2。</span></span>
<span class="line"><span class="token key atrule">paginate_path</span><span class="token punctuation">:</span> <span class="token string">"/page/:num/"</span> </span>
<span class="line"><span class="token comment"># 分页的 URL 结构，例如 "/page/2/" 表示第二页。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-1-7-默认配置" tabindex="-1"><a class="header-anchor" href="#_5-1-7-默认配置"><span>5.1.7 默认配置</span></a></h3>
<p>假设你想为所有的博客文章（posts）设置默认的Front Matter变量，比如作者和分类，你可以这样配置：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">defaults</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">scope</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">path</span><span class="token punctuation">:</span> <span class="token string">""</span> <span class="token comment"># 空字符串表示所有文件</span></span>
<span class="line">      <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">"posts"</span> <span class="token comment"># 指定类型为posts</span></span>
<span class="line">    <span class="token key atrule">values</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">layout</span><span class="token punctuation">:</span> <span class="token string">"post"</span> <span class="token comment"># 设置默认布局</span></span>
<span class="line">      <span class="token key atrule">author</span><span class="token punctuation">:</span> <span class="token string">"Your Name"</span> <span class="token comment"># 设置默认作者</span></span>
<span class="line">      <span class="token key atrule">categories</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"blog"</span><span class="token punctuation">]</span> <span class="token comment"># 设置默认分类</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置详解</strong></p>
<ul>
<li>
<p>scope: 定义了哪些文件应该应用这些默认值。可以包含path和type两个属性：</p>
</li>
<li>
<p>path: 指定一个或多个目录路径。可以使用相对路径，例如_posts/。如果你想应用到网站中的所有文件，可以使用空字符串&quot;&quot;。</p>
</li>
<li>
<p>type: 指定文件的类型，例如posts、pages等。Jekyll有几个内置类型（如posts, pages），你也可以为自定义集合设置类型。</p>
</li>
<li>
<p>values: 定义了当文件匹配scope时应该应用的默认Front Matter变量。例如，layout, author, categories等。</p>
</li>
</ul>
<h2 id="_5-2-front-matter" tabindex="-1"><a class="header-anchor" href="#_5-2-front-matter"><span>5.2 Front Matter</span></a></h2>
<p>Front Matter‌是一种位于HTML/Markdown文件的顶部，遵循YAML语法的一块区域。它用于定义页面的元数据和配置信息，如布局、标题、日期等。Front Matter必须位于文件的最开始部分，通常被三条虚线包围（---）。</p>
<h3 id="_5-2-1-基本语法和功能" tabindex="-1"><a class="header-anchor" href="#_5-2-1-基本语法和功能"><span>5.2.1 基本语法和功能</span></a></h3>
<p>Front Matter使用YAML语法，可以定义各种变量，例如：</p>
<ul>
<li>‌layout‌: 指定页面使用的布局文件。</li>
<li>‌title‌: 页面的标题。</li>
<li>‌date‌: 文章的发布日期。</li>
<li>‌author‌: 文章的作者。</li>
</ul>
<p>这些变量可以通过Liquid标签在页面中访问和使用，从而实现页面的动态内容和布局管理。例如：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">layout</span><span class="token punctuation">:</span> post</span>
<span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> 配置信息</span>
<span class="line"><span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2025-04-16</span></span>
<span class="line"><span class="token key atrule">author</span><span class="token punctuation">:</span> 作者</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，layout、title、date和author都是在Front Matter中定义的变量，它们可以在页面中被访问和使用。</p>
<h3 id="_5-2-2-用途和重要性" tabindex="-1"><a class="header-anchor" href="#_5-2-2-用途和重要性"><span>5.2.2 用途和重要性</span></a></h3>
<p>Front Matter的主要作用是提供页面的元数据和配置信息，使得Jekyll能够根据这些信息生成相应的HTML页面。通过定义不同的布局和元数据，可以轻松地管理网站的多个页面和文章，提高开发效率和网站的可维护性。此外，Front Matter还支持自定义变量，使得页面可以根据不同的需求进行灵活配置。</p>
</div></template>


