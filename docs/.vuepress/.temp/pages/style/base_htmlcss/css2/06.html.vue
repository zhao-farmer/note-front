<template><div><h1 id="六、浮动" tabindex="-1"><a class="header-anchor" href="#六、浮动"><span>六、浮动</span></a></h1>
<h2 id="_6-1-浮动的简介" tabindex="-1"><a class="header-anchor" href="#_6-1-浮动的简介"><span>6.1 浮动的简介</span></a></h2>
<p>在最初，浮动是用来实现文字环绕图片效果的，现在浮动是主流的页面布局方式之一。</p>
<p><img src="/style/htmlcss/css2/1737864782966.jpg" alt=""></p>
<h2 id="_6-2-元素浮动后的特点" tabindex="-1"><a class="header-anchor" href="#_6-2-元素浮动后的特点"><span>6.2 元素浮动后的特点</span></a></h2>
<blockquote>
<ol>
<li>🤢脱离文档流。</li>
<li>😊不管浮动前是什么元素，浮动后：默认宽与高都是被内容撑开（尽可能小），而且可以设置宽 高。</li>
<li>😊不会独占一行，可以与其他元素共用一行。</li>
<li>😊不会 <code v-pre>margin</code> 合并，也不会 <code v-pre>margin</code> 塌陷，能够完美的设置四个方向的 <code v-pre>margin</code> 和 <code v-pre>padding</code> 。</li>
<li>😊不会像行内块一样被当做文本处理（没有行内块的空白问题）。</li>
</ol>
</blockquote>
<h2 id="_6-3-浮动小练习" tabindex="-1"><a class="header-anchor" href="#_6-3-浮动小练习"><span>6.3. 浮动小练习</span></a></h2>
<ul>
<li>练习1：盒子1右浮动，效果如下</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">            <span class="token selector">*</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #111<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box div</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">height</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">background-color</span><span class="token punctuation">:</span> #a3cce9<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">                <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #111<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token selector">.box1</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css2/1737864823401.jpg" alt=""></p>
<ul>
<li>练习2：盒子1左浮动，效果如下</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.box1</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css2/1737864837297.jpg" alt=""></p>
<ul>
<li>练习3：所有盒子都浮动，效果如下</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.box1,</span>
<span class="line">.box2,</span>
<span class="line">.box3</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong>：</p>
<p><img src="/style/htmlcss/css2/1737864846776.jpg" alt=""></p>
<h2 id="_6-4-解决浮动产生的影响" tabindex="-1"><a class="header-anchor" href="#_6-4-解决浮动产生的影响"><span>6.4 解决浮动产生的影响</span></a></h2>
<h3 id="_6-4-1-元素浮动后会有哪些影响" tabindex="-1"><a class="header-anchor" href="#_6-4-1-元素浮动后会有哪些影响"><span>6.4.1 元素浮动后会有哪些影响</span></a></h3>
<ul>
<li>对兄弟元素的影响： 后面的兄弟元素，会占据浮动元素之前的位置，在浮动元素的下面；对前面的兄弟 无影响。</li>
<li>对父元素的影响： 不能撑起父元素的高度，导致父元素高度塌陷；但父元素的宽度依然束缚浮动的元 素。</li>
</ul>
<h3 id="_6-4-2-解决浮动产生的影响-清除浮动" tabindex="-1"><a class="header-anchor" href="#_6-4-2-解决浮动产生的影响-清除浮动"><span>6.4.2 解决浮动产生的影响（清除浮动）</span></a></h3>
<p><strong>解决方案</strong>：</p>
<blockquote>
<ol>
<li>方案一： 给父元素指定高度。</li>
<li>方案二： 给父元素也设置浮动，带来其他影响。</li>
<li>方案三： 给父元素设置 <code v-pre>overflow:hidden</code> 。</li>
<li>方案四： 在所有浮动元素的最后面，添加一个块级元素，并给该块级元素设置 <code v-pre>clear:both</code> 。</li>
<li>方案五： 给浮动元素的父元素，设置伪元素，通过伪元素清除浮动，原理与方案四相同。</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">.parent::after</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<p>布局中的一个原则：设置浮动的时候，兄弟元素要么全都浮动，要么全都不浮动。</p>
<h2 id="_6-5-浮动布局小练习" tabindex="-1"><a class="header-anchor" href="#_6-5-浮动布局小练习"><span>6.5 浮动布局小练习</span></a></h2>
<p><strong>整体效果如下</strong>：</p>
<p><img src="/style/htmlcss/css2/1737864856894.jpg" alt="">
<strong>具体标注如下</strong>：</p>
<p><img src="/style/htmlcss/css2/1737864868456.jpg" alt=""></p>
<h2 id="_6-6-浮动相关属性" tabindex="-1"><a class="header-anchor" href="#_6-6-浮动相关属性"><span>6.6 浮动相关属性</span></a></h2>
<table>
<thead>
<tr>
<th>CSS属性</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>float</td>
<td>设置浮动</td>
<td>left : 设置左浮动<br>right : 设置右浮动<br>none ：不浮动，默认值</td>
</tr>
<tr>
<td>clear</td>
<td>清除浮动<br>清除前面兄弟元素浮动元素的响应</td>
<td>left ：清除前面左浮动的影响<br>right ：清除前面右浮动的影响<br>both ：清除前面左右浮动的影响</td>
</tr>
</tbody>
</table>
</div></template>


