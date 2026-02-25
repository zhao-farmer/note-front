import{ar as a,as as e,at as l,au as i}from"./app-5nod3Nrs.js";const t="/note-front/framework/svelte/base5/013.png",p="/note-front/framework/svelte/base5/014.gif",d="/note-front/framework/svelte/base5/015.gif",c="/note-front/framework/svelte/base5/016.png",r="/note-front/framework/svelte/base5/017.png",n="/note-front/framework/svelte/base5/018.png",v="/note-front/framework/svelte/base5/019.png",o={};function u(m,s){return i(),e("div",null,[...s[0]||(s[0]=[l(`<h1 id="三、数据通信" tabindex="-1"><a class="header-anchor" href="#三、数据通信"><span>三、数据通信</span></a></h1><h2 id="_3-1-props-与回调函数" tabindex="-1"><a class="header-anchor" href="#_3-1-props-与回调函数"><span>3.1 Props 与回调函数</span></a></h2><h3 id="_3-1-1-基本props" tabindex="-1"><a class="header-anchor" href="#_3-1-1-基本props"><span>3.1.1 基本Props</span></a></h3><ol><li><p>代码示例</p><ul><li><p>lib/Child.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  //  接收 props</span>
<span class="line">  let { </span>
<span class="line">    name = &#39;默认名&#39;,</span>
<span class="line">    age = 18,</span>
<span class="line">    isActive = false </span>
<span class="line">  } = $props();</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;div&gt;</span>
<span class="line">  &lt;h3&gt;{name}, {age} 岁&lt;/h3&gt;</span>
<span class="line">  &lt;p&gt;状态: {isActive ? &#39;活跃&#39; : &#39;不活跃&#39;}&lt;/p&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>lib/Parent.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Child from &#39;./Child.svelte&#39;;</span>
<span class="line"></span>
<span class="line">  let userName = &#39;张三&#39;;</span>
<span class="line">  let userAge = 25;</span>
<span class="line">  let active = true;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child name={userName} age={userAge} isActive={active} /&gt;</span>
<span class="line">&lt;Child name=&quot;李四&quot; /&gt;  &lt;!-- 使用默认年龄 --&gt;</span>
<span class="line">&lt;Child /&gt;  &lt;!-- 使用所有默认值 --&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>App.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Parent from &quot;./lib/Parent.svelte&quot;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;main&gt;</span>
<span class="line">  &lt;Parent /&gt;</span>
<span class="line">&lt;/main&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>运行结果</p><p><img src="`+t+`" alt=""></p></li></ol><h3 id="_3-1-2-回调函数-子→父通信" tabindex="-1"><a class="header-anchor" href="#_3-1-2-回调函数-子→父通信"><span>3.1.2 回调函数（子→父通信）</span></a></h3><ol><li><p>代码示例</p><ul><li><p>Child.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  // 接收回调函数</span>
<span class="line">  let { </span>
<span class="line">    onButtonClick,</span>
<span class="line">    onDataUpdate</span>
<span class="line">  } = $props();</span>
<span class="line"></span>
<span class="line">  let count = $state(0);</span>
<span class="line"></span>
<span class="line">  function handleClick() {</span>
<span class="line">    count++;</span>
<span class="line"></span>
<span class="line">    // 调用父组件传递的回调</span>
<span class="line">    onButtonClick?.(count);</span>
<span class="line"></span>
<span class="line">    onDataUpdate?.({</span>
<span class="line">      count,</span>
<span class="line">      message: &#39;按钮被点击了&#39;,</span>
<span class="line">      timestamp: Date.now()</span>
<span class="line">    });</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button onclick={handleClick}&gt;</span>
<span class="line">  点击: {count}</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Parent.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Child from &#39;./Child.svelte&#39;;</span>
<span class="line"></span>
<span class="line">  let childClicks = 0;</span>
<span class="line">  let lastEvent = null;</span>
<span class="line"></span>
<span class="line">  // 传递给子组件的回调函数</span>
<span class="line">  function handleChildClick(count) {</span>
<span class="line">    console.log(&#39;子组件点击了&#39;, count, &#39;次&#39;);</span>
<span class="line">    childClicks = count;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleChildData(data) {</span>
<span class="line">    console.log(&#39;收到子组件数据:&#39;, data);</span>
<span class="line">    lastEvent = data;</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child</span>
<span class="line">  onButtonClick={handleChildClick}</span>
<span class="line">  onDataUpdate={handleChildData}</span>
<span class="line">/&gt;</span>
<span class="line"></span>
<span class="line">&lt;p&gt;子组件点击次数: {childClicks}&lt;/p&gt;</span>
<span class="line">&lt;pre&gt;{JSON.stringify(lastEvent, null, 2)}&lt;/pre&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>运行结果</p><p><img src="`+p+`" alt=""></p></li></ol><h3 id="_3-1-3-双向绑定-props" tabindex="-1"><a class="header-anchor" href="#_3-1-3-双向绑定-props"><span>3.1.3 双向绑定 Props</span></a></h3><ol><li><p>代码示例</p><ul><li><p>Child.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  // 接收可绑定的 prop</span>
<span class="line">  let { </span>
<span class="line">    value = $bindable(&#39;&#39;)</span>
<span class="line">  } = $props();</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;input </span>
<span class="line">  type=&quot;text&quot; </span>
<span class="line">  value={value}</span>
<span class="line">  oninput={(e) =&gt; value = e.target.value}</span>
<span class="line">/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Parent.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Child from &#39;./Child.svelte&#39;;</span>
<span class="line"></span>
<span class="line">  let text = &#39;初始值&#39;;</span>
<span class="line">  let email = &#39;&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child bind:value={text} /&gt;</span>
<span class="line">&lt;Child bind:value={email} /&gt;</span>
<span class="line"></span>
<span class="line">&lt;p&gt;文本: {text}&lt;/p&gt;</span>
<span class="line">&lt;p&gt;邮箱: {email}&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>运行结果</p><p><img src="`+d+`" alt=""></p></li></ol><h2 id="_3-2-context-api-上下文" tabindex="-1"><a class="header-anchor" href="#_3-2-context-api-上下文"><span>3.2 Context API（上下文）</span></a></h2><blockquote><p><strong>注意</strong>：Svelte 4 及之前<strong>没有官方 Context API</strong>。<br> Svelte 5（2024 年发布）引入了 <code>setContext</code> / <code>getContext</code>。</p></blockquote><ul><li><p>祖先组件 <code>App.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { setContext } from &#39;svelte&#39;;</span>
<span class="line">  setContext(&#39;theme&#39;, &#39;dark&#39;);</span>
<span class="line">  import Parent from &#39;./lib/Parent.svelte&#39;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;main&gt;</span>
<span class="line">    &lt;Parent /&gt;</span>
<span class="line">&lt;/main&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>中间组件 <code>Parent.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import Child from &#39;./Child.svelte&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child /&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>后代组件 <code>Child.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import { getContext } from &#39;svelte&#39;;</span>
<span class="line">    const theme = getContext(&#39;theme&#39;); // &#39;dark&#39;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;span&gt;主题颜色：{theme}&lt;/span&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+c+`" alt=""></p></li></ul><h2 id="_3-3-store-状态管理" tabindex="-1"><a class="header-anchor" href="#_3-3-store-状态管理"><span>3.3 Store 状态管理</span></a></h2><h3 id="_3-3-1-svelte-4-→-svelte-5-迁移对比" tabindex="-1"><a class="header-anchor" href="#_3-3-1-svelte-4-→-svelte-5-迁移对比"><span>3.3.1 Svelte 4 → Svelte 5 迁移对比</span></a></h3><table><thead><tr><th>特性</th><th>Svelte 4 Store</th><th>Svelte 5 Store</th><th>优势</th></tr></thead><tbody><tr><td><strong>创建方式</strong>​</td><td><code>writable()</code>, <code>readable()</code>, <code>derived()</code></td><td>直接使用 <code>$state()</code>, <code>$derived()</code></td><td>更简单，无额外 API</td></tr><tr><td><strong>访问方式</strong>​</td><td><code>$store</code>语法糖</td><td>直接访问属性</td><td>更直观</td></tr><tr><td><strong>更新方式</strong>​</td><td><code>store.set()</code>, <code>store.update()</code></td><td>直接赋值</td><td>更像普通变量</td></tr><tr><td><strong>订阅</strong>​</td><td>自动订阅/手动订阅</td><td>无订阅概念</td><td>自动响应式</td></tr><tr><td><strong>类型安全</strong>​</td><td>中等</td><td>优秀</td><td>编译时检查</td></tr><tr><td><strong>模块化</strong>​</td><td>需要 import/export</td><td>天然模块化</td><td>更灵活</td></tr></tbody></table><blockquote><p>注意：</p><ol><li><code>Svelte 5</code> 的 runes 只能用于 .svelte、.svelte.js或 .svelte.ts文件</li><li><code>export let</code>与 <code>$state</code> 有冲突,不能写 <code>export let count = $state(0);</code></li></ol></blockquote><h3 id="_3-3-2-示例" tabindex="-1"><a class="header-anchor" href="#_3-3-2-示例"><span>3.3.2 示例</span></a></h3><ol><li><p>共享响应式状态 <code>stores/todoStore.svelte.js</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// 创建可共享的响应式状态</span></span>
<span class="line"><span class="token keyword">let</span> todos <span class="token operator">=</span> <span class="token function">$state</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> filter <span class="token operator">=</span> <span class="token function">$state</span><span class="token punctuation">(</span><span class="token string">&#39;all&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 计算属性</span></span>
<span class="line"><span class="token keyword">let</span> filteredTodos <span class="token operator">=</span> <span class="token function">$derived</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">(</span>filter<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">&#39;active&#39;</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">t</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>t<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">&#39;completed&#39;</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">t</span> <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> todos<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> todos<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getFilteredTodos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> filteredTodos<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 操作方法</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    text<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">completed</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> todo <span class="token operator">=</span> todos<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">t</span> <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    todo<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在组件中使用store</p><ul><li><p>TodoList.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import { getFilteredTodos, addTodo, toggleTodo } from &quot;../stores/todoStore.svelte.js&quot;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;input</span>
<span class="line">    type=&quot;text&quot;</span>
<span class="line">    placeholder=&quot;添加新任务&quot;</span>
<span class="line">    onkeydown={ e =&gt; {</span>
<span class="line">        if (e.key === &quot;Enter&quot; &amp;&amp; e.currentTarget.value.trim()) {</span>
<span class="line">            addTodo(e.currentTarget.value);</span>
<span class="line">            e.currentTarget.value = &quot;&quot;;</span>
<span class="line">        }</span>
<span class="line">    }}</span>
<span class="line">/&gt;</span>
<span class="line"></span>
<span class="line">&lt;ul&gt;</span>
<span class="line">    {#each getFilteredTodos().value as todo (todo.id)}</span>
<span class="line">        &lt;li&gt;</span>
<span class="line">            &lt;input type=&quot;checkbox&quot; checked={todo.completed} onchange={() =&gt; toggleTodo		(todo.id)} /&gt;</span>
<span class="line">            {todo.text}</span>
<span class="line">        &lt;/li&gt;</span>
<span class="line">    {/each}</span>
<span class="line">&lt;/ul&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>TodoStats.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import { getTodos } from &#39;../stores/todoStore.svelte.js&#39;;</span>
<span class="line">    let todos = getTodos();</span>
<span class="line">    let total = $derived(todos.length);</span>
<span class="line">    let completed = $derived(todos.filter(t =&gt; t.completed).length);</span>
<span class="line">    let remaining = $derived(total - completed);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;p&gt;总计: {total}&lt;/p&gt;</span>
<span class="line">&lt;p&gt;已完成: {completed}&lt;/p&gt;</span>
<span class="line">&lt;p&gt;进行中: {remaining}&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>App.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;  </span>
<span class="line">  import TodoList from &quot;./lib/TodoList.svelte&quot;;</span>
<span class="line">  import TodoStats from &quot;./lib/TodoStats.svelte&quot;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;main&gt;</span>
<span class="line">  &lt;TodoList /&gt;</span>
<span class="line">  &lt;TodoStats /&gt;</span>
<span class="line">&lt;/main&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>运行结果</p><p><img src="`+r+`" alt=""></p></li></ol><h2 id="_3-4-插槽通信" tabindex="-1"><a class="header-anchor" href="#_3-4-插槽通信"><span>3.4 插槽通信</span></a></h2><h3 id="_3-4-1-svelte-4-→-svelte-5-迁移对比" tabindex="-1"><a class="header-anchor" href="#_3-4-1-svelte-4-→-svelte-5-迁移对比"><span>3.4.1 Svelte 4 → Svelte 5 迁移对比</span></a></h3><table><thead><tr><th>特性</th><th>Svelte 4 (旧语法)</th><th>Svelte 5 (新语法)</th></tr></thead><tbody><tr><td><strong>语法</strong>​</td><td><code>&lt;slot name=&quot;header&quot; /&gt;</code></td><td><code>{@render header()}</code></td></tr><tr><td><strong>作用域</strong>​</td><td><code>&lt;slot {data} /&gt;</code></td><td><code>{@render children(data)}</code></td></tr><tr><td><strong>接收</strong>​</td><td><code>let:data</code></td><td>通过函数参数传递</td></tr><tr><td><strong>默认内容</strong>​</td><td><code>&lt;slot&gt;默认内容&lt;/slot&gt;</code></td><td>在 <code>$props</code>中设置默认值</td></tr><tr><td><strong>类型安全</strong>​</td><td>弱</td><td>强</td></tr></tbody></table><h3 id="_3-4-2-基础插槽" tabindex="-1"><a class="header-anchor" href="#_3-4-2-基础插槽"><span>3.4.2 基础插槽</span></a></h3><ol><li><p>代码示例</p><ul><li><p>Parent.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Child from &#39;./Child.svelte&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child&gt;</span>
<span class="line">  {#snippet header()}</span>
<span class="line">    &lt;h2&gt;自定义标题&lt;/h2&gt;</span>
<span class="line">  {/snippet}</span>
<span class="line"></span>
<span class="line">  {#snippet children(data)}</span>
<span class="line">    &lt;p&gt;接收到的数据: {data}&lt;/p&gt;</span>
<span class="line">  {/snippet}</span>
<span class="line">&lt;/Child&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Child.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let { header, children } = $props();</span>
<span class="line">  let data = &#39;这是数据&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;div&gt;</span>
<span class="line">  &lt;!-- 渲染命名插槽（带默认值） --&gt;</span>
<span class="line">  {#if header}</span>
<span class="line">    {@render header()}</span>
<span class="line">  {:else}</span>
<span class="line">    &lt;div&gt;默认标题&lt;/div&gt;</span>
<span class="line">  {/if}</span>
<span class="line"></span>
<span class="line">  &lt;!-- 渲染作用域插槽 --&gt;</span>
<span class="line">  {@render children?.(data)}</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>运行结果</p><p><img src="`+n+`" alt=""></p></li></ol><h3 id="_3-4-3-动态插槽" tabindex="-1"><a class="header-anchor" href="#_3-4-3-动态插槽"><span>3.4.3 动态插槽</span></a></h3><ol><li><p>代码示例</p><ul><li><p>Parent.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Child from &#39;./Child.svelte&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child&gt;</span>
<span class="line">  {#snippet header()}</span>
<span class="line">    &lt;header&gt;网站头部&lt;/header&gt;</span>
<span class="line">  {/snippet}</span>
<span class="line"></span>
<span class="line">  {#snippet sidebar()}</span>
<span class="line">    &lt;aside&gt;侧边栏&lt;/aside&gt;</span>
<span class="line">  {/snippet}</span>
<span class="line"></span>
<span class="line">  {#snippet main()}</span>
<span class="line">    &lt;main&gt;主要内容&lt;/main&gt;</span>
<span class="line">  {/snippet}</span>
<span class="line"></span>
<span class="line">  {#snippet footer()}</span>
<span class="line">    &lt;footer&gt;页脚&lt;/footer&gt;</span>
<span class="line">  {/snippet}  </span>
<span class="line">&lt;/Child&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Child.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  // Svelte 5 会自动将所有 {#snippet} 转换为 $props() 中的函数</span>
<span class="line">  let { header, sidebar, main, footer } = $props();</span>
<span class="line"></span>
<span class="line">  // 或者更灵活地处理</span>
<span class="line">  const areas = $derived([</span>
<span class="line">    { name: &#39;header&#39;, content: header },</span>
<span class="line">    { name: &#39;sidebar&#39;, content: sidebar },</span>
<span class="line">    { name: &#39;main&#39;, content: main },</span>
<span class="line">    { name: &#39;footer&#39;, content: footer }</span>
<span class="line">  ]);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;div class=&quot;layout&quot;&gt;</span>
<span class="line">  {#each areas as { name, content }}</span>
<span class="line">    {#if content}</span>
<span class="line">      &lt;div class={\`area-\${name}\`}&gt;</span>
<span class="line">        {@render content()}</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    {/if}</span>
<span class="line">  {/each}</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>运行结果</p><p><img src="`+n+`" alt=""></p></li></ol><h2 id="_3-5-dom-引用通信" tabindex="-1"><a class="header-anchor" href="#_3-5-dom-引用通信"><span>3.5 DOM 引用通信</span></a></h2><ol><li><p>方式的不同</p><ul><li>svelet4 <code>bind:this</code></li><li>svelet5 <code>$state + 显式 ref</code></li></ul></li><li><p>代码示例</p><ul><li><p>Child.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let { ref } = $props(); // 接收父组件传来的 ref 对象</span>
<span class="line"></span>
<span class="line">  let value = $state(&#39;&#39;);</span>
<span class="line"></span>
<span class="line">  // 在 $effect 中暴露 API</span>
<span class="line">  $effect(() =&gt; {</span>
<span class="line">    if (ref) {</span>
<span class="line">      ref.current = {</span>
<span class="line">        reset: () =&gt; {</span>
<span class="line">          value = &#39;&#39;;</span>
<span class="line">          console.log(&#39;子组件已重置&#39;);</span>
<span class="line">        },</span>
<span class="line">        getData: () =&gt; ({</span>
<span class="line">          value,</span>
<span class="line">          timestamp: Date.now()</span>
<span class="line">        })</span>
<span class="line">      };</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 清理：组件销毁时清空引用</span>
<span class="line">    return () =&gt; {</span>
<span class="line">      if (ref) ref.current = null;</span>
<span class="line">    };</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;input </span>
<span class="line">  type=&quot;text&quot; </span>
<span class="line">  value={value}</span>
<span class="line">  oninput={(e) =&gt; value = e.currentTarget.value}</span>
<span class="line">/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Parent.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Child from &#39;./Child.svelte&#39;;</span>
<span class="line">  import { onMount } from &#39;svelte&#39;;</span>
<span class="line"></span>
<span class="line">  // 创建 ref 容器（必须是对象，以便按引用传递）</span>
<span class="line">  let childRef = $state({ current: null });</span>
<span class="line">  let childData = $state(&#39;&#39;);</span>
<span class="line"></span>
<span class="line">  onMount(() =&gt; {</span>
<span class="line">    if (childRef.current) {</span>
<span class="line">      console.log(&#39;子组件已挂载&#39;);</span>
<span class="line">      childRef.current.reset();</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  function getDataFromChild() {</span>
<span class="line">    if (childRef.current) {</span>
<span class="line">      const data = childRef.current.getData();</span>
<span class="line">      console.log(&#39;获取到子组件数据:&#39;, data);</span>
<span class="line">      childData = JSON.stringify(data, null, 2);</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 将 ref 作为普通 prop 传入 --&gt;</span>
<span class="line">&lt;Child ref={childRef} /&gt;</span>
<span class="line"></span>
<span class="line">&lt;button onclick={getDataFromChild}&gt;</span>
<span class="line">  获取子组件数据</span>
<span class="line">&lt;/button&gt;</span>
<span class="line">&lt;button onclick={() =&gt; childRef.current?.reset()}&gt;</span>
<span class="line">  重置子组件</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">&lt;pre&gt;{childData}&lt;/pre&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>运行结果</p><p><img src="`+v+'" alt=""></p></li></ol>',26)])])}const g=a(o,[["render",u]]),h=JSON.parse('{"path":"/framework/svelte/base5/03.html","title":"三、数据通信","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1772001712000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":2,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"db6d183fe4bedd50d548f87979aa938388a2e519","time":1772001712000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"},{"hash":"6456dcf1fd45f82d71ce5dfe3954468d5bf78145","time":1771996569000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"}]},"filePathRelative":"framework/svelte/base5/03.md"}');export{g as comp,h as data};
