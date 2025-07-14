<template><div><h1 id="五、vuex" tabindex="-1"><a class="header-anchor" href="#五、vuex"><span>五、Vuex</span></a></h1>
<h2 id="_5-1-认识vuex" tabindex="-1"><a class="header-anchor" href="#_5-1-认识vuex"><span>5.1 认识vuex</span></a></h2>
<h3 id="_5-1-1-vuex-是什么" tabindex="-1"><a class="header-anchor" href="#_5-1-1-vuex-是什么"><span>5.1.1 vuex 是什么</span></a></h3>
<ul>
<li>概念：专门在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。</li>
<li>Github地址: https://github.com/vuejs/vuex</li>
</ul>
<h3 id="_5-1-2-什么时候使用vuex" tabindex="-1"><a class="header-anchor" href="#_5-1-2-什么时候使用vuex"><span>5.1.2 什么时候使用Vuex</span></a></h3>
<ul>
<li>多个组件依赖于同一状态</li>
<li>来自不同组件的行为需要变更同一状态</li>
</ul>
<h3 id="_5-1-3-vuex原理图" tabindex="-1"><a class="header-anchor" href="#_5-1-3-vuex原理图"><span>5.1.3 vuex原理图</span></a></h3>
<h4 id="_5-1-3-1-原理图" tabindex="-1"><a class="header-anchor" href="#_5-1-3-1-原理图"><span>5.1.3.1 原理图</span></a></h4>
<ol>
<li>认识vuex的流程</li>
</ol>
<p><img src="/framework/vue/vue2/026.png" alt=""></p>
<p>从图中我们可以看到，vuex中有Actions、Mutations、State三个对象，先从字面意思上理解下</p>
<ol>
<li>Actions：翻译过来即为动作、行为的意思</li>
<li>Mutations：翻译过来有变化、转变的意思</li>
<li>State：翻译过来就是状态的意思，这里的状态其实就是数据的意思。</li>
</ol>
<p>另外他们三个全部都是Object对象{}。</p>
<p>我们拿一个自加的案例来走一遍这个原理图的流程，让大家更快的理解。</p>
<p><img src="/framework/vue/vue2/027.png" alt=""></p>
<ol start="2">
<li>思考</li>
</ol>
<p>大家有没有觉得Actions所处的位置比较尴尬丫，因为就是转交一下，并没啥其他的作用啊。</p>
<p>其实在Vuex中，是允许Vue Components 直接调用commit api的，即如下</p>
<p><img src="/framework/vue/vue2/028.png" alt=""></p>
<p>我讲到这里，可能大家更觉得actions没啥用啦，其实是有的，还记得我之前没说的backend API 吗</p>
<p>其实backend API 是另一台服务器。</p>
<p>意思就是当我们调用了dispatch(zijia)时，并不知道要自加你，这个时候，我们就在actions中向另一台服务器发送请求，问它我们要自加几。所以这个时候actions还是有用的。存在必会有存在的价值。</p>
<ol start="3">
<li>Devtools</li>
</ol>
<p>这里也顺带说一下吧，意思就是能够在vue-devtools的调试工具里，看到数据的全部变化，以及修改的历史记录
下面再来通过一个生活案例来对这个图进行一个理解性记忆吧。</p>
<p>对了稍稍补充一下，其实在vuex的这个官方图，还少了一点点东西只过它在图中用vuex来表示了。</p>
<p><img src="/framework/vue/vue2/029.png" alt=""></p>
<p>actions、mutations、state这三个对象都被store都管着，多这么个领导者是为了更好的状态管理，因为后面会变得越来越复杂。</p>
<h4 id="_5-1-3-2-生活案例理解" tabindex="-1"><a class="header-anchor" href="#_5-1-3-2-生活案例理解"><span>5.1.3.2 生活案例理解</span></a></h4>
<p>我们将流程中参与的四个对象分别形象的比喻为客人、服务员、后厨、菜肴，将vuex整体比喻为大酒店</p>
<p><img src="/framework/vue/vue2/030.png" alt=""></p>
<p>流程解释：</p>
<ol>
<li>客人来到vuex中，客人和服务员说要点xxxx、xxx菜（调用dispatch API，即派发到actions）。</li>
<li>服务员（actions）接收到请求后，再将客人点的菜名提交给（commit()）给后厨团队。</li>
<li>后厨接收到服务员提交过来的菜名，就开始进行制作(即更新数据)，然后通过mutate（自动触发）传递到State中。</li>
<li>菜肴制作好后，通过render渲染，送到客人面前（更新视图）</li>
</ol>
<p>再假如你和后厨的xdm玩的特别好，特别熟悉，你下次来的时候，就直接越过了服务员，直接和后厨的哥们说，今天还是老样子，后厨的兄弟就懂了。</p>
<p>再或者还有下面的这样情况：</p>
<p>你来到大酒店想直接去找后厨的兄弟，但是最近菜单更新了，服务员拦住你说，我们店的菜肴更新了，你必须要跟我说一下，你要吃什么，才好给你上菜。（菜肴更新了就是向另外一台服务器请求数据的意思）。</p>
<h2 id="_5-2-搭建vuex环境" tabindex="-1"><a class="header-anchor" href="#_5-2-搭建vuex环境"><span>5.2 搭建Vuex环境</span></a></h2>
<h3 id="_5-2-1-安装" tabindex="-1"><a class="header-anchor" href="#_5-2-1-安装"><span>5.2.1 安装</span></a></h3>
<p>当前目录下</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i vuex@3</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_5-2-2-创建配置文件" tabindex="-1"><a class="header-anchor" href="#_5-2-2-创建配置文件"><span>5.2.2 创建配置文件</span></a></h3>
<p>创建文件 src/store/index.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//引入vue核心库</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token comment">//引入Vuex</span></span>
<span class="line"><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span> </span>
<span class="line"><span class="token comment">//使用vuex插件 </span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//准备actions --用于相应组件中的动作</span></span>
<span class="line"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//mutations --用于操作数据（state）</span></span>
<span class="line"><span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//准备state -- 用于存储数据</span></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 创建store</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    actions<span class="token punctuation">,</span></span>
<span class="line">    mutations<span class="token punctuation">,</span></span>
<span class="line">    state<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//暴露（导出）store</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-3-引用vuex" tabindex="-1"><a class="header-anchor" href="#_5-2-3-引用vuex"><span>5.2.3 引用vuex</span></a></h3>
<p>在main.js中船舰vm时传入store配置项</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token operator">...</span></span>
<span class="line"><span class="token comment">//引入store</span></span>
<span class="line"><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./store'</span></span>
<span class="line">…</span>
<span class="line"></span>
<span class="line"><span class="token comment">//创建Vue实例对象 </span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#app'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    store<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-3-基本使用" tabindex="-1"><a class="header-anchor" href="#_5-3-基本使用"><span>5.3 基本使用</span></a></h2>
<h3 id="_5-3-1-初始化数据" tabindex="-1"><a class="header-anchor" href="#_5-3-1-初始化数据"><span>5.3.1 初始化数据</span></a></h3>
<p>初始化数据、配置actions、配置mutations，操作文件store.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//引入vue核心库</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token comment">//引入Vuex</span></span>
<span class="line"><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span> </span>
<span class="line"><span class="token comment">//使用vuex插件 </span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//相应组件中加的动作</span></span>
<span class="line">    <span class="token function">jia</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"actions中的jia被调用了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">        context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'JIA'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//执行加</span></span>
<span class="line">    <span class="token constant">JIA</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"mutations中的JIA被调用了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">        state<span class="token punctuation">.</span>sum <span class="token operator">+=</span> value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//初始化数据</span></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">sum</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 创建并暴露store</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span>  <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    actions<span class="token punctuation">,</span></span>
<span class="line">    mutations<span class="token punctuation">,</span></span>
<span class="line">    state<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-2-读取数据" tabindex="-1"><a class="header-anchor" href="#_5-3-2-读取数据"><span>5.3.2 读取数据</span></a></h3>
<p>组件中读取vuex中的数据：$store.state.sum</p>
<h3 id="_5-3-3-需改数据" tabindex="-1"><a class="header-anchor" href="#_5-3-3-需改数据"><span>5.3.3 需改数据</span></a></h3>
<ul>
<li>组件中修改vuex中的数据：$store.dispatch('action中的方法名',数据) 或 $store.commit('mutations中的方法名',数据)</li>
<li>备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不屑dispatch，直接编写commit</li>
</ul>
<h2 id="_5-4-求和案例对比" tabindex="-1"><a class="header-anchor" href="#_5-4-求和案例对比"><span>5.4 求和案例对比</span></a></h2>
<h3 id="_5-4-1-使用纯vue" tabindex="-1"><a class="header-anchor" href="#_5-4-1-使用纯vue"><span>5.4.1 使用纯vue</span></a></h3>
<p>App.vue</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Count</span><span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> Count <span class="token keyword">from</span> <span class="token string">'./components/Count.vue'</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'App'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>Count<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Count.vue</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>当前求和为：{{sum}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!--  v-model.number 前置向number转换 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">v-model.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>decrement<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>incrementOdd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>当前求和为奇数再加<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>incrementWait<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>等一等再加<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Count'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">n</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>    <span class="token comment">//用户选择的数字</span></span>
<span class="line">            <span class="token literal-property property">sum</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">//当前的和</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">-=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">incrementOdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sum<span class="token operator">%</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">incrementWait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>sum <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">button</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-2-使用vuex" tabindex="-1"><a class="header-anchor" href="#_5-4-2-使用vuex"><span>5.4.2 使用vuex</span></a></h3>
<p>store/index.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 该文件用于创建Vuex中最为核心的store</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//引入vue核心库</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token comment">//引入Vuex</span></span>
<span class="line"><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span> </span>
<span class="line"><span class="token comment">//使用vuex插件 </span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//准备actions --用于相应组件中的动作</span></span>
<span class="line"><span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// jia:function(){</span></span>
<span class="line">    <span class="token comment">//     console.log("actions中的jar被调用了"); </span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line">    <span class="token comment">//简写</span></span>
<span class="line">    <span class="token function">jia</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"actions中的jia被调用了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">        context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'JIA'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">jian</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"actions中的jian被调用了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">        context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'JIAN'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">jiaOdd</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"actions中的jiaOdd被调用了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>state<span class="token punctuation">.</span>sum <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'JIA'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span> </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">jiaWait</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"actions中的jiaWait被调用了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'JIA'</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span></span>
<span class="line">         <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//mutations --用于操作数据（state）</span></span>
<span class="line"><span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">JIA</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"mutations中的JIA被调用了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">        state<span class="token punctuation">.</span>sum <span class="token operator">+=</span> value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">JIAN</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span>value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"mutations中的JIAN被调用了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>
<span class="line">        state<span class="token punctuation">.</span>sum <span class="token operator">-=</span> value<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//准备state -- 用于存储数据</span></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">sum</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 创建store</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    actions<span class="token punctuation">,</span></span>
<span class="line">    mutations<span class="token punctuation">,</span></span>
<span class="line">    state<span class="token punctuation">,</span></span>
<span class="line">    getters<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//暴露（导出）store</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.vue</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Count</span><span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> Count <span class="token keyword">from</span> <span class="token string">'./components/Count.vue'</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'App'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>Count<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Count.vue</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>当前求和为：{{$store.state.sum}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!--  v-model.number 前置向number转换 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">v-model.number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>n<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>increment<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>decrement<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>incrementOdd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>当前求和为奇数再加<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>incrementWait<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>等一等再加<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'Count'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">n</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>    <span class="token comment">//用户选择的数字</span></span>
<span class="line">            <span class="token literal-property property">sum</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">//当前的和</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">           <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'JIA'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'JIAN'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">incrementOdd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'jiaOdd'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">incrementWait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'jiaWait'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token selector">button</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">margin</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-5-getters" tabindex="-1"><a class="header-anchor" href="#_5-5-getters"><span>5.5 getters</span></a></h2>
<p>介绍：相当于vue中的计算属性，虽然没有在原理图中表现出来</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//准备getters --用于将state中的数据进行加工</span></span>
<span class="line"><span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">bigSum</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> state<span class="token punctuation">.</span>sum<span class="token operator">*</span><span class="token number">10</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-6-四个map方法的使用" tabindex="-1"><a class="header-anchor" href="#_5-6-四个map方法的使用"><span>5.6 四个map方法的使用</span></a></h2>
<h3 id="_5-6-1-mapstate方法" tabindex="-1"><a class="header-anchor" href="#_5-6-1-mapstate方法"><span>5.6.1 mapState方法：</span></a></h3>
<p>用于帮助我们映射state中的数据为计算属性</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 借助mapState生成计算属性:sum、school、subject （对象写法）</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">he</span><span class="token operator">:</span><span class="token string">'sum'</span><span class="token punctuation">,</span><span class="token literal-property property">xuexiao</span><span class="token operator">:</span><span class="token string">'school'</span><span class="token punctuation">,</span><span class="token literal-property property">xueke</span><span class="token operator">:</span><span class="token string">'subject'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 借助mapState去生成的计算属性，从state中读取属性 （数组写法）</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'sum'</span><span class="token punctuation">,</span><span class="token string">'school'</span><span class="token punctuation">,</span><span class="token string">'subject'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-2-mapgetters方法" tabindex="-1"><a class="header-anchor" href="#_5-6-2-mapgetters方法"><span>5.6.2 mapGetters方法：</span></a></h3>
<p>用于帮助我们映射getters中的数据为计算属性</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 借助mapGetters生成计算属性：bigSum （对象写法）</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">bigSum</span><span class="token operator">:</span><span class="token string">'bigSum'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 借助mapGetters生成计算属性：bigSum  （数组写法）</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'bigSum'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-3-mapactions方法" tabindex="-1"><a class="header-anchor" href="#_5-6-3-mapactions方法"><span>5.6.3 mapActions方法：</span></a></h3>
<p>用于帮助我们生成与actions对话的方法：即：$store.dispatch(xxx)的函数</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 借助mapActions生成: incrementOdd、incrementWait (对象写法)</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">incrementOdd</span><span class="token operator">:</span><span class="token string">'jiaOdd'</span><span class="token punctuation">,</span><span class="token literal-property property">incrementWait</span><span class="token operator">:</span><span class="token string">'jiaWait'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 借助mapActions生成: incrementOdd、incrementWait (数组写法)</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'jiaOdd'</span><span class="token punctuation">,</span><span class="token string">'jiaWait'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-4-mapmutations方法" tabindex="-1"><a class="header-anchor" href="#_5-6-4-mapmutations方法"><span>5.6.4 mapMutations方法：</span></a></h3>
<p>用于帮助我们生成与mutations对话的方法：即：包含$store.commit(xxx)的函数</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 借助mapMutations生成: increment、decrement (对象写法)</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">increment</span><span class="token operator">:</span><span class="token string">'JIA'</span><span class="token punctuation">,</span><span class="token literal-property property">decrement</span><span class="token operator">:</span><span class="token string">'JIAN'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 借助mapMutations生成: increment、decrement (数组写法)</span></span>
<span class="line">    <span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'JIA'</span><span class="token punctuation">,</span><span class="token string">'JIAN'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注：mapActions与mapMutations使用时，若需要传递函数需要: 在模板中绑定事件时传递好参数，否则参数是事件对象。</p>
<h2 id="_5-7-模块化-命名空间" tabindex="-1"><a class="header-anchor" href="#_5-7-模块化-命名空间"><span>5.7 模块化+命名空间</span></a></h2>
<ol>
<li>目的：让代码更好维护，让多种数据分类更加明确。</li>
<li>修改store.js</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">//引入vue核心库</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token comment">//引入Vuex</span></span>
<span class="line"><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span> </span>
<span class="line"><span class="token comment">//使用vuex插件 </span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 求和功能相关的配置</span></span>
<span class="line"><span class="token keyword">const</span> countOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">namespaced</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">//开启命名空间</span></span>
<span class="line">    <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">mutations</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 人员管理相关的配置</span></span>
<span class="line"><span class="token keyword">const</span> personOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">namespaced</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>    <span class="token comment">//开启命名空间</span></span>
<span class="line">    <span class="token literal-property property">actions</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">mutations</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">state</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建store</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">modules</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">countAbout</span><span class="token operator">:</span>countOptions<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">personAbout</span><span class="token operator">:</span>personOptions<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>开启命名空间后，组件中国读取state数据：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 方式一、 自己直接读取</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>personAbout<span class="token punctuation">.</span>list</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方式二、借助mapState读取：</span></span>
<span class="line"><span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token string">'countAbout'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'sum'</span><span class="token punctuation">,</span><span class="token string">'school'</span><span class="token punctuation">,</span><span class="token string">'subject'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>开启命名空间后，组件中国读取getters数据：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 方式一、 自己直接读取</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">[</span><span class="token string">'personAbout/firstPersonName'</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方式二、借助mapState读取：</span></span>
<span class="line"><span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token string">'countAbout'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'bigSum'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>开启命名空间后，组件中国读取dispath数据：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 方式一、 自己直接读取</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'personAbout/addPersonWang'</span><span class="token punctuation">,</span>personObj<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方式二、借助mapState读取：</span></span>
<span class="line"><span class="token operator">...</span><span class="token function">mapActions</span><span class="token punctuation">(</span><span class="token string">'countAbout'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">incrementOdd</span><span class="token operator">:</span><span class="token string">'jiaOdd'</span><span class="token punctuation">,</span><span class="token literal-property property">incrementWait</span><span class="token operator">:</span><span class="token string">'jiaWait'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>开启命名空间后，组件中国读取commit数据：</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token comment">// 方式一、 自己直接读取</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'personAbout/ADD_PERSON'</span><span class="token punctuation">,</span>personObj<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 方式二、借助mapState读取：</span></span>
<span class="line"><span class="token operator">...</span><span class="token function">mapMutations</span><span class="token punctuation">(</span><span class="token string">'countAbout'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">increment</span><span class="token operator">:</span><span class="token string">'JIA'</span><span class="token punctuation">,</span><span class="token literal-property property">decrement</span><span class="token operator">:</span><span class="token string">'JIAN'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


