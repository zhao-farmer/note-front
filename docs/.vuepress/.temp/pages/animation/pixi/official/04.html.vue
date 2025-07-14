<template><div><h1 id="四、应用程序-application" tabindex="-1"><a class="header-anchor" href="#四、应用程序-application"><span>四、应用程序(Application)</span></a></h1>
<p><code v-pre>Application</code> 类提供了一个现代的、可扩展的入口点，用于在PixiJS中设置渲染。它抽象了常见的任务，如渲染器设置和计时器更新，并通过异步初始化来支持WebGL和WebGPU。</p>
<h2 id="_4-1-创建application" tabindex="-1"><a class="header-anchor" href="#_4-1-创建application"><span>4.1 创建Application</span></a></h2>
<p>创建应用程序需要两个步骤：构造一个实例，然后使用 <code v-pre>.init()</code> 异步初始化它。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Application <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    width<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span></span>
<span class="line">    height<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span></span>
<span class="line">    backgroundColor<span class="token operator">:</span> <span class="token number">0x1099bb</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-1-applicationoptions" tabindex="-1"><a class="header-anchor" href="#_4-1-1-applicationoptions"><span>4.1.1 ApplicationOptions</span></a></h3>
<p><code v-pre>Application</code> 的 <code v-pre>.init()</code> 方法接受一个 <code v-pre>Partial&lt;ApplicationOptions&gt;</code> 对象，具有以下配置选项：</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>类型</th>
<th>默认的</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>autoStart</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td>是否在初始化后立即开始渲染。设置为 <code v-pre>false</code> 不会停止共享计时器，如果它已经在运行。</td>
</tr>
<tr>
<td><code v-pre>resizeTo</code></td>
<td><code v-pre>Window | HTMLElement</code></td>
<td>—</td>
<td>元素来自动调整渲染器的大小以匹配。</td>
</tr>
<tr>
<td><code v-pre>sharedTicker</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>如果 <code v-pre>true</code> ，则使用共享的股票代码实例；否则，将创建一个私有代码。</td>
</tr>
<tr>
<td><code v-pre>preference</code></td>
<td><code v-pre>'webgl' | 'webgpu'</code></td>
<td><code v-pre>webgl</code></td>
<td>首选渲染器类型。</td>
</tr>
<tr>
<td><code v-pre>useBackBuffer</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>（仅限WebGL）在需要时使用back buffer。</td>
</tr>
<tr>
<td><code v-pre>forceFallbackAdapter</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>（仅限WebGPU）强制使用回退适配器。</td>
</tr>
<tr>
<td><code v-pre>powerPreference</code></td>
<td><code v-pre>'high-performance' | 'low-power'</code></td>
<td><code v-pre>undefined</code></td>
<td>提示GPU功率偏好（WebGL &amp; WebGPU）。</td>
</tr>
<tr>
<td><code v-pre>antialias</code></td>
<td><code v-pre>boolean</code></td>
<td>—</td>
<td>支持抗锯齿。可能影响性能。</td>
</tr>
<tr>
<td><code v-pre>autoDensity</code></td>
<td><code v-pre>boolean</code></td>
<td>—</td>
<td>基于 <code v-pre>resolution</code> 调整画布大小。仅适用于 <code v-pre>HTMLCanvasElement</code> 。</td>
</tr>
<tr>
<td><code v-pre>background</code></td>
<td><code v-pre>ColorSource</code></td>
<td>—</td>
<td><code v-pre>backgroundColor</code> 的别名。</td>
</tr>
<tr>
<td><code v-pre>backgroundAlpha</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>1</code></td>
<td>背景的Alpha透明度（0 =透明，1 =不透明）。</td>
</tr>
<tr>
<td><code v-pre>backgroundColor</code></td>
<td><code v-pre>ColorSource</code></td>
<td><code v-pre>'black'</code></td>
<td>用于清除画布的颜色。接受十六进制、CSS颜色或数组。</td>
</tr>
<tr>
<td><code v-pre>canvas</code></td>
<td><code v-pre>ICanvas</code></td>
<td>—</td>
<td>自定义画布实例（可选）。</td>
</tr>
<tr>
<td><code v-pre>clearBeforeRender</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td>渲染器是否应该每帧清除画布。</td>
</tr>
<tr>
<td><code v-pre>context</code></td>
<td><code v-pre>WebGL2RenderingContext | null</code></td>
<td><code v-pre>null</code></td>
<td>用户提供渲染上下文（WebGL）。</td>
</tr>
<tr>
<td><code v-pre>depth</code></td>
<td><code v-pre>boolean</code></td>
<td>—</td>
<td>在主视图中启用深度缓冲区。对于WebGL总是 <code v-pre>true</code> 。</td>
</tr>
<tr>
<td><code v-pre>height</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>600</code></td>
<td>渲染器的初始高度（单位为像素）。</td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>800</code></td>
<td>渲染器初始宽度（以像素为单位）。</td>
</tr>
<tr>
<td><code v-pre>hello</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>将渲染器信息和版本记录到控制台。</td>
</tr>
<tr>
<td><code v-pre>multiView</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>启用多画布渲染。</td>
</tr>
<tr>
<td><code v-pre>preferWebGLVersion</code></td>
<td><code v-pre>1 | 2</code></td>
<td><code v-pre>2</code></td>
<td>首选的WebGL版本。</td>
</tr>
<tr>
<td><code v-pre>premultipliedAlpha</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td>假设alpha在颜色缓冲区中预乘。</td>
</tr>
<tr>
<td><code v-pre>preserveDrawingBuffer</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>保持帧之间的缓冲。 <code v-pre>toDataURL</code> 所需。</td>
</tr>
<tr>
<td><code v-pre>resolution</code></td>
<td><code v-pre>number</code></td>
<td>1</td>
<td>The resolution of the renderer.</td>
</tr>
<tr>
<td><code v-pre>skipExtensionImports</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>防止自动导入默认PixiJS扩展。</td>
</tr>
<tr>
<td><code v-pre>textureGCActive</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td>为GPU纹理启用垃圾收集。</td>
</tr>
<tr>
<td><code v-pre>textureGCCheckCountMax</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>600</code></td>
<td>GC运行之间的帧间隔（纹理）。</td>
</tr>
<tr>
<td><code v-pre>textureGCMaxIdle</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>3600</code></td>
<td>在破坏纹理之前最大空闲帧数。</td>
</tr>
<tr>
<td><code v-pre>textureGCAMaxIdle</code></td>
<td><code v-pre>number</code></td>
<td>—</td>
<td>(出现非法;内部GC控件的占位符。)</td>
</tr>
</tbody>
</table>
<h3 id="_4-1-2-渲染器类型自定义" tabindex="-1"><a class="header-anchor" href="#_4-1-2-渲染器类型自定义"><span>4.1.2 渲染器类型自定义</span></a></h3>
<p>您还可以通过使用 <code v-pre>WebGLOptions</code> 或 <code v-pre>WebGPUOptions</code> 接口来基于渲染器类型重写属性。例如:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Application <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    width<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span></span>
<span class="line">    height<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span></span>
<span class="line">    backgroundColor<span class="token operator">:</span> <span class="token number">0x1099bb</span><span class="token punctuation">,</span></span>
<span class="line">    webgl<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        antialias<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    webgpu<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        antialias<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_4-2-内置插件" tabindex="-1"><a class="header-anchor" href="#_4-2-内置插件"><span>4.2 内置插件</span></a></h2>
<p>PixiJS包括:</p>
<ul>
<li>Ticker插件-更新每帧→指南</li>
<li>Resize插件-调整渲染器/画布的大小→指南</li>
<li>Culler插件-剔除帧外的对象→指南</li>
</ul>
<hr>
<h3 id="_4-2-1-创建自定义应用程序插件" tabindex="-1"><a class="header-anchor" href="#_4-2-1-创建自定义应用程序插件"><span>4.2.1 创建自定义应用程序插件</span></a></h3>
<p>您可以为 <code v-pre>Application</code> 类创建自定义插件。插件必须实现 <code v-pre>ApplicationPlugin</code> 接口，其中包括 <code v-pre>init()</code> 和 <code v-pre>destroy()</code> 方法。您还可以指定 <code v-pre>extension</code> 类型，即 <code v-pre>ExtensionType.Application</code> 用于应用程序插件。</p>
<p>调用这两个函数时， <code v-pre>this</code> 设置为 <code v-pre>Application</code> 实例，例如 <code v-pre>this.renderer</code> 或 <code v-pre>this.stage</code> 可用。</p>
<p><code v-pre>init()</code> 方法在应用程序初始化时调用，并传递来自 <code v-pre>application.init</code> 调用的选项，而 <code v-pre>destroy()</code> 方法在应用程序销毁时调用。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> ApplicationOptions<span class="token punctuation">,</span> ApplicationPlugin<span class="token punctuation">,</span> ExtensionType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> myPlugin<span class="token operator">:</span> ApplicationPlugin <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    extension<span class="token operator">:</span> ExtensionType<span class="token punctuation">.</span>Application<span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">init</span><span class="token punctuation">(</span>options<span class="token operator">:</span> ApplicationOptions<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Custom plugin init:'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Custom plugin destroy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> extensions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line">extensions<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>myPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-2-自定义插件选项" tabindex="-1"><a class="header-anchor" href="#_4-2-2-自定义插件选项"><span>4.2.2 自定义插件选项</span></a></h3>
<p>如果你正在使用TypeScript，或者正在提供一个插件供其他人使用，你可以扩展 <code v-pre>ApplicationOptions</code> 接口来包含你的自定义插件选项。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">declare</span> global <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">namespace</span> PixiMixins <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">interface</span> <span class="token class-name">ApplicationOptions</span> <span class="token punctuation">{</span></span>
<span class="line">            myPlugin<span class="token operator">?</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./myPlugin'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>PluginOptions <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    myPlugin<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        customOption<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 现在TypeScript会知道这个选项</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-ticker-插件" tabindex="-1"><a class="header-anchor" href="#_4-3-ticker-插件"><span>4.3 Ticker 插件</span></a></h2>
<p><code v-pre>Ticker 插件</code> 为您的PixiJS  <code v-pre>Application</code> 提供了一个内置的更新循环。这个循环以常规节奏调用 <code v-pre>.render()</code>  -默认情况下，每个动画帧调用一次-并与PixiJS的 <code v-pre>Ticker</code> 系统集成，以精确控制基于帧的更新。</p>
<p>PixiJS在初始化 <code v-pre>Application</code> 时自动包含此插件，但您也可以选择退出并手动添加它。</p>
<h3 id="_4-3-1-使用" tabindex="-1"><a class="header-anchor" href="#_4-3-1-使用"><span>4.3.1 使用</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    sharedTicker<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    autoStart<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span>ticker<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ticker<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 自定义更新</span></span>
<span class="line">    bunny<span class="token punctuation">.</span>rotation <span class="token operator">+=</span> <span class="token number">1</span> <span class="token operator">*</span> ticker<span class="token punctuation">.</span>deltaTime<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>默认的行为</li>
</ol>
<p><code v-pre>TickerPlugin</code> 是自动包含的，除非被禁用：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    autoStart<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 自动启动渲染循环</span></span>
<span class="line">    sharedTicker<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 使用特有的ticker</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>手动注册</li>
</ol>
<p>如果你自己管理扩展：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> extensions<span class="token punctuation">,</span> TickerPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">extensions<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>TickerPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>共享与自定义股票</li>
</ol>
<p>该插件支持两种模式：</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>sharedTicker: true</code></td>
<td>使用 <code v-pre>Ticker.shared</code> ，在所有应用程序之间共享。</td>
</tr>
<tr>
<td><code v-pre>sharedTicker: false</code></td>
<td>创建作用域为应用程序的私有计时器实例。</td>
</tr>
</tbody>
</table>
<p><strong>行为差异</strong></p>
<ul>
<li>如果使用共享的报价机，其他代码也可能注册更新，因此执行的顺序可能会有所不同。</li>
<li>如果使用自定义计时器，您可以完全控制时间和更新顺序。</li>
</ul>
<hr>
<h3 id="_4-3-2-生命周期控制" tabindex="-1"><a class="header-anchor" href="#_4-3-2-生命周期控制"><span>4.3.2 生命周期控制</span></a></h3>
<p>您可以手动停止和启动计时器：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 停止自动渲染</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 恢复</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是有用的：</p>
<ul>
<li>暂停游戏或动画</li>
<li>非活动选项卡上的性能限制</li>
<li>管理可见性事件</li>
</ul>
<h2 id="_4-4-resize-插件" tabindex="-1"><a class="header-anchor" href="#_4-4-resize-插件"><span>4.4 Resize 插件</span></a></h2>
<p><code v-pre>Resize 插件</code> 为PixiJS应用程序提供了自动调整大小的功能。启用后，它会监听窗口或元素的大小调整事件，并相应地调整应用程序的呈现器的大小。</p>
<p>这是有用的：</p>
<ul>
<li>使画布响应浏览器窗口</li>
<li>保持长宽比或适合容器</li>
<li>无需手动调整大小调用即可处理布局更改</li>
</ul>
<p>默认情况下，PixiJS在初始化 <code v-pre>Application</code> 时添加此插件，但如果您使用自定义设置，也可以手动注册它。</p>
<hr>
<h3 id="_4-4-1-使用" tabindex="-1"><a class="header-anchor" href="#_4-4-1-使用"><span>4.4.1 使用</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Application <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    width<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span></span>
<span class="line">    height<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span></span>
<span class="line">    resizeTo<span class="token operator">:</span> window<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>默认的行为</li>
</ol>
<ul>
<li>当使用 <code v-pre>Application.init()</code> 而没有覆盖时，将自动安装 <code v-pre>ResizePlugin</code> ：</li>
<li>当设置 <code v-pre>resizeTo</code> 时，渲染器自动调整以匹配目标的尺寸（ <code v-pre>window</code> 或 <code v-pre>HTMLElement</code> ）。</li>
<li>使用 <code v-pre>requestAnimationFrame</code> 来限制大小调整，以防止在快速调整大小事件期间出现性能问题。</li>
<li>您可以使用 <code v-pre>app.resize()</code> 手动触发大小调整，也可以使用 <code v-pre>app.cancelResize()</code> 取消定时大小调整。</li>
</ul>
<ol start="2">
<li>手动注册</li>
</ol>
<p>如果您手动管理扩展：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> extensions<span class="token punctuation">,</span> ResizePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">extensions<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>ResizePlugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-2-自定义调整目标大小" tabindex="-1"><a class="header-anchor" href="#_4-4-2-自定义调整目标大小"><span>4.4.2 自定义调整目标大小</span></a></h3>
<p>您可以为调整大小指定一个自定义目标。如果你想调整画布的大小以适应特定的元素而不是整个窗口，这是很有用的。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    resizeTo<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'game-container'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-culler-插件" tabindex="-1"><a class="header-anchor" href="#_4-5-culler-插件"><span>4.5 Culler 插件</span></a></h2>
<p><code v-pre>Culler 插件</code> 会自动跳过场景中屏幕外对象的渲染。它通过使用渲染器的屏幕边界来确定容器（以及它们的子容器）是否与视图相交。如果没有，它们将被剔除，从而减少渲染和更新开销。</p>
<p>PixiJS默认不启用这个插件。必须使用 <code v-pre>extensions</code> 系统手动注册。</p>
<p><strong>什么时候应该使用它？​</strong></p>
<p>选择是理想的：</p>
<ul>
<li>有许多屏幕外元素的大场景</li>
<li>可滚动或摄像头驱动的环境（如瓷砖地图，世界观）</li>
<li>优化渲染性能而不重构场景图</li>
</ul>
<h3 id="_4-5-1-使用" tabindex="-1"><a class="header-anchor" href="#_4-5-1-使用"><span>4.5.1 使用</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    width<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span></span>
<span class="line">    height<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span></span>
<span class="line">    backgroundColor<span class="token operator">:</span> <span class="token number">0x222222</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">extensions<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>CullerPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> world <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">world<span class="token punctuation">.</span>cullable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">world<span class="token punctuation">.</span>cullableChildren <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">'path/to/image.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">sprite<span class="token punctuation">.</span>cullable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// Enable culling for this sprite</span></span>
<span class="line">world<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>sprite<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>world<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>启用Culler插件</li>
</ol>
<p>要在应用程序中启用自动筛选：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> extensions<span class="token punctuation">,</span> CullerPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">extensions<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>CullerPlugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将在你的 <code v-pre>Application</code> 实例上覆盖默认的 <code v-pre>render()</code> 方法，在渲染之前调用 <code v-pre>Culler.shared.cull()</code> ：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// Internally replaces:</span></span>
<span class="line">app<span class="token punctuation">.</span>renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> container<span class="token operator">:</span> app<span class="token punctuation">.</span>stage <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// With:</span></span>
<span class="line">Culler<span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">cull</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>stage<span class="token punctuation">,</span> app<span class="token punctuation">.</span>renderer<span class="token punctuation">.</span>screen<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span>renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> container<span class="token operator">:</span> app<span class="token punctuation">.</span>stage <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>配置筛选容器</li>
</ol>
<p>默认情况下，容器不会被剔除。要为容器启用筛选，请设置以下属性：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span>cullable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// Enables culling for this container</span></span>
<span class="line">container<span class="token punctuation">.</span>cullableChildren <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// Enables recursive culling for children</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>可选：定义自定义剔除区域</li>
</ol>
<p>你可以定义一个 <code v-pre>cullArea</code> 来覆盖默认的边界检查（它使用全局边界）：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span>cullArea <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这对于具有许多子节点的容器非常有用，因为这些子节点的边界框计算非常昂贵或不准确。</p>
<hr>
<h3 id="_4-5-2-手动剔除-culler" tabindex="-1"><a class="header-anchor" href="#_4-5-2-手动剔除-culler"><span>4.5.2 手动剔除 <code v-pre>Culler</code></span></a></h3>
<p>如果你不使用插件，但想在渲染前手动剔除：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Culler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> stage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Configure stage and children...</span></span>
<span class="line"></span>
<span class="line">Culler<span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">cull</span><span class="token punctuation">(</span>stage<span class="token punctuation">,</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">600</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span> container<span class="token operator">:</span> stage <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-6-综合代码" tabindex="-1"><a class="header-anchor" href="#_4-6-综合代码"><span>4.6 综合代码</span></a></h2>
<h3 id="_4-6-1-基础应用程序" tabindex="-1"><a class="header-anchor" href="#_4-6-1-基础应用程序"><span>4.6.1 基础应用程序</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/pixi8.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>                 <span class="token comment">// 宽度</span></span>
<span class="line">            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>                <span class="token comment">// 高度</span></span>
<span class="line">            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token number">0x1099bb</span><span class="token punctuation">,</span>  <span class="token comment">// 画布颜色</span></span>
<span class="line">            <span class="token literal-property property">backgroundAlpha</span><span class="token operator">:</span><span class="token number">0.3</span>         <span class="token comment">// 画布透明度</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行图</li>
</ul>
<p><img src="/animation/pixi/official/image/008.png" alt=""></p>
<h3 id="_4-6-2-使用ticker插件" tabindex="-1"><a class="header-anchor" href="#_4-6-2-使用ticker插件"><span>4.6.2 使用Ticker插件</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/pixi8.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>                 <span class="token comment">// 宽度</span></span>
<span class="line">            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>                <span class="token comment">// 高度</span></span>
<span class="line">            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token number">0x1099bb</span><span class="token punctuation">,</span>  <span class="token comment">// 画布颜色</span></span>
<span class="line">            <span class="token literal-property property">backgroundAlpha</span><span class="token operator">:</span><span class="token number">0.3</span>         <span class="token comment">// 画布透明度</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 添加精灵</span></span>
<span class="line">        <span class="token keyword">await</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">"../assest/bunny.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> bunny <span class="token operator">=</span>  <span class="token constant">PIXI</span><span class="token punctuation">.</span>Sprite<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">"../assest/bunny.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">        bunny<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        bunny<span class="token punctuation">.</span>x <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token number">0.5</span><span class="token punctuation">;</span></span>
<span class="line">        bunny<span class="token punctuation">.</span>y <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">*</span> <span class="token number">0.5</span><span class="token punctuation">;</span></span>
<span class="line">        app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>bunny<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bunny<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// ticker 插件</span></span>
<span class="line">        app<span class="token punctuation">.</span>ticker<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ticker</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            bunny<span class="token punctuation">.</span>rotation <span class="token operator">+=</span> <span class="token number">1</span> <span class="token operator">*</span> ticker<span class="token punctuation">.</span>deltaTime<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">let</span> state <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">        <span class="token comment">// 停止与恢复</span></span>
<span class="line">        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                app<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                state <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                app<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">                state <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/pixi/official/html/05.html" width="650" height="450"></iframe>
<h3 id="_4-6-3-使用resize插件" tabindex="-1"><a class="header-anchor" href="#_4-6-3-使用resize插件"><span>4.6.3 使用Resize插件</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/pixi8.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.box</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">gap</span><span class="token punctuation">:</span>5px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">margin-bottom</span><span class="token punctuation">:</span>30px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">.box>div</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>13<span class="token punctuation">,</span> 184<span class="token punctuation">,</span> 21<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">#box1</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span> </span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">#box2</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">background-color</span><span class="token punctuation">:</span>rebeccapurple<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span> </span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            点击</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            点击</span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  </span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">let</span> box1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box1'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">let</span> box2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box2'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>                 <span class="token comment">// 宽度</span></span>
<span class="line">            <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>                <span class="token comment">// 高度</span></span>
<span class="line">            <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token number">0x1099bb</span><span class="token punctuation">,</span>  <span class="token comment">// 画布颜色</span></span>
<span class="line">            <span class="token comment">// resizeTo: box1,              // 调整到组件一样大小</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        box1<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            app<span class="token punctuation">.</span>resizeTo <span class="token operator">=</span> box1</span>
<span class="line">            app<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        box2<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            app<span class="token punctuation">.</span>resizeTo <span class="token operator">=</span> box2</span>
<span class="line">            app<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/pixi/official/html/06.html" width="650" height="450"></iframe>
</div></template>


