<template><div><h1 id="一、css基础" tabindex="-1"><a class="header-anchor" href="#一、css基础"><span>一、CSS基础</span></a></h1>
<h2 id="_1-1-css简介" tabindex="-1"><a class="header-anchor" href="#_1-1-css简介"><span>1.1 CSS简介</span></a></h2>
<p><img src="/style/htmlcss/css2/1737864596885.jpg" alt=""></p>
<ul>
<li>CSS 的全称为：层叠样式表 ( Cascading Style Sheets ) 。</li>
<li>CSS 也是一种标记语言，用于给 HTML 结构设置样式，例如：文字大小、颜色、元素宽高等等。
简单理解： CSS 可以美化 HTML , 让 HTML 更漂亮。
核心思想：HTML 搭建结构， CSS 添加样式，实现了：结构与样式的分离。</li>
</ul>
<h2 id="_1-2-css的编写位置" tabindex="-1"><a class="header-anchor" href="#_1-2-css的编写位置"><span>1.2 CSS的编写位置</span></a></h2>
<h3 id="_1-2-1-行内样式" tabindex="-1"><a class="header-anchor" href="#_1-2-1-行内样式"><span>1.2.1 行内样式</span></a></h3>
<p>写在标签的 style 属性中，（又称：内联样式）。
<strong>语法</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>60px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>欢迎来到尚硅谷学习<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<blockquote>
<ol>
<li>style 属性的值不能随便写，写要符合 CSS 语法规范，是 名:值; 的形式。</li>
<li>行内样式表，只能控制当前标签的样式，对其他标签无效。</li>
</ol>
</blockquote>
<p><strong>存在的问题</strong>：</p>
<p><span style="color:red">书写繁琐、样式不能复用、并且没有体现出：结构与样式分离 的思想，不推荐大量使用，只 有对当前元素添加简单样式时，才偶尔使用。</span></p>
<h3 id="_1-2-2-内部样式" tabindex="-1"><a class="header-anchor" href="#_1-2-2-内部样式"><span>1.2.2 内部样式</span></a></h3>
<p>写在 html 页面内部，将所有的 CSS 代码提取出来，单独放在<code v-pre>&lt;style&gt;</code> 标签中。
<strong>语法</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">h1</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<blockquote>
<ol>
<li>标签中。</li>
<li>此种写法：样式可以复用、代码结构清晰。</li>
</ol>
</blockquote>
<p><strong>存在的问题</strong>：</p>
<ol>
<li><span style="color:red">并没有实现：结构与样式完全分离。</span></li>
<li><span style="color:red">多个 HTML 页面无法复用样式。</span></li>
</ol>
<h3 id="_1-2-3-外部样式" tabindex="-1"><a class="header-anchor" href="#_1-2-3-外部样式"><span>1.2.3 外部样式</span></a></h3>
<p>写在单独的 .css 文件中，随后在 HTML 文件中引入使用。
<strong>语法</strong>：</p>
<ol>
<li>新建一个扩展名为 .css 的样式文件，把所有 CSS 代码都放入此文件中。</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">h1</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>在 HTML 文件中引入 .css 文件。</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./xxx.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<blockquote>
<ol>
<li>标签要写在 标签中。</li>
<li>标签属性说明：
<code v-pre>href</code> ：引入的文档来自于哪里。
<code v-pre>rel</code> ：( relation ：关系）说明引入的文档与当前文档之间的关系。</li>
<li>外部样式的优势：样式可以复用、结构清晰、可触发浏览器的缓存机制，提高访问速 度 ，实现了结构与样式的完全分离。</li>
<li>实际开发中，几乎都使用外部样式，这是最推荐的使用方式！</li>
</ol>
</blockquote>
<h2 id="_1-3-样式表的优先级" tabindex="-1"><a class="header-anchor" href="#_1-3-样式表的优先级"><span>1.3 样式表的优先级</span></a></h2>
<p><strong>优先级规则</strong>：行内样式 &gt; 内部样式 = 外部样式</p>
<ol>
<li>内部样式、外部样式，这二者的优先级相同，且：后面的 会覆盖 前面的（简记：“后来 者居上”）。</li>
<li>同一个样式表中，优先级也和编写顺序有关，且：后面的 会覆盖 前面的（简记：“后来 者居上”）。</li>
</ol>
<p><img src="/style/htmlcss/css2/1737864596886.jpg" alt=""></p>
<table>
<thead>
<tr>
<th>分类</th>
<th>优点</th>
<th>缺点</th>
<th>使用频率</th>
<th>作用范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>行内样式</td>
<td>优先级最高</td>
<td>1.结构与样式未分离<br>2.代码结构混乱<br>3.样式不能复用</td>
<td>很低</td>
<td>当前标签</td>
</tr>
<tr>
<td>内部样式</td>
<td>1.样式可复用<br>2.代码结构清晰</td>
<td>1.结构与样式未彻底分离<br>2.样式不能多页面复用</td>
<td>一般</td>
<td>当前页面</td>
</tr>
<tr>
<td>外部样式</td>
<td>1.样式可多页面复用<br>2.代码结构清晰<br>3.可触发浏览器的缓存机制<br>4.结构与样式彻底分离</td>
<td>需要引入才能使用</td>
<td>最高</td>
<td>多个页面</td>
</tr>
</tbody>
</table>
<h2 id="_1-4-css语法规范" tabindex="-1"><a class="header-anchor" href="#_1-4-css语法规范"><span>1.4 CSS语法规范</span></a></h2>
<p><strong>CSS 语法规范由两部分构成</strong>：</p>
<ul>
<li>选择器：找到要添加样式的元素。</li>
<li>声明块：设置具体的样式（声明块是由一个或多个声明组成的），声明的格式为： 属性名: 属性 值;</li>
</ul>
<p><strong>备注</strong>：</p>
<blockquote>
<ol>
<li>最后一个声明后的分号理论上能省略，但最好还是写上。</li>
<li>选择器与声明块之间，属性名与属性值之间，均有一个空格，理论上能省略，但最好 还是写上。</li>
</ol>
</blockquote>
<p><strong>注释的写法</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token comment">/* 给h1元素添加样式 */</span></span>
<span class="line"><span class="token selector">h1</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 设置文字颜色为红色 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">/* 设置文字大小为40px */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 40px</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-css代码风格" tabindex="-1"><a class="header-anchor" href="#_1-5-css代码风格"><span>1.5 CSS代码风格</span></a></h2>
<ul>
<li>展开风格 —— 开发时推荐，便于维护和调试。</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">h1</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>紧凑风格 —— 项目上线时推荐，可减小文件体积。</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">h1</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span>40px<span class="token punctuation">;</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>备注</strong>：</p>
<blockquote>
<p>项目上线时，我们会通过工具将【展开风格】的代码，变成【紧凑风格】，这样可以减小文 件体积，节约网络流量，同时也能让用户打开网页时速度更快。</p>
</blockquote>
</div></template>


