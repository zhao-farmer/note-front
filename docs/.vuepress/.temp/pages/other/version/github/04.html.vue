<template><div><h1 id="四、vuepress结合github-pages与github-actions" tabindex="-1"><a class="header-anchor" href="#四、vuepress结合github-pages与github-actions"><span>四、vuePress结合<code v-pre>github Pages</code>与<code v-pre>github actions</code></span></a></h1>
<h2 id="_4-1-新建代码仓库" tabindex="-1"><a class="header-anchor" href="#_4-1-新建代码仓库"><span>4.1 新建代码仓库</span></a></h2>
<ol>
<li>
<p>登录 GitHub，新建一个代码仓库，仓库名称为 xxx.github.io，xxx 为你的 GitHub 账号名。</p>
<ul>
<li>为什么这么命名？因为部署到 GitHub Pages 后，通过仓库名称（例如：<code v-pre>songjian-99.github.io</code>就可以访问到网站。</li>
<li>如果是其他的仓库名称，那么访问的域名就是 <code v-pre>songjian-99.github.io/xxx</code>，访问的域名会自动加上 <code v-pre>xxx.github.io</code> 作为中间的一层路径。（同时项目中的 config.js 文件中的 base 属性也要对应上）</li>
</ul>
</li>
<li>
<p>新增一个代码分支，名称为 gh-pages（workflow 配置文件中会使用）。</p>
<ul>
<li>master/main 分支：存放项目源码</li>
<li>gh-pages 分支：存放 VuePress 生成的静态文件</li>
</ul>
</li>
</ol>
<h2 id="_4-2-本地代码提交到仓库" tabindex="-1"><a class="header-anchor" href="#_4-2-本地代码提交到仓库"><span>4.2 本地代码提交到仓库</span></a></h2>
<p><img src="/other/version/github/006.png" alt=""></p>
<h2 id="_4-3-设置分支为网站展示" tabindex="-1"><a class="header-anchor" href="#_4-3-设置分支为网站展示"><span>4.3 设置分支为网站展示</span></a></h2>
<p><img src="/other/version/github/007.png" alt=""></p>
<h2 id="_4-4-新增-access-token" tabindex="-1"><a class="header-anchor" href="#_4-4-新增-access-token"><span>4.4 新增 Access Token</span></a></h2>
<ol>
<li>点击用户头像，选择 Settings，进入用户设置面板，然后选择 Developer settings 选项卡（选项卡列表最下面），展开 Personal access tokens 选项卡，点击 Tokens(classic)。</li>
</ol>
<p><img src="/other/version/github/008.png" alt=""></p>
<ol start="2">
<li>点击 Generate new token。</li>
</ol>
<ul>
<li>Note：描述该 token 用来做什么，可以随便填写，有意义即可；</li>
<li>Expiration：选择 token 的过期时间；</li>
<li>Select Scopes：选择 token 的使用范围，至少要勾选上 repo，否则这个 token 没有仓库权限，自动部署会失败。然后点击生成 token。将 token 复制下来，下一步会使用。</li>
</ul>
<p><img src="/other/version/github/009.png" alt=""></p>
<hr>
<p><img src="/other/version/github/010.png" alt=""></p>
<h2 id="_4-5-创建-secrets" tabindex="-1"><a class="header-anchor" href="#_4-5-创建-secrets"><span>4.5 创建 Secrets</span></a></h2>
<p>返回到仓库页面，点击 Settings，选择 Secrets and variables 选项卡，选择 Actions 选项，点击 New repository secret，新增一个 Secret，名称为 ACCESS_TOKEN，值就是上一步生成的 token 值。将名称复制下来，下一步会用到。</p>
<p><img src="/other/version/github/011.png" alt=""></p>
<hr>
<p><img src="/other/version/github/012.png" alt=""></p>
<h2 id="_4-6-创建任务文件" tabindex="-1"><a class="header-anchor" href="#_4-6-创建任务文件"><span>4.6 创建任务文件</span></a></h2>
<ol>
<li>打开actions配置</li>
</ol>
<p>返回到仓库页面，点击 Actions，点击 New workflow，然后点击 set up a workflow yourself。</p>
<p><img src="/other/version/github/013.png" alt=""></p>
<hr>
<p><img src="/other/version/github/014.png" alt=""></p>
<ol start="2">
<li>找到对应的模块</li>
</ol>
<p><a href="https://vuepress.vuejs.org/zh/guide/deployment.html#github-pages" target="_blank" rel="noopener noreferrer">点击进入vuePress部署配置目录</a></p>
<p><img src="/other/version/github/015.png" alt=""></p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> docs</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># 每当 push 到 main 分支时触发部署</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span></span>
<span class="line">  <span class="token comment"># 手动触发部署</span></span>
<span class="line">  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">docs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line"></span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 pnpm</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v4</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 选择要使用的 node 版本</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">22</span></span>
<span class="line">          <span class="token comment"># 缓存 pnpm 依赖</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm</span>
<span class="line"></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装依赖</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm install <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile</span>
<span class="line"></span>
<span class="line">      <span class="token comment"># 运行构建脚本</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建 VuePress 站点</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm docs<span class="token punctuation">:</span>build</span>
<span class="line"></span>
<span class="line">      <span class="token comment"># 查看 workflow 的文档来获取更多信息</span></span>
<span class="line">      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署到 GitHub Pages</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 部署到 gh-pages 分支</span></span>
<span class="line">          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages</span>
<span class="line">          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span></span>
<span class="line">          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>
<span class="line">          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>数据进行处理</li>
</ol>
<ul>
<li>自身使用的npm管理包，pnpm去除掉，所有pnpm改为npm</li>
<li><code v-pre>pnpm docs:build</code> 改为 <code v-pre>npm run docs:build</code></li>
<li>secrets.GITHUB_TOKEN 改为前文设定的 secrets.ACCESS_TOKEN</li>
</ul>
<p>最终文档</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> docs</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># 每当 push 到 main 分支时触发部署</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span></span>
<span class="line">  <span class="token comment"># 手动触发部署</span></span>
<span class="line">  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">docs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line"></span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 检出</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>
<span class="line">          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span></span>
<span class="line">          </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 选择要使用的 node 版本</span></span>
<span class="line">          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">22</span></span>
<span class="line">          <span class="token comment"># 缓存 npm 依赖</span></span>
<span class="line">          <span class="token key atrule">cache</span><span class="token punctuation">:</span> npm</span>
<span class="line">          </span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装依赖</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile</span>
<span class="line"></span>
<span class="line">      <span class="token comment"># 运行构建脚本</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建 VuePress 站点</span>
<span class="line">        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run docs<span class="token punctuation">:</span>build</span>
<span class="line"></span>
<span class="line">      <span class="token comment"># 查看 workflow 的文档来获取更多信息</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署到 GitHub Pages</span>
<span class="line">        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v4</span>
<span class="line">        <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 部署到 gh-pages 分支</span></span>
<span class="line">          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages</span>
<span class="line">          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span></span>
<span class="line">          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token comment"># 使用 actions 中设定的token</span></span>
<span class="line">          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-7-开始验证" tabindex="-1"><a class="header-anchor" href="#_4-7-开始验证"><span>4.7 开始验证</span></a></h2>
<p>所有步骤配置完成，我们只需将项目代码 push 到仓库中，workflow 就会自动运行，按照配置文件中的步骤依次执行命令，最终将项目编译后的静态文件部署到 gh-pages 分支上。可以在 Actions 中查看运行情况。运行成功后，即可通过域名访问页面。</p>
<p>Actions workflow 自动执行的时候，因为有很多个步骤，比较容易发生错误。
每次执行失败的时候，定位下哪个步骤出现错误，看一下错误信息，然后再针对性修改。大致的修改方向：首先确保创建 access token 和 secret 这两个步骤没问题（这两个步骤有问题会出现仓库无权限 403，push 代码失败的错误），并且确保名称和 workflow 的配置文件相对应</p>
<ol>
<li>actions 结果示意图</li>
</ol>
<p><img src="/other/version/github/016.png" alt=""></p>
<ol start="2">
<li>访问网站</li>
</ol>
<p><img src="/other/version/github/017.png" alt=""></p>
</div></template>


