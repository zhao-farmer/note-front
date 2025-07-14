<template><div><h1 id="三、基础图形" tabindex="-1"><a class="header-anchor" href="#三、基础图形"><span>三、基础图形</span></a></h1>
<h2 id="_3-1-矩形-rect" tabindex="-1"><a class="header-anchor" href="#_3-1-矩形-rect"><span>3.1 矩形(Rect)</span></a></h2>
<h3 id="_3-1-1-普通矩形" tabindex="-1"><a class="header-anchor" href="#_3-1-1-普通矩形"><span>3.1.1 普通矩形</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 矩形</span></span>
<span class="line">    <span class="token keyword">const</span> rect1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Rect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 距离容器顶部 100px</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 距离容器左侧 100px</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"orange"</span><span class="token punctuation">,</span> <span class="token comment">// 填充 橙色</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 宽度 100px</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 高度 100px</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 将矩形添加到画布中</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rect1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/05.html" width="330" height="330"></iframe>
<h3 id="_3-1-2-圆角矩形" tabindex="-1"><a class="header-anchor" href="#_3-1-2-圆角矩形"><span>3.1.2 圆角矩形</span></a></h3>
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
<span class="line">    <span class="token keyword">const</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Rect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 距离容器顶部 100px</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 距离容器左侧 100px</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"orange"</span><span class="token punctuation">,</span> <span class="token comment">// 填充 橙色</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 宽度 100px</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 高度 100px</span></span>
<span class="line">        <span class="token literal-property property">rx</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// x轴圆角半径</span></span>
<span class="line">        <span class="token literal-property property">ry</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// y轴圆角半径</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 将矩形添加到画布中</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/06.html" width="330" height="330"></iframe>
<h2 id="_3-2-圆-circle" tabindex="-1"><a class="header-anchor" href="#_3-2-圆-circle"><span>3.2 圆(Circle)</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 圆的半径 50</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'green'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/07.html" width="330" height="330"></iframe>
<h2 id="_3-3-椭圆-ellipse" tabindex="-1"><a class="header-anchor" href="#_3-3-椭圆-ellipse"><span>3.3 椭圆(Ellipse)</span></a></h2>
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
<span class="line">    <span class="token keyword">const</span> ellipse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Ellipse</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">rx</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">ry</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'hotpink'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>ellipse<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/08.html" width="330" height="330"></iframe>
<h2 id="_3-4-三角形-triangle" tabindex="-1"><a class="header-anchor" href="#_3-4-三角形-triangle"><span>3.4 三角形(Triangle)</span></a></h2>
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
<span class="line">    <span class="token keyword">const</span> triangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Triangle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token comment">// 底边长度</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token comment">// 底边到对角的距离</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'blue'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>triangle<span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/09.html" width="330" height="330"></iframe>
<h2 id="_3-5-线段-line" tabindex="-1"><a class="header-anchor" href="#_3-5-线段-line"><span>3.5 线段(Line)</span></a></h2>
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
<span class="line">    <span class="token keyword">const</span> line <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Line</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token punctuation">[</span></span>
<span class="line">            <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 起始点坐标</span></span>
<span class="line">            <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">300</span> <span class="token comment">// 结束点坐标</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token comment">// 笔触颜色</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/10.html" width="330" height="330"></iframe>
<h2 id="_3-6-多线段-polyline" tabindex="-1"><a class="header-anchor" href="#_3-6-多线段-polyline"><span>3.6 多线段(Polyline)</span></a></h2>
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
<span class="line">    <span class="token keyword">const</span> polyline <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Polyline</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>    <span class="token comment">// 起始点坐标</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">140</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 其他点坐标</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">240</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">150</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"transparent"</span><span class="token punctuation">,</span> <span class="token comment">// 如果画折线，需要填充透明</span></span>
<span class="line">            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">"#6639a6"</span><span class="token punctuation">,</span> <span class="token comment">// 线段颜色：紫色</span></span>
<span class="line">            <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 线段粗细 5</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>polyline<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/11.html" width="330" height="330"></iframe>
<h2 id="_3-7-多边形-polygon" tabindex="-1"><a class="header-anchor" href="#_3-7-多边形-polygon"><span>3.7 多边形(Polygon)</span></a></h2>
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
<span class="line">    <span class="token keyword">const</span> polygon <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Polygon</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token punctuation">[</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">140</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">240</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">150</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#ffd3b6"</span><span class="token punctuation">,</span> <span class="token comment">// 填充色</span></span>
<span class="line">            <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">"#6639a6"</span><span class="token punctuation">,</span> <span class="token comment">// 线段颜色：紫色</span></span>
<span class="line">            <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 线段粗细 5</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>polygon<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/12.html" width="330" height="330"></iframe>
<h2 id="_3-8-path路径-path" tabindex="-1"><a class="header-anchor" href="#_3-8-path路径-path"><span>3.8 path路径(Path)</span></a></h2>
<p>与SVG的Path一样，具体可在svg中的路径里查看对应的值</p>
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
<span class="line">    <span class="token comment">// 绘制路径</span></span>
<span class="line">    <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Path</span><span class="token punctuation">(</span><span class="token string">"M 0 0 L 200 100 L 170 200 z"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    path<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 距离容器顶部距离 50px</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 距离容器左侧距离 50px</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"hotpink"</span><span class="token punctuation">,</span> <span class="token comment">// 填充 亮粉色</span></span>
<span class="line">        <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token comment">// 不透明度 50%</span></span>
<span class="line">        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span> <span class="token comment">// 描边颜色 黑色</span></span>
<span class="line">        <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 描边粗细 10px</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/13.html" width="330" height="330"></iframe>
<h2 id="_3-8-图形常用样式" tabindex="-1"><a class="header-anchor" href="#_3-8-图形常用样式"><span>3.8 图形常用样式</span></a></h2>
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
<span class="line">    <span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Circle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 半径：50px</span></span>
<span class="line">        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token comment">// 背景色：绿色</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"orange"</span><span class="token punctuation">,</span> <span class="token comment">// 填充色：橙色</span></span>
<span class="line">        <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token string">"#f6416c"</span><span class="token punctuation">,</span> <span class="token comment">// 边框颜色：粉色</span></span>
<span class="line">        <span class="token literal-property property">strokeWidth</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 边框粗细：5px</span></span>
<span class="line">        <span class="token literal-property property">strokeDashArray</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 边框虚线规则：填充20px 空5px 填充14px 空20px 填充5px ……</span></span>
<span class="line">        <span class="token literal-property property">shadow</span><span class="token operator">:</span> <span class="token string">"10px 20px 6px rgba(10, 20, 30, 0.4)"</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token comment">// 投影：向右偏移10px，向下偏移20px，羽化6px，投影颜色及透明度</span></span>
<span class="line">        <span class="token literal-property property">transparentCorners</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，角是被填充了。true 空心；false 实心</span></span>
<span class="line">        <span class="token literal-property property">borderColor</span><span class="token operator">:</span> <span class="token string">"#16f1fc"</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，边框颜色：天蓝</span></span>
<span class="line">        <span class="token literal-property property">borderScaleFactor</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，边的粗细：5px</span></span>
<span class="line">        <span class="token literal-property property">borderDashArray</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，虚线边的规则</span></span>
<span class="line">        <span class="token literal-property property">cornerColor</span><span class="token operator">:</span> <span class="token string">"#a1de93"</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，角的颜色是 青色</span></span>
<span class="line">        <span class="token literal-property property">cornerStrokeColor</span><span class="token operator">:</span> <span class="token string">"pink"</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，角的边框的颜色是 粉色</span></span>
<span class="line">        <span class="token literal-property property">cornerStyle</span><span class="token operator">:</span> <span class="token string">"circle"</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，叫的属性。默认rect 矩形；circle 圆形</span></span>
<span class="line">        <span class="token literal-property property">cornerSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，角的大小为20</span></span>
<span class="line">        <span class="token literal-property property">cornerDashArray</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，虚线角的规则</span></span>
<span class="line">        <span class="token literal-property property">selectionBackgroundColor</span><span class="token operator">:</span> <span class="token string">"#7f1300"</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，选框的背景色：朱红</span></span>
<span class="line">        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// 选中时，选择框离元素的内边距：40px</span></span>
<span class="line">        <span class="token literal-property property">borderOpacityWhenMoving</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token comment">// 当对象活动和移动时，对象控制边界的不透明度</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/14.html" width="330" height="330"></iframe>
</div></template>


