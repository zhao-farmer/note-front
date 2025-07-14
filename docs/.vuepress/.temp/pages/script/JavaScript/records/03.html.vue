<template><div><h1 id="_03-js中图片" tabindex="-1"><a class="header-anchor" href="#_03-js中图片"><span>03 JS中图片</span></a></h1>
<h2 id="_1-image-对象" tabindex="-1"><a class="header-anchor" href="#_1-image-对象"><span>1. image 对象</span></a></h2>
<h3 id="_1-1-创建-image-对象" tabindex="-1"><a class="header-anchor" href="#_1-1-创建-image-对象"><span>1.1 创建 Image 对象</span></a></h3>
<p>使用 <code v-pre>Image()</code> 构造函数可以创建一个新的图像对象。它可以接受两个可选参数：<code v-pre>width</code> 和 <code v-pre>height</code>，分别指定图像的宽度和高度（以像素为单位）。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 创建一个空的图像对象</span></span>
<span class="line"><span class="token keyword">const</span> img1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建一个指定大小的图像对象</span></span>
<span class="line"><span class="token keyword">const</span> img2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-常用属性" tabindex="-1"><a class="header-anchor" href="#_1-2-常用属性"><span>1.2 常用属性</span></a></h3>
<p><code v-pre>Image()</code> 对象具有以下常用属性：</p>
<ul>
<li><strong><code v-pre>src</code></strong>: 图像的 URL。这是最重要的属性，用于指定要加载的图像文件的路径。</li>
<li><strong><code v-pre>alt</code></strong>: 图像的替代文本。当图像无法显示时（例如，由于网络错误或图像文件不存在），将显示此文本。</li>
<li><strong><code v-pre>width</code></strong>: 图像的宽度（以像素为单位）。</li>
<li><strong><code v-pre>height</code></strong>: 图像的高度（以像素为单位）。</li>
<li><strong><code v-pre>naturalWidth</code></strong>: 图像的原始宽度（以像素为单位）。</li>
<li><strong><code v-pre>naturalHeight</code></strong>: 图像的原始高度（以像素为单位）。</li>
<li><strong><code v-pre>complete</code></strong>: 一个布尔值，指示图像是否已完全加载。</li>
<li><strong><code v-pre>crossOrigin</code></strong>: 设置图像的跨域属性。允许的值为 <code v-pre>&quot;anonymous&quot;</code> 或 <code v-pre>&quot;use-credentials&quot;</code>。用于处理跨域图像的加载和使用。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'example.jpg'</span><span class="token punctuation">;</span></span>
<span class="line">img<span class="token punctuation">.</span>alt <span class="token operator">=</span> <span class="token string">'示例图片'</span><span class="token punctuation">;</span></span>
<span class="line">img<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span></span>
<span class="line">img<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>img<span class="token punctuation">.</span>naturalWidth<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出图像的原始宽度</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>img<span class="token punctuation">.</span>complete<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出图像是否已加载完成</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-常用方法" tabindex="-1"><a class="header-anchor" href="#_1-3-常用方法"><span>1.3 常用方法</span></a></h3>
<p><code v-pre>Image()</code> 对象没有自己特有的方法，但它继承了 <code v-pre>HTMLElement</code> 的所有方法。以下是一些常用的 <code v-pre>HTMLElement</code> 方法，也可用于 <code v-pre>Image()</code> 对象：</p>
<ul>
<li><strong><code v-pre>addEventListener()</code></strong>: 添加事件监听器。</li>
<li><strong><code v-pre>removeEventListener()</code></strong>: 移除事件监听器。</li>
<li><strong><code v-pre>onload</code></strong>: 图像加载完成时触发的事件。</li>
<li><strong><code v-pre>onerror</code></strong>: 图像加载出错时触发的事件。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'example.jpg'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'图像加载完成'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 在此处可以安全地操作图像，例如将其绘制到 canvas 上</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'图像加载失败'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用 addEventListener 添加事件监听器</span></span>
<span class="line">img<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'load'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'图像加载完成（使用 addEventListener）'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-应用示例-预加载图像" tabindex="-1"><a class="header-anchor" href="#_1-4-应用示例-预加载图像"><span>1.4 应用示例：预加载图像</span></a></h3>
<p><code v-pre>Image()</code> 对象常用于预加载图像，以便在需要时可以立即显示，而无需等待网络请求。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">preloadImages</span><span class="token punctuation">(</span><span class="token parameter">urls</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> images <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> url <span class="token keyword">of</span> urls<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token punctuation">;</span></span>
<span class="line">    images<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> images<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> imageUrls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'image1.jpg'</span><span class="token punctuation">,</span> <span class="token string">'image2.png'</span><span class="token punctuation">,</span> <span class="token string">'image3.gif'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> preloadedImages <span class="token operator">=</span> <span class="token function">preloadImages</span><span class="token punctuation">(</span>imageUrls<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 当需要显示图像时，可以直接使用 preloadedImages 数组中的图像对象</span></span>
<span class="line"><span class="token comment">// 例如：</span></span>
<span class="line"><span class="token comment">// document.body.appendChild(preloadedImages[0]);</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-注意事项" tabindex="-1"><a class="header-anchor" href="#_1-5-注意事项"><span>1.5 注意事项</span></a></h3>
<ul>
<li><code v-pre>Image()</code> 对象创建的是一个 HTMLImageElement，它是一个 DOM 节点，可以像其他 HTML 元素一样添加到文档中。</li>
<li>设置 <code v-pre>src</code> 属性会立即开始加载图像。</li>
<li><code v-pre>naturalWidth</code> 和 <code v-pre>naturalHeight</code> 属性只有在图像加载完成后才可用。</li>
<li>在处理跨域图像时，需要正确设置 <code v-pre>crossOrigin</code> 属性，并确保服务器端配置了正确的 CORS 头部。</li>
</ul>
<h3 id="_1-6-同步加载图片" tabindex="-1"><a class="header-anchor" href="#_1-6-同步加载图片"><span>1.6 同步加载图片</span></a></h3>
<ol>
<li>Promise封装方案‌</li>
</ol>
<p>将Image对象的加载过程封装成Promise</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">loadImage</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>‌async/await使用示例‌</li>
</ol>
<p>通过async函数配合await调用上述封装方法</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">processImages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> img <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadImage</span><span class="token punctuation">(</span><span class="token string">'example.jpg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'图片尺寸:'</span><span class="token punctuation">,</span> img<span class="token punctuation">.</span>width<span class="token punctuation">,</span> img<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'加载失败:'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-document-images-操作" tabindex="-1"><a class="header-anchor" href="#_2-document-images-操作"><span>2. document.images 操作</span></a></h2>
<h3 id="_2-1-图像对象介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-图像对象介绍"><span>2.1 图像对象介绍</span></a></h3>
<p>文档（Document）对象的images属性返回的是一个数组，数组中的每一个元素都是一个Images对象，该对象就是图像对象。</p>
<p>在加载文档的时候，JS会自动创建一个images[]数组，数组中的元素个数是由<img>标签的个数决定的。</p>
<p>在操作图像的时候，首先应该确定要引用的图片，以下是三种JS引用图像的方式：</p>
<ul>
<li>通过document.images[]按编号访问</li>
<li>通过dockumet.images[imageName]按名称访问</li>
<li>在支持DOM的浏览器中，使用document.getElementById(&quot;imgID&quot;)来定位要访问的图片</li>
</ul>
<p>例如，在页面中有一张图片：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flower<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mypic<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flower.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>对应以上三种引用方式，分别是：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token string">"flower"</span><span class="token punctuation">]</span></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"mypic"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-图像对象属性" tabindex="-1"><a class="header-anchor" href="#_2-2-图像对象属性"><span>2.2 图像对象属性</span></a></h3>
<p>图像对象的属性主要描述图片的宽度、高度和边框等信息，如下表所示：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border</td>
<td>返回或设置图片边框宽度，以像素为单位</td>
</tr>
<tr>
<td>height</td>
<td>返回或设置图片高度，以像素为单位</td>
</tr>
<tr>
<td>hspace</td>
<td>返回或设置图片左边和右边的文字与图片之间的间距，以像素为单位</td>
</tr>
<tr>
<td>lowsrc</td>
<td>返回或设置图片的低分辨率图片的URL</td>
</tr>
<tr>
<td>name</td>
<td>返回或设置图片名称</td>
</tr>
<tr>
<td>src</td>
<td>返回或设置图片URL</td>
</tr>
<tr>
<td>vspace</td>
<td>返回或设置图片上面和下面的文字与图片之间的间距，以像素为单位</td>
</tr>
<tr>
<td>width</td>
<td>返回或设置图片宽度</td>
</tr>
<tr>
<td>alt</td>
<td>返回或设置图片经过图片时显示的文字</td>
</tr>
<tr>
<td>complete</td>
<td>判断图像是不是完全被加载，如果被完全加载，返回true</td>
</tr>
</tbody>
</table>
<p>例子：输出图片的基本信息</p>
<p>对一个<code v-pre>&lt;img&gt;</code>标签，弄一张照片，然后输出照片的基本信息（名称、高度、宽度、等等）</p>
<p>代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wukong<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"图片名称："</span><span class="token operator">+</span>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">"&lt;br>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"图片高度："</span><span class="token operator">+</span>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>height<span class="token operator">+</span><span class="token string">"&lt;br>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"图片宽度："</span><span class="token operator">+</span>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>width<span class="token operator">+</span><span class="token string">"&lt;br>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"图片边框："</span><span class="token operator">+</span>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>border<span class="token operator">+</span><span class="token string">"&lt;br>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"图片URL:"</span><span class="token operator">+</span>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/script/JavaScript/records/001.png" alt=""></p>
<h3 id="_2-3-图像对象的事件" tabindex="-1"><a class="header-anchor" href="#_2-3-图像对象的事件"><span>2.3 图像对象的事件</span></a></h3>
<p>Images对象没有可以使用的方法，但是他支持事件，下表列出了Images对象常用事件：</p>
<table>
<thead>
<tr>
<th>事件</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>abort</td>
<td>当用户放弃加载图片时触发该事件</td>
</tr>
<tr>
<td>load</td>
<td>成功加载图片时触发该事件</td>
</tr>
<tr>
<td>error</td>
<td>在加载图片的过程中产生错误时触发该事件</td>
</tr>
<tr>
<td>click</td>
<td>在图片上单击鼠标时可触发该事件</td>
</tr>
<tr>
<td>dbclick</td>
<td>在图片上双击鼠标时可触发该事件</td>
</tr>
<tr>
<td>mouseover</td>
<td>当鼠标移动到图片上发生的事件</td>
</tr>
<tr>
<td>mouseout</td>
<td>当鼠标移出图片时发生的事件</td>
</tr>
<tr>
<td>mousedown</td>
<td>在图片上按下鼠标时发生的事件</td>
</tr>
<tr>
<td>mouseup</td>
<td>在图片上释放鼠标时触发的事件</td>
</tr>
<tr>
<td>mousemove</td>
<td>在图片上移动鼠标时触发该事件</td>
</tr>
</tbody>
</table>
<p>例子：当鼠标指向图片时实现图片置换</p>
<p>代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> </span>
<span class="line">    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.jpg <span class="token punctuation">"</span></span> </span>
<span class="line">    <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> </span>
<span class="line">    <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> </span>
<span class="line">    <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wu1<span class="token punctuation">"</span></span> </span>
<span class="line">    <span class="token special-attr"><span class="token attr-name">onmouseover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">changImage</span><span class="token punctuation">(</span><span class="token string">'wu1'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> </span>
<span class="line">    <span class="token special-attr"><span class="token attr-name">onmouseout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">resetImage</span><span class="token punctuation">(</span><span class="token string">'wu1'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span></span>
<span class="line"><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">changImage</span><span class="token punctuation">(</span><span class="token parameter">imgName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        document<span class="token punctuation">.</span>images<span class="token punctuation">[</span>imgName<span class="token punctuation">]</span><span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">"2.jpg"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">resetImage</span><span class="token punctuation">(</span><span class="token parameter">imgName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        document<span class="token punctuation">.</span>images<span class="token punctuation">[</span>imgName<span class="token punctuation">]</span><span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">"1.jpg"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/script/JavaScript/records/002.gif" alt=""></p>
<h3 id="_2-4-图像对象的应用" tabindex="-1"><a class="header-anchor" href="#_2-4-图像对象的应用"><span>2.4 图像对象的应用</span></a></h3>
<ol>
<li>图片的随机显示</li>
</ol>
<p>为了可以实现图片随机显示的功能，可以使用Math对象的random()函数和floor()函数，例如下面的例子：</p>
<p>例子：实现网站背景的随机变化</p>
<p>十张图片选了我最喜欢的柯基，通过数学随机数函数，获取图片的src，然后展示在网页上，并且通过：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token string">"函数名()"</span><span class="token punctuation">,</span> 时间ms<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>来设置函数执行的时间，在下面的gif图中，我调了一下，可以明显的看得出，图片变得很快，代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">bianhua</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>num<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>num1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">bianhua</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> src<span class="token operator">=</span><span class="token string">"img/"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        src<span class="token operator">+=</span>i<span class="token punctuation">;</span></span>
<span class="line">        src<span class="token operator">+=</span><span class="token string">".jpg"</span><span class="token punctuation">;</span></span>
<span class="line">        document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token string">"num"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>src <span class="token operator">=</span> src<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token string">"bianhua()"</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>图片置顶</li>
</ol>
<p>在浏览网站的时候，有一种图片无论我们怎么点击、继续朝下滑，这类图片的位置都不会改变。这就是图片的置顶。</p>
<p>可以通过文档Document对象下的documentElement对象中的scrollTop和scrollLeft属性来获取当前页面中横向和纵向滚动条所卷去的部分的值，然后使用该值定位放入层中的图片的位置，实现图片置顶的功能。</p>
</div></template>


