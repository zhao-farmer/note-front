<template><div><h1 id="八、渐变与图片" tabindex="-1"><a class="header-anchor" href="#八、渐变与图片"><span>八、渐变与图片</span></a></h1>
<h2 id="_8-1-渐变-gradient" tabindex="-1"><a class="header-anchor" href="#_8-1-渐变-gradient"><span>8.1 渐变(Gradient)</span></a></h2>
<h3 id="_8-1-1-线性渐变" tabindex="-1"><a class="header-anchor" href="#_8-1-1-线性渐变"><span>8.1.1 线性渐变</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 线性渐变</span></span>
<span class="line">    <span class="token keyword">let</span> gradient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Gradient</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"linear"</span><span class="token punctuation">,</span> <span class="token comment">// linear or radial</span></span>
<span class="line">        <span class="token literal-property property">gradientUnits</span><span class="token operator">:</span> <span class="token string">"pixels"</span><span class="token punctuation">,</span> <span class="token comment">// pixels or pencentage 像素 或者 百分比</span></span>
<span class="line">        <span class="token literal-property property">coords</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x1</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y1</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">x2</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">y2</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 至少2个坐标对（x1，y1和x2，y2）将定义渐变在对象上的扩展方式</span></span>
<span class="line">        <span class="token literal-property property">colorStops</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token comment">// 定义渐变颜色的数组</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"orange"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"yellow"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"green"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"blue"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"purple"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 圆</span></span>
<span class="line">    <span class="token keyword">let</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    circle<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"fill"</span><span class="token punctuation">,</span> gradient<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 矩形</span></span>
<span class="line">    <span class="token keyword">let</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Rect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    rect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"stroke"</span><span class="token punctuation">,</span> gradient<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 文字</span></span>
<span class="line">    <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>FabricText</span><span class="token punctuation">(</span><span class="token string">'我爱学习'</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    text<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"stroke"</span><span class="token punctuation">,</span> gradient<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/19.html" width="330" height="330"></iframe>
<h3 id="_8-1-2-径向渐变" tabindex="-1"><a class="header-anchor" href="#_8-1-2-径向渐变"><span>8.1.2 径向渐变</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 线性渐变</span></span>
<span class="line">    <span class="token keyword">let</span> gradient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Gradient</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"radial"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">coords</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">r1</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 该属性仅径向渐变可用，外圆半径</span></span>
<span class="line">            <span class="token literal-property property">r2</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 该属性仅径向渐变可用，外圆半径</span></span>
<span class="line">            <span class="token literal-property property">x1</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 焦点的x坐标</span></span>
<span class="line">            <span class="token literal-property property">y1</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 焦点的y坐标</span></span>
<span class="line">            <span class="token literal-property property">x2</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 中心点的x坐标</span></span>
<span class="line">            <span class="token literal-property property">y2</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 中心点的y坐标</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">colorStops</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#fee140"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#fa709a"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 圆</span></span>
<span class="line">    <span class="token keyword">let</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    circle<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"fill"</span><span class="token punctuation">,</span> gradient<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 矩形</span></span>
<span class="line">    <span class="token keyword">let</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Rect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    rect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"stroke"</span><span class="token punctuation">,</span> gradient<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 文字</span></span>
<span class="line">    <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>FabricText</span><span class="token punctuation">(</span><span class="token string">'我爱学习'</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    text<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"stroke"</span><span class="token punctuation">,</span> gradient<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/20.html" width="330" height="330"></iframe>
<h2 id="_8-2-图片" tabindex="-1"><a class="header-anchor" href="#_8-2-图片"><span>8.2 图片</span></a></h2>
<h3 id="_8-2-1-基础使用-fabricimage" tabindex="-1"><a class="header-anchor" href="#_8-2-1-基础使用-fabricimage"><span>8.2.1 基础使用(FabricImage)</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 图片</span></span>
<span class="line">    <span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">"./assest/001.jpg"</span></span>
<span class="line"></span>
<span class="line">    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 使用 FabricImage 加载图片</span></span>
<span class="line">        <span class="token keyword">let</span> FabricImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>FabricImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 拉甚至canvas大小</span></span>
<span class="line">                <span class="token literal-property property">scaleX</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>width <span class="token operator">/</span> img<span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token comment">// 计算出图片要拉伸的宽度</span></span>
<span class="line">                <span class="token literal-property property">scaleY</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> img<span class="token punctuation">.</span>height <span class="token comment">// 计算出图片要拉伸的高度</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">        canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>FabricImage<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/21.html" width="350" height="450"></iframe>
<h3 id="_8-2-2-基础使用-image" tabindex="-1"><a class="header-anchor" href="#_8-2-2-基础使用-image"><span>8.2.2 基础使用(Image)</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 图片</span></span>
<span class="line">    <span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">"./assest/001.jpg"</span></span>
<span class="line"></span>
<span class="line">    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 使用 FabricImage 加载图片</span></span>
<span class="line">        <span class="token keyword">let</span> FabricImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Image</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 拉甚至canvas大小</span></span>
<span class="line">                <span class="token literal-property property">scaleX</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>width <span class="token operator">/</span> img<span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token comment">// 计算出图片要拉伸的宽度</span></span>
<span class="line">                <span class="token literal-property property">scaleY</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> img<span class="token punctuation">.</span>height <span class="token comment">// 计算出图片要拉伸的高度</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">        canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>FabricImage<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/21.html" width="350" height="450"></iframe>
<h3 id="_8-2-3-图片基础样式" tabindex="-1"><a class="header-anchor" href="#_8-2-3-图片基础样式"><span>8.2.3 图片基础样式</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 图片</span></span>
<span class="line">    <span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">"./assest/001.jpg"</span></span>
<span class="line"></span>
<span class="line">    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 使用 FabricImage 加载图片</span></span>
<span class="line">        <span class="token keyword">let</span> FabricImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>FabricImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">angle</span><span class="token operator">:</span><span class="token number">45</span><span class="token punctuation">,</span>   <span class="token comment">// 旋转角度</span></span>
<span class="line">                <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span><span class="token string">"red"</span><span class="token punctuation">,</span>  <span class="token comment">// 背景颜色</span></span>
<span class="line">                <span class="token literal-property property">border</span><span class="token operator">:</span><span class="token string">"blue"</span><span class="token punctuation">,</span>  <span class="token comment">// 边框颜色</span></span>
<span class="line">                <span class="token literal-property property">borderDashArray</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，虚线边的规则</span></span>
<span class="line"></span>
<span class="line">                <span class="token literal-property property">cropX</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>   <span class="token comment">// 从原始图像大小裁剪图像像素。</span></span>
<span class="line">                <span class="token literal-property property">cropY</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>   <span class="token comment">// 从原始图像大小裁剪图像像素。</span></span>
<span class="line">                <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"green"</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">flipX</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">// 水平反转</span></span>
<span class="line">                <span class="token literal-property property">flipY</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>    <span class="token comment">// 垂直反转</span></span>
<span class="line"></span>
<span class="line">                <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">,</span>     <span class="token comment">// 高度</span></span>
<span class="line">                <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">300</span><span class="token punctuation">,</span>      <span class="token comment">// 宽度</span></span>
<span class="line"></span>
<span class="line">                <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>      <span class="token comment">// 左边位置距离</span></span>
<span class="line">                <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>      <span class="token comment">// 顶边位置距离</span></span>
<span class="line"></span>
<span class="line">                <span class="token literal-property property">padding</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span>     <span class="token comment">// 填充距离</span></span>
<span class="line"></span>
<span class="line">                <span class="token literal-property property">scaleX</span><span class="token operator">:</span><span class="token number">0.5</span><span class="token punctuation">,</span>       <span class="token comment">// x轴比例</span></span>
<span class="line">                <span class="token literal-property property">scaleY</span><span class="token operator">:</span><span class="token number">0.5</span><span class="token punctuation">,</span>       <span class="token comment">// y轴比例</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 拉甚至canvas大小</span></span>
<span class="line">                <span class="token literal-property property">scaleX</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>width <span class="token operator">/</span> img<span class="token punctuation">.</span>width<span class="token punctuation">,</span> <span class="token comment">// 计算出图片要拉伸的宽度</span></span>
<span class="line">                <span class="token literal-property property">scaleY</span><span class="token operator">:</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> img<span class="token punctuation">.</span>height <span class="token comment">// 计算出图片要拉伸的高度</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">        canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>FabricImage<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/22.html" width="350" height="450"></iframe>
</div></template>


