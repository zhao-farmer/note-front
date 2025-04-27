<template><div><h1 id="三、github-pages" tabindex="-1"><a class="header-anchor" href="#三、github-pages"><span>三、github Pages</span></a></h1>
<ol>
<li>‌个人站点‌：</li>
</ol>
<ul>
<li>定义‌：个人站点是连接到特定的GitHub Enterprise Server帐户的站点，通常用于展示个人简历、作品集等个人内容‌。</li>
<li>‌搭建方式‌：要搭建个人站点，需要创建一个仓库，仓库名必须设置为<code v-pre>&lt;username&gt;.github.io</code>（其中<code v-pre>&lt;username&gt;</code>是GitHub官网的用户名）。然后，在仓库中创建一个index.html文件作为默认的首页文件。最后，在仓库的设置页面中找到“Pages”部分，选择合适的分支作为来源，GitHub Pages就会自动生成个人网站，并可以通过<code v-pre>https://&lt;username&gt;.github.io/</code>访问。</li>
</ul>
<ol start="2">
<li>项目站点‌：</li>
</ol>
<ul>
<li>定义‌：项目站点是连接到GitHub Enterprise Server上托管的特定项目的站点，例如JavaScript库、配方集合等，通常用于展示项目的文档、示例等。</li>
<li>‌搭建方式‌：要搭建项目站点，首先需要有一个现有的GitHub项目仓库。然后，进入项目主页的设置页面，找到“Pages”部分，将Source的none改为相应的分支（如master branch），并选择喜欢的主题。最后，GitHub Pages会自动生成项目网站，并可以通过<code v-pre>https://&lt;username&gt;.github.io/&lt;project-name&gt;/</code>访问，其中<code v-pre>&lt;project-name&gt;</code>是项目仓库的名称‌。另外，也可以选择创建一个单独的分支（如gh-pages分支）用于构建和发布项目站点的内容‌</li>
</ul>
<h2 id="_3-1-个人站点" tabindex="-1"><a class="header-anchor" href="#_3-1-个人站点"><span>3.1 个人站点</span></a></h2>
<h3 id="_3-1-1-创建网站" tabindex="-1"><a class="header-anchor" href="#_3-1-1-创建网站"><span>3.1.1 创建网站</span></a></h3>
<ol>
<li>
<p>创建项目
在任何页面的右上角，选择 ，然后单击“新建存储库”。
<img src="/other/version/github/github-43.jpg" alt=""></p>
</li>
<li>
<p>创建特殊远程仓库
<img src="/other/version/github/github-44.jpg" alt=""></p>
</li>
<li>
<p>修改pages发布信息
<img src="/other/version/github/github-45.jpg" alt=""></p>
</li>
<li>
<p>查看结果</p>
<ul>
<li>（可选）打开存储库的 <code v-pre>README.md</code> 文件。 <code v-pre>README.md</code> 文件是你将为站点编写内容的位置。 您可以编辑文件或暂时保留默认内容。</li>
<li>访问 <code v-pre>username.github.io</code> 以查看新网站。 请注意，对站点的更改在推送到 <code v-pre>GitHub Enterprise Cloud</code> 后，最长可能需要 10 分钟才会发布。</li>
</ul>
</li>
</ol>
<p><img src="/other/version/github/github-46.jpg" alt=""></p>
<h3 id="_3-1-2-更改标题和说明" tabindex="-1"><a class="header-anchor" href="#_3-1-2-更改标题和说明"><span>3.1.2 更改标题和说明</span></a></h3>
<ol>
<li>
<p>新增文件
<img src="/other/version/github/github-47.jpg" alt=""></p>
</li>
<li>
<p>修改文件</p>
</li>
</ol>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">theme</span><span class="token punctuation">:</span> jekyll<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>minimal</span>
<span class="line"><span class="token key atrule">title</span><span class="token punctuation">:</span> Octocat's homepage</span>
<span class="line"><span class="token key atrule">description</span><span class="token punctuation">:</span> Bookmark this to keep an eye on my project updates<span class="token tag">!</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/other/version/github/github-48.jpg" alt=""></p>
<ol start="3">
<li>查看结果
<img src="/other/version/github/github-49.jpg" alt=""></li>
</ol>
<h2 id="_3-2-项目站点" tabindex="-1"><a class="header-anchor" href="#_3-2-项目站点"><span>3.2 项目站点</span></a></h2>
<h3 id="_3-2-1-前期准备" tabindex="-1"><a class="header-anchor" href="#_3-2-1-前期准备"><span>3.2.1 前期准备</span></a></h3>
<ol>
<li>准备一份web代码</li>
</ol>
<p>地址：https://github.com/sun0225SUN/Awesome-Love-Code/tree/main/Web/030</p>
<ol start="2">
<li>拉取到磁盘上</li>
</ol>
<p><img src="/other/version/github/001.png" alt=""></p>
<ol start="3">
<li>将代码上传自己项目里</li>
</ol>
<p><img src="/other/version/github/002.png" alt=""></p>
<h3 id="_3-2-2-开始操作" tabindex="-1"><a class="header-anchor" href="#_3-2-2-开始操作"><span>3.2.2 开始操作</span></a></h3>
<ol>
<li>保存到分支进行发布</li>
</ol>
<p><img src="/other/version/github/003.png" alt=""></p>
<ol start="2">
<li>等待一段时间刷新获取地址</li>
</ol>
<p><img src="/other/version/github/004.png" alt=""></p>
<ol start="3">
<li>浏览器使用获取的地址</li>
</ol>
<p><img src="/other/version/github/005.png" alt=""></p>
</div></template>


