<template><div><h1 id="一、认识uniapp" tabindex="-1"><a class="header-anchor" href="#一、认识uniapp"><span>一、认识uniapp</span></a></h1>
<h2 id="_1-1-开发环境" tabindex="-1"><a class="header-anchor" href="#_1-1-开发环境"><span>1.1 开发环境</span></a></h2>
<ol>
<li>uniapp官网</li>
</ol>
<p><a href="https://uniapp.dcloud.net.cn/" target="_blank" rel="noopener noreferrer">进入官网</a></p>
<ol start="2">
<li>下载编辑器</li>
</ol>
<p><a href="https://hx.dcloud.net.cn/Tutorial/install/windows" target="_blank" rel="noopener noreferrer">点击下载</a></p>
<h2 id="_1-2-初始化项目" tabindex="-1"><a class="header-anchor" href="#_1-2-初始化项目"><span>1.2 初始化项目</span></a></h2>
<ol>
<li>打开编辑器</li>
</ol>
<p>桌面上程序双击运行</p>
<ol start="2">
<li>新建项目</li>
</ol>
<p><img src="/application/uniapp/base/001.png" alt=""></p>
<ol start="3">
<li>创建选项</li>
</ol>
<p><img src="/application/uniapp/base/002.png" alt=""></p>
<ol start="4">
<li>项目工程介绍</li>
</ol>
<p><img src="/application/uniapp/base/003.png" alt=""></p>
<p>具体可参考：<a href="https://uniapp.dcloud.net.cn/tutorial/project.html" target="_blank" rel="noopener noreferrer">uniapp工程</a></p>
<ol start="5">
<li>
<p>运行方式</p>
<ul>
<li>内置浏览器运行</li>
</ul>
<p><img src="/application/uniapp/base/004.png" alt=""></p>
<ul>
<li>
<p>外部浏览器运行</p>
<ul>
<li>设置对应浏览器路径</li>
</ul>
<p><img src="/application/uniapp/base/005.png" alt=""></p>
<ul>
<li>启动运行</li>
</ul>
<p><img src="/application/uniapp/base/006.png" alt=""></p>
</li>
<li>
<p>小程序中运行</p>
<ul>
<li>设置小程序路径</li>
</ul>
<p><img src="/application/uniapp/base/007.png" alt=""></p>
<ul>
<li>启动运行</li>
</ul>
<p><img src="/application/uniapp/base/008.png" alt=""></p>
</li>
</ul>
</li>
</ol>
<h2 id="_1-3-基础使用" tabindex="-1"><a class="header-anchor" href="#_1-3-基础使用"><span>1.3 基础使用</span></a></h2>
<h3 id="_1-3-1-index页面改写" tabindex="-1"><a class="header-anchor" href="#_1-3-1-index页面改写"><span>1.3.1 index页面改写</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layout<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>box1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>box1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	</span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">	<span class="token selector">.layout</span><span class="token punctuation">{</span></span>
<span class="line">		<span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span></span>
<span class="line">		<span class="token selector">.box1</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">border</span><span class="token punctuation">:</span> 1px solid green<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token selector">.box2</span><span class="token punctuation">{</span></span>
<span class="line">			<span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>运行结果</li>
</ul>
<img src="/application/uniapp/base/009.png" style="border:1px black dashed">
<h3 id="_1-3-2-新建页面" tabindex="-1"><a class="header-anchor" href="#_1-3-2-新建页面"><span>1.3.2 新建页面</span></a></h3>
<ul>
<li>创建页面</li>
</ul>
<p><img src="/application/uniapp/base/010.png" alt=""></p>
<ul>
<li>配置</li>
</ul>
<p><img src="/application/uniapp/base/011.png" alt=""></p>
<ul>
<li>页面代码</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">></span></span></span>
<span class="line">		这是demo1</span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	</span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示结果</li>
</ul>
<img src="/application/uniapp/base/012.png" style="border:1px black dashed">
<h3 id="_1-3-3-自定义页面" tabindex="-1"><a class="header-anchor" href="#_1-3-3-自定义页面"><span>1.3.3 自定义页面</span></a></h3>
<ul>
<li>模板代码</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>进入自定义页面</li>
</ul>
<p><img src="/application/uniapp/base/027.png" alt=""></p>
<ul>
<li>进入页面后新建文件并把模板代码写入</li>
</ul>
<p><img src="/application/uniapp/base/028.png" alt=""></p>
</div></template>


