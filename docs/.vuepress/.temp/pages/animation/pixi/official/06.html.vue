<template><div><h1 id="六、纹理" tabindex="-1"><a class="header-anchor" href="#六、纹理"><span>六、纹理</span></a></h1>
<p>纹理是PixiJS渲染管道中最重要的组件之一。它们定义了精灵、网格和其他可渲染对象所使用的视觉内容。本指南涵盖了如何加载、创建和使用纹理，以及PixiJS支持的各种类型的数据源。</p>
<h2 id="_6-1-结构生命周期" tabindex="-1"><a class="header-anchor" href="#_6-1-结构生命周期"><span>6.1 结构生命周期</span></a></h2>
<p>纹理系统是围绕两个主要类构建的：</p>
<ul>
<li><code v-pre>TextureSource</code> ：表示像素源，如图像、画布或视频。</li>
<li><code v-pre>Texture</code> ：将视图定义为 <code v-pre>TextureSource</code> ，包括子矩形，修剪和转换。</li>
</ul>
<h3 id="_6-1-1-生命周期流程" tabindex="-1"><a class="header-anchor" href="#_6-1-1-生命周期流程"><span>6.1.1 生命周期流程</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">Source File/Image -> TextureSource -> Texture -> Sprite (or other display object)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_6-1-2-加载纹理" tabindex="-1"><a class="header-anchor" href="#_6-1-2-加载纹理"><span>6.1.2 加载纹理</span></a></h3>
<p>纹理可以使用 <code v-pre>Assets</code> 系统异步加载：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> texture <span class="token operator">=</span> <span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">'myTexture.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sprite <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sprite</span><span class="token punctuation">(</span>texture<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-1-3-准备纹理" tabindex="-1"><a class="header-anchor" href="#_6-1-3-准备纹理"><span>6.1.3 准备纹理</span></a></h3>
<p>即使你已经加载了你的纹理，图像仍然需要被推到GPU和解码。对于大量源图像这样做可能很慢，并且在项目首次加载时导致延迟峰值。为了解决这个问题，你可以使用Prepare插件，它允许你在显示项目之前的最后一步预加载纹理。</p>
<h2 id="_6-2-texture-对比-texturesource" tabindex="-1"><a class="header-anchor" href="#_6-2-texture-对比-texturesource"><span>6.2 Texture 对比 TextureSource</span></a></h2>
<p><code v-pre>TextureSource</code> 处理原始像素数据和GPU上传。A  <code v-pre>Texture</code> 是该源的轻量级视图，具有修剪、框架矩形、UV映射等元数据。多个 <code v-pre>Texture</code> 实例可以共享一个 <code v-pre>TextureSource</code> ，例如在精灵表中。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> sheet <span class="token operator">=</span> <span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">'spritesheet.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> heroTexture <span class="token operator">=</span> sheet<span class="token punctuation">.</span>textures<span class="token punctuation">[</span><span class="token string">'hero.png'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-3-创建纹理" tabindex="-1"><a class="header-anchor" href="#_6-3-创建纹理"><span>6.3 创建纹理</span></a></h2>
<p>你可以使用构造函数手动创建纹理：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> mySource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextureSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span> resource<span class="token operator">:</span> myImage <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> texture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Texture</span><span class="token punctuation">(</span><span class="token punctuation">{</span> source<span class="token operator">:</span> mySource <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您计划在运行时修改 <code v-pre>frame</code> 、 <code v-pre>trim</code> 或 <code v-pre>source</code> ，则在 <code v-pre>Texture</code> 选项中设置 <code v-pre>dynamic: true</code> 。</p>
<h2 id="_6-3-破坏纹理" tabindex="-1"><a class="header-anchor" href="#_6-3-破坏纹理"><span>6.3 破坏纹理</span></a></h2>
<p>一旦你完成了纹理，你可能希望释放它使用的内存（包括webgl管理的缓冲区和基于浏览器的）。要做到这一点，你应该调用 <code v-pre>Assets.unload('texture.png')</code> ，或者 <code v-pre>texture.destroy()</code> ，如果你已经在资产之外创建了纹理。</p>
<p>对于像过场动画这样的短暂图像来说，这是一个特别好的主意，因为过场动画很大，而且只会使用一次。如果通过 <code v-pre>Assets</code> 加载的纹理被破坏，那么资产类将自动为你从缓存中删除它。</p>
<h2 id="_6-4-从gpu卸载纹理" tabindex="-1"><a class="header-anchor" href="#_6-4-从gpu卸载纹理"><span>6.4 从GPU卸载纹理</span></a></h2>
<p>如果你想从GPU中卸载纹理，但将其保存在内存中，你可以调用 <code v-pre>texture.source.unload()</code> 。这将从GPU中移除纹理，但将源代码保留在内存中。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// 加载纹理</span></span>
<span class="line"><span class="token keyword">const</span> texture <span class="token operator">=</span> <span class="token keyword">await</span> Assets<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token string">'myTexture.png'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用纹理</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 卸载纹理</span></span>
<span class="line">texture<span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">unload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-5-结构类型" tabindex="-1"><a class="header-anchor" href="#_6-5-结构类型"><span>6.5 结构类型</span></a></h2>
<p>PixiJS支持多种 <code v-pre>TextureSource</code> 类型，具体取决于输入数据的类型：</p>
<table>
<thead>
<tr>
<th>结构类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>ImageSource</strong></td>
<td>HTMLImageElement, ImageBitmap, SVG's, VideoFrame, etc.</td>
</tr>
<tr>
<td><strong>CanvasSource</strong></td>
<td>HTMLCanvasElement或OffscreenCanvas</td>
</tr>
<tr>
<td><strong>VideoSource</strong></td>
<td>HTMLVideoElement与可选的自动播放和更新FPS</td>
</tr>
<tr>
<td><strong>BufferImageSource</strong></td>
<td>typearray或ArrayBuffer具有明确的宽度、高度和格式</td>
</tr>
<tr>
<td><strong>CompressedSource</strong></td>
<td>压缩的mipmap数组（<code v-pre>Uint8Array[]</code>）</td>
</tr>
</tbody>
</table>
<h2 id="_6-6-常用纹理属性" tabindex="-1"><a class="header-anchor" href="#_6-6-常用纹理属性"><span>6.6 常用纹理属性</span></a></h2>
<p>下面是 <code v-pre>Texture</code> 类的一些重要属性：</p>
<ul>
<li><code v-pre>frame</code> ：定义源内可见部分的矩形。</li>
<li><code v-pre>orig</code> ：原始未修剪尺寸。</li>
<li><code v-pre>trim</code> ：定义修剪区域以排除透明空间。</li>
<li><code v-pre>uvs</code> ：由 <code v-pre>frame</code> 和 <code v-pre>rotate</code> 生成的UV坐标。</li>
<li><code v-pre>rotate</code> ：图集兼容性的GroupD8旋转值。</li>
<li><code v-pre>defaultAnchor</code> ：在精灵中使用时的默认锚。</li>
<li><code v-pre>defaultBorders</code> ：用于9片缩放。</li>
<li><code v-pre>source</code> :  <code v-pre>TextureSource</code> 实例。</li>
</ul>
<h2 id="_6-7-常见的texturesource属性" tabindex="-1"><a class="header-anchor" href="#_6-7-常见的texturesource属性"><span>6.7 常见的TextureSource属性</span></a></h2>
<p>下面是 <code v-pre>TextureSource</code> 类的一些重要属性：</p>
<ul>
<li><code v-pre>resolution</code> ：影响渲染大小相对于实际像素大小。</li>
<li><code v-pre>format</code> :纹理格式(例如, <code v-pre>rgba8unorm</code> ,  <code v-pre>bgra8unorm</code> ,等等)。</li>
<li><code v-pre>alphaMode</code> ：控制alpha在上传时的解释方式。</li>
<li><code v-pre>wrapMode</code>  /  <code v-pre>scaleMode</code> ：控制纹理在边界外或缩放时的采样方式。</li>
<li><code v-pre>autoGenerateMipmaps</code> ：是否在上传时生成mipmaps。</li>
</ul>
<p>当创建 <code v-pre>TextureSource</code> 时，可以设置这些属性：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">texture<span class="token punctuation">.</span>source<span class="token punctuation">.</span>scaleMode <span class="token operator">=</span> <span class="token string">'linear'</span><span class="token punctuation">;</span></span>
<span class="line">texture<span class="token punctuation">.</span>source<span class="token punctuation">.</span>wrapMode <span class="token operator">=</span> <span class="token string">'repeat'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


