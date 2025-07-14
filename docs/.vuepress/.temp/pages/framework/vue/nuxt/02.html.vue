<template><div><h1 id="二、认识与使用" tabindex="-1"><a class="header-anchor" href="#二、认识与使用"><span>二、认识与使用</span></a></h1>
<h2 id="_2-1-认识nuxt" tabindex="-1"><a class="header-anchor" href="#_2-1-认识nuxt"><span>2.1 认识nuxt</span></a></h2>
<ol>
<li>
<p>Nuxt 使用 h3来实现部署可移植性</p>
</li>
<li>
<p>Nuxt 框架可以用来快速构建下一个 Vue.js 应用程序，如支持 CSR 、SSR、SSG 渲染模式的应用等</p>
</li>
</ol>
<p>特点</p>
<ul>
<li>Nuxt3 是基于 Vue3 + Vue Router + Vite 等技术栈，全程 Vue3+Vite 开发体验（Fast）。</li>
<li>自动导包
<ul>
<li>Nuxt 会自动导入辅助函数、组合 API和 Vue API ，无需手动导入。</li>
<li>基于规范的目录结构，Nuxt 还可以对自己的组件、 插件使用自动导入</li>
</ul>
</li>
<li>约定式路由（目录结构即路由）
<ul>
<li>Nuxt 路由基于vue-router，在 pages/ 目录中创建的每个页面，都会根据目录结构和文件名来自动生成路由</li>
</ul>
</li>
<li>渲染模式：Nuxt 支持多种渲染模式（SSR、CSR、SSG等）
<ul>
<li>通用渲染（服务器端渲染和水合）</li>
<li>仅客户端渲染</li>
<li>全静态站点生成</li>
<li>混合渲染（每条路由缓存策略）</li>
</ul>
</li>
<li>利于搜索引擎优化：服务器端渲染模式，不但可以提高首屏渲染速度，还利于SEO</li>
<li>服务器引擎
<ul>
<li>在开发环境中，它使用 Rollup 和 Node.js</li>
<li>在生产环境中，使用 Nitro 将您的应用程序和服务器构建到一个通用.output目录中</li>
<li>Nitro服务引擎提供了跨平台部署的支持，包括 Node、Deno、Serverless、Workers等平台上部署</li>
</ul>
</li>
</ul>
<h2 id="_2-2-创建初始化目录" tabindex="-1"><a class="header-anchor" href="#_2-2-创建初始化目录"><span>2.2 创建初始化目录</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx nuxi@latest init myNuxt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


