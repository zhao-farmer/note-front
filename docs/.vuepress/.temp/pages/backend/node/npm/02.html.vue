<template><div><h1 id="二、nrm使用" tabindex="-1"><a class="header-anchor" href="#二、nrm使用"><span>二、nrm使用</span></a></h1>
<h2 id="_2-1-什么是-nrm" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是-nrm"><span>2.1 什么是 nrm？</span></a></h2>
<p>nrm（NPM registry manager）是 NPM 的镜像源管理工具，使用它可以快速切换 npm 命令镜像源。</p>
<p>作为前端开发，你一定使用过 npm 来安装第三方依赖包，但由于 NPM 默认的下载仓储地址是 https://registry.npmjs.org/，属于外国的网站，所以我们下载的时候可能会非常的慢。所以淘宝也做了一个 NPM 的镜像网站（看这里）。</p>
<p>比如我们切换成淘宝镜像源，我们可以通过以下命令完成切换：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 设置淘宝镜像</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com/</span>
<span class="line"><span class="token comment"># 或者直接在 npm 配置文件修改</span></span>
<span class="line"><span class="token function">npm</span> config edit</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-1-安装与使用" tabindex="-1"><a class="header-anchor" href="#_2-1-安装与使用"><span>2.1 安装与使用</span></a></h2>
<ol>
<li>全局安装</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-g</span> nrm</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>查看版本</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">nrm <span class="token parameter variable">-V</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>查看所有源
其中 * 号表示当前使用的源。</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">nrm <span class="token function">ls</span></span>
<span class="line"></span>
<span class="line">* <span class="token function">npm</span> -------- https://registry.npmjs.org/</span>
<span class="line">  <span class="token function">yarn</span> ------- https://registry.yarnpkg.com/</span>
<span class="line">  cnpm ------- http://r.cnpmjs.org/</span>
<span class="line">  taobao ----- https://registry.npmmirror.com/</span>
<span class="line">  nj --------- https://registry.nodejitsu.com/</span>
<span class="line">  npmMirror -- https://skimdb.npmjs.com/registry/</span>
<span class="line">  edunpm ----- http://registry.enpmjs.org/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者通过 nrm current 命令查看当前源的名称。</p>
<ol start="4">
<li>切换源
其中 <code v-pre>&lt;registry&gt;</code> 就是上面命令所列出来的名称。</li>
</ol>
<p>相比上面的命令，是不是方便好记多了。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">nrm use <span class="token operator">&lt;</span>registry<span class="token operator">></span></span>
<span class="line"><span class="token comment"># 例如 nrm use taobao</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意切换源之后，我们安装依赖仍使用 <code v-pre>npm i &lt;name&gt;</code> 的方式来进行安装。</p>
<ol start="5">
<li>添加源
适用于企业内部定制的私有源，<code v-pre>&lt;registry&gt;</code> 表示源名称，<code v-pre>&lt;url&gt;</code> 表示源地址。</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">nrm <span class="token function">add</span> <span class="token operator">&lt;</span>registry<span class="token operator">></span> <span class="token operator">&lt;</span>url<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="6">
<li>删除源</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">nrm del <span class="token operator">&lt;</span>registry<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="7">
<li>测试源的响应时间</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">nrm <span class="token builtin class-name">test</span> <span class="token operator">&lt;</span>registry<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


