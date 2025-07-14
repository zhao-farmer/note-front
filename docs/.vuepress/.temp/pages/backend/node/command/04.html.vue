<template><div><h1 id="四、npx" tabindex="-1"><a class="header-anchor" href="#四、npx"><span>四、npx</span></a></h1>
<h2 id="_4-1-npx是什么" tabindex="-1"><a class="header-anchor" href="#_4-1-npx是什么"><span>4.1 npx是什么</span></a></h2>
<p>npx 是一个 npm 包执行器，它随 npm 5.2.0 版本一起引入。npx 的主要用途是方便开发者执行安装在项目本地 <code v-pre>node_modules/.bin</code> 目录或全局安装的 npm 包的命令。它特别有用于执行那些仅偶尔使用的、不希望全局安装的 npm 包。</p>
<h2 id="_4-2-npx-的主要特点和用途" tabindex="-1"><a class="header-anchor" href="#_4-2-npx-的主要特点和用途"><span>4.2 npx 的主要特点和用途</span></a></h2>
<ol>
<li>临时安装并运行包：</li>
</ol>
<p>使用 npx 可以执行未全局安装的包，npx 会临时安装这些包并运行它们，执行完毕后不会保留这些包。</p>
<ol start="2">
<li>运行项目本地安装的包：</li>
</ol>
<p>项目中经常会安装一些命令行工具作为开发依赖，例如 eslint、webpack 等。通常情况下，如果想要运行这些工具，需要在项目的脚本中定义它们或者通过项目的 <code v-pre>node_modules/.bin</code> 路径来运行。npx 简化了这个过程，允许直接在命令行中输入命令来执行。</p>
<ol start="3">
<li>避免全局安装包：</li>
</ol>
<p>有时全局安装 npm 包可能会导致版本冲突或其他问题。npx 允许我们执行包而无需全局安装，减少了全局空间的污染。</p>
<ol start="4">
<li>执行不同版本的命令：</li>
</ol>
<p>使用 npx 可以非常容易地测试或运行不同版本的命令行工具，只需指定包名和版本号。</p>
<ol start="5">
<li>执行 GitHub 上的包：</li>
</ol>
<p>npx 还可以直接执行存储在 GitHub 等代码托管服务上的包，这对于试运行开源项目中的示例脚本或工具非常方便。</p>
<ol start="6">
<li>增强的可执行性：</li>
</ol>
<p>即使某些 npm 包不在 PATH 环境变量中，npx 也能找到并执行它们，因为它默认会在本地 node_modules/.bin 目录下寻找。</p>
<h2 id="_4-3-使用例子" tabindex="-1"><a class="header-anchor" href="#_4-3-使用例子"><span>4.3 使用例子</span></a></h2>
<ol>
<li>运行本地安装的 webpack：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx webpack <span class="token parameter variable">--config</span> webpack.config.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>运行特定版本的某个包：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx typescript@3.9.5 <span class="token parameter variable">--version</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>临时安装并运行一个可执行的包（例如创建 React 应用的 create-react-app）：</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">npx create-react-app my-app</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>npx 提供了更灵活的包管理选项，特别是对于那些我们不想永久安装在开发环境中的工具。它是现代 JavaScript 开发工具链中的一个重要工具。</p>
<h2 id="_4-4-npm-和-npx-区别" tabindex="-1"><a class="header-anchor" href="#_4-4-npm-和-npx-区别"><span>4.4 npm 和 npx 区别</span></a></h2>
<ul>
<li>
<p>npx侧重于执行命令的，执行某个模块命令。虽然会自动安装模块，但是重在执行某个命令</p>
</li>
<li>
<p>npm侧重于安装或者卸载某个模块的。重在安装，并不具备执行某个模块的功能。</p>
</li>
</ul>
<h2 id="_4-5-创建react脚手架" tabindex="-1"><a class="header-anchor" href="#_4-5-创建react脚手架"><span>4.5 创建react脚手架</span></a></h2>
<ul>
<li>如何查看我当前全局安装了哪些可执行文件</li>
</ul>
<p><code v-pre>npm ls -g</code>，没有加-g的话就是看当前项目有哪些可执行文件，加-g就是全局</p>
<p>我们使用命令：npm install -g create-react-app，就全局安装了react的脚手架</p>
<p>这时候，我们再使用npm ls -g命令就能够看到create-react-app@具体版本号了</p>
<ul>
<li>在传统的情况下，我们可以直接执行create-react-app直接运行，但这样是有缺点的
<ul>
<li>版本直接就锁定不变了，如果更新了新版本，我们也只会停留在原地</li>
<li>占据磁盘的空间</li>
</ul>
</li>
<li>那npx就可以完美解决这个问题
<ul>
<li>那在进行前，我们通过npm uninstall -g create-react-app全局卸载这个包</li>
<li>我们换npx create-react-app来执行，一样是可以执行的，并且是最新版本。包括react中文网也是这样推荐的，很多其他的框架也是这样推荐的</li>
</ul>
</li>
</ul>
<h2 id="_4-6-运行vite" tabindex="-1"><a class="header-anchor" href="#_4-6-运行vite"><span>4.6 运行vite</span></a></h2>
<p>当全局和局部项目都不存在vite命令的时候，而我又想要运行，这怎么办？</p>
<ol>
<li>我们首先使用<code v-pre>npm i vite -D</code>，注意这个-D表示在局部下载，也就是说只在开发环境(Dev)下存在，全局是不存在的。</li>
<li>此时如果我们直接执行vite命令，就会报错了，因为我们本地的目录没有在环境变量中配置，只有在环境变量中配置才会是全局的</li>
<li>这时候我们就可以通过npx vite执行，会自动去找当前目录下的node_modules里bin下的vite命令进行执行，而且非常快</li>
</ol>
</div></template>


