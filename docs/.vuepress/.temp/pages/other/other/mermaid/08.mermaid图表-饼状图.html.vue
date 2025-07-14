<template><div><h1 id="七、饼状图" tabindex="-1"><a class="header-anchor" href="#七、饼状图"><span>七、饼状图</span></a></h1>
<blockquote>
<p>饼图（或圆形图）是一种圆形的统计图形，它被分成几片来说明数字比例。在饼状图中，每个切片的弧长（以及它的圆心角和面积）与它所代表的数量成正比。虽然它的名字是因为它看起来像一个被切成薄片的馅饼，但它的呈现方式也有不同。</p>
</blockquote>
<h2 id="_7-1-饼图基础使用" tabindex="-1"><a class="header-anchor" href="#_7-1-饼图基础使用"><span>7.1 饼图基础使用</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">pie title Pets adopted by volunteers</span>
<span class="line">    "Dogs" : 386</span>
<span class="line">    "Cats" : 85</span>
<span class="line">    "Rats" : 15</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-xm36vm8">
            pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15

          </pre>
        <h2 id="_7-2-语法" tabindex="-1"><a class="header-anchor" href="#_7-2-语法"><span>7.2 语法</span></a></h2>
<ul>
<li>以 <code v-pre>pie</code> 关键字开始图</li>
<li>然后是 <code v-pre>title</code> 关键字及其字符串形式的值，以给出饼图的标题。这是可选的</li>
<li>然后是dataSet。饼切片将按照与标签相同的顺时针顺序排列。</li>
</ul>
<h2 id="_7-3-例子" tabindex="-1"><a class="header-anchor" href="#_7-3-例子"><span>7.3 例子</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">%%{init: {"pie": {"textPosition": 0.5}, "themeVariables": {"pieOuterStrokeWidth": "5px"}} }%%</span>
<span class="line">pie showData</span>
<span class="line">    title Key elements in Product X</span>
<span class="line">    "Calcium" : 42.96</span>
<span class="line">    "Potassium" : 50.05</span>
<span class="line">    "Magnesium" : 10.01</span>
<span class="line">    "Iron" :  5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-tvylqbi">
            %%{init: {"pie": {"textPosition": 0.5}, "themeVariables": {"pieOuterStrokeWidth": "5px"}} }%%
pie showData
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5

          </pre>
        <h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2>
<p>可能的饼图配置参数：</p>
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
<td><code v-pre>textPosition</code></td>
<td>饼图切片标签的轴向位置，从中心的0.0到圆外缘的1.0。</td>
<td><code v-pre>0.75</code></td>
</tr>
</tbody>
</table>
</div></template>


