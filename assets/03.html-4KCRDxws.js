import{ar as n,as as a,at as e,au as l}from"./app-5nod3Nrs.js";const t="/note-front/framework/svelte/base4/006.png",i="/note-front/framework/svelte/base4/007.gif",p="/note-front/framework/svelte/base4/009.gif",c="/note-front/framework/svelte/base4/010.png",o="/note-front/framework/svelte/base4/011.png",d="/note-front/framework/svelte/base4/012.png",r="/note-front/framework/svelte/base4/013.gif",u="/note-front/framework/svelte/base4/014.gif",v="/note-front/framework/svelte/base4/015.gif",m="/note-front/framework/svelte/base4/016.gif",b={};function k(g,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="三、数据传递" tabindex="-1"><a class="header-anchor" href="#三、数据传递"><span>三、数据传递</span></a></h1><h2 id="_3-1-父子通信" tabindex="-1"><a class="header-anchor" href="#_3-1-父子通信"><span>3.1 父子通信</span></a></h2><h3 id="_3-1-1-父-→-子-属性传递" tabindex="-1"><a class="header-anchor" href="#_3-1-1-父-→-子-属性传递"><span>3.1.1 父 → 子：属性传递</span></a></h3><p>子组件通过 <code>export let</code> 声明接收的 props。</p><ul><li><p>子组件：<code>Child.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  // 声明可接收的 props（带默认值）</span>
<span class="line">  export let name = &#39;Guest&#39;;</span>
<span class="line">  export let age;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;p&gt;你好, {name}! 您的年龄是： {age} &lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>父组件：<code>Parent.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Child from &#39;./Child.svelte&#39;;</span>
<span class="line">  let user = { name: &#39;张三&#39;, age: 30 };</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 传递 props --&gt;</span>
<span class="line">&lt;Child name={user.name} age={user.age} /&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 或简写（当 prop 名 == 变量名） --&gt;</span>
<span class="line">&lt;Child {...user} /&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>根组件 <code>App.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Parent from &#39;./lib/Parent.svelte&#39;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;main&gt;</span>
<span class="line">    &lt;Parent /&gt;</span>
<span class="line">&lt;/main&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+t+`" alt=""></p></li></ul><blockquote><p><code>export let</code> 是 Svelte 特有语法，表示“这是一个 prop”。</p></blockquote><h3 id="_3-1-2-子-→-父-事件" tabindex="-1"><a class="header-anchor" href="#_3-1-2-子-→-父-事件"><span>3.1.2 子 → 父：事件</span></a></h3><p>子组件使用 <code>createEventDispatcher</code> 发送事件，父组件监听。</p><ol><li><p>子组件：<code>Child.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { createEventDispatcher } from &#39;svelte&#39;;</span>
<span class="line">  const dispatch = createEventDispatcher();</span>
<span class="line"></span>
<span class="line">  let count = 0;</span>
<span class="line"></span>
<span class="line">  function increment() {</span>
<span class="line">    count += 1;</span>
<span class="line">    // 向上传递事件和数据</span>
<span class="line">    dispatch(&#39;update&#39;, { count });</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button on:click={increment}&gt;Count: {count}&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>父组件：<code>Parent.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Child from &#39;./Child.svelte&#39;;</span>
<span class="line"></span>
<span class="line">  function handleUpdate(event) {</span>
<span class="line">    console.log(&#39;New count:&#39;, event.detail.count); // 注意：数据在 event.detail</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child on:update={handleUpdate} /&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><ul><li><p>运行结果</p><p><img src="`+i+`" alt=""></p></li></ul><blockquote><p>关键点：</p><ul><li>事件名自定义（如 <code>&#39;update&#39;</code>）</li><li>数据通过 <code>event.detail</code> 访问</li><li>支持多个事件：<code>dispatch(&#39;save&#39;)</code>, <code>dispatch(&#39;cancel&#39;)</code></li></ul></blockquote><h3 id="_3-1-3-父直接调用子方法-bind-this" tabindex="-1"><a class="header-anchor" href="#_3-1-3-父直接调用子方法-bind-this"><span>3.1.3 父直接调用子方法：<code>bind:this</code></span></a></h3><p>父组件获取子组件实例，直接调用其方法（慎用）。</p><ul><li><p>子组件：<code>Child.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  export function focusInput() {</span>
<span class="line">    inputEl.focus(); // 假设有一个 input</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  let inputEl;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;input bind:this={inputEl} /&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>父组件</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Child from &#39;./Child.svelte&#39;;</span>
<span class="line">  let childRef;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child bind:this={childRef} /&gt;</span>
<span class="line"></span>
<span class="line">&lt;button on:click={() =&gt; childRef.focusInput()}&gt;</span>
<span class="line">  聚焦到子组件</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+p+`" alt=""></p></li></ul><blockquote><p>仅用于必要场景（如聚焦、播放视频），<strong>避免破坏组件封装性</strong>。</p></blockquote><h2 id="_3-2-插槽" tabindex="-1"><a class="header-anchor" href="#_3-2-插槽"><span>3.2 插槽</span></a></h2><p>插槽允许父组件向子组件“注入”自定义内容。</p><h3 id="_3-2-1-默认插槽" tabindex="-1"><a class="header-anchor" href="#_3-2-1-默认插槽"><span>3.2.1 默认插槽</span></a></h3><p>最简单的插槽形式：子组件预留一个 <code>&lt;slot&gt;</code>，父组件的内容会插入其中。</p><p>如果父组件不传内容，则显示<code>&lt;slot&gt;</code> 内的默认内容。</p><ul><li><p>子组件：<code>Child.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;div class=&quot;card&quot;&gt;</span>
<span class="line">    &lt;slot&gt;</span>
<span class="line">        &lt;!-- 默认插槽 --&gt;</span>
<span class="line">        &lt;p&gt;默认内容&lt;/p&gt;</span>
<span class="line">    &lt;/slot&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>父组件：<code>Parent.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import Child from &quot;./Child.svelte&quot;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child&gt;</span>
<span class="line">    &lt;h2&gt;我的标题&lt;/h2&gt;</span>
<span class="line">    &lt;p&gt;这是自定义内容！&lt;/p&gt;</span>
<span class="line">&lt;/Child&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+c+`" alt=""></p></li></ul><blockquote><p>渲染结果：<code>&lt;div class=&quot;card&quot;&gt;&lt;h2&gt;...&lt;/h2&gt;&lt;p&gt;...&lt;/p&gt;&lt;/div&gt;</code></p></blockquote><h3 id="_3-2-2-具名插槽" tabindex="-1"><a class="header-anchor" href="#_3-2-2-具名插槽"><span>3.2.2 具名插槽</span></a></h3><p>当需要多个插入点时，使用 name 属性区分。</p><ul><li><p>子组件：<code>Child.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;div class=&quot;modal&quot;&gt;</span>
<span class="line">    &lt;header&gt;</span>
<span class="line">        &lt;slot name=&quot;title&quot;&gt;默认标题&lt;/slot&gt;</span>
<span class="line">    &lt;/header&gt;</span>
<span class="line">    &lt;main&gt;</span>
<span class="line">        &lt;slot /&gt;</span>
<span class="line">        &lt;!-- 默认插槽 --&gt;</span>
<span class="line">    &lt;/main&gt;</span>
<span class="line">    &lt;footer&gt;</span>
<span class="line">        &lt;slot name=&quot;actions&quot;&gt;</span>
<span class="line">            &lt;button&gt;OK&lt;/button&gt;</span>
<span class="line">        &lt;/slot&gt;</span>
<span class="line">    &lt;/footer&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>父组件：<code>Parent.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import Child from &quot;./Child.svelte&quot;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;Child&gt;</span>
<span class="line">    &lt;!-- 默认插槽 --&gt;</span>
<span class="line">    &lt;p&gt;这是模态框主体内容。&lt;/p&gt;</span>
<span class="line"></span>
<span class="line">    &lt;!-- 具名插槽 --&gt;</span>
<span class="line">    &lt;span slot=&quot;title&quot;&gt;重要提示&lt;/span&gt;</span>
<span class="line">    &lt;div slot=&quot;actions&quot;&gt;</span>
<span class="line">        &lt;button&gt;取消&lt;/button&gt;</span>
<span class="line">        &lt;button&gt;确认&lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/Child&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+o+`" alt=""></p></li></ul><blockquote><p>子组件：<code>&lt;slot name=&quot;xxx&quot;&gt;</code> 父组件：<code>&lt;元素 slot=&quot;xxx&quot;&gt;内容&lt;/元素&gt;</code> 注意：具名插槽必须显式指定 slot=&quot;name&quot;，否则会被视为默认插槽内容</p></blockquote><h3 id="_3-2-3-作用域插槽——插槽传值给父" tabindex="-1"><a class="header-anchor" href="#_3-2-3-作用域插槽——插槽传值给父"><span>3.2.3 作用域插槽——插槽传值给父</span></a></h3><p>子组件可向插槽内容<strong>传递数据</strong>（类似 Vue 的 scoped slot）。</p><ul><li><p>子组件：<code>UserList.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    export let users = [];</span>
<span class="line">    console.log(users);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">{#each users as user, index}</span>
<span class="line">    &lt;div class=&quot;user-item&quot;&gt;</span>
<span class="line">        &lt;!-- 向插槽暴露 user 和 index --&gt;</span>
<span class="line">        &lt;slot {user} {index} /&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">{/each}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>父组件：</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import Child from &quot;./Child.svelte&quot;;</span>
<span class="line">    let people = [</span>
<span class="line">        { id: 1, name: &quot;Alice&quot; },</span>
<span class="line">        { id: 2, name: &quot;Bob&quot; },</span>
<span class="line">    ];</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;!-- 直接在子组件标签上使用 let:user let:index --&gt;</span>
<span class="line">&lt;Child users={people} let:user let:index&gt;</span>
<span class="line">    &lt;div&gt;</span>
<span class="line">        &lt;strong&gt;{index + 1}. {user.name}&lt;/strong&gt;</span>
<span class="line">        &lt;button on:click={() =&gt; alert(\`编辑 \${user.name}\`)}&gt; 编辑 &lt;/button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">&lt;/Child&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+d+`" alt=""></p></li></ul><blockquote><p>关键语法：</p><ul><li>子：<code>&lt;slot prop={value} /&gt;</code></li><li>父：<code>&lt;div let:prop&gt;... {prop} ...&lt;/div&gt;</code></li></ul></blockquote><h2 id="_3-3-状态管理" tabindex="-1"><a class="header-anchor" href="#_3-3-状态管理"><span>3.3 状态管理</span></a></h2><p>Svelte 的 <strong>Stores</strong> 是其内置的、轻量级但功能强大的<strong>全局状态管理机制</strong>，用于在组件之间共享和同步状态。它不依赖虚拟 DOM，而是基于 <strong>响应式订阅模型</strong>，由 Svelte 编译器在构建时自动处理订阅与取消订阅，开发者只需关注状态逻辑本身。</p><h3 id="_3-3-1-核心理念" tabindex="-1"><a class="header-anchor" href="#_3-3-1-核心理念"><span>3.3.1 核心理念</span></a></h3><blockquote><p><strong>Store = 一个带有 <code>subscribe</code> 方法的对象</strong></p></blockquote><p>只要一个对象实现了 <strong>Store Contract（存储契约）</strong>：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">subscribe</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token function-variable function">run</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>subscribe是浏览器自带的数据状态管理</p><p>它就是一个合法的 Store，可被 Svelte 自动订阅（通过 <code>$store</code> 语法）。</p><p>Svelte 在 <code>svelte/store</code> 模块中提供了三种标准实现：</p><table><thead><tr><th>类型</th><th>用途</th><th>是否可写</th></tr></thead><tbody><tr><td><code>writable</code></td><td>可读写状态（如计数器、表单数据）</td><td>是</td></tr><tr><td><code>readable</code></td><td>只读状态（如时间、鼠标位置）</td><td>否</td></tr><tr><td><code>derived</code></td><td>派生状态（基于其他 store 计算得出）</td><td>否</td></tr></tbody></table><h3 id="_3-3-2-writable-——-可读写状态" tabindex="-1"><a class="header-anchor" href="#_3-3-2-writable-——-可读写状态"><span>3.3.2 <code>writable</code> —— 可读写状态</span></a></h3><ol><li><p>创建 <code>stores/counter.js</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> writable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte/store&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方式1：直接导出</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方式2：封装方法（推荐用于复杂逻辑）</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> subscribe<span class="token punctuation">,</span> set<span class="token punctuation">,</span> update <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        subscribe<span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">increment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">decrement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">n</span> <span class="token operator">=&gt;</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 隐藏 set/update，防止外部随意修改</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token function">createCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在组件中使用 App.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import { count, counter } from &#39;./stores/counter.js&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 读取：$ 前缀自动订阅 --&gt;</span>
<span class="line">&lt;p&gt;Count: {$count}&lt;/p&gt;</span>
<span class="line">&lt;p&gt;Counter: {$counter}&lt;/p&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 写入 --&gt;</span>
<span class="line">&lt;button on:click={() =&gt; count.update(n =&gt; n + 1)}&gt;+1 (直接修改)&lt;/button&gt;</span>
<span class="line">&lt;button on:click={counter.increment}&gt;+1 (方法修改)&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><ul><li><p>运行结果</p><p><img src="`+r+`" alt=""></p></li></ul><h3 id="_3-3-3-readable-——-只读状态" tabindex="-1"><a class="header-anchor" href="#_3-3-3-readable-——-只读状态"><span>3.3.3 <code>readable</code> —— 只读状态</span></a></h3><p>适用于由<strong>外部事件驱动</strong>的状态（如定时器、WebSocket、传感器数据）。</p><ol><li><p>创建 <code>stores/time.js</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> readable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte/store&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token function">readable</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">set</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 首次有订阅者时调用</span></span>
<span class="line">  <span class="token keyword">const</span> interval <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新值</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 返回清理函数（最后订阅者取消时调用）</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">clearInterval</span><span class="token punctuation">(</span>interval<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件中使用</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { time } from &#39;./stores/time.js&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;p&gt;当前时间：{$time.toLocaleTimeString()}&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+u+`" alt=""></p></li></ol><blockquote><p>外部无法调用 <code>set()</code> 或 <code>update()</code>，只能通过 <code>start</code> 函数内部更新。</p></blockquote><h3 id="_3-3-4-derived-——-派生状态" tabindex="-1"><a class="header-anchor" href="#_3-3-4-derived-——-派生状态"><span>3.3.4 <code>derived</code> —— 派生状态</span></a></h3><p>从一个或多个现有 store <strong>计算得出新值</strong>，自动响应依赖变化。</p><ol><li><p>单依赖 <code>stores/math.js</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> derived <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte/store&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> count <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./counter.js&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> doubled <span class="token operator">=</span> <span class="token function">derived</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">$count</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> $count <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>多依赖</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> writable<span class="token punctuation">,</span> derived <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte/store&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> width <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token function">writable</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注意：依赖项需放在数组中，回调参数是解构后的值数组</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> area <span class="token operator">=</span> <span class="token function">derived</span><span class="token punctuation">(</span><span class="token punctuation">[</span>width<span class="token punctuation">,</span> height<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>$width<span class="token punctuation">,</span> $height<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> $width <span class="token operator">*</span> $height<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>异步派生（高级）</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> userGreeting <span class="token operator">=</span> <span class="token function">derived</span><span class="token punctuation">(</span>authStore<span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">$auth<span class="token punctuation">,</span> <span class="token keyword">set</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$auth<span class="token punctuation">.</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;Please log in&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 异步获取数据</span></span>
<span class="line">  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchUserName</span><span class="token punctuation">(</span>$auth<span class="token punctuation">.</span>user<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">set</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Welcome, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 可选：返回清理函数</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;Loading...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始值</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>derived</code> 的第三个参数是<strong>初始值</strong>，避免 undefined。</p></blockquote></li><li><p>组件中使用</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { count } from &#39;./stores/counter.js&#39;;</span>
<span class="line">  import { doubled } from &#39;./stores/math.js&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;p&gt;Count 值是： {$count} &lt;/p&gt;</span>
<span class="line">&lt;p&gt;Doubled 值是： {$doubled} &lt;/p&gt;</span>
<span class="line">&lt;button on:click={() =&gt; count.update(n =&gt; n + 1)}&gt;count+1&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+v+`" alt=""></p></li></ol><h3 id="_3-3-5-手动订阅-非-语法" tabindex="-1"><a class="header-anchor" href="#_3-3-5-手动订阅-非-语法"><span>3.3.5 手动订阅（非 <code>$</code> 语法）</span></a></h3><ol><li><p>组件中使用</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { count } from &#39;./stores/counter.js&#39;;</span>
<span class="line">  import { onDestroy } from &#39;svelte&#39;;</span>
<span class="line"></span>
<span class="line">  let countValue;</span>
<span class="line"></span>
<span class="line">  // 手动订阅</span>
<span class="line">  const unsubscribe = count.subscribe(value =&gt; {</span>
<span class="line">    console.log(&#39;Count changed:&#39;, value);</span>
<span class="line">    countValue = value;</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  // 组件销毁时取消订阅（防止内存泄漏）</span>
<span class="line">  onDestroy(unsubscribe);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;p&gt;Count 值是： {$count} &lt;/p&gt;</span>
<span class="line">&lt;p&gt;手动订阅 count: {countValue}&lt;/p&gt;</span>
<span class="line">&lt;button on:click={() =&gt; count.update(n =&gt; n + 1)}&gt;count+1&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+m+'" alt=""></p></li></ol><blockquote><p><strong>必须调用 <code>onDestroy</code> 取消订阅</strong>，否则会导致内存泄漏！</p></blockquote>',53)])])}const f=n(b,[["render",k]]),w=JSON.parse('{"path":"/framework/svelte/base4/03.html","title":"三、数据传递","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1771996569000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"6456dcf1fd45f82d71ce5dfe3954468d5bf78145","time":1771996569000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"}]},"filePathRelative":"framework/svelte/base4/03.md"}');export{f as comp,w as data};
