<template><div><h1 id="二、基础图形" tabindex="-1"><a class="header-anchor" href="#二、基础图形"><span>二、基础图形</span></a></h1>
<h2 id="_2-1-矩形" tabindex="-1"><a class="header-anchor" href="#_2-1-矩形"><span>2.1 矩形</span></a></h2>
<ul>
<li>基本语法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>rect</span>
<span class="line">  x<span class="token operator">=</span><span class="token string">"x-coordinate"</span>        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 矩形左上角的 x 坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  y<span class="token operator">=</span><span class="token string">"y-coordinate"</span>        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 矩形左上角的 y 坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  width<span class="token operator">=</span><span class="token string">"width-value"</span>     <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 矩形的宽度 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  height<span class="token operator">=</span><span class="token string">"height-value"</span>   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 矩形的高度 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  rx<span class="token operator">=</span><span class="token string">"rx-value"</span>           <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 矩形的圆角半径（水平方向） <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  ry<span class="token operator">=</span><span class="token string">"ry-value"</span>           <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 矩形的圆角半径（垂直方向） <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  fill<span class="token operator">=</span><span class="token string">"fill-color"</span>       <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 矩形的填充颜色 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">=</span><span class="token string">"stroke-color"</span>   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 矩形的描边颜色 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">-</span>width<span class="token operator">=</span><span class="token string">"width-value"</span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 矩形的描边宽度 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>属性解析：</p>
<ul>
<li>x 和 y 属性指定了矩形左上角的坐标，即矩形的起始点。</li>
<li>width 和 height 属性定义了矩形的宽度和高度。</li>
<li>rx 和 ry 属性用于指定矩形的圆角半径。如果只设置 rx，则所有角的圆角半径都相同；如果同时设置 rx 和ry，则可以分别指定水平和垂直方向的圆角半径。</li>
<li>fill 属性定义了矩形的填充颜色。</li>
<li>stroke 属性定义了矩形的描边颜色。</li>
<li>stroke-width 属性定义了矩形的描边宽度。</li>
</ul>
</li>
<li>
<p>坐标展示</p>
<p><img src="/animation/svg/base/image/006.png" alt=""></p>
</li>
<li>
<p>代码</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>600<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>120<span class="token punctuation">'</span></span> <span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 填充矩形 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>10<span class="token punctuation">'</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>10<span class="token punctuation">'</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>60<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>100<span class="token punctuation">'</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 边框矩形 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>100<span class="token punctuation">'</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>10<span class="token punctuation">'</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>60<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>100<span class="token punctuation">'</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- rx 和 ry 相等，逐渐增大--></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>200<span class="token punctuation">'</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>10<span class="token punctuation">'</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>5<span class="token punctuation">'</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>5<span class="token punctuation">'</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>60<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>100<span class="token punctuation">'</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- rx 和 ry 相等，逐渐增大--></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>300<span class="token punctuation">'</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>10<span class="token punctuation">'</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>20<span class="token punctuation">'</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>20<span class="token punctuation">'</span></span>  <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>60<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>100<span class="token punctuation">'</span></span>  <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- rx 和 ry 不相等 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>400<span class="token punctuation">'</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>10<span class="token punctuation">'</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>10<span class="token punctuation">'</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>30<span class="token punctuation">'</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>60<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>100<span class="token punctuation">'</span></span>  <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>500<span class="token punctuation">'</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>10<span class="token punctuation">'</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>30<span class="token punctuation">'</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>10<span class="token punctuation">'</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>60<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>100<span class="token punctuation">'</span></span>  <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg width='600' height='120' >
    <!-- 填充矩形 -->
    <rect x='10' y='10' width='60' height='100' />
    <!-- 边框矩形 -->
    <rect x='100' y='10' width='60' height='100' fill="none" stroke="black"/>
    <!-- rx 和 ry 相等，逐渐增大-->
    <rect x='200' y='10' rx='5' ry='5' width='60' height='100' fill="none" stroke="black" />
    <!-- rx 和 ry 相等，逐渐增大-->
    <rect x='300' y='10' rx='20' ry='20'  width='60' height='100'  fill="none" stroke="black" />
    <!-- rx 和 ry 不相等 -->
    <rect x='400' y='10' rx='10' ry='30' width='60' height='100'  fill="none" stroke="black" />
    <rect x='500' y='10' rx='30' ry='10' width='60' height='100'  fill="none" stroke="black" />
</svg>
<h2 id="_2-2-圆形" tabindex="-1"><a class="header-anchor" href="#_2-2-圆形"><span>2.2 圆形</span></a></h2>
<ul>
<li>基本语法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>circle</span>
<span class="line">  cx<span class="token operator">=</span><span class="token string">"x-coordinate"</span>      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 圆心的 x 坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  cy<span class="token operator">=</span><span class="token string">"y-coordinate"</span>      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 圆心的 y 坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  r<span class="token operator">=</span><span class="token string">"radius"</span>             <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 圆的半径 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  fill<span class="token operator">=</span><span class="token string">"fill-color"</span>      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 圆的填充颜色 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">=</span><span class="token string">"stroke-color"</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 圆的描边颜色 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">-</span>width<span class="token operator">=</span><span class="token string">"width"</span>   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 圆的描边宽度 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>属性解析：</p>
<ul>
<li>cx 和 cy 属性定义了圆心的坐标，即圆的中心点的位置。</li>
<li>r 属性定义了圆的半径，以确定圆的大小。</li>
<li>fill 属性定义了圆的填充颜色。</li>
<li>stroke 属性定义了圆的描边颜色。</li>
<li>stroke-width 属性定义了圆的描边宽度。</li>
</ul>
</li>
<li>
<p>坐标展示</p>
<p><img src="/animation/svg/base/image/007.png" alt=""></p>
</li>
<li>
<p>代码</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>600<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>150<span class="token punctuation">'</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>80<span class="token punctuation">'</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>80<span class="token punctuation">'</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>50<span class="token punctuation">'</span></span>  <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>circle</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>200<span class="token punctuation">'</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>80<span class="token punctuation">'</span></span> <span class="token attr-name">r</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>50<span class="token punctuation">'</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg width='600' height='150'>
    <circle cx='80' cy='80' r='50'  />
    <circle cx='200' cy='80' r='50' fill="none" stroke="black" />
</svg>
<h2 id="_2-3-椭圆" tabindex="-1"><a class="header-anchor" href="#_2-3-椭圆"><span>2.3 椭圆</span></a></h2>
<ul>
<li>基本语法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>ellipse</span>
<span class="line">  cx<span class="token operator">=</span><span class="token string">"x-coordinate"</span>      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 椭圆中心点的 x 坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  cy<span class="token operator">=</span><span class="token string">"y-coordinate"</span>      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 椭圆中心点的 y 坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  rx<span class="token operator">=</span><span class="token string">"x-radius"</span>          <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 椭圆水平轴的半径 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  ry<span class="token operator">=</span><span class="token string">"y-radius"</span>          <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 椭圆垂直轴的半径 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  fill<span class="token operator">=</span><span class="token string">"fill-color"</span>      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 椭圆的填充颜色 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">=</span><span class="token string">"stroke-color"</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 椭圆的描边颜色 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">-</span>width<span class="token operator">=</span><span class="token string">"width"</span>   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 椭圆的描边宽度 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>属性解析：</p>
<ul>
<li>cx 和 cy 属性定义了椭圆的中心点坐标，即椭圆的中心位置。</li>
<li>rx 属性定义了椭圆水平轴（x轴）的半径。</li>
<li>ry 属性定义了椭圆垂直轴（y轴）的半径。</li>
<li>fill 属性定义了椭圆的填充颜色。</li>
<li>stroke 属性定义了椭圆的描边颜色。</li>
<li>stroke-width 属性定义了椭圆的描边宽度。</li>
</ul>
</li>
<li>
<p>坐标展示</p>
<p><img src="/animation/svg/base/image/008.png" alt=""></p>
</li>
<li>
<p>代码</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>600<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>150<span class="token punctuation">'</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ellipse</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>50<span class="token punctuation">'</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>80<span class="token punctuation">'</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>30<span class="token punctuation">'</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>50<span class="token punctuation">'</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ellipse</span> <span class="token attr-name">cx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>150<span class="token punctuation">'</span></span> <span class="token attr-name">cy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>80<span class="token punctuation">'</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>50<span class="token punctuation">'</span></span> <span class="token attr-name">ry</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>30<span class="token punctuation">'</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>none<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg width='600' height='150'>
    <ellipse cx='50' cy='80' rx='30' ry='50' />
    <ellipse cx='150' cy='80' rx='50' ry='30' fill="none" stroke="black" />
</svg>
<h2 id="_2-4-直线" tabindex="-1"><a class="header-anchor" href="#_2-4-直线"><span>2.4 直线</span></a></h2>
<ul>
<li>基本语法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>line</span>
<span class="line">  x1<span class="token operator">=</span><span class="token string">"x1-coordinate"</span>     <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 起点的 x 坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  y1<span class="token operator">=</span><span class="token string">"y1-coordinate"</span>     <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 起点的 y 坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  x2<span class="token operator">=</span><span class="token string">"x2-coordinate"</span>     <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 终点的 x 坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  y2<span class="token operator">=</span><span class="token string">"y2-coordinate"</span>     <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 终点的 y 坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">=</span><span class="token string">"stroke-color"</span>  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 直线的颜色 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">-</span>width<span class="token operator">=</span><span class="token string">"width"</span>   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 直线的宽度 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>属性解析:</p>
<ul>
<li>x1 和 y1 属性定义了直线的起点坐标。</li>
<li>x2 和 y2 属性定义了直线的终点坐标。</li>
<li>stroke 属性定义了直线的颜色。</li>
<li>stroke-width 属性定义了直线的宽度。</li>
</ul>
</li>
<li>
<p>坐标展示</p>
<p><img src="/animation/svg/base/image/009.png" alt=""></p>
</li>
<li>
<p>代码</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>600<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>150<span class="token punctuation">'</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>line</span> <span class="token attr-name">x1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>0<span class="token punctuation">'</span></span> <span class="token attr-name">y1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>0<span class="token punctuation">'</span></span> <span class="token attr-name">x2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>100<span class="token punctuation">'</span></span> <span class="token attr-name">y2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>100<span class="token punctuation">'</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>line</span> <span class="token attr-name">x1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>100<span class="token punctuation">'</span></span> <span class="token attr-name">y1</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>0<span class="token punctuation">'</span></span> <span class="token attr-name">x2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>200<span class="token punctuation">'</span></span> <span class="token attr-name">y2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>0<span class="token punctuation">'</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg width='600' height='150'>
    <line x1='0' y1='0' x2='100' y2='100' stroke="black"/>
    <line x1='100' y1='0' x2='200' y2='0' stroke="black"/>
</svg>
<h2 id="_2-5-多段线" tabindex="-1"><a class="header-anchor" href="#_2-5-多段线"><span>2.5 多段线</span></a></h2>
<ul>
<li>基本语法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>polyline</span>
<span class="line">  points<span class="token operator">=</span><span class="token string">"x1,y1 x2,y2 x3,y3 ..."</span>   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 多段线各个顶点的坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  fill<span class="token operator">=</span><span class="token string">"none"</span>                      <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 多段线的填充颜色，使用 <span class="token string">"none"</span> 表示不填充 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">=</span><span class="token string">"stroke-color"</span>            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 多段线的边框颜色 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">-</span>width<span class="token operator">=</span><span class="token string">"width"</span>             <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 多段线的边框宽度 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>属性解析：</p>
<ul>
<li>points 属性定义了多段线各个顶点的坐标，多个顶点的坐标以空格或逗号分隔，并且每对坐标使用逗号分隔。</li>
<li>fill 属性用于定义多段线的填充颜色，通常设置为 &quot;none&quot; 表示不填充。</li>
<li>stroke 属性定义了多段线的边框颜色。</li>
<li>stroke-width 属性定义了多段线的边框宽度。</li>
</ul>
</li>
<li>
<p>坐标展示</p>
<p><img src="/animation/svg/base/image/010.png" alt=""></p>
</li>
<li>
<p>代码</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>600<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>150<span class="token punctuation">'</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polyline</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>20,20,40,25,60,40,80,120,120,140,200,180<span class="token punctuation">'</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>black<span class="token punctuation">'</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>none<span class="token punctuation">'</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polyline</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200,40 240,40 240,80 280,80 280,120 320,120 320,160<span class="token punctuation">"</span></span>  <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>black<span class="token punctuation">'</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>none<span class="token punctuation">'</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<svg width='600' height='150'>
    <polyline points='20,20,40,25,60,40,80,120,120,140,200,180' stroke='black' fill='none' />
    <polyline points="200,40 240,40 240,80 280,80 280,120 320,120 320,160"  stroke='black' fill='none' />
</svg>
<h2 id="_2-6-多边形" tabindex="-1"><a class="header-anchor" href="#_2-6-多边形"><span>2.6 多边形</span></a></h2>
<ul>
<li>基本语法</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>polygon</span>
<span class="line">  points<span class="token operator">=</span><span class="token string">"x1,y1 x2,y2 x3,y3 ..."</span>   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 多边形各个顶点的坐标 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  fill<span class="token operator">=</span><span class="token string">"fill-color"</span>                <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 多边形的填充颜色 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">=</span><span class="token string">"stroke-color"</span>            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 多边形的边框颜色 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line">  stroke<span class="token operator">-</span>width<span class="token operator">=</span><span class="token string">"width"</span>             <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 多边形的边框宽度 <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>属性解析：</p>
<ul>
<li>points 属性定义了多边形各个顶点的坐标，多个顶点的坐标以空格或逗号分隔，并且每对坐标使用逗号分隔。</li>
<li>fill 属性定义了多边形的填充颜色。</li>
<li>stroke 属性定义了多边形的边框颜色。</li>
<li>stroke-width 属性定义了多边形的边框宽度。</li>
</ul>
</li>
<li>
<p>坐标展示</p>
<p><img src="/animation/svg/base/image/011.png" alt=""></p>
</li>
<li>
<p>代码</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>600<span class="token punctuation">'</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>150<span class="token punctuation">'</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>30,10 100,10 80,120 10,120<span class="token punctuation">'</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>35,37.5 37.9,46.1 46.9,46.1 39.7,51.5 42.3,60.1 35,55 27.7,60.1 30.3,51.5 23.1,46.1 32.1,46.1<span class="token punctuation">'</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ccffcc<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>60 60, 65,72 80 60, 90,90 72,85 50,95<span class="token punctuation">'</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>black<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>svg 图</li>
</ul>
<p><img src="/animation/svg/base/image/012.png" alt=""></p>
</div></template>


