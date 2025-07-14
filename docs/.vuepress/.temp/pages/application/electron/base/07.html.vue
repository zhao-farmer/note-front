<template><div><h1 id="七、在electron中使用vue3" tabindex="-1"><a class="header-anchor" href="#七、在electron中使用vue3"><span>七、在Electron中使用vue3</span></a></h1>
<h2 id="_7-1-常规使用" tabindex="-1"><a class="header-anchor" href="#_7-1-常规使用"><span>7.1 常规使用</span></a></h2>
<h3 id="_7-1-1-安装vue" tabindex="-1"><a class="header-anchor" href="#_7-1-1-安装vue"><span>7.1.1 安装vue</span></a></h3>
<ol>
<li>初始化vue项目</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> create vue@latest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>注意： 如果提示不成功，可能是node版本太低的原因。</p>
</blockquote>
<ol start="2">
<li>下载包</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> .<span class="token punctuation">\</span>目录<span class="token punctuation">\</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>启动项目</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/application/electron/base/009.png" alt=""></p>
<h3 id="_7-1-2-安装electron" tabindex="-1"><a class="header-anchor" href="#_7-1-2-安装electron"><span>7.1.2 安装Electron</span></a></h3>
<ol>
<li>新建一个 <code v-pre>electron-base</code> 文件夹</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token builtin class-name">cd</span> electron-base</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>生成 package.json 文件</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> init <span class="token parameter variable">-y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>使用 yarn 安装 Electron</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> electron <span class="token parameter variable">--dev</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>修改 package.json 配置文件</li>
</ol>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"electron-base"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"main.js"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"electron ."</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"electron"</span><span class="token operator">:</span> <span class="token string">"^37.2.1"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>新建主线程文件main.js,并贴入代码</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// app 模块，它控制应用程序的事件生命周期。</span></span>
<span class="line"><span class="token comment">// BrowserWindow 模块，它创建和管理应用程序 窗口。</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow<span class="token punctuation">,</span> ipcMain <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"electron"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"node:path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">createWindow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 创建一个浏览器窗口对象</span></span>
<span class="line">    <span class="token keyword">const</span> win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">webPreferences</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">preload</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"preload.js"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 窗口对象对应的html文件</span></span>
<span class="line">    win<span class="token punctuation">.</span><span class="token function">loadFile</span><span class="token punctuation">(</span><span class="token string">"./pages/index.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// win.loadURL('http://localhost:5173/')</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// app模块准备完成，创建窗口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">whenReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    ipcMain<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">"__dirname"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> __dirname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>新建预加载线程preload.js并写入代码</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span> contextBridge<span class="token punctuation">,</span> ipcRenderer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"electron"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span><span class="token string">"versions"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">getVersions</span><span class="token operator">:</span> <span class="token parameter">name</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> process<span class="token punctuation">.</span>versions<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span><span class="token string">"jinlin"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">pika</span><span class="token operator">:</span> <span class="token string">"皮卡丘"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span><span class="token string">"sex"</span><span class="token punctuation">,</span> <span class="token string">"男"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span><span class="token string">"dirname"</span><span class="token punctuation">,</span> ipcRenderer<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">"__dirname"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>新建html文件并写入代码</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>hello world!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">const</span> h2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"h2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        window<span class="token punctuation">.</span>dirname<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"res"</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 因为在预加载脚本preload.js中暴露了全局变量 varName，所以在html中可以直接访问到其中的node.js的内容</span></span>
<span class="line">            h2<span class="token punctuation">.</span>innerText <span class="token operator">=</span> </span>
<span class="line">                <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">                该应用的Chrome版本为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>versions<span class="token punctuation">.</span><span class="token function">getVersions</span><span class="token punctuation">(</span><span class="token string">"chrome"</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span>
<span class="line">                Node.js的版本为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>versions<span class="token punctuation">.</span><span class="token function">getVersions</span><span class="token punctuation">(</span><span class="token string">"node"</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">                Electron版本为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>versions<span class="token punctuation">.</span><span class="token function">getVersions</span><span class="token punctuation">(</span><span class="token string">"electron"</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">                我的精灵是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>jinlin<span class="token punctuation">.</span>pika<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">                我的性别是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sex<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">                文件路径是:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>res<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"></span>
<span class="line">                </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 通常专门弄一个renderer.js文件来写html中运用到的js内容，称之为渲染脚本 --></span></span>
<span class="line">    <span class="token comment">&lt;!-- &lt;script src="./renderer.js"></span>
<span class="line"></span>
<span class="line">    &lt;/script> --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li>启动electron</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> start</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_7-1-3-将vue和electron结合使用" tabindex="-1"><a class="header-anchor" href="#_7-1-3-将vue和electron结合使用"><span>7.1.3 将vue和Electron结合使用</span></a></h3>
<ol>
<li>
<p>直接调用网络方法</p>
<p>在前面使用Electron都是直接加载一个html页面，Electron窗口还提供了一个加载URL的方法，我们只需要在主线程中加载vue启动项目的动态URL就可以在vue中使用Electron的属性和方法。</p>
<p><img src="/application/electron/base/011.png" alt=""></p>
<blockquote>
<p>注意：确保vue项目是启动着的，然后新开命令行窗口运行Electron。</p>
</blockquote>
<p><img src="/application/electron/base/012.png" alt=""></p>
</li>
<li>
<p>在vue中使用Electron提供的预加载线程变量</p>
<p>先把App.vue文件中多余部分全部删除</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    App</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意： 在vue中的template模板不能直接调用window变量（vue设计如此）。</p>
</blockquote>
<p>使用预加载变量</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token comment">// console.log("window.jinlin",window.jinlin.pika);</span></span>
<span class="line">  <span class="token keyword">const</span> pika <span class="token operator">=</span> window<span class="token punctuation">.</span>jinlin<span class="token punctuation">.</span>pika</span>
<span class="line">  </span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    App2</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>我的精灵是：{{ pika }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 错误写法 --></span></span>
<span class="line">    <span class="token comment">&lt;!-- &lt;div>我的精灵是：{{ window.jinlin.pika }}&lt;/div> --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/application/electron/base/013.png" alt=""></p>
</li>
<li>
<p>动态启动Electron</p>
<p>当前在vue中更改代码后，页面内容都会动态改变。但是在Electron中修改代码必须关掉再启动。</p>
<p>可以安装nodemon实现Electron动态启动。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">add</span> nodemon <span class="token parameter variable">-D</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>修改package.json的start命令</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"start"</span><span class="token operator">:</span> <span class="token string">"nodemon --exec electron . --watch ./ --ext .js,.html"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时修改Electron中的内容就会自动重启了。</p>
</li>
<li>
<p>打包</p>
<p>打包就是两个项目分别打包。</p>
<p>如果要将vue项目部署上线，就直接改为部署后的URL再执行Electron打包。</p>
<p>如果只想本地打包，就将vue打包后的dist文件夹复制到Electron文件夹中，再读取html文件，最后打包。</p>
<p>在此我详细介绍第二种本地打包方式。</p>
<ol>
<li>vue打包</li>
</ol>
<p>修改vite.config.js，新增base路径</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> fileURLToPath<span class="token punctuation">,</span> <span class="token constant">URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'node:url'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span></span>
<span class="line"><span class="token keyword">import</span> vueDevTools <span class="token keyword">from</span> <span class="token string">'vite-plugin-vue-devtools'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// https://vite.dev/config/</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token literal-property property">base</span><span class="token operator">:</span><span class="token string">"./"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">vueDevTools</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">'@'</span><span class="token operator">:</span> <span class="token function">fileURLToPath</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span><span class="token string">'./src'</span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换目录，打包得到dist文件夹</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run build<span class="token punctuation">\</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>
<p>Eletron打包</p>
<ol>
<li>将上面得到的dist文件夹粘贴过来</li>
</ol>
<p><img src="/application/electron/base/014.png" alt=""></p>
<ol start="2">
<li>修改主线程文件路径</li>
</ol>
<p><img src="/application/electron/base/015.png" alt=""></p>
</li>
<li>
<p>执行打包命令</p>
</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev @electron-forge/cli </span>
<span class="line">npx electron-forge <span class="token function">import</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev @electron-forge/plugin-fuses</span>
<span class="line"><span class="token function">npm</span> run <span class="token function">make</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="_7-2-使用-vite-plugin-electron" tabindex="-1"><a class="header-anchor" href="#_7-2-使用-vite-plugin-electron"><span>7.2 使用 vite-plugin-electron</span></a></h2>
<h3 id="_7-2-1-安装命令" tabindex="-1"><a class="header-anchor" href="#_7-2-1-安装命令"><span>7.2.1 安装命令</span></a></h3>
<ol>
<li>
<p>安装Vue3(选择TS)</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> create vite@latest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>安装Electron</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i electron <span class="token parameter variable">-D</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>安装辅助库</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i vite-plugin-electron <span class="token parameter variable">-D</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_7-2-2-修改配置文件" tabindex="-1"><a class="header-anchor" href="#_7-2-2-修改配置文件"><span>7.2.2 修改配置文件</span></a></h3>
<ol>
<li>
<p>修改vite.config.ts</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"><span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span></span>
<span class="line"><span class="token keyword">import</span> electron <span class="token keyword">from</span> <span class="token string">'vite-plugin-electron'</span></span>
<span class="line"><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// https://vitejs.dev/config/</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token function">electron</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// 程序的主要入口文件</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        entry<span class="token operator">:</span> <span class="token string">'electron/main.ts'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">onstart</span><span class="token operator">:</span> options <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 多个页面时，自定义启动页面</span></span>
<span class="line">          options<span class="token punctuation">.</span><span class="token function">startup</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'.'</span><span class="token punctuation">,</span> <span class="token string">'--no-sandbox'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 预加载文件</span></span>
<span class="line">        entry<span class="token operator">:</span> <span class="token string">'electron/preload.ts'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">onstart</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// 重载preload文件为ts文件</span></span>
<span class="line">          options<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  resolve<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    alias<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'@'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'./src'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>设置package.json
​
通过在package.json文件中去除&quot;type&quot;: &quot;module&quot;选项，添加&quot;main&quot;: &quot;dist-electron/main.js&quot;选项。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"vite-project"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"private"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"0.0.0"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"dist-electron/main.js"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"vite"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"vue-tsc -b &amp;&amp; vite build"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"preview"</span><span class="token operator">:</span> <span class="token string">"vite preview"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"vue"</span><span class="token operator">:</span> <span class="token string">"^3.5.17"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"@vitejs/plugin-vue"</span><span class="token operator">:</span> <span class="token string">"^6.0.0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"@vue/tsconfig"</span><span class="token operator">:</span> <span class="token string">"^0.7.0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"electron"</span><span class="token operator">:</span> <span class="token string">"^37.2.1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"typescript"</span><span class="token operator">:</span> <span class="token string">"~5.8.3"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"vite"</span><span class="token operator">:</span> <span class="token string">"^7.0.4"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"vite-plugin-electron"</span><span class="token operator">:</span> <span class="token string">"^0.29.0"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"vue-tsc"</span><span class="token operator">:</span> <span class="token string">"^2.2.12"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改 tsconfig.app.json 文件</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"@vue/tsconfig/tsconfig.dom.json"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"tsBuildInfoFile"</span><span class="token operator">:</span> <span class="token string">"./node_modules/.tmp/tsconfig.app.tsbuildinfo"</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">/* Linting */</span></span>
<span class="line">        <span class="token property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"noUnusedLocals"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"noUnusedParameters"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"erasableSyntaxOnly"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"noFallthroughCasesInSwitch"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"noUncheckedSideEffectImports"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">            <span class="token property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/*"</span><span class="token punctuation">]</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"src/**/*.ts"</span><span class="token punctuation">,</span> </span>
<span class="line">      <span class="token string">"src/**/*.tsx"</span><span class="token punctuation">,</span> </span>
<span class="line">      <span class="token string">"src/**/*.vue"</span><span class="token punctuation">,</span> </span>
<span class="line highlighted">      <span class="token string">"types/**/*.d.ts"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="_7-2-3-代码相关" tabindex="-1"><a class="header-anchor" href="#_7-2-3-代码相关"><span>7.2.3 代码相关</span></a></h3>
<ol>
<li>
<p>代码结构与变化文件</p>
<p><img src="/application/electron/base/034.png" alt=""></p>
</li>
<li>
<p>修改主进程与预加载脚本</p>
<p>main.ts</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow<span class="token punctuation">,</span>ipcMain <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'electron'</span></span>
<span class="line"><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span></span>
<span class="line"><span class="token keyword">import</span> fs <span class="token keyword">from</span> <span class="token string">'fs'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> win<span class="token operator">:</span> BrowserWindow <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建窗口</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        width<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span> </span>
<span class="line">        height<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 预加载页面</span></span>
<span class="line">        webPreferences<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            preload<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'preload.js'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 允许渲染进程直接访问Node.js API</span></span>
<span class="line">            nodeIntegration<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 隔离上下文 设置false 为了vue直接获取一些信息</span></span>
<span class="line">            contextIsolation<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 加载url 还是 文件</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_DEV_SERVER_URL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        win<span class="token punctuation">.</span><span class="token function">loadURL</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_DEV_SERVER_URL</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 加载您的文件</span></span>
<span class="line">        win<span class="token punctuation">.</span><span class="token function">loadFile</span><span class="token punctuation">(</span><span class="token string">'dist/index.html'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//当app准备好后，执行createwindow创建窗口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span> <span class="token string">'ready'</span> <span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'应用加载完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 写入文件</span></span>
<span class="line">ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"create-file"</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span>systemPath<span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>systemPath<span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 读取文件</span></span>
<span class="line">ipcMain<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token string">'file-read'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>event<span class="token punctuation">,</span>systemPath<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> res <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>systemPath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>preload.ts</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">//预加载脚本</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> contextBridge<span class="token punctuation">,</span> ipcRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"electron"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 绑定node版本数据</span></span>
<span class="line">contextBridge<span class="token punctuation">.</span><span class="token function">exposeInMainWorld</span><span class="token punctuation">(</span><span class="token string">"electronAPI"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    nodeVersion<span class="token operator">:</span> process<span class="token punctuation">.</span>version<span class="token punctuation">,</span></span>
<span class="line">    chromeVersion<span class="token operator">:</span> process<span class="token punctuation">.</span>versions<span class="token punctuation">.</span>chrome<span class="token punctuation">,</span></span>
<span class="line">    electronVersion<span class="token operator">:</span> process<span class="token punctuation">.</span>versions<span class="token punctuation">.</span>electron<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">saveFile</span><span class="token punctuation">(</span>systemPath<span class="token operator">:</span>String<span class="token punctuation">,</span>str<span class="token operator">:</span>String<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        ipcRenderer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"create-file"</span><span class="token punctuation">,</span> systemPath<span class="token punctuation">,</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">readFile</span><span class="token operator">:</span> <span class="token punctuation">(</span>systemPath<span class="token operator">:</span>String<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> ipcRenderer<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token string">"file-read"</span><span class="token punctuation">,</span>systemPath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>映射挂载到window上</p>
<p>types/electron.d.ts</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Window</span> <span class="token punctuation">{</span></span>
<span class="line">  electronAPI<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    nodeVersion<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">    chromeVersion<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">    electronVersion<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">saveFile</span><span class="token operator">:</span> <span class="token punctuation">(</span>systemPath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">readFile</span><span class="token operator">:</span> <span class="token punctuation">(</span>systemPath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>修改App.vue</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getMsg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>获取node版本信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>setData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>【D://hello.txt】写入文本 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>【D://hello.txt】读取文本 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'此应用的node版本: '</span> <span class="token operator">+</span>  window<span class="token punctuation">.</span>electronAPI<span class="token operator">?.</span>nodeVersion</span>
<span class="line">        <span class="token operator">+</span> <span class="token string">'\n此应用的chrome版本: '</span><span class="token operator">+</span> window<span class="token punctuation">.</span>electronAPI<span class="token operator">?.</span>chromeVersion </span>
<span class="line">        <span class="token operator">+</span> <span class="token string">'\n此应用的electron版本: '</span><span class="token operator">+</span> window<span class="token punctuation">.</span>electronAPI<span class="token operator">?.</span>electronVersion </span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    window<span class="token punctuation">.</span>electronAPI<span class="token punctuation">.</span><span class="token function">saveFile</span><span class="token punctuation">(</span><span class="token string">"D://hello.txt"</span><span class="token punctuation">,</span><span class="token string">"测试写入文本"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> window<span class="token punctuation">.</span>electronAPI<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">"D://hello.txt"</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>运行结果</p>
</li>
</ol>
<p><img src="/application/electron/base/035.gif" alt=""></p>
</div></template>


