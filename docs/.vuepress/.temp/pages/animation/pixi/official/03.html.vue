<template><div><h1 id="三、资产-assets" tabindex="-1"><a class="header-anchor" href="#三、资产-assets"><span>三、资产(Assets)</span></a></h1>
<h2 id="_3-1-认识" tabindex="-1"><a class="header-anchor" href="#_3-1-认识"><span>3.1 认识</span></a></h2>
<p>PixiJS有 <code v-pre>Assets</code> 单例，用于简化资源加载。它是现代的、基于承诺的、缓存感知的、高度可扩展的——使它成为所有PixiJS资源管理的一站式服务！</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Assets <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> texture <span class="token operator">=</span> <span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">'path/to/hero.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-1-关键功能" tabindex="-1"><a class="header-anchor" href="#_3-1-1-关键功能"><span>3.1.1 关键功能</span></a></h3>
<ul>
<li>通过Promises或async/await异步加载资产。</li>
<li>缓存可以防止冗余的网络请求。</li>
<li>内置支持常见的媒体格式（图像，视频，字体）。</li>
<li>自定义解析器和解析器以提高灵活性。</li>
<li>后台加载、基于清单的包和智能回退。</li>
</ul>
<h3 id="_3-1-2-支持的文件类型" tabindex="-1"><a class="header-anchor" href="#_3-1-2-支持的文件类型"><span>3.1.2 支持的文件类型</span></a></h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>扩展</th>
<th>加载器</th>
</tr>
</thead>
<tbody>
<tr>
<td>纹理</td>
<td><code v-pre>.png</code> 、 <code v-pre>.jpg</code> ,  <code v-pre>.gif</code> ,  <code v-pre>.webp</code> ,  <code v-pre>.avif</code> ,  <code v-pre>.svg</code></td>
<td><code v-pre>loadTextures</code> 、 <code v-pre>loadSvg</code></td>
</tr>
<tr>
<td>视频纹理</td>
<td><code v-pre>.mp4</code> 、 <code v-pre>.m4v</code> ,  <code v-pre>.webm</code> ,  <code v-pre>.ogg</code> ,  <code v-pre>.ogv</code> ,  <code v-pre>.h264</code> ,  <code v-pre>.avi</code> ,  <code v-pre>.mov</code></td>
<td><code v-pre>loadVideoTextures</code></td>
</tr>
<tr>
<td>雪碧表</td>
<td><code v-pre>.json</code></td>
<td><code v-pre>spritesheetAsset</code></td>
</tr>
<tr>
<td>点阵字体</td>
<td><code v-pre>.fnt</code>, <code v-pre>.xml</code>, <code v-pre>.txt</code></td>
<td><code v-pre>loadBitmapFont</code></td>
</tr>
<tr>
<td>网页字体</td>
<td><code v-pre>.ttf</code>, <code v-pre>.otf</code>, <code v-pre>.woff</code>, <code v-pre>.woff2</code></td>
<td><code v-pre>loadWebFont</code></td>
</tr>
<tr>
<td>JSON</td>
<td><code v-pre>.json</code></td>
<td><code v-pre>loadJson</code></td>
</tr>
<tr>
<td>文本</td>
<td><code v-pre>.txt</code></td>
<td><code v-pre>loadTxt</code></td>
</tr>
<tr>
<td>压缩纹理</td>
<td><code v-pre>.basis</code>, <code v-pre>.dds</code>, <code v-pre>.ktx</code>, <code v-pre>.ktx2</code></td>
<td><code v-pre>loadBasis</code>, <code v-pre>loadDDS</code>, <code v-pre>loadKTX</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p>需要更多吗?添加自定义解析器！</p>
</blockquote>
<hr>
<h2 id="_3-2-理论知识" tabindex="-1"><a class="header-anchor" href="#_3-2-理论知识"><span>3.2 理论知识</span></a></h2>
<h3 id="_3-2-1-加载资产" tabindex="-1"><a class="header-anchor" href="#_3-2-1-加载资产"><span>3.2.1 加载资产</span></a></h3>
<p>使用PixiJS加载资源就像调用 <code v-pre>Assets.load()</code> 并传入资源的URL一样简单。这个函数返回一个 <code v-pre>Promise</code> ，它解析到加载的资源——无论是纹理、字体、JSON还是其他支持的格式。</p>
<p>你可以提供一个绝对的URL（例如从CDN）：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> texture <span class="token operator">=</span> <span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">'https://example.com/assets/hero.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或项目中的相对路径：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> texture <span class="token operator">=</span> <span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">'assets/hero.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>PixiJS通常会根据其文件扩展名自动确定如何加载资源，并将缓存结果以避免冗余下载。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Application<span class="token punctuation">,</span> Assets<span class="token punctuation">,</span> Texture <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Application must be initialized before loading assets</span></span>
<span class="line"><span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> backgroundColor<span class="token operator">:</span> <span class="token number">0x1099bb</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load a single asset</span></span>
<span class="line"><span class="token keyword">const</span> bunnyTexture <span class="token operator">=</span> <span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">load</span><span class="token generic class-name"><span class="token operator">&lt;</span>Texture<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'path/to/bunny.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> sprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>bunnyTexture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Load multiple assets at once</span></span>
<span class="line"><span class="token keyword">const</span> textures <span class="token operator">=</span> <span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">load</span><span class="token generic class-name"><span class="token operator">&lt;</span>Texture<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'path/to/bunny.png'</span><span class="token punctuation">,</span> <span class="token string">'path/to/cat.png'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> bunnySprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>textures<span class="token punctuation">[</span><span class="token string">'path/to/bunny.png'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> catSprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>textures<span class="token punctuation">[</span><span class="token string">'path/to/cat.png'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-2-重复负荷是安全的" tabindex="-1"><a class="header-anchor" href="#_3-2-2-重复负荷是安全的"><span>3.2.2 重复负荷是安全的</span></a></h3>
<p><code v-pre>Assets</code> 通过URL或别名缓存。对相同资源的请求返回相同的纹理。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">'bunny.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">'bunny.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1 <span class="token operator">===</span> p2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-3-资产的别名" tabindex="-1"><a class="header-anchor" href="#_3-2-3-资产的别名"><span>3.2.3 资产的别名</span></a></h3>
<p>您还可以使用别名来引用资产，而不是它们的完整url。这提供了一种更方便的方式来管理资产，特别是当您有很长或复杂的url时。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">load</span><span class="token generic class-name"><span class="token operator">&lt;</span>Texture<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> alias<span class="token operator">:</span> <span class="token string">'bunny'</span><span class="token punctuation">,</span> src<span class="token operator">:</span> <span class="token string">'path/to/bunny.png'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> bunnyTexture <span class="token operator">=</span> Assets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'bunny'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>所有Asset api都支持别名，包括 <code v-pre>Assets.load()</code> 、 <code v-pre>Assets.get()</code> 、 <code v-pre>Assets.unload()</code> 。</p>
<p>还有更复杂的定义资产的方法，您可以在Resolver部分中了解它们。</p>
<h3 id="_3-2-4-检索加载的资产" tabindex="-1"><a class="header-anchor" href="#_3-2-4-检索加载的资产"><span>3.2.4 检索加载的资产</span></a></h3>
<p>你也可以使用 <code v-pre>Assets.get()</code> 来检索已经加载的资源：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">load</span><span class="token generic class-name"><span class="token operator">&lt;</span>Texture<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'path/to/bunny.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> bunnyTexture <span class="token operator">=</span> Assets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'path/to/bunny.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> sprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>bunnyTexture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当您在代码的其他地方预加载了资产，并希望稍后访问它们，而不必从初始加载传递round引用时，这非常有用。</p>
<h3 id="_3-2-5-卸载资产" tabindex="-1"><a class="header-anchor" href="#_3-2-5-卸载资产"><span>3.2.5 卸载资产</span></a></h3>
<p>要卸载资产，可以使用 <code v-pre>Assets.unload()</code> 。这将从缓存中删除资源并释放内存。请注意，如果您试图在卸载资产后访问它，您将需要再次加载它。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">load</span><span class="token generic class-name"><span class="token operator">&lt;</span>Texture<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'path/to/bunny.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> bunnyTexture <span class="token operator">=</span> Assets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'path/to/bunny.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> sprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>bunnyTexture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// Unload the asset</span></span>
<span class="line"><span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token function">unload</span><span class="token punctuation">(</span><span class="token string">'path/to/bunny.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-6-自定义资产加载" tabindex="-1"><a class="header-anchor" href="#_3-2-6-自定义资产加载"><span>3.2.6 自定义资产加载</span></a></h3>
<p>您可以通过向 <code v-pre>Assets.init()</code> 方法提供选项来定制资产加载过程。这允许您设置如何加载资源的首选项，为资源指定基本路径，等等。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Assets <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>选项</th>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>basePath</code></td>
<td><code v-pre>string</code></td>
<td>前缀应用于所有相关资源路径（例如cdn）。</td>
</tr>
<tr>
<td><code v-pre>defaultSearchParams</code></td>
<td><code v-pre>string</code></td>
<td>一个默认的URL参数字符串，附加到所有加载的资源</td>
</tr>
<tr>
<td><code v-pre>skipDetections</code></td>
<td><code v-pre>boolean</code></td>
<td>跳过资源的环境检测解析器。</td>
</tr>
<tr>
<td><code v-pre>manifest</code></td>
<td><code v-pre>Manifest</code></td>
<td>命名的资产包及其内容的描述符。</td>
</tr>
<tr>
<td><code v-pre>preferences</code></td>
<td><code v-pre>AssetPreferences</code></td>
<td>指定每个加载器的首选项</td>
</tr>
<tr>
<td><code v-pre>bundleIdentifier</code></td>
<td><code v-pre>BundleIdentifierOptions</code></td>
<td>高级-覆盖如何生成bundlesid。</td>
</tr>
</tbody>
</table>
<h2 id="_3-4-简单使用" tabindex="-1"><a class="header-anchor" href="#_3-4-简单使用"><span>3.4 简单使用</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/pixi8.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">      <span class="token comment">//创建新的应用程序</span></span>
<span class="line">      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// 初始化应用程序</span></span>
<span class="line">      <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">"#1099bb"</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// 将应用程序画布附加到文档正文</span></span>
<span class="line">      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// 立即开始加载并创建promise</span></span>
<span class="line">      <span class="token keyword">const</span> texturePromise <span class="token operator">=</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">"../assest/bunny.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">//当promise解决了，我们就有了纹理！</span></span>
<span class="line">      texturePromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolvedTexture</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 从已解析的加载纹理创建新的Sprite</span></span>
<span class="line">        <span class="token keyword">const</span> bunny <span class="token operator">=</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Sprite<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>resolvedTexture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 使精灵的锚点居中</span></span>
<span class="line">        bunny<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 移动精灵到屏幕中央</span></span>
<span class="line">        bunny<span class="token punctuation">.</span>x <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">        bunny<span class="token punctuation">.</span>y <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>bunny<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/animation/pixi/official/image/006.png" alt=""></p>
<h2 id="_3-5-加载多个资产" tabindex="-1"><a class="header-anchor" href="#_3-5-加载多个资产"><span>3.5 加载多个资产</span></a></h2>
<h3 id="_3-5-1-方式一-add-load" tabindex="-1"><a class="header-anchor" href="#_3-5-1-方式一-add-load"><span>3.5.1 方式一 <code v-pre>add/load</code></span></a></h3>
<p>我们可以将资源添加到该高速缓存中，然后使用<code v-pre>Assets.add(...)</code>同时加载它们，然后使用您希望加载的所有键调用<code v-pre>Assets.load(...)</code>。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/pixi8.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">      <span class="token comment">//创建新的应用程序</span></span>
<span class="line">      <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// 初始化应用程序</span></span>
<span class="line">      <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">        <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">"#1099bb"</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">600</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// 将应用程序画布附加到文档正文</span></span>
<span class="line">      document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// 立即开始加载并创建promise</span></span>
<span class="line">      <span class="token keyword">const</span> texturePromise <span class="token operator">=</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">"../assest/bunny.png"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">//当promise解决了，我们就有了纹理！</span></span>
<span class="line">      texturePromise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolvedTexture</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 从已解析的加载纹理创建新的Sprite</span></span>
<span class="line">        <span class="token keyword">const</span> bunny <span class="token operator">=</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Sprite<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>resolvedTexture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 使精灵的锚点居中</span></span>
<span class="line">        bunny<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 移动精灵到屏幕中央</span></span>
<span class="line">        bunny<span class="token punctuation">.</span>x <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">        bunny<span class="token punctuation">.</span>y <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>bunny<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果图</li>
</ul>
<p><img src="/animation/pixi/official/image/007.png" alt=""></p>
<h3 id="_3-5-2-方式二-addbundle-loadbundle" tabindex="-1"><a class="header-anchor" href="#_3-5-2-方式二-addbundle-loadbundle"><span>3.5.2 方式二 <code v-pre>addBundle/loadBundle</code></span></a></h3>
<p>如果你想充分利用@pixi/Assets，你应该使用bundle。捆绑包只是将资产分组在一起的一种方式，可以通过调用<code v-pre>Assets.addBundle(...)/Assets.loadBundle(...)</code>手动添加。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token comment">//创建新的应用程序</span></span>
<span class="line">  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 初始化应用程序</span></span>
<span class="line">  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">"#1099bb"</span><span class="token punctuation">,</span> <span class="token literal-property property">resizeTo</span><span class="token operator">:</span> window <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 将应用程序加载到应用文档中</span></span>
<span class="line">  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 添加需加载的资源</span></span>
<span class="line">  <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">addBundle</span><span class="token punctuation">(</span><span class="token string">"animals"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">flowerTop</span><span class="token operator">:</span> <span class="token string">"../images/flowerTop.png"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">eggHead</span><span class="token operator">:</span> <span class="token string">"../images/eggHead.png"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//等待加载</span></span>
<span class="line">  <span class="token keyword">const</span> textures <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">loadBundle</span><span class="token punctuation">(</span><span class="token string">"animals"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">process</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"加载完成"</span><span class="token punctuation">,</span> process<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 从已加载的资源中创建精灵</span></span>
<span class="line">  <span class="token comment">// const flower = PIXI.Sprite.from(textures.flowerTop);</span></span>
<span class="line">  <span class="token keyword">const</span> flower <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Sprite</span><span class="token punctuation">(</span>textures<span class="token punctuation">.</span>flowerTop<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  flower<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  flower<span class="token punctuation">.</span>x <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token number">0.25</span><span class="token punctuation">;</span></span>
<span class="line">  flower<span class="token punctuation">.</span>y <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>flower<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 另一个精灵</span></span>
<span class="line">  <span class="token comment">// const egg = PIXI.Sprite.from(textures.eggHead);</span></span>
<span class="line">  <span class="token keyword">const</span> egg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Sprite</span><span class="token punctuation">(</span>textures<span class="token punctuation">.</span>eggHead<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  egg<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  egg<span class="token punctuation">.</span>x <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token number">0.75</span><span class="token punctuation">;</span></span>
<span class="line">  egg<span class="token punctuation">.</span>y <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>egg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果图</li>
</ul>
<p><img src="/animation/pixi/official/image/007.png" alt=""></p>
<h3 id="_3-5-3-方法三-init-manifest" tabindex="-1"><a class="header-anchor" href="#_3-5-3-方法三-init-manifest"><span>3.5.3 方法三 <code v-pre>init({manifest})</code></span></a></h3>
<p>处理bundle的最好方法是使用manifest并使用该manifest调用<code v-pre>Assets.init({manifest})</code>（或者更好的是，指向它的URL）。将我们的资产拆分为与应用程序的屏幕或阶段相对应的捆绑包，将在用户使用应用程序时在后台加载，而不是将它们锁定在单个单片加载屏幕中。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token comment">//创建新的应用程序</span></span>
<span class="line">  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 初始化应用程序</span></span>
<span class="line">  <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">"#1099bb"</span><span class="token punctuation">,</span> <span class="token literal-property property">resizeTo</span><span class="token operator">:</span> window <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 将应用程序加载到应用文档中</span></span>
<span class="line">  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//使用资源初始化</span></span>
<span class="line">  <span class="token keyword">const</span> manifest <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">bundles</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"load-screen"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">"eggHead"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"../images/eggHead.png"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">"flowerTop"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"../images/flowerTop.png"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"game-screen"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">"sample1"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"../images/sample1.png"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">"sample2"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"../images/sample2.png"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> manifest <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">//使用loadBundle 加载</span></span>
<span class="line">  <span class="token keyword">const</span> textures <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">loadBundle</span><span class="token punctuation">(</span><span class="token string">"load-screen"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 从已加载的资源中创建精灵</span></span>
<span class="line">  <span class="token keyword">const</span> flower <span class="token operator">=</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Sprite<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>textures<span class="token punctuation">.</span>flowerTop<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  flower<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  flower<span class="token punctuation">.</span>x <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token number">0.25</span><span class="token punctuation">;</span></span>
<span class="line">  flower<span class="token punctuation">.</span>y <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>flower<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 另一个精灵</span></span>
<span class="line">  <span class="token keyword">const</span> egg <span class="token operator">=</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Sprite<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>textures<span class="token punctuation">.</span>eggHead<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  egg<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  egg<span class="token punctuation">.</span>x <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token number">0.75</span><span class="token punctuation">;</span></span>
<span class="line">  egg<span class="token punctuation">.</span>y <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">  app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>egg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果图</li>
</ul>
<p><img src="/animation/pixi/official/image/007.png" alt=""></p>
<h2 id="_3-6-后台加载" tabindex="-1"><a class="header-anchor" href="#_3-6-后台加载"><span>3.6 后台加载</span></a></h2>
<p>方法Assets.backgroundLoad(...)和Assets.backgroundLoadBundle(...)，它们将被动地开始在后台加载这些资产。因此，当你最终加载它们时，你会得到一个立即解析为已加载资产的promise。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">//创建新的应用程序</span></span>
<span class="line">    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PIXI<span class="token punctuation">.</span>Application</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 初始化应用程序</span></span>
<span class="line">    <span class="token keyword">await</span> app<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">"#1099bb"</span><span class="token punctuation">,</span> <span class="token literal-property property">resizeTo</span><span class="token operator">:</span> window <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 将应用程序的画布添加到页面上</span></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Manifest 示例</span></span>
<span class="line">        <span class="token keyword">const</span> manifestExample <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">bundles</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"load-screen"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">"flowerTop"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"../images/flowerTop.png"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"game-screen"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">assets</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">"eggHead"</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"../images/eggHead.png"</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">await</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">manifest</span><span class="token operator">:</span> manifestExample <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 捆绑包也可以在后台加载！</span></span>
<span class="line">        <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">backgroundLoadBundle</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"load-screen"</span><span class="token punctuation">,</span> <span class="token string">"game-screen"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//使用loadBundle 加载</span></span>
<span class="line">    <span class="token keyword">const</span> textures <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">loadBundle</span><span class="token punctuation">(</span><span class="token string">"load-screen"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> textures2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Assets<span class="token punctuation">.</span><span class="token function">loadBundle</span><span class="token punctuation">(</span><span class="token string">"game-screen"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 从已加载的资源中创建精灵</span></span>
<span class="line">    <span class="token keyword">const</span> flower <span class="token operator">=</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Sprite<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>textures<span class="token punctuation">.</span>flowerTop<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    flower<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    flower<span class="token punctuation">.</span>x <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token number">0.25</span><span class="token punctuation">;</span></span>
<span class="line">    flower<span class="token punctuation">.</span>y <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>flower<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 另一个精灵</span></span>
<span class="line">    <span class="token keyword">const</span> egg <span class="token operator">=</span> <span class="token constant">PIXI</span><span class="token punctuation">.</span>Sprite<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>textures2<span class="token punctuation">.</span>eggHead<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    egg<span class="token punctuation">.</span>anchor<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    egg<span class="token punctuation">.</span>x <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token number">0.75</span><span class="token punctuation">;</span></span>
<span class="line">    egg<span class="token punctuation">.</span>y <span class="token operator">=</span> app<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>egg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<p><img src="/animation/pixi/official/image/007.png" alt=""></p>
</div></template>


