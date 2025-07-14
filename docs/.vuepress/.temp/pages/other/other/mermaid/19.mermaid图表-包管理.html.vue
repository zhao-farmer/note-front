<template><div><h1 id="十八、包图" tabindex="-1"><a class="header-anchor" href="#十八、包图"><span>十八、包图</span></a></h1>
<h2 id="_18-1-包图基础" tabindex="-1"><a class="header-anchor" href="#_18-1-包图基础"><span>18.1 包图基础</span></a></h2>
<ol>
<li>介绍</li>
</ol>
<p>包图是用来说明网络包的结构和内容的可视化表示。网络数据包是通过网络传输的数据的基本单位。</p>
<ol start="2">
<li>用法</li>
</ol>
<p>这种图表类型对于开发人员、网络工程师、教育工作者和学生特别有用，他们需要一种清晰而简洁的方式来表示网络数据包的结构。</p>
<h2 id="_18-2-语法" tabindex="-1"><a class="header-anchor" href="#_18-2-语法"><span>18.2 语法</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">packet-beta</span>
<span class="line">start: "Block name" %% Single-bit block</span>
<span class="line">start-end: "Block name" %% Multi-bit blocks</span>
<span class="line">... More Fields ...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-3-例子" tabindex="-1"><a class="header-anchor" href="#_18-3-例子"><span>18.3 例子</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">---</span>
<span class="line">title: "TCP Packet"</span>
<span class="line">---</span>
<span class="line">packet-beta</span>
<span class="line">0-15: "Source Port"</span>
<span class="line">16-31: "Destination Port"</span>
<span class="line">32-63: "Sequence Number"</span>
<span class="line">64-95: "Acknowledgment Number"</span>
<span class="line">96-99: "Data Offset"</span>
<span class="line">100-105: "Reserved"</span>
<span class="line">106: "URG"</span>
<span class="line">107: "ACK"</span>
<span class="line">108: "PSH"</span>
<span class="line">109: "RST"</span>
<span class="line">110: "SYN"</span>
<span class="line">111: "FIN"</span>
<span class="line">112-127: "Window"</span>
<span class="line">128-143: "Checksum"</span>
<span class="line">144-159: "Urgent Pointer"</span>
<span class="line">160-191: "(Options and Padding)"</span>
<span class="line">192-255: "Data (variable length)"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-pm7b52t">
            ---
title: "TCP Packet"
---
packet-beta
0-15: "Source Port"
16-31: "Destination Port"
32-63: "Sequence Number"
64-95: "Acknowledgment Number"
96-99: "Data Offset"
100-105: "Reserved"
106: "URG"
107: "ACK"
108: "PSH"
109: "RST"
110: "SYN"
111: "FIN"
112-127: "Window"
128-143: "Checksum"
144-159: "Urgent Pointer"
160-191: "(Options and Padding)"
192-255: "Data (variable length)"

          </pre>
        <hr>
<ul>
<li>代码</li>
</ul>
<p>美人鱼</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">packet-beta</span>
<span class="line">title UDP Packet</span>
<span class="line">0-15: "Source Port"</span>
<span class="line">16-31: "Destination Port"</span>
<span class="line">32-47: "Length"</span>
<span class="line">48-63: "Checksum"</span>
<span class="line">64-95: "Data (variable length)"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-iq2u0on">
            packet-beta
title UDP Packet
0-15: "Source Port"
16-31: "Destination Port"
32-47: "Length"
48-63: "Checksum"
64-95: "Data (variable length)"

          </pre>
        <h2 id="_18-4-语法细节" tabindex="-1"><a class="header-anchor" href="#_18-4-语法细节"><span>18.4 语法细节</span></a></h2>
<ul>
<li>范围：标题后的每一行代表数据包中的一个不同字段。范围（例如 <code v-pre>0-15</code> ）表示报文中的位位置。</li>
<li>字段描述：字段所代表内容的简短描述，用引号括起来。</li>
</ul>
</div></template>


