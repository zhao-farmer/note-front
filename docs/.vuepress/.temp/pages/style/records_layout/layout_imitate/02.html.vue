<template><div><h1 id="二、列表布局" tabindex="-1"><a class="header-anchor" href="#二、列表布局"><span>二、列表布局</span></a></h1>
<p>display:list-item 是CSS display 属性的一个值，它用于将元素显示为列表项。然而，display:list-item 本身并不包含其他属性，它只是一个指示元素如何显示的单一值。不过，与列表项相关的CSS属性有很多，它们可以一起使用来定义列表项的外观和行为。</p>
<p>以下是与列表项相关的一些CSS属性：</p>
<ol>
<li>‌display:list-item‌：</li>
</ol>
<p>将元素显示为列表项。</p>
<ol start="2">
<li>list-style-type‌：</li>
</ol>
<p>设置列表项标记的类型，如圆点（disc）、数字（decimal）、罗马数字（upper-roman）等。</p>
<ol start="3">
<li>list-style-position‌：</li>
</ol>
<p>设置列表项标记的位置，如内部（inside）或外部（outside）。</p>
<ol start="4">
<li>‌list-style-image‌：</li>
</ol>
<p>使用图像作为列表项的标记。</p>
<ol start="5">
<li>‌margin‌ 和 ‌padding‌：</li>
</ol>
<p>设置列表项的外边距和内边距，以控制列表项之间的间距和元素内容与列表项边框之间的间距。</p>
<ol start="6">
<li>‌counter-reset‌ 和 ‌counter-increment‌：</li>
</ol>
<p>在有序列表（<code v-pre>&lt;ol&gt;</code>）中，这些属性用于自定义列表项的计数方式。</p>
<ol start="7">
<li>‌content‌：</li>
</ol>
<p>在伪元素（如 ::before 或 ::after）中，可以使用此属性来插入内容，例如自定义列表项的标记。
虽然这些属性不是 display:list-item 的“完整属性列表”，但它们是与列表项显示和样式相关的一些重要属性。在实际应用中，你可能会根据需要选择性地使用这些属性来定义列表项的外观和行为。</p>
<p>以下是一个包含上述属性的示例代码：</p>
<p><strong>代码</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">        <span class="token selector">.custom-list</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">list-style-type</span><span class="token punctuation">:</span> <span class="token string">"🌂"</span><span class="token punctuation">;</span> <span class="token comment">/* 设置列表项标记为方块 */</span></span>
<span class="line">            <span class="token property">list-style-position</span><span class="token punctuation">:</span> inside<span class="token punctuation">;</span> <span class="token comment">/* 将标记放置在列表项内部 */</span></span>
<span class="line">            <span class="token property">padding-left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token comment">/* 设置列表项的内边距 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token selector">.custom-list div</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">display</span><span class="token punctuation">:</span> list-item<span class="token punctuation">;</span> <span class="token comment">/* 明确设置列表项显示方式 */</span></span>
<span class="line">            <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token comment">/* 设置列表项之间的间距 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">/* 列表自带的自定义标记 与 list-style-type有冲突 */</span></span>
<span class="line">        <span class="token comment">/* .custom-list div::marker {</span>
<span class="line">            content: square; </span>
<span class="line">        } */</span></span>
<span class="line"></span>
<span class="line">        <span class="token selector">.custom-list div::before</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"●"</span><span class="token punctuation">;</span> <span class="token comment">/* 在列表项前插入自定义标记 */</span></span>
<span class="line">            <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span> <span class="token comment">/* 设置自定义标记与列表项内容之间的间距 */</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">       </span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>custom-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>列表项一<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>列表项二<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>列表项三<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/style/records_layout/layout_imitate/010.png" alt=""></p>
</div></template>


