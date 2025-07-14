<template><div><h1 id="二、主进程和渲染进程" tabindex="-1"><a class="header-anchor" href="#二、主进程和渲染进程"><span>二、主进程和渲染进程</span></a></h1>
<h2 id="_2-1-主进程与渲染进程" tabindex="-1"><a class="header-anchor" href="#_2-1-主进程与渲染进程"><span>2.1 主进程与渲染进程</span></a></h2>
<p>在 <code v-pre>Electron</code> 中主要控制两类进程: 主进程、渲染器进程。</p>
<ol>
<li>主进程<br>
每个 <code v-pre>Electron</code> 应用都有一个单一的主进程，作为应用程序的入口点。 主进程在 <code v-pre>Node.js</code> 环境中运行，<strong>它具有 <code v-pre>require</code> 模块和使用所有 <code v-pre>Node.js API</code> 的能力，主进程的核心就是:使用<code v-pre>BrowserWindow</code> 来创建和管理窗口。</strong></li>
<li>渲染进程<br>
<strong>每个 <code v-pre>BrowserWindow</code> 实例都对应一个单独的渲染器进程，运行在渲染器进程中的代码，必须遵守网页标准，这也就意味着:渲染器进程无权直接访问<code v-pre>require</code>或使用任何 <code v-pre>Node.js</code> 的<code v-pre>API</code>。</strong></li>
</ol>
<blockquote>
<p>问题产生:处于渲染器进程的用户界面，该怎样才与 <code v-pre>Node.js</code> 和 <code v-pre>Electron</code> 的原生桌面功能进行交互呢? 通过 <code v-pre>Preload</code> 脚本</p>
</blockquote>
<ol start="3">
<li>具体流程图</li>
</ol>

          <code>
          <pre class="mermaid" id="mermaid-iy7tr41">
            flowchart LR
    A[主进程] --> |获取系统信息| B[系统]
    A <--> |数据| C[预加载脚本1]
    C <--> |获取与返回| D[渲染进程1]
    A <--> |数据| E[预加载脚本2]
    E <--> |获取与返回| F[渲染进程2]
    E <--> |获取与返回| G[渲染进程3]

          </pre>
          </code>
        <h2 id="_2-2-preload-脚本" tabindex="-1"><a class="header-anchor" href="#_2-2-preload-脚本"><span>2.2 Preload 脚本</span></a></h2>
<p>预加载(<code v-pre>Preload</code>)脚本是<strong>运行在渲染进程中的</strong>，但它是在网页内容加载之前执行的，这意味着它具有比普通渲染器代码更高的权限，可以访问 <code v-pre>Node.js</code> 的 <code v-pre>API</code>，同时又可以与网页内容进行安全的交互。<br>
<strong>简单说:它是 <code v-pre>Node.js</code> 和 <code v-pre>Web API</code> 的桥梁，<code v-pre>Preload</code> 脚本可以安全地将部分 <code v-pre>Node.js</code> 功能暴露给网页，从而减少安全风险。</strong></p>
<blockquote>
<p>需求:点击按钮后，在页面呈现当前电脑的 <code v-pre>Node</code> 版本。</p>
</blockquote>
<p>具体文件结构与编码如下:</p>
<ol>
<li>在根目录创建预加载脚本 <code v-pre>preload.js</code> ，内容如下：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> contextBridge <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暴露数据给渲染进程</span></span>
<span class="line">contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span><span class="token string">'myNodeVersion'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">version</span><span class="token operator">:</span> process<span class="token punctuation">.</span>version</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在主线程(main.js)中引入 <code v-pre>preload.js</code></li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"> <span class="token keyword">const</span> <span class="token punctuation">{</span>app<span class="token punctuation">,</span>BrowserWindow<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> win <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'ready'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token comment">// 宽度</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token comment">// 高度</span></span>
<span class="line">        <span class="token literal-property property">autoHideMenuBar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 自动隐藏菜单栏（默认是false）</span></span>
<span class="line">        <span class="token literal-property property">alwysOnTop</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 窗口置顶(类似z-index:9999，永远置于最高层) （默认是false）</span></span>
<span class="line">        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 窗口左上角x坐标</span></span>
<span class="line">        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 窗口左上角y坐标</span></span>
<span class="line">        <span class="token literal-property property">webPreferences</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">preload</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./preload.js"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 访问资源文件</span></span>
<span class="line">    win<span class="token punctuation">.</span><span class="token function">loadFile</span><span class="token punctuation">(</span><span class="token string">'./pages/index.html'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 程序启动后开启 开发者工具</span></span>
<span class="line">    win<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        win <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 关闭所有窗口时退出应用 (Windows &amp; Linux)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'window-all-closed'</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    app<span class="token punctuation">.</span><span class="token function">quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在 <code v-pre>html</code> 页面中编写对应按钮，并创建专门编写网页脚本的 <code v-pre>render.js</code> ，随后引入。</li>
</ol>
<p><code v-pre>index.html</code> 内容如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 内容安全策略 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content-Security-Policy<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>index<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>hello world！！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>获取Node版本号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./render.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>在渲染进程中使用 <code v-pre>version</code></li>
</ol>
<p><code v-pre>render.js</code> 内容如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myNodeVersion<span class="token punctuation">.</span>version<span class="token punctuation">)</span></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;h2></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myNodeVersion<span class="token punctuation">.</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h2></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>
<p>整体文件结构如下:</p>
<p><img src="/application/electron/base/003.png" alt=""></p>
</li>
<li>
<p>效果演示：</p>
<p><img src="/application/electron/base/004.gif" alt=""></p>
</li>
</ol>
<h2 id="_2-3-进程通信-ipc" tabindex="-1"><a class="header-anchor" href="#_2-3-进程通信-ipc"><span>2.3 进程通信(IPC)</span></a></h2>
<blockquote>
<p>值得注意的是:<br>
上文中的 <code v-pre>preload.js</code> ，无法使用全部<code v-pre>Node.js</code> 的 <code v-pre>API</code>，比如:不能使用 <code v-pre>Node</code> 中的 <code v-pre>fs</code> 模块，但主进程(<code v-pre>main.js</code> )是可以的，这时就需要进程通信了。<strong>简单说:要让 <code v-pre>preload.js</code> 通知 <code v-pre>main.js</code> 去调用 <code v-pre>fs</code> 模块去干活。</strong></p>
</blockquote>
<p>关于 <code v-pre>Electron</code> 进程通信，我们要知道:</p>
<ul>
<li><code v-pre>IPC</code> 全称为:<code v-pre>InterProcessCommunication</code>，即:进程通信。</li>
<li><strong><code v-pre>IPC</code> 是 <code v-pre>Electron</code> 中最为核心的内容，它是从<code v-pre>UI</code> 调用原生 <code v-pre>API</code> 的唯一方法!</strong></li>
<li><code v-pre>Electron</code> 中，主要使用 <code v-pre>ipcMain</code> 和 <code v-pre>ipcRenderer</code> 来定义“通道”，进行进程通信。</li>
</ul>
<h3 id="_2-3-1-渲染进程-主进程-单向" tabindex="-1"><a class="header-anchor" href="#_2-3-1-渲染进程-主进程-单向"><span>2.3.1 渲染进程==&gt;主进程(单向)</span></a></h3>
<p>概述:<strong>在渲染器进程中 <code v-pre>ipcRenderer.send</code> 发送消息，在主进程中使用 <code v-pre>ipcMain.on</code> 接收消息。常用于:在 <code v-pre>Web</code> 中调用主进程的 <code v-pre>API</code></strong>，例如下面的这个需求:</p>
<blockquote>
<p>需求:点击按钮后，在用户的 <code v-pre>D</code>盘创建一个 <code v-pre>hello.txt</code> 文件，文件内容来自于用户输入。</p>
</blockquote>
<ol>
<li><code v-pre>index.html</code>页面中添加相关元素，render.js 中添加对应的点击事件</li>
</ol>
<p><code v-pre>index.html</code>内容：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 内容安全策略 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Content-Security-Policy<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>index<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>hello world！！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>获取Node版本号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>在用户的D盘创建一个hello.txt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./render.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>render.js</code> 内容：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 可以不用写const btn = document.getElementById('btn')</span></span>
<span class="line">btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myNodeVersion<span class="token punctuation">.</span>version<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;h2></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myNodeVersion<span class="token punctuation">.</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h2></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> btn2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"btn2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"content"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">btn2<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  myAPI<span class="token punctuation">.</span><span class="token function">saveFile</span><span class="token punctuation">(</span>content<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>preload.js</code> 中使用 <code v-pre>ipcRenderer.send('信道',参数)</code>发送消息，与主进程通信。</li>
</ol>
<p><code v-pre>preload.js</code> 内容：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> contextBridge<span class="token punctuation">,</span> ipcRenderer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 暴露数据给渲染进程</span></span>
<span class="line">contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span><span class="token string">'myNodeVersion'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">version</span><span class="token operator">:</span> process<span class="token punctuation">.</span>version</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span><span class="token string">'myAPI'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">//渲染进程给主进程发送消息事件</span></span>
<span class="line">      ipcRenderer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'create-file'</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>主进程中，<strong>在加载页面之前</strong>，使用 <code v-pre>ipcMain.on('信道”,回调)</code>配置对应回调函数，接收消息。</li>
</ol>
<p><code v-pre>main.js</code> 内容：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 引入：app（整个应用）、BrowserWindow（用于创建窗口）、ipcMain（用于进程通信）</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow<span class="token punctuation">,</span> ipcMain <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 引入path模块</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 引入fs模块</span></span>
<span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 2.创建文件</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">'D:/hello.txt'</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.创建浏览器窗口。</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 1.1.创建浏览器窗口。</span></span>
<span class="line">  mainWindow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token comment">// 宽度</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token comment">// 高度</span></span>
<span class="line">    <span class="token literal-property property">autoHideMenuBar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 自动隐藏菜单栏（默认是false）</span></span>
<span class="line">    <span class="token literal-property property">alwysOnTop</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 窗口置顶(类似z-index:9999，永远置于最高层) （默认是false）</span></span>
<span class="line">    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 窗口左上角x坐标</span></span>
<span class="line">    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 窗口左上角y坐标</span></span>
<span class="line">    <span class="token literal-property property">webPreferences</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">preload</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./preload.js"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 2.1.主进程注册对应的事件</span></span>
<span class="line">  ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"create-file"</span><span class="token punctuation">,</span>createFile<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 1.2.加载一个本地的页面</span></span>
<span class="line">  mainWindow<span class="token punctuation">.</span><span class="token function">loadFile</span><span class="token punctuation">(</span><span class="token string">"./pages/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整的<code v-pre>main.js</code> 如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// main.js运行在应用的主进程上，无法访问web相关API，主要负责：控制生命周期、显示界面</span></span>
<span class="line"><span class="token comment">// 控制渲染进程等其他操作。</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 引入：app（整个应用）、BrowserWindow（用于创建窗口）、ipcMain（用于进程通信）</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow<span class="token punctuation">,</span> ipcMain <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'electron'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 引入path模块</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 引入fs模块</span></span>
<span class="line"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被</span></span>
<span class="line"><span class="token comment">// 垃圾回收的时候，window对象将会自动的关闭</span></span>
<span class="line"><span class="token keyword">let</span> mainWindow<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.创建文件</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createFile</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token string">'D:/hello.txt'</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.创建浏览器窗口。</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 1.1.创建浏览器窗口。</span></span>
<span class="line">  mainWindow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span> <span class="token comment">// 宽度</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token comment">// 高度</span></span>
<span class="line">    <span class="token literal-property property">autoHideMenuBar</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 自动隐藏菜单栏（默认是false）</span></span>
<span class="line">    <span class="token literal-property property">alwysOnTop</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 窗口置顶(类似z-index:9999，永远置于最高层) （默认是false）</span></span>
<span class="line">    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 窗口左上角x坐标</span></span>
<span class="line">    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 窗口左上角y坐标</span></span>
<span class="line">    <span class="token literal-property property">webPreferences</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">preload</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"./preload.js"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 2.1.主进程注册对应的事件</span></span>
<span class="line">  ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"create-file"</span><span class="token punctuation">,</span>createFile<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 1.2.加载一个远程的页面</span></span>
<span class="line">  <span class="token comment">// mainWindow.loadURL("http://www.baidu.com");</span></span>
<span class="line">  <span class="token comment">// 1.2.加载一个本地的页面</span></span>
<span class="line">  mainWindow<span class="token punctuation">.</span><span class="token function">loadFile</span><span class="token punctuation">(</span><span class="token string">"./pages/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.3.当 window 被加载，就执行创建窗口这个函数</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"ready"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 1.6.在 mac上，点击 Dock 图标且没有其他窗口打开时，重新创建窗口</span></span>
<span class="line">  <span class="token comment">// 当应用被激活时  </span></span>
<span class="line">  app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"activate"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 如果没有窗口打开，则创建一个窗口</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>BrowserWindow<span class="token punctuation">.</span><span class="token function">getAllWindows</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.4.当 window 被关闭，这个事件会被触发。</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"closed"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 取消引用 window 对象，如果你的应用支持多窗口的话，</span></span>
<span class="line">  <span class="token comment">// 通常会把多个 window 对象存放在一个数组里面，</span></span>
<span class="line">  <span class="token comment">// 与此同时，你应该删除相应的元素。</span></span>
<span class="line">  mainWindow <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.5.当所有窗口都关闭时，自动退出应用，除非在 macOS 上</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"window-all-closed"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>platform <span class="token operator">!==</span> <span class="token string">"darwin"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    app<span class="token punctuation">.</span><span class="token function">quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>
<p>运行项目，即可实现效果。</p>
<ul>
<li>运行页面</li>
</ul>
<p><img src="/application/electron/base/005.png" alt=""></p>
<ul>
<li>写入结果</li>
</ul>
<p><img src="/application/electron/base/006.png" alt=""></p>
</li>
</ol>
<h3 id="_2-3-2-渲染进程-主进程-双向" tabindex="-1"><a class="header-anchor" href="#_2-3-2-渲染进程-主进程-双向"><span>2.3.2 渲染进程&lt;==&gt;主进程(双向)</span></a></h3>
<p>概述:渲染进程通过<code v-pre>ipcRenderer.invoke</code> 发送消息，主进程使用 <code v-pre>ipcMain.handle</code> 接收并处理消息。<br>
备注:<code v-pre>ipcRender.invoke</code> 的返回值是 <code v-pre>Promise</code> 实例。<br>
<strong>常用于:从渲染器进程调用主进程方法并等待结果</strong>，例如下面的这个需求:</p>
<blockquote>
<p>需求:点击按钮从 <code v-pre>D</code>盘读取 <code v-pre>hello.txt</code> 中的内容，并将结果呈现在页面上。</p>
</blockquote>
<ol>
<li>页面中添加相关元素，<code v-pre>render.js</code> 中添加对应脚本</li>
</ol>
<p><code v-pre>index.html</code></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>读取⽤户D盘的hello.txt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>render.js</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> btn3 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"btn3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">btn3<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> myAPI<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;h2></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h2></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>preload.js</code> 中使用 <code v-pre>ipcRenderer.invoke('信道',参数)</code>发送消息，与主进程通信。</li>
</ol>
<p><code v-pre>preload.js</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> contextBridge<span class="token punctuation">,</span> ipcRenderer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"electron"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span><span class="token string">"myAPI"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//渲染进程给主进程发送消息事件,通过 IPC 发送 'file-save' 事件并传递数据</span></span>
<span class="line">        ipcRenderer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"create-file"</span><span class="token punctuation">,</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 定义读取文件的方法，通过 IPC 调用 'file-read' 事件并返回 Promise 结果</span></span>
<span class="line">    <span class="token function-variable function">readFile</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> ipcRenderer<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">"file-read"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><strong>主进程中，在加载页面之前</strong>，使用 <code v-pre>ipcMain.handle('信道',回调)</code>接收消息，并配置回调函数。</li>
</ol>
<p><code v-pre>main.js</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 3.读取文件,读取指定文件内容并返回字符串格式的结果</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">readFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> res <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">'D:/hello.txt'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token comment">// ... 省略</span></span>
<span class="line">  <span class="token comment">// 3.1.处理 'file-read' IPC 事件，调用 readFile 函数处理，并返回结果</span></span>
<span class="line">  ipcMain<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">'file-read'</span><span class="token punctuation">,</span> readFile<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>
<p>运行结果</p>
<p><img src="/application/electron/base/007.png" alt=""></p>
</li>
</ol>
<h3 id="_2-3-3-主进程到-渲染进程" tabindex="-1"><a class="header-anchor" href="#_2-3-3-主进程到-渲染进程"><span>2.3.3 主进程到=&gt;渲染进程</span></a></h3>
<p>概述:主进程使用 <code v-pre>win.webContents.send</code> 发送消息，渲染进程通过<code v-pre>ipcRenderer.on</code> 处理消息<br>
常用于:<strong>从主进程主动发送消息给渲染进程</strong>，例如下面的这个需求:</p>
<blockquote>
<p>需求:应用加载 6秒钟后，主动给渲染进程发送一个消息，内容是:你好啊!</p>
</blockquote>
<ol>
<li>页面中添加相关元素，<code v-pre>render.js</code> 中添加对应脚本</li>
</ol>
<p><code v-pre>render.js</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  myAPI<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span>logMessage<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">logMessage</span><span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span>str</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span>str<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>preload.js</code> 中使用 <code v-pre>ipcRenderer.on ('信道',回调)</code>接收消息，并配置回调函数。</li>
</ol>
<p><code v-pre>preload.js</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span><span class="token string">"myAPI"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">getMessage</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> ipcRenderer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>主进程中，在合适的时候，使用 <code v-pre>mainWindow.webcontents.send('信道',数据)</code>发送消息。</li>
</ol>
<p><code v-pre>main.js</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//...</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 创建⼀个定时器</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    mainWindow<span class="token punctuation">.</span>webContents<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"message"</span><span class="token punctuation">,</span> <span class="token string">"你好啊！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>运行结果</li>
</ol>
<p><img src="/application/electron/base/008.png" alt=""></p>
</div></template>


