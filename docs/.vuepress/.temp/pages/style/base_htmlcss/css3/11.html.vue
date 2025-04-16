<template><div><h1 id="十一、-3d变换" tabindex="-1"><a class="header-anchor" href="#十一、-3d变换"><span>十一、 3D变换</span></a></h1>
<h2 id="_11-1-开启3d空间" tabindex="-1"><a class="header-anchor" href="#_11-1-开启3d空间"><span>11.1 开启3D空间</span></a></h2>
<p><strong>重要原则</strong>：</p>
<blockquote>
<p>元素进行 3D 变换的首要操作：父元素必须开启 3D 空间！</p>
</blockquote>
<p><strong>使用 transform-style 开启 3D 空间，可选值如下</strong>：</p>
<ul>
<li>flat ： 让子元素位于此元素的二维平面内（ 2D 空间）—— 默认值</li>
<li>preserve-3d ： 让子元素位于此元素的三维空间内（ 3D 空间）</li>
</ul>
<h2 id="_11-2-设置景深" tabindex="-1"><a class="header-anchor" href="#_11-2-设置景深"><span>11.2 设置景深</span></a></h2>
<p><strong>何为景深？</strong></p>
<blockquote>
<p>指定观察者与 z=0 平面的距离，能让发生 3D 变换的元素，产生透视效果，看来更加立体。</p>
</blockquote>
<p><strong>使用 perspective 设置景深，可选值如下：</strong></p>
<ul>
<li>none ： 不指定透视 ——（默认值）</li>
<li>长度值 ： 指定观察者距离 z=0 平面的距离，不允许负值。</li>
</ul>
<p><strong>注意</strong>：</p>
<blockquote>
<p>perspective 设置给发生 3D 变换元素的父元素！</p>
</blockquote>
<h2 id="_11-3-透视点位置" tabindex="-1"><a class="header-anchor" href="#_11-3-透视点位置"><span>11.3 透视点位置</span></a></h2>
<p><em>所谓透视点位置，就是观察者位置；默认的透视点在元素的中心。</em></p>
<p><strong>使用 perspective-origin 设置观察者位置（透视点的位置），例如</strong>：</p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 相对坐标轴往右偏移400px， 往下偏移300px（相当于人蹲下300像素，然后向右移动400像素看元素）*/</span></span>
<span class="line">    <span class="token property">perspective-origin</span><span class="token punctuation">:</span> 400px 300px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p>
<blockquote>
<p>通常情况下，我们不需要调整透视点位置。</p>
</blockquote>
<h2 id="_11-4-3d-位移" tabindex="-1"><a class="header-anchor" href="#_11-4-3d-位移"><span>11.4 3D 位移</span></a></h2>
<p><em>3D 位移是在 2D 位移的基础上，可以让元素沿 z 轴位移</em></p>
<p><strong>具体使用方式如下</strong>：</p>
<ol>
<li>先给元素添加 转换属性 transform</li>
<li>编写 transform 的具体值， 3D 相关可选值如下：</li>
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
<td>translateZ</td>
<td>设置z轴位移，需指定长度值，正值向屏幕外，负值向屏幕里，且不能写百分比。</td>
</tr>
<tr>
<td>translate3d</td>
<td>第1个参数对应x轴，第2个参数对应y轴，第3个参数对应z轴，且均不能省略。</td>
</tr>
</tbody>
</table>
<h2 id="_11-5-3d-旋转" tabindex="-1"><a class="header-anchor" href="#_11-5-3d-旋转"><span>11.5 3D 旋转</span></a></h2>
<p><em>3D 旋转是在 2D 旋转的基础上，可以让元素沿 x 轴和 y 轴旋转</em></p>
<p><strong>具体使用方式如下</strong>：</p>
<ol>
<li>先给元素添加 转换属性 transform</li>
<li>编写 transform 的具体值， 3D 相关可选值如下：</li>
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
<td>rotateX</td>
<td>设置x轴旋转角度，需指定一个角度值(deg)，面对x轴正方向：正值顺时针，负值逆时针。</td>
</tr>
<tr>
<td>rotateY</td>
<td>设置y轴旋转角度，需指定一个角度值(deg)，面对y轴正方向：正值顺时针，负值逆时针。</td>
</tr>
<tr>
<td>rotate3d</td>
<td>前3个参数分别表示坐标轴：x,y,z，第4个参数表示旋转的角度，参数不允许省略。<br>例如： transform: rotate3d(1,1,1,30deg)，意思是：x、y、z分别旋转30度。</td>
</tr>
</tbody>
</table>
<h2 id="_11-6-3d-缩放" tabindex="-1"><a class="header-anchor" href="#_11-6-3d-缩放"><span>11.6 3D 缩放</span></a></h2>
<p><em>3D 缩放是在 2D 缩放的基础上，可以让元素沿 z 轴缩放</em></p>
<p><strong>具体使用方式如下</strong>：</p>
<ol>
<li>先给元素添加 转换属性 transform</li>
<li>编写 transform 的具体值， 3D 相关可选值如下：</li>
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
<td>scaleZ</td>
<td>设置z轴方向的缩放比例，值为一个数字，1表示不缩放，大于1放大，小于1缩小。</td>
</tr>
<tr>
<td>scale3d</td>
<td>第1个参数对应x轴，第2个参数对应y轴，第3个参数对应z轴，参数不允许省略。</td>
</tr>
</tbody>
</table>
<h2 id="_11-7-多重变换" tabindex="-1"><a class="header-anchor" href="#_11-7-多重变换"><span>11.7 多重变换</span></a></h2>
<p><em>多个变换，可以同时使用一个 transform 来编写。</em></p>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateZ</span><span class="token punctuation">(</span>100px<span class="token punctuation">)</span> <span class="token function">scaleZ</span><span class="token punctuation">(</span>3<span class="token punctuation">)</span> <span class="token function">rotateY</span><span class="token punctuation">(</span>40deg<span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token punctuation">}</span>    </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意点</strong>：</p>
<blockquote>
<p>多重变换时，建议最后旋转。</p>
</blockquote>
<h2 id="_11-8-背部可见性" tabindex="-1"><a class="header-anchor" href="#_11-8-背部可见性"><span>11.8 背部可见性</span></a></h2>
<p>使用 backface-visibility 指定元素背面，在面向用户时是否可见，常用值如下：</p>
<ul>
<li>visible ： 指定元素背面可见，允许显示正面的镜像。—— 默认值</li>
<li>hidden ： 指定元素背面不可见</li>
</ul>
</div></template>


