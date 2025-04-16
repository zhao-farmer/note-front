<template><div><h1 id="_03js中图片" tabindex="-1"><a class="header-anchor" href="#_03js中图片"><span>03JS中图片</span></a></h1>
<h2 id="_1-图像对象概述" tabindex="-1"><a class="header-anchor" href="#_1-图像对象概述"><span>1. 图像对象概述</span></a></h2>
<h3 id="_1-1-图像对象介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-图像对象介绍"><span>1.1 图像对象介绍</span></a></h3>
<p>文档（Document）对象的images属性返回的是一个数组，数组中的每一个元素都是一个Images对象，该对象就是图像对象。</p>
<p>在加载文档的时候，JS会自动创建一个images[]数组，数组中的元素个数是由<img>标签的个数决定的。</p>
<p>在操作图像的时候，首先应该确定要引用的图片，以下是三种JS引用图像的方式：</p>
<ul>
<li>通过document.images[]按编号访问</li>
<li>通过dockumet.images[imageName]按名称访问</li>
<li>在支持DOM的浏览器中，使用document.getElementById(&quot;imgID&quot;)来定位要访问的图片</li>
</ul>
<p>例如，在页面中有一张图片：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flower<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mypic<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flower.png<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>对应以上三种引用方式，分别是：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token string">"flower"</span><span class="token punctuation">]</span></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"mypic"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-图像对象属性" tabindex="-1"><a class="header-anchor" href="#_1-2-图像对象属性"><span>1.2 图像对象属性</span></a></h3>
<p>图像对象的属性主要描述图片的宽度、高度和边框等信息，如下表所示：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>border</td>
<td>返回或设置图片边框宽度，以像素为单位</td>
</tr>
<tr>
<td>height</td>
<td>返回或设置图片高度，以像素为单位</td>
</tr>
<tr>
<td>hspace</td>
<td>返回或设置图片左边和右边的文字与图片之间的间距，以像素为单位</td>
</tr>
<tr>
<td>lowsrc</td>
<td>返回或设置图片的低分辨率图片的URL</td>
</tr>
<tr>
<td>name</td>
<td>返回或设置图片名称</td>
</tr>
<tr>
<td>src</td>
<td>返回或设置图片URL</td>
</tr>
<tr>
<td>vspace</td>
<td>返回或设置图片上面和下面的文字与图片之间的间距，以像素为单位</td>
</tr>
<tr>
<td>width</td>
<td>返回或设置图片宽度</td>
</tr>
<tr>
<td>alt</td>
<td>返回或设置图片经过图片时显示的文字</td>
</tr>
<tr>
<td>complete</td>
<td>判断图像是不是完全被加载，如果被完全加载，返回true</td>
</tr>
</tbody>
</table>
<p>例子：输出图片的基本信息</p>
<p>对一个<code v-pre>&lt;img&gt;</code>标签，弄一张照片，然后输出照片的基本信息（名称、高度、宽度、等等）</p>
<p>代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wukong<span class="token punctuation">"</span></span> <span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"图片名称："</span><span class="token operator">+</span>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">"&lt;br>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"图片高度："</span><span class="token operator">+</span>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>height<span class="token operator">+</span><span class="token string">"&lt;br>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"图片宽度："</span><span class="token operator">+</span>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>width<span class="token operator">+</span><span class="token string">"&lt;br>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"图片边框："</span><span class="token operator">+</span>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>border<span class="token operator">+</span><span class="token string">"&lt;br>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">"图片URL:"</span><span class="token operator">+</span>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/script/JavaScript/records/001.png" alt=""></p>
<h3 id="_1-3-图像对象的事件" tabindex="-1"><a class="header-anchor" href="#_1-3-图像对象的事件"><span>1.3 图像对象的事件</span></a></h3>
<p>Images对象没有可以使用的方法，但是他支持事件，下表列出了Images对象常用事件：</p>
<table>
<thead>
<tr>
<th>事件</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>abort</td>
<td>当用户放弃加载图片时触发该事件</td>
</tr>
<tr>
<td>load</td>
<td>成功加载图片时触发该事件</td>
</tr>
<tr>
<td>error</td>
<td>在加载图片的过程中产生错误时触发该事件</td>
</tr>
<tr>
<td>click</td>
<td>在图片上单击鼠标时可触发该事件</td>
</tr>
<tr>
<td>dbclick</td>
<td>在图片上双击鼠标时可触发该事件</td>
</tr>
<tr>
<td>mouseover</td>
<td>当鼠标移动到图片上发生的事件</td>
</tr>
<tr>
<td>mouseout</td>
<td>当鼠标移出图片时发生的事件</td>
</tr>
<tr>
<td>mousedown</td>
<td>在图片上按下鼠标时发生的事件</td>
</tr>
<tr>
<td>mouseup</td>
<td>在图片上释放鼠标时触发的事件</td>
</tr>
<tr>
<td>mousemove</td>
<td>在图片上移动鼠标时触发该事件</td>
</tr>
</tbody>
</table>
<p>例子：当鼠标指向图片时实现图片置换</p>
<p>代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">changImage</span><span class="token punctuation">(</span><span class="token parameter">imgName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        document<span class="token punctuation">.</span>images<span class="token punctuation">[</span>imgName<span class="token punctuation">]</span><span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">"2.jpg"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">resetImage</span><span class="token punctuation">(</span><span class="token parameter">imgName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        document<span class="token punctuation">.</span>images<span class="token punctuation">[</span>imgName<span class="token punctuation">]</span><span class="token punctuation">.</span>src<span class="token operator">=</span><span class="token string">"1.jpg"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1.jpg <span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>240<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wu1<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onmouseover</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">changImage</span><span class="token punctuation">(</span><span class="token string">'wu1'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token special-attr"><span class="token attr-name">onmouseout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">resetImage</span><span class="token punctuation">(</span><span class="token string">'wu1'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>运行结果</strong></p>
<p><img src="/script/JavaScript/records/002.gif" alt=""></p>
<h2 id="_2-图像对象的应用" tabindex="-1"><a class="header-anchor" href="#_2-图像对象的应用"><span>2. 图像对象的应用</span></a></h2>
<h3 id="_2-1-图片的随机显示" tabindex="-1"><a class="header-anchor" href="#_2-1-图片的随机显示"><span>2.1 图片的随机显示</span></a></h3>
<p>为了可以实现图片随机显示的功能，可以使用Math对象的random()函数和floor()函数，例如下面的例子：</p>
<p>例子：实现网站背景的随机变化</p>
<p>十张图片选了我最喜欢的柯基，通过数学随机数函数，获取图片的src，然后展示在网页上，并且通过：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token string">"函数名()"</span><span class="token punctuation">,</span> 时间ms<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>来设置函数执行的时间，在下面的gif图中，我调了一下，可以明显的看得出，图片变得很快，代码如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">bianhua</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>num<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>num1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text/javascript<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">bianhua</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> src<span class="token operator">=</span><span class="token string">"img/"</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">var</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        src<span class="token operator">+=</span>i<span class="token punctuation">;</span></span>
<span class="line">        src<span class="token operator">+=</span><span class="token string">".jpg"</span><span class="token punctuation">;</span></span>
<span class="line">        document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token string">"num"</span><span class="token punctuation">]</span><span class="token punctuation">.</span>src <span class="token operator">=</span> src<span class="token punctuation">;</span></span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token string">"bianhua()"</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-图片置顶" tabindex="-1"><a class="header-anchor" href="#_2-2-图片置顶"><span>2.2 图片置顶</span></a></h3>
<p>在浏览网站的时候，有一种图片无论我们怎么点击、继续朝下滑，这类图片的位置都不会改变。这就是图片的置顶。</p>
<p>可以通过文档Document对象下的documentElement对象中的scrollTop和scrollLeft属性来获取当前页面中横向和纵向滚动条所卷去的部分的值，然后使用该值定位放入层中的图片的位置，实现图片置顶的功能。</p>
</div></template>


