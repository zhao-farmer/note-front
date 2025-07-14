<template><div><h1 id="六、打包项目" tabindex="-1"><a class="header-anchor" href="#六、打包项目"><span>六、打包项目</span></a></h1>
<h2 id="_6-1-使用-electron-forge-打包项目" tabindex="-1"><a class="header-anchor" href="#_6-1-使用-electron-forge-打包项目"><span>6.1 使用 Electron Forge 打包项目</span></a></h2>
<ol>
<li>初始化</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> init</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>
<p>配置electron下载路径</p>
<ul>
<li>
<p>目录下新建 <code v-pre>.npmrc</code> 文件</p>
</li>
<li>
<p>填充以下信息</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token constant">ELECTRON_MIRROR</span><span class="token operator">=</span><span class="token string">"https://npmmirror.com/mirrors/electron/"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>下载 <code v-pre>electron</code> 插件</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> electron --save-dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>导入项目到 Forge</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev @electron-forge/cli</span>
<span class="line">npx electron-forge <span class="token function">import</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>转换脚本完成后，Forge 会将一些脚本添加到您的 package.json 文件中。</p>
<p>package.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"06-project"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"main.js"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"electron-forge start"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token property">"package"</span><span class="token operator">:</span> <span class="token string">"electron-forge package"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token property">"make"</span><span class="token operator">:</span> <span class="token string">"electron-forge make"</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"@electron-forge/cli"</span><span class="token operator">:</span> <span class="token string">"^7.8.1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"@electron-forge/maker-deb"</span><span class="token operator">:</span> <span class="token string">"^7.8.1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"@electron-forge/maker-rpm"</span><span class="token operator">:</span> <span class="token string">"^7.8.1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"@electron-forge/maker-squirrel"</span><span class="token operator">:</span> <span class="token string">"^7.8.1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"@electron-forge/maker-zip"</span><span class="token operator">:</span> <span class="token string">"^7.8.1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"@electron-forge/plugin-auto-unpack-natives"</span><span class="token operator">:</span> <span class="token string">"^7.8.1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"@electron-forge/plugin-fuses"</span><span class="token operator">:</span> <span class="token string">"^7.8.1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"@electron/fuses"</span><span class="token operator">:</span> <span class="token string">"^1.8.0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"electron"</span><span class="token operator">:</span> <span class="token string">"^37.2.1"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"electron-squirrel-startup"</span><span class="token operator">:</span> <span class="token string">"^1.0.1"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果时开发阶段 直接将脚本命令复制到 package.json 因为重新打包因为app.asar很难重新打包</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"electron-forge start"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"package"</span><span class="token operator">:</span> <span class="token string">"electron-forge package"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"make"</span><span class="token operator">:</span> <span class="token string">"electron-forge make"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>复制项目文件到此目录</li>
</ol>
<p><img src="/application/electron/base/032.png" alt=""></p>
<ol start="6">
<li>开始打包</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run package</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="7">
<li>运行结果</li>
</ol>
<p><img src="/application/electron/base/033.gif" alt=""></p>
</div></template>


