import{aq as t,ar as a,as as s,at as n}from"./app-Cok9BT0p.js";const i={};function o(l,e){return n(),a("div",null,e[0]||(e[0]=[s(`<h1 id="七、饼状图" tabindex="-1"><a class="header-anchor" href="#七、饼状图"><span>七、饼状图</span></a></h1><blockquote><p>饼图（或圆形图）是一种圆形的统计图形，它被分成几片来说明数字比例。在饼状图中，每个切片的弧长（以及它的圆心角和面积）与它所代表的数量成正比。虽然它的名字是因为它看起来像一个被切成薄片的馅饼，但它的呈现方式也有不同。</p></blockquote><h2 id="_7-1-饼图基础使用" tabindex="-1"><a class="header-anchor" href="#_7-1-饼图基础使用"><span>7.1 饼图基础使用</span></a></h2><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">pie title Pets adopted by volunteers</span>
<span class="line">    &quot;Dogs&quot; : 386</span>
<span class="line">    &quot;Cats&quot; : 85</span>
<span class="line">    &quot;Rats&quot; : 15</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-oz1xp8x">            pie title Pets adopted by volunteers
    &quot;Dogs&quot; : 386
    &quot;Cats&quot; : 85
    &quot;Rats&quot; : 15

          </pre></code><h2 id="_7-2-语法" tabindex="-1"><a class="header-anchor" href="#_7-2-语法"><span>7.2 语法</span></a></h2><ul><li>以 <code>pie</code> 关键字开始图</li><li>然后是 <code>title</code> 关键字及其字符串形式的值，以给出饼图的标题。这是可选的</li><li>然后是dataSet。饼切片将按照与标签相同的顺时针顺序排列。</li></ul><h2 id="_7-3-例子" tabindex="-1"><a class="header-anchor" href="#_7-3-例子"><span>7.3 例子</span></a></h2><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">%%{init: {&quot;pie&quot;: {&quot;textPosition&quot;: 0.5}, &quot;themeVariables&quot;: {&quot;pieOuterStrokeWidth&quot;: &quot;5px&quot;}} }%%</span>
<span class="line">pie showData</span>
<span class="line">    title Key elements in Product X</span>
<span class="line">    &quot;Calcium&quot; : 42.96</span>
<span class="line">    &quot;Potassium&quot; : 50.05</span>
<span class="line">    &quot;Magnesium&quot; : 10.01</span>
<span class="line">    &quot;Iron&quot; :  5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-czrsrnw">            %%{init: {&quot;pie&quot;: {&quot;textPosition&quot;: 0.5}, &quot;themeVariables&quot;: {&quot;pieOuterStrokeWidth&quot;: &quot;5px&quot;}} }%%
pie showData
    title Key elements in Product X
    &quot;Calcium&quot; : 42.96
    &quot;Potassium&quot; : 50.05
    &quot;Magnesium&quot; : 10.01
    &quot;Iron&quot; :  5

          </pre></code><h2 id="_7-4-配置" tabindex="-1"><a class="header-anchor" href="#_7-4-配置"><span>7.4 配置</span></a></h2><p>可能的饼图配置参数：</p><table><thead><tr><th>参数</th><th>描述</th><th>默认值</th></tr></thead><tbody><tr><td><code>textPosition</code></td><td>饼图切片标签的轴向位置，从中心的0.0到圆外缘的1.0。</td><td><code>0.75</code></td></tr></tbody></table>`,17)]))}const r=t(i,[["render",o]]),u=JSON.parse('{"path":"/other/other/mermaid/08.html","title":"七、饼状图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/08.md"}');export{r as comp,u as data};
