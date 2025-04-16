<template><div><h1 id="一、快速开始" tabindex="-1"><a class="header-anchor" href="#一、快速开始"><span>一、快速开始</span></a></h1>
<h2 id="_1-1-安装准备" tabindex="-1"><a class="header-anchor" href="#_1-1-安装准备"><span>1.1 安装准备</span></a></h2>
<ul>
<li>Node.js 18 及以上版本。</li>
<li>通过命令行界面 (CLI) 访问 VitePress 的终端。</li>
<li>支持 Markdown 语法的编辑器（vscode有markdown插件）。</li>
</ul>
<p>安装命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vitepress</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_1-2-安装向导" tabindex="-1"><a class="header-anchor" href="#_1-2-安装向导"><span>1.2 安装向导</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">npx vitepress init</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">┌  Welcome to VitePress!</span>
<span class="line">│</span>
<span class="line">◇  Where should VitePress initialize the config?</span>
<span class="line">│  ./docs</span>
<span class="line">│</span>
<span class="line">◇  Site title:</span>
<span class="line">│  study</span>
<span class="line">│</span>
<span class="line">◇  Site description:</span>
<span class="line">│  A VitePress Site</span>
<span class="line">│</span>
<span class="line">◇  Theme:</span>
<span class="line">│  Default Theme</span>
<span class="line">│</span>
<span class="line">◇  Use TypeScript for config and theme files?</span>
<span class="line">│  Yes</span>
<span class="line">│</span>
<span class="line">◇  Add VitePress npm scripts to package.json?</span>
<span class="line">│  Yes</span>
<span class="line">│</span>
<span class="line">└  Done! Now run npm run docs:dev and start writing.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-文件结构" tabindex="-1"><a class="header-anchor" href="#_1-3-文件结构"><span>1.3 文件结构</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">├─ docs </span>
<span class="line">│  ├─ .vitepress</span>
<span class="line">│  │  └─ config.js</span>
<span class="line">│  ├─ api-examples.md</span>
<span class="line">│  ├─ markdown-examples.md</span>
<span class="line">│  └─ index.md</span>
<span class="line">└─ package.json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>docs 目录作为 VitePress 站点的项目根目录。</li>
<li>.vitepress 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。</li>
</ul>
<h2 id="_1-4-配置文件" tabindex="-1"><a class="header-anchor" href="#_1-4-配置文件"><span>1.4 配置文件</span></a></h2>
<p>配置文件 (.vitepress/config.js) 让你能够自定义 VitePress 站点的各个方面，最基本的选项是站点的标题和描述：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 站点级选项</span></span>
<span class="line">  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'VitePress'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'Just playing around.'</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 主题级选项</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-源文件" tabindex="-1"><a class="header-anchor" href="#_1-5-源文件"><span>1.5 源文件</span></a></h2>
<p>.vitepress 目录之外的 Markdown 文件被视为源文件。</p>
<p>VitePress 使用 基于文件的路由：每个 .md 文件将在相同的路径被编译成为 .html 文件。例如，index.md 将会被编译成 index.html，可以在生成的 VitePress 站点的根路径 / 进行访问。</p>
<p>VitePress 还提供了生成简洁 URL、重写路径和动态生成页面的能力。这些将在路由指南中进行介绍。</p>
<h2 id="_1-6-启动并运行" tabindex="-1"><a class="header-anchor" href="#_1-6-启动并运行"><span>1.6 启动并运行</span></a></h2>
<ol>
<li>使用脚本脚本启动</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run docs:dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>直接调用 VitePress</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">npx vitepress dev docs</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


