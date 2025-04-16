<template><div><h1 id="一、客户端渲染与服务端渲染" tabindex="-1"><a class="header-anchor" href="#一、客户端渲染与服务端渲染"><span>一、客户端渲染与服务端渲染</span></a></h1>
<h2 id="_1-1-单页面应用程序" tabindex="-1"><a class="header-anchor" href="#_1-1-单页面应用程序"><span>1.1 单页面应用程序</span></a></h2>
<h3 id="spa简介" tabindex="-1"><a class="header-anchor" href="#spa简介"><span>SPA简介</span></a></h3>
<ul>
<li>
<p>单页应用程序(SPA)全称是:Single-page application，SPA应用是在客户端呈现的(术语称:CRS)</p>
<ul>
<li>SPA应用默认只返回一个空HTML页面，如:body只有<code v-pre>&lt;divid=“app”&gt;&lt;/div&gt;</code>。</li>
<li>而整个应用程序的内容都是通过 javascript 动态加载，包括应用程序的逻辑、U1 以及与服务器通信相关的所有数据。</li>
<li>构建 SPA 应用常见的库和框架有: React、AngularJS、Vue.js 等</li>
</ul>
</li>
<li>
<p>流程实例</p>
</li>
</ul>
<p><img src="/framework/vue/nuxt/001.png" alt=""></p>
<ul>
<li>
<p>SPA的优点</p>
<ol>
<li>只需加载一次
<ul>
<li>SPA应用程序只需要在第一次请求时加载页面，页面切换不需重新加载，而传统的Web应用程序必须在每次请求时都得加载页面，需要花费更多时间。因此，SPA页面加载速度要比传统 Web 应用程序更快。</li>
</ul>
</li>
<li>更好的用户体验
<ul>
<li>SPA 提供类似于桌面或移动应用程序的体验。用户切换页面不必重新加载新页面</li>
<li>切换页面只是内容发生了变化，页面并没有重新加载，从而使体验变得更加流畅</li>
</ul>
</li>
<li>可轻松的构建功能丰富的Web应用程序</li>
</ol>
</li>
<li>
<p>SPA的缺点</p>
<ol>
<li>SPA应用默认只返回一个空HTML页面，不利于SEO （search engine optimization）</li>
<li>首屏加载的资源过大时，一样会影响首屏的渲染</li>
<li>也不利于构建复杂的项目，复杂 Web 应用程序的大文件可能变得难以维护</li>
</ol>
</li>
</ul>
<h2 id="_1-2-爬虫" tabindex="-1"><a class="header-anchor" href="#_1-2-爬虫"><span>1.2 爬虫</span></a></h2>
<p>Google 爬虫的工作流程分为3 个阶段，并非每个网页都会经历这3 个阶段:</p>
<ul>
<li>
<p>抓取:</p>
<ul>
<li>爬虫(也称蜘蛛)，从互联网上发现各类网页,网页中的外部连接也会被发现。</li>
<li>抓取数以十亿被发现网页的内容，如:文本、图片和视频</li>
</ul>
</li>
<li>
<p>索引编制:</p>
<ul>
<li>爬虫程序会分析网页上的文本、图片和视频文件。</li>
<li>并将信息存储在大型数据库(索引区)中。</li>
<li>例如 <code v-pre>&lt;title&gt;</code> 元素和 Alt 属性、图片、视频等。</li>
<li>爬虫会对内容类似的网页归类分组</li>
<li>不符合规则内容和网站会被清理
<ul>
<li>如:禁止访问 或 需要权限网站等等</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>呈现搜索结果:</p>
<p><img src="/framework/vue/nuxt/002.png" alt=""></p>
<p>当用户在 Google 中搜索时，搜索引擎会根据内容的类型，选择一组网页中最具代表性的网页进行呈现</p>
<h2 id="_1-2-seo的优化" tabindex="-1"><a class="header-anchor" href="#_1-2-seo的优化"><span>1.2 SEO的优化</span></a></h2>
<ul>
<li>
<p>语义性HTML标记</p>
<ul>
<li>标题用<code v-pre>&lt;h1&gt;</code>，一个页面只有一个; 副标题用<code v-pre>&lt;h2&gt;</code>到<code v-pre>&lt;h6&gt;</code>。</li>
<li>不要过度使用h标签，多次使用不会增加 SEO(search engine optimization).</li>
<li>段落用<code v-pre>&lt;p&gt;</code>，列表用<code v-pre>&lt;ul&gt;</code>，并且li只放在 ul 中 等等,</li>
</ul>
</li>
<li>
<p>每个页面需包含: 标题 + 内部链接</p>
<ul>
<li>每个页面对应的title，同一网站所有页面都有内链可以指向首页</li>
</ul>
</li>
<li>
<p>确保链接可供抓取，如以下表格所示:</p>
</li>
</ul>
<table>
<thead>
<tr>
<th>HTMUL板签</th>
<th>含文</th>
<th>SEO权期</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;title&gt; </code></td>
<td>标题</td>
<td>10分</td>
</tr>
<tr>
<td><code v-pre>&lt;a&gt;</code></td>
<td>内部链接文字</td>
<td>10分</td>
</tr>
<tr>
<td><code v-pre>&lt;h1&gt;</code>/<code v-pre>&lt;h2&gt; </code></td>
<td>标题，其实是H1-H6，不过H1和H2是最重要的，一般一个页面最好一个，不要5分过多使用</td>
<td>5分</td>
</tr>
<tr>
<td><code v-pre>&lt;p&gt; </code></td>
<td>每段首句</td>
<td>5分</td>
</tr>
<tr>
<td><code v-pre>&lt;p&gt;</code></td>
<td>每句开头</td>
<td>1.5分</td>
</tr>
<tr>
<td><code v-pre>&lt;b&gt;</code>/<code v-pre>&lt;strong&gt;</code></td>
<td>加相</td>
<td>1分</td>
</tr>
<tr>
<td><code v-pre>&lt;a title=''/&gt;</code></td>
<td>title属性</td>
<td>1分</td>
</tr>
<tr>
<td><code v-pre>&lt;img alt=''&gt; </code></td>
<td>img alt标记</td>
<td>0.5分</td>
</tr>
<tr>
<td><code v-pre>&lt;meta description=''&gt;</code></td>
<td>meta标签的网站descrlption</td>
<td>0.5分</td>
</tr>
<tr>
<td><code v-pre>&lt;meta keywords='&gt; </code></td>
<td>meta标签的网站keywords</td>
<td>0.05分</td>
</tr>
</tbody>
</table>
<ul>
<li>meta标签优化:设置 description keywords 等</li>
<li>文本标记和img:
<ul>
<li>比如<code v-pre>&lt;b&gt;</code>和<code v-pre>&lt;strong&gt;</code>加粗文本的标签，爬虫也会关注到该内容口</li>
<li>img标签添加 alt 属，图片加载失败，爬虫会取alt内容。</li>
</ul>
</li>
<li>robots.txt 文件:规定爬虫可访问您网站上的哪些网址。</li>
<li>sitemap.xml站点地图:在站点地图列出所有网页，确保爬虫不会漏掉某些网页</li>
<li>更多查看:https://developers.google.com/search/docs/crawling-indexing/valid-page-metadata</li>
</ul>
<h2 id="_1-3-静态站点生成-ssg" tabindex="-1"><a class="header-anchor" href="#_1-3-静态站点生成-ssg"><span>1.3 静态站点生成（SSG）</span></a></h2>
<ul>
<li>静态站点生成(SSG) 全称是：Static Site Generate，是预先生成好的静态网站。
<ul>
<li>SSG 应用一般在构建阶段就确定了网站的内容。  如果网站的内容需要更新了，那必须得重新再次构建和部署。</li>
<li>构建 SSG 应用常见的库和框架有： Vue Nuxt、 React Next.js 等。</li>
</ul>
</li>
<li>SSG的优点：
<ul>
<li>访问速度非常快，因为每个页面都是在构建阶段就已经提前生成好了。</li>
<li>直接给浏览器返回静态的HTML，也有利于SEO</li>
<li>SSG应用依然保留了SPA应用的特性，比如：前端路由、响应式数据、虚拟DOM等</li>
</ul>
</li>
<li>SSG的缺点：
<ul>
<li>页面都是静态，不利于展示实时性的内容，实时性的更适合SSR。</li>
<li>如果站点内容更新了，那必须得重新再次构建和部署。</li>
</ul>
</li>
</ul>
<h2 id="_1-4-ssr-服务器端渲染" tabindex="-1"><a class="header-anchor" href="#_1-4-ssr-服务器端渲染"><span>1.4 SSR 服务器端渲染</span></a></h2>
<ul>
<li>
<p>服务器端渲染全称是:Server Side Render，在服务器端渲染页面，并将渲染好HTML返回给浏览器呈现。</p>
<ul>
<li>SSR应用的页面是在服务端渲染的，用户每请求一个SSR页面都会先在服务端进行渲染，然后将渲染好的页面，返回给浏览器呈现。</li>
<li>构建 SSR 应用常见的库和框架有: Vue Nuxt、React Next.js等(SSR应用也称同构应用)</li>
</ul>
</li>
<li>
<p>流程示例</p>
</li>
</ul>
<p><img src="/framework/vue/nuxt/003.png" alt=""></p>
<ul>
<li>优点
<ul>
<li>更快的首屏渲染速度</li>
<li>更好的SDO</li>
<li>SSR应用程序在 Hydration 之后依然可以保留 Web 应用程序的交互性。比如：前端路由、响应式数据、虚拟DOM等。</li>
</ul>
</li>
<li>缺点
<ul>
<li>SSR 通常需要对服务器进行更多 API 调用，以及在服务器端渲染需要消耗更多的服务器资源，成本高</li>
<li>增加了一定的开发成本，用户需要关心哪些代码是运行在服务器端，哪些代码是运行在浏览器端</li>
<li>SSR 配置站点的缓存通常会比SPA站点要复杂一点</li>
</ul>
</li>
</ul>
<h2 id="_1-5-ssr的解决方案" tabindex="-1"><a class="header-anchor" href="#_1-5-ssr的解决方案"><span>1.5 SSR的解决方案</span></a></h2>
<ol>
<li>php、jsp…………</li>
<li>从0搭建SSR项目</li>
<li>直接使用流行的框架</li>
</ol>
<p>1.6 跨请求状态污染</p>
<blockquote>
<p>在SPA中，整个生命周期中只有一个App对象实例 或 一个Router对象实例 或 一个Store对象实例都是可以的，因为每个用户在使用浏览器访问SPA应用时，应用模块都会重新初始化，这也是一种单例模式</p>
</blockquote>
<blockquote>
<p>然而，在 SSR 环境下，App应用模块通常只在服务器启动时初始化一次。同一个应用模块会在多个服务器请求之间被复用，而我们的单例状态对象也一样，也会在多个请求之间被复用，比如:当某个用户对共享的单例状态进行修改，那么这个状态可能会意外地泄露给另一个在请求的用户
这种情况称之为跨请求状态污染</p>
</blockquote>
<ul>
<li>可以在每个请求中为整个应用创建一个全新的实例，包括后面的 router 和全局 store等实例。</li>
<li>所以我们在创建App 或 路由 或 Store对象时都是使用一个函数来创建，保证每个请求都会创建一个全新的实例</li>
<li>这样也会有缺点：需要消耗更多的服务器的资源</li>
</ul>
</div></template>


