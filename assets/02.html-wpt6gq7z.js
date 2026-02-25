import{ar as n,as as e,at as l,au as a}from"./app-5nod3Nrs.js";const i="/note-front/framework/svelte/base5/006.gif",d="/note-front/framework/svelte/base5/007.png",t="/note-front/framework/svelte/base5/008.png",c="/note-front/framework/svelte/base5/009.png",p="/note-front/framework/svelte/base5/010.png",v="/note-front/framework/svelte/base5/011.png",r="/note-front/framework/svelte/base5/012.png",u={};function o(m,s){return a(),e("div",null,[...s[0]||(s[0]=[l(`<h1 id="二、核心语法" tabindex="-1"><a class="header-anchor" href="#二、核心语法"><span>二、核心语法</span></a></h1><h2 id="_2-1-符文使用runes-符文-详解" tabindex="-1"><a class="header-anchor" href="#_2-1-符文使用runes-符文-详解"><span>2.1 符文使用Runes(符文) 详解</span></a></h2><h3 id="_2-1-1-svelte-4-→-svelte-5-迁移对比" tabindex="-1"><a class="header-anchor" href="#_2-1-1-svelte-4-→-svelte-5-迁移对比"><span>2.1.1 Svelte 4 → Svelte 5 迁移对比</span></a></h3><table><thead><tr><th>Svelte 4 语法</th><th>Svelte 5 语法</th><th>说明</th></tr></thead><tbody><tr><td><code>let count = 0</code></td><td><code>let count = $state(0)</code></td><td>状态声明</td></tr><tr><td><code>$: doubled = count * 2</code></td><td><code>let doubled = $derived(count * 2)</code></td><td>计算属性</td></tr><tr><td><code>$: { console.log(count) }</code></td><td><code>$effect(() =&gt; { console.log(count) })</code></td><td>副作用</td></tr><tr><td><code>export let name</code></td><td><code>let { name } = $props()</code></td><td>组件属性</td></tr><tr><td><code>$: console.log(count)</code></td><td><code>$inspect(count)</code></td><td>调试</td></tr></tbody></table><h3 id="_2-1-2-state-响应式状态" tabindex="-1"><a class="header-anchor" href="#_2-1-2-state-响应式状态"><span>2.1.2 <code>$state</code>- 响应式状态</span></a></h3><ol><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	//  声明响应式状态</span>
<span class="line">	let count = $state(0);</span>
<span class="line">	let user = $state({</span>
<span class="line">		name: &#39;张三&#39;,</span>
<span class="line">		age: 25,</span>
<span class="line">		email: &#39;zhangsan@example.com&#39;</span>
<span class="line">	});</span>
<span class="line">	let todos = $state([&#39;吃饭&#39;, &#39;睡觉&#39;, &#39;写代码&#39;]);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button onclick={() =&gt; count++}&gt;</span>
<span class="line">	点击次数: {count}</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">&lt;p&gt;用户名: {user.name}&lt;/p&gt;</span>
<span class="line">&lt;button onclick={() =&gt; user.name = &#39;李四&#39;}&gt;</span>
<span class="line">	改名</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">&lt;ul&gt;</span>
<span class="line">{#each todos as todo}</span>
<span class="line">	&lt;li&gt;{todo}&lt;/li&gt;</span>
<span class="line">{/each}</span>
<span class="line">&lt;/ul&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+i+`" alt=""></p></li><li><p><strong>特点</strong>：</p><ul><li>取代了 Svelte 4 的 <code>let</code>变量自动响应</li><li>可以用于对象、数组、基本类型</li><li>支持深层响应式</li></ul></li></ol><h3 id="_2-1-3-derived-派生状态" tabindex="-1"><a class="header-anchor" href="#_2-1-3-derived-派生状态"><span>2.1.3 <code>$derived</code>- 派生状态</span></a></h3><ol><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let price = $state(10);</span>
<span class="line">  let quantity = $state(2);</span>
<span class="line"></span>
<span class="line">  //  计算属性</span>
<span class="line">  let total = $derived(price * quantity);</span>
<span class="line"></span>
<span class="line">  //  复杂的派生逻辑</span>
<span class="line">  let discountedTotal = $derived({</span>
<span class="line">    // 计算逻辑</span>
<span class="line">    get value() {</span>
<span class="line">      let total = price * quantity;</span>
<span class="line">      if (total &gt; 100) {</span>
<span class="line">        return total * 0.9; // 9折</span>
<span class="line">      }</span>
<span class="line">      return total;</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;p&gt;单价: {price}&lt;/p&gt;</span>
<span class="line">&lt;p&gt;数量: {quantity}&lt;/p&gt;</span>
<span class="line">&lt;p&gt;总计: {total}&lt;/p&gt;</span>
<span class="line">&lt;p&gt;折后价: {discountedTotal.value}&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+d+`" alt=""></p></li><li><p><strong>特点</strong>：</p><ul><li>取代了 Svelte 4 的 <code>$: 计算属性</code></li><li>自动追踪依赖</li><li>惰性计算</li></ul></li></ol><h3 id="_2-1-4-effect-副作用" tabindex="-1"><a class="header-anchor" href="#_2-1-4-effect-副作用"><span>2.1.4 <code>$effect</code>- 副作用</span></a></h3><ol><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let count = $state(0);</span>
<span class="line">  let previousCount = 0;</span>
<span class="line"></span>
<span class="line">  // 副作用 - DOM 更新后执行</span>
<span class="line">  $effect(() =&gt; {</span>
<span class="line">    console.log(\`计数从 \${previousCount} 变为 \${count}\`);</span>
<span class="line">    previousCount = count;</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  // 清理函数</span>
<span class="line">  $effect(() =&gt; {</span>
<span class="line">    const interval = setInterval(() =&gt; {</span>
<span class="line">      console.log(&#39;定时器运行中...&#39;);</span>
<span class="line">    }, 1000);</span>
<span class="line"></span>
<span class="line">    return () =&gt; {</span>
<span class="line">      console.log(&#39;清理定时器&#39;);</span>
<span class="line">      clearInterval(interval);</span>
<span class="line">    };</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button on:click={() =&gt; count++}&gt;</span>
<span class="line">  计数: {count}</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+t+`" alt=""></p></li><li><p><strong>特点</strong>：</p><ul><li>取代了 Svelte 4 的 <code>$: { 代码块 }</code></li><li>自动追踪依赖</li><li>支持清理函数</li><li>在 DOM 更新后执行</li></ul></li></ol><h3 id="_2-1-5-props-组件属性" tabindex="-1"><a class="header-anchor" href="#_2-1-5-props-组件属性"><span>2.1.5 <code>$props</code>- 组件属性</span></a></h3><ul><li><p>代码示例</p><ul><li><p>lib/ChildComponent.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  //  声明组件属性</span>
<span class="line">  let {</span>
<span class="line">    name = &#39;默认名&#39;,</span>
<span class="line">    age = 18,</span>
<span class="line">    onCustomEvent = () =&gt; {}</span>
<span class="line">  } = $props();</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;div&gt;</span>
<span class="line">  &lt;h3&gt;{name}, {age} 岁&lt;/h3&gt;</span>
<span class="line">  &lt;button onclick={() =&gt; onCustomEvent(&#39;点击事件&#39;)}&gt;</span>
<span class="line">    触发事件</span>
<span class="line">  &lt;/button&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>App.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import ChildComponent from &quot;./lib/ChildComponent.svelte&quot;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;ChildComponent </span>
<span class="line">  name=&quot;张三&quot; </span>
<span class="line">  age={25} </span>
<span class="line">  onCustomEvent={e =&gt; console.log(e)} </span>
<span class="line">/&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><ol start="2"><li><p>运行结果</p><p><img src="`+c+`" alt=""></p></li><li><p><strong>特点</strong>：</p><ul><li>取代了 Svelte 4 的 <code>export let</code></li><li>支持解构和默认值</li><li>更好的类型推断</li></ul></li></ol><h3 id="_2-1-6-bindable-可绑定属性" tabindex="-1"><a class="header-anchor" href="#_2-1-6-bindable-可绑定属性"><span>2.1.6 <code>$bindable</code>- 可绑定属性</span></a></h3><ol><li><p>代码示例</p><ul><li><p>lib/ChildComponent.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  // 声明可绑定的属性</span>
<span class="line">  let { value = $bindable(&#39;&#39;) } = $props();</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;input bind:value /&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>App.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import ChildComponent from &quot;./lib/ChildComponent.svelte&quot;;</span>
<span class="line">    let parentValue = &quot;&quot;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;ChildComponent bind:value={parentValue} /&gt;</span>
<span class="line">&lt;p&gt;父组件值: {parentValue}&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>运行结果</p><p><img src="`+p+`" alt=""></p></li><li><p><strong>特点</strong>：</p><ul><li>用于创建支持 <code>bind:</code>的属性</li><li>简化双向绑定</li></ul></li></ol><h3 id="_2-1-7-inspect-调试工具" tabindex="-1"><a class="header-anchor" href="#_2-1-7-inspect-调试工具"><span>2.1.7 <code>$inspect</code>- 调试工具</span></a></h3><ol><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let count = $state(0);</span>
<span class="line">  let user = $state({ name: &#39;张三&#39; });</span>
<span class="line"></span>
<span class="line">  //  调试响应式值的变化</span>
<span class="line">  $inspect(count, user);</span>
<span class="line">  // 或</span>
<span class="line">  $inspect(count, &#39;计数器&#39;);</span>
<span class="line">  $inspect(user, &#39;用户对象&#39;);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button onclick={() =&gt; {</span>
<span class="line">  count++;</span>
<span class="line">  user.name = &#39;李四&#39; + count;</span>
<span class="line">}}&gt;</span>
<span class="line">  修改状态</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+v+`" alt=""></p></li><li><p><strong>特点</strong>：</p><ul><li>实时监控状态变化</li><li>输出到控制台</li><li>开发工具，生产环境会被移除</li></ul></li></ol><h2 id="_2-2-事件相关" tabindex="-1"><a class="header-anchor" href="#_2-2-事件相关"><span>2.2 事件相关</span></a></h2><h3 id="_2-2-1-svelte-4-→-svelte-5-迁移对比" tabindex="-1"><a class="header-anchor" href="#_2-2-1-svelte-4-→-svelte-5-迁移对比"><span>2.2.1 Svelte 4 → Svelte 5 迁移对比</span></a></h3><table><thead><tr><th>特性</th><th>Svelte 4 语法</th><th>Svelte 5 新语法</th><th>说明与解读</th></tr></thead><tbody><tr><td><strong>DOM 事件绑定</strong>​</td><td><code>on:click={handler}</code></td><td><code>onclick={handler}</code></td><td>弃用 <code>on:</code>指令，采用更标准的属性写法<br><br>1<br><br>4<br><br>。</td></tr><tr><td><strong>组件事件通信</strong>​</td><td><code>createEventDispatcher</code></td><td><strong>回调函数作为属性</strong>​</td><td>父组件通过传递函数属性的方式与子组件通信，事件处理逻辑更集中<br><br>2<br><br>3<br><br>6<br><br>。</td></tr><tr><td><strong>事件修饰符</strong>​</td><td><code>on:click\\|once\\|preventDefault</code></td><td><strong>使用工具函数包装</strong>​</td><td>内置修饰符被移除，鼓励在事件处理函数中直接调用相应方法（如 <code>event.preventDefault()</code>）或创建自定义工具函数<br><br>2<br><br>4<br><br>8<br><br>。</td></tr><tr><td><strong>多个事件处理程序</strong>​</td><td><code>on:click={one} on:click={two}</code></td><td><code>onclick={(e) =&gt; { one(e); two(e); }}</code></td><td>同一元素上的同一事件不再允许绑定多个处理程序，需合并到一个函数内执行<br><br>3<br><br>8<br><br>。</td></tr></tbody></table><h3 id="_2-2-2-dom-事件绑定" tabindex="-1"><a class="header-anchor" href="#_2-2-2-dom-事件绑定"><span>2.2.2 DOM 事件绑定</span></a></h3><p>新语法将事件监听器当作普通的HTML属性来处理，只需去掉冒号 <code>:</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;!-- Svelte 5 --&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">	let count = $state(0);</span>
<span class="line">	function handleClick() {</span>
<span class="line">	count++;</span>
<span class="line">	}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 方式一：内联函数 --&gt;</span>
<span class="line">&lt;button onclick={() =&gt; count++}&gt;点击了 {count} 次&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 方式二：函数引用（可使用简写） --&gt;</span>
<span class="line">&lt;button onclick={handleClick}&gt;点击我&lt;/button&gt;</span>
<span class="line">&lt;button {handleClick}&gt;简写形式&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-3-组件事件通信-回调属性" tabindex="-1"><a class="header-anchor" href="#_2-2-3-组件事件通信-回调属性"><span>2.2.3 组件事件通信：回调属性</span></a></h3><p>Svelte 5 弃用了 <code>createEventDispatcher</code>，转而采用更直接的<strong>回调属性（Callback Props）</strong>。子组件通过 <code>$props</code>接收父组件传递的函数，并在适当时机调用。</p><ul><li><p><strong>子组件 (<code>Child.svelte</code>)</strong></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  // 声明一个名为 onMessage 的回调属性</span>
<span class="line">  let { onMessage } = $props();</span>
<span class="line"></span>
<span class="line">  function sendData() {</span>
<span class="line">    // 调用父组件传递过来的函数，并传递数据</span>
<span class="line">    if (onMessage) {</span>
<span class="line">      onMessage(&#39;Hello from child!&#39;);</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button onclick={sendData}&gt;发送消息&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>父组件 (<code>Parent.svelte</code>)</strong></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Child from &#39;./Child.svelte&#39;;</span>
<span class="line"></span>
<span class="line">  let receivedMessage = $state(&#39;&#39;);</span>
<span class="line"></span>
<span class="line">  // 这个函数将传递给子组件</span>
<span class="line">  function handleChildMessage(message) {</span>
<span class="line">    receivedMessage = message;</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child onMessage={handleChildMessage} /&gt;</span>
<span class="line">&lt;p&gt;收到子组件消息：{receivedMessage}&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>这种方式让数据流非常清晰，类似于React中传递props的方式，也获得了更好的类型安全支持</p><h3 id="_2-2-4-事件修饰符的替代方案" tabindex="-1"><a class="header-anchor" href="#_2-2-4-事件修饰符的替代方案"><span>2.2.4 事件修饰符的替代方案</span></a></h3><p>Svelte 5 不再支持事件指令的修饰符（如 <code>preventDefault</code>, <code>once</code>等），而是推荐在事件处理函数中直接使用对应的DOM方法，或者创建自定义的工具函数</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  function handleSubmit(event) {</span>
<span class="line">    // 直接阻止默认行为，替代 |preventDefault</span>
<span class="line">    event.preventDefault();</span>
<span class="line">    // ... 提交逻辑</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  // 自定义工具函数，替代 |once</span>
<span class="line">  function once(fn) {</span>
<span class="line">    return function (event) {</span>
<span class="line">      if (fn) fn.call(this, event);</span>
<span class="line">      fn = null; // 执行一次后，将原函数置空</span>
<span class="line">    };</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function handleClick() {</span>
<span class="line">    console.log(&#39;这个只会打印一次&#39;);</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;form onsubmit={handleSubmit}&gt;</span>
<span class="line">  &lt;button type=&quot;submit&quot;&gt;提交&lt;/button&gt;</span>
<span class="line">&lt;/form&gt;</span>
<span class="line"></span>
<span class="line">&lt;button onclick={once(handleClick)}&gt;只点击一次&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 <code>capture</code>这类修饰符，可以使用新语法 <code>onclickcapture</code></p><h2 id="_2-3-完整示例-todolist-with-runes" tabindex="-1"><a class="header-anchor" href="#_2-3-完整示例-todolist-with-runes"><span>2.3 完整示例：TodoList with Runes</span></a></h2><ul><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  // 使用 $props 接收属性</span>
<span class="line">  let { initialTodos = [] } = $props();</span>
<span class="line"></span>
<span class="line">  // 使用 $state 声明状态</span>
<span class="line">  let todos = $state([...initialTodos]);</span>
<span class="line">  let newTodoText = $state(&#39;&#39;);</span>
<span class="line">  let filter = $state(&#39;all&#39;);</span>
<span class="line"></span>
<span class="line">  // 使用 $derived 计算属性</span>
<span class="line">  let filteredTodos = $derived({</span>
<span class="line">    get value() {</span>
<span class="line">      if (filter === &#39;active&#39;) {</span>
<span class="line">        return todos.filter(t =&gt; !t.completed);</span>
<span class="line">      }</span>
<span class="line">      if (filter === &#39;completed&#39;) {</span>
<span class="line">        return todos.filter(t =&gt; t.completed);</span>
<span class="line">      }</span>
<span class="line">      return todos;</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  let remainingCount = $derived(</span>
<span class="line">    todos.filter(t =&gt; !t.completed).length</span>
<span class="line">  );</span>
<span class="line"></span>
<span class="line">  // 使用 $effect 副作用</span>
<span class="line">  $effect(() =&gt; {</span>
<span class="line">    console.log(\`待办事项数量: \${todos.length}\`);</span>
<span class="line">    console.log(\`未完成数量: \${remainingCount}\`);</span>
<span class="line"></span>
<span class="line">    // 清理函数</span>
<span class="line">    return () =&gt; {</span>
<span class="line">      console.log(&#39;清理效果&#39;);</span>
<span class="line">    };</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  // 使用 $inspect 调试</span>
<span class="line">  $inspect(todos, &#39;待办事项&#39;);</span>
<span class="line">  $inspect(filter, &#39;过滤器&#39;);</span>
<span class="line"></span>
<span class="line">  // 操作方法</span>
<span class="line">  function addTodo() {</span>
<span class="line">    if (!newTodoText.trim()) return;</span>
<span class="line"></span>
<span class="line">    todos.push({</span>
<span class="line">      id: Date.now(),</span>
<span class="line">      text: newTodoText.trim(),</span>
<span class="line">      completed: false</span>
<span class="line">    });</span>
<span class="line">    newTodoText = &#39;&#39;;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  function toggleTodo(id) {</span>
<span class="line">    const todo = todos.find(t =&gt; t.id === id);</span>
<span class="line">    if (todo) {</span>
<span class="line">      todo.completed = !todo.completed;</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;div&gt;</span>
<span class="line">  &lt;h1&gt;Todo List (Svelte 5 Runes)&lt;/h1&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 添加新任务 --&gt;</span>
<span class="line">  &lt;input</span>
<span class="line">    type=&quot;text&quot;</span>
<span class="line">    bind:value={newTodoText}</span>
<span class="line">    placeholder=&quot;输入新任务&quot;</span>
<span class="line">    on:keydown={(e) =&gt; e.key === &#39;Enter&#39; &amp;&amp; addTodo()}</span>
<span class="line">  /&gt;</span>
<span class="line">  &lt;button on:click={addTodo} disabled={!newTodoText.trim()}&gt;</span>
<span class="line">    添加</span>
<span class="line">  &lt;/button&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 过滤 --&gt;</span>
<span class="line">  &lt;div&gt;</span>
<span class="line">    &lt;label&gt;</span>
<span class="line">      &lt;input type=&quot;radio&quot; value=&quot;all&quot; bind:group={filter} /&gt;</span>
<span class="line">      全部 ({todos.length})</span>
<span class="line">    &lt;/label&gt;</span>
<span class="line">    &lt;label&gt;</span>
<span class="line">      &lt;input type=&quot;radio&quot; value=&quot;active&quot; bind:group={filter} /&gt;</span>
<span class="line">      进行中 ({remainingCount})</span>
<span class="line">    &lt;/label&gt;</span>
<span class="line">    &lt;label&gt;</span>
<span class="line">      &lt;input type=&quot;radio&quot; value=&quot;completed&quot; bind:group={filter} /&gt;</span>
<span class="line">      已完成 ({todos.length - remainingCount})</span>
<span class="line">    &lt;/label&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 列表 --&gt;</span>
<span class="line">  &lt;ul&gt;</span>
<span class="line">    {#each filteredTodos.value as todo (todo.id)}</span>
<span class="line">      &lt;li&gt;</span>
<span class="line">        &lt;input</span>
<span class="line">          type=&quot;checkbox&quot;</span>
<span class="line">          checked={todo.completed}</span>
<span class="line">          on:change={() =&gt; toggleTodo(todo.id)}</span>
<span class="line">        /&gt;</span>
<span class="line">        &lt;span class:completed={todo.completed}&gt;</span>
<span class="line">          {todo.text}</span>
<span class="line">        &lt;/span&gt;</span>
<span class="line">      &lt;/li&gt;</span>
<span class="line">    {/each}</span>
<span class="line">  &lt;/ul&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;</span>
<span class="line">  .completed {</span>
<span class="line">    text-decoration: line-through;</span>
<span class="line">    color: #999;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+r+'" alt=""></p></li></ul>',33)])])}const g=n(u,[["render",o]]),h=JSON.parse('{"path":"/framework/svelte/base5/02.html","title":"二、核心语法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1772001712000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":2,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"db6d183fe4bedd50d548f87979aa938388a2e519","time":1772001712000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"},{"hash":"6456dcf1fd45f82d71ce5dfe3954468d5bf78145","time":1771996569000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"}]},"filePathRelative":"framework/svelte/base5/02.md"}');export{g as comp,h as data};
