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

          <pre class="mermaid" id="mermaid-qjqjpsx">
            flowchart LR
    id

          </pre>
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

          <pre class="mermaid" id="mermaid-lj1x2xn">
            ---
title: Node with text
---
flowchart LR
    id1[This is the text in the box]

          </pre>
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

          <pre class="mermaid" id="mermaid-rhc1bgm">
            flowchart LR
    id["This ❤ Unicode"]

          </pre>
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

          <pre class="mermaid" id="mermaid-k8jehqw">
            %%{init: {"flowchart": {"htmlLabels": false}} }%%
flowchart LR
    markdown["`This **is** _Markdown_`"]
    newLines["`Line1
    Line 2
    Line 3`"]
    markdown --> newLines

          </pre>
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

          <pre class="mermaid" id="mermaid-0uax5hv">
            flowchart TD
    Start --> Stop

          </pre>
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

          <pre class="mermaid" id="mermaid-x0tdsve">
            flowchart LR
    Start --> Stop

          </pre>
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

          <pre class="mermaid" id="mermaid-wmz2hyc">
            flowchart LR
    id1(文本在容器中)

          </pre>
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

          <pre class="mermaid" id="mermaid-3bh01wa">
            flowchart LR
    id1([文本在容器中])

          </pre>
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

          <pre class="mermaid" id="mermaid-iauhyc5">
            flowchart LR
    id1[[This is the text in the box]]

          </pre>
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

          <pre class="mermaid" id="mermaid-ezjsvi0">
            flowchart LR
    id1[(Database)]

          </pre>
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

          <pre class="mermaid" id="mermaid-7rgaghy">
            flowchart LR
    id1((文本在圆中))

          </pre>
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

          <pre class="mermaid" id="mermaid-5hnrmda">
            flowchart LR
    id1>文本在容器中]

          </pre>
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

          <pre class="mermaid" id="mermaid-661cszz">
            flowchart LR
    id1{文本在容器中}

          </pre>
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

          <pre class="mermaid" id="mermaid-hhr47sa">
            flowchart LR
    id1{{文本在容器中}}

          </pre>
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

          <pre class="mermaid" id="mermaid-h1g8qh2">
            flowchart LR
    id1[/文本在容器中/]

          </pre>
        <ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">    id1[\文本在容器中\]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-d6y1b6d">
            flowchart LR
    id1[\文本在容器中\]

          </pre>
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

          <pre class="mermaid" id="mermaid-ztsuwrk">
            flowchart TD
    A[/梯形\]

          </pre>
        <ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart TD</span>
<span class="line">    A[\梯形/]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-zva8z9b">
            flowchart TD
    A[\梯形/]

          </pre>
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

          <pre class="mermaid" id="mermaid-m7iulwi">
            flowchart TD
    A(((文本在圆中)))

          </pre>
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

          <pre class="mermaid" id="mermaid-tfo6oxu">
            flowchart RL
    A@{ shape: manual-file, label: "File Handling"}
    B@{ shape: manual-input, label: "User Input"}
    C@{ shape: docs, label: "Multiple Documents"}
    D@{ shape: procs, label: "Process Automation"}
    E@{ shape: paper-tape, label: "Paper Records"}

          </pre>
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

          <pre class="mermaid" id="mermaid-gvfvcyd">
            flowchart TD
    A@{ shape: rect, label: "This is a process" }

          </pre>
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

          <pre class="mermaid" id="mermaid-33aqfee">
            flowchart TD
    A@{ shape: rounded, label: "This is an event" }

          </pre>
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

          <pre class="mermaid" id="mermaid-pxv8mqp">
            flowchart TD
    A@{ shape: stadium, label: "Terminal point" }

          </pre>
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

          <pre class="mermaid" id="mermaid-g0gytec">
            flowchart TD
    A@{ shape: cyl, label: "Database" }

          </pre>
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

          <pre class="mermaid" id="mermaid-7ee972j">
            flowchart TD
    A@{ shape: circle, label: "Start" }

          </pre>
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

          <pre class="mermaid" id="mermaid-tnfsto6">
            flowchart TD
    A@{ shape: odd, label: "Odd shape" }

          </pre>
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

          <pre class="mermaid" id="mermaid-9k0l6rj">
            flowchart TD
    A@{ shape: diamond, label: "Decision" }

          </pre>
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

          <pre class="mermaid" id="mermaid-r7jwpbc">
            flowchart TD
    A@{ shape: hex, label: "Prepare conditional" }

          </pre>
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

          <pre class="mermaid" id="mermaid-agdnbsi">
            flowchart TD
    A@{ shape: lean-r, label: "Input/Output" }

          </pre>
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

          <pre class="mermaid" id="mermaid-1oc4vmi">
            flowchart TD
    A@{ shape: lean-l, label: "Output/Input" }

          </pre>
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

          <pre class="mermaid" id="mermaid-kbfyqhb">
            flowchart TD
    A@{ shape: trap-b, label: "Priority action" }

          </pre>
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

          <pre class="mermaid" id="mermaid-wv9baih">
            flowchart TD
    A@{ shape: trap-t, label: "Manual operation" }

          </pre>
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

          <pre class="mermaid" id="mermaid-mo852ja">
            flowchart TD
    A@{ shape: dbl-circ, label: "Stop" }

          </pre>
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

          <pre class="mermaid" id="mermaid-86r8cd5">
            flowchart TD
    A@{ shape: notch-rect, label: "Card" }

          </pre>
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

          <pre class="mermaid" id="mermaid-3jc9u80">
            flowchart TD
    A@{ shape: notch-rect, label: "Card" }

          </pre>
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

          <pre class="mermaid" id="mermaid-su8g03s">
            flowchart TD
    A@{ shape: lin-rect, label: "Lined process" }

          </pre>
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

          <pre class="mermaid" id="mermaid-mjmhv6f">
            flowchart TD
    A@{ shape: sm-circ, label: "Small start" }

          </pre>
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

          <pre class="mermaid" id="mermaid-5llg4wy">
            flowchart TD
    A@{ shape: framed-circle, label: "Stop" }

          </pre>
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

          <pre class="mermaid" id="mermaid-6fju74b">
            flowchart TD
    A@{ shape: fork, label: "Fork or Join" }

          </pre>
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

          <pre class="mermaid" id="mermaid-yvc4k5a">
            flowchart TD
    A@{ shape: hourglass, label: "Collate" }

          </pre>
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

          <pre class="mermaid" id="mermaid-ymuf6le">
            flowchart TD
    A@{ shape: comment, label: "Comment" }

          </pre>
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

          <pre class="mermaid" id="mermaid-q7yw68q">
            flowchart TD
    A@{ shape: brace-r, label: "Comment" }

          </pre>
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

          <pre class="mermaid" id="mermaid-glmy891">
            flowchart TD
    A@{ shape: braces, label: "Comment" }

          </pre>
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

          <pre class="mermaid" id="mermaid-vmmadx7">
            flowchart TD
    A@{ shape: bolt, label: "Communication link" }

          </pre>
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

          <pre class="mermaid" id="mermaid-jzgmvlh">
            flowchart TD
    A@{ shape: doc, label: "Document" }

          </pre>
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

          <pre class="mermaid" id="mermaid-s6zvkuy">
            flowchart TD
    A@{ shape: delay, label: "Delay" }

          </pre>
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

          <pre class="mermaid" id="mermaid-znrzvpy">
            flowchart TD
    A@{ shape: das, label: "Direct access storage" }

          </pre>
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

          <pre class="mermaid" id="mermaid-xhb3eky">
            flowchart TD
    A@{ shape: lin-cyl, label: "Disk storage" }

          </pre>
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

          <pre class="mermaid" id="mermaid-mr7elfu">
            flowchart TD
    A@{ shape: curv-trap, label: "Display" }

          </pre>
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

          <pre class="mermaid" id="mermaid-cdkx4xq">
            flowchart TD
    A@{ shape: div-rect, label: "Divided process" }

          </pre>
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

          <pre class="mermaid" id="mermaid-szbk3fv">
            flowchart TD
    A@{ shape: tri, label: "Extract" }

          </pre>
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

          <pre class="mermaid" id="mermaid-wjx6x4p">
            flowchart TD
    A@{ shape: win-pane, label: "Internal storage" }

          </pre>
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

          <pre class="mermaid" id="mermaid-0n4u1vd">
            flowchart TD
    A@{ shape: f-circ, label: "Junction" }

          </pre>
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

          <pre class="mermaid" id="mermaid-r6fq1ah">
            flowchart TD
    A@{ shape: lin-doc, label: "Lined document" }

          </pre>
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

          <pre class="mermaid" id="mermaid-h436p8t">
            flowchart TD
    A@{ shape: notch-pent, label: "Loop limit" }

          </pre>
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

          <pre class="mermaid" id="mermaid-kaanxct">
            flowchart TD
    A@{ shape: flip-tri, label: "Manual file" }

          </pre>
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

          <pre class="mermaid" id="mermaid-05qbrca">
            flowchart TD
    A@{ shape: sl-rect, label: "Manual input" }

          </pre>
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

          <pre class="mermaid" id="mermaid-kp50sk7">
            flowchart TD
    A@{ shape: docs, label: "Multiple documents" }

          </pre>
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

          <pre class="mermaid" id="mermaid-0p6obyh">
            flowchart TD
    A@{ shape: processes, label: "Multiple processes" }

          </pre>
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

          <pre class="mermaid" id="mermaid-58j4pz4">
            flowchart TD
    A@{ shape: flag, label: "Paper tape" }

          </pre>
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

          <pre class="mermaid" id="mermaid-2ttuw04">
            flowchart TD
    A@{ shape: bow-rect, label: "Stored data" }

          </pre>
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

          <pre class="mermaid" id="mermaid-xh7t9vj">
            flowchart TD
    A@{ shape: cross-circ, label: "Summary" }

          </pre>
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

          <pre class="mermaid" id="mermaid-az0ac27">
            flowchart TD
    A@{ shape: tag-doc, label: "Tagged document" }

          </pre>
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

          <pre class="mermaid" id="mermaid-a3uufvg">
            flowchart TD
    A@{ shape: tag-rect, label: "Tagged process" }

          </pre>
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

          <pre class="mermaid" id="mermaid-o07gkau">
            flowchart TD
    A@{ icon: "fa:user", form: "square", label: "User Icon", pos: "t", h: 60 }

          </pre>
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

          <pre class="mermaid" id="mermaid-duse07m">
            flowchart TD
    A@{ img: "", label: "Image Label", pos: "t", w: 60, h: 60, constraint: "off" }

          </pre>
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

          <pre class="mermaid" id="mermaid-ydpu95n">
            flowchart LR
    A-->B

          </pre>
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

          <pre class="mermaid" id="mermaid-d8oc4ll">
            flowchart LR
    A --- B

          </pre>
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

          <pre class="mermaid" id="mermaid-itcfqd2">
            flowchart LR
    A-- This is the text! ---B

          </pre>
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

          <pre class="mermaid" id="mermaid-igxk7wq">
            flowchart LR
    A---|This is the text|B

          </pre>
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

          <pre class="mermaid" id="mermaid-kopjohb">
            flowchart LR
    A-->|text|B

          </pre>
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

          <pre class="mermaid" id="mermaid-d61fz8f">
            flowchart LR
    A-- text -->B

          </pre>
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

          <pre class="mermaid" id="mermaid-f0fn3hm">
            flowchart LR
   A-.->B;

          </pre>
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

          <pre class="mermaid" id="mermaid-fb4tvon">
            flowchart LR
   A-. text .-> B

          </pre>
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

          <pre class="mermaid" id="mermaid-mixfoqx">
            flowchart LR
   A ==> B

          </pre>
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

          <pre class="mermaid" id="mermaid-jehdn98">
            flowchart LR
   A == text ==> B

          </pre>
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

          <pre class="mermaid" id="mermaid-wf80ivo">
            flowchart LR
    A ~~~ B

          </pre>
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

          <pre class="mermaid" id="mermaid-u2m6u4p">
            flowchart LR
   A -- text --> B -- text2 --> C

          </pre>
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

          <pre class="mermaid" id="mermaid-ou65qkx">
            flowchart LR
   a --> b & c--> d

          </pre>
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

          <pre class="mermaid" id="mermaid-4znkgli">
            flowchart TB
    A & B--> C & D

          </pre>
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

          <pre class="mermaid" id="mermaid-5u4ghmh">
            flowchart TB
    A --> C
    A --> D
    B --> C
    B --> D

          </pre>
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

          <pre class="mermaid" id="mermaid-6j5kyly">
            flowchart LR
  A e1@==> B
  e1@{ animate: true }

          </pre>
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
<span class="line">  A e1@–> B</span>
<span class="line">  e1@{ animation: fast }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-mp9u5tl">
            flowchart LR
  A e1@–> B
  e1@{ animation: fast }

          </pre>
        <p>这相当于 <code v-pre>{ animate: true, animation: fast }</code> 。</p>
<ol start="4">
<li>为动画使用classDef语句</li>
</ol>
<p>你也可以给边缘赋一个类，然后在 <code v-pre>classDef</code> 语句中定义动画属性。例如:</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">flowchart LR</span>
<span class="line">  A e1@–> B</span>
<span class="line">  classDef animate stroke-dasharray: 9,5,stroke-dashoffset: 900,animation: dash 25s linear infinite;</span>
<span class="line">  class e1 animate</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-jjf1lza">
            flowchart LR
  A e1@–> B
  classDef animate stroke-dasharray: 9,5,stroke-dashoffset: 900,animation: dash 25s linear infinite;
  class e1 animate

          </pre>
        <p>在这个片段中：</p>
<ul>
<li><code v-pre>e1@--&gt;</code> 创建ID  <code v-pre>e1</code> 的边。</li>
<li><code v-pre>classDef animate</code> 定义了一个名为 <code v-pre>animate</code> 的类，具有样式和动画属性。</li>
<li><code v-pre>class e1 animate</code> 将 <code v-pre>animate</code> 类应用于边缘 <code v-pre>e1</code> 。</li>
</ul>
<p>注意转义逗号：当设置 <code v-pre>stroke-dasharray</code> 属性时，记住转义逗号为 <code v-pre>\,</code> ，因为逗号在Mermaid的样式定义中用作分隔符。</p>
<h3 id="_1-7-5-新链接" tabindex="-1"><a class="header-anchor" href="#_1-7-5-新链接"><span>1.7.5 新链接</span></a></h3>
</div></template>


