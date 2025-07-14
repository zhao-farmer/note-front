<template><div><h1 id="十三、选中状态" tabindex="-1"><a class="header-anchor" href="#十三、选中状态"><span>十三、选中状态</span></a></h1>
<h2 id="_13-1-无法通过空白位置选中元素" tabindex="-1"><a class="header-anchor" href="#_13-1-无法通过空白位置选中元素"><span>13.1 无法通过空白位置选中元素</span></a></h2>
<p>蓝色三角形要鼠标完全放入才能选中</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 三角形</span></span>
<span class="line">    <span class="token keyword">const</span> triangle1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Triangle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token comment">// 底边宽度</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 底边到定点的距离</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"blue"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 选择三角形空白位置的时候无法选中，当perPixelTargetFind设为false后可以选中。默认值是false</span></span>
<span class="line">    triangle1<span class="token punctuation">.</span>perPixelTargetFind <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 三角形</span></span>
<span class="line">    <span class="token keyword">const</span> triangle2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Triangle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token comment">// 底边宽度</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 底边到定点的距离</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"green"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>triangle1<span class="token punctuation">,</span> triangle2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span>selectionFullyContained <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 只选择完全包含在拖动选择矩形中的形状</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/69.html" width="350" height="350"></iframe>
<h2 id="_13-2-画布框选样式" tabindex="-1"><a class="header-anchor" href="#_13-2-画布框选样式"><span>13.2 画布框选样式</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 圆形</span></span>
<span class="line">    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#f55"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span>selection <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 画布是否可选中。默认true；false 不可选中</span></span>
<span class="line">    canvas<span class="token punctuation">.</span>selectionColor <span class="token operator">=</span> <span class="token string">"rgba(106, 101, 216, 0.3)"</span><span class="token punctuation">;</span> <span class="token comment">// 画布鼠标框选时的背景色</span></span>
<span class="line">    canvas<span class="token punctuation">.</span>selectionBorderColor <span class="token operator">=</span> <span class="token string">"#1d2786"</span><span class="token punctuation">;</span> <span class="token comment">// 画布鼠标框选时的边框颜色</span></span>
<span class="line">    canvas<span class="token punctuation">.</span>selectionLineWidth <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">// 画布鼠标框选时的边框厚度</span></span>
<span class="line">    canvas<span class="token punctuation">.</span>selectionDashArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 画布鼠标框选时边框虚线规则</span></span>
<span class="line">    canvas<span class="token punctuation">.</span>selectionFullyContained <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 只选择完全包含在拖动选择矩形中的形状</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/70.html" width="350" height="350"></iframe>
<h2 id="_13-3-自定义边和控制角样式" tabindex="-1"><a class="header-anchor" href="#_13-3-自定义边和控制角样式"><span>13.3 自定义边和控制角样式</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 圆形</span></span>
<span class="line">    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#f55"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    circle<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token comment">// 边框颜色</span></span>
<span class="line">        <span class="token literal-property property">cornerColor</span><span class="token operator">:</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token comment">// 控制角颜色</span></span>
<span class="line">        <span class="token literal-property property">cornerSize</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 控制角大小</span></span>
<span class="line">        <span class="token literal-property property">transparentCorners</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 控制角填充色不透明</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">setActiveObject</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 选中圆</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/71.html" width="350" height="350"></iframe>
<h2 id="_13-4-透明控制角" tabindex="-1"><a class="header-anchor" href="#_13-4-透明控制角"><span>13.4 透明控制角</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 圆形</span></span>
<span class="line">    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#f55"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    circle<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">"gray"</span><span class="token punctuation">,</span> <span class="token comment">// 边框颜色</span></span>
<span class="line">        <span class="token literal-property property">cornerColor</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span> <span class="token comment">// 控制角颜色</span></span>
<span class="line">        <span class="token literal-property property">cornerSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">// 控制角大小</span></span>
<span class="line">        <span class="token literal-property property">transparentCorners</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 控制角填充色透明</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">setActiveObject</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 选中第一项</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/72.html" width="350" height="350"></iframe>
<h2 id="_13-5-自定义选中后的背景色" tabindex="-1"><a class="header-anchor" href="#_13-5-自定义选中后的背景色"><span>13.5 自定义选中后的背景色</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 圆形</span></span>
<span class="line">    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#f55"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    circle<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">selectionBackgroundColor</span><span class="token operator">:</span> <span class="token string">"orange"</span><span class="token punctuation">,</span> <span class="token comment">// 选中后，背景色变橙色</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">setActiveObject</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 选中第一项</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/73.html" width="350" height="350"></iframe>
<h2 id="_13-6-没有边框" tabindex="-1"><a class="header-anchor" href="#_13-6-没有边框"><span>13.6 没有边框</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 圆形</span></span>
<span class="line">    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#f55"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    circle<span class="token punctuation">.</span>hasBorders <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 取消边框</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">setActiveObject</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 选中第一项</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/74.html" width="350" height="350"></iframe>
<h2 id="_13-7-没有控制角" tabindex="-1"><a class="header-anchor" href="#_13-7-没有控制角"><span>13.7 没有控制角</span></a></h2>
<p>没有控制角将意味着无法用鼠标直接操作缩放和旋转，只允许移动操作。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 圆形</span></span>
<span class="line">    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#f55"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    circle<span class="token punctuation">.</span>hasControls <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 禁止控制角</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">setActiveObject</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 选中第一项</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/75.html" width="350" height="350"></iframe>
<h2 id="_13-8-自定义光标在对象悬停" tabindex="-1"><a class="header-anchor" href="#_13-8-自定义光标在对象悬停"><span>13.8 自定义光标在对象悬停</span></a></h2>
<p>置了当鼠标在元素上出现 ”等待指针“ 。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 圆形</span></span>
<span class="line">    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#f55"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span>hoverCursor <span class="token operator">=</span> <span class="token string">"wait"</span><span class="token punctuation">;</span> <span class="token comment">// 设置等待指针</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/76.html" width="350" height="350"></iframe>
<h2 id="_13-9-元素移动时的样式" tabindex="-1"><a class="header-anchor" href="#_13-9-元素移动时的样式"><span>13.9 元素移动时的样式</span></a></h2>
<p>置了当鼠标在元素上出现 ”等待指针“ 。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 圆形</span></span>
<span class="line">    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#f55"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    circle<span class="token punctuation">.</span>hasBorders <span class="token operator">=</span> circle<span class="token punctuation">.</span>hasControls <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">animate</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> dir</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            fabric<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">startValue</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"angle"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">endValue</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"angle"</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>dir <span class="token operator">?</span> <span class="token number">10</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            fabric<span class="token punctuation">.</span>util<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">startValue</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"scaleX"</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">endValue</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"scaleX"</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span>dir <span class="token operator">?</span> <span class="token number">0.2</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token function-variable function">onChange</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    canvas<span class="token punctuation">.</span><span class="token function">renderAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token function-variable function">onComplete</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    e<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">setCoords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"mouse:down"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">animate</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"mouse:up"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">animate</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/77.html" width="350" height="350"></iframe>
<h2 id="_13-10-不允许框选" tabindex="-1"><a class="header-anchor" href="#_13-10-不允许框选"><span>13.10 不允许框选</span></a></h2>
<p>不允许从画布框选，但允许选中元素。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 圆形</span></span>
<span class="line">    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#f55"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span>selection <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 不允许直接从画布框选</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/78.html" width="350" height="350"></iframe>
</div></template>


