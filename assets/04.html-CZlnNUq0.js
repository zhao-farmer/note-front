import{ar as n,as as a,at as l,au as e}from"./app-5nod3Nrs.js";const i="/note-front/framework/svelte/base4/017.png",p="/note-front/framework/svelte/base4/018.png",c={};function t(d,s){return e(),a("div",null,[...s[0]||(s[0]=[l(`<h1 id="四、其他相关" tabindex="-1"><a class="header-anchor" href="#四、其他相关"><span>四、其他相关</span></a></h1><h2 id="_4-1-声明周期钩子" tabindex="-1"><a class="header-anchor" href="#_4-1-声明周期钩子"><span>4.1 声明周期钩子</span></a></h2><h3 id="_4-1-1-核心生命周期钩子" tabindex="-1"><a class="header-anchor" href="#_4-1-1-核心生命周期钩子"><span>4.1.1 核心生命周期钩子</span></a></h3><table><thead><tr><th>钩子</th><th>调用时机</th><th>典型用途</th></tr></thead><tbody><tr><td><code>onMount</code></td><td>组件 <strong>挂载到 DOM 后</strong></td><td>发起 API 请求、操作 DOM、启动定时器</td></tr><tr><td><code>beforeUpdate</code></td><td><strong>DOM 更新前</strong>（响应式变量已变）</td><td>读取 DOM 状态（如滚动位置）</td></tr><tr><td><code>afterUpdate</code></td><td><strong>DOM 更新后</strong></td><td>与 <code>beforeUpdate</code> 配合做动画、日志</td></tr><tr><td><code>onDestroy</code></td><td>组件 <strong>销毁前</strong></td><td>清理定时器、取消订阅、移除事件监听</td></tr><tr><td><code>onStart</code>（服务端）</td><td>SSR 时组件创建</td><td>仅用于 SvelteKit 服务端逻辑</td></tr><tr><td><code>tick</code>（工具函数）</td><td><strong>等待当前更新完成</strong></td><td>强制同步 DOM 状态</td></tr></tbody></table><blockquote><p><strong>重点掌握前 4 个</strong>，<code>tick</code> 是辅助工具。</p></blockquote><h3 id="_4-1-2-详细用法-示例" tabindex="-1"><a class="header-anchor" href="#_4-1-2-详细用法-示例"><span>4.1.2 详细用法 + 示例</span></a></h3><ol><li><p><code>onMount</code> —— 挂载后执行（最常用）</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { onMount } from &#39;svelte&#39;;</span>
<span class="line"></span>
<span class="line">  let data = null;</span>
<span class="line">  let error = null;</span>
<span class="line"></span>
<span class="line">  onMount(async () =&gt; {</span>
<span class="line">    //  发起 API 请求</span>
<span class="line">    try {</span>
<span class="line">      const res = await fetch(&#39;/api/user&#39;);</span>
<span class="line">      data = await res.json();</span>
<span class="line">    } catch (err) {</span>
<span class="line">      error = err.message;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    //  操作 DOM（此时元素已存在）</span>
<span class="line">    const el = document.querySelector(&#39;#my-element&#39;);</span>
<span class="line">    el.focus();</span>
<span class="line"></span>
<span class="line">    //  启动定时器</span>
<span class="line">    const interval = setInterval(() =&gt; {</span>
<span class="line">      console.log(&#39;Tick&#39;);</span>
<span class="line">    }, 1000);</span>
<span class="line"></span>
<span class="line">    //  不要在这里返回清理函数！用 onDestroy</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">{#if error}</span>
<span class="line">  &lt;p&gt;错误：{error}&lt;/p&gt;</span>
<span class="line">{:else if data}</span>
<span class="line">  &lt;p&gt;欢迎，{data.name}！&lt;/p&gt;</span>
<span class="line">{/if}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong>：</p><ul><li><code>onMount</code> <strong>只在浏览器中运行</strong>（SSR 时跳过）</li><li>适合所有<strong>需要 DOM 或浏览器 API</strong> 的操作</li></ul></blockquote></li><li><p><code>onDestroy</code> —— 销毁前清理（防内存泄漏！）</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { onDestroy } from &#39;svelte&#39;;</span>
<span class="line"></span>
<span class="line">  let interval;</span>
<span class="line"></span>
<span class="line">  // 启动定时器</span>
<span class="line">  interval = setInterval(() =&gt; {</span>
<span class="line">    console.log(&#39;Running...&#39;);</span>
<span class="line">  }, 1000);</span>
<span class="line"></span>
<span class="line">  // 清理资源</span>
<span class="line">  onDestroy(() =&gt; {</span>
<span class="line">    clearInterval(interval);</span>
<span class="line">    console.log(&#39;组件已销毁，定时器清除&#39;);</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;p&gt;查看控制台日志&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>必须清理的资源</strong>：</p><ul><li><code>setInterval</code> / <code>setTimeout</code></li><li>事件监听器（<code>window.addEventListener</code>）</li><li>第三方库实例（如地图、WebSocket）</li><li>手动订阅的 Store（如果没用 <code>$</code> 语法）</li></ul></li><li><p><code>beforeUpdate</code> + <code>afterUpdate</code> —— 响应式更新前后</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { beforeUpdate, afterUpdate } from &#39;svelte&#39;;</span>
<span class="line"></span>
<span class="line">  let count = 0;</span>
<span class="line">  let prevCount = 0;</span>
<span class="line"></span>
<span class="line">  // 更新前：保存旧值</span>
<span class="line">  beforeUpdate(() =&gt; {</span>
<span class="line">    prevCount = count;</span>
<span class="line">    console.log(\`即将从 \${prevCount} 变为 \${count}\`);</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  // 更新后：操作新 DOM</span>
<span class="line">  afterUpdate(() =&gt; {</span>
<span class="line">    console.log(\`已更新为 \${count}\`);</span>
<span class="line">    // 例如：触发动画</span>
<span class="line">    document.body.style.backgroundColor = </span>
<span class="line">      count % 2 === 0 ? &#39;#f0f0f0&#39; : &#39;#e0e0e0&#39;;</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  function increment() {</span>
<span class="line">    count += 1; // 触发更新</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button on:click={increment}&gt;Count: {count}&lt;/button&gt;</span>
<span class="line">&lt;p&gt;上次值：{prevCount}&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>典型场景：</p><ul><li>记录滚动位置（<code>beforeUpdate</code> 读，<code>afterUpdate</code> 恢复）</li><li>自定义过渡动画</li><li>性能监控（记录渲染时间）</li></ul></blockquote></li><li><p><code>tick</code> —— 等待当前更新完成（同步 DOM）</p><p>不是钩子，而是<strong>工具函数</strong>，返回 Promise。</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { tick } from &#39;svelte&#39;;</span>
<span class="line"></span>
<span class="line">  let visible = false;</span>
<span class="line"></span>
<span class="line">  async function showWithHeight() {</span>
<span class="line">    visible = true;</span>
<span class="line"></span>
<span class="line">    // 此时 DOM 还未更新！</span>
<span class="line">    // const el = document.getElementById(&#39;box&#39;);</span>
<span class="line">    // console.log(el.offsetHeight); // 0!</span>
<span class="line"></span>
<span class="line">    // 等待 DOM 更新</span>
<span class="line">    await tick();</span>
<span class="line"></span>
<span class="line">    const el = document.getElementById(&#39;box&#39;);</span>
<span class="line">    console.log(&#39;元素高度：&#39;, el.offsetHeight); // 正确值</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;button on:click={showWithHeight}&gt;显示并获取高度&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">{#if visible}</span>
<span class="line">  &lt;div id=&quot;box&quot; style=&quot;height: 100px; background: lightblue;&quot;&gt;</span>
<span class="line">    我是盒子</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">{/if}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>适用场景：</p><ul><li>动态测量元素尺寸</li><li>确保 DOM 已反映最新状态后再操作</li></ul></blockquote></li></ol><h3 id="_4-1-3-案例-计时器" tabindex="-1"><a class="header-anchor" href="#_4-1-3-案例-计时器"><span>4.1.3 案例：计时器</span></a></h3><ol><li><p>代码示例 <code>Timer.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;!-- Timer.svelte --&gt;</span>
<span class="line">&lt;script&gt;</span>
<span class="line">  // 导入 Svelte 4 生命周期钩子</span>
<span class="line">  import { onMount, onDestroy, beforeUpdate, afterUpdate } from &#39;svelte&#39;;</span>
<span class="line"></span>
<span class="line">  // 接收外部传入的倒计时总时长（秒）</span>
<span class="line">  export let duration = 60;</span>
<span class="line"></span>
<span class="line">  // 响应式状态</span>
<span class="line">  let timeLeft = duration; // 初始剩余时间</span>
<span class="line">  let isActive = false;    // 是否正在倒计时</span>
<span class="line">  let timerId = null;      // 定时器 ID</span>
<span class="line"></span>
<span class="line">  // ===== 1. onMount：组件挂载后执行（可选初始化）=====</span>
<span class="line">  onMount(() =&gt; {</span>
<span class="line">    console.log(&#39;[onMount] 组件已挂载到 DOM&#39;);</span>
<span class="line">    // 例如：从 localStorage 恢复上次时间（可选）</span>
<span class="line">    // const saved = localStorage.getItem(&#39;timer-timeLeft&#39;);</span>
<span class="line">    // if (saved) timeLeft = parseInt(saved);</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  // ===== 2. onDestroy：组件销毁前清理资源 =====</span>
<span class="line">  onDestroy(() =&gt; {</span>
<span class="line">    console.log(&#39; [onDestroy] 组件即将销毁，清理定时器&#39;);</span>
<span class="line">    if (timerId) {</span>
<span class="line">      clearInterval(timerId);</span>
<span class="line">      timerId = null;</span>
<span class="line">    }</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  // ===== 3. beforeUpdate：DOM 更新前调用 =====</span>
<span class="line">  beforeUpdate(() =&gt; {</span>
<span class="line">    console.log(\`[beforeUpdate] 即将更新 timeLeft: \${timeLeft}\`);</span>
<span class="line">    // 注意：此时 timeLeft 已是新值（因为 Svelte 在赋值后才触发更新）</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  // ===== 4. afterUpdate：DOM 更新后调用 =====</span>
<span class="line">  afterUpdate(() =&gt; {</span>
<span class="line">    console.log(\`[afterUpdate] DOM 已更新，当前 timeLeft: \${timeLeft}\`);</span>
<span class="line">    // 可用于触发动画、日志、第三方库同步等</span>
<span class="line">  });</span>
<span class="line"></span>
<span class="line">  // 启动/暂停倒计时</span>
<span class="line">  function toggle() {</span>
<span class="line">    if (isActive) {</span>
<span class="line">      // 暂停</span>
<span class="line">      clearInterval(timerId);</span>
<span class="line">      timerId = null;</span>
<span class="line">    } else {</span>
<span class="line">      // 开始</span>
<span class="line">      timerId = setInterval(() =&gt; {</span>
<span class="line">        timeLeft -= 1;</span>
<span class="line">        if (timeLeft &lt;= 0) {</span>
<span class="line">          clearInterval(timerId);</span>
<span class="line">          timerId = null;</span>
<span class="line">          isActive = false;</span>
<span class="line">          console.log(&#39;倒计时结束！&#39;);</span>
<span class="line">        }</span>
<span class="line">      }, 1000);</span>
<span class="line">    }</span>
<span class="line">    isActive = !isActive;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  // 重置倒计时</span>
<span class="line">  function reset() {</span>
<span class="line">    if (timerId) {</span>
<span class="line">      clearInterval(timerId);</span>
<span class="line">      timerId = null;</span>
<span class="line">    }</span>
<span class="line">    timeLeft = duration;</span>
<span class="line">    isActive = false;</span>
<span class="line">  }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- UI --&gt;</span>
<span class="line">&lt;div class=&quot;timer&quot;&gt;</span>
<span class="line">  &lt;h2&gt;倒计时: {timeLeft}s&lt;/h2&gt;</span>
<span class="line">  &lt;div class=&quot;controls&quot;&gt;</span>
<span class="line">    &lt;button on:click={toggle}&gt;</span>
<span class="line">      {isActive ? &#39;暂停&#39; : &#39;开始&#39;}</span>
<span class="line">    &lt;/button&gt;</span>
<span class="line">    &lt;button on:click={reset}&gt;重置&lt;/button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;</span>
<span class="line">  .timer {</span>
<span class="line">    padding: 1.5rem;</span>
<span class="line">    border: 1px solid #ddd;</span>
<span class="line">    border-radius: 12px;</span>
<span class="line">    text-align: center;</span>
<span class="line">    max-width: 300px;</span>
<span class="line">    margin: 2rem auto;</span>
<span class="line">    font-family: Arial, sans-serif;</span>
<span class="line">    box-shadow: 0 4px 8px rgba(0,0,0,0.1);</span>
<span class="line">  }</span>
<span class="line">  h2 {</span>
<span class="line">    margin: 0 0 1rem;</span>
<span class="line">    color: #333;</span>
<span class="line">  }</span>
<span class="line">  .controls {</span>
<span class="line">    display: flex;</span>
<span class="line">    justify-content: center;</span>
<span class="line">    gap: 0.75rem;</span>
<span class="line">  }</span>
<span class="line">  button {</span>
<span class="line">    padding: 0.5rem 1rem;</span>
<span class="line">    border: none;</span>
<span class="line">    border-radius: 6px;</span>
<span class="line">    background: #007bff;</span>
<span class="line">    color: white;</span>
<span class="line">    cursor: pointer;</span>
<span class="line">    font-size: 1rem;</span>
<span class="line">  }</span>
<span class="line">  button:hover {</span>
<span class="line">    background: #0056b3;</span>
<span class="line">  }</span>
<span class="line">  button:disabled {</span>
<span class="line">    background: #ccc;</span>
<span class="line">    cursor: not-allowed;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+i+`" alt=""></p></li></ol><h2 id="_4-2-样式作用域与css变量" tabindex="-1"><a class="header-anchor" href="#_4-2-样式作用域与css变量"><span>4.2 样式作用域与Css变量</span></a></h2><h3 id="_4-2-1-作用域规则详解" tabindex="-1"><a class="header-anchor" href="#_4-2-1-作用域规则详解"><span>4.2.1 作用域规则详解</span></a></h3><ol><li><p><strong>普通类/标签选择器 → 自动作用域化</strong></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;style&gt;</span>
<span class="line">  p { color: red; }          /* → p.svelte-hash */</span>
<span class="line">  .box { padding: 10px; }    /* → .box.svelte-hash */</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>全局样式 → 使用 <code>:global()</code></strong></p><p>如果你<strong>故意想定义全局样式</strong>（如重置、第三方库兼容），用 <code>:global()</code>：</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;style&gt;</span>
<span class="line">  /* 全局：影响整个应用 */</span>
<span class="line">  :global(body) {</span>
<span class="line">    margin: 0;</span>
<span class="line">    font-family: Arial;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /* 全局类：可在其他组件使用 */</span>
<span class="line">  :global(.alert) {</span>
<span class="line">    background: yellow;</span>
<span class="line">    padding: 8px;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  /* 仅当前组件内的 .modal 是全局的 */</span>
<span class="line">  .container :global(.modal) {</span>
<span class="line">    position: fixed;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>谨慎使用 <code>:global()</code>，避免样式冲突。</p></blockquote></li><li><p><strong>后代选择器 → 自动作用域到组件内</strong></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;style&gt;</span>
<span class="line">.card p { font-size: 14px; }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译为：<code>.card.svelte-hash p.svelte-hash</code></p><p>只匹配<strong>当前组件内</strong> <code>.card</code> 下的 <code>&lt;p&gt;</code>。</p></li></ol><h3 id="_4-2-2-作用域示例" tabindex="-1"><a class="header-anchor" href="#_4-2-2-作用域示例"><span>4.2.2 作用域示例</span></a></h3><ol><li><p>代码示例</p><ul><li><p>index.html</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code class="language-html"><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/svg+xml<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/vite.svg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Svelte 4 项目<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">   <span class="token comment">&lt;!-- 全局 CSS 变量：设计系统基础 --&gt;</span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css"></span>
<span class="line">      <span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">--color-primary</span><span class="token punctuation">:</span> #3b82f6<span class="token punctuation">;</span>   <span class="token comment">/* 蓝色 */</span></span>
<span class="line">          <span class="token property">--color-success</span><span class="token punctuation">:</span> #10b981<span class="token punctuation">;</span>   <span class="token comment">/* 绿色 */</span></span>
<span class="line">          <span class="token property">--color-bg</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span></span>
<span class="line">          <span class="token property">--color-text</span><span class="token punctuation">:</span> #1f2937<span class="token punctuation">;</span></span>
<span class="line">          <span class="token property">--space-sm</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span></span>
<span class="line">          <span class="token property">--space-md</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span></span>
<span class="line">          <span class="token property">--space-lg</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/src/main.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>src/App.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Card from &#39;./lib/Card.svelte&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;main class=&quot;global-card&quot;&gt;</span>
<span class="line">  &lt;h1&gt;Svelte 4: 样式作用域 + CSS 变量演示&lt;/h1&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 卡片 1：使用默认样式（蓝色主题） --&gt;</span>
<span class="line">  &lt;Card className=&quot;global-card&quot;&gt;</span>
<span class="line">    &lt;h2&gt;默认卡片&lt;/h2&gt;</span>
<span class="line">    &lt;p&gt;使用全局 --color-primary 作为文字色（通过 slot 内容继承）&lt;/p&gt;</span>
<span class="line">    &lt;p style=&quot;color: var(--color-primary); margin-top: 0.5rem;&quot;&gt;</span>
<span class="line">      这段文字是蓝色的</span>
<span class="line">    &lt;/p&gt;</span>
<span class="line">  &lt;/Card&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 卡片 2：通过 style 覆盖 CSS 变量 --&gt;</span>
<span class="line">  &lt;Card </span>
<span class="line">    style=&quot;</span>
<span class="line">      --card-bg: #f0fdf4; </span>
<span class="line">      --card-radius: 16px;</span>
<span class="line">      --card-shadow: none;</span>
<span class="line">    &quot;</span>
<span class="line">  &gt;</span>
<span class="line">    &lt;h2&gt;自定义卡片&lt;/h2&gt;</span>
<span class="line">    &lt;p&gt;背景浅绿、大圆角、无阴影&lt;/p&gt;</span>
<span class="line">    &lt;p style=&quot;color: var(--color-success);&quot;&gt;</span>
<span class="line">      这段文字是绿色的</span>
<span class="line">    &lt;/p&gt;</span>
<span class="line">  &lt;/Card&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 卡片 3：另一个实例，验证作用域隔离 --&gt;</span>
<span class="line">  &lt;Card </span>
<span class="line">    className=&quot;global-card&quot;</span>
<span class="line">    style=&quot;--card-padding: 2rem; --card-radius: 4px;&quot;&gt;</span>
<span class="line">    &lt;p&gt;内边距更大，圆角更小&lt;/p&gt;</span>
<span class="line">  &lt;/Card&gt;</span>
<span class="line">&lt;/main&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;</span>
<span class="line">  main {</span>
<span class="line">    max-width: 600px;</span>
<span class="line">    margin: 2rem auto;</span>
<span class="line">    padding: 0 var(--space-md);</span>
<span class="line">    color: var(--color-text);</span>
<span class="line">    font-family: system-ui, sans-serif;</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  h1 {</span>
<span class="line">    text-align: center;</span>
<span class="line">    margin-bottom: 2rem;</span>
<span class="line">    color: var(--color-primary);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  h2 {</span>
<span class="line">    margin-top: 0;</span>
<span class="line">    color: var(--color-text);</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>src/lib/Card.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  // 可选：接收 class 透传（非必须）</span>
<span class="line">  export let className = &#39;&#39;;</span>
<span class="line">  export let style = &#39;&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;div class=&quot;card {className}&quot; style={style}&gt;</span>
<span class="line">  &lt;slot /&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;</span>
<span class="line">  /*  组件级 CSS 变量（带默认值） */</span>
<span class="line">  .card {</span>
<span class="line">    /* 默认值来自全局设计系统 */</span>
<span class="line">    --card-bg: var(--color-bg);</span>
<span class="line">    --card-color: var(--color-text);</span>
<span class="line">    --card-padding: var(--space-md);</span>
<span class="line">    --card-radius: 8px;</span>
<span class="line">    --card-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);</span>
<span class="line"></span>
<span class="line">    /* 使用变量 */</span>
<span class="line">    background: var(--card-bg);</span>
<span class="line">    color: var(--card-color);</span>
<span class="line">    padding: var(--card-padding);</span>
<span class="line">    border-radius: var(--card-radius);</span>
<span class="line">    box-shadow: var(--card-shadow);</span>
<span class="line">    margin-bottom: var(--space-md);</span>
<span class="line">    transition: box-shadow 0.2s ease;</span>
<span class="line"></span>
<span class="line">    /* 作用域内悬停效果 */</span>
<span class="line">    &amp;:hover {</span>
<span class="line">      --card-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">  /* 使用 :global 修饰符 - 这个类名不会被作用域化 */</span>
<span class="line">  :global(.global-card) {</span>
<span class="line">    border: 2px dashed #ccc;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>运行结果</p><p><img src="`+p+'" alt=""></p></li></ol>',14)])])}const v=n(c,[["render",t]]),o=JSON.parse('{"path":"/framework/svelte/base4/04.html","title":"四、其他相关","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1772001712000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":2,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"db6d183fe4bedd50d548f87979aa938388a2e519","time":1772001712000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"},{"hash":"6456dcf1fd45f82d71ce5dfe3954468d5bf78145","time":1771996569000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"}]},"filePathRelative":"framework/svelte/base4/04.md"}');export{v as comp,o as data};
