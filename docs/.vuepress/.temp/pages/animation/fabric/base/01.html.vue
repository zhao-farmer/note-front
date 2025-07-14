<template><div><h1 id="一、初识fabric-js" tabindex="-1"><a class="header-anchor" href="#一、初识fabric-js"><span>一、初识Fabric.js</span></a></h1>
<p>Fabric.js 是一个功能强大且操作简单的 Javascript HTML5 canvas 工具库。</p>
<p><a href="https://fabricjs.com/docs/" target="_blank" rel="noopener noreferrer">官网</a></p>
<h2 id="_1-1-安装fabric-js" tabindex="-1"><a class="header-anchor" href="#_1-1-安装fabric-js"><span>1.1 安装Fabric.js</span></a></h2>
<ul>
<li>方式1：CDN</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/fabric@6.6.5/dist/index.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>你可以使用 CDN 的方式引入，因为这样对学习来说是最快捷的。</p>
<ul>
<li>方式2：npm</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i fabric <span class="token parameter variable">--save</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>方式3：下载esm版本的js文件并引入项目
<ol>
<li>进入github的fabric项目 https://github.com/fabricjs/fabric.js/tree/master/dist</li>
<li>找到 <code v-pre>index.min.mjs</code> 并下载</li>
<li>放入项目库中</li>
</ol>
</li>
</ul>
<h2 id="_1-2-简单使用" tabindex="-1"><a class="header-anchor" href="#_1-2-简单使用"><span>1.2 简单使用</span></a></h2>
<ol>
<li>新建页面并引入 Fabric.js</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">import</span> <span class="token punctuation">{</span> fabric <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../fabric.esm.js'</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>创建 canvas 容器</li>
</ol>
<p>在 HTML 中创建 <code v-pre>&lt;canvas&gt;</code>，并设置容器的 id 和 宽高，width/height</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这里创建了一个 canvas 容器，id=&quot;c&quot;。
指定长宽都为 400px ，值得注意的是，这里不需要加 px 这个单位。
<code v-pre>style=&quot;border: 1px solid #ccc;&quot;</code> 这句其实可以不加，这里只是为了在浏览器看到 canvas 元素到底在哪。</p>
<p><canvas width="200" height="200" id="c" style="border: 1px solid #ccc;"></canvas></p>
<ol start="3">
<li>使用 fabric 接管容器，并画一个矩形</li>
</ol>
<p>在 JS 中实例化 fabric ，之后就可以使用 fabric 的 api 管理 canvas 了</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">'../index.min.mjs'</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">)</span> <span class="token comment">// 这里传入的是canvas的id</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 创建一个长方形</span></span>
<span class="line">    <span class="token keyword">const</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Rect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// 距离容器顶部 30px</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// 距离容器左侧 30px</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 宽 100px</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token comment">// 高 60px</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'red'</span> <span class="token comment">// 填充 红色</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 在canvas画布中加入矩形（rect）。add是“添加”的意思</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例图</li>
</ul>
<iframe src="/note-front/animation/fabric/html/01.html" width="300" height="300"></iframe>
</div></template>


