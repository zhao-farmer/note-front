<template><div><h1 id="四、文本操作" tabindex="-1"><a class="header-anchor" href="#四、文本操作"><span>四、文本操作</span></a></h1>
<h2 id="_4-1-文本操作简介" tabindex="-1"><a class="header-anchor" href="#_4-1-文本操作简介"><span>4.1 文本操作简介</span></a></h2>
<table>
<thead>
<tr>
<th>方法</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>fillText()</td>
<td>绘制填充文本</td>
</tr>
<tr>
<td>strokeText()</td>
<td>绘制描边文本</td>
</tr>
<tr>
<td>measureText()</td>
<td>获取文本长度</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>font</td>
<td>定义文本字体样式（大小、粗细等）</td>
</tr>
<tr>
<td>textAlign</td>
<td>定义文本水平对齐方式</td>
</tr>
<tr>
<td>textBaseline</td>
<td>定义文本垂直对齐方式</td>
</tr>
<tr>
<td>fillStyle</td>
<td>定义画笔填充路径的样式</td>
</tr>
<tr>
<td>strokeStyle</td>
<td>定义画笔描边路径的样式</td>
</tr>
</tbody>
</table>
<h2 id="_4-2-文本操作方法" tabindex="-1"><a class="header-anchor" href="#_4-2-文本操作方法"><span>4.2 文本操作方法</span></a></h2>
<p>strokeText()、fillText()、measureText() 。</p>
<h3 id="_4-2-1-stroketext-方法" tabindex="-1"><a class="header-anchor" href="#_4-2-1-stroketext-方法"><span>4.2.1 strokeText()方法</span></a></h3>
<p>绘制描边文本，空心文本。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">strokeText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> maxWidth<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>x，y表示文本最左边和最下边的坐标。<br>
maxWidth，可选参数，最大文本宽度（px），超出时，文本会被压缩至maxWidth。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">var</span> c1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> ctx <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token string">"我爱学习！我爱学习！"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"bold 30px 微软雅黑"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">"purple"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">strokeText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">strokeText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>canvas 图</li>
</ul>
<img src="/animation/canvas/base/image/046.png" style="border:1px solid black">
<h3 id="_4-3-2-filltext-方法" tabindex="-1"><a class="header-anchor" href="#_4-3-2-filltext-方法"><span>4.3.2 fillText()方法</span></a></h3>
<p>绘制填充文本，实心文本。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> maxWidth<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">var</span> c1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> ctx <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token string">"我爱学习！我爱学习！"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"bold 30px 微软雅黑"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"purple"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>canvas 图</li>
</ul>
<img src="/animation/canvas/base/image/047.png" style="border:1px solid black">
<h3 id="_5-2-3-measuretext-方法" tabindex="-1"><a class="header-anchor" href="#_5-2-3-measuretext-方法"><span>5.2.3 measureText()方法</span></a></h3>
<ol>
<li>使用属性获取值</li>
</ol>
<ul>
<li>文本宽度</li>
</ul>
<p>返回一个对象，该对象width属性获取文本长度。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> length <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">measureText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>获取文本高度</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> metrics <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">measureText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line"><span class="token comment">//所有字在这个字体下的高度</span></span>
<span class="line"><span class="token keyword">let</span> fontHeight <span class="token operator">=</span> metrics<span class="token punctuation">.</span>fontBoundingBoxAscent <span class="token operator">+</span> metrics<span class="token punctuation">.</span>fontBoundingBoxDescent<span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line"><span class="token comment">// 当前文本字符串在这个字体下用的实际高度</span></span>
<span class="line"><span class="token keyword">let</span> actualHeight <span class="token operator">=</span> metrics<span class="token punctuation">.</span>actualBoundingBoxAscent <span class="token operator">+</span> metrics<span class="token punctuation">.</span>actualBoundingBoxDescent<span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>案例-文本长度</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">var</span> c1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> ctx <span class="token operator">=</span> c1<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token string">"我爱学习！我爱学习！"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"bold 30px 微软雅黑"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">"red"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">strokeText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">var</span> length <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">measureText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"文本宽度："</span><span class="token operator">+</span>length<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">       </span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>canvas 图</li>
</ul>
<img src="/animation/canvas/base/image/048.png" style="border:1px solid black">
<ol start="3">
<li>文本水平居中</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token string">"我爱学习！我爱学习！"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"40px bold"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">var</span> textWidth <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">measureText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> canvasWidth <span class="token operator">=</span> canvas<span class="token punctuation">.</span>width<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> xPosition <span class="token operator">=</span> canvasWidth <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">-</span> textWidth <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"purple"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> xPosition<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">       </span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>canvas 图</li>
</ul>
<img src="/animation/canvas/base/image/049.png" style="border:1px solid black">
<h2 id="_4-3-文本操作属性" tabindex="-1"><a class="header-anchor" href="#_4-3-文本操作属性"><span>4.3 文本操作属性</span></a></h2>
<p>font、textAlign、textBaseline。</p>
<h3 id="_4-3-1-font属性" tabindex="-1"><a class="header-anchor" href="#_4-3-1-font属性"><span>4.3.1 font属性</span></a></h3>
<p>定义文本的字体样式</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"font-style font-weight font-size/line-height font-family"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>font默认值为10px sans-serif。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token keyword">var</span> text <span class="token operator">=</span> <span class="token string">"我爱学习！我爱学习！"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"italic small-caps bold 32px arial"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token string">"purple"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>canvas 图</li>
</ul>
<img src="/animation/canvas/base/image/050.png" style="border:1px solid black">
<h3 id="_4-3-2-textalign属性" tabindex="-1"><a class="header-anchor" href="#_4-3-2-textalign属性"><span>4.3.2 textAlign属性</span></a></h3>
<p>定义文本水平方向的对齐方式</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">"属性值"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>属性值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>start</td>
<td>文本在指定横坐标开始</td>
</tr>
<tr>
<td>end</td>
<td>文本在指定横坐标结束</td>
</tr>
<tr>
<td>left</td>
<td>文本左对齐（类似start）</td>
</tr>
<tr>
<td>rightt</td>
<td>文本右对齐（类似end）</td>
</tr>
<tr>
<td>center</td>
<td>文本中心在指定横坐标</td>
</tr>
</tbody>
</table>
<p>start和end与文字阅读方向有关，从左到右阅读，start、end分别对应左右；从右到左阅读，start、end分别对应右左。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">//在横坐标150处绘制一条竖线</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">"purple"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"15px Arial"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">"start"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"textAlign取值为start"</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">"left"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"textAlign取值为left"</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">"end"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"textAlign取值为end"</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">"right"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"textAlign取值为right"</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        ctx<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">"center"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"textAlign取值为center"</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>canvas 图</li>
</ul>
<img src="/animation/canvas/base/image/051.png" style="border:1px solid black">
<h3 id="_4-3-3-textbaseline属性" tabindex="-1"><a class="header-anchor" href="#_4-3-3-textbaseline属性"><span>4.3.3 textBaseline属性</span></a></h3>
<p>定义文本垂直方向的对齐方式。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">ctx<span class="token punctuation">.</span>textBaseline<span class="token operator">=</span> <span class="token string">"属性值"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>属性值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>alphabetic</td>
<td>文本基线是普通英文字母的基线</td>
</tr>
<tr>
<td>top</td>
<td>文本基线是em方框的顶端</td>
</tr>
<tr>
<td>middle</td>
<td>文本基线是em方框的中心</td>
</tr>
<tr>
<td>bottom</td>
<td>文本基线是em方框的底端</td>
</tr>
</tbody>
</table>
<p>其他属性hanging、ideographic等。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>canvas</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>canvas<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>canvas</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">'2d'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">//在纵坐标100处绘制一条横线</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">lineTo</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span>strokeStyle <span class="token operator">=</span> <span class="token string">"purple"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        ctx<span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token string">"20px Arial"</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">"alphabetic"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"alphabetic"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">"top"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"top"</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">"middle"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"middle"</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        ctx<span class="token punctuation">.</span>textBaseline <span class="token operator">=</span> <span class="token string">"bottom"</span><span class="token punctuation">;</span></span>
<span class="line">        ctx<span class="token punctuation">.</span><span class="token function">fillText</span><span class="token punctuation">(</span><span class="token string">"bottom"</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>canvas 图</li>
</ul>
<img src="/animation/canvas/base/image/052.png" style="border:1px solid black">
</div></template>


