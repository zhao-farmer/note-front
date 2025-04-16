<template><div><h1 id="三、命令与配置" tabindex="-1"><a class="header-anchor" href="#三、命令与配置"><span>三、命令与配置</span></a></h1>
<h2 id="_3-1-jekyll-cli命令" tabindex="-1"><a class="header-anchor" href="#_3-1-jekyll-cli命令"><span>3.1 Jekyll CLI命令</span></a></h2>
<p>下面是一些常用的Jekyll CLI命令。你不需要记住它们，只需要知道它们的存在，当你注意到它们在本文后面的用法时，可以随时回头查看它们的作用。</p>
<ul>
<li><code v-pre>jekyll build</code>：生成**_site**目录下的静态网站。</li>
<li><code v-pre>jekyll serve</code>：构建网站并在你的本地机器上启动一个Web服务器，允许你在浏览器中预览网站，http://localhost:4000。</li>
<li><code v-pre>jekyll new [site name]</code>：在一个新的目录中创建一个新的Jekyll站点，并指定站点名称。</li>
<li><code v-pre>jekyll doctor</code>：输出任何可能存在的配置或依赖性问题。</li>
<li><code v-pre>jekyll clean</code>：删除**_site**目录，它是生成的站点文件的存放地。</li>
<li><code v-pre>jekyll help</code>：输出Jekyll的帮助文档。</li>
<li><code v-pre>jekyll serve --draft</code>：生成并提供你的Jekyll站点，包括_drafts目录中的任何文章。</li>
</ul>
<p>你也可以在这些命令中附加一些选项。请参阅Jekyll文档中的<a href="https://jekyllrb.com/docs/usage/" target="_blank" rel="noopener noreferrer">Jekyll命令和选项的完整列表</a>。</p>
<h2 id="_3-2-jekyll配置文件" tabindex="-1"><a class="header-anchor" href="#_3-2-jekyll配置文件"><span>3.2 Jekyll配置文件</span></a></h2>
<p>Jekyll配置文件是一个名为**_config.yml**的YAML文件，包含Jekyll网站的设置和选项。它用于配置你网站的各个方面，包括网站的标题、描述、URL和其他设置。</p>
<p>下面是一些最常用的配置选项：</p>
<ul>
<li>**title：**你的网站的标题。</li>
<li>**description：**你的网站的简短描述。</li>
<li>**url：**你的网站的基本URL。</li>
<li>**baseurl：**你的网站的子目录，如果它被托管在一个域名的子目录中。</li>
<li>**permalink：**你的文章和页面的URL结构。</li>
<li>**exclude：**要从网站生成过程中排除的文件或目录的列表。</li>
<li>**include：**在网站生成过程中要包括的文件或目录的列表。</li>
<li>**paginate：**使用分页时每页要显示的文章数量。</li>
<li>**plugins：**要加载的Jekyll插件的列表。</li>
<li>**theme：**默认情况下，这被设置为 <code v-pre>minima</code>。你可以通过设置它的名字和实施我们将在本文后面了解的其他设置来使用任何<a href="https://rubygems.org/search?query=jekyll-theme" target="_blank" rel="noopener noreferrer">其他主题</a>。</li>
</ul>
<p>你也可以在你的配置文件中创建自定义变量，并在你的网站的模板、布局和包括中使用它们。例如，你可以创建一个名为 <code v-pre>author_name</code> 的变量，然后在你的模板中这样使用它：<code v-pre>{{ site.author_name }}</code>。</p>
</div></template>


