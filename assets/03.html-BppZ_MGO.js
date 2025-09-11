import{aq as s,ar as a,as as p,at as e}from"./app-5uA3gIEq.js";const t="/note-front/framework/angular/base16/010.png",l="/note-front/framework/angular/base16/011.gif",i="/note-front/framework/angular/base16/074.gif",c="/note-front/framework/angular/base16/012.png",o="/note-front/framework/angular/base16/013.png",u="/note-front/framework/angular/base16/014.gif",r="/note-front/framework/angular/base16/015.gif",d="/note-front/framework/angular/base16/016.gif",k="/note-front/framework/angular/base16/017.gif",v="/note-front/framework/angular/base16/018.png",m="/note-front/framework/angular/base16/019.gif",b="/note-front/framework/angular/base16/055.gif",g="/note-front/framework/angular/base16/056.gif",h="/note-front/framework/angular/base16/057.png",y="/note-front/framework/angular/base16/058.gif",f="/note-front/framework/angular/base16/059.png",q="/note-front/framework/angular/base16/060.png",w="/note-front/framework/angular/base16/061.gif",C="/note-front/framework/angular/base16/062.png",x="/note-front/framework/angular/base16/063.gif",_="/note-front/framework/angular/base16/064.png",F="/note-front/framework/angular/base16/065.gif",S="/note-front/framework/angular/base16/066.gif",j="/note-front/framework/angular/base16/067.gif",z="/note-front/framework/angular/base16/068.gif",A="/note-front/framework/angular/base16/069.gif",M="/note-front/framework/angular/base16/070.gif",D="/note-front/framework/angular/base16/071.gif",I="/note-front/framework/angular/base16/072.gif",T="/note-front/framework/angular/base16/073.gif",N="/note-front/framework/angular/base16/075.gif",V="/note-front/framework/angular/base16/076.gif",B="/note-front/framework/angular/base16/077.gif",G={};function P(E,n){return e(),a("div",null,n[0]||(n[0]=[p(`<h1 id="三、指令" tabindex="-1"><a class="header-anchor" href="#三、指令"><span>三、指令</span></a></h1><h2 id="_3-1-结构指令" tabindex="-1"><a class="header-anchor" href="#_3-1-结构指令"><span>3.1 结构指令</span></a></h2><h3 id="_3-3-1-ngfor指令" tabindex="-1"><a class="header-anchor" href="#_3-3-1-ngfor指令"><span>3.3.1 *ngFor指令</span></a></h3><ol><li><p>指令介绍</p><ul><li><p>基础使用</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>let item of items; let i = index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        {{ i + 1 }}. {{ item }}</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>通过 trackBy 设置索引</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token comment">// 组件中定义trackBy函数</span></span>
<span class="line"><span class="token function">trackById</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> item<span class="token punctuation">.</span>id<span class="token punctuation">;</span> <span class="token comment">// 返回唯一标识符</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>let item of items; trackBy: trackById<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        {{ item.name }}</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>与异步数据结合</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">*ngFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>let item of items$ | async<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    {{ item }}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>项目文件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;structure-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;h2&gt;产品列表&lt;/h2&gt;</span>
<span class="line">        &lt;ul&gt;</span>
<span class="line">        &lt;li *ngFor=&quot;let product of products; let i = index&quot;&gt;</span>
<span class="line">            {{ i + 1 }}. {{ product.name }} - {{ product.price }}</span>
<span class="line">        &lt;/li&gt;</span>
<span class="line">        &lt;/ul&gt;</span>
<span class="line"></span>
<span class="line">        &lt;h2&gt;带条件的列表&lt;/h2&gt;</span>
<span class="line">        &lt;div *ngFor=&quot;let user of users&quot;&gt;</span>
<span class="line">        &lt;div *ngIf=&quot;user.active&quot; class=&quot;user-card&quot;&gt;</span>
<span class="line">            {{ user.name }} ({{ user.email }})</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    styles<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        .user-card {</span>
<span class="line">            padding: 10px;</span>
<span class="line">            margin: 5px;</span>
<span class="line">            border: 1px solid #ddd;</span>
<span class="line">        }</span>
<span class="line">        </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Structure01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    products <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;笔记本电脑&#39;</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">5999</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;智能手机&#39;</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">2999</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;平板电脑&#39;</span><span class="token punctuation">,</span> price<span class="token operator">:</span> <span class="token number">1999</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    users <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> email<span class="token operator">:</span> <span class="token string">&#39;zhang@example.com&#39;</span><span class="token punctuation">,</span> active<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span> email<span class="token operator">:</span> <span class="token string">&#39;li@example.com&#39;</span><span class="token punctuation">,</span> active<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">,</span> email<span class="token operator">:</span> <span class="token string">&#39;wang@example.com&#39;</span><span class="token punctuation">,</span> active<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>路由配置</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">       <span class="token punctuation">{</span></span>
<span class="line">            path<span class="token operator">:</span> <span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            component<span class="token operator">:</span> Data01Component<span class="token punctuation">,</span></span>
<span class="line">            title<span class="token operator">:</span> <span class="token string">&#39;插值表达式&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            path<span class="token operator">:</span> <span class="token string">&#39;02&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            component<span class="token operator">:</span> Data02Component<span class="token punctuation">,</span></span>
<span class="line">            title<span class="token operator">:</span> <span class="token string">&#39;*ngfor循环&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+t+`" alt=""></p></li></ol><h3 id="_3-3-2-ngif指令" tabindex="-1"><a class="header-anchor" href="#_3-3-2-ngif指令"><span>3.3.2 *ngIf指令</span></a></h3><ol><li><p>指令详解</p><ul><li><p>条件表达式示例</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token comment">&lt;!-- 布尔值 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isLoggedIn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>欢迎回来！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 比较运算 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>score &gt; 60<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>及格<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 逻辑运算 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isAdmin &amp;&amp; hasPermission<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>管理员面板<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 非空检查 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>用户名: {{user.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>结合 else 使用</p><p>Angular 提供了 else 语法来显示条件不满足时的内容：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>condition; else elseBlock<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    条件为真时显示</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-template</span> <span class="token attr-name">#elseBlock</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>条件为假时显示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 then/else 语法</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-container</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>condition; then thenBlock; else elseBlock<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-container</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-template</span> <span class="token attr-name">#thenBlock</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>条件为真时显示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-template</span> <span class="token attr-name">#elseBlock</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>条件为假时显示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>与异步数据结合 使用 async 管道</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data$ | async as data; else loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">数据加载完成: {{ data }}</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ng-template</span> <span class="token attr-name">#loading</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>加载中...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ng-template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>项目文件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;structure-02&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;div *ngIf=&quot;isLoggedIn; else loginPrompt&quot;&gt;</span>
<span class="line">            &lt;p&gt;欢迎回来, {{ userName }}!&lt;/p&gt;</span>
<span class="line">            &lt;button (click)=&quot;logout()&quot;&gt;退出登录&lt;/button&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;ng-template #loginPrompt&gt;</span>
<span class="line">            &lt;p&gt;请登录以查看内容&lt;/p&gt;</span>
<span class="line">            &lt;button (click)=&quot;login()&quot;&gt;登录&lt;/button&gt;</span>
<span class="line">        &lt;/ng-template&gt;</span>
<span class="line"></span>
<span class="line">        &lt;div [hidden]=&quot;!hasMessages&quot;&gt;</span>
<span class="line">            &lt;h3&gt;您的消息&lt;/h3&gt;</span>
<span class="line">            &lt;p&gt;{{ message }}&lt;/p&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Structure03Component</span> <span class="token punctuation">{</span></span>
<span class="line">    isLoggedIn <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    userName <span class="token operator">=</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    hasMessages <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    message <span class="token operator">=</span> <span class="token string">&#39;您有3条未读消息&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>isLoggedIn <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>isLoggedIn <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+l+`" alt=""></p></li></ol><h3 id="_3-3-3-ngswitch指令" tabindex="-1"><a class="header-anchor" href="#_3-3-3-ngswitch指令"><span>3.3.3 ngSwitch指令</span></a></h3><ol><li><p>指令详解 (多条件渲染)</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">[ngSwitch]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">*ngSwitchCase</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>success&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>成功<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">*ngSwitchDefault</span><span class="token punctuation">&gt;</span></span>默认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>项目文件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;switch-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;h3&gt;用户状态显示&lt;/h3&gt;</span>
<span class="line"></span>
<span class="line">        &lt;select [(ngModel)]=&quot;userStatus&quot;&gt;</span>
<span class="line">            &lt;option value=&quot;active&quot;&gt;活跃&lt;/option&gt;</span>
<span class="line">            &lt;option value=&quot;inactive&quot;&gt;非活跃&lt;/option&gt;</span>
<span class="line">            &lt;option value=&quot;pending&quot;&gt;待审核&lt;/option&gt;</span>
<span class="line">        &lt;/select&gt;</span>
<span class="line"></span>
<span class="line">        &lt;div [ngSwitch]=&quot;userStatus&quot;&gt;</span>
<span class="line">            &lt;div *ngSwitchCase=&quot;&#39;active&#39;&quot;&gt;✅ 用户处于活跃状态&lt;/div&gt;</span>
<span class="line">            &lt;div *ngSwitchCase=&quot;&#39;inactive&#39;&quot;&gt;⏸️ 用户非活跃&lt;/div&gt;</span>
<span class="line">            &lt;div *ngSwitchCase=&quot;&#39;pending&#39;&quot;&gt;⏳ 用户等待审核中&lt;/div&gt;</span>
<span class="line">            &lt;div *ngSwitchDefault&gt;❓ 未知状态&lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;h4&gt;消息类型&lt;/h4&gt;</span>
<span class="line">            &lt;div [ngSwitch]=&quot;messageType&quot;&gt;</span>
<span class="line">            &lt;div *ngSwitchCase=&quot;&#39;success&#39;&quot;&gt;🎉 操作成功！&lt;/div&gt;</span>
<span class="line">            &lt;div *ngSwitchCase=&quot;&#39;error&#39;&quot;&gt;❗ 发生错误&lt;/div&gt;</span>
<span class="line">            &lt;div *ngSwitchDefault&gt;ℹ️ 普通信息&lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Switch01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    userStatus <span class="token operator">=</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    messageType <span class="token operator">=</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+i+`" alt=""></p></li></ol><h2 id="_3-2-组件指令-父子组件" tabindex="-1"><a class="header-anchor" href="#_3-2-组件指令-父子组件"><span>3.2 组件指令(父子组件)</span></a></h2><h3 id="_3-2-1-基础认识" tabindex="-1"><a class="header-anchor" href="#_3-2-1-基础认识"><span>3.2.1 基础认识</span></a></h3><p>组件本质上是一种带有模板的指令，是最常见的指令类型</p><ol><li><p>代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;app-child-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;h1&gt;Hello, {{name}}!&lt;/h1&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    styles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">h1 { color: blue; }</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Child01Component</span>  <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">&#39;我是子组件&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">selector<span class="token operator">:</span> <span class="token string">&#39;app-parent-02&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 使用组件指令 app-child-01 调用了其他组件</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;h2&gt;{{name}}&lt;/h2&gt;</span>
<span class="line">        &lt;app-child-01&gt;&lt;/app-child-01&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Parent01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">&#39;父组件&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件注册</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"> declarations<span class="token operator">:</span> <span class="token punctuation">[</span>Child01Component<span class="token punctuation">,</span>Parent01Component<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>路由配置</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">&#39;component&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Parent01Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;组件指令&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+c+`" alt=""></p></li></ol><h3 id="_3-2-2-父传子-input" tabindex="-1"><a class="header-anchor" href="#_3-2-2-父传子-input"><span>3.2.2 父传子（@Input）</span></a></h3><ol><li><p>代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">selector<span class="token operator">:</span> <span class="token string">&#39;app-child-02&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;h3&gt;子组件&lt;/h3&gt;</span>
<span class="line">        &lt;p&gt;来自父组件的消息: {{ messageFromParent }}&lt;/p&gt;</span>
<span class="line">        &lt;p&gt;用户年龄: {{ user.age }}&lt;/p&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Child02Component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用input接收父组件的消息</span></span>
<span class="line">    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Input</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> messageFromParent<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Input</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> user<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;app-parent-02&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;h2&gt;父组件&lt;/h2&gt;</span>
<span class="line">        &lt;app-child-02</span>
<span class="line">        [messageFromParent]=&quot;parentMessage&quot;</span>
<span class="line">        [user]=&quot;currentUser&quot;&gt;</span>
<span class="line">        &lt;/app-child-02&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Parent02Component</span> <span class="token punctuation">{</span></span>
<span class="line">    parentMessage <span class="token operator">=</span> <span class="token string">&#39;你好，子组件！&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    currentUser <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件注册</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"> declarations<span class="token operator">:</span> <span class="token punctuation">[</span>Child02Component<span class="token punctuation">,</span>Parent02Component<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>路由配置</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">&#39;component&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Parent01Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;组件指令&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;02&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Parent02Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;父传子&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+o+`" alt=""></p></li></ol><h3 id="_3-2-3-子传父-output" tabindex="-1"><a class="header-anchor" href="#_3-2-3-子传父-output"><span>3.2.3 子传父（@output）</span></a></h3><ol><li><p>代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Output<span class="token punctuation">,</span> EventEmitter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 子组件</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;app-child-03&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;button (click)=&quot;sendMessage()&quot;&gt;发送消息给父组件&lt;/button&gt;</span>
<span class="line">        &lt;button (click)=&quot;updateCount()&quot;&gt;增加计数&lt;/button&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Child03Component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 绑定父组件的方法</span></span>
<span class="line">    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Output</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> messageEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Output</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> countChanged <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 通过emit传递</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>messageEvent<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;来自子组件的问候!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">updateCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>countChanged<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 父组件</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;app-parent-03&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;h2&gt;父组件&lt;/h2&gt;</span>
<span class="line">        &lt;p&gt;来自子组件的消息: {{ childMessage }}&lt;/p&gt;</span>
<span class="line">        &lt;p&gt;子组件计数: {{ childCount }}&lt;/p&gt;</span>
<span class="line"></span>
<span class="line">        &lt;app-child-03</span>
<span class="line">        (messageEvent)=&quot;receiveMessage($event)&quot;</span>
<span class="line">        (countChanged)=&quot;handleCountChange($event)&quot;&gt;</span>
<span class="line">        &lt;/app-child-03&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Parent03Component</span> <span class="token punctuation">{</span></span>
<span class="line">    childMessage <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    childCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">receiveMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>childMessage <span class="token operator">=</span> message<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">handleCountChange</span><span class="token punctuation">(</span>count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>childCount <span class="token operator">=</span> count<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件注册</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"> declarations<span class="token operator">:</span> <span class="token punctuation">[</span>Child03Component<span class="token punctuation">,</span>Parent03Component<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>路由配置</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">&#39;component&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Parent01Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;组件指令&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;02&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Parent02Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;父传子&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;03&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Parent03Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;子传父&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+u+`" alt=""></p></li></ol><h3 id="_3-2-4-模板变量ref" tabindex="-1"><a class="header-anchor" href="#_3-2-4-模板变量ref"><span>3.2.4 模板变量ref</span></a></h3><ol><li><p>代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> ViewChild <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 子组件</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;app-child-04&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;p&gt;子组件内容&lt;/p&gt;</span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Child04Component</span> <span class="token punctuation">{</span></span>
<span class="line">    childStatus <span class="token operator">=</span> <span class="token string">&#39;活跃&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;子组件方法被调用&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>childStatus <span class="token operator">=</span> <span class="token string">&#39;处理中...&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 父组件</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;app-parent-04&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;app-child-04 #childRef&gt;&lt;/app-child-04&gt;</span>
<span class="line">        &lt;button (click)=&quot;callChildMethod()&quot;&gt;调用子组件方法&lt;/button&gt;</span>
<span class="line">        &lt;p&gt;子组件状态: {{ childRef.childStatus }}&lt;/p&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Parent04Component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token decorator"><span class="token at operator">@</span><span class="token function">ViewChild</span></span><span class="token punctuation">(</span><span class="token string">&#39;childRef&#39;</span><span class="token punctuation">)</span> childComponent<span class="token operator">!</span><span class="token operator">:</span> Child04Component<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">callChildMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>childComponent<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>组件注册</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"> declarations<span class="token operator">:</span> <span class="token punctuation">[</span>Child04Component<span class="token punctuation">,</span>Parent04Component<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>路由配置</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">&#39;component&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Parent01Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;组件指令&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;02&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Parent02Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;父传子&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;03&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Parent03Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;子传父&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;04&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Parent04Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;使用ref&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+r+`" alt=""></p></li></ol><h3 id="_3-2-5-通过服务发送" tabindex="-1"><a class="header-anchor" href="#_3-2-5-通过服务发送"><span>3.2.5 通过服务发送</span></a></h3><ol><li><p>设置服务</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token comment">// data.service.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Subject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> providedIn<span class="token operator">:</span> <span class="token string">&#39;root&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DataService</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> parentToChild <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> childToParent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    parentToChild$ <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>parentToChild<span class="token punctuation">.</span><span class="token function">asObservable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    childToParent$ <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>childToParent<span class="token punctuation">.</span><span class="token function">asObservable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">sendToChild</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>parentToChild<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">sendToParent</span><span class="token punctuation">(</span>count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>childToParent<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> DataService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../data.service&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 子组件</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;app-child-05&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;p&gt;来自服务的消息: {{ serviceMessage }}&lt;/p&gt;</span>
<span class="line">        &lt;button (click)=&quot;sendCount()&quot;&gt;通过服务发送计数&lt;/button&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Child05Component</span> <span class="token punctuation">{</span></span>
<span class="line">    serviceMessage <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> dataService<span class="token operator">:</span> DataService<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span>parentToChild$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>msg <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>serviceMessage <span class="token operator">=</span> msg<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">sendCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span><span class="token function">sendToParent</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 父组件</span></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;app-parent-05&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;button (click)=&quot;sendMessage()&quot;&gt;通过服务发送&lt;/button&gt;</span>
<span class="line">        &lt;app-child-05&gt;&lt;/app-child-05&gt;</span>
<span class="line">        &lt;p&gt;来自服务的计数: {{ serviceCount }}&lt;/p&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Parent05Component</span> <span class="token punctuation">{</span></span>
<span class="line">    serviceCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> dataService<span class="token operator">:</span> DataService<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span>childToParent$<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>count <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>serviceCount <span class="token operator">=</span> count<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span><span class="token function">sendToChild</span><span class="token punctuation">(</span><span class="token string">&#39;通过服务传递的消息&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+d+`" alt=""></p></li></ol><h2 id="_3-3-属性指令-自定义指令" tabindex="-1"><a class="header-anchor" href="#_3-3-属性指令-自定义指令"><span>3.3 属性指令-自定义指令</span></a></h2><h3 id="_3-3-1-基础属性指令实现" tabindex="-1"><a class="header-anchor" href="#_3-3-1-基础属性指令实现"><span>3.3.1 基础属性指令实现</span></a></h3><ol><li><p>自定义指令 directive/focus.directive.ts</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Directive<span class="token punctuation">,</span> ElementRef<span class="token punctuation">,</span> AfterViewInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Directive</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;[appAutoFocus]&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AutoFocusDirective</span> <span class="token keyword">implements</span> <span class="token class-name">AfterViewInit</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> el<span class="token operator">:</span> ElementRef<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">ngAfterViewInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>nativeElement<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 自定义指令的代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;attr-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;input appAutoFocus placeholder=&quot;自动获取焦点&quot;&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Attr01Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 app.module 注册</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line">declarations<span class="token punctuation">[</span>AutoFocusDirective<span class="token punctuation">,</span>Attr01Component<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>路由</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">&#39;attr&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Attr01Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;基础属性指令&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+k+`" alt=""></p></li></ol><h3 id="_3-3-2-带输入参数的指令" tabindex="-1"><a class="header-anchor" href="#_3-3-2-带输入参数的指令"><span>3.3.2 带输入参数的指令</span></a></h3><ol><li><p>自定义指令 directive/focus.directive.ts</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Directive<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> HostBinding <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Directive</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;[appDynamicBorder]&#39;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DynamicBorderDirective</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Input</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> borderColorOther<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;1px solid&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Input</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> borderColor<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;#ccc&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// get borderStyle() 等于是一个组合的参数</span></span>
<span class="line">    <span class="token decorator"><span class="token at operator">@</span><span class="token function">HostBinding</span></span><span class="token punctuation">(</span><span class="token string">&#39;style.border&#39;</span><span class="token punctuation">)</span> <span class="token keyword">get</span> <span class="token function">borderStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>borderColor<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>borderColorOther<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token decorator"><span class="token at operator">@</span><span class="token function">HostBinding</span></span><span class="token punctuation">(</span><span class="token string">&#39;style.padding&#39;</span><span class="token punctuation">)</span> padding <span class="token operator">=</span> <span class="token string">&#39;10px&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 自定义指令的代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;attr-02&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;div appDynamicBorder borderColor=&quot;#ff0&quot;&gt;红色边框&lt;/div&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Attr02Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 app.module 注册</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line">declarations<span class="token punctuation">[</span>AutoFocusDirective<span class="token punctuation">,</span>Attr01Component<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>路由</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">&#39;attr&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Attr01Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;基础属性指令&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;02&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Attr02Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;带参数指令&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+v+`" alt=""></p></li></ol><h3 id="_3-3-3-响应式指令" tabindex="-1"><a class="header-anchor" href="#_3-3-3-响应式指令"><span>3.3.3 响应式指令</span></a></h3><ol><li><p>自定义指令 directive/focus.directive.ts</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Directive<span class="token punctuation">,</span> ElementRef<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> OnDestroy<span class="token punctuation">,</span> OnInit<span class="token punctuation">,</span> Renderer2 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> fromEvent<span class="token punctuation">,</span> Subscription <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> debounceTime <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs/operators&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Directive</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;[appResponsiveSize]&#39;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ResponsiveSizeDirective</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span><span class="token punctuation">,</span> OnDestroy <span class="token punctuation">{</span></span>
<span class="line">    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Input</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> appResponsiveSize<span class="token operator">:</span> <span class="token punctuation">{</span> sm<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> md<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> lg<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        sm<span class="token operator">:</span> <span class="token string">&#39;12px&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        md<span class="token operator">:</span> <span class="token string">&#39;16px&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        lg<span class="token operator">:</span> <span class="token string">&#39;20px&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> resizeSubscription<span class="token operator">!</span><span class="token operator">:</span> Subscription<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> el<span class="token operator">:</span> ElementRef<span class="token punctuation">,</span> <span class="token keyword">private</span> renderer<span class="token operator">:</span> Renderer2<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateFontSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>resizeSubscription <span class="token operator">=</span> <span class="token function">fromEvent</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">&#39;resize&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span><span class="token function">debounceTime</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateFontSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">ngOnDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>resizeSubscription<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>resizeSubscription<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">private</span> <span class="token function">updateFontSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> width <span class="token operator">=</span> window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> size<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>width <span class="token operator">&lt;</span> <span class="token number">576</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            size <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>appResponsiveSize<span class="token punctuation">.</span>sm<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>width <span class="token operator">&gt;=</span> <span class="token number">576</span> <span class="token operator">&amp;&amp;</span> width <span class="token operator">&lt;</span> <span class="token number">992</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            size <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>appResponsiveSize<span class="token punctuation">.</span>md<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            size <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>appResponsiveSize<span class="token punctuation">.</span>lg<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>nativeElement<span class="token punctuation">,</span> <span class="token string">&#39;font-size&#39;</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 自定义指令的代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;attr-03&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;p [appResponsiveSize]=&quot;{ sm: &#39;14px&#39;, md: &#39;18px&#39;, lg: &#39;22px&#39; }&quot;&gt;</span>
<span class="line">        我的字号会根据屏幕大小变化</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Attr03Component</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 app.module 注册</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line">declarations<span class="token punctuation">[</span>ResponsiveSizeDirective<span class="token punctuation">,</span>Attr03Component<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>路由</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">&#39;attr&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    children<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;01&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Attr01Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;基础属性指令&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;02&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Attr02Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;带参数指令&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;03&#39;</span><span class="token punctuation">,</span>component<span class="token operator">:</span> Attr03Component<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;响应式属性指令&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+m+`" alt=""></p></li></ol><h2 id="_3-4-内置属性指令-样式" tabindex="-1"><a class="header-anchor" href="#_3-4-内置属性指令-样式"><span>3.4 内置属性指令-样式</span></a></h2><h3 id="_3-4-1-style-样式绑定指令" tabindex="-1"><a class="header-anchor" href="#_3-4-1-style-样式绑定指令"><span>3.4.1 style 样式绑定指令</span></a></h3><ol><li><p><code>[style.property]</code> - 单一样式绑定</p><ul><li><p>组件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;style-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;div [style.color]=&quot;textColor&quot;&gt;这段文字的颜色会变化&lt;/div&gt;</span>
<span class="line">        &lt;div [style.font-size.px]=&quot;fontSize&quot;&gt;字体大小可调节&lt;/div&gt;</span>
<span class="line">        &lt;button (click) = &quot;increaseFont()&quot;&gt;字体增大&lt;/button&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Sytel01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    textColor <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    fontSize <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">increaseFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>fontSize <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+b+`" alt=""></p></li></ul></li><li><p><code>[style]</code> - 多样式绑定</p><ul><li><p>组件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;style-02&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;!-- 绑定多个样式属性 --&gt;</span>
<span class="line">        &lt;div [style]=&quot;currentStyles&quot;&gt;这个div的样式会动态变化&lt;/div&gt;</span>
<span class="line">        &lt;button (click) = &quot;updateStyles()&quot;&gt;更新样式&lt;/button&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Sytel02Component</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    currentStyles <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&#39;font-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;italic&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;font-weight&#39;</span><span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;background-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#f0f0f0&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">updateStyles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>currentStyles <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentStyles<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;background-color&#39;</span><span class="token operator">:</span><span class="token string">&#39;#ff00ff&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+g+`" alt=""></p></li></ul></li><li><p>带单位的样式绑定</p><ul><li><p>组件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;style-03&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;!-- 绑定多个样式属性 --&gt;</span>
<span class="line">        &lt;div [style.height.px]=&quot;width&quot; [style.width.%]=&quot;height&quot;&gt;1&lt;/div&gt;</span>
<span class="line">        &lt;div [style.margin.rem]=&quot;margin&quot;&gt;2&lt;/div&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    styles<span class="token operator">:</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        div{</span>
<span class="line">        background-color: pink;</span>
<span class="line">        }</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Sytel03Component</span> <span class="token punctuation">{</span></span>
<span class="line">    width <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span></span>
<span class="line">    height <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">    margin <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+h+`" alt=""></p></li></ul></li></ol><h3 id="_3-4-2-ngstyle-动态内联样式" tabindex="-1"><a class="header-anchor" href="#_3-4-2-ngstyle-动态内联样式"><span>3.4.2 ngStyle 动态内联样式</span></a></h3><blockquote><p>注意：必须在跟组件中注册</p></blockquote><ol><li><p>对象语法</p><ul><li><p>组件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;ngstyle-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;div [ngStyle]=&quot;{&#39;color&#39;: textColor, &#39;font-size.px&#39;: fontSize}&quot;&gt;</span>
<span class="line">        这段文字的颜色会变化</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">        &lt;button (click) = &quot;increaseFont()&quot;&gt;字体增大&lt;/button&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">NgSytel01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    textColor <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    fontSize <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">increaseFont</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>fontSize <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+y+`" alt=""></p></li></ul></li><li><p>根据条件设置样式</p><ul><li><p>组件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;style-02&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;!-- 绑定多个样式属性 --&gt;</span>
<span class="line">        &lt;div [style]=&quot;currentStyles&quot;&gt;这个div的样式会动态变化&lt;/div&gt;</span>
<span class="line">        &lt;button (click) = &quot;updateStyles()&quot;&gt;更新样式&lt;/button&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Sytel02Component</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    currentStyles <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&#39;font-style&#39;</span><span class="token operator">:</span> <span class="token string">&#39;italic&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;font-weight&#39;</span><span class="token operator">:</span> <span class="token string">&#39;bold&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;background-color&#39;</span><span class="token operator">:</span> <span class="token string">&#39;#f0f0f0&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">updateStyles</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>currentStyles <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>currentStyles<span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;background-color&#39;</span><span class="token operator">:</span><span class="token string">&#39;#ff00ff&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+f+`" alt=""></p></li></ul></li><li><p>使用组件方法返回样式对象</p><ul><li><p>组件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;style-03&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;!-- 绑定多个样式属性 --&gt;</span>
<span class="line">        &lt;div [style.height.px]=&quot;width&quot; [style.width.%]=&quot;height&quot;&gt;1&lt;/div&gt;</span>
<span class="line">        &lt;div [style.margin.rem]=&quot;margin&quot;&gt;2&lt;/div&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    styles<span class="token operator">:</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        div{</span>
<span class="line">        background-color: pink;</span>
<span class="line">        }</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Sytel03Component</span> <span class="token punctuation">{</span></span>
<span class="line">    width <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span></span>
<span class="line">    height <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span></span>
<span class="line">    margin <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+q+`" alt=""></p></li></ul></li></ol><h3 id="_3-4-3-类绑定指令-class" tabindex="-1"><a class="header-anchor" href="#_3-4-3-类绑定指令-class"><span>3.4.3 类绑定指令 class</span></a></h3><ul><li><p>组件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;class-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;p [class.active]=&quot;showType&quot;&gt;被改变样式的文字&lt;/p&gt;</span>
<span class="line">        &lt;button (click)=&quot;changeColor()&quot;&gt;点击后改变颜色&lt;/button&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    styles<span class="token operator">:</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        .active {</span>
<span class="line">        font-weight: bold;</span>
<span class="line">        color: red;</span>
<span class="line">        font-size:20px;</span>
<span class="line">        }</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Class01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    showType <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token function">changeColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>showType <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>showType</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+w+`" alt=""></p></li></ul><h3 id="_3-4-4-ngclass-加载动态样式" tabindex="-1"><a class="header-anchor" href="#_3-4-4-ngclass-加载动态样式"><span>3.4.4 ngClass 加载动态样式</span></a></h3><ol><li><p>对象语法</p><ul><li><p>组件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;ngClass-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;!-- 根据条件添加类 --&gt;</span>
<span class="line">        &lt;div [ngClass]=&quot;{ &#39;active&#39;: isActive, &#39;error&#39;: hasError }&quot;&gt;</span>
<span class="line">        对象语法示例</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;!-- 使用组件属性 --&gt;</span>
<span class="line">        &lt;button [ngClass]=&quot;buttonClasses&quot;&gt;点击我&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">        &lt;!-- 动态计算 --&gt;</span>
<span class="line">        &lt;div [ngClass]=&quot;{</span>
<span class="line">        &#39;text-success&#39;: score &gt;= 80,</span>
<span class="line">        &#39;text-warning&#39;: score &gt;= 60 &amp;&amp; score &lt; 80,</span>
<span class="line">        &#39;text-danger&#39;: score &lt; 60</span>
<span class="line">        }&quot;&gt;</span>
<span class="line">        分数: {{ score }}</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    styles<span class="token operator">:</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        /* 状态样式 */</span>
<span class="line">        .active { background-color: #e3f2fd; }</span>
<span class="line">        .error { border-color: red; color: red; }</span>
<span class="line"></span>
<span class="line">        /* 按钮样式 */</span>
<span class="line">        .btn { padding: 8px 16px; border: none; cursor: pointer; }</span>
<span class="line">        .btn-primary { background: blue; color: white; }</span>
<span class="line">        .btn-disabled { opacity: 0.5; cursor: not-allowed; }</span>
<span class="line"></span>
<span class="line">        /* 文本样式 */</span>
<span class="line">        .text-success { color: green; }</span>
<span class="line">        .text-warning { color: orange; }</span>
<span class="line">        .text-danger { color: red; }</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">NgClass01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    isActive <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    hasError <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    score <span class="token operator">=</span> <span class="token number">75</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    buttonClasses <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">&#39;btn&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;btn-primary&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">&#39;btn-disabled&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+C+`" alt=""></p></li></ul></li><li><p>数组语法</p><ul><li><p>组件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;ngClass-02&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;!-- 静态类数组 --&gt;</span>
<span class="line">        &lt;div [ngClass]=&quot;[&#39;base-class&#39;, &#39;additional-class&#39;]&quot;&gt;</span>
<span class="line">            静态类数组</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;!-- 混合静态和动态类 --&gt;</span>
<span class="line">        &lt;div [ngClass]=&quot;[&#39;card&#39;, isFeatured ? &#39;featured&#39; : &#39;&#39;]&quot;&gt;</span>
<span class="line">            卡片内容</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;!-- 使用组件方法返回数组 --&gt;</span>
<span class="line">        &lt;div [ngClass]=&quot;getClasses()&quot;&gt;</span>
<span class="line">            动态类数组</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;!-- 条件类组合 --&gt;</span>
<span class="line">        &lt;button [ngClass]=&quot;[</span>
<span class="line">            &#39;btn&#39;,</span>
<span class="line">            type === &#39;primary&#39; ? &#39;btn-primary&#39; : &#39;btn-secondary&#39;,</span>
<span class="line">            size === &#39;large&#39; ? &#39;btn-lg&#39; : &#39;&#39;</span>
<span class="line">        ]&quot;&gt;</span>
<span class="line">            按钮</span>
<span class="line">        &lt;/button&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    styles<span class="token operator">:</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        /* 基础样式 */</span>
<span class="line">        .base-class { padding: 10px; margin: 5px; }</span>
<span class="line">        .additional-class { border: 1px solid #ccc; }</span>
<span class="line"></span>
<span class="line">        /* 卡片样式 */</span>
<span class="line">        .card { border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }</span>
<span class="line">        .featured { border: 2px solid gold; }</span>
<span class="line"></span>
<span class="line">        /* 用户卡片 */</span>
<span class="line">        .user-card { padding: 15px; margin: 10px; }</span>
<span class="line">        .highlighted {</span>
<span class="line">            background-color: #fff3cd;</span>
<span class="line">            border-color: #ffc107;</span>
<span class="line">            box-shadow: 0 2px 8px rgba(255, 193, 7, 0.3);</span>
<span class="line">        }</span>
<span class="line">        .animated {</span>
<span class="line">            animation: pulse 2s infinite;</span>
<span class="line">        }</span>
<span class="line">        @keyframes pulse {</span>
<span class="line">            0% { transform: scale(1); }</span>
<span class="line">            50% { transform: scale(1.05); }</span>
<span class="line">            100% { transform: scale(1); }</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        /* 按钮样式 */</span>
<span class="line">        .btn { padding: 8px 16px; border: none; cursor: pointer; }</span>
<span class="line">        .btn-primary { background: blue; color: white; }</span>
<span class="line">        .btn-secondary { background: gray; color: white; }</span>
<span class="line">        .btn-disabled { opacity: 0.5; cursor: not-allowed; }</span>
<span class="line">        .btn-lg { font-size:&quot;22px&quot; }</span>
<span class="line"></span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">NgClass02Component</span> <span class="token punctuation">{</span></span>
<span class="line">    isFeatured <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    type <span class="token operator">=</span> <span class="token string">&#39;primary&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    size <span class="token operator">=</span> <span class="token string">&#39;large&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">getClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span></span>
<span class="line">            <span class="token string">&#39;user-card&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>isFeatured <span class="token operator">?</span> <span class="token string">&#39;highlighted&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&#39;animated&#39;</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+x+`" alt=""></p></li></ul></li><li><p>字符串语法</p><ul><li><p>组件</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;ngClass-03&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;!-- 直接字符串 --&gt;</span>
<span class="line">        &lt;div [ngClass]=&quot;&#39;class1 class2 class3&#39;&quot;&gt;</span>
<span class="line">            字符串语法</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;!-- 动态字符串 --&gt;</span>
<span class="line">        &lt;div [ngClass]=&quot;currentClassString&quot;&gt;</span>
<span class="line">            动态类字符串</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;!-- 条件字符串 --&gt;</span>
<span class="line">        &lt;div [ngClass]=&quot;isSpecial ? &#39;special highlighted&#39; : &#39;normal&#39;&quot;&gt;</span>
<span class="line">            条件类字符串</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;!-- 使用模板字符串 --&gt;</span>
<span class="line">        &lt;div [ngClass]=&quot;&#39;base-&#39; + variant + &#39; size-&#39; + size&quot;&gt;</span>
<span class="line">            模板字符串类</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    styles<span class="token operator">:</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        .class1 { color: red }</span>
<span class="line">        .class2 { font-size: 22px }</span>
<span class="line">        .class3 { font-weight: bold }</span>
<span class="line">        .alert { padding: 10px;background-color:pink }</span>
<span class="line">        .alert-info { color: orange; font-size: 12px }</span>
<span class="line">        .special { font-style: italic }</span>
<span class="line">        .highlighted {</span>
<span class="line">            background-color: #fff3cd;</span>
<span class="line">            border-color: #ffc107;</span>
<span class="line">            box-shadow: 0 2px 8px rgba(255, 193, 7, 0.3);</span>
<span class="line">        }</span>
<span class="line">        .base-primary {</span>
<span class="line">            background-color: #77ec5fff;</span>
<span class="line">        }</span>
<span class="line">        .size-large {</span>
<span class="line">            font-size: 26px</span>
<span class="line">        }</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">NgClass03Component</span> <span class="token punctuation">{</span></span>
<span class="line">    currentClassString <span class="token operator">=</span> <span class="token string">&#39;alert alert-info&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    isSpecial <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    variant <span class="token operator">=</span> <span class="token string">&#39;primary&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    size <span class="token operator">=</span> <span class="token string">&#39;large&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+_+`" alt=""></p></li></ul></li></ol><h2 id="_3-5-内置属性指令-表单" tabindex="-1"><a class="header-anchor" href="#_3-5-内置属性指令-表单"><span>3.5 内置属性指令-表单</span></a></h2><h3 id="_3-4-1-表单指令介绍" tabindex="-1"><a class="header-anchor" href="#_3-4-1-表单指令介绍"><span>3.4.1 表单指令介绍</span></a></h3><ol><li><p>指令类型</p><table><thead><tr><th>指令</th><th>适用策略</th><th>作用与描述</th></tr></thead><tbody><tr><td>ngModelGroup</td><td>模板驱动</td><td>为模板驱动表单中的一组控件创建一个顶级 FormGroup 的子组。用于分组验证和组织数据。</td></tr><tr><td>formControl</td><td>响应式</td><td>将一个现有的、在组件类中创建的 FormControl 实例绑定到模板中的一个表单控件上。</td></tr><tr><td>formControlName</td><td>响应式</td><td>将一个现有的、在组件类中创建的 FormControl 实例（它是父 FormGroup 的一部分）通过其名称绑定到模板中的一个表单控件上。</td></tr><tr><td>formGroup</td><td>响应式</td><td>将一个现有的、在组件类中创建的 FormGroup 实例绑定到一个 <code>&lt;form&gt;</code> 元素上。</td></tr><tr><td>formGroupName</td><td>响应式</td><td>将一个嵌套的、在组件类中创建的 FormGroup 实例（它是父 FormGroup 的一部分）通过其名称绑定到模板中的一个 DOM 元素（如 div）上。</td></tr><tr><td>formArrayName</td><td>响应式</td><td>将一个嵌套的、在组件类中创建的 FormArray 实例（它是父 FormGroup 的一部分）通过其名称绑定到模板中的一个 DOM 元素上。</td></tr></tbody></table></li><li><p>前置准备</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> NgModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/platform-browser&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FormsModule<span class="token punctuation">,</span> ReactiveFormsModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/forms&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> AppComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./app.component&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">NgModule</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    declarations<span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    imports<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        BrowserModule<span class="token punctuation">,</span></span>
<span class="line">        FormsModule<span class="token punctuation">,</span>        <span class="token comment">// 用于模板驱动表单</span></span>
<span class="line">        ReactiveFormsModule <span class="token comment">// 用于响应式表单</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    bootstrap<span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_3-4-2-ngmodel-验证表单" tabindex="-1"><a class="header-anchor" href="#_3-4-2-ngmodel-验证表单"><span>3.4.2 <code>ngModel</code> 验证表单</span></a></h3><ol><li><p>状态属性详解</p><ol><li>valid / invalid <ul><li>作用: 表示控件的验证状态。</li><li>valid: true - 控件的值通过了所有验证规则</li><li>invalid: true - 控件的值未通过至少一个验证规则</li></ul></li><li>touched / untouched <ul><li>作用: 表示用户是否与控件发生过交互（聚焦后又失焦）。</li><li>touched: true - 用户已经聚焦过该控件然后离开了（blur）</li><li>untouched: true - 用户从未聚焦过该控件，或者聚焦后还未离开</li></ul></li><li>dirty / pristine <ul><li>作用: 表示用户是否修改过控件的值。</li><li>dirty: true - 用户已经修改过控件的值（至少输入过一次）</li><li>pristine: true - 控件的值仍然是初始值，用户从未修改过</li></ul></li><li>内置验证器对应的 errors <ol><li><p>required - 必填验证</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token comment">// 当值为空时</span></span>
<span class="line">nameCtrl<span class="token punctuation">.</span>errors <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;required&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>minlength - 最小长度验证</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token comment">// 当输入 &quot;abc&quot; (长度3) 时</span></span>
<span class="line">pwdCtrl<span class="token punctuation">.</span>errors <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&#39;minlength&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        requiredLength<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">        actualLength<span class="token operator">:</span> <span class="token number">3</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>maxlength - 最大长度验证</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token comment">// 当输入超过50个字符时</span></span>
<span class="line">titleCtrl<span class="token punctuation">.</span>errors <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&#39;maxlength&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        requiredLength<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span></span>
<span class="line">        actualLength<span class="token operator">:</span> <span class="token number">55</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>email - 邮箱格式验证</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token comment">// 当输入 &quot;invalid-email&quot; 时</span></span>
<span class="line">emailCtrl<span class="token punctuation">.</span>errors <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;email&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>pattern - 正则表达式验证</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token comment">// 当输入 &quot;abc123&quot; 时</span></span>
<span class="line">phoneCtrl<span class="token punctuation">.</span>errors <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">&#39;pattern&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        requiredPattern<span class="token operator">:</span> <span class="token string">&#39;^[0-9]{10}$&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        actualValue<span class="token operator">:</span> <span class="token string">&#39;abc123&#39;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol></li><li><p>代码展示</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;ngMode-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    &lt;input</span>
<span class="line">        type=&quot;email&quot;</span>
<span class="line">        name=&quot;email&quot;</span>
<span class="line">        [(ngModel)]=&quot;userEmail&quot;</span>
<span class="line">        required</span>
<span class="line">        email</span>
<span class="line">        #emailCtrl=&quot;ngModel&quot;&gt;</span>
<span class="line"></span>
<span class="line">        &lt;div *ngIf=&quot;emailCtrl.invalid &amp;&amp; emailCtrl.touched&quot;&gt;</span>
<span class="line">            &lt;div *ngIf=&quot;emailCtrl.errors?.[&#39;required&#39;]&quot;&gt;邮箱必填&lt;/div&gt;</span>
<span class="line">            &lt;div *ngIf=&quot;emailCtrl.errors?.[&#39;email&#39;]&quot;&gt;邮箱格式不正确&lt;/div&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;p&gt;控件状态:</span>
<span class="line">            Valid: {{ emailCtrl.valid }},</span>
<span class="line">            Touched: {{ emailCtrl.touched }},</span>
<span class="line">            Dirty: {{ emailCtrl.dirty }}</span>
<span class="line">        &lt;/p&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">NgModel01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    userEmail<span class="token operator">:</span><span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+F+`" alt=""></p></li></ol><h3 id="_3-4-3-ngmodelgroup-分组示例" tabindex="-1"><a class="header-anchor" href="#_3-4-3-ngmodelgroup-分组示例"><span>3.4.3 ngModelGroup - 分组示例</span></a></h3><ol><li><p>组件代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;ngModelGroup-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;form #userForm=&quot;ngForm&quot;&gt;</span>
<span class="line"></span>
<span class="line">            &lt;!-- 单个字段 --&gt;</span>
<span class="line">            &lt;div&gt;</span>
<span class="line">                &lt;label&gt;用户名:&lt;/label&gt;</span>
<span class="line">                &lt;input [(ngModel)]=&quot;user.username&quot; name=&quot;username&quot; placeholder=&quot;输入用户名&quot;&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">            &lt;!-- 地址信息分组 --&gt;</span>
<span class="line">            &lt;div ngModelGroup=&quot;address&quot; </span>
<span class="line">                style=&quot;border: 1px solid #ccc; padding: 10px; margin: 10px 0;&quot;</span>
<span class="line">            &gt;</span>
<span class="line">                &lt;h3&gt;地址信息&lt;/h3&gt;</span>
<span class="line"></span>
<span class="line">                &lt;div&gt;</span>
<span class="line">                    &lt;label&gt;街道:&lt;/label&gt;</span>
<span class="line">                    &lt;input [(ngModel)]=&quot;user.address.street&quot; name=&quot;street&quot; placeholder=&quot;输入街道&quot;&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">                &lt;div&gt;</span>
<span class="line">                    &lt;label&gt;城市:&lt;/label&gt;</span>
<span class="line">                    &lt;input [(ngModel)]=&quot;user.address.city&quot; name=&quot;city&quot; placeholder=&quot;输入城市&quot;&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">                &lt;div&gt;</span>
<span class="line">                    &lt;label&gt;邮编:&lt;/label&gt;</span>
<span class="line">                    &lt;input [(ngModel)]=&quot;user.address.zipCode&quot; name=&quot;zipCode&quot; placeholder=&quot;输入邮编&quot;&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">            &lt;!-- 显示表单值 --&gt;</span>
<span class="line">            &lt;div style=&quot;margin-top: 20px;&quot;&gt;</span>
<span class="line">                &lt;h4&gt;当前表单值:&lt;/h4&gt;</span>
<span class="line">                &lt;pre&gt;{{ userForm.value | json }}&lt;/pre&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;/form&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">NgModelGroup01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    user <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        username<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">        address<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            street<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            city<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span></span>
<span class="line">            zipCode<span class="token operator">:</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+S+`" alt=""></p></li></ol><h3 id="_3-4-4-formcontrol-独立控件" tabindex="-1"><a class="header-anchor" href="#_3-4-4-formcontrol-独立控件"><span>3.4.4 formControl - 独立控件</span></a></h3><ol><li><p>组件代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FormControl<span class="token punctuation">,</span>Validators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/forms&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;formControl-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;input type=&quot;text&quot; [formControl]=&quot;usernameControl&quot;&gt;</span>
<span class="line">        &lt;p&gt;值: {{ usernameControl.value }}&lt;/p&gt;</span>
<span class="line">        &lt;p&gt;状态: {{ usernameControl.status }}&lt;/p&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FormControl01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    usernameControl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">&#39;初始值&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        validators<span class="token operator">:</span> <span class="token punctuation">[</span>Validators<span class="token punctuation">.</span>required<span class="token punctuation">,</span> Validators<span class="token punctuation">.</span><span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+j+`" alt=""></p></li></ol><h3 id="_3-4-5-formgroup-formcontrolname-基本表单" tabindex="-1"><a class="header-anchor" href="#_3-4-5-formgroup-formcontrolname-基本表单"><span>3.4.5 formGroup + formControlName - 基本表单</span></a></h3><ol><li><p>组件代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FormGroup<span class="token punctuation">,</span> FormControl<span class="token punctuation">,</span> Validators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/forms&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;baseForml-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;form [formGroup]=&quot;loginForm&quot; (ngSubmit)=&quot;onSubmit()&quot;&gt;</span>
<span class="line">            &lt;input type=&quot;text&quot; formControlName=&quot;username&quot; placeholder=&quot;用户名&quot;&gt;</span>
<span class="line">            &lt;input type=&quot;password&quot; formControlName=&quot;password&quot; placeholder=&quot;密码&quot;&gt;</span>
<span class="line"></span>
<span class="line">            &lt;button type=&quot;submit&quot; [disabled]=&quot;!loginForm.valid&quot;&gt;登录&lt;/button&gt;</span>
<span class="line">        &lt;/form&gt;</span>
<span class="line"></span>
<span class="line">        &lt;p&gt;表单值: {{ loginForm.value | json }}&lt;/p&gt;</span>
<span class="line">        &lt;p&gt;表单状态: {{ loginForm.status }}&lt;/p&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">BaseForm01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    loginForm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        username<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        password<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>Validators<span class="token punctuation">.</span>required<span class="token punctuation">,</span> Validators<span class="token punctuation">.</span><span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">onSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;提交的数据:&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>loginForm<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+z+`" alt=""></p></li></ol><h3 id="_3-4-6-formgroupname-嵌套分组" tabindex="-1"><a class="header-anchor" href="#_3-4-6-formgroupname-嵌套分组"><span>3.4.6 formGroupName - 嵌套分组</span></a></h3><ol><li><p>组件代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FormGroup<span class="token punctuation">,</span> FormControl<span class="token punctuation">,</span> Validators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/forms&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;formGroupName-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;form [formGroup]=&quot;userForm&quot;&gt;</span>
<span class="line">            &lt;input type=&quot;text&quot; formControlName=&quot;name&quot; placeholder=&quot;姓名&quot;&gt;</span>
<span class="line"></span>
<span class="line">            &lt;div formGroupName=&quot;contact&quot;&gt;</span>
<span class="line">                &lt;input type=&quot;email&quot; formControlName=&quot;email&quot; placeholder=&quot;邮箱&quot;&gt;</span>
<span class="line">                &lt;input type=&quot;tel&quot; formControlName=&quot;phone&quot; placeholder=&quot;电话&quot;&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        &lt;/form&gt;</span>
<span class="line"></span>
<span class="line">        &lt;p&gt;表单值: {{ userForm.value | json }}&lt;/p&gt;</span>
<span class="line">        &lt;p&gt;表单状态: {{ userForm.status }}&lt;/p&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FormGroupName01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    userForm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        name<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        contact<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            email<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>Validators<span class="token punctuation">.</span>required<span class="token punctuation">,</span>Validators<span class="token punctuation">.</span>email<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            phone<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>Validators<span class="token punctuation">.</span>required<span class="token punctuation">,</span>Validators<span class="token punctuation">.</span><span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+A+`" alt=""></p></li></ol><h3 id="_3-4-7-formarrayname-动态表单数组" tabindex="-1"><a class="header-anchor" href="#_3-4-7-formarrayname-动态表单数组"><span>3.4.7 formArrayName - 动态表单数组</span></a></h3><ol><li><p>组件代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FormGroup<span class="token punctuation">,</span> FormArray<span class="token punctuation">,</span> FormControl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/forms&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;FormArray-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;h3&gt;兴趣爱好列表&lt;/h3&gt;</span>
<span class="line">        &lt;form [formGroup]=&quot;userForm&quot;&gt;</span>
<span class="line">            &lt;div formArrayName=&quot;hobbies&quot;&gt;</span>
<span class="line">                &lt;div *ngFor=&quot;let hobby of hobbies.controls; let i = index&quot; class=&quot;hobby-item&quot;&gt;</span>
<span class="line">                    &lt;input [formControlName]=&quot;i&quot; placeholder=&quot;输入爱好&quot;&gt;</span>
<span class="line">                    &lt;button type=&quot;button&quot; (click)=&quot;removeHobby(i)&quot;&gt;删除&lt;/button&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">            &lt;button type=&quot;button&quot; (click)=&quot;addHobby()&quot;&gt;添加爱好&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">            &lt;div&gt;</span>
<span class="line">                &lt;h4&gt;当前爱好:&lt;/h4&gt;</span>
<span class="line">                &lt;pre&gt;{{ hobbies.value | json }}&lt;/pre&gt;</span>
<span class="line">                &lt;p&gt;共有 {{ hobbies.length }} 个爱好&lt;/p&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        &lt;/form&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    styles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        .hobby-item {</span>
<span class="line">            margin: 10px 0;</span>
<span class="line">            display: flex;</span>
<span class="line">            gap: 10px;</span>
<span class="line">        }</span>
<span class="line">        button {</span>
<span class="line">            padding: 5px 10px;</span>
<span class="line">        }</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FormArray01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    userForm<span class="token operator">:</span> FormGroup<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>userForm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormGroup</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        hobbies<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">FormArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">            <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">&#39;游泳&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">&#39;阅读&#39;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取 hobbies FormArray</span></span>
<span class="line">    <span class="token keyword">get</span> <span class="token function">hobbies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userForm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;hobbies&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> FormArray<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 添加新爱好</span></span>
<span class="line">    <span class="token function">addHobby</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>hobbies<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FormControl</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 删除爱好</span></span>
<span class="line">    <span class="token function">removeHobby</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>hobbies<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+M+`" alt=""></p></li></ol><h3 id="_3-4-8-formbuilder" tabindex="-1"><a class="header-anchor" href="#_3-4-8-formbuilder"><span>3.4.8 FormBuilder</span></a></h3><p>FormBuilder 是 Angular 的一个服务类，它提供了创建 FormGroup、FormControl 和 FormArray 的快捷方法，使表单创建代码更加简洁和可读。</p><ol><li><p>创建 FormControl 的简单示例</p><ul><li><p>组件代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;formBuilder-control&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;div&gt;</span>
<span class="line">            &lt;label&gt;用户名:&lt;/label&gt;</span>
<span class="line">            &lt;input [formControl]=&quot;usernameControl&quot;&gt;</span>
<span class="line">            &lt;p&gt;值: {{ usernameControl.value }}&lt;/p&gt;</span>
<span class="line">            &lt;p&gt;状态: {{ usernameControl.status }}&lt;/p&gt;</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FormBuilder01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用 FormBuilder 创建 FormControl</span></span>
<span class="line">    usernameControl <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fb<span class="token punctuation">.</span><span class="token function">control</span><span class="token punctuation">(</span><span class="token string">&#39;默认值&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span></span>
<span class="line">        Validators<span class="token punctuation">.</span>required<span class="token punctuation">,</span></span>
<span class="line">        Validators<span class="token punctuation">.</span><span class="token function">minLength</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> fb<span class="token operator">:</span> FormBuilder<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+D+`" alt=""></p></li></ul></li><li><p>创建 FormGroup 的简单示例</p><ul><li><p>组件代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;formBuilder-group&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;form [formGroup]=&quot;userForm&quot;&gt;</span>
<span class="line">            &lt;input formControlName=&quot;firstName&quot; placeholder=&quot;名字&quot;&gt;</span>
<span class="line">            &lt;input formControlName=&quot;lastName&quot; placeholder=&quot;姓氏&quot;&gt;</span>
<span class="line">            &lt;p&gt;表单值: {{ userForm.value | json }}&lt;/p&gt;</span>
<span class="line">            &lt;p&gt;状态: {{ userForm.status }}&lt;/p&gt;</span>
<span class="line">        &lt;/form&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FormBuilder02Component</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 使用 FormBuilder 创建 FormGroup</span></span>
<span class="line">    userForm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fb<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        firstName<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        lastName<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> fb<span class="token operator">:</span> FormBuilder<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+I+`" alt=""></p></li></ul></li><li><p>创建 FormArray 的简单示例</p><ul><li><p>组件代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;formBuilder-array&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;h3&gt;兴趣爱好列表&lt;/h3&gt;</span>
<span class="line">        &lt;form [formGroup]=&quot;userForm&quot;&gt;</span>
<span class="line">            &lt;div formArrayName=&quot;hobbies&quot;&gt;</span>
<span class="line">                &lt;div *ngFor=&quot;let hobby of hobbies.controls; let i = index&quot; class=&quot;hobby-item&quot;&gt;</span>
<span class="line">                    &lt;input [formControlName]=&quot;i&quot; placeholder=&quot;输入爱好&quot;&gt;</span>
<span class="line">                    &lt;button type=&quot;button&quot; (click)=&quot;removeHobby(i)&quot;&gt;删除&lt;/button&gt;</span>
<span class="line">                &lt;/div&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">            &lt;button type=&quot;button&quot; (click)=&quot;addHobby()&quot;&gt;添加爱好&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">            &lt;div&gt;</span>
<span class="line">                &lt;h4&gt;当前爱好:&lt;/h4&gt;</span>
<span class="line">                &lt;pre&gt;{{ hobbies.value | json }}&lt;/pre&gt;</span>
<span class="line">                &lt;p&gt;共有 {{ hobbies.length }} 个爱好&lt;/p&gt;</span>
<span class="line">            &lt;/div&gt;</span>
<span class="line">        &lt;/form&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    styles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        .hobby-item {</span>
<span class="line">            margin: 10px 0;</span>
<span class="line">            display: flex;</span>
<span class="line">            gap: 10px;</span>
<span class="line">        }</span>
<span class="line">        button {</span>
<span class="line">            padding: 5px 10px;</span>
<span class="line">        }</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">FormBuilder03Component</span> <span class="token punctuation">{</span></span>
<span class="line">    userForm<span class="token operator">:</span> FormGroup<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> fb<span class="token operator">:</span> FormBuilder<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>userForm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fb<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            hobbies<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fb<span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">                <span class="token string">&#39;游泳&#39;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&#39;阅读&#39;</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 获取 hobbies FormArray</span></span>
<span class="line">    <span class="token keyword">get</span> <span class="token function">hobbies</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userForm<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;hobbies&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> FormArray<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 添加新爱好</span></span>
<span class="line">    <span class="token function">addHobby</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>hobbies<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>fb<span class="token punctuation">.</span><span class="token function">control</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 删除爱好</span></span>
<span class="line">    <span class="token function">removeHobby</span><span class="token punctuation">(</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>hobbies<span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+T+`" alt=""></p></li></ul></li></ol><h2 id="_3-6-内置属性指令-html属性" tabindex="-1"><a class="header-anchor" href="#_3-6-内置属性指令-html属性"><span>3.6 内置属性指令-HTML属性</span></a></h2><h3 id="_3-6-1-hidden-显示-隐藏" tabindex="-1"><a class="header-anchor" href="#_3-6-1-hidden-显示-隐藏"><span>3.6.1 <code>[hidden]</code> - 显示/隐藏</span></a></h3><ol><li><p>示例</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token comment">&lt;!-- 简单隐藏 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">[hidden]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!isVisible<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>项目代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;hidden-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;h3&gt;内容显示控制&lt;/h3&gt;</span>
<span class="line"></span>
<span class="line">        &lt;button (click)=&quot;isVisible = !isVisible&quot;&gt;</span>
<span class="line">            {{ isVisible ? &#39;隐藏&#39; : &#39;显示&#39; }}内容</span>
<span class="line">        &lt;/button&gt;</span>
<span class="line"></span>
<span class="line">        &lt;button (click)=&quot;showSecret = !showSecret&quot;&gt;</span>
<span class="line">            {{ showSecret ? &#39;隐藏&#39; : &#39;显示&#39; }}秘密</span>
<span class="line">        &lt;/button&gt;</span>
<span class="line"></span>
<span class="line">        &lt;div [hidden]=&quot;!isVisible&quot;&gt;这是可见的内容&lt;/div&gt;</span>
<span class="line">        &lt;div [hidden]=&quot;!showSecret&quot;&gt;🔒 秘密信息&lt;/div&gt;</span>
<span class="line">        &lt;div [hidden]=&quot;!isVisible || !showSecret&quot;&gt;只有两个都显示时我才出现&lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;h4&gt;权限控制&lt;/h4&gt;</span>
<span class="line">        &lt;div [hidden]=&quot;!user.isAdmin&quot;&gt;管理员功能&lt;/div&gt;</span>
<span class="line">        &lt;div [hidden]=&quot;user.level &lt; 3&quot;&gt;VIP功能&lt;/div&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Hidden01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    isVisible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    showSecret <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    user <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        isAdmin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        level<span class="token operator">:</span> <span class="token number">5</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+N+`" alt=""></p></li></ol><h3 id="_3-6-2-title-工具提示" tabindex="-1"><a class="header-anchor" href="#_3-6-2-title-工具提示"><span>3.6.2 <code>[title]</code> - 工具提示</span></a></h3><ol><li><p>示例</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">[title]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tooltipText<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>悬停查看提示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>项目代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"></span>
<span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;title-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;h3&gt;悬停提示示例&lt;/h3&gt;</span>
<span class="line"></span>
<span class="line">        &lt;button [title]=&quot;buttonTooltip&quot;&gt;悬停查看按钮提示&lt;/button&gt;</span>
<span class="line"></span>
<span class="line">        &lt;input</span>
<span class="line">        type=&quot;text&quot;</span>
<span class="line">        [title]=&quot;inputTitle&quot;</span>
<span class="line">        placeholder=&quot;输入内容&quot;</span>
<span class="line">        (input)=&quot;onInputChange($event)&quot;&gt;</span>
<span class="line"></span>
<span class="line">        &lt;div [title]=&quot;isValid ? &#39;数据有效&#39; : &#39;请检查输入&#39;&quot;&gt;</span>
<span class="line">            数据验证状态: {{ isValid ? &#39;有效&#39; : &#39;无效&#39; }}</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;span [title]=&quot;getUserTooltip()&quot;&gt;用户信息&lt;/span&gt;</span>
<span class="line"></span>
<span class="line">        &lt;img</span>
<span class="line">        src=&quot;https://via.placeholder.com/50&quot;</span>
<span class="line">        [title]=&quot;&#39;图片ID: &#39; + imageId&quot;</span>
<span class="line">        alt=&quot;示例图片&quot;&gt;</span>
<span class="line"></span>
<span class="line">        &lt;a href=&quot;#&quot; [title]=&quot;linkDescription&quot;&gt;重要链接&lt;/a&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Title01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    buttonTooltip <span class="token operator">=</span> <span class="token string">&#39;点击此按钮执行操作&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    inputTitle <span class="token operator">=</span> <span class="token string">&#39;请输入您的姓名&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    isValid <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    imageId <span class="token operator">=</span> <span class="token string">&#39;12345&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    linkDescription <span class="token operator">=</span> <span class="token string">&#39;这是一个导航链接&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">getUserTooltip</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">用户信息：张三，25岁，管理员</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">onInputChange</span><span class="token punctuation">(</span>event<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>isValid <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+V+`" alt=""></p></li></ol><h3 id="_3-6-3-tabindex-标签索引" tabindex="-1"><a class="header-anchor" href="#_3-6-3-tabindex-标签索引"><span>3.6.3 <code>[tabindex]</code> - 标签索引</span></a></h3><ol><li><p>示例</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token comment">&lt;!-- 简单隐藏 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">[tabindex]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isDisabled ? -1 : 0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>项目代码</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre><code><span class="line"><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    selector<span class="token operator">:</span> <span class="token string">&#39;tabindex-01&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">        &lt;h3&gt;Tab键导航顺序&lt;/h3&gt;</span>
<span class="line">        &lt;p&gt;使用 Tab 键在不同元素间导航&lt;/p&gt;</span>
<span class="line"></span>
<span class="line">        &lt;input type=&quot;text&quot; placeholder=&quot;第一个输入框&quot; tabindex=&quot;1&quot;&gt;</span>
<span class="line">        &lt;input type=&quot;text&quot; placeholder=&quot;第二个输入框&quot; tabindex=&quot;2&quot;&gt;</span>
<span class="line"></span>
<span class="line">        &lt;button (click)=&quot;toggleDisabled()&quot; [tabindex]=&quot;isDisabled ? -1 : 0&quot;&gt;</span>
<span class="line">            {{ isDisabled ? &#39;禁用按钮&#39; : &#39;可点击按钮&#39; }}</span>
<span class="line">        &lt;/button&gt;</span>
<span class="line"></span>
<span class="line">        &lt;div [tabindex]=&quot;0&quot; (keydown.enter)=&quot;onDivClick()&quot;&gt;</span>
<span class="line">            这个div也可以获得焦点（按Enter触发）</span>
<span class="line">        &lt;/div&gt;</span>
<span class="line"></span>
<span class="line">        &lt;h4&gt;动态Tab索引&lt;/h4&gt;</span>
<span class="line">        &lt;button *ngFor=&quot;let btn of buttons; let i = index&quot;</span>
<span class="line">                [tabindex]=&quot;i + 10&quot;&gt;</span>
<span class="line">            按钮 {{ i + 1 }}</span>
<span class="line">        &lt;/button&gt;</span>
<span class="line"></span>
<span class="line">        &lt;h4&gt;条件Tab索引&lt;/h4&gt;</span>
<span class="line">        &lt;input type=&quot;text&quot; placeholder=&quot;条件输入框&quot;</span>
<span class="line">            [tabindex]=&quot;allowEditing ? 5 : -1&quot;&gt;</span>
<span class="line">        &lt;label&gt;</span>
<span class="line">            &lt;input type=&quot;checkbox&quot; [(ngModel)]=&quot;allowEditing&quot;&gt;</span>
<span class="line">            允许编辑</span>
<span class="line">        &lt;/label&gt;</span>
<span class="line">    </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Tabindex01Component</span> <span class="token punctuation">{</span></span>
<span class="line">    isDisabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">    allowEditing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    buttons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">toggleDisabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>isDisabled <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>isDisabled<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">onDivClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Div被激活！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果 (tab键一直点)</p><p><img src="`+B+'" alt=""></p></li></ol>',62)]))}const O=s(G,[["render",P]]),H=JSON.parse('{"path":"/framework/angular/base16/03.html","title":"三、指令","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1756103336000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"20f6913b2d2473e2422a33fde2d9aa7c6833f328","time":1756103336000,"email":"857899180@qq.com","author":"zhao-farmer","message":"8月提交代码"}]},"filePathRelative":"framework/angular/base16/03.md"}');export{O as comp,H as data};
