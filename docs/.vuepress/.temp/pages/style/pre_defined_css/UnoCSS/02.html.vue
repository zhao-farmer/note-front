<template><div><h1 id="二、unocss-功能详解" tabindex="-1"><a class="header-anchor" href="#二、unocss-功能详解"><span>二、UnoCSS 功能详解</span></a></h1>
<h2 id="_2-1-清除浏览器默认样式" tabindex="-1"><a class="header-anchor" href="#_2-1-清除浏览器默认样式"><span>2.1 清除浏览器默认样式</span></a></h2>
<p>src/main.ts 中添加下方代码即可</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">'@unocss/reset/tailwind.css'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-2-原子化-css" tabindex="-1"><a class="header-anchor" href="#_2-2-原子化-css"><span>2.2 原子化 CSS</span></a></h2>
<p>即本文开头演示的，用简单且功能单一的 class 来描述样式。</p>
<p>比如：让文字变成红色，并添加 10px 的外边距</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-red m-2.5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>外边距为10px, 内部文字为红色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>vscode 安装了 UnoCSS 扩展后，鼠标悬浮到 class 上，可见 UnoCSS 的最终样式效果。</p>
<p><img src="/style/pre_defined_css/UnoCSS/001.png" alt=""></p>
<p>在 class 中输入空格，会触发输入提示</p>
<p><img src="/style/pre_defined_css/UnoCSS/002.png" alt=""></p>
<p>通过官网可查询样式写法<br>
<a href="https://unocss.dev/interactive/" target="_blank" rel="noopener noreferrer">https://unocss.dev/interactive/</a></p>
<p><img src="/style/pre_defined_css/UnoCSS/003.png" alt=""></p>
<h2 id="_2-3-自定义-css" tabindex="-1"><a class="header-anchor" href="#_2-3-自定义-css"><span>2.3 自定义 CSS</span></a></h2>
<p>官方的样式写法使用不习惯？ 可以自己定义！</p>
<p>uno.config.ts 中添加 rules 即可</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unocss'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  rules<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">'p-10'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> padding<span class="token operator">:</span> <span class="token string">'10px'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">[</span><span class="token string">'m-10'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">'10px'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/style/pre_defined_css/UnoCSS/004.png" alt=""></p>
<p>但这样一个个定义太麻烦，快来使用正则表达式批量定义</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>/^p-(\d+)$/<span class="token punctuation">,</span> (match) => (<span class="token punctuation">{</span> padding<span class="token operator">:</span> `$<span class="token punctuation">{</span>match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">}</span>px` <span class="token punctuation">}</span>)<span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>从此，p- 后的数字是多少，就是多少 px 的内边距，如</p>
<p><img src="/style/pre_defined_css/UnoCSS/005.png" alt=""></p>
<p>例子 object-position</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">      <span class="token comment">// object-position 百分比值</span></span>
<span class="line">      <span class="token operator">/</span><span class="token operator">^</span>object<span class="token operator">-</span>position<span class="token operator">-</span><span class="token punctuation">(</span>\d<span class="token operator">+</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token punctuation">(</span>\d<span class="token operator">+</span><span class="token punctuation">)</span>$<span class="token operator">/</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">"object-position"</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">% </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>object-position-25-75</code> 即 <code v-pre>&quot;object-position&quot;: 25% 75%</code></p>
<h2 id="_2-4-快捷-css" tabindex="-1"><a class="header-anchor" href="#_2-4-快捷-css"><span>2.4 快捷 CSS</span></a></h2>
<p>比如一个绿色按钮的样式，需要多处使用，可以将其定义为 快捷 CSS</p>
<p>uno.config.ts 中添加 shortcuts 实现：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">  shortcuts<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'btn-green'</span><span class="token operator">:</span> <span class="token string">'text-white bg-green-500 hover:bg-green-700'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面中使用</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>保存<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>效果如下</p>
<p><img src="/style/pre_defined_css/UnoCSS/006.gif" alt=""></p>
<p>同样支持正则的写法实现批量定义，如</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">shortcuts<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token comment">// you could still have object style</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    btn<span class="token operator">:</span> <span class="token string">'py-2 px-4 font-semibold rounded-lg shadow-md'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// dynamic shortcuts</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^btn-(.*)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">,</span> c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">bg-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-400 text-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>c<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-100 py-2 px-4 rounded-lg</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-20 flex w-xs justify-around<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>保存<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果</p>
<p><img src="/style/pre_defined_css/UnoCSS/007.png" alt=""></p>
<h2 id="_2-5-在-css-中使用-unocss" tabindex="-1"><a class="header-anchor" href="#_2-5-在-css-中使用-unocss"><span>2.5 在 CSS 中使用 UnoCSS</span></a></h2>
<p>需先修改配置文件 uno.config.ts （改动部分，见下方代码中的注释）</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unocss'</span></span>
<span class="line"><span class="token comment">// 导入 transformerDirectives</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> transformerDirectives <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unocss'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 使用 transformerDirectives</span></span>
<span class="line">  transformers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">transformerDirectives</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法: 在 --at-apply 中写 UnoCSS 即可。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--at-apply</span><span class="token punctuation">:</span> p-20 flex justify-around<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-6-集成图标" tabindex="-1"><a class="header-anchor" href="#_2-6-集成图标"><span>2.6 集成图标</span></a></h2>
<p>安装图标</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @iconify/json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>添加配置 uno.config.ts</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> presetWind<span class="token punctuation">,</span> presetIcons <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unocss'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>defineConfig 中添加</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token function">presetWind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">presetIcons</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">'i-'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">extraProperties</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'inline-block'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">'vertical-align'</span><span class="token operator">:</span> <span class="token string">'middle'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在图标网中找到需要的图标</p>
<p><a href="https://icones.js.org/" target="_blank" rel="noopener noreferrer">https://icones.js.org/</a></p>
<p>复制图标名称</p>
<p><img src="/style/pre_defined_css/UnoCSS/008.png" alt=""></p>
<p>页面中使用（记得加上前缀 i-）</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i-material-symbols:calendar-today<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-7-设置背景图片" tabindex="-1"><a class="header-anchor" href="#_2-7-设置背景图片"><span>2.7 设置背景图片</span></a></h2>
<ol>
<li>在 uno.config.ts 的 rules 中添加自定义样式规则</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">    <span class="token punctuation">[</span></span>
<span class="line">      <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^bg-(\w+)-(\w+)-(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">,</span> dir<span class="token punctuation">,</span> fname<span class="token punctuation">,</span> fext<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">'background-image'</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">url(@/assets/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>dir<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fext<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>在 src/assets 中添加图片<br>
如添加了路径为 src/assets/imgs/EC_Logo.jpg 的图片</p>
</li>
<li>
<p>在页面中使用</p>
</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-imgs-EC_Logo-jpg bg-cover bg-center w-20 h-20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>即 <code v-pre>bg-imgs-EC_Logo-jpg</code> 对应图片 <code v-pre>src/assets/imgs/EC_Logo.jpg</code></p>
<h2 id="_2-8-自定义响应式布局的断点" tabindex="-1"><a class="header-anchor" href="#_2-8-自定义响应式布局的断点"><span>2.8 自定义响应式布局的断点</span></a></h2>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">  theme<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 自定义响应式布局的断点</span></span>
<span class="line">    breakpoints<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      sm<span class="token operator">:</span> '640px'<span class="token punctuation">,</span></span>
<span class="line">      md<span class="token operator">:</span> '768px'<span class="token punctuation">,</span></span>
<span class="line">      lg<span class="token operator">:</span> '1024px'<span class="token punctuation">,</span></span>
<span class="line">      xl<span class="token operator">:</span> '1280px'<span class="token punctuation">,</span></span>
<span class="line">      xl2<span class="token operator">:</span> '1444px'<span class="token punctuation">,</span></span>
<span class="line">      '2xl'<span class="token operator">:</span> '1536px'</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面使用</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lt-md:shadow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>当屏幕宽度小于 768px 时，添加阴影</p>
</div></template>


