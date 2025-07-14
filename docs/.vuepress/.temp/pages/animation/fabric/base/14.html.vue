<template><div><h1 id="十四、事件" tabindex="-1"><a class="header-anchor" href="#十四、事件"><span>十四、事件</span></a></h1>
<h2 id="_1‌4-1-画布级事件‌" tabindex="-1"><a class="header-anchor" href="#_1‌4-1-画布级事件‌"><span>1‌4.1 画布级事件‌</span></a></h2>
<ul>
<li>
<p>事件</p>
<ul>
<li>mouse:down/mouse:move/mouse:up：基础鼠标事件</li>
<li>mouse:wheel：鼠标滚轮缩放事件</li>
<li>selection:created/selection:updated/selection:cleared：选择状态变化事件</li>
<li>mouse:over/mouse:out：鼠标悬停事件（需注意组内元素可能不触发）</li>
</ul>
</li>
<li>
<p>代码</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c1<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按下鼠标：x轴坐标:0; y轴坐标:0 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>move<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>移动鼠标：x轴坐标:0; y轴坐标:0 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>up<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>松开鼠标：x轴坐标:0; y轴坐标:0 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    canvas<span class="token punctuation">.</span>isDrawingMode <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'mouse:down'</span><span class="token punctuation">,</span> <span class="token parameter">options</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        down<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">按下鼠标：x轴坐标: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>e<span class="token punctuation">.</span>clientX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">; y轴坐标: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>e<span class="token punctuation">.</span>clientY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'mouse:move'</span><span class="token punctuation">,</span> <span class="token parameter">options</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        move<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">移动鼠标：x轴坐标: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>e<span class="token punctuation">.</span>clientX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">; y轴坐标: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>e<span class="token punctuation">.</span>clientY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'mouse:up'</span><span class="token punctuation">,</span> <span class="token parameter">options</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        up<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">松开鼠标：x轴坐标: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>e<span class="token punctuation">.</span>clientX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">; y轴坐标: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>options<span class="token punctuation">.</span>e<span class="token punctuation">.</span>clientY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/79.html" width="350" height="450"></iframe>
<h2 id="_14-2-对象级事件‌" tabindex="-1"><a class="header-anchor" href="#_14-2-对象级事件‌"><span>14.2 对象级事件‌</span></a></h2>
<ul>
<li>
<p>事件</p>
<ul>
<li>object:added/object:removed：对象增删事件</li>
<li>object:modified：对象属性修改事件</li>
<li>object:moving/object:scaling/object:rotating：变换操作事件</li>
<li>mousedown/mousemove/mouseup：对象专属鼠标事件</li>
</ul>
</li>
<li>
<p>代码</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c1<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>current<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>当前操作： <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Rect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">'#ffde7d'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    rect<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'moving'</span><span class="token punctuation">,</span> <span class="token parameter">options</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        current<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"当前操作：移动"</span></span>
<span class="line">        canvas<span class="token punctuation">.</span><span class="token function">renderAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    rect<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'scaling'</span><span class="token punctuation">,</span> <span class="token parameter">options</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        current<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"当前操作：缩放"</span></span>
<span class="line">        canvas<span class="token punctuation">.</span><span class="token function">renderAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    rect<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'rotating'</span><span class="token punctuation">,</span> <span class="token parameter">options</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        current<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"当前操作：旋转"</span></span>
<span class="line">        canvas<span class="token punctuation">.</span><span class="token function">renderAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/80.html" width="350" height="350"></iframe>
<h2 id="_14-3-键盘事件" tabindex="-1"><a class="header-anchor" href="#_14-3-键盘事件"><span>14.3 键盘事件</span></a></h2>
<p>键盘通过绑定键盘事件去操作图形</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 设置后才能联动键盘</span></span>
<span class="line">    <span class="token comment">// canvas.allowKeybord = true;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">const</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Rect</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token string">"#ffde7d"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>rect<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"keydown"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> moveDistance <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 移动的距离</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">switch</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>keyCode<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token number">37</span><span class="token operator">:</span> <span class="token comment">// 左箭头键</span></span>
<span class="line">                rect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"left"</span><span class="token punctuation">,</span> rect<span class="token punctuation">.</span>left <span class="token operator">-</span> moveDistance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token number">38</span><span class="token operator">:</span> <span class="token comment">// 上箭头键</span></span>
<span class="line">                rect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"top"</span><span class="token punctuation">,</span> rect<span class="token punctuation">.</span>top <span class="token operator">-</span> moveDistance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token number">39</span><span class="token operator">:</span> <span class="token comment">// 右箭头键</span></span>
<span class="line">                rect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"left"</span><span class="token punctuation">,</span> rect<span class="token punctuation">.</span>left <span class="token operator">+</span> moveDistance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">case</span> <span class="token number">40</span><span class="token operator">:</span> <span class="token comment">// 下箭头键</span></span>
<span class="line">                rect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"top"</span><span class="token punctuation">,</span> rect<span class="token punctuation">.</span>top <span class="token operator">+</span> moveDistance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        canvas<span class="token punctuation">.</span><span class="token function">renderAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/81.html" width="650" height="350"></iframe>
</div></template>


