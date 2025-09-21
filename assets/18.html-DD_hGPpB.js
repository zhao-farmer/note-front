import{aq as s,ar as n,as as a,at as l}from"./app-Cok9BT0p.js";const i={};function d(t,e){return l(),n("div",null,e[0]||(e[0]=[a(`<h1 id="十七、框图文档" tabindex="-1"><a class="header-anchor" href="#十七、框图文档"><span>十七、框图文档</span></a></h1><h2 id="_17-1-框图简介" tabindex="-1"><a class="header-anchor" href="#_17-1-框图简介"><span>17.1 框图简介</span></a></h2><h3 id="_17-1-1-小示例" tabindex="-1"><a class="header-anchor" href="#_17-1-1-小示例"><span>17.1.1 小示例</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">columns 1</span>
<span class="line">  db((&quot;DB&quot;))</span>
<span class="line">  blockArrowId6&lt;[&quot;&amp;nbsp;&amp;nbsp;&amp;nbsp;&quot;]&gt;(down)</span>
<span class="line">  block:ID</span>
<span class="line">    A</span>
<span class="line">    B[&quot;A wide one in the middle&quot;]</span>
<span class="line">    C</span>
<span class="line">  end</span>
<span class="line">  space</span>
<span class="line">  D</span>
<span class="line">  ID --&gt; D</span>
<span class="line">  C --&gt; D</span>
<span class="line">  style B fill:#969,stroke:#333,stroke-width:4px</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-a5qho5h">            block-beta
columns 1
  db((&quot;DB&quot;))
  blockArrowId6&lt;[&quot;   &quot;]&gt;(down)
  block:ID
    A
    B[&quot;A wide one in the middle&quot;]
    C
  end
  space
  D
  ID --&gt; D
  C --&gt; D
  style B fill:#969,stroke:#333,stroke-width:4px

          </pre></code><h3 id="_17-1-2-定义及目的" tabindex="-1"><a class="header-anchor" href="#_17-1-2-定义及目的"><span>17.1.2 定义及目的</span></a></h3><p>框图是一种直观而有效的方式，可以直观地表示复杂的系统、过程或体系结构。它们由块和连接器组成，其中块表示基本组件或功能，连接器表示这些组件之间的关系或流程。这种绘制图的方法在工程、软件开发和过程管理等各个领域都是必不可少的。</p><p>框图的主要目的是提供系统的高级视图，允许轻松理解和分析，而无需深入研究每个组件的复杂细节。这使得它们对于简化复杂系统和解释系统内组件的整体结构和交互特别有用。</p><p>许多人使用mermaid流程图来达到这个目的。这样做的一个副作用是，自动布局有时会将形状移动到图表制作者不想要的位置。框图使用不同的方法。在这张图中，我们让作者完全控制形状的位置。</p><h3 id="_17-1-3-通用用例" tabindex="-1"><a class="header-anchor" href="#_17-1-3-通用用例"><span>17.1.3 通用用例</span></a></h3><p>框图在不同的行业和学科中有着广泛的应用。一些关键用例包括：</p><ul><li><p>软件体系结构：在软件开发中，框图可以用来说明软件应用程序的体系结构。这包括展示不同模块或服务如何交互、数据流和高级组件交互。</p></li><li><p>网络图：框图是表示IT和电信网络架构的理想选择。它们可以描述不同的网络设备和服务是如何相互连接的，包括路由器、交换机、防火墙和跨网络的数据流。</p></li><li><p>过程流程图：在商业和制造业中，可以使用方框图来创建过程流程图。这些流程图表示业务或制造过程的各个阶段，有助于将步骤序列、决策点和控制流可视化。</p></li><li><p>电气系统：工程师使用框图来表示电气系统和电路。它们可以说明电气系统的高层结构、不同电气元件之间的相互作用以及电流的流动。</p></li><li><p>教育用途：在教育材料中也广泛使用框图，以简化的方式解释复杂的概念和系统。它们有助于分解和可视化科学理论、工程原理和技术系统。</p></li></ul><p>这些例子展示了框图在提供复杂系统的清晰和简洁表示方面的多功能性。它们的简单和清晰使它们成为不同领域的专业人士有效沟通复杂想法的宝贵工具。</p><p>在下面的部分中，我们将深入研究使用Mermaid创建和操作框图的细节，涵盖从基本语法到高级配置和样式的所有内容。</p><p>创建框图与mermaid是直接和可访问的。本节介绍开始构建简单图所需的基本语法和结构。理解这些基本概念是有效利用Mermaid完成更复杂的绘图任务的关键。</p><h2 id="_17-2-框图基础" tabindex="-1"><a class="header-anchor" href="#_17-2-框图基础"><span>17.2 框图基础</span></a></h2><h3 id="_17-2-1-简单框图" tabindex="-1"><a class="header-anchor" href="#_17-2-1-简单框图"><span>17.2.1 简单框图</span></a></h3><p><strong>基本结构</strong></p><p>框图的核心是由表示不同实体或组件的块组成。在Mermaid中，可以使用简单的文本标签轻松创建这些块。框图的最基本形式可以是一系列没有任何连接器的块。</p><p>示例—简单框图：创建一个简单的框图，其中包含三个标记为“a”，“b”和“c”的块，语法如下：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  a b c</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-d40gc96">            block-beta
  a b c

          </pre></code><p>这个示例将生成三个块的水平序列。每个块自动间隔和对齐，以获得最佳的可读性。</p><h3 id="_17-2-2-定义要使用的列的数量" tabindex="-1"><a class="header-anchor" href="#_17-2-2-定义要使用的列的数量"><span>17.2.2 定义要使用的列的数量</span></a></h3><p><strong>列的使用</strong></p><p>简单的框图是线性和直接的，而更复杂的系统可能需要结构化的布局。Mermaid允许将块组织成多个列，方便创建更复杂和详细的图表。</p><p>—多列图：当需要将数据块分布在多个列中时，可以指定数据块的列数，并根据列数对数据块进行排列。下面是如何创建一个包含三列和四个块的框图，其中第四个块出现在第二行：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  columns 3</span>
<span class="line">  a b c d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-ku1y2qt">            block-beta
  columns 3
  a b c d

          </pre></code><p>该语法指示Mermaid将‘a’、‘b’、‘c’和‘d’块排列在三列中，并根据需要换行到下一行。此特性对于表示分层或多层系统（如网络层或分层结构）特别有用。</p><p>mermaid方框图的这些基本构建块为更复杂的图表提供了基础。语法的简单性允许快速创建和迭代图表，使其成为可视化想法和概念的有效工具。在下一节中，我们将探索高级块配置选项，包括设置块宽度和创建复合块。</p><h2 id="_17-3-高级块配置" tabindex="-1"><a class="header-anchor" href="#_17-3-高级块配置"><span>17.3 高级块配置</span></a></h2><p>在基础知识的基础上，本节将深入研究mermaid中更高级的框图功能。这些特性允许在图设计中具有更大的灵活性和复杂性，适应更广泛的用例和场景。</p><h3 id="_17-3-1-设置块宽度" tabindex="-1"><a class="header-anchor" href="#_17-3-1-设置块宽度"><span>17.3.1 设置块宽度</span></a></h3><p><strong>跨越多列</strong></p><p>在更复杂的关系图中，您可能需要跨越多个列的块来强调某些组件或表示更大的实体。Mermaid允许调整块宽度以覆盖多个列，从而增强图表的可读性和结构。</p><p>示例-块跨越多列：要创建一个块跨越两列的框图，您可以为每个块指定所需的宽度：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  columns 3</span>
<span class="line">  a[&quot;A label&quot;] b:2 c:2 d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-skcudoi">            block-beta
  columns 3
  a[&quot;A label&quot;] b:2 c:2 d

          </pre></code><p>在本例中，标记为“A labels”的块跨越了一列，而标记为“b”、“c”的块跨越了2列，而“d”又被分配了自己的列。这种块大小的灵活性对于准确地表示具有不同重要性或大小的组件的系统至关重要。</p><h3 id="_17-3-2-创建复合块" tabindex="-1"><a class="header-anchor" href="#_17-3-2-创建复合块"><span>17.3.2 创建复合块</span></a></h3><p><strong>嵌套块</strong></p><p>复合块，或块中的块，是Mermaid的框图语法中的高级特性。它们支持嵌套或分层系统的表示，其中一个组件包含多个子组件。</p><p>示例-复合块：创建一个复合块包括定义父块，然后在其中嵌套其他块。下面是如何定义一个嵌套元素的复合块：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">    block</span>
<span class="line">      D</span>
<span class="line">    end</span>
<span class="line">    A[&quot;A: I am a wide one&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-r3q0rle">            block-beta
    block
      D
    end
    A[&quot;A: I am a wide one&quot;]

          </pre></code><p>在这个语法中，‘D’是一个嵌套块在一个更大的父块中。此特性对于描述复杂结构特别有用，例如具有多个服务的服务器或较大组织框架中的部门。</p><h3 id="_17-3-3-列宽度动态" tabindex="-1"><a class="header-anchor" href="#_17-3-3-列宽度动态"><span>17.3.3 列宽度动态</span></a></h3><p><strong>调整宽度</strong></p><p>Mermaid还允许根据块的内容动态调整列的宽度。列的宽度由列中最宽的块决定，确保图表保持平衡和可读。</p><p>示例-动态列宽度：在具有不同块大小的图表中，Mermaid自动调整列宽度以适应每列中最大的块。这里有一个例子：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  columns 3</span>
<span class="line">  a:3</span>
<span class="line">  block:group1:2</span>
<span class="line">    columns 2</span>
<span class="line">    h i j k</span>
<span class="line">  end</span>
<span class="line">  g</span>
<span class="line">  block:group2:3</span>
<span class="line">    %% columns auto (default)</span>
<span class="line">    l m n o p q r</span>
<span class="line">  end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-8ewqt4s">            block-beta
  columns 3
  a:3
  block:group1:2
    columns 2
    h i j k
  end
  g
  block:group2:3
    %% columns auto (default)
    l m n o p q r
  end

          </pre></code><p>这个例子演示了Mermaid如何动态调整列的宽度，以适应最宽的块，在本例中是“a”和复合块“e”。这种动态调整对于创建视觉平衡和易于理解的图表是必不可少的。</p><p>水平合并块：当需要水平堆叠块时，可以使用列宽度来完成。块可以通过将它们放在一个列中来垂直排列。下面是如何创建一个框图，其中4个块堆叠在彼此的顶部：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  block</span>
<span class="line">    columns 1</span>
<span class="line">    a[&quot;A label&quot;] b c d</span>
<span class="line">  end</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-mkrn48f">            block-beta
  block
    columns 1
    a[&quot;A label&quot;] b c d
  end

          </pre></code><p>在本例中，合并块的宽度会根据最大子块的宽度动态调整。</p><p>有了这些先进的配置选项，Mermaid的框图可以定制，以表示广泛的复杂系统和结构。这些特性提供的灵活性使用户能够创建既具有信息量又具有视觉吸引力的图表。在接下来的部分中，我们将探讨更多的功能，包括不同的块形状和链接选项。</p><h2 id="_17-4-砌块的种类和形状" tabindex="-1"><a class="header-anchor" href="#_17-4-砌块的种类和形状"><span>17.4 砌块的种类和形状</span></a></h2><p>mermaid的方框图并不局限于标准的矩形。有多种块形状可用，允许对不同类型的信息或实体进行更细致和定制的表示。本节概述了可以在Mermaid中使用的不同块形状及其特定应用程序。</p><h3 id="_17-4-1-标准和特殊块形状" tabindex="-1"><a class="header-anchor" href="#_17-4-1-标准和特殊块形状"><span>17.4.1 标准和特殊块形状</span></a></h3><p>Mermaid支持一系列的块形状，以满足不同的绘图需求，从基本的几何形状到更专业的形式。</p><ol><li>示例-圆边块</li></ol><p>创建一个圆边的块，它可以用来代表一个更柔软或更灵活的组件：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">    id1(&quot;This is the text in the box&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-6l6w91v">            block-beta
    id1(&quot;This is the text in the box&quot;)

          </pre></code><ol start="2"><li>示例-体育场形状的块</li></ol><p>体育场形状的块，类似于一个细长的圆圈，可用于面向过程的组件：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">    id1([&quot;This is the text in the box&quot;])</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-9ikaan9">            block-beta
    id1([&quot;This is the text in the box&quot;])

          </pre></code><ol start="3"><li>示例-子程序形状</li></ol><p>对于表示子程序或包含的进程，带有双竖线的块是有用的：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">    id1[[&quot;This is the text in the box&quot;]]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-ll494km">            block-beta
    id1[[&quot;This is the text in the box&quot;]]

          </pre></code><ol start="4"><li>示例-圆柱形</li></ol><p>圆柱形是表示数据库或存储组件的理想选择：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">    id1[(&quot;Database&quot;)]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-m8wtd9e">            block-beta
    id1[(&quot;Database&quot;)]

          </pre></code><p>Database</p><ol start="5"><li>示例-圆形</li></ol><p>圆圈可用于集中的或关键的部件：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">    id1((&quot;This is the text in the circle&quot;))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-9blkt5k">            block-beta
    id1((&quot;This is the text in the circle&quot;))

          </pre></code><ol start="6"><li>示例-非对称、菱形和六边形</li></ol><p>对于决策点，使用菱形，对于独特或专门的过程，可以使用不对称形状和六边形：</p><p><strong>不对称</strong></p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  id1&gt;&quot;This is the text in the box&quot;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-b6anynq">            block-beta
  id1&gt;&quot;This is the text in the box&quot;]

          </pre></code><p><strong>菱形</strong></p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">    id1{&quot;This is the text in the box&quot;}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-hd3yflk">            block-beta
    id1{&quot;This is the text in the box&quot;}

          </pre></code><p><strong>六角</strong></p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">    id1{{&quot;This is the text in the box&quot;}}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-1jflh6w">            block-beta
    id1This is the text in the box

          </pre></code><ol start="7"><li>示例-平行四边形和梯形</li></ol><p>平行四边形和梯形非常适合输入/输出和过渡过程：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  id1[/&quot;This is the text in the box&quot;/]</span>
<span class="line">  id2[\\&quot;This is the text in the box&quot;\\]</span>
<span class="line">  A[/&quot;Christmas&quot;\\]</span>
<span class="line">  B[\\&quot;Go shopping&quot;/]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-rhsajca">            block-beta
  id1[/&quot;This is the text in the box&quot;/]
  id2[\\&quot;This is the text in the box&quot;\\]
  A[/&quot;Christmas&quot;\\]
  B[\\&quot;Go shopping&quot;/]

          </pre></code><ol start="8"><li>示例—双环</li></ol><p>为了突出显示关键或高优先级的组件，双圈可以有效：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">    id1(((&quot;This is the text in the circle&quot;)))</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-89zs6cv">            block-beta
    id1(((&quot;This is the text in the circle&quot;)))

          </pre></code><h3 id="_17-4-2-块箭头和空间块" tabindex="-1"><a class="header-anchor" href="#_17-4-2-块箭头和空间块"><span>17.4.2 块箭头和空间块</span></a></h3><p>mermaid还提供了独特的形状，如块箭头和空间块，用于定向流动和间距。</p><ol><li>示例-块箭头</li></ol><p>块状箭头可以直观地指示过程中的方向或流程：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  blockArrowId&lt;[&quot;Label&quot;]&gt;(right)</span>
<span class="line">  blockArrowId2&lt;[&quot;Label&quot;]&gt;(left)</span>
<span class="line">  blockArrowId3&lt;[&quot;Label&quot;]&gt;(up)</span>
<span class="line">  blockArrowId4&lt;[&quot;Label&quot;]&gt;(down)</span>
<span class="line">  blockArrowId5&lt;[&quot;Label&quot;]&gt;(x)</span>
<span class="line">  blockArrowId6&lt;[&quot;Label&quot;]&gt;(y)</span>
<span class="line">  blockArrowId6&lt;[&quot;Label&quot;]&gt;(x, down)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-twkqapf">            block-beta
  blockArrowId&lt;[&quot;Label&quot;]&gt;(right)
  blockArrowId2&lt;[&quot;Label&quot;]&gt;(left)
  blockArrowId3&lt;[&quot;Label&quot;]&gt;(up)
  blockArrowId4&lt;[&quot;Label&quot;]&gt;(down)
  blockArrowId5&lt;[&quot;Label&quot;]&gt;(x)
  blockArrowId6&lt;[&quot;Label&quot;]&gt;(y)
  blockArrowId6&lt;[&quot;Label&quot;]&gt;(x, down)

          </pre></code><ol start="2"><li>示例-空格块</li></ol><p>空格块可以用来在图表中创建有意的空白空间，这对布局和可读性很有用：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  columns 3</span>
<span class="line">  a space b</span>
<span class="line">  c   d   e</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-6csplbq">            block-beta
  columns 3
  a space b
  c   d   e

          </pre></code><hr><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  ida space:3 idb idc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-gm3hrmz">            block-beta
  ida space:3 idb idc

          </pre></code><p>注意，您可以使用数字表示法 <code>space:num</code> 设置空格块占用的列数，其中num是表示num列宽度的数字。您还可以使用 <code>space</code> ，默认为一列。</p><p>mermaid中的各种形状和特殊块增强了框图的表现力，允许更准确和特定于上下文的表示。这些选项使用户能够灵活地创建信息丰富且视觉上吸引人的图表。在接下来的部分中，我们将探讨连接这些块并自定义其外观的方法。</p><h3 id="_17-4-3-标准和特殊块形状" tabindex="-1"><a class="header-anchor" href="#_17-4-3-标准和特殊块形状"><span>17.4.3 标准和特殊块形状</span></a></h3><p>讨论可用于块的各种形状，包括标准形状和特殊形式，如块箭头和空格块。</p><h2 id="_17-5-带边连接块" tabindex="-1"><a class="header-anchor" href="#_17-5-带边连接块"><span>17.5 带边连接块</span></a></h2><p>在Mermaid中，框图的关键特性之一是使用各种类型的边或链接连接块的能力。本节探讨块之间相互连接的不同方式，以表示组件之间的关系和流。</p><h3 id="_17-5-1-基本链接和箭头类型" tabindex="-1"><a class="header-anchor" href="#_17-5-1-基本链接和箭头类型"><span>17.5.1 基本链接和箭头类型</span></a></h3><p>连接块的最基本方面是使用箭头或链接。这些连接器描述了块之间的关系或信息流。Mermaid提供了一系列箭头类型，以满足不同的绘图需求。</p><p><strong>示例—基本链接</strong></p><p>可以创建一个带箭头的简单链接来显示从一个块到另一个块的方向或流程：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  A space B</span>
<span class="line">  A--&gt;B</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-oam2ful">            block-beta
  A space B
  A--&gt;B

          </pre></code><p>这个例子用一个简单的箭头说明了从a块到B块的直接连接。</p><p>这种语法创建了一条连接‘ a ’和‘B’的线，暗示了一种关系或连接，而不指示特定的方向。</p><h3 id="_17-5-2-链接上的文字" tabindex="-1"><a class="header-anchor" href="#_17-5-2-链接上的文字"><span>17.5.2 链接上的文字</span></a></h3><p>除了连接块之外，通常还需要描述或标记关系。Mermaid允许在链接上包含文本，为连接提供上下文。</p><p>示例-带链接的文本要将文本添加到链接中，语法包括链接定义中的文本：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  A space:2 B</span>
<span class="line">  A-- &quot;X&quot; --&gt;B</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-0qdqqk6">            block-beta
  A space:2 B
  A-- &quot;X&quot; --&gt;B

          </pre></code><p>此示例展示了如何向链接添加描述性文本，从而增强图表所传达的信息。</p><p>示例-边缘和样式：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">columns 1</span>
<span class="line">  db((&quot;DB&quot;))</span>
<span class="line">  blockArrowId6&lt;[&quot;&amp;nbsp;&amp;nbsp;&amp;nbsp;&quot;]&gt;(down)</span>
<span class="line">  block:ID</span>
<span class="line">    A</span>
<span class="line">    B[&quot;A wide one in the middle&quot;]</span>
<span class="line">    C</span>
<span class="line">  end</span>
<span class="line">  space</span>
<span class="line">  D</span>
<span class="line">  ID --&gt; D</span>
<span class="line">  C --&gt; D</span>
<span class="line">  style B fill:#939,stroke:#333,stroke-width:4px</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-wbxeltc">            block-beta
columns 1
  db((&quot;DB&quot;))
  blockArrowId6&lt;[&quot;   &quot;]&gt;(down)
  block:ID
    A
    B[&quot;A wide one in the middle&quot;]
    C
  end
  space
  D
  ID --&gt; D
  C --&gt; D
  style B fill:#939,stroke:#333,stroke-width:4px

          </pre></code><h2 id="_17-6-样式和定制" tabindex="-1"><a class="header-anchor" href="#_17-6-样式和定制"><span>17.6 样式和定制</span></a></h2><p>除了结构和布局的框图，mermaid提供了广泛的样式选择。这些自定义特性允许创建更具视觉特色和信息丰富的图表。本节介绍如何将单个样式应用到块中，以及如何在多个元素之间使用类来实现一致的样式。</p><h3 id="_17-6-1-单个块样式" tabindex="-1"><a class="header-anchor" href="#_17-6-1-单个块样式"><span>17.6.1 单个块样式</span></a></h3><p>Mermaid支持对单个块进行详细的样式化，允许您应用各种CSS属性，如颜色、描边和边框厚度。此功能在突出显示图表的特定部分或坚持某些视觉主题时特别有用。</p><ol><li>示例-单个块的样式化</li></ol><p>要将自定义样式应用到块中，你可以使用 <code>style</code> 关键字，后跟块标识符和所需的CSS属性：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  id1 space id2</span>
<span class="line">  id1(&quot;Start&quot;)--&gt;id2(&quot;Stop&quot;)</span>
<span class="line">  style id1 fill:#636,stroke:#333,stroke-width:4px</span>
<span class="line">  style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-6phnr7b">            block-beta
  id1 space id2
  id1(&quot;Start&quot;)--&gt;id2(&quot;Stop&quot;)
  style id1 fill:#636,stroke:#333,stroke-width:4px
  style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

          </pre></code><p>在这个例子中，一个名为“blue”的类被定义并应用于块“a”，而块“B”则接受单独的样式。这展示了Mermaid在同一图表中应用共享样式和独特样式的灵活性。</p><p>单独或通过类设置块样式的能力为增强块图的视觉效果和清晰度提供了一个强大的工具。无论是强调某些元素，还是在图中维护内聚设计，这些样式化功能都是有效绘制图的核心。下一节将介绍实际示例和用例，然后是故障排除常见问题的提示。</p><h2 id="_17-7-实际示例和用例" tabindex="-1"><a class="header-anchor" href="#_17-7-实际示例和用例"><span>17.7 实际示例和用例</span></a></h2><p>mermaid的方框图的多功能性在应用于现实世界场景时变得明显。本节提供实际示例，演示前几节中讨论的各种特性的应用。这些示例展示了如何使用框图以可访问和信息丰富的方式表示复杂的系统和过程。</p><h3 id="_17-7-1-详细的例子说明各种功能" tabindex="-1"><a class="header-anchor" href="#_17-7-1-详细的例子说明各种功能"><span>17.7.1 详细的例子说明各种功能</span></a></h3><p>结合结构、链接和样式的元素，我们可以创建在不同上下文中服务于特定目的的综合图。</p><ol><li>示例—系统架构</li></ol><p>举例说明一个简单的软件系统架构与相互连接的组件：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  columns 3</span>
<span class="line">  Frontend blockArrowId6&lt;[&quot; &quot;]&gt;(right) Backend</span>
<span class="line">  space:2 down&lt;[&quot; &quot;]&gt;(down)</span>
<span class="line">  Disk left&lt;[&quot; &quot;]&gt;(left) Database[(&quot;Database&quot;)]</span>
<span class="line"></span>
<span class="line">  classDef front fill:#696,stroke:#333;</span>
<span class="line">  classDef back fill:#969,stroke:#333;</span>
<span class="line">  class Frontend front</span>
<span class="line">  class Backend,Database back</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-0xzn8su">            block-beta
  columns 3
  Frontend blockArrowId6&lt;[&quot; &quot;]&gt;(right) Backend
  space:2 down&lt;[&quot; &quot;]&gt;(down)
  Disk left&lt;[&quot; &quot;]&gt;(left) Database[(&quot;Database&quot;)]

  classDef front fill:#696,stroke:#333;
  classDef back fill:#969,stroke:#333;
  class Frontend front
  class Backend,Database back

          </pre></code><p>这个例子展示了一个基本的体系结构，包括前端、后端和数据库。这些块的样式是为了区分不同类型的组件。</p><ol start="2"><li>示例—业务流程流</li></ol><p>表示具有决策点和多个阶段的业务流程流：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  columns 3</span>
<span class="line">  Start((&quot;Start&quot;)) space:2</span>
<span class="line">  down&lt;[&quot; &quot;]&gt;(down) space:2</span>
<span class="line">  Decision{{&quot;Make Decision&quot;}} right&lt;[&quot;Yes&quot;]&gt;(right) Process1[&quot;Process A&quot;]</span>
<span class="line">  downAgain&lt;[&quot;No&quot;]&gt;(down) space r3&lt;[&quot;Done&quot;]&gt;(down)</span>
<span class="line">  Process2[&quot;Process B&quot;] r2&lt;[&quot;Done&quot;]&gt;(right) End((&quot;End&quot;))</span>
<span class="line"></span>
<span class="line">  style Start fill:#969;</span>
<span class="line">  style End fill:#696;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-qar2lwg">            block-beta
  columns 3
  Start((&quot;Start&quot;)) space:2
  down&lt;[&quot; &quot;]&gt;(down) space:2
  DecisionMake Decision right&lt;[&quot;Yes&quot;]&gt;(right) Process1[&quot;Process A&quot;]
  downAgain&lt;[&quot;No&quot;]&gt;(down) space r3&lt;[&quot;Done&quot;]&gt;(down)
  Process2[&quot;Process B&quot;] r2&lt;[&quot;Done&quot;]&gt;(right) End((&quot;End&quot;))

  style Start fill:#969;
  style End fill:#696;

          </pre></code><p>这些实际的例子和场景强调了Mermaid方框图在简化和有效地跨不同领域交流复杂信息方面的实用性。</p><p>下一节“故障排除和常见问题”将提供解决使用Mermaid方框图时遇到的常见挑战的见解，以确保顺利的绘图体验。</p><h2 id="_17-8-故障处理和常见问题" tabindex="-1"><a class="header-anchor" href="#_17-8-故障处理和常见问题"><span>17.8 故障处理和常见问题</span></a></h2><p>使用Mermaid框图有时会带来挑战，特别是当图的复杂性增加时。本节旨在提供解决常见问题的指导，并提供管理更复杂的图结构的技巧。</p><h3 id="_17-8-1-常见语法错误" tabindex="-1"><a class="header-anchor" href="#_17-8-1-常见语法错误"><span>17.8.1 常见语法错误</span></a></h3><p>理解和避免常见的语法错误是顺利使用Mermaid图的关键。</p><ol><li>示例—错误链接</li></ol><p>一个常见的错误是不正确的链接语法，这可能导致意想不到的结果或损坏的图：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  A - B</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>更正：确保用箭头（——&gt;或——）正确指定块之间的链接，以定义连接的方向和类型。还要记住，框图的一个基本原则是让作者完全控制方框的位置，所以在这个例子中，你需要在方框之间添加一个空格：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  A space B</span>
<span class="line">  A --&gt; B</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-lfnldoo">            block-beta
  A space B
  A --&gt; B

          </pre></code><ol start="2"><li>示例-错位的样式</li></ol><p>在错误的上下文中应用样式或使用不正确的语法会导致块没有按照预期样式化：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">  block-beta</span>
<span class="line">    A</span>
<span class="line">    style A fill#969;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-nksaljc">              block-beta
    A
    style A fill#969;

          </pre></code><p>纠正：通过确保样式属性与逗号的正确分离，并使用正确的CSS属性格式来纠正语法：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">block-beta</span>
<span class="line">  A</span>
<span class="line">  style A fill:#969,stroke:#333;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-kby6ujv">            block-beta
  A
  style A fill:#969,stroke:#333;

          </pre></code><h3 id="_17-8-2-复杂图表结构的技巧" tabindex="-1"><a class="header-anchor" href="#_17-8-2-复杂图表结构的技巧"><span>17.8.2 复杂图表结构的技巧</span></a></h3><p>管理Mermaid图中的复杂性包括计划和采用最佳实践。</p><ol><li>模块化设计</li></ol><p>将复杂的关系图分解成更小、更易于管理的组件。这种方法不仅使图更容易理解，而且还简化了创建和维护过程。</p><ol start="2"><li>一致的风格</li></ol><p>使用类在相似的元素之间保持一致的样式。这不仅节省了时间，还保证了一个有凝聚力和专业的外观。</p><ol start="3"><li>注释和文档</li></ol><p>在Mermaid语法中使用带有 <code>%%</code> 的注释来记录图中各个部分的目的。这种做法对于保持清晰度是无价的，特别是在团队中工作或在一段时间后返回图时。</p><p>通过这些故障排除技巧和最佳实践，您可以有效地管理和解决Mermaid框图中的常见问题。最后一部分“结论”将总结本文档所涵盖的关键点，并邀请用户反馈以进行持续改进。</p>`,248)]))}const c=s(i,[["render",d]]),p=JSON.parse('{"path":"/other/other/mermaid/18.html","title":"十七、框图文档","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/18.md"}');export{c as comp,p as data};
