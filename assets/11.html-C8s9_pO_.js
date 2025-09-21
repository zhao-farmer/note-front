import{aq as e,ar as s,as as i,at as a}from"./app-Cok9BT0p.js";const l={};function c(d,n){return a(),s("div",null,n[0]||(n[0]=[i(`<h1 id="十、git图" tabindex="-1"><a class="header-anchor" href="#十、git图"><span>十、Git图</span></a></h1><blockquote><p>Git图是Git提交和Git操作（命令）在不同分支上的图形表示。</p></blockquote><p>这种图表对于开发人员和开发团队分享他们的Git分支策略特别有帮助。例如，它可以更容易地可视化git流的工作方式。</p><h2 id="_10-1-git图基础使用" tabindex="-1"><a class="header-anchor" href="#_10-1-git图基础使用"><span>10.1 git图基础使用</span></a></h2><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">---</span>
<span class="line">title: Example Git diagram</span>
<span class="line">---</span>
<span class="line">gitGraph</span>
<span class="line">   commit</span>
<span class="line">   commit</span>
<span class="line">   branch develop</span>
<span class="line">   checkout develop</span>
<span class="line">   commit</span>
<span class="line">   commit</span>
<span class="line">   checkout main</span>
<span class="line">   merge develop</span>
<span class="line">   commit</span>
<span class="line">   commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-46szm1k">            ---
title: Example Git diagram
---
gitGraph
   commit
   commit
   branch develop
   checkout develop
   commit
   commit
   checkout main
   merge develop
   commit
   commit

          </pre></code><p>在Mermaid中，我们支持基本的git操作，比如：</p><ul><li>commit：表示当前分支上的新提交。</li><li>branch：要创建并切换到一个新的分支，将其设置为当前分支。</li><li>checkout：签出现有分支并将其设置为当前分支。</li><li>merge：将现有分支合并到当前分支上。</li></ul><p>在这些关键git命令的帮助下，您将能够非常轻松快速地在Mermaid中绘制图形。实体名称通常是大写的，尽管在这方面没有公认的标准，在Mermaid中也不是必需的。</p><p>注意： <code>checkout</code> 和 <code>switch</code> 可以互换使用。</p><h2 id="_10-2-语法" tabindex="-1"><a class="header-anchor" href="#_10-2-语法"><span>10.2 语法</span></a></h2><h3 id="_10-2-1-git图标关键字" tabindex="-1"><a class="header-anchor" href="#_10-2-1-git图标关键字"><span>10.2.1 git图标关键字</span></a></h3><p>用于图形的Mermaid语法非常直接和简单。它遵循声明式方法，其中每个提交都按照其在代码中出现/出现的顺序绘制在图中的时间轴上。基本上，它遵循每个命令的插入顺序。</p><p>首先要做的是使用gitgraph关键字声明图表类型。这个 <code>gitgraph</code> 关键字，告诉Mermaid您希望绘制一个图形，并相应地解析图表代码。</p><p>每个图形都用主分支初始化。所以，除非你创建一个不同的分支，否则默认情况下提交将转到主分支。这是由git的工作方式驱动的，一开始总是从主分支（以前称为主分支）开始。默认情况下， <code>main</code> 分支被设置为当前分支。</p><p>使用commit关键字在当前分支上注册提交。让我们看看这是如何工作的：</p><p>一个简单的曲线图显示了默认（主）分支上的三次提交：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">gitGraph</span>
<span class="line">    commit</span>
<span class="line">    commit</span>
<span class="line">    commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-59zizin">            gitGraph
    commit
    commit
    commit

          </pre></code><p>如果仔细查看前面的示例，可以看到默认的分支 <code>main</code> 以及三个提交。另外，请注意，默认情况下，每个提交都有一个唯一的随机ID。如果您想为提交提供自己的自定义ID，该怎么办？是的，《美人鱼》可以做到这一点。</p><h3 id="_10-2-2-添加自定义提交id" tabindex="-1"><a class="header-anchor" href="#_10-2-2-添加自定义提交id"><span>10.2.2 添加自定义提交id</span></a></h3><p>对于给定的提交，您可以在声明时使用 <code>id</code> 属性指定自定义ID，后面跟着 <code>:</code> 和您的自定义值 <code>&quot;&quot;</code> 引号。例如： <code>commit id: &quot;your_custom_id&quot;</code></p><p>让我们通过下面的图表来看看这是如何工作的：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">gitGraph</span>
<span class="line">    commit id: &quot;Alpha&quot;</span>
<span class="line">    commit id: &quot;Beta&quot;</span>
<span class="line">    commit id: &quot;Gamma&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-snlap3a">            gitGraph
    commit id: &quot;Alpha&quot;
    commit id: &quot;Beta&quot;
    commit id: &quot;Gamma&quot;

          </pre></code><p>在本例中，我们为提交提供了自定义id。</p><h3 id="_10-2-3-修改提交类型" tabindex="-1"><a class="header-anchor" href="#_10-2-3-修改提交类型"><span>10.2.3 修改提交类型</span></a></h3><p>在Mermaid中，提交可以是三种类型，它们在图中的呈现略有不同。这些类型是：</p><ul><li><code>NORMAL</code> ：默认提交类型。用图中的实圆表示</li><li><code>REVERSE</code> ：强调提交是反向提交。在图中用交叉实心圆表示。</li><li><code>HIGHLIGHT</code> ：在图中突出显示特定的提交。用图中填充的矩形表示。</li></ul><p>对于给定的提交，您可以在声明它的时候使用 <code>type</code> 属性指定它的类型，然后是 <code>:</code> 和上面讨论的所需类型选项。例如： <code>commit type: HIGHLIGHT</code></p><p>注：如果未指定提交类型，则默认选择 <code>NORMAL</code> 。</p><p>让我们通过下面的图表来看看这些不同的提交类型是怎样的：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">gitGraph</span>
<span class="line">    commit id: &quot;Normal&quot;</span>
<span class="line">    commit</span>
<span class="line">    commit id: &quot;Reverse&quot; type: REVERSE</span>
<span class="line">    commit</span>
<span class="line">    commit id: &quot;Highlight&quot; type: HIGHLIGHT</span>
<span class="line">    commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-590i8uo">            gitGraph
    commit id: &quot;Normal&quot;
    commit
    commit id: &quot;Reverse&quot; type: REVERSE
    commit
    commit id: &quot;Highlight&quot; type: HIGHLIGHT
    commit

          </pre></code><p>在本例中，我们为每次提交指定了不同的类型。另外，看看我们是如何在声明提交时同时包含 <code>id</code> 和 <code>type</code> 的。</p><h3 id="_10-2-4-添加标记" tabindex="-1"><a class="header-anchor" href="#_10-2-4-添加标记"><span>10.2.4 添加标记</span></a></h3><p>对于给定的提交，您可以将其装饰为标签，类似于git世界中的标签或发布版本的概念。您可以在声明提交时使用 <code>tag</code> 属性附加自定义标记，后面跟着 <code>:</code> 和您的自定义值 <code>&quot;&quot;</code> 引号。例如： <code>commit tag: &quot;your_custom_tag&quot;</code></p><p>让我们通过下面的图表来看看这是如何工作的：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    gitGraph</span>
<span class="line">        commit</span>
<span class="line">        commit id: &quot;Normal&quot; tag: &quot;v1.0.0&quot;</span>
<span class="line">        commit</span>
<span class="line">        commit id: &quot;Reverse&quot; type: REVERSE tag: &quot;RC_1&quot;</span>
<span class="line">        commit</span>
<span class="line">        commit id: &quot;Highlight&quot; type: HIGHLIGHT tag: &quot;8.8.4&quot;</span>
<span class="line">        commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-a28x8n6">                gitGraph
        commit
        commit id: &quot;Normal&quot; tag: &quot;v1.0.0&quot;
        commit
        commit id: &quot;Reverse&quot; type: REVERSE tag: &quot;RC_1&quot;
        commit
        commit id: &quot;Highlight&quot; type: HIGHLIGHT tag: &quot;8.8.4&quot;
        commit

          </pre></code><p>在本例中，我们为提交提供了自定义标记。另外，看看我们是如何在一个commit声明中组合所有这些属性的。您可以根据需要混合匹配这些属性。</p><h3 id="_10-2-5-创建一个新分支" tabindex="-1"><a class="header-anchor" href="#_10-2-5-创建一个新分支"><span>10.2.5 创建一个新分支</span></a></h3><p>在Mermaid中，为了创建一个新的分支，您可以使用 <code>branch</code> 关键字。您还需要提供新分支的名称。名称必须是唯一的，不能是现有分支的名称。可能与关键字混淆的分支名称必须在 <code>&quot;&quot;</code> 内加引号。使用示例： <code>branch develop</code> ,  <code>branch &quot;cherry-pick&quot;</code></p><p>当Mermaid读取 <code>branch</code> 关键字时，它创建一个新的分支并将其设置为当前分支。相当于创建一个新的分支并在Git世界中签出它。</p><p>让我们看一个例子：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    gitGraph</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       branch develop</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-pfkup17">                gitGraph
       commit
       commit
       branch develop
       commit
       commit
       commit

          </pre></code><p>maindevelop0-d7e5e4e1-81f00802-4e6ef753-7796a1b4-79d0f32</p><p>在本例中，看看我们如何从default  <code>main</code> 分支开始，并在该分支上推送两次提交。然后我们创建了 <code>develop</code> 分支，之后所有的提交都被放到 <code>develop</code> 分支上，因为它成为了当前的分支。</p><h3 id="_10-2-6-签出现有分支" tabindex="-1"><a class="header-anchor" href="#_10-2-6-签出现有分支"><span>10.2.6 签出现有分支</span></a></h3><p>在Mermaid中，为了切换到现有的分支，您可以使用 <code>checkout</code> 关键字。您还需要提供现有分支的名称。如果没有找到具有给定名称的分支，则会导致控制台错误。使用示例： <code>checkout develop</code></p><p>当Mermaid读取 <code>checkout</code> 关键字时，它找到给定的分支并将其设置为当前分支。相当于签出Git世界中的一个分支。</p><p>让我们修改一下前面的例子：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    gitGraph</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       branch develop</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       checkout main</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-2utqq7r">                gitGraph
       commit
       commit
       branch develop
       commit
       commit
       commit
       checkout main
       commit
       commit

          </pre></code><p>maindevelop0-a7438b11-24f16092-743e6373-0d620f84-5849ea15-0a7fb886-3c04f5a</p><p>在本例中，看看我们如何从default  <code>main</code> 分支开始，并在该分支上推送两次提交。然后我们创建了 <code>develop</code> 分支，之后的所有三个提交都放在 <code>develop</code> 分支上，因为它成为当前分支。在此之后，我们使用 <code>checkout</code> 关键字将当前分支设置为 <code>main</code> ，并且随后的所有提交都针对当前分支注册，即 <code>main</code> 。</p><h3 id="_10-2-7-合并两个分支" tabindex="-1"><a class="header-anchor" href="#_10-2-7-合并两个分支"><span>10.2.7 合并两个分支</span></a></h3><p>在Mermaid中，为了合并或加入到现有分支，您可以使用 <code>merge</code> 关键字。您还需要提供要合并的现有分支的名称。如果没有找到具有给定名称的分支，则会导致控制台错误。此外，您只能合并两个独立的分支，而不能合并分支本身。在这种情况下会抛出错误。</p><p>使用示例： <code>merge develop</code></p><p>当Mermaid读取 <code>merge</code> 关键字时，它会找到给定的分支及其头提交（该分支上的最后一次提交），并将其与当前分支上的头提交连接起来。每次合并都会导致合并提交，在图中用填充的双圆圈表示。</p><p>让我们修改前面的例子来合并两个分支：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    gitGraph</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       branch develop</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       checkout main</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       merge develop</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-zmooedt">                gitGraph
       commit
       commit
       branch develop
       commit
       commit
       commit
       checkout main
       commit
       commit
       merge develop
       commit
       commit

          </pre></code><p>在本例中，看看我们如何从default  <code>main</code> 分支开始，并在该分支上推送两次提交。然后我们创建了 <code>develop</code> 分支，之后的所有三个提交都放在 <code>develop</code> 分支上，因为它成为当前分支。在此之后，我们使用 <code>checkout</code> 关键字将当前分支设置为 <code>main</code> ，并且随后的所有提交都针对当前分支注册，即 <code>main</code> 。在此之后，我们将 <code>develop</code> 分支合并到当前分支 <code>main</code> ，从而产生合并提交。因为此时的当前分支仍然是 <code>main</code> ，所以最后两个提交是根据它注册的。</p><p>你也可以用类似的属性来装饰你的合并，就像你在提交中所做的那样：</p><ul><li><code>id</code> ——&gt;用自定义ID覆盖默认ID</li><li><code>tag</code> ——&gt;添加自定义标签到合并提交</li><li><code>type</code> ——&gt;覆盖合并提交的默认形状。这里可以使用前面提到的其他提交类型。</li></ul><p>您可以选择不使用、部分使用或全部使用这些属性。例如： <code>merge develop id: &quot;my_custom_id&quot; tag: &quot;my_custom_tag&quot; type: REVERSE</code></p><p>让我们通过下面的图表来看看这是如何工作的：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    gitGraph</span>
<span class="line">       commit id: &quot;1&quot;</span>
<span class="line">       commit id: &quot;2&quot;</span>
<span class="line">       branch nice_feature</span>
<span class="line">       checkout nice_feature</span>
<span class="line">       commit id: &quot;3&quot;</span>
<span class="line">       checkout main</span>
<span class="line">       commit id: &quot;4&quot;</span>
<span class="line">       checkout nice_feature</span>
<span class="line">       branch very_nice_feature</span>
<span class="line">       checkout very_nice_feature</span>
<span class="line">       commit id: &quot;5&quot;</span>
<span class="line">       checkout main</span>
<span class="line">       commit id: &quot;6&quot;</span>
<span class="line">       checkout nice_feature</span>
<span class="line">       commit id: &quot;7&quot;</span>
<span class="line">       checkout main</span>
<span class="line">       merge nice_feature id: &quot;customID&quot; tag: &quot;customTag&quot; type: REVERSE</span>
<span class="line">       checkout very_nice_feature</span>
<span class="line">       commit id: &quot;8&quot;</span>
<span class="line">       checkout main</span>
<span class="line">       commit id: &quot;9&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-qbeiide">             gitGraph
       commit id: &quot;1&quot;
       commit id: &quot;2&quot;
       branch nice_feature
       checkout nice_feature
       commit id: &quot;3&quot;
       checkout main
       commit id: &quot;4&quot;
       checkout nice_feature
       branch very_nice_feature
       checkout very_nice_feature
       commit id: &quot;5&quot;
       checkout main
       commit id: &quot;6&quot;
       checkout nice_feature
       commit id: &quot;7&quot;
       checkout main
       merge nice_feature id: &quot;customID&quot; tag: &quot;customTag&quot; type: REVERSE
       checkout very_nice_feature
       commit id: &quot;8&quot;
       checkout main
       commit id: &quot;9&quot;

          </pre></code><h3 id="_10-2-8-cherry-pick从另一个分支提交" tabindex="-1"><a class="header-anchor" href="#_10-2-8-cherry-pick从另一个分支提交"><span>10.2.8 Cherry Pick从另一个分支提交</span></a></h3><p>类似于git允许你从另一个分支选择一个提交到当前分支，Mermaid也支持这个功能。还可以使用 <code>cherry-pick</code> 关键字从另一个分支中挑选提交。</p><p>要使用 <code>cherry-pick</code> 关键字，您必须使用 <code>id</code> 属性指定id，然后使用 <code>:</code> ，并在 <code>&quot;&quot;</code> 引号中指定所需的提交id。例如:</p><p><code>cherry-pick id: &quot;your_custom_id&quot;</code></p><p>在这里，在当前分支上创建了一个代表樱桃的新提交，并在图中用一个樱桃和一个标记突出显示，该标记描述了从樱桃中选择的提交id。</p><p>这里需要注意的一些重要规则是：</p><ol><li>您需要为已存在的提交提供 <code>id</code> 。如果给定的提交id不存在，则会导致错误。为此，使用 <code>commit id:$value</code> 格式声明提交。参见上面的例子。</li><li>给定的提交必须不存在于当前分支上。精心挑选的提交必须始终是与当前分支不同的分支。</li><li>当前分支必须至少有一个提交，在此之前你可以择优选择，否则会导致抛出错误。</li><li>当选择合并提交时，必须提供父提交ID。如果省略了parent属性或提供了无效的父提交ID，则会抛出错误。</li><li>指定的父提交必须是选中的合并提交的直接父提交。</li></ol><p>让我们看一个例子：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    gitGraph</span>
<span class="line">        commit id: &quot;ZERO&quot;</span>
<span class="line">        branch develop</span>
<span class="line">        branch release</span>
<span class="line">        commit id:&quot;A&quot;</span>
<span class="line">        checkout main</span>
<span class="line">        commit id:&quot;ONE&quot;</span>
<span class="line">        checkout develop</span>
<span class="line">        commit id:&quot;B&quot;</span>
<span class="line">        checkout main</span>
<span class="line">        merge develop id:&quot;MERGE&quot;</span>
<span class="line">        commit id:&quot;TWO&quot;</span>
<span class="line">        checkout release</span>
<span class="line">        cherry-pick id:&quot;MERGE&quot; parent:&quot;B&quot;</span>
<span class="line">        commit id:&quot;THREE&quot;</span>
<span class="line">        checkout develop</span>
<span class="line">        commit id:&quot;C&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-a3fb8ao">             gitGraph
        commit id: &quot;ZERO&quot;
        branch develop
        branch release
        commit id:&quot;A&quot;
        checkout main
        commit id:&quot;ONE&quot;
        checkout develop
        commit id:&quot;B&quot;
        checkout main
        merge develop id:&quot;MERGE&quot;
        commit id:&quot;TWO&quot;
        checkout release
        cherry-pick id:&quot;MERGE&quot; parent:&quot;B&quot;
        commit id:&quot;THREE&quot;
        checkout develop
        commit id:&quot;C&quot;

          </pre></code><h2 id="_10-3-图形特定的配置选项" tabindex="-1"><a class="header-anchor" href="#_10-3-图形特定的配置选项"><span>10.3 图形特定的配置选项</span></a></h2><p>在Mermaid中，您可以选择配置曲线图。您可以配置以下选项：</p><ul><li><code>showBranches</code> : Boolean，默认值 <code>true</code> 。如果设置为 <code>false</code> ，则分支不在图中显示。</li><li><code>showCommitLabel</code> : Boolean，默认值 <code>true</code> 。如果设置为 <code>false</code> ，则提交标签不显示在图中。</li><li><code>mainBranchName</code> ：字符串，默认值 <code>main</code> 。默认/根分支的名称。</li><li><code>mainBranchOrder</code> ：主分支在分支列表中的位置。默认为 <code>0</code> ，这意味着默认 <code>main</code> 分支是顺序中的第一个。</li><li><code>parallelCommits</code> : Boolean，默认值 <code>false</code> 。如果设置为 <code>true</code> ，那么距离父节点x距离的提交将显示在图中的同一级别。</li></ul><p>让我们一个一个地看。</p><h2 id="_10-4-隐藏分支名称和行" tabindex="-1"><a class="header-anchor" href="#_10-4-隐藏分支名称和行"><span>10.4 隐藏分支名称和行</span></a></h2><p>有时，您可能希望从图中隐藏分支名称和行。这可以通过使用 <code>showBranches</code> 关键字来实现。缺省值为 <code>true</code> 。您可以使用指令将其设置为 <code>false</code> 。</p><p>使用的例子:</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;showBranches&#39;: false}} }%%</span>
<span class="line">      gitGraph</span>
<span class="line">        commit</span>
<span class="line">        branch hotfix</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit</span>
<span class="line">        branch develop</span>
<span class="line">        checkout develop</span>
<span class="line">        commit id:&quot;ash&quot; tag:&quot;abc&quot;</span>
<span class="line">        branch featureB</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit type:HIGHLIGHT</span>
<span class="line">        checkout main</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit type:NORMAL</span>
<span class="line">        checkout develop</span>
<span class="line">        commit type:REVERSE</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        branch featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge featureA</span>
<span class="line">        branch release</span>
<span class="line">        checkout release</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        commit</span>
<span class="line">        checkout release</span>
<span class="line">        merge main</span>
<span class="line">        checkout develop</span>
<span class="line">        merge release</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-tiq0nap">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;showBranches&#39;: false}} }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:&quot;ash&quot; tag:&quot;abc&quot;
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release

          </pre></code><h2 id="_10-5-提交标签布局-旋转或水平" tabindex="-1"><a class="header-anchor" href="#_10-5-提交标签布局-旋转或水平"><span>10.5 提交标签布局：旋转或水平</span></a></h2><p>Mermaid支持两种类型的提交标签布局。默认布局是旋转的，这意味着标签放在提交圈的下方，旋转45度以获得更好的可读性。这对于带有长标签的提交尤其有用。</p><p>另一个选项是水平的，这意味着标签放置在以水平为中心的提交圆的下方，并且不旋转。这对于带有短标签的提交尤其有用。</p><p>你可以通过在指令中使用 <code>rotateCommitLabel</code> 关键字来改变提交标签的布局。默认值为 <code>true</code> ，这意味着提交标签是旋转的。</p><p>使用示例：旋转提交标签</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;rotateCommitLabel&#39;: true}} }%%</span>
<span class="line">gitGraph</span>
<span class="line">  commit id: &quot;feat(api): ...&quot;</span>
<span class="line">  commit id: &quot;a&quot;</span>
<span class="line">  commit id: &quot;b&quot;</span>
<span class="line">  commit id: &quot;fix(client): .extra long label..&quot;</span>
<span class="line">  branch c2</span>
<span class="line">  commit id: &quot;feat(modules): ...&quot;</span>
<span class="line">  commit id: &quot;test(client): ...&quot;</span>
<span class="line">  checkout main</span>
<span class="line">  commit id: &quot;fix(api): ...&quot;</span>
<span class="line">  commit id: &quot;ci: ...&quot;</span>
<span class="line">  branch b1</span>
<span class="line">  commit</span>
<span class="line">  branch b2</span>
<span class="line">  commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-y8c9mk4">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;rotateCommitLabel&#39;: true}} }%%
gitGraph
  commit id: &quot;feat(api): ...&quot;
  commit id: &quot;a&quot;
  commit id: &quot;b&quot;
  commit id: &quot;fix(client): .extra long label..&quot;
  branch c2
  commit id: &quot;feat(modules): ...&quot;
  commit id: &quot;test(client): ...&quot;
  checkout main
  commit id: &quot;fix(api): ...&quot;
  commit id: &quot;ci: ...&quot;
  branch b1
  commit
  branch b2
  commit

          </pre></code><p>使用示例：水平提交标签</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;rotateCommitLabel&#39;: false}} }%%</span>
<span class="line">gitGraph</span>
<span class="line">  commit id: &quot;feat(api): ...&quot;</span>
<span class="line">  commit id: &quot;a&quot;</span>
<span class="line">  commit id: &quot;b&quot;</span>
<span class="line">  commit id: &quot;fix(client): .extra long label..&quot;</span>
<span class="line">  branch c2</span>
<span class="line">  commit id: &quot;feat(modules): ...&quot;</span>
<span class="line">  commit id: &quot;test(client): ...&quot;</span>
<span class="line">  checkout main</span>
<span class="line">  commit id: &quot;fix(api): ...&quot;</span>
<span class="line">  commit id: &quot;ci: ...&quot;</span>
<span class="line">  branch b1</span>
<span class="line">  commit</span>
<span class="line">  branch b2</span>
<span class="line">  commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-kqa3zym">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;rotateCommitLabel&#39;: false}} }%%
gitGraph
  commit id: &quot;feat(api): ...&quot;
  commit id: &quot;a&quot;
  commit id: &quot;b&quot;
  commit id: &quot;fix(client): .extra long label..&quot;
  branch c2
  commit id: &quot;feat(modules): ...&quot;
  commit id: &quot;test(client): ...&quot;
  checkout main
  commit id: &quot;fix(api): ...&quot;
  commit id: &quot;ci: ...&quot;
  branch b1
  commit
  branch b2
  commit

          </pre></code><h2 id="_10-6-隐藏提交标签" tabindex="-1"><a class="header-anchor" href="#_10-6-隐藏提交标签"><span>10.6 隐藏提交标签</span></a></h2><p>有时，您可能希望从图中隐藏提交标签。这可以通过使用 <code>showCommitLabel</code> 关键字来实现。缺省值为 <code>true</code> 。您可以使用指令将其设置为 <code>false</code> 。</p><p>使用的例子:</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;showBranches&#39;: false,&#39;showCommitLabel&#39;: false}} }%%</span>
<span class="line">      gitGraph</span>
<span class="line">        commit</span>
<span class="line">        branch hotfix</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit</span>
<span class="line">        branch develop</span>
<span class="line">        checkout develop</span>
<span class="line">        commit id:&quot;ash&quot;</span>
<span class="line">        branch featureB</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit type:HIGHLIGHT</span>
<span class="line">        checkout main</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit type:NORMAL</span>
<span class="line">        checkout develop</span>
<span class="line">        commit type:REVERSE</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        branch featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge featureA</span>
<span class="line">        branch release</span>
<span class="line">        checkout release</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        commit</span>
<span class="line">        checkout release</span>
<span class="line">        merge main</span>
<span class="line">        checkout develop</span>
<span class="line">        merge release</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-fmmgtct">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;showBranches&#39;: false,&#39;showCommitLabel&#39;: false}} }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:&quot;ash&quot;
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release

          </pre></code><h2 id="_10-7-自定义主分支名称" tabindex="-1"><a class="header-anchor" href="#_10-7-自定义主分支名称"><span>10.7 自定义主分支名称</span></a></h2><p>有时，您可能希望自定义主/默认分支的名称。这可以通过使用 <code>mainBranchName</code> 关键字来实现。缺省值为 <code>main</code> 。你可以使用指令将它设置为任何字符串。</p><p>使用的例子:</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;showBranches&#39;: true, &#39;showCommitLabel&#39;:true,&#39;mainBranchName&#39;: &#39;MetroLine1&#39;}} }%%</span>
<span class="line">      gitGraph</span>
<span class="line">        commit id:&quot;NewYork&quot;</span>
<span class="line">        commit id:&quot;Dallas&quot;</span>
<span class="line">        branch MetroLine2</span>
<span class="line">        commit id:&quot;LosAngeles&quot;</span>
<span class="line">        commit id:&quot;Chicago&quot;</span>
<span class="line">        commit id:&quot;Houston&quot;</span>
<span class="line">        branch MetroLine3</span>
<span class="line">        commit id:&quot;Phoenix&quot;</span>
<span class="line">        commit type: HIGHLIGHT id:&quot;Denver&quot;</span>
<span class="line">        commit id:&quot;Boston&quot;</span>
<span class="line">        checkout MetroLine1</span>
<span class="line">        commit id:&quot;Atlanta&quot;</span>
<span class="line">        merge MetroLine3</span>
<span class="line">        commit id:&quot;Miami&quot;</span>
<span class="line">        commit id:&quot;Washington&quot;</span>
<span class="line">        merge MetroLine2 tag:&quot;MY JUNCTION&quot;</span>
<span class="line">        commit id:&quot;Boston&quot;</span>
<span class="line">        commit id:&quot;Detroit&quot;</span>
<span class="line">        commit type:REVERSE id:&quot;SanFrancisco&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-5ozgsqs">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;showBranches&#39;: true, &#39;showCommitLabel&#39;:true,&#39;mainBranchName&#39;: &#39;MetroLine1&#39;}} }%%
      gitGraph
        commit id:&quot;NewYork&quot;
        commit id:&quot;Dallas&quot;
        branch MetroLine2
        commit id:&quot;LosAngeles&quot;
        commit id:&quot;Chicago&quot;
        commit id:&quot;Houston&quot;
        branch MetroLine3
        commit id:&quot;Phoenix&quot;
        commit type: HIGHLIGHT id:&quot;Denver&quot;
        commit id:&quot;Boston&quot;
        checkout MetroLine1
        commit id:&quot;Atlanta&quot;
        merge MetroLine3
        commit id:&quot;Miami&quot;
        commit id:&quot;Washington&quot;
        merge MetroLine2 tag:&quot;MY JUNCTION&quot;
        commit id:&quot;Boston&quot;
        commit id:&quot;Detroit&quot;
        commit type:REVERSE id:&quot;SanFrancisco&quot;

          </pre></code><p>看看用“美人鱼”创建的想象中的铁路地图。这里，我们将默认的主分支名称更改为 <code>MetroLine1</code> 。</p><h2 id="_10-8-定制分支订购" tabindex="-1"><a class="header-anchor" href="#_10-8-定制分支订购"><span>10.8 定制分支订购</span></a></h2><p>在Mermaid中，默认情况下，分支按照它们在图代码中的定义或外观顺序显示。</p><p>有时，您可能希望自定义分支的顺序。可以通过在分支定义后面使用 <code>order</code> 关键字来实现这一点。你可以把它设为正数。</p><p>Mermaid遵循 <code>order</code> 关键字的给定优先顺序。</p><ul><li>主分支总是首先显示，因为它的默认顺序值为 <code>0</code> 。（除非它的顺序被修改，并且使用 <code>mainBranchOrder</code> 关键字在配置中从 <code>0</code> 改变）</li><li>接下来，所有没有 <code>order</code> 的分支按照它们在图代码中的出现顺序显示。</li><li>接下来，所有 <code>order</code> 的分支按照 <code>order</code> 值的顺序显示。</li></ul><p>要完全控制所有分支的顺序，必须为所有分支定义 <code>order</code> 。</p><p>使用的例子:</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;showBranches&#39;: true, &#39;showCommitLabel&#39;:true}} }%%</span>
<span class="line">      gitGraph</span>
<span class="line">      commit</span>
<span class="line">      branch test1 order: 3</span>
<span class="line">      branch test2 order: 2</span>
<span class="line">      branch test3 order: 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-8oz4kxc">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;showBranches&#39;: true, &#39;showCommitLabel&#39;:true}} }%%
      gitGraph
      commit
      branch test1 order: 3
      branch test2 order: 2
      branch test3 order: 1

          </pre></code><p>看一下这个图，所有的分支都遵循定义的顺序。</p><p>使用的例子:</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;showBranches&#39;: true, &#39;showCommitLabel&#39;:true,&#39;mainBranchOrder&#39;: 2}} }%%</span>
<span class="line">      gitGraph</span>
<span class="line">      commit</span>
<span class="line">      branch test1 order: 3</span>
<span class="line">      branch test2</span>
<span class="line">      branch test3</span>
<span class="line">      branch test4 order: 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-1rsinzu">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;gitGraph&#39;: {&#39;showBranches&#39;: true, &#39;showCommitLabel&#39;:true,&#39;mainBranchOrder&#39;: 2}} }%%
      gitGraph
      commit
      branch test1 order: 3
      branch test2
      branch test3
      branch test4 order: 1

          </pre></code><p>看这张图，这里，所有没有指定顺序的分支都是按照它们的定义顺序绘制的。然后，由于 <code>1</code> 的顺序，绘制 <code>test4</code> 分支。然后，由于 <code>2</code> 的顺序，绘制 <code>main</code> 分支。最后，绘制 <code>test1</code> ，因为 <code>3</code> 的顺序。</p><p>注意：因为我们已经覆盖了 <code>mainBranchOrder</code> 到 <code>2</code> ,  <code>main</code> 分支不会在开始绘制，而是按照顺序绘制。</p><p>这里，我们将默认的主分支名称更改为 <code>MetroLine1</code> 。</p><h2 id="_10-9-定向" tabindex="-1"><a class="header-anchor" href="#_10-9-定向"><span>10.9 定向</span></a></h2><p>Mermaid支持三种图形方向：从左到右（默认）、从上到下和从下到上。</p><p>您可以在 <code>gitGraph</code> 之后设置 <code>LR:</code> （从左到右）， <code>TB:</code> （从上到下）或 <code>BT:</code> （从下到上）。</p><h3 id="_10-9-1-从左到右-默认-lr" tabindex="-1"><a class="header-anchor" href="#_10-9-1-从左到右-默认-lr"><span>10.9.1 从左到右（默认 <code>LR:</code> ）</span></a></h3><p>在Mermaid中，默认的方向是提交从左到右运行，分支堆叠在一起。</p><p>但是，您可以在 <code>gitGraph</code> 之后显式地设置 <code>LR:</code> 。</p><p>使用的例子:</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    gitGraph LR:</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       branch develop</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       checkout main</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       merge develop</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-yeq8u8n">                gitGraph LR:
       commit
       commit
       branch develop
       commit
       commit
       checkout main
       commit
       commit
       merge develop
       commit
       commit

          </pre></code><h3 id="_10-9-2-从上到下-tb" tabindex="-1"><a class="header-anchor" href="#_10-9-2-从上到下-tb"><span>10.9.2 从上到下（ <code>TB:</code> ）</span></a></h3><p>在 <code>TB</code> （从上到下）方向下，提交从图的上到下运行，分支并排排列。</p><p>要以这种方式定位图形，需要在gitGraph后面添加 <code>TB:</code> 。</p><p>使用的例子:</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    gitGraph TB:</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       branch develop</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       checkout main</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       merge develop</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-7c6uc0b">                gitGraph TB:
       commit
       commit
       branch develop
       commit
       commit
       checkout main
       commit
       commit
       merge develop
       commit
       commit

          </pre></code><p>maindevelop0-b10df9e1-e73d5262-1879ef43-e1961ce4-10155e75-cde27cf7-aee71028-dc120aa</p><h3 id="_10-9-3-从底部到顶部-bt" tabindex="-1"><a class="header-anchor" href="#_10-9-3-从底部到顶部-bt"><span>10.9.3 从底部到顶部（ <code>BT:</code> ）</span></a></h3><p>在 <code>BT</code> （从下到上）方向下，提交从图的底部到顶部运行，分支并排排列。</p><p>要以这种方式定位图形，需要在gitGraph后面添加 <code>BT:</code> 。</p><p>使用的例子:</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    gitGraph BT:</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       branch develop</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       checkout main</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line">       merge develop</span>
<span class="line">       commit</span>
<span class="line">       commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-dbu9iqg">                gitGraph BT:
       commit
       commit
       branch develop
       commit
       commit
       checkout main
       commit
       commit
       merge develop
       commit
       commit

          </pre></code><p>maindevelop8-3e50be57-e122f7d5-9dbcb1c4-c4972f63-4230dfd2-1c508a61-02bbf750-b30c5fd</p><h2 id="_10-10-并行提交" tabindex="-1"><a class="header-anchor" href="#_10-10-并行提交"><span>10.10 并行提交</span></a></h2><p>在缺省情况下，在Mermaid中提交以图形显示时间信息。例如，如果两个提交离它的父提交是一个提交，那么较早的提交就会呈现在离它的父提交更近的地方。您可以通过启用 <code>parallelCommits</code> 标志来关闭此功能。</p><h3 id="_10-10-1-临时提交-默认-parallelcommits-false" tabindex="-1"><a class="header-anchor" href="#_10-10-1-临时提交-默认-parallelcommits-false"><span>10.10.1 临时提交（默认， <code>parallelCommits: false</code> ）</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">---</span>
<span class="line">config:</span>
<span class="line">  gitGraph:</span>
<span class="line">    parallelCommits: false</span>
<span class="line">---</span>
<span class="line">gitGraph:</span>
<span class="line">  commit</span>
<span class="line">  branch develop</span>
<span class="line">  commit</span>
<span class="line">  commit</span>
<span class="line">  checkout main</span>
<span class="line">  commit</span>
<span class="line">  commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-q9zwcqa">            ---
config:
  gitGraph:
    parallelCommits: false
---
gitGraph:
  commit
  branch develop
  commit
  commit
  checkout main
  commit
  commit

          </pre></code><p>maindevelop0-a91d0b01-39d386f2-2caabdc3-64517ff4-9d74d69</p><h3 id="_10-10-2-并行提交-parallelcommits-true" tabindex="-1"><a class="header-anchor" href="#_10-10-2-并行提交-parallelcommits-true"><span>10.10.2 并行提交（ <code>parallelCommits: true</code> ）</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">---</span>
<span class="line">config:</span>
<span class="line">  gitGraph:</span>
<span class="line">    parallelCommits: true</span>
<span class="line">---</span>
<span class="line">gitGraph:</span>
<span class="line">  commit</span>
<span class="line">  branch develop</span>
<span class="line">  commit</span>
<span class="line">  commit</span>
<span class="line">  checkout main</span>
<span class="line">  commit</span>
<span class="line">  commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-cb3d80m">            ---
config:
  gitGraph:
    parallelCommits: true
---
gitGraph:
  commit
  branch develop
  commit
  commit
  checkout main
  commit
  commit

          </pre></code><p>maindevelop0-3f0c5a11-faead972-3a36e373-97ad1eb4-679867e</p><h2 id="_10-11-主题" tabindex="-1"><a class="header-anchor" href="#_10-11-主题"><span>10.11 主题</span></a></h2><p>美人鱼支持一堆预定义的主题，你可以用它来找到适合你的。PS：你实际上可以覆盖一个现有的主题的变量，让你自己的自定义主题。在这里了解更多关于图表主题化的信息。</p><p>以下是不同的预定义主题选项：</p><ul><li><code>base</code></li><li><code>forest</code></li><li><code>dark</code></li><li><code>default</code></li><li><code>neutral</code></li></ul><p>注意：要更改主题，你可以使用 <code>initialize</code> 调用或指令。让我们来使用它们，看看我们的示例图在不同的主题中是怎样的：</p><h3 id="_10-11-1-基本主题" tabindex="-1"><a class="header-anchor" href="#_10-11-1-基本主题"><span>10.11.1 基本主题</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39; } }%%</span>
<span class="line">      gitGraph</span>
<span class="line">        commit</span>
<span class="line">        branch hotfix</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit</span>
<span class="line">        branch develop</span>
<span class="line">        checkout develop</span>
<span class="line">        commit id:&quot;ash&quot; tag:&quot;abc&quot;</span>
<span class="line">        branch featureB</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit type:HIGHLIGHT</span>
<span class="line">        checkout main</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit type:NORMAL</span>
<span class="line">        checkout develop</span>
<span class="line">        commit type:REVERSE</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        branch featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge featureA</span>
<span class="line">        branch release</span>
<span class="line">        checkout release</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        commit</span>
<span class="line">        checkout release</span>
<span class="line">        merge main</span>
<span class="line">        checkout develop</span>
<span class="line">        merge release</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-4gfqpeb">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39; } }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:&quot;ash&quot; tag:&quot;abc&quot;
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release

          </pre></code><p>mainhotfixdevelopfeatureBfeatureArelease0-c380dd21-f5c78e6ashabc3-4e231344-1843def5-ee3c77d6-de78e108-835707c9-902e61f11-290cb5e12-af920da14-61ee68e15-8f36ae2</p><h3 id="_10-11-2-森林主题" tabindex="-1"><a class="header-anchor" href="#_10-11-2-森林主题"><span>10.11.2 森林主题</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;forest&#39; } }%%</span>
<span class="line">      gitGraph</span>
<span class="line">        commit</span>
<span class="line">        branch hotfix</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit</span>
<span class="line">        branch develop</span>
<span class="line">        checkout develop</span>
<span class="line">        commit id:&quot;ash&quot; tag:&quot;abc&quot;</span>
<span class="line">        branch featureB</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit type:HIGHLIGHT</span>
<span class="line">        checkout main</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit type:NORMAL</span>
<span class="line">        checkout develop</span>
<span class="line">        commit type:REVERSE</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        branch featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge featureA</span>
<span class="line">        branch release</span>
<span class="line">        checkout release</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        commit</span>
<span class="line">        checkout release</span>
<span class="line">        merge main</span>
<span class="line">        checkout develop</span>
<span class="line">        merge release</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-fxjdegt">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;forest&#39; } }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:&quot;ash&quot; tag:&quot;abc&quot;
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release

          </pre></code><h3 id="_10-11-3-默认主题" tabindex="-1"><a class="header-anchor" href="#_10-11-3-默认主题"><span>10.11.3 默认主题</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; } }%%</span>
<span class="line">      gitGraph</span>
<span class="line">        commit type:HIGHLIGHT</span>
<span class="line">        branch hotfix</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit</span>
<span class="line">        branch develop</span>
<span class="line">        checkout develop</span>
<span class="line">        commit id:&quot;ash&quot; tag:&quot;abc&quot;</span>
<span class="line">        branch featureB</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit type:HIGHLIGHT</span>
<span class="line">        checkout main</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit type:NORMAL</span>
<span class="line">        checkout develop</span>
<span class="line">        commit type:REVERSE</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        branch featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge featureA</span>
<span class="line">        branch release</span>
<span class="line">        checkout release</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        commit</span>
<span class="line">        checkout release</span>
<span class="line">        merge main</span>
<span class="line">        checkout develop</span>
<span class="line">        merge release</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-ihodmhq">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; } }%%
      gitGraph
        commit type:HIGHLIGHT
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:&quot;ash&quot; tag:&quot;abc&quot;
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release

          </pre></code><h3 id="_10-11-4-黑暗的主题" tabindex="-1"><a class="header-anchor" href="#_10-11-4-黑暗的主题"><span>10.11.4 黑暗的主题</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;dark&#39; } }%%</span>
<span class="line">      gitGraph</span>
<span class="line">        commit</span>
<span class="line">        branch hotfix</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit</span>
<span class="line">        branch develop</span>
<span class="line">        checkout develop</span>
<span class="line">        commit id:&quot;ash&quot; tag:&quot;abc&quot;</span>
<span class="line">        branch featureB</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit type:HIGHLIGHT</span>
<span class="line">        checkout main</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit type:NORMAL</span>
<span class="line">        checkout develop</span>
<span class="line">        commit type:REVERSE</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        branch featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge featureA</span>
<span class="line">        branch release</span>
<span class="line">        checkout release</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        commit</span>
<span class="line">        checkout release</span>
<span class="line">        merge main</span>
<span class="line">        checkout develop</span>
<span class="line">        merge release</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-bo7dr23">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;dark&#39; } }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:&quot;ash&quot; tag:&quot;abc&quot;
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release

          </pre></code><h3 id="_10-11-5-中性的主题" tabindex="-1"><a class="header-anchor" href="#_10-11-5-中性的主题"><span>10.11.5 中性的主题</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;neutral&#39; } }%%</span>
<span class="line">      gitGraph</span>
<span class="line">        commit</span>
<span class="line">        branch hotfix</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit</span>
<span class="line">        branch develop</span>
<span class="line">        checkout develop</span>
<span class="line">        commit id:&quot;ash&quot; tag:&quot;abc&quot;</span>
<span class="line">        branch featureB</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit type:HIGHLIGHT</span>
<span class="line">        checkout main</span>
<span class="line">        checkout hotfix</span>
<span class="line">        commit type:NORMAL</span>
<span class="line">        checkout develop</span>
<span class="line">        commit type:REVERSE</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        branch featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge hotfix</span>
<span class="line">        checkout featureA</span>
<span class="line">        commit</span>
<span class="line">        checkout featureB</span>
<span class="line">        commit</span>
<span class="line">        checkout develop</span>
<span class="line">        merge featureA</span>
<span class="line">        branch release</span>
<span class="line">        checkout release</span>
<span class="line">        commit</span>
<span class="line">        checkout main</span>
<span class="line">        commit</span>
<span class="line">        checkout release</span>
<span class="line">        merge main</span>
<span class="line">        checkout develop</span>
<span class="line">        merge release</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-mrmqd81">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;neutral&#39; } }%%
      gitGraph
        commit
        branch hotfix
        checkout hotfix
        commit
        branch develop
        checkout develop
        commit id:&quot;ash&quot; tag:&quot;abc&quot;
        branch featureB
        checkout featureB
        commit type:HIGHLIGHT
        checkout main
        checkout hotfix
        commit type:NORMAL
        checkout develop
        commit type:REVERSE
        checkout featureB
        commit
        checkout main
        merge hotfix
        checkout featureB
        commit
        checkout develop
        branch featureA
        commit
        checkout develop
        merge hotfix
        checkout featureA
        commit
        checkout featureB
        commit
        checkout develop
        merge featureA
        branch release
        checkout release
        commit
        checkout main
        commit
        checkout release
        merge main
        checkout develop
        merge release

          </pre></code><h2 id="_10-12-使用主题变量自定义" tabindex="-1"><a class="header-anchor" href="#_10-12-使用主题变量自定义"><span>10.12 使用主题变量自定义</span></a></h2><h3 id="_10-12-1-基础自定义" tabindex="-1"><a class="header-anchor" href="#_10-12-1-基础自定义"><span>10.12.1 基础自定义</span></a></h3><p>Mermaid允许您使用主题变量来定制图表，这些主题变量控制图表中各种元素的外观和感觉。</p><p>为了便于理解，让我们举一个示例图，其中theme  <code>default</code> ，主题变量的默认值是自动从主题中选取的。稍后，我们将看到如何覆盖主题变量的默认值。</p><p>看看默认主题是如何被用来设置分支的颜色的：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; } }%%</span>
<span class="line">       gitGraph</span>
<span class="line">       commit</span>
<span class="line">       branch develop</span>
<span class="line">       commit tag:&quot;v1.0.0&quot;</span>
<span class="line">       commit</span>
<span class="line">       checkout main</span>
<span class="line">       commit type: HIGHLIGHT</span>
<span class="line">       commit</span>
<span class="line">       merge develop</span>
<span class="line">       commit</span>
<span class="line">       branch featureA</span>
<span class="line">       commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-qie8xfi">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; } }%%
       gitGraph
       commit
       branch develop
       commit tag:&quot;v1.0.0&quot;
       commit
       checkout main
       commit type: HIGHLIGHT
       commit
       merge develop
       commit
       branch featureA
       commit

          </pre></code><blockquote><p>Mermaid支持主题变量覆盖多达8个分支的默认值，也就是说，你可以使用主题变量设置多达8个分支的颜色/样式。在这个8个分支的阈值之后，主题变量以循环的方式被重用，即第9个分支将使用第1个分支的颜色/样式，或者索引位置“8”的分支将使用索引位置“0”的分支的颜色/样式。下一节将详细介绍这一点。请参阅下面自定义分支标签颜色的示例</p></blockquote><h3 id="_10-12-2-自定义分支颜色" tabindex="-1"><a class="header-anchor" href="#_10-12-2-自定义分支颜色"><span>10.12.2 自定义分支颜色</span></a></h3><p>您可以使用 <code>git0</code> 到 <code>git7</code> 主题变量自定义分支颜色。Mermaid允许您为多达8个分支设置颜色，其中 <code>git0</code> 变量将驱动第一个分支的值， <code>git1</code> 将驱动第二个分支的值，依此类推。</p><p>注意：这些主题变量的默认值是从选定的主题中选取的。如果要覆盖默认值，可以使用 <code>initialize</code> 调用来添加自定义主题变量值。</p><p>例子:</p><p>现在让我们重写 <code>git0</code> 到 <code>git3</code> 变量的默认值：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {</span>
<span class="line">              &#39;git0&#39;: &#39;#ff0000&#39;,</span>
<span class="line">              &#39;git1&#39;: &#39;#00ff00&#39;,</span>
<span class="line">              &#39;git2&#39;: &#39;#0000ff&#39;,</span>
<span class="line">              &#39;git3&#39;: &#39;#ff00ff&#39;,</span>
<span class="line">              &#39;git4&#39;: &#39;#00ffff&#39;,</span>
<span class="line">              &#39;git5&#39;: &#39;#ffff00&#39;,</span>
<span class="line">              &#39;git6&#39;: &#39;#ff00ff&#39;,</span>
<span class="line">              &#39;git7&#39;: &#39;#00ffff&#39;</span>
<span class="line">       } } }%%</span>
<span class="line">       gitGraph</span>
<span class="line">       commit</span>
<span class="line">       branch develop</span>
<span class="line">       commit tag:&quot;v1.0.0&quot;</span>
<span class="line">       commit</span>
<span class="line">       checkout main</span>
<span class="line">       commit type: HIGHLIGHT</span>
<span class="line">       commit</span>
<span class="line">       merge develop</span>
<span class="line">       commit</span>
<span class="line">       branch featureA</span>
<span class="line">       commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-wvargb2">             %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {
              &#39;git0&#39;: &#39;#ff0000&#39;,
              &#39;git1&#39;: &#39;#00ff00&#39;,
              &#39;git2&#39;: &#39;#0000ff&#39;,
              &#39;git3&#39;: &#39;#ff00ff&#39;,
              &#39;git4&#39;: &#39;#00ffff&#39;,
              &#39;git5&#39;: &#39;#ffff00&#39;,
              &#39;git6&#39;: &#39;#ff00ff&#39;,
              &#39;git7&#39;: &#39;#00ffff&#39;
       } } }%%
       gitGraph
       commit
       branch develop
       commit tag:&quot;v1.0.0&quot;
       commit
       checkout main
       commit type: HIGHLIGHT
       commit
       merge develop
       commit
       branch featureA
       commit

          </pre></code><p>查看如何将分支颜色更改为主题变量中指定的值。</p><h3 id="_10-12-3-自定义分支标签颜色" tabindex="-1"><a class="header-anchor" href="#_10-12-3-自定义分支标签颜色"><span>10.12.3 自定义分支标签颜色</span></a></h3><p>您可以使用 <code>gitBranchLabel0</code> 到 <code>gitBranchLabel7</code> 主题变量自定义分支标签颜色。Mermaid允许您为多达8个分支设置颜色，其中 <code>gitBranchLabel0</code> 变量将驱动第一个分支标签的值， <code>gitBranchLabel1</code> 将驱动第二个分支标签的值，依此类推。</p><p>让我们看看默认主题是如何设置分支标签的颜色的：</p><p>现在让我们重写 <code>gitBranchLabel0</code> 到 <code>gitBranchLabel2</code> 变量的默认值：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {</span>
<span class="line">        &#39;gitBranchLabel0&#39;: &#39;#ffffff&#39;,</span>
<span class="line">        &#39;gitBranchLabel1&#39;: &#39;#ffffff&#39;,</span>
<span class="line">        &#39;gitBranchLabel2&#39;: &#39;#ffffff&#39;,</span>
<span class="line">        &#39;gitBranchLabel3&#39;: &#39;#ffffff&#39;,</span>
<span class="line">        &#39;gitBranchLabel4&#39;: &#39;#ffffff&#39;,</span>
<span class="line">        &#39;gitBranchLabel5&#39;: &#39;#ffffff&#39;,</span>
<span class="line">        &#39;gitBranchLabel6&#39;: &#39;#ffffff&#39;,</span>
<span class="line">        &#39;gitBranchLabel7&#39;: &#39;#ffffff&#39;,</span>
<span class="line">        &#39;gitBranchLabel8&#39;: &#39;#ffffff&#39;,</span>
<span class="line">        &#39;gitBranchLabel9&#39;: &#39;#ffffff&#39;</span>
<span class="line">  } } }%%</span>
<span class="line">  gitGraph</span>
<span class="line">    checkout main</span>
<span class="line">    branch branch1</span>
<span class="line">    branch branch2</span>
<span class="line">    branch branch3</span>
<span class="line">    branch branch4</span>
<span class="line">    branch branch5</span>
<span class="line">    branch branch6</span>
<span class="line">    branch branch7</span>
<span class="line">    branch branch8</span>
<span class="line">    branch branch9</span>
<span class="line">    checkout branch1</span>
<span class="line">    commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-efgzyu0">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {
        &#39;gitBranchLabel0&#39;: &#39;#ffffff&#39;,
        &#39;gitBranchLabel1&#39;: &#39;#ffffff&#39;,
        &#39;gitBranchLabel2&#39;: &#39;#ffffff&#39;,
        &#39;gitBranchLabel3&#39;: &#39;#ffffff&#39;,
        &#39;gitBranchLabel4&#39;: &#39;#ffffff&#39;,
        &#39;gitBranchLabel5&#39;: &#39;#ffffff&#39;,
        &#39;gitBranchLabel6&#39;: &#39;#ffffff&#39;,
        &#39;gitBranchLabel7&#39;: &#39;#ffffff&#39;,
        &#39;gitBranchLabel8&#39;: &#39;#ffffff&#39;,
        &#39;gitBranchLabel9&#39;: &#39;#ffffff&#39;
  } } }%%
  gitGraph
    checkout main
    branch branch1
    branch branch2
    branch branch3
    branch branch4
    branch branch5
    branch branch6
    branch branch7
    branch branch8
    branch branch9
    checkout branch1
    commit

          </pre></code><p>在这里，你可以看到 <code>branch8</code> 和 <code>branch9</code> 颜色和样式分别是从索引位置 <code>0</code>  ( <code>main</code> )和 <code>1</code> ( <code>branch1</code> )的分支中挑选的，即分支themeVariables循环重复。</p><h3 id="_10-12-4-自定义提交颜色" tabindex="-1"><a class="header-anchor" href="#_10-12-4-自定义提交颜色"><span>10.12.4 自定义提交颜色</span></a></h3><p>您可以使用 <code>commitLabelColor</code> 和 <code>commitLabelBackground</code> 主题变量来定制提交，以分别更改提交标签颜色和背景颜色。</p><p>现在让我们重写 <code>commitLabelColor</code> 到 <code>commitLabelBackground</code> 变量的默认值：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {</span>
<span class="line">            &#39;commitLabelColor&#39;: &#39;#ff0000&#39;,</span>
<span class="line">            &#39;commitLabelBackground&#39;: &#39;#00ff00&#39;</span>
<span class="line">    } } }%%</span>
<span class="line">    gitGraph</span>
<span class="line">    commit</span>
<span class="line">    branch develop</span>
<span class="line">    commit tag:&quot;v1.0.0&quot;</span>
<span class="line">    commit</span>
<span class="line">    checkout main</span>
<span class="line">    commit type: HIGHLIGHT</span>
<span class="line">    commit</span>
<span class="line">    merge develop</span>
<span class="line">    commit</span>
<span class="line">    branch featureA</span>
<span class="line">    commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-uy34r9u">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {
            &#39;commitLabelColor&#39;: &#39;#ff0000&#39;,
            &#39;commitLabelBackground&#39;: &#39;#00ff00&#39;
    } } }%%
    gitGraph
    commit
    branch develop
    commit tag:&quot;v1.0.0&quot;
    commit
    checkout main
    commit type: HIGHLIGHT
    commit
    merge develop
    commit
    branch featureA
    commit

          </pre></code><p>查看如何将提交标签颜色和背景颜色更改为主题变量中指定的值。</p><h3 id="_10-12-5-自定义提交标签字体大小" tabindex="-1"><a class="header-anchor" href="#_10-12-5-自定义提交标签字体大小"><span>10.12.5 自定义提交标签字体大小</span></a></h3><p>您可以使用 <code>commitLabelFontSize</code> 主题变量来定制提交，以更改提交标签的字体大小。</p><p>示例：现在让我们重写 <code>commitLabelFontSize</code> 变量的默认值：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {</span>
<span class="line">            &#39;commitLabelColor&#39;: &#39;#ff0000&#39;,</span>
<span class="line">            &#39;commitLabelBackground&#39;: &#39;#00ff00&#39;,</span>
<span class="line">            &#39;commitLabelFontSize&#39;: &#39;16px&#39;</span>
<span class="line">    } } }%%</span>
<span class="line">    gitGraph</span>
<span class="line">    commit</span>
<span class="line">    branch develop</span>
<span class="line">    commit tag:&quot;v1.0.0&quot;</span>
<span class="line">    commit</span>
<span class="line">    checkout main</span>
<span class="line">    commit type: HIGHLIGHT</span>
<span class="line">    commit</span>
<span class="line">    merge develop</span>
<span class="line">    commit</span>
<span class="line">    branch featureA</span>
<span class="line">    commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-cu8e8hk">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {
            &#39;commitLabelColor&#39;: &#39;#ff0000&#39;,
            &#39;commitLabelBackground&#39;: &#39;#00ff00&#39;,
            &#39;commitLabelFontSize&#39;: &#39;16px&#39;
    } } }%%
    gitGraph
    commit
    branch develop
    commit tag:&quot;v1.0.0&quot;
    commit
    checkout main
    commit type: HIGHLIGHT
    commit
    merge develop
    commit
    branch featureA
    commit

          </pre></code><p>查看提交标签字体大小如何更改。</p><h3 id="_10-12-6-自定义标签标签字体大小" tabindex="-1"><a class="header-anchor" href="#_10-12-6-自定义标签标签字体大小"><span>10.12.6 自定义标签标签字体大小</span></a></h3><p>您可以使用 <code>tagLabelFontSize</code> 主题变量自定义提交，以更改标记标签的字体大小。</p><p>示例：现在让我们重写 <code>tagLabelFontSize</code> 变量的默认值：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {</span>
<span class="line">            &#39;commitLabelColor&#39;: &#39;#ff0000&#39;,</span>
<span class="line">            &#39;commitLabelBackground&#39;: &#39;#00ff00&#39;,</span>
<span class="line">            &#39;tagLabelFontSize&#39;: &#39;16px&#39;</span>
<span class="line">    } } }%%</span>
<span class="line">    gitGraph</span>
<span class="line">    commit</span>
<span class="line">    branch develop</span>
<span class="line">    commit tag:&quot;v1.0.0&quot;</span>
<span class="line">    commit</span>
<span class="line">    checkout main</span>
<span class="line">    commit type: HIGHLIGHT</span>
<span class="line">    commit</span>
<span class="line">    merge develop</span>
<span class="line">    commit</span>
<span class="line">    branch featureA</span>
<span class="line">    commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-jt3nyxd">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {
            &#39;commitLabelColor&#39;: &#39;#ff0000&#39;,
            &#39;commitLabelBackground&#39;: &#39;#00ff00&#39;,
            &#39;tagLabelFontSize&#39;: &#39;16px&#39;
    } } }%%
    gitGraph
    commit
    branch develop
    commit tag:&quot;v1.0.0&quot;
    commit
    checkout main
    commit type: HIGHLIGHT
    commit
    merge develop
    commit
    branch featureA
    commit

          </pre></code><p>查看标签标签字体大小如何变化。</p><h3 id="_10-12-7-自定义标签颜色" tabindex="-1"><a class="header-anchor" href="#_10-12-7-自定义标签颜色"><span>10.12.7 自定义标签颜色</span></a></h3><p>您可以使用 <code>tagLabelColor</code> , <code>tagLabelBackground</code> 和 <code>tagLabelBorder</code> 主题变量来定制标签，分别更改标签标签颜色，标签标签背景颜色和标签标签边框。示例：现在让我们重写 <code>tagLabelColor</code> ,  <code>tagLabelBackground</code> 和 <code>tagLabelBorder</code> 变量的默认值：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {</span>
<span class="line">              &#39;tagLabelColor&#39;: &#39;#ff0000&#39;,</span>
<span class="line">              &#39;tagLabelBackground&#39;: &#39;#00ff00&#39;,</span>
<span class="line">              &#39;tagLabelBorder&#39;: &#39;#0000ff&#39;</span>
<span class="line">       } } }%%</span>
<span class="line">       gitGraph</span>
<span class="line">       commit</span>
<span class="line">       branch develop</span>
<span class="line">       commit tag:&quot;v1.0.0&quot;</span>
<span class="line">       commit</span>
<span class="line">       checkout main</span>
<span class="line">       commit type: HIGHLIGHT</span>
<span class="line">       commit</span>
<span class="line">       merge develop</span>
<span class="line">       commit</span>
<span class="line">       branch featureA</span>
<span class="line">       commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-9v9xmpj">              %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {
              &#39;tagLabelColor&#39;: &#39;#ff0000&#39;,
              &#39;tagLabelBackground&#39;: &#39;#00ff00&#39;,
              &#39;tagLabelBorder&#39;: &#39;#0000ff&#39;
       } } }%%
       gitGraph
       commit
       branch develop
       commit tag:&quot;v1.0.0&quot;
       commit
       checkout main
       commit type: HIGHLIGHT
       commit
       merge develop
       commit
       branch featureA
       commit

          </pre></code><p>查看如何将标记颜色更改为主题变量中指定的值。</p><h3 id="_10-12-8-自定义高亮提交颜色" tabindex="-1"><a class="header-anchor" href="#_10-12-8-自定义高亮提交颜色"><span>10.12.8 自定义高亮提交颜色</span></a></h3><p>您可以使用 <code>gitInv0</code> 到 <code>gitInv7</code> 主题变量来定制与分支相关的高亮提交颜色。Mermaid允许您为多达8个分支的特定高亮提交设置颜色，其中 <code>gitInv0</code> 变量将驱动第一个分支的高亮提交的值， <code>gitInv1</code> 将驱动第二个分支的高亮提交标签的值，等等。</p><p>例子:</p><p>现在让我们重写 <code>git0</code> 到 <code>git3</code> 变量的默认值：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {</span>
<span class="line">              &#39;gitInv0&#39;: &#39;#ff0000&#39;</span>
<span class="line">       } } }%%</span>
<span class="line">       gitGraph</span>
<span class="line">       commit</span>
<span class="line">       branch develop</span>
<span class="line">       commit tag:&quot;v1.0.0&quot;</span>
<span class="line">       commit</span>
<span class="line">       checkout main</span>
<span class="line">       commit type: HIGHLIGHT</span>
<span class="line">       commit</span>
<span class="line">       merge develop</span>
<span class="line">       commit</span>
<span class="line">       branch featureA</span>
<span class="line">       commit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-d0nys27">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {
              &#39;gitInv0&#39;: &#39;#ff0000&#39;
       } } }%%
       gitGraph
       commit
       branch develop
       commit tag:&quot;v1.0.0&quot;
       commit
       checkout main
       commit type: HIGHLIGHT
       commit
       merge develop
       commit
       branch featureA
       commit

          </pre></code>`,303)]))}const m=e(l,[["render",c]]),o=JSON.parse('{"path":"/other/other/mermaid/11.html","title":"十、Git图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/11.md"}');export{m as comp,o as data};
