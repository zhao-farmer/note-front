<template><div><h1 id="一、认识-wavesurferjs" tabindex="-1"><a class="header-anchor" href="#一、认识-wavesurferjs"><span>一、认识 WavesurferJs</span></a></h1>
<p>WaveSurfer.js 是一款基于 Web Audio API 和 HTML5 Canvas 的开源 JavaScript 库，专注于音频波形的实时可视化与交互操作。以下是其核心功能及使用要点：</p>
<h2 id="_1-1-核心特性" tabindex="-1"><a class="header-anchor" href="#_1-1-核心特性"><span>1.1 核心特性</span></a></h2>
<p>‌</p>
<ol>
<li>音频可视化‌</li>
</ol>
<ul>
<li>支持实时渲染 MP3、WAV、AAC、Ogg 等常见音频格式的波形‌。</li>
<li>提供波形颜色、进度条、光标样式等可视化参数的自定义配置‌。</li>
</ul>
<ol start="2">
<li>交互功能‌</li>
</ol>
<ul>
<li>支持播放/暂停、跳转、缩放、选区裁剪等基础操作‌。</li>
<li>通过插件扩展选区标注（Regions）、时间轴（Timeline）、频谱图（Spectrogram）等高级功能‌。</li>
</ul>
<ol start="3">
<li>多场景适配‌</li>
</ol>
<ul>
<li>兼容原生 JavaScript 及 Vue 等前端框架，支持双声道播放、实时录音等复杂场景‌</li>
</ul>
<h2 id="_1-2-安装" tabindex="-1"><a class="header-anchor" href="#_1-2-安装"><span>1.2 安装</span></a></h2>
<ol>
<li>npm安装</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> wavesurfer.js </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>UML引用</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/wavesurfer.js@7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>下载引用</li>
</ol>
<ul>
<li>
<p><a href="https://www.jsdelivr.com/package/npm/wavesurfer.js" target="_blank" rel="noopener noreferrer">下载地址</a></p>
</li>
<li>
<p>下载非cjs版本</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../assest/wavesurfer.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>下载esm版本</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> WaveSurfer <span class="token keyword">from</span> <span class="token string">'../mjs/wavesurfer.js'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_1-3-简单使用" tabindex="-1"><a class="header-anchor" href="#_1-3-简单使用"><span>1.3 简单使用</span></a></h2>
<ol>
<li>代码</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>waveform<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 导入文件 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../js/wavesurfer.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">     </span>
<span class="line">        <span class="token keyword">const</span> wavesurfer <span class="token operator">=</span> WaveSurfer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 获取对应的id</span></span>
<span class="line">            <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token string">'#waveform'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 设置颜色</span></span>
<span class="line">            <span class="token literal-property property">waveColor</span><span class="token operator">:</span> <span class="token string">'#4F4A85'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 竖针的颜色</span></span>
<span class="line">            <span class="token literal-property property">progressColor</span><span class="token operator">:</span> <span class="token string">'#383351'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token comment">// 获取对应的文件</span></span>
<span class="line">            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'../assest/audio.wav'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 当文件准备完成后，直接播放</span></span>
<span class="line">        wavesurfer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'ready'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            wavesurfer<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>操作应用</li>
</ol>
<iframe src="/script/plugin/WavesurferJs/html/01.html" width="900" height="150"></iframe></div></template>


