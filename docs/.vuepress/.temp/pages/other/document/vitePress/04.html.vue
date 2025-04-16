<template><div><h1 id="四、样式配置" tabindex="-1"><a class="header-anchor" href="#四、样式配置"><span>四、样式配置</span></a></h1>
<h2 id="_4-1-自定义css" tabindex="-1"><a class="header-anchor" href="#_4-1-自定义css"><span>4.1 自定义Css</span></a></h2>
<p>可以通过覆盖根级别的 CSS 变量来自定义默认主题的 CSS：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// .vitepress/theme/index.js</span></span>
<span class="line"><span class="token keyword">import</span> DefaultTheme <span class="token keyword">from</span> <span class="token string">'vitepress/theme'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'./custom.css'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> DefaultTheme</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* .vitepress/theme/custom.css */</span></span>
<span class="line"><span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--vp-c-brand-1</span><span class="token punctuation">:</span> #646cff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--vp-c-brand-2</span><span class="token punctuation">:</span> #747bff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-右侧-markdown-标题目录" tabindex="-1"><a class="header-anchor" href="#_4-2-右侧-markdown-标题目录"><span>4.2 右侧 markdown 标题目录</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token operator">...</span></span>
<span class="line">    <span class="token comment">// 右边目录是否关闭</span></span>
<span class="line">    <span class="token literal-property property">aside</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 右边目录配置</span></span>
<span class="line">    <span class="token literal-property property">outline</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">level</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">label</span><span class="token operator">:</span><span class="token string">'目录'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


