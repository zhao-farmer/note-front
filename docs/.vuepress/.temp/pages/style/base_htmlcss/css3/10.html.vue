<template><div><h1 id="十、-2d变换" tabindex="-1"><a class="header-anchor" href="#十、-2d变换"><span>十、 2D变换</span></a></h1>
<p>前提：二维坐标系如下图所示
<img src="/style/htmlcss/css3/016.jpg" alt=""></p>
<h2 id="_10-1-2d位移" tabindex="-1"><a class="header-anchor" href="#_10-1-2d位移"><span>10.1 2D位移</span></a></h2>
<p>2D 位移可以改变元素的位置，具体使用方式如下：</p>
<ol>
<li>先给元素添加 转换属性 transform</li>
<li>编写 transform 的具体值，相关可选值如下：</li>
</ol>
<table>
<thead>
<tr>
<th>值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>translateX</td>
<td>设置水平方向位移，需指定长度值；若指定的是百分比，是参考自身宽度的百分比。</td>
</tr>
<tr>
<td>translateY</td>
<td>设置垂直方向位移，需指定长度值；若指定的是百分比，是参考自身高度的百分比。</td>
</tr>
<tr>
<td>translate</td>
<td>一个值代表水平方向，两个值代表：水平和垂直方向。</td>
</tr>
</tbody>
</table>
<ol start="3">
<li>注意点：</li>
</ol>
<blockquote>
<ol>
<li>位移与相对定位很相似，都不脱离文档流，不会影响到其它元素。</li>
<li>与相对定位的区别：相对定位的百分比值，参考的是其父元素；定位的百分比值，参考的是
其自身。</li>
<li>浏览器针对位移有优化，与定位相比，浏览器处理位移的效率更高。</li>
<li>transform 可以链式编写，例如：</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>30px<span class="token punctuation">)</span> <span class="token function">translateY</span><span class="token punctuation">(</span>40px<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>位移对行内元素无效。</li>
<li>位移配合定位，可实现元素水平垂直居中</li>
</ol>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.box</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">   <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">   <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">   <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h2 id="_10-2-2d缩放" tabindex="-1"><a class="header-anchor" href="#_10-2-2d缩放"><span>10.2 2D缩放</span></a></h2>
<p><strong>2D 缩放是指</strong>：</p>
<blockquote>
<p>让元素放大或缩小，具体使用方式如下：</p>
</blockquote>
<ol>
<li>先给元素添加 转换属性 transform</li>
<li>编写 transform 的具体值，相关可选值如下：</li>
</ol>
<table>
<thead>
<tr>
<th>值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>scaleX</td>
<td>设置水平方向的缩放比例，值为一个数字，1表示不缩放，大于1放大，小于1缩小。</td>
</tr>
<tr>
<td>scaleY</td>
<td>设置垂直方向的缩放比例，值为一个数字，1表示不缩放，大于1放大，小于1缩小。</td>
</tr>
<tr>
<td>scale</td>
<td>同时设置水平方向、垂直方向的缩放比例，一个值代表同时设置水平和垂直缩放；两个值分别代表：水平缩放、垂直缩放。</td>
</tr>
</tbody>
</table>
<ol start="3">
<li>注意点：
<ul>
<li>scale 的值，是支持写负数的，但几乎不用，因为容易让人产生误解。</li>
<li>借助缩放，可实现小于 12px 的文字。</li>
</ul>
</li>
</ol>
<h2 id="_10-3-2d旋转" tabindex="-1"><a class="header-anchor" href="#_10-3-2d旋转"><span>10.3 2D旋转</span></a></h2>
<p><strong>2D 旋转是指</strong>：</p>
<blockquote>
<p>让元素在二维平面内，顺时针旋转或逆时针旋转，具体使用方式如下：</p>
</blockquote>
<ol>
<li>先给元素添加 转换属性 transform</li>
<li>编写 transform 的具体值，相关可选值如下</li>
</ol>
<table>
<thead>
<tr>
<th>值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>rotate</td>
<td>设置旋转角度，需指定一个角度值(deg)，正值顺时针，负值逆时针。</td>
</tr>
</tbody>
</table>
<p>注意：</p>
<blockquote>
<p>rotateZ(20deg) 相当于 rotate(20deg) ，当然到了 3D 变换的时候，还能写： rotate(x,x,x)</p>
</blockquote>
<h2 id="_10-4-2d扭曲-了解" tabindex="-1"><a class="header-anchor" href="#_10-4-2d扭曲-了解"><span>10.4 2D扭曲（了解）</span></a></h2>
<p><strong>2D 扭曲是指</strong>：</p>
<blockquote>
<p>让元素在二维平面内被“拉扯”，进而“走形”，实际开发几乎不用，了解即可。</p>
</blockquote>
<p><strong>具体使用方式如下</strong>：</p>
<ol>
<li>先给元素添加 转换属性 transform</li>
<li>编写 transform 的具体值，相关可选值如下：</li>
</ol>
<table>
<thead>
<tr>
<th>值</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>skewX</td>
<td>设置元素在水平方向扭曲，值为角度值，会将元素的左上角、右下角拉扯。</td>
</tr>
<tr>
<td>skewY</td>
<td>设置元素在垂直方向扭曲，值为角度值，会将元素的左上角、右下角拉扯。</td>
</tr>
<tr>
<td>skew</td>
<td>一个值代表skewX，两个值分别代表：skewX、skewY</td>
</tr>
</tbody>
</table>
<h2 id="_10-5-多重变换" tabindex="-1"><a class="header-anchor" href="#_10-5-多重变换"><span>10.5 多重变换</span></a></h2>
<p>多个变换，可以同时使用一个 transform 来编写。</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<blockquote>
<ul>
<li>多重变换时，建议最后旋转。</li>
<li>旋转后坐标轴会发生变化，导致位移与原来想要的发生变化，</li>
<li>如果使用 transform: scale(0.5) rotate(73deg) translate(100px,100px); 会将图形按照原本的样子进行旋转。</li>
</ul>
</blockquote>
<h2 id="_10-6-变换原点" tabindex="-1"><a class="header-anchor" href="#_10-6-变换原点"><span>10.6 变换原点</span></a></h2>
<ul>
<li>元素变换时，默认的原点是元素的中心，使用 transform-origin 可以设置变换的原点。</li>
<li>修改变换原点对位移没有影响， 对旋转和缩放会产生影响。</li>
<li>如果提供两个值，第一个用于横坐标，第二个用于纵坐标。</li>
<li>如果只提供一个，若是像素值，表示横坐标，纵坐标取 50% ；若是关键词，则另一个坐标取 50%</li>
</ul>
<p><strong>案例</strong>：</p>
<ol>
<li>transform-origin: 50% 50% ， 变换原点在元素的中心位置，百分比是相对于自身。—— 默认值</li>
<li>transform-origin: left top ，变换原点在元素的左上角 。</li>
<li>transform-origin: 50px 50px ， 变换原点距离元素左上角50px 50px的位置。</li>
<li>transform-origin: 0 ，只写一个值的时候，第二个值默认为 50% 。</li>
</ol>
</div></template>


