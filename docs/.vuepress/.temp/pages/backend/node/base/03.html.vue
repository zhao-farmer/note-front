<template><div><h1 id="三、npm的使用" tabindex="-1"><a class="header-anchor" href="#三、npm的使用"><span>三、npm的使用</span></a></h1>
<h2 id="_3-1-包和npm" tabindex="-1"><a class="header-anchor" href="#_3-1-包和npm"><span>3.1 包和npm</span></a></h2>
<h3 id="_3-1-1-什么是包" tabindex="-1"><a class="header-anchor" href="#_3-1-1-什么是包"><span>3.1.1 什么是包</span></a></h3>
<p>由于 Node 是一套轻内核的平台，虽然提供了一系列的内置模块，但是不足以满足开发者的需求，于是乎出现了包（package）的概念： 与核心模块类似，就是将一些预先设计好的功能或者说 API 封装到一个文件夹，提供给开发者使用。</p>
<p>Node 本身并没有太多的功能性 API，所以市面上涌现出大量的第三方人员开发出来的 Package。</p>
<h3 id="_3-1-2-包的加载机制" tabindex="-1"><a class="header-anchor" href="#_3-1-2-包的加载机制"><span>3.1.2 包的加载机制</span></a></h3>
<p>Node.js中使用CommonJs模块化机制，通过npm下载的第三方包，我们在项目中引入第三方包都是：let xx = require('第三方包名')，究竟require方法加载第三方包的原理机制是什么，今天我们来探讨下。</p>
<ol>
<li>require('第三方包名')优先在加载该包的模块的同级目录node_modules中查找第三方包。</li>
<li>找到该第三方包中的package.json文件，并且找到里面的main属性对应的入口模块，该入口模块即为加载的第三方模块。</li>
<li>如果在要加载的第三方包中没有找到package.json文件或者是package.json文件中没有main属性，则默认加载第三方包中的index.js文件。</li>
<li>如果在加载第三方模块的文件的同级目录没有找到node_modules文件夹，或者以上所有情况都没有找到，则会向上一级父级目录下查找node_modules文件夹，查找规则如上一致。</li>
<li>如果一直找到该模块的磁盘根路径都没有找到，则会报错：can not find module xxx。</li>
</ol>
<p>比如说：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">requiere</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">fs</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>那加载的肯定是系统的包。所以，我们尽量不要创建一些和现有的包重名的包。</p>
<h3 id="_3-1-3-npm-的概念" tabindex="-1"><a class="header-anchor" href="#_3-1-3-npm-的概念"><span>3.1.3 npm 的概念</span></a></h3>
<p>NPM：Node Package Manager。官方链接：  https://www.npmjs.com/</p>
<p>Node.js 发展到现在，已经形成了一个非常庞大的生态圈。包的生态圈一旦繁荣起来，就必须有工具去来管理这些包。NPM 应运而生。</p>
<p>举个例子，当我们在使用 Java 语言做开发时，需要用到 JDK 提供的内置库，以及第三方库。同样，在使用 JS 做开发时，我们可以使用 NPM 包管理器，方便地使用成熟的、优秀的第三方框架，融合到我们自己的项目中，极大地加速日常开发的构建过程。</p>
<p>随着时间的发展，NPM 出现了两层概念：</p>
<ul>
<li>一层含义是 Node 的开放式模块登记和管理系统，亦可以说是一个生态圈，一个社区。</li>
<li>另一层含义是 Node 默认的模块管理器，是一个命令行下的软件，用来安装和管理 Node 模块。</li>
</ul>
<h3 id="_3-1-4-npm-的安装-不需要单独安装" tabindex="-1"><a class="header-anchor" href="#_3-1-4-npm-的安装-不需要单独安装"><span>3.1.4 npm 的安装（不需要单独安装）</span></a></h3>
<p>NPM 不需要单独安装。默认在安装 Node 的时候，会连带一起安装 NPM</p>
<p>输入 npm -v，查看 npm 的版本</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token parameter variable">-v</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>另外，Node 附带的 NPM 可能不是最新版本，可以用下面的命令，更新到最新版本：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token function">npm</span> <span class="token parameter variable">-g</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-1-5-配置-npm-的全局目录" tabindex="-1"><a class="header-anchor" href="#_3-1-5-配置-npm-的全局目录"><span>3.1.5 配置 NPM 的全局目录</span></a></h3>
<p>NPM 默认安装到当前正在使用 Node 版本所在目录下。我们建议重新配置 NPM 的全局目录。</p>
<p>输入npm config ls，查看配置信息</p>
<h2 id="_3-2-npm-命令" tabindex="-1"><a class="header-anchor" href="#_3-2-npm-命令"><span>3.2 NPM 命令</span></a></h2>
<h3 id="_3-2-1-设置npm路径" tabindex="-1"><a class="header-anchor" href="#_3-2-1-设置npm路径"><span>3.2.1 设置npm路径</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment">#全局安装路径</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> prefix <span class="token string">"D:\Program Files<span class="token entity" title="\n">\n</span>odejs<span class="token entity" title="\n">\n</span>ode_global"</span></span>
<span class="line"><span class="token comment">#缓存路径</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> cache <span class="token string">"D:\Program Files<span class="token entity" title="\n">\n</span>odejs<span class="token entity" title="\n">\n</span>ode_cache"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-2-设置镜像" tabindex="-1"><a class="header-anchor" href="#_3-2-2-设置镜像"><span>3.2.2 设置镜像</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 1淘宝镜像源</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com</span>
<span class="line"><span class="token comment"># 2腾讯云镜像源</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://mirrors.cloud.tencent.com/npm/</span>
<span class="line"><span class="token comment"># 3华为云镜像源</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://mirrors.huaweicloud.com/repository/npm/</span>
<span class="line"><span class="token comment"># 官方默认全局镜像</span></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org</span>
<span class="line"><span class="token comment"># 检查当前镜像</span></span>
<span class="line"><span class="token function">npm</span> config get registry</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-3-常用命令简写说明" tabindex="-1"><a class="header-anchor" href="#_3-2-3-常用命令简写说明"><span>3.2.3 常用命令简写说明</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">-g： <span class="token comment">#--global 的缩写，表示安装到全局目录里</span></span>
<span class="line">-S： <span class="token comment">#--save 的缩写，表示安装的包将写入package.json里面的dependencies</span></span>
<span class="line">-D： <span class="token comment">#--save-dev 的缩写，表示将安装的包将写入packege.json里面的devDependencies</span></span>
<span class="line"> i： <span class="token comment">#install的缩写，表示安装</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-4-初始化" tabindex="-1"><a class="header-anchor" href="#_3-2-4-初始化"><span>3.2.4 初始化</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># npm 初始化当前目录</span></span>
<span class="line"><span class="token function">npm</span> init  </span>
<span class="line"><span class="token comment"># npm 初始化并执行默认命令</span></span>
<span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-4-安装模块" tabindex="-1"><a class="header-anchor" href="#_3-2-4-安装模块"><span>3.2.4 安装模块</span></a></h3>
<ol>
<li>普通安装</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i   <span class="token comment"># 安装所有依赖</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span>   <span class="token comment"># 安装所有依赖</span></span>
<span class="line"><span class="token function">npm</span> i express  <span class="token comment"># 安装模块到默认dependencies</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>安装指定版本和临时源</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> express <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>安装依赖的环境</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i express <span class="token parameter variable">-g</span>  <span class="token comment"># 会安装到配置的全局目录下</span></span>
<span class="line"><span class="token function">npm</span> i express <span class="token parameter variable">-S</span>  <span class="token comment"># 安装包信息将加入到dependencies生产依赖</span></span>
<span class="line"><span class="token function">npm</span> i express <span class="token parameter variable">-D</span>  <span class="token comment"># 安装包信息将加入到devDependencies开发依赖</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>安装依赖的版本</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装特定版本</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> react@17.0.2</span>
<span class="line"><span class="token comment"># 安装最新版本</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> react@latest</span>
<span class="line"><span class="token comment"># 安装特定范围版本 </span></span>
<span class="line"><span class="token comment"># 1.安装react的17.x版本（任何17.x.x的版本）</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> react@17.x</span>
<span class="line"><span class="token comment"># 2. 安装大于或等于17.0.0且小于18.0.0的任何版本</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> react@<span class="token string">">=17.0.0 &lt;18.0.0"</span></span>
<span class="line"><span class="token comment"># 安装最新次要版本</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> react@^17.0.0</span>
<span class="line"><span class="token comment"># 安装最新补丁版本</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> react@~17.0.0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-5-卸载模块" tabindex="-1"><a class="header-anchor" href="#_3-2-5-卸载模块"><span>3.2.5 卸载模块</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> uninstall express  <span class="token comment"># 卸载模块，但不卸载模块留在package.json中的对应信息</span></span>
<span class="line"><span class="token function">npm</span> uninstall express <span class="token parameter variable">-g</span>  <span class="token comment"># 卸载全局模块</span></span>
<span class="line"><span class="token function">npm</span> uninstall express <span class="token parameter variable">--save</span>  <span class="token comment"># 卸载模块，同时卸载留在package.json中dependencies下的信息</span></span>
<span class="line"><span class="token function">npm</span> uninstall express --save-dev  <span class="token comment"># 卸载模块，同时卸载留在package.json中devDependencies下的信息</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-6-更新模块" tabindex="-1"><a class="header-anchor" href="#_3-2-6-更新模块"><span>3.2.6 更新模块</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> update express  <span class="token comment"># 更新最新版本的express</span></span>
<span class="line"><span class="token function">npm</span> update express@2.1.0  <span class="token comment"># 更新到指定版本号的express</span></span>
<span class="line"><span class="token function">npm</span> update express@latest  <span class="token comment"># 更新到最后的新版本</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-7-查看命令" tabindex="-1"><a class="header-anchor" href="#_3-2-7-查看命令"><span>3.2.7 查看命令</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token parameter variable">-v</span>   <span class="token comment">#查看版本号</span></span>
<span class="line"><span class="token function">npm</span> root  <span class="token comment"># 查看项目中模块所在的目录</span></span>
<span class="line"><span class="token function">npm</span> root <span class="token parameter variable">-g</span>  <span class="token comment"># 查看全局安装的模块所在目录</span></span>
<span class="line"><span class="token function">npm</span> list 或者 <span class="token function">npm</span> <span class="token function">ls</span>  <span class="token comment"># 查看本地已安装模块的清单列表</span></span>
<span class="line"><span class="token function">npm</span> view express dependencies  <span class="token comment"># 查看某个包对于各种包的依赖关系</span></span>
<span class="line"><span class="token function">npm</span> view express version  <span class="token comment"># 查看express最新的版本号</span></span>
<span class="line"><span class="token function">npm</span> view express versions  <span class="token comment"># 查看所有express历史版本号（很实用）</span></span>
<span class="line"><span class="token function">npm</span> view express  <span class="token comment"># 查看最新的express版本的信息</span></span>
<span class="line"><span class="token function">npm</span> info express  <span class="token comment"># 查看express的详细信息，等同于上面的npm view express</span></span>
<span class="line"><span class="token function">npm</span> list express 或 <span class="token function">npm</span> <span class="token function">ls</span> express  <span class="token comment"># 查看本地已安装的express的详细信息</span></span>
<span class="line"><span class="token function">npm</span> view express repository.url  <span class="token comment"># 查看express包的来源地址</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-8-其他命令" tabindex="-1"><a class="header-anchor" href="#_3-2-8-其他命令"><span>3.2.8 其他命令</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> cache clean  <span class="token comment"># 清除npm的缓存</span></span>
<span class="line"><span class="token function">npm</span> prune  <span class="token comment"># 清除项目中没有被使用的包</span></span>
<span class="line"><span class="token function">npm</span> outdated  <span class="token comment"># 检查模块是否已经过时</span></span>
<span class="line"><span class="token function">npm</span> repo express  <span class="token comment"># 会打开默认浏览器跳转到github中express的页面</span></span>
<span class="line"><span class="token function">npm</span> docs express  <span class="token comment"># 会打开默认浏览器跳转到github中express的README.MD文件信息</span></span>
<span class="line"><span class="token function">npm</span> home express  <span class="token comment"># 会打开默认浏览器跳转到github中express的主页</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> npm@9.8.1 <span class="token comment"># 升级npm</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-package-json文件与package-lock-json" tabindex="-1"><a class="header-anchor" href="#_3-4-package-json文件与package-lock-json"><span>3.4 package.json文件与package-lock.json</span></a></h2>
<h3 id="_3-4-1-生成文件" tabindex="-1"><a class="header-anchor" href="#_3-4-1-生成文件"><span>3.4.1 生成文件</span></a></h3>
<ol>
<li>执行命令</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 初始化npm</span></span>
<span class="line"><span class="token function">npm</span> init </span>
<span class="line"><span class="token comment"># 使用express</span></span>
<span class="line"><span class="token function">npm</span> i express</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>内容展示</li>
</ol>
<p>目录</p>
<p><img src="/backend/node/base/003.png" alt=""></p>
<p>package.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"express"</span><span class="token operator">:</span> <span class="token string">"^4.21.2"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>package-lock.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"lockfileVersion"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"requires"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"packages"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">""</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"express"</span><span class="token operator">:</span> <span class="token string">"^4.21.2"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"node_modules/accepts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.3.8"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"resolved"</span><span class="token operator">:</span> <span class="token string">"https://registry.npmmirror.com/accepts/-/accepts-1.3.8.tgz"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"integrity"</span><span class="token operator">:</span> <span class="token string">"sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw=="</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"mime-types"</span><span class="token operator">:</span> <span class="token string">"~2.1.34"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"negotiator"</span><span class="token operator">:</span> <span class="token string">"0.6.3"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"engines"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"node"</span><span class="token operator">:</span> <span class="token string">">= 0.6"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">/* 省略其他 */</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>版本管理</li>
</ol>
<p>在 npm 中，包的版本是使用语义化版本控制（Semantic Versioning，简称semver ）进行管理的。</p>
<p>每个包都有一个版本号，形如 MAJOR.MINOR.PATCH（可以理解为主版本号，次版本号，修订版本号）。MAJOR 版本号表示不兼容的更改，MINOR 版本号表示向后兼容的新功能，PATCH 版本号表示向后兼容的错误修复。</p>
<p>在开发过程中，你可能会依赖于其他包，并指定了它们的版本范围（如 ^1.2.0）。但是，这描述的是一个版本范围而不是一个具体的版本，当执行npm install时如果没有lock文件会下载这个版本范围内的最新的一个版本，如果其他开发者或构建环境安装的实际版本与你的不同，可能会导致不一致的行为，甚至出现错误。</p>
<p>而package-lock.json 文件记录了精确的依赖关系和版本号，确保在不同的环境中安装相同的依赖版本，从而解决版本管理问题。</p>
<ol start="2">
<li>关于semver版本范围</li>
</ol>
<p>如果你写 ~0.13.0，你只想更新补丁版本：0.13.1 可以，但 0.14.0 不行。</p>
<p>如果你写了^0.13.0，你想得到不改变最左边的非零数字的更新：0.13.1，0.13.2等等。如果您编写 ^1.13.0，您
将获得补丁和次要版本：1.13.1、1.14.0 等等，直到 2.0.0 但不是 2.0.0。</p>
<p>如果你写 0.13.0，那就是将要使用的确切版本，总是会下载这个版本的包</p>
<ol start="3">
<li>可重复性</li>
</ol>
<p>npm 的依赖项解析是基于递归的。当你安装一个包时，npm 会解析该包的依赖项，并安装它们的依赖项，依此类推。</p>
<p>但是，由于包的版本范围可以是模糊的，不同的解析过程可能导致安装不同的依赖项版本，从而引入了不确定性和不一致性。package-lock.json 文件锁定了解析过程中的依赖项版本，以确保在不同的环境中重现相同的依赖树，从而提供可重复性。</p>
<ol start="4">
<li>npm install规则</li>
</ol>
<p>如果只有一个<code v-pre>package.json</code>文件，运行npm i会根据它生成一个<code v-pre>package-lock.json</code>文件，这个文件相当于本次install的一个快照，它不仅记录了<code v-pre>package.json</code>指明的直接依赖的版本，也记录了间接依赖的版本。
如果<code v-pre>package.json</code>的<code v-pre>semver-range version</code>和<code v-pre>package-lock.json</code>中版本兼容(<code v-pre>package-lock.json</code>版本在<code v-pre>package.json</code>指定的版本范围内)，即使此时<code v-pre>package.json</code>中有新的版本，执行npm i也还是会根据package-lock.json下载。
如果手动修改了<code v-pre>package.json</code>的<code v-pre>version ranges</code>，且和<code v-pre>package-lock.json</code>中版本不兼容，那么执行npm i时<code v-pre>package-lock.json</code>将会更新到兼容<code v-pre>package.json</code>的版本。</p>
<h3 id="_3-4-2-package-json-配置" tabindex="-1"><a class="header-anchor" href="#_3-4-2-package-json-配置"><span>3.4.2 package.json 配置</span></a></h3>
<ul>
<li>name：项目名称，必须是唯一的字符串，通常采用小写字母和连字符的组合。</li>
<li>version：项目版本号，通常采用语义化版本号规范。</li>
<li>description：项目描述。</li>
<li>main：项目的主入口文件路径，通常是一个 JavaScript 文件。</li>
<li>keywords：项目的关键字列表，方便他人搜索和发现该项目。</li>
<li>author：项目作者的信息，包括姓名、邮箱、网址等。</li>
<li>license：项目的许可证类型，可以是自定义的许可证类型或者常见的开源许可证（如 MIT、Apache 等）。</li>
<li>dependencies：项目所依赖的包的列表，这些包会在项目运行时自动安装。</li>
<li>devDependencies：项目开发过程中所需要的包的列表，这些包不会随项目一起发布，而是只在开发时使用。</li>
<li>peerDependencies：项目的同级依赖，即项目所需要的模块被其他模块所依赖。</li>
<li>scripts：定义了一些脚本命令，比如启动项目、运行测试等。</li>
<li>repository：项目代码仓库的信息，包括类型、网址等。</li>
<li>bugs：项目的 bug 报告地址。</li>
<li>homepage：项目的官方网站地址或者文档地址。</li>
</ul>
<h3 id="_3-4-3-package-lock-json" tabindex="-1"><a class="header-anchor" href="#_3-4-3-package-lock-json"><span>3.4.3 package-lock.json</span></a></h3>
<ul>
<li>&quot;name&quot;：指定包的名称，与 package.json 文件中的 &quot;name&quot; 字段相对应。</li>
<li>&quot;version&quot;：指定包的版本号，与 package.json 文件中的 &quot;version&quot; 字段相对应。</li>
<li>&quot;lockfileVersion&quot;：package-lock.json 文件的格式版本号，用于确定文件的结构和兼容性。</li>
<li>&quot;requires&quot;: 是否使用requires来追踪模块的依赖关系</li>
<li>&quot;dependencies&quot;：一个对象，包含项目所依赖的其他包及其版本号。这些依赖项可以是直接依赖项，也可以是间接依赖项（被其他依赖项所依赖）。并不是所有的子依赖都有 dependencies 属性,只有子依赖的依赖和当前已安装在根目录的 node_modules 中的依赖冲突之后, 才会有这个属性。 这可能涉及嵌套情况的依赖管理。</li>
<li>&quot;devDependencies&quot;：一个对象，列出了在开发过程中所需的包及其版本号。这些包通常用于测试、构建和开发工具。</li>
<li>&quot;dev&quot;：表示该模块是否为顶级模块的开发依赖或者是一个的传递依赖关系</li>
<li>&quot;resolved&quot;：依赖包的安装源(可以理解为下载地址)</li>
<li>&quot;integrity&quot;：每个包的完整性校验值，用于确保下载的包的完整性和安全性。它是使用哈希算法计算得出的唯一标识符，用于验证包的内容是否被篡改。</li>
<li>&quot;subdependencies&quot;：一个对象，包含每个包的子依赖项。这包括子依赖项的名称、版本号和其他子依赖项的信息。</li>
<li>&quot;dependenciesMeta&quot;：一个对象，包含每个包的元数据。这些元数据可以包括版本范围、源、分辨率策略和其他信息。</li>
<li>&quot;engines&quot;：一个对象，包含该包需要使用的引擎，以及引擎的版本范围，通常只有node、npm</li>
</ul>
<h3 id="_3-4-4-什么是-npm-脚本" tabindex="-1"><a class="header-anchor" href="#_3-4-4-什么是-npm-脚本"><span>3.4.4 什么是 npm 脚本</span></a></h3>
<p>npm 允许在package.json文件里面，使用<code v-pre>scripts</code>字段定义脚本命令。package.json 里面的scripts 字段是一个对象。它的每一个属性，对应一段脚本。定义在package.json里面的脚本，就称为 npm 脚本。
查看当前项目的所有 npm 脚本命令，可以使用不带任何参数的npm run命令。</p>
<ol>
<li>使用
<ul>
<li>npm run 脚本名称</li>
<li>如果是并行执行（即同时的平行执行），可以使用&amp;符号。 <code v-pre>npm run script1.js &amp; npm run script2.js</code></li>
<li>如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用&amp;&amp;符号。<code v-pre>npm run script1.js &amp;&amp; npm run script2.js</code></li>
</ul>
</li>
<li>简写形式
<ul>
<li><code v-pre>npm start</code> 即 <code v-pre>npm run start</code></li>
<li><code v-pre>npm stop</code> 即 <code v-pre>npm run stop</code></li>
<li><code v-pre>npm test</code> 即 <code v-pre>npm run test</code></li>
<li><code v-pre>npm restart</code> 即 <code v-pre>npm run stop &amp;&amp; npm run restart &amp;&amp; npm run start</code></li>
</ul>
</li>
<li>了解npm run指令</li>
</ol>
<p>在package.json文件中的script字段，可以定义脚本命令，通过npm run指令运行该脚本。</p>
<p>比如简单定义一个输出打印的shell脚本。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"script"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"hw"</span><span class="token operator">:</span> <span class="token string">"echo hello world!"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行npm run hw可以看到终端上打印出了hello world!。</p>
<p>我们可以在很多工程项目中的<code v-pre>package.json</code>文件中看到定义了很多脚本命令，比如下面的：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"serve"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service serve"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service build"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"vue-cli-service lint"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些命令官方文档上都会对应的命令，或创建项目时已添加对应的命令</p>
</div></template>


