<template><div><h1 id="一、-事件操作" tabindex="-1"><a class="header-anchor" href="#一、-事件操作"><span>一、 事件操作</span></a></h1>
<p>在Canvas开发中，常见的事件有三种：鼠标事件、键盘事件、循环事件，有了这些事件，我们便可以开发出交互性更强的动画</p>
<h2 id="_1-1-鼠标事件" tabindex="-1"><a class="header-anchor" href="#_1-1-鼠标事件"><span>1.1 鼠标事件</span></a></h2>
<ol>
<li>事件类型</li>
</ol>
<p>鼠标事件分为3种：</p>
<ul>
<li>鼠标按下 mousedown</li>
<li>鼠标松开 mouseup</li>
<li>鼠标移动 mousemove</li>
</ul>
<p>拖动效果实现，mousedown判断选中图形或元素，mousemove拖动选中图形或元素，mouseup停止拖动。</p>
<ol start="2">
<li>获取鼠标指针位置</li>
</ol>
<p>我们可以通过 pageX与pageY这两个属性来确定鼠标指针当前位置，然后再结合画布相对于文档的偏移距离，我们就可以确定鼠标在画布中的相对坐标。</p>
<ul>
<li>
<p>pageX，pageY与clientX，clientY。</p>
<p>鼠标指针当前位置属性。</p>
</li>
<li>
<p>element.offsetLeft，element.offsetTop。</p>
<p>元素的偏移位置。</p>
</li>
<li>
<p>获取鼠标位置函数</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//获取鼠标当前位置（相对坐标）</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getMouse</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> mouse <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mousemove"</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> e <span class="token operator">=</span> e <span class="token operator">||</span> window<span class="token punctuation">.</span>event<span class="token punctuation">;</span><span class="token comment">//IE中，event对象是window的一个属性</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>pageX <span class="token operator">||</span> e<span class="token punctuation">.</span>pageY<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//兼容Firefox、chrome、IE9及以上</span></span>
<span class="line">            x <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span></span>
<span class="line">            y <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//兼容混杂模式下safari、chrome，IE8及以下</span></span>
<span class="line">            x <span class="token operator">=</span> e<span class="token punctuation">.</span>clientX <span class="token operator">+</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollLeft <span class="token operator">+</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollLeft<span class="token punctuation">;</span></span>
<span class="line">            y <span class="token operator">=</span> e<span class="token punctuation">.</span>clientY <span class="token operator">+</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">+</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">		<span class="token comment">//减去canvas偏移，获取canvas中相对坐标值</span></span>
<span class="line">        x <span class="token operator">-=</span> element<span class="token punctuation">.</span>offsetLeft<span class="token punctuation">;</span></span>
<span class="line">        y <span class="token operator">-=</span> element<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        mouse<span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span></span>
<span class="line">        mouse<span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> mouse<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>代码实操</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">canvas</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCanvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>鼠标移动坐标为:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>鼠标按下坐标为:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>鼠标松开坐标为:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>鼠标拖拽坐标为:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token comment">// 定义鼠标位置计算函数，我们一般命名到一个js模块中导入使用</span></span>
<span class="line">            <span class="token keyword">const</span> <span class="token function-variable function">getMouse</span> <span class="token operator">=</span> <span class="token parameter">element</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">let</span> mouse <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 存储鼠标位置信息</span></span>
<span class="line">                element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mousemove"</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">let</span> x <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">let</span> y <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token comment">// 计算鼠标在canvas画布中的相对位置</span></span>
<span class="line">                    mouse<span class="token punctuation">.</span>x <span class="token operator">=</span> x <span class="token operator">-</span> element<span class="token punctuation">.</span>offsetLeft<span class="token punctuation">;</span></span>
<span class="line">                    mouse<span class="token punctuation">.</span>y <span class="token operator">=</span> y <span class="token operator">-</span> element<span class="token punctuation">.</span>offsetTop<span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">return</span> mouse<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// canvas对象 与目标对象</span></span>
<span class="line">            <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myCanvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> mouse <span class="token operator">=</span> <span class="token function">getMouse</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 拖拽状态</span></span>
<span class="line">            <span class="token keyword">let</span> isDragging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> startX<span class="token punctuation">,</span> startY<span class="token punctuation">,</span> offsetX<span class="token punctuation">,</span> offsetY<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> rect <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 清理原图并画新图</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                ctx<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span>rect<span class="token punctuation">.</span>x<span class="token punctuation">,</span> rect<span class="token punctuation">.</span>y<span class="token punctuation">,</span> rect<span class="token punctuation">.</span>width<span class="token punctuation">,</span> rect<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                text4<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">图形拖拽坐标为:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rect<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>rect<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            </span>
<span class="line">            <span class="token comment">// 默认画出拖拽目标</span></span>
<span class="line">            <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            </span>
<span class="line">            <span class="token comment">// 鼠标移动 mousemove</span></span>
<span class="line">            canvas<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mousemove"</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                text1<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">鼠标移动坐标为:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mouse<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mouse<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>isDragging<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">var</span> x <span class="token operator">=</span> event<span class="token punctuation">.</span>offsetX<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">var</span> y <span class="token operator">=</span> event<span class="token punctuation">.</span>offsetY<span class="token punctuation">;</span></span>
<span class="line">                    rect<span class="token punctuation">.</span>x <span class="token operator">=</span> x <span class="token operator">+</span> offsetX<span class="token punctuation">;</span></span>
<span class="line">                    rect<span class="token punctuation">.</span>y <span class="token operator">=</span> y <span class="token operator">+</span> offsetY<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 鼠标按下 mousedown</span></span>
<span class="line">            canvas<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mousedown"</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                text2<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">鼠标按下坐标为:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mouse<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mouse<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">var</span> x <span class="token operator">=</span> event<span class="token punctuation">.</span>offsetX<span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">var</span> y <span class="token operator">=</span> event<span class="token punctuation">.</span>offsetY<span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">>=</span> rect<span class="token punctuation">.</span>x <span class="token operator">&amp;&amp;</span> x <span class="token operator">&lt;=</span> rect<span class="token punctuation">.</span>x <span class="token operator">+</span> rect<span class="token punctuation">.</span>width <span class="token operator">&amp;&amp;</span> y <span class="token operator">>=</span> rect<span class="token punctuation">.</span>y <span class="token operator">&amp;&amp;</span> y <span class="token operator">&lt;=</span> rect<span class="token punctuation">.</span>y <span class="token operator">+</span> rect<span class="token punctuation">.</span>height<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    isDragging <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">                    startX <span class="token operator">=</span> x<span class="token punctuation">;</span></span>
<span class="line">                    startY <span class="token operator">=</span> y<span class="token punctuation">;</span></span>
<span class="line">                    offsetX <span class="token operator">=</span> rect<span class="token punctuation">.</span>x <span class="token operator">-</span> startX<span class="token punctuation">;</span></span>
<span class="line">                    offsetY <span class="token operator">=</span> rect<span class="token punctuation">.</span>y <span class="token operator">-</span> startY<span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 鼠标松开 mouseup</span></span>
<span class="line">            canvas<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"mouseup"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                text3<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">鼠标松开坐标为:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mouse<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>mouse<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">                isDragging <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>canvas操作示例</li>
</ul>
<iframe src="/note-front/animation/canvas/senior/html/01.html" width="650" height="350"></iframe>
<h2 id="_1-2-键盘事件" tabindex="-1"><a class="header-anchor" href="#_1-2-键盘事件"><span>1.2 键盘事件</span></a></h2>
<ol>
<li>事件类型</li>
</ol>
<p>在Canvas开发中，常用的键盘事件有两个：</p>
<ul>
<li>键盘按下 keydown</li>
<li>键盘松开 keyup</li>
</ul>
<p>因为Canvas本身无法绑定键盘事件，所以实际开发中我们是监听window键盘事件来实现的。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//type为字符串类型，指的是事件类型。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>type，事件类型</li>
<li>fn，事件处理函数</li>
<li>false（默认可省略），false：冒泡，从里到外，true：捕获，从外到里。</li>
</ul>
<ol start="2">
<li>判断按键</li>
</ol>
<p>在javaScript中，我们使用keyCode来判断用户按下了哪个键，在这里我们只列出Canvas开发中常用的几个keyCode。</p>
<table>
<thead>
<tr>
<th>按键</th>
<th>keyCode</th>
</tr>
</thead>
<tbody>
<tr>
<td>W</td>
<td>87</td>
</tr>
<tr>
<td>S</td>
<td>83</td>
</tr>
<tr>
<td>A</td>
<td>65</td>
</tr>
<tr>
<td>D</td>
<td>68</td>
</tr>
<tr>
<td>↑</td>
<td>38</td>
</tr>
<tr>
<td>↓</td>
<td>40</td>
</tr>
<tr>
<td>←</td>
<td>37</td>
</tr>
<tr>
<td>→</td>
<td>39</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 定义键盘事件</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">getKey</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keydown'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">38</span> <span class="token operator">||</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">87</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            key<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'up'</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">39</span> <span class="token operator">||</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">68</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            key<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'right'</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">40</span> <span class="token operator">||</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">83</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            key<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'down'</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">37</span> <span class="token operator">||</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            key<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'left'</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            key<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> key</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>代码实操</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">canvas</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCanvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token comment">// 获取canvas对象 ctx 对象 </span></span>
<span class="line">            <span class="token keyword">const</span> cnv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myCanvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> cxt <span class="token operator">=</span> cnv<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 绘制小球</span></span>
<span class="line">            <span class="token keyword">const</span> <span class="token function-variable function">drawBall</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> cxt</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                cxt<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                cxt<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">360</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                cxt<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                cxt<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"blue"</span><span class="token punctuation">;</span></span>
<span class="line">                cxt<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token function">drawBall</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> cxt<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            </span>
<span class="line">            <span class="token comment">// 获取按键方向</span></span>
<span class="line">            <span class="token keyword">const</span> <span class="token function-variable function">getKey</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">            window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keydown'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">38</span> <span class="token operator">||</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">87</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    key<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'up'</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">39</span> <span class="token operator">||</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">68</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    key<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'right'</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">40</span> <span class="token operator">||</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">83</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    key<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'down'</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">37</span> <span class="token operator">||</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">65</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    key<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'left'</span></span>
<span class="line">                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                    key<span class="token punctuation">[</span><span class="token string">'direction'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token keyword">return</span> key</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            </span>
<span class="line">            <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"keydown"</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 每次绘制前清空画布</span></span>
<span class="line">                    cxt<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> cnv<span class="token punctuation">.</span>width<span class="token punctuation">,</span> cnv<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                    <span class="token comment">// 根据事件重绘小球</span></span>
<span class="line">                    <span class="token keyword">switch</span> <span class="token punctuation">(</span>key<span class="token punctuation">[</span><span class="token string">"direction"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">case</span> <span class="token string">"up"</span><span class="token operator">:</span></span>
<span class="line">                            y <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">case</span> <span class="token string">"down"</span><span class="token operator">:</span></span>
<span class="line">                            y <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">case</span> <span class="token string">"left"</span><span class="token operator">:</span></span>
<span class="line">                            x <span class="token operator">-=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">case</span> <span class="token string">"right"</span><span class="token operator">:</span></span>
<span class="line">                            x <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">                            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token function">drawBall</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> cxt<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token boolean">false</span></span>
<span class="line">            <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>canvas操作示例</li>
</ul>
<iframe src="/note-front/animation/canvas/senior/html/02.html" width="900" height="250"></iframe>
<h2 id="_1-3-循环事件" tabindex="-1"><a class="header-anchor" href="#_1-3-循环事件"><span>1.3 循环事件</span></a></h2>
<ol>
<li>循环函数</li>
</ol>
<p>setInterval()方法不能准确控制动画的帧率，需手动设置间隔时间。requestAnimationFrame()方法无需手动设置间隔时间，回根据浏览器绘制帧率自动调整。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">frame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">	window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>frame<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//不断调用frame()函数</span></span>
<span class="line">	cxt<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> cnv<span class="token punctuation">.</span>width<span class="token punctuation">,</span> cnv<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//自执行函数frame()</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//动画循环，兼容各大浏览器</span></span>
<span class="line">window<span class="token punctuation">.</span>requestAnimationFrame <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">    window<span class="token punctuation">.</span>webkitRequestAnimationFrame <span class="token operator">||</span></span>
<span class="line">    window<span class="token punctuation">.</span>mozRequestAnimationFrame <span class="token operator">||</span></span>
<span class="line">    window<span class="token punctuation">.</span>msRequestAnimationFrame <span class="token operator">||</span></span>
<span class="line">    window<span class="token punctuation">.</span>oRequestAnimationFrame <span class="token operator">||</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>代码实操</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">canvas</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCanvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myCanvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">let</span> angle <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> amplitude <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span> <span class="token comment">// 振幅，控制曲线的弯曲程度</span></span>
<span class="line">            <span class="token keyword">const</span> frequency <span class="token operator">=</span> <span class="token number">0.02</span><span class="token punctuation">;</span> <span class="token comment">// 频率，控制曲线的周期</span></span>
<span class="line">            <span class="token keyword">const</span> speed <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 速度，控制矩形移动的快慢</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">frame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>frame<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 清除整个画布</span></span>
<span class="line">                ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 计算新位置</span></span>
<span class="line">                <span class="token keyword">const</span> x <span class="token operator">=</span> canvas<span class="token punctuation">.</span>width <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">sin</span><span class="token punctuation">(</span>angle<span class="token punctuation">)</span> <span class="token operator">*</span> amplitude<span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">const</span> y <span class="token operator">=</span> canvas<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">cos</span><span class="token punctuation">(</span>angle<span class="token punctuation">)</span> <span class="token operator">*</span> amplitude<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 绘制圆形</span></span>
<span class="line">                ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                ctx<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>x <span class="token operator">-</span> <span class="token number">25</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">360</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 更新角度以改变矩形的位置</span></span>
<span class="line">                angle <span class="token operator">+=</span> speed<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 当圆形到达边界时，改变方向</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> x <span class="token operator">>=</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    speed <span class="token operator">=</span> <span class="token operator">-</span>speed<span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>canvas操作示例</li>
</ul>
<iframe src="/note-front/animation/canvas/senior/html/03.html" width="900" height="250"></iframe>
<blockquote>
<p>注意：重绘图形前，一定要清空画布！</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">cxt<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


