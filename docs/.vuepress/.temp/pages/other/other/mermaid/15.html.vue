<template><div><h1 id="十四、zenum序列图" tabindex="-1"><a class="header-anchor" href="#十四、zenum序列图"><span>十四、ZenUM序列图</span></a></h1>
<blockquote>
<p>序列图是一种交互图，它显示了流程如何相互操作以及以何种顺序操作。</p>
</blockquote>
<h2 id="_14-1-序列图基础使用" tabindex="-1"><a class="header-anchor" href="#_14-1-序列图基础使用"><span>14.1 序列图基础使用</span></a></h2>
<p>Mermaid可以用ZenUML呈现序列图。注意，ZenUML使用了与mermaid中原始序列图不同的语法。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    title Demo</span>
<span class="line">    Alice->John: Hello John, how are you?</span>
<span class="line">    John->Alice: Great!</span>
<span class="line">    Alice->John: See you later!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-9m6m5rb">
            zenuml
    title Demo
    Alice->John: Hello John, how are you?
    John->Alice: Great!
    Alice->John: See you later!

          </pre>
          </code>
        <h2 id="_14-2-语法" tabindex="-1"><a class="header-anchor" href="#_14-2-语法"><span>14.2 语法</span></a></h2>
<h3 id="_14-2-1-参与者" tabindex="-1"><a class="header-anchor" href="#_14-2-1-参与者"><span>14.2.1 参与者</span></a></h3>
<p>参与者可以隐式地定义，如本页第一个示例所示。参与者或参与者在图源文本中按外观顺序呈现。有时，您可能希望以不同于第一条消息中的顺序显示参与者。可以通过执行以下操作来指定演员的出场顺序：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    title Declare participant (optional)</span>
<span class="line">    Bob</span>
<span class="line">    Alice</span>
<span class="line">    Alice->Bob: Hi Bob</span>
<span class="line">    Bob->Alice: Hi Alice</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-e9mvxsw">
            zenuml
    title Declare participant (optional)
    Bob
    Alice
    Alice->Bob: Hi Bob
    Bob->Alice: Hi Alice

          </pre>
          </code>
        <h3 id="_14-2-2-注解者" tabindex="-1"><a class="header-anchor" href="#_14-2-2-注解者"><span>14.2.2 注解者</span></a></h3>
<p>如果你特别想使用符号而不是带文本的矩形，你可以使用注释器语法来声明参与者，如下所示。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    title Annotators</span>
<span class="line">    @Actor Alice</span>
<span class="line">    @Database Bob</span>
<span class="line">    Alice->Bob: Hi Bob</span>
<span class="line">    Bob->Alice: Hi Alice</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-k395je2">
            zenuml
    title Annotators
    @Actor Alice
    @Database Bob
    Alice->Bob: Hi Bob
    Bob->Alice: Hi Alice

          </pre>
          </code>
        <p>注释器列表：</p>
<p><img src="/other/other/mermaid/001.png" alt=""></p>
<h3 id="_14-2-3-别名" tabindex="-1"><a class="header-anchor" href="#_14-2-3-别名"><span>14.2.3 别名</span></a></h3>
<p>参与者可以有一个方便的标识符和描述性标签。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    title Aliases</span>
<span class="line">    A as Alice</span>
<span class="line">    J as John</span>
<span class="line">    A->J: Hello John, how are you?</span>
<span class="line">    J->A: Great!</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-9guorkd">
            zenuml
    title Aliases
    A as Alice
    J as John
    A->J: Hello John, how are you?
    J->A: Great!

          </pre>
          </code>
        <h2 id="_14-3-消息" tabindex="-1"><a class="header-anchor" href="#_14-3-消息"><span>14.3 消息</span></a></h2>
<p>消息可以是：</p>
<ol>
<li>同步消息</li>
<li>异步消息</li>
<li>创建消息</li>
<li>回复消息</li>
</ol>
<h3 id="_14-3-1-同步消息" tabindex="-1"><a class="header-anchor" href="#_14-3-1-同步消息"><span>14.3.1 同步消息</span></a></h3>
<p>您可以考虑编程语言中的同步（阻塞）方法。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    title Sync message</span>
<span class="line">    A.SyncMessage</span>
<span class="line">    A.SyncMessage(with, parameters) {</span>
<span class="line">      B.nestedSyncMessage()</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-90d0n0e">
            zenuml
    title Sync message
    A.SyncMessage
    A.SyncMessage(with, parameters) {
      B.nestedSyncMessage()
    }

          </pre>
          </code>
        <h3 id="_14-3-2-异步消息" tabindex="-1"><a class="header-anchor" href="#_14-3-2-异步消息"><span>14.3.2 异步消息</span></a></h3>
<p>您可以考虑编程语言中的异步（非阻塞）方法。触发一个事件，然后忘记它。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    title Async message</span>
<span class="line">    Alice->Bob: How are you?</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-zednl9v">
            zenuml
    title Async message
    Alice->Bob: How are you?

          </pre>
          </code>
        <h3 id="_14-3-3-创建消息" tabindex="-1"><a class="header-anchor" href="#_14-3-3-创建消息"><span>14.3.3 创建消息</span></a></h3>
<p>我们使用 <code v-pre>new</code> 关键字创建对象。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    new A1</span>
<span class="line">    new A2(with, parameters)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-6ommndk">
            zenuml
    new A1
    new A2(with, parameters)

          </pre>
          </code>
        <h3 id="_14-3-4-回复消息" tabindex="-1"><a class="header-anchor" href="#_14-3-4-回复消息"><span>14.3.4 回复消息</span></a></h3>
<p>回复信息有三种表达方式：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    // 1. assign a variable from a sync message.</span>
<span class="line">    a = A.SyncMessage()</span>
<span class="line"></span>
<span class="line">    // 1.1. optionally give the variable a type</span>
<span class="line">    SomeType a = A.SyncMessage()</span>
<span class="line"></span>
<span class="line">    // 2. use return keyword</span>
<span class="line">    A.SyncMessage() {</span>
<span class="line">    return result</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 3. use @return or @reply annotator on an async message</span>
<span class="line">    @return</span>
<span class="line">    A->B: result</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-l0b1kdo">
            zenuml
    // 1. assign a variable from a sync message.
    a = A.SyncMessage()

    // 1.1. optionally give the variable a type
    SomeType a = A.SyncMessage()

    // 2. use return keyword
    A.SyncMessage() {
    return result
    }

    // 3. use @return or @reply annotator on an async message
    @return
    A->B: result

          </pre>
          </code>
        <p>第三种方式 <code v-pre>@return</code> 很少使用，但是当您想要返回到上一级时，它很有用。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    title Reply message</span>
<span class="line">    Client->A.method() {</span>
<span class="line">      B.method() {</span>
<span class="line">        if(condition) {</span>
<span class="line">          return x1</span>
<span class="line">          // return early</span>
<span class="line">          @return</span>
<span class="line">          A->Client: x11</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line">      return x2</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-9758fvp">
            zenuml
    title Reply message
    Client->A.method() {
      B.method() {
        if(condition) {
          return x1
          // return early
          @return
          A->Client: x11
        }
      }
      return x2
    }

          </pre>
          </code>
        <h2 id="_14-4-嵌套" tabindex="-1"><a class="header-anchor" href="#_14-4-嵌套"><span>14.4 嵌套</span></a></h2>
<p>同步消息和创建消息自然可以嵌套在 <code v-pre>{}</code> 。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    A.method() {</span>
<span class="line">      B.nested_sync_method()</span>
<span class="line">      B->C: nested async message</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-lhy8ysy">
            zenuml
    A.method() {
      B.nested_sync_method()
      B->C: nested async message
    }

          </pre>
          </code>
        <h2 id="_14-5-注释" tabindex="-1"><a class="header-anchor" href="#_14-5-注释"><span>14.5 注释</span></a></h2>
<p>可以使用 <code v-pre>// comment</code> 语法向序列图添加注释。注释将呈现在消息或片段的上方。其他地方的评论被忽略。支持降价。</p>
<p>请看下面的例子：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    // a comment on a participant will not be rendered</span>
<span class="line">    BookService</span>
<span class="line">    // a comment on a message.</span>
<span class="line">    // **Markdown** is supported.</span>
<span class="line">    BookService.getBook()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-g7kud86">
            zenuml
    // a comment on a participant will not be rendered
    BookService
    // a comment on a message.
    // **Markdown** is supported.
    BookService.getBook()

          </pre>
          </code>
        <h2 id="_14-6-循环" tabindex="-1"><a class="header-anchor" href="#_14-6-循环"><span>14.6 循环</span></a></h2>
<p>可以在ZenUML图中表示循环。这可以通过以下任何一种符号来完成：</p>
<ol>
<li>而</li>
<li>为</li>
<li>forEach, forEach</li>
<li>循环</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">while(condition) {</span>
<span class="line">    ...statements...</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请看下面的例子：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    Alice->John: Hello John, how are you?</span>
<span class="line">    while(true) {</span>
<span class="line">      John->Alice: Great!</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-t4xohjr">
            zenuml
    Alice->John: Hello John, how are you?
    while(true) {
      John->Alice: Great!
    }

          </pre>
          </code>
        <h2 id="_14-7-alt-选择" tabindex="-1"><a class="header-anchor" href="#_14-7-alt-选择"><span>14.7 alt 选择</span></a></h2>
<p>在序列图中表达可选路径是可能的。这是用符号表示的</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">if(condition1) {</span>
<span class="line">    ...statements...</span>
<span class="line">} else if(condition2) {</span>
<span class="line">    ...statements...</span>
<span class="line">} else {</span>
<span class="line">    ...statements...</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请看下面的例子：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    Alice->Bob: Hello Bob, how are you?</span>
<span class="line">    if(is_sick) {</span>
<span class="line">      Bob->Alice: Not so good :(</span>
<span class="line">    } else {</span>
<span class="line">      Bob->Alice: Feeling fresh like a daisy</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-boeewc6">
            zenuml
    Alice->Bob: Hello Bob, how are you?
    if(is_sick) {
      Bob->Alice: Not so good :(
    } else {
      Bob->Alice: Feeling fresh like a daisy
    }

          </pre>
          </code>
        <h2 id="_14-8-opt-选择" tabindex="-1"><a class="header-anchor" href="#_14-8-opt-选择"><span>14.8 opt 选择</span></a></h2>
<p>可以渲染 <code v-pre>opt</code> 片段。这是用符号表示的</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">opt {</span>
<span class="line">  ...statements...</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请看下面的例子：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    Alice->Bob: Hello Bob, how are you?</span>
<span class="line">    Bob->Alice: Not so good :(</span>
<span class="line">    opt {</span>
<span class="line">      Bob->Alice: Thanks for asking</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-rh14das">
            zenuml
    Alice->Bob: Hello Bob, how are you?
    Bob->Alice: Not so good :(
    opt {
      Bob->Alice: Thanks for asking
    }

          </pre>
          </code>
        <h2 id="_14-8-并行" tabindex="-1"><a class="header-anchor" href="#_14-8-并行"><span>14.8 并行</span></a></h2>
<p>可以显示并行发生的操作。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">par {</span>
<span class="line">  statement1</span>
<span class="line">  statement2</span>
<span class="line">  statement3</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请看下面的例子：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    par {</span>
<span class="line">        Alice->Bob: Hello guys!</span>
<span class="line">        Alice->John: Hello guys!</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-2th0884">
            zenuml
    par {
        Alice->Bob: Hello guys!
        Alice->John: Hello guys!
    }

          </pre>
          </code>
        <h2 id="_14-9-try-catch-finally" tabindex="-1"><a class="header-anchor" href="#_14-9-try-catch-finally"><span>14.9 Try / Catch / Finally</span></a></h2>
<p>可以在流中指示序列的停止（通常用于对异常建模）。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">try {</span>
<span class="line">  ...statements...</span>
<span class="line">} catch {</span>
<span class="line">  ...statements...</span>
<span class="line">} finally {</span>
<span class="line">  ...statements...</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请看下面的例子：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">zenuml</span>
<span class="line">    try {</span>
<span class="line">      Consumer->API: Book something</span>
<span class="line">      API->BookingService: Start booking process</span>
<span class="line">    } catch {</span>
<span class="line">      API->Consumer: show failure</span>
<span class="line">    } finally {</span>
<span class="line">      API->BookingService: rollback status</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-jepkeb2">
            zenuml
    try {
      Consumer->API: Book something
      API->BookingService: Start booking process
    } catch {
      API->Consumer: show failure
    } finally {
      API->BookingService: rollback status
    }

          </pre>
          </code>
        <h2 id="_14-10-与您的图书馆-网站集成。" tabindex="-1"><a class="header-anchor" href="#_14-10-与您的图书馆-网站集成。"><span>14.10 与您的图书馆/网站集成。</span></a></h2>
<p>Zenuml使用实验性的延迟加载和异步渲染特性，这些特性在将来可能会改变。</p>
<p>你可以使用这个方法将美人鱼（包括zenuml图）添加到网页中：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">import</span> mermaid <span class="token keyword">from</span> <span class="token string">'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">import</span> zenuml <span class="token keyword">from</span> <span class="token string">'https://cdn.jsdelivr.net/npm/@mermaid-js/mermaid-zenuml@0.1.0/dist/mermaid-zenuml.esm.min.mjs'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">await</span> mermaid<span class="token punctuation">.</span><span class="token function">registerExternalDiagrams</span><span class="token punctuation">(</span><span class="token punctuation">[</span>zenuml<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


