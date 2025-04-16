<template><div><h1 id="一、npm使用" tabindex="-1"><a class="header-anchor" href="#一、npm使用"><span>一、npm使用</span></a></h1>
<h2 id="_1-1-概述" tabindex="-1"><a class="header-anchor" href="#_1-1-概述"><span>1.1 概述</span></a></h2>
<p>npm（全称Node Package Manager）是Node.js的包管理工具</p>
<h3 id="_1-1-1-定义与功能" tabindex="-1"><a class="header-anchor" href="#_1-1-1-定义与功能"><span>1.1.1 定义与功能</span></a></h3>
<p>npm是Node.js的默认包管理工具，它提供了一个模块仓库，允许开发人员从仓库中下载已发布的模块到本地，并可以将自己开发的模块发布到仓库中供他人使用。npm的主要功能包括：</p>
<ol>
<li>包安装和管理：通过npm，用户可以方便地安装、更新、删除JavaScript包。</li>
<li>依赖管理：npm能够管理项目的依赖关系，确保项目的稳定性和一致性。</li>
<li>包发布和管理：开发者可以使用npm发布自己的包到npm注册表，并管理自己的包。</li>
<li>脚本执行：npm允许开发者在package.json中定义脚本，并通过npm运行这些脚本，从而简化开发流程。</li>
</ol>
<h3 id="_1-1-2-基本命令" tabindex="-1"><a class="header-anchor" href="#_1-1-2-基本命令"><span>1.1.2 基本命令</span></a></h3>
<p>npm提供了一系列命令行工具，用于执行各种包管理操作。以下是一些常用的<code v-pre>npm</code>命令：</p>
<ol>
<li>npm install：安装包到当前项目的<code v-pre>node_modules</code>目录，并更新<code v-pre>package.json</code>和<code v-pre>package-lock.json</code>文件。</li>
<li>npm uninstall：卸载已安装的包。</li>
<li>npm update：更新项目中的包到最新版本。</li>
<li>npm list：列出已安装的包及其依赖关系。</li>
<li>npm init：初始化一个新的npm项目，并生成package.json文件。</li>
<li>npm publish：将包发布到npm注册表。</li>
<li>npm run：运行package.json中定义的脚本。</li>
</ol>
<h3 id="_1-1-3-配置文件与注册表" tabindex="-1"><a class="header-anchor" href="#_1-1-3-配置文件与注册表"><span>1.1.3 配置文件与注册表</span></a></h3>
<ol>
<li>配置文件：npm的配置文件为~/.npmrc或项目根目录下的.npmrc文件。这些文件用于存储npm的配置信息，如注册表地址、全局安装包的路径、代理服务器地址等。</li>
<li>注册表：npm registry是npm包的存储和分发中心。通过registry，开发者可以发布、发现和安装npm包。常用的npm registry有npm官方注册表（https://registry.npmjs.org/）和淘宝npm镜像（https://registry.npm.taobao.org/）等。</li>
</ol>
<h3 id="_1-1-4-应用场景" tabindex="-1"><a class="header-anchor" href="#_1-1-4-应用场景"><span>1.1.4 应用场景</span></a></h3>
<p>npm在JavaScript开发中有着广泛的应用场景，包括但不限于：</p>
<ol>
<li>Web开发：使用npm安装前端框架（如React、Vue.js、Angular）、构建工具（如Webpack、Gulp）、开发服务器等。</li>
<li>Node.js应用：管理Node.js项目的依赖关系，执行各种脚本和任务，如安装中间件、运行测试等。</li>
<li>前端工程化：自动化构建、测试和部署等任务，使用npm安装构建工具、测试框架和部署工具。</li>
<li>包开发：创建、测试和发布自己的npm包，供其他开发者使用。</li>
</ol>
<h3 id="_1-1-5-高级特性" tabindex="-1"><a class="header-anchor" href="#_1-1-5-高级特性"><span>1.1.5 高级特性</span></a></h3>
<p>npm还提供了一些高级特性和使用技巧，如：</p>
<ol>
<li>npm Workspaces：允许在一个package.json文件中管理多个项目，简化开发流程。</li>
<li>npm ci：在持续集成（CI）环境中使用，提供更快的安装速度，并且只安装package-lock.json或npm-shrinkwrap.json中列出的依赖。</li>
<li>npm Outdated：检查哪些包已经过时，以便及时更新。</li>
<li>npm Link：在开发多个包时，创建符号链接以共享代码。</li>
<li>npm Deprecate：弃用一个包，并给出自定义的弃用理由。</li>
<li>npm Access：管理包的访问权限，如设置为公开或受限。</li>
</ol>
<p>综上所述，npm是JavaScript开发中不可或缺的工具之一，为开发者提供了高效、灵活和可靠的包管理解决方案。</p>
<h2 id="_1-2-环境设置" tabindex="-1"><a class="header-anchor" href="#_1-2-环境设置"><span>1.2 环境设置</span></a></h2>
<p>npm（Node Package Manager）的环境相关配置通常涉及设置镜像源、全局依赖存储路径、缓存路径等。以下是一些常用的npm环境配置命令行：</p>
<h3 id="_1-2-1-设置镜像源" tabindex="-1"><a class="header-anchor" href="#_1-2-1-设置镜像源"><span>1.2.1 设置镜像源</span></a></h3>
<p>由于npm默认的镜像源在国外，有时会导致下载速度较慢。为了提高下载速度，可以配置使用国内的镜像源，如阿里镜像、腾讯镜像、华为镜像等。</p>
<ol>
<li>配置使用阿里镜像：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>配置使用腾讯镜像：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://mirrors.cloud.tencent.com/npm/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>配置使用华为镜像：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://mirrors.huaweicloud.com/repository/npm/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>恢复到npm官方源：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="5">
<li>查看当前registry的配置：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config get registry</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="6">
<li>登录到仓库</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> login</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-2-2-配置全局依赖存储路径" tabindex="-1"><a class="header-anchor" href="#_1-2-2-配置全局依赖存储路径"><span>1.2.2 配置全局依赖存储路径</span></a></h3>
<p>npm的全局依赖默认安装在系统的某个特定目录下。为了管理方便，可以配置一个自定义的全局依赖存储路径。</p>
<ol>
<li>配置全局依赖存储路径（例如D:\GlobalNodeModules）：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">"D:\GlobalNodeModules"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>查看当前的全局依赖存储路径：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config get prefix</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-2-3-配置缓存路径" tabindex="-1"><a class="header-anchor" href="#_1-2-3-配置缓存路径"><span>1.2.3 配置缓存路径</span></a></h3>
<p>npm会将下载的包存储在本地缓存中，以便在之后的安装过程中重复使用，避免重复下载。可以配置一个自定义的缓存路径。</p>
<ol>
<li>配置缓存路径（例如D:\npm_repository\npm-cache）：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">"D:<span class="token entity" title="\n">\n</span>pm_repository<span class="token entity" title="\n">\n</span>pm-cache"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>查看当前的缓存路径：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config get cache</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-2-4-查看所有配置" tabindex="-1"><a class="header-anchor" href="#_1-2-4-查看所有配置"><span>1.2.4 查看所有配置</span></a></h3>
<p>要查看npm的所有配置信息，可以使用以下命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> config list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-2-5-清除缓存" tabindex="-1"><a class="header-anchor" href="#_1-2-5-清除缓存"><span>1.2.5 清除缓存</span></a></h3>
<p>有时需要清除npm的本地缓存，可以使用以下命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> cache clean <span class="token parameter variable">--force</span>  <span class="token comment"># 旧版npm使用</span></span>
<span class="line"><span class="token function">npm</span> cache verify         <span class="token comment"># 验证缓存数据的完整性，并尝试修复任何问题</span></span>
<span class="line"><span class="token function">npm</span> cache clean <span class="token parameter variable">--all</span>    <span class="token comment"># 新版npm使用，清除所有缓存数据</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code v-pre>npm cache clean --force</code>命令在新版npm中可能已经被弃用，建议使用<code v-pre>npm cache clean --all</code>或<code v-pre>npm cache verify</code>来管理缓存。</p>
<h3 id="_1-2-6-升级npm版本" tabindex="-1"><a class="header-anchor" href="#_1-2-6-升级npm版本"><span>1.2.6 升级npm版本</span></a></h3>
<p>如果node中自带的npm版本过低，可以升级到最新版本以提高性能和安全性。</p>
<ol>
<li>查看当前npm版本：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>升级到最新版本：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> npm@latest <span class="token parameter variable">-g</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-2-7-设置和取消代理" tabindex="-1"><a class="header-anchor" href="#_1-2-7-设置和取消代理"><span>1.2.7 设置和取消代理</span></a></h3>
<ol>
<li>设置代理</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 设置http代理</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> <span class="token assign-left variable">proxy</span><span class="token operator">=</span>http://127.0.0.1:8087</span>
<span class="line"><span class="token comment"># 设置https代理</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> https-proxy http://server:port</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用带用户名和密码的代理</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># http代理</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> proxy http://username:password@server:port</span>
<span class="line"><span class="token comment"># https代理</span></span>
<span class="line"><span class="token function">npm</span> confit <span class="token builtin class-name">set</span> https-proxy http://username:password@server:port</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>取消代理</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># http代理</span></span>
<span class="line"><span class="token function">npm</span> config delete proxy</span>
<span class="line"><span class="token comment"># https代理</span></span>
<span class="line"><span class="token function">npm</span> config delete https-proxy</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是一些常用的npm环境配置命令行，它们可以帮助你更好地管理和优化npm的使用环境。</p>
<h2 id="_1-3-npm组件打包" tabindex="-1"><a class="header-anchor" href="#_1-3-npm组件打包"><span>1.3 npm组件打包</span></a></h2>
<p>在npm（Node Package Manager）中，包构建命令通常指的是用于创建、打包和发布npm包的命令。以下是一些与npm包构建相关的常用命令：</p>
<h3 id="_1-3-1-初始化项目" tabindex="-1"><a class="header-anchor" href="#_1-3-1-初始化项目"><span>1.3.1 初始化项目</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> init</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：初始化一个新的npm项目，并生成package.json文件。这个文件包含了项目的元数据，如包名、版本、描述、入口文件等，以及项目的依赖关系。</li>
<li>使用方法：在项目目录下运行npm init，然后按照提示输入相关信息，或者使用-y参数快速生成包含默认值的package.json文件。</li>
</ul>
<h3 id="_1-3-2-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-3-2-安装依赖"><span>1.3.2 安装依赖</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：安装项目所需的依赖包。这些依赖包会被安装在<code v-pre>node_modules</code>目录下，并在<code v-pre>package.json</code>文件的<code v-pre>dependencies</code>或<code v-pre>devDependencies</code>字段中列出。</li>
<li>使用方法：运行<code v-pre>npm install &lt;package-name&gt;</code>来安装指定的包，或者使用<code v-pre>--save</code>（或<code v-pre>-S</code>）参数将其添加到<code v-pre>dependencies</code>中，使用<code v-pre>--save-dev</code>（或<code v-pre>-D</code>）参数将其添加到devDependencies中。</li>
</ul>
<h3 id="_1-3-3-构建脚本" tabindex="-1"><a class="header-anchor" href="#_1-3-3-构建脚本"><span>1.3.3 构建脚本</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：运行<code v-pre>package.json</code>文件中定义的脚本。这些脚本可以用于构建、测试、启动项目等任务。</li>
<li>使用方法：在<code v-pre>package.json</code>的<code v-pre>scripts</code>字段中定义脚本，然后运行<code v-pre>npm run &lt;script-name&gt;</code>来执行该脚本。例如，可以定义一个名为build的脚本，用于构建项目，然后运行<code v-pre>npm run build</code>来执行构建任务。</li>
</ul>
<h3 id="_1-2-4-打包项目" tabindex="-1"><a class="header-anchor" href="#_1-2-4-打包项目"><span>1.2.4 打包项目</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> pack</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：打包当前项目，生成一个.tgz格式的压缩包。这个压缩包包含了项目的所有内容和依赖信息，可以用于发布到npm仓库或其他地方。</li>
<li>使用方法：在项目目录下运行<code v-pre>npm pack</code>命令。</li>
</ul>
<h3 id="_1-2-5-发布包" tabindex="-1"><a class="header-anchor" href="#_1-2-5-发布包"><span>1.2.5 发布包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> publish</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：将当前项目发布到npm仓库中。在发布之前，需要确保已经登录了npm账号，并且<code v-pre>package.json</code>文件中的信息完整无误。</li>
<li>使用方法：在项目目录下运行<code v-pre>npm publish</code>命令。如果之前已经发布过相同版本的包，需要先更新版本号或撤销之前的发布。</li>
</ul>
<h3 id="_1-2-6-其他常用命令" tabindex="-1"><a class="header-anchor" href="#_1-2-6-其他常用命令"><span>1.2.6 其他常用命令</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> version</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：更新<code v-pre>package.json</code>文件中的版本号，并创建一个新的版本提交（<code v-pre>git commit</code>）。这个命令通常用于在发布新版本之前更新版本号。</li>
<li>使用方法：运行<code v-pre>npm version &lt;newversion&gt;</code>来更新版本号，其中<code v-pre>&lt;newversion&gt;</code>是新的版本号（如1.0.1）。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> audit</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：检查项目依赖中是否存在已知的安全漏洞，并给出修复建议。</li>
<li>使用方法：在项目目录下运行<code v-pre>npm audit</code>命令。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> outdated</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：列出当前项目中需要更新的依赖包及其最新版本。</li>
<li>使用方法：在项目目录下运行<code v-pre>npm outdated</code>命令。</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> uninstall</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：卸载项目中的依赖包。</li>
<li>使用方法：运行<code v-pre>npm uninstall &lt;package-name&gt;</code>来卸载指定的包。</li>
</ul>
<p>总结</p>
<p>npm包构建命令涵盖了从项目初始化、依赖安装、构建脚本定义、项目打包到发布包等一系列操作。熟练掌握这些命令对于开发和管理npm包至关重要。在使用这些命令时，建议查阅npm的官方文档或帮助信息，以获取更详细和最新的说明。</p>
<h2 id="_1-4-项目构建相关" tabindex="-1"><a class="header-anchor" href="#_1-4-项目构建相关"><span>1.4 项目构建相关</span></a></h2>
<p>npm（Node Package Manager）在项目构建中扮演着至关重要的角色，提供了一系列命令行工具来管理项目依赖、运行脚本、发布包等。以下是一些与npm项目构建相关的常用命令行：</p>
<h3 id="_1-4-1-初始化项目" tabindex="-1"><a class="header-anchor" href="#_1-4-1-初始化项目"><span>1.4.1 初始化项目</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> init</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：创建一个新的<code v-pre>package.json</code>文件，该文件是<code v-pre>Node.js</code>项目的核心配置文件。</li>
<li>参数：通过一系列交互式问题，用户可以定义项目的基本信息，如名称、版本、描述、主入口文件等。</li>
<li>快速创建：使用<code v-pre>-y</code>参数可以快速创建并接受默认配置，例如<code v-pre>npm init -y</code>。</li>
</ul>
<h3 id="_1-4-2-安装依赖" tabindex="-1"><a class="header-anchor" href="#_1-4-2-安装依赖"><span>1.4.2 安装依赖</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：安装项目依赖的所有包，这些包会被添加到<code v-pre>node_modules</code>文件夹中，并在<code v-pre>package.json</code>的<code v-pre>dependencies</code>字段中记录。</li>
<li>安装指定包：<code v-pre>npm install &lt;package&gt;</code>，其中<code v-pre>&lt;package&gt;</code>是包的名称。</li>
<li>安装并保存为生产依赖：<code v-pre>npm install &lt;package&gt; --save</code>（或简写为-S），将包作为生产依赖添加到<code v-pre>dependencies</code>字段。</li>
<li>安装并保存为开发依赖：<code v-pre>npm install &lt;package&gt; --save-dev</code>（或简写为-D），将包作为开发依赖添加到<code v-pre>devDependencies</code>字段。</li>
</ul>
<h3 id="_1-4-3-更新依赖" tabindex="-1"><a class="header-anchor" href="#_1-4-3-更新依赖"><span>1.4.3 更新依赖</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> update</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：更新项目依赖的所有包到最新兼容版本。</li>
<li>更新指定包：<code v-pre>npm update &lt;package&gt;</code>，其中<code v-pre>&lt;package&gt;</code>是包的名称。</li>
</ul>
<h3 id="_1-4-4-查看依赖" tabindex="-1"><a class="header-anchor" href="#_1-4-4-查看依赖"><span>1.4.4 查看依赖</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> list</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：列出项目依赖的所有包。</li>
<li>查看指定包：<code v-pre>npm list &lt;package&gt;</code>，其中<code v-pre>&lt;package&gt;</code>是包的名称。</li>
<li>查看全局安装的包：<code v-pre>npm list -g</code>。</li>
</ul>
<h3 id="_1-4-5-卸载依赖" tabindex="-1"><a class="header-anchor" href="#_1-4-5-卸载依赖"><span>1.4.5 卸载依赖</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> uninstall</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：卸载本地依赖。</li>
<li>卸载指定包：<code v-pre>npm uninstall &lt;package&gt;</code>（或简写为<code v-pre>npm rm &lt;package&gt;</code>），其中<code v-pre>&lt;package&gt;</code>是包的名称。</li>
<li>从<code v-pre>package.json</code>中移除对应依赖记录：可以添加<code v-pre>--save</code>（或<code v-pre>-S</code>）或<code v-pre>--save-dev</code>（或<code v-pre>-D</code>）参数以确定是从哪个依赖列表中移除。</li>
<li>卸载全局包：<code v-pre>npm uninstall -g &lt;package&gt;</code>，其中<code v-pre>&lt;package&gt;</code>是包的名称。</li>
</ul>
<h3 id="_1-4-6-运行脚本" tabindex="-1"><a class="header-anchor" href="#_1-4-6-运行脚本"><span>1.4.6 运行脚本</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：运行package.json中定义的脚本。</li>
<li>示例：在Vue项目中，npm run serve用于启动开发服务器，npm run build用于构建生产环境的静态资源。</li>
</ul>
<h3 id="_1-4-7-自定义脚本" tabindex="-1"><a class="header-anchor" href="#_1-4-7-自定义脚本"><span>1.4.7 自定义脚本</span></a></h3>
<p>在<code v-pre>package.json</code>中添加脚本：</p>
<ul>
<li>可以在<code v-pre>package.json</code>的<code v-pre>scripts</code>字段中定义自定义脚本，例如：</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"npm run build:css &amp;&amp; npm run build:js"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"build:css"</span><span class="token operator">:</span> <span class="token string">"node-sass src/styles/main.scss dist/styles/main.css"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"build:js"</span><span class="token operator">:</span> <span class="token string">"babel src/js --out-dir dist/js"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后通过<code v-pre>npm run &lt;script-name&gt;</code>命令来运行这些脚本，例如<code v-pre>npm run build</code>。</p>
<h3 id="_1-4-8-发布包" tabindex="-1"><a class="header-anchor" href="#_1-4-8-发布包"><span>1.4.8 发布包</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> publish</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>功能：将包发布到npm注册表。</li>
<li>前提：需要先在npm上注册账号并登录，同时确保package.json中的信息完整且正确。</li>
</ul>
<h3 id="_1-4-9-其他常用命令" tabindex="-1"><a class="header-anchor" href="#_1-4-9-其他常用命令"><span>1.4.9 其他常用命令</span></a></h3>
<ul>
<li>npm outdated：检查项目依赖的包是否有更新。</li>
<li>npm config ls：查看当前npm的配置信息。</li>
<li>npm config set key value：设置npm的配置项，例如设置默认项目作者名称npm config set init-author-name &quot;Your Name&quot;。</li>
<li>npm search ：搜索npm仓库中的包。</li>
<li>npm view ：查看特定包的信息。</li>
</ul>
</div></template>


