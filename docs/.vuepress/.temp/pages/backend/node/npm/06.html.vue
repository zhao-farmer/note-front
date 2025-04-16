<template><div><h1 id="六、pnpm" tabindex="-1"><a class="header-anchor" href="#六、pnpm"><span>六、pnpm</span></a></h1>
<h2 id="_6-1-概述" tabindex="-1"><a class="header-anchor" href="#_6-1-概述"><span>6.1 概述</span></a></h2>
<p>PNPM 是 NPM 的替代产品，相对于 NPM 来说，最大的特点是提供了可靠的 Monorepo 支持</p>
<p><code v-pre>Monorepo 是一种使用单一仓库来统一管理依赖的理念</code>，使用传统 NPM 时，我们不得不在每个项目目录重复下载安装相同的依赖到 node_modules 下，而支持 Monorepo 的包管理器可通过文件系统链接的方式，将项目需要的依赖链接到本地仓库中已经存在的目录，这样即<code v-pre>节省了磁盘空间，也减少了不必要的下载，提高了安装速度</code></p>
<p>但是，PNPM 并非简单的将 NPM node_moudles 下的依赖进行链接，而是使用了一种称为平坦化依赖的机制</p>
<p>对于传统 NPM，在 NPM2 时代，不同包的依赖在自己包路径下的 <code v-pre>node_modules</code> 中，相同依赖会重复占用，并且造成依赖嵌套很深。NPM3 对 NPM2 进行了优化，即树形依赖扁平化，全部依赖提取到顶层 <code v-pre>node_modules</code> 目录，这样也有一些的缺点，如使项目本身的 <code v-pre>node_modules</code> 结构不够直观，有些 package.json 中并没有声明但由于被某模块依赖而引入的包也可以在编码时引入使用，造成依赖不安全</p>
<p>PNPM 中所有被声明的依赖存放在 <code v-pre>node_modules</code> 下，以软链接形式链接到到 <code v-pre>node_modules/.pnpm/[package_name]@version/node_modules/[package_name]</code></p>
<p><img src="/backend/node/npm/006.png" alt=""></p>
<p>如图（来源 PNPM 官网），项目使用 express 的 4.17.3 版本，该包的所有依赖都在 .pnpm/express@4.17.3 下</p>
<p>而 .pnpm/express@4.17.3 下的文件是以硬链接方式链接到 PNPM strore 目录下依赖，避免重复下载和占用</p>
<h2 id="_6-2-安装" tabindex="-1"><a class="header-anchor" href="#_6-2-安装"><span>6.2 安装</span></a></h2>
<p><a href="https://pnpm.io/zh/installation" target="_blank" rel="noopener noreferrer">PNPM 官方文档</a></p>
<p>当本机不存在 NPM 环境，可使用命令行直接安装</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># windows(powershell)</span></span>
<span class="line">iwr https://get.pnpm.io/install.ps1 <span class="token parameter variable">-useb</span> <span class="token operator">|</span> iex</span>
<span class="line"></span>
<span class="line"><span class="token comment"># linux</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.pnpm.io/install.sh <span class="token operator">|</span> <span class="token function">sh</span> -</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Windows 下，此方式安装的 pnpm.exe 默认安装路径一般为 <code v-pre>~\AppData\Local\pnpm</code> 中</p>
<p>当本机存在 NPM 环境，可使用 npm 命令安装</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Node 与 PNPM 版本兼容性表</p>
<table>
<thead>
<tr>
<th>Node.js</th>
<th>pnpm 7</th>
<th>pnpm 8</th>
<th>pnpm 9</th>
</tr>
</thead>
<tbody>
<tr>
<td>Node.js 12</td>
<td>❌</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>Node.js 14</td>
<td>✔️</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>Node.js 16</td>
<td>✔️</td>
<td>✔️</td>
<td>❌</td>
</tr>
<tr>
<td>Node.js 18</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
</tr>
<tr>
<td>Node.js 20</td>
<td>✔️</td>
<td>✔️</td>
<td>✔️</td>
</tr>
</tbody>
</table>
<p>使用 pnpm -v 命令查看版本号，验证是否安装成功</p>
<h2 id="_6-3-配置" tabindex="-1"><a class="header-anchor" href="#_6-3-配置"><span>6.3 配置</span></a></h2>
<p>路径相关配置</p>
<p>PNPM 会使用 .npmrc 文件中的配置，同样也有自己全局的配置文件，默认位于</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># Windows</span></span>
<span class="line">~/AppData/Local/pnpm/config/rc</span>
<span class="line"><span class="token comment"># Linux</span></span>
<span class="line">~/.config/pnpm/rc</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以在配置文件中通过key=value方式来配置</p>
<div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre v-pre><code><span class="line"><span class="token comment"># pnpm</span></span>
<span class="line"><span class="token key attr-name">global-bin-dir</span><span class="token punctuation">=</span><span class="token value attr-value">D:\lib\pnpm-store</span></span>
<span class="line"><span class="token key attr-name">global-dir</span><span class="token punctuation">=</span><span class="token value attr-value">D:\lib\pnpm-store\global</span></span>
<span class="line"><span class="token key attr-name">cache-dir</span><span class="token punctuation">=</span><span class="token value attr-value">D:\lib\pnpm-store\cache</span></span>
<span class="line"><span class="token key attr-name">state-dir</span><span class="token punctuation">=</span><span class="token value attr-value">D:\lib\pnpm-store\state</span></span>
<span class="line"><span class="token key attr-name">store-dir</span><span class="token punctuation">=</span><span class="token value attr-value">D:\lib\pnpm-store\store</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用命令配置</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 基本目录、可执行文件目录</span></span>
<span class="line"><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> global-bin-dir<span class="token operator">=</span>D:<span class="token punctuation">\</span>lib<span class="token punctuation">\</span>pnpm-store</span>
<span class="line"><span class="token comment"># 全局包目录</span></span>
<span class="line"><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> global-dir<span class="token operator">=</span>D:<span class="token punctuation">\</span>lib<span class="token punctuation">\</span>pnpm-store<span class="token punctuation">\</span>global</span>
<span class="line"><span class="token comment"># 缓存目录</span></span>
<span class="line"><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> cache-dir<span class="token operator">=</span>D:<span class="token punctuation">\</span>lib<span class="token punctuation">\</span>pnpm-store<span class="token punctuation">\</span>cache</span>
<span class="line"><span class="token comment"># 状态文件目录</span></span>
<span class="line"><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> state-dir<span class="token operator">=</span>D:<span class="token punctuation">\</span>lib<span class="token punctuation">\</span>pnpm-store<span class="token punctuation">\</span>state</span>
<span class="line"><span class="token comment"># 依赖包文件目录</span></span>
<span class="line"><span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> store-dir<span class="token operator">=</span>D:<span class="token punctuation">\</span>lib<span class="token punctuation">\</span>pnpm-store<span class="token punctuation">\</span>store</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>环境变量配置</p>
<p>配置PNPM_HOME，推荐和上面的global-bin-dir一致</p>
<p>配置PATH，加入PNPM_HOME对应的路径</p>
<h2 id="_6-4-基础命令" tabindex="-1"><a class="header-anchor" href="#_6-4-基础命令"><span>6.4 基础命令</span></a></h2>
<ol>
<li>安装</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 默认安装</span></span>
<span class="line"><span class="token function">pnpm</span> i</span>
<span class="line"><span class="token comment"># 从离线仓库安装</span></span>
<span class="line"><span class="token function">pnpm</span> i <span class="token parameter variable">--offline</span></span>
<span class="line"><span class="token comment"># 安装不更新 lock 文件</span></span>
<span class="line"><span class="token function">pnpm</span> i --frozen-lockfile</span>
<span class="line"><span class="token comment"># 仅更新 lock 文件</span></span>
<span class="line"><span class="token function">pnpm</span> i --lockfile-only</span>
<span class="line"><span class="token comment"># 按扁平 node_modules 类似的结构安装</span></span>
<span class="line"><span class="token function">pnpm</span> i --shamefully-hoist</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>添加</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 保存到 dependencies</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 保存到 devDependencies </span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 保存到 optionalDependencies</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-O</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 全局安装</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-g</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 从 next tag 下安装</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@next</span>
<span class="line"><span class="token comment"># 安装指定版本</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@<span class="token punctuation">[</span>version<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>更新</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 遵循 package.json 指定的范围更新所有的依赖项</span></span>
<span class="line"><span class="token function">pnpm</span> up</span>
<span class="line"><span class="token comment"># 更新所有依赖项，此操作会忽略 package.json 指定的范围</span></span>
<span class="line"><span class="token function">pnpm</span> up <span class="token parameter variable">--latest</span>	</span>
<span class="line"><span class="token comment"># 更新到 version 版本</span></span>
<span class="line"><span class="token function">pnpm</span> up <span class="token punctuation">[</span>package<span class="token punctuation">]</span>@<span class="token punctuation">[</span>version<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># 更新 @babel 范围内的所有依赖项</span></span>
<span class="line"><span class="token function">pnpm</span> up <span class="token string">"@babel/*"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>删除</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">rm</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从全局删除一个依赖包</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">rm</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> --global, <span class="token parameter variable">-g</span></span>
<span class="line"><span class="token comment"># 仅删除开发环境 `devDependencies` 中的依赖项</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">rm</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> --save-dev, <span class="token parameter variable">-D</span></span>
<span class="line"><span class="token comment"># 仅移除 `optionalDependencies` 中的依赖项</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">rm</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> --save-optional, <span class="token parameter variable">-O</span></span>
<span class="line"><span class="token comment"># 仅从 `dependencies` 中删除相关依赖项</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">rm</span> <span class="token punctuation">[</span>package<span class="token punctuation">]</span> --save-prod, <span class="token parameter variable">-P</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-5-管理-node-版本" tabindex="-1"><a class="header-anchor" href="#_6-5-管理-node-版本"><span>6.5 管理 Node 版本</span></a></h2>
<p>PNPM 提供了pnpm env命令，用于统一管理 Node 版本</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装 Node.js 的 LTS 版本</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">env</span> use <span class="token parameter variable">--global</span> lts</span>
<span class="line"><span class="token comment"># 安装 Node.js v16</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">env</span> use <span class="token parameter variable">--global</span> <span class="token number">16</span></span>
<span class="line"><span class="token comment"># 安装最新版本的 Node.js</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">env</span> use <span class="token parameter variable">--global</span> latest</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装指定版本的 Node.js，而不将其激活为当前版本</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">env</span> <span class="token function">add</span> <span class="token parameter variable">--global</span> lts <span class="token number">18</span> <span class="token number">20.0</span>.1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 移除指定版本的 Node.JS</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">env</span> remove <span class="token parameter variable">--global</span> <span class="token number">14.0</span>.0</span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">env</span> remove <span class="token parameter variable">--global</span> <span class="token number">14.0</span>.0 <span class="token number">16.2</span>.3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 打印本地安装的版本</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">env</span> list</span>
<span class="line"><span class="token comment"># 打印远程可用的 Node.js 版本</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">env</span> list <span class="token parameter variable">--remote</span></span>
<span class="line"><span class="token comment"># 打印远程可用的 Node.js v16 版本</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">env</span> list <span class="token parameter variable">--remote</span> <span class="token number">16</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Node 存放在环境变量PNPM_HOME配置的路径</p>
<p>当前 Node 的链接目录在PNPM_HOME的nodejs_current，需要加入到环境变量中</p>
<blockquote>
<p>注意调整nodejs_current在环境变量中优先顺序，防止系统中本来就存在 Node、NVM 等，由于优先级问题，PNPM 管理的 Node 没有生效</p>
</blockquote>
</div></template>


