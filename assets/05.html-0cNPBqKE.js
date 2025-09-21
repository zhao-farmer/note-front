import{aq as e,ar as n,as as a,at as i}from"./app-Cok9BT0p.js";const l={};function t(d,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h1 id="四、状态图" tabindex="-1"><a class="header-anchor" href="#四、状态图"><span>四、状态图</span></a></h1><blockquote><p>状态图是计算机科学和相关领域中用于描述系统行为的一种图。状态图要求所描述的系统由有限数量的状态组成；有时，这确实是事实，而在其他时候，这是一个合理的抽象。”</p></blockquote><p>mermaid可以渲染状态图。该语法试图与plantUml中使用的语法兼容，因为这将使用户更容易在mermaid和plantUml之间共享图表。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">---</span>
<span class="line">title: Simple sample</span>
<span class="line">---</span>
<span class="line">stateDiagram-v2</span>
<span class="line">    [*] --&gt; Still</span>
<span class="line">    Still --&gt; [*]</span>
<span class="line"></span>
<span class="line">    Still --&gt; Moving</span>
<span class="line">    Moving --&gt; Still</span>
<span class="line">    Moving --&gt; Crash</span>
<span class="line">    Crash --&gt; [*]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-ttnt3f1">            ---
title: Simple sample
---
stateDiagram-v2
    [*] --&gt; Still
    Still --&gt; [*]

    Still --&gt; Moving
    Moving --&gt; Still
    Moving --&gt; Crash
    Crash --&gt; [*]

          </pre></code><p>旧的渲染器:</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram</span>
<span class="line">    [*] --&gt; Still</span>
<span class="line">    Still --&gt; [*]</span>
<span class="line"></span>
<span class="line">    Still --&gt; Moving</span>
<span class="line">    Moving --&gt; Still</span>
<span class="line">    Moving --&gt; Crash</span>
<span class="line">    Crash --&gt; [*]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-kl6so2d">            stateDiagram
    [*] --&gt; Still
    Still --&gt; [*]

    Still --&gt; Moving
    Moving --&gt; Still
    Moving --&gt; Crash
    Crash --&gt; [*]

          </pre></code><p>在状态图中，系统是根据状态以及一种状态如何通过转换转变为另一种状态来描述的。上面的示例图显示了三种状态：静止、移动和崩溃。你从静止状态开始。你可以从静止状态切换到移动状态。从移动中，您可以更改回静止状态或崩溃状态。没有从静止到崩溃的过渡。（如果你是静止的，你就不会崩溃。）</p><h2 id="_4-1-状态" tabindex="-1"><a class="header-anchor" href="#_4-1-状态"><span>4.1 状态</span></a></h2><ol><li>状态可以通过多种方式声明。最简单的方法是用id定义一个状态：</li></ol><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    stateId</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-ch58jwd">            stateDiagram-v2
    stateId

          </pre></code><ol start="2"><li>使用state关键字和描述，如下所示：</li></ol><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    state &quot;This is a state description&quot; as s2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-etgli3x">            stateDiagram-v2
    state &quot;This is a state description&quot; as s2

          </pre></code><ol start="3"><li>用描述定义状态的另一种方法是定义状态id，后面跟着冒号和描述：</li></ol><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    s2 : This is a state description</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-ld35xe0">            stateDiagram-v2
    s2 : This is a state description

          </pre></code><h2 id="_4-2-转换" tabindex="-1"><a class="header-anchor" href="#_4-2-转换"><span>4.2 转换</span></a></h2><p>当一个状态进入另一个状态时，转换是路径/边。这是用文本箭头“——&gt;”表示的。</p><p>当您定义两个状态之间的转换并且状态尚未定义时，未定义的状态将使用转换的id来定义。以后可以向以这种方式定义的状态添加描述。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    s1 --&gt; s2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-kzkwjd5">            stateDiagram-v2
    s1 --&gt; s2

          </pre></code><p>可以在过渡中添加文字来描述它所代表的内容：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    s1 --&gt; s2: A transition</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-mm6i8kh">            stateDiagram-v2
    s1 --&gt; s2: A transition

          </pre></code><h2 id="_4-3-开始和结束" tabindex="-1"><a class="header-anchor" href="#_4-3-开始和结束"><span>4.3 开始和结束</span></a></h2><p>有两种特殊的状态表示图表的开始和停止。这些是用<code>[*]</code>语法编写的，并且转换到它的方向将其定义为开始状态或停止状态。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    [*] --&gt; s1</span>
<span class="line">    s1 --&gt; [*]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-b06zmhz">            stateDiagram-v2
    [*] --&gt; s1
    s1 --&gt; [*]

          </pre></code><h2 id="_4-4-组合状态" tabindex="-1"><a class="header-anchor" href="#_4-4-组合状态"><span>4.4 组合状态</span></a></h2><p>在现实世界中使用状态图时，您经常会得到多维的图，因为一个状态可以有多个内部状态。这些在这个术语中被称为复合状态。</p><p>为了定义一个复合状态，你需要使用state关键字，后面跟一个id，复合状态的主体在{}之间。您可以像命名简单状态一样，在单独的一行上命名复合状态。请看下面的例子：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    [*] --&gt; First</span>
<span class="line">    state First {</span>
<span class="line">        [*] --&gt; second</span>
<span class="line">        second --&gt; [*]</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    [*] --&gt; NamedComposite</span>
<span class="line">    NamedComposite: Another Composite</span>
<span class="line">    state NamedComposite {</span>
<span class="line">        [*] --&gt; namedSimple</span>
<span class="line">        namedSimple --&gt; [*]</span>
<span class="line">        namedSimple: Another simple</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-rckyfd2">            stateDiagram-v2
    [*] --&gt; First
    state First {
        [*] --&gt; second
        second --&gt; [*]
    }

    [*] --&gt; NamedComposite
    NamedComposite: Another Composite
    state NamedComposite {
        [*] --&gt; namedSimple
        namedSimple --&gt; [*]
        namedSimple: Another simple
    }

          </pre></code><p>你可以在几个图层中这样做：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    [*] --&gt; First</span>
<span class="line"></span>
<span class="line">    state First {</span>
<span class="line">        [*] --&gt; Second</span>
<span class="line"></span>
<span class="line">        state Second {</span>
<span class="line">            [*] --&gt; second</span>
<span class="line">            second --&gt; Third</span>
<span class="line"></span>
<span class="line">            state Third {</span>
<span class="line">                [*] --&gt; third</span>
<span class="line">                third --&gt; [*]</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-e7aykit">            stateDiagram-v2
    [*] --&gt; First

    state First {
        [*] --&gt; Second

        state Second {
            [*] --&gt; second
            second --&gt; Third

            state Third {
                [*] --&gt; third
                third --&gt; [*]
            }
        }
    }

          </pre></code><p>你也可以定义复合状态之间的转换：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    [*] --&gt; First</span>
<span class="line">    First --&gt; Second</span>
<span class="line">    First --&gt; Third</span>
<span class="line"></span>
<span class="line">    state First {</span>
<span class="line">        [*] --&gt; fir</span>
<span class="line">        fir --&gt; [*]</span>
<span class="line">    }</span>
<span class="line">    state Second {</span>
<span class="line">        [*] --&gt; sec</span>
<span class="line">        sec --&gt; [*]</span>
<span class="line">    }</span>
<span class="line">    state Third {</span>
<span class="line">        [*] --&gt; thi</span>
<span class="line">        thi --&gt; [*]</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-cbzedde">            stateDiagram-v2
    [*] --&gt; First
    First --&gt; Second
    First --&gt; Third

    state First {
        [*] --&gt; fir
        fir --&gt; [*]
    }
    state Second {
        [*] --&gt; sec
        sec --&gt; [*]
    }
    state Third {
        [*] --&gt; thi
        thi --&gt; [*]
    }

          </pre></code><p><em>您不能定义属于不同复合状态的内部状态之间的转换</em></p><h2 id="_4-5-选择" tabindex="-1"><a class="header-anchor" href="#_4-5-选择"><span>4.5 选择</span></a></h2><p>有时需要对两个或多个路径之间的选择进行建模，可以使用<code>&lt;\\&gt;</code>。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    state if_state &lt;&lt;choice&gt;&gt;</span>
<span class="line">    [*] --&gt; IsPositive</span>
<span class="line">    IsPositive --&gt; if_state</span>
<span class="line">    if_state --&gt; False: if n &lt; 0</span>
<span class="line">    if_state --&gt; True : if n &gt;= 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-2iywst1">            stateDiagram-v2
    state if_state &lt;&lt;choice&gt;&gt;
    [*] --&gt; IsPositive
    IsPositive --&gt; if_state
    if_state --&gt; False: if n &lt; 0
    if_state --&gt; True : if n &gt;= 0

          </pre></code><h2 id="_4-6-分支" tabindex="-1"><a class="header-anchor" href="#_4-6-分支"><span>4.6 分支</span></a></h2><p>可以使用<code>&lt;\\&gt; &lt;\\&gt;</code>在图中指定一个分支。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">   stateDiagram-v2</span>
<span class="line">    state fork_state &lt;&lt;fork&gt;&gt;</span>
<span class="line">      [*] --&gt; fork_state</span>
<span class="line">      fork_state --&gt; State2</span>
<span class="line">      fork_state --&gt; State3</span>
<span class="line"></span>
<span class="line">      state join_state &lt;&lt;join&gt;&gt;</span>
<span class="line">      State2 --&gt; join_state</span>
<span class="line">      State3 --&gt; join_state</span>
<span class="line">      join_state --&gt; State4</span>
<span class="line">      State4 --&gt; [*]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-r49lji6">               stateDiagram-v2
    state fork_state &lt;&lt;fork&gt;&gt;
      [*] --&gt; fork_state
      fork_state --&gt; State2
      fork_state --&gt; State3

      state join_state &lt;&lt;join&gt;&gt;
      State2 --&gt; join_state
      State3 --&gt; join_state
      join_state --&gt; State4
      State4 --&gt; [*]

          </pre></code><h2 id="_4-7-标记-注释" tabindex="-1"><a class="header-anchor" href="#_4-7-标记-注释"><span>4.7 标记-注释</span></a></h2><p>在这里，您可以选择将注释放在节点的右侧或左侧。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    State1: The state with a note</span>
<span class="line">    note right of State1</span>
<span class="line">        Important information! You can write</span>
<span class="line">        notes.</span>
<span class="line">    end note</span>
<span class="line">    State1 --&gt; State2</span>
<span class="line">    note left of State2 : This is the note to the left.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-w7bp24b">            stateDiagram-v2
    State1: The state with a note
    note right of State1
        Important information! You can write
        notes.
    end note
    State1 --&gt; State2
    note left of State2 : This is the note to the left.

          </pre></code><h2 id="_4-8-并发性" tabindex="-1"><a class="header-anchor" href="#_4-8-并发性"><span>4.8 并发性</span></a></h2><p>与plantUml一样，您可以使用——符号指定并发性。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    [*] --&gt; Active</span>
<span class="line"></span>
<span class="line">    state Active {</span>
<span class="line">        [*] --&gt; NumLockOff</span>
<span class="line">        NumLockOff --&gt; NumLockOn : EvNumLockPressed</span>
<span class="line">        NumLockOn --&gt; NumLockOff : EvNumLockPressed</span>
<span class="line">        --</span>
<span class="line">        [*] --&gt; CapsLockOff</span>
<span class="line">        CapsLockOff --&gt; CapsLockOn : EvCapsLockPressed</span>
<span class="line">        CapsLockOn --&gt; CapsLockOff : EvCapsLockPressed</span>
<span class="line">        --</span>
<span class="line">        [*] --&gt; ScrollLockOff</span>
<span class="line">        ScrollLockOff --&gt; ScrollLockOn : EvScrollLockPressed</span>
<span class="line">        ScrollLockOn --&gt; ScrollLockOff : EvScrollLockPressed</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-1v46jcc">            stateDiagram-v2
    [*] --&gt; Active

    state Active {
        [*] --&gt; NumLockOff
        NumLockOff --&gt; NumLockOn : EvNumLockPressed
        NumLockOn --&gt; NumLockOff : EvNumLockPressed
        --
        [*] --&gt; CapsLockOff
        CapsLockOff --&gt; CapsLockOn : EvCapsLockPressed
        CapsLockOn --&gt; CapsLockOff : EvCapsLockPressed
        --
        [*] --&gt; ScrollLockOff
        ScrollLockOff --&gt; ScrollLockOn : EvScrollLockPressed
        ScrollLockOn --&gt; ScrollLockOff : EvScrollLockPressed
    }

          </pre></code><h2 id="_4-9-设置图表的方向" tabindex="-1"><a class="header-anchor" href="#_4-9-设置图表的方向"><span>4.9 设置图表的方向</span></a></h2><p>对于状态图，您可以使用方向语句来设置图将呈现的方向，就像这个例子一样。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram</span>
<span class="line">    direction LR</span>
<span class="line">    [*] --&gt; A</span>
<span class="line">    A --&gt; B</span>
<span class="line">    B --&gt; C</span>
<span class="line">    state B {</span>
<span class="line">      direction LR</span>
<span class="line">      a --&gt; b</span>
<span class="line">    }</span>
<span class="line">    B --&gt; D</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-a0vv1wa">            stateDiagram
    direction LR
    [*] --&gt; A
    A --&gt; B
    B --&gt; C
    state B {
      direction LR
      a --&gt; b
    }
    B --&gt; D

          </pre></code><h2 id="_4-10-注释" tabindex="-1"><a class="header-anchor" href="#_4-10-注释"><span>4.10 注释</span></a></h2><p>可以在状态图中输入注释，解析器将忽略这些注释。注释需要在单独的行上，并且必须以 <code>%%</code> （双百分号）作为前缀。在注释开始到下一个换行符之后的任何文本都将被视为注释，包括任何图表语法</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram-v2</span>
<span class="line">    [*] --&gt; Still</span>
<span class="line">    Still --&gt; [*]</span>
<span class="line">%% this is a comment</span>
<span class="line">    Still --&gt; Moving</span>
<span class="line">    Moving --&gt; Still %% another comment</span>
<span class="line">    Moving --&gt; Crash</span>
<span class="line">    Crash --&gt; [*]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-g0k90vw">            stateDiagram-v2
    [*] --&gt; Still
    Still --&gt; [*]
%% this is a comment
    Still --&gt; Moving
    Moving --&gt; Still %% another comment
    Moving --&gt; Crash
    Crash --&gt; [*]

          </pre></code><h2 id="_4-11-使用classdef进行样式化" tabindex="-1"><a class="header-anchor" href="#_4-11-使用classdef进行样式化"><span>4.11 使用classdef进行样式化</span></a></h2><h3 id="_4-11-1-基础应用" tabindex="-1"><a class="header-anchor" href="#_4-11-1-基础应用"><span>4.11.1 基础应用</span></a></h3><p>与其他图（如流程图）一样，您可以在图本身中定义样式，并将该命名样式应用于图中的一个或多个状态。</p><p><strong>这些是当前状态图classdef的限制：</strong></p><ol><li>不能应用于开始或结束状态</li><li>不能应用于复合状态或在复合状态内</li></ol><p><em>这些都在开发中，并将在未来的版本中提供。</em></p><p>您使用 <code>classDef</code> 关键字定义样式，该关键字是“类定义”的缩写（其中“类”表示类似CSS类的东西），后跟样式的名称，然后是一个或多个属性值对。每个属性值对都是一个有效的CSS属性名，后面跟着一个冒号（ <code>:</code> ），然后是一个值。</p><p>下面是一个只有一个属性值对的classDef的例子：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">classDef movement font-style:italic;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在</p><ul><li>样式的名称为 <code>movement</code></li><li>唯一的属性为 <code>font-style</code> ，其值为 <code>italic</code></li></ul><p>如果希望有多个属性值对，则在每个属性值对之间使用逗号（ <code>,</code> ）。</p><p>下面是一个包含三个属性-值对的例子：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>样式的名称为 <code>badBadEvent</code></li><li>第一个属性为 <code>fill</code> ，其值为 <code>#f00</code></li><li>第二个属性为 <code>color</code> ，其值为 <code>white</code></li><li>第三个属性 <code>font-weight</code> ，其值 <code>bold</code></li><li>第四个属性 <code>stroke-width</code> ，其值 <code>2px</code></li><li>第五个属性 <code>stroke</code> ，其值 <code>yellow</code></li></ul><h3 id="_4-11-2-对状态应用classdef样式" tabindex="-1"><a class="header-anchor" href="#_4-11-2-对状态应用classdef样式"><span>4.11.2 对状态应用classDef样式</span></a></h3><p>有两种方法可以将 <code>classDef</code> 样式应用到状态：</p><ul><li>使用 <code>class</code> 关键字将classDef样式应用于单个语句中的一个或多个状态，或者</li><li>使用 <code>:::</code> 操作符将classDef样式应用于一个状态，因为它正在转换语句中使用（例如，与另一个状态的箭头）</li></ul><ol><li><code>class</code> 语句</li></ol><p><code>class</code> 语句告诉Mermaid将命名的classDef应用于一个或多个类。表格如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class [one or more state names, separated by commas] [name of a style defined with classDef]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面是一个将 <code>badBadEvent</code> 样式应用到名为 <code>Crash</code> 的状态的示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Crash badBadEvent</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下面是将 <code>movement</code> 样式应用于 <code>Moving</code> 和 <code>Crash</code> 两个状态的示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">class Moving, Crash movement</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里有一个图表显示了使用中的例子。注意， <code>Crash</code> 状态有两个classDef样式应用： <code>movement</code> 和 <code>badBadEvent</code></p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">   stateDiagram</span>
<span class="line">   direction TB</span>
<span class="line"></span>
<span class="line">   accTitle: This is the accessible title</span>
<span class="line">   accDescr: This is an accessible description</span>
<span class="line"></span>
<span class="line">   classDef notMoving fill:white</span>
<span class="line">   classDef movement font-style:italic</span>
<span class="line">   classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow</span>
<span class="line"></span>
<span class="line">   [*]--&gt; Still</span>
<span class="line">   Still --&gt; [*]</span>
<span class="line">   Still --&gt; Moving</span>
<span class="line">   Moving --&gt; Still</span>
<span class="line">   Moving --&gt; Crash</span>
<span class="line">   Crash --&gt; [*]</span>
<span class="line"></span>
<span class="line">   class Still notMoving</span>
<span class="line">   class Moving, Crash movement</span>
<span class="line">   class Crash badBadEvent</span>
<span class="line">   class end badBadEvent</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-er9pg1j">               stateDiagram
   direction TB

   accTitle: This is the accessible title
   accDescr: This is an accessible description

   classDef notMoving fill:white
   classDef movement font-style:italic
   classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow

   [*]--&gt; Still
   Still --&gt; [*]
   Still --&gt; Moving
   Moving --&gt; Still
   Moving --&gt; Crash
   Crash --&gt; [*]

   class Still notMoving
   class Moving, Crash movement
   class Crash badBadEvent
   class end badBadEvent

          </pre></code><ol start="2"><li><code>:::</code> 操作符将样式应用于状态</li></ol><p>您可以使用 <code>:::</code> （三冒号）操作符将classDef样式应用于状态。语法是</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[state]:::[style name]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>您可以在使用类的语句中的关系图中使用它。这包括开始状态和结束状态。例如:</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram</span>
<span class="line">   direction TB</span>
<span class="line"></span>
<span class="line">   accTitle: This is the accessible title</span>
<span class="line">   accDescr: This is an accessible description</span>
<span class="line"></span>
<span class="line">   classDef notMoving fill:white</span>
<span class="line">   classDef movement font-style:italic;</span>
<span class="line">   classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow</span>
<span class="line"></span>
<span class="line">   [*] --&gt; Still:::notMoving</span>
<span class="line">   Still --&gt; [*]</span>
<span class="line">   Still --&gt; Moving:::movement</span>
<span class="line">   Moving --&gt; Still</span>
<span class="line">   Moving --&gt; Crash:::movement</span>
<span class="line">   Crash:::badBadEvent --&gt; [*]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-eg6ggl7">            stateDiagram
   direction TB

   accTitle: This is the accessible title
   accDescr: This is an accessible description

   classDef notMoving fill:white
   classDef movement font-style:italic;
   classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow

   [*] --&gt; Still:::notMoving
   Still --&gt; [*]
   Still --&gt; Moving:::movement
   Moving --&gt; Still
   Moving --&gt; Crash:::movement
   Crash:::badBadEvent --&gt; [*]

          </pre></code><h2 id="_4-12-状态名中的空格" tabindex="-1"><a class="header-anchor" href="#_4-12-状态名中的空格"><span>4.12 状态名中的空格</span></a></h2><p>可以先用id定义状态，然后再引用id，从而在状态中添加空格。</p><p>在下面的示例中，有一个id为yswsii的状态和描述，其中包含空格。定义之后，在图中第一次转换（ <code>[*] --&gt; yswsii</code> ）以及到YetAnotherState （ <code>yswsii --&gt; YetAnotherState</code> ）的转换中使用yswsii。（瑞士的风格与其他州不同。）</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">stateDiagram</span>
<span class="line">    classDef yourState font-style:italic,font-weight:bold,fill:white</span>
<span class="line"></span>
<span class="line">    yswsii: Your state with spaces in it</span>
<span class="line">    [*] --&gt; yswsii:::yourState</span>
<span class="line">    [*] --&gt; SomeOtherState</span>
<span class="line">    SomeOtherState --&gt; YetAnotherState</span>
<span class="line">    yswsii --&gt; YetAnotherState</span>
<span class="line">    YetAnotherState --&gt; [*]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-uy5a56p">            stateDiagram
    classDef yourState font-style:italic,font-weight:bold,fill:white

    yswsii: Your state with spaces in it
    [*] --&gt; yswsii:::yourState
    [*] --&gt; SomeOtherState
    SomeOtherState --&gt; YetAnotherState
    yswsii --&gt; YetAnotherState
    YetAnotherState --&gt; [*]

          </pre></code>`,146)]))}const r=e(l,[["render",t]]),p=JSON.parse('{"path":"/other/other/mermaid/05.html","title":"四、状态图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/05.md"}');export{r as comp,p as data};
