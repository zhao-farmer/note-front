<template><div><h1 id="四、目录结构" tabindex="-1"><a class="header-anchor" href="#四、目录结构"><span>四、目录结构</span></a></h1>
<p><img src="/other/version/jekyll/006.png" alt=""></p>
<h2 id="_4-1-主要目录" tabindex="-1"><a class="header-anchor" href="#_4-1-主要目录"><span>4.1 主要目录</span></a></h2>
<p>一般情况下，Jekyll项目构建完成后，包括如下文件和文件夹：</p>
<ul>
<li>_posts: 用于存放博客文章。</li>
<li>_site: 用于存放项目构建完成之后所生成的静态文件，也就是说，静态网站的所有文件都会来源于此，其中 CSS 文件、JS 文件以及图片文件，会存放在该目录下的 assets 文件夹中。我们可以直接把该目录下的文件拿去部署。</li>
<li>about.markdown: “关于页”的内容。在执行构建时会被转化成 html 文件，放置于 _site 目录下。</li>
<li>index.markdown: “主页”的内容。在执行构建时会被转化成 html 文件，放置于 _site 目录下。</li>
<li>404.html: “404 页”的内容。</li>
<li>_config.yml: Jekyll 的全站配置文件，一些全局配置会写在这个文件内，比如 collections，默认文件/路径，等等。总之，这里可以自定义很多东西</li>
<li>.gitignore: 创建项目时会自动生成，不需要纳入到 CVS 的文件存放于此</li>
<li>Gemfile&amp; Gemfile.lock 存放项目所依赖的 Ruby gems</li>
</ul>
<h2 id="_4-2-其他的约定目录" tabindex="-1"><a class="header-anchor" href="#_4-2-其他的约定目录"><span>4.2 其他的约定目录</span></a></h2>
<p>除了上面提到的几个目录，我们还可以添加其它的，Jekyll 会自动识别出它们，执行相应的处理。</p>
<ul>
<li>_data - 网站所需要的数据文件（相当于一个小型数据库）</li>
<li>_drafts - 博客草稿，不会被构建成静态文件，也不会公开</li>
<li>_layouts - 布局文件，相当于一类页面（比如博客类页面）的“父类”</li>
<li>_includes - 小模块，属于 HTML 文件的一部分，可以在多个页面中复用，比如导航（navigation）、脚注（footer）等</li>
</ul>
</div></template>


