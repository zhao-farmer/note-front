<template><div><h1 id="七、定位" tabindex="-1"><a class="header-anchor" href="#七、定位"><span>七、定位</span></a></h1>
<h2 id="_7-1-相对定位" tabindex="-1"><a class="header-anchor" href="#_7-1-相对定位"><span>7.1 相对定位</span></a></h2>
<h3 id="_7-1-1-如何设置相对定位" tabindex="-1"><a class="header-anchor" href="#_7-1-1-如何设置相对定位"><span>7.1.1 如何设置相对定位？</span></a></h3>
<ul>
<li>给元素设置 <code v-pre>position:relative</code> 即可实现相对定位。</li>
<li>可以使用 <code v-pre>left</code> 、 <code v-pre>right</code> 、 <code v-pre>top</code> 、 <code v-pre>bottom</code> 四个属性调整位置。</li>
</ul>
<h3 id="_7-1-2-相对定位的参考点在哪里" tabindex="-1"><a class="header-anchor" href="#_7-1-2-相对定位的参考点在哪里"><span>7.1.2 相对定位的参考点在哪里？</span></a></h3>
<blockquote>
<p>相对自己原来的位置</p>
</blockquote>
<h3 id="_7-1-3-相对定位的特点" tabindex="-1"><a class="header-anchor" href="#_7-1-3-相对定位的特点"><span>7.1.3 相对定位的特点：</span></a></h3>
<ol>
<li>不会脱离文档流，元素位置的变化，只是视觉效果上的变化，不会对其他元素产生任何影响。</li>
<li>定位元素的显示层级比普通元素高，无论什么定位，显示层级都是一样的。<br>
默认规则是：
<ul>
<li>定位的元素会盖在普通元素之上</li>
<li>都发生定位的两个元素，后写的元素会盖在先写的元素之上。</li>
</ul>
</li>
<li>left 不能和 right 一起设置， top 和 bottom 不能一起设置。</li>
<li>相对定位的元素，也能继续浮动，但不推荐这样做。</li>
<li>相对行为的元素，也能通过 margin 调整位置，但不推荐这样做。</li>
</ol>
<p><strong>注意</strong>：</p>
<blockquote>
<p>绝大多数情况下，相对定位，会与绝对定位配合使用。</p>
</blockquote>
<h2 id="_7-2-绝对定位" tabindex="-1"><a class="header-anchor" href="#_7-2-绝对定位"><span>7.2 绝对定位</span></a></h2>
<h3 id="_7-2-1-如何设置绝对定位" tabindex="-1"><a class="header-anchor" href="#_7-2-1-如何设置绝对定位"><span>7.2.1 如何设置绝对定位？</span></a></h3>
<ul>
<li>给元素设置 <code v-pre>position: absolute</code> 即可实现绝对定位。</li>
<li>可以使用 <code v-pre>left</code> 、 <code v-pre>right</code> 、 <code v-pre>top</code> 、 <code v-pre>bottom</code> 四个属性调整位置。</li>
</ul>
<h3 id="_7-2-2-绝对定位的参考点在哪里" tabindex="-1"><a class="header-anchor" href="#_7-2-2-绝对定位的参考点在哪里"><span>7.2.2 绝对定位的参考点在哪里？</span></a></h3>
<ul>
<li>参考它的包含块。</li>
<li>什么是包含块？
<ol>
<li>对于没有脱离文档流的元素：包含块就是父元素；</li>
<li>对于脱离文档流的元素：包含块是第一个拥有定位属性的祖先元素（如果所有祖先都 没定位，那包含块就是整个页面）。</li>
</ol>
</li>
</ul>
<h3 id="_7-2-3-绝对定位元素的特点" tabindex="-1"><a class="header-anchor" href="#_7-2-3-绝对定位元素的特点"><span>7.2.3 绝对定位元素的特点：</span></a></h3>
<ol>
<li>脱离文档流，会对后面的兄弟元素、父元素有影响。</li>
<li>left 不能和 right 一起设置， top 和 bottom 不能一起设置。</li>
<li>绝对定位、浮动不能同时设置，如果同时设置，浮动失效，以定位为主。</li>
<li>绝对定位的元素，也能通过 margin 调整位置，但不推荐这样做。</li>
<li>无论是什么元素（行内、行内块、块级）设置为绝对定位之后，都变成了定位元素。
<ul>
<li>何为定位元素？ —— 默认宽、高都被内容所撑开，且能自由设置宽高。</li>
</ul>
</li>
</ol>
<h2 id="_7-3-固定定位" tabindex="-1"><a class="header-anchor" href="#_7-3-固定定位"><span>7.3 固定定位</span></a></h2>
<h3 id="_7-3-1-如何设置为固定定位" tabindex="-1"><a class="header-anchor" href="#_7-3-1-如何设置为固定定位"><span>7.3.1 如何设置为固定定位？</span></a></h3>
<ul>
<li>给元素设置 position: fixed 即可实现固定定位。</li>
<li>可以使用 left 、 right 、 top 、 bottom 四个属性调整位置。</li>
</ul>
<h3 id="_7-3-2-固定定位的参考点在哪里" tabindex="-1"><a class="header-anchor" href="#_7-3-2-固定定位的参考点在哪里"><span>7.3.2 固定定位的参考点在哪里？</span></a></h3>
<ul>
<li>参考它的视口</li>
<li>什么是视口？—— 对于 PC 浏览器来说，视口就是我们看网页的那扇“窗户”。</li>
</ul>
<h3 id="_7-3-3-固定定位元素的特点" tabindex="-1"><a class="header-anchor" href="#_7-3-3-固定定位元素的特点"><span>7.3.3 固定定位元素的特点</span></a></h3>
<ol>
<li>脱离文档流，会对后面的兄弟元素、父元素有影响。</li>
<li>left 不能和 right 一起设置， top 和 bottom 不能一起设置。</li>
<li>固定定位和浮动不能同时设置，如果同时设置，浮动失效，以固定定位为主。</li>
<li>固定定位的元素，也能通过 margin 调整位置，但不推荐这样做。</li>
<li>无论是什么元素（行内、行内块、块级）设置为固定定位之后，都变成了定位元素。</li>
</ol>
<h2 id="_7-4-粘性定位" tabindex="-1"><a class="header-anchor" href="#_7-4-粘性定位"><span>7.4 粘性定位</span></a></h2>
<h3 id="_7-4-1-如何设置为粘性定位" tabindex="-1"><a class="header-anchor" href="#_7-4-1-如何设置为粘性定位"><span>7.4.1 如何设置为粘性定位？</span></a></h3>
<ul>
<li>给元素设置 position:sticky 即可实现粘性定位。</li>
<li>可以使用 left 、 right 、 top 、 bottom 四个属性调整位置，不过最常用的是 top 值。</li>
</ul>
<h3 id="_7-4-2-粘性定位的参考点在哪里" tabindex="-1"><a class="header-anchor" href="#_7-4-2-粘性定位的参考点在哪里"><span>7.4.2 粘性定位的参考点在哪里？</span></a></h3>
<blockquote>
<p>离它最近的一个拥有“滚动机制”的祖先元素，即便这个祖先不是最近的真实可滚动祖先。</p>
</blockquote>
<h3 id="_7-4-3-粘性定位元素的特点" tabindex="-1"><a class="header-anchor" href="#_7-4-3-粘性定位元素的特点"><span>7.4.3 粘性定位元素的特点</span></a></h3>
<ul>
<li>不会脱离文档流，它是一种专门用于窗口滚动时的新的定位方式。</li>
<li>最常用的值是 top 值。</li>
<li>粘性定位和浮动可以同时设置，但不推荐这样做。</li>
<li>粘性定位的元素，也能通过 margin 调整位置，但不推荐这样做。</li>
</ul>
<blockquote>
<p>粘性定位和相对定位的特点基本一致，不同的是：粘性定位可以在元素到达某个位置时将其固定。</p>
</blockquote>
<h2 id="_7-5-定位层级" tabindex="-1"><a class="header-anchor" href="#_7-5-定位层级"><span>7.5. 定位层级</span></a></h2>
<ol>
<li>定位元素的显示层级比普通元素高，无论什么定位，显示层级都是一样的。</li>
<li>如果位置发生重叠，默认情况是：后面的元素，会显示在前面元素之上。</li>
<li>可以通过 css 属性 z-index 调整元素的显示层级。</li>
<li>z-index 的属性值是数字，没有单位，值越大显示层级越高。</li>
<li>只有定位的元素设置 z-index 才有效。</li>
<li>如果 z-index 值大的元素，依然没有覆盖掉 z-index 值小的元素，那么请检查其包含块的层级。</li>
</ol>
<h2 id="_7-6-定位的特殊应用" tabindex="-1"><a class="header-anchor" href="#_7-6-定位的特殊应用"><span>7.6 定位的特殊应用</span></a></h2>
<p><strong>注意</strong>：</p>
<ol>
<li>发生固定定位、绝对定位后，元素都变成了定位元素，默认宽高被内容撑开，且依然可以设 置宽高。</li>
<li>发生相对定位后，元素依然是之前的显示模式。</li>
<li>以下所说的特殊应用，只针对 绝对定位 和 固定定位 的元素，不包括相对定位的元素。</li>
</ol>
<p><strong>让定位元素的宽充满包含块</strong></p>
<ol>
<li>块宽想与包含块一致，可以给定位元素同时设置 left 和 right 为 0 。</li>
<li>高度想与包含块一致， top 和 bottom 设置为 0 。</li>
</ol>
<p><strong>让定位元素在包含块中居中</strong></p>
<ul>
<li>方案一：</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">right</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>方案二：</li>
</ul>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin-left</span><span class="token punctuation">:</span> 负的宽度一半<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">margin-top</span><span class="token punctuation">:</span> 负的高度一半<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<p>该定位的元素必须设置宽高！！！</p>
</blockquote>
</div></template>


