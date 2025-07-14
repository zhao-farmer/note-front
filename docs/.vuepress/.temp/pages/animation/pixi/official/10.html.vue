<template><div><h1 id="十、数学" tabindex="-1"><a class="header-anchor" href="#十、数学"><span>十、数学</span></a></h1>
<p>PixiJS包括一些用于2D转换、几何和形状操作的数学实用程序。本指南介绍了最重要的类及其用例，包括通过 <code v-pre>math-extras</code> 启用的可选高级方法。</p>
<h2 id="_10-1-矩阵" tabindex="-1"><a class="header-anchor" href="#_10-1-矩阵"><span>10.1 矩阵</span></a></h2>
<p><code v-pre>Matrix</code> 类表示一个二维仿射变换矩阵。它广泛用于缩放、平移和旋转等转换。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Matrix<span class="token punctuation">,</span> Point <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> matrix <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Matrix</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">matrix<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">matrix</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// result is (20, 30)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_10-2-point和observablepoint" tabindex="-1"><a class="header-anchor" href="#_10-2-point和observablepoint"><span>10.2 Point和ObservablePoint</span></a></h2>
<h3 id="_10-2-1-point" tabindex="-1"><a class="header-anchor" href="#_10-2-1-point"><span>10.2.1 <code v-pre>Point</code></span></a></h3>
<p>Point对象表示二维坐标系中的位置，其中 <code v-pre>x</code> 表示横轴上的位置， <code v-pre>y</code> 表示纵轴上的位置。许多Pixi函数接受 <code v-pre>PointData</code> 类型作为 <code v-pre>Point</code> 的替代类型，后者只需要 <code v-pre>x</code> 和 <code v-pre>y</code> 属性。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Point <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> point <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">point<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// set x and y</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-2-observablepoint" tabindex="-1"><a class="header-anchor" href="#_10-2-2-observablepoint"><span>10.2.2 <code v-pre>ObservablePoint</code></span></a></h3>
<p>扩展 <code v-pre>Point</code> ，并在其值改变时触发回调。内部用于响应系统，如位置和规模更新。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Point<span class="token punctuation">,</span> ObservablePoint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">_onUpdate</span><span class="token operator">:</span> <span class="token punctuation">(</span>point<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Point updated to: (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>point<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>point<span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> reactive <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObservablePoint</span><span class="token punctuation">(</span>observer<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">reactive<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// triggers call to _onUpdate</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_10-3-形状" tabindex="-1"><a class="header-anchor" href="#_10-3-形状"><span>10.3 形状</span></a></h2>
<p>PixiJS包含几个2D形状，用于命中测试、渲染和几何计算。</p>
<h3 id="_10-3-1-rectangle" tabindex="-1"><a class="header-anchor" href="#_10-3-1-rectangle"><span>10.3.1 <code v-pre>Rectangle</code></span></a></h3>
<p>Axis-aligned矩形定义的 <code v-pre>x</code> ,  <code v-pre>y</code> ,  <code v-pre>width</code> ,和 <code v-pre>height</code> 。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Rectangle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> rect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">rect<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-2-circle" tabindex="-1"><a class="header-anchor" href="#_10-3-2-circle"><span>10.3.2 <code v-pre>Circle</code></span></a></h3>
<p>定义的 <code v-pre>x</code> ,  <code v-pre>y</code> (中心)和 <code v-pre>radius</code> 。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Circle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">circle<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-3-ellipse" tabindex="-1"><a class="header-anchor" href="#_10-3-3-ellipse"><span>10.3.3 <code v-pre>Ellipse</code></span></a></h3>
<p>类似于 <code v-pre>Circle</code> ，但支持不同的宽度和高度（半径）。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Ellipse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> ellipse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ellipse</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ellipse<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-4-polygon" tabindex="-1"><a class="header-anchor" href="#_10-3-4-polygon"><span>10.3.4 <code v-pre>Polygon</code></span></a></h3>
<p>由点列表定义的。用于复杂形状和命中测试。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Polygon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> polygon <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Polygon</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">polygon<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-5-roundedrectangle" tabindex="-1"><a class="header-anchor" href="#_10-3-5-roundedrectangle"><span>10.3.5 <code v-pre>RoundedRectangle</code></span></a></h3>
<p>圆角矩形，由半径定义。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> RoundedRectangle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> roundRect <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RoundedRectangle</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">roundRect<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-6-triangle" tabindex="-1"><a class="header-anchor" href="#_10-3-6-triangle"><span>10.3.6 <code v-pre>Triangle</code></span></a></h3>
<p>用于定义具有三个点的三角形的方便包装器。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Triangle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> triangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Triangle</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">triangle<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_10-4-可选-math-extras" tabindex="-1"><a class="header-anchor" href="#_10-4-可选-math-extras"><span>10.4 可选: <code v-pre>math-extras</code></span></a></h2>
<p>导入 <code v-pre>pixi.js/math-extras</code> 扩展 <code v-pre>Point</code> 和 <code v-pre>Rectangle</code> 与额外的矢量和几何实用程序。</p>
<h3 id="_10-4-1-启用" tabindex="-1"><a class="header-anchor" href="#_10-4-1-启用"><span>10.4.1 启用:</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">'pixi.js/math-extras'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_10-4-2-增强-point-方法" tabindex="-1"><a class="header-anchor" href="#_10-4-2-增强-point-方法"><span>10.4.2 增强 <code v-pre>Point</code> 方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>add(other[, out])</code></td>
<td>给这个加了另一个点。</td>
</tr>
<tr>
<td><code v-pre>subtract(other[, out])</code></td>
<td>从这个点减去另一个点。</td>
</tr>
<tr>
<td><code v-pre>multiply(other[, out])</code></td>
<td>将这个点与另一个点按分量相乘。</td>
</tr>
<tr>
<td><code v-pre>multiplyScalar(scalar[, out])</code></td>
<td>用一个标量乘以这个点。</td>
</tr>
<tr>
<td><code v-pre>dot(other)</code></td>
<td>计算两个向量的点积。</td>
</tr>
<tr>
<td><code v-pre>cross(other)</code></td>
<td>计算三维叉乘的标量z分量。</td>
</tr>
<tr>
<td><code v-pre>normalize([out])</code></td>
<td>返回一个标准化的（单位长度）向量。</td>
</tr>
<tr>
<td><code v-pre>magnitude()</code></td>
<td>返回欧几里德长度。</td>
</tr>
<tr>
<td><code v-pre>magnitudeSquared()</code></td>
<td>返回长度的平方（更有效的比较）。</td>
</tr>
<tr>
<td><code v-pre>project(onto[, out])</code></td>
<td>将这个点投影到另一个向量上。</td>
</tr>
<tr>
<td><code v-pre>reflect(normal[, out])</code></td>
<td>在给定法线上反射该点。</td>
</tr>
</tbody>
</table>
<h3 id="_10-4-3-增强-rectangle-方法" tabindex="-1"><a class="header-anchor" href="#_10-4-3-增强-rectangle-方法"><span>10.4.3 增强 <code v-pre>Rectangle</code> 方法</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>containsRect(other)</code></td>
<td>如果此矩形包含另一个则返回true。</td>
</tr>
<tr>
<td><code v-pre>equals(other)</code></td>
<td>检查所有属性是否相等。</td>
</tr>
<tr>
<td><code v-pre>intersection(other[, out])</code></td>
<td>返回一个表示重叠部分的新矩形。</td>
</tr>
<tr>
<td><code v-pre>union(other[, out])</code></td>
<td>返回一个包含两个矩形的矩形。</td>
</tr>
</tbody>
</table>
</div></template>


