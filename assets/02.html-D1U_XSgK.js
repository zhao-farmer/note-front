import{ar as s,as as l,at as a,au as e}from"./app-5nod3Nrs.js";const i={};function d(c,n){return e(),l("div",null,[...n[0]||(n[0]=[a(`<h1 id="二、核心语法" tabindex="-1"><a class="header-anchor" href="#二、核心语法"><span>二、核心语法</span></a></h1><h2 id="_2-1-响应式变量" tabindex="-1"><a class="header-anchor" href="#_2-1-响应式变量"><span>2.1 响应式变量</span></a></h2><p>Svelte 的核心哲学：<strong>赋值即更新</strong>。<br> 无需 <code>useState</code>、<code>ref</code> 或 <code>$set</code> —— 直接修改变量，UI 自动同步。</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let count = 0;</span>
<span class="line"></span>
<span class="line">  function increment() {</span>
<span class="line">    count += 1; //  自动触发 UI 更新！</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button on:click={increment}&gt;</span>
<span class="line">  Count: {count}</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：必须是 <strong>顶层变量</strong>（在 <code>&lt;script&gt;</code> 中声明），且通过 <strong>赋值操作</strong>（<code>=</code>、<code>+=</code> 等）修改。</p></blockquote><h2 id="_2-2-响应式语句——" tabindex="-1"><a class="header-anchor" href="#_2-2-响应式语句——"><span>2.2 响应式语句—— <code>$:</code></span></a></h2><p>当某个值依赖其他变量时，用 <code>$:</code> 声明自动重新计算。</p><ol><li><p>基础用法</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let firstName = &#39;张&#39;;</span>
<span class="line">  let lastName = &#39;三&#39;;</span>
<span class="line"></span>
<span class="line">  // 当 firstName 或 lastName 变化 → fullName 自动更新</span>
<span class="line">  $: fullName = \`\${firstName} \${lastName}\`;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;input bind:value={firstName} /&gt;</span>
<span class="line">&lt;input bind:value={lastName} /&gt;</span>
<span class="line">&lt;h1&gt;Hello, {fullName}!&lt;/h1&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多行逻辑 &amp; 副作用</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token literal-property property">$</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>fullName<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Name updated:&#39;</span><span class="token punctuation">,</span> fullName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span>title <span class="token operator">=</span> fullName<span class="token punctuation">;</span> <span class="token comment">// 同步到页面标题</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>依赖链（自动追踪）</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token literal-property property">$</span><span class="token operator">:</span> b <span class="token operator">=</span> a <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token literal-property property">$</span><span class="token operator">:</span> c <span class="token operator">=</span> b <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 当 a 变 → b 变 → c 变</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>编译器在构建时静态分析依赖关系，运行时无性能开销。</p></blockquote></li></ol><h2 id="_2-3-双向绑定" tabindex="-1"><a class="header-anchor" href="#_2-3-双向绑定"><span>2.3 双向绑定</span></a></h2><p>使用 <code>bind:</code> 指令实现 <strong>DOM ↔ 变量</strong> 的自动同步。</p><ol><li><p>常见绑定类型</p><table><thead><tr><th>元素</th><th>绑定语法</th><th>说明</th></tr></thead><tbody><tr><td><code>&lt;input&gt;</code> / <code>&lt;textarea&gt;</code></td><td><code>bind:value={var}</code></td><td>文本输入</td></tr><tr><td><code>&lt;input type=&quot;checkbox&quot;&gt;</code></td><td><code>bind:checked={bool}</code></td><td>勾选状态</td></tr><tr><td><code>&lt;input type=&quot;radio&quot;&gt;</code></td><td><code>bind:group={var}</code></td><td>单选组</td></tr><tr><td><code>&lt;select&gt;</code></td><td><code>bind:value={var}</code></td><td>下拉选择</td></tr><tr><td>任意元素</td><td><code>bind:this={domRef}</code></td><td>获取 DOM 引用</td></tr></tbody></table></li><li><p>示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let name = &#39;&#39;;</span>
<span class="line">  let agreed = false;</span>
<span class="line">  let color = &#39;red&#39;;</span>
<span class="line">  let inputEl;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 文本双向绑定 --&gt;</span>
<span class="line">&lt;input bind:value={name} placeholder=&quot;你的名字&quot; /&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- Checkbox --&gt;</span>
<span class="line">&lt;label&gt;</span>
<span class="line">  &lt;input type=&quot;checkbox&quot; bind:checked={agreed} /&gt;</span>
<span class="line">  我同意</span>
<span class="line">&lt;/label&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- Radio Group --&gt;</span>
<span class="line">&lt;label&gt;&lt;input type=&quot;radio&quot; bind:group={color} value=&quot;red&quot; /&gt; 红&lt;/label&gt;</span>
<span class="line">&lt;label&gt;&lt;input type=&quot;radio&quot; bind:group={color} value=&quot;blue&quot; /&gt; 蓝&lt;/label&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 获取 DOM 元素 --&gt;</span>
<span class="line">&lt;input bind:this={inputEl} /&gt;</span>
<span class="line">{#if inputEl}</span>
<span class="line">  &lt;p&gt;表单宽度: {inputEl.offsetWidth}px&lt;/p&gt;</span>
<span class="line">{/if}</span>
<span class="line"></span>
<span class="line">&lt;p&gt;名字: {name}, 是否同意: {agreed ? &#39;Yes&#39; : &#39;No&#39;}, 颜色: {color}&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><blockquote><p><code>bind:this</code> 常用于集成第三方库（如地图、图表）。</p></blockquote><h2 id="_2-4-条件渲染" tabindex="-1"><a class="header-anchor" href="#_2-4-条件渲染"><span>2.4 条件渲染</span></a></h2><p>使用 <code>{#if}</code>、<code>{:else if}</code>、<code>{:else}</code> 控制元素显示。</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let user = null;</span>
<span class="line">  let isLoading = true;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">{#if isLoading}</span>
<span class="line">  &lt;p&gt;Loading...&lt;/p&gt;</span>
<span class="line">{:else if user}</span>
<span class="line">  &lt;p&gt;Welcome, {user.name}!&lt;/p&gt;</span>
<span class="line">  &lt;button on:click={() =&gt; user = null}&gt;Logout&lt;/button&gt;</span>
<span class="line">{:else}</span>
<span class="line">  &lt;button on:click={() =&gt; {</span>
<span class="line">    user = { name: &#39;Guest&#39; };</span>
<span class="line">    isLoading = false;</span>
<span class="line">  }}&gt;Login&lt;/button&gt;</span>
<span class="line">{/if}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>支持任意表达式：<code>{#if count &gt; 0 &amp;&amp; visible}</code></p></blockquote><h2 id="_2-5-列表渲染" tabindex="-1"><a class="header-anchor" href="#_2-5-列表渲染"><span>2.5 列表渲染</span></a></h2><p>使用 <code>{#each}</code> 遍历数组或类数组对象。</p><ol><li><p>基础语法</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let items = [</span>
<span class="line">    { id: 1, name: &#39;Apple&#39; },</span>
<span class="line">    { id: 2, name: &#39;Banana&#39; }</span>
<span class="line">  ];</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;ul&gt;</span>
<span class="line">  {#each items as item (item.id)}</span>
<span class="line">    &lt;li&gt;{item.name}&lt;/li&gt;</span>
<span class="line">  {/each}</span>
<span class="line">&lt;/ul&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>关键点</p><ul><li><code>(item.id)</code> 是 <strong>key</strong>（用于高效更新，类似 React 的 <code>key</code>）</li><li>可解构：<code>{#each items as { id, name }}</code></li><li>可获取索引：<code>{#each list as item, index}</code></li></ul></li><li><p>空状态处理</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">{#each posts as post}</span>
<span class="line">  &lt;article&gt;{post.title}&lt;/article&gt;</span>
<span class="line">{:else}</span>
<span class="line">  &lt;p&gt;No posts available.&lt;/p&gt;</span>
<span class="line">{/if}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><blockquote><p>修改列表时，<strong>必须创建新数组</strong>（不能直接 <code>push</code>）：</p></blockquote><pre><code>\`\`\`js
// 无效（引用未变）
items.push({ id: 3, name: &#39;Cherry&#39; });

// 正确
items = [...items, { id: 3, name: &#39;Cherry&#39; }];
\`\`\`
</code></pre><h2 id="_2-6-事件处理" tabindex="-1"><a class="header-anchor" href="#_2-6-事件处理"><span>2.6 事件处理</span></a></h2><ol><li><p>基础事件绑定</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;button on:click={handleClick}&gt;Click&lt;/button&gt;</span>
<span class="line">&lt;input on:input={handleInput} /&gt;</span>
<span class="line">&lt;div on:mousemove={handleMove}&gt;&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>事件修饰符</p><table><thead><tr><th>修饰符</th><th>描述</th><th>对应 DOM API</th></tr></thead><tbody><tr><td>**<code>preventDefault</code>**​</td><td>阻止默认行为</td><td><code>event.preventDefault()</code></td></tr><tr><td>**<code>stopPropagation</code>**​</td><td>阻止事件冒泡</td><td><code>event.stopPropagation()</code></td></tr><tr><td>**<code>stopImmediatePropagation</code>**​</td><td>阻止后续事件处理器</td><td><code>event.stopImmediatePropagation()</code></td></tr><tr><td>**<code>passive</code>**​</td><td>优化滚动性能</td><td>传递 <code>{ passive: true }</code>选项</td></tr><tr><td>**<code>nonpassive</code>**​</td><td>非被动模式</td><td>传递 <code>{ passive: false }</code>选项</td></tr><tr><td>**<code>capture</code>**​</td><td>使用捕获阶段</td><td>在捕获阶段处理事件</td></tr><tr><td>**<code>once</code>**​</td><td>只触发一次</td><td>自动移除监听器</td></tr><tr><td>**<code>self</code>**​</td><td>仅当 <code>event.target</code>是元素自身时触发</td><td>检查 <code>event.target === event.currentTarget</code></td></tr><tr><td>**<code>trusted</code>**​</td><td>仅用户触发的事件</td><td>检查 <code>event.isTrusted</code></td></tr></tbody></table><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;!-- 自动 preventDefault --&gt;</span>
<span class="line">&lt;form on:submit|preventDefault={handleSubmit}&gt;</span>
<span class="line">  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;</span>
<span class="line">&lt;/form&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 仅触发一次 --&gt;</span>
<span class="line">&lt;button on:click|once={showIntro}&gt;Show Intro&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件事件（子 → 父通信）</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;!-- Child.svelte --&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  import { createEventDispatcher } from &#39;svelte&#39;;</span>
<span class="line">  const dispatch = createEventDispatcher();</span>
<span class="line"></span>
<span class="line">  function notify() {</span>
<span class="line">    dispatch(&#39;customEvent&#39;, { message: &#39;Hello!&#39; });</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;button on:click={notify}&gt;Send&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;!-- Parent.svelte --&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  function handleEvent(e) {</span>
<span class="line">    console.log(e.detail.message); // 数据在 e.detail</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;Child on:customEvent={handleEvent} /&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>子组件用 <code>dispatch(&#39;eventName&#39;, data)</code><br> 父组件用 <code>on:eventName={handler}</code> 监听</p></blockquote></li></ol><h2 id="_2-7-完整实战-todo-app-核心逻辑" tabindex="-1"><a class="header-anchor" href="#_2-7-完整实战-todo-app-核心逻辑"><span>2.7 完整实战：Todo App 核心逻辑</span></a></h2><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  // 1. 响应式变量</span>
<span class="line">  let newTodo = &#39;&#39;;</span>
<span class="line">  let todos = [</span>
<span class="line">    { id: 1, text: &#39;学习 Svelte 基础&#39;, completed: true },</span>
<span class="line">    { id: 2, text: &#39;练习响应式编程&#39;, completed: false },</span>
<span class="line">    { id: 3, text: &#39;掌握组件通信&#39;, completed: false }</span>
<span class="line">  ];</span>
<span class="line">  let filter = &#39;all&#39;; // &#39;all&#39;, &#39;active&#39;, &#39;completed&#39;</span>
<span class="line">  let editId = null;</span>
<span class="line">  let editText = &#39;&#39;;</span>
<span class="line"></span>
<span class="line">  // 2. 响应式语句</span>
<span class="line">  $: remaining = todos.filter(todo =&gt; !todo.completed).length;</span>
<span class="line">  $: completedCount = todos.filter(todo =&gt; todo.completed).length;</span>
<span class="line">  $: totalCount = todos.length;</span>
<span class="line">  </span>
<span class="line">  // 自动聚焦编辑输入框</span>
<span class="line">  $: if (editId) {</span>
<span class="line">    setTimeout(() =&gt; {</span>
<span class="line">      const input = document.querySelector(&#39;.edit-input&#39;);</span>
<span class="line">      if (input &amp;&amp; input instanceof HTMLInputElement) input.focus();</span>
<span class="line">    }, 0);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  // 事件处理函数</span>
<span class="line">  function addTodo() {</span>
<span class="line">    if (!newTodo.trim()) return;</span>
<span class="line">    </span>
<span class="line">    todos = [</span>
<span class="line">      ...todos,</span>
<span class="line">      {</span>
<span class="line">        id: Date.now(),</span>
<span class="line">        text: newTodo.trim(),</span>
<span class="line">        completed: false</span>
<span class="line">      }</span>
<span class="line">    ];</span>
<span class="line">    newTodo = &#39;&#39;;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function removeTodo(id) {</span>
<span class="line">    todos = todos.filter(todo =&gt; todo.id !== id);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function toggleTodo(id) {</span>
<span class="line">    todos = todos.map(todo =&gt; </span>
<span class="line">      todo.id === id ? { ...todo, completed: !todo.completed } : todo</span>
<span class="line">    );</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function startEdit(todo) {</span>
<span class="line">    editId = todo.id;</span>
<span class="line">    editText = todo.text;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function saveEdit() {</span>
<span class="line">    if (!editText.trim()) {</span>
<span class="line">      cancelEdit();</span>
<span class="line">      return;</span>
<span class="line">    }</span>
<span class="line">    </span>
<span class="line">    todos = todos.map(todo =&gt; </span>
<span class="line">      todo.id === editId ? { ...todo, text: editText.trim() } : todo</span>
<span class="line">    );</span>
<span class="line">    cancelEdit();</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function cancelEdit() {</span>
<span class="line">    editId = null;</span>
<span class="line">    editText = &#39;&#39;;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function clearCompleted() {</span>
<span class="line">    todos = todos.filter(todo =&gt; !todo.completed);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function toggleAll() {</span>
<span class="line">    const allCompleted = todos.every(todo =&gt; todo.completed);</span>
<span class="line">    todos = todos.map(todo =&gt; ({ ...todo, completed: !allCompleted }));</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  // 键盘事件处理</span>
<span class="line">  function handleKeydown(event) {</span>
<span class="line">    if (event.key === &#39;Enter&#39;) {</span>
<span class="line">      addTodo();</span>
<span class="line">    } else if (event.key === &#39;Escape&#39;) {</span>
<span class="line">      newTodo = &#39;&#39;;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;div class=&quot;todo-app&quot;&gt;</span>
<span class="line">  &lt;!-- 标题 --&gt;</span>
<span class="line">  &lt;h1&gt;Svelte TodoList&lt;/h1&gt;</span>
<span class="line">  </span>
<span class="line">  &lt;!-- 统计信息 --&gt;</span>
<span class="line">  &lt;div class=&quot;stats&quot;&gt;</span>
<span class="line">    &lt;span&gt;总计: {totalCount}&lt;/span&gt;</span>
<span class="line">    &lt;span&gt;待完成: {remaining}&lt;/span&gt;</span>
<span class="line">    &lt;span&gt;已完成: {completedCount}&lt;/span&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 添加新任务 --&gt;</span>
<span class="line">  &lt;div class=&quot;add-todo&quot;&gt;</span>
<span class="line">    &lt;!-- 双向绑定 --&gt;</span>
<span class="line">    &lt;input</span>
<span class="line">      type=&quot;text&quot;</span>
<span class="line">      placeholder=&quot;输入新任务，按回车添加&quot;</span>
<span class="line">      bind:value={newTodo}  </span>
<span class="line">      on:keydown={handleKeydown}</span>
<span class="line">      class=&quot;new-input&quot;</span>
<span class="line">    /&gt;</span>
<span class="line">    &lt;button on:click={addTodo} disabled={!newTodo.trim()}&gt;</span>
<span class="line">      添加</span>
<span class="line">    &lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 过滤选项 --&gt;</span>
<span class="line">  &lt;div class=&quot;filters&quot;&gt;</span>
<span class="line">    &lt;label&gt;</span>
<span class="line">      &lt;input type=&quot;radio&quot; value=&quot;all&quot; bind:group={filter} /&gt;</span>
<span class="line">      全部 ({totalCount})</span>
<span class="line">    &lt;/label&gt;</span>
<span class="line">    &lt;label&gt;</span>
<span class="line">      &lt;input type=&quot;radio&quot; value=&quot;active&quot; bind:group={filter} /&gt;</span>
<span class="line">      进行中 ({remaining})</span>
<span class="line">    &lt;/label&gt;</span>
<span class="line">    &lt;label&gt;</span>
<span class="line">      &lt;input type=&quot;radio&quot; value=&quot;completed&quot; bind:group={filter} /&gt;</span>
<span class="line">      已完成 ({completedCount})</span>
<span class="line">    &lt;/label&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 控制按钮 --&gt;</span>
<span class="line">  &lt;div class=&quot;controls&quot;&gt;</span>
<span class="line">    &lt;button on:click={toggleAll}&gt;</span>
<span class="line">      {todos.length &gt; 0 &amp;&amp; todos.every(t =&gt; t.completed) ? &#39;全部取消&#39; : &#39;全部完成&#39;}</span>
<span class="line">    &lt;/button&gt;</span>
<span class="line">    &lt;button on:click={clearCompleted} disabled={completedCount === 0}&gt;</span>
<span class="line">      清除已完成 ({completedCount})</span>
<span class="line">    &lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 3. 条件渲染：空状态 --&gt;</span>
<span class="line">  {#if todos.length === 0}</span>
<span class="line">    &lt;div class=&quot;empty-state&quot;&gt;</span>
<span class="line">      &lt;p&gt;没有待办事项！&lt;/p&gt;</span>
<span class="line">      &lt;p&gt;添加你的第一个任务吧！&lt;/p&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  {:else if todos.filter(t =&gt; filter === &#39;all&#39; || (filter === &#39;active&#39; &amp;&amp; !t.completed) || (filter === &#39;completed&#39; &amp;&amp; t.completed)).length === 0}</span>
<span class="line">    &lt;div class=&quot;empty-state&quot;&gt;</span>
<span class="line">      &lt;p&gt;</span>
<span class="line">        {#if filter === &#39;active&#39;}</span>
<span class="line">          没有进行中的任务！</span>
<span class="line">        {:else if filter === &#39;completed&#39;}</span>
<span class="line">          还没有完成的任务！</span>
<span class="line">        {/if}</span>
<span class="line">      &lt;/p&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  {:else}</span>
<span class="line">    &lt;!-- 4. 列表渲染 --&gt;</span>
<span class="line">    &lt;ul class=&quot;todo-list&quot;&gt;</span>
<span class="line">      {#each todos.filter(todo =&gt; </span>
<span class="line">        filter === &#39;all&#39; || </span>
<span class="line">        (filter === &#39;active&#39; &amp;&amp; !todo.completed) || </span>
<span class="line">        (filter === &#39;completed&#39; &amp;&amp; todo.completed)</span>
<span class="line">      ) as todo (todo.id)}</span>
<span class="line">        &lt;li class:completed={todo.completed} class:editing={editId === todo.id}&gt;</span>
<span class="line">          {#if editId === todo.id}</span>
<span class="line">            &lt;!-- 编辑模式 --&gt;</span>
<span class="line">            &lt;div class=&quot;edit-mode&quot;&gt;</span>
<span class="line">               &lt;!-- 双向绑定 --&gt;</span>
<span class="line">              &lt;input</span>
<span class="line">                type=&quot;text&quot;</span>
<span class="line">                bind:value={editText} </span>
<span class="line">                on:keydown={(e) =&gt; e.key === &#39;Enter&#39; &amp;&amp; saveEdit()}</span>
<span class="line">                on:blur={saveEdit}</span>
<span class="line">                class=&quot;edit-input&quot;</span>
<span class="line">              /&gt;</span>
<span class="line">              &lt;div class=&quot;edit-actions&quot;&gt;</span>
<span class="line">                &lt;button on:click={saveEdit}&gt;保存&lt;/button&gt;</span>
<span class="line">                &lt;button on:click={cancelEdit}&gt;取消&lt;/button&gt;</span>
<span class="line">              &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">          {:else}</span>
<span class="line">            &lt;!-- 查看模式 --&gt;</span>
<span class="line">            &lt;div class=&quot;view-mode&quot;&gt;</span>
<span class="line">               &lt;!-- 双向绑定 --&gt;</span>
<span class="line">              &lt;input</span>
<span class="line">                type=&quot;checkbox&quot;</span>
<span class="line">                checked={todo.completed} </span>
<span class="line">                on:change={() =&gt; toggleTodo(todo.id)}</span>
<span class="line">                class=&quot;todo-checkbox&quot;</span>
<span class="line">              /&gt;</span>
<span class="line">              </span>
<span class="line">              &lt;span</span>
<span class="line">                role=&quot;button&quot;</span>
<span class="line">                tabindex=&quot;0&quot;</span>
<span class="line">                on:dblclick={() =&gt; startEdit(todo)}</span>
<span class="line">                class=&quot;todo-text {todo.completed ? &#39;completed&#39; : &#39;&#39;}&quot;</span>
<span class="line">              &gt;</span>
<span class="line">                {todo.text}</span>
<span class="line">              &lt;/span&gt;</span>
<span class="line">              </span>
<span class="line">              &lt;div class=&quot;actions&quot;&gt;</span>
<span class="line">                &lt;button on:click={() =&gt; startEdit(todo)} title=&quot;编辑&quot;&gt;</span>
<span class="line">                  编辑</span>
<span class="line">                &lt;/button&gt;</span>
<span class="line">                &lt;button on:click={() =&gt; removeTodo(todo.id)} title=&quot;删除&quot;&gt;</span>
<span class="line">                  删除</span>
<span class="line">                &lt;/button&gt;</span>
<span class="line">              &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">          {/if}</span>
<span class="line">        &lt;/li&gt;</span>
<span class="line">      {/each}</span>
<span class="line">    &lt;/ul&gt;</span>
<span class="line">  {/if}</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;</span>
<span class="line">  .todo-app {</span>
<span class="line">    max-width: 500px;</span>
<span class="line">    margin: 2rem auto;</span>
<span class="line">    padding: 2rem;</span>
<span class="line">    background: #f8f9fa;</span>
<span class="line">    border-radius: 12px;</span>
<span class="line">    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  h1 {</span>
<span class="line">    text-align: center;</span>
<span class="line">    color: #2c3e50;</span>
<span class="line">    margin-bottom: 1.5rem;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .stats {</span>
<span class="line">    display: flex;</span>
<span class="line">    justify-content: space-around;</span>
<span class="line">    margin-bottom: 1.5rem;</span>
<span class="line">    padding: 0.75rem;</span>
<span class="line">    background: white;</span>
<span class="line">    border-radius: 8px;</span>
<span class="line">    font-size: 0.9rem;</span>
<span class="line">    color: #666;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .add-todo {</span>
<span class="line">    display: flex;</span>
<span class="line">    gap: 0.5rem;</span>
<span class="line">    margin-bottom: 1.5rem;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .new-input, .edit-input {</span>
<span class="line">    flex: 1;</span>
<span class="line">    padding: 0.75rem 1rem;</span>
<span class="line">    border: 2px solid #dee2e6;</span>
<span class="line">    border-radius: 8px;</span>
<span class="line">    font-size: 1rem;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .new-input:focus, .edit-input:focus {</span>
<span class="line">    outline: none;</span>
<span class="line">    border-color: #4dabf7;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  button {</span>
<span class="line">    padding: 0.75rem 1.5rem;</span>
<span class="line">    border: none;</span>
<span class="line">    border-radius: 8px;</span>
<span class="line">    background: #4dabf7;</span>
<span class="line">    color: white;</span>
<span class="line">    font-size: 1rem;</span>
<span class="line">    cursor: pointer;</span>
<span class="line">    transition: background 0.2s;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  button:hover:not(:disabled) {</span>
<span class="line">    background: #339af0;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  button:disabled {</span>
<span class="line">    opacity: 0.5;</span>
<span class="line">    cursor: not-allowed;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .filters {</span>
<span class="line">    display: flex;</span>
<span class="line">    gap: 1rem;</span>
<span class="line">    margin-bottom: 1rem;</span>
<span class="line">    padding: 1rem;</span>
<span class="line">    background: white;</span>
<span class="line">    border-radius: 8px;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .filters label {</span>
<span class="line">    display: flex;</span>
<span class="line">    align-items: center;</span>
<span class="line">    gap: 0.5rem;</span>
<span class="line">    cursor: pointer;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .controls {</span>
<span class="line">    display: flex;</span>
<span class="line">    gap: 0.5rem;</span>
<span class="line">    margin-bottom: 1.5rem;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .controls button {</span>
<span class="line">    flex: 1;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .empty-state {</span>
<span class="line">    text-align: center;</span>
<span class="line">    padding: 3rem 1rem;</span>
<span class="line">    color: #6c757d;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .todo-list {</span>
<span class="line">    list-style: none;</span>
<span class="line">    padding: 0;</span>
<span class="line">    margin: 0;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .todo-list li {</span>
<span class="line">    background: white;</span>
<span class="line">    border-radius: 8px;</span>
<span class="line">    margin-bottom: 0.5rem;</span>
<span class="line">    padding: 1rem;</span>
<span class="line">    transition: all 0.2s;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .todo-list li:hover {</span>
<span class="line">    transform: translateY(-2px);</span>
<span class="line">    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .todo-list li.completed {</span>
<span class="line">    opacity: 0.7;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .todo-list li.editing {</span>
<span class="line">    background: #f8f9fa;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .view-mode {</span>
<span class="line">    display: flex;</span>
<span class="line">    align-items: center;</span>
<span class="line">    gap: 1rem;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .todo-checkbox {</span>
<span class="line">    width: 20px;</span>
<span class="line">    height: 20px;</span>
<span class="line">    cursor: pointer;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .todo-text {</span>
<span class="line">    flex: 1;</span>
<span class="line">    padding: 0.5rem 0;</span>
<span class="line">    cursor: pointer;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .todo-text.completed {</span>
<span class="line">    text-decoration: line-through;</span>
<span class="line">    color: #adb5bd;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .actions {</span>
<span class="line">    display: flex;</span>
<span class="line">    gap: 0.5rem;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .actions button {</span>
<span class="line">    padding: 0.5rem;</span>
<span class="line">    background: transparent;</span>
<span class="line">    color: #6c757d;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .actions button:hover {</span>
<span class="line">    background: #f8f9fa;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .edit-mode {</span>
<span class="line">    display: flex;</span>
<span class="line">    flex-direction: column;</span>
<span class="line">    gap: 0.5rem;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .edit-actions {</span>
<span class="line">    display: flex;</span>
<span class="line">    gap: 0.5rem;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .edit-actions button {</span>
<span class="line">    flex: 1;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .edit-actions button:first-child {</span>
<span class="line">    background: #51cf66;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .edit-actions button:first-child:hover {</span>
<span class="line">    background: #40c057;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .edit-actions button:last-child {</span>
<span class="line">    background: #fa5252;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  .edit-actions button:last-child:hover {</span>
<span class="line">    background: #e03131;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25)])])}const t=s(i,[["render",d]]),v=JSON.parse('{"path":"/framework/svelte/base4/02.html","title":"二、核心语法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1771996569000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"6456dcf1fd45f82d71ce5dfe3954468d5bf78145","time":1771996569000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"}]},"filePathRelative":"framework/svelte/base4/02.md"}');export{t as comp,v as data};
