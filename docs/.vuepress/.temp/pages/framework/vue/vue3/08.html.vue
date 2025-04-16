<template><div><h1 id="_8-vue3新组件" tabindex="-1"><a class="header-anchor" href="#_8-vue3新组件"><span>8. Vue3新组件</span></a></h1>
<h2 id="_8-1-【teleport】" tabindex="-1"><a class="header-anchor" href="#_8-1-【teleport】"><span>8.1. 【Teleport】</span></a></h2>
<ul>
<li>什么是Teleport？—— Teleport 是一种能够将我们的<strong>组件html结构</strong>移动到指定位置的技术。</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>body<span class="token punctuation">'</span></span> <span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isShow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>我是一个弹窗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>我是弹窗中的一些内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isShow = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>关闭弹窗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-【suspense】" tabindex="-1"><a class="header-anchor" href="#_8-2-【suspense】"><span>8.2. 【Suspense】</span></a></h2>
<ul>
<li>等待异步组件时渲染一些额外内容，让应用有更好的用户体验</li>
<li>使用步骤：
<ul>
<li>异步引入组件</li>
<li>使用<code v-pre>Suspense</code>包裹组件，并配置好<code v-pre>default</code> 与 <code v-pre>fallback</code></li>
</ul>
</li>
</ul>
<div class="language-tsx line-numbers-mode" data-highlighter="prismjs" data-ext="tsx" data-title="tsx"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent<span class="token punctuation">,</span>Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> Child <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./Child.vue'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>我是App组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Suspense</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>default</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span><span class="token punctuation">/></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>fallback</span><span class="token punctuation">></span></span></span>
<span class="line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>加载中.......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Suspense</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-3-【全局api转移到应用对象】" tabindex="-1"><a class="header-anchor" href="#_8-3-【全局api转移到应用对象】"><span>8.3.【全局API转移到应用对象】</span></a></h2>
<ul>
<li><code v-pre>app.component</code></li>
<li><code v-pre>app.config</code></li>
<li><code v-pre>app.directive</code></li>
<li><code v-pre>app.mount</code></li>
<li><code v-pre>app.unmount</code></li>
<li><code v-pre>app.use</code></li>
</ul>
<h2 id="_8-4-【其他】" tabindex="-1"><a class="header-anchor" href="#_8-4-【其他】"><span>8.4.【其他】</span></a></h2>
<ul>
<li>
<p>过渡类名 <code v-pre>v-enter</code> 修改为 <code v-pre>v-enter-from</code>、过渡类名 <code v-pre>v-leave</code> 修改为 <code v-pre>v-leave-from</code>。</p>
</li>
<li>
<p><code v-pre>keyCode</code> 作为 <code v-pre>v-on</code> 修饰符的支持。</p>
</li>
<li>
<p><code v-pre>v-model</code> 指令在组件上的使用已经被重新设计，替换掉了 <code v-pre>v-bind.sync。</code></p>
</li>
<li>
<p><code v-pre>v-if</code> 和 <code v-pre>v-for</code> 在同一个元素身上使用时的优先级发生了变化。</p>
</li>
<li>
<p>移除了<code v-pre>$on</code>、<code v-pre>$off</code> 和 <code v-pre>$once</code> 实例方法。</p>
</li>
<li>
<p>移除了过滤器 <code v-pre>filter</code>。</p>
</li>
<li>
<p>移除了<code v-pre>$children</code> 实例 <code v-pre>propert</code>。</p>
<p>......</p>
</li>
</ul>
</div></template>


