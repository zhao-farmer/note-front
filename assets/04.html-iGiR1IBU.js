import{ar as n,as as e,at as l,au as a}from"./app-5nod3Nrs.js";const i="/note-front/framework/svelte/base5/020.gif",t="/note-front/framework/svelte/base5/021.png",d="/note-front/framework/svelte/base5/022.gif",c="/note-front/framework/svelte/base5/026.png",p="/note-front/framework/svelte/base5/023.gif",r="/note-front/framework/svelte/base5/024.png",v="/note-front/framework/svelte/base5/025.png",u="/note-front/framework/svelte/base5/027.png",o="/note-front/framework/svelte/base5/028.png",m="/note-front/framework/svelte/base5/029.gif",b="/note-front/framework/svelte/base5/030.gif",g="/note-front/framework/svelte/base5/031.gif",h="/note-front/framework/svelte/base5/032.gif",f="/note-front/framework/svelte/base5/033.gif",_="/note-front/framework/svelte/base5/034.gif",k="/note-front/framework/svelte/base5/035.gif",y={};function x(q,s){return a(),e("div",null,[...s[0]||(s[0]=[l(`<h1 id="四、模板语法" tabindex="-1"><a class="header-anchor" href="#四、模板语法"><span>四、模板语法</span></a></h1><h2 id="_4-1-语法说明" tabindex="-1"><a class="header-anchor" href="#_4-1-语法说明"><span>4.1 语法说明</span></a></h2><ol><li><p>控制结构</p><table><thead><tr><th>语法</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>{#if ...}</code></td><td>条件渲染</td><td><code>{#if user} &lt;p&gt;欢迎, {$user.name}&lt;/p&gt; {/if}</code></td></tr><tr><td><code>{#each ...}</code></td><td>遍历数组</td><td><code>{#each items as item} &lt;li&gt;{$item}&lt;/li&gt; {/each}</code></td></tr><tr><td><code>{#key ...}</code></td><td>优化列表重排（性能关键）</td><td><code>{#key id} &lt;div&gt;{$id}&lt;/div&gt; {/key}</code></td></tr><tr><td><code>{#await ...}</code></td><td>异步数据加载</td><td><code>{#await promise} 加载中... {:then value} {$value} {:catch error} 错误{/await}</code></td></tr></tbody></table><blockquote><p><strong>重点提示</strong>：</p><ul><li><code>#key</code> 是 <strong>Svelte 5 性能优化的核心</strong>，必须为动态列表添加唯一 key。</li><li><code>#await</code> 支持 <code>{:then}</code> 和 <code>{:catch}</code>，可替代 <code>try/catch</code>。</li></ul></blockquote></li><li><p>片段与渲染</p><table><thead><tr><th>语法</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>{#snippet ...}</code></td><td>命名插槽（Svelte 5 新增）</td><td><code>{#snippet header()} &lt;header&gt;头部&lt;/ header&gt; {/snippet}</code></td></tr><tr><td><code>@render ...</code></td><td>渲染函数（类似 JSX）</td><td><code>@render header()</code></td></tr><tr><td><code>@html ...</code></td><td>安全注入 HTML 字符串</td><td><code>@html unsafeHtml</code>（ 有 XSS 风险）</td></tr><tr><td><code>@attach ...</code></td><td>绑定事件或属性到 DOM</td><td><code>@attach click=&quot;handleClick&quot;</code></td></tr><tr><td><code>@const ...</code></td><td>定义常量（避免重复表达式）</td><td><code>@const sum = a + b</code></td></tr><tr><td><code>@debug ...</code></td><td>调试输出（开发模式）</td><td><code>@debug user, items</code></td></tr></tbody></table><blockquote><p><strong>关键点</strong>：</p><ul><li><code>{#snippet}</code> 是 Svelte 5 的“命名插槽”机制，比 <code>&lt;slot name=&quot;xxx&quot;&gt;</code> 更灵活。</li><li><code>@render</code> 可以渲染任意组件或函数，支持嵌套。</li><li><code>@html</code> <strong>不要用于用户输入</strong>，否则易受 XSS 攻击。</li></ul></blockquote></li><li><p>绑定相关</p><table><thead><tr><th>语法</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>bind:</code></td><td>绑定 DOM 属性或值</td><td><code>bind:value={inputValue}</code></td></tr><tr><td><code>use:</code></td><td>应用 action（如聚焦、动画）</td><td><code>use:focus</code></td></tr><tr><td><code>transition:</code></td><td>添加过渡动画</td><td><code>transition:fade</code></td></tr><tr><td><code>in:</code> 和 <code>out:</code></td><td>进入/退出动画</td><td><code>in:slide</code>, <code>out:scale</code></td></tr><tr><td><code>animate:</code></td><td>动画（基于 CSS 或 JS）</td><td><code>animate:scale</code></td></tr><tr><td><code>style:</code></td><td>动态样式</td><td><code>style:color={$theme === &#39;dark&#39; ? &#39;white&#39; : &#39;black&#39;}</code></td></tr><tr><td><code>class:</code></td><td>动态类名</td><td><code>class:active={isActive}</code></td></tr><tr><td><code>await:</code></td><td>等待异步操作完成</td><td><code>await:fetchData</code></td></tr></tbody></table><blockquote><p>注意：</p><ul><li><code>bind:</code> 只能绑定原生 DOM 属性（如 <code>value</code>, <code>checked</code>, <code>innerHTML</code>），不能绑定自定义 属性。</li><li><code>use:</code> 是 Svelte 5 的核心 —— 用于封装 DOM 行为（如 <code>focus</code>, <code>resize</code>, <code>scroll</code>）。</li></ul></blockquote></li></ol><h2 id="_4-2-控制模板" tabindex="-1"><a class="header-anchor" href="#_4-2-控制模板"><span>4.2 控制模板</span></a></h2><h3 id="_4-2-1-条件渲染" tabindex="-1"><a class="header-anchor" href="#_4-2-1-条件渲染"><span>4.2.1 条件渲染</span></a></h3><ul><li><p>代码结构 <code>{#if ...} {:else if ...} {:else}</code></p></li><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	let isLoggedIn = $state(false);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">{#if isLoggedIn}</span>
<span class="line">	&lt;p&gt;你好，欢迎回来！&lt;/p&gt;</span>
<span class="line">{:else}</span>
<span class="line">	&lt;p&gt;请先登录。&lt;/p&gt;</span>
<span class="line">{/if}</span>
<span class="line"></span>
<span class="line">&lt;button onclick={() =&gt; isLoggedIn = !isLoggedIn}&gt;</span>
<span class="line">	{isLoggedIn ? &#39;登出&#39; : &#39;登录&#39;}</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+i+`" alt=""></p></li><li><p>注意</p><ul><li>不支持 else if 连写（必须用 {:else if}）</li><li>条件表达式会自动响应 <code>$state、$derived</code> 等响应式变量</li></ul></li></ul><h3 id="_4-2-2-列表遍历" tabindex="-1"><a class="header-anchor" href="#_4-2-2-列表遍历"><span>4.2.2 列表遍历</span></a></h3><ul><li><p>代码结构 <code>{#each ... as ... (key)}</code></p></li><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	let todos = $state([</span>
<span class="line">		{ id: 1, text: &#39;学习 Svelte 5&#39; },</span>
<span class="line">		{ id: 2, text: &#39;写代码&#39; },</span>
<span class="line">		{ id: 3, text: &#39;休息&#39; }</span>
<span class="line">	]);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;ul&gt;</span>
<span class="line">	{#each todos as todo (todo.id)}</span>
<span class="line">		&lt;li&gt;{todo.text}&lt;/li&gt;</span>
<span class="line">	{/each}</span>
<span class="line">&lt;/ul&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+t+`" alt=""></p></li><li><p>注意: <code>(todo.id) 是 key</code>，用于高效更新 DOM（必加！）。</p></li></ul><h3 id="_4-2-3-异步加载" tabindex="-1"><a class="header-anchor" href="#_4-2-3-异步加载"><span>4.2.3 异步加载</span></a></h3><ul><li><p>代码结构: <code>{#await ...}</code></p></li><li><p>功能作用：优雅处理 Promise 的三种状态：pending / fulfilled / rejected。</p></li><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	async function fetchUser() {</span>
<span class="line">	await new Promise(r =&gt; setTimeout(r, 1000)); // 模拟网络延迟</span>
<span class="line">		return { name: &#39;Alice&#39;, age: 28 };</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	let userPromise = $state(fetchUser());</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">{#await userPromise}</span>
<span class="line">	&lt;p&gt;正在加载用户信息...&lt;/p&gt;</span>
<span class="line">{:then user}</span>
<span class="line">	&lt;p&gt;姓名: {user.name}, 年龄: {user.age}&lt;/p&gt;</span>
<span class="line">{:catch error}</span>
<span class="line">	&lt;p&gt;加载失败: {error.message}&lt;/p&gt;</span>
<span class="line">{/await}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+d+`" alt=""></p></li></ul><h3 id="_4-2-4-常量定义" tabindex="-1"><a class="header-anchor" href="#_4-2-4-常量定义"><span>4.2.4 常量定义</span></a></h3><ul><li><p>代码结构: <code>{@const ...</code></p></li><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	let price = 100;</span>
<span class="line">	let quantity = 3;</span>
<span class="line">	let taxRate = 0.1;</span>
<span class="line"></span>
<span class="line">	let users = [</span>
<span class="line">		{ name: &#39;张三&#39;, age: 25 },</span>
<span class="line">		{ name: &#39;李四&#39;, age: 30 },</span>
<span class="line">		{ name: &#39;王五&#39;, age: 28 }</span>
<span class="line">	];</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 定义常量避免重复计算 --&gt;</span>
<span class="line">{#if true}</span>
<span class="line">	{@const subtotal = price * quantity}</span>
<span class="line">	{@const area =price * quantity}</span>
<span class="line">	{@const tax = subtotal * taxRate}</span>
<span class="line">	{@const total = subtotal + tax}</span>
<span class="line"></span>
<span class="line">	&lt;span&gt;单价: {price}&lt;/span&gt;</span>
<span class="line">	&lt;span&gt;数量: {quantity}&lt;/span&gt;</span>
<span class="line">	&lt;span&gt;小计: {subtotal}&lt;/span&gt;</span>
<span class="line">	&lt;span&gt;税额: {tax}&lt;/span&gt;</span>
<span class="line">	&lt;span&gt;总计: {total}&lt;/span&gt;</span>
<span class="line"></span>
<span class="line">{/if}</span>
<span class="line"></span>
<span class="line">&lt;ul&gt;</span>
<span class="line">	{#each users as user, index}</span>
<span class="line">		&lt;!-- 定义局部常量 --&gt;</span>
<span class="line">		{@const isAdult = user.age &gt;= 18}</span>
<span class="line">		{@const className = isAdult ? &#39;adult&#39; : &#39;minor&#39;}</span>
<span class="line"></span>
<span class="line">		&lt;li class={className}&gt;</span>
<span class="line">			{user.name} ({user.age}岁) - {isAdult ? &#39;成年人&#39; : &#39;未成年人&#39;}</span>
<span class="line">		&lt;/li&gt;</span>
<span class="line">	{/each}</span>
<span class="line">&lt;/ul&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+c+`" alt=""></p></li><li><p>注意：<code>@const</code> 只能在 <code>{#if ...}</code>, <code>{#each ...}</code>, <code>{#snippet ...}</code>中使用</p></li></ul><h2 id="_4-3-代码渲染" tabindex="-1"><a class="header-anchor" href="#_4-3-代码渲染"><span>4.3 代码渲染</span></a></h2><h3 id="_4-3-1-强制重新创建-dom" tabindex="-1"><a class="header-anchor" href="#_4-3-1-强制重新创建-dom"><span>4.3.1 强制重新创建 DOM</span></a></h3><p>当 expression 变化时，销毁并重建整个块内的 DOM 和组件。</p><ul><li><p>代码结构: <code>{#key expression}</code></p></li><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	let keyValue = $state(0);</span>
<span class="line"></span>
<span class="line">	const resetForm = () =&gt; {</span>
<span class="line">		keyValue = Math.random(); // 改变 key 值，强制重置</span>
<span class="line">	};</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button onclick={resetForm}&gt;重置表单&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">{#key keyValue}</span>
<span class="line">	&lt;input type=&quot;text&quot; placeholder=&quot;输入内容...&quot; /&gt;</span>
<span class="line">{/key}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+p+`" alt=""></p></li></ul><h3 id="_4-3-2-插槽与渲染" tabindex="-1"><a class="header-anchor" href="#_4-3-2-插槽与渲染"><span>4.3.2 插槽与渲染</span></a></h3><ul><li><p>代码结构: <code>{#snippet ...}</code> 与 <code>@render ...</code></p></li><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">{#snippet header()}</span>
<span class="line">	&lt;h2&gt;页面标题&lt;/h2&gt;</span>
<span class="line">{/snippet}</span>
<span class="line"></span>
<span class="line">{#snippet content()}</span>
<span class="line">	&lt;p&gt;这是主要内容&lt;/p&gt;</span>
<span class="line">{/snippet}</span>
<span class="line"></span>
<span class="line">&lt;!-- 定义带参数的 snippet --&gt;</span>
<span class="line">{#snippet userCard(user)}</span>
<span class="line">	&lt;div class=&quot;user-card&quot;&gt;</span>
<span class="line">	&lt;h3&gt;{user.name}&lt;/h3&gt;</span>
<span class="line">	&lt;p&gt;{user.email}&lt;/p&gt;</span>
<span class="line">	&lt;/div&gt;</span>
<span class="line">{/snippet}</span>
<span class="line"></span>
<span class="line">&lt;!-- 使用 --&gt;</span>
<span class="line">{@render header()}</span>
<span class="line">{@render content()}</span>
<span class="line">{@render userCard({ name: &#39;张三&#39;, email: &#39;zhang@example.com&#39; })}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+r+`" alt=""></p></li></ul><h3 id="_4-3-3-html解析" tabindex="-1"><a class="header-anchor" href="#_4-3-3-html解析"><span>4.3.3 HTML解析</span></a></h3><ul><li><p>代码结构: <code>@html ...</code></p></li><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	let htmlContent = &#39;&lt;strong&gt;加粗文本&lt;/strong&gt; 和 &lt;span style=&quot;color: red;&quot;&gt;红色文本&lt;/	span&gt;&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 渲染 HTML --&gt;</span>
<span class="line">&lt;div&gt;{@html htmlContent}&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 内联 HTML --&gt;</span>
<span class="line">&lt;div&gt;{@html &#39;&lt;em&gt;斜体文字&lt;/em&gt;&#39;}&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+v+`" alt=""></p></li></ul><h3 id="_4-3-4-调试输出" tabindex="-1"><a class="header-anchor" href="#_4-3-4-调试输出"><span>4.3.4 调试输出</span></a></h3><ul><li><p>代码结构: <code>@debug ...</code>-</p></li><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	let count = 0;</span>
<span class="line">	let user = { name: &#39;张三&#39;, age: 25 };</span>
<span class="line">	let isLoading = false;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 调试多个变量 --&gt;</span>
<span class="line">{@debug count, user, isLoading}</span>
<span class="line"></span>
<span class="line">&lt;button onclick={() =&gt; count++}&gt;增加: {count}&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 条件调试 --&gt;</span>
<span class="line">{#if count &gt; 5}</span>
<span class="line">	{@debug count}</span>
<span class="line">{/if}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+u+`" alt=""></p></li></ul><h2 id="_4-4-绑定相关" tabindex="-1"><a class="header-anchor" href="#_4-4-绑定相关"><span>4.4 绑定相关</span></a></h2><h3 id="_4-4-1-bind-双向绑定" tabindex="-1"><a class="header-anchor" href="#_4-4-1-bind-双向绑定"><span>4.4.1 bind:双向绑定</span></a></h3><ul><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	let name = $state(&#39;&#39;);</span>
<span class="line">	let age = $state(18);</span>
<span class="line">	let checked = $state(false);</span>
<span class="line">	let selected = $state(&#39;A&#39;);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 文本输入 --&gt;</span>
<span class="line">&lt;input bind:value={name} placeholder=&quot;输入姓名&quot; /&gt;</span>
<span class="line">&lt;p&gt;姓名: {name}&lt;/p&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 数字输入 --&gt;</span>
<span class="line">&lt;input type=&quot;number&quot; bind:value={age} /&gt;</span>
<span class="line">&lt;p&gt;年龄: {age}&lt;/p&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 复选框 --&gt;</span>
<span class="line">&lt;label&gt;</span>
<span class="line">	&lt;input type=&quot;checkbox&quot; bind:checked={checked} /&gt;</span>
<span class="line">	是否同意</span>
<span class="line">&lt;/label&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 单选按钮 --&gt;</span>
<span class="line">&lt;label&gt;</span>
<span class="line">	&lt;input type=&quot;radio&quot; bind:group={selected} value=&quot;A&quot; /&gt; 选项A</span>
<span class="line">&lt;/label&gt;</span>
<span class="line">&lt;label&gt;</span>
<span class="line">	&lt;input type=&quot;radio&quot; bind:group={selected} value=&quot;B&quot; /&gt; 选项B</span>
<span class="line">&lt;/label&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 下拉选择 --&gt;</span>
<span class="line">&lt;select bind:value={selected}&gt;</span>
<span class="line">	&lt;option value=&quot;A&quot;&gt;A&lt;/option&gt;</span>
<span class="line">	&lt;option value=&quot;B&quot;&gt;B&lt;/option&gt;</span>
<span class="line">&lt;/select&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+o+`" alt=""></p></li></ul><h3 id="_4-4-2-use-动作" tabindex="-1"><a class="header-anchor" href="#_4-4-2-use-动作"><span>4.4.2 <code>use:</code>动作</span></a></h3><ul><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	// 自动聚焦动作</span>
<span class="line">	function autoFocus(node) {</span>
<span class="line">		node.focus();</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	// 点击外部关闭动作</span>
<span class="line">	function clickOutside(node, callback) {</span>
<span class="line">		function handleClick(event) {</span>
<span class="line">			if (!node.contains(event.target)) {</span>
<span class="line">				callback();</span>
<span class="line">			}</span>
<span class="line">		}</span>
<span class="line"></span>
<span class="line">		document.addEventListener(&#39;click&#39;, handleClick, true);</span>
<span class="line"></span>
<span class="line">		return {</span>
<span class="line">			destroy() {</span>
<span class="line">				document.removeEventListener(&#39;click&#39;, handleClick, true);</span>
<span class="line">			}</span>
<span class="line">		};</span>
<span class="line">	}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 自动聚焦 --&gt;</span>
<span class="line">&lt;input use:autoFocus placeholder=&quot;自动获得焦点&quot; /&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 点击外部关闭 --&gt;</span>
<span class="line">&lt;div use:clickOutside={() =&gt; console.log(&#39;点击了外部&#39;)}&gt;</span>
<span class="line">	点击这个区域外部</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+m+`" alt=""></p></li></ul><h3 id="_4-4-3-transition-过渡" tabindex="-1"><a class="header-anchor" href="#_4-4-3-transition-过渡"><span>4.4.3 <code>transition:</code>过渡</span></a></h3><ul><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	import { fade, fly } from &#39;svelte/transition&#39;;</span>
<span class="line">	let visible = $state(true);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button onclick={() =&gt; visible = !visible}&gt;</span>
<span class="line">	{visible ? &#39;隐藏&#39; : &#39;显示&#39;}</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">{#if visible}</span>
<span class="line">	&lt;!-- 淡入淡出 --&gt;</span>
<span class="line">	&lt;div transition:fade&gt;淡入淡出效果&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">	&lt;!-- 飞入飞出 --&gt;</span>
<span class="line">	&lt;div transition:fly={{ y: 20 }}&gt;飞入飞出效果&lt;/div&gt;</span>
<span class="line">{/if}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+b+`" alt=""></p></li></ul><h3 id="_4-4-4-in-和-out-进入-退出" tabindex="-1"><a class="header-anchor" href="#_4-4-4-in-和-out-进入-退出"><span>4.4.4 <code>in:</code>和 <code>out:</code>进入/退出</span></a></h3><ul><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	import { slide, scale } from &#39;svelte/transition&#39;;</span>
<span class="line">	let show = $state(true);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button onclick={() =&gt; show = !show}&gt;</span>
<span class="line">	{show ? &#39;隐藏&#39; : &#39;显示&#39;}</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">{#if show}</span>
<span class="line">	&lt;!-- 进入时滑动，退出时缩放 --&gt;</span>
<span class="line">	&lt;div in:slide out:scale&gt;进入退出动画&lt;/div&gt;</span>
<span class="line">{/if}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+g+`" alt=""></p></li></ul><h3 id="_4-4-5-animate-动画" tabindex="-1"><a class="header-anchor" href="#_4-4-5-animate-动画"><span>4.4.5 <code>animate:</code>动画</span></a></h3><ul><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">	import { flip } from &#39;svelte/animate&#39;;</span>
<span class="line">	let items = $state([1, 2, 3]);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button onclick={() =&gt; items = [...items].reverse()}&gt;</span>
<span class="line">	反转顺序</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">&lt;div&gt;</span>
<span class="line">	{#each items as item (item)} &lt;!-- 关键：提供 key --&gt;</span>
<span class="line">		&lt;div animate:flip={{ duration: 300 }}&gt;</span>
<span class="line">			{item}</span>
<span class="line">		&lt;/div&gt;</span>
<span class="line">	{/each}</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;</span>
<span class="line">	div &gt; div {</span>
<span class="line">		padding: 8px;</span>
<span class="line">		margin: 4px 0;</span>
<span class="line">		background: #f0f0f0;</span>
<span class="line">		border: 1px solid #ccc;</span>
<span class="line">	}</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+h+`" alt=""></p></li></ul><h3 id="_4-4-6-style-动态样式" tabindex="-1"><a class="header-anchor" href="#_4-4-6-style-动态样式"><span>4.4.6 <code>style:</code>动态样式</span></a></h3><ul><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let isRed = $state(false);</span>
<span class="line">  let fontSize = $state(16);</span>
<span class="line">  let rotate = $state(0);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 切换样式 --&gt;</span>
<span class="line">&lt;label&gt;</span>
<span class="line">  &lt;input type=&quot;checkbox&quot; bind:checked={isRed} /&gt;</span>
<span class="line">  红色文本</span>
<span class="line">&lt;/label&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 控制大小 --&gt;</span>
<span class="line">&lt;input type=&quot;range&quot; bind:value={fontSize} min=&quot;12&quot; max=&quot;32&quot; /&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 控制旋转 --&gt;</span>
<span class="line">&lt;input type=&quot;range&quot; bind:value={rotate} min=&quot;0&quot; max=&quot;360&quot; /&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 应用动态样式 --&gt;</span>
<span class="line">&lt;div</span>
<span class="line">  style:color={isRed ? &#39;red&#39; : &#39;black&#39;}</span>
<span class="line">  style:font-size={\`\${fontSize}px\`}</span>
<span class="line">  style:transform={\`rotate(\${rotate}deg)\`}</span>
<span class="line">&gt;</span>
<span class="line">  动态样式文本</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+f+`" alt=""></p></li></ul><h3 id="_4-4-7-class-动态类名" tabindex="-1"><a class="header-anchor" href="#_4-4-7-class-动态类名"><span>4.4.7 <code>class:</code>动态类名</span></a></h3><ul><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  let isActive = $state(false);</span>
<span class="line">  let isError = $state(false);</span>
<span class="line">  let isLarge = $state(false);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 控制类名 --&gt;</span>
<span class="line">&lt;label&gt;</span>
<span class="line">  &lt;input type=&quot;checkbox&quot; bind:checked={isActive} /&gt; 激活</span>
<span class="line">&lt;/label&gt;</span>
<span class="line">&lt;label&gt;</span>
<span class="line">  &lt;input type=&quot;checkbox&quot; bind:checked={isError} /&gt; 错误</span>
<span class="line">&lt;/label&gt;</span>
<span class="line">&lt;label&gt;</span>
<span class="line">  &lt;input type=&quot;checkbox&quot; bind:checked={isLarge} /&gt; 大号</span>
<span class="line">&lt;/label&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 应用动态类名 --&gt;</span>
<span class="line">&lt;div</span>
<span class="line">  class:active={isActive}</span>
<span class="line">  class:error={isError}</span>
<span class="line">  class:large={isLarge}</span>
<span class="line">&gt;</span>
<span class="line">  动态类名示例</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;</span>
<span class="line">  .active { background: blue; color: white; }</span>
<span class="line">  .error { border: 2px solid red; }</span>
<span class="line">  .large { font-size: 24px; padding: 20px; }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+_+`" alt=""></p></li></ul><h3 id="_4-4-8-await-异步等待" tabindex="-1"><a class="header-anchor" href="#_4-4-8-await-异步等待"><span>4.4.8 <code>await:</code>异步等待</span></a></h3><ul><li><p>代码示例</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  async function fetchData() {</span>
<span class="line">    await new Promise(resolve =&gt; setTimeout(resolve, 1000));</span>
<span class="line">    return { name: &#39;张三&#39;, age: 25 };</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  // 使用 $state 声明响应式 promise</span>
<span class="line">  let promise = $state(null);</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button onclick={() =&gt; promise = fetchData()}&gt;</span>
<span class="line">  加载数据</span>
<span class="line">&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">{#if promise}</span>
<span class="line">  {#await promise}</span>
<span class="line">    &lt;p&gt;加载中...&lt;/p&gt;</span>
<span class="line">  {:then data}</span>
<span class="line">    &lt;!--  现在 data 是有效的 --&gt;</span>
<span class="line">    &lt;p&gt;姓名: {data.name}, 年龄: {data.age}&lt;/p&gt;</span>
<span class="line">  {:catch error}</span>
<span class="line">    &lt;p&gt;加载失败: {error.message || &#39;未知错误&#39;}&lt;/p&gt;</span>
<span class="line">  {/await}</span>
<span class="line">{:else}</span>
<span class="line">  &lt;p&gt;点击按钮加载数据&lt;/p&gt;</span>
<span class="line">{/if}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+k+'" alt=""></p></li></ul>',39)])])}const $=n(y,[["render",x]]),S=JSON.parse('{"path":"/framework/svelte/base5/04.html","title":"四、模板语法","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1772001712000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":3,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"db6d183fe4bedd50d548f87979aa938388a2e519","time":1772001712000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"},{"hash":"e5f04647cc7df4132971a1739b4c5befd42a30c6","time":1772000730000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"},{"hash":"6456dcf1fd45f82d71ce5dfe3954468d5bf78145","time":1771996569000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"}]},"filePathRelative":"framework/svelte/base5/04.md"}');export{$ as comp,S as data};
