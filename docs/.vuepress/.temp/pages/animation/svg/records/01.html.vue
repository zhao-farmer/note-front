<template><div><h1 id="贝塞尔曲线详解" tabindex="-1"><a class="header-anchor" href="#贝塞尔曲线详解"><span>贝塞尔曲线详解</span></a></h1>
<p><strong>d属性</strong></p>
<p>主要定义了路径的路径数据，由描述路径的一系列命令数据组成</p>
<blockquote>
<p>命令数据主要由命令及命令参数组成，多个命令参数之间可用空格或逗号(英文逗号)隔开</p>
</blockquote>
<h2 id="q-二次贝塞尔曲线" tabindex="-1"><a class="header-anchor" href="#q-二次贝塞尔曲线"><span>Q-二次贝塞尔曲线</span></a></h2>
<p>该命令用于画<strong>二次贝塞尔曲线</strong></p>
<p><code v-pre>Q | q</code>后可跟<code v-pre>4</code>个参数：</p>
<ol>
<li><code v-pre>x1</code>：控制点横坐标位置</li>
<li><code v-pre>y1</code>：控制点纵坐标位置</li>
<li><code v-pre>x</code>：终点横坐标位置</li>
<li><code v-pre>y</code>：终点纵坐标位置</li>
</ol>
<blockquote>
<p>四个参数两两一组，表示两组坐标，分别表示<strong>控制点</strong>坐标和<strong>终点</strong>坐标</p>
<p>一条<strong>二次贝塞尔曲线</strong>其实就是由<strong>起点</strong>、<strong>控制点</strong>和<strong>终点</strong>三点经过某种规律运算决定的，其中，起点由上一次绘制的结束点决定</p>
<p>其数学公式为：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mi>P</mi><mi>α</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy="false">)</mo><mi>P</mi><mi>β</mi><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mi>P</mi><mi>γ</mi></mrow><annotation encoding="application/x-tex">B(t) = (1−t)^{2}P\alpha + 2t(1−t)P\beta + t^{2}P\gamma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mord mathnormal">t</span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mord mathnormal" style="margin-right:0.05278em;">Pβ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0085em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span></span></span></span> , <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mo>∈</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">t \in [0,1]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6542em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span></span></span></span></p>
<p>本质上，是一系列点的集合</p>
</blockquote>
<p>如下是一条二次贝塞尔曲线的绘制过程动画：</p>
<p><img src="/animation/svg/records/image/001.gif" alt="curve-2"></p>
<p>接下来提取其中一帧进行标注分析，如下</p>
<p><img src="/animation/svg/records/image/002.png" alt="二次贝塞尔p"></p>
<p>一条贝塞尔曲线由如图所示的一系列目标点B<sub>t</sub>组成</p>
<p>目标点 B<sub>t</sub> 又由 Q<sub>a</sub> 和 Q<sub>b</sub>  两点决定，其为两点连线的 T<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>β</mi></mrow><annotation encoding="application/x-tex">\beta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span></span></span></span> 处的点，其中Q<sub>a</sub> 由起点与控制点决定， Q<sub>b</sub>由控制点与终点决定，均为两点连线的 T<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>γ</mi></mrow><annotation encoding="application/x-tex">\gamma</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span></span></span></span> 处的点</p>
<p>故可总结得，贝塞尔曲线的绘制过程为：</p>
<ul>
<li>
<p>在 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mo>∈</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">t \in [0,1]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6542em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span></span></span></span> 中，每次取相邻两点连线的T<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>α</mi></mrow><annotation encoding="application/x-tex">\alpha</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span></span></span></span> 处作为新的控制点</p>
</li>
<li>
<p>得出的新控制点继续取相邻两点连线的 T<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>β</mi></mrow><annotation encoding="application/x-tex">\beta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span></span></span></span> 处作为接下来的新控制点</p>
</li>
<li>
<p>以此递归，最终得出唯一的一个新控制点，即为组成贝塞尔曲线的点</p>
</li>
</ul>
<blockquote>
<p>起点与终点不之间不需要连线计算</p>
<p>该流程也适用于高阶贝塞尔曲线</p>
<p>用二次贝塞尔曲线论证，<strong>三</strong>个点经过一次运算即可得出<strong>两</strong>个新控制点，用新控制点再进行一次运算即可得出唯<strong>一</strong>的控制点，算出每个 <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mo>∈</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">t \in [0,1]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6542em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span></span></span></span> 下唯一的控制点，其集合成的线即为二阶贝塞尔曲线</p>
</blockquote>
<p>当然，以上只是为了帮助认识贝塞尔曲线的生成过程，知其然，也知其所以然，如不想了解也是可以正常使用贝塞尔曲线的</p>
<p>言归正传，以下给出几条命令的示例：</p>
<ul>
<li><code v-pre>&lt;path M100 450 Q300 150 500 450 /&gt;</code></li>
<li><code v-pre>&lt;path M100 450 Q240 200 500 450 /&gt;</code></li>
</ul>
<p>如想知道命令长啥样，可自行在<code v-pre>svg</code>文件内运行查看</p>
<h2 id="t-平滑二次贝塞尔曲线" tabindex="-1"><a class="header-anchor" href="#t-平滑二次贝塞尔曲线"><span>T-平滑二次贝塞尔曲线</span></a></h2>
<p>该命令用于画<strong>平滑二次贝塞尔曲线</strong></p>
<p><code v-pre>T | t</code>后可跟<code v-pre>2</code>个参数：</p>
<ol>
<li><code v-pre>x</code>：终点横坐标位置</li>
<li><code v-pre>y</code>：终点纵坐标位置</li>
</ol>
<blockquote>
<p>其实，该命令本质上也是用于画二次贝塞尔曲线，可以算是<code v-pre>Q</code>命令的简化版</p>
<p>只需要一个终点坐标即可生成曲线，但其实际上依旧由<strong>起点</strong>、<strong>控制点</strong>和<strong>终点</strong>三点生成，其中，<strong>控制点</strong>由上一次绘制的控制点关于其终点中心对称生成</p>
<p>故，<code v-pre>T</code>命令只能接在<code v-pre>Q</code>或<code v-pre>T</code>命令后使用，如单独出现或接于其它命令后出现，控制点会与其起点一致，绘制的效果会是一条直线</p>
</blockquote>
<p><img src="/animation/svg/records/image/003.png" alt="T"></p>
<p>上图是一条曲线路径的示例图，由一次<code v-pre>Q</code>和两次<code v-pre>T</code>命令组成，其中<code v-pre>T</code>命令只需给出<strong>终点</strong>坐标即可，<strong>控制点2</strong>由<strong>控制点1</strong>绕<strong>终点1</strong>中心对称生成，<strong>控制点3</strong>由<strong>控制点2</strong>绕<strong>终点2</strong>中心对称生成</p>
<p>例：<code v-pre>&lt;path d=&quot;M50 300 Q 160 180 240 270 T400 370 T500 240&quot; fill=&quot;none&quot; stroke=&quot;red&quot; /&gt;</code></p>
<h2 id="c-三次贝塞尔曲线" tabindex="-1"><a class="header-anchor" href="#c-三次贝塞尔曲线"><span>C-三次贝塞尔曲线</span></a></h2>
<p>该命令用于画<strong>三次贝塞尔曲线</strong></p>
<p><code v-pre>C | c</code>后可跟<code v-pre>6</code>个参数：</p>
<ol>
<li><code v-pre>x1</code>：控制点1横坐标位置</li>
<li><code v-pre>y1</code>：控制点1纵坐标位置</li>
<li><code v-pre>x2</code>：控制点2横坐标位置</li>
<li><code v-pre>y2</code>：控制点2纵坐标位置</li>
<li><code v-pre>x</code>：终点横坐标位置</li>
<li><code v-pre>y</code>：终点纵坐标位置</li>
</ol>
<blockquote>
<p>三次贝塞尔曲线比二次贝塞尔曲线多一个控制点控制，故有<code v-pre>6</code>个参数</p>
<p>即其由<strong>起点</strong>、<strong>控制点1</strong>、<strong>控制点2</strong>和<strong>终点</strong>决定生成，生成方式与上方二次贝塞尔曲线讲的方式类似</p>
<p>数学公式为：<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>B</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mn>3</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mi>P</mi><mi>α</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mi>P</mi><mi>β</mi><mo>+</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo stretchy="false">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy="false">)</mo><mi>P</mi><mi>γ</mi><mo>+</mo><msup><mi>t</mi><mn>3</mn></msup><mi>P</mi><mi>δ</mi></mrow><annotation encoding="application/x-tex">B(t) = (1−t3)^{2}P\alpha + 3t(1−t)^{2}P\beta + 3t^{2}(1−t)P\gamma + t^{3}P\delta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05017em;">B</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mord">3</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal" style="margin-right:0.0037em;">α</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">3</span><span class="mord mathnormal">t</span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.05278em;">Pβ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0641em;vertical-align:-0.25em;"></span><span class="mord">3</span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal" style="margin-right:0.05556em;">γ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">3</span></span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mord mathnormal" style="margin-right:0.03785em;">δ</span></span></span></span>, <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mo>∈</mo><mo stretchy="false">[</mo><mn>0</mn><mo separator="true">,</mo><mn>1</mn><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">t\in [0,1]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6542em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">∈</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">[</span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">1</span><span class="mclose">]</span></span></span></span></p>
</blockquote>
<p>以下是一条普通三次贝塞尔曲线的生成过程动画：</p>
<p><img src="/animation/svg/records/image/004.gif" alt="curve-3"></p>
<p>具体的描述不再赘述</p>
<h2 id="s-平滑三次贝塞尔曲线" tabindex="-1"><a class="header-anchor" href="#s-平滑三次贝塞尔曲线"><span>S-平滑三次贝塞尔曲线</span></a></h2>
<p>该命令用于画<strong>平滑三次贝塞尔曲线</strong></p>
<p><code v-pre>S | s</code>后可跟<code v-pre>4</code>个参数：</p>
<ol>
<li><code v-pre>x1</code>：控制点2横坐标位置</li>
<li><code v-pre>y1</code>：控制点2纵坐标位置</li>
<li><code v-pre>x</code>：终点横坐标位置</li>
<li><code v-pre>y</code>：终点纵坐标位置</li>
</ol>
<blockquote>
<p>其为<code v-pre>C</code>命令的简化版，只需指定一个控制点2和终点坐标即可</p>
<p>但其本质依旧是画三次贝塞尔曲线，实际上还是由<strong>起点</strong>、<strong>控制点1</strong>、<strong>控制点2</strong>和<strong>终点</strong>决定生成，其中，<strong>控制点1</strong>由上一次绘制的控制点关于其终点中心对称生成(即根据前一条命令的控制点2关于前一条命令的终点中心对称决定)</p>
</blockquote>
<p><img src="/animation/svg/records/image/005.png" alt="C"></p>
<p>上图是一条曲线路径的示例图，由一次<code v-pre>C</code>和两次<code v-pre>S</code>命令组成，其中<code v-pre>S</code>命令只需给出<strong>控制点2</strong>和<strong>终点</strong>坐标即可，<strong>控制点b1</strong>由<strong>控制点a2</strong>绕<strong>终点a</strong>中心对称生成，<strong>控制点c1</strong>由<strong>控制点b2</strong>绕<strong>终点b</strong>中心对称生成</p>
<p>例：<code v-pre>&lt;path d=&quot;M50 300 C 160 180 240 210 300 300 S400 370 500 240 S660 160 700 300&quot; fill=&quot;none&quot; stroke=&quot;red&quot; /&gt;</code></p>
<h2 id="z-闭合路径" tabindex="-1"><a class="header-anchor" href="#z-闭合路径"><span>Z-闭合路径</span></a></h2>
<p>该命令用于闭合路径，大小写字母均可，后面不需跟参数</p>
<p>命令会<strong>从当前位置到起点画一条直线</strong>闭合整个<code v-pre>path</code></p>
<p>一般放在<code v-pre>d</code>属性命令数据的最后</p>
<h2 id="名词解读" tabindex="-1"><a class="header-anchor" href="#名词解读"><span>名词解读</span></a></h2>
<p><strong>绝对：</strong> 指数值针对<strong>坐标系</strong>绝对</p>
<p><strong>相对：</strong> 指数值针对<strong>上一点</strong>相对</p>
<blockquote>
<p>对于<code v-pre>d</code>属性的命令，通常有大写字母和小写字母两种，大写表绝对，小写表相对</p>
</blockquote>
<p><strong>贝塞尔曲线：</strong> 是一种数学曲线，它拥有 <strong>灵活、平滑、可编辑</strong> 的特点，十分适合描述曲面形状、处理图形变形、模拟运动轨迹等场景</p>
</div></template>


