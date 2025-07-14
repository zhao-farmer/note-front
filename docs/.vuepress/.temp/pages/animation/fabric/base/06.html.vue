<template><div><h1 id="六、分组" tabindex="-1"><a class="header-anchor" href="#六、分组"><span>六、分组</span></a></h1>
<h2 id="_6-1-建组" tabindex="-1"><a class="header-anchor" href="#_6-1-建组"><span>6.1 建组</span></a></h2>
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
<span class="line">    <span class="token comment">// 椭圆</span></span>
<span class="line">    <span class="token keyword">const</span> ellipse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Ellipse</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">rx</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">ry</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#ddd"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">originX</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span> <span class="token comment">// 旋转x轴：left, right, center</span></span>
<span class="line">        <span class="token literal-property property">originY</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span> <span class="token comment">// 旋转y轴：top, bottom, center</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 文本</span></span>
<span class="line">    <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Text</span><span class="token punctuation">(</span><span class="token string">"我爱学习"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">originX</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">originY</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 建组</span></span>
<span class="line">    <span class="token keyword">const</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Group</span><span class="token punctuation">(</span><span class="token punctuation">[</span>ellipse<span class="token punctuation">,</span> text<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 整组距离顶部100</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 整组距离左侧100</span></span>
<span class="line">        <span class="token literal-property property">angle</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 整组旋转-10deg</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/45.html" width="330" height="330"></iframe>
<h2 id="_6-2-操作组" tabindex="-1"><a class="header-anchor" href="#_6-2-操作组"><span>6.2 操作组</span></a></h2>
<ul>
<li>
<p>Fabric.js 方法</p>
<ul>
<li>getObjects() 返回一组中所有对象的数组</li>
<li>size() 所有对象的数量</li>
<li>contains() 检查特定对象是否在 group 中</li>
<li>item() 组中元素</li>
<li>forEachObject() 遍历组中对象</li>
<li>add() 添加元素对象</li>
<li>remove() 删除元素对象</li>
<li>fabric.util.object.clone() 克隆</li>
</ul>
</li>
<li>
<p>代码</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 椭圆</span></span>
<span class="line">    <span class="token keyword">const</span> ellipse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Ellipse</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">rx</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">ry</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#ddd"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">originX</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span> <span class="token comment">// 旋转x轴：left, right, center</span></span>
<span class="line">        <span class="token literal-property property">originY</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span> <span class="token comment">// 旋转y轴：top, bottom, center</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 文本</span></span>
<span class="line">    <span class="token keyword">const</span> text <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Text</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">originX</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">originY</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 建组</span></span>
<span class="line">    <span class="token keyword">const</span> group <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Group</span><span class="token punctuation">(</span><span class="token punctuation">[</span>ellipse<span class="token punctuation">,</span> text<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 整组距离顶部100</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 整组距离左侧100</span></span>
<span class="line">        <span class="token literal-property property">angle</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 整组旋转-10deg</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 控制第一个元素（椭圆）</span></span>
<span class="line">    group<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"fill"</span><span class="token punctuation">,</span> <span class="token string">"#ea5455"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 控制第二个元素（文本）</span></span>
<span class="line">    group<span class="token punctuation">.</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"雷猴，世界"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>group<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/46.html" width="330" height="330"></iframe>
</div></template>


