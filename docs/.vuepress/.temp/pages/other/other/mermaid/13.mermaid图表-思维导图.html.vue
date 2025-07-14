<template><div><h1 id="十二、思维导图" tabindex="-1"><a class="header-anchor" href="#十二、思维导图"><span>十二、思维导图</span></a></h1>
<blockquote>
<p>思维导图：这是一个实验性的图表。语法和属性可以在以后的版本中更改。除了图标集成是实验部分外，语法是稳定的。</p>
</blockquote>
<p>思维导图是一种用来直观地将信息组织成层次结构的图表，显示了整体各部分之间的关系。它通常是围绕一个单一的概念创建的，在空白页面的中心绘制一个图像，并在此基础上添加图像，单词和单词部分等相关概念的表示。主要思想直接与中心概念相连，而其他思想则从这些主要思想中衍生出来。”维基百科</p>
<h2 id="_12-1-一个思维导图的例子" tabindex="-1"><a class="header-anchor" href="#_12-1-一个思维导图的例子"><span>12.1 一个思维导图的例子</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">  root((mindmap))</span>
<span class="line">    Origins</span>
<span class="line">      Long history</span>
<span class="line">      ::icon(fa fa-book)</span>
<span class="line">      Popularisation</span>
<span class="line">        British popular psychology author Tony Buzan</span>
<span class="line">    Research</span>
<span class="line">      On effectiveness&lt;br/>and features</span>
<span class="line">      On Automatic creation</span>
<span class="line">        Uses</span>
<span class="line">            Creative techniques</span>
<span class="line">            Strategic planning</span>
<span class="line">            Argument mapping</span>
<span class="line">    Tools</span>
<span class="line">      Pen and paper</span>
<span class="line">      Mermaid</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-iua2fb0">
            mindmap
  root((mindmap))
    Origins
      Long history
      ::icon(fa fa-book)
      Popularisation
        British popular psychology author Tony Buzan
    Research
      On effectiveness<br/>and features
      On Automatic creation
        Uses
            Creative techniques
            Strategic planning
            Argument mapping
    Tools
      Pen and paper
      Mermaid

          </pre>
        <h2 id="_12-2-语法" tabindex="-1"><a class="header-anchor" href="#_12-2-语法"><span>12.2 语法</span></a></h2>
<p>创建思维导图的语法很简单，并且依赖于缩进来设置层次结构中的级别。</p>
<p>在下面的例子中，你可以看到有3个不同的关卡。一层从文本的左侧开始，另一层有两行从同一列开始，定义节点a。在最后还有一层，其中文本比前面定义节点B和C的行进一步缩进。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    Root</span>
<span class="line">        A</span>
<span class="line">            B</span>
<span class="line">            C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总之是一个简单的文本大纲，其中在根级别有一个节点称为 <code v-pre>Root</code> ，它有一个子节点 <code v-pre>A</code> 。 <code v-pre>A</code> 依次有两个子节点 <code v-pre>B</code> 和 <code v-pre>C</code> 。在下面的图表中，我们可以看到这是一个思维导图。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">Root</span>
<span class="line">    A</span>
<span class="line">      B</span>
<span class="line">      C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-lwwt62g">
            mindmap
Root
    A
      B
      C

          </pre>
        <p>通过这种方式，我们可以使用文本大纲来生成分层思维导图。</p>
<h2 id="_12-3-不同的形状" tabindex="-1"><a class="header-anchor" href="#_12-3-不同的形状"><span>12.3 不同的形状</span></a></h2>
<p>美人鱼思维导图可以用不同的形状来显示节点。在为节点指定形状时，语法类似于流程图节点，其id后跟形状定义，并且形状分隔符中包含文本。在可能的情况下，我们尝试/将尝试保持与流程图相同的形状，即使它们从一开始就不支持。</p>
<p>思维导图可以显示以下形状：</p>
<ol>
<li>矩形</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    id[I am a square]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-x8qw3wf">
            mindmap
    id[I am a square]

          </pre>
        <ol start="2">
<li>圆边矩形</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    id(I am a rounded square)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-jl7tu0w">
            mindmap
    id(I am a rounded square)

          </pre>
        <ol start="3">
<li>圆</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    id((I am a circle))</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-9o35myh">
            mindmap
    id((I am a circle))

          </pre>
        <ol start="4">
<li>爆炸</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    id))I am a bang((</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-4deng66">
            mindmap
    id))I am a bang((

          </pre>
        <ol start="5">
<li>云</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    id)I am a cloud(</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-x0gwcvr">
            mindmap
    id)I am a cloud(

          </pre>
        <ol start="6">
<li>六角</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    id{{I am a hexagon}}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-pk284pj">
            mindmap
    id{{I am a hexagon}}

          </pre>
        <ol start="7">
<li>默认</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    I am the default shape</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-44s6bxm">
            mindmap
    I am the default shape

          </pre>
        <p>I am the default shape</p>
<p>将添加更多的形状，从流程图中可用的形状开始。</p>
<h2 id="_12-4-图标" tabindex="-1"><a class="header-anchor" href="#_12-4-图标"><span>12.4 图标</span></a></h2>
<p>与流程图一样，您可以向节点添加图标，但要使用更新的语法。基于字体的图标样式是在集成过程中添加的，这样它们就可以在网页上使用。这不是图表作者可以做的事情，而是必须与站点管理员或集成商一起完成。一旦图标字体就位，使用 <code v-pre>::icon()</code> 语法将它们添加到思维导图节点。您将图标的类放在括号内，就像下面的示例一样，其中显示了material design和Font Awesome 5的图标。这样做的目的是，所有支持图标的图表都应该使用这种方法。实验特性：这种更广泛的范围也是思维导图是实验性的原因，因为这种语法和方法可能会改变。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    Root</span>
<span class="line">        A</span>
<span class="line">        ::icon(fa fa-book)</span>
<span class="line">        B(B)</span>
<span class="line">        ::icon(mdi mdi-skull-outline)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-7kqqzyu">
            mindmap
    Root
        A
        ::icon(fa fa-book)
        B(B)
        ::icon(mdi mdi-skull-outline)

          </pre>
        <h2 id="_12-5-类" tabindex="-1"><a class="header-anchor" href="#_12-5-类"><span>12.5 类</span></a></h2>
<p>添加类的语法同样类似于流程图。您可以在多个css类后面用空格分隔的三个冒号来添加类。在下面的例子中，其中一个节点附带了两个自定义类，紧急将背景变为红色，文本变为白色，并增加字体大小：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    Root</span>
<span class="line">        A[A]</span>
<span class="line">        :::urgent large</span>
<span class="line">        B(B)</span>
<span class="line">        C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-xo759eh">
            mindmap
    Root
        A[A]
        :::urgent large
        B(B)
        C

          </pre>
        <p><em>这些类需要由站点管理员提供。</em></p>
<h2 id="_12-6-缩进" tabindex="-1"><a class="header-anchor" href="#_12-6-缩进"><span>12.6 缩进</span></a></h2>
<p>实际的缩进并不重要，只是与前几行进行比较。如果我们把前面的例子稍微打乱一下，我们可以看到计算是如何进行的。让我们先用比 <code v-pre>B</code> 更小但比 <code v-pre>A</code> 更大的缩进放置C。</p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    Root</span>
<span class="line">        A</span>
<span class="line">            B</span>
<span class="line">          C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个轮廓是不清楚的，因为 <code v-pre>B</code> 显然是 <code v-pre>A</code> 的子元素，但是当我们移动到 <code v-pre>C</code> 时，清晰度就丢失了。 <code v-pre>C</code> 不是具有更高缩进的 <code v-pre>B</code> 的子元素，也不具有与 <code v-pre>B</code> 相同的缩进。唯一清楚的是，第一个缩进较小的节点（表示父节点）是a。然后Mermaid依赖于这个已知的事实，并补偿了不清楚的缩进，选择 <code v-pre>A</code> 作为 <code v-pre>C</code> 的父节点，直到相同的图中 <code v-pre>B</code> 和 <code v-pre>C</code> 作为兄弟节点。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">Root</span>
<span class="line">    A</span>
<span class="line">        B</span>
<span class="line">      C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-4f6qucx">
            mindmap
Root
    A
        B
      C

          </pre>
        <h2 id="_12-7-markdown字符串" tabindex="-1"><a class="header-anchor" href="#_12-7-markdown字符串"><span>12.7 markdown字符串</span></a></h2>
<p>“标记字符串”功能通过提供更通用的字符串类型来增强思维导图，它支持文本格式选项，如粗体和斜体，并自动在标签内包装文本。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mindmap</span>
<span class="line">    id1["`**Root** with</span>
<span class="line">a second line</span>
<span class="line">Unicode works too: 🤓`"]</span>
<span class="line">      id2["`The dog in **the** hog... a *very long text* that wraps to a new line`"]</span>
<span class="line">      id3[Regular labels still works]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-xw11cnl">
            mindmap
    id1["`**Root** with
a second line
Unicode works too: 🤓`"]
      id2["`The dog in **the** hog... a *very long text* that wraps to a new line`"]
      id3[Regular labels still works]

          </pre>
        <p>格式:</p>
<ul>
<li>对于粗体文本，在文本前后使用双星号**。</li>
<li>对于斜体，在文本前后使用单个星号*。</li>
<li>标签。</li>
</ul>
</div></template>


