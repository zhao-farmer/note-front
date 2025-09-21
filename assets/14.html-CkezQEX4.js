import{aq as n,ar as s,as as i,at as a}from"./app-Cok9BT0p.js";const l={};function t(d,e){return a(),s("div",null,e[0]||(e[0]=[i(`<h1 id="十三、时间轴" tabindex="-1"><a class="header-anchor" href="#十三、时间轴"><span>十三、时间轴</span></a></h1><blockquote><p>时间轴：这是一个实验性的图表。语法和属性可以在以后的版本中更改。除了图标集成是实验部分外，语法是稳定的。</p></blockquote><p>时间轴是一种图表，用来说明事件、日期或时间段的年表。它通常以图形形式表示时间的流逝，并且通常按时间顺序组织。一个基本的时间轴以时间顺序呈现一系列事件，通常使用日期作为标记。时间轴也可以用来显示事件之间的关系，比如一个人一生中事件之间的关系”（维基百科）。</p><h2 id="_13-1-一个时间轴的例子" tabindex="-1"><a class="header-anchor" href="#_13-1-一个时间轴的例子"><span>13.1 一个时间轴的例子</span></a></h2><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">timeline</span>
<span class="line">    title History of Social Media Platform</span>
<span class="line">    2002 : LinkedIn</span>
<span class="line">    2004 : Facebook</span>
<span class="line">         : Google</span>
<span class="line">    2005 : YouTube</span>
<span class="line">    2006 : Twitter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-nlfmmp5">            timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook
         : Google
    2005 : YouTube
    2006 : Twitter

          </pre></code><h2 id="_13-2-语法" tabindex="-1"><a class="header-anchor" href="#_13-2-语法"><span>13.2 语法</span></a></h2><p>创建时间轴图的语法很简单。你总是以 <code>timeline</code> 关键字开始，让美人鱼知道你想创建一个时间轴图。</p><p>之后，有可能添加一个标题到时间轴。这是通过在标题文本后面添加关键字 <code>title</code> 的行来完成的。</p><p>然后添加时间轴数据，其中总是以时间段开始，后跟冒号，然后是事件的文本。也可以添加第二个冒号，然后是事件的文本。因此，每个时间段可以有一个或多个事件。</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span>time period<span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span>event<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span>time period<span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span>event<span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span>event<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span>time period<span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span>event<span class="token punctuation">}</span></span>
<span class="line">              <span class="token operator">:</span> <span class="token punctuation">{</span>event<span class="token punctuation">}</span></span>
<span class="line">              <span class="token operator">:</span> <span class="token punctuation">{</span>event<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：时间段和事件都是简单的文本，不限于数字。</p></blockquote><p>让我们看一下上面示例的语法。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">timeline</span>
<span class="line">    title History of Social Media Platform</span>
<span class="line">    2002 : LinkedIn</span>
<span class="line">    2004 : Facebook : Google</span>
<span class="line">    2005 : YouTube</span>
<span class="line">    2006 : Twitter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-dyzqgqp">            timeline
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook : Google
    2005 : YouTube
    2006 : Twitter

          </pre></code><p>通过这种方式，我们可以使用文本大纲来生成时间轴图。时间段和事件的顺序很重要，因为它将用于绘制时间轴。第一个时间段将被放置在时间轴的左侧，最后一个时间段将被放置在时间轴的右侧。</p><p>类似地，第一个事件将被放置在该特定时间段的顶部，最后一个事件将被放置在底部。</p><h2 id="_12-3-分段-年龄的时间段分组" tabindex="-1"><a class="header-anchor" href="#_12-3-分段-年龄的时间段分组"><span>12.3 分段/年龄的时间段分组</span></a></h2><p>您可以将时间段分组为部分/年龄。这是通过添加一行关键字 <code>section</code> ，后面跟着节名来实现的。</p><p>在定义新部分之前，所有后续的时间段都将放在该部分中。</p><p>如果没有定义区段，所有的时间段将被放置在默认区段中。</p><p>让我们看一个例子，其中我们将时间段分组为几个部分。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">timeline</span>
<span class="line">    title Timeline of Industrial Revolution</span>
<span class="line">    section 17th-20th century</span>
<span class="line">        Industry 1.0 : Machinery, Water power, Steam &lt;br&gt;power</span>
<span class="line">        Industry 2.0 : Electricity, Internal combustion engine, Mass production</span>
<span class="line">        Industry 3.0 : Electronics, Computers, Automation</span>
<span class="line">    section 21st century</span>
<span class="line">        Industry 4.0 : Internet, Robotics, Internet of Things</span>
<span class="line">        Industry 5.0 : Artificial intelligence, Big data, 3D printing</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-ipih8c4">            timeline
    title Timeline of Industrial Revolution
    section 17th-20th century
        Industry 1.0 : Machinery, Water power, Steam <br>power
        Industry 2.0 : Electricity, Internal combustion engine, Mass production
        Industry 3.0 : Electronics, Computers, Automation
    section 21st century
        Industry 4.0 : Internet, Robotics, Internet of Things
        Industry 5.0 : Artificial intelligence, Big data, 3D printing

          </pre></code><p>正如您所看到的，时间段被放置在各个部分中，各个部分按照定义的顺序放置。</p><p>所有的时间段和事件在一个给定的部分遵循类似的配色方案。这样做是为了更容易看到时间段和事件之间的关系。</p><h2 id="_12-4-为长时间段或事件的文本进行换行" tabindex="-1"><a class="header-anchor" href="#_12-4-为长时间段或事件的文本进行换行"><span>12.4 为长时间段或事件的文本进行换行</span></a></h2><p>默认情况下，如果时间段和事件的文本太长，则将对其进行换行。这样做是为了避免在图外绘制文本。</p><p>还可以使用 <code>&lt;br&gt;</code> 强制换行。</p><p>让我们看另一个例子，我们有一个很长的时间段和一个很长的事件。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">timeline</span>
<span class="line">        title England&#39;s History Timeline</span>
<span class="line">        section Stone Age</span>
<span class="line">          7600 BC : Britain&#39;s oldest known house was built in Orkney, Scotland</span>
<span class="line">          6000 BC : Sea levels rise and Britain becomes an island.&lt;br&gt; The people who live here are hunter-gatherers.</span>
<span class="line">        section Bronze Age</span>
<span class="line">          2300 BC : People arrive from Europe and settle in Britain. &lt;br&gt;They bring farming and metalworking.</span>
<span class="line">                  : New styles of pottery and ways of burying the dead appear.</span>
<span class="line">          2200 BC : The last major building works are completed at Stonehenge.&lt;br&gt; People now bury their dead in stone circles.</span>
<span class="line">                  : The first metal objects are made in Britain.Some other nice things happen. it is a good time to be alive.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-79ht01l">            timeline
        title England&#39;s History Timeline
        section Stone Age
          7600 BC : Britain&#39;s oldest known house was built in Orkney, Scotland
          6000 BC : Sea levels rise and Britain becomes an island.<br> The people who live here are hunter-gatherers.
        section Bronze Age
          2300 BC : People arrive from Europe and settle in Britain. <br>They bring farming and metalworking.
                  : New styles of pottery and ways of burying the dead appear.
          2200 BC : The last major building works are completed at Stonehenge.<br> People now bury their dead in stone circles.
                  : The first metal objects are made in Britain.Some other nice things happen. it is a good time to be alive.

          </pre></code><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">timeline</span>
<span class="line">        title MermaidChart 2023 Timeline</span>
<span class="line">        section 2023 Q1 &lt;br&gt; Release Personal Tier</span>
<span class="line">          Bullet 1 : sub-point 1a : sub-point 1b</span>
<span class="line">               : sub-point 1c</span>
<span class="line">          Bullet 2 : sub-point 2a : sub-point 2b</span>
<span class="line">        section 2023 Q2 &lt;br&gt; Release XYZ Tier</span>
<span class="line">          Bullet 3 : sub-point &lt;br&gt; 3a : sub-point 3b</span>
<span class="line">               : sub-point 3c</span>
<span class="line">          Bullet 4 : sub-point 4a : sub-point 4b</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-vmc87le">            timeline
        title MermaidChart 2023 Timeline
        section 2023 Q1 <br> Release Personal Tier
          Bullet 1 : sub-point 1a : sub-point 1b
               : sub-point 1c
          Bullet 2 : sub-point 2a : sub-point 2b
        section 2023 Q2 <br> Release XYZ Tier
          Bullet 3 : sub-point <br> 3a : sub-point 3b
               : sub-point 3c
          Bullet 4 : sub-point 4a : sub-point 4b

          </pre></code><h2 id="_12-5-时间段和事件的样式化" tabindex="-1"><a class="header-anchor" href="#_12-5-时间段和事件的样式化"><span>12.5 时间段和事件的样式化</span></a></h2><h3 id="_12-5-1-基础配色" tabindex="-1"><a class="header-anchor" href="#_12-5-1-基础配色"><span>12.5.1 基础配色</span></a></h3><p>如前所述，每个部分都有一个配色方案，每个部分下的每个时间段和事件都遵循类似的配色方案。</p><p>但是，如果没有定义section，则有两种可能性：</p><ol><li>单独设置时间段的样式，即每个时间段（及其对应的事件）都有自己的配色方案。这是默认行为。</li></ol><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    timeline</span>
<span class="line">        title History of Social Media Platform</span>
<span class="line">          2002 : LinkedIn</span>
<span class="line">          2004 : Facebook : Google</span>
<span class="line">          2005 : YouTube</span>
<span class="line">          2006 : Twitter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-ri3e28d">                timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : YouTube
          2006 : Twitter

          </pre></code><p>注意：没有定义分段，每个时间段及其对应的事件都有自己的配色方案。</p><ol start="2"><li>使用 <code>disableMultiColor</code> 选项禁用多色选项。这将使所有的时间段和事件遵循相同的配色方案。</li></ol><p>您将需要通过mermaid添加此选项。初始化函数或指令。</p><p>javascript</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">mermaid.initialize({</span>
<span class="line">        theme: &#39;base&#39;,</span>
<span class="line">        startOnLoad: true,</span>
<span class="line">        logLevel: 0,</span>
<span class="line">        timeline: {</span>
<span class="line">          disableMulticolor: false,</span>
<span class="line">        },</span>
<span class="line">        ...</span>
<span class="line">        ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们看一下同样的例子，其中我们禁用了multiccolor选项。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">   %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;timeline&#39;: {&#39;disableMulticolor&#39;: true}}}%%</span>
<span class="line">    timeline</span>
<span class="line">        title History of Social Media Platform</span>
<span class="line">          2002 : LinkedIn</span>
<span class="line">          2004 : Facebook : Google</span>
<span class="line">          2005 : YouTube</span>
<span class="line">          2006 : Twitter</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-i4kelpx">               %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39;, &#39;timeline&#39;: {&#39;disableMulticolor&#39;: true}}}%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : YouTube
          2006 : Twitter

          </pre></code><h3 id="_12-5-2-定制配色方案" tabindex="-1"><a class="header-anchor" href="#_12-5-2-定制配色方案"><span>12.5.2 定制配色方案</span></a></h3><p>您可以使用 <code>cScale0</code> 到 <code>cScale11</code> 主题变量自定义配色方案，这将改变背景颜色。Mermaid允许您为多达12个部分设置唯一的颜色，其中 <code>cScale0</code> 变量将驱动第一个部分或时间段的值， <code>cScale1</code> 将驱动第二个部分的值，依此类推。如果你有超过12个部分，配色方案将开始重复。</p><p>如果你还想改变一个部分的前景色，你可以使用相应的主题变量 <code>cScaleLabel0</code> 到 <code>cScaleLabel11</code> 变量。</p><p>注意：这些主题变量的默认值是从选定的主题中选取的。如果要覆盖默认值，可以使用 <code>initialize</code> 调用来添加自定义主题变量值。</p><p>例子:</p><p>现在让我们重写 <code>cScale0</code> 到 <code>cScale2</code> 变量的默认值：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {</span>
<span class="line">              &#39;cScale0&#39;: &#39;#ff0000&#39;, &#39;cScaleLabel0&#39;: &#39;#ffffff&#39;,</span>
<span class="line">              &#39;cScale1&#39;: &#39;#00ff00&#39;,</span>
<span class="line">              &#39;cScale2&#39;: &#39;#0000ff&#39;, &#39;cScaleLabel2&#39;: &#39;#ffffff&#39;</span>
<span class="line">       } } }%%</span>
<span class="line">       timeline</span>
<span class="line">        title History of Social Media Platform</span>
<span class="line">          2002 : LinkedIn</span>
<span class="line">          2004 : Facebook : Google</span>
<span class="line">          2005 : YouTube</span>
<span class="line">          2006 : Twitter</span>
<span class="line">          2007 : Tumblr</span>
<span class="line">          2008 : Instagram</span>
<span class="line">          2010 : Pinterest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-4uky2ev">                %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; , &#39;themeVariables&#39;: {
              &#39;cScale0&#39;: &#39;#ff0000&#39;, &#39;cScaleLabel0&#39;: &#39;#ffffff&#39;,
              &#39;cScale1&#39;: &#39;#00ff00&#39;,
              &#39;cScale2&#39;: &#39;#0000ff&#39;, &#39;cScaleLabel2&#39;: &#39;#ffffff&#39;
       } } }%%
       timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : YouTube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest

          </pre></code><p>查看如何将颜色更改为主题变量中指定的值。</p><h2 id="_12-6-主题" tabindex="-1"><a class="header-anchor" href="#_12-6-主题"><span>12.6 主题</span></a></h2><p>美人鱼支持一堆预定义的主题，你可以用它来找到适合你的。PS：你实际上可以覆盖一个现有的主题的变量，让你自己的自定义主题。在这里了解更多关于图表主题化的信息。</p><p>以下是不同的预定义主题选项：</p><ul><li><code>base</code></li><li><code>forest</code></li><li><code>dark</code></li><li><code>default</code></li><li><code>neutral</code></li></ul><p>注意：要更改主题，你可以使用 <code>initialize</code> 调用或指令。让我们来使用它们，看看我们的示例图在不同的主题中是怎样的：</p><h3 id="_12-6-1-基本主题" tabindex="-1"><a class="header-anchor" href="#_12-6-1-基本主题"><span>12.6.1 基本主题</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39; } }%%</span>
<span class="line">    timeline</span>
<span class="line">        title History of Social Media Platform</span>
<span class="line">          2002 : LinkedIn</span>
<span class="line">          2004 : Facebook : Google</span>
<span class="line">          2005 : YouTube</span>
<span class="line">          2006 : Twitter</span>
<span class="line">          2007 : Tumblr</span>
<span class="line">          2008 : Instagram</span>
<span class="line">          2010 : Pinterest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-69sudcs">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;base&#39; } }%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : YouTube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest

          </pre></code><h3 id="_12-6-2-森林主题" tabindex="-1"><a class="header-anchor" href="#_12-6-2-森林主题"><span>12.6.2 森林主题</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;forest&#39; } }%%</span>
<span class="line">    timeline</span>
<span class="line">        title History of Social Media Platform</span>
<span class="line">          2002 : LinkedIn</span>
<span class="line">          2004 : Facebook : Google</span>
<span class="line">          2005 : YouTube</span>
<span class="line">          2006 : Twitter</span>
<span class="line">          2007 : Tumblr</span>
<span class="line">          2008 : Instagram</span>
<span class="line">          2010 : Pinterest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-v21q8vv">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;forest&#39; } }%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : YouTube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest

          </pre></code><h3 id="_12-6-3-黑暗的主题" tabindex="-1"><a class="header-anchor" href="#_12-6-3-黑暗的主题"><span>12.6.3 黑暗的主题</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;dark&#39; } }%%</span>
<span class="line">    timeline</span>
<span class="line">        title History of Social Media Platform</span>
<span class="line">          2002 : LinkedIn</span>
<span class="line">          2004 : Facebook : Google</span>
<span class="line">          2005 : YouTube</span>
<span class="line">          2006 : Twitter</span>
<span class="line">          2007 : Tumblr</span>
<span class="line">          2008 : Instagram</span>
<span class="line">          2010 : Pinterest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-fe2smtg">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;dark&#39; } }%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : YouTube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest

          </pre></code><h3 id="_12-6-4-默认主题" tabindex="-1"><a class="header-anchor" href="#_12-6-4-默认主题"><span>12.6.4 默认主题</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; } }%%</span>
<span class="line">    timeline</span>
<span class="line">        title History of Social Media Platform</span>
<span class="line">          2002 : LinkedIn</span>
<span class="line">          2004 : Facebook : Google</span>
<span class="line">          2005 : YouTube</span>
<span class="line">          2006 : Twitter</span>
<span class="line">          2007 : Tumblr</span>
<span class="line">          2008 : Instagram</span>
<span class="line">          2010 : Pinterest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-fxvleji">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;default&#39; } }%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : YouTube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest

          </pre></code><h3 id="_12-6-5-暗淡主题" tabindex="-1"><a class="header-anchor" href="#_12-6-5-暗淡主题"><span>12.6.5 暗淡主题</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;neutral&#39; } }%%</span>
<span class="line">    timeline</span>
<span class="line">        title History of Social Media Platform</span>
<span class="line">          2002 : LinkedIn</span>
<span class="line">          2004 : Facebook : Google</span>
<span class="line">          2005 : YouTube</span>
<span class="line">          2006 : Twitter</span>
<span class="line">          2007 : Tumblr</span>
<span class="line">          2008 : Instagram</span>
<span class="line">          2010 : Pinterest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-kecqjar">            %%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;neutral&#39; } }%%
    timeline
        title History of Social Media Platform
          2002 : LinkedIn
          2004 : Facebook : Google
          2005 : YouTube
          2006 : Twitter
          2007 : Tumblr
          2008 : Instagram
          2010 : Pinterest

          </pre></code>`,108)]))}const c=n(l,[["render",t]]),p=JSON.parse('{"path":"/other/other/mermaid/14.html","title":"十三、时间轴","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/14.md"}');export{c as comp,p as data};
