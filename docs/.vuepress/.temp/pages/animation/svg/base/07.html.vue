<template><div><h1 id="八、引用元素" tabindex="-1"><a class="header-anchor" href="#八、引用元素"><span>八、引用元素</span></a></h1>
<h2 id="_8-1-use-标签" tabindex="-1"><a class="header-anchor" href="#_8-1-use-标签"><span>8.1 <code v-pre>&lt;use&gt;</code>标签</span></a></h2>
<h3 id="_8-1-1-认识-use-标签" tabindex="-1"><a class="header-anchor" href="#_8-1-1-认识-use-标签"><span>8.1.1 认识<code v-pre>&lt;use&gt;</code>标签</span></a></h3>
<p><code v-pre>&lt;use&gt;</code>元素从SVG文档中获取节点，并在其他地方复制它们。<code v-pre>&lt;use&gt;</code>元素引用了另一个元素，该元素的副本在文档中代替<code v-pre>&lt;use&gt;</code>。引用的元素可以是容器元素，在这种情况下，将使用以该元素为根的完整SVG文档子树的副本。</p>
<ol>
<li>使用说明</li>
</ol>
<p>克隆的内容会继承<code v-pre>&lt;use&gt;</code>元素的样式，并且可以作为用户事件的目标。但是，这些克隆的元素实例仍然链接到引用的源，并反映原始源中的DOM变化。此外，应用于引用元素作用域的所有样式规则也适用于克隆Shadow tree的作用域。</p>
<p>如果解析URL后引用的元素不是SVG元素，那么引用无效；如果引用的元素是<code v-pre>&lt;use&gt;</code>元素的祖先(包含shadow)，那么这是一个无效的循环引用（否则，用户代理必须生成重用图形的阴影树，以呈现为<code v-pre>&lt;use&gt;</code>元素的内容）。这都会使<code v-pre>&lt;use&gt;</code>元素错误。</p>
<p>克隆的节点不会公开，因此在使用CSS 设置<code v-pre>&lt;use&gt;</code>元素及其克隆的后代样式时必须小心。CSS属性不能保证被克隆的DOM继承，除非使用CSS继承显式请求它们。</p>
<p>出于安全原因，浏览器可能会对<code v-pre>&lt;use&gt;</code>元素应用同源策略，并可能拒绝在href属性中加载跨源URL。目前还没有定义为<code v-pre>&lt;use&gt;</code>元素设置跨起源策略的方法。</p>
<ol start="2">
<li>属性</li>
</ol>
<table>
<thead>
<tr>
<th>属性名</th>
<th>值</th>
<th>简介</th>
</tr>
</thead>
<tbody>
<tr>
<td>href</td>
<td>string</td>
<td>需要复制的元素/片段的URL。</td>
</tr>
<tr>
<td>x</td>
<td>坐标</td>
<td>应用于<code v-pre>&lt;use&gt;</code>元素的最终偏移量变换的x坐标。</td>
</tr>
<tr>
<td>y</td>
<td>坐标</td>
<td>应用于<code v-pre>&lt;use&gt;</code>元素的最终偏移量变换的y坐标。</td>
</tr>
<tr>
<td>width</td>
<td>长度</td>
<td><code v-pre>&lt;use&gt;</code>元素的宽度。</td>
</tr>
<tr>
<td>height</td>
<td>长度</td>
<td><code v-pre>&lt;use&gt;</code>元素的高度。</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>width和height对<code v-pre>&lt;use&gt;</code>元素没有影响，除非引用的元素具有viewBox - 即它们仅在<code v-pre>&lt;use&gt;</code>中引用<code v-pre>&lt;svg&gt;</code>或<code v-pre>&lt;symbol&gt;</code>元素时才起作用。</p>
</li>
<li>
<p>在<code v-pre>&lt;use&gt;</code>标签指定与被引用元素中相同的属性时不会生效，结果仍然是被引用元素中的属性为主，没有相同属性时才会以<code v-pre>&lt;use&gt;</code>标签指定的属性为主。</p>
</li>
</ul>
<h3 id="_8-1-2-示例" tabindex="-1"><a class="header-anchor" href="#_8-1-2-示例"><span>8.1.2 示例</span></a></h3>
<ol>
<li>示例：圆形</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 30 10<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>
<svg  width="300" height="200" viewBox="0 0 30 10" >
    <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue" />
    <use href="#myCircle" x="10" fill="blue" />
    <use href="#myCircle" x="20" fill="white" stroke="red" />
</svg>
<p>使用 use 元素绘制一个具有不同填充色和描边色的圆形。在最后一个圆形中，stroke=&quot;red&quot; 将被忽略，因为描边已在 myCircle 上设置</p>
<ol start="2">
<li>示例：星星</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>400<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-400 -300 800 600<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>background: #001122;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 一颗星星 --></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>star<span class="token punctuation">"</span></span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 -10 2 -2 10 0 2 2 0 10 -2 2 -10 0 -2 -2<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inhert<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!--引用出很多星星--></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#star<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-100<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-100<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#star<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#star<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-100<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#star<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-100<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#star<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>
<svg width="600" height="400" viewBox="-400 -300 800 600" style="background: #001122;">
    <!-- 一颗星星 -->
    <polygon id="star" points="0 -10 2 -2 10 0 2 2 0 10 -2 2 -10 0 -2 -2" fill="inhert" />
    <!--引用出很多星星-->
    <use x="0" y="0" xlink:href="#star" fill="red" />
    <use x="-100" y="-100" xlink:href="#star" fill="white" />
    <use x="100" y="100" xlink:href="#star" fill="blue" />
    <use x="-100" y="100" xlink:href="#star" fill="green" />
    <use x="100" y="-100" xlink:href="#star" fill="yellow" />
</svg>
<ol start="3">
<li>浪漫星空</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge,chrome=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>浪漫星空<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>600<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>450<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-400 -300 800 600<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> #001122<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!--一颗星星--></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>star<span class="token punctuation">"</span></span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 -10 2 -2 10 0 2 2 0 10 -2 2 -10 0 -2 -2<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token comment">&lt;!--引用出很多星星--></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>star-group<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">var</span> <span class="token constant">SVG_NS</span> <span class="token operator">=</span> <span class="token string">'http://www.w3.org/2000/svg'</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> <span class="token constant">XLINK_NS</span> <span class="token operator">=</span> <span class="token string">'http://www.w3.org/1999/xlink'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token function">renderStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//创建user标签</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">origin</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">var</span> _use <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElementNS</span><span class="token punctuation">(</span><span class="token constant">SVG_NS</span><span class="token punctuation">,</span><span class="token string">'use'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            _use<span class="token punctuation">.</span><span class="token function">setAttributeNS</span><span class="token punctuation">(</span><span class="token constant">XLINK_NS</span><span class="token punctuation">,</span><span class="token string">'xlink:href'</span><span class="token punctuation">,</span><span class="token string">'#'</span><span class="token operator">+</span>origin<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span> _use<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//创建若干颗星星</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">renderStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">var</span> starRef <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'star'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">var</span> starGroup <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'star-group'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">var</span> starCount <span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">;</span><span class="token comment">//星星数量</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>starGroup<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//方便调试js</span></span>
<span class="line">            <span class="token keyword">var</span> star<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">while</span> <span class="token punctuation">(</span>starCount<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                star <span class="token operator">=</span> <span class="token function">use</span><span class="token punctuation">(</span>starRef<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                star<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'opacity'</span><span class="token punctuation">,</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//随机透明度</span></span>
<span class="line">                star<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">'transform'</span><span class="token punctuation">,</span> <span class="token string">'translate('</span> <span class="token operator">+</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">','</span> <span class="token operator">+</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">') scale('</span> <span class="token operator">+</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.6</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//随机位移/缩放</span></span>
<span class="line">                starGroup<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>star<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//产生随机数字</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">random</span><span class="token punctuation">(</span><span class="token parameter">min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> min <span class="token operator">+</span> <span class="token punctuation">(</span>max <span class="token operator">-</span> min<span class="token punctuation">)</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe src="/note-front/animation/svg/base/html/02.html" width="900" height="600"></iframe>
</div></template>


