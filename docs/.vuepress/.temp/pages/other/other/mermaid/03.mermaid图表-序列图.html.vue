<template><div><h1 id="二、序列图" tabindex="-1"><a class="header-anchor" href="#二、序列图"><span>二、序列图</span></a></h1>
<blockquote>
<p>序列图是一种交互图，它显示了流程如何相互操作以及以何种顺序操作。</p>
</blockquote>
<p>Mermaid可以渲染序列图。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    Alice->>John: Hello John, how are you?</span>
<span class="line">    John-->>Alice: Great!</span>
<span class="line">    Alice-)John: See you later!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-hec76qu">
            sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!

          </pre>
        <blockquote>
<p>关于节点的注释，由于美人鱼语言的脚本方式，单词“end”可能会破坏图。
如果不可避免，必须使用括号（），引号“”或括号{}，<code v-pre>\[\]</code>来括住单词“end”。即：（end）， <code v-pre>\[end\]</code>, <code v-pre>{end}</code>。</p>
</blockquote>
<h2 id="_2-1-语法" tabindex="-1"><a class="header-anchor" href="#_2-1-语法"><span>2.1 语法</span></a></h2>
<h3 id="_2-1-1-participants-参与者" tabindex="-1"><a class="header-anchor" href="#_2-1-1-participants-参与者"><span>2.1.1 participants（参与者）</span></a></h3>
<p><code v-pre>participant</code>可以隐式地定义，如本页第一个示例所示。参与者或参与者在图源文本中按外观顺序呈现。有时，您可能希望以不同于第一条消息中的顺序显示参与者。可以通过执行以下操作来指定演员的出场顺序：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    participant Alice </span>
<span class="line">    participant Bob   </span>
<span class="line">    Bob->>Alice: Hi Alice </span>
<span class="line">    Alice->>Bob: Hi Bob   </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>代码解释</p>
<ul>
<li>第一行： <code v-pre>sequenceDiagram</code> 确认流程图类型</li>
<li>第二行： <code v-pre>participant</code> 定义的参与者Alice</li>
<li>第二行： <code v-pre>participant</code> 定义的参与者Bob</li>
<li>第二行： <code v-pre>-&gt;&gt;</code> Bob向Alice发送信息</li>
<li>第二行： <code v-pre>-&gt;&gt;</code> Alice向Bob 发送信息</li>
</ul>
</li>
<li>
<p>展示图</p>
</li>
</ul>

          <pre class="mermaid" id="mermaid-219e52s">
            sequenceDiagram
    participant Alice
    participant Bob
    Bob->>Alice: Hi Alice
    Alice->>Bob: Hi Bob

          </pre>
        <h3 id="_2-1-2-actor-演员" tabindex="-1"><a class="header-anchor" href="#_2-1-2-actor-演员"><span>2.1.2 actor （演员）</span></a></h3>
<p>如果你特别想用actor符号代替矩形文本，你可以使用actor语句，如下所示。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    actor Alice</span>
<span class="line">    actor Bob</span>
<span class="line">    Alice->>Bob: Hi Bob</span>
<span class="line">    Bob->>Alice: Hi Alice</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>代码解释</p>
<ul>
<li>第一行： <code v-pre>sequenceDiagram</code> 确认流程图类型</li>
<li>第二行： <code v-pre>actor</code> 定义的演员Alice</li>
<li>第二行： <code v-pre>actor</code> 定义的演员Bob</li>
<li>第二行： <code v-pre>-&gt;&gt;</code> Bob向Alice发送信息</li>
<li>第二行： <code v-pre>-&gt;&gt;</code> Alice向Bob 发送信息</li>
</ul>
</li>
<li>
<p>展示图</p>
</li>
</ul>

          <pre class="mermaid" id="mermaid-i7y7tfj">
            sequenceDiagram
    actor Alice
    actor Bob
    Alice->>Bob: Hi Bob
    Bob->>Alice: Hi Alice

          </pre>
        <h3 id="_2-1-3-别名" tabindex="-1"><a class="header-anchor" href="#_2-1-3-别名"><span>2.1.3 别名</span></a></h3>
<p>参与者可以有一个方便的标识符和一个描述性标签。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    participant A as Alice</span>
<span class="line">    participant J as John</span>
<span class="line">    A->>J: Hello John, how are you?</span>
<span class="line">    J->>A: Great!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-2r2sma2">
            sequenceDiagram
    participant A as Alice
    participant J as John
    A->>J: Hello John, how are you?
    J->>A: Great!

          </pre>
        <h3 id="_2-1-4-创建和销毁" tabindex="-1"><a class="header-anchor" href="#_2-1-4-创建和销毁"><span>2.1.4 创建和销毁</span></a></h3>
<p>可以通过消息创建和销毁参与者。为此，在消息之前添加一个<code v-pre>create</code>或<code v-pre>destroy</code>指令。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">create participant B</span>
<span class="line">A --> B: Hello</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建支持参与者/参与者区分和别名的指令。可以销毁消息的发送方或接收方，但只能创建接收方。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    Alice->>Bob: Hello Bob, how are you ?</span>
<span class="line">    Bob->>Alice: Fine, thank you. And you?</span>
<span class="line">    create participant Carl</span>
<span class="line">    Alice->>Carl: Hi Carl!</span>
<span class="line">    create actor D as Donald</span>
<span class="line">    Carl->>D: Hi!</span>
<span class="line">    destroy Carl</span>
<span class="line">    Alice-xCarl: We are too many</span>
<span class="line">    destroy Bob</span>
<span class="line">    Bob->>Alice: I agree</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-3kkv99o">
            sequenceDiagram
    Alice->>Bob: Hello Bob, how are you ?
    Bob->>Alice: Fine, thank you. And you?
    create participant Carl
    Alice->>Carl: Hi Carl!
    create actor D as Donald
    Carl->>D: Hi!
    destroy Carl
    Alice-xCarl: We are too many
    destroy Bob
    Bob->>Alice: I agree

          </pre>
        <ul>
<li>如果在创建或删除参与者时出现以下类型的错误：</li>
</ul>
<blockquote>
<p>The destroyed participant participant-name does not have an associated destroying message after its declaration. Please check the sequence diagram.</p>
</blockquote>
<p>并且固定图代码并没有摆脱这个错误，所有其他图的渲染结果在相同的错误，那么你需要更新美人鱼版本到（v10.7.0）。</p>
<h3 id="_2-1-5-分组-箱" tabindex="-1"><a class="header-anchor" href="#_2-1-5-分组-箱"><span>2.1.5 分组/箱</span></a></h3>
<p>参与者可以在垂直框中分组。你可以定义一个颜色（如果没有，它将是透明的）和/或描述性标签使用以下符号：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">box Aqua Group Description</span>
<span class="line">... actors ...</span>
<span class="line">end</span>
<span class="line">box Group without description</span>
<span class="line">... actors ...</span>
<span class="line">end</span>
<span class="line">box rgb(33,66,99)</span>
<span class="line">... actors ...</span>
<span class="line">end</span>
<span class="line">box rgba(33,66,99,0.5)</span>
<span class="line">... actors ...</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>如果你的组名是一种颜色，你可以强制它是透明的：</p>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">box transparent Aqua</span>
<span class="line">... actors ...</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    box Purple Alice &amp; John</span>
<span class="line">    participant A</span>
<span class="line">    participant J</span>
<span class="line">    end</span>
<span class="line">    box Another Group</span>
<span class="line">    participant B</span>
<span class="line">    participant C</span>
<span class="line">    end</span>
<span class="line">    A->>J: Hello John, how are you?</span>
<span class="line">    J->>A: Great!</span>
<span class="line">    A->>B: Hello Bob, how is Charley?</span>
<span class="line">    B->>C: Hello Charley, how are you?</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-l7h8bjb">
            sequenceDiagram
    box Purple Alice & John
    participant A
    participant J
    end
    box Another Group
    participant B
    participant C
    end
    A->>J: Hello John, how are you?
    J->>A: Great!
    A->>B: Hello Bob, how is Charley?
    B->>C: Hello Charley, how are you?

          </pre>
        <p>Another GroupAlice &amp; JohnCBJACBJAHello John, how are you?Great!Hello Bob, how is Charley?Hello Charley, how are you?</p>
<h2 id="_2-2-messages-传递信息" tabindex="-1"><a class="header-anchor" href="#_2-2-messages-传递信息"><span>2.2 messages (传递信息)</span></a></h2>
<p>消息可以显示为实线或虚线两种形式。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">[Actor][Arrow][Actor]:Message text</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>目前支持十种类型的箭头：</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>-&gt;</code></td>
<td>无箭头实线</td>
</tr>
<tr>
<td><code v-pre>--&gt;</code></td>
<td>虚线无箭头</td>
</tr>
<tr>
<td><code v-pre>-&gt;&gt;</code></td>
<td>带箭头的实线</td>
</tr>
<tr>
<td><code v-pre>--&gt;&gt;</code></td>
<td>带箭头的虚线</td>
</tr>
<tr>
<td><code v-pre>&lt;&lt;-&gt;&gt;</code></td>
<td>带双向箭头的实线（v11.0.0）</td>
</tr>
<tr>
<td><code v-pre>&lt;&lt;--&gt;&gt;</code></td>
<td>带有双向箭头的虚线（v11.0.0）</td>
</tr>
<tr>
<td><code v-pre>-x</code></td>
<td>实线，最后有一个叉</td>
</tr>
<tr>
<td><code v-pre>--x</code></td>
<td>虚线的末尾有一个叉</td>
</tr>
<tr>
<td><code v-pre>-)</code></td>
<td>实线，末尾有一个开箭头（异步）</td>
</tr>
<tr>
<td><code v-pre>--)</code></td>
<td>末尾带开箭头的虚线（async）</td>
</tr>
</tbody>
</table>
<h2 id="_2-3-activate-激活" tabindex="-1"><a class="header-anchor" href="#_2-3-activate-激活"><span>2.3 (activate) 激活</span></a></h2>
<h3 id="_2-3-1-基础使用" tabindex="-1"><a class="header-anchor" href="#_2-3-1-基础使用"><span>2.3.1 基础使用</span></a></h3>
<p>使用 <code v-pre>activate </code> 进行激活，使用 <code v-pre>deactivate</code> 进行停用</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    Alice->>John: Hello John, how are you?</span>
<span class="line">    activate John</span>
<span class="line">    John-->>Alice: Great!</span>
<span class="line">    deactivate John</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-ylaudyi">
            sequenceDiagram
    Alice->>John: Hello John, how are you?
    activate John
    John-->>Alice: Great!
    deactivate John

          </pre>
        <h3 id="_2-3-2-使用-代替" tabindex="-1"><a class="header-anchor" href="#_2-3-2-使用-代替"><span>2.3.2 使用  <code v-pre>+</code> / <code v-pre>-</code> 代替</span></a></h3>
<p>在消息箭头后面附加 <code v-pre>+</code> / <code v-pre>-</code> 后缀，代替 <code v-pre>activate </code> / <code v-pre>deactivate</code></p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    Alice->>+John: Hello John, how are you?</span>
<span class="line">    John-->>-Alice: Great!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-u9cio5x">
            sequenceDiagram
    Alice->>+John: Hello John, how are you?
    John-->>-Alice: Great!

          </pre>
        <h3 id="_2-3-3-activated堆叠" tabindex="-1"><a class="header-anchor" href="#_2-3-3-activated堆叠"><span>2.3.3 activated堆叠</span></a></h3>
<p><code v-pre>activate</code> 可以堆叠 一个 <code v-pre>participant</code> (参与者) 或 <code v-pre>actor</code>(演员)</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    Alice->>+John: Hello John, how are you?</span>
<span class="line">    Alice->>+John: John, can you hear me?</span>
<span class="line">    John-->>-Alice: Hi Alice, I can hear you!</span>
<span class="line">    John-->>-Alice: I feel great!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-6pm1dqw">
            sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!

          </pre>
        <h2 id="_2-4-notes-笔记" tabindex="-1"><a class="header-anchor" href="#_2-4-notes-笔记"><span>2.4 notes (笔记)</span></a></h2>
<p>可以在序列图中添加注释。这是通过注释 <code v-pre>Note [ right of | left of | over ] [Actor]</code>: 来完成的：注释内容中的文本</p>
<p>请看下面的例子：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    participant John</span>
<span class="line">    Note right of John: Text in note</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-yv91ujv">
            sequenceDiagram
    participant John
    Note right of John: Text in note

          </pre>
        <p>也可以创建跨越两个参与者的笔记：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    Alice->John: Hello John, how are you?</span>
<span class="line">    Note over Alice,John: A typical interaction</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-d7o0lmf">
            sequenceDiagram
    Alice->John: Hello John, how are you?
    Note over Alice,John: A typical interaction

          </pre>
        <h2 id="_2-5-换行符" tabindex="-1"><a class="header-anchor" href="#_2-5-换行符"><span>2.5 换行符</span></a></h2>
<p>可以在Note和Message中添加换行：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    Alice->John: Hello John,&lt;br/>how are you?</span>
<span class="line">    Note over Alice,John: A typical interaction&lt;br/>But now in two lines</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-cqtnv3s">
            sequenceDiagram
    Alice->John: Hello John,<br/>how are you?
    Note over Alice,John: A typical interaction<br/>But now in two lines

          </pre>
        <p><code v-pre>participant</code> (参与者) 或 <code v-pre>actor</code>(演员) 的 换行符别名：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    participant Alice as Alice&lt;br/>Johnson</span>
<span class="line">    Alice->John: Hello John,&lt;br/>how are you?</span>
<span class="line">    Note over Alice,John: A typical interaction&lt;br/>But now in two lines</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-6xv6vna">
            sequenceDiagram
    participant Alice as Alice<br/>Johnson
    Alice->John: Hello John,<br/>how are you?
    Note over Alice,John: A typical interaction<br/>But now in two lines

          </pre>
        <h2 id="_2-6-循环" tabindex="-1"><a class="header-anchor" href="#_2-6-循环"><span>2.6 循环</span></a></h2>
<p>可以在序列图中表示循环。这是用符号表示的</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">loop Loop text</span>
<span class="line">... statements ...</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请看下面的例子：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    Alice->John: Hello John, how are you?</span>
<span class="line">    loop Every minute</span>
<span class="line">        John-->Alice: Great!</span>
<span class="line">    end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-71cazje">
            sequenceDiagram
    Alice->John: Hello John, how are you?
    loop Every minute
        John-->Alice: Great!
    end

          </pre>
        <h2 id="_2-7-可选路径" tabindex="-1"><a class="header-anchor" href="#_2-7-可选路径"><span>2.7 可选路径</span></a></h2>
<ol>
<li>使用 alt 定义可选路径</li>
</ol>
<p>在序列图中表达可选路径。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">alt Describing text</span>
<span class="line">... statements ...</span>
<span class="line">else</span>
<span class="line">... statements ...</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用 opt 定义可选路径</li>
</ol>
<p>存在可选的序列（如果没有else）。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">opt Describing text</span>
<span class="line">... statements ...</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>示例</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    Alice->>Bob: Hello Bob, how are you?</span>
<span class="line">    alt is sick</span>
<span class="line">        Bob->>Alice: Not so good :(</span>
<span class="line">    else is well</span>
<span class="line">        Bob->>Alice: Feeling fresh like a daisy</span>
<span class="line">    end</span>
<span class="line">    opt Extra response</span>
<span class="line">        Bob->>Alice: Thanks for asking</span>
<span class="line">    end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-cz1rru9">
            sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end

          </pre>
        <h2 id="_2-8-parallel-平行" tabindex="-1"><a class="header-anchor" href="#_2-8-parallel-平行"><span>2.8 Parallel（平行）</span></a></h2>
<p>可以显示并行发生的操作。</p>
<ol>
<li>语法</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">par [Action 1]</span>
<span class="line">... statements ...</span>
<span class="line">and [Action 2]</span>
<span class="line">... statements ...</span>
<span class="line">and [Action N]</span>
<span class="line">... statements ...</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>示例1</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    par Alice to Bob</span>
<span class="line">        Alice->>Bob: Hello guys!</span>
<span class="line">    and Alice to John</span>
<span class="line">        Alice->>John: Hello guys!</span>
<span class="line">    end</span>
<span class="line">    Bob-->>Alice: Hi Alice!</span>
<span class="line">    John-->>Alice: Hi Alice!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-p226jfj">
            sequenceDiagram
    par Alice to Bob
        Alice->>Bob: Hello guys!
    and Alice to John
        Alice->>John: Hello guys!
    end
    Bob-->>Alice: Hi Alice!
    John-->>Alice: Hi Alice!

          </pre>
        <ol start="3">
<li>示例2-嵌套并行块</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    par Alice to Bob</span>
<span class="line">        Alice->>Bob: Go help John</span>
<span class="line">    and Alice to John</span>
<span class="line">        Alice->>John: I want this done today</span>
<span class="line">        par John to Charlie</span>
<span class="line">            John->>Charlie: Can we do this today?</span>
<span class="line">        and John to Diana</span>
<span class="line">            John->>Diana: Can you help us today?</span>
<span class="line">        end</span>
<span class="line">    end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-4bhvvrf">
            sequenceDiagram
    par Alice to Bob
        Alice->>Bob: Go help John
    and Alice to John
        Alice->>John: I want this done today
        par John to Charlie
            John->>Charlie: Can we do this today?
        and John to Diana
            John->>Diana: Can you help us today?
        end
    end

          </pre>
        <h2 id="_2-9-critical-region-临界区" tabindex="-1"><a class="header-anchor" href="#_2-9-critical-region-临界区"><span>2.9 Critical Region（临界区）</span></a></h2>
<p>可以通过条件处理显示必须自动发生的操作。</p>
<ol>
<li>语法</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">critical [Action that must be performed]</span>
<span class="line">... statements ...</span>
<span class="line">option [Circumstance A]</span>
<span class="line">... statements ...</span>
<span class="line">option [Circumstance B]</span>
<span class="line">... statements ...</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>示例1</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    critical Establish a connection to the DB</span>
<span class="line">        Service-->DB: connect</span>
<span class="line">    option Network timeout</span>
<span class="line">        Service-->Service: Log error</span>
<span class="line">    option Credentials rejected</span>
<span class="line">        Service-->Service: Log different error</span>
<span class="line">    end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-4ev7czh">
            sequenceDiagram
    critical Establish a connection to the DB
        Service-->DB: connect
    option Network timeout
        Service-->Service: Log error
    option Credentials rejected
        Service-->Service: Log different error
    end

          </pre>
        <ol start="3">
<li>示例2</li>
</ol>
<p>有可能根本没有选择</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    critical Establish a connection to the DB</span>
<span class="line">        Service-->DB: connect</span>
<span class="line">    end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-vgj1mg5">
            sequenceDiagram
    critical Establish a connection to the DB
        Service-->DB: connect
    end

          </pre>
        <p>这个关键块也可以嵌套，相当于上面看到的 <code v-pre>par</code> 语句。</p>
<h2 id="_2-10-break-跳出" tabindex="-1"><a class="header-anchor" href="#_2-10-break-跳出"><span>2.10 break（跳出）</span></a></h2>
<p>可以在流中指示序列的停止（通常用于对异常建模）。</p>
<ol>
<li>语法</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">break [something happened]</span>
<span class="line">... statements ...</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>示例</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    Consumer-->API: Book something</span>
<span class="line">    API-->BookingService: Start booking process</span>
<span class="line">    break when the booking process fails</span>
<span class="line">        API-->Consumer: show failure</span>
<span class="line">    end</span>
<span class="line">    API-->BillingService: Start billing process</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-u2j5zg8">
            sequenceDiagram
    Consumer-->API: Book something
    API-->BookingService: Start booking process
    break when the booking process fails
        API-->Consumer: show failure
    end
    API-->BillingService: Start billing process

          </pre>
        <h2 id="_2-11-背景高亮显示" tabindex="-1"><a class="header-anchor" href="#_2-11-背景高亮显示"><span>2.11 背景高亮显示</span></a></h2>
<p>可以通过提供彩色背景矩形来突出显示流。这是用符号表示的</p>
<ol>
<li>语法</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">rect COLOR</span>
<span class="line">... content ...</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用rgb和rgba语法定义颜色。</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">rect rgb(0, 255, 0)</span>
<span class="line">... content ...</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">rect rgba(0, 0, 255, .1)</span>
<span class="line">... content ...</span>
<span class="line">end</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>示例</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    participant Alice</span>
<span class="line">    participant John</span>
<span class="line"></span>
<span class="line">    rect rgb(191, 223, 255)</span>
<span class="line">    note right of Alice: Alice calls John.</span>
<span class="line">    Alice->>+John: Hello John, how are you?</span>
<span class="line">    rect rgb(200, 150, 255)</span>
<span class="line">    Alice->>+John: John, can you hear me?</span>
<span class="line">    John-->>-Alice: Hi Alice, I can hear you!</span>
<span class="line">    end</span>
<span class="line">    John-->>-Alice: I feel great!</span>
<span class="line">    end</span>
<span class="line">    Alice ->>+ John: Did you want to go to the game tonight?</span>
<span class="line">    John -->>- Alice: Yeah! See you there.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-rsz0ig6">
            sequenceDiagram
    participant Alice
    participant John

    rect rgb(191, 223, 255)
    note right of Alice: Alice calls John.
    Alice->>+John: Hello John, how are you?
    rect rgb(200, 150, 255)
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    end
    John-->>-Alice: I feel great!
    end
    Alice ->>+ John: Did you want to go to the game tonight?
    John -->>- Alice: Yeah! See you there.

          </pre>
        <h2 id="_2-12-注释" tabindex="-1"><a class="header-anchor" href="#_2-12-注释"><span>2.12 注释</span></a></h2>
<p>可以在序列图中输入注释，解析器将忽略这些注释。注释需要在单独的行上，并且必须以 <code v-pre>%%</code> （双百分号）作为前缀。在注释开始到下一个换行符之后的任何文本都将被视为注释，包括任何图表语法</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    Alice->>John: Hello John, how are you?</span>
<span class="line">    %% this is a comment</span>
<span class="line">    John-->>Alice: Great!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-41ng41v">
            sequenceDiagram
    Alice->>John: Hello John, how are you?
    %% this is a comment
    John-->>Alice: Great!

          </pre>
        <h2 id="_2-13-转义字符" tabindex="-1"><a class="header-anchor" href="#_2-13-转义字符"><span>2.13 转义字符</span></a></h2>
<p>可以使用这里示例的语法转义字符。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    A->>B: I #9829; you!</span>
<span class="line">    B->>A: I #9829; you #infin; times more!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-fgbsc9i">
            sequenceDiagram
    A->>B: I #9829; you!
    B->>A: I #9829; you #infin; times more!

          </pre>
        <p>给定的数字以10为基数，因此 <code v-pre>#</code> 可以编码为 <code v-pre>#35;</code> 。还支持使用HTML字符名。</p>
<p>因为分号可以代替换行符来定义标记，所以需要使用 <code v-pre>#59;</code> 来在消息文本中包含分号。</p>
<h2 id="_2-14-sequencenumbers-序列号" tabindex="-1"><a class="header-anchor" href="#_2-14-sequencenumbers-序列号"><span>2.14 sequenceNumbers（序列号）</span></a></h2>
<p>在序列图中，可以为每个箭头附加一个序列号。这可以在将mermaid添加到网站时配置，如下所示：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">sequence</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">showSequenceNumbers</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它也可以通过图表代码打开，如下图所示：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    autonumber</span>
<span class="line">    Alice->>John: Hello John, how are you?</span>
<span class="line">    loop HealthCheck</span>
<span class="line">        John->>John: Fight against hypochondria</span>
<span class="line">    end</span>
<span class="line">    Note right of John: Rational thoughts!</span>
<span class="line">    John-->>Alice: Great!</span>
<span class="line">    John->>Bob: How about you?</span>
<span class="line">    Bob-->>John: Jolly good!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-yd1mj0p">
            sequenceDiagram
    autonumber
    Alice->>John: Hello John, how are you?
    loop HealthCheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!

          </pre>
        <h2 id="_2-15-participant-actor-菜单" tabindex="-1"><a class="header-anchor" href="#_2-15-participant-actor-菜单"><span>2.15  <code v-pre>participant/actor</code> 菜单</span></a></h2>
<h3 id="_2-15-1-基础菜单" tabindex="-1"><a class="header-anchor" href="#_2-15-1-基础菜单"><span>2.15.1 基础菜单</span></a></h3>
<p>actor可以有包含到外部页面的个性化链接的弹出式菜单。例如，如果参与者表示web服务，则有用的链接可能包括指向服务运行状况指示板的链接、包含服务代码的repo或描述服务的wiki页面。</p>
<p>这可以通过添加一个或多个链接行来配置，格式为：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">link &lt;actor>: &lt;link-label> @ &lt;link-url></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    participant Alice</span>
<span class="line">    participant John</span>
<span class="line">    link Alice: Dashboard @ https://dashboard.contoso.com/alice</span>
<span class="line">    link Alice: Wiki @ https://wiki.contoso.com/alice</span>
<span class="line">    link John: Dashboard @ https://dashboard.contoso.com/john</span>
<span class="line">    link John: Wiki @ https://wiki.contoso.com/john</span>
<span class="line">    Alice->>John: Hello John, how are you?</span>
<span class="line">    John-->>Alice: Great!</span>
<span class="line">    Alice-)John: See you later!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-sr0hz55">
            sequenceDiagram
    participant Alice
    participant John
    link Alice: Dashboard @ https://dashboard.contoso.com/alice
    link Alice: Wiki @ https://wiki.contoso.com/alice
    link John: Dashboard @ https://dashboard.contoso.com/john
    link John: Wiki @ https://wiki.contoso.com/john
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!

          </pre>
        <h3 id="_2-15-2-高级菜单" tabindex="-1"><a class="header-anchor" href="#_2-15-2-高级菜单"><span>2.15.2 高级菜单</span></a></h3>
<p>有一种高级语法依赖于JSON格式。如果您对JSON格式感到满意，那么它也存在。</p>
<p>这可以通过添加links行来配置，格式如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">links &lt;actor>: &lt;json-formatted link-name link-url pairs></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>下面是一个例子：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    participant Alice</span>
<span class="line">    participant John</span>
<span class="line">    links Alice: {"Dashboard": "https://dashboard.contoso.com/alice", "Wiki": "https://wiki.contoso.com/alice"}</span>
<span class="line">    links John: {"Dashboard": "https://dashboard.contoso.com/john", "Wiki": "https://wiki.contoso.com/john"}</span>
<span class="line">    Alice->>John: Hello John, how are you?</span>
<span class="line">    John-->>Alice: Great!</span>
<span class="line">    Alice-)John: See you later!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-yxukdtm">
            sequenceDiagram
    participant Alice
    participant John
    links Alice: {"Dashboard": "https://dashboard.contoso.com/alice", "Wiki": "https://wiki.contoso.com/alice"}
    links John: {"Dashboard": "https://dashboard.contoso.com/john", "Wiki": "https://wiki.contoso.com/john"}
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!

          </pre>
        <h2 id="_2-16-样式" tabindex="-1"><a class="header-anchor" href="#_2-16-样式"><span>2.16 样式</span></a></h2>
<p>序列图的样式化是通过定义一些css类来完成的。在渲染过程中，这些类从位于src/themes/sequence.scss的文件中提取出来</p>
<h3 id="_2-16-1-使用的类" tabindex="-1"><a class="header-anchor" href="#_2-16-1-使用的类"><span>2.16.1 使用的类</span></a></h3>
<table>
<thead>
<tr>
<th>类</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>actor</td>
<td>演员框的样式。</td>
</tr>
<tr>
<td>actor-top</td>
<td>图顶部角色图/框的样式。</td>
</tr>
<tr>
<td>actor-bottom</td>
<td>图底部角色图/框的样式。</td>
</tr>
<tr>
<td>text.actor</td>
<td>所有角色文本的样式。</td>
</tr>
<tr>
<td>text.actor-box</td>
<td>actor框文本的样式。</td>
</tr>
<tr>
<td>text.actor-man</td>
<td>演员图形文本的样式。</td>
</tr>
<tr>
<td>actor-line</td>
<td>演员的垂直线。</td>
</tr>
<tr>
<td>messageLine0</td>
<td>实体消息行的样式。</td>
</tr>
<tr>
<td>messageLine1</td>
<td>虚线消息行的样式。</td>
</tr>
<tr>
<td>messageText</td>
<td>定义消息箭头上文本的样式。</td>
</tr>
<tr>
<td>labelBox</td>
<td>定义要在循环中留下的样式标签。</td>
</tr>
<tr>
<td>labelText</td>
<td>标签for循环文本的样式。</td>
</tr>
<tr>
<td>loopText</td>
<td>循环框中文本的样式。</td>
</tr>
<tr>
<td>loopLine</td>
<td>定义循环框中行的样式。</td>
</tr>
<tr>
<td>note</td>
<td>注释框的样式。</td>
</tr>
<tr>
<td>noteText</td>
<td>注释框中文本的样式。</td>
</tr>
</tbody>
</table>
<h3 id="_2-16-2-样本样式表" tabindex="-1"><a class="header-anchor" href="#_2-16-2-样本样式表"><span>2.16.2 样本样式表</span></a></h3>
<div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre v-pre><code><span class="line"><span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.actor</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> #ccccff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> #ececff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">text.actor</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.actor-line</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.messageLine0</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">stroke-width</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">stroke-dasharray</span><span class="token punctuation">:</span> <span class="token string">'2 2'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">marker-end</span><span class="token punctuation">:</span> <span class="token string">'url(#arrowhead)'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.messageLine1</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">stroke-width</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">stroke-dasharray</span><span class="token punctuation">:</span> <span class="token string">'2 2'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">#arrowhead</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.messageText</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'trebuchet ms'</span><span class="token punctuation">,</span> verdana<span class="token punctuation">,</span> arial<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.labelBox</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> #ccccff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> #ececff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.labelText</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'trebuchet ms'</span><span class="token punctuation">,</span> verdana<span class="token punctuation">,</span> arial<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.loopText</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'trebuchet ms'</span><span class="token punctuation">,</span> verdana<span class="token punctuation">,</span> arial<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.loopLine</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">stroke-width</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">stroke-dasharray</span><span class="token punctuation">:</span> <span class="token string">'2 2'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">marker-end</span><span class="token punctuation">:</span> <span class="token string">'url(#arrowhead)'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> #ccccff<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.note</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> #decc93<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> #fff5ad<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.noteText</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'trebuchet ms'</span><span class="token punctuation">,</span> verdana<span class="token punctuation">,</span> arial<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-17-配置" tabindex="-1"><a class="header-anchor" href="#_2-17-配置"><span>2.17 配置</span></a></h2>
<p>可以调整显示序列图的边距。</p>
<ol>
<li>定义配置</li>
</ol>
<p>这可以通过定义 <code v-pre>mermaid.sequenceConfig</code> 或通过CLI使用json文件进行配置来完成。CLI的使用方法请参见mermaidCLI界面。 <code v-pre>mermaid.sequenceConfig</code> 可设置为带配置参数的JSON字符串或对应的对象。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">mermaid<span class="token punctuation">.</span>sequenceConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">diagramMarginX</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">diagramMarginY</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">boxTextMargin</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">noteMargin</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">messageMargin</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">mirrorActors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>可能的配置参数：</li>
</ol>
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
<td>mirrorActors</td>
<td>打开/关闭角色在图表下方和上方的渲染</td>
<td>false</td>
</tr>
<tr>
<td>bottomMarginAdj</td>
<td>调整图形结束的位置。css的宽边框样式可能会产生不必要的剪切，这就是为什么这个配置参数存在的原因。</td>
<td>1</td>
</tr>
<tr>
<td>actorFontSize</td>
<td>设置演员描述的字体大小</td>
<td>14</td>
</tr>
<tr>
<td>actorFontFamily</td>
<td>为演员的描述设置字体族</td>
<td>&quot;Open Sans&quot;, sans-serif</td>
</tr>
<tr>
<td>actorFontWeight</td>
<td>设置演员描述的字体粗细</td>
<td>&quot;Open Sans&quot;, sans-serif</td>
</tr>
<tr>
<td>noteFontSize</td>
<td>设置演员附加说明的字体大小</td>
<td>14</td>
</tr>
<tr>
<td>noteFontFamily</td>
<td>设置演员附加注释的字体族</td>
<td>&quot;trebuchet ms&quot;, verdana, arial</td>
</tr>
<tr>
<td>noteFontWeight</td>
<td>设置演员附注的字体粗细</td>
<td>&quot;trebuchet ms&quot;, verdana, arial</td>
</tr>
<tr>
<td>noteAlign</td>
<td>设置角色附加注释中的文本对齐方式</td>
<td>center</td>
</tr>
<tr>
<td>messageFontSize</td>
<td>设置actor&lt;-&gt;actor消息的字体大小</td>
<td>16</td>
</tr>
<tr>
<td>messageFontFamily</td>
<td>为actor&lt;-&gt;actor消息设置字体族</td>
<td>&quot;trebuchet ms&quot;, verdana, arial</td>
</tr>
<tr>
<td>messageFontWeight</td>
<td>设置actor&lt;-&gt;actor消息的字体粗细</td>
<td>&quot;trebuchet ms&quot;, verdana, arial</td>
</tr>
</tbody>
</table>
</div></template>


