import{aq as s,ar as a,as as p,at as t}from"./app-Cok9BT0p.js";const e="/note-front/framework/react/expand/001.png",l="/note-front/framework/react/expand/002.png",i="/note-front/framework/react/expand/003.png",c="/note-front/framework/react/expand/004.png",o="/note-front/framework/react/expand/005.png",u="/note-front/framework/react/expand/006.png",r="/note-front/framework/react/expand/007.png",k="/note-front/framework/react/expand/008.png",d="/note-front/framework/react/expand/009.png",v="/note-front/framework/react/expand/010.png",m="/note-front/framework/react/expand/011.png",b="/note-front/framework/react/expand/016.png",g="/note-front/framework/react/expand/012.png",y="/note-front/framework/react/expand/013.png",h="/note-front/framework/react/expand/014.png",q="/note-front/framework/react/expand/015.png",f="/note-front/framework/react/expand/020.png",w="/note-front/framework/react/expand/017.png",x="/note-front/framework/react/expand/018.png",j="/note-front/framework/react/expand/019.png",F={};function S(_,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="一、graphql" tabindex="-1"><a class="header-anchor" href="#一、graphql"><span>一、graphql</span></a></h1><h2 id="_1-1-介绍与hello" tabindex="-1"><a class="header-anchor" href="#_1-1-介绍与hello"><span>1.1 介绍与hello</span></a></h2><ol><li><p>介绍</p><p>GraphQL是Facebook开发的一种数据查询语言，并于2015年公开发布。它是RESTAPI的替代品 GraphQL 既是一种用于 API 的查询语言也是一个满足你数据査询的运行时。 GraphQL对你的 AP!中的数据提供了一套易于理解的完整描述，使得客户端能够准确地获得它需要的数据，而且没有任何冗余，也让 API更容易地随着时间推移而演进</p><ul><li>官网:https://graphal.org/</li><li>中文网:http://graphal.cn/</li></ul></li><li><p>特点</p><ol><li>请求需要的数据，不多不少 例如:account中有name.age.sex，department等，可以只取得需要的字段。</li><li>获取多个资源，只用一个请求</li><li>描述所有可能类型的系统。便于维护，根据需求平滑演进，添加或者隐藏字段。 <ul><li>restful一个接口只能返回一个资源，graphq-次可以获取多个资源。</li><li>restful用不同的url来区分资源，graphql用类型区分资源。</li></ul></li></ol></li><li><p>安装插件</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 初始化项目</span></span>
<span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span></span>
<span class="line"><span class="token comment"># 安装插件</span></span>
<span class="line"><span class="token function">pnpm</span> <span class="token function">install</span> express express-graphql graphql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>hello 代码</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>buildSchema<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>graphqlHTTP<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express-graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Schema</span></span>
<span class="line"><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    type Query {</span>
<span class="line">        hello: String</span>
<span class="line">        randomNumber: Int</span>
<span class="line">        state: Boolean</span>
<span class="line">    }</span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Resolver</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">hello</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">randomNumber</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">===</span> <span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 传统的rest接口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/home&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;home data&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/list&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;list data&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// graphql 的接口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token function">graphqlHTTP</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">schema</span><span class="token operator">:</span>schema<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rootValue</span><span class="token operator">:</span>root<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">graphiql</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>打开 <code>http://localhost:4000/graphql</code> 并添加参数观察结果</p><p><img src="`+e+`" alt=""></p></li></ol><h2 id="_1-2-参数类型与传递" tabindex="-1"><a class="header-anchor" href="#_1-2-参数类型与传递"><span>1.2 参数类型与传递</span></a></h2><ol><li><p>介绍</p><ul><li><p>基本类型:<code>String</code>,<code>Int</code>,<code>Float</code>,<code>Boolean</code>和<code>ID</code>。可以在shema声明的时候直接使用。</p></li><li><p><code>[类型]</code>代表数组，例如:<code>[lnt]</code>代表整型数组</p></li><li><p>和js传递参数一样，小括号内定义形参，但是注意:参数需要定义类型。</p></li><li><p>!(叹号)代表参数不能为空。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">type Query<span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">rollDice</span><span class="token punctuation">(</span>numDsce<span class="token operator">:</span>Int<span class="token operator">!</span><span class="token punctuation">,</span><span class="token literal-property property">numSides</span><span class="token operator">:</span>Int<span class="token punctuation">)</span><span class="token operator">:</span><span class="token punctuation">[</span>Int<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>使用复杂数据类型</p><ul><li><p>代码</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>buildSchema<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>graphqlHTTP<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express-graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Schema</span></span>
<span class="line"><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    type Account{</span>
<span class="line">        name:String</span>
<span class="line">        age:Int</span>
<span class="line">        location:String</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Film{</span>
<span class="line">        id:Int</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:Int</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Query {</span>
<span class="line">        hello: String</span>
<span class="line">        randomNumber: Int</span>
<span class="line">        greet(name: String): String</span>
<span class="line">        getAllAges: [Int]</span>
<span class="line">        getAllNames: [String]</span>
<span class="line">        getAccountInfo: Account</span>
<span class="line">        getNowplayingList:[Film]</span>
<span class="line">    }</span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 模拟后端返回数据</span></span>
<span class="line"><span class="token keyword">var</span> faskeDB <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;1111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;2222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">200</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;3333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">300</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Resolver</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 返回基础数据 */</span></span>
<span class="line">    <span class="token function-variable function">hello</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;Hello world!&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">randomNumber</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">/* 获取数组数据 */</span></span>
<span class="line">    <span class="token function-variable function">getAllNames</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;lisi&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;wangwu&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">getAllAges</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">/* 获取对象数据  */</span></span>
<span class="line">    <span class="token function">getAccountInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">location</span><span class="token operator">:</span><span class="token string">&quot;zhangguo&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">/* 获取数组对象数据 */</span></span>
<span class="line">    <span class="token function">getNowplayingList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> faskeDB</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// graphql 的接口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token function">graphqlHTTP</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">schema</span><span class="token operator">:</span>schema<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rootValue</span><span class="token operator">:</span>root<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">graphiql</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>调用结果</p><p><img src="`+l+`" alt=""></p></li></ul></li><li><p>传递参数</p><ul><li><p>代码</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>buildSchema<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>graphqlHTTP<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express-graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Schema</span></span>
<span class="line"><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    type Film{</span>
<span class="line">        id:Int</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:String</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Query {</span>
<span class="line">        greet(name: String): String</span>
<span class="line">        getFilmDetail(id:Int!):Film</span>
<span class="line">    }</span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 模拟后端返回数据</span></span>
<span class="line"><span class="token keyword">var</span> faskeDB <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;1111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;2222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">200</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;3333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">300</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Resolver</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 简单参数</span></span>
<span class="line">    <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 虽然参数指定的id,但是传入的是参数</span></span>
<span class="line">    <span class="token function">getFilmDetail</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> faskeDB<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token punctuation">.</span>id<span class="token operator">===</span>id<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// graphql 的接口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token function">graphqlHTTP</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">schema</span><span class="token operator">:</span>schema<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rootValue</span><span class="token operator">:</span>root<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">graphiql</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>调用结果</p><p><img src="`+i+`" alt=""></p></li></ul></li></ol><h2 id="_1-3-mulation" tabindex="-1"><a class="header-anchor" href="#_1-3-mulation"><span>1.3 mulation</span></a></h2><ol><li><p>介绍</p><ul><li>查询使用query，修改数据使用 mutation</li><li>一般的数据类型使用 type ，传入的数据类型使用 input</li></ul></li><li><p>查询数据</p><ul><li><p>代码</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>buildSchema<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>graphqlHTTP<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express-graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Schema</span></span>
<span class="line"><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    type Film{</span>
<span class="line">        id:Int</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:Int</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Query {</span>
<span class="line">        getNowplayingList:[Film]</span>
<span class="line">    }</span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 模拟后端返回数据</span></span>
<span class="line"><span class="token keyword">var</span> faskeDB <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;1111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;2222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">200</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;3333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">300</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Resolver</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getNowplayingList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> faskeDB</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// graphql 的接口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token function">graphqlHTTP</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">schema</span><span class="token operator">:</span>schema<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rootValue</span><span class="token operator">:</span>root<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">graphiql</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 query 进行查询</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">query<span class="token punctuation">{</span></span>
<span class="line">    getNowplayingList<span class="token punctuation">{</span></span>
<span class="line">        id</span>
<span class="line">        name</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+c+`" alt=""></p></li></ul></li><li><p>新增数据</p><ul><li><p>代码</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>buildSchema<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>graphqlHTTP<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express-graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Schema</span></span>
<span class="line"><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    type Film{</span>
<span class="line">        id:Int</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:Int</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line highlighted">    input FilmInput{</span>
<span class="line highlighted">        name:String</span>
<span class="line highlighted">        poster:String</span>
<span class="line highlighted">        price:Int</span>
<span class="line highlighted">    }</span>
<span class="line"></span>
<span class="line">    type Query {</span>
<span class="line">        getNowplayingList:[Film]</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Mutation{</span>
<span class="line highlighted">        createFilm(input:FilmInput):Film</span>
<span class="line">    } </span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 模拟后端返回数据</span></span>
<span class="line"><span class="token keyword">var</span> faskeDB <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;1111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;2222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">200</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;3333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">300</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Resolver</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getNowplayingList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> faskeDB</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token function">createFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>input<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token comment">// 添加id</span></span>
<span class="line highlighted">        <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>input<span class="token punctuation">,</span><span class="token literal-property property">id</span><span class="token operator">:</span>faskeDB<span class="token punctuation">.</span>length<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span></span>
<span class="line highlighted">        faskeDB<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line highlighted">        <span class="token keyword">return</span> obj</span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// graphql 的接口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token function">graphqlHTTP</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">schema</span><span class="token operator">:</span>schema<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rootValue</span><span class="token operator">:</span>root<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">graphiql</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 mutation 进行新增</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">mutation <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">createFilm</span><span class="token punctuation">(</span>input<span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">400</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        id<span class="token punctuation">,</span></span>
<span class="line">        name<span class="token punctuation">,</span></span>
<span class="line">        price<span class="token punctuation">,</span></span>
<span class="line">        poster</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+o+`" alt=""></p></li></ul></li><li><p>修改数据</p><ul><li><p>代码</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>buildSchema<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>graphqlHTTP<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express-graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Schema</span></span>
<span class="line"><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    type Film{</span>
<span class="line">        id:Int</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:Int</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    input FilmInput{</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:Int</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Query {</span>
<span class="line">        getNowplayingList:[Film]</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Mutation{</span>
<span class="line">        createFilm(input:FilmInput):Film</span>
<span class="line highlighted">        updateFilm(id:Int!,input:FilmInput):Film</span>
<span class="line">    } </span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 模拟后端返回数据</span></span>
<span class="line"><span class="token keyword">var</span> faskeDB <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;1111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;2222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">200</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;3333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">300</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Resolver</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getNowplayingList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> faskeDB</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">createFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>input<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 添加id</span></span>
<span class="line">        <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>input<span class="token punctuation">,</span><span class="token literal-property property">id</span><span class="token operator">:</span>faskeDB<span class="token punctuation">.</span>length<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span></span>
<span class="line">        faskeDB<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> obj</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token function">updateFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>id<span class="token punctuation">,</span>input<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token keyword">var</span> current <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line highlighted">        faskeDB <span class="token operator">=</span>  faskeDB<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line highlighted">            <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line highlighted">                current <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>item<span class="token punctuation">,</span><span class="token operator">...</span>input<span class="token punctuation">}</span></span>
<span class="line highlighted">                <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>item<span class="token punctuation">,</span><span class="token operator">...</span>input<span class="token punctuation">}</span></span>
<span class="line highlighted">            <span class="token punctuation">}</span></span>
<span class="line highlighted">            <span class="token keyword">return</span> item</span>
<span class="line highlighted">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line highlighted">        <span class="token keyword">return</span> current</span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// graphql 的接口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token function">graphqlHTTP</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">schema</span><span class="token operator">:</span>schema<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rootValue</span><span class="token operator">:</span>root<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">graphiql</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 mutation 进行修改</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">mutation <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">updateFilm</span><span class="token punctuation">(</span>id<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">input</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;222-修改&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span><span class="token string">&quot;222-poster-修改&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        id<span class="token punctuation">,</span></span>
<span class="line">        name<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+u+`" alt=""></p></li></ul></li><li><p>删除数据</p><ul><li><p>代码</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>buildSchema<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>graphqlHTTP<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express-graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Schema</span></span>
<span class="line"><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    type Film{</span>
<span class="line">        id:Int</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:Int</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    input FilmInput{</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:Int</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Query {</span>
<span class="line">        getNowplayingList:[Film]</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Mutation{</span>
<span class="line">        createFilm(input:FilmInput):Film</span>
<span class="line">        updateFilm(id:Int!,input:FilmInput):Film</span>
<span class="line highlighted">        deleteFilm(id:Int!):Int</span>
<span class="line">    } </span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 模拟后端返回数据</span></span>
<span class="line"><span class="token keyword">var</span> faskeDB <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;1111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://111&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">100</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;2222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://222&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">200</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;3333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://333&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">price</span><span class="token operator">:</span><span class="token number">300</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Resolver</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getNowplayingList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> faskeDB</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">createFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>input<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 添加id</span></span>
<span class="line">        <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>input<span class="token punctuation">,</span><span class="token literal-property property">id</span><span class="token operator">:</span>faskeDB<span class="token punctuation">.</span>length<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span></span>
<span class="line">        faskeDB<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> obj</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">updateFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>id<span class="token punctuation">,</span>input<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">var</span> current <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">        faskeDB <span class="token operator">=</span>  faskeDB<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">===</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                current <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>item<span class="token punctuation">,</span><span class="token operator">...</span>input<span class="token punctuation">}</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>item<span class="token punctuation">,</span><span class="token operator">...</span>input<span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">return</span> item</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> current</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">    <span class="token function">deleteFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        faskeDB <span class="token operator">=</span> faskeDB<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token punctuation">.</span>id<span class="token operator">!==</span>id<span class="token punctuation">)</span></span>
<span class="line highlighted">        <span class="token keyword">return</span> id</span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// graphql 的接口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token function">graphqlHTTP</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">schema</span><span class="token operator">:</span>schema<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rootValue</span><span class="token operator">:</span>root<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">graphiql</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>使用 mutation 进行删除</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">mutation <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">deleteFilm</span><span class="token punctuation">(</span>id<span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><p><img src="`+r+`" alt=""></p></li></ul></li></ol><h2 id="_1-4-结合数据库" tabindex="-1"><a class="header-anchor" href="#_1-4-结合数据库"><span>1.4 结合数据库</span></a></h2><ol><li><p>安装插件</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">pnpm</span> <span class="token function">install</span> mongoose</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>修改代码</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>buildSchema<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>graphqlHTTP<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express-graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// --------------------- 数据库服务 -------------------------</span></span>
<span class="line"><span class="token keyword">var</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span></span>
<span class="line">mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017/maizuo&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 限制 数据库这个films (集合) 只能存三个字段</span></span>
<span class="line"><span class="token keyword">var</span> FilmModel <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;film&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span>String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">poster</span><span class="token operator">:</span>String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">price</span><span class="token operator">:</span>Number</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// FilmModel.create 创建</span></span>
<span class="line"><span class="token comment">// FilmModel.find 查询</span></span>
<span class="line"><span class="token comment">// FilmModel.update 修改</span></span>
<span class="line"><span class="token comment">// FilmModel.delete 删除</span></span>
<span class="line"><span class="token comment">// ----------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Schema</span></span>
<span class="line"><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    type Film{</span>
<span class="line">        id:String</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:Int</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    input FilmInput{</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:Int</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Query {</span>
<span class="line">        getNowplayingList:[Film]</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Mutation{</span>
<span class="line">        createFilm(input:FilmInput):Film</span>
<span class="line">        updateFilm(id:String!,input:FilmInput):Film</span>
<span class="line">        deleteFilm(id:String!):String</span>
<span class="line">    } </span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Resolver</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getNowplayingList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> FilmModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">createFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>input<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">/* </span>
<span class="line">            1. 创建模型</span>
<span class="line">            2. 操作数据库</span>
<span class="line">        */</span></span>
<span class="line">        <span class="token keyword">return</span> FilmModel<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token operator">...</span>input</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">updateFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>id<span class="token punctuation">,</span>input<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 更新返回的 { ok:1, nModified:0, n:1 } 所有要再次查询</span></span>
<span class="line">        <span class="token keyword">return</span> FilmModel<span class="token punctuation">.</span><span class="token function">updateOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">_id</span><span class="token operator">:</span>id</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token operator">...</span>input</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> FilmModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span>id<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">deleteFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> FilmModel<span class="token punctuation">.</span><span class="token function">deleteOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span>id<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span>id<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// graphql 的接口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token function">graphqlHTTP</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">schema</span><span class="token operator">:</span>schema<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rootValue</span><span class="token operator">:</span>root<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">graphiql</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>各种操作</p><ul><li><p>新增数据</p><p><img src="`+k+'" alt=""></p></li><li><p>查询数据</p><p><img src="'+d+'" alt=""></p></li><li><p>修改数据</p><p><img src="'+v+'" alt=""></p></li><li><p>删除数据</p><p><img src="'+m+`" alt=""></p></li></ul></li></ol><h2 id="_1-5-客户端访问" tabindex="-1"><a class="header-anchor" href="#_1-5-客户端访问"><span>1.5 客户端访问</span></a></h2><ol><li><p>添加静态目录</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>buildSchema<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token punctuation">{</span>graphqlHTTP<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express-graphql&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// --------------------- 数据库服务 -------------------------</span></span>
<span class="line"><span class="token keyword">var</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mongoose&quot;</span><span class="token punctuation">)</span></span>
<span class="line">mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&quot;mongodb://localhost:27017/maizuo&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 限制 数据库这个films (集合) 只能存三个字段</span></span>
<span class="line"><span class="token keyword">var</span> FilmModel <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&quot;film&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span>String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">poster</span><span class="token operator">:</span>String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">price</span><span class="token operator">:</span>Number</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// ----------------------------------------------</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Schema</span></span>
<span class="line"><span class="token keyword">const</span> schema <span class="token operator">=</span> <span class="token function">buildSchema</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    type Film{</span>
<span class="line">        id:String</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:Int</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    input FilmInput{</span>
<span class="line">        name:String</span>
<span class="line">        poster:String</span>
<span class="line">        price:Int</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Query {</span>
<span class="line">        getNowplayingList:[Film]</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    type Mutation{</span>
<span class="line">        createFilm(input:FilmInput):Film</span>
<span class="line">        updateFilm(id:String!,input:FilmInput):Film</span>
<span class="line">        deleteFilm(id:String!):String</span>
<span class="line">    } </span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义 Resolver</span></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getNowplayingList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> FilmModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">createFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>input<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> FilmModel<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token operator">...</span>input</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">updateFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>id<span class="token punctuation">,</span>input<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> FilmModel<span class="token punctuation">.</span><span class="token function">updateOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">_id</span><span class="token operator">:</span>id</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token operator">...</span>input</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> FilmModel<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span>id<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">deleteFilm</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> FilmModel<span class="token punctuation">.</span><span class="token function">deleteOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">_id</span><span class="token operator">:</span>id<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span>id<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// graphql 的接口</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token function">graphqlHTTP</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">schema</span><span class="token operator">:</span>schema<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rootValue</span><span class="token operator">:</span>root<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">graphiql</span><span class="token operator">:</span><span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token comment">// 配置静态资源目录</span></span>
<span class="line highlighted">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">&quot;public&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">4000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>新增 静态页面 <code>public/home.html</code></p><ul><li><p>代码</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>查询数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">createData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>创建数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">updateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>更新数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">deleteData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>删除数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> myquery <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">                query{</span>
<span class="line">                    getNowplayingList{</span>
<span class="line">                        id</span>
<span class="line">                        name</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"></span>
<span class="line">            <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span><span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string-property property">&quot;Accept&quot;</span><span class="token operator">:</span><span class="token string">&quot;application/json&quot;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">body</span><span class="token operator">:</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">query</span><span class="token operator">:</span>myquery</span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span>res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">createData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> myquery <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">                mutation ($input:FilmInput) {</span>
<span class="line">                    createFilm(input:$input){</span>
<span class="line">                        id,</span>
<span class="line">                        name</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"></span>
<span class="line">            <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span><span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string-property property">&quot;Accept&quot;</span><span class="token operator">:</span><span class="token string">&quot;application/json&quot;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token comment">// variables 会替换掉 myquery 中的 $input</span></span>
<span class="line">                <span class="token literal-property property">body</span><span class="token operator">:</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">query</span><span class="token operator">:</span>myquery<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">variables</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">input</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;666&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">poster</span><span class="token operator">:</span><span class="token string">&quot;http://666&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">600</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span>res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">updateData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> myquery <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">                mutation($id:String!,$input:FilmInput){</span>
<span class="line">                    updateFilm(id:$id,input:$input){</span>
<span class="line">                        id</span>
<span class="line">                        name</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">            </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"></span>
<span class="line">            <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span><span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string-property property">&quot;Accept&quot;</span><span class="token operator">:</span><span class="token string">&quot;application/json&quot;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">body</span><span class="token operator">:</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">query</span><span class="token operator">:</span>myquery<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&quot;68c1383773ba67ba4c9ec368&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;666-修改&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://666-修改&quot;</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span>res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">deleteData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> myquery <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">                mutation($id:String!){</span>
<span class="line">                    deleteFilm(id:$id)</span>
<span class="line">                }</span>
<span class="line">            </span><span class="token template-punctuation string">\`</span></span></span>
<span class="line"></span>
<span class="line">            <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&quot;/graphql&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token string-property property">&quot;Content-Type&quot;</span><span class="token operator">:</span><span class="token string">&quot;application/json&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token string-property property">&quot;Accept&quot;</span><span class="token operator">:</span><span class="token string">&quot;application/json&quot;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">body</span><span class="token operator">:</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">query</span><span class="token operator">:</span>myquery<span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&quot;68c1383773ba67ba4c9ec368&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span>res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>页面效果</p><p><img src="`+b+'" alt=""></p></li></ul></li><li><p>点击按钮操作</p><ul><li><p>查询数据</p><p><img src="'+g+'" alt=""></p></li><li><p>创建数据</p><p><img src="'+y+'" alt=""></p></li><li><p>更新数据</p><p><img src="'+h+'" alt=""></p></li><li><p>删除数据</p><p><img src="'+q+`" alt=""></p></li></ul></li></ol><h2 id="_1-6-结合react" tabindex="-1"><a class="header-anchor" href="#_1-6-结合react"><span>1.6 结合react</span></a></h2><ol><li><p>结合</p><ul><li><a href="https://www.apollographql.com/" target="_blank" rel="noopener noreferrer">apollographql官网</a></li><li><a href="https://github.com/apollographql/apollo-client" target="_blank" rel="noopener noreferrer">apollographql的github地址</a></li></ul></li><li><p>初始化项目</p><ul><li><p>创建于安装依赖</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 创建项目</span></span>
<span class="line">create-react-app 2_react</span>
<span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> @apollo/client graphql rxjs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除public 下所有文件</p></li><li><p>新建index.html</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>删除 src 下所有文件</p></li><li><p>新增 index.js 文件</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>新增 App.jsx 文件</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">App...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>package.json 新增代理</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token string-property property">&quot;proxy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:4000/&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>开始运行</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">npm</span> start </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li><li><p>项目代码</p><ul><li><p>修改功能组件 src/components/mutation.jsx</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> gql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@apollo/client&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useMutation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@apollo/client/react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> creategql <span class="token operator">=</span> gql<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    mutation CreateFilm($input: FilmInput) {</span>
<span class="line">        createFilm(input: $input) {</span>
<span class="line">            id</span>
<span class="line">            name</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> updategql <span class="token operator">=</span> gql<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    mutation ($id: String!, $input: FilmInput) {</span>
<span class="line">        updateFilm(id: $id, input: $input) {</span>
<span class="line">            id</span>
<span class="line">            name</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> deletegql <span class="token operator">=</span> gql<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    mutation ($id: String!) {</span>
<span class="line">        deleteFilm(id: $id)</span>
<span class="line">    }</span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MutationData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span> createFilm <span class="token punctuation">]</span><span class="token operator">=</span> <span class="token function">useMutation</span><span class="token punctuation">(</span>creategql<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span> updateFilm <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useMutation</span><span class="token punctuation">(</span>updategql<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token punctuation">[</span> deleteFilm <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useMutation</span><span class="token punctuation">(</span>deletegql<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 新增</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">createData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createFilm</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;666&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://666&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 修改</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">updateData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">updateFilm</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&quot;68c1595ecfe7397a08e03ecc&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                    <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;666-修改&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">poster</span><span class="token operator">:</span> <span class="token string">&quot;http://666-修改&quot;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 删除</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">deleteData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">deleteFilm</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">&quot;68c1595ecfe7397a08e03ecc&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>createData<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">新增数据</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>updateData<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">修改数据</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>deleteData<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">删除数据</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> MutationData<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>查询功能组件 src/components/query.jsx</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> gql <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@apollo/client&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@apollo/client/react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> getNowplayingList <span class="token operator">=</span> gql<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"></span>
<span class="line">    query{</span>
<span class="line">        getNowplayingList{</span>
<span class="line">            id,</span>
<span class="line">            name,</span>
<span class="line">            poster,</span>
<span class="line">            price</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">QueryData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> loading<span class="token punctuation">,</span> error<span class="token punctuation">,</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span>getNowplayingList<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Loading...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Error </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>getNowplayingList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> price <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span></span>
<span class="line">                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">                物品：</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token plain-text"> / 价格：</span><span class="token punctuation">{</span>price<span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> QueryData<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>src/App.jsx</p><div class="language-jsx line-numbers-mode" data-highlighter="prismjs" data-ext="jsx"><pre><code><span class="line"><span class="token keyword">import</span> QueryData <span class="token keyword">from</span> <span class="token string">&quot;./components/query&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> MutationData <span class="token keyword">from</span> <span class="token string">&quot;./components/mutation&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">QueryData</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text"></span>
<span class="line">            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MutationData</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text"></span>
<span class="line">        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>配置 index.js (超级重要)</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom/client&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 引入 Apollo</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ApolloClient<span class="token punctuation">,</span> InMemoryCache<span class="token punctuation">,</span>HttpLink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@apollo/client&quot;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ApolloProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@apollo/client/react&quot;</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApolloClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">HttpLink</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">uri</span><span class="token operator">:</span> <span class="token string">&#39;/graphql&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 替换为GraphQL服务器地址</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InMemoryCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span> </span>
<span class="line">    <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>ApolloProvider client<span class="token operator">=</span><span class="token punctuation">{</span>client<span class="token punctuation">}</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span></span>
<span class="line">        <span class="token operator">&lt;</span><span class="token operator">/</span>ApolloProvider<span class="token operator">&gt;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">&gt;</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>运行结果</p><ul><li><p>页面效果(查询)</p><p><img src="`+f+'" alt=""></p></li><li><p>新增数据</p><p><img src="'+w+'" alt=""></p></li><li><p>修改数据</p><p><img src="'+x+'" alt=""></p></li><li><p>删除数据</p><p><img src="'+j+'" alt=""></p></li></ul></li></ol>',13)]))}const I=s(F,[["render",S]]),T=JSON.parse('{"path":"/framework/react/expand/01.html","title":"一、graphql","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1757530254000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"2c9ec28ff41db4bb3e8c363d6656a261f88b4c95","time":1757530254000,"email":"857899180@qq.com","author":"zhao-farmer","message":"react一些相关的"}]},"filePathRelative":"framework/react/expand/01.md"}');export{I as comp,T as data};
