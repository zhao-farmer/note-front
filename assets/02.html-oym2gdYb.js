import{ar as n,as as a,at as e,au as l}from"./app-5nod3Nrs.js";const i={};function t(p,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="二、skeleton-ui" tabindex="-1"><a class="header-anchor" href="#二、skeleton-ui"><span>二、Skeleton UI</span></a></h1><p>Skeleton提供了一种统一的设计语言和结构化框架，用于控制产品的外观和用户体验。它作为一个有主见的设计系统，旨在大大减少管理设计元素和模式所花费的时间，使您能够更快地构建和管理大规模的前端界面。</p><h2 id="_2-1-vite-svelte" tabindex="-1"><a class="header-anchor" href="#_2-1-vite-svelte"><span>2.1 Vite + Svelte</span></a></h2><ol><li><p>首先创建一个新的Vite项目。这将安装Svelte和Typescript。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> create vite@latest</span>
<span class="line">    - Set your project named as desired</span>
<span class="line">    - Set Svelte as the framework</span>
<span class="line">    - Set Typescript as the variant</span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token punctuation">{</span>yourProjectName<span class="token punctuation">}</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装Skeleton核心和Svelte组件包。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @skeletonlabs/skeleton @skeletonlabs/skeleton-svelte</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>安装Tailwind和Tailwind Vite插件。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> <span class="token function">install</span> tailwindcss @tailwindcss/vite</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>配置</p><ul><li><p>vite.config.ts</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code class="language-typescript"><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> svelte <span class="token keyword">from</span> <span class="token string">&quot;@vitejs/plugin-svelte&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> tailwindcss <span class="token keyword">from</span> <span class="token string">&quot;@tailwindcss/vite&quot;</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">	plugins<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">		<span class="token function">tailwindcss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> </span>
<span class="line">		<span class="token function">svelte</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &lt;-- 必须再tailwindcss之后</span></span>
<span class="line">	<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>/src/app.css</p><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css"><pre><code class="language-css"><span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;tailwindcss&#39;</span><span class="token punctuation">;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;@skeletonlabs/skeleton&#39;</span><span class="token punctuation">;</span></span> </span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;@skeletonlabs/skeleton-svelte&#39;</span><span class="token punctuation">;</span></span> </span>
<span class="line"><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;@skeletonlabs/skeleton/themes/cerberus&#39;</span><span class="token punctuation">;</span></span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>打开index.html，然后在HTML标签上设置data-theme属性以定义活动主题。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">data-theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cerberus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!-- ... --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>示例代码</p><div class="language-svelte line-numbers-mode" data-highlighter="prismjs" data-ext="svelte"><pre><code class="language-svelte"><span class="line">&lt;script&gt;</span>
<span class="line">  import { Button, Table, Modal, Card } from &#39;@skeletonlabs/skeleton&#39;;</span>
<span class="line">  import { createSignal } from &#39;svelte/store&#39;;</span>
<span class="line"></span>
<span class="line">  // 模拟员工数据</span>
<span class="line">  const employees = [</span>
<span class="line">    { id: 1, name: &#39;张三&#39;, role: &#39;前端工程师&#39;, department: &#39;技术部&#39; },</span>
<span class="line">    { id: 2, name: &#39;李四&#39;, role: &#39;产品经理&#39;, department: &#39;产品部&#39; },</span>
<span class="line">    { id: 3, name: &#39;王五&#39;, role: &#39;UI设计师&#39;, department: &#39;设计部&#39; },</span>
<span class="line">  ];</span>
<span class="line"></span>
<span class="line">  // 弹窗状态管理</span>
<span class="line">  const [showModal, setShowModal] = createSignal(false);</span>
<span class="line">  const [selectedEmployee, setSelectedEmployee] = createSignal(null);</span>
<span class="line"></span>
<span class="line">  // 打开详情弹窗</span>
<span class="line">  const viewDetail = (employee) =&gt; {</span>
<span class="line">    setSelectedEmployee(employee);</span>
<span class="line">    setShowModal(true);</span>
<span class="line">  };</span>
<span class="line"></span>
<span class="line">  // 关闭弹窗</span>
<span class="line">  const closeModal = () =&gt; {</span>
<span class="line">    setShowModal(false);</span>
<span class="line">    setSelectedEmployee(null);</span>
<span class="line">  };</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;div class=&quot;p-4 max-w-4xl mx-auto&quot;&gt;</span>
<span class="line">  &lt;!-- 顶部操作区 --&gt;</span>
<span class="line">  &lt;div class=&quot;flex justify-between items-center mb-6&quot;&gt;</span>
<span class="line">    &lt;h1 class=&quot;text-2xl font-bold text-gray-800 dark:text-white&quot;&gt;员工管理系统&lt;/h1&gt;</span>
<span class="line">    &lt;Button </span>
<span class="line">      color=&quot;primary&quot; </span>
<span class="line">      on:click={() =&gt; alert(&#39;新增功能待实现&#39;)}</span>
<span class="line">    &gt;</span>
<span class="line">      新增员工</span>
<span class="line">    &lt;/Button&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 员工表格 --&gt;</span>
<span class="line">  &lt;Card class=&quot;mb-6&quot;&gt;</span>
<span class="line">    &lt;Table&gt;</span>
<span class="line">      &lt;thead&gt;</span>
<span class="line">        &lt;tr&gt;</span>
<span class="line">          &lt;th class=&quot;text-left w-1/4&quot;&gt;姓名&lt;/th&gt;</span>
<span class="line">          &lt;th class=&quot;text-left w-1/4&quot;&gt;职位&lt;/th&gt;</span>
<span class="line">          &lt;th class=&quot;text-left w-1/4&quot;&gt;部门&lt;/th&gt;</span>
<span class="line">          &lt;th class=&quot;text-left w-1/4&quot;&gt;操作&lt;/th&gt;</span>
<span class="line">        &lt;/tr&gt;</span>
<span class="line">      &lt;/thead&gt;</span>
<span class="line">      &lt;tbody&gt;</span>
<span class="line">        {#each employees as employee}</span>
<span class="line">          &lt;tr&gt;</span>
<span class="line">            &lt;td&gt;{employee.name}&lt;/td&gt;</span>
<span class="line">            &lt;td&gt;{employee.role}&lt;/td&gt;</span>
<span class="line">            &lt;td&gt;{employee.department}&lt;/td&gt;</span>
<span class="line">            &lt;td&gt;</span>
<span class="line">              &lt;Button </span>
<span class="line">                size=&quot;xs&quot; </span>
<span class="line">                color=&quot;secondary&quot; </span>
<span class="line">                on:click={() =&gt; viewDetail(employee)}</span>
<span class="line">              &gt;</span>
<span class="line">                查看详情</span>
<span class="line">              &lt;/Button&gt;</span>
<span class="line">            &lt;/td&gt;</span>
<span class="line">          &lt;/tr&gt;</span>
<span class="line">        {/each}</span>
<span class="line">      &lt;/tbody&gt;</span>
<span class="line">    &lt;/Table&gt;</span>
<span class="line">  &lt;/Card&gt;</span>
<span class="line"></span>
<span class="line">  &lt;!-- 员工详情弹窗 --&gt;</span>
<span class="line">  &lt;Modal</span>
<span class="line">    bind:open={showModal}</span>
<span class="line">    title=&quot;员工详情&quot;</span>
<span class="line">    class=&quot;max-w-2xl&quot;</span>
<span class="line">  &gt;</span>
<span class="line">    {#if $selectedEmployee}</span>
<span class="line">      &lt;div class=&quot;space-y-4&quot;&gt;</span>
<span class="line">        &lt;div class=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;&gt;</span>
<span class="line">          &lt;div&gt;</span>
<span class="line">            &lt;p class=&quot;text-sm text-gray-500 dark:text-gray-400&quot;&gt;ID&lt;/p&gt;</span>
<span class="line">            &lt;p class=&quot;font-medium&quot;&gt;{$selectedEmployee.id}&lt;/p&gt;</span>
<span class="line">          &lt;/div&gt;</span>
<span class="line">          &lt;div&gt;</span>
<span class="line">            &lt;p class=&quot;text-sm text-gray-500 dark:text-gray-400&quot;&gt;姓名&lt;/p&gt;</span>
<span class="line">            &lt;p class=&quot;font-medium&quot;&gt;{$selectedEmployee.name}&lt;/p&gt;</span>
<span class="line">          &lt;/div&gt;</span>
<span class="line">          &lt;div&gt;</span>
<span class="line">            &lt;p class=&quot;text-sm text-gray-500 dark:text-gray-400&quot;&gt;职位&lt;/p&gt;</span>
<span class="line">            &lt;p class=&quot;font-medium&quot;&gt;{$selectedEmployee.role}&lt;/p&gt;</span>
<span class="line">          &lt;/div&gt;</span>
<span class="line">          &lt;div&gt;</span>
<span class="line">            &lt;p class=&quot;text-sm text-gray-500 dark:text-gray-400&quot;&gt;部门&lt;/p&gt;</span>
<span class="line">            &lt;p class=&quot;font-medium&quot;&gt;{$selectedEmployee.department}&lt;/p&gt;</span>
<span class="line">          &lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">      &lt;/div&gt;</span>
<span class="line">    {/if}</span>
<span class="line"></span>
<span class="line">    &lt;!-- 弹窗底部操作栏 --&gt;</span>
<span class="line">    &lt;div slot=&quot;footer&quot; class=&quot;flex justify-end&quot;&gt;</span>
<span class="line">      &lt;Button </span>
<span class="line">        color=&quot;secondary&quot; </span>
<span class="line">        on:click={closeModal}</span>
<span class="line">      &gt;</span>
<span class="line">        关闭</span>
<span class="line">      &lt;/Button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">  &lt;/Modal&gt;</span>
<span class="line">&lt;/div&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-2-next-js" tabindex="-1"><a class="header-anchor" href="#_2-2-next-js"><span>2.2 Next.js</span></a></h2><ol><li><p>使用Next.js CLI搭建一个新项目。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> create next-app@latest my-skeleton-app</span>
<span class="line"><span class="token builtin class-name">cd</span> my-skeleton-app</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装Skeleton核心和React组件包。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @skeletonlabs/skeleton @skeletonlabs/skeleton-react</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>在/src/app/globals.css中打开全局样式表，并添加以下导入：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">@import <span class="token string">&#39;tailwindcss&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">@import <span class="token string">&#39;@skeletonlabs/skeleton&#39;</span><span class="token punctuation">;</span> </span>
<span class="line">@import <span class="token string">&#39;@skeletonlabs/skeleton-react&#39;</span><span class="token punctuation">;</span> </span>
<span class="line">@import <span class="token string">&#39;@skeletonlabs/skeleton/themes/cerberus&#39;</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>打开index.html，然后在HTML标签上设置data-theme属性以定义活动主题。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">data-theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cerberus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!-- ... --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,6)])])}const d=n(i,[["render",t]]),r=JSON.parse('{"path":"/ui/framework/other/02.html","title":"二、Skeleton UI","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1771996569000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"6456dcf1fd45f82d71ce5dfe3954468d5bf78145","time":1771996569000,"email":"857899180@qq.com","author":"zhao-farmer","message":"新提交"}]},"filePathRelative":"ui/framework/other/02.md"}');export{d as comp,r as data};
