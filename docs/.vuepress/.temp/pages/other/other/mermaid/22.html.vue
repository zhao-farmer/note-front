<template><div><h1 id="二十一、雷达图" tabindex="-1"><a class="header-anchor" href="#二十一、雷达图"><span>二十一、雷达图</span></a></h1>
<h2 id="_21-1-雷达图基础" tabindex="-1"><a class="header-anchor" href="#_21-1-雷达图基础"><span>21.1 雷达图基础</span></a></h2>
<h3 id="_20-1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_20-1-1-介绍"><span>20.1.1 介绍</span></a></h3>
<p>雷达图是用圆形格式绘制低维数据的一种简单方法。</p>
<p>它也被称为雷达图、蜘蛛图、星图、蛛网图、极地图或基维亚图。</p>
<h3 id="_20-1-2-用法" tabindex="-1"><a class="header-anchor" href="#_20-1-2-用法"><span>20.1.2 用法</span></a></h3>
<p>这种图表类型对于开发人员、数据科学家和工程师特别有用，因为他们需要一种清晰而简洁的方式来以循环格式表示数据。</p>
<p>它通常用于图形化地总结和比较多个实体在多个维度上的性能。</p>
<h2 id="_20-2-语法" tabindex="-1"><a class="header-anchor" href="#_20-2-语法"><span>20.2 语法</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">radar-beta</span>
<span class="line">axis A, B, C, D, E</span>
<span class="line">curve c1{1,2,3,4,5}</span>
<span class="line">curve c2{5,4,3,2,1}</span>
<span class="line">... More Fields ...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-3-例子" tabindex="-1"><a class="header-anchor" href="#_20-3-例子"><span>20.3 例子</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">---</span>
<span class="line">title: "Grades"</span>
<span class="line">---</span>
<span class="line">radar-beta</span>
<span class="line">  axis m["Math"], s["Science"], e["English"]</span>
<span class="line">  axis h["History"], g["Geography"], a["Art"]</span>
<span class="line">  curve a["Alice"]{85, 90, 80, 70, 75, 90}</span>
<span class="line">  curve b["Bob"]{70, 75, 85, 80, 90, 85}</span>
<span class="line"></span>
<span class="line">  max 100</span>
<span class="line">  min 0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-svspce9">
            ---
title: "Grades"
---
radar-beta
  axis m["Math"], s["Science"], e["English"]
  axis h["History"], g["Geography"], a["Art"]
  curve a["Alice"]{85, 90, 80, 70, 75, 90}
  curve b["Bob"]{70, 75, 85, 80, 90, 85}

  max 100
  min 0

          </pre>
          </code>
        <ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">radar-beta</span>
<span class="line">  title Restaurant Comparison</span>
<span class="line">  axis food["Food Quality"], service["Service"], price["Price"]</span>
<span class="line">  axis ambiance["Ambiance"]</span>
<span class="line"></span>
<span class="line">  curve a["Restaurant A"]{4, 3, 2, 4}</span>
<span class="line">  curve b["Restaurant B"]{3, 4, 3, 3}</span>
<span class="line">  curve c["Restaurant C"]{2, 3, 4, 2}</span>
<span class="line">  curve d["Restaurant D"]{2, 2, 4, 3}</span>
<span class="line"></span>
<span class="line">  graticule polygon</span>
<span class="line">  max 5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-au8rgz4">
            radar-beta
  title Restaurant Comparison
  axis food["Food Quality"], service["Service"], price["Price"]
  axis ambiance["Ambiance"]

  curve a["Restaurant A"]{4, 3, 2, 4}
  curve b["Restaurant B"]{3, 4, 3, 3}
  curve c["Restaurant C"]{2, 3, 4, 2}
  curve d["Restaurant D"]{2, 2, 4, 3}

  graticule polygon
  max 5

          </pre>
          </code>
        <h2 id="_20-4-语法细节" tabindex="-1"><a class="header-anchor" href="#_20-4-语法细节"><span>20.4 语法细节</span></a></h2>
<h3 id="_20-4-1-标题" tabindex="-1"><a class="header-anchor" href="#_20-4-1-标题"><span>20.4.1 标题</span></a></h3>
<p><code v-pre>title</code> ：标题是一个可选字段，允许在雷达图的顶部呈现标题。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">radar-beta</span>
<span class="line">  title Title of the Radar Diagram</span>
<span class="line">  ...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_40-4-2-轴" tabindex="-1"><a class="header-anchor" href="#_40-4-2-轴"><span>40.4.2 轴</span></a></h3>
<p><code v-pre>axis</code> : axis关键字用于定义雷达图的轴线。</p>
<p>每个轴由一个ID和一个可选标签表示。</p>
<p>在一条直线上可以定义多个轴。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">radar-beta</span>
<span class="line">  axis id1["Label1"]</span>
<span class="line">  axis id2["Label2"], id3["Label3"]</span>
<span class="line">  ...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-4-3-曲线" tabindex="-1"><a class="header-anchor" href="#_20-4-3-曲线"><span>20.4.3 曲线</span></a></h3>
<p><code v-pre>curve</code> : curve关键字用于定义雷达图中曲线的数据点。</p>
<p>每条曲线都由一个ID、一个可选标签和一个值列表表示。</p>
<p>值可以通过数字列表或键值对列表来定义。如果使用键-值对，则键表示轴ID，值表示数据点。否则，假设数据点按照定义的轴的顺序排列。</p>
<p>多条曲线可以在一条直线上定义。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">radar-beta</span>
<span class="line">  axis axis1, axis2, axis3</span>
<span class="line">  curve id1["Label1"]{1, 2, 3}</span>
<span class="line">  curve id2["Label2"]{4, 5, 6}, id3{7, 8, 9}</span>
<span class="line">  curve id4{ axis3: 30, axis1: 20, axis2: 10 }</span>
<span class="line">  ...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_20-4-4-选项" tabindex="-1"><a class="header-anchor" href="#_20-4-4-选项"><span>20.4.4 选项</span></a></h3>
<ul>
<li><code v-pre>showLegend</code> : showLegend关键字用于显示或隐藏雷达图中的图例。默认情况下显示图例。</li>
<li><code v-pre>max</code> ：雷达图最大值。这是用来缩放雷达图的。如果没有提供，则从数据点计算最大值。</li>
<li><code v-pre>min</code> ：雷达图最小值。这是用来缩放雷达图的。如果不提供，最小值为 <code v-pre>0</code> 。</li>
<li><code v-pre>graticule</code> : graticule关键字用于定义在雷达图中渲染的光栅类型。光栅可以 <code v-pre>circle</code> 或 <code v-pre>polygon</code> 。如果未提供，则默认栅格 <code v-pre>circle</code> 。</li>
<li><code v-pre>ticks</code> : ticks关键字用于定义栅格上的tick数。它是绘制的同心圆或多边形的数量，以表示雷达图的比例。如果不提供，则默认的tick数为 <code v-pre>5</code> 。</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">radar-beta</span>
<span class="line">  ...</span>
<span class="line">  showLegend true</span>
<span class="line">  max 100</span>
<span class="line">  min 0</span>
<span class="line">  graticule circle</span>
<span class="line">  ticks 5</span>
<span class="line">  ...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20-5-配置" tabindex="-1"><a class="header-anchor" href="#_20-5-配置"><span>20.5 配置</span></a></h2>
<p>详细信息请参考配置指南。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>描述</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>hight</td>
<td>雷达图宽度</td>
<td><code v-pre>600</code></td>
</tr>
<tr>
<td>width</td>
<td>雷达图高度</td>
<td><code v-pre>600</code></td>
</tr>
<tr>
<td>marginTop</td>
<td>雷达图的上边缘</td>
<td><code v-pre>50</code></td>
</tr>
<tr>
<td>marginBottom</td>
<td>雷达图的底边</td>
<td><code v-pre>50</code></td>
</tr>
<tr>
<td>marginLeft</td>
<td>雷达图左边缘</td>
<td><code v-pre>50</code></td>
</tr>
<tr>
<td>marginRight</td>
<td>雷达图的右边缘</td>
<td><code v-pre>50</code></td>
</tr>
<tr>
<td>axisScaleFactor</td>
<td>轴的比例因子</td>
<td><code v-pre>1</code></td>
</tr>
<tr>
<td>axisLabelFactor</td>
<td>因子调整轴标位置</td>
<td><code v-pre>1.05</code></td>
</tr>
<tr>
<td>curveTension</td>
<td>圆形曲线的张力</td>
<td><code v-pre>0.17</code></td>
</tr>
</tbody>
</table>
<h2 id="_20-6-主题变量" tabindex="-1"><a class="header-anchor" href="#_20-6-主题变量"><span>20.6 主题变量</span></a></h2>
<h3 id="_20-6-1-全局主题变量" tabindex="-1"><a class="header-anchor" href="#_20-6-1-全局主题变量"><span>20.6.1 全局主题变量</span></a></h3>
<p>信息</p>
<p>这些变量的默认值取决于所使用的主题。要覆盖默认值，请在配置的themeVariables部分设置所需的值：<code v-pre>%%{init: {&quot;themeVariables&quot;: {&quot;cScale0&quot;: &quot;#FF0000&quot;, &quot;cScale1&quot;: &quot;#00FF00&quot;}}}%%</code></p>
<p>雷达图支持颜色刻度 <code v-pre>cScale${i}</code> ，其中 <code v-pre>i</code> 是一个从 <code v-pre>0</code> 到主题在其颜色刻度中的最大颜色数的数字。通常，颜色的最大数量为 <code v-pre>12</code> 。</p>
<table>
<thead>
<tr>
<th>财产</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>fontSize</td>
<td>标题的字体大小</td>
</tr>
<tr>
<td>titleColor</td>
<td>标题的颜色</td>
</tr>
<tr>
<td>cScale美元</td>
<td>第i条曲线的色阶</td>
</tr>
</tbody>
</table>
<h3 id="_20-6-2-雷达样式选项" tabindex="-1"><a class="header-anchor" href="#_20-6-2-雷达样式选项"><span>20.6.2 雷达样式选项</span></a></h3>
<p>雷达的特定变量位于 <code v-pre>radar</code> 键中。要设置雷达样式选项，请使用此语法。<code v-pre>%% {init:{“themeVariables”:{“雷达”:{“axisColor”:“# FF0000}}}} %%</code></p>
<table>
<thead>
<tr>
<th>财产</th>
<th>描述</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>axisColor</td>
<td>中轴线的颜色</td>
<td><code v-pre>black</code></td>
</tr>
<tr>
<td>axisStrokeWidth</td>
<td>轴线的宽度</td>
<td><code v-pre>1</code></td>
</tr>
<tr>
<td>axisLabelFontSize</td>
<td>轴标签的字体大小</td>
<td><code v-pre>12px</code></td>
</tr>
<tr>
<td>curveOpacity</td>
<td>曲线的不透明度</td>
<td><code v-pre>0.7</code></td>
</tr>
<tr>
<td>curveStrokeWidth</td>
<td>曲线的宽度</td>
<td><code v-pre>2</code></td>
</tr>
<tr>
<td>graticuleColor</td>
<td>光栅的颜色</td>
<td><code v-pre>black</code></td>
</tr>
<tr>
<td>graticuleOpacity</td>
<td>光栅的不透明性</td>
<td><code v-pre>0.5</code></td>
</tr>
<tr>
<td>graticuleStrokeWidth</td>
<td>光栅的宽度</td>
<td><code v-pre>1</code></td>
</tr>
<tr>
<td>legendBoxSize</td>
<td>图例框的大小</td>
<td><code v-pre>10</code></td>
</tr>
<tr>
<td>legendFontSize</td>
<td>图例的字体大小</td>
<td><code v-pre>14px</code></td>
</tr>
</tbody>
</table>
<h2 id="_20-7-关于配置和主题的示例" tabindex="-1"><a class="header-anchor" href="#_20-7-关于配置和主题的示例"><span>20.7 关于配置和主题的示例</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">---</span>
<span class="line">config:</span>
<span class="line">  radar:</span>
<span class="line">    axisScaleFactor: 0.25</span>
<span class="line">    curveTension: 0.1</span>
<span class="line">  theme: base</span>
<span class="line">  themeVariables:</span>
<span class="line">    cScale0: "#FF0000"</span>
<span class="line">    cScale1: "#00FF00"</span>
<span class="line">    cScale2: "#0000FF"</span>
<span class="line">    radar:</span>
<span class="line">      curveOpacity: 0</span>
<span class="line">---</span>
<span class="line">radar-beta</span>
<span class="line">  axis A, B, C, D, E</span>
<span class="line">  curve c1{1,2,3,4,5}</span>
<span class="line">  curve c2{5,4,3,2,1}</span>
<span class="line">  curve c3{3,3,3,3,3}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-2jn5vec">
            ---
config:
  radar:
    axisScaleFactor: 0.25
    curveTension: 0.1
  theme: base
  themeVariables:
    cScale0: "#FF0000"
    cScale1: "#00FF00"
    cScale2: "#0000FF"
    radar:
      curveOpacity: 0
---
radar-beta
  axis A, B, C, D, E
  curve c1{1,2,3,4,5}
  curve c2{5,4,3,2,1}
  curve c3{3,3,3,3,3}

          </pre>
          </code>
        </div></template>


