<template><div><h1 id="九、要求图" tabindex="-1"><a class="header-anchor" href="#九、要求图"><span>九、要求图</span></a></h1>
<blockquote>
<p>需求图为需求及其相互之间和其他文档化元素之间的联系提供了可视化。建模规范遵循SysML v1.6定义的规范。</p>
</blockquote>
<h2 id="_9-1-基础使用" tabindex="-1"><a class="header-anchor" href="#_9-1-基础使用"><span>9.1 基础使用</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">requirementDiagram</span>
<span class="line"></span>
<span class="line">    requirement test_req {</span>
<span class="line">      id: 1</span>
<span class="line">      text: the test text.</span>
<span class="line">      risk: high</span>
<span class="line">      verifymethod: test</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    element test_entity {</span>
<span class="line">      type: simulation</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    test_entity - satisfies -> test_req</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-t75ewqw">
            requirementDiagram

    requirement test_req {
      id: 1
      text: the test text.
      risk: high
      verifymethod: test
    }

    element test_entity {
      type: simulation
    }

    test_entity - satisfies -> test_req

          </pre>
        <h2 id="_9-2-语法" tabindex="-1"><a class="header-anchor" href="#_9-2-语法"><span>9.2 语法</span></a></h2>
<p>需求图有三种类型的组件：需求、元素和关系。</p>
<p>定义它们的语法定义如下。尖括号中表示的单词，如 <code v-pre>&lt;word&gt;</code> ，是枚举关键字，具有表中阐述的选项。 <code v-pre>user_defined_...</code> 用于任何需要用户输入的地方。</p>
<p>关于用户文本的一个重要注意事项：所有输入都可以用引号括起来，也可以不用。例如， <code v-pre>Id: &quot;here is an example&quot;</code> 和 <code v-pre>Id: here is an example</code> 都有效。但是，用户必须小心未加引号的输入。如果检测到另一个关键字，解析器将失败。</p>
<h3 id="_9-2-1-requirement-要求" tabindex="-1"><a class="header-anchor" href="#_9-2-1-requirement-要求"><span>9.2.1 requirement (要求)</span></a></h3>
<p>需求定义包含需求类型、名称、id、文本、风险和验证方法。语法如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">&lt;type> user_defined_name {</span>
<span class="line">    id: user_defined_id</span>
<span class="line">    text: user_defined text</span>
<span class="line">    risk: &lt;risk></span>
<span class="line">    verifymethod: &lt;method></span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型、风险和方法是SysML中定义的枚举。</p>
<table>
<thead>
<tr>
<th>关键字</th>
<th>选项</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>requirement, functionalRequirement, interfaceRequirement, performanceRequirement, physicalRequirement, designConstraint</td>
</tr>
<tr>
<td>Risk</td>
<td>Low, Medium, High</td>
</tr>
<tr>
<td>VerificationMethod</td>
<td>Analysis, Inspection, Test, Demonstration</td>
</tr>
</tbody>
</table>
<h3 id="_9-2-2-elment-元素" tabindex="-1"><a class="header-anchor" href="#_9-2-2-elment-元素"><span>9.2.2 elment (元素)</span></a></h3>
<p>元素定义包含元素名称、类型和文档引用。这三个都是用户定义的。元素特性的目的是轻量级的，但允许将需求连接到其他文档的部分。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">element user_defined_name {</span>
<span class="line">    type: user_defined_type</span>
<span class="line">    docref: user_defined_ref</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-3-markdown格式化" tabindex="-1"><a class="header-anchor" href="#_9-2-3-markdown格式化"><span>9.2.3 markdown格式化</span></a></h3>
<p>在可能使用用户定义文本的地方（如名称、需求文本、元素文档等），你可以：</p>
<ul>
<li>将文本用引号括起来： <code v-pre>&quot;example text&quot;</code></li>
<li>在引号内使用降价格式： <code v-pre>&quot;**bold text** and *italics*&quot;</code></li>
</ul>
<p>例子:</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">requirementDiagram</span>
<span class="line"></span>
<span class="line">requirement "__test_req__" {</span>
<span class="line">    id: 1</span>
<span class="line">    text: "*italicized text* **bold text**"</span>
<span class="line">    risk: high</span>
<span class="line">    verifymethod: test</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-lj1ca8i">
            requirementDiagram

requirement "__test_req__" {
    id: 1
    text: "*italicized text* **bold text**"
    risk: high
    verifymethod: test
}

          </pre>
        <h3 id="_9-2-4-关系" tabindex="-1"><a class="header-anchor" href="#_9-2-4-关系"><span>9.2.4 关系</span></a></h3>
<p>关系由源节点、目标节点和关系类型组成。</p>
<ul>
<li>定义格式1</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">{name of source} - &lt;type> -> {name of destination}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>定义格式2</li>
</ul>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code><span class="line">{name of destination} &lt;- &lt;type> - {name of source}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>解释</li>
</ul>
<p>“源名称”和“目标名称”应该是在别处定义的需求或元素节点的名称。</p>
<p>关系类型可以是包含、复制、派生、满足、验证、细化或跟踪类型之一。</p>
<p>图中标注了每个关系。</p>
<h2 id="_9-3-更大的例子" tabindex="-1"><a class="header-anchor" href="#_9-3-更大的例子"><span>9.3 更大的例子</span></a></h2>
<p>这个例子使用了图的所有特性。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">requirementDiagram</span>
<span class="line"></span>
<span class="line">    requirement test_req {</span>
<span class="line">    id: 1</span>
<span class="line">    text: the test text.</span>
<span class="line">    risk: high</span>
<span class="line">    verifymethod: test</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    functionalRequirement test_req2 {</span>
<span class="line">    id: 1.1</span>
<span class="line">    text: the second test text.</span>
<span class="line">    risk: low</span>
<span class="line">    verifymethod: inspection</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    performanceRequirement test_req3 {</span>
<span class="line">    id: 1.2</span>
<span class="line">    text: the third test text.</span>
<span class="line">    risk: medium</span>
<span class="line">    verifymethod: demonstration</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    interfaceRequirement test_req4 {</span>
<span class="line">    id: 1.2.1</span>
<span class="line">    text: the fourth test text.</span>
<span class="line">    risk: medium</span>
<span class="line">    verifymethod: analysis</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    physicalRequirement test_req5 {</span>
<span class="line">    id: 1.2.2</span>
<span class="line">    text: the fifth test text.</span>
<span class="line">    risk: medium</span>
<span class="line">    verifymethod: analysis</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    designConstraint test_req6 {</span>
<span class="line">    id: 1.2.3</span>
<span class="line">    text: the sixth test text.</span>
<span class="line">    risk: medium</span>
<span class="line">    verifymethod: analysis</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    element test_entity {</span>
<span class="line">    type: simulation</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    element test_entity2 {</span>
<span class="line">    type: word doc</span>
<span class="line">    docRef: reqs/test_entity</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    element test_entity3 {</span>
<span class="line">    type: "test suite"</span>
<span class="line">    docRef: github.com/all_the_tests</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    test_entity - satisfies -> test_req2</span>
<span class="line">    test_req - traces -> test_req2</span>
<span class="line">    test_req - contains -> test_req3</span>
<span class="line">    test_req3 - contains -> test_req4</span>
<span class="line">    test_req4 - derives -> test_req5</span>
<span class="line">    test_req5 - refines -> test_req6</span>
<span class="line">    test_entity3 - verifies -> test_req5</span>
<span class="line">    test_req &lt;- copies - test_entity2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-xku1bxr">
            requirementDiagram

    requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
    }

    functionalRequirement test_req2 {
    id: 1.1
    text: the second test text.
    risk: low
    verifymethod: inspection
    }

    performanceRequirement test_req3 {
    id: 1.2
    text: the third test text.
    risk: medium
    verifymethod: demonstration
    }

    interfaceRequirement test_req4 {
    id: 1.2.1
    text: the fourth test text.
    risk: medium
    verifymethod: analysis
    }

    physicalRequirement test_req5 {
    id: 1.2.2
    text: the fifth test text.
    risk: medium
    verifymethod: analysis
    }

    designConstraint test_req6 {
    id: 1.2.3
    text: the sixth test text.
    risk: medium
    verifymethod: analysis
    }

    element test_entity {
    type: simulation
    }

    element test_entity2 {
    type: word doc
    docRef: reqs/test_entity
    }

    element test_entity3 {
    type: "test suite"
    docRef: github.com/all_the_tests
    }


    test_entity - satisfies -> test_req2
    test_req - traces -> test_req2
    test_req - contains -> test_req3
    test_req3 - contains -> test_req4
    test_req4 - derives -> test_req5
    test_req5 - refines -> test_req6
    test_entity3 - verifies -> test_req5
    test_req <- copies - test_entity2


          </pre>
        <h2 id="_9-4-方向" tabindex="-1"><a class="header-anchor" href="#_9-4-方向"><span>9.4 方向</span></a></h2>
<p>可以使用 <code v-pre>direction</code> 语句在不同方向上呈现图。有效值为：</p>
<ul>
<li><code v-pre>TB</code>  -从上到下（默认）</li>
<li><code v-pre>BT</code>  -从底部到顶部</li>
<li><code v-pre>LR</code>  -从左到右</li>
<li><code v-pre>RL</code>  -从右到左</li>
</ul>
<p>例子:</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">requirementDiagram</span>
<span class="line"></span>
<span class="line">direction LR</span>
<span class="line"></span>
<span class="line">requirement test_req {</span>
<span class="line">    id: 1</span>
<span class="line">    text: the test text.</span>
<span class="line">    risk: high</span>
<span class="line">    verifymethod: test</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">element test_entity {</span>
<span class="line">    type: simulation</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">test_entity - satisfies -> test_req</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-98fpdgs">
            requirementDiagram

direction LR

requirement test_req {
    id: 1
    text: the test text.
    risk: high
    verifymethod: test
}

element test_entity {
    type: simulation
}

test_entity - satisfies -> test_req

          </pre>
        <h2 id="_9-5-样式" tabindex="-1"><a class="header-anchor" href="#_9-5-样式"><span>9.5 样式</span></a></h2>
<p>需求和元素可以使用直接样式化或类进行样式化。作为一个经验法则，当应用样式或类时，它接受一个需求或元素名称列表和一个类名称列表，允许一次分配多个值（唯一的例外是速记语法 <code v-pre>:::</code> ，它可以分配多个类，但一次只能分配一个需求或元素）。</p>
<h3 id="_9-5-1-直接的样式" tabindex="-1"><a class="header-anchor" href="#_9-5-1-直接的样式"><span>9.5.1 直接的样式</span></a></h3>
<p>使用 <code v-pre>style</code> 关键字直接应用CSS样式：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">requirementDiagram</span>
<span class="line"></span>
<span class="line">requirement test_req {</span>
<span class="line">    id: 1</span>
<span class="line">    text: styling example</span>
<span class="line">    risk: low</span>
<span class="line">    verifymethod: test</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">element test_entity {</span>
<span class="line">    type: simulation</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">style test_req fill:#ffa,stroke:#000, color: green</span>
<span class="line">style test_entity fill:#f9f,stroke:#333, color: blue</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-ipgk1qz">
            requirementDiagram

requirement test_req {
    id: 1
    text: styling example
    risk: low
    verifymethod: test
}

element test_entity {
    type: simulation
}

style test_req fill:#ffa,stroke:#000, color: green
style test_entity fill:#f9f,stroke:#333, color: blue

          </pre>
        <h3 id="_9-5-2-类定义" tabindex="-1"><a class="header-anchor" href="#_9-5-2-类定义"><span>9.5.2 类定义</span></a></h3>
<p>使用 <code v-pre>classDef</code> 定义可重用样式：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">requirementDiagram</span>
<span class="line"></span>
<span class="line">requirement test_req {</span>
<span class="line">    id: 1</span>
<span class="line">    text: "class styling example"</span>
<span class="line">    risk: low</span>
<span class="line">    verifymethod: test</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">element test_entity {</span>
<span class="line">    type: simulation</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">classDef important fill:#f96,stroke:#333,stroke-width:4px</span>
<span class="line">classDef test fill:#ffa,stroke:#000</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-oynzapc">
            requirementDiagram

requirement test_req {
    id: 1
    text: "class styling example"
    risk: low
    verifymethod: test
}

element test_entity {
    type: simulation
}

classDef important fill:#f96,stroke:#333,stroke-width:4px
classDef test fill:#ffa,stroke:#000

          </pre>
        <h3 id="_9-5-3-默认的类" tabindex="-1"><a class="header-anchor" href="#_9-5-3-默认的类"><span>9.5.3 默认的类</span></a></h3>
<p>如果一个类被命名为default，它将应用于所有节点。之后应该定义特定的样式和类来覆盖应用的默认样式。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDef default fill:#f9f,stroke:#333,stroke-width:4px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_9-5-4-应用类" tabindex="-1"><a class="header-anchor" href="#_9-5-4-应用类"><span>9.5.4 应用类</span></a></h3>
<p>类可以通过两种方式应用：</p>
<ol>
<li>使用 <code v-pre>class</code> 关键字：</li>
</ol>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code><span class="line">class test_req,test_entity important</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>在定义期间或之后使用 <code v-pre>:::</code> 的简写语法：</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">requirement test_req:::important {</span>
<span class="line">    id: 1</span>
<span class="line">    text: class styling example</span>
<span class="line">    risk: low</span>
<span class="line">    verifymethod: test</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">element test_elem {</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">test_elem:::myClass</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-5-5-结合例子" tabindex="-1"><a class="header-anchor" href="#_9-5-5-结合例子"><span>9.5.5 结合例子</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">requirementDiagram</span>
<span class="line"></span>
<span class="line">requirement test_req:::important {</span>
<span class="line">    id: 1</span>
<span class="line">    text: "class styling example"</span>
<span class="line">    risk: low</span>
<span class="line">    verifymethod: test</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">element test_entity {</span>
<span class="line">    type: simulation</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">classDef important font-weight:bold</span>
<span class="line"></span>
<span class="line">class test_entity important</span>
<span class="line">style test_entity fill:#f9f,stroke:#333</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-wgx6t6p">
            requirementDiagram

requirement test_req:::important {
    id: 1
    text: "class styling example"
    risk: low
    verifymethod: test
}

element test_entity {
    type: simulation
}

classDef important font-weight:bold

class test_entity important
style test_entity fill:#f9f,stroke:#333

          </pre>
        </div></template>


