<template><div><h1 id="三、nvm使用" tabindex="-1"><a class="header-anchor" href="#三、nvm使用"><span>三、nvm使用</span></a></h1>
<p>在工作中，我们可能同时在进行2个或者多个不同的项目开发，每个项目的需求不同，进而不同项目必须依赖不同版本的NodeJS运行环境，这种情况下，对于维护多个版本的node将会是一件非常麻烦的事情，nvm就是为了解决这个问题而产生的，他可以方便的在同一台设备上进行多个node版本之间切换。</p>
<p>1.什么是nvm
NodeVersionManager（NVM）在处理多项目中不同Node.js版本需求的解决方案。NVM允许轻松切换版本，包括下载远程LTS版本、Windows安装步骤、配置淘宝镜像、基本使用命令及常见操作。对于Node.js开发者来说，NVM简化了版本管理，提高工作效率。</p>
<h2 id="_3-1-为什么使用-nvm" tabindex="-1"><a class="header-anchor" href="#_3-1-为什么使用-nvm"><span>3.1 为什么使用 NVM？</span></a></h2>
<p>NVM 允许用户：</p>
<p>使用简单的命令在本地下载任何远程长期支持 （LTS） 版本的 Node.js。
直接从命令行在 Node.js 的多个版本之间轻松切换。
设置别名以轻松在不同下载版本的 Node.js之间切换。</p>
<h2 id="_3-2-下载与安装" tabindex="-1"><a class="header-anchor" href="#_3-2-下载与安装"><span>3.2 下载与安装</span></a></h2>
<h3 id="_3-2-1-卸载node" tabindex="-1"><a class="header-anchor" href="#_3-2-1-卸载node"><span>3.2.1 卸载node</span></a></h3>
<ol>
<li>
<p>zip安装
直接修改环境变量，不加入环境变量就卸载了</p>
</li>
<li>
<p>node.exe安装</p>
<ul>
<li>
<p>若之前已安装 Node，则需要先卸载
<br>    控制面板-&gt;软件卸载-&gt;卸载node.js</p>
</li>
<li>
<p>之后可以检查以下文件是否存在，若存在也删除</p>
</li>
</ul>
<p><br>   （此处默认安装路径为C:\Program Files\nodejs）</p>
<pre><code> ```
 C:\Program Files\nodejs
 C:\Program Files (x86)\nodejs
 C:\Users\{User}\AppData\Roaming\npm
 C:\Users\{User}\AppData\Roaming\npm-cache
 ```
</code></pre>
</li>
<li>
<p>cmd命令行检测系统中是否还存在nodejs</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">node</span> <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-2-2-下载nvm" tabindex="-1"><a class="header-anchor" href="#_3-2-2-下载nvm"><span>3.2.2 下载nvm</span></a></h3>
<p>GitHub下载：<a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noopener noreferrer">Releases · coreybutler/nvm-windows · GitHub</a></p>
<ul>
<li>下载exe能自动配置环境变量</li>
</ul>
<p><img src="/backend/node/npm/001.png" alt=""></p>
<ul>
<li>安装后，执行命令</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">nvm <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-2-3-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_3-2-3-配置环境变量"><span>3.2.3 配置环境变量</span></a></h3>
<p>高级系统设置-&gt;环境变量</p>
<p><img src="/backend/node/npm/002.png" alt=""></p>
<h3 id="_3-2-4-配置淘宝镜像" tabindex="-1"><a class="header-anchor" href="#_3-2-4-配置淘宝镜像"><span>3.2.4 配置淘宝镜像</span></a></h3>
<p>使用npm的同学应该都知道，使用淘宝镜像安装比较快。</p>
<p>npm（Node Package Manager）是 Node.js 的包管理器，用于安装、管理、卸载 JavaScript 模块。npm 提供了一个包管理器，使得开发者可以方便地使用第三方模块，同时也可以将自己编写的模块发布到 npm 上供其他人使用。</p>
<p>我们先找到nvm所在文件位置，点开setting</p>
<p><img src="/backend/node/npm/003.png" alt=""></p>
<p>里面的配置。原本只有2行代码。我们只需要在最后面追加2行代码即可：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">node_mirror: http://npmmirror.com/mirrors/node/</span>
<span class="line">npm_mirror: http://registry.npmmirror.com/mirrors/npm/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/backend/node/npm/004.png" alt=""></p>
<h2 id="_3-4-nvm使用" tabindex="-1"><a class="header-anchor" href="#_3-4-nvm使用"><span>3.4 nvm使用</span></a></h2>
<h3 id="_3-4-1-查看版本" tabindex="-1"><a class="header-anchor" href="#_3-4-1-查看版本"><span>3.4.1 查看版本</span></a></h3>
<p>执行以下命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 看安装的所有node.js的版本</span></span>
<span class="line">nvm <span class="token function">ls</span>                     </span>
<span class="line"><span class="token comment"># 查显示可以安装的所有node.js的版本</span></span>
<span class="line">nvm list available       </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尽量下载LTS版本，这些版本都是长期支持版本，经过广泛测试验证</p>
<p><img src="/backend/node/npm/005.png" alt=""></p>
<h3 id="_3-4-2-下载对应的版本" tabindex="-1"><a class="header-anchor" href="#_3-4-2-下载对应的版本"><span>3.4.2 下载对应的版本</span></a></h3>
<p>执行命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装对应node版本 （如：nvm install 22.14.0） </span></span>
<span class="line">nvm <span class="token function">install</span> 版本号  </span>
<span class="line"><span class="token comment"># 卸载对应node版本 （如：nvm uninstall 22.14.0） </span></span>
<span class="line">nvm uninstall 版本号    </span>
<span class="line"><span class="token comment"># 查看安装的版本</span></span>
<span class="line">nvm <span class="token function">ls</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-5-安装使用" tabindex="-1"><a class="header-anchor" href="#_3-4-5-安装使用"><span>3.4.5 安装使用</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 查看安装的版本</span></span>
<span class="line">nvm <span class="token function">ls</span></span>
<span class="line"><span class="token comment"># 使用对应node版本 （如：nvm use 22.14.0） </span></span>
<span class="line">nvm use 版本号  </span>
<span class="line"><span class="token comment"># 查询npm版本</span></span>
<span class="line"><span class="token function">npm</span> <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-6-常用命令" tabindex="-1"><a class="header-anchor" href="#_3-4-6-常用命令"><span>3.4.6 常用命令</span></a></h3>
<p>nvm命令行操作命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 1.禁用node.js版本管理(不卸载任何东西)</span></span>
<span class="line">nvm off</span>
<span class="line"><span class="token comment"># 2.启用node.js版本管理</span></span>
<span class="line">nvm on</span>
<span class="line"><span class="token comment"># 3.安装node.js的命名 version是版本号 例如：nvm install 8.12.0</span></span>
<span class="line">nvm <span class="token function">install</span> <span class="token operator">&lt;</span>version<span class="token operator">></span></span>
<span class="line"><span class="token comment"># 4.卸载node.js是的命令，卸载指定版本的nodejs，当安装失败时卸载使用</span></span>
<span class="line">nvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">></span></span>
<span class="line"><span class="token comment"># 5.显示所有安装的node.js版本</span></span>
<span class="line">nvm <span class="token function">ls</span> </span>
<span class="line"><span class="token comment"># 6.显示可以安装的所有node.js的版本</span></span>
<span class="line">nvm list available</span>
<span class="line"><span class="token comment"># 7.切换到使用指定的nodejs版本</span></span>
<span class="line">nvm use <span class="token operator">&lt;</span>version<span class="token operator">></span></span>
<span class="line"><span class="token comment"># 8.显示nvm版本</span></span>
<span class="line">nvm <span class="token function">v</span></span>
<span class="line"><span class="token comment"># 9.安装最新稳定版</span></span>
<span class="line">nvm <span class="token function">install</span> stable   </span>
<span class="line"><span class="token comment"># 10.显示当前版本</span></span>
<span class="line">nvm current </span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-5-npm配置" tabindex="-1"><a class="header-anchor" href="#_3-5-npm配置"><span>3.5 npm配置</span></a></h1>
<p>每个版本控制的缓存不一样，所以需要设置全局安装路径与缓存路径</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment">#全局安装路径</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">"D:\Program Files<span class="token entity" title="\n">\n</span>odejs<span class="token entity" title="\n">\n</span>ode_global"</span></span>
<span class="line"><span class="token comment">#缓存路径</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">"D:\Program Files<span class="token entity" title="\n">\n</span>odejs<span class="token entity" title="\n">\n</span>ode_cache"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


