<template><div><h1 id="npm搭建私服" tabindex="-1"><a class="header-anchor" href="#npm搭建私服"><span>npm搭建私服</span></a></h1>
<h2 id="_1-verdaccio是什么" tabindex="-1"><a class="header-anchor" href="#_1-verdaccio是什么"><span>1. Verdaccio是什么？</span></a></h2>
<blockquote>
<p>Verdaccio是一个 Node.js创建的轻量的私有npm代理注册源（proxy registry）</p>
</blockquote>
<p>通过Verdaccio搭建私有npm服务器有着以下优势：</p>
<ol>
<li>零配置：无需安装数据库，基于nodejs，安装及运行。</li>
<li>使用方便：将内部高复用的代码进行提取，方便在多个项目中引用。</li>
<li>安全性：仓库搭建在局域网内部，只针对内部人员使用。</li>
<li>权限管理：对发布和下载npm包配置权限管理。</li>
<li>加速包下载：将下载过的依赖包进行缓存，再次下载加快下载速度。</li>
</ol>
<p>Verdaccio是sinopia开源框架的一个fork，由于sinopia作者两年前就已经停止更新，坑比较多，因此Verdaccio是目前最好的选择</p>
<h2 id="_2-安装verdaccio以及pm2" tabindex="-1"><a class="header-anchor" href="#_2-安装verdaccio以及pm2"><span>2. 安装Verdaccio以及pm2</span></a></h2>
<p>全局安装Verdaccio：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 全局安装</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> verdaccio</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过命令行启动的话，如果终端停止了，那我们的服务器也就停止了，因此一般我们通过pm2启动守护进程</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> pm2</span>
<span class="line">pm2 start verdaccio</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动成功可以进入http://localhost:4873/页面</p>
<p>Verdaccio安装好后，我们可以更改npm源为本地地址：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 设置npm使用的源为本地私服</span></span>
<span class="line"><span class="token function">npm</span> <span class="token builtin class-name">set</span> registry http://localhost:4873/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者针对某个依赖安装时选用自己的源地址（推荐）：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 例如安装demo依赖</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> demo <span class="token parameter variable">--registry</span> http://localhost:4873</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-nrm管理镜像源地址" tabindex="-1"><a class="header-anchor" href="#_3-nrm管理镜像源地址"><span>3. nrm管理镜像源地址</span></a></h2>
<p>此时如果我们想再次切换到淘宝或者其他的镜像地址，来回切换过于麻烦</p>
<p>我们可以通过nrm这个工具来管理我们的源地址，可以查看和切换地址</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nrm</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>装后我们可以通过nrm add [name] [address]这个命令来新增一个源地址：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 例如增加名为localnpm的源地址http://localhost:4873/</span></span>
<span class="line">nrm <span class="token function">add</span> localnpm http://localhost:4873/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过nrm use [name]来切换地址：</p>
<h2 id="_4-注册与发包" tabindex="-1"><a class="header-anchor" href="#_4-注册与发包"><span>4. 注册与发包</span></a></h2>
<ol>
<li>注册用户：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> adduser <span class="token parameter variable">--registry</span> http://localhost:4873/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>输入 username、password 以及 Email 即可</p>
<ol start="2">
<li>登录</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> login <span class="token parameter variable">--registry</span> http://localhost:4873</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>上传私有包</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 在当前私有仓库下执行</span></span>
<span class="line"><span class="token function">npm</span> publish <span class="token parameter variable">--registry</span> http://localhost:4873</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p>
<ul>
<li>当前私有仓库必须包含 package.json 文件</li>
<li>每次发布的时候，都需要使用npm version v1.x.x 更新版本，并且保证仓库是干净的</li>
</ul>
<ol start="4">
<li>移除一个包</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">// 删除特定版本</span>
<span class="line"><span class="token function">npm</span> unpublish <span class="token operator">&lt;</span>package-name<span class="token operator">></span>@<span class="token operator">&lt;</span>version<span class="token operator">></span></span>
<span class="line"></span>
<span class="line">// 删除整个包（谨慎使用）：</span>
<span class="line"><span class="token function">npm</span> unpublish <span class="token operator">&lt;</span>package-name<span class="token operator">></span> <span class="token parameter variable">--force</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请注意，如果你要删除整个包，必须使用 --force 标志。</p>
<h2 id="_5-包名规范" tabindex="-1"><a class="header-anchor" href="#_5-包名规范"><span>5. 包名规范</span></a></h2>
<p>在npm（Node Package Manager）中，包名前面带有@符号表示该包是一个范围包或者组织包。</p>
<ol>
<li>范围包（Scoped Packages）：</li>
</ol>
<p>当一个npm包以@scope/name的形式出现时，它标识这是一个有命名空间的包。scope是可选的命名空间前缀，用于区分不同组织、项目或个人的包。例如，@mycompany/my-package表明这个包属于mycompany这个组织或团队，并且包的实际名称是my-package。通过这种方式，可以避免全局包名空间中的命名冲突。</p>
<ol start="2">
<li>组织包（Organization Packages）：</li>
</ol>
<p>类似地，许多开源组织或公司在npm上拥有自己的组织账户，发布的包也会带有组织名作为前缀，比如 @angular/router 或 @vue/cli 等。这些包都是相应组织管理并发布的官方组件或工具。</p>
<p>因此，@符号在npm中不仅用作版本控制时指定版本范围（如 npminstall react-router@2.8.1），还用来创建和管理具有特定命名空间的包。</p>
</div></template>


