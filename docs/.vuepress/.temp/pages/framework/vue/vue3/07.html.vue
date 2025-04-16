<template><div><h1 id="_7-其它-api" tabindex="-1"><a class="header-anchor" href="#_7-其它-api"><span>7. 其它 API</span></a></h1>
<h2 id="_7-1-【shallowref-与-shallowreactive-】" tabindex="-1"><a class="header-anchor" href="#_7-1-【shallowref-与-shallowreactive-】"><span>7.1.【shallowRef 与 shallowReactive 】</span></a></h2>
<h3 id="shallowref" tabindex="-1"><a class="header-anchor" href="#shallowref"><span><code v-pre>shallowRef</code></span></a></h3>
<ol>
<li>
<p>作用：创建一个响应式数据，但只对顶层属性进行响应式处理。</p>
</li>
<li>
<p>用法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> myVar <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span>initialValue<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>特点：只跟踪引用值的变化，不关心值内部的属性变化。</p>
</li>
</ol>
<h3 id="shallowreactive" tabindex="-1"><a class="header-anchor" href="#shallowreactive"><span><code v-pre>shallowReactive</code></span></a></h3>
<ol>
<li>
<p>作用：创建一个浅层响应式对象，只会使对象的最顶层属性变成响应式的，对象内部的嵌套属性则不会变成响应式的</p>
</li>
<li>
<p>用法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> myObj <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>特点：对象的顶层属性是响应式的，但嵌套对象的属性不是。</p>
</li>
</ol>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3>
<blockquote>
<p>通过使用 <a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowref" target="_blank" rel="noopener noreferrer"><code v-pre>shallowRef()</code></a> 和 <a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive" target="_blank" rel="noopener noreferrer"><code v-pre>shallowReactive()</code></a> 来绕开深度响应。浅层式 <code v-pre>API</code> 创建的状态只在其顶层是响应式的，对所有深层的对象不会做任何处理，避免了对每一个内部属性做响应式所带来的性能成本，这使得属性的访问变得更快，可提升性能。</p>
</blockquote>
<h2 id="_7-2-【readonly-与-shallowreadonly】" tabindex="-1"><a class="header-anchor" href="#_7-2-【readonly-与-shallowreadonly】"><span>7.2.【readonly 与 shallowReadonly】</span></a></h2>
<h3 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly"><span><strong><code v-pre>readonly</code></strong></span></a></h3>
<ol>
<li>
<p>作用：用于创建一个对象的深只读副本。</p>
</li>
<li>
<p>用法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> readOnlyCopy <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>特点：</p>
<ul>
<li>对象的所有嵌套属性都将变为只读。</li>
<li>任何尝试修改这个对象的操作都会被阻止（在开发模式下，还会在控制台中发出警告）。</li>
</ul>
</li>
<li>
<p>应用场景：</p>
<ul>
<li>创建不可变的状态快照。</li>
<li>保护全局状态或配置不被修改。</li>
</ul>
</li>
</ol>
<h3 id="shallowreadonly" tabindex="-1"><a class="header-anchor" href="#shallowreadonly"><span><strong><code v-pre>shallowReadonly</code></strong></span></a></h3>
<ol>
<li>
<p>作用：与 <code v-pre>readonly</code> 类似，但只作用于对象的顶层属性。</p>
</li>
<li>
<p>用法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> original <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> shallowReadOnlyCopy <span class="token operator">=</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>特点：</p>
<ul>
<li>
<p>只将对象的顶层属性设置为只读，对象内部的嵌套属性仍然是可变的。</p>
</li>
<li>
<p>适用于只需保护对象顶层属性的场景。</p>
</li>
</ul>
</li>
</ol>
<h2 id="_7-3-【toraw-与-markraw】" tabindex="-1"><a class="header-anchor" href="#_7-3-【toraw-与-markraw】"><span>7.3.【toRaw 与 markRaw】</span></a></h2>
<h3 id="toraw" tabindex="-1"><a class="header-anchor" href="#toraw"><span><code v-pre>toRaw</code></span></a></h3>
<ol>
<li>
<p>作用：用于获取一个响应式对象的原始对象， <code v-pre>toRaw</code> 返回的对象不再是响应式的，不会触发视图更新。</p>
<blockquote>
<p>官网描述：这是一个可以用于临时读取而不引起代理访问/跟踪开销，或是写入而不触发更改的特殊方法。不建议保存对原始对象的持久引用，请谨慎使用。</p>
</blockquote>
<blockquote>
<p>何时使用？ —— 在需要将响应式对象传递给非 <code v-pre>Vue</code> 的库或外部系统时，使用 <code v-pre>toRaw</code> 可以确保它们收到的是普通对象</p>
</blockquote>
</li>
<li>
<p>具体编码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span>toRaw<span class="token punctuation">,</span>markRaw<span class="token punctuation">,</span>isReactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* toRaw */</span></span>
<span class="line"><span class="token comment">// 响应式对象</span></span>
<span class="line"><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'tony'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 原始对象</span></span>
<span class="line"><span class="token keyword">let</span> rawPerson <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* markRaw */</span></span>
<span class="line"><span class="token keyword">let</span> citysd <span class="token operator">=</span> <span class="token function">markRaw</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'asdda01'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'北京'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'asdda02'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'上海'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'asdda03'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'天津'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'asdda04'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'重庆'</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了</span></span>
<span class="line"><span class="token keyword">let</span> citys2 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>citys<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReactive</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReactive</span><span class="token punctuation">(</span>rawPerson<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReactive</span><span class="token punctuation">(</span>citys<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReactive</span><span class="token punctuation">(</span>citys2<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="markraw" tabindex="-1"><a class="header-anchor" href="#markraw"><span><code v-pre>markRaw</code></span></a></h3>
<ol>
<li>
<p>作用：标记一个对象，使其<strong>永远不会</strong>变成响应式的。</p>
<blockquote>
<p>例如使用<code v-pre>mockjs</code>时，为了防止误把<code v-pre>mockjs</code>变为响应式对象，可以使用 <code v-pre>markRaw</code> 去标记<code v-pre>mockjs</code></p>
</blockquote>
</li>
<li>
<p>编码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">/* markRaw */</span></span>
<span class="line"><span class="token keyword">let</span> citys <span class="token operator">=</span> <span class="token function">markRaw</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'asdda01'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'北京'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'asdda02'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'上海'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'asdda03'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'天津'</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'asdda04'</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'重庆'</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 根据原始对象citys去创建响应式对象citys2 —— 创建失败，因为citys被markRaw标记了</span></span>
<span class="line"><span class="token keyword">let</span> citys2 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>citys<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="_7-4-【customref】" tabindex="-1"><a class="header-anchor" href="#_7-4-【customref】"><span>7.4.【customRef】</span></a></h2>
<p>作用：创建一个自定义的<code v-pre>ref</code>，并对其依赖项跟踪和更新触发进行逻辑控制。</p>
<p>实现防抖效果（<code v-pre>useSumRef.ts</code>）：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>customRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span>initValue<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>delay<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span>track<span class="token punctuation">,</span>trigger<span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> timer<span class="token operator">:</span><span class="token builtin">number</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 告诉Vue数据msg很重要，要对msg持续关注，一旦变化就更新</span></span>
<span class="line">        <span class="token keyword">return</span> initValue</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span></span>
<span class="line">        timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          initValue <span class="token operator">=</span> value</span>
<span class="line">          <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//通知Vue数据msg变化了</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span> </span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span>msg<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中使用：</p>
</div></template>


