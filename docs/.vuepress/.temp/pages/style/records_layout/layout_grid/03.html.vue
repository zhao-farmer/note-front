<template><div><h1 id="三、grid布局的基本概念" tabindex="-1"><a class="header-anchor" href="#三、grid布局的基本概念"><span>三、Grid布局的基本概念</span></a></h1>
<p>学习Grid布局之前，需要了解一些基本概念。</p>
<h2 id="_3-1-容器和项目" tabindex="-1"><a class="header-anchor" href="#_3-1-容器和项目"><span>3.1 容器和项目</span></a></h2>
<p>采用网格布局的区域，称为&quot;容器&quot;（container）。容器内部采用网格定位的子元素，称为&quot;项目&quot;（item）。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，最外层的<code v-pre>&lt;div&gt;</code>元素就是容器，内层的三个<code v-pre>&lt;div&gt;</code>元素就是项目。</p>
<p>注意：项目只能是容器的顶层子元素，不包含项目的子元素，比如上面代码的<code v-pre>&lt;p&gt;</code>元素就不是项目。Grid 布局只对项目生效。</p>
<h2 id="_3-2-行和列" tabindex="-1"><a class="header-anchor" href="#_3-2-行和列"><span>3.2 行和列</span></a></h2>
<p>容器里面的水平区域称为&quot;行&quot;（row），垂直区域称为&quot;列&quot;（column）。</p>
<p><img src="/style/records_layout/layout_grid/images/003.png" alt=""></p>
<h2 id="_3-3-单元格" tabindex="-1"><a class="header-anchor" href="#_3-3-单元格"><span>3.3 单元格</span></a></h2>
<p>行和列的交叉区域，称为&quot;单元格&quot;（cell）。</p>
<p><img src="/style/records_layout/layout_grid/images/004.png" alt=""></p>
<p>正常情况下，n行和m列会产生n x m个单元格。比如，3行3列会产生9个单元格。</p>
<h2 id="_3-4-网格线" tabindex="-1"><a class="header-anchor" href="#_3-4-网格线"><span>3.4 网格线</span></a></h2>
<p>划分网格的线，称为&quot;网格线&quot;（grid line）。水平网格线划分出行，垂直网格线划分出列。</p>
<p>正常情况下，<code v-pre>n</code>行有<code v-pre>n + 1</code>根水平网格线，<code v-pre>m</code>列有<code v-pre>m + 1</code>根垂直网格线，比如三行就有四根水平网格线。</p>
<p><img src="/style/records_layout/layout_grid/images/005.png" alt=""></p>
<p>上图是一个 4 x 4 的网格，共有5根水平网格线和5根垂直网格线。</p>
<h2 id="_3-5-网格轨道" tabindex="-1"><a class="header-anchor" href="#_3-5-网格轨道"><span>3.5 网格轨道</span></a></h2>
<p>网格轨道是相邻两个网格线之间的空间，可以是行轨道或列轨道。</p>
<p><img src="/style/records_layout/layout_grid/images/006.png" alt=""></p>
<h2 id="_3-6-区域" tabindex="-1"><a class="header-anchor" href="#_3-6-区域"><span>3.6 区域</span></a></h2>
<p>使用grid-template-areas属性，可以为网格定义命名区域。这样就可以通过名称而不是行和列的数字来放置Grid项。</p>
</div></template>


