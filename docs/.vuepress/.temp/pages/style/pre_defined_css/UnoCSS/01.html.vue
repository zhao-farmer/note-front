<template><div><h1 id="一、认识unocss" tabindex="-1"><a class="header-anchor" href="#一、认识unocss"><span>一、认识UnoCSS</span></a></h1>
<h2 id="_1-1-什么是unocss" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是unocss"><span>1.1 什么是unocss</span></a></h2>
<p>unocss是一个即时的原子CSS引擎，它可以让你用简短的类名来控制元素的样式，而不需要写复杂的CSS代码。</p>
<p>当然，原子样式也有很多选择，最著名的就是 Tailwind。但由于Tailwind 会生成大量样式定义，会导致全量的 CSS 文件往往体积会多至数 MB，从而有性能上有一些不足</p>
<blockquote>
<p>扩展：什么是原子化
原子化CSS是一种CSS架构方式，其支持小型、单一用途的类，其名称基于视觉功能。</p>
<p>更加通俗的来讲，原子化CSS是一种新的CSS编程思路，它倾向于创建小巧且单一用途的class，并且以视觉效果进行命名。</p>
</blockquote>
<h2 id="_1-2-unocss的优点" tabindex="-1"><a class="header-anchor" href="#_1-2-unocss的优点"><span>1.2 unocss的优点</span></a></h2>
<ul>
<li>快速地开发和原型设计，而不需要考虑CSS的细节。</li>
<li>CSS文件更小，因为它只生成你用到的工具类。</li>
<li>CSS更一致，因为它遵循一套预设的规则和变量。</li>
<li>CSS更灵活，因为它支持自定义工具类，变体，指令和图标。</li>
<li>CSS更易于维护，因为它避免了样式冲突和重复代码。</li>
</ul>
<h2 id="_1-3-官网地址" tabindex="-1"><a class="header-anchor" href="#_1-3-官网地址"><span>1.3 官网地址</span></a></h2>
<p><a href="https://unocss.nodejs.cn/" target="_blank" rel="noopener noreferrer">官网地址</a></p>
<p><a href="https://unocss.nodejs.cn/" target="_blank" rel="noopener noreferrer">中文文档地址</a></p>
<h2 id="_1-4-初始应用配置" tabindex="-1"><a class="header-anchor" href="#_1-4-初始应用配置"><span>1.4 初始应用配置</span></a></h2>
<p><a href="https://unocss.dev/integrations/vite" target="_blank" rel="noopener noreferrer">官方文档Vite配置</a></p>
<h3 id="_1-4-1-安装" tabindex="-1"><a class="header-anchor" href="#_1-4-1-安装"><span>1.4.1 安装</span></a></h3>
<p>运行时需要<code v-pre>unocss</code>，打包后都是<code v-pre>css</code>文件，一定要加 <code v-pre>-D</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> unocss</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-4-2-打包配置" tabindex="-1"><a class="header-anchor" href="#_1-4-2-打包配置"><span>1.4.2 打包配置</span></a></h3>
<ol>
<li>vite配置</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// vite.config.js</span></span>
<span class="line"><span class="token keyword">import</span> UnoCSS <span class="token keyword">from</span> <span class="token string">'unocss/vite'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">UnoCSS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>webpack5中配置</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// webpack.config.js</span></span>
<span class="line"><span class="token keyword">const</span> UnoCSS <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@unocss/webpack'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>default</span>
<span class="line"> </span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">UnoCSS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">realContentHash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-3-unocss配置" tabindex="-1"><a class="header-anchor" href="#_1-4-3-unocss配置"><span>1.4.3 unocss配置</span></a></h3>
<p>创建一个<code v-pre>uno.config.ts</code> 配置文件</p>
<p>用于编写用户想要的 unocss 配置</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// uno.config.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unocss'</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...UnoCSS options</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-4-全局引入" tabindex="-1"><a class="header-anchor" href="#_1-4-4-全局引入"><span>1.4.4 全局引入</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// main.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'virtual:uno.css'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-快速入门" tabindex="-1"><a class="header-anchor" href="#_1-5-快速入门"><span>1.5 快速入门</span></a></h2>
<h3 id="_1-5-1-规则配置" tabindex="-1"><a class="header-anchor" href="#_1-5-1-规则配置"><span>1.5.1 规则配置</span></a></h3>
<p>例如，你可以通过在本地 配置文件 中提供规则来定义自定义 CSS 工具。</p>
<p>uno.config.ts</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unocss'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">'m-1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'1px'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将向你的项目添加一个新的 CSS 工具 m-1。由于 UnoCSS 是按需的，因此除非你在代码库中使用它，否则它不会执行任何操作。假设我们有一个这样的组件：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>m-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将检测到 m-1 并生成以下 CSS：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.m-1</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>为了使其更加灵活，你可以通过将规则的第一个参数（我们称之为匹配器）更改为 RegExp，将主体更改为函数，使规则动态化，例如：</p>
<p>uno.config.ts</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token operator">-</span>    <span class="token punctuation">[</span><span class="token string">'m-1'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'1px'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">+</span>    <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^m-([\.\d]+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>_<span class="token punctuation">,</span> num<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这样做，现在你可以拥有任意外边距工具，例如 m-1、m-100 或 m-52.43。再说一次，UnoCSS 仅在你使用它们时生成它们。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>m-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>m-7.5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.m-1</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.m-7.5</span> <span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span> 7.5px<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-2-预设" tabindex="-1"><a class="header-anchor" href="#_1-5-2-预设"><span>1.5.2 预设</span></a></h3>
<p>制定一些规则后，你可以将它们提取到预设中，并与其他人共享。例如，你可以为公司的设计系统创建预设，并与你的团队共享。</p>
<p>my-preset.ts</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Preset <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unocss'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">myPreset</span><span class="token operator">:</span> Preset <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'my-preset'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^m-([.\d]+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>_<span class="token punctuation">,</span> num<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^p-([.\d]+)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>_<span class="token punctuation">,</span> num<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">variants</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">/* ... */</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">shortcuts</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token comment">/* ... */</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>uno.config.ts</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unocss'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> myPreset <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./my-preset'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    myPreset<span class="token punctuation">,</span> <span class="token comment">// your own preset</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以同样，我们提供了一些 官方预设 供你立即开始使用，你还可以找到许多有趣的 社区预设。</p>
</div></template>


