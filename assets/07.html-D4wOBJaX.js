import{aq as s,ar as a,as as e,at as t}from"./app-Cok9BT0p.js";const d={};function i(l,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="六、甘特图" tabindex="-1"><a class="header-anchor" href="#六、甘特图"><span>六、甘特图</span></a></h1><blockquote><p>甘特图是一种柱状图，最早由卡罗尔·阿达米埃茨基在1896年提出，亨利·甘特在20世纪10年代独立提出，它说明了项目进度和任何一个项目完成所需的时间。甘特图说明了项目的终端元素和总结元素的开始和结束日期之间的天数。</p></blockquote><h2 id="_6-1-甘特图基础" tabindex="-1"><a class="header-anchor" href="#_6-1-甘特图基础"><span>6.1 甘特图基础</span></a></h2><p>甘特图将每个计划任务记录为一个从左向右延伸的连续条形图。x轴表示时间，y轴记录不同的任务以及完成任务的顺序。</p><p>重要的是要记住，当特定于任务的日期，日期或日期集合被“排除”时，甘特图将通过向右扩展相等的天数来适应这些更改，而不是通过在任务内部创建间隙。如下所示</p><p>但是，如果排除的日期位于设置为连续开始的两个任务之间，则将以图形方式跳过排除的日期并留空，并且以下任务将在排除的日期结束后开始。如下所示</p><p>甘特图用于跟踪项目完成前所需的时间量，但它也可以用于图形化地表示“非工作日”，只需进行一些调整。</p><p>Mermaid可以将甘特图渲染为SVG、PNG或可以粘贴到文档中的MarkDown链接。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">gantt</span>
<span class="line">    title A Gantt Diagram</span>
<span class="line">    dateFormat YYYY-MM-DD</span>
<span class="line">    section Section</span>
<span class="line">        A task          :a1, 2014-01-01, 30d</span>
<span class="line">        Another task    :after a1, 20d</span>
<span class="line">    section Another</span>
<span class="line">        Task in Another :2014-01-12, 12d</span>
<span class="line">        another task    :24d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-4i08cc1">            gantt
    title A Gantt Diagram
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d

          </pre></code><h2 id="_6-2-语法" tabindex="-1"><a class="header-anchor" href="#_6-2-语法"><span>6.2 语法</span></a></h2><h3 id="_6-2-1-基础使用" tabindex="-1"><a class="header-anchor" href="#_6-2-1-基础使用"><span>6.2.1 基础使用</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">gantt</span>
<span class="line">    dateFormat  YYYY-MM-DD</span>
<span class="line">    title       Adding GANTT diagram functionality to mermaid</span>
<span class="line">    excludes    weekends</span>
<span class="line">    %% (\`excludes\` accepts specific dates in YYYY-MM-DD format, days of the week (&quot;sunday&quot;) or &quot;weekends&quot;, but not the word &quot;weekdays&quot;.)</span>
<span class="line"></span>
<span class="line">    section A section</span>
<span class="line">    Completed task            :done,    des1, 2014-01-06,2014-01-08</span>
<span class="line">    Active task               :active,  des2, 2014-01-09, 3d</span>
<span class="line">    Future task               :         des3, after des2, 5d</span>
<span class="line">    Future task2              :         des4, after des3, 5d</span>
<span class="line"></span>
<span class="line">    section Critical tasks</span>
<span class="line">    Completed task in the critical line :crit, done, 2014-01-06,24h</span>
<span class="line">    Implement parser and jison          :crit, done, after des1, 2d</span>
<span class="line">    Create tests for parser             :crit, active, 3d</span>
<span class="line">    Future task in critical line        :crit, 5d</span>
<span class="line">    Create tests for renderer           :2d</span>
<span class="line">    Add to mermaid                      :until isadded</span>
<span class="line">    Functionality added                 :milestone, isadded, 2014-01-25, 0d</span>
<span class="line"></span>
<span class="line">    section Documentation</span>
<span class="line">    Describe gantt syntax               :active, a1, after des1, 3d</span>
<span class="line">    Add gantt diagram to demo page      :after a1  , 20h</span>
<span class="line">    Add another diagram to demo page    :doc1, after a1  , 48h</span>
<span class="line"></span>
<span class="line">    section Last section</span>
<span class="line">    Describe gantt syntax               :after doc1, 3d</span>
<span class="line">    Add gantt diagram to demo page      :20h</span>
<span class="line">    Add another diagram to demo page    :48h</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-xv1f58q">            gantt
    dateFormat  YYYY-MM-DD
    title       Adding GANTT diagram functionality to mermaid
    excludes    weekends
    %% (\`excludes\` accepts specific dates in YYYY-MM-DD format, days of the week (&quot;sunday&quot;) or &quot;weekends&quot;, but not the word &quot;weekdays&quot;.)

    section A section
    Completed task            :done,    des1, 2014-01-06,2014-01-08
    Active task               :active,  des2, 2014-01-09, 3d
    Future task               :         des3, after des2, 5d
    Future task2              :         des4, after des3, 5d

    section Critical tasks
    Completed task in the critical line :crit, done, 2014-01-06,24h
    Implement parser and jison          :crit, done, after des1, 2d
    Create tests for parser             :crit, active, 3d
    Future task in critical line        :crit, 5d
    Create tests for renderer           :2d
    Add to mermaid                      :until isadded
    Functionality added                 :milestone, isadded, 2014-01-25, 0d

    section Documentation
    Describe gantt syntax               :active, a1, after des1, 3d
    Add gantt diagram to demo page      :after a1  , 20h
    Add another diagram to demo page    :doc1, after a1  , 48h

    section Last section
    Describe gantt syntax               :after doc1, 3d
    Add gantt diagram to demo page      :20h
    Add another diagram to demo page    :48h

          </pre></code><p>任务默认是顺序的。任务开始日期默认为前一个任务的结束日期。</p><p>冒号 <code>:</code> 将任务标题与其元数据分开。元数据项之间用逗号分隔， <code>,</code> 。有效的标记是 <code>active</code> ,  <code>done</code> ,  <code>crit</code> ,和 <code>milestone</code> 。标记是可选的，但如果使用，必须首先指定它们。处理完标签后，剩下的元数据项解释如下：</p><ol><li>如果指定了单个项，则确定任务何时结束。它可以是特定的日期/时间，也可以是持续时间。如果指定了持续时间，则会将其添加到任务的开始日期中，以确定任务的结束日期，并考虑任何排除情况。</li><li>如果指定了两项，则最后一项被解释为前一项。第一项可以指定显式的开始日期/时间（以 <code>dateFormat</code> 指定的格式），也可以使用 <code>after &lt;otherTaskID&gt; [[otherTaskID2 [otherTaskID3]]...]</code> 引用另一个任务。在后一种情况下，任务的开始日期将根据任何引用任务的最近结束日期设置。</li><li>如果指定了三个项目，最后两个将被解释为前面的情况。第一项将表示任务的ID，可以使用 <code>later &lt;taskID&gt;</code> 语法引用它。</li></ol><table><thead><tr><th>Metadata syntax</th><th>开始日期</th><th>结束日期</th><th>ID</th></tr></thead><tbody><tr><td><code>&lt;taskID&gt;, &lt;startDate&gt;, &lt;endDate&gt;</code></td><td><code>startdate</code> 使用 <code>dateformat</code> 进行解释</td><td><code>endDate</code> 使用 <code>dateformat</code> 进行解释</td><td><code>taskID</code></td></tr><tr><td><code>&lt;taskID&gt;, &lt;startDate&gt;, &lt;length&gt;</code></td><td><code>startdate</code> 使用 <code>dateformat</code> 进行解释</td><td>起始日期 <code>length</code></td><td><code>taskID</code></td></tr><tr><td><code>&lt;taskID&gt;, after &lt;otherTaskId&gt;, &lt;endDate&gt;</code></td><td>先前指定的任务的结束日期 <code>otherTaskID</code></td><td><code>endDate</code> 使用 <code>dateformat</code> 进行解释</td><td><code>taskID</code></td></tr><tr><td><code>&lt;taskID&gt;, after &lt;otherTaskId&gt;, &lt;length&gt;</code></td><td>先前指定的任务的结束日期 <code>otherTaskID</code></td><td>起始日期 <code>length</code></td><td><code>taskID</code></td></tr><tr><td><code>&lt;taskID&gt;, &lt;startDate&gt;, until &lt;otherTaskId&gt;</code></td><td><code>startdate</code> 使用 <code>dateformat</code> 进行解释</td><td>先前指定的任务的开始日期 <code>otherTaskID</code></td><td><code>taskID</code></td></tr><tr><td><code>&lt;taskID&gt;, after &lt;otherTaskId&gt;, until &lt;otherTaskId&gt;</code></td><td>先前指定的任务的结束日期 <code>otherTaskID</code></td><td>先前指定的任务的开始日期 <code>otherTaskID</code></td><td><code>taskID</code></td></tr><tr><td><code>&lt;startDate&gt;, &lt;endDate&gt;</code></td><td><code>startdate</code> 使用 <code>dateformat</code> 进行解释</td><td><code>enddate</code> 使用 <code>dateformat</code> 进行解释</td><td>N/A</td></tr><tr><td><code>&lt;startDate&gt;, &lt;length&gt;</code></td><td><code>startdate</code> 使用 <code>dateformat</code> 进行解释</td><td>起始日期 <code>length</code></td><td>N/A</td></tr><tr><td><code>after &lt;otherTaskID&gt;, &lt;endDate&gt;</code></td><td>先前指定的任务的结束日期 <code>otherTaskID</code></td><td><code>enddate</code> 使用 <code>dateformat</code> 进行解释</td><td>N/A</td></tr><tr><td><code>after &lt;otherTaskID&gt;, &lt;length&gt;</code></td><td>先前指定的任务的结束日期 <code>otherTaskID</code></td><td>起始日期 <code>length</code></td><td>N/A</td></tr><tr><td><code>&lt;startDate&gt;, until &lt;otherTaskId&gt;</code></td><td><code>startdate</code> 使用 <code>dateformat</code> 进行解释</td><td>先前指定的任务的开始日期 <code>otherTaskID</code></td><td>N/A</td></tr><tr><td><code>after &lt;otherTaskId&gt;, until &lt;otherTaskId&gt;</code></td><td>先前指定的任务的结束日期 <code>otherTaskID</code></td><td>先前指定的任务的开始日期 <code>otherTaskID</code></td><td>N/A</td></tr><tr><td><code>&lt;endDate&gt;</code></td><td>前一个任务的结束日期</td><td><code>enddate</code> 使用 <code>dateformat</code> 进行解释</td><td>N/A</td></tr><tr><td><code>&lt;length&gt;</code></td><td>前一个任务的结束日期</td><td>起始日期 <code>length</code></td><td>N/A</td></tr><tr><td><code>until &lt;otherTaskId&gt;</code></td><td>前一个任务的结束日期</td><td>先前指定的任务的开始日期 <code>otherTaskID</code></td><td>N/A</td></tr></tbody></table><p>为简单起见，该表没有显示使用 <code>after</code> 关键字列出的多个任务。下面是一个如何使用它以及如何解释它的例子：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">gantt</span>
<span class="line">    apple :a, 2017-07-20, 1w</span>
<span class="line">    banana :crit, b, 2017-07-23, 1d</span>
<span class="line">    cherry :active, c, after b a, 1d</span>
<span class="line">    kiwi   :d, 2017-07-20, until b c</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-mu8sscq">            gantt
    apple :a, 2017-07-20, 1w
    banana :crit, b, 2017-07-23, 1d
    cherry :active, c, after b a, 1d
    kiwi   :d, 2017-07-20, until b c

          </pre></code><h3 id="_6-2-2-标题" tabindex="-1"><a class="header-anchor" href="#_6-2-2-标题"><span>6.2.2 标题</span></a></h3><p><code>title</code> 是一个可选字符串，将显示在甘特图的顶部，用于描述整个甘特图。</p><h3 id="_6-2-3-excludes-不包括" tabindex="-1"><a class="header-anchor" href="#_6-2-3-excludes-不包括"><span>6.2.3 excludes（不包括）</span></a></h3><p><code>excludes</code> 是一个可选属性，它接受YYYY-MM-DD格式的特定日期、星期几（“sunday“）或”weekends”，但不接受单词“weekdays”。这些日期将被标记在图表上，并被排除在任务持续时间的计算之外。这意味着，如果在任务间隔期间有被排除的日期，“跳过”的天数将被添加到任务的末尾，以确保持续时间与代码中指定的一致。</p><h3 id="_6-2-4-weekend-相关" tabindex="-1"><a class="header-anchor" href="#_6-2-4-weekend-相关"><span>6.2.4 weekend 相关</span></a></h3><p>当排除周末时，可以将周末配置为周五和周六或周六和周日。默认情况下，周末是周六和周日。要定义周末开始日期，有一个可选属性 <code>weekend</code> ，可以在新行中添加，后跟 <code>friday</code> 或 <code>saturday</code> 。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">gantt</span>
<span class="line">    title A Gantt Diagram Excluding Fri - Sat weekends</span>
<span class="line">    dateFormat YYYY-MM-DD</span>
<span class="line">    excludes weekends</span>
<span class="line">    weekend friday</span>
<span class="line">    section Section</span>
<span class="line">        A task          :a1, 2024-01-01, 30d</span>
<span class="line">        Another task    :after a1, 20d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-i6e0ayw">            gantt
    title A Gantt Diagram Excluding Fri - Sat weekends
    dateFormat YYYY-MM-DD
    excludes weekends
    weekend friday
    section Section
        A task          :a1, 2024-01-01, 30d
        Another task    :after a1, 20d

          </pre></code><h3 id="_6-2-5-部分语句" tabindex="-1"><a class="header-anchor" href="#_6-2-5-部分语句"><span>6.2.5 部分语句</span></a></h3><p>您可以将图表划分为不同的部分，例如，将项目的不同部分（如开发和文档）分开。</p><p>为此，用 <code>section</code> 关键字开始一行，并给它起一个名字。(注意，与整个图表的标题不同，这个名称是必需的。</p><h3 id="_6-2-6-里程碑" tabindex="-1"><a class="header-anchor" href="#_6-2-6-里程碑"><span>6.2.6 里程碑</span></a></h3><p>您可以向图中添加里程碑。里程碑不同于任务，因为它们代表时间上的单个瞬间，并由关键字 <code>milestone</code> 标识。下面是一个如何使用里程碑的例子。正如您可能注意到的，里程碑的确切位置是由里程碑的初始日期和任务的“持续时间”确定的：初始日期持续时间/2。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">gantt</span>
<span class="line">    dateFormat HH:mm</span>
<span class="line">    axisFormat %H:%M</span>
<span class="line">    Initial milestone : milestone, m1, 17:49, 2m</span>
<span class="line">    Task A : 10m</span>
<span class="line">    Task B : 5m</span>
<span class="line">    Final milestone : milestone, m2, 18:08, 4m</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-79a4c29">            gantt
    dateFormat HH:mm
    axisFormat %H:%M
    Initial milestone : milestone, m1, 17:49, 2m
    Task A : 10m
    Task B : 5m
    Final milestone : milestone, m2, 18:08, 4m

          </pre></code><h2 id="_6-3-设置日期" tabindex="-1"><a class="header-anchor" href="#_6-3-设置日期"><span>6.3 设置日期</span></a></h2><p><code>dateFormat</code> 定义了您的ant元素的日期输入格式。在呈现的图表输出中如何表示这些日期由 <code>axisFormat</code> 定义。</p><h3 id="_6-3-1-输入日期格式" tabindex="-1"><a class="header-anchor" href="#_6-3-1-输入日期格式"><span>6.3.1 输入日期格式</span></a></h3><p>默认输入日期格式为 <code>YYYY-MM-DD</code> 。您可以定义自定义 <code>dateFormat</code> 。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">dateFormat YYYY-MM-DD</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>支持以下格式选项：</p><table><thead><tr><th>输入</th><th>例子</th><th>描述</th></tr></thead><tbody><tr><td><code>YYYY</code></td><td>2014</td><td>四位数年份</td></tr><tr><td><code>YY</code></td><td>14</td><td>二位数年份</td></tr><tr><td><code>Q</code></td><td>1..4</td><td>季度。将月份设置为季度的第一个月。</td></tr><tr><td><code>M MM</code></td><td>1..12</td><td>月数</td></tr><tr><td><code>MMM MMMM</code></td><td>12月1月. .</td><td>区域设置中的月份名称 <code>dayjs.locale()</code></td></tr><tr><td><code>D DD</code></td><td>1..31</td><td>月中的一天</td></tr><tr><td><code>Do</code></td><td>1 . . 31日</td><td>带序数的月的第几天</td></tr><tr><td><code>DDD DDDD</code></td><td>1..365</td><td>一年中的一天</td></tr><tr><td><code>X</code></td><td>1410715640.579</td><td>Unix时间戳</td></tr><tr><td><code>x</code></td><td>1410715640579</td><td>Unix ms时间戳</td></tr><tr><td><code>H HH</code></td><td>0..23</td><td>24小时时间</td></tr><tr><td><code>h hh</code></td><td>1..12</td><td><code>a A</code> 时使用的12小时时间。</td></tr><tr><td><code>a A</code></td><td>我点</td><td>Post or ante meridiem</td></tr><tr><td><code>m mm</code></td><td>0..59</td><td>分钟</td></tr><tr><td><code>s ss</code></td><td>0..59</td><td>秒</td></tr><tr><td><code>S</code></td><td>0..9</td><td>十分之一秒</td></tr><tr><td><code>SS</code></td><td>0..99</td><td>每秒数百次</td></tr><tr><td><code>SSS</code></td><td>0..999</td><td>千分之一秒</td></tr><tr><td><code>Z ZZ</code></td><td>12:00</td><td>与UTC的偏移量为-HH:mm， - hmm或Z</td></tr></tbody></table><p>更多信息请访问：<code>https://day.js.org/docs/en/parse/string-format/</code></p><h3 id="_6-3-2-轴上的输出日期格式" tabindex="-1"><a class="header-anchor" href="#_6-3-2-轴上的输出日期格式"><span>6.3.2 轴上的输出日期格式</span></a></h3><p>默认输出日期格式为 <code>YYYY-MM-DD</code> 。您可以定义自定义 <code>axisFormat</code> ，例如 <code>2020-Q1</code> ，用于2020年第一季度。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">axisFormat %Y-%m-%d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>支持以下格式字符串：</p><table><thead><tr><th>格式</th><th>定义</th></tr></thead><tbody><tr><td>%的</td><td>工作日缩写名</td></tr><tr><td>%的</td><td>工作日全称</td></tr><tr><td>%b</td><td>缩写月名</td></tr><tr><td>%B</td><td>月名</td></tr><tr><td>%c</td><td>日期和时间，用<code>%a %b %e %H:%M:%S %Y</code>表示。</td></tr><tr><td>%d</td><td>以十进制数形式填充的月份中的第几天<code>[01,31]</code></td></tr><tr><td>%e</td><td>用十进制数<code>[1,31]</code>填充月份的第几天；相当于<code>%_d</code></td></tr><tr><td>%H</td><td>小时（24小时制）作为十进制数<code>[00,23]</code></td></tr><tr><td>%我</td><td>小时（12小时制）作为十进制数<code>[01,12]</code></td></tr><tr><td>%j</td><td>以十进制表示的一年中的第几天<code>[001366]</code></td></tr><tr><td>%m</td><td>月作为十进制数<code>[01,12]</code></td></tr><tr><td>%M</td><td>分十进制数<code>[00,59]</code></td></tr><tr><td>%L</td><td>毫秒为十进制数<code>[000,999]</code></td></tr><tr><td>%p</td><td>上午或下午</td></tr><tr><td>%S</td><td>秒作为十进制数<code>[00,61]</code></td></tr><tr><td>%U</td><td>一年中的星期数（星期日为一周的第一天）<code>[00,53]</code></td></tr><tr><td>%w</td><td>工作日的十进制数<code>[0（星期日），6]</code></td></tr><tr><td>%W</td><td>一年中的星期数（星期一为一周的第一天）<code>[00,53]</code></td></tr><tr><td>%x</td><td>日期，如<code>%m/%d/%Y</code></td></tr><tr><td>%X</td><td>时间，如<code>%H:%M:%S</code></td></tr><tr><td>y %</td><td>不以十进制表示世纪的年份<code>[00,99]</code></td></tr><tr><td>Y %</td><td>以世纪为十进制数的年份</td></tr><tr><td>%Z</td><td>时区偏移量，如<code>-0700</code></td></tr><tr><td>%%</td><td>文字<code>%</code>字符</td></tr></tbody></table><p>更多信息请访问：<code>https://github.com/d3/d3-time-format/tree/v4.0.0#locale\\_format</code></p><h3 id="_6-3-3-轴刻度" tabindex="-1"><a class="header-anchor" href="#_6-3-3-轴刻度"><span>6.3.3 轴刻度</span></a></h3><p>默认输出刻度是自动的。您可以自定义 <code>tickInterval</code> ，如 <code>1day</code> 或 <code>1week</code> 。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">tickInterval 1day</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>模式是：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^([1-9][0-9]*)(millisecond|second|minute|hour|day|week|month)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>更多信息请访问：<code>https://github.com/d3/d3-time#interval\\_every</code></p><p>以周为单位 <code>tickInterval</code> 默认从周日开始一周。如果您希望指定 <code>tickInterval</code> 启动的另一个工作日，请使用 <code>weekday</code> 选项：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">gantt</span>
<span class="line">  tickInterval 1week</span>
<span class="line">  weekday monday</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-8890y08">            gantt
  tickInterval 1week
  weekday monday

          </pre></code><h2 id="_6-4-紧凑模式输出" tabindex="-1"><a class="header-anchor" href="#_6-4-紧凑模式输出"><span>6.4 紧凑模式输出</span></a></h2><p>精简模式允许在同一行中显示多个任务。通过通过前面的YAML设置设置图形的显示模式，可以为甘特图启用紧凑模式。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">---</span>
<span class="line">displayMode: compact</span>
<span class="line">---</span>
<span class="line">gantt</span>
<span class="line">    title A Gantt Diagram</span>
<span class="line">    dateFormat  YYYY-MM-DD</span>
<span class="line"></span>
<span class="line">    section Section</span>
<span class="line">    A task           :a1, 2014-01-01, 30d</span>
<span class="line">    Another task     :a2, 2014-01-20, 25d</span>
<span class="line">    Another one      :a3, 2014-02-10, 20d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-btptyf5">            ---
displayMode: compact
---
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD

    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :a2, 2014-01-20, 25d
    Another one      :a3, 2014-02-10, 20d

          </pre></code><h2 id="_6-5-注释" tabindex="-1"><a class="header-anchor" href="#_6-5-注释"><span>6.5 注释</span></a></h2><p>注释可以在甘特图中输入，解析器将忽略它。注释需要在单独的行上，并且必须以 <code>%%</code> （双百分号）作为前缀。在注释开始到下一个换行符之后的任何文本都将被视为注释，包括任何图表语法。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">gantt</span>
<span class="line">    title A Gantt Diagram</span>
<span class="line">    %% This is a comment</span>
<span class="line">    dateFormat YYYY-MM-DD</span>
<span class="line">    section Section</span>
<span class="line">        A task          :a1, 2014-01-01, 30d</span>
<span class="line">        Another task    :after a1, 20d</span>
<span class="line">    section Another</span>
<span class="line">        Task in Another :2014-01-12, 12d</span>
<span class="line">        another task    :24d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-vm6j0ty">            gantt
    title A Gantt Diagram
    %% This is a comment
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d

          </pre></code><h2 id="_6-6-样式" tabindex="-1"><a class="header-anchor" href="#_6-6-样式"><span>6.6 样式</span></a></h2><p>甘特图的样式化是通过定义一些CSS类来完成的。在渲染过程中，这些类是从位于src/diagrams/gantt/styles.js的文件中提取出来的</p><h3 id="_6-6-1-使用的类" tabindex="-1"><a class="header-anchor" href="#_6-6-1-使用的类"><span>6.6.1 使用的类</span></a></h3><table><thead><tr><th>类</th><th>描述</th></tr></thead><tbody><tr><td>grid.tick</td><td>网格线的样式</td></tr><tr><td>grid.path</td><td>网格边框的样式</td></tr><tr><td>.taskText</td><td>任务文本样式</td></tr><tr><td>.taskTextOutsideRight</td><td>为超出活动栏右侧的任务文本设置样式。</td></tr><tr><td>.taskTextOutsideLeft</td><td>超出活动栏左侧的任务文本的样式化。</td></tr><tr><td>todayMarker</td><td>“今日标记”的切换和样式</td></tr></tbody></table><h3 id="_6-6-2-样本样式表" tabindex="-1"><a class="header-anchor" href="#_6-6-2-样本样式表"><span>6.6.2 样本样式表</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code><span class="line"><span class="token selector">.grid .tick</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">stroke</span><span class="token punctuation">:</span> lightgrey<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.3<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">shape-rendering</span><span class="token punctuation">:</span> crispEdges<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.grid path</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">stroke-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">#tag</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> #fa283d<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 3px 6px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-left</span><span class="token punctuation">:</span> -80px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 11px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">#tag:before</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> solid transparent<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-left</span><span class="token punctuation">:</span> -5px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-width</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> #fa283d<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">top</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.taskText</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-anchor</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.taskTextOutsideRight</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-anchor</span><span class="token punctuation">:</span> start<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token selector">.taskTextOutsideLeft</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">fill</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-anchor</span><span class="token punctuation">:</span> end<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-7-今日标志" tabindex="-1"><a class="header-anchor" href="#_6-7-今日标志"><span>6.7 今日标志</span></a></h2><p>可以为当前日期设置样式或隐藏标记。要设置样式，请为 <code>todayMarker</code> 键添加一个值。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">todayMarker stroke-width:5px,stroke:#0f0,opacity:0.5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>要隐藏标记，将 <code>todayMarker</code> 设置为 <code>off</code> 。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">todayMarker off</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_6-8-配置" tabindex="-1"><a class="header-anchor" href="#_6-8-配置"><span>6.8 配置</span></a></h2><h3 id="_6-8-1-修改配置" tabindex="-1"><a class="header-anchor" href="#_6-8-1-修改配置"><span>6.8.1 修改配置</span></a></h3><p>这是通过定义配置对象的 <code>ganttConfig</code> 部分来完成的。CLI的使用方法请参见mermaidCLI界面。</p><p>可以将ganttConfig设置为带有配置参数或相应对象的JSON字符串。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">mermaid<span class="token punctuation">.</span>ganttConfig <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">titleTopMargin</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token comment">// 图表上方文本的顶部边距</span></span>
<span class="line">  <span class="token literal-property property">barHeight</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// 图表中条形图的高度</span></span>
<span class="line">  <span class="token literal-property property">barGap</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">// 甘特图中不同活动之间的间距</span></span>
<span class="line">  <span class="token literal-property property">topPadding</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token comment">// 标题与甘特图之间以及坐标轴与甘特图之间的边距</span></span>
<span class="line">  <span class="token literal-property property">rightPadding</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token comment">// 为活动右侧部分名称分配的空间</span></span>
<span class="line">  <span class="token literal-property property">leftPadding</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token comment">// 为活动左侧部分名称分配的空间</span></span>
<span class="line">  <span class="token literal-property property">gridLineStartPadding</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 网格线的垂直起始位置</span></span>
<span class="line">  <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token comment">// 字体大小</span></span>
<span class="line">  <span class="token literal-property property">sectionFontSize</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token comment">// 章节标题的字体大小</span></span>
<span class="line">  <span class="token literal-property property">numberSectionStyles</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 交替章节样式的数量</span></span>
<span class="line">  <span class="token literal-property property">axisFormat</span><span class="token operator">:</span> <span class="token string">&#39;%d/%m&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 坐标轴的日期/时间格式</span></span>
<span class="line">  <span class="token literal-property property">tickInterval</span><span class="token operator">:</span> <span class="token string">&#39;1week&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 坐标轴刻度间隔</span></span>
<span class="line">  <span class="token literal-property property">topAxis</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 当此标志设置为true时，将在图表顶部添加日期标签</span></span>
<span class="line">  <span class="token literal-property property">displayMode</span><span class="token operator">:</span> <span class="token string">&#39;compact&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 开启紧凑模式</span></span>
<span class="line">  <span class="token literal-property property">weekday</span><span class="token operator">:</span> <span class="token string">&#39;sunday&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 基于周的间隔应从哪一天开始</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-8-2-可能的配置参数" tabindex="-1"><a class="header-anchor" href="#_6-8-2-可能的配置参数"><span>6.8.2 可能的配置参数</span></a></h3><table><thead><tr><th>停止</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td>mirrorActor</td><td>打开/关闭角色在图表下方和上方的渲染</td><td>false</td></tr><tr><td>bottomMarginAdj</td><td>调整图形结束的位置。css的宽边框样式可能会产生不必要的剪切，这就是为什么这个配置参数存在的原因。</td><td>1</td></tr></tbody></table><h2 id="_6-9-交互" tabindex="-1"><a class="header-anchor" href="#_6-9-交互"><span>6.9 交互</span></a></h2><h3 id="_6-9-1-交互属性" tabindex="-1"><a class="header-anchor" href="#_6-9-1-交互属性"><span>6.9.1 交互属性</span></a></h3><p>可以将单击事件绑定到任务。点击可以导致javascript回调或将在当前浏览器选项卡中打开的链接。注意：当使用 <code>securityLevel=&#39;strict&#39;</code> 时禁用此功能，当使用 <code>securityLevel=&#39;loose&#39;</code> 时启用此功能。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">click taskId call callback(arguments)</span>
<span class="line">click taskId href URL</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>taskId是任务的id</li><li>callback是在显示图形的页面上定义的javascript函数的名称，如果没有指定其他参数，则将使用taskId作为参数调用该函数。</li></ul><h3 id="_6-9-2-html中的交互" tabindex="-1"><a class="header-anchor" href="#_6-9-2-html中的交互"><span>6.9.2 html中的交互</span></a></h3><p>初学者提示——在html上下文中使用交互式链接的完整示例：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mermaid<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    gantt</span>
<span class="line">      dateFormat  YYYY-MM-DD</span>
<span class="line"></span>
<span class="line">      section Clickable</span>
<span class="line">      Visit mermaidjs         :active, cl1, 2014-01-07, 3d</span>
<span class="line">      Print arguments         :cl2, after cl1, 3d</span>
<span class="line">      Print task              :cl3, after cl2, 3d</span>
<span class="line"></span>
<span class="line">      click cl1 href &quot;https://mermaidjs.github.io/&quot;</span>
<span class="line">      click cl2 call printArguments(&quot;test1&quot;, &quot;test2&quot;, test3)</span>
<span class="line">      click cl3 call printTask()</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">printArguments</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token punctuation">,</span> arg2<span class="token punctuation">,</span> arg3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;printArguments called with arguments: &#39;</span> <span class="token operator">+</span> arg1 <span class="token operator">+</span> <span class="token string">&#39;, &#39;</span> <span class="token operator">+</span> arg2 <span class="token operator">+</span> <span class="token string">&#39;, &#39;</span> <span class="token operator">+</span> arg3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">printTask</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">taskId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;taskId: &#39;</span> <span class="token operator">+</span> taskId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">startOnLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">securityLevel</span><span class="token operator">:</span> <span class="token string">&#39;loose&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-10-例子" tabindex="-1"><a class="header-anchor" href="#_6-10-例子"><span>6.10 例子</span></a></h2><h3 id="_6-10-1-条形图-使用甘特图" tabindex="-1"><a class="header-anchor" href="#_6-10-1-条形图-使用甘特图"><span>6.10.1 条形图（使用甘特图）</span></a></h3><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">gantt</span>
<span class="line">    title Git Issues - days since last update</span>
<span class="line">    dateFormat X</span>
<span class="line">    axisFormat %s</span>
<span class="line">    section Issue19062</span>
<span class="line">    71   : 0, 71</span>
<span class="line">    section Issue19401</span>
<span class="line">    36   : 0, 36</span>
<span class="line">    section Issue193</span>
<span class="line">    34   : 0, 34</span>
<span class="line">    section Issue7441</span>
<span class="line">    9    : 0, 9</span>
<span class="line">    section Issue1300</span>
<span class="line">    5    : 0, 5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-pqp4l0h">            gantt
    title Git Issues - days since last update
    dateFormat X
    axisFormat %s
    section Issue19062
    71   : 0, 71
    section Issue19401
    36   : 0, 36
    section Issue193
    34   : 0, 34
    section Issue7441
    9    : 0, 9
    section Issue1300
    5    : 0, 5

          </pre></code>`,115)]))}const c=s(d,[["render",i]]),o=JSON.parse('{"path":"/other/other/mermaid/07.html","title":"六、甘特图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/07.md"}');export{c as comp,o as data};
