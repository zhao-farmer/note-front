<template><div><h1 id="五、html-基础" tabindex="-1"><a class="header-anchor" href="#五、html-基础"><span>五、HTML 基础</span></a></h1>
<h2 id="_5-1-开发者文档" tabindex="-1"><a class="header-anchor" href="#_5-1-开发者文档"><span>5.1  开发者文档</span></a></h2>
<pre><code>• W3C官网： www.w3c.org 
• W3School： www.w3school.com.cn 
• MDN： developer.mozilla.org —— 平时用的最多。
</code></pre>
<h2 id="_5-2-排版标签" tabindex="-1"><a class="header-anchor" href="#_5-2-排版标签"><span>5.2 排版标签</span></a></h2>
<table>
<thead>
<tr>
<th>标签名</th>
<th>标签含义</th>
<th>单/双标签</th>
</tr>
</thead>
<tbody>
<tr>
<td>h1~h6</td>
<td>标题</td>
<td>双</td>
</tr>
<tr>
<td>p</td>
<td>段落</td>
<td>双</td>
</tr>
<tr>
<td>div</td>
<td>没有任何含义，用于整体布局（生活中的包装袋）。</td>
<td>双</td>
</tr>
</tbody>
</table>
<ol>
<li>h1 最好写一个， h2~h6 能适当多写。</li>
<li>h1~h6 不能互相嵌套，例如： h1 标签中最好不要写 h2 标签了。</li>
<li>p 标签很特殊！它里面不能有： h1~h6 、 p 、 div 标签（暂时先这样记，后面会说规律）。</li>
</ol>
<h2 id="_5-3-语义化标签" tabindex="-1"><a class="header-anchor" href="#_5-3-语义化标签"><span>5.3 语义化标签</span></a></h2>
<ul>
<li>概念：用特定的标签，去表达特定的含义。</li>
<li>原则：标签的默认效果不重要（后期可以通过 CSS 随便控制效果），语义最重要！</li>
<li>举例：对于 h1 标签，效果是文字很大（不重要），语义是网页主要内容（很重要）。</li>
<li>优势：
<ul>
<li>代码结构清晰可读性强。</li>
<li>有利于 SEO（搜索引擎优化）。</li>
<li>方便设备解析（如屏幕阅读器、盲人阅读器等）。</li>
</ul>
</li>
</ul>
<h2 id="_5-4-块级元素-与-行内元素" tabindex="-1"><a class="header-anchor" href="#_5-4-块级元素-与-行内元素"><span>5.4 块级元素 与 行内元素</span></a></h2>
<ol>
<li>块级元素：独占一行（排版标签都是块级元素）。</li>
<li>行内元素：不独占一行（目前只学了： input ，稍后会学习更多）。</li>
<li>使用原则：
<ol>
<li>块级元素 中能写 行内元素 和 块级元素（简单记：块级元素中几乎什么都能写）。</li>
<li>行内元素 中能写 行内元素，但不能写 块级元素。</li>
<li>一些特殊的规则：
<ul>
<li>h1~h6 不能互相嵌套。</li>
<li>p 中不要写块级元素。</li>
</ul>
</li>
</ol>
</li>
</ol>
<p><strong>备注</strong>：</p>
<blockquote>
<p>marquee 元素设计的初衷是：让文字有动画效果，但如今我们可以通过 CSS 来实现 了，而且还可以实现的更加炫酷，所以 marquee 标签已经：过时了（废弃了），不推荐使用。我们只是在开篇的时候，用他做了一个引子而已，在后续的学习过程中，这些已经废弃 的标签，我们直接跳过。</p>
</blockquote>
<h2 id="_5-5-文本标签-常用的" tabindex="-1"><a class="header-anchor" href="#_5-5-文本标签-常用的"><span>5.5 文本标签_常用的</span></a></h2>
<ol>
<li>用于包裹：词汇、短语等。</li>
<li>通常写在排版标签里面。</li>
<li>排版标签更宏观（大段的文字），文本标签更微观（词汇、短语）。</li>
<li>文本标签通常都是行内元素。</li>
</ol>
<table>
<thead>
<tr>
<th>标签名</th>
<th>标签语义</th>
<th>单/双标签</th>
</tr>
</thead>
<tbody>
<tr>
<td>em</td>
<td>要着重阅读的内容</td>
<td>双</td>
</tr>
<tr>
<td>strong</td>
<td>十分重要的内容（语气比em要强）</td>
<td>双</td>
</tr>
<tr>
<td>span</td>
<td>没有语义，用于包裹短语的通用容器</td>
<td>双</td>
</tr>
</tbody>
</table>
<p><strong>生活中的例子</strong>： div 是大包装袋， span 是小包装袋。</p>
<h2 id="_5-6-文本标签-不常用的" tabindex="-1"><a class="header-anchor" href="#_5-6-文本标签-不常用的"><span>5.6 文本标签_不常用的</span></a></h2>
<table>
<thead>
<tr>
<th>标签名</th>
<th>标签语义</th>
<th>单/双标签</th>
</tr>
</thead>
<tbody>
<tr>
<td>cite</td>
<td>作品标题（书籍、歌曲、电影、电视节目、绘画、雕塑）</td>
<td>双</td>
</tr>
<tr>
<td>dfn</td>
<td>特殊术语，或专属名词</td>
<td>双</td>
</tr>
<tr>
<td>del与ins</td>
<td>删除的文本【与】插入的文本</td>
<td>双</td>
</tr>
<tr>
<td>sub与sup</td>
<td>下标文字【与】上标文字</td>
<td>双</td>
</tr>
<tr>
<td>code</td>
<td>一段代码</td>
<td>双</td>
</tr>
<tr>
<td>samp</td>
<td>从正常的上下文中，将某些内容提取出来，例如：标识设备输出</td>
<td>双</td>
</tr>
<tr>
<td>kbd</td>
<td>键盘文本，表示文本是通过键盘输入的，经常用在与计算机相关的手册中</td>
<td>双</td>
</tr>
<tr>
<td>abbr</td>
<td>缩写，最好配合上title属性</td>
<td>双</td>
</tr>
<tr>
<td>bdo</td>
<td>更改文本方向，要配合dir属性，可选值:ltr（默认值）、rtl</td>
<td>双</td>
</tr>
<tr>
<td>var</td>
<td>标记变量，可以与code标签一起使用</td>
<td>双</td>
</tr>
<tr>
<td>small</td>
<td>附属细则，例如：包括版权、法律文本。——很少使用</td>
<td>双</td>
</tr>
<tr>
<td>b</td>
<td>摘要中的关键字、评论中的产品名称。——很少使用</td>
<td>双</td>
</tr>
<tr>
<td>i</td>
<td>本意是：人物的思想活动、所说的话等等。现在多用于：呈现字体图标（后面要讲的内容）。</td>
<td>双</td>
</tr>
<tr>
<td>u</td>
<td>与正常内容有反差文本，例如：错的单词、不合适的描述等。——很少使用</td>
<td>双</td>
</tr>
<tr>
<td>q</td>
<td>短引用——很少使用</td>
<td>双</td>
</tr>
<tr>
<td>blockquote</td>
<td>长引用——很少使用</td>
<td>双</td>
</tr>
<tr>
<td>address</td>
<td>地址信息</td>
<td>双</td>
</tr>
</tbody>
</table>
<p><strong>备注</strong>：</p>
<blockquote>
<ol>
<li>这些不常用的文本标签，编码时不用过于纠结（酌情而定，不用也没毛病）。</li>
<li>blockquote 与 address 是块级元素，其他的文本标签，都是行内元素。</li>
<li>有些语义感不强的标签，我们很少使用，例如： small 、 b 、 u 、 q 、 blockquote</li>
<li>HTML标签太多了！记住那些：重要的、语义感强的标签即可；
截止目前，有这些： h1~h6 、 p 、 div 、 em 、 strong 、 span</li>
</ol>
</blockquote>
<h2 id="_5-7-图片标签" tabindex="-1"><a class="header-anchor" href="#_5-7-图片标签"><span>5.7  图片标签</span></a></h2>
<h3 id="_5-7-1-基本使用" tabindex="-1"><a class="header-anchor" href="#_5-7-1-基本使用"><span>5.7.1 基本使用</span></a></h3>
<table>
<thead>
<tr>
<th>标签名</th>
<th>标签语义</th>
<th>常用属性</th>
<th>单/双标签</th>
</tr>
</thead>
<tbody>
<tr>
<td>img</td>
<td>图片</td>
<td>src：图片路径（又称：图片地址）——图片的具体位置<br>alt：图片描述<br>width：图片宽度，单位是像素，例如： 200px 或 200 <br>height：图片高度， 单位是像素，例如： 200px 或 200</td>
<td>单</td>
</tr>
</tbody>
</table>
<p><strong>总结</strong>：</p>
<blockquote>
<ol>
<li>像素（ px ）是一种单位，学到 CSS 时，我们会详细讲解。</li>
<li>尽量不同时修改图片的宽和高，可能会造成比例失调。</li>
<li>暂且认为 img 是行内元素（学到 CSS 时，会认识一个新的元素分类，目前咱们只知道： 块、行内）。</li>
<li>alt 属性的作用： 搜索引擎通过 alt 属性，得知图片的内容。—— 最主要的作用。 当图片无法展示时候，有些浏览器会呈现 alt 属性的值。 盲人阅读器会朗读 alt 属性的值。</li>
</ol>
</blockquote>
<h3 id="_5-7-2-路径的分类" tabindex="-1"><a class="header-anchor" href="#_5-7-2-路径的分类"><span>5.7.2 路径的分类</span></a></h3>
<ol>
<li>相对路径：以当前位置作为参考点，去建立路径。</li>
</ol>
<table>
   <tbody>
       <tr>
            <th style="font-weight:bold">已有结构</th> 
            <th style="font-weight:bold">符号</th> 
            <th style="font-weight:bold">含义</th> 
            <th style="font-weight:bold">举例（在测试.html中）</th> 
        </tr>
        <tr>
            <td rowspan="3"><img src="/style/htmlcss/html4/008.png"> </td>    
            <td >./</td>  
            <td >同级</td>  
            <td > 引入【怪兽.jpg】：&lt;img src="./怪兽.jpg"&gt;</td>  
        </tr>
        <tr>
            <td >/ </td>  
            <td >下一级</td>  
            <td >引入【喜羊羊.jpg】：&lt;img src="./a/喜羊羊.jpg"&gt;</td>  
        </tr>
        <tr>
            <td >../ </td>  
            <td >上一级</td>  
            <td >引入【奥特曼.jpg】：&lt;img src="./a/喜羊羊.jpg"&gt;</td>  
        </tr>
    </tbody>
</table>
<p><strong>注意点</strong>：</p>
<blockquote>
<ul>
<li>相对路径中的 ./ 可以省略不写。</li>
<li>相对路径依赖的是当前位置，后期若调整了文件位置，那么文件中的路径也要修改。</li>
</ul>
</blockquote>
<ol start="2">
<li>绝对路径：以根位置作为参考点，去建立路径。
1. 本地绝对路径： E:/a/b/c/奥特曼.jpg 。（很少使用）
2. 网络绝对路径： http://www.atguigu.com/images/index_new/logo.png 。</li>
</ol>
<p><strong>注意点</strong>：</p>
<blockquote>
<ul>
<li>使用本地绝对路径，一旦更换设备，路径处理起来比较麻烦，所以很少使用。</li>
<li>使用网络绝对路径，确实方便，但要注意：若服务器开启了防盗链，会造成图片引入 失败。</li>
</ul>
</blockquote>
<ol start="3">
<li>常见图片格式
<ol>
<li>jpg 格式：
<ul>
<li>概述：扩展名为 .jpg 或 .jpeg ，是一种有损的压缩格式（把肉眼不容易观察出来的细节 丢弃了）。</li>
<li>主要特点：支持的颜色丰富、占用空间较小、不支持透明背景、不支持动态图。 。</li>
<li>使用场景：对图片细节没有极高要求的场景，例如：网站的产品宣传图等 。—— 该格式网 页中很常见</li>
</ul>
</li>
<li>png 格式：
<ul>
<li>概述：扩展名为 .png ，是一种无损的压缩格式，能够更高质量的保存图片。</li>
<li>主要特点：支持的颜色丰富、占用空间略大、支持透明背景、不支持动态图。</li>
<li>使用场景：①想让图片有透明背景；②想更高质量的呈现图片；例如 ：公司logo图、重要配 图等。</li>
</ul>
</li>
<li>bmp 格式：
<ul>
<li>概述：扩展名为 .bmp ，不进行压缩的一种格式，在最大程度上保留图片更多的细节。</li>
<li>主要特点：支持的颜色丰富、保留的细节更多、占用空间极大、不支持透明背景、不支持动 态图。</li>
<li>使用场景：对图片细节要求极高的场景，例如：一些大型游戏中的图片 。（网页中很少使 用）</li>
</ul>
</li>
<li>gif 格式：
<ul>
<li>概述：扩展名为 .gif ，仅支持256种颜色，色彩呈现不是很完整。</li>
<li>主要特点：支持的颜色较少、支持简单透明背景、支持动态图。</li>
<li>使用场景：网页中的动态图片。</li>
</ul>
</li>
<li>webp 格式：
<ul>
<li>概述：扩展名为 .webp ，谷歌推出的一种格式，专门用来在网页中呈现图片。</li>
<li>主要特点：具备上述几种格式的优点，但兼容性不太好，一旦使用务必要解决兼容性问题。</li>
<li>使用场景：网页中的各种图片。</li>
</ul>
</li>
<li>base64 格式
<ul>
<li>本质：一串特殊的文本，要通过浏览器打开，传统看图应用通常无法打开。</li>
<li>原理：把图片进行 base64 编码，形成一串文本。</li>
<li>如何生成：靠一些工具或网站。</li>
<li>如何使用：直接作为 img 标签的 src 属性的值即可，并且不受文件位置的影响。</li>
<li>使用场景：一些较小的图片，或者需要和网页一起加载的图片。</li>
</ul>
</li>
</ol>
</li>
</ol>
<blockquote>
<p>图片的格式非常多，上面这些，只是一些常见的、我们前端人员常接触到的。</p>
</blockquote>
<h2 id="_5-8-超链接" tabindex="-1"><a class="header-anchor" href="#_5-8-超链接"><span>5.8 超链接</span></a></h2>
<p>主要作用：从当前页面进行跳转。
可以实现：
①跳转到指定页面、
②跳转到指定文件（也可触发下载）、
③跳转到锚点位置、
④唤起指定 应用。</p>
<table>
<thead>
<tr>
<th>标签名</th>
<th>标签语义</th>
<th>常用属性</th>
<th>单/双标签</th>
</tr>
</thead>
<tbody>
<tr>
<td>a</td>
<td>超链接</td>
<td>href：指定要跳转到的具体目标。<br>target：控制跳转时如何打开页面，常用值如下: <br>            _self：在本窗口打开。<br>            _blank：在新窗口打开。<br>id：元素的唯一 标识，可用于设置锚点。<br> name：元素的名字，写在 a 标签中，也能设置锚点。</td>
<td>双</td>
</tr>
</tbody>
</table>
<h3 id="_5-8-1-跳转到页面" tabindex="-1"><a class="header-anchor" href="#_5-8-1-跳转到页面"><span>5.8.1 跳转到页面</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 跳转其他网页 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.jd.com/<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>去京东<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 跳转本地网页 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./10_HTML排版标签.html<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_self<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>去看排版标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<ul>
<li>代码中的多个空格、多个回车，都会被浏览器解析成一个空格！</li>
<li>虽然 a 是行内元素，但 a 元素可以包裹除它自身外的任何元素！
想展示多个回车或空格，怎么办呢？ —— 后面会讲。</li>
</ul>
<h3 id="_5-8-2-跳转到文件" tabindex="-1"><a class="header-anchor" href="#_5-8-2-跳转到文件"><span>5.8.2 跳转到文件</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 浏览器能直接打开的文件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./resource/自拍.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>看自拍<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./resource/小电影.mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>看小电影<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./resource/小姐姐.gif<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>看小姐姐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./resource/如何一夜暴富.pdf<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我一夜暴富<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 浏览器不能打开的文件，会自动触发下载 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./resource/内部资源.zip<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>内部资源<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 强制触发下载 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./resource/小电影.mp4<span class="token punctuation">"</span></span> <span class="token attr-name">download</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>电影片段.mp4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>下载电影<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意1：若浏览器无法打开文件，则会引导用户下载。
注意2：若想强制触发下载，请使用 download 属性，属性值即为下载文件的名称。</p>
</blockquote>
<h3 id="_5-8-3-跳转到锚点" tabindex="-1"><a class="header-anchor" href="#_5-8-3-跳转到锚点"><span>5.8.3 跳转到锚点</span></a></h3>
<p><strong>什么是锚点？</strong>—— 网页中的一个标记点。</p>
<p><strong>具体使用方式</strong>：</p>
<ul>
<li>第一步：设置锚点</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 第一种方式：a标签配合name属性 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 第二种方式：其他标签配合id属性 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是一个位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<blockquote>
<ol>
<li>具有 href 属性的 a 标签是超链接，具有 name 属性的 a 标签是锚点。</li>
<li>name 和 id 都是区分大小写的，且 id 最好别是数字开头。</li>
</ol>
</blockquote>
<ul>
<li>第二步：跳转锚点</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    <span class="token comment">&lt;!-- 第一种方式：a标签配合name属性 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 第二种方式：其他标签配合id属性 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是一个位置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">&lt;!-- 跳转到test1锚点--></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#test1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>去test1锚点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 跳到本页面顶部 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>回到顶部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 跳转到其他页面锚点 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo.html#test1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>去demo.html页面的test1锚点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 刷新本页面 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>刷新本页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 执行一段js,如果还不知道执行什么，可以留空，javascript:; --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:alert(1);<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我弹窗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-8-4-唤起指定应用" tabindex="-1"><a class="header-anchor" href="#_5-8-4-唤起指定应用"><span>5.8.4 唤起指定应用</span></a></h3>
<p>通过 a 标签，可以唤起设备应用程序。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    <span class="token comment">&lt;!-- 唤起设备拨号 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel:10010<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>电话联系<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 唤起设备发送邮件 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mailto:10010@qq.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>邮件联系<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 唤起设备发送短信 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sms:10086<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>短信联系<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-9-列表" tabindex="-1"><a class="header-anchor" href="#_5-9-列表"><span>5.9 列表</span></a></h2>
<h3 id="_5-9-1-有序列表" tabindex="-1"><a class="header-anchor" href="#_5-9-1-有序列表"><span>5.9.1 有序列表</span></a></h3>
<p>概念：有顺序或侧重顺序的列表。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>要把大象放冰箱总共分几步<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>把冰箱门打开<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>把大象放进去<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>把冰箱门关上<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-2-无序列表" tabindex="-1"><a class="header-anchor" href="#_5-9-2-无序列表"><span>5.9.2 无序列表</span></a></h3>
<p><strong>概念</strong>：无顺序或不侧重顺序的列表。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>我想去的几个城市<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>成都<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>上海<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>西安<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>武汉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-3-列表嵌套" tabindex="-1"><a class="header-anchor" href="#_5-9-3-列表嵌套"><span>5.9.3 列表嵌套</span></a></h3>
<p><strong>概念</strong>：列表中的某项内容，又包含一个列表（注意：嵌套时，请务必把解构写完整）。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>我想去的几个城市<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>成都<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>上海<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>外滩<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>杜莎夫人蜡像馆<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.opg.cn/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>东方明珠<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>迪士尼乐园<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>西安<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>武汉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<p>li 标签最好写在 ul 或 ol 中，不要单独使用。</p>
</blockquote>
<h3 id="_5-9-4-自定义列表" tabindex="-1"><a class="header-anchor" href="#_5-9-4-自定义列表"><span>5.9.4 自定义列表</span></a></h3>
<ol>
<li>概念：所谓自定义列表，就是一个包含术语名称以及术语描述的列表。</li>
<li>一个 dl 就是一个自定义列表，一个 dt 就是一个术语名称，一个 dd 就是术语描述（可以有多 个）。</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>如何高效的学习？<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span>做好笔记<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>笔记是我们以后复习的一个抓手<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>笔记可以是电子版，也可以是纸质版<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span>多加练习<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>只有敲出来的代码，才是自己的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span>别怕出错<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>错很正常，改正后并记住，就是经验<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-10-表格" tabindex="-1"><a class="header-anchor" href="#_5-10-表格"><span>5.10 表格</span></a></h2>
<h3 id="_5-10-1-基本结构" tabindex="-1"><a class="header-anchor" href="#_5-10-1-基本结构"><span>5.10.1 基本结构</span></a></h3>
<ol>
<li>一个完整的表格由：表格标题、表格头部、表格主体、表格脚注，四部分组成。
<img src="/style/htmlcss/html4/009.png" alt=""></li>
<li>表格涉及到的标签：
<ul>
<li>table：表格</li>
<li>caption：表格标题</li>
<li>thead：表格头部</li>
<li>tbody：表格主体</li>
<li>tfoot：表格注脚</li>
<li>tr：每一行</li>
<li>th、td：每一个单元格（备注：表格头部中用 th ，表格主体、表格脚注中用： td ）</li>
</ul>
</li>
</ol>
<p><img src="/style/htmlcss/html4/010.png" alt="">
<img src="/style/htmlcss/html4/011.png" alt="">
<img src="/style/htmlcss/html4/012.png" alt=""></p>
<ol start="3">
<li>具体编码：</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 表格标题 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>caption</span><span class="token punctuation">></span></span>学生信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>caption</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 表格头部 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>性别<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>年龄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>民族<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>政治面貌<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 表格主体 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>张三<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>18<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>汉族<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>团员<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>李四<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>满族<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>群众<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>王五<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>回族<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>党员<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>赵六<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>21<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>壮族<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>团员<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 表格脚注 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tfoot</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>共计：4人<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tfoot</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-10-2-常用属性" tabindex="-1"><a class="header-anchor" href="#_5-10-2-常用属性"><span>5.10.2 常用属性</span></a></h3>
<table>
<thead>
<tr>
<th>标签名</th>
<th>标签语义</th>
<th>常用属性</th>
<th>单/双标签</th>
</tr>
</thead>
<tbody>
<tr>
<td>table</td>
<td>表格</td>
<td><code v-pre>width</code>：设置表格宽度。<br><code v-pre>height</code>：设置表格最小高度，表格最终高度可能比设置的值大。<br><code v-pre>border</code>：设置表格边框宽度。<br><code v-pre>ellspacing</code>：设置单元格之间的间距。</td>
<td>双</td>
</tr>
<tr>
<td>thead</td>
<td>表格头部</td>
<td><code v-pre>height</code>：设置表格头部高度。<br><code v-pre>align</code>：设置单元格的水平对齐方式，可选值如下：<br> 1. <code v-pre>left</code>：左对齐<br>2. <code v-pre>center</code>：中间对齐<br>3. <code v-pre>right</code>：右对齐<br><code v-pre>valign</code>：设置单元格的垂直对齐方式，可选值如下：<br>1.<code v-pre>top</code>：顶部对齐<br>2.<code v-pre>middle</code>：中间对齐<br>3.<code v-pre>bottom</code>：底部对齐</td>
<td>双</td>
</tr>
<tr>
<td>tbody</td>
<td>表格主体</td>
<td>常用属性与<code v-pre>thead</code>相同。</td>
<td>双</td>
</tr>
<tr>
<td>tr</td>
<td>行</td>
<td>常用属性与<code v-pre>thead</code>相同。</td>
<td>双</td>
</tr>
<tr>
<td>tfoot</td>
<td>表格脚注</td>
<td>常用属性与<code v-pre>thead</code>相同。</td>
<td>双</td>
</tr>
<tr>
<td>td</td>
<td>普通单元格</td>
<td><code v-pre>width</code>：设置单元格的宽度，同列所有单元格全都受影响。<br>     <code v-pre>heigth</code>：设置单元格的高度，同行所有单元格全都受影响。<br><code v-pre>align</code>：设置单元格的水平对齐方式。<br><code v-pre>valign</code>：设置单元格的垂直对齐方式。<br><code v-pre>rowspan</code>：指定要跨的行数。<br><code v-pre>colspan</code>：指定要跨的列数。</td>
<td>双</td>
</tr>
<tr>
<td>th</td>
<td>表头单元格</td>
<td>常用属性与td相同。</td>
<td>双</td>
</tr>
</tbody>
</table>
<p><strong>注意点</strong>：</p>
<blockquote>
<ol>
<li>元素的 border 属性可以控制表格边框，但 border 值的大小，并不控制单元格 边框的宽度， 只能控制表格最外侧边框的宽度，这个问题如何解决？—— 后期靠 CSS 控制。</li>
<li>默认情况下，每列的宽度，得看这一列单元格最长的那个文字。</li>
<li>给某个 th 或 td 设置了宽度之后，他们所在的那一列的宽度就确定了。</li>
<li>给某个 th 或 td 设置了高度之后，他们所在的那一行的高度就确定了。</li>
</ol>
</blockquote>
<h3 id="_5-10-3-跨行跨列" tabindex="-1"><a class="header-anchor" href="#_5-10-3-跨行跨列"><span>5.10.3 跨行跨列</span></a></h3>
<ol>
<li>rowspan ：指定要跨的行数。</li>
<li>colspan ：指定要跨的列数。</li>
</ol>
<p><strong>课程表效果</strong>：
<img src="/style/htmlcss/html4/013.png" alt=""></p>
<p><img src="/style/htmlcss/html4/014.png" alt=""></p>
<h2 id="_5-11常用标签补充" tabindex="-1"><a class="header-anchor" href="#_5-11常用标签补充"><span>5.11常用标签补充</span></a></h2>
<table>
<thead>
<tr>
<th>标签名</th>
<th>标签含义</th>
<th>单/双标签</th>
</tr>
</thead>
<tbody>
<tr>
<td>br</td>
<td>换行</td>
<td>单</td>
</tr>
<tr>
<td>hr</td>
<td>分隔</td>
<td>单</td>
</tr>
<tr>
<td>pre</td>
<td>按原文显示（一般用于在页面中嵌入大段代码）</td>
<td>双</td>
</tr>
</tbody>
</table>
<p><strong>注意点</strong>：</p>
<blockquote>
<ol>
<li>不要用 <code v-pre>&lt;br&gt;</code> 来增加文本之间的行间隔，应使用 <code v-pre>&lt;p&gt;</code> 元素，或后面即将学到的 CSS
<code v-pre>margin</code> 属性。</li>
<li><code v-pre>&lt;hr&gt;</code> 的语义是分隔，如果不想要语义，只是想画一条水平线，那么应当使用 CSS 完成。</li>
</ol>
</blockquote>
<h2 id="_5-12-表单" tabindex="-1"><a class="header-anchor" href="#_5-12-表单"><span>5.12 表单</span></a></h2>
<blockquote>
<p>概念：一个包含交互的区域，用于收集用户提供的数据。</p>
</blockquote>
<h3 id="_5-12-1-基本结构-简单梳理" tabindex="-1"><a class="header-anchor" href="#_5-12-1-基本结构-简单梳理"><span>5.12.1 基本结构 简单梳理：</span></a></h3>
<table>
<thead>
<tr>
<th>标签名</th>
<th>语义</th>
<th>常用属性</th>
<th>单/双标签</th>
</tr>
</thead>
<tbody>
<tr>
<td>form</td>
<td>表单</td>
<td>action ：用于指定表单的提交地址（需要与后端人员沟通后确定）。<br> target ：用于控制表单提交后，如何打开页面，常用值如下：<br>             _self ：在本窗口打开。<br>            _blank ：在新窗口打开。<br>method ：用于控制表单的提交方式，暂时只需了解，在后面Ajax 的课程中，会详细讲解。</td>
<td>双</td>
</tr>
<tr>
<td>input</td>
<td>输入框</td>
<td>type ：设置输入框的类型，目前用到的值是 text ，表示普通文本。<br>name ：用于指定提交数据的名字，（需要与后端人员沟通后确定）。</td>
<td>单</td>
</tr>
<tr>
<td>button</td>
<td>按钮</td>
<td>本小节暂不涉及</td>
<td>双</td>
</tr>
</tbody>
</table>
<p>在本小节，我们先记住表单的整体形式，稍后会对表单控件进行详细讲解。
示例代码：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.baidu.com/s<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>去百度搜索<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-12-2-常用表单控件" tabindex="-1"><a class="header-anchor" href="#_5-12-2-常用表单控件"><span>5.12.2 常用表单控件</span></a></h3>
<ol>
<li>文本输入框</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>常用属性如下</strong>：</p>
<ul>
<li>name 属性：数据的名称。</li>
<li>value 属性：输入框的默认输入值。</li>
<li>maxlength 属性：输入框最大可输入长度。</li>
</ul>
<ol start="2">
<li>密码输入框</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>常用属性如下</strong>：</p>
<ul>
<li>name 属性：数据的名称。</li>
<li>value 属性：输入框的默认输入值（一般不用，无意义）。</li>
<li>maxlength 属性：输入框最大可输入长度。</li>
</ul>
<ol start="3">
<li>单选框</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sex<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>female<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sex<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用属性如下</strong>：</p>
<ul>
<li>name 属性：数据的名称，注意：想要单选效果，多个 radio 的 name 属性值要保持一致。</li>
<li>value 属性：提交的数据值。 checked 属性：让该单选按钮默认选中。</li>
</ul>
<ol start="4">
<li>复选框</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>smoke<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>抽烟</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>drink<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>喝酒</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hobby<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>perm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>烫头</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用属性如下</strong>：</p>
<ul>
<li>name 属性：数据的名称。</li>
<li>value 属性：提交的数据值。</li>
<li>checked 属性：让该复选框默认选中。</li>
</ul>
<ol start="5">
<li>隐藏域</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hidden<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tag<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>用户不可见的一个输入区域，作用是： 提交表单的时候，携带一些固定的数据。</p>
<p><strong>常用属性如下</strong>：</p>
<ul>
<li>name 属性：指定数据的名称。</li>
<li>value 属性：指定的是真正提交的数据。</li>
</ul>
<ol start="6">
<li>提交按钮</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>点我提交表单<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>点我提交表单<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<ol>
<li>button 标签 type 属性的默认值是 submit 。</li>
<li>button 不要指定 name 属性。</li>
<li>input 标签编写的按钮，使用 value 属性指定按钮文字。</li>
</ol>
</blockquote>
<ol start="7">
<li>重置按钮</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>点我重置<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我重置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<ol>
<li>
<p>button 不要指定 name 属性</p>
</li>
<li>
<p>input 标签编写的按钮，使用 value 属性指定按钮文字。</p>
</li>
<li>
<p>普通按钮</p>
</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>普通按钮<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>普通按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<blockquote>
<p>普通按钮的 type 值为 button ，若不写 type 值是 submit 会引起表单的提交。</p>
</blockquote>
<ol start="8">
<li>文本域</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>msg<span class="token punctuation">"</span></span> <span class="token attr-name">rows</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>22<span class="token punctuation">"</span></span> <span class="token attr-name">cols</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是文本域<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>textarea</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>常用属性如下</strong>：</p>
<ul>
<li>rows 属性：指定默认显示的行数，会影响文本域的高度。</li>
<li>cols 属性：指定默认显示的列数，会影响文本域的宽度。</li>
<li>不能编写 type 属性，其他属性，与普通文本输入框一致。</li>
</ul>
<ol start="9">
<li>下拉框</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>from<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>黑<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>黑龙江<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>辽<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>辽宁<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>吉<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>吉林<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>粤<span class="token punctuation">"</span></span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>广东<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>常用属性及注意事项</strong>：</p>
<ul>
<li>name 属性：指定数据的名称。</li>
<li>option 标签设置 value 属性， 如果没有 value 属性，提交的数据是 option 中间的文 字；如果设置了 value 属性，提交的数据就是 value 的值（建议设置 value 属性）</li>
<li>option 标签设置了 selected 属性，表示默认选中。</li>
</ul>
<h3 id="_5-12-3-禁用表单控件" tabindex="-1"><a class="header-anchor" href="#_5-12-3-禁用表单控件"><span>5.12.3 禁用表单控件</span></a></h3>
<p>给表单控件的标签设置 disabled 既可禁用表单控件。
input 、 textarea 、 button 、 select 、 option 都可以设置 disabled 属性</p>
<h3 id="_5-12-4-label-标签" tabindex="-1"><a class="header-anchor" href="#_5-12-4-label-标签"><span>5.12.4 label 标签</span></a></h3>
<p>label 标签可与表单控件相关联，关联之后点击文字，与之对应的表单控件就会获取焦点。 两种与 label 关联方式如下：</p>
<ol>
<li>让 label 标签的 for 属性的值等于表单控件的 id 。</li>
<li>把表单控件套在 label 标签的里面。</li>
</ol>
<h3 id="_5-12-5-fieldset-与-legend-的使用-了解" tabindex="-1"><a class="header-anchor" href="#_5-12-5-fieldset-与-legend-的使用-了解"><span>5.12.5 fieldset 与 legend 的使用（了解）</span></a></h3>
<p>fieldset 可以为表单控件分组、 legend 标签是分组的标题。 示例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">></span></span>主要信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zhanghu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>账户：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>zhanghu<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>account<span class="token punctuation">"</span></span> <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">    密码：</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mima<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pwd<span class="token punctuation">"</span></span> <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">    性别：</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>male<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nan<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>female<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nv<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-12-6-表单总结" tabindex="-1"><a class="header-anchor" href="#_5-12-6-表单总结"><span>5.12.6 表单总结</span></a></h3>
<table>
<thead>
<tr>
<th>标签名</th>
<th>标签语义</th>
<th>常用属性</th>
</tr>
</thead>
<tbody>
<tr>
<td>form</td>
<td>表单</td>
<td><code v-pre>action</code> 属性： 表单要提交的地址。<br><code v-pre>target</code> 属性： 要跳转的新地址打开位置; 值: <code v-pre>_self</code> 、 <code v-pre>_blank</code><br><code v-pre>method </code>属性： 请求方式，值： get 、 post</td>
</tr>
<tr>
<td>input</td>
<td>多种形式的表单控件</td>
<td><code v-pre>type</code> 属性： 指定表单控件的类型。值： text 、 password 、 radio 、 checkbox 、 hidden 、 submit 、 resbutton 等。<br><code v-pre>name</code> 属性： 指定数据名称<br><code v-pre>value</code> 属性：<br>对于输入框：指定默认输入的值；<br>对于单选和复选框：实际提交的数据；<br>对于按钮：显示按钮文字。<br><code v-pre>disabled</code> 属性： 设置表单控件不可用。<br><code v-pre>maxlength</code> 属性： 用于输入框，设置最大可输入长度。<br><code v-pre>checked</code> 属性： 用于单选按钮和复选框，默认选中</td>
</tr>
<tr>
<td>textarea</td>
<td>文本域</td>
<td><code v-pre>name</code> 属性： 指定数据名称<br><code v-pre>rows</code> 属性： 指定默认显示的行数，影响文本域的高度。<br><code v-pre>cols</code> 属性： 指定默认显示的列数，影响文本域的宽度。<br><code v-pre>disabled</code> 属性： 设置表单控件不可用。</td>
</tr>
<tr>
<td>select</td>
<td>下拉框</td>
<td><code v-pre>name</code> 属性： 指定数据名称<br><code v-pre>disabled</code> 属性： 设置整个下拉框不可用。</td>
</tr>
<tr>
<td>option</td>
<td>下拉框的选项</td>
<td><code v-pre>disabled</code> 属性： 设置拉下选项不可用。<br><code v-pre>value</code> 属性： 该选项事件提交的数据（不指定value，会把标签中的内容作为提交数据）<br><code v-pre>selected</code> 属性： 默认选中。</td>
</tr>
<tr>
<td>button</td>
<td>按钮</td>
<td><code v-pre>disabled</code> 属性： 设置按钮不可用。<br>type 属性： 设置按钮的类型，值： <code v-pre>submit</code> （默认）、 <code v-pre>reset</code> 、 <code v-pre>button</code></td>
</tr>
<tr>
<td>label</td>
<td>与表单控件做关联</td>
<td>for 属性： 值与要关联的表单控件的ID值相同。</td>
</tr>
<tr>
<td>fieldset</td>
<td>表单边框</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_5-13-框架标签" tabindex="-1"><a class="header-anchor" href="#_5-13-框架标签"><span>5.13 框架标签</span></a></h2>
<table>
<thead>
<tr>
<th>标签名</th>
<th>功能和语义</th>
<th>属性</th>
<th>单/双标签</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>iframe</code></td>
<td>框架（在网页中嵌入其他文件）</td>
<td><code v-pre>name</code> ：框架名字，可以与 <code v-pre>target</code> 属性配合。<br><code v-pre>width</code> ： 框架的宽。<br><code v-pre>height</code> ： 框架的高度。<br> <code v-pre>frameborder</code> ：是否显示边框，值：0或者1。</td>
<td>双</td>
</tr>
</tbody>
</table>
<p><strong>iframe 标签的实际应用</strong>：</p>
<ol>
<li>在网页中嵌入广告。</li>
<li>与超链接或表单的 target 配合，展示不同的内容。</li>
</ol>
<h2 id="_5-14-html实体" tabindex="-1"><a class="header-anchor" href="#_5-14-html实体"><span>5.14 HTML实体</span></a></h2>
<p>在 HTML 中我们可以用一种特殊的形式的内容，来表示某个符号，这种特殊形式的内容，就是 HTML 实 体。比如小于号 &lt; 用于定义 HTML 标签的开始。如果我们希望浏览器正确地显示这些字符，我们必须 在 HTML 源码中插入字符实体。</p>
<blockquote>
<p>字符实体由三部分组成：一个 &amp; 和 一个实体名称（或者一个 # 和 一个实体编号），最后加上一 个分号 ; 。</p>
</blockquote>
<p><strong>常见字符实体总结</strong>：</p>
<table>
<thead>
<tr>
<th>符号</th>
<th>描述</th>
<th>实体名称</th>
<th>实体编号</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td>空格</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>&lt;</td>
<td>小于号</td>
<td>&lt;</td>
<td>&lt;</td>
</tr>
<tr>
<td>&gt;</td>
<td>大于号</td>
<td>&gt;</td>
<td>&gt;</td>
</tr>
<tr>
<td>&amp;</td>
<td>和号</td>
<td>&amp;</td>
<td>&amp;</td>
</tr>
<tr>
<td></td>
<td>引号</td>
<td>&quot;</td>
<td>&quot;</td>
</tr>
<tr>
<td>´</td>
<td>反引号</td>
<td>´</td>
<td>´</td>
</tr>
<tr>
<td>￠</td>
<td>分（cent）</td>
<td>¢</td>
<td>¢</td>
</tr>
<tr>
<td>£</td>
<td>镑（pound）</td>
<td>£</td>
<td>£</td>
</tr>
<tr>
<td>¥</td>
<td>元（yen）</td>
<td>¥</td>
<td>¥</td>
</tr>
<tr>
<td>€</td>
<td>欧元（euro）</td>
<td>€</td>
<td>€</td>
</tr>
<tr>
<td>©</td>
<td>版权（copyright）</td>
<td>©</td>
<td>©</td>
</tr>
<tr>
<td>®</td>
<td>注册商标</td>
<td>®</td>
<td>®</td>
</tr>
<tr>
<td>™</td>
<td>商标</td>
<td>™</td>
<td>™</td>
</tr>
<tr>
<td>×</td>
<td>乘号</td>
<td>&amp;times</td>
<td>×</td>
</tr>
<tr>
<td>÷</td>
<td>除号</td>
<td>÷</td>
<td>÷</td>
</tr>
</tbody>
</table>
<h2 id="_5-15-html全局属性" tabindex="-1"><a class="header-anchor" href="#_5-15-html全局属性"><span>5.15 HTML全局属性</span></a></h2>
<p>常用的全局属性：</p>
<table>
<thead>
<tr>
<th>属性名</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>给标签指定唯一标识，注意：id是不能重复的。作用：可以让label标签与表单控件相关联；也可以与CSS、JavaScript配合使用。</td>
</tr>
<tr>
<td>class</td>
<td>给标签指定类名，随后通过CSS就可以给标签设置样式。</td>
</tr>
<tr>
<td>style</td>
<td>给标签设置CSS样式。</td>
</tr>
<tr>
<td>dir</td>
<td>内容的方向，值:ltr、rtl</td>
</tr>
<tr>
<td>title</td>
<td>给标签设置一个文字提示，一般超链接和图片用得比较多。</td>
</tr>
<tr>
<td>lang</td>
<td>给标签指定语言，具体规范和可选值请参考【10.HTML设置语言】。</td>
</tr>
</tbody>
</table>
<h2 id="_5-16-meta-元信息" tabindex="-1"><a class="header-anchor" href="#_5-16-meta-元信息"><span>5.16 meta 元信息</span></a></h2>
<ol>
<li>配置字符编码</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>针对 IE 浏览器的兼容性配置。</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="3">
<li>针对移动端的配置（移动端课程中会详细讲解）</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="4">
<li>配置网页关键字</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>keywords<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8-12个以英文逗号隔开的单词/词语<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="5">
<li>配置网页描述信息</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>description<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>80字以内的一段话，与网站内容相关<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="6">
<li>针对搜索引擎爬虫配置：</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>robots<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>此处可选值见下表<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>index</td>
<td>允许搜索爬虫索引此页面。</td>
</tr>
<tr>
<td>noindex</td>
<td>要求搜索爬虫不索引此页面。</td>
</tr>
<tr>
<td>follow</td>
<td>允许搜索爬虫跟随此页面上的链接。</td>
</tr>
<tr>
<td>nofollow</td>
<td>要求搜索爬虫不跟随此页面上的链接。</td>
</tr>
<tr>
<td>all</td>
<td>与index,follow等价</td>
</tr>
<tr>
<td>none</td>
<td>与noindex,nofollow等价</td>
</tr>
<tr>
<td>noarchive</td>
<td>要求搜索引擎不缓存页面内容。</td>
</tr>
<tr>
<td>nocache</td>
<td>noarchive的替代名称。</td>
</tr>
</tbody>
</table>
<ol start="7">
<li>配置网页作者：</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tony<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="8">
<li>配置网页生成工具</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>generator<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Visual Studio Code<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="9">
<li>配置定义网页版权信息：</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>copyright<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2023-2027©版权所有<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="10">
<li>配置网页自动刷新</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refresh<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10;url=http://www.baidu.com<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


