import{ar as n,as as a,at as e,au as l}from"./app-5nod3Nrs.js";const i={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="五、路由-svelte-spa-router" tabindex="-1"><a class="header-anchor" href="#五、路由-svelte-spa-router"><span>五、路由 svelte-spa-router</span></a></h1><h2 id="_5-1-介绍与安装" tabindex="-1"><a class="header-anchor" href="#_5-1-介绍与安装"><span>5.1 介绍与安装</span></a></h2><ol><li><p>svelte-spa-router是什么</p><p>svelte-spa-router 是一个为 Svelte 单页应用（SPA） 设计的轻量级客户端路由库。</p></li><li><p>安装插件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">pnpm install svelte-spa-router</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="_5-2-基础使用" tabindex="-1"><a class="header-anchor" href="#_5-2-基础使用"><span>5.2 基础使用</span></a></h2><ol><li><p>创建路由组件</p><ul><li><p><code>pages/About.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;h2&gt;这是about页面&lt;/h2&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><code>pages/Home.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;h2&gt;这是home页面&lt;/h2&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><code>pages/Profile.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { location} from &#39;svelte-spa-router&#39;</span>
<span class="line"></span>
<span class="line">    $: console.log(&#39;当前路由:&#39;, $location)</span>
<span class="line"></span>
<span class="line">  // 获取路由参数</span>
<span class="line">  let userId = $location.split(&#39;/&#39;)[2];</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;h1&gt;用户页面&lt;/h1&gt;</span>
<span class="line">&lt;p&gt;用户ID: {userId}&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>pages/User.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { querystring } from &#39;svelte-spa-router&#39;</span>
<span class="line"></span>
<span class="line">    $: console.log(&#39;查询参数:&#39;, $querystring)</span>
<span class="line"></span>
<span class="line">  // 获取路由参数</span>
<span class="line">  let params = $querystring.split(&#39;=&#39;)[1];</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;h1&gt;个人信息页&lt;/h1&gt;</span>
<span class="line">&lt;p&gt;传入参数: {params}&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>pages/NotFound.svelte</code></p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;h2&gt;404&lt;/h2&gt;</span>
<span class="line">&lt;p&gt;页面未找到&lt;/p&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>创建路由文件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&#39;./pages/Home.svelte&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&#39;./pages/About.svelte&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">&#39;./pages/User.svelte&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> NotFound <span class="token keyword">from</span> <span class="token string">&#39;./pages/NotFound.svelte&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Profile <span class="token keyword">from</span> <span class="token string">&#39;./pages/Profile.svelte&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 路由对象：正则或字符串路径 → 组件</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> Home<span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&#39;/about&#39;</span><span class="token operator">:</span> About<span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&#39;/user/:id&#39;</span><span class="token operator">:</span> User<span class="token punctuation">,</span> <span class="token comment">// 动态参数</span></span>
<span class="line">    <span class="token string-property property">&#39;/profile&#39;</span><span class="token operator">:</span> Profile<span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&#39;*&#39;</span><span class="token operator">:</span> NotFound <span class="token comment">// 通配符，匹配所有未定义路径</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>主页面使用 App.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import Router from &#39;svelte-spa-router&#39;;</span>
<span class="line">  import { routes } from &#39;./routes.js&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;main&gt;</span>
<span class="line">  &lt;!-- 导航 --&gt;</span>
<span class="line">  &lt;nav&gt;</span>
<span class="line">    &lt;a href=&quot;/&quot;&gt;首页&lt;/a&gt;</span>
<span class="line">    &lt;a href=&quot;/about&quot;&gt;关于&lt;/a&gt;</span>
<span class="line">    &lt;a href=&quot;/user/123&quot;&gt;用户123&lt;/a&gt;</span>
<span class="line">    &lt;a href=&quot;/profile?userId=123&quot;&gt;个人信息&lt;/a&gt;</span>
<span class="line">  &lt;/nav&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 路由视图 --&gt;</span>
<span class="line">  &lt;Router {routes} /&gt;</span>
<span class="line">&lt;/main&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_5-3-高级功能" tabindex="-1"><a class="header-anchor" href="#_5-3-高级功能"><span>5.3 高级功能</span></a></h2><ol><li><p>编程式路由home改造</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import { push, pop, replace } from &#39;svelte-spa-router&#39;</span>
<span class="line"></span>
<span class="line">    // 跳转页面</span>
<span class="line">    function navigateToAbout() {</span>
<span class="line">        push(&#39;/about&#39;)</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 替换页面</span>
<span class="line">    function replaceCurrent() {</span>
<span class="line">        replace(&#39;/about&#39;)</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 返回上一页</span>
<span class="line">    function goBack() {</span>
<span class="line">        pop()</span>
<span class="line">    }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;h2&gt;这是home页面&lt;/h2&gt;</span>
<span class="line"></span>
<span class="line">&lt;button on:click={navigateToAbout}&gt;去关于页面&lt;/button&gt;</span>
<span class="line">&lt;button on:click={goBack}&gt;返回&lt;/button&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>获取当前路由信息</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">    import { location, querystring } from &#39;svelte-spa-router&#39;</span>
<span class="line">    </span>
<span class="line">    // 监听路由变化</span>
<span class="line">    $: console.log(&#39;当前路由:&#39;, $location)</span>
<span class="line">    $: console.log(&#39;查询参数:&#39;, $querystring)</span>
<span class="line">    </span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>嵌套路由</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token comment">// routes.js</span></span>
<span class="line"><span class="token keyword">import</span> Parent <span class="token keyword">from</span> <span class="token string">&#39;./Parent.svelte&#39;</span></span>
<span class="line"><span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&#39;./Child.svelte&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">&#39;/parent&#39;</span><span class="token operator">:</span> Parent<span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">&#39;/parent/child&#39;</span><span class="token operator">:</span> Child</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_5-4-路由守卫" tabindex="-1"><a class="header-anchor" href="#_5-4-路由守卫"><span>5.4 路由守卫</span></a></h2><ol><li><p>创建一个受控的导航函数（替代直接 link()）</p><p>我们不直接使用 link()，而是封装一个带守卫逻辑的 navigate() 函数。</p><p>src/lib/router.js</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code class="language-javascript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> push<span class="token punctuation">,</span> replace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;svelte-spa-router&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getAuthStatus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./auth&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 假设你有认证模块</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 白名单：无需登录的路由</span></span>
<span class="line"><span class="token keyword">const</span> publicRoutes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> isAuthenticated <span class="token operator">=</span> <span class="token function">getAuthStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 true/false</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 检查是否需要守卫</span></span>
<span class="line">  <span class="token keyword">const</span> isPublic <span class="token operator">=</span> publicRoutes<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=&gt;</span> </span>
<span class="line">    path <span class="token operator">===</span> route <span class="token operator">||</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> path<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isAuthenticated <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isPublic<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;未授权访问，重定向到登录页&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 重定向到登录页，并记录原路径（可选）</span></span>
<span class="line">    <span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 允许跳转</span></span>
<span class="line">  <span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以扩展此逻辑支持角色权限、异步验证等。</p></li><li><p>在 App 中使用自定义 navigate</p><p>src/App.svelte</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { Router } from &#39;svelte-spa-router&#39;;</span>
<span class="line">  import { routes } from &#39;./routes.js&#39;;</span>
<span class="line">  import { navigate } from &#39;./lib/router&#39;;</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;nav&gt;</span>
<span class="line">  &lt;button on:click={() =&gt; navigate(&#39;/&#39;)}&gt;首页&lt;/button&gt;</span>
<span class="line">  &lt;button on:click={() =&gt; navigate(&#39;/about&#39;)}&gt;关于&lt;/button&gt;</span>
<span class="line">  &lt;button on:click={() =&gt; navigate(&#39;/dashboard&#39;)}&gt;仪表盘&lt;/button&gt;</span>
<span class="line">&lt;/nav&gt;</span>
<span class="line"></span>
<span class="line">&lt;main&gt;</span>
<span class="line">  &lt;Router {routes} /&gt;</span>
<span class="line">&lt;/main&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,9)])])}const r=n(i,[["render",p]]),o=JSON.parse('{"path":"/framework/svelte/base4/05.html","title":"五、路由 svelte-spa-router","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1771996569000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"6456dcf1fd45f82d71ce5dfe3954468d5bf78145","time":1771996569000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"}]},"filePathRelative":"framework/svelte/base4/05.md"}');export{r as comp,o as data};
