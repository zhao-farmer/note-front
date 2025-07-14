<template><div><h1 id="二、配置文件" tabindex="-1"><a class="header-anchor" href="#二、配置文件"><span>二、配置文件</span></a></h1>
<h2 id="_2-1-配置文件介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-配置文件介绍"><span>2.1 配置文件介绍</span></a></h2>
<p>JSON 是一种轻量级的数据格式，常用于前后端数据的交互，但是在小程序中，JSON 扮演的配置项的角色，用于配置项目或者页面属性和行为，每个页面或组件也都有一个对应的json 文件。</p>
<p>小程序中常见的配置文件有以下几种:</p>
<ol>
<li>app.json:小程序全局配置文件，用于配置小程序的一些全局属性和页面路由。</li>
<li>页面.json:小程序页面配置文件，也称局部配置文件，用于配置当前页面的窗口样式、页面标题等</li>
<li>project.confg.json:小程序项目的配置文件，用于保存项目的一些配置信息和开发者的个人设置</li>
<li>sitemap.json:配置小程序及其页面是否允许被微信索引，提高小程序在搜索引擎搜索到的概率</li>
</ol>
<p><img src="/application/weixin/base/040.png" alt=""></p>
<h2 id="_2-2-全局配置表" tabindex="-1"><a class="header-anchor" href="#_2-2-全局配置表"><span>2.2 全局配置表</span></a></h2>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html" target="_blank" rel="noopener noreferrer">点击进入小程序全局配置</a></p>
<h3 id="_2-2-1-pages-配置" tabindex="-1"><a class="header-anchor" href="#_2-2-1-pages-配置"><span>2.2.1 pages 配置</span></a></h3>
<p><code v-pre>pages</code> 字段: 用来指定小程序由哪些页面组成，用于让小程序知道由哪些页面组成以及页面定义在哪个目录，每一项都对应一个页面的路径信息。</p>
<p><img src="/application/weixin/base/041.png" alt=""></p>
<p>在配置 pages 字段时，有以下 注意事项:</p>
<ol>
<li>页面路由不需要写文件后缀，框架会自动去寻找对应位置的四个文件进行处理</li>
<li>小程序中新增/减少页面，都需要对 pages 数组进行修改</li>
<li>未指定 entryPagePath 时，数组的第一项代表小程序的初始页面(首页)</li>
</ol>
<h3 id="_2-2-2-window-配置" tabindex="-1"><a class="header-anchor" href="#_2-2-2-window-配置"><span>2.2.2 window 配置</span></a></h3>
<p><code v-pre>window</code> 字段: 用于设置小程序的状态栏、导航条、标题、窗口背景色。</p>
<p><img src="/application/weixin/base/042.png" alt=""></p>
<p>app.json</p>
<p><img src="/application/weixin/base/043.png" alt=""></p>
<h3 id="_2-2-3-bar-配置" tabindex="-1"><a class="header-anchor" href="#_2-2-3-bar-配置"><span>2.2.3 bar 配置</span></a></h3>
<p><code v-pre>tabBar</code> 字段: 定义小程序顶部、底部 <code v-pre>tab</code> 栏，用以实现页面之间的快速切换,可以通过 <code v-pre>tabBar</code> 配置项指定 <code v-pre>tab</code> 栏的表现，以及 <code v-pre>tab</code> 切换时显示的对应页面。</p>
<p><img src="/application/weixin/base/044.png" alt=""></p>
<p>app.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token string">"pages/cate/cate"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token string">"pages/cart/cart"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token string">"pages/profile/profile"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token string">"pages/list/list"</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"window"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"慕尚花坊"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#f3514f"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#efefef"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"backgroundTextStyle"</span><span class="token operator">:</span><span class="token string">"light"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">"tabBar"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token property">"selectedColor"</span><span class="token operator">:</span> <span class="token string">"#f3514f"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token property">"color"</span><span class="token operator">:</span> <span class="token string">"#666"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#bfbfbf"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token property">"borderStyle"</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token property">"position"</span><span class="token operator">:</span> <span class="token string">"bottom"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token property">"list"</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line highlighted">      <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"首页"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"/assets/tabbar/index.png"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"/assets/tabbar/index-active.png"</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">,</span> </span>
<span class="line highlighted">      <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"分类"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/cate/cate"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"/assets/tabbar/cate.png"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"/assets/tabbar/cate-active.png"</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">,</span> </span>
<span class="line highlighted">      <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"购物车"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/cart/cart"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"/assets/tabbar/cart.png"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"/assets/tabbar/cart-active.png"</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">,</span> </span>
<span class="line highlighted">      <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token property">"text"</span><span class="token operator">:</span><span class="token string">"我的"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"pagePath"</span><span class="token operator">:</span> <span class="token string">"pages/profile/profile"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"iconPath"</span><span class="token operator">:</span> <span class="token string">"/assets/tabbar/profile.png"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"selectedIconPath"</span><span class="token operator">:</span> <span class="token string">"/assets/tabbar/profile-active.png"</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span></span>
<span class="line highlighted">    <span class="token punctuation">]</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"style"</span><span class="token operator">:</span> <span class="token string">"v2"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"sitemapLocation"</span><span class="token operator">:</span> <span class="token string">"sitemap.json"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"lazyCodeLoading"</span><span class="token operator">:</span> <span class="token string">"requiredComponents"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/045.png" alt=""></p>
<h2 id="_2-3-页面配置" tabindex="-1"><a class="header-anchor" href="#_2-3-页面配置"><span>2.3 页面配置</span></a></h2>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html" target="_blank" rel="noopener noreferrer">点击进入小程序页面配置</a></p>
<p><code v-pre>tabBar</code> 字段: 定义小程序顶部、底部 tab 栏，用以实现页面之间的快速切换,
可以通过 <code v-pre>tabBar</code> 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。</p>
<p>cate.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"navigationBarTitleText"</span><span class="token operator">:</span> <span class="token string">"商品分类"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"navigationBarBackgroundColor"</span><span class="token operator">:</span> <span class="token string">"#00af92"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"enablePullDownRefresh"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"backgroundTextStyle"</span><span class="token operator">:</span><span class="token string">"light"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<p><img src="/application/weixin/base/046.png" alt=""></p>
<h2 id="_2-4-项目配置文件" tabindex="-1"><a class="header-anchor" href="#_2-4-项目配置文件"><span>2.4 项目配置文件</span></a></h2>
<p><a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/projectconfig.html" target="_blank" rel="noopener noreferrer">点击进入小程序项目配置文件</a></p>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3>
<p>在创建项目的时候，每个项目的根目录生成两个 <code v-pre>confg.json</code> 文件，用于保存开发者在工具上做的个性化配置，例如和编译有关的配置。</p>
<p>当重新安装微信开发者工具或换电脑工作时，只要载入同一个项目的代码包，开发者工具就会自动恢复到当时开发项目时的个性化配置。</p>
<p>项目根目录中的 <code v-pre>project.config.json</code> 和 <code v-pre>project.private.config.json </code>文件都可以对项目进行配置</p>
<ul>
<li><code v-pre>project.config.json</code>: 项目配置文件，常用来进行配置公共的配置</li>
<li><code v-pre>project.private.config.json</code>: 项目私有的配置，常用来配置个人的配置</li>
</ul>
<blockquote>
<p>注意事项:</p>
<ol>
<li>project.private.config.json 写到 .gitignore 避免版本管理的冲突</li>
<li>与最终编译结果有关的设置 必须 设置到 project.confg.json 中</li>
</ol>
</blockquote>
<p>project.config.json</p>
<p><img src="/application/weixin/base/047.png" alt=""></p>
<p>project.private.config.json</p>
<p><img src="/application/weixin/base/048.png" alt=""></p>
<p>总结：影响编译结果的放到<code v-pre>project.config.json</code>,不影响的放入<code v-pre>project.private.config.json</code></p>
<h3 id="_2-4-2-示例配置sass" tabindex="-1"><a class="header-anchor" href="#_2-4-2-示例配置sass"><span>2.4.2 示例配置sass</span></a></h3>
<ol>
<li>修改 <code v-pre>project.config.json</code>,添加sass编译</li>
</ol>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"setting"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">       <span class="token property">"useCompilerPlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"sass"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>删除 cate.wxss</p>
</li>
<li>
<p>新建 cate.scss 并填充内容</p>
</li>
</ol>
<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss"><pre v-pre><code><span class="line"><span class="token selector">text</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>运行结果</li>
</ol>
<p><img src="/application/weixin/base/049.png" alt=""></p>
<h2 id="_2-5-sitemap-json文件" tabindex="-1"><a class="header-anchor" href="#_2-5-sitemap-json文件"><span>2.5 sitemap.json文件</span></a></h2>
<p><code v-pre>sitemap.json</code> 文件:配置小程序及其页面是否允许被微信索引，提高小程序在微信内部被用户搜索到的概率</p>
<p>微信现已开放小程序内搜索，开发者可以通过 <code v-pre>sitemap.json</code> 配置来设置小程序页面是否允许微信索引。当开发者允许微信索引时，微信会通过爬虫的形式，为小程序的页面内容建立索引。当用户的搜索词条触发该索引时，小程序的页面将可能展示在搜索结果中</p>
<blockquote>
<p>注意事项:</p>
<ol>
<li>注: 没有 <code v-pre>sitemap.json</code> 则默认所有页面都能被索引</li>
<li>{&quot;action&quot;: &quot;allow&quot;,&quot;page&quot;:“*&quot;}是优先级最低的默认规则，未显式指明&quot;disallow&quot; 的都默认被索引</li>
</ol>
</blockquote>
<p>app.json 中有配置位置</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"sitemapLocation"</span><span class="token operator">:</span> <span class="token string">"sitemap.json"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原始 sitemap.json 配置</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"allow"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"page"</span><span class="token operator">:</span> <span class="token string">"*"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>此配置所有文件都进行索引搜索</p>
</blockquote>
<p>修改 sitemap.json 配置</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"action"</span><span class="token operator">:</span> <span class="token string">"disallow"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"page"</span><span class="token operator">:</span> <span class="token string">"pages/index/index"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>仅有 <code v-pre>pages/index/index</code> 不被检索到</p>
</blockquote>
</div></template>


