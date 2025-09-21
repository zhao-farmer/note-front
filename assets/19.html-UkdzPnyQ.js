import{aq as e,ar as a,as as s,at as t}from"./app-Cok9BT0p.js";const i={};function l(o,n){return t(),a("div",null,n[0]||(n[0]=[s(`<h1 id="十八、包图" tabindex="-1"><a class="header-anchor" href="#十八、包图"><span>十八、包图</span></a></h1><h2 id="_18-1-包图基础" tabindex="-1"><a class="header-anchor" href="#_18-1-包图基础"><span>18.1 包图基础</span></a></h2><ol><li>介绍</li></ol><p>包图是用来说明网络包的结构和内容的可视化表示。网络数据包是通过网络传输的数据的基本单位。</p><ol start="2"><li>用法</li></ol><p>这种图表类型对于开发人员、网络工程师、教育工作者和学生特别有用，他们需要一种清晰而简洁的方式来表示网络数据包的结构。</p><h2 id="_18-2-语法" tabindex="-1"><a class="header-anchor" href="#_18-2-语法"><span>18.2 语法</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">packet-beta</span>
<span class="line">start: &quot;Block name&quot; %% Single-bit block</span>
<span class="line">start-end: &quot;Block name&quot; %% Multi-bit blocks</span>
<span class="line">... More Fields ...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-3-例子" tabindex="-1"><a class="header-anchor" href="#_18-3-例子"><span>18.3 例子</span></a></h2><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">---</span>
<span class="line">title: &quot;TCP Packet&quot;</span>
<span class="line">---</span>
<span class="line">packet-beta</span>
<span class="line">0-15: &quot;Source Port&quot;</span>
<span class="line">16-31: &quot;Destination Port&quot;</span>
<span class="line">32-63: &quot;Sequence Number&quot;</span>
<span class="line">64-95: &quot;Acknowledgment Number&quot;</span>
<span class="line">96-99: &quot;Data Offset&quot;</span>
<span class="line">100-105: &quot;Reserved&quot;</span>
<span class="line">106: &quot;URG&quot;</span>
<span class="line">107: &quot;ACK&quot;</span>
<span class="line">108: &quot;PSH&quot;</span>
<span class="line">109: &quot;RST&quot;</span>
<span class="line">110: &quot;SYN&quot;</span>
<span class="line">111: &quot;FIN&quot;</span>
<span class="line">112-127: &quot;Window&quot;</span>
<span class="line">128-143: &quot;Checksum&quot;</span>
<span class="line">144-159: &quot;Urgent Pointer&quot;</span>
<span class="line">160-191: &quot;(Options and Padding)&quot;</span>
<span class="line">192-255: &quot;Data (variable length)&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-vyq6ezu">            ---
title: &quot;TCP Packet&quot;
---
packet-beta
0-15: &quot;Source Port&quot;
16-31: &quot;Destination Port&quot;
32-63: &quot;Sequence Number&quot;
64-95: &quot;Acknowledgment Number&quot;
96-99: &quot;Data Offset&quot;
100-105: &quot;Reserved&quot;
106: &quot;URG&quot;
107: &quot;ACK&quot;
108: &quot;PSH&quot;
109: &quot;RST&quot;
110: &quot;SYN&quot;
111: &quot;FIN&quot;
112-127: &quot;Window&quot;
128-143: &quot;Checksum&quot;
144-159: &quot;Urgent Pointer&quot;
160-191: &quot;(Options and Padding)&quot;
192-255: &quot;Data (variable length)&quot;

          </pre></code><hr><ul><li>代码</li></ul><p>美人鱼</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">packet-beta</span>
<span class="line">title UDP Packet</span>
<span class="line">0-15: &quot;Source Port&quot;</span>
<span class="line">16-31: &quot;Destination Port&quot;</span>
<span class="line">32-47: &quot;Length&quot;</span>
<span class="line">48-63: &quot;Checksum&quot;</span>
<span class="line">64-95: &quot;Data (variable length)&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-t6jm5pb">            packet-beta
title UDP Packet
0-15: &quot;Source Port&quot;
16-31: &quot;Destination Port&quot;
32-47: &quot;Length&quot;
48-63: &quot;Checksum&quot;
64-95: &quot;Data (variable length)&quot;

          </pre></code><h2 id="_18-4-语法细节" tabindex="-1"><a class="header-anchor" href="#_18-4-语法细节"><span>18.4 语法细节</span></a></h2><ul><li>范围：标题后的每一行代表数据包中的一个不同字段。范围（例如 <code>0-15</code> ）表示报文中的位位置。</li><li>字段描述：字段所代表内容的简短描述，用引号括起来。</li></ul>`,21)]))}const r=e(i,[["render",l]]),d=JSON.parse('{"path":"/other/other/mermaid/19.html","title":"十八、包图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/19.md"}');export{r as comp,d as data};
