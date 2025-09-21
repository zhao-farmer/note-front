import{aq as s,ar as a,as as i,at as e}from"./app-Cok9BT0p.js";const l={};function c(r,n){return e(),a("div",null,n[0]||(n[0]=[i(`<h1 id="十五、桑基图" tabindex="-1"><a class="header-anchor" href="#十五、桑基图"><span>十五、桑基图</span></a></h1><blockquote><p>桑基图是用于描述从一组值到另一组值的流的可视化图。</p></blockquote><blockquote><ol><li>这是一张实验图。它的语法非常接近纯CSV，但它将在不久的将来得到扩展。</li><li>被连接的东西被称为节点，连接被称为链接。</li></ol></blockquote><h2 id="_15-1-例子" tabindex="-1"><a class="header-anchor" href="#_15-1-例子"><span>15.1 例子</span></a></h2><p>这个例子取自observable。不过，在大小和颜色方面，它可能会被渲染得有点不同。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">---</span>
<span class="line">config:</span>
<span class="line">  sankey:</span>
<span class="line">    showValues: false</span>
<span class="line">---</span>
<span class="line">sankey-beta</span>
<span class="line"></span>
<span class="line">Agricultural &#39;waste&#39;,Bio-conversion,124.729</span>
<span class="line">Bio-conversion,Liquid,0.597</span>
<span class="line">Bio-conversion,Losses,26.862</span>
<span class="line">Bio-conversion,Solid,280.322</span>
<span class="line">Bio-conversion,Gas,81.144</span>
<span class="line">Biofuel imports,Liquid,35</span>
<span class="line">Biomass imports,Solid,35</span>
<span class="line">Coal imports,Coal,11.606</span>
<span class="line">Coal reserves,Coal,63.965</span>
<span class="line">Coal,Solid,75.571</span>
<span class="line">District heating,Industry,10.639</span>
<span class="line">District heating,Heating and cooling - commercial,22.505</span>
<span class="line">District heating,Heating and cooling - homes,46.184</span>
<span class="line">Electricity grid,Over generation / exports,104.453</span>
<span class="line">Electricity grid,Heating and cooling - homes,113.726</span>
<span class="line">Electricity grid,H2 conversion,27.14</span>
<span class="line">Electricity grid,Industry,342.165</span>
<span class="line">Electricity grid,Road transport,37.797</span>
<span class="line">Electricity grid,Agriculture,4.412</span>
<span class="line">Electricity grid,Heating and cooling - commercial,40.858</span>
<span class="line">Electricity grid,Losses,56.691</span>
<span class="line">Electricity grid,Rail transport,7.863</span>
<span class="line">Electricity grid,Lighting &amp; appliances - commercial,90.008</span>
<span class="line">Electricity grid,Lighting &amp; appliances - homes,93.494</span>
<span class="line">Gas imports,Ngas,40.719</span>
<span class="line">Gas reserves,Ngas,82.233</span>
<span class="line">Gas,Heating and cooling - commercial,0.129</span>
<span class="line">Gas,Losses,1.401</span>
<span class="line">Gas,Thermal generation,151.891</span>
<span class="line">Gas,Agriculture,2.096</span>
<span class="line">Gas,Industry,48.58</span>
<span class="line">Geothermal,Electricity grid,7.013</span>
<span class="line">H2 conversion,H2,20.897</span>
<span class="line">H2 conversion,Losses,6.242</span>
<span class="line">H2,Road transport,20.897</span>
<span class="line">Hydro,Electricity grid,6.995</span>
<span class="line">Liquid,Industry,121.066</span>
<span class="line">Liquid,International shipping,128.69</span>
<span class="line">Liquid,Road transport,135.835</span>
<span class="line">Liquid,Domestic aviation,14.458</span>
<span class="line">Liquid,International aviation,206.267</span>
<span class="line">Liquid,Agriculture,3.64</span>
<span class="line">Liquid,National navigation,33.218</span>
<span class="line">Liquid,Rail transport,4.413</span>
<span class="line">Marine algae,Bio-conversion,4.375</span>
<span class="line">Ngas,Gas,122.952</span>
<span class="line">Nuclear,Thermal generation,839.978</span>
<span class="line">Oil imports,Oil,504.287</span>
<span class="line">Oil reserves,Oil,107.703</span>
<span class="line">Oil,Liquid,611.99</span>
<span class="line">Other waste,Solid,56.587</span>
<span class="line">Other waste,Bio-conversion,77.81</span>
<span class="line">Pumped heat,Heating and cooling - homes,193.026</span>
<span class="line">Pumped heat,Heating and cooling - commercial,70.672</span>
<span class="line">Solar PV,Electricity grid,59.901</span>
<span class="line">Solar Thermal,Heating and cooling - homes,19.263</span>
<span class="line">Solar,Solar Thermal,19.263</span>
<span class="line">Solar,Solar PV,59.901</span>
<span class="line">Solid,Agriculture,0.882</span>
<span class="line">Solid,Thermal generation,400.12</span>
<span class="line">Solid,Industry,46.477</span>
<span class="line">Thermal generation,Electricity grid,525.531</span>
<span class="line">Thermal generation,Losses,787.129</span>
<span class="line">Thermal generation,District heating,79.329</span>
<span class="line">Tidal,Electricity grid,9.452</span>
<span class="line">UK land based bioenergy,Bio-conversion,182.01</span>
<span class="line">Wave,Electricity grid,19.013</span>
<span class="line">Wind,Electricity grid,289.366</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-jiy9eoe">            ---
config:
  sankey:
    showValues: false
---
sankey-beta

Agricultural &#39;waste&#39;,Bio-conversion,124.729
Bio-conversion,Liquid,0.597
Bio-conversion,Losses,26.862
Bio-conversion,Solid,280.322
Bio-conversion,Gas,81.144
Biofuel imports,Liquid,35
Biomass imports,Solid,35
Coal imports,Coal,11.606
Coal reserves,Coal,63.965
Coal,Solid,75.571
District heating,Industry,10.639
District heating,Heating and cooling - commercial,22.505
District heating,Heating and cooling - homes,46.184
Electricity grid,Over generation / exports,104.453
Electricity grid,Heating and cooling - homes,113.726
Electricity grid,H2 conversion,27.14
Electricity grid,Industry,342.165
Electricity grid,Road transport,37.797
Electricity grid,Agriculture,4.412
Electricity grid,Heating and cooling - commercial,40.858
Electricity grid,Losses,56.691
Electricity grid,Rail transport,7.863
Electricity grid,Lighting &amp; appliances - commercial,90.008
Electricity grid,Lighting &amp; appliances - homes,93.494
Gas imports,Ngas,40.719
Gas reserves,Ngas,82.233
Gas,Heating and cooling - commercial,0.129
Gas,Losses,1.401
Gas,Thermal generation,151.891
Gas,Agriculture,2.096
Gas,Industry,48.58
Geothermal,Electricity grid,7.013
H2 conversion,H2,20.897
H2 conversion,Losses,6.242
H2,Road transport,20.897
Hydro,Electricity grid,6.995
Liquid,Industry,121.066
Liquid,International shipping,128.69
Liquid,Road transport,135.835
Liquid,Domestic aviation,14.458
Liquid,International aviation,206.267
Liquid,Agriculture,3.64
Liquid,National navigation,33.218
Liquid,Rail transport,4.413
Marine algae,Bio-conversion,4.375
Ngas,Gas,122.952
Nuclear,Thermal generation,839.978
Oil imports,Oil,504.287
Oil reserves,Oil,107.703
Oil,Liquid,611.99
Other waste,Solid,56.587
Other waste,Bio-conversion,77.81
Pumped heat,Heating and cooling - homes,193.026
Pumped heat,Heating and cooling - commercial,70.672
Solar PV,Electricity grid,59.901
Solar Thermal,Heating and cooling - homes,19.263
Solar,Solar Thermal,19.263
Solar,Solar PV,59.901
Solid,Agriculture,0.882
Solid,Thermal generation,400.12
Solid,Industry,46.477
Thermal generation,Electricity grid,525.531
Thermal generation,Losses,787.129
Thermal generation,District heating,79.329
Tidal,Electricity grid,9.452
UK land based bioenergy,Bio-conversion,182.01
Wave,Electricity grid,19.013
Wind,Electricity grid,289.366

          </pre></code><h2 id="_15-2-语法" tabindex="-1"><a class="header-anchor" href="#_15-2-语法"><span>15.2 语法</span></a></h2><p>语法背后的思想是，用户首先键入 <code>sankey-beta</code> 关键字，然后在下面粘贴原始CSV并获得结果。</p><p>它实现了如下描述的CSV标准，有细微的差别：</p><ul><li>CSV只能包含3列</li><li>出于视觉目的，允许使用不带逗号分隔符的空行</li></ul><h3 id="_15-2-1-基本" tabindex="-1"><a class="header-anchor" href="#_15-2-1-基本"><span>15.2.1 基本</span></a></h3><p>这意味着CSV中的3列应该分别代表 <code>source</code> ,  <code>target</code> 和 <code>value</code> ：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">sankey-beta</span>
<span class="line"></span>
<span class="line">%% source,target,value</span>
<span class="line">Electricity grid,Over generation / exports,104.453</span>
<span class="line">Electricity grid,Heating and cooling - homes,113.726</span>
<span class="line">Electricity grid,H2 conversion,27.14</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-q9vmxz1">            sankey-beta

%% source,target,value
Electricity grid,Over generation / exports,104.453
Electricity grid,Heating and cooling - homes,113.726
Electricity grid,H2 conversion,27.14

          </pre></code><h3 id="_15-2-2-空行" tabindex="-1"><a class="header-anchor" href="#_15-2-2-空行"><span>15.2.2 空行</span></a></h3><p>CSV默认不支持不带逗号分隔符的空行。但如果需要，你可以添加它们：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">sankey-beta</span>
<span class="line"></span>
<span class="line">Bio-conversion,Losses,26.862</span>
<span class="line"></span>
<span class="line">Bio-conversion,Solid,280.322</span>
<span class="line"></span>
<span class="line">Bio-conversion,Gas,81.144</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-6sq8brw">            sankey-beta

Bio-conversion,Losses,26.862

Bio-conversion,Solid,280.322

Bio-conversion,Gas,81.144

          </pre></code><h3 id="_15-2-3-逗号" tabindex="-1"><a class="header-anchor" href="#_15-2-3-逗号"><span>15.2.3 逗号</span></a></h3><p>如果你需要逗号，用双引号括起来：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">sankey-beta</span>
<span class="line"></span>
<span class="line">Pumped heat,&quot;Heating and cooling, homes&quot;,193.026</span>
<span class="line">Pumped heat,&quot;Heating and cooling, commercial&quot;,70.672</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-j0zjh50">            sankey-beta

Pumped heat,&quot;Heating and cooling, homes&quot;,193.026
Pumped heat,&quot;Heating and cooling, commercial&quot;,70.672

          </pre></code><h3 id="_15-2-4-双引号" tabindex="-1"><a class="header-anchor" href="#_15-2-4-双引号"><span>15.2.4 双引号</span></a></h3><p>如果你需要双引号，把一对双引号放在带引号的字符串里：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">sankey-beta</span>
<span class="line"></span>
<span class="line">Pumped heat,&quot;Heating and cooling, &quot;&quot;homes&quot;&quot;&quot;,193.026</span>
<span class="line">Pumped heat,&quot;Heating and cooling, &quot;&quot;commercial&quot;&quot;&quot;,70.672</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-kfpimwr">            sankey-beta

Pumped heat,&quot;Heating and cooling, &quot;&quot;homes&quot;&quot;&quot;,193.026
Pumped heat,&quot;Heating and cooling, &quot;&quot;commercial&quot;&quot;&quot;,70.672

          </pre></code><h2 id="_15-3-配置" tabindex="-1"><a class="header-anchor" href="#_15-3-配置"><span>15.3 配置</span></a></h2><p>您可以自定义链接颜色、节点对齐方式和图表尺寸。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">startOnLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">securityLevel</span><span class="token operator">:</span> <span class="token string">&#39;loose&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sankey</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">linkColor</span><span class="token operator">:</span> <span class="token string">&#39;source&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">nodeAlignment</span><span class="token operator">:</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-3-1-链接颜色" tabindex="-1"><a class="header-anchor" href="#_15-3-1-链接颜色"><span>15.3.1 链接颜色</span></a></h3><p>你可以通过设置 <code>linkColor</code> 来调整链接的颜色：</p><ul><li><code>source</code>  - link将为源节点颜色</li><li><code>target</code>  - link将是目标节点的颜色</li><li><code>gradient</code>  -链接颜色将在源节点和目标节点颜色之间平滑过渡</li><li>颜色的十六进制代码，如 <code>#a1a1a1</code></li></ul><h3 id="_15-3-2-节点对齐" tabindex="-1"><a class="header-anchor" href="#_15-3-2-节点对齐"><span>15.3.2 节点对齐</span></a></h3><p>通过设置 <code>nodeAlignment</code> 为，可以改变图形布局：</p><ul><li><code>justify</code></li><li><code>center</code></li><li><code>left</code></li><li><code>right</code></li></ul>`,46)]))}const o=s(l,[["render",c]]),d=JSON.parse('{"path":"/other/other/mermaid/16.html","title":"十五、桑基图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/16.md"}');export{o as comp,d as data};
