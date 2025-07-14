<template><div><h1 id="六、容器元素" tabindex="-1"><a class="header-anchor" href="#六、容器元素"><span>六、容器元素</span></a></h1>
<h2 id="_6-1-a" tabindex="-1"><a class="header-anchor" href="#_6-1-a"><span>6.1 <code v-pre>&lt;a&gt;</code></span></a></h2>
<p><code v-pre>&lt;a&gt;</code>元素<strong>创建指向其他网页、文件、同一页面中的位置、电子邮件地址或任何其他URL的超链接</strong>。与HTML的<code v-pre>&lt;a&gt;</code>类似。</p>
<ol>
<li>使用说明</li>
</ol>
<p><code v-pre>&lt;a&gt;</code>元素可以包含其父元素可能包含的任何元素，但不能包含另一个<code v-pre>&lt;a&gt;</code>元素；相同的元素用于图形和文本链接的内容。链接可能不是嵌套的；如果<code v-pre>&lt;a&gt;</code>元素是另一个超链接元素的后代（无论是在 SVG 命名空间中还是在另一个命名空间中），则用户代理必须忽略其<code v-pre>href</code>属性并将其视为非活动状态。无效的<code v-pre>&lt;a&gt;</code>元素仍然必须呈现为通用容器元素。</p>
<blockquote>
<p>注意：无效嵌套链接的呈现存在风险，并且可能与关于未知元素呈现的任何决策同步。</p>
</blockquote>
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
<td><code v-pre>href</code></td>
<td>string</td>
<td>超链接指向的URL或URL片段。</td>
</tr>
<tr>
<td><code v-pre>hreflang</code></td>
<td>string</td>
<td>超链接指向的URL或URL片段的人类语言。</td>
</tr>
<tr>
<td><code v-pre>rel</code></td>
<td>连接类型</td>
<td>目标对象与链接对象的关系。</td>
</tr>
<tr>
<td><code v-pre>download</code></td>
<td>boolean</td>
<td>指示浏览器下载 URL 而不是导航到它，系统将提示用户将其另存为本地文件。</td>
</tr>
<tr>
<td><code v-pre>type</code></td>
<td>MIME类型</td>
<td>链接网址的 MIME 类型。</td>
</tr>
<tr>
<td><code v-pre>target</code></td>
<td><code v-pre>_self</code>、<code v-pre>_blank</code>、<code v-pre>_parent</code>或<code v-pre>_top</code></td>
<td>在何处显示链接的 URL。</td>
</tr>
<tr>
<td><code v-pre>referrerpolicy</code></td>
<td><code v-pre>no-referrer</code>、<code v-pre>no-referrer-when-downgrade</code>、<code v-pre>same-origin</code>、<code v-pre>origin</code>、<code v-pre>strict-origin</code>、<code v-pre>origin-when-cross-origin</code>、<code v-pre>strict-origin-when-cross-origin</code>或<code v-pre>unsafe-url</code></td>
<td>获取URL时要发送的引荐来源网址。</td>
</tr>
</tbody>
</table>
<ol start="3">
<li>使用</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://developer.mozilla.org/zh-CN/docs/Web/SVG<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>35<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg图</li>
</ul>
<svg width="100" height="100">
    <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG" target="_blank">
        <circle cx="50" cy="40" r="35" />
    </a>
</svg>
<h2 id="_6-2-defs" tabindex="-1"><a class="header-anchor" href="#_6-2-defs"><span>6.2 <code v-pre>&lt;defs&gt;</code></span></a></h2>
<p><code v-pre>&lt;defs&gt;</code>元素用于<strong>存储稍后将使用的图形对象</strong>。在<code v-pre>&lt;defs&gt;</code>元素中创建的对象不会直接呈现。要显示它们，必须先引用它们（通常搭配<code v-pre>&lt;use&gt;</code>元素使用）。</p>
<p><code v-pre>&lt;defs&gt;</code>元素是引用元素的容器元素。图形对象可以从任何地方引用，但是建议尽可能在<code v-pre>&lt;defs&gt;</code>中定义引用的元素，这样可以提高SVG内容的理解性，并有利于文档的整体可访问性。</p>
<p><code v-pre>&lt;defs&gt;</code>的内容模型与<code v-pre>&lt;g&gt;</code>元素的内容模型相同；因此，任何可以是<code v-pre>&lt;g&gt;</code>的子元素也可以是<code v-pre>&lt;defs&gt;</code>的子元素，反之亦然。</p>
<p>-代码</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 储存一个圆 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myCircle<span class="token punctuation">"</span></span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>lightblue<span class="token punctuation">'</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!-- 使用：通过href属性指向以存储元素的id --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#myCircle<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg图</li>
</ul>
<svg width="200" height="200" >
    <defs>
        <circle id="myCircle" cx="100" cy="100" r="50" fill='lightblue' />
    </defs>
    <use x="5" y="5" href="#myCircle" />
</svg>
<h2 id="_6-3-g" tabindex="-1"><a class="header-anchor" href="#_6-3-g"><span>6.3 <code v-pre>&lt;g&gt;</code></span></a></h2>
<p><code v-pre>&lt;g&gt;</code>元素是一个容器元素，用于<strong>将相关图形元素组合在一起</strong>。通常其子元素为图形元素跟其他容器元素。</p>
<p>应用于<code v-pre>&lt;g&gt;</code>元素的属性/转换在它的子元素上执行，它的属性由它的子元素继承。它还可以使用<code v-pre>&lt;use&gt;</code>元素对稍后引用的多个元素进行分组。</p>
<p><code v-pre>&lt;g&gt;</code>元素可以任意深度的嵌套在其他<code v-pre>&lt;g&gt;</code>元素中。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 将两个圆组合在一起，&lt;g>元素身上的属性在其子元素身上起作用 --></span></span>
<span class="line">    <span class="token comment">&lt;!-- 呈现为两个填充颜色和轮廓颜色及宽度相同，但是位置不同的圆 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightblue<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightseagreen<span class="token punctuation">"</span></span> <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>25<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg图</li>
</ul>
<svg width="200" height="200" >
    <g fill="lightblue" stroke="lightseagreen" stroke-width="3">
        <circle cx="40" cy="40" r="25" />
        <circle cx="60" cy="60" r="25" />
    </g>
</svg>
<h2 id="_6-4-marker" tabindex="-1"><a class="header-anchor" href="#_6-4-marker"><span>6.4 <code v-pre>&lt;marker&gt;</code></span></a></h2>
<p><code v-pre>&lt;marker&gt;</code>元素定义了用于在给定的<code v-pre>&lt;path&gt;</code>、<code v-pre>&lt;line&gt;</code>、<code v-pre>&lt;polyline&gt;</code>或<code v-pre>&lt;polygon&gt;</code>元素上绘制箭头或多边形标记的图形。</p>
<ol>
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
<td><code v-pre>markerHeight</code></td>
<td>长度</td>
<td>定义标记视口的高度。</td>
</tr>
<tr>
<td><code v-pre>markerWidth</code></td>
<td>长度</td>
<td>定义标记视口的宽度。</td>
</tr>
<tr>
<td><code v-pre>markerUnits</code></td>
<td><code v-pre>userSpaceOnUse</code>/<code v-pre>strokeWidth</code>（默认值）</td>
<td>定义属性<code v-pre>markerWidth</code>、<code v-pre>markerHeight</code>和<code v-pre>&lt;marker&gt;</code>内容的坐标系。</td>
</tr>
<tr>
<td>orient</td>
<td><code v-pre>auto</code>/<code v-pre>auto-start-reverse</code>/角度</td>
<td>定义标记相对于其附加到的形状的方向。</td>
</tr>
<tr>
<td><code v-pre>preserveAspectRatio</code></td>
<td>(<code v-pre>none</code>、<code v-pre>xMinYMinxMidYMin</code>、<code v-pre>xMaxYMin</code>、<code v-pre>xMinYMid</code>、<code v-pre>xMidYMid</code>、<code v-pre>xMaxYMid</code>、<code v-pre>xMinYMax</code>、<code v-pre>xMidYMax</code>、<code v-pre>xMaxYMax</code>)  <br>[(<code v-pre>meet</code>、<code v-pre>slice</code>)]</td>
<td>如果svg片段嵌入到具有不同纵横比的容器中，则必须如何变形。</td>
</tr>
<tr>
<td><code v-pre>refX</code></td>
<td><code v-pre>left</code>/<code v-pre>center</code>/<code v-pre>right</code>/<code v-pre>坐标</code></td>
<td>定义标记参考点的x坐标。</td>
</tr>
<tr>
<td><code v-pre>refY</code></td>
<td><code v-pre>left</code>/<code v-pre>center</code>/<code v-pre>right</code>/<code v-pre>坐标</code></td>
<td>定义标记参考点的y坐标。</td>
</tr>
<tr>
<td><code v-pre>viewBox</code></td>
<td><code v-pre>min-x min-y weight height</code></td>
<td>定义当前SVG片段的SVG视区边界。</td>
</tr>
</tbody>
</table>
<ol start="2">
<li>示例</li>
</ol>
<p>-代码</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--对于包含封闭子路径的路径数据，在每个封闭子路径的第一个/最后一个顶点绘制两个标记  --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span>  <span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marker</span></span>
<span class="line">            <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dot<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 10 10<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">refX</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">refY</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">markerWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">markerHeight</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marker</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polyline</span></span>
<span class="line">        <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>15,80 29,50 43,60 57,30 71,40 85,15<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">marker-start</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#dot)<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">marker-mid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#dot)<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">marker-end</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#dot)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg width="200" height="200"  >
    <defs>
    <marker
        id="dot"
        viewBox="0 0 10 10"
        refX="5"
        refY="5"
        markerWidth="5"
        markerHeight="5">
        <circle cx="5" cy="5" r="5" fill="red" />
    </marker>
    </defs>
    <polyline
        points="15,80 29,50 43,60 57,30 71,40 85,15"
        fill="none"
        stroke="grey"
        marker-start="url(#dot)"
        marker-mid="url(#dot)"
        marker-end="url(#dot)" />
</svg>
<ol start="3">
<li>marker相关属性</li>
</ol>
<p><code v-pre>marker-start</code>、<code v-pre>marker-end</code>和<code v-pre>marker-mid</code>属性分别用于定义路径或者线段起始、结束和中间所有<strong>顶点</strong>的标记。</p>
<p><strong>注意：对于除了<code v-pre>&lt;polyline&gt;</code>和<code v-pre>&lt;path&gt;</code>的其他元素，如果<code v-pre>marker-start</code>和<code v-pre>marker-end</code>属性的值不为<code v-pre>none</code>，那么在最后一个顶点处会渲染两个标记。</strong></p>
<p>这三个属性都接受一个marker引用，通常是<code v-pre>&lt;marker&gt;</code>元素的<code v-pre>id</code>，通过<code v-pre>url()</code>函数引用<code v-pre>&lt;marker&gt;</code>。</p>
<h2 id="_6-5-switch" tabindex="-1"><a class="header-anchor" href="#_6-5-switch"><span>6.5 <code v-pre>&lt;switch&gt;</code></span></a></h2>
<p><code v-pre>&lt;switch&gt;</code>元素按顺序计算其直接子元素上的任何必需<code v-pre>requiredFeatures</code>（不再建议使用）和<code v-pre>systemLanguage</code>属性，然后呈现这些属性计算结果为<code v-pre>true</code>的第一个子元素。</p>
<p>其他直接子项将被绕过，不会被呈现。如果子元素是容器元素（如<code v-pre>&lt;g&gt;</code>），则其子树也会被处理/呈现或绕过/不呈现。</p>
<blockquote>
<p>注意：</p>
<ol>
<li>CSS<code v-pre>display</code>和<code v-pre>visibility</code>属性对<code v-pre>&lt;switch&gt;</code>元素处理没有影响。特别是在子项上设置 <code v-pre>display:none</code>对<code v-pre>&lt;switch&gt;</code>处理的真/假测试没有影响。</li>
<li><code v-pre>&lt;switch&gt;</code>元素不影响<code v-pre>&lt;script&gt;</code>和<code v-pre>&lt;style&gt;</code>元素的处理。</li>
</ol>
</blockquote>
<ul>
<li>代码</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 显示其 systemLanguage 属性与用户语言匹配的第一个子元素 --></span></span>
<span class="line"><span class="token comment">&lt;!--</span>
<span class="line">    当浏览器的语言设置为中文时显示浅粉色矩形，英文则显示浅蓝色圆形，</span>
<span class="line">    如果既不是中文或英文，则显示紫色三角形</span>
<span class="line">--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>switch</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightpink<span class="token punctuation">"</span></span> <span class="token attr-name">systemLanguage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zh<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightblue<span class="token punctuation">"</span></span> <span class="token attr-name">systemLanguage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100, 0 200, 100 0, 100<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>purple<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>switch</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg width="200" height="200">
    <switch>
        <rect width="100" height="100" fill="lightpink" systemLanguage="zh" />
        <circle cx="50" cy="50" r="50" fill="lightblue" systemLanguage="en" />
        <polygon points="100, 0 200, 100 0, 100" fill="purple" />
    </switch>
</svg>
<h2 id="_6-6-symbol" tabindex="-1"><a class="header-anchor" href="#_6-6-symbol"><span>6.6 <code v-pre>&lt;symbol&gt;</code></span></a></h2>
<p><code v-pre>&lt;symbol&gt;</code>元素用于<strong>定义图形模板</strong>，这些模板可以由<code v-pre>&lt;use&gt;</code>元素实例化，但不直接呈现。</p>
<p><code v-pre>&lt;symbol&gt;</code>元素<strong>绝不能直接渲染</strong>。它们的唯一用途是可以通过<code v-pre>&lt;use&gt;</code>元素引用。用户代理必须将<code v-pre>&lt;symbol&gt;</code>元素上的<code v-pre>display</code>属性设置为<code v-pre>none</code>，作为用户代理样式表的一部分，并且此声明必须比任何其他CSS规则或表示属性重要。</p>
<p>生成的<code v-pre>&lt;symbol&gt;</code>实例是<code v-pre>&lt;use&gt;</code>元素的直接引用元素，它必须总是有一个内联的<code v-pre>display</code>属性的计算值。即当宿主<code v-pre>&lt;use&gt;</code>元素被呈现时，它必须被呈现。用户代理样式表再次定义了这个声明，使其重要性高于任何其他CSS规则或表示属性。</p>
<p>对在同一文档中多次使用的图形使用<code v-pre>&lt;symbol&gt;</code>元素可增加结构和语义。结构丰富的文档可以以图形方式呈现为语音或盲文，从而提高可访问性。</p>
<ol>
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
<td><code v-pre>height</code></td>
<td>长度/百分比/<code v-pre>auto</code>（默认值）</td>
<td>定义<code v-pre>&lt;symbol&gt;</code>的高度。</td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td>长度/百分比/<code v-pre>auto</code>（默认值）</td>
<td>定义<code v-pre>&lt;symbol&gt;</code>的宽度。</td>
</tr>
<tr>
<td><code v-pre>preserveAspectRatio</code></td>
<td>(<code v-pre>none</code>、<code v-pre>xMinYMinxMidYMin</code>、<code v-pre>xMaxYMin</code>、<code v-pre>xMinYMid</code>、<code v-pre>xMidYMid</code>、<code v-pre>xMaxYMid</code>、<code v-pre>xMinYMax</code>、<code v-pre>xMidYMax</code>、<code v-pre>xMaxYMax</code>)  <br>[(<code v-pre>meet</code>、<code v-pre>slice</code>)]</td>
<td>如果svg片段嵌入到具有不同纵横比的容器中，则必须如何变形。</td>
</tr>
<tr>
<td><code v-pre>viewBox</code></td>
<td>以空格分隔的数字列表</td>
<td>定义当前<code v-pre>&lt;symbol&gt;</code>的SVG视口的边界。</td>
</tr>
<tr>
<td><code v-pre>refX</code></td>
<td>长度/百分比/<code v-pre>left</code>/<code v-pre>center</code>/<code v-pre>right</code></td>
<td>定义<code v-pre>&lt;symbol&gt;</code>参考点的x坐标。</td>
</tr>
<tr>
<td><code v-pre>refY</code></td>
<td>长度/百分比/<code v-pre>left</code>/<code v-pre>center</code>/<code v-pre>right</code></td>
<td>定义<code v-pre>&lt;symbol&gt;</code>参考点的y坐标。</td>
</tr>
<tr>
<td><code v-pre>x</code></td>
<td>长度/百分比</td>
<td>定义<code v-pre>&lt;symbol&gt;</code>的x坐标。</td>
</tr>
<tr>
<td><code v-pre>y</code></td>
<td>长度/百分比</td>
<td>定义<code v-pre>&lt;symbol&gt;</code>的y坐标。</td>
</tr>
</tbody>
</table>
<p>注意：如果<code v-pre>width</code>和<code v-pre>height</code>属性值为<code v-pre>auto</code>）并且没有被实例化的<code v-pre>&lt;use&gt;</code>元素上的值覆盖），那么它们的值将被视为<code v-pre>100%</code>。</p>
<ol start="2">
<li>示例</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 100 20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- &lt;symbol>在它自己的坐标系中 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>symbol</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myDot<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 2 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightblue<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>symbol</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!-- 实例化&lt;symbol> --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#myDot<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity:1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#myDot<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity:0.8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#myDot<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>35<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity:0.6<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#myDot<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity:0.4<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#myDot<span class="token punctuation">"</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>65<span class="token punctuation">"</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity:0.2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg width="500" height="100" viewBox="0 0 100 20">
    <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
        <circle cx="1" cy="1" r="1" fill="lightblue" />
    </symbol>
    <use href="#myDot" x="5" y="5" style="opacity:1.0" />
    <use href="#myDot" x="20" y="5" style="opacity:0.8" />
    <use href="#myDot" x="35" y="5" style="opacity:0.6" />
    <use href="#myDot" x="50" y="5" style="opacity:0.4" />
    <use href="#myDot" x="65" y="5" style="opacity:0.2" />
</svg>
<h2 id="_6-7-mask" tabindex="-1"><a class="header-anchor" href="#_6-7-mask"><span>6.7 <code v-pre>&lt;mask&gt;</code></span></a></h2>
<p><code v-pre>&lt;mask&gt;</code>元素<strong>定义一个alpha蒙版，用于将当前对象合成到背景中</strong>。蒙版使用了CSS的<code v-pre>mask</code>属性。</p>
<p>蒙版元素从不直接渲染，它们唯一的用途是可以使用<code v-pre>mask</code>属性引用。<code v-pre>mask</code>属性与CSS <code v-pre>mask</code>属性一样。</p>
<p><strong>注意：<code v-pre>opacity</code>、<code v-pre>filter</code>和<code v-pre>display</code>属性不适用于蒙版元素；因此，即使CSS<code v-pre>display</code>属性被设置为非<code v-pre>none</code>的值，蒙版元素也不会直接呈现。但即使蒙版元素或其任何祖先元素的<code v-pre>display</code>属性被设置为<code v-pre>none</code>，蒙版元素也可用于引用。</strong></p>
<ol>
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
<td><code v-pre>height</code></td>
<td>长度</td>
<td>定义遮罩区域的高度。</td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td>长度</td>
<td>定义遮罩区域的宽度。</td>
</tr>
<tr>
<td><code v-pre>maskContentUnits</code></td>
<td><code v-pre>userSpaceOnUse</code>/<code v-pre>objectBoundingBox</code>（默认值）</td>
<td>定义<code v-pre>&lt;mask&gt;</code>内容的坐标系。</td>
</tr>
<tr>
<td><code v-pre>maskUnits</code></td>
<td><code v-pre>userSpaceOnUse</code>/<code v-pre>objectBoundingBox</code>（默认值）</td>
<td>定义<code v-pre>&lt;mask&gt;</code>上的属性<code v-pre>x</code>、<code v-pre>y</code>、<code v-pre>width</code>和<code v-pre>height</code>的坐标系。</td>
</tr>
<tr>
<td><code v-pre>x</code></td>
<td>坐标</td>
<td>定义遮罩区域左上角的x轴坐标。</td>
</tr>
<tr>
<td><code v-pre>y</code></td>
<td>坐标</td>
<td>定义遮罩区域左上角的y轴坐标。</td>
</tr>
</tbody>
</table>
<ul>
<li>如果至少指定了<code v-pre>x</code>, <code v-pre>y</code>, <code v-pre>width</code>或<code v-pre>height</code>属性中的一个，则给定对象和由<code v-pre>x</code>, <code v-pre>y</code>, <code v-pre>width</code>和<code v-pre>height</code>定义的矩形将建立当前剪切路径。蒙版的渲染内容必须通过当前剪切路径进行剪切。</li>
</ul>
<ol start="2">
<li>示例</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 呈现为一个浅粉色的爱心 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mask</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>myMask<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mask</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lightpink<span class="token punctuation">"</span></span> <span class="token attr-name">mask</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#myMask)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg图</li>
</ul>
<svg width="200" height="200" >
    <mask id="myMask">
        <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="white" />
    </mask>
    <circle cx="50" cy="50" r="50" fill="lightpink" mask="url(#myMask)" />
</svg>
<h2 id="_6-8-pattern" tabindex="-1"><a class="header-anchor" href="#_6-8-pattern"><span>6.8 <code v-pre>&lt;pattern&gt;</code></span></a></h2>
<p><code v-pre>&lt;pattern&gt;</code>元素<strong>定义了一个图形对象，可以以重复的<code v-pre>x</code>和<code v-pre>y</code>坐标间隔（“平铺”）重绘该对象以覆盖某个区域</strong>。有点类似于CSS<code v-pre>background-repeat</code>属性（非<code v-pre>no-repeat</code>）的效果。</p>
<p><code v-pre>&lt;pattern&gt;</code>由其他图形元素上的<code v-pre>fill</code>和/或<code v-pre>stroke</code>属性引用，以使用引用的图案填充或描边这些元素。</p>
<p>SVG的用户代理样式表将<code v-pre>&lt;pattern&gt;</code>元素的<code v-pre>overflow</code>属性设置为<code v-pre>hidden</code>，这将导致在模式块的边界处创建矩形剪切路径。除非<code v-pre>overflow</code>属性被重写，否则图案内超出图案矩形的任何图形都将被剪切。</p>
<p>注意，如果<code v-pre>overflow</code>属性设置为<code v-pre>visible</code>，则模式边界之外的模式的呈现行为目前是未定义的。SVG的未来版本可能需要显示溢出。</p>
<ol>
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
<td><code v-pre>href</code></td>
<td>string</td>
<td>引用模板模式，为<code v-pre>&lt;pattern&gt;</code>属性提供默认值。</td>
</tr>
<tr>
<td><code v-pre>height</code></td>
<td>长度/百分比</td>
<td>确定模式平铺的高度。</td>
</tr>
<tr>
<td><code v-pre>width</code></td>
<td>长度/百分比</td>
<td>确定模式平铺的宽度。</td>
</tr>
<tr>
<td><code v-pre>patternTransform</code></td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#transform-list" target="_blank" rel="noopener noreferrer">转换列表</a></td>
<td>包含从阵列坐标系到目标坐标系的可选附加变换的定义。</td>
</tr>
<tr>
<td><code v-pre>patternContentUnits</code></td>
<td><code v-pre>userSpaceOnUse</code>/<code v-pre>objectBoundingBox</code>（默认值）</td>
<td>定义<code v-pre>&lt;pattern&gt;</code>内容的坐标系。</td>
</tr>
<tr>
<td><code v-pre>patternUnits</code></td>
<td><code v-pre>userSpaceOnUse</code>/<code v-pre>objectBoundingBox</code>（默认值）</td>
<td>定义<code v-pre>&lt;mask&gt;</code>上的属性<code v-pre>x</code>、<code v-pre>y</code>、<code v-pre>width</code>和<code v-pre>height</code>的坐标系。</td>
</tr>
<tr>
<td><code v-pre>preserveAspectRatio</code></td>
<td>(<code v-pre>none</code>、<code v-pre>xMinYMinxMidYMin</code>、<code v-pre>xMaxYMin</code>、<code v-pre>xMinYMid</code>、<code v-pre>xMidYMid</code>、<code v-pre>xMaxYMid</code>、<code v-pre>xMinYMax</code>、<code v-pre>xMidYMax</code>、<code v-pre>xMaxYMax</code>)  <br>[(<code v-pre>meet</code>、<code v-pre>slice</code>)]</td>
<td>如果svg片段嵌入到具有不同纵横比的容器中，则必须如何变形。</td>
</tr>
<tr>
<td><code v-pre>viewBox</code></td>
<td>以空格分隔的数字列表</td>
<td>定义模式片段的SVG视口的边界。</td>
</tr>
<tr>
<td><code v-pre>x</code></td>
<td>长度/百分比</td>
<td>定义图案模式平铺的x坐标偏移。</td>
</tr>
<tr>
<td><code v-pre>y</code></td>
<td>长度/百分比</td>
<td>定义图案模式平铺的y坐标偏移。</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>如果存在<code v-pre>viewBox</code>属性，则<code v-pre>patternContentUnits</code>不起作用。</p>
</li>
<li>
<p><code v-pre>&lt;pattern&gt;</code>的内容相对于一个新的坐标系统。如果存在<code v-pre>viewBox</code>属性，则使用<code v-pre>viewBox</code>和<code v-pre>preserveAspectRatio</code>的标准规则，将新的坐标系统安装到由<code v-pre>pattern</code>元素上的<code v-pre>x</code>、<code v-pre>y</code>、<code v-pre>width</code>、<code v-pre>height</code>和<code v-pre>patternUnits</code>属性定义的区域中。如果没有<code v-pre>viewBox</code>属性，那么新的坐标系统的原点是<code v-pre>(x, y)</code>。</p>
</li>
</ul>
<ol start="2">
<li>示例</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>300<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>150<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>triangle<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0,0,10,10<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10%<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10%<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0, 0 0, 2 0, 10 5, 5<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>defs</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!-- 使用fill或stroke属性引用 --></span></span>
<span class="line">    <span class="token comment">&lt;!-- 呈现为无数个小三角平铺满圆以及轮廓 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#triangle)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span></span>
<span class="line">        <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>180<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">stroke-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>20<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url(#triangle)<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg图</li>
</ul>
<svg width="300" height="150" >
    <defs>
        <pattern id="triangle" viewBox="0,0,10,10" width="10%" height="10%">
        <polygon points="0, 0 0, 2 0, 10 5, 5" />
        </pattern>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#triangle)" />
    <circle
        cx="180"
        cy="50"
        r="40"
        fill="none"
        stroke-width="20"
        stroke="url(#triangle)" />
</svg>
<blockquote>
<p>注意：附加到<code v-pre>&lt;pattern&gt;</code>元素内容上的事件属性和事件监听器不会被处理；只处理<code v-pre>&lt;pattern&gt;</code>元素的呈现方面。</p>
</blockquote>
</div></template>


