<template><div><h1 id="一、轻松入门" tabindex="-1"><a class="header-anchor" href="#一、轻松入门"><span>一、轻松入门</span></a></h1>
<p><a href="https://www.electronjs.org/zh" target="_blank" rel="noopener noreferrer">进入官方网站</a></p>
<h2 id="_1-1-搭建开发环境" tabindex="-1"><a class="header-anchor" href="#_1-1-搭建开发环境"><span>1.1 搭建开发环境</span></a></h2>
<p>安装 yarn ：</p>
<blockquote>
<p><code v-pre>npm i -g yarn</code></p>
</blockquote>
<p>创建一个文件夹，进行项目的初始化：</p>
<blockquote>
<p><code v-pre>yarn init -y</code></p>
</blockquote>
<p>配置 Electron 的镜像网站：</p>
<blockquote>
<p><code v-pre>yarn config set electron_mirror https://registry.npmmirror.com/-/binary/electron/</code></p>
</blockquote>
<p>使用 yarn 安装 Electron：</p>
<blockquote>
<p><code v-pre>yarn add electron --dev</code></p>
</blockquote>
<h2 id="_1-2-创建窗口界面" tabindex="-1"><a class="header-anchor" href="#_1-2-创建窗口界面"><span>1.2 创建窗口界面</span></a></h2>
<p>创建一个 index.html 文件，内容如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Electron<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建一个 index.js 文件，内容如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>app<span class="token punctuation">,</span>BrowserWindow<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> win <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'ready'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 为页面集成Node.js环境</span></span>
<span class="line">        <span class="token literal-property property">webPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">nodeIntegration</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 访问资源文件</span></span>
<span class="line">    win<span class="token punctuation">.</span><span class="token function">loadFile</span><span class="token punctuation">(</span><span class="token string">'index.html'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 程序启动后开启 开发者工具</span></span>
<span class="line">    <span class="token comment">// win.webContents.openDevTools();</span></span>
<span class="line">    </span>
<span class="line">    win<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        win <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'window-all-closed'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    app<span class="token punctuation">.</span><span class="token function">quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新 package.json 文件：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"electron ./index.js"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动项目：</p>
<blockquote>
<p><code v-pre>yarn start</code></p>
</blockquote>
<p>结果展示：</p>
<p><img src="/application/electron/base/001.png" alt=""></p>
<h2 id="_1-3-使用-vscode-调试" tabindex="-1"><a class="header-anchor" href="#_1-3-使用-vscode-调试"><span>1.3 使用 vscode 调试</span></a></h2>
<p>如果您希望使用 VS Code 调试您的程序，您需要让 VS Code 监听主进程 (main process) 和渲染器进程 (renderer process) 。 下面为您提供了一个简单的配置文件。 请在根目录新建一个 .vscode 文件夹，然后在其中新建一个 launch.json 配置文件并填写如下内容。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.2.0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"compounds"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Main + renderer"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"configurations"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"Main"</span><span class="token punctuation">,</span> <span class="token string">"Renderer"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"stopAll"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"configurations"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Renderer"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">9222</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"request"</span><span class="token operator">:</span> <span class="token string">"attach"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"chrome"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"webRoot"</span><span class="token operator">:</span> <span class="token string">"${workspaceFolder}"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Main"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"request"</span><span class="token operator">:</span> <span class="token string">"launch"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"cwd"</span><span class="token operator">:</span> <span class="token string">"${workspaceFolder}"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"runtimeExecutable"</span><span class="token operator">:</span> <span class="token string">"${workspaceFolder}/node_modules/.bin/electron"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"windows"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"runtimeExecutable"</span><span class="token operator">:</span> <span class="token string">"${workspaceFolder}/node_modules/.bin/electron.cmd"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">"--remote-debugging-port=9222"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"outputCapture"</span><span class="token operator">:</span> <span class="token string">"std"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"console"</span><span class="token operator">:</span> <span class="token string">"integratedTerminal"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存后，当您选择侧边栏的 “运行和调试”，将会出现一个 &quot;Main + renderer&quot; 选项。然后您便可设置断点，并跟踪主进程和渲染器进程中的所有变量。</p>
<p>上文中我们在 launch.json 所做的其实是创建三个配置项：</p>
<ul>
<li>Main 用来运行主程序，并且暴露出 9222 端口用于远程调试 (--remote-debugging-port=9222) 。 我们将把调试器绑定到那个端口来调试 renderer 。 因为主进程是 Node.js 进程，类型被设置为 node。</li>
<li>Renderer 用来调试渲染器进程。 因为后者是由主进程创建的，我们要把它 “绑定” 到主进程上 ()&quot;request&quot;: &quot;attach&quot;，而不是创建一个新的。 渲染器是 web 进程，因此要选择 chrome 调试器。</li>
<li>Main + renderer 是一个 复合任务，可以同时执行上述任务。</li>
</ul>
<p><img src="/application/electron/base/002.png" alt=""></p>
<p>快捷键：</p>
<p><code v-pre>Ctrl</code>+<code v-pre>Shift</code>+<code v-pre>I</code>：打开渲染进程的调试窗口</p>
<p><code v-pre>Ctrl</code>+<code v-pre>R</code>：代码修改后，刷新界面</p>
</div></template>


