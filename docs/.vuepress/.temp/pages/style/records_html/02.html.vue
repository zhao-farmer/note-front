<template><div><h1 id="图像标签-img" tabindex="-1"><a class="header-anchor" href="#图像标签-img"><span>图像标签 img</span></a></h1>
<h2 id="_1、基本定义与用法" tabindex="-1"><a class="header-anchor" href="#_1、基本定义与用法"><span>1、基本定义与用法</span></a></h2>
<p><code v-pre>&lt;img&gt;</code>标签是HTML中用于定义图像的空标签，即它没有闭合标签。
它通过src属性指定图像的路径或URL，从而在页面上显示图像。</p>
<h2 id="_2、支持的图像格式" tabindex="-1"><a class="header-anchor" href="#_2、支持的图像格式"><span>2、支持的图像格式</span></a></h2>
<p><img src="/style/html_records/img/001.png" alt=""></p>
<h2 id="_3、基本语法格式" tabindex="-1"><a class="header-anchor" href="#_3、基本语法格式"><span>3、基本语法格式</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片路径<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>替代文本<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_4、主要属性" tabindex="-1"><a class="header-anchor" href="#_4、主要属性"><span>4、主要属性</span></a></h2>
<h3 id="_4-1-src‌" tabindex="-1"><a class="header-anchor" href="#_4-1-src‌"><span>4.1 src‌：</span></a></h3>
<ul>
<li>必需属性，用于指定要显示的图像的URL。</li>
<li>URL可以是相对路径（相对于当前HTML文件的位置）或绝对路径（完整的URL地址）。</li>
</ul>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/00.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>展示结果</strong></p>
<p><img src="/style/html_records/img/002.png" alt=""></p>
<h3 id="_4-2-alt‌" tabindex="-1"><a class="header-anchor" href="#_4-2-alt‌"><span>4.2 alt‌：</span></a></h3>
<p>提供图像的替代文本，当图像无法显示时，将显示该文本。
有助于提高页面的无障碍性，对屏幕阅读器和搜索引擎友好。</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>代替图片出现<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>展示结果</strong></p>
<p><img src="/style/html_records/img/003.png" alt=""></p>
<h3 id="_4-3-width‌和‌height‌" tabindex="-1"><a class="header-anchor" href="#_4-3-width‌和‌height‌"><span>4.3 width‌和‌height‌：</span></a></h3>
<ul>
<li>用于设置图像的宽度和高度。</li>
<li>可以使用像素值或百分比值。</li>
<li>可以只指定 width 和 height 中的一个值，浏览器会根据原始图像进行缩放。</li>
<li>通常建议通过CSS来控制图像的大小，以便更好地适应不同的屏幕尺寸和分辨率。</li>
</ul>
<p><strong>html版本代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/00.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>css版本代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">img</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">        <span class="token property">width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/00.jpg<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>展示结果</strong></p>
<p><img src="/style/html_records/img/004.png" alt=""></p>
<h3 id="_4-4-title‌" tabindex="-1"><a class="header-anchor" href="#_4-4-title‌"><span>4.4 title‌：</span></a></h3>
<blockquote>
<p>为图像提供额外的说明文本，当鼠标悬停在图像上时显示。</p>
</blockquote>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/00.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>这是一张美女图片<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>展示结果</strong></p>
<p><img src="/style/html_records/img/005.png" alt=""></p>
<h3 id="_4-5-loading‌" tabindex="-1"><a class="header-anchor" href="#_4-5-loading‌"><span>4.5 loading‌：</span></a></h3>
<p>loading属性用于指示浏览器何时加载图像资源。它有两个主要的值：<code v-pre>lazy</code>和<code v-pre>eager</code>，这两个值在图像的加载行为上有显著的区别。</p>
<ol>
<li>lazy（懒加载）
‌   - 行为‌：当loading属性设置为lazy时，图像将采用懒加载的方式。这意味着图像资源不会在页面加载时立即加载，而是会在用户滚动到图像即将进入视口（即用户可见区域）时才开始加载。
‌   - 优势‌：懒加载可以显著减少初始页面加载时间，提高页面加载性能，特别是对于那些包含大量图像的页面。它有助于优化用户体验，减少不必要的带宽使用，特别是在移动设备上。
‌   - 兼容性‌：现代浏览器（如Chrome、Firefox、Edge、Safari等）普遍支持loading=&quot;lazy&quot;。但在较旧的浏览器中，可能需要使用JavaScript库（如lazysizes）来实现懒加载功能。</li>
<li>eager（立即加载）
<ul>
<li>‌行为‌：当loading属性设置为eager（或未设置loading属性，因为eager是默认值）时，图像将在页面加载时立即加载，无论图像是否在视口内。</li>
<li>‌适用场景‌：eager加载适用于那些需要立即显示的图像，如页面的关键内容或首屏图像。这些图像对于用户理解页面内容至关重要，因此应该尽快加载。
‌    - 注意事项‌：虽然eager加载确保了图像的即时可见性，但在页面包含大量图像时，它可能会增加初始页面加载时间，影响页面性能。</li>
</ul>
</li>
</ol>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>HTML img loading 属性 lazy 与 eager 示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> 2000px<span class="token punctuation">;</span> <span class="token comment">/* 设置一个较大的高度来模拟滚动页面 */</span></span>
<span class="line">            <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">img</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">margin</span><span class="token punctuation">:</span> 20px auto<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">            <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 立即加载的图像 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/00.jpg<span class="token punctuation">"</span></span>  <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>eager<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">&lt;!-- ... 页面内容 ... --></span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">&lt;!-- 懒加载的图像 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>./images/005.gif<span class="token punctuation">"</span></span>  <span class="token attr-name">loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-srcset‌和‌sizes‌" tabindex="-1"><a class="header-anchor" href="#_4-6-srcset‌和‌sizes‌"><span>4.6 srcset‌和‌sizes‌：</span></a></h3>
<ol>
<li>srcset属性‌：</li>
</ol>
<ul>
<li>用于指定一组不同大小或分辨率的图像文件，以便浏览器可以根据设备的像素密度和屏幕大小选择最合适的图像进行加载。</li>
<li>它的值是一个逗号分隔的列表，其中每个项目都包含一个图像文件的URL和一个描述符。描述符可以是像素密度（如“1x”或“2x”）或图像宽度（如“320w”或“640w”）‌12。</li>
<li>当浏览器支持srcset属性时，它会根据当前屏幕的像素密度或图像宽度描述符来选择最合适的图像；如果不支持，则会回退到src属性中指定的图像‌。</li>
</ul>
<p>‌2. sizes属性‌：</p>
<ul>
<li>为浏览器提供将要显示图像的尺寸信息，它与srcset属性配合使用，帮助浏览器在不同条件下选择正确尺寸的图像‌。</li>
<li>sizes属性包含一个由逗号分隔的列表，每个列表项都包含一个媒体条件（类似于CSS媒体查询）和一个源图尺寸值。媒体条件用于指定在何种情况下应用该尺寸值，而源图尺寸值则决定了在特定媒体条件下图像的宽度‌。</li>
</ul>
<blockquote>
<p>需要注意的是，源图尺寸值不能使用百分比，vw是唯一可用的CSS单位‌。
sizes属性在srcset使用宽度描述符（w）时尤其重要，因为它告诉浏览器如何根据屏幕尺寸和像素密度的计算值从srcset中选择最佳的图片源‌6。</p>
</blockquote>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>HTML img srcset 和 sizes 示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 使用 srcset 提供不同分辨率的图像，sizes 提供图像显示尺寸的信息 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-small.jpg 320w,</span>
<span class="line">                    image-medium.jpg 640w,</span>
<span class="line">                    image-large.jpg 1024w<span class="token punctuation">"</span></span></span>
<span class="line">            <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(max-width: 600px) 480px,</span>
<span class="line">                   (max-width: 1200px) 800px,</span>
<span class="line">                   1024px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 当浏览器不支持 &lt;picture> 或 &lt;source> 时，回退到 img 的 src --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-default.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Responsive image example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、img-总结" tabindex="-1"><a class="header-anchor" href="#_5、img-总结"><span>5、img 总结</span></a></h2>
<p><code v-pre>&lt;img&gt;</code> 没有基线（baseline）;
根据图像文件的类型，图像可能会有一个原始分辨率（intrinsic dimension）或者叫原始宽高。对于一些类型的图像，原始分辨率并不是必要的；
在高分辨率设备上， srcset 将被优先加载，取代 src 属性中的图像。在支持 srcset 的用户代理中，src 属性中的图片被作为 1x 候选项；
alt 属性的值应该清晰、简洁地描述图像的内容。它不应该描述“图像的存在”，或仅仅包含图像的文件名。如果因为图像没有等价的文本描述，alt 属性只得不写或留白，那么可以考虑使用其他方法来呈现图像试图传递的内容；</p>
<h2 id="_6、路径" tabindex="-1"><a class="header-anchor" href="#_6、路径"><span>6、路径</span></a></h2>
<p>实际工作中，我们的文件不能随便乱放，否则用起来很难快速的找到他们，因此我们需要一个文件夹来管理他们。</p>
<ul>
<li>目录文件夹就是普通文件夹，里面只不过存放了我们做页面所需要的相关素材，比如 html 文件，图片等等。</li>
<li>打开目录文件夹的第一层就是根目录。</li>
</ul>
<p>页面中的图片会非常多，通常我们再新建一个文件夹专门用于存放图像文件（images），这时再插入图像，就需要采用“路径”的方式来指定图像文件的位置。路径可以分为：相对路径和绝对路径。</p>
<ol>
<li>
<p>相对路径
以引用文件之网页所在位置为参考基础，而建立出的目录路径。因此，当保存于不同目录的网页引用同一个文件时，所使用的路径将不相同，故称之为相对路径。</p>
</li>
<li>
<p>绝对路径
绝对路径以 web 站点根目录为参考基础的目录路径。之所以称为绝对，意指当所有网页引用同一个文件时，所使用的路径都是一样的。</p>
</li>
</ol>
<p>注意：
绝对路径用的较少，理解下就可以了。但是要注意，它的写法特别是符号 \ 并不是相对路径的 /。</p>
</div></template>


