import{aq as c,ar as s,au as d,as as t,aA as n,at as l}from"./app-Ci8NOINE.js";const i="/note-front/other/other/mermaid/003.png",v={},b={class:"mermaid",id:"mermaid-yovtk42"};function r(e,a){return l(),s("div",null,[a[0]||(a[0]=d(`<h1 id="一、流程图" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#一、流程图" data-v-10bd6c77><span data-v-10bd6c77>一、流程图</span></a></h1><p data-v-10bd6c77>流程图由节点（几何形状）和边（箭头或线）组成。Mermaid代码定义了如何创建节点和边，并适应不同的箭头类型、多向箭头以及与子图之间的任何链接。</p><blockquote data-v-10bd6c77><p data-v-10bd6c77>注意1：如果您在流程图节点中使用单词<code data-v-10bd6c77>end</code>，请将整个单词或任何字母（例如，<code data-v-10bd6c77>end</code>或<code data-v-10bd6c77>END</code>）大写，或应用此解决方案。以小写字母输入<code data-v-10bd6c77>end</code>将中断流程图。</p></blockquote><blockquote data-v-10bd6c77><p data-v-10bd6c77>注意2：如果您使用字母<code data-v-10bd6c77>o</code>或<code data-v-10bd6c77>x</code>作为连接流程图节点中的第一个字母，请在字母之前添加空格或将字母大写 （例如, <code data-v-10bd6c77>dev--- ops</code>, <code data-v-10bd6c77>dev---Ops</code>）</p><ul data-v-10bd6c77><li data-v-10bd6c77>输入&quot;A---oB&quot; 将创建一个圆形边缘。</li><li data-v-10bd6c77>输入&quot;A---xB&quot; 将创建一个十字边。</li></ul></blockquote><h2 id="_1-1-单节点" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-1-单节点" data-v-10bd6c77><span data-v-10bd6c77>1.1 单节点</span></a></h2><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-qz9ict2" data-v-10bd6c77>            flowchart LR
    id

          </pre></code><ul data-v-10bd6c77><li data-v-10bd6c77><p data-v-10bd6c77>信息</p><p data-v-10bd6c77>id是框中显示的内容。</p></li><li data-v-10bd6c77><p data-v-10bd6c77>提示</p><p data-v-10bd6c77>除了 flowchart 之外，还可以使用 graph 。</p></li></ul><h2 id="_1-2-文本节点" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-2-文本节点" data-v-10bd6c77><span data-v-10bd6c77>1.2 文本节点</span></a></h2><p data-v-10bd6c77>也可以在框中设置与id不同的文本。如果多次执行此操作，则将使用为节点找到的最后一个文本。此外，如果稍后为节点定义边缘，则可以省略文本定义。在呈现框时将使用前面定义的那个。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>---</span>
<span class="line" data-v-10bd6c77>title: Node with text</span>
<span class="line" data-v-10bd6c77>---</span>
<span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1[This is the text in the box]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-m6qui28" data-v-10bd6c77>            ---
title: Node with text
---
flowchart LR
    id1[This is the text in the box]

          </pre></code><h3 id="_1-2-1-unicode文本" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-2-1-unicode文本" data-v-10bd6c77><span data-v-10bd6c77>1.2.1 Unicode文本</span></a></h3><p data-v-10bd6c77>使用 <code data-v-10bd6c77>&quot;</code> 来括起unicode文本。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id[&quot;This ❤ Unicode&quot;]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-73lifdd" data-v-10bd6c77>            flowchart LR
    id[&quot;This ❤ Unicode&quot;]

          </pre></code><h3 id="_1-2-2-格式化文本" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-2-2-格式化文本" data-v-10bd6c77><span data-v-10bd6c77>1.2.2 格式化文本</span></a></h3><p data-v-10bd6c77>使用双引号和反引号<code data-v-10bd6c77>text</code>来括住降价文本。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>%%{init: {&quot;flowchart&quot;: {&quot;htmlLabels&quot;: false}} }%%</span>
<span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    markdown[&quot;\`This **is** _Markdown_\`&quot;]</span>
<span class="line" data-v-10bd6c77>    newLines[&quot;\`Line1</span>
<span class="line" data-v-10bd6c77>    Line 2</span>
<span class="line" data-v-10bd6c77>    Line 3\`&quot;]</span>
<span class="line" data-v-10bd6c77>    markdown --&gt; newLines</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-xpj3i2l" data-v-10bd6c77>            %%{init: {&quot;flowchart&quot;: {&quot;htmlLabels&quot;: false}} }%%
flowchart LR
    markdown[&quot;\`This **is** _Markdown_\`&quot;]
    newLines[&quot;\`Line1
    Line 2
    Line 3\`&quot;]
    markdown --&gt; newLines

          </pre></code><h2 id="_1-3-方向" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-3-方向" data-v-10bd6c77><span data-v-10bd6c77>1.3 方向</span></a></h2><ol data-v-10bd6c77><li data-v-10bd6c77>流程图是从上到下的（ <code data-v-10bd6c77>TD</code> 或 <code data-v-10bd6c77>TB</code> ）。</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    Start --&gt; Stop</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-3029ijt" data-v-10bd6c77>            flowchart TD
    Start --&gt; Stop

          </pre></code><ol start="2" data-v-10bd6c77><li data-v-10bd6c77>流程图是从左到右（ LR ）。</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    Start --&gt; Stop</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-5lpy8f6" data-v-10bd6c77>            flowchart LR
    Start --&gt; Stop

          </pre></code><ol start="3" data-v-10bd6c77><li data-v-10bd6c77>流程图方向有</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>TB - 从上到下</li><li data-v-10bd6c77>TD - 自上而下/与自上而下相同</li><li data-v-10bd6c77>BT - 从下到上</li><li data-v-10bd6c77>RL - 从右到左</li><li data-v-10bd6c77>LR - 从左到右</li></ul><h2 id="_1-4-节点的形状" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-4-节点的形状" data-v-10bd6c77><span data-v-10bd6c77>1.4 节点的形状</span></a></h2><ol data-v-10bd6c77><li data-v-10bd6c77>圆角矩形节点</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1(文本在容器中)</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-bvw8y3h" data-v-10bd6c77>            flowchart LR
    id1(文本在容器中)

          </pre></code><ol start="2" data-v-10bd6c77><li data-v-10bd6c77>圆边矩形节点</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1([文本在容器中])</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-8kdxu9g" data-v-10bd6c77>            flowchart LR
    id1([文本在容器中])

          </pre></code><ol start="3" data-v-10bd6c77><li data-v-10bd6c77>子程序节点</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1[[文本在容器中]]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-83rs5ks" data-v-10bd6c77>            flowchart LR
    id1[[This is the text in the box]]

          </pre></code><ol start="4" data-v-10bd6c77><li data-v-10bd6c77>圆柱形节点</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1[(Database)]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-clfo2kx" data-v-10bd6c77>            flowchart LR
    id1[(Database)]

          </pre></code><ol start="5" data-v-10bd6c77><li data-v-10bd6c77>圆形节点</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1((文本在圆中))</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-wq84r3s" data-v-10bd6c77>            flowchart LR
    id1((文本在圆中))

          </pre></code><ol start="6" data-v-10bd6c77><li data-v-10bd6c77>剪角节点</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1&gt;文本在容器中]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-ovjtgb3" data-v-10bd6c77>            flowchart LR
    id1&gt;文本在容器中]

          </pre></code><p data-v-10bd6c77>目前只有上面的形状是可能的，而不是它的镜像。</p><ol start="7" data-v-10bd6c77><li data-v-10bd6c77>菱形节点</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1{文本在容器中}</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-e0pke98" data-v-10bd6c77>            flowchart LR
    id1{文本在容器中}

          </pre></code><ol start="8" data-v-10bd6c77><li data-v-10bd6c77>六边形节点</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1{{文本在容器中}}</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul>`,82)),t("code",null,[t("pre",b,`            flowchart LR
    id1`+n(e.文本在容器中)+`

          `,1)]),a[1]||(a[1]=d(`<ol start="9" data-v-10bd6c77><li data-v-10bd6c77>平行四边形节点</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1[/文本在容器中/]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-muftmjz" data-v-10bd6c77>            flowchart LR
    id1[/文本在容器中/]

          </pre></code><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1[\\文本在容器中\\]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-ivx480o" data-v-10bd6c77>            flowchart LR
    id1[\\文本在容器中\\]

          </pre></code><ol start="10" data-v-10bd6c77><li data-v-10bd6c77>梯形节点</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A[/梯形\\]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-ai2nizl" data-v-10bd6c77>            flowchart TD
    A[/梯形\\]

          </pre></code><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A[\\梯形/]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-6mz43f8" data-v-10bd6c77>            flowchart TD
    A[\\梯形/]

          </pre></code><ol start="11" data-v-10bd6c77><li data-v-10bd6c77>双圈节点</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A(((文本在圆中)))</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-9zo5rny" data-v-10bd6c77>            flowchart TD
    A(((文本在圆中)))

          </pre></code><h2 id="_1-5-节点扩展形状" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-5-节点扩展形状" data-v-10bd6c77><span data-v-10bd6c77>1.5 节点扩展形状</span></a></h2><h3 id="_1-5-1-语法与名称列表" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-5-1-语法与名称列表" data-v-10bd6c77><span data-v-10bd6c77>1.5.1 语法与名称列表</span></a></h3><p data-v-10bd6c77>美人鱼引入了30个新的形状，以提高流程图创建的灵活性和精度。这些新形状提供了更多的选项来可视化地表示流程、决策、事件、数据存储和流程图中的其他元素，从而提高了清晰度和语义意义。</p><ol data-v-10bd6c77><li data-v-10bd6c77>形状定义的新语法</li></ol><p data-v-10bd6c77>Mermaid现在支持定义形状类型的通用语法，以适应越来越多的形状。这种语法允许你用一种清晰灵活的格式给节点分配特定的形状：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>A@{ shape: rect }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div></div></div><p data-v-10bd6c77>该语法将节点a创建为矩形。它以与 A[&quot;A&quot;] 或 A 相同的方式呈现。</p><ol start="2" data-v-10bd6c77><li data-v-10bd6c77>完整的新形状列表</li></ol><p data-v-10bd6c77>引入的形状及其相应的语义、短名和别名的综合列表：</p><table data-v-10bd6c77><thead data-v-10bd6c77><tr data-v-10bd6c77><th data-v-10bd6c77>语义的名字</th><th data-v-10bd6c77>形状的名字</th><th data-v-10bd6c77>短名称</th><th data-v-10bd6c77>描述</th><th data-v-10bd6c77>别名支持</th></tr></thead><tbody data-v-10bd6c77><tr data-v-10bd6c77><td data-v-10bd6c77>卡片</td><td data-v-10bd6c77>切口矩形</td><td data-v-10bd6c77>notch-rect</td><td data-v-10bd6c77>代表一张牌</td><td data-v-10bd6c77>card 、 notched-rectangle</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>核对</td><td data-v-10bd6c77>沙漏</td><td data-v-10bd6c77>hourglass</td><td data-v-10bd6c77>表示一个排序操作</td><td data-v-10bd6c77>collate 、 hourglass</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>网络链接</td><td data-v-10bd6c77>闪电</td><td data-v-10bd6c77>bolt</td><td data-v-10bd6c77>通信链路</td><td data-v-10bd6c77>com-link 、lightning-bolt</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>内容</td><td data-v-10bd6c77>花括号</td><td data-v-10bd6c77>brace</td><td data-v-10bd6c77>添加注释</td><td data-v-10bd6c77>brace-l 、 comment</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>右边评论</td><td data-v-10bd6c77>花括号</td><td data-v-10bd6c77>brace-r</td><td data-v-10bd6c77>添加注释</td><td data-v-10bd6c77></td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>两边用大括号注释</td><td data-v-10bd6c77>花括号</td><td data-v-10bd6c77>braces</td><td data-v-10bd6c77>添加注释</td><td data-v-10bd6c77></td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>数据输入/输出</td><td data-v-10bd6c77>右倾斜</td><td data-v-10bd6c77>lean-r</td><td data-v-10bd6c77>表示输入或输出</td><td data-v-10bd6c77>in-out 、 lean-right</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>数据输入/输出</td><td data-v-10bd6c77>左倾斜</td><td data-v-10bd6c77>lean-l</td><td data-v-10bd6c77>表示输出或输入</td><td data-v-10bd6c77>lean-left 、 out-in</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>数据库</td><td data-v-10bd6c77>圆柱</td><td data-v-10bd6c77>cyl</td><td data-v-10bd6c77>数据库存储</td><td data-v-10bd6c77>cylinder, database, db</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>决定/判断</td><td data-v-10bd6c77>菱形</td><td data-v-10bd6c77>diam</td><td data-v-10bd6c77>决策的步骤</td><td data-v-10bd6c77>decision, diamond, question</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>延迟</td><td data-v-10bd6c77>半圆的矩形</td><td data-v-10bd6c77>delay</td><td data-v-10bd6c77>表示延迟</td><td data-v-10bd6c77>half-rounded-rectangle</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>直接存储通道</td><td data-v-10bd6c77>水平圆柱</td><td data-v-10bd6c77>h-cyl</td><td data-v-10bd6c77>直接存取存储器</td><td data-v-10bd6c77>das 、 horizontal-cylinder</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>磁盘存储</td><td data-v-10bd6c77>线性圆柱</td><td data-v-10bd6c77>lin-cyl</td><td data-v-10bd6c77>磁盘存储</td><td data-v-10bd6c77>disk 、 lined-cylinder</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>显示</td><td data-v-10bd6c77>弯曲的梯形</td><td data-v-10bd6c77>curv-trap</td><td data-v-10bd6c77>表示一个显示</td><td data-v-10bd6c77>curved-trapezoid 、 display</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>分裂过程</td><td data-v-10bd6c77>分裂矩形</td><td data-v-10bd6c77>div-rect</td><td data-v-10bd6c77>分割过程形状</td><td data-v-10bd6c77>div-proc, divided-process, divided-rectangle</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>文档</td><td data-v-10bd6c77>文档</td><td data-v-10bd6c77>doc</td><td data-v-10bd6c77>表示一个文档</td><td data-v-10bd6c77>doc 、 document</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>事件</td><td data-v-10bd6c77>圆角矩形</td><td data-v-10bd6c77>rounded</td><td data-v-10bd6c77>表示一个事件</td><td data-v-10bd6c77>event</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>得到</td><td data-v-10bd6c77>三角形</td><td data-v-10bd6c77>tri</td><td data-v-10bd6c77>得到流程</td><td data-v-10bd6c77>extract 、 triangle</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>Fork/Join</td><td data-v-10bd6c77>填充矩形</td><td data-v-10bd6c77>fork</td><td data-v-10bd6c77>在流程流中分叉或连接</td><td data-v-10bd6c77>join</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>内部存储</td><td data-v-10bd6c77>Window Pane</td><td data-v-10bd6c77>win-pane</td><td data-v-10bd6c77>内部存储</td><td data-v-10bd6c77>internal-storage 、 window-pane</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>结</td><td data-v-10bd6c77>填充圆</td><td data-v-10bd6c77>f-circ</td><td data-v-10bd6c77>结点</td><td data-v-10bd6c77>filled-circle 、 junction</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>排列文档</td><td data-v-10bd6c77>排列文档</td><td data-v-10bd6c77>lin-doc</td><td data-v-10bd6c77>排列文档</td><td data-v-10bd6c77>lined-document</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>排/阴影过程</td><td data-v-10bd6c77>排矩形</td><td data-v-10bd6c77>lin-rect</td><td data-v-10bd6c77>衬里工艺形状</td><td data-v-10bd6c77>lin-proc, lined-process, lined-rectangle, shaded-process</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>循环限制</td><td data-v-10bd6c77>梯形五角大楼</td><td data-v-10bd6c77>notch-pent</td><td data-v-10bd6c77>环限阶跃</td><td data-v-10bd6c77>loop-limit 、 notched-pentagon</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>手册文件</td><td data-v-10bd6c77>翻转三角</td><td data-v-10bd6c77>flip-tri</td><td data-v-10bd6c77>手动文件操作</td><td data-v-10bd6c77>flipped-triangle 、 manual-file</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>手动输入</td><td data-v-10bd6c77>倾斜的矩形</td><td data-v-10bd6c77>sl-rect</td><td data-v-10bd6c77>手动输入步骤</td><td data-v-10bd6c77>manual-input 、 sloped-rectangle</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>手动操作</td><td data-v-10bd6c77>梯形底座顶部</td><td data-v-10bd6c77>trap-t</td><td data-v-10bd6c77>表示手动任务</td><td data-v-10bd6c77>inv-trapezoid, manual, trapezoid-top</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>多文档</td><td data-v-10bd6c77>堆叠文档</td><td data-v-10bd6c77>docs</td><td data-v-10bd6c77>多个文档</td><td data-v-10bd6c77>documents, st-doc, stacked-document</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>多进程</td><td data-v-10bd6c77>堆叠的矩形</td><td data-v-10bd6c77>st-rect</td><td data-v-10bd6c77>多个进程</td><td data-v-10bd6c77>processes, procs, stacked-rectangle</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>奇怪的</td><td data-v-10bd6c77>奇怪的</td><td data-v-10bd6c77>odd</td><td data-v-10bd6c77>奇怪的形状</td><td data-v-10bd6c77></td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>纸带</td><td data-v-10bd6c77>国旗</td><td data-v-10bd6c77>flag</td><td data-v-10bd6c77>纸带</td><td data-v-10bd6c77>paper-tape</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>准备条件</td><td data-v-10bd6c77>六角</td><td data-v-10bd6c77>hex</td><td data-v-10bd6c77>准备或条件步骤</td><td data-v-10bd6c77>hexagon 、 prepare</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>优先行动</td><td data-v-10bd6c77>梯形底部</td><td data-v-10bd6c77>trap-b</td><td data-v-10bd6c77>优先行动</td><td data-v-10bd6c77>priority, trapezoid, trapezoid-bottom</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>过程</td><td data-v-10bd6c77>矩形</td><td data-v-10bd6c77>rect</td><td data-v-10bd6c77>标准工艺形状</td><td data-v-10bd6c77>proc, process, rectangle</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>开始</td><td data-v-10bd6c77>圆</td><td data-v-10bd6c77>circle</td><td data-v-10bd6c77>起点</td><td data-v-10bd6c77>circ</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>开始</td><td data-v-10bd6c77>小圆</td><td data-v-10bd6c77>sm-circ</td><td data-v-10bd6c77>起点小</td><td data-v-10bd6c77>small-circle 、 start</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>停止</td><td data-v-10bd6c77>双圈</td><td data-v-10bd6c77>dbl-circ</td><td data-v-10bd6c77>表示停止点</td><td data-v-10bd6c77>double-circle</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>停止</td><td data-v-10bd6c77>陷害圆</td><td data-v-10bd6c77>fr-circ</td><td data-v-10bd6c77>停止点</td><td data-v-10bd6c77>framed-circle 、 stop</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>存储的数据</td><td data-v-10bd6c77>长方形领结</td><td data-v-10bd6c77>bow-rect</td><td data-v-10bd6c77>存储的数据</td><td data-v-10bd6c77>bow-tie-rectangle 、 stored-data</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>子流程</td><td data-v-10bd6c77>框架矩形</td><td data-v-10bd6c77>fr-rect</td><td data-v-10bd6c77>子流程</td><td data-v-10bd6c77>framed-rectangle, subproc, subprocess, subroutine</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>总结</td><td data-v-10bd6c77>交叉循环</td><td data-v-10bd6c77>cross-circ</td><td data-v-10bd6c77>总结</td><td data-v-10bd6c77>crossed-circle 、 summary</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>标记的文档</td><td data-v-10bd6c77>标记的文档</td><td data-v-10bd6c77>tag-doc</td><td data-v-10bd6c77>标记的文档</td><td data-v-10bd6c77>tag-doc 、 tagged-document</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>标记的过程</td><td data-v-10bd6c77>标记的矩形</td><td data-v-10bd6c77>tag-rect</td><td data-v-10bd6c77>标记的过程</td><td data-v-10bd6c77>tag-proc, tagged-process, tagged-rectangle</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>终点</td><td data-v-10bd6c77>体育场</td><td data-v-10bd6c77>stadium</td><td data-v-10bd6c77>终点</td><td data-v-10bd6c77>pill 、 terminal</td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>文本块</td><td data-v-10bd6c77>文本块</td><td data-v-10bd6c77>text</td><td data-v-10bd6c77>文本块</td><td data-v-10bd6c77></td></tr></tbody></table><ol start="3" data-v-10bd6c77><li data-v-10bd6c77>新形状的示例流程图</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart RL</span>
<span class="line" data-v-10bd6c77>    A@{ shape: manual-file, label: &quot;File Handling&quot;}</span>
<span class="line" data-v-10bd6c77>    B@{ shape: manual-input, label: &quot;User Input&quot;}</span>
<span class="line" data-v-10bd6c77>    C@{ shape: docs, label: &quot;Multiple Documents&quot;}</span>
<span class="line" data-v-10bd6c77>    D@{ shape: procs, label: &quot;Process Automation&quot;}</span>
<span class="line" data-v-10bd6c77>    E@{ shape: paper-tape, label: &quot;Paper Records&quot;}</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-lhif932" data-v-10bd6c77>            flowchart RL
    A@{ shape: manual-file, label: &quot;File Handling&quot;}
    B@{ shape: manual-input, label: &quot;User Input&quot;}
    C@{ shape: docs, label: &quot;Multiple Documents&quot;}
    D@{ shape: procs, label: &quot;Process Automation&quot;}
    E@{ shape: paper-tape, label: &quot;Paper Records&quot;}

          </pre></code><h3 id="_1-5-2-具体示例" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-5-2-具体示例" data-v-10bd6c77><span data-v-10bd6c77>1.5.2 具体示例</span></a></h3><ol data-v-10bd6c77><li data-v-10bd6c77>过程</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: rect, label: &quot;This is a process&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-iin8q69" data-v-10bd6c77>            flowchart TD
    A@{ shape: rect, label: &quot;This is a process&quot; }

          </pre></code><ol start="2" data-v-10bd6c77><li data-v-10bd6c77>事件</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: rounded, label: &quot;This is an event&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-pknxwcr" data-v-10bd6c77>            flowchart TD
    A@{ shape: rounded, label: &quot;This is an event&quot; }

          </pre></code><ol start="3" data-v-10bd6c77><li data-v-10bd6c77>终点站（大球场）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: stadium, label: &quot;Terminal point&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-amylhed" data-v-10bd6c77>            flowchart TD
    A@{ shape: stadium, label: &quot;Terminal point&quot; }

          </pre></code><ol start="4" data-v-10bd6c77><li data-v-10bd6c77>数据库(圆柱体)</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: cyl, label: &quot;Database&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-81rejy0" data-v-10bd6c77>            flowchart TD
    A@{ shape: cyl, label: &quot;Database&quot; }

          </pre></code><ol start="5" data-v-10bd6c77><li data-v-10bd6c77>开始(圆)</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: circle, label: &quot;Start&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-c9arltl" data-v-10bd6c77>            flowchart TD
    A@{ shape: circle, label: &quot;Start&quot; }

          </pre></code><ol start="6" data-v-10bd6c77><li data-v-10bd6c77>奇怪形状</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: odd, label: &quot;Odd shape&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-97ht6x9" data-v-10bd6c77>            flowchart TD
    A@{ shape: odd, label: &quot;Odd shape&quot; }

          </pre></code><ol start="7" data-v-10bd6c77><li data-v-10bd6c77>决定（菱形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: diamond, label: &quot;Decision&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-ybest8s" data-v-10bd6c77>            flowchart TD
    A@{ shape: diamond, label: &quot;Decision&quot; }

          </pre></code><ol start="8" data-v-10bd6c77><li data-v-10bd6c77>准备条件（六边形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: hex, label: &quot;Prepare conditional&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-b9gx9l8" data-v-10bd6c77>            flowchart TD
    A@{ shape: hex, label: &quot;Prepare conditional&quot; }

          </pre></code><ol start="9" data-v-10bd6c77><li data-v-10bd6c77>数据输入/输出（右倾）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: lean-r, label: &quot;Input/Output&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-rvazmwx" data-v-10bd6c77>            flowchart TD
    A@{ shape: lean-r, label: &quot;Input/Output&quot; }

          </pre></code><ol start="10" data-v-10bd6c77><li data-v-10bd6c77>数据输入/输出（左倾）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: lean-l, label: &quot;Output/Input&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-9psqoaz" data-v-10bd6c77>            flowchart TD
    A@{ shape: lean-l, label: &quot;Output/Input&quot; }

          </pre></code><ol start="11" data-v-10bd6c77><li data-v-10bd6c77>优先动作（上窄梯形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: trap-b, label: &quot;Priority action&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-c43e7ue" data-v-10bd6c77>            flowchart TD
    A@{ shape: trap-b, label: &quot;Priority action&quot; }

          </pre></code><ol start="12" data-v-10bd6c77><li data-v-10bd6c77>手动操作（上宽梯形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: trap-t, label: &quot;Manual operation&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-pw5uav2" data-v-10bd6c77>            flowchart TD
    A@{ shape: trap-t, label: &quot;Manual operation&quot; }

          </pre></code><ol start="13" data-v-10bd6c77><li data-v-10bd6c77>停止（双循环）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: dbl-circ, label: &quot;Stop&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-1vz5xvw" data-v-10bd6c77>            flowchart TD
    A@{ shape: dbl-circ, label: &quot;Stop&quot; }

          </pre></code><ol start="14" data-v-10bd6c77><li data-v-10bd6c77>文本块</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: notch-rect, label: &quot;Card&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-dze8ztv" data-v-10bd6c77>            flowchart TD
    A@{ shape: notch-rect, label: &quot;Card&quot; }

          </pre></code><ol start="15" data-v-10bd6c77><li data-v-10bd6c77>卡片（凹边矩形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: notch-rect, label: &quot;Card&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-sy7wrq5" data-v-10bd6c77>            flowchart TD
    A@{ shape: notch-rect, label: &quot;Card&quot; }

          </pre></code><ol start="16" data-v-10bd6c77><li data-v-10bd6c77>排/阴影过程</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: lin-rect, label: &quot;Lined process&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-fo8kppu" data-v-10bd6c77>            flowchart TD
    A@{ shape: lin-rect, label: &quot;Lined process&quot; }

          </pre></code><ol start="17" data-v-10bd6c77><li data-v-10bd6c77>开始（小圈子）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: sm-circ, label: &quot;Small start&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-btkw9xf" data-v-10bd6c77>            flowchart TD
    A@{ shape: sm-circ, label: &quot;Small start&quot; }

          </pre></code><ol start="18" data-v-10bd6c77><li data-v-10bd6c77>停止（框架圈）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: framed-circle, label: &quot;Stop&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-ik65tuc" data-v-10bd6c77>            flowchart TD
    A@{ shape: framed-circle, label: &quot;Stop&quot; }

          </pre></code><ol start="19" data-v-10bd6c77><li data-v-10bd6c77>叉/连接（长矩形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: fork, label: &quot;Fork or Join&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-fu9dao0" data-v-10bd6c77>            flowchart TD
    A@{ shape: fork, label: &quot;Fork or Join&quot; }

          </pre></code><ol start="20" data-v-10bd6c77><li data-v-10bd6c77>整理(沙漏)</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: hourglass, label: &quot;Collate&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-9qoncj1" data-v-10bd6c77>            flowchart TD
    A@{ shape: hourglass, label: &quot;Collate&quot; }

          </pre></code><ol start="21" data-v-10bd6c77><li data-v-10bd6c77>注释（大括号）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: comment, label: &quot;Comment&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-gdii5s5" data-v-10bd6c77>            flowchart TD
    A@{ shape: comment, label: &quot;Comment&quot; }

          </pre></code><ol start="22" data-v-10bd6c77><li data-v-10bd6c77>右注释（右大括号）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: brace-r, label: &quot;Comment&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-68cvru2" data-v-10bd6c77>            flowchart TD
    A@{ shape: brace-r, label: &quot;Comment&quot; }

          </pre></code><ol start="23" data-v-10bd6c77><li data-v-10bd6c77>两边用大括号注释</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: braces, label: &quot;Comment&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-1wqaqd0" data-v-10bd6c77>            flowchart TD
    A@{ shape: braces, label: &quot;Comment&quot; }

          </pre></code><ol start="24" data-v-10bd6c77><li data-v-10bd6c77>Com连接（闪电）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: bolt, label: &quot;Communication link&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-62fwiea" data-v-10bd6c77>            flowchart TD
    A@{ shape: bolt, label: &quot;Communication link&quot; }

          </pre></code><ol start="25" data-v-10bd6c77><li data-v-10bd6c77>文档</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: doc, label: &quot;Document&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-fs82217" data-v-10bd6c77>            flowchart TD
    A@{ shape: doc, label: &quot;Document&quot; }

          </pre></code><p data-v-10bd6c77>Document</p><ol start="26" data-v-10bd6c77><li data-v-10bd6c77>延时（半圆矩形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: delay, label: &quot;Delay&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-bsam0dq" data-v-10bd6c77>            flowchart TD
    A@{ shape: delay, label: &quot;Delay&quot; }

          </pre></code><ol start="27" data-v-10bd6c77><li data-v-10bd6c77>直接存取存储器（卧式圆柱体）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: das, label: &quot;Direct access storage&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-q8wy4nf" data-v-10bd6c77>            flowchart TD
    A@{ shape: das, label: &quot;Direct access storage&quot; }

          </pre></code><p data-v-10bd6c77>Direct access storage</p><ol start="28" data-v-10bd6c77><li data-v-10bd6c77>磁盘存储（内衬圆柱体）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: lin-cyl, label: &quot;Disk storage&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-n2i2ffi" data-v-10bd6c77>            flowchart TD
    A@{ shape: lin-cyl, label: &quot;Disk storage&quot; }

          </pre></code><p data-v-10bd6c77>Disk storage</p><ol start="29" data-v-10bd6c77><li data-v-10bd6c77>显示（曲面梯形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: curv-trap, label: &quot;Display&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-lyyzory" data-v-10bd6c77>            flowchart TD
    A@{ shape: curv-trap, label: &quot;Display&quot; }

          </pre></code><ol start="30" data-v-10bd6c77><li data-v-10bd6c77>分割过程（分割矩形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: div-rect, label: &quot;Divided process&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-60t1q6v" data-v-10bd6c77>            flowchart TD
    A@{ shape: div-rect, label: &quot;Divided process&quot; }

          </pre></code><ol start="31" data-v-10bd6c77><li data-v-10bd6c77>摘录（小三角）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: tri, label: &quot;Extract&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-kz1nwf0" data-v-10bd6c77>            flowchart TD
    A@{ shape: tri, label: &quot;Extract&quot; }

          </pre></code><ol start="32" data-v-10bd6c77><li data-v-10bd6c77>内部存储（窗口窗格）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: win-pane, label: &quot;Internal storage&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-jhl5klo" data-v-10bd6c77>            flowchart TD
    A@{ shape: win-pane, label: &quot;Internal storage&quot; }

          </pre></code><ol start="33" data-v-10bd6c77><li data-v-10bd6c77>路口（填满的圆圈）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: f-circ, label: &quot;Junction&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-wcxht1r" data-v-10bd6c77>            flowchart TD
    A@{ shape: f-circ, label: &quot;Junction&quot; }

          </pre></code><ol start="34" data-v-10bd6c77><li data-v-10bd6c77>排列文档</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: lin-doc, label: &quot;Lined document&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-n6l8i0b" data-v-10bd6c77>            flowchart TD
    A@{ shape: lin-doc, label: &quot;Lined document&quot; }

          </pre></code><p data-v-10bd6c77>Lined document</p><ol start="35" data-v-10bd6c77><li data-v-10bd6c77>环路限制（缺口五边形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: notch-pent, label: &quot;Loop limit&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-jgjp5zr" data-v-10bd6c77>            flowchart TD
    A@{ shape: notch-pent, label: &quot;Loop limit&quot; }

          </pre></code><ol start="37" data-v-10bd6c77><li data-v-10bd6c77>手动文件（翻转三角形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: flip-tri, label: &quot;Manual file&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-0s677p6" data-v-10bd6c77>            flowchart TD
    A@{ shape: flip-tri, label: &quot;Manual file&quot; }

          </pre></code><ol start="38" data-v-10bd6c77><li data-v-10bd6c77>手动输入（倾斜矩形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: sl-rect, label: &quot;Manual input&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-atg40ok" data-v-10bd6c77>            flowchart TD
    A@{ shape: sl-rect, label: &quot;Manual input&quot; }

          </pre></code><ol start="39" data-v-10bd6c77><li data-v-10bd6c77>多文档（堆叠文档）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: docs, label: &quot;Multiple documents&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-qrm44vl" data-v-10bd6c77>            flowchart TD
    A@{ shape: docs, label: &quot;Multiple documents&quot; }

          </pre></code><ol start="40" data-v-10bd6c77><li data-v-10bd6c77>多工序（堆叠矩形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: processes, label: &quot;Multiple processes&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-jn6asiv" data-v-10bd6c77>            flowchart TD
    A@{ shape: processes, label: &quot;Multiple processes&quot; }

          </pre></code><ol start="41" data-v-10bd6c77><li data-v-10bd6c77>纸带（旗帜）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: flag, label: &quot;Paper tape&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-fntff2u" data-v-10bd6c77>            flowchart TD
    A@{ shape: flag, label: &quot;Paper tape&quot; }

          </pre></code><ol start="42" data-v-10bd6c77><li data-v-10bd6c77>存储数据（领结矩形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: bow-rect, label: &quot;Stored data&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-ubleusg" data-v-10bd6c77>            flowchart TD
    A@{ shape: bow-rect, label: &quot;Stored data&quot; }

          </pre></code><ol start="43" data-v-10bd6c77><li data-v-10bd6c77>摘要（交叉圈）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: cross-circ, label: &quot;Summary&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-5m6z2rd" data-v-10bd6c77>            flowchart TD
    A@{ shape: cross-circ, label: &quot;Summary&quot; }

          </pre></code><ol start="43" data-v-10bd6c77><li data-v-10bd6c77>标记的文档</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: tag-doc, label: &quot;Tagged document&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-bcod3lq" data-v-10bd6c77>            flowchart TD
    A@{ shape: tag-doc, label: &quot;Tagged document&quot; }

          </pre></code><ol start="44" data-v-10bd6c77><li data-v-10bd6c77>带标签的进程（带标签的矩形）</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ shape: tag-rect, label: &quot;Tagged process&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-dtyjapw" data-v-10bd6c77>            flowchart TD
    A@{ shape: tag-rect, label: &quot;Tagged process&quot; }

          </pre></code><h2 id="_1-6-节点特殊形状" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-6-节点特殊形状" data-v-10bd6c77><span data-v-10bd6c77>1.6 节点特殊形状</span></a></h2><p data-v-10bd6c77>美人鱼还引入了2种特殊的形状来增强您的流程图：图标和图像。这些形状允许您直接在流程图中包含图标和图像，提供更多的视觉背景和清晰度。</p><h3 id="_1-6-1-图标的形状" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-6-1-图标的形状" data-v-10bd6c77><span data-v-10bd6c77>1.6.1 图标的形状</span></a></h3><p data-v-10bd6c77>可以使用 <code data-v-10bd6c77>icon</code> 形状在流程图中包含图标。要使用图标，您需要先注册图标包。按照这里提供的说明操作。定义图标形状的语法如下：</p><ol data-v-10bd6c77><li data-v-10bd6c77>代码</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ icon: &quot;fa:user&quot;, form: &quot;square&quot;, label: &quot;User Icon&quot;, pos: &quot;t&quot;, h: 60 }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ol start="2" data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ol><code data-v-10bd6c77><pre class="mermaid" id="mermaid-r3v0u0v" data-v-10bd6c77>            flowchart TD
    A@{ icon: &quot;fa:user&quot;, form: &quot;square&quot;, label: &quot;User Icon&quot;, pos: &quot;t&quot;, h: 60 }

          </pre></code><ol start="3" data-v-10bd6c77><li data-v-10bd6c77>参数</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>icon：已注册图标包中的图标名称。</li><li data-v-10bd6c77>窗体：指定图标的背景形状。如果没有定义，将没有背景图标。选项包括:</li><li data-v-10bd6c77>label：与图标相关联的文本标签。这可以是任何字符串。如果没有定义，则不显示任何标签。</li><li data-v-10bd6c77>pos：标签的位置。如果没有定义，标签将默认位于图标的底部。可能的值有：</li><li data-v-10bd6c77>h：图标的高度。如果没有定义，则默认为48，这是最小值。</li></ul><h3 id="_1-6-2-图像的形状" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-6-2-图像的形状" data-v-10bd6c77><span data-v-10bd6c77>1.6.2 图像的形状</span></a></h3><p data-v-10bd6c77>可以使用 <code data-v-10bd6c77>image</code> 形状在流程图中包含图像。定义图像形状的语法如下：</p><ol data-v-10bd6c77><li data-v-10bd6c77>代码</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A@{ img: &quot;https://example.com/image.png&quot;, label: &quot;Image Label&quot;, pos: &quot;t&quot;, w: 60, h: 60, constraint: &quot;off&quot; }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ol start="2" data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ol><code data-v-10bd6c77><pre class="mermaid" id="mermaid-pb8m74m" data-v-10bd6c77>            flowchart TD
    A@{ img: &quot;&quot;, label: &quot;Image Label&quot;, pos: &quot;t&quot;, w: 60, h: 60, constraint: &quot;off&quot; }

          </pre></code><ol start="3" data-v-10bd6c77><li data-v-10bd6c77>参数</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>img：要显示的图片的URL。</li><li data-v-10bd6c77>label：与图像相关联的文本标签。这可以是任何字符串。如果没有定义，则不显示任何标签。</li><li data-v-10bd6c77>pos：标签的位置。如果未定义，则标签默认位于图像的底部。可能的值有：</li><li data-v-10bd6c77>w：图像的宽度。如果没有定义，这将默认为图像的自然宽度。</li><li data-v-10bd6c77>h：图像的高度。如果没有定义，这将默认为图像的自然高度。</li><li data-v-10bd6c77>constraint：确定图像是否应该约束节点大小。此设置还确保图像保持其原始长宽比，根据宽度（ <code data-v-10bd6c77>w</code> ）相应地调整高度（ <code data-v-10bd6c77>h</code> ）。如果没有定义，默认值为 <code data-v-10bd6c77>off</code></li></ul><p data-v-10bd6c77>这些新形状为流程图提供了额外的灵活性和视觉吸引力，使它们更具信息性和吸引力。</p><h2 id="_1-7-节点间链路" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-7-节点间链路" data-v-10bd6c77><span data-v-10bd6c77>1.7 节点间链路</span></a></h2><p data-v-10bd6c77>节点可以通过链路/边连接。可以有不同类型的链接或将文本字符串附加到链接上。</p><p data-v-10bd6c77>对于点链接或粗链接，需要添加的字符为等号或点，汇总如下表：</p><table data-v-10bd6c77><thead data-v-10bd6c77><tr data-v-10bd6c77><th data-v-10bd6c77>长度</th><th data-v-10bd6c77>1</th><th data-v-10bd6c77>2</th><th data-v-10bd6c77>3</th></tr></thead><tbody data-v-10bd6c77><tr data-v-10bd6c77><td data-v-10bd6c77>正常的</td><td data-v-10bd6c77><code data-v-10bd6c77>---</code></td><td data-v-10bd6c77><code data-v-10bd6c77>----</code></td><td data-v-10bd6c77><code data-v-10bd6c77>-----</code></td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>正常带箭头</td><td data-v-10bd6c77><code data-v-10bd6c77>--&gt;</code></td><td data-v-10bd6c77><code data-v-10bd6c77>---&gt;</code></td><td data-v-10bd6c77><code data-v-10bd6c77>----&gt;</code></td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>厚</td><td data-v-10bd6c77><code data-v-10bd6c77>===</code></td><td data-v-10bd6c77><code data-v-10bd6c77>====</code></td><td data-v-10bd6c77><code data-v-10bd6c77>=====</code></td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>厚厚的箭</td><td data-v-10bd6c77><code data-v-10bd6c77>==&gt;</code></td><td data-v-10bd6c77><code data-v-10bd6c77>===&gt;</code></td><td data-v-10bd6c77><code data-v-10bd6c77>====&gt;</code></td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>有点的</td><td data-v-10bd6c77><code data-v-10bd6c77>-.-</code></td><td data-v-10bd6c77><code data-v-10bd6c77>-..-</code></td><td data-v-10bd6c77><code data-v-10bd6c77>-...-</code></td></tr><tr data-v-10bd6c77><td data-v-10bd6c77>带箭头点</td><td data-v-10bd6c77><code data-v-10bd6c77>-.-&gt;</code></td><td data-v-10bd6c77><code data-v-10bd6c77>-..-&gt;</code></td><td data-v-10bd6c77><code data-v-10bd6c77>-...-&gt;</code></td></tr></tbody></table><h3 id="_1-7-1-基础链接" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-7-1-基础链接" data-v-10bd6c77><span data-v-10bd6c77>1.7.1 基础链接</span></a></h3><ol data-v-10bd6c77><li data-v-10bd6c77>带箭头的连杆</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A--&gt;B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-4bn1zmh" data-v-10bd6c77>            flowchart LR
    A--&gt;B

          </pre></code><ol start="2" data-v-10bd6c77><li data-v-10bd6c77>开放链接</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A --- B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-s685swl" data-v-10bd6c77>            flowchart LR
    A --- B

          </pre></code><ol start="3" data-v-10bd6c77><li data-v-10bd6c77>链接的文字</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A-- This is the text! ---B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-mc5ib5d" data-v-10bd6c77>            flowchart LR
    A-- This is the text! ---B

          </pre></code><hr data-v-10bd6c77><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A---|This is the text|B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-eg7xnpn" data-v-10bd6c77>            flowchart LR
    A---|This is the text|B

          </pre></code><ol start="4" data-v-10bd6c77><li data-v-10bd6c77>带有箭头和文字的链接</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A--&gt;|text|B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-210d433" data-v-10bd6c77>            flowchart LR
    A--&gt;|text|B

          </pre></code><hr data-v-10bd6c77><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A-- text --&gt;B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-pkp5s91" data-v-10bd6c77>            flowchart LR
    A-- text --&gt;B

          </pre></code><h3 id="_1-7-2-基础链接扩展" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-7-2-基础链接扩展" data-v-10bd6c77><span data-v-10bd6c77>1.7.2 基础链接扩展</span></a></h3><ol data-v-10bd6c77><li data-v-10bd6c77>点链接</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>   A-.-&gt;B;</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-6dielmx" data-v-10bd6c77>            flowchart LR
   A-.-&gt;B;

          </pre></code><ol start="2" data-v-10bd6c77><li data-v-10bd6c77>带文本的点链接</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>   A-. text .-&gt; B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-z1uejtc" data-v-10bd6c77>            flowchart LR
   A-. text .-&gt; B

          </pre></code><ol start="3" data-v-10bd6c77><li data-v-10bd6c77>粗链接</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>   A ==&gt; B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-f1tkqtu" data-v-10bd6c77>            flowchart LR
   A ==&gt; B

          </pre></code><ol start="4" data-v-10bd6c77><li data-v-10bd6c77>带文本的粗链接</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>   A == text ==&gt; B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-g8j5ei4" data-v-10bd6c77>            flowchart LR
   A == text ==&gt; B

          </pre></code><ol start="5" data-v-10bd6c77><li data-v-10bd6c77>无形链接</li></ol><p data-v-10bd6c77>在某些情况下，当您希望更改节点的默认位置时，这可能是一个有用的工具。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A ~~~ B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-fiqxmoz" data-v-10bd6c77>            flowchart LR
    A ~~~ B

          </pre></code><h3 id="_1-7-3-链式链接" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-7-3-链式链接" data-v-10bd6c77><span data-v-10bd6c77>1.7.3 链式链接</span></a></h3><p data-v-10bd6c77>可以在同一行声明多个链接，如下所示：</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>   A -- text --&gt; B -- text2 --&gt; C</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-x9u6pbl" data-v-10bd6c77>            flowchart LR
   A -- text --&gt; B -- text2 --&gt; C

          </pre></code><p data-v-10bd6c77>也可以在同一行声明多个节点链接，如下所示：</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>   a --&gt; b &amp; c--&gt; d</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-rbmjuf8" data-v-10bd6c77>            flowchart LR
   a --&gt; b &amp; c--&gt; d

          </pre></code><p data-v-10bd6c77>然后，您可以以一种非常富有表现力的方式描述依赖关系。就像下面的一行：</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TB</span>
<span class="line" data-v-10bd6c77>    A &amp; B--&gt; C &amp; D</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-kg5qtcg" data-v-10bd6c77>            flowchart TB
    A &amp; B--&gt; C &amp; D

          </pre></code><p data-v-10bd6c77>如果使用基本语法描述相同的图，则需要四行。需要提醒的是，这样做可能会让流程图更难以阅读。我想到了瑞典语 <code data-v-10bd6c77>lagom</code> 。意思是，不要太多也不要太少。这也适用于表达语法。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TB</span>
<span class="line" data-v-10bd6c77>    A --&gt; C</span>
<span class="line" data-v-10bd6c77>    A --&gt; D</span>
<span class="line" data-v-10bd6c77>    B --&gt; C</span>
<span class="line" data-v-10bd6c77>    B --&gt; D</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-bk8vn1x" data-v-10bd6c77>            flowchart TB
    A --&gt; C
    A --&gt; D
    B --&gt; C
    B --&gt; D

          </pre></code><h3 id="_1-7-4-动画链接" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-7-4-动画链接" data-v-10bd6c77><span data-v-10bd6c77>1.7.4 动画链接</span></a></h3><ol data-v-10bd6c77><li data-v-10bd6c77>将ID附加到Edges</li></ol><p data-v-10bd6c77>Mermaid现在支持为边缘分配id，类似于将id和元数据附加到节点的方式。这个特性为边缘上更高级的样式、类和动画功能奠定了基础。</p><p data-v-10bd6c77><strong data-v-10bd6c77>语法:</strong></p><p data-v-10bd6c77>要给边一个ID，在边语法前加上ID，后面跟着 <code data-v-10bd6c77>@</code> 字符。例如:</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>  A e1@–&gt; B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><p data-v-10bd6c77>在此例中， <code data-v-10bd6c77>e1</code> 是连接 <code data-v-10bd6c77>A</code> 到 <code data-v-10bd6c77>B</code> 的边的ID。然后，您可以在以后的定义或样式语句中使用这个ID，就像节点一样。</p><ol start="2" data-v-10bd6c77><li data-v-10bd6c77>打开动画</li></ol><p data-v-10bd6c77>一旦你给边缘分配了ID，你就可以通过定义边缘的属性来打开该边缘的动画：</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>  A e1@==&gt; B</span>
<span class="line" data-v-10bd6c77>  e1@{ animate: true }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-ozfptl3" data-v-10bd6c77>            flowchart LR
  A e1@==&gt; B
  e1@{ animate: true }

          </pre></code><p data-v-10bd6c77>这告诉Mermaid边缘 <code data-v-10bd6c77>e1</code> 应该动画化。</p><ol start="3" data-v-10bd6c77><li data-v-10bd6c77>选择动画类型</li></ol><p data-v-10bd6c77>初始版本支持 <code data-v-10bd6c77>fast</code> 和 <code data-v-10bd6c77>slow</code> 两种动画速度。选择特定的动画类型是启用动画和一次设置动画速度的简写。</p><p data-v-10bd6c77><strong data-v-10bd6c77>例子:</strong></p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>  A e1@==&gt; B</span>
<span class="line" data-v-10bd6c77>  e1@{ animation: fast }</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-wxsbi77" data-v-10bd6c77>            flowchart LR
  A e1@==&gt; B
  e1@{ animation: fast }

          </pre></code><p data-v-10bd6c77>这相当于 <code data-v-10bd6c77>{ animate: true, animation: fast }</code> 。</p><ol start="4" data-v-10bd6c77><li data-v-10bd6c77>为动画使用classDef语句</li></ol><p data-v-10bd6c77>你也可以给边缘赋一个类，然后在 <code data-v-10bd6c77>classDef</code> 语句中定义动画属性。例如:</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>  A e1@--&gt; B</span>
<span class="line" data-v-10bd6c77>  classDef animate stroke-dasharray: 9,5,stroke-dashoffset: 900,animation: dash 25s linear infinite;</span>
<span class="line" data-v-10bd6c77>  class e1 animate</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-5ls0fwp" data-v-10bd6c77>            flowchart LR
  A e1@--&gt; B
  classDef animate stroke-dasharray: 9,5,stroke-dashoffset: 900,animation: dash 25s linear infinite;
  class e1 animate

          </pre></code><p data-v-10bd6c77>在这个片段中：</p><ul data-v-10bd6c77><li data-v-10bd6c77><code data-v-10bd6c77>e1@--&gt;</code> 创建ID  <code data-v-10bd6c77>e1</code> 的边。</li><li data-v-10bd6c77><code data-v-10bd6c77>classDef animate</code> 定义了一个名为 <code data-v-10bd6c77>animate</code> 的类，具有样式和动画属性。</li><li data-v-10bd6c77><code data-v-10bd6c77>class e1 animate</code> 将 <code data-v-10bd6c77>animate</code> 类应用于边缘 <code data-v-10bd6c77>e1</code> 。</li></ul><p data-v-10bd6c77>注意转义逗号：当设置 <code data-v-10bd6c77>stroke-dasharray</code> 属性时，记住转义逗号为 <code data-v-10bd6c77>\\,</code> ，因为逗号在Mermaid的样式定义中用作分隔符。</p><h3 id="_1-7-5-其他箭头" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-7-5-其他箭头" data-v-10bd6c77><span data-v-10bd6c77>1.7.5 其他箭头</span></a></h3><ol data-v-10bd6c77><li data-v-10bd6c77>箭头-圆边</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A --o B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-09vhld8" data-v-10bd6c77>            flowchart LR
    A --o B

          </pre></code><ol start="2" data-v-10bd6c77><li data-v-10bd6c77>箭头-交叉</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A --x B</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-rngdgm7" data-v-10bd6c77>            flowchart LR
    A --x B

          </pre></code><ol start="3" data-v-10bd6c77><li data-v-10bd6c77>多向箭头</li></ol><p data-v-10bd6c77>有可能使用多向箭头。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A o--o B</span>
<span class="line" data-v-10bd6c77>    B &lt;--&gt; C</span>
<span class="line" data-v-10bd6c77>    C x--x D</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-u4y4wxa" data-v-10bd6c77>            flowchart LR
    A o--o B
    B &lt;--&gt; C
    C x--x D

          </pre></code><h3 id="_1-7-6-链路的最小长度" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-7-6-链路的最小长度" data-v-10bd6c77><span data-v-10bd6c77>1.7.6 链路的最小长度</span></a></h3><p data-v-10bd6c77>流程图中的每个节点最终被分配到渲染图中的一个等级，即垂直或水平水平（取决于流程图的方向），基于它链接到的节点。默认情况下，链接可以跨越任意数量的等级，但您可以通过在链接定义中添加额外的破折号来要求任何链接比其他链接长。</p><p data-v-10bd6c77>在下面的例子中，在从节点B到节点E的链接中添加了两个额外的破折号，因此它比常规链接跨越了两个等级：</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A[Start] --&gt; B{Is it?}</span>
<span class="line" data-v-10bd6c77>    B --&gt;|Yes| C[OK]</span>
<span class="line" data-v-10bd6c77>    C --&gt; D[Rethink]</span>
<span class="line" data-v-10bd6c77>    D --&gt; B</span>
<span class="line" data-v-10bd6c77>    B ----&gt;|No| E[End]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-yvt9llx" data-v-10bd6c77>            flowchart TD
    A[Start] --&gt; B{Is it?}
    B --&gt;|Yes| C[OK]
    C --&gt; D[Rethink]
    D --&gt; B
    B ----&gt;|No| E[End]

          </pre></code><blockquote data-v-10bd6c77><p data-v-10bd6c77>注意：为了适应其他请求，渲染引擎仍然可能使链接比请求的排名长。</p></blockquote><p data-v-10bd6c77>当链接标签写在链接中间时，必须在链接的右侧添加额外的破折号。下面的示例与前面的示例等效：</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    A[Start] --&gt; B{Is it?}</span>
<span class="line" data-v-10bd6c77>    B -- Yes --&gt; C[OK]</span>
<span class="line" data-v-10bd6c77>    C --&gt; D[Rethink]</span>
<span class="line" data-v-10bd6c77>    D --&gt; B</span>
<span class="line" data-v-10bd6c77>    B -- No ----&gt; E[End]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-oopytl0" data-v-10bd6c77>            flowchart TD
    A[Start] --&gt; B{Is it?}
    B -- Yes --&gt; C[OK]
    C --&gt; D[Rethink]
    D --&gt; B
    B -- No ----&gt; E[End]

          </pre></code><h2 id="_1-8-字符相关" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-8-字符相关" data-v-10bd6c77><span data-v-10bd6c77>1.8 字符相关</span></a></h2><h3 id="_1-8-1-破坏语法的特殊字符" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-8-1-破坏语法的特殊字符" data-v-10bd6c77><span data-v-10bd6c77>1.8.1 破坏语法的特殊字符</span></a></h3><p data-v-10bd6c77>为了呈现更多麻烦的字符，可以将文本放在引号内。如下例所示：</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1[&quot;This is the (text) in the box&quot;]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-38fmuh1" data-v-10bd6c77>            flowchart LR
    id1[&quot;This is the (text) in the box&quot;]

          </pre></code><p data-v-10bd6c77>This is the (text) in the box</p><h3 id="_1-8-2-转义字符的实体代码" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-8-2-转义字符的实体代码" data-v-10bd6c77><span data-v-10bd6c77>1.8.2 转义字符的实体代码</span></a></h3><p data-v-10bd6c77>可以使用这里示例的语法转义字符。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A[&quot;A double quote:#quot;&quot;] --&gt; B[&quot;A dec char:#9829;&quot;]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-g4an6za" data-v-10bd6c77>            flowchart LR
    A[&quot;A double quote:#quot;&quot;] --&gt; B[&quot;A dec char:#9829;&quot;]

          </pre></code><p data-v-10bd6c77>给定的数字以10为基数，因此 <code data-v-10bd6c77>#</code> 可以编码为 <code data-v-10bd6c77>#35;</code> 。还支持使用HTML字符名。</p><h2 id="_1-9-子图" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-9-子图" data-v-10bd6c77><span data-v-10bd6c77>1.9 子图</span></a></h2><h3 id="_1-9-1-基础使用" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-9-1-基础使用" data-v-10bd6c77><span data-v-10bd6c77>1.9.1 基础使用</span></a></h3><ol data-v-10bd6c77><li data-v-10bd6c77>语法</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>subgraph title</span>
<span class="line" data-v-10bd6c77>    graph definition</span>
<span class="line" data-v-10bd6c77>end</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ol start="2" data-v-10bd6c77><li data-v-10bd6c77>下面是一个例子：</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TB</span>
<span class="line" data-v-10bd6c77>    c1--&gt;a2</span>
<span class="line" data-v-10bd6c77>    subgraph one</span>
<span class="line" data-v-10bd6c77>    a1--&gt;a2</span>
<span class="line" data-v-10bd6c77>    end</span>
<span class="line" data-v-10bd6c77>    subgraph two</span>
<span class="line" data-v-10bd6c77>    b1--&gt;b2</span>
<span class="line" data-v-10bd6c77>    end</span>
<span class="line" data-v-10bd6c77>    subgraph three</span>
<span class="line" data-v-10bd6c77>    c1--&gt;c2</span>
<span class="line" data-v-10bd6c77>    end</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-qpr26ty" data-v-10bd6c77>            flowchart TB
    c1--&gt;a2
    subgraph one
    a1--&gt;a2
    end
    subgraph two
    b1--&gt;b2
    end
    subgraph three
    c1--&gt;c2
    end

          </pre></code><ol start="3" data-v-10bd6c77><li data-v-10bd6c77>为子图设置显式id。</li></ol><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TB</span>
<span class="line" data-v-10bd6c77>    c1--&gt;a2</span>
<span class="line" data-v-10bd6c77>    subgraph ide1 [one]</span>
<span class="line" data-v-10bd6c77>    a1--&gt;a2</span>
<span class="line" data-v-10bd6c77>    end</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-l8wi5dg" data-v-10bd6c77>            flowchart TB
    c1--&gt;a2
    subgraph ide1 [one]
    a1--&gt;a2
    end

          </pre></code><h3 id="_1-9-2-子图作为流程图" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-9-2-子图作为流程图" data-v-10bd6c77><span data-v-10bd6c77>1.9.2 子图作为流程图</span></a></h3><p data-v-10bd6c77>使用图形类型流程图，也可以像下面的流程图一样设置子图之间的边。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TB</span>
<span class="line" data-v-10bd6c77>    c1--&gt;a2</span>
<span class="line" data-v-10bd6c77>    subgraph one</span>
<span class="line" data-v-10bd6c77>    a1--&gt;a2</span>
<span class="line" data-v-10bd6c77>    end</span>
<span class="line" data-v-10bd6c77>    subgraph two</span>
<span class="line" data-v-10bd6c77>    b1--&gt;b2</span>
<span class="line" data-v-10bd6c77>    end</span>
<span class="line" data-v-10bd6c77>    subgraph three</span>
<span class="line" data-v-10bd6c77>    c1--&gt;c2</span>
<span class="line" data-v-10bd6c77>    end</span>
<span class="line" data-v-10bd6c77>    one --&gt; two</span>
<span class="line" data-v-10bd6c77>    three --&gt; two</span>
<span class="line" data-v-10bd6c77>    two --&gt; c2</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-fo0ghk3" data-v-10bd6c77>            flowchart TB
    c1--&gt;a2
    subgraph one
    a1--&gt;a2
    end
    subgraph two
    b1--&gt;b2
    end
    subgraph three
    c1--&gt;c2
    end
    one --&gt; two
    three --&gt; two
    two --&gt; c2

          </pre></code><h3 id="_1-9-3-子图中的方向" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-9-3-子图中的方向" data-v-10bd6c77><span data-v-10bd6c77>1.9.3 子图中的方向</span></a></h3><p data-v-10bd6c77>对于graphtype流程图，您可以使用direction语句来设置子图将呈现的方向，就像这个例子一样。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>  subgraph TOP</span>
<span class="line" data-v-10bd6c77>    direction TB</span>
<span class="line" data-v-10bd6c77>    subgraph B1</span>
<span class="line" data-v-10bd6c77>        direction RL</span>
<span class="line" data-v-10bd6c77>        i1 --&gt;f1</span>
<span class="line" data-v-10bd6c77>    end</span>
<span class="line" data-v-10bd6c77>    subgraph B2</span>
<span class="line" data-v-10bd6c77>        direction BT</span>
<span class="line" data-v-10bd6c77>        i2 --&gt;f2</span>
<span class="line" data-v-10bd6c77>    end</span>
<span class="line" data-v-10bd6c77>  end</span>
<span class="line" data-v-10bd6c77>  A --&gt; TOP --&gt; B</span>
<span class="line" data-v-10bd6c77>  B1 --&gt; B2</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-vmypvj0" data-v-10bd6c77>            flowchart LR
  subgraph TOP
    direction TB
    subgraph B1
        direction RL
        i1 --&gt;f1
    end
    subgraph B2
        direction BT
        i2 --&gt;f2
    end
  end
  A --&gt; TOP --&gt; B
  B1 --&gt; B2

          </pre></code><h3 id="_1-9-4-限制" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-9-4-限制" data-v-10bd6c77><span data-v-10bd6c77>1.9.4 限制</span></a></h3><p data-v-10bd6c77>如果子图的任何节点链接到外部，子图的方向将被忽略。相反，子图将继承父图的方向：</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    subgraph subgraph1</span>
<span class="line" data-v-10bd6c77>        direction TB</span>
<span class="line" data-v-10bd6c77>        top1[top] --&gt; bottom1[bottom]</span>
<span class="line" data-v-10bd6c77>    end</span>
<span class="line" data-v-10bd6c77>    subgraph subgraph2</span>
<span class="line" data-v-10bd6c77>        direction TB</span>
<span class="line" data-v-10bd6c77>        top2[top] --&gt; bottom2[bottom]</span>
<span class="line" data-v-10bd6c77>    end</span>
<span class="line" data-v-10bd6c77>    %% ^ These subgraphs are identical, except for the links to them:</span>
<span class="line" data-v-10bd6c77></span>
<span class="line" data-v-10bd6c77>    %% Link *to* subgraph1: subgraph1 direction is maintained</span>
<span class="line" data-v-10bd6c77>    outside --&gt; subgraph1</span>
<span class="line" data-v-10bd6c77>    %% Link *within* subgraph2:</span>
<span class="line" data-v-10bd6c77>    %% subgraph2 inherits the direction of the top-level graph (LR)</span>
<span class="line" data-v-10bd6c77>    outside ---&gt; top2</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-k7dxfx7" data-v-10bd6c77>            flowchart LR
    subgraph subgraph1
        direction TB
        top1[top] --&gt; bottom1[bottom]
    end
    subgraph subgraph2
        direction TB
        top2[top] --&gt; bottom2[bottom]
    end
    %% ^ These subgraphs are identical, except for the links to them:

    %% Link *to* subgraph1: subgraph1 direction is maintained
    outside --&gt; subgraph1
    %% Link *within* subgraph2:
    %% subgraph2 inherits the direction of the top-level graph (LR)
    outside ---&gt; top2

          </pre></code><h2 id="_1-10-markdown字符串" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-10-markdown字符串" data-v-10bd6c77><span data-v-10bd6c77>1.10 markdown字符串</span></a></h2><p data-v-10bd6c77>“markdown字符串”功能通过提供更通用的字符串类型来增强流程图和思维导图，它支持文本格式选项，如粗体和斜体，并在标签内自动换行文本。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>%%{ init: { &quot;flowchart&quot;:  {&quot;htmlLabels&quot;}:false } }%%</span>
<span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>subgraph &quot;One&quot;</span>
<span class="line" data-v-10bd6c77>  a(&quot;\`The **cat**</span>
<span class="line" data-v-10bd6c77>  in the hat\`&quot;) -- &quot;edge label&quot; --&gt; b{{&quot;\`The **dog** in the hog\`&quot;}}</span>
<span class="line" data-v-10bd6c77>end</span>
<span class="line" data-v-10bd6c77>subgraph &quot;\`**Two**\`&quot;</span>
<span class="line" data-v-10bd6c77>  c(&quot;\`The **cat**</span>
<span class="line" data-v-10bd6c77>  in the hat\`&quot;) -- &quot;\`Bold **edge label**\`&quot; --&gt; d(&quot;The dog in the hog&quot;)</span>
<span class="line" data-v-10bd6c77>end</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><p data-v-10bd6c77><img src="`+i+`" alt="" data-v-10bd6c77></p><p data-v-10bd6c77>格式:</p><ul data-v-10bd6c77><li data-v-10bd6c77>对于粗体文本，在文本前后使用双星号（ <code data-v-10bd6c77>**</code> ）。</li><li data-v-10bd6c77>对于斜体，在文本前后使用单个星号（ <code data-v-10bd6c77>*</code> ）。</li><li data-v-10bd6c77>对于传统字符串，您需要添加 <code data-v-10bd6c77>&lt;br&gt;</code> 标记，以便文本在节点中包装。但是，当文本变得太长时，标记字符串会自动换行，并允许您通过简单地使用换行符而不是 <code data-v-10bd6c77>&lt;br&gt;</code> 标记来开始新行。</li></ul><p data-v-10bd6c77>该特性适用于节点标签、边标签和子图标签。</p><p data-v-10bd6c77>可以使用命令禁用自动包装</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>---</span>
<span class="line" data-v-10bd6c77>config:</span>
<span class="line" data-v-10bd6c77>  markdownAutoWrap: false</span>
<span class="line" data-v-10bd6c77>---</span>
<span class="line" data-v-10bd6c77>graph LR</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><h2 id="_1-11-交互" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-11-交互" data-v-10bd6c77><span data-v-10bd6c77>1.11 交互</span></a></h2><p data-v-10bd6c77>可以将单击事件绑定到节点，单击可以导致javascript回调或链接，该链接将在新的浏览器选项卡中打开。</p><blockquote data-v-10bd6c77><p data-v-10bd6c77>当使用 <code data-v-10bd6c77>securityLevel=&#39;strict&#39;</code> 时禁用此功能，当使用 <code data-v-10bd6c77>securityLevel=&#39;loose&#39;</code> 时启用此功能。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>click nodeId callback</span>
<span class="line" data-v-10bd6c77>click nodeId call callback()</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>nodeId为节点id</li><li data-v-10bd6c77>callback是在显示图形的页面上定义的javascript函数的名称，该函数将以nodeId作为参数调用。</li></ul><p data-v-10bd6c77>工具提示用法示例如下：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>&lt;</span>script</span><span class="token punctuation" data-v-10bd6c77>&gt;</span></span><span class="token script" data-v-10bd6c77><span class="token language-javascript" data-v-10bd6c77></span>
<span class="line" data-v-10bd6c77>  window<span class="token punctuation" data-v-10bd6c77>.</span><span class="token function-variable function" data-v-10bd6c77>callback</span> <span class="token operator" data-v-10bd6c77>=</span> <span class="token keyword" data-v-10bd6c77>function</span> <span class="token punctuation" data-v-10bd6c77>(</span><span class="token punctuation" data-v-10bd6c77>)</span> <span class="token punctuation" data-v-10bd6c77>{</span></span>
<span class="line" data-v-10bd6c77>    <span class="token function" data-v-10bd6c77>alert</span><span class="token punctuation" data-v-10bd6c77>(</span><span class="token string" data-v-10bd6c77>&#39;A callback was triggered&#39;</span><span class="token punctuation" data-v-10bd6c77>)</span><span class="token punctuation" data-v-10bd6c77>;</span></span>
<span class="line" data-v-10bd6c77>  <span class="token punctuation" data-v-10bd6c77>}</span><span class="token punctuation" data-v-10bd6c77>;</span></span>
<span class="line" data-v-10bd6c77></span></span><span class="token tag" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>&lt;/</span>script</span><span class="token punctuation" data-v-10bd6c77>&gt;</span></span></span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><p data-v-10bd6c77>工具提示文本用双引号括起来。工具提示的样式由类 <code data-v-10bd6c77>.mermaidTooltip</code> 设置。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A--&gt;B</span>
<span class="line" data-v-10bd6c77>    B--&gt;C</span>
<span class="line" data-v-10bd6c77>    C--&gt;D</span>
<span class="line" data-v-10bd6c77>    click A callback &quot;Tooltip for a callback&quot;</span>
<span class="line" data-v-10bd6c77>    click B &quot;https://www.github.com&quot; &quot;This is a tooltip for a link&quot;</span>
<span class="line" data-v-10bd6c77>    click C call callback() &quot;Tooltip for a callback&quot;</span>
<span class="line" data-v-10bd6c77>    click D href &quot;https://www.github.com&quot; &quot;This is a tooltip for a link&quot;</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-wlr2m2v" data-v-10bd6c77>            flowchart LR
    A--&gt;B
    B--&gt;C
    C--&gt;D
    click A callback &quot;Tooltip for a callback&quot;
    click B &quot;https://www.github.com&quot; &quot;This is a tooltip for a link&quot;
    click C call callback() &quot;Tooltip for a callback&quot;
    click D href &quot;https://www.github.com&quot; &quot;This is a tooltip for a link&quot;

          </pre></code><blockquote data-v-10bd6c77><p data-v-10bd6c77>工具提示功能和链接到url的能力从0.5.2版本开始可用。</p></blockquote><p data-v-10bd6c77>由于Docsify处理JavaScript回调函数的方式存在限制，可以在本文中查看上述代码的另一个工作演示。</p><p data-v-10bd6c77>默认情况下，链接在相同的浏览器选项卡/窗口中打开。可以通过在click定义中添加链接目标来改变这一点（支持 <code data-v-10bd6c77>_self</code> ,  <code data-v-10bd6c77>_blank</code> ,  <code data-v-10bd6c77>_parent</code> 和 <code data-v-10bd6c77>_top</code> ）：</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A--&gt;B</span>
<span class="line" data-v-10bd6c77>    B--&gt;C</span>
<span class="line" data-v-10bd6c77>    C--&gt;D</span>
<span class="line" data-v-10bd6c77>    D--&gt;E</span>
<span class="line" data-v-10bd6c77>    click A &quot;https://www.github.com&quot; _blank</span>
<span class="line" data-v-10bd6c77>    click B &quot;https://www.github.com&quot; &quot;Open this in a new tab&quot; _blank</span>
<span class="line" data-v-10bd6c77>    click C href &quot;https://www.github.com&quot; _blank</span>
<span class="line" data-v-10bd6c77>    click D href &quot;https://www.github.com&quot; &quot;Open this in a new tab&quot; _blank</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-kv70u8t" data-v-10bd6c77>            flowchart LR
    A--&gt;B
    B--&gt;C
    C--&gt;D
    D--&gt;E
    click A &quot;https://www.github.com&quot; _blank
    click B &quot;https://www.github.com&quot; &quot;Open this in a new tab&quot; _blank
    click C href &quot;https://www.github.com&quot; _blank
    click D href &quot;https://www.github.com&quot; &quot;Open this in a new tab&quot; _blank

          </pre></code><p data-v-10bd6c77>初学者提示——在html上下文中使用交互式链接的完整示例：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>&lt;</span>body</span><span class="token punctuation" data-v-10bd6c77>&gt;</span></span></span>
<span class="line" data-v-10bd6c77>  <span class="token tag" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>&lt;</span>pre</span> <span class="token attr-name" data-v-10bd6c77>class</span><span class="token attr-value" data-v-10bd6c77><span class="token punctuation attr-equals" data-v-10bd6c77>=</span><span class="token punctuation" data-v-10bd6c77>&quot;</span>mermaid<span class="token punctuation" data-v-10bd6c77>&quot;</span></span><span class="token punctuation" data-v-10bd6c77>&gt;</span></span></span>
<span class="line" data-v-10bd6c77>    flowchart LR</span>
<span class="line" data-v-10bd6c77>        A--&gt;B</span>
<span class="line" data-v-10bd6c77>        B--&gt;C</span>
<span class="line" data-v-10bd6c77>        C--&gt;D</span>
<span class="line" data-v-10bd6c77>        click A callback &quot;Tooltip&quot;</span>
<span class="line" data-v-10bd6c77>        click B &quot;https://www.github.com&quot; &quot;This is a link&quot;</span>
<span class="line" data-v-10bd6c77>        click C call callback() &quot;Tooltip&quot;</span>
<span class="line" data-v-10bd6c77>        click D href &quot;https://www.github.com&quot; &quot;This is a link&quot;</span>
<span class="line" data-v-10bd6c77>  <span class="token tag" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>&lt;/</span>pre</span><span class="token punctuation" data-v-10bd6c77>&gt;</span></span></span>
<span class="line" data-v-10bd6c77></span>
<span class="line" data-v-10bd6c77>  <span class="token tag" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>&lt;</span>script</span><span class="token punctuation" data-v-10bd6c77>&gt;</span></span><span class="token script" data-v-10bd6c77><span class="token language-javascript" data-v-10bd6c77></span>
<span class="line" data-v-10bd6c77>    window<span class="token punctuation" data-v-10bd6c77>.</span><span class="token function-variable function" data-v-10bd6c77>callback</span> <span class="token operator" data-v-10bd6c77>=</span> <span class="token keyword" data-v-10bd6c77>function</span> <span class="token punctuation" data-v-10bd6c77>(</span><span class="token punctuation" data-v-10bd6c77>)</span> <span class="token punctuation" data-v-10bd6c77>{</span></span>
<span class="line" data-v-10bd6c77>      <span class="token function" data-v-10bd6c77>alert</span><span class="token punctuation" data-v-10bd6c77>(</span><span class="token string" data-v-10bd6c77>&#39;A callback was triggered&#39;</span><span class="token punctuation" data-v-10bd6c77>)</span><span class="token punctuation" data-v-10bd6c77>;</span></span>
<span class="line" data-v-10bd6c77>    <span class="token punctuation" data-v-10bd6c77>}</span><span class="token punctuation" data-v-10bd6c77>;</span></span>
<span class="line" data-v-10bd6c77>    <span class="token keyword" data-v-10bd6c77>const</span> config <span class="token operator" data-v-10bd6c77>=</span> <span class="token punctuation" data-v-10bd6c77>{</span></span>
<span class="line" data-v-10bd6c77>      <span class="token literal-property property" data-v-10bd6c77>startOnLoad</span><span class="token operator" data-v-10bd6c77>:</span> <span class="token boolean" data-v-10bd6c77>true</span><span class="token punctuation" data-v-10bd6c77>,</span></span>
<span class="line" data-v-10bd6c77>      <span class="token literal-property property" data-v-10bd6c77>flowchart</span><span class="token operator" data-v-10bd6c77>:</span> <span class="token punctuation" data-v-10bd6c77>{</span> <span class="token literal-property property" data-v-10bd6c77>useMaxWidth</span><span class="token operator" data-v-10bd6c77>:</span> <span class="token boolean" data-v-10bd6c77>true</span><span class="token punctuation" data-v-10bd6c77>,</span> <span class="token literal-property property" data-v-10bd6c77>htmlLabels</span><span class="token operator" data-v-10bd6c77>:</span> <span class="token boolean" data-v-10bd6c77>true</span><span class="token punctuation" data-v-10bd6c77>,</span> <span class="token literal-property property" data-v-10bd6c77>curve</span><span class="token operator" data-v-10bd6c77>:</span> <span class="token string" data-v-10bd6c77>&#39;cardinal&#39;</span> <span class="token punctuation" data-v-10bd6c77>}</span><span class="token punctuation" data-v-10bd6c77>,</span></span>
<span class="line" data-v-10bd6c77>      <span class="token literal-property property" data-v-10bd6c77>securityLevel</span><span class="token operator" data-v-10bd6c77>:</span> <span class="token string" data-v-10bd6c77>&#39;loose&#39;</span><span class="token punctuation" data-v-10bd6c77>,</span></span>
<span class="line" data-v-10bd6c77>    <span class="token punctuation" data-v-10bd6c77>}</span><span class="token punctuation" data-v-10bd6c77>;</span></span>
<span class="line" data-v-10bd6c77>    mermaid<span class="token punctuation" data-v-10bd6c77>.</span><span class="token function" data-v-10bd6c77>initialize</span><span class="token punctuation" data-v-10bd6c77>(</span>config<span class="token punctuation" data-v-10bd6c77>)</span><span class="token punctuation" data-v-10bd6c77>;</span></span>
<span class="line" data-v-10bd6c77>  </span></span><span class="token tag" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>&lt;/</span>script</span><span class="token punctuation" data-v-10bd6c77>&gt;</span></span></span>
<span class="line" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>&lt;/</span>body</span><span class="token punctuation" data-v-10bd6c77>&gt;</span></span></span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><h2 id="_1-12-注释" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-12-注释" data-v-10bd6c77><span data-v-10bd6c77>1.12 注释</span></a></h2><p data-v-10bd6c77>可以在流程图中输入注释，解析器将忽略这些注释。注释需要在单独的行上，并且必须以 <code data-v-10bd6c77>%%</code> （双百分号）作为前缀。在注释开始到下一个换行符之后的任何文本都将被视为注释，包括任何流语法</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>%% this is a comment A -- text --&gt; B{node}</span>
<span class="line" data-v-10bd6c77>   A -- text --&gt; B -- text2 --&gt; C</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-e44br32" data-v-10bd6c77>            flowchart LR
%% this is a comment A -- text --&gt; B{node}
   A -- text --&gt; B -- text2 --&gt; C

          </pre></code><h2 id="_1-13-样式" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-13-样式" data-v-10bd6c77><span data-v-10bd6c77>1.13 样式</span></a></h2><h3 id="_1-13-1-样式的链接" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-13-1-样式的链接" data-v-10bd6c77><span data-v-10bd6c77>1.13.1 样式的链接</span></a></h3><p data-v-10bd6c77>可以为链接设置样式。例如，您可能希望样式化流中向后移动的链接。由于链接与节点一样没有id，因此需要采用其他方式来决定链接应该附加到什么样式。使用在图中定义链接时的顺序号而不是id，或者使用default应用于所有链接。在下面的例子中，在linkStyle语句中定义的样式将属于图中的第四个链接：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>linkStyle 3 stroke:#ff3,stroke-width:4px,color:red;</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div></div></div><p data-v-10bd6c77>通过用逗号分隔链接号，也可以在单个语句中为多个链接添加样式：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>linkStyle 1,2,7 color:blue;</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div></div></div><h3 id="_1-13-2-造型线曲线" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-13-2-造型线曲线" data-v-10bd6c77><span data-v-10bd6c77>1.13.2 造型线曲线</span></a></h3><p data-v-10bd6c77>如果默认方法不能满足您的需要，则可以对项目之间的线条使用的曲线类型进行样式设置。可用曲线风格包括 <code data-v-10bd6c77>basis</code> ,  <code data-v-10bd6c77>bumpX</code> ,  <code data-v-10bd6c77>bumpY</code> ,  <code data-v-10bd6c77>cardinal</code> ,  <code data-v-10bd6c77>catmullRom</code> ,  <code data-v-10bd6c77>linear</code> ,  <code data-v-10bd6c77>monotoneX</code> ,  <code data-v-10bd6c77>monotoneY</code> ,  <code data-v-10bd6c77>natural</code> ,  <code data-v-10bd6c77>step</code> ,  <code data-v-10bd6c77>stepAfter</code> ,和 <code data-v-10bd6c77>stepBefore</code> 。</p><p data-v-10bd6c77>在这个例子中，从左到右的图形使用 <code data-v-10bd6c77>stepBefore</code> 曲线样式：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>%%{ init: { &#39;flowchart&#39;: { &#39;curve&#39;: &#39;stepBefore&#39; } } }%%</span>
<span class="line" data-v-10bd6c77>graph LR</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><p data-v-10bd6c77>有关可用曲线的完整列表（包括自定义曲线的说明），请参阅3d -shape项目中的Shapes文档。</p><h3 id="_1-13-3-样式化节点" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-13-3-样式化节点" data-v-10bd6c77><span data-v-10bd6c77>1.13.3 样式化节点</span></a></h3><p data-v-10bd6c77>可以对节点应用特定的样式，例如更厚的边框或不同的背景颜色。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    id1(Start)--&gt;id2(Stop)</span>
<span class="line" data-v-10bd6c77>    style id1 fill:#f9f,stroke:#333,stroke-width:4px</span>
<span class="line" data-v-10bd6c77>    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-rtrcxy9" data-v-10bd6c77>            flowchart LR
    id1(Start)--&gt;id2(Stop)
    style id1 fill:#f9f,stroke:#333,stroke-width:4px
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

          </pre></code><h2 id="_1-14-类" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-14-类" data-v-10bd6c77><span data-v-10bd6c77>1.14 类</span></a></h2><h3 id="_1-14-1-基础定义并使用" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-14-1-基础定义并使用" data-v-10bd6c77><span data-v-10bd6c77>1.14.1 基础定义并使用</span></a></h3><p data-v-10bd6c77>比每次定义样式更方便的方法是定义一个样式类，并将该类附加到应该具有不同外观的节点上。</p><p data-v-10bd6c77>类定义看起来像下面的例子：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>    classDef className fill:#f9f,stroke:#333,stroke-width:4px;</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div></div></div><p data-v-10bd6c77>此外，可以在一个语句中定义多个类的样式：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>    classDef firstClassName,secondClassName font-size:12pt;</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div></div></div><p data-v-10bd6c77>将类附加到节点的操作如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>    class nodeId1 className;</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div></div></div><p data-v-10bd6c77>也可以在一条语句中将一个类附加到节点列表：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>    class nodeId1,nodeId2 className;</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div></div></div><p data-v-10bd6c77>添加类的较短形式是使用 <code data-v-10bd6c77>:::</code> 操作符将类名附加到节点上，如下所示：</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A:::someclass --&gt; B</span>
<span class="line" data-v-10bd6c77>    classDef someclass fill:#f96</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-kqzwqvn" data-v-10bd6c77>            flowchart LR
    A:::someclass --&gt; B
    classDef someclass fill:#f96

          </pre></code><p data-v-10bd6c77>当声明节点间的多个链接时，可以使用这种形式：</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A:::foo &amp; B:::bar --&gt; C:::foobar</span>
<span class="line" data-v-10bd6c77>    classDef foo stroke:#f00</span>
<span class="line" data-v-10bd6c77>    classDef bar stroke:#0f0</span>
<span class="line" data-v-10bd6c77>    classDef foobar stroke:#00f</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-fjpn6wn" data-v-10bd6c77>            flowchart LR
    A:::foo &amp; B:::bar --&gt; C:::foobar
    classDef foo stroke:#f00
    classDef bar stroke:#0f0
    classDef foobar stroke:#00f

          </pre></code><h3 id="_1-14-2-使用css类" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-14-2-使用css类" data-v-10bd6c77><span data-v-10bd6c77>1.14.2 使用CSS类</span></a></h3><p data-v-10bd6c77>也可以在CSS样式中预定义类，这些类可以从图形定义中应用，如下例所示：</p><p data-v-10bd6c77><strong data-v-10bd6c77>例子的风格</strong></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>&lt;</span>style</span><span class="token punctuation" data-v-10bd6c77>&gt;</span></span><span class="token style" data-v-10bd6c77><span class="token language-css" data-v-10bd6c77></span>
<span class="line" data-v-10bd6c77>  <span class="token selector" data-v-10bd6c77>.cssClass &gt; rect</span> <span class="token punctuation" data-v-10bd6c77>{</span></span>
<span class="line" data-v-10bd6c77>    <span class="token property" data-v-10bd6c77>fill</span><span class="token punctuation" data-v-10bd6c77>:</span> #ff0000<span class="token punctuation" data-v-10bd6c77>;</span></span>
<span class="line" data-v-10bd6c77>    <span class="token property" data-v-10bd6c77>stroke</span><span class="token punctuation" data-v-10bd6c77>:</span> #ffff00<span class="token punctuation" data-v-10bd6c77>;</span></span>
<span class="line" data-v-10bd6c77>    <span class="token property" data-v-10bd6c77>stroke-width</span><span class="token punctuation" data-v-10bd6c77>:</span> 4px<span class="token punctuation" data-v-10bd6c77>;</span></span>
<span class="line" data-v-10bd6c77>  <span class="token punctuation" data-v-10bd6c77>}</span></span>
<span class="line" data-v-10bd6c77></span></span><span class="token tag" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>&lt;/</span>style</span><span class="token punctuation" data-v-10bd6c77>&gt;</span></span></span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><p data-v-10bd6c77><strong data-v-10bd6c77>示例定义</strong></p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A--&gt;B[AAA&lt;span&gt;BBB&lt;/span&gt;]</span>
<span class="line" data-v-10bd6c77>    B--&gt;D</span>
<span class="line" data-v-10bd6c77>    class A cssClass</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-45904zh" data-v-10bd6c77>            flowchart LR
    A--&gt;B[AAA<span data-v-10bd6c77>BBB</span>]
    B--&gt;D
    class A cssClass

          </pre></code><h3 id="_1-14-3-默认的类" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-14-3-默认的类" data-v-10bd6c77><span data-v-10bd6c77>1.14.3 默认的类</span></a></h3><p data-v-10bd6c77>如果一个类被命名为default，它将被分配给所有的类，而不需要特定的类定义。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>classDef default fill:#f9f,stroke:#333,stroke-width:4px;</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div></div></div><h2 id="_1-15-图标的支持" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-15-图标的支持" data-v-10bd6c77><span data-v-10bd6c77>1.15 图标的支持</span></a></h2><h3 id="_1-15-1-对fontawesome的基本支持" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-15-1-对fontawesome的基本支持" data-v-10bd6c77><span data-v-10bd6c77>1.15.1 对fontawesome的基本支持</span></a></h3><p data-v-10bd6c77>可以从fontaawesome添加图标。</p><p data-v-10bd6c77>通过语法fa:#图标类名#访问图标。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    B[&quot;fa:fa-twitter for peace&quot;]</span>
<span class="line" data-v-10bd6c77>    B--&gt;C[fa:fa-ban forbidden]</span>
<span class="line" data-v-10bd6c77>    B--&gt;D(fa:fa-spinner)</span>
<span class="line" data-v-10bd6c77>    B--&gt;E(A fa:fa-camera-retro perhaps?)</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-ygt98ik" data-v-10bd6c77>            flowchart TD
    B[&quot;fa:fa-twitter for peace&quot;]
    B--&gt;C[fa:fa-ban forbidden]
    B--&gt;D(fa:fa-spinner)
    B--&gt;E(A fa:fa-camera-retro perhaps?)

          </pre></code><p data-v-10bd6c77>mermaid支持字体Awesome，如果CSS包含在网站上。mermaid对可以使用的字体Awesome的版本没有任何限制。</p><p data-v-10bd6c77>请参考官方字体Awesome文档，了解如何将其包含在您的网站中。</p><p data-v-10bd6c77>在 <code data-v-10bd6c77>&lt;head&gt;</code> 中添加这个代码片段将增加对Font Awesome v6.5.1的支持</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token tag" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>&lt;</span>link</span></span>
<span class="line" data-v-10bd6c77>  <span class="token attr-name" data-v-10bd6c77>href</span><span class="token attr-value" data-v-10bd6c77><span class="token punctuation attr-equals" data-v-10bd6c77>=</span><span class="token punctuation" data-v-10bd6c77>&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css<span class="token punctuation" data-v-10bd6c77>&quot;</span></span></span>
<span class="line" data-v-10bd6c77>  <span class="token attr-name" data-v-10bd6c77>rel</span><span class="token attr-value" data-v-10bd6c77><span class="token punctuation attr-equals" data-v-10bd6c77>=</span><span class="token punctuation" data-v-10bd6c77>&quot;</span>stylesheet<span class="token punctuation" data-v-10bd6c77>&quot;</span></span></span>
<span class="line" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>/&gt;</span></span></span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><h3 id="_1-15-2-自定义图标" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-15-2-自定义图标" data-v-10bd6c77><span data-v-10bd6c77>1.15.2 自定义图标</span></a></h3><p data-v-10bd6c77>只要网站导入相应的工具包，就可以使用从字体Awesome服务的自定义图标。</p><p data-v-10bd6c77>请注意，这是目前从字体Awesome付费功能。</p><p data-v-10bd6c77>对于自定义图标，您需要使用 <code data-v-10bd6c77>fak</code> 前缀。</p><p data-v-10bd6c77><strong data-v-10bd6c77>例子</strong></p><div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    B[fa:fa-twitter] %% standard icon</span>
<span class="line" data-v-10bd6c77>    B--&gt;E(fak:fa-custom-icon-name) %% custom icon</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><p data-v-10bd6c77>并试图渲染它</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart TD</span>
<span class="line" data-v-10bd6c77>    B[&quot;fa:fa-twitter for peace&quot;]</span>
<span class="line" data-v-10bd6c77>    B--&gt;C[&quot;fab:fa-truck-bold a custom icon&quot;]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-2zbvhgj" data-v-10bd6c77>            flowchart TD
    B[&quot;fa:fa-twitter for peace&quot;]
    B--&gt;C[&quot;fab:fa-truck-bold a custom icon&quot;]

          </pre></code><h3 id="_1-15-3-注意点" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-15-3-注意点" data-v-10bd6c77><span data-v-10bd6c77>1.15.3 注意点</span></a></h3><blockquote data-v-10bd6c77><p data-v-10bd6c77>图形声明在顶点和链接之间带有空格，并且没有分号</p></blockquote><ul data-v-10bd6c77><li data-v-10bd6c77><p data-v-10bd6c77>在图形声明中，语句现在也可以不使用分号结束。在0.2.16版本之后，以分号结束图形语句是可选的。所以下面的图声明和旧的图声明一样有效。</p></li><li data-v-10bd6c77><p data-v-10bd6c77>在顶点和链接之间只允许有一个空格。但是，顶点和它的文本之间以及链接和它的文本之间不应该有任何空格。旧的图形声明语法也可以工作，因此这个新特性是可选的，是为了提高可读性而引入的。</p></li></ul><p data-v-10bd6c77>下面是新的图边声明，它与旧的图边声明一起有效。</p><ul data-v-10bd6c77><li data-v-10bd6c77>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>flowchart LR</span>
<span class="line" data-v-10bd6c77>    A[Hard edge] --&gt;|Link text| B(Round edge)</span>
<span class="line" data-v-10bd6c77>    B --&gt; C{Decision}</span>
<span class="line" data-v-10bd6c77>    C --&gt;|One| D[Result one]</span>
<span class="line" data-v-10bd6c77>    C --&gt;|Two| E[Result two]</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div><ul data-v-10bd6c77><li data-v-10bd6c77>展示图</li></ul><code data-v-10bd6c77><pre class="mermaid" id="mermaid-bohol0p" data-v-10bd6c77>            flowchart LR
    A[Hard edge] --&gt;|Link text| B(Round edge)
    B --&gt; C{Decision}
    C --&gt;|One| D[Result one]
    C --&gt;|Two| E[Result two]

          </pre></code><h2 id="_1-16-配置" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-16-配置" data-v-10bd6c77><span data-v-10bd6c77>1.16 配置</span></a></h2><h3 id="_1-16-1-渲染器" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-16-1-渲染器" data-v-10bd6c77><span data-v-10bd6c77>1.16.1 渲染器</span></a></h3><p data-v-10bd6c77>图的布局是用渲染器完成的。默认的渲染器是dagre。</p><p data-v-10bd6c77>从9.4版<code data-v-10bd6c77>Mermaid</code>开始，您可以使用名为elk的替代渲染器。elk渲染器更适合大型和/或更复杂的图表。</p><p data-v-10bd6c77>麋鹿渲染器是一个实验性的功能。你可以通过添加这个指令将渲染器改为elk：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>%%{init: {&quot;flowchart&quot;: {&quot;defaultRenderer&quot;: &quot;elk&quot;}} }%%</span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div></div></div><blockquote data-v-10bd6c77><p data-v-10bd6c77>请注意，该站点需要使用<code data-v-10bd6c77>mermaid</code>9.4版本才能正常工作，并在延迟加载配置中启用此功能。</p></blockquote><h3 id="_1-16-3-宽度" tabindex="-1" data-v-10bd6c77><a class="header-anchor" href="#_1-16-3-宽度" data-v-10bd6c77><span data-v-10bd6c77>1.16.3 宽度</span></a></h3><p data-v-10bd6c77>可以调整渲染流程图的宽度。</p><p data-v-10bd6c77>这是通过定义<code data-v-10bd6c77>mermaid</code>来实现的。<code data-v-10bd6c77>flowchartConfig</code>或通过CLI使用JSON文件进行配置。CLI的使用方法请参见<code data-v-10bd6c77>mermaidCLI</code>界面。美人鱼。<code data-v-10bd6c77>flowchartConfig</code>可以设置为带有配置参数的JSON字符串或相应的对象。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-v-10bd6c77><pre data-v-10bd6c77><code data-v-10bd6c77><span class="line" data-v-10bd6c77>mermaid<span class="token punctuation" data-v-10bd6c77>.</span>flowchartConfig <span class="token operator" data-v-10bd6c77>=</span> <span class="token punctuation" data-v-10bd6c77>{</span></span>
<span class="line" data-v-10bd6c77>    <span class="token literal-property property" data-v-10bd6c77>width</span><span class="token operator" data-v-10bd6c77>:</span> <span class="token number" data-v-10bd6c77>100</span><span class="token operator" data-v-10bd6c77>%</span></span>
<span class="line" data-v-10bd6c77><span class="token punctuation" data-v-10bd6c77>}</span></span>
<span class="line" data-v-10bd6c77></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;" data-v-10bd6c77><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div><div class="line-number" data-v-10bd6c77></div></div></div>`,604))])}const o=c(v,[["render",r],["__scopeId","data-v-10bd6c77"]]),u=JSON.parse('{"path":"/other/other/mermaid/02.html","title":"一、流程图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752492235000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":2,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"b0cc6264a63399d60f5e0bc0f5857c63f4477b3c","time":1752492235000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年07月2"},{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/02.md"}');export{o as comp,u as data};
