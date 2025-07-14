<template><div><h1 id="八、象限图" tabindex="-1"><a class="header-anchor" href="#八、象限图"><span>八、象限图</span></a></h1>
<blockquote>
<p>象限图是将数据分为四个象限的可视化表示。它用于在二维网格上绘制数据点，其中一个变量表示在x轴上，另一个变量表示在y轴上。象限是根据一组特定于所分析数据的标准，将图表分成四个相等的部分来确定的。象限图通常用于识别数据中的模式和趋势，并根据图表中数据点的位置确定行动的优先级。它们通常用于商业、市场营销和风险管理等领域。</p>
</blockquote>
<h2 id="_8-1-象限图基础使用" tabindex="-1"><a class="header-anchor" href="#_8-1-象限图基础使用"><span>8.1 象限图基础使用</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">quadrantChart</span>
<span class="line">    title Reach and engagement of campaigns</span>
<span class="line">    x-axis Low Reach --> High Reach</span>
<span class="line">    y-axis Low Engagement --> High Engagement</span>
<span class="line">    quadrant-1 We should expand</span>
<span class="line">    quadrant-2 Need to promote</span>
<span class="line">    quadrant-3 Re-evaluate</span>
<span class="line">    quadrant-4 May be improved</span>
<span class="line">    Campaign A: [0.3, 0.6]</span>
<span class="line">    Campaign B: [0.45, 0.23]</span>
<span class="line">    Campaign C: [0.57, 0.69]</span>
<span class="line">    Campaign D: [0.78, 0.34]</span>
<span class="line">    Campaign E: [0.40, 0.34]</span>
<span class="line">    Campaign F: [0.35, 0.78]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-p7952d1">
            quadrantChart
    title Reach and engagement of campaigns
    x-axis Low Reach --> High Reach
    y-axis Low Engagement --> High Engagement
    quadrant-1 We should expand
    quadrant-2 Need to promote
    quadrant-3 Re-evaluate
    quadrant-4 May be improved
    Campaign A: [0.3, 0.6]
    Campaign B: [0.45, 0.23]
    Campaign C: [0.57, 0.69]
    Campaign D: [0.78, 0.34]
    Campaign E: [0.40, 0.34]
    Campaign F: [0.35, 0.78]

          </pre>
        <h2 id="_8-2-语法" tabindex="-1"><a class="header-anchor" href="#_8-2-语法"><span>8.2 语法</span></a></h2>
<h3 id="_8-2-1-基础" tabindex="-1"><a class="header-anchor" href="#_8-2-1-基础"><span>8.2.1 基础</span></a></h3>
<p>如果图表中没有可用的点，则轴文本和象限都将在各自象限的中心呈现。如果有点，x轴标签将从相应象限的左侧呈现，它们也将显示在图表的底部，y轴标签将在相应象限的底部呈现，象限文本将在相应象限的顶部呈现。</p>
<p>对于点x和y值，最小值为0，最大值为1。</p>
<h3 id="_8-2-2-标题" tabindex="-1"><a class="header-anchor" href="#_8-2-2-标题"><span>8.2.2 标题</span></a></h3>
<p>标题是图表的简短描述，它将始终呈现在图表的顶部。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">quadrantChart</span>
<span class="line">    title This is a sample example</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-1p0yosj">
            quadrantChart
    title This is a sample example

          </pre>
        <h3 id="_8-2-3-x轴" tabindex="-1"><a class="header-anchor" href="#_8-2-3-x轴"><span>8.2.3 x轴</span></a></h3>
<p>x轴决定在x轴上显示哪些文本。在x轴上有左右两部分你可以同时通过也可以只通过左边。语句应该以 <code v-pre>x-axis</code> 开始，然后是 <code v-pre>left axis text</code> ，接着是分隔符 <code v-pre>--&gt;</code> 然后是 <code v-pre>right axis text</code> 。</p>
<ol>
<li><code v-pre>x-axis &lt;text&gt; --&gt; &lt;text&gt;</code> 左轴和右轴文本都将被渲染。</li>
<li><code v-pre>x-axis &lt;text&gt;</code> 只有左轴文本将被渲染。</li>
</ol>
<h3 id="_8-2-4-y轴" tabindex="-1"><a class="header-anchor" href="#_8-2-4-y轴"><span>8.2.4 y轴</span></a></h3>
<p>y轴决定在y轴上显示哪些文本。在y轴上有两部分，顶部和底部，你可以同时通过，也可以只通过底部。语句应该以 <code v-pre>y-axis</code> 开始，然后是 <code v-pre>bottom axis text</code> ，接着是分隔符 <code v-pre>--&gt;</code> 然后是 <code v-pre>top axis text</code> 。</p>
<ol>
<li><code v-pre>y-axis &lt;text&gt; --&gt; &lt;text&gt;</code> 底部和顶部轴文本都将被渲染。</li>
<li><code v-pre>y-axis &lt;text&gt;</code> 只有底部轴文本将被呈现。</li>
</ol>
<h3 id="_8-2-5-象限文本" tabindex="-1"><a class="header-anchor" href="#_8-2-5-象限文本"><span>8.2.5 象限文本</span></a></h3>
<p><code v-pre>quadrant-[1,2,3,4]</code> 决定哪些文本将在象限内显示。</p>
<ol>
<li><code v-pre>quadrant-1 &lt;text&gt;</code> 确定哪些文本将在右上象限内呈现。</li>
<li><code v-pre>quadrant-2 &lt;text&gt;</code> 确定哪些文本将在左上象限内呈现。</li>
<li><code v-pre>quadrant-3 &lt;text&gt;</code> 确定哪些文本将在左下象限内呈现。</li>
<li><code v-pre>quadrant-4 &lt;text&gt;</code> 确定将在右下象限内呈现的文本。</li>
</ol>
<h3 id="_8-2-6-点" tabindex="-1"><a class="header-anchor" href="#_8-2-6-点"><span>8.2.6 点</span></a></h3>
<p>点用于在象限图内绘制圆。语法为 <code v-pre>&lt;text&gt;: [x, y]</code> 这里的x和y值在0 - 1的范围内。</p>
<ol>
<li><code v-pre>Point 1: [0.75, 0.80]</code> 这里点1将绘制在右上象限。</li>
<li><code v-pre>Point 2: [0.35, 0.24]</code> 这里点2将绘制在左下角象限。</li>
</ol>
<h2 id="_8-3-图配置" tabindex="-1"><a class="header-anchor" href="#_8-3-图配置"><span>8.3 图配置</span></a></h2>
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
<td>chartWidth</td>
<td>图表宽度</td>
<td>500</td>
</tr>
<tr>
<td>chartHeight</td>
<td>图表高度</td>
<td>500</td>
</tr>
<tr>
<td>titlePadding</td>
<td>标题的顶部和底部填充</td>
<td>10</td>
</tr>
<tr>
<td>titleFontSize</td>
<td>标题字体大小</td>
<td>20</td>
</tr>
<tr>
<td>quadrantPadding</td>
<td>填充在所有象限之外</td>
<td>5</td>
</tr>
<tr>
<td>quadrantTextTopPadding</td>
<td>象限文本顶部填充时，在顶部绘制文本（没有数据点）</td>
<td>5</td>
</tr>
<tr>
<td>quadrantLabelFontSize</td>
<td>象限文本字体大小</td>
<td>16</td>
</tr>
<tr>
<td>quadrantInternalBorderStrokeWidth</td>
<td>象限内的边框描边宽度</td>
<td>1</td>
</tr>
<tr>
<td>quadrantExternalBorderStrokeWidth</td>
<td>象限外部边框笔画宽度</td>
<td>2</td>
</tr>
<tr>
<td>xAxisLabelPadding</td>
<td>x轴文本的上下填充</td>
<td>5</td>
</tr>
<tr>
<td>xAxisLabelFontSize</td>
<td>x轴文本字体大小</td>
<td>16</td>
</tr>
<tr>
<td>xAxisPosition</td>
<td>x轴的位置（顶部，底部），如果有点，x轴将始终呈现在底部</td>
<td>“顶级”</td>
</tr>
<tr>
<td>yAxisLabelPadding</td>
<td>y轴文本的左右填充</td>
<td>5</td>
</tr>
<tr>
<td>yAxisLabelFontSize</td>
<td>y轴文本字体大小</td>
<td>16</td>
</tr>
<tr>
<td>yAxisPosition</td>
<td>y轴位置（左、右）</td>
<td>“左”</td>
</tr>
<tr>
<td>pointTextPadding</td>
<td>点与下面文本之间的填充</td>
<td>5</td>
</tr>
<tr>
<td>pointLabelFontSize</td>
<td>点文本字体大小</td>
<td>12</td>
</tr>
<tr>
<td>pointRadius</td>
<td>要绘制的点的半径</td>
<td>5</td>
</tr>
</tbody>
</table>
<h2 id="_8-4-图表主题变量" tabindex="-1"><a class="header-anchor" href="#_8-4-图表主题变量"><span>8.4 图表主题变量</span></a></h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>quadrant1Fill</td>
<td>右上象限的填充颜色</td>
</tr>
<tr>
<td>quadrant2Fill</td>
<td>填充左上象限的颜色</td>
</tr>
<tr>
<td>quadrant3Fill</td>
<td>填充左下象限的颜色</td>
</tr>
<tr>
<td>quadrant4Fill</td>
<td>填充右下象限的颜色</td>
</tr>
<tr>
<td>quadrant1TextFill</td>
<td>右上象限的文本颜色</td>
</tr>
<tr>
<td>quadrant2TextFill</td>
<td>左上象限的文本颜色</td>
</tr>
<tr>
<td>quadrant3TextFill</td>
<td>左下象限的文本颜色</td>
</tr>
<tr>
<td>quadrant4TextFill</td>
<td>右下象限的文本颜色</td>
</tr>
<tr>
<td>quadrantPointFill</td>
<td>点填充色</td>
</tr>
<tr>
<td>quadrantPointTextFill</td>
<td>文本颜色</td>
</tr>
<tr>
<td>quadrantXAxisTextFill</td>
<td>x轴文字颜色</td>
</tr>
<tr>
<td>quadrantYAxisTextFill</td>
<td>y轴文字颜色</td>
</tr>
<tr>
<td>quadrantInternalBorderStrokeFill</td>
<td>象限内边框颜色</td>
</tr>
<tr>
<td>quadrantExternalBorderStrokeFill</td>
<td>象限外边框颜色</td>
</tr>
<tr>
<td>quadrantTitleFill</td>
<td>标题颜色</td>
</tr>
</tbody>
</table>
<h2 id="_8-5-关于配置和主题的示例" tabindex="-1"><a class="header-anchor" href="#_8-5-关于配置和主题的示例"><span>8.5 关于配置和主题的示例</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">%%{init: {"quadrantChart": {"chartWidth": 400, "chartHeight": 400}, "themeVariables": {"quadrant1TextFill": "#ff0000"} }}%%</span>
<span class="line">quadrantChart</span>
<span class="line">  x-axis Urgent --> Not Urgent</span>
<span class="line">  y-axis Not Important --> "Important ❤"</span>
<span class="line">  quadrant-1 Plan</span>
<span class="line">  quadrant-2 Do</span>
<span class="line">  quadrant-3 Delegate</span>
<span class="line">  quadrant-4 Delete</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-h7brubf">
            %%{init: {"quadrantChart": {"chartWidth": 400, "chartHeight": 400}, "themeVariables": {"quadrant1TextFill": "#ff0000"} }}%%
quadrantChart
  x-axis Urgent --> Not Urgent
  y-axis Not Important --> "Important ❤"
  quadrant-1 Plan
  quadrant-2 Do
  quadrant-3 Delegate
  quadrant-4 Delete

          </pre>
        <h2 id="_8-6-样式" tabindex="-1"><a class="header-anchor" href="#_8-6-样式"><span>8.6 样式</span></a></h2>
<p>点既可以直接样式化，也可以与定义的共享类一起样式化</p>
<h3 id="_8-6-1-直接的样式" tabindex="-1"><a class="header-anchor" href="#_8-6-1-直接的样式"><span>8.6.1 直接的样式</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">Point A: [0.9, 0.0] radius: 12</span>
<span class="line">Point B: [0.8, 0.1] color: #ff3300, radius: 10</span>
<span class="line">Point C: [0.7, 0.2] radius: 25, color: #00ff33, stroke-color: #10f0f0</span>
<span class="line">Point D: [0.6, 0.3] radius: 15, stroke-color: #00ff0f, stroke-width: 5px ,color: #ff33f0</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-2-类样式" tabindex="-1"><a class="header-anchor" href="#_8-6-2-类样式"><span>8.6.2 类样式</span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">Point A:::class1: [0.9, 0.0]</span>
<span class="line">Point B:::class2: [0.8, 0.1]</span>
<span class="line">Point C:::class3: [0.7, 0.2]</span>
<span class="line">Point D:::class3: [0.7, 0.2]</span>
<span class="line">classDef class1 color: #109060</span>
<span class="line">classDef class2 color: #908342, radius : 10, stroke-color: #310085, stroke-width: 10px</span>
<span class="line">classDef class3 color: #f00fff, radius : 10</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-6-3-可用的样式" tabindex="-1"><a class="header-anchor" href="#_8-6-3-可用的样式"><span>8.6.3 可用的样式:</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>颜色</td>
<td>填充点的颜色</td>
</tr>
<tr>
<td>半径</td>
<td>点的半径</td>
</tr>
<tr>
<td>笔划宽度</td>
<td>点的边框宽度</td>
</tr>
<tr>
<td>边框颜色</td>
<td>点的边框颜色（当未指定描边宽度时无效）</td>
</tr>
</tbody>
</table>
<blockquote>
<p>偏好顺序：</p>
<ol>
<li>直接的风格</li>
<li>类风格</li>
<li>主题风格</li>
</ol>
</blockquote>
<h3 id="_8-6-4-关于样式的例子" tabindex="-1"><a class="header-anchor" href="#_8-6-4-关于样式的例子"><span>8.6.4 关于样式的例子</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">quadrantChart</span>
<span class="line">  title Reach and engagement of campaigns</span>
<span class="line">  x-axis Low Reach --> High Reach</span>
<span class="line">  y-axis Low Engagement --> High Engagement</span>
<span class="line">  quadrant-1 We should expand</span>
<span class="line">  quadrant-2 Need to promote</span>
<span class="line">  quadrant-3 Re-evaluate</span>
<span class="line">  quadrant-4 May be improved</span>
<span class="line">  Campaign A: [0.9, 0.0] radius: 12</span>
<span class="line">  Campaign B:::class1: [0.8, 0.1] color: #ff3300, radius: 10</span>
<span class="line">  Campaign C: [0.7, 0.2] radius: 25, color: #00ff33, stroke-color: #10f0f0</span>
<span class="line">  Campaign D: [0.6, 0.3] radius: 15, stroke-color: #00ff0f, stroke-width: 5px ,color: #ff33f0</span>
<span class="line">  Campaign E:::class2: [0.5, 0.4]</span>
<span class="line">  Campaign F:::class3: [0.4, 0.5] color: #0000ff</span>
<span class="line">  classDef class1 color: #109060</span>
<span class="line">  classDef class2 color: #908342, radius : 10, stroke-color: #310085, stroke-width: 10px</span>
<span class="line">  classDef class3 color: #f00fff, radius : 10</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-n7hrtvm">
            quadrantChart
  title Reach and engagement of campaigns
  x-axis Low Reach --> High Reach
  y-axis Low Engagement --> High Engagement
  quadrant-1 We should expand
  quadrant-2 Need to promote
  quadrant-3 Re-evaluate
  quadrant-4 May be improved
  Campaign A: [0.9, 0.0] radius: 12
  Campaign B:::class1: [0.8, 0.1] color: #ff3300, radius: 10
  Campaign C: [0.7, 0.2] radius: 25, color: #00ff33, stroke-color: #10f0f0
  Campaign D: [0.6, 0.3] radius: 15, stroke-color: #00ff0f, stroke-width: 5px ,color: #ff33f0
  Campaign E:::class2: [0.5, 0.4]
  Campaign F:::class3: [0.4, 0.5] color: #0000ff
  classDef class1 color: #109060
  classDef class2 color: #908342, radius : 10, stroke-color: #310085, stroke-width: 10px
  classDef class3 color: #f00fff, radius : 10

          </pre>
        </div></template>


