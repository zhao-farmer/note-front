<template><div><h1 id="二、三角函数" tabindex="-1"><a class="header-anchor" href="#二、三角函数"><span>二、三角函数</span></a></h1>
<h2 id="_2-1-函数定义" tabindex="-1"><a class="header-anchor" href="#_2-1-函数定义"><span>2.1 函数定义</span></a></h2>
<p>简单的定义：所谓三角函数，在几何上来说就是夹角与边的关系！</p>
<p><img src="/animation/canvas/senior/image/001.png" alt=""></p>
<p>在上图中例出了几个常用的三角函数，角度与边（x, y和R）之间的关系如公式所示！那么在canvas中角度与边之间的关系是怎样的呢？首先，我们需要知道的是canvas中坐标是如何定义的。</p>
<p><img src="/animation/canvas/senior/image/002.png" alt=""></p>
<p>如图所示，与普通坐标不同，canvas坐标以整个画布的左上角作为坐标原点，y轴朝下为正，x轴水平向右。坐标不同，对应的角度表示就有所差异，这个差异主要体现在角度的正负上。</p>
<p><img src="/animation/canvas/senior/image/003.png" alt=""></p>
<p>上图中canvas的坐标与普通坐标感觉一样，但我想表达的是在canvas中顺时针方向为正，逆时针为负。</p>
<h2 id="_2-2-常用三角函数" tabindex="-1"><a class="header-anchor" href="#_2-2-常用三角函数"><span>2.2 常用三角函数</span></a></h2>
<p>前面我们简单的介绍了三角函数的表示方法以及canvas的坐标系统。但是，在实际开发中我们不仅想要通过角度来推出两边的距离长度比值。而更关心的是如何通过已知的距离(因为坐标的位置很好确定)来推出角度。这里我们要用到反三角函数</p>
<div class="language-math line-numbers-mode" data-highlighter="prismjs" data-ext="math"><pre v-pre><code><span class="line">sin(θ)=x/R   ---&gt;  θ = arcsin(x/R)</span>
<span class="line">cos(θ)=y/R   ---&gt;  θ = arccos(y/R)</span>
<span class="line">tan(θ)=x/y   ---&gt;  θ = arctan(x/y)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应到javascript中,相应表示方法如下。</p>
<div class="language-math line-numbers-mode" data-highlighter="prismjs" data-ext="math"><pre v-pre><code><span class="line">sin(θ)  ---&gt;  Math.sin( θ * Math.PI/180 )</span>
<span class="line">cos(θ)  ---&gt;  Math.cos( θ * Math.PI/180 )</span>
<span class="line">tan(θ)  ---&gt;  Math.tan( θ * Math.PI/180 )</span>
<span class="line"></span>
<span class="line">θ = arcsin(x/R) ---&gt; Math.asin(x/R)*(180/Math.PI)</span>
<span class="line">θ = arccos(y/R) ---&gt; Math.acos(y/R)*(180/Math.PI)</span>
<span class="line">θ = arctan(x/y) ---&gt; Math.atan(x/y)*(180/Math.PI)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要强调的是：canvas中角度的表示采用的是弧度制。这样你就可以理解 <code v-pre>θ * Math.PI/180</code>是将角度转成弧度，比如：<code v-pre>30° = 30 * π /180 = π / 6</code>。 而将弧度转成角度自然就要用<code v-pre>弧度值</code>`Math.asin(x/R) <code v-pre>乘上</code>180/Math.PI`。</p>
<h2 id="_2-3-使用atan2计算角度" tabindex="-1"><a class="header-anchor" href="#_2-3-使用atan2计算角度"><span>2.3 使用atan2计算角度</span></a></h2>
<ol>
<li>Math.atan2(dy, dx)</li>
</ol>
<p>相比于<code v-pre>Math.asin()</code>和<code v-pre>Math.cos()</code>这两个函数，<code v-pre>Math.atan()</code>在开发中用到的更多。它可以直接通过两个直角边得到对应的角度值。相比于其他两个需要通过计算长边来得到角度值来说，计算过程更加简单！但是，该函数在角度的判定上回出现一个问题——存在两个相同的角度值而无法判定物体具体的旋转角度。详细说明如下图所示。</p>
<p><img src="/animation/canvas/senior/image/004.png" alt=""></p>
<p>因为，tan函数的周期是（-π/2, π/2）,由于这一特性导致电脑是无法判断旋转的到底是哪个角度！！！这时，另一个函数就横空出世了，当当当当，他就是<code v-pre>Math.atan2(dy, dx)</code>!他不仅解决了上面我们说的问题，而且只需要传入横纵坐标距离就可以计算出对应的角度值！</p>
<ol start="2">
<li>跟随鼠标旋转</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> #ccc</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">            <span class="token comment">// 箭头类</span></span>
<span class="line">            <span class="token keyword">class</span> <span class="token class-name">Arrow</span> <span class="token punctuation">{</span></span>
<span class="line">                x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">                y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">                rotation <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">                #color <span class="token operator">=</span> <span class="token string">"#FFFF00"</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> rotation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>rotation <span class="token operator">=</span> rotation<span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token function">draw</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//将坐标移到this.x 和 this.y</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rotation<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//设置旋转角度</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span>lineWidth <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">//设置线宽</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#color<span class="token punctuation">;</span> <span class="token comment">//设置填充色</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//路径开始</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">closePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//路径闭合</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//描边</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//填充</span></span>
<span class="line">                    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//  canvas对象 与 canvas上下文对象</span></span>
<span class="line">            <span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// canvas1</span></span>
<span class="line">            <span class="token keyword">const</span> arrow1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Arrow</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            arrow1<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// canvas2</span></span>
<span class="line">            <span class="token keyword">const</span> arrow2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Arrow</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            arrow2<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">const</span> <span class="token function-variable function">getMouse</span> <span class="token operator">=</span> <span class="token parameter">element</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">let</span> mouse <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span> <span class="token comment">// 存储鼠标位置信息</span></span>
<span class="line">                element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'mousemove'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">let</span> x <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX</span>
<span class="line">                    <span class="token keyword">let</span> y <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY</span>
<span class="line">                    <span class="token comment">// 计算鼠标在canvas画布中的相对位置</span></span>
<span class="line">                    mouse<span class="token punctuation">.</span>x <span class="token operator">=</span> x <span class="token operator">-</span> element<span class="token punctuation">.</span>offsetLeft</span>
<span class="line">                    mouse<span class="token punctuation">.</span>y <span class="token operator">=</span> y <span class="token operator">-</span> element<span class="token punctuation">.</span>offsetTop</span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token keyword">return</span> mouse</span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment">// 获取鼠标指针</span></span>
<span class="line">            <span class="token keyword">const</span> mouse <span class="token operator">=</span> <span class="token function">getMouse</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// ==================== 开始箭头旋转 =======================</span></span>
<span class="line">            <span class="token comment">// 立即执行函数</span></span>
<span class="line">            <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">drawFrame</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">// 请求动画帧 第一个是函数  第二个是对象</span></span>
<span class="line">                window<span class="token punctuation">.</span><span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>drawFrame<span class="token punctuation">,</span> canvas<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 清除画布</span></span>
<span class="line">                ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span> canvas<span class="token punctuation">.</span>height<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 鼠标位置相对于 图形的原点</span></span>
<span class="line">                <span class="token keyword">const</span> dx1 <span class="token operator">=</span> mouse<span class="token punctuation">.</span>x <span class="token operator">-</span> arrow1<span class="token punctuation">.</span>x</span>
<span class="line">                <span class="token keyword">const</span> dy1 <span class="token operator">=</span> mouse<span class="token punctuation">.</span>y <span class="token operator">-</span> arrow1<span class="token punctuation">.</span>y</span>
<span class="line">                <span class="token comment">// 计算鼠标指针与箭头中心的夹角</span></span>
<span class="line">                arrow1<span class="token punctuation">.</span>rotation <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">atan2</span><span class="token punctuation">(</span>dy1<span class="token punctuation">,</span> dx1<span class="token punctuation">)</span></span>
<span class="line">                <span class="token comment">// 重新绘制</span></span>
<span class="line">                arrow1<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 鼠标位置相对于 图形的原点</span></span>
<span class="line">                <span class="token keyword">const</span> dx2 <span class="token operator">=</span> mouse<span class="token punctuation">.</span>x <span class="token operator">-</span> arrow2<span class="token punctuation">.</span>x</span>
<span class="line">                <span class="token keyword">const</span> dy2 <span class="token operator">=</span> mouse<span class="token punctuation">.</span>y <span class="token operator">-</span> arrow2<span class="token punctuation">.</span>y</span>
<span class="line">                <span class="token comment">// 计算鼠标指针与箭头中心的夹角</span></span>
<span class="line">                arrow2<span class="token punctuation">.</span>rotation <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">atan2</span><span class="token punctuation">(</span>dy2<span class="token punctuation">,</span> dx2<span class="token punctuation">)</span></span>
<span class="line">                <span class="token comment">// 重新绘制</span></span>
<span class="line">                arrow2<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>canvas 示例</li>
</ul>
<p>结果就是一个可以跟随鼠标旋转的箭头。</p>
<iframe src="/note-front/animation/canvas/senior/html/04.html" width="650" height="450"></iframe>
<ol start="3">
<li>总结</li>
</ol>
<p>这节你应该学会了如何运用三角函数，控制物体的旋转。重点公式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">dx <span class="token operator">=</span> mouse<span class="token punctuation">.</span>x <span class="token operator">-</span> object<span class="token punctuation">.</span>x<span class="token punctuation">;</span></span>
<span class="line">dy <span class="token operator">=</span> mouse<span class="token punctuation">.</span>y <span class="token operator">-</span> object<span class="token punctuation">.</span>y<span class="token punctuation">;</span></span>
<span class="line">object<span class="token punctuation">.</span>rotation <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">atan2</span><span class="token punctuation">(</span>dy<span class="token punctuation">,</span>dx<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


