<template><div><h1 id="十一、可访问性" tabindex="-1"><a class="header-anchor" href="#十一、可访问性"><span>十一、可访问性</span></a></h1>
<p>PixiJS通过一个基于dom的覆盖系统内置了可访问性支持，该系统集成了屏幕阅读器、键盘导航和其他辅助技术。它使用 <code v-pre>&lt;div&gt;</code> 覆盖向屏幕阅读器描述可视元素</p>
<p>信息</p>
<p>可访问性是可选的，以减少包的大小，必须显式启用。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">'pixi.js/accessibility'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Container <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">button<span class="token punctuation">.</span>accessible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-1-它是如何工作的" tabindex="-1"><a class="header-anchor" href="#_11-1-它是如何工作的"><span>11.1 它是如何工作的</span></a></h2>
<p>PixiJS将DOM  <code v-pre>&lt;div&gt;</code> 元素放置在画布上，与可访问对象的边界对齐。这些元素:</p>
<ul>
<li>可通过键盘接收焦点（ <code v-pre>tabIndex</code> ）</li>
<li>向屏幕阅读器宣布 <code v-pre>accessibleTitle</code> 或 <code v-pre>accessibleHint</code></li>
<li>调度 <code v-pre>click</code> ,  <code v-pre>mouseover</code> ,  <code v-pre>mouseout</code> 事件作为Pixi指针事件</li>
<li>在适当的地方使用 <code v-pre>aria-live</code> 和 <code v-pre>aria-label</code></li>
</ul>
<h2 id="_11-2-启用系统" tabindex="-1"><a class="header-anchor" href="#_11-2-启用系统"><span>11.2 启用系统</span></a></h2>
<p>要启用可访问性，你必须在创建渲染器之前导入该模块：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">'pixi.js/accessibility'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>PixiJS自动安装 <code v-pre>AccessibilitySystem</code> 到你的渲染器。您可以配置激活它的方式和时间。</p>
<h2 id="_11-3-配置选项" tabindex="-1"><a class="header-anchor" href="#_11-3-配置选项"><span>11.3 配置选项</span></a></h2>
<p>你可以通过向 <code v-pre>Application</code> 构造函数传递选项来定制可访问性系统何时以及如何激活：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Application</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    accessibilityOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        enabledByDefault<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 启动时默认启用</span></span>
<span class="line">        activateOnTab<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 禁用通过Tab键自动激活</span></span>
<span class="line">        deactivateOnMouseMove<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 鼠标移动时保持系统激活状态</span></span>
<span class="line">        debug<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 显示div覆盖层用于调试</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者通过编程方式启用/禁用系统：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span>renderer<span class="token punctuation">.</span>accessibility<span class="token punctuation">.</span><span class="token function">setAccessibilityEnabled</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_10-4-创建可访问对象" tabindex="-1"><a class="header-anchor" href="#_10-4-创建可访问对象"><span>10.4 创建可访问对象</span></a></h2>
<p>要将显示对象标记为可访问并将其添加到可访问系统中，请将 <code v-pre>accessible</code> 属性设置为 <code v-pre>true</code> 。这将创建一个 <code v-pre>&lt;div&gt;</code> 覆盖，屏幕阅读器可以与之交互。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Container</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">button<span class="token punctuation">.</span>accessible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span>stage<span class="token punctuation">.</span><span class="token function">addChild</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-4-1-可访问容器的属性" tabindex="-1"><a class="header-anchor" href="#_10-4-1-可访问容器的属性"><span>10.4.1 可访问容器的属性</span></a></h3>
<p>你可以在可访问容器上设置几个属性来自定义它们的行为：</p>
<table>
<thead>
<tr>
<th>财产</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>accessible</code></td>
<td>启用对象的可访问性</td>
</tr>
<tr>
<td><code v-pre>accessibleTitle</code></td>
<td>为屏幕阅读器设置 <code v-pre>title</code></td>
</tr>
<tr>
<td><code v-pre>accessibleHint</code></td>
<td>设置 <code v-pre>aria-label</code></td>
</tr>
<tr>
<td><code v-pre>accessibleText</code></td>
<td>div的可选内部文本</td>
</tr>
<tr>
<td><code v-pre>accessibleType</code></td>
<td>用于shadow元素的标签名称（ <code v-pre>'button'</code> ,  <code v-pre>'div'</code> 等）</td>
</tr>
<tr>
<td><code v-pre>accessiblePointerEvents</code></td>
<td>CSS  <code v-pre>pointer-events</code> 值（ <code v-pre>'auto'</code> ,  <code v-pre>'none'</code> 等）</td>
</tr>
<tr>
<td><code v-pre>tabIndex</code></td>
<td>允许焦点与键盘导航</td>
</tr>
<tr>
<td><code v-pre>accessibleChildren</code></td>
<td>此容器的子容器是否可访问</td>
</tr>
</tbody>
</table>
</div></template>


