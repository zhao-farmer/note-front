<template><div><h1 id="mermaid基础知识" tabindex="-1"><a class="header-anchor" href="#mermaid基础知识"><span>mermaid基础知识</span></a></h1>
<p>它是一个基于JavaScript的绘图和图表工具，可以呈现受markdown启发的文本定义，以动态地创建和修改图表。</p>
<h2 id="_1-markdown-使用-mermaid" tabindex="-1"><a class="header-anchor" href="#_1-markdown-使用-mermaid"><span>1. markdown 使用 mermaid</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">以下代码块将呈现为Mermaid图：</span>
<span class="line"></span>
<span class="line">```mermaid</span>
<span class="line">flowchart LR</span>
<span class="line">  A --> B</span>
<span class="line">```</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-html代码使用" tabindex="-1"><a class="header-anchor" href="#_2-html代码使用"><span>2. html代码使用</span></a></h2>
<p>通过 mermaid.esm.mjs 或 mermaid.esm.min.mjs 和 mermaid.initialize() 调用导入Mermaid库</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">    Here is one mermaid diagram:</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mermaid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            graph TD</span>
<span class="line">            A[Client] --> B[Load Balancer]</span>
<span class="line">            B --> C[Server1]</span>
<span class="line">            B --> D[Server2]</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    And here is another:</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mermaid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">            graph TD</span>
<span class="line">            A[Client] -->|tcp_123| B</span>
<span class="line">            B(Load Balancer)</span>
<span class="line">            B -->|tcp_456| C[Server1]</span>
<span class="line">            B -->|tcp_456| D[Server2]</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">      <span class="token keyword">import</span> mermaid <span class="token keyword">from</span> <span class="token string">'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs'</span><span class="token punctuation">;</span></span>
<span class="line">      mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">startOnLoad</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-将mermaid添加为依赖项" tabindex="-1"><a class="header-anchor" href="#_3-将mermaid添加为依赖项"><span>3. 将Mermaid添加为依赖项</span></a></h2>
<ol>
<li>安装</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> mermaid</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>mermaid引入和初始化</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span>  mermaid <span class="token keyword">from</span> <span class="token string">'mermaid'</span></span>
<span class="line">mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">startOnLoad</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>通过v-html进行渲染</li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mermaidCode<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> mermaid <span class="token keyword">from</span> <span class="token string">"mermaid"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">startOnLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">securityLevel</span><span class="token operator">:</span><span class="token string">"loose"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">mermaidCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">        &lt;div class="mermaid" id="mermaidChart"></span>
<span class="line">          flowchart LR;</span>
<span class="line">          A-->B;</span>
<span class="line">          B-->C;</span>
<span class="line">          C-->D;</span>
<span class="line">        &lt;/div></span>
<span class="line">      </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-mermaid-配置" tabindex="-1"><a class="header-anchor" href="#_4-mermaid-配置"><span>4. mermaid 配置</span></a></h2>
<ul>
<li>站点级别的覆盖由initialize调用设置，并将应用于站点/应用程序中的所有图。这个术语是siteConfig。</li>
<li>Frontmatter ——可以在图表的Frontmatter中更新所选的配置参数。这些应用于渲染配置。</li>
</ul>
<h3 id="_4-1-frontmatter配置" tabindex="-1"><a class="header-anchor" href="#_4-1-frontmatter配置"><span>4.1 Frontmatter配置</span></a></h3>
<p>可以在图的顶端覆盖整个美人鱼配置（除了安全配置）。前端内容是位于图表顶部的一个YAML块。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">---</span>
<span class="line">title: Hello Title</span>
<span class="line">config:</span>
<span class="line">  theme: base</span>
<span class="line">  themeVariables:</span>
<span class="line">    primaryColor: "#00ff00"</span>
<span class="line">---</span>
<span class="line">flowchart</span>
<span class="line">	Hello --> World</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <pre class="mermaid" id="mermaid-1f3wk8a">
            ---
title: Hello Title
config:
  theme: base
  themeVariables:
    primaryColor: "#00ff00"
---
flowchart
	Hello --> World

          </pre>
        <h3 id="_4-2-initialize" tabindex="-1"><a class="header-anchor" href="#_4-2-initialize"><span>4.2 initialize</span></a></h3>
<ol>
<li>初始化的序列图</li>
</ol>

          <pre class="mermaid" id="mermaid-6zn20ac">
            sequenceDiagram
	Site->>mermaid: initialize
	Site->>mermaid: content loaded
	mermaid->>mermaidAPI: init

          </pre>
        <ol start="2">
<li>初始化配置</li>
</ol>
<p><a href="https://mermaid.js.org/config/schema-docs/config.html" target="_blank" rel="noopener noreferrer">配置项查看</a></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">mermaid.initialize({</span>
<span class="line">  ...</span>
<span class="line">});</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-mermaid-api与接口" tabindex="-1"><a class="header-anchor" href="#_5-mermaid-api与接口"><span>5. mermaid api与接口</span></a></h2>
<h3 id="_5-1-安装等级-securitylevel" tabindex="-1"><a class="header-anchor" href="#_5-1-安装等级-securitylevel"><span>5.1 安装等级(securityLevel)</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>描述</th>
<th>类型</th>
<th>要求</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td>securityLevel</td>
<td>已解析图的信任级别</td>
<td>字符串</td>
<td>可选</td>
<td><code v-pre>sandbox</code>、 <code v-pre>strict</code>、 <code v-pre>loose</code>、 <code v-pre>antiscript</code></td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>值</p>
<ul>
<li>strict:（默认）对文本中的HTML标记进行编码，并且禁用单击功能。</li>
<li>antiscript：允许文本中的HTML标记（仅删除脚本元素），并启用单击功能。</li>
<li>loose：允许文本中的HTML标记，并启用单击功能。</li>
<li>sandbox：使用此安全级别，所有渲染都在沙盒框架中进行。这可以防止任何JavaScript在上下文中运行。这可能会阻碍图的交互功能，如脚本、序列图中的弹出窗口、到其他选项卡或目标的链接等。</li>
</ul>
</li>
<li>
<p>代码写法</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">securityLevel</span><span class="token operator">:</span> <span class="token string">'loose'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-mermaid-run" tabindex="-1"><a class="header-anchor" href="#_5-2-mermaid-run"><span>5.2 mermaid.run</span></a></h3>
<p>run是在v10中添加的，是处理更复杂集成的首选方式。默认情况下，当文档准备好时将调用 <code v-pre>mermaid.run</code> ，呈现所有 <code v-pre>class=&quot;mermaid&quot;</code> 的元素。</p>
<p>您可以通过调用 <code v-pre>await mermaid.run(&lt;config&gt;)</code> 来定制该行为。</p>
<p><code v-pre>mermaid.initialize({startOnLoad: false})</code> 将阻止 <code v-pre>mermaid.run</code> 在加载后被自动调用。</p>
<p>使用querySelector “.someOtherClass”渲染所有元素</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">startOnLoad</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> mermaid<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">querySelector</span><span class="token operator">:</span> <span class="token string">'.someOtherClass'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染作为数组传递的所有元素</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">startOnLoad</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> mermaid<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">nodes</span><span class="token operator">:</span> <span class="token punctuation">[</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'someId'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'anotherId'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> mermaid<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">nodes</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'.yetAnotherClass'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>渲染所有 <code v-pre>.mermaid</code> 元素，同时抑制任何错误</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">startOnLoad</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> mermaid<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">suppressErrors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-mermaid-init-已弃用" tabindex="-1"><a class="header-anchor" href="#_5-3-mermaid-init-已弃用"><span>5.3 <code v-pre>mermaid.init</code>-已弃用</span></a></h3>
<p>Init在v10中已弃用，并将在未来的版本中删除。请使用mermaid.run代替。</p>
<p>默认情况下，当文档准备好时将调用 <code v-pre>mermaid.init</code> ，查找所有 <code v-pre>class=&quot;mermaid&quot;</code> 的元素。如果你在mermaid加载后添加内容，或者需要更细粒度地控制此行为，你可以自己调用 <code v-pre>init</code> ：</p>
<ul>
<li>配置对象</li>
<li>有些节点，如</li>
</ul>
<p>例子:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">mermaid<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">noteMargin</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">'.someOtherClass'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者没有配置对象，只有一个jQuery选择：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line">mermaid<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#someId .yetAnotherClass'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


