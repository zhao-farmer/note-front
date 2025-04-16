<template><div><h1 id="三、页面" tabindex="-1"><a class="header-anchor" href="#三、页面"><span>三、页面</span></a></h1>
<h2 id="_3-1-路由" tabindex="-1"><a class="header-anchor" href="#_3-1-路由"><span>3.1 路由</span></a></h2>
<p>默认情况下，页面的路由路径是根据你的 Markdown 文件的相对路径决定的。</p>
<p>假设这是你的 Markdown 文件所处的目录结构：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">└─ docs</span>
<span class="line">   ├─ guide</span>
<span class="line">   │  ├─ getting-started.md</span>
<span class="line">   │  └─ README.md</span>
<span class="line">   ├─ contributing.md</span>
<span class="line">   └─ README.md</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 docs 目录作为你的 sourceDir ，例如你在运行 vuepress dev docs 命令。此时，你的 Markdown 文件对应的路由路径为：</p>
<table>
<thead>
<tr>
<th>相对路径</th>
<th>路由路径</th>
</tr>
</thead>
<tbody>
<tr>
<td>/README.md</td>
<td>/</td>
</tr>
<tr>
<td>/index.md</td>
<td>/</td>
</tr>
<tr>
<td>/contributing.md</td>
<td>/contributing.html</td>
</tr>
<tr>
<td>/guide/README.md</td>
<td>/guide/</td>
</tr>
<tr>
<td>/guide/getting-started.md</td>
<td>/guide/getting-started.html</td>
</tr>
</tbody>
</table>
<h2 id="_3-2-frontmatter" tabindex="-1"><a class="header-anchor" href="#_3-2-frontmatter"><span>3.2 Frontmatter</span></a></h2>
<p>Markdown 文件可以包含一个  Frontmatter 。Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。下面是一个基本的示例：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">---</span>
<span class="line">lang: zh-CN</span>
<span class="line">title: 页面的标题</span>
<span class="line">description: 页面的描述</span>
<span class="line">---</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你肯定注意到 Frontmatter 中的字段和配置文件中的站点配置十分类似。你可以通过 Frontmatter 来覆盖当前页面的 lang, title, description 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置。</p>
<blockquote>
<p>不建议使用Frontmatter 直接在通用配置里使用就可以，掺杂了太多vuePress的语法，在其他markdown平台上预览会出现问题</p>
</blockquote>
</div></template>


