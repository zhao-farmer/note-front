<template><div><h1 id="npmrc文件" tabindex="-1"><a class="header-anchor" href="#npmrc文件"><span>.npmrc文件</span></a></h1>
<blockquote>
<p>.npmrc 文件是 npm 配置的核心文件，用于管理 npm 的行为。本文将详细介绍 .npmrc 文件的作用、文件类型以及如何通过它来配置 npm。希望通过本文的介绍，你能更清晰地理解 .npmrc 文件的结构与使用。</p>
</blockquote>
<h2 id="_1-npm-配置文件概述" tabindex="-1"><a class="header-anchor" href="#_1-npm-配置文件概述"><span>1. npm 配置文件概述</span></a></h2>
<ol>
<li>什么是 .npmrc 文件？</li>
</ol>
<blockquote>
<p>.npmrc 文件是一个配置文件，npm 从中获取配置选项。npm 可以从命令行、环境变量和 .npmrc 文件中读取这些配置，并根据配置控制其行为。你可以通过 npm 的 config 命令来更新和编辑 .npmrc 文件的内容。</p>
</blockquote>
<p>有关可用配置选项的完整列表，请参考.npmrc - npm 中文文档 (nodejs.cn)和配置 - npm 中文文档 (nodejs.cn)。</p>
<ol start="2">
<li>配置文件的读取顺序</li>
</ol>
<p>npm 会按照优先级顺序解析 .npmrc 文件中的设置。各类配置文件的优先级如下：</p>
<ul>
<li>每个项目的配置文件（/path/to/my/project/.npmrc）：存储特定于该项目的配置。</li>
<li>每个用户的配置文件（~/.npmrc）：用于设置用户级别的配置。</li>
<li>全局配置文件（$PREFIX/etc/npmrc）：全局配置文件。</li>
<li>npm 内置配置文件（/path/to/npm/npmrc）：npm 自带的配置文件，通常无法修改。</li>
</ul>
<p>每个配置文件中的设置会按优先级进行解析。例如，用户配置文件中的设置将覆盖全局配置文件中的设置。</p>
<h2 id="_2-npmrc-文件的配置项" tabindex="-1"><a class="header-anchor" href="#_2-npmrc-文件的配置项"><span>2. .npmrc 文件的配置项</span></a></h2>
<ol>
<li>配置文件的基本格式
所有 .npmrc 文件都是 key = value 格式的配置文件，遵循 ini 格式。配置项的值可以是字符串、布尔值或者数组。配置文件也支持通过 ${VARIABLE_NAME} 替换环境变量，方便动态设置。例如：</li>
</ol>
<div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre v-pre><code><span class="line"><span class="token key attr-name">prefix</span> <span class="token punctuation">=</span> <span class="token value attr-value">${HOME}/.npm-packages</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>数组值配置
在 .npmrc 文件中，使用 key[] 来指定数组值。例如：</li>
</ol>
<div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre v-pre><code><span class="line"><span class="token key attr-name">key[]</span> <span class="token punctuation">=</span> <span class="token value attr-value">"<span class="token inner-value">first value</span>"</span></span>
<span class="line"><span class="token key attr-name">key[]</span> <span class="token punctuation">=</span> <span class="token value attr-value">"<span class="token inner-value">second value</span>"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这会将 key 配置为一个数组，包含多个值。</p>
<ol start="3">
<li>注释</li>
</ol>
<p>如果行以 ; 或 # 字符开头，则该行被视为注释。npm/ini 会解析这些注释内容。例如：</p>
<div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre v-pre><code><span class="line"><span class="token comment"># last modified: 01 Jan 2016</span></span>
<span class="line"><span class="token comment">; Set a new registry for a scoped package</span></span>
<span class="line"><span class="token key attr-name">@myscope:registry</span><span class="token punctuation">=</span><span class="token value attr-value">https://mycustomregistry.example.org</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-不同层级的-npmrc-配置文件" tabindex="-1"><a class="header-anchor" href="#_3-不同层级的-npmrc-配置文件"><span>3. 不同层级的 .npmrc 配置文件</span></a></h2>
<ol>
<li>每个项目的配置文件</li>
</ol>
<p>在项目根目录下的 .npmrc 文件（通常与 <code v-pre>node_modules</code> 和 <code v-pre>package.json</code> 文件处于同一层级）可以用来设置特定于该项目的配置。项目级别的配置文件只在该项目的环境下生效，因此如果你在多个项目中使用不同的 npm 配置，可以在每个项目中设置不同的 .npmrc 文件。</p>
<p>注意：项目的 .npmrc 文件不会在全局模式下生效，例如在执行 <code v-pre>npm install -g</code> 时，这时不会读取项目的 .npmrc 文件。</p>
<ol start="2">
<li>每个用户的配置文件</li>
</ol>
<p>用户级别的 .npmrc 配置文件位于用户的主目录下（<code v-pre>$HOME/.npmrc</code>）。这个配置文件用于设置与该用户相关的 npm 配置。你可以通过环境变量或命令行指定不同的用户配置文件位置。</p>
<ol start="3">
<li>全局配置文件</li>
</ol>
<p>全局配置文件位于 <code v-pre>$PREFIX/etc/npmrc</code>，用于设置所有项目和用户的全局配置。它的优先级低于项目和用户的 .npmrc 文件。如果需要修改全局配置，可以直接编辑该文件。</p>
<ol start="4">
<li>内置配置文件</li>
</ol>
<p>内置配置文件（通常位于 <code v-pre>/path/to/npm/npmrc</code>）是 npm 自带的配置文件，它定义了 npm 默认的行为。此文件无法更改，通常在 npm 更新时保持一致。该文件主要用于 npm 开发者和发行版维护者，以确保一致的默认配置。</p>
<h2 id="_4-npmrc-文件的实际应用" tabindex="-1"><a class="header-anchor" href="#_4-npmrc-文件的实际应用"><span>4. .npmrc 文件的实际应用</span></a></h2>
<ol>
<li>配置注册表（registry）
默认情况下，npm 使用官方的 npm 注册表。你可以在 .npmrc 文件中指定自定义的注册表，以提高下载速度，尤其是在不同地区使用时。例如，使用国内镜像源：</li>
</ol>
<div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre v-pre><code><span class="line"><span class="token key attr-name">registry</span><span class="token punctuation">=</span><span class="token value attr-value">https://registry.npm.taobao.org</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>配置代理
在某些网络环境下，可能需要使用代理服务器来访问 npm。在 .npmrc 中配置代理信息可以确保 npm 在受限网络下正常工作：</li>
</ol>
<div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre v-pre><code><span class="line"><span class="token key attr-name">proxy</span><span class="token punctuation">=</span><span class="token value attr-value">http://proxy.example.com:8080</span></span>
<span class="line"><span class="token key attr-name">https-proxy</span><span class="token punctuation">=</span><span class="token value attr-value">http://proxy.example.com:8080</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>配置认证信息
如果你需要发布包到私有注册表，可以在 .npmrc 文件中配置认证信息：</li>
</ol>
<div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre v-pre><code><span class="line"><span class="token key attr-name">//registry.npmjs.org/:_authToken</span><span class="token punctuation">=</span><span class="token value attr-value">YOUR_AUTH_TOKEN</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>配置缓存目录
npm 会默认使用某个目录来缓存安装的包。如果你希望修改缓存目录（不建议修改），可以通过 .npmrc 配置：</li>
</ol>
<div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre v-pre><code><span class="line"><span class="token key attr-name">cache</span><span class="token punctuation">=</span><span class="token value attr-value">/path/to/cache</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_5-注意事项" tabindex="-1"><a class="header-anchor" href="#_5-注意事项"><span>5. 注意事项</span></a></h2>
<ol>
<li>
<p>保持配置一致性
在同一组 npm 配置文件中，尽量保持设置的一致性。例如，项目和用户的配置应尽量不冲突，以避免不必要的混淆。</p>
</li>
<li>
<p>环境变量的使用
通过环境变量可以动态配置 .npmrc 文件中的参数。例如：</p>
</li>
</ol>
<div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre v-pre><code><span class="line"><span class="token key attr-name">export HOME</span><span class="token punctuation">=</span><span class="token value attr-value">/path/to/your/directory</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>通过这种方式，你可以在不同环境中使用不同的 npm 配置文件。</p>
<h2 id="_6-配置信息" tabindex="-1"><a class="header-anchor" href="#_6-配置信息"><span>6. 配置信息</span></a></h2>
<div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token key attr-name">registry</span><span class="token punctuation">=</span><span class="token value attr-value">http://registry.npmjs.org/</span></span>
<span class="line"><span class="token comment"># 定义npm的registry，即npm的包下载源</span></span>
<span class="line"></span>
<span class="line"><span class="token key attr-name">proxy</span><span class="token punctuation">=</span><span class="token value attr-value">http://proxy.example.com:8080/</span></span>
<span class="line"><span class="token comment"># 定义npm的代理服务器，用于访问网络</span></span>
<span class="line"></span>
<span class="line"><span class="token key attr-name">https-proxy</span><span class="token punctuation">=</span><span class="token value attr-value">http://proxy.example.com:8080/</span></span>
<span class="line"><span class="token comment"># 定义npm的https代理服务器，用于访问网络</span></span>
<span class="line"></span>
<span class="line"><span class="token key attr-name">strict-ssl</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"><span class="token comment"># 是否在SSL证书验证错误时退出</span></span>
<span class="line"></span>
<span class="line"><span class="token key attr-name">cafile</span><span class="token punctuation">=</span><span class="token value attr-value">/path/to/cafile.pem</span></span>
<span class="line"><span class="token comment"># 定义自定义CA证书文件的路径</span></span>
<span class="line"></span>
<span class="line"><span class="token key attr-name">user-agent</span><span class="token punctuation">=</span><span class="token value attr-value">npm/{npm-version} node/{node-version} {platform}</span></span>
<span class="line"><span class="token comment"># 自定义请求头中的User-Agent</span></span>
<span class="line"></span>
<span class="line"><span class="token key attr-name">save</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"><span class="token comment"># 安装包时是否自动保存到package.json的dependencies中</span></span>
<span class="line"></span>
<span class="line"><span class="token key attr-name">save-dev</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"><span class="token comment"># 安装包时是否自动保存到package.json的devDependencies中</span></span>
<span class="line"></span>
<span class="line"><span class="token key attr-name">save-exact</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"><span class="token comment"># 安装包时是否精确保存版本号</span></span>
<span class="line"></span>
<span class="line"><span class="token key attr-name">engine-strict</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"><span class="token comment"># 是否在安装时检查依赖的node和npm版本是否符合要求</span></span>
<span class="line"></span>
<span class="line"><span class="token key attr-name">scripts-prepend-node-path</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"><span class="token comment"># 是否在运行脚本时自动将node的路径添加到PATH环境变量中</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


