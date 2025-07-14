<template><div><h1 id="十一、画笔" tabindex="-1"><a class="header-anchor" href="#十一、画笔"><span>十一、画笔</span></a></h1>
<h2 id="_11-1-基础笔刷" tabindex="-1"><a class="header-anchor" href="#_11-1-基础笔刷"><span>11.1 基础笔刷</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">isDrawingMode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span>isDrawingMode <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 画笔投影</span></span>
<span class="line">    <span class="token keyword">const</span> brushShadow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Shadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">offsetX</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">affectStroke</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#30e3ca"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 创建笔刷</span></span>
<span class="line">    <span class="token comment">// BaseBrush 并不实现画笔 实现画笔靠的是onMouseMove</span></span>
<span class="line">    <span class="token comment">// 其他画笔都是实现了 onMouseDown onMouseMove onMouseUp</span></span>
<span class="line">    <span class="token keyword">const</span> brush <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>BaseBrush</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    brush<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> <span class="token comment">// 画笔宽度</span></span>
<span class="line">    brush<span class="token punctuation">.</span>shadow <span class="token operator">=</span> brushShadow<span class="token punctuation">;</span> <span class="token comment">// 阴影</span></span>
<span class="line">    brush<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"pink"</span><span class="token punctuation">;</span> <span class="token comment">// 画笔颜色</span></span>
<span class="line">    brush<span class="token punctuation">.</span>limitedToCanvasSize <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 能否超出当前画板</span></span>
<span class="line">    brush<span class="token punctuation">.</span>strokeDashArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 行程破折号数组</span></span>
<span class="line">    brush<span class="token punctuation">.</span>strokeLineCap <span class="token operator">=</span> <span class="token string">"round"</span><span class="token punctuation">;</span> <span class="token comment">// 线条结尾的画笔风格 butt | round | square</span></span>
<span class="line">    brush<span class="token punctuation">.</span>strokeLineJoin <span class="token operator">=</span> <span class="token string">"miter"</span><span class="token punctuation">;</span> <span class="token comment">// 画笔的角落风格 bevel | round | miter</span></span>
<span class="line">    brush<span class="token punctuation">.</span>strokeMiterLimit <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span> <span class="token comment">// 最大斜接长度</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 笔刷设置在画布上</span></span>
<span class="line">    canvas<span class="token punctuation">.</span>freeDrawingBrush <span class="token operator">=</span> brush<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 鼠标按下时触发</span></span>
<span class="line">    brush<span class="token punctuation">.</span><span class="token function-variable function">onMouseDown</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">t<span class="token punctuation">,</span> e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"画图开始"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 鼠标移动时触发</span></span>
<span class="line">    brush<span class="token punctuation">.</span><span class="token function-variable function">onMouseMove</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">t<span class="token punctuation">,</span> e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"画图中"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 鼠标松开时触发</span></span>
<span class="line">    brush<span class="token punctuation">.</span><span class="token function-variable function">onMouseUp</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"画图结束"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>BaseBrush 并不实现画笔 实现画笔靠的是onMouseMove</li>
<li>其他画笔都是实现了 onMouseDown onMouseMove onMouseUp</li>
</ul>
<h2 id="_11-2-铅笔笔刷" tabindex="-1"><a class="header-anchor" href="#_11-2-铅笔笔刷"><span>11.2 铅笔笔刷</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 获取动态画布</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c1"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">isDrawingMode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span>isDrawingMode <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 初始化</span></span>
<span class="line"></span>
<span class="line">    canvas<span class="token punctuation">.</span>isDrawingMode <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取铅笔笔刷</span></span>
<span class="line">    <span class="token keyword">let</span> pencilBrush <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>PencilBrush</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 画笔颜色</span></span>
<span class="line">    pencilBrush<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"#c123a8"</span><span class="token punctuation">;</span> </span>
<span class="line">        <span class="token comment">// 拐角的平滑程度，数值越大越平滑</span></span>
<span class="line">    pencilBrush<span class="token punctuation">.</span>decimate <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 铅笔粗细</span></span>
<span class="line">    pencilBrush<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 绘制时不能超出画布</span></span>
<span class="line">    pencilBrush<span class="token punctuation">.</span>limitedToCanvasSize <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 绘制直线的组合键，默认shiftKey。'altKey' | 'shiftKey' | 'ctrlKey' | 'none' | undefined | null</span></span>
<span class="line">    pencilBrush<span class="token punctuation">.</span>straightLineKey <span class="token operator">=</span> <span class="token string">"shiftKey"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 阴影</span></span>
<span class="line">    pencilBrush<span class="token punctuation">.</span>shadow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Shadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 羽化程度</span></span>
<span class="line">        <span class="token literal-property property">offsetX</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// x轴偏移量</span></span>
<span class="line">        <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// y轴偏移量</span></span>
<span class="line">        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#30e3ca"</span><span class="token punctuation">,</span> <span class="token comment">// 投影颜色</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 虚线</span></span>
<span class="line">    pencilBrush<span class="token punctuation">.</span>strokeDashArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 帽</span></span>
<span class="line">    pencilBrush<span class="token punctuation">.</span>strokeLineCap <span class="token operator">=</span> <span class="token string">"butt"</span><span class="token punctuation">;</span> <span class="token comment">// "butt" 对接, "round" 圆形, "square" 方形</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 转角</span></span>
<span class="line">    pencilBrush<span class="token punctuation">.</span>strokeLineJoin <span class="token operator">=</span> <span class="token string">"miter"</span> <span class="token comment">// "bevel" 斜面, "round" 圆形, "miter" 斜面</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 倾斜角度，仅适用于 strokeLinejoin = 'miter' 时</span></span>
<span class="line">    pencilBrush<span class="token punctuation">.</span>strokeMiterLimit <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 设置画笔</span></span>
<span class="line">    canvas<span class="token punctuation">.</span>freeDrawingBrush <span class="token operator">=</span> pencilBrush<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 生成路径前</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"before:path:created"</span><span class="token punctuation">,</span> <span class="token parameter">opt</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 生成路径后</span></span>
<span class="line">    canvas<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"path:created"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">opt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>opt<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/60.html" width="650" height="450"></iframe>
<h2 id="_11-3-圆形笔刷" tabindex="-1"><a class="header-anchor" href="#_11-3-圆形笔刷"><span>11.3 圆形笔刷</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 初始化</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">isDrawingMode</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 创建笔刷</span></span>
<span class="line">    <span class="token keyword">let</span> circleBrush <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>CircleBrush</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span>freeDrawingBrush <span class="token operator">=</span> circleBrush<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 设置笔刷宽度</span></span>
<span class="line">    circleBrush<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 设置颜色</span></span>
<span class="line">    circleBrush<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"rgb(10, 230, 120)"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 设置阴影</span></span>
<span class="line">    circleBrush<span class="token punctuation">.</span>shadow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Shadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 羽化程度</span></span>
<span class="line">        <span class="token literal-property property">offsetX</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// x轴偏移量</span></span>
<span class="line">        <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// y轴偏移量</span></span>
<span class="line">        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#30e3ca"</span><span class="token punctuation">,</span> <span class="token comment">// 投影颜色</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 其他属性可以有，单不适合圆形笔刷  </span></span>
<span class="line">    <span class="token comment">// strokeDashArray 虚线 </span></span>
<span class="line">    <span class="token comment">// strokeLineCap 笔刷的线尾样式</span></span>
<span class="line">    <span class="token comment">// strokeLineJoin 笔刷的角样式</span></span>
<span class="line">    <span class="token comment">// strokeMiterLimit 笔刷的最大斜接长度（用于strokeLineJoin = “斜接”）</span></span>
<span class="line">    <span class="token comment">// points 不知道什么用处</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/61.html" width="650" height="450"></iframe>
<h2 id="_11-4-喷雾笔刷" tabindex="-1"><a class="header-anchor" href="#_11-4-喷雾笔刷"><span>11.4 喷雾笔刷</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 初始化</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">isDrawingMode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> sprayBrush <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>SprayBrush</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    canvas<span class="token punctuation">.</span>freeDrawingBrush <span class="token operator">=</span> sprayBrush<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 喷雾画笔颜色</span></span>
<span class="line">    sprayBrush<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"pink"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 喷雾画笔颜色</span></span>
<span class="line">    sprayBrush<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 喷雾密度（每块的点数）</span></span>
<span class="line">    sprayBrush<span class="token punctuation">.</span>density <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 喷点宽度 与density保持一致最好</span></span>
<span class="line">    sprayBrush<span class="token punctuation">.</span>dotWidth <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 喷点宽度变化</span></span>
<span class="line">    sprayBrush<span class="token punctuation">.</span>dotWidthVariance <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 画板范围</span></span>
<span class="line">    sprayBrush<span class="token punctuation">.</span>limitedToCanvasSize <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 是否应该删除重叠的点（矩形）（出于性能原因）</span></span>
<span class="line">    sprayBrush<span class="token punctuation">.</span>optimizeOverlapping <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 点的不透明度是否应该随机</span></span>
<span class="line">    sprayBrush<span class="token punctuation">.</span>randomOpacity <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 阴影</span></span>
<span class="line">    sprayBrush<span class="token punctuation">.</span>shadow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Shadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">offsetX</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#30e3ca"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 省略 </span></span>
<span class="line">    <span class="token comment">// strokeDashArray 虚线 </span></span>
<span class="line">    <span class="token comment">// strokeLineCap 笔刷的线尾样式</span></span>
<span class="line">    <span class="token comment">// strokeLineJoin 笔刷的角样式</span></span>
<span class="line">    <span class="token comment">// strokeMiterLimit 笔刷的最大斜接长度（用于strokeLineJoin = “斜接”）</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/62.html" width="650" height="450"></iframe>
<h2 id="_11-5-图案笔刷" tabindex="-1"><a class="header-anchor" href="#_11-5-图案笔刷"><span>11.5 图案笔刷</span></a></h2>
<h3 id="_11-5-1-基础使用" tabindex="-1"><a class="header-anchor" href="#_11-5-1-基础使用"><span>11.5.1 基础使用</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 初始化</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">isDrawingMode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"./assest/005.png"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 图案画笔</span></span>
<span class="line">        <span class="token keyword">let</span> texturePatternBrush <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>PatternBrush</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 资源</span></span>
<span class="line">        texturePatternBrush<span class="token punctuation">.</span>source <span class="token operator">=</span> img<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 画笔宽度</span></span>
<span class="line">        texturePatternBrush<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 丢弃距离小于 decimate 像素的点</span></span>
<span class="line">        texturePatternBrush<span class="token punctuation">.</span>decimate <span class="token operator">=</span> <span class="token string">"0.4"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 点击shift 在两点之间画直线 </span></span>
<span class="line">        texturePatternBrush<span class="token punctuation">.</span>drawStraightLine <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 使画笔绘制直线的事件修饰符键。 drawStraightLine必须设置为true 起作用</span></span>
<span class="line">        <span class="token comment">// undefined | null | "altKey" | "ctrlKey" | "metaKey" | "shiftKey" </span></span>
<span class="line">        texturePatternBrush<span class="token punctuation">.</span>straightLineKey <span class="token operator">=</span> <span class="token keyword">undefined</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 自由绘制仅限于白板大小</span></span>
<span class="line">        texturePatternBrush<span class="token punctuation">.</span>limitedToCanvasSize <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">// 画笔的颜色(source 为空时起作用)</span></span>
<span class="line">        texturePatternBrush<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"pink"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 画笔的阴影(作用域空白，不作用于图案)</span></span>
<span class="line">        texturePatternBrush<span class="token punctuation">.</span>shadow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Shadow</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">blur</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">offsetX</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">offsetY</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#30e3ca"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 省略 </span></span>
<span class="line">        <span class="token comment">// strokeDashArray 虚线 </span></span>
<span class="line">        <span class="token comment">// strokeLineCap 笔刷的线尾样式</span></span>
<span class="line">        <span class="token comment">// strokeLineJoin 笔刷的角样式</span></span>
<span class="line">        <span class="token comment">// strokeMiterLimit 笔刷的最大斜接长度（用于strokeLineJoin = “斜接”）</span></span>
<span class="line"></span>
<span class="line">        canvas<span class="token punctuation">.</span>freeDrawingBrush <span class="token operator">=</span> texturePatternBrush<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/63.html" width="650" height="450"></iframe>
<h3 id="_11-5-2-类似刮刮乐" tabindex="-1"><a class="header-anchor" href="#_11-5-2-类似刮刮乐"><span>11.5.2 类似刮刮乐</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token comment">// 引入文件</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> fabric <span class="token keyword">from</span> <span class="token string">"../index.min.mjs"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 初始化</span></span>
<span class="line">    <span class="token keyword">const</span> canvas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>Canvas</span><span class="token punctuation">(</span><span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">isDrawingMode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"./assest/001.jpg"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    img<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 将图片设置到canvas上</span></span>
<span class="line">        <span class="token keyword">let</span> canvas2 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        canvas2<span class="token punctuation">.</span>height <span class="token operator">=</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">;</span></span>
<span class="line">        canvas2<span class="token punctuation">.</span>width <span class="token operator">=</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> ctx2 <span class="token operator">=</span> canvas2<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        ctx2<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>canvas2<span class="token punctuation">.</span>width<span class="token punctuation">,</span>canvas2<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 图案画笔</span></span>
<span class="line">        <span class="token keyword">let</span> texturePatternBrush <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">fabric<span class="token punctuation">.</span>PatternBrush</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        texturePatternBrush<span class="token punctuation">.</span>source <span class="token operator">=</span> canvas2<span class="token punctuation">;</span></span>
<span class="line">        texturePatternBrush<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span></span>
<span class="line">        canvas<span class="token punctuation">.</span>freeDrawingBrush <span class="token operator">=</span> texturePatternBrush<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>示例</li>
</ul>
<iframe src="/note-front/animation/fabric/html/64.html" width="350" height="450"></iframe>
</div></template>


