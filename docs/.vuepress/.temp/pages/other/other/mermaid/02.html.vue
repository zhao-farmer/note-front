<template><div><h1 id="一、流程图" tabindex="-1"><a class="header-anchor" href="#一、流程图"><span>一、流程图</span></a></h1>
<!-- ## 1.1 流程图-基本语法 -->
<p>流程图由节点（几何形状）和边（箭头或线）组成。Mermaid代码定义了如何创建节点和边，并适应不同的箭头类型、多向箭头以及与子图之间的任何链接。</p>
<blockquote>
<p>注意1：如果您在流程图节点中使用单词<code v-pre>end</code>，请将整个单词或任何字母（例如，<code v-pre>end</code>或<code v-pre>END</code>）大写，或应用此解决方案。以小写字母输入<code v-pre>end</code>将中断流程图。</p>
</blockquote>
<blockquote>
<p>注意2：如果您使用字母<code v-pre>o</code>或<code v-pre>x</code>作为连接流程图节点中的第一个字母，请在字母之前添加空格或将字母大写
（例如, <code v-pre>dev--- ops</code>, <code v-pre>dev---Ops</code>）</p>
<ul>
<li>输入&quot;A---oB&quot; 将创建一个圆形边缘。</li>
<li>输入&quot;A---xB&quot; 将创建一个十字边。</li>
</ul>
</blockquote>
<h2 id="_1-1-单节点" tabindex="-1"><a class="header-anchor" href="#_1-1-单节点"><span>1.1 单节点</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-ppt2xu0">
            flowchart LR
    id

          </pre>
          </code>
        <ul>
<li>
<p>信息</p>
<p>id是框中显示的内容。</p>
</li>
<li>
<p>提示</p>
<p>除了 flowchart 之外，还可以使用 graph 。</p>
</li>
</ul>
<h2 id="_1-2-文本节点" tabindex="-1"><a class="header-anchor" href="#_1-2-文本节点"><span>1.2 文本节点</span></a></h2>
<p>也可以在框中设置与id不同的文本。如果多次执行此操作，则将使用为节点找到的最后一个文本。此外，如果稍后为节点定义边缘，则可以省略文本定义。在呈现框时将使用前面定义的那个。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">---</span>
<span class="line">title: Node with text</span>
<span class="line">---</span>
<span class="line">flowchart LR</span>
<span class="line">    id1[This is the text in the box]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-dkgcusm">
            ---
title: Node with text
---
flowchart LR
    id1[This is the text in the box]

          </pre>
          </code>
        <h3 id="_1-2-1-unicode文本" tabindex="-1"><a class="header-anchor" href="#_1-2-1-unicode文本"><span>1.2.1 Unicode文本</span></a></h3>
<p>使用 <code v-pre>&quot;</code> 来括起unicode文本。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id["This ❤ Unicode"]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-rxiwtfd">
            flowchart LR
    id["This ❤ Unicode"]

          </pre>
          </code>
        <h3 id="_1-2-2-格式化文本" tabindex="-1"><a class="header-anchor" href="#_1-2-2-格式化文本"><span>1.2.2 格式化文本</span></a></h3>
<p>使用双引号和反引号<code v-pre>text</code>来括住降价文本。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">%%{init: {"flowchart": {"htmlLabels": false}} }%%</span>
<span class="line">flowchart LR</span>
<span class="line">    markdown["`This **is** _Markdown_`"]</span>
<span class="line">    newLines["`Line1</span>
<span class="line">    Line 2</span>
<span class="line">    Line 3`"]</span>
<span class="line">    markdown --> newLines</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-qgnkqrr">
            %%{init: {"flowchart": {"htmlLabels": false}} }%%
flowchart LR
    markdown["`This **is** _Markdown_`"]
    newLines["`Line1
    Line 2
    Line 3`"]
    markdown --> newLines

          </pre>
          </code>
        <h2 id="_1-3-方向" tabindex="-1"><a class="header-anchor" href="#_1-3-方向"><span>1.3 方向</span></a></h2>
<ol>
<li>流程图是从上到下的（ <code v-pre>TD</code> 或 <code v-pre>TB</code> ）。</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    Start --> Stop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-sy5vpb6">
            flowchart TD
    Start --> Stop

          </pre>
          </code>
        <ol start="2">
<li>流程图是从左到右（ LR ）。</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    Start --> Stop</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-f9dmny8">
            flowchart LR
    Start --> Stop

          </pre>
          </code>
        <ol start="3">
<li>流程图方向有</li>
</ol>
<ul>
<li>TB - 从上到下</li>
<li>TD - 自上而下/与自上而下相同</li>
<li>BT - 从下到上</li>
<li>RL - 从右到左</li>
<li>LR - 从左到右</li>
</ul>
<h2 id="_1-4-节点的形状" tabindex="-1"><a class="header-anchor" href="#_1-4-节点的形状"><span>1.4 节点的形状</span></a></h2>
<ol>
<li>圆角矩形节点</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1(文本在容器中)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-5wh5hmj">
            flowchart LR
    id1(文本在容器中)

          </pre>
          </code>
        <ol start="2">
<li>圆边矩形节点</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1([文本在容器中])</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-tt5j7v0">
            flowchart LR
    id1([文本在容器中])

          </pre>
          </code>
        <ol start="3">
<li>子程序节点</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1[[文本在容器中]]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-jcncqgb">
            flowchart LR
    id1[[This is the text in the box]]

          </pre>
          </code>
        <ol start="4">
<li>圆柱形节点</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1[(Database)]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-owx2mvf">
            flowchart LR
    id1[(Database)]

          </pre>
          </code>
        <ol start="5">
<li>圆形节点</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1((文本在圆中))</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-cqq3lw1">
            flowchart LR
    id1((文本在圆中))

          </pre>
          </code>
        <ol start="6">
<li>剪角节点</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1>文本在容器中]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-9209gv0">
            flowchart LR
    id1>文本在容器中]

          </pre>
          </code>
        <p>目前只有上面的形状是可能的，而不是它的镜像。</p>
<ol start="7">
<li>菱形节点</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1{文本在容器中}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-xwwhm18">
            flowchart LR
    id1{文本在容器中}

          </pre>
          </code>
        <ol start="8">
<li>六边形节点</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1{{文本在容器中}}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-0d37h1a">
            flowchart LR
    id1{{文本在容器中}}

          </pre>
          </code>
        <ol start="9">
<li>平行四边形节点</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1[/文本在容器中/]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-outctvj">
            flowchart LR
    id1[/文本在容器中/]

          </pre>
          </code>
        <ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1[\文本在容器中\]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-gzzlipo">
            flowchart LR
    id1[\文本在容器中\]

          </pre>
          </code>
        <ol start="10">
<li>梯形节点</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A[/梯形\]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-95el7ht">
            flowchart TD
    A[/梯形\]

          </pre>
          </code>
        <ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A[\梯形/]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-77vav7k">
            flowchart TD
    A[\梯形/]

          </pre>
          </code>
        <ol start="11">
<li>双圈节点</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A(((文本在圆中)))</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-in18v2n">
            flowchart TD
    A(((文本在圆中)))

          </pre>
          </code>
        <h2 id="_1-5-节点扩展形状" tabindex="-1"><a class="header-anchor" href="#_1-5-节点扩展形状"><span>1.5 节点扩展形状</span></a></h2>
<h3 id="_1-5-1-语法与名称列表" tabindex="-1"><a class="header-anchor" href="#_1-5-1-语法与名称列表"><span>1.5.1 语法与名称列表</span></a></h3>
<p>美人鱼引入了30个新的形状，以提高流程图创建的灵活性和精度。这些新形状提供了更多的选项来可视化地表示流程、决策、事件、数据存储和流程图中的其他元素，从而提高了清晰度和语义意义。</p>
<ol>
<li>形状定义的新语法</li>
</ol>
<p>Mermaid现在支持定义形状类型的通用语法，以适应越来越多的形状。这种语法允许你用一种清晰灵活的格式给节点分配特定的形状：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">A@{ shape: rect }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>该语法将节点a创建为矩形。它以与 A[&quot;A&quot;] 或 A 相同的方式呈现。</p>
<ol start="2">
<li>完整的新形状列表</li>
</ol>
<p>引入的形状及其相应的语义、短名和别名的综合列表：</p>
<table>
<thead>
<tr>
<th>语义的名字</th>
<th>形状的名字</th>
<th>短名称</th>
<th>描述</th>
<th>别名支持</th>
</tr>
</thead>
<tbody>
<tr>
<td>卡片</td>
<td>切口矩形</td>
<td>notch-rect</td>
<td>代表一张牌</td>
<td>card 、 notched-rectangle</td>
</tr>
<tr>
<td>核对</td>
<td>沙漏</td>
<td>hourglass</td>
<td>表示一个排序操作</td>
<td>collate 、 hourglass</td>
</tr>
<tr>
<td>网络链接</td>
<td>闪电</td>
<td>bolt</td>
<td>通信链路</td>
<td>com-link 、lightning-bolt</td>
</tr>
<tr>
<td>内容</td>
<td>花括号</td>
<td>brace</td>
<td>添加注释</td>
<td>brace-l 、 comment</td>
</tr>
<tr>
<td>右边评论</td>
<td>花括号</td>
<td>brace-r</td>
<td>添加注释</td>
<td></td>
</tr>
<tr>
<td>两边用大括号注释</td>
<td>花括号</td>
<td>braces</td>
<td>添加注释</td>
<td></td>
</tr>
<tr>
<td>数据输入/输出</td>
<td>右倾斜</td>
<td>lean-r</td>
<td>表示输入或输出</td>
<td>in-out 、 lean-right</td>
</tr>
<tr>
<td>数据输入/输出</td>
<td>左倾斜</td>
<td>lean-l</td>
<td>表示输出或输入</td>
<td>lean-left 、 out-in</td>
</tr>
<tr>
<td>数据库</td>
<td>圆柱</td>
<td>cyl</td>
<td>数据库存储</td>
<td>cylinder, database, db</td>
</tr>
<tr>
<td>决定/判断</td>
<td>菱形</td>
<td>diam</td>
<td>决策的步骤</td>
<td>decision, diamond, question</td>
</tr>
<tr>
<td>延迟</td>
<td>半圆的矩形</td>
<td>delay</td>
<td>表示延迟</td>
<td>half-rounded-rectangle</td>
</tr>
<tr>
<td>直接存储通道</td>
<td>水平圆柱</td>
<td>h-cyl</td>
<td>直接存取存储器</td>
<td>das 、 horizontal-cylinder</td>
</tr>
<tr>
<td>磁盘存储</td>
<td>线性圆柱</td>
<td>lin-cyl</td>
<td>磁盘存储</td>
<td>disk 、 lined-cylinder</td>
</tr>
<tr>
<td>显示</td>
<td>弯曲的梯形</td>
<td>curv-trap</td>
<td>表示一个显示</td>
<td>curved-trapezoid 、 display</td>
</tr>
<tr>
<td>分裂过程</td>
<td>分裂矩形</td>
<td>div-rect</td>
<td>分割过程形状</td>
<td>div-proc, divided-process, divided-rectangle</td>
</tr>
<tr>
<td>文档</td>
<td>文档</td>
<td>doc</td>
<td>表示一个文档</td>
<td>doc 、 document</td>
</tr>
<tr>
<td>事件</td>
<td>圆角矩形</td>
<td>rounded</td>
<td>表示一个事件</td>
<td>event</td>
</tr>
<tr>
<td>得到</td>
<td>三角形</td>
<td>tri</td>
<td>得到流程</td>
<td>extract 、 triangle</td>
</tr>
<tr>
<td>Fork/Join</td>
<td>填充矩形</td>
<td>fork</td>
<td>在流程流中分叉或连接</td>
<td>join</td>
</tr>
<tr>
<td>内部存储</td>
<td>Window Pane</td>
<td>win-pane</td>
<td>内部存储</td>
<td>internal-storage 、 window-pane</td>
</tr>
<tr>
<td>结</td>
<td>填充圆</td>
<td>f-circ</td>
<td>结点</td>
<td>filled-circle 、 junction</td>
</tr>
<tr>
<td>排列文档</td>
<td>排列文档</td>
<td>lin-doc</td>
<td>排列文档</td>
<td>lined-document</td>
</tr>
<tr>
<td>排/阴影过程</td>
<td>排矩形</td>
<td>lin-rect</td>
<td>衬里工艺形状</td>
<td>lin-proc, lined-process, lined-rectangle, shaded-process</td>
</tr>
<tr>
<td>循环限制</td>
<td>梯形五角大楼</td>
<td>notch-pent</td>
<td>环限阶跃</td>
<td>loop-limit 、 notched-pentagon</td>
</tr>
<tr>
<td>手册文件</td>
<td>翻转三角</td>
<td>flip-tri</td>
<td>手动文件操作</td>
<td>flipped-triangle 、 manual-file</td>
</tr>
<tr>
<td>手动输入</td>
<td>倾斜的矩形</td>
<td>sl-rect</td>
<td>手动输入步骤</td>
<td>manual-input 、 sloped-rectangle</td>
</tr>
<tr>
<td>手动操作</td>
<td>梯形底座顶部</td>
<td>trap-t</td>
<td>表示手动任务</td>
<td>inv-trapezoid, manual, trapezoid-top</td>
</tr>
<tr>
<td>多文档</td>
<td>堆叠文档</td>
<td>docs</td>
<td>多个文档</td>
<td>documents, st-doc, stacked-document</td>
</tr>
<tr>
<td>多进程</td>
<td>堆叠的矩形</td>
<td>st-rect</td>
<td>多个进程</td>
<td>processes, procs, stacked-rectangle</td>
</tr>
<tr>
<td>奇怪的</td>
<td>奇怪的</td>
<td>odd</td>
<td>奇怪的形状</td>
<td></td>
</tr>
<tr>
<td>纸带</td>
<td>国旗</td>
<td>flag</td>
<td>纸带</td>
<td>paper-tape</td>
</tr>
<tr>
<td>准备条件</td>
<td>六角</td>
<td>hex</td>
<td>准备或条件步骤</td>
<td>hexagon 、 prepare</td>
</tr>
<tr>
<td>优先行动</td>
<td>梯形底部</td>
<td>trap-b</td>
<td>优先行动</td>
<td>priority, trapezoid, trapezoid-bottom</td>
</tr>
<tr>
<td>过程</td>
<td>矩形</td>
<td>rect</td>
<td>标准工艺形状</td>
<td>proc, process, rectangle</td>
</tr>
<tr>
<td>开始</td>
<td>圆</td>
<td>circle</td>
<td>起点</td>
<td>circ</td>
</tr>
<tr>
<td>开始</td>
<td>小圆</td>
<td>sm-circ</td>
<td>起点小</td>
<td>small-circle 、 start</td>
</tr>
<tr>
<td>停止</td>
<td>双圈</td>
<td>dbl-circ</td>
<td>表示停止点</td>
<td>double-circle</td>
</tr>
<tr>
<td>停止</td>
<td>陷害圆</td>
<td>fr-circ</td>
<td>停止点</td>
<td>framed-circle 、 stop</td>
</tr>
<tr>
<td>存储的数据</td>
<td>长方形领结</td>
<td>bow-rect</td>
<td>存储的数据</td>
<td>bow-tie-rectangle 、 stored-data</td>
</tr>
<tr>
<td>子流程</td>
<td>框架矩形</td>
<td>fr-rect</td>
<td>子流程</td>
<td>framed-rectangle, subproc, subprocess, subroutine</td>
</tr>
<tr>
<td>总结</td>
<td>交叉循环</td>
<td>cross-circ</td>
<td>总结</td>
<td>crossed-circle 、 summary</td>
</tr>
<tr>
<td>标记的文档</td>
<td>标记的文档</td>
<td>tag-doc</td>
<td>标记的文档</td>
<td>tag-doc 、 tagged-document</td>
</tr>
<tr>
<td>标记的过程</td>
<td>标记的矩形</td>
<td>tag-rect</td>
<td>标记的过程</td>
<td>tag-proc, tagged-process, tagged-rectangle</td>
</tr>
<tr>
<td>终点</td>
<td>体育场</td>
<td>stadium</td>
<td>终点</td>
<td>pill 、 terminal</td>
</tr>
<tr>
<td>文本块</td>
<td>文本块</td>
<td>text</td>
<td>文本块</td>
<td></td>
</tr>
</tbody>
</table>
<ol start="3">
<li>新形状的示例流程图</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart RL</span>
<span class="line">    A@{ shape: manual-file, label: "File Handling"}</span>
<span class="line">    B@{ shape: manual-input, label: "User Input"}</span>
<span class="line">    C@{ shape: docs, label: "Multiple Documents"}</span>
<span class="line">    D@{ shape: procs, label: "Process Automation"}</span>
<span class="line">    E@{ shape: paper-tape, label: "Paper Records"}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-5x5ywwa">
            flowchart RL
    A@{ shape: manual-file, label: "File Handling"}
    B@{ shape: manual-input, label: "User Input"}
    C@{ shape: docs, label: "Multiple Documents"}
    D@{ shape: procs, label: "Process Automation"}
    E@{ shape: paper-tape, label: "Paper Records"}

          </pre>
          </code>
        <h3 id="_1-5-2-具体示例" tabindex="-1"><a class="header-anchor" href="#_1-5-2-具体示例"><span>1.5.2 具体示例</span></a></h3>
<ol>
<li>过程</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: rect, label: "This is a process" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-hohrcfk">
            flowchart TD
    A@{ shape: rect, label: "This is a process" }

          </pre>
          </code>
        <ol start="2">
<li>事件</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: rounded, label: "This is an event" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-7wd8jzx">
            flowchart TD
    A@{ shape: rounded, label: "This is an event" }

          </pre>
          </code>
        <ol start="3">
<li>终点站（大球场）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: stadium, label: "Terminal point" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-qvfgwy4">
            flowchart TD
    A@{ shape: stadium, label: "Terminal point" }

          </pre>
          </code>
        <ol start="4">
<li>数据库(圆柱体)</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: cyl, label: "Database" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-lltqlea">
            flowchart TD
    A@{ shape: cyl, label: "Database" }

          </pre>
          </code>
        <ol start="5">
<li>开始(圆)</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: circle, label: "Start" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-m6l1gjr">
            flowchart TD
    A@{ shape: circle, label: "Start" }

          </pre>
          </code>
        <ol start="6">
<li>奇怪形状</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: odd, label: "Odd shape" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-vzsvehu">
            flowchart TD
    A@{ shape: odd, label: "Odd shape" }

          </pre>
          </code>
        <ol start="7">
<li>决定（菱形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: diamond, label: "Decision" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-s92ofgi">
            flowchart TD
    A@{ shape: diamond, label: "Decision" }

          </pre>
          </code>
        <ol start="8">
<li>准备条件（六边形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: hex, label: "Prepare conditional" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-mtjdkmi">
            flowchart TD
    A@{ shape: hex, label: "Prepare conditional" }

          </pre>
          </code>
        <ol start="9">
<li>数据输入/输出（右倾）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: lean-r, label: "Input/Output" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-2vmidcy">
            flowchart TD
    A@{ shape: lean-r, label: "Input/Output" }

          </pre>
          </code>
        <ol start="10">
<li>数据输入/输出（左倾）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: lean-l, label: "Output/Input" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-a6cricg">
            flowchart TD
    A@{ shape: lean-l, label: "Output/Input" }

          </pre>
          </code>
        <ol start="11">
<li>优先动作（上窄梯形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: trap-b, label: "Priority action" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-wuitvat">
            flowchart TD
    A@{ shape: trap-b, label: "Priority action" }

          </pre>
          </code>
        <ol start="12">
<li>手动操作（上宽梯形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: trap-t, label: "Manual operation" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-cdw766k">
            flowchart TD
    A@{ shape: trap-t, label: "Manual operation" }

          </pre>
          </code>
        <ol start="13">
<li>停止（双循环）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: dbl-circ, label: "Stop" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-uvwvzy5">
            flowchart TD
    A@{ shape: dbl-circ, label: "Stop" }

          </pre>
          </code>
        <ol start="14">
<li>文本块</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: notch-rect, label: "Card" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-frvm9vb">
            flowchart TD
    A@{ shape: notch-rect, label: "Card" }

          </pre>
          </code>
        <ol start="15">
<li>卡片（凹边矩形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: notch-rect, label: "Card" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-imu7f5y">
            flowchart TD
    A@{ shape: notch-rect, label: "Card" }

          </pre>
          </code>
        <ol start="16">
<li>排/阴影过程</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: lin-rect, label: "Lined process" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-ygvs8go">
            flowchart TD
    A@{ shape: lin-rect, label: "Lined process" }

          </pre>
          </code>
        <ol start="17">
<li>开始（小圈子）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: sm-circ, label: "Small start" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-zip0exd">
            flowchart TD
    A@{ shape: sm-circ, label: "Small start" }

          </pre>
          </code>
        <ol start="18">
<li>停止（框架圈）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: framed-circle, label: "Stop" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-3zmbr0z">
            flowchart TD
    A@{ shape: framed-circle, label: "Stop" }

          </pre>
          </code>
        <ol start="19">
<li>叉/连接（长矩形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: fork, label: "Fork or Join" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-4kuwxfy">
            flowchart TD
    A@{ shape: fork, label: "Fork or Join" }

          </pre>
          </code>
        <ol start="20">
<li>整理(沙漏)</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: hourglass, label: "Collate" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-675y7xe">
            flowchart TD
    A@{ shape: hourglass, label: "Collate" }

          </pre>
          </code>
        <ol start="21">
<li>注释（大括号）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: comment, label: "Comment" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-h51qg5c">
            flowchart TD
    A@{ shape: comment, label: "Comment" }

          </pre>
          </code>
        <ol start="22">
<li>右注释（右大括号）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: brace-r, label: "Comment" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-mi3cbsw">
            flowchart TD
    A@{ shape: brace-r, label: "Comment" }

          </pre>
          </code>
        <ol start="23">
<li>两边用大括号注释</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: braces, label: "Comment" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-1r54nwm">
            flowchart TD
    A@{ shape: braces, label: "Comment" }

          </pre>
          </code>
        <ol start="24">
<li>Com连接（闪电）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: bolt, label: "Communication link" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-akznhgn">
            flowchart TD
    A@{ shape: bolt, label: "Communication link" }

          </pre>
          </code>
        <ol start="25">
<li>文档</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: doc, label: "Document" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-6inj2yh">
            flowchart TD
    A@{ shape: doc, label: "Document" }

          </pre>
          </code>
        <p>Document</p>
<ol start="26">
<li>延时（半圆矩形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: delay, label: "Delay" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-j0b490h">
            flowchart TD
    A@{ shape: delay, label: "Delay" }

          </pre>
          </code>
        <ol start="27">
<li>直接存取存储器（卧式圆柱体）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: das, label: "Direct access storage" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-l4rgh79">
            flowchart TD
    A@{ shape: das, label: "Direct access storage" }

          </pre>
          </code>
        <p>Direct access storage</p>
<ol start="28">
<li>磁盘存储（内衬圆柱体）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: lin-cyl, label: "Disk storage" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-ropxp90">
            flowchart TD
    A@{ shape: lin-cyl, label: "Disk storage" }

          </pre>
          </code>
        <p>Disk storage</p>
<ol start="29">
<li>显示（曲面梯形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: curv-trap, label: "Display" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-igkll63">
            flowchart TD
    A@{ shape: curv-trap, label: "Display" }

          </pre>
          </code>
        <ol start="30">
<li>分割过程（分割矩形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: div-rect, label: "Divided process" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-eqabkl8">
            flowchart TD
    A@{ shape: div-rect, label: "Divided process" }

          </pre>
          </code>
        <ol start="31">
<li>摘录（小三角）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: tri, label: "Extract" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-29b7nh5">
            flowchart TD
    A@{ shape: tri, label: "Extract" }

          </pre>
          </code>
        <ol start="32">
<li>内部存储（窗口窗格）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: win-pane, label: "Internal storage" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-xf96cjg">
            flowchart TD
    A@{ shape: win-pane, label: "Internal storage" }

          </pre>
          </code>
        <ol start="33">
<li>路口（填满的圆圈）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: f-circ, label: "Junction" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-j4d0w62">
            flowchart TD
    A@{ shape: f-circ, label: "Junction" }

          </pre>
          </code>
        <ol start="34">
<li>排列文档</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: lin-doc, label: "Lined document" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-qp4uaal">
            flowchart TD
    A@{ shape: lin-doc, label: "Lined document" }

          </pre>
          </code>
        <p>Lined document</p>
<ol start="35">
<li>环路限制（缺口五边形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: notch-pent, label: "Loop limit" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-o94vsyt">
            flowchart TD
    A@{ shape: notch-pent, label: "Loop limit" }

          </pre>
          </code>
        <ol start="37">
<li>手动文件（翻转三角形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: flip-tri, label: "Manual file" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-740en9u">
            flowchart TD
    A@{ shape: flip-tri, label: "Manual file" }

          </pre>
          </code>
        <ol start="38">
<li>手动输入（倾斜矩形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: sl-rect, label: "Manual input" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-7vbyabe">
            flowchart TD
    A@{ shape: sl-rect, label: "Manual input" }

          </pre>
          </code>
        <ol start="39">
<li>多文档（堆叠文档）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: docs, label: "Multiple documents" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-5s5ppfb">
            flowchart TD
    A@{ shape: docs, label: "Multiple documents" }

          </pre>
          </code>
        <ol start="40">
<li>多工序（堆叠矩形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: processes, label: "Multiple processes" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-kshr050">
            flowchart TD
    A@{ shape: processes, label: "Multiple processes" }

          </pre>
          </code>
        <ol start="41">
<li>纸带（旗帜）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: flag, label: "Paper tape" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-uas9bew">
            flowchart TD
    A@{ shape: flag, label: "Paper tape" }

          </pre>
          </code>
        <ol start="42">
<li>存储数据（领结矩形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: bow-rect, label: "Stored data" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-evhps28">
            flowchart TD
    A@{ shape: bow-rect, label: "Stored data" }

          </pre>
          </code>
        <ol start="43">
<li>摘要（交叉圈）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: cross-circ, label: "Summary" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-tvx5zk1">
            flowchart TD
    A@{ shape: cross-circ, label: "Summary" }

          </pre>
          </code>
        <ol start="43">
<li>标记的文档</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: tag-doc, label: "Tagged document" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-wh96szl">
            flowchart TD
    A@{ shape: tag-doc, label: "Tagged document" }

          </pre>
          </code>
        <ol start="44">
<li>带标签的进程（带标签的矩形）</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ shape: tag-rect, label: "Tagged process" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-m88anjv">
            flowchart TD
    A@{ shape: tag-rect, label: "Tagged process" }

          </pre>
          </code>
        <h2 id="_1-6-节点特殊形状" tabindex="-1"><a class="header-anchor" href="#_1-6-节点特殊形状"><span>1.6 节点特殊形状</span></a></h2>
<p>美人鱼还引入了2种特殊的形状来增强您的流程图：图标和图像。这些形状允许您直接在流程图中包含图标和图像，提供更多的视觉背景和清晰度。</p>
<h3 id="_1-6-1-图标的形状" tabindex="-1"><a class="header-anchor" href="#_1-6-1-图标的形状"><span>1.6.1 图标的形状</span></a></h3>
<p>可以使用 <code v-pre>icon</code> 形状在流程图中包含图标。要使用图标，您需要先注册图标包。按照这里提供的说明操作。定义图标形状的语法如下：</p>
<ol>
<li>代码</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ icon: "fa:user", form: "square", label: "User Icon", pos: "t", h: 60 }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>展示图</li>
</ol>

          <code>
          <pre class="mermaid" id="mermaid-20tuy6h">
            flowchart TD
    A@{ icon: "fa:user", form: "square", label: "User Icon", pos: "t", h: 60 }

          </pre>
          </code>
        <ol start="3">
<li>参数</li>
</ol>
<ul>
<li>icon：已注册图标包中的图标名称。</li>
<li>窗体：指定图标的背景形状。如果没有定义，将没有背景图标。选项包括:</li>
<li>label：与图标相关联的文本标签。这可以是任何字符串。如果没有定义，则不显示任何标签。</li>
<li>pos：标签的位置。如果没有定义，标签将默认位于图标的底部。可能的值有：</li>
<li>h：图标的高度。如果没有定义，则默认为48，这是最小值。</li>
</ul>
<h3 id="_1-6-2-图像的形状" tabindex="-1"><a class="header-anchor" href="#_1-6-2-图像的形状"><span>1.6.2 图像的形状</span></a></h3>
<p>可以使用 <code v-pre>image</code> 形状在流程图中包含图像。定义图像形状的语法如下：</p>
<ol>
<li>代码</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A@{ img: "https://example.com/image.png", label: "Image Label", pos: "t", w: 60, h: 60, constraint: "off" }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>展示图</li>
</ol>

          <code>
          <pre class="mermaid" id="mermaid-bqkimur">
            flowchart TD
    A@{ img: "", label: "Image Label", pos: "t", w: 60, h: 60, constraint: "off" }

          </pre>
          </code>
        <ol start="3">
<li>参数</li>
</ol>
<ul>
<li>img：要显示的图片的URL。</li>
<li>label：与图像相关联的文本标签。这可以是任何字符串。如果没有定义，则不显示任何标签。</li>
<li>pos：标签的位置。如果未定义，则标签默认位于图像的底部。可能的值有：</li>
<li>w：图像的宽度。如果没有定义，这将默认为图像的自然宽度。</li>
<li>h：图像的高度。如果没有定义，这将默认为图像的自然高度。</li>
<li>constraint：确定图像是否应该约束节点大小。此设置还确保图像保持其原始长宽比，根据宽度（ <code v-pre>w</code> ）相应地调整高度（ <code v-pre>h</code> ）。如果没有定义，默认值为 <code v-pre>off</code></li>
</ul>
<p>这些新形状为流程图提供了额外的灵活性和视觉吸引力，使它们更具信息性和吸引力。</p>
<h2 id="_1-7-节点间链路" tabindex="-1"><a class="header-anchor" href="#_1-7-节点间链路"><span>1.7 节点间链路</span></a></h2>
<p>节点可以通过链路/边连接。可以有不同类型的链接或将文本字符串附加到链接上。</p>
<p>对于点链接或粗链接，需要添加的字符为等号或点，汇总如下表：</p>
<table>
<thead>
<tr>
<th>长度</th>
<th>1</th>
<th>2</th>
<th>3</th>
</tr>
</thead>
<tbody>
<tr>
<td>正常的</td>
<td><code v-pre>---</code></td>
<td><code v-pre>----</code></td>
<td><code v-pre>-----</code></td>
</tr>
<tr>
<td>正常带箭头</td>
<td><code v-pre>--&gt;</code></td>
<td><code v-pre>---&gt;</code></td>
<td><code v-pre>----&gt;</code></td>
</tr>
<tr>
<td>厚</td>
<td><code v-pre>===</code></td>
<td><code v-pre>====</code></td>
<td><code v-pre>=====</code></td>
</tr>
<tr>
<td>厚厚的箭</td>
<td><code v-pre>==&gt;</code></td>
<td><code v-pre>===&gt;</code></td>
<td><code v-pre>====&gt;</code></td>
</tr>
<tr>
<td>有点的</td>
<td><code v-pre>-.-</code></td>
<td><code v-pre>-..-</code></td>
<td><code v-pre>-...-</code></td>
</tr>
<tr>
<td>带箭头点</td>
<td><code v-pre>-.-&gt;</code></td>
<td><code v-pre>-..-&gt;</code></td>
<td><code v-pre>-...-&gt;</code></td>
</tr>
</tbody>
</table>
<h3 id="_1-7-1-基础链接" tabindex="-1"><a class="header-anchor" href="#_1-7-1-基础链接"><span>1.7.1 基础链接</span></a></h3>
<ol>
<li>带箭头的连杆</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A-->B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-rjlnkqo">
            flowchart LR
    A-->B

          </pre>
          </code>
        <ol start="2">
<li>开放链接</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A --- B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-tg5vx7l">
            flowchart LR
    A --- B

          </pre>
          </code>
        <ol start="3">
<li>链接的文字</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A-- This is the text! ---B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-r7twt7w">
            flowchart LR
    A-- This is the text! ---B

          </pre>
          </code>
        <hr>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A---|This is the text|B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-9e60rto">
            flowchart LR
    A---|This is the text|B

          </pre>
          </code>
        <ol start="4">
<li>带有箭头和文字的链接</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A-->|text|B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-59xoyqo">
            flowchart LR
    A-->|text|B

          </pre>
          </code>
        <hr>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A-- text -->B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-i882e8i">
            flowchart LR
    A-- text -->B

          </pre>
          </code>
        <h3 id="_1-7-2-基础链接扩展" tabindex="-1"><a class="header-anchor" href="#_1-7-2-基础链接扩展"><span>1.7.2 基础链接扩展</span></a></h3>
<ol>
<li>点链接</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">   A-.->B;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-sc150v6">
            flowchart LR
   A-.->B;

          </pre>
          </code>
        <ol start="2">
<li>带文本的点链接</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">   A-. text .-> B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-hbhi0a5">
            flowchart LR
   A-. text .-> B

          </pre>
          </code>
        <ol start="3">
<li>粗链接</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">   A ==> B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-zlexjit">
            flowchart LR
   A ==> B

          </pre>
          </code>
        <ol start="4">
<li>带文本的粗链接</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">   A == text ==> B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-nfeenb7">
            flowchart LR
   A == text ==> B

          </pre>
          </code>
        <ol start="5">
<li>无形链接</li>
</ol>
<p>在某些情况下，当您希望更改节点的默认位置时，这可能是一个有用的工具。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A ~~~ B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-yzlkx46">
            flowchart LR
    A ~~~ B

          </pre>
          </code>
        <h3 id="_1-7-3-链式链接" tabindex="-1"><a class="header-anchor" href="#_1-7-3-链式链接"><span>1.7.3  链式链接</span></a></h3>
<p>可以在同一行声明多个链接，如下所示：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">   A -- text --> B -- text2 --> C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-74zaiqa">
            flowchart LR
   A -- text --> B -- text2 --> C

          </pre>
          </code>
        <p>也可以在同一行声明多个节点链接，如下所示：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">   a --> b &amp; c--> d</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-6fsg71d">
            flowchart LR
   a --> b & c--> d

          </pre>
          </code>
        <p>然后，您可以以一种非常富有表现力的方式描述依赖关系。就像下面的一行：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TB</span>
<span class="line">    A &amp; B--> C &amp; D</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-r2wutyk">
            flowchart TB
    A & B--> C & D

          </pre>
          </code>
        <p>如果使用基本语法描述相同的图，则需要四行。需要提醒的是，这样做可能会让流程图更难以阅读。我想到了瑞典语 <code v-pre>lagom</code> 。意思是，不要太多也不要太少。这也适用于表达语法。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TB</span>
<span class="line">    A --> C</span>
<span class="line">    A --> D</span>
<span class="line">    B --> C</span>
<span class="line">    B --> D</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-jtrxmf7">
            flowchart TB
    A --> C
    A --> D
    B --> C
    B --> D

          </pre>
          </code>
        <h3 id="_1-7-4-动画链接" tabindex="-1"><a class="header-anchor" href="#_1-7-4-动画链接"><span>1.7.4 动画链接</span></a></h3>
<ol>
<li>将ID附加到Edges</li>
</ol>
<p>Mermaid现在支持为边缘分配id，类似于将id和元数据附加到节点的方式。这个特性为边缘上更高级的样式、类和动画功能奠定了基础。</p>
<p><strong>语法:</strong></p>
<p>要给边一个ID，在边语法前加上ID，后面跟着 <code v-pre>@</code> 字符。例如:</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">  A e1@–> B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>在此例中， <code v-pre>e1</code> 是连接 <code v-pre>A</code> 到 <code v-pre>B</code> 的边的ID。然后，您可以在以后的定义或样式语句中使用这个ID，就像节点一样。</p>
<ol start="2">
<li>打开动画</li>
</ol>
<p>一旦你给边缘分配了ID，你就可以通过定义边缘的属性来打开该边缘的动画：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">  A e1@==> B</span>
<span class="line">  e1@{ animate: true }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-671hp8w">
            flowchart LR
  A e1@==> B
  e1@{ animate: true }

          </pre>
          </code>
        <p>这告诉Mermaid边缘 <code v-pre>e1</code> 应该动画化。</p>
<ol start="3">
<li>选择动画类型</li>
</ol>
<p>初始版本支持 <code v-pre>fast</code> 和 <code v-pre>slow</code> 两种动画速度。选择特定的动画类型是启用动画和一次设置动画速度的简写。</p>
<p><strong>例子:</strong></p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">  A e1@==> B</span>
<span class="line">  e1@{ animation: fast }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-jgca53v">
            flowchart LR
  A e1@==> B
  e1@{ animation: fast }

          </pre>
          </code>
        <p>这相当于 <code v-pre>{ animate: true, animation: fast }</code> 。</p>
<ol start="4">
<li>为动画使用classDef语句</li>
</ol>
<p>你也可以给边缘赋一个类，然后在 <code v-pre>classDef</code> 语句中定义动画属性。例如:</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">  A e1@--> B</span>
<span class="line">  classDef animate stroke-dasharray: 9,5,stroke-dashoffset: 900,animation: dash 25s linear infinite;</span>
<span class="line">  class e1 animate</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-abxzo1z">
            flowchart LR
  A e1@--> B
  classDef animate stroke-dasharray: 9,5,stroke-dashoffset: 900,animation: dash 25s linear infinite;
  class e1 animate

          </pre>
          </code>
        <p>在这个片段中：</p>
<ul>
<li><code v-pre>e1@--&gt;</code> 创建ID  <code v-pre>e1</code> 的边。</li>
<li><code v-pre>classDef animate</code> 定义了一个名为 <code v-pre>animate</code> 的类，具有样式和动画属性。</li>
<li><code v-pre>class e1 animate</code> 将 <code v-pre>animate</code> 类应用于边缘 <code v-pre>e1</code> 。</li>
</ul>
<p>注意转义逗号：当设置 <code v-pre>stroke-dasharray</code> 属性时，记住转义逗号为 <code v-pre>\,</code> ，因为逗号在Mermaid的样式定义中用作分隔符。</p>
<h3 id="_1-7-5-其他箭头" tabindex="-1"><a class="header-anchor" href="#_1-7-5-其他箭头"><span>1.7.5 其他箭头</span></a></h3>
<ol>
<li>箭头-圆边</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A --o B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-t6x96at">
            flowchart LR
    A --o B

          </pre>
          </code>
        <ol start="2">
<li>箭头-交叉</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A --x B</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-nm419bc">
            flowchart LR
    A --x B

          </pre>
          </code>
        <ol start="3">
<li>多向箭头</li>
</ol>
<p>有可能使用多向箭头。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A o--o B</span>
<span class="line">    B &lt;--> C</span>
<span class="line">    C x--x D</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-w3sprs9">
            flowchart LR
    A o--o B
    B <--> C
    C x--x D

          </pre>
          </code>
        <h3 id="_1-7-6-链路的最小长度" tabindex="-1"><a class="header-anchor" href="#_1-7-6-链路的最小长度"><span>1.7.6 链路的最小长度</span></a></h3>
<p>流程图中的每个节点最终被分配到渲染图中的一个等级，即垂直或水平水平（取决于流程图的方向），基于它链接到的节点。默认情况下，链接可以跨越任意数量的等级，但您可以通过在链接定义中添加额外的破折号来要求任何链接比其他链接长。</p>
<p>在下面的例子中，在从节点B到节点E的链接中添加了两个额外的破折号，因此它比常规链接跨越了两个等级：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A[Start] --> B{Is it?}</span>
<span class="line">    B -->|Yes| C[OK]</span>
<span class="line">    C --> D[Rethink]</span>
<span class="line">    D --> B</span>
<span class="line">    B ---->|No| E[End]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-oqoyqil">
            flowchart TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]

          </pre>
          </code>
        <blockquote>
<p>注意：为了适应其他请求，渲染引擎仍然可能使链接比请求的排名长。</p>
</blockquote>
<p>当链接标签写在链接中间时，必须在链接的右侧添加额外的破折号。下面的示例与前面的示例等效：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A[Start] --> B{Is it?}</span>
<span class="line">    B -- Yes --> C[OK]</span>
<span class="line">    C --> D[Rethink]</span>
<span class="line">    D --> B</span>
<span class="line">    B -- No ----> E[End]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-ph608x2">
            flowchart TD
    A[Start] --> B{Is it?}
    B -- Yes --> C[OK]
    C --> D[Rethink]
    D --> B
    B -- No ----> E[End]

          </pre>
          </code>
        <h2 id="_1-8-字符相关" tabindex="-1"><a class="header-anchor" href="#_1-8-字符相关"><span>1.8  字符相关</span></a></h2>
<h3 id="_1-8-1-破坏语法的特殊字符" tabindex="-1"><a class="header-anchor" href="#_1-8-1-破坏语法的特殊字符"><span>1.8.1 破坏语法的特殊字符</span></a></h3>
<p>为了呈现更多麻烦的字符，可以将文本放在引号内。如下例所示：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1["This is the (text) in the box"]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-x0k44ye">
            flowchart LR
    id1["This is the (text) in the box"]

          </pre>
          </code>
        <p>This is the (text) in the box</p>
<h3 id="_1-8-2-转义字符的实体代码" tabindex="-1"><a class="header-anchor" href="#_1-8-2-转义字符的实体代码"><span>1.8.2 转义字符的实体代码</span></a></h3>
<p>可以使用这里示例的语法转义字符。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A["A double quote:#quot;"] --> B["A dec char:#9829;"]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-0kht121">
            flowchart LR
    A["A double quote:#quot;"] --> B["A dec char:#9829;"]

          </pre>
          </code>
        <p>给定的数字以10为基数，因此 <code v-pre>#</code> 可以编码为 <code v-pre>#35;</code> 。还支持使用HTML字符名。</p>
<h2 id="_1-9-子图" tabindex="-1"><a class="header-anchor" href="#_1-9-子图"><span>1.9 子图</span></a></h2>
<h3 id="_1-9-1-基础使用" tabindex="-1"><a class="header-anchor" href="#_1-9-1-基础使用"><span>1.9.1 基础使用</span></a></h3>
<ol>
<li>语法</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">subgraph title</span>
<span class="line">    graph definition</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>下面是一个例子：</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TB</span>
<span class="line">    c1-->a2</span>
<span class="line">    subgraph one</span>
<span class="line">    a1-->a2</span>
<span class="line">    end</span>
<span class="line">    subgraph two</span>
<span class="line">    b1-->b2</span>
<span class="line">    end</span>
<span class="line">    subgraph three</span>
<span class="line">    c1-->c2</span>
<span class="line">    end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-mc605sn">
            flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end

          </pre>
          </code>
        <ol start="3">
<li>为子图设置显式id。</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TB</span>
<span class="line">    c1-->a2</span>
<span class="line">    subgraph ide1 [one]</span>
<span class="line">    a1-->a2</span>
<span class="line">    end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-ywcvj46">
            flowchart TB
    c1-->a2
    subgraph ide1 [one]
    a1-->a2
    end

          </pre>
          </code>
        <h3 id="_1-9-2-子图作为流程图" tabindex="-1"><a class="header-anchor" href="#_1-9-2-子图作为流程图"><span>1.9.2 子图作为流程图</span></a></h3>
<p>使用图形类型流程图，也可以像下面的流程图一样设置子图之间的边。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TB</span>
<span class="line">    c1-->a2</span>
<span class="line">    subgraph one</span>
<span class="line">    a1-->a2</span>
<span class="line">    end</span>
<span class="line">    subgraph two</span>
<span class="line">    b1-->b2</span>
<span class="line">    end</span>
<span class="line">    subgraph three</span>
<span class="line">    c1-->c2</span>
<span class="line">    end</span>
<span class="line">    one --> two</span>
<span class="line">    three --> two</span>
<span class="line">    two --> c2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-vnm8x1y">
            flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2

          </pre>
          </code>
        <h3 id="_1-9-3-子图中的方向" tabindex="-1"><a class="header-anchor" href="#_1-9-3-子图中的方向"><span>1.9.3 子图中的方向</span></a></h3>
<p>对于graphtype流程图，您可以使用direction语句来设置子图将呈现的方向，就像这个例子一样。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">  subgraph TOP</span>
<span class="line">    direction TB</span>
<span class="line">    subgraph B1</span>
<span class="line">        direction RL</span>
<span class="line">        i1 -->f1</span>
<span class="line">    end</span>
<span class="line">    subgraph B2</span>
<span class="line">        direction BT</span>
<span class="line">        i2 -->f2</span>
<span class="line">    end</span>
<span class="line">  end</span>
<span class="line">  A --> TOP --> B</span>
<span class="line">  B1 --> B2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-8iv8sbv">
            flowchart LR
  subgraph TOP
    direction TB
    subgraph B1
        direction RL
        i1 -->f1
    end
    subgraph B2
        direction BT
        i2 -->f2
    end
  end
  A --> TOP --> B
  B1 --> B2

          </pre>
          </code>
        <h3 id="_1-9-4-限制" tabindex="-1"><a class="header-anchor" href="#_1-9-4-限制"><span>1.9.4 限制</span></a></h3>
<p>如果子图的任何节点链接到外部，子图的方向将被忽略。相反，子图将继承父图的方向：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    subgraph subgraph1</span>
<span class="line">        direction TB</span>
<span class="line">        top1[top] --> bottom1[bottom]</span>
<span class="line">    end</span>
<span class="line">    subgraph subgraph2</span>
<span class="line">        direction TB</span>
<span class="line">        top2[top] --> bottom2[bottom]</span>
<span class="line">    end</span>
<span class="line">    %% ^ These subgraphs are identical, except for the links to them:</span>
<span class="line"></span>
<span class="line">    %% Link *to* subgraph1: subgraph1 direction is maintained</span>
<span class="line">    outside --> subgraph1</span>
<span class="line">    %% Link *within* subgraph2:</span>
<span class="line">    %% subgraph2 inherits the direction of the top-level graph (LR)</span>
<span class="line">    outside ---> top2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-g9pja84">
            flowchart LR
    subgraph subgraph1
        direction TB
        top1[top] --> bottom1[bottom]
    end
    subgraph subgraph2
        direction TB
        top2[top] --> bottom2[bottom]
    end
    %% ^ These subgraphs are identical, except for the links to them:

    %% Link *to* subgraph1: subgraph1 direction is maintained
    outside --> subgraph1
    %% Link *within* subgraph2:
    %% subgraph2 inherits the direction of the top-level graph (LR)
    outside ---> top2

          </pre>
          </code>
        <h2 id="_1-10-markdown字符串" tabindex="-1"><a class="header-anchor" href="#_1-10-markdown字符串"><span>1.10 markdown字符串</span></a></h2>
<p>“markdown字符串”功能通过提供更通用的字符串类型来增强流程图和思维导图，它支持文本格式选项，如粗体和斜体，并在标签内自动换行文本。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">%%{ init: { "flowchart":  {"htmlLabels"}:false } }%%</span>
<span class="line">flowchart LR</span>
<span class="line">subgraph "One"</span>
<span class="line">  a("`The **cat**</span>
<span class="line">  in the hat`") -- "edge label" --> b{{"`The **dog** in the hog`"}}</span>
<span class="line">end</span>
<span class="line">subgraph "`**Two**`"</span>
<span class="line">  c("`The **cat**</span>
<span class="line">  in the hat`") -- "`Bold **edge label**`" --> d("The dog in the hog")</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>
<p><img src="/other/other/mermaid/003.png" alt=""></p>
<p>格式:</p>
<ul>
<li>对于粗体文本，在文本前后使用双星号（ <code v-pre>**</code> ）。</li>
<li>对于斜体，在文本前后使用单个星号（ <code v-pre>*</code> ）。</li>
<li>对于传统字符串，您需要添加 <code v-pre>&lt;br&gt;</code> 标记，以便文本在节点中包装。但是，当文本变得太长时，标记字符串会自动换行，并允许您通过简单地使用换行符而不是 <code v-pre>&lt;br&gt;</code> 标记来开始新行。</li>
</ul>
<p>该特性适用于节点标签、边标签和子图标签。</p>
<p>可以使用命令禁用自动包装</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">---</span>
<span class="line">config:</span>
<span class="line">  markdownAutoWrap: false</span>
<span class="line">---</span>
<span class="line">graph LR</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-11-交互" tabindex="-1"><a class="header-anchor" href="#_1-11-交互"><span>1.11 交互</span></a></h2>
<p>可以将单击事件绑定到节点，单击可以导致javascript回调或链接，该链接将在新的浏览器选项卡中打开。</p>
<blockquote>
<p>当使用 <code v-pre>securityLevel='strict'</code> 时禁用此功能，当使用 <code v-pre>securityLevel='loose'</code> 时启用此功能。</p>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">click nodeId callback</span>
<span class="line">click nodeId call callback()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>nodeId为节点id</li>
<li>callback是在显示图形的页面上定义的javascript函数的名称，该函数将以nodeId作为参数调用。</li>
</ul>
<p>工具提示用法示例如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'A callback was triggered'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工具提示文本用双引号括起来。工具提示的样式由类 <code v-pre>.mermaidTooltip</code> 设置。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A-->B</span>
<span class="line">    B-->C</span>
<span class="line">    C-->D</span>
<span class="line">    click A callback "Tooltip for a callback"</span>
<span class="line">    click B "https://www.github.com" "This is a tooltip for a link"</span>
<span class="line">    click C call callback() "Tooltip for a callback"</span>
<span class="line">    click D href "https://www.github.com" "This is a tooltip for a link"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-1q8t1cg">
            flowchart LR
    A-->B
    B-->C
    C-->D
    click A callback "Tooltip for a callback"
    click B "https://www.github.com" "This is a tooltip for a link"
    click C call callback() "Tooltip for a callback"
    click D href "https://www.github.com" "This is a tooltip for a link"

          </pre>
          </code>
        <blockquote>
<p>工具提示功能和链接到url的能力从0.5.2版本开始可用。</p>
</blockquote>
<p>由于Docsify处理JavaScript回调函数的方式存在限制，可以在本文中查看上述代码的另一个工作演示。</p>
<p>默认情况下，链接在相同的浏览器选项卡/窗口中打开。可以通过在click定义中添加链接目标来改变这一点（支持 <code v-pre>_self</code> ,  <code v-pre>_blank</code> ,  <code v-pre>_parent</code> 和 <code v-pre>_top</code> ）：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A-->B</span>
<span class="line">    B-->C</span>
<span class="line">    C-->D</span>
<span class="line">    D-->E</span>
<span class="line">    click A "https://www.github.com" _blank</span>
<span class="line">    click B "https://www.github.com" "Open this in a new tab" _blank</span>
<span class="line">    click C href "https://www.github.com" _blank</span>
<span class="line">    click D href "https://www.github.com" "Open this in a new tab" _blank</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-xpin59j">
            flowchart LR
    A-->B
    B-->C
    C-->D
    D-->E
    click A "https://www.github.com" _blank
    click B "https://www.github.com" "Open this in a new tab" _blank
    click C href "https://www.github.com" _blank
    click D href "https://www.github.com" "Open this in a new tab" _blank

          </pre>
          </code>
        <p>初学者提示——在html上下文中使用交互式链接的完整示例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mermaid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    flowchart LR</span>
<span class="line">        A-->B</span>
<span class="line">        B-->C</span>
<span class="line">        C-->D</span>
<span class="line">        click A callback "Tooltip"</span>
<span class="line">        click B "https://www.github.com" "This is a link"</span>
<span class="line">        click C call callback() "Tooltip"</span>
<span class="line">        click D href "https://www.github.com" "This is a link"</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'A callback was triggered'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">startOnLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">flowchart</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">useMaxWidth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">htmlLabels</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">curve</span><span class="token operator">:</span> <span class="token string">'cardinal'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">securityLevel</span><span class="token operator">:</span> <span class="token string">'loose'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-12-注释" tabindex="-1"><a class="header-anchor" href="#_1-12-注释"><span>1.12 注释</span></a></h2>
<p>可以在流程图中输入注释，解析器将忽略这些注释。注释需要在单独的行上，并且必须以 <code v-pre>%%</code> （双百分号）作为前缀。在注释开始到下一个换行符之后的任何文本都将被视为注释，包括任何流语法</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">%% this is a comment A -- text --> B{node}</span>
<span class="line">   A -- text --> B -- text2 --> C</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-u3f1wl6">
            flowchart LR
%% this is a comment A -- text --> B{node}
   A -- text --> B -- text2 --> C

          </pre>
          </code>
        <h2 id="_1-13-样式" tabindex="-1"><a class="header-anchor" href="#_1-13-样式"><span>1.13 样式</span></a></h2>
<h3 id="_1-13-1-样式的链接" tabindex="-1"><a class="header-anchor" href="#_1-13-1-样式的链接"><span>1.13.1 样式的链接</span></a></h3>
<p>可以为链接设置样式。例如，您可能希望样式化流中向后移动的链接。由于链接与节点一样没有id，因此需要采用其他方式来决定链接应该附加到什么样式。使用在图中定义链接时的顺序号而不是id，或者使用default应用于所有链接。在下面的例子中，在linkStyle语句中定义的样式将属于图中的第四个链接：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">linkStyle 3 stroke:#ff3,stroke-width:4px,color:red;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>通过用逗号分隔链接号，也可以在单个语句中为多个链接添加样式：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">linkStyle 1,2,7 color:blue;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-13-2-造型线曲线" tabindex="-1"><a class="header-anchor" href="#_1-13-2-造型线曲线"><span>1.13.2 造型线曲线</span></a></h3>
<p>如果默认方法不能满足您的需要，则可以对项目之间的线条使用的曲线类型进行样式设置。可用曲线风格包括 <code v-pre>basis</code> ,  <code v-pre>bumpX</code> ,  <code v-pre>bumpY</code> ,  <code v-pre>cardinal</code> ,  <code v-pre>catmullRom</code> ,  <code v-pre>linear</code> ,  <code v-pre>monotoneX</code> ,  <code v-pre>monotoneY</code> ,  <code v-pre>natural</code> ,  <code v-pre>step</code> ,  <code v-pre>stepAfter</code> ,和 <code v-pre>stepBefore</code> 。</p>
<p>在这个例子中，从左到右的图形使用 <code v-pre>stepBefore</code> 曲线样式：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">%%{ init: { 'flowchart': { 'curve': 'stepBefore' } } }%%</span>
<span class="line">graph LR</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>有关可用曲线的完整列表（包括自定义曲线的说明），请参阅3d -shape项目中的Shapes文档。</p>
<h3 id="_1-13-3-样式化节点" tabindex="-1"><a class="header-anchor" href="#_1-13-3-样式化节点"><span>1.13.3 样式化节点</span></a></h3>
<p>可以对节点应用特定的样式，例如更厚的边框或不同的背景颜色。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1(Start)-->id2(Stop)</span>
<span class="line">    style id1 fill:#f9f,stroke:#333,stroke-width:4px</span>
<span class="line">    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-52ywoav">
            flowchart LR
    id1(Start)-->id2(Stop)
    style id1 fill:#f9f,stroke:#333,stroke-width:4px
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

          </pre>
          </code>
        <h2 id="_1-14-类" tabindex="-1"><a class="header-anchor" href="#_1-14-类"><span>1.14 类</span></a></h2>
<h3 id="_1-14-1-基础定义并使用" tabindex="-1"><a class="header-anchor" href="#_1-14-1-基础定义并使用"><span>1.14.1 基础定义并使用</span></a></h3>
<p>比每次定义样式更方便的方法是定义一个样式类，并将该类附加到应该具有不同外观的节点上。</p>
<p>类定义看起来像下面的例子：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">    classDef className fill:#f9f,stroke:#333,stroke-width:4px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>此外，可以在一个语句中定义多个类的样式：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">    classDef firstClassName,secondClassName font-size:12pt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将类附加到节点的操作如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">    class nodeId1 className;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>也可以在一条语句中将一个类附加到节点列表：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">    class nodeId1,nodeId2 className;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>添加类的较短形式是使用 <code v-pre>:::</code> 操作符将类名附加到节点上，如下所示：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A:::someclass --> B</span>
<span class="line">    classDef someclass fill:#f96</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-ixzwzif">
            flowchart LR
    A:::someclass --> B
    classDef someclass fill:#f96

          </pre>
          </code>
        <p>当声明节点间的多个链接时，可以使用这种形式：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A:::foo &amp; B:::bar --> C:::foobar</span>
<span class="line">    classDef foo stroke:#f00</span>
<span class="line">    classDef bar stroke:#0f0</span>
<span class="line">    classDef foobar stroke:#00f</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-60bbwe3">
            flowchart LR
    A:::foo & B:::bar --> C:::foobar
    classDef foo stroke:#f00
    classDef bar stroke:#0f0
    classDef foobar stroke:#00f

          </pre>
          </code>
        <h3 id="_1-14-2-使用css类" tabindex="-1"><a class="header-anchor" href="#_1-14-2-使用css类"><span>1.14.2 使用CSS类</span></a></h3>
<p>也可以在CSS样式中预定义类，这些类可以从图形定义中应用，如下例所示：</p>
<p><strong>例子的风格</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">  <span class="token selector">.cssClass > rect</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">fill</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">stroke</span><span class="token punctuation">:</span> #ffff00<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">stroke-width</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例定义</strong></p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A-->B[AAA&lt;span>BBB&lt;/span>]</span>
<span class="line">    B-->D</span>
<span class="line">    class A cssClass</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-5kkga9k">
            flowchart LR
    A-->B[AAA<span>BBB</span>]
    B-->D
    class A cssClass

          </pre>
          </code>
        <h3 id="_1-14-3-默认的类" tabindex="-1"><a class="header-anchor" href="#_1-14-3-默认的类"><span>1.14.3 默认的类</span></a></h3>
<p>如果一个类被命名为default，它将被分配给所有的类，而不需要特定的类定义。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDef default fill:#f9f,stroke:#333,stroke-width:4px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_1-15-图标的支持" tabindex="-1"><a class="header-anchor" href="#_1-15-图标的支持"><span>1.15 图标的支持</span></a></h2>
<h3 id="_1-15-1-对fontawesome的基本支持" tabindex="-1"><a class="header-anchor" href="#_1-15-1-对fontawesome的基本支持"><span>1.15.1 对fontawesome的基本支持</span></a></h3>
<p>可以从fontaawesome添加图标。</p>
<p>通过语法fa:#图标类名#访问图标。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    B["fa:fa-twitter for peace"]</span>
<span class="line">    B-->C[fa:fa-ban forbidden]</span>
<span class="line">    B-->D(fa:fa-spinner)</span>
<span class="line">    B-->E(A fa:fa-camera-retro perhaps?)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-1ct35b7">
            flowchart TD
    B["fa:fa-twitter for peace"]
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner)
    B-->E(A fa:fa-camera-retro perhaps?)

          </pre>
          </code>
        <p>mermaid支持字体Awesome，如果CSS包含在网站上。mermaid对可以使用的字体Awesome的版本没有任何限制。</p>
<p>请参考官方字体Awesome文档，了解如何将其包含在您的网站中。</p>
<p>在 <code v-pre>&lt;head&gt;</code> 中添加这个代码片段将增加对Font Awesome v6.5.1的支持</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span></span>
<span class="line">  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-15-2-自定义图标" tabindex="-1"><a class="header-anchor" href="#_1-15-2-自定义图标"><span>1.15.2 自定义图标</span></a></h3>
<p>只要网站导入相应的工具包，就可以使用从字体Awesome服务的自定义图标。</p>
<p>请注意，这是目前从字体Awesome付费功能。</p>
<p>对于自定义图标，您需要使用 <code v-pre>fak</code> 前缀。</p>
<p><strong>例子</strong></p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    B[fa:fa-twitter] %% standard icon</span>
<span class="line">    B-->E(fak:fa-custom-icon-name) %% custom icon</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并试图渲染它</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    B["fa:fa-twitter for peace"]</span>
<span class="line">    B-->C["fab:fa-truck-bold a custom icon"]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-ufzou11">
            flowchart TD
    B["fa:fa-twitter for peace"]
    B-->C["fab:fa-truck-bold a custom icon"]

          </pre>
          </code>
        <h3 id="_1-15-3-注意点" tabindex="-1"><a class="header-anchor" href="#_1-15-3-注意点"><span>1.15.3 注意点</span></a></h3>
<blockquote>
<p>图形声明在顶点和链接之间带有空格，并且没有分号</p>
</blockquote>
<ul>
<li>
<p>在图形声明中，语句现在也可以不使用分号结束。在0.2.16版本之后，以分号结束图形语句是可选的。所以下面的图声明和旧的图声明一样有效。</p>
</li>
<li>
<p>在顶点和链接之间只允许有一个空格。但是，顶点和它的文本之间以及链接和它的文本之间不应该有任何空格。旧的图形声明语法也可以工作，因此这个新特性是可选的，是为了提高可读性而引入的。</p>
</li>
</ul>
<p>下面是新的图边声明，它与旧的图边声明一起有效。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    A[Hard edge] -->|Link text| B(Round edge)</span>
<span class="line">    B --> C{Decision}</span>
<span class="line">    C -->|One| D[Result one]</span>
<span class="line">    C -->|Two| E[Result two]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-ne39lnc">
            flowchart LR
    A[Hard edge] -->|Link text| B(Round edge)
    B --> C{Decision}
    C -->|One| D[Result one]
    C -->|Two| E[Result two]

          </pre>
          </code>
        <h2 id="_1-16-配置" tabindex="-1"><a class="header-anchor" href="#_1-16-配置"><span>1.16 配置</span></a></h2>
<h3 id="_1-16-1-渲染器" tabindex="-1"><a class="header-anchor" href="#_1-16-1-渲染器"><span>1.16.1 渲染器</span></a></h3>
<p>图的布局是用渲染器完成的。默认的渲染器是dagre。</p>
<p>从9.4版<code v-pre>Mermaid</code>开始，您可以使用名为elk的替代渲染器。elk渲染器更适合大型和/或更复杂的图表。</p>
<p>麋鹿渲染器是一个实验性的功能。你可以通过添加这个指令将渲染器改为elk：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">%%{init: {"flowchart": {"defaultRenderer": "elk"}} }%%</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>请注意，该站点需要使用<code v-pre>mermaid</code>9.4版本才能正常工作，并在延迟加载配置中启用此功能。</p>
</blockquote>
<h3 id="_1-16-3-宽度" tabindex="-1"><a class="header-anchor" href="#_1-16-3-宽度"><span>1.16.3 宽度</span></a></h3>
<p>可以调整渲染流程图的宽度。</p>
<p>这是通过定义<code v-pre>mermaid</code>来实现的。<code v-pre>flowchartConfig</code>或通过CLI使用JSON文件进行配置。CLI的使用方法请参见<code v-pre>mermaidCLI</code>界面。美人鱼。<code v-pre>flowchartConfig</code>可以设置为带有配置参数的JSON字符串或相应的对象。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">mermaid<span class="token punctuation">.</span>flowchartConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>



<style scoped>
  .cssClass > rect {
    fill: #ff0000;
    stroke: #ffff00;
    stroke-width: 4px;
  }
</style>