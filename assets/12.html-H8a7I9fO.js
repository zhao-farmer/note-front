import{_ as s,c as a,b as p,o as t}from"./app-DzsfPIyd.js";const e={};function o(c,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="十二、原型" tabindex="-1"><a class="header-anchor" href="#十二、原型"><span>十二、原型</span></a></h1><h2 id="_12-1-构造函数的问题" tabindex="-1"><a class="header-anchor" href="#_12-1-构造函数的问题"><span>12.1 构造函数的问题</span></a></h2><p>面向对象编程的特性:</p><p>比如封装性、继承性等，可以借助于构造函数来实现前面我们学过的构造函数方法很好用，但是存在浪费内存的问题</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token parameter">uname<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>uname <span class="token operator">=</span> uname<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">sing</span> <span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;我会唱歌&#39;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> ldh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">&#39;刘德华&#39;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> zxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">&#39;张学友&#39;</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ldh<span class="token punctuation">.</span>sing <span class="token operator">===</span> zxy<span class="token punctuation">.</span>sing<span class="token punctuation">)</span> <span class="token comment">//结果是false 说明俩函数不一样</span></span>
<span class="line"><span class="token comment">// 两个对象都有sing 函数 指向的不是同一地址 </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-2-原型" tabindex="-1"><a class="header-anchor" href="#_12-2-原型"><span>12.2 原型</span></a></h2><h3 id="_12-2-1-使用" tabindex="-1"><a class="header-anchor" href="#_12-2-1-使用"><span>12.2.1 使用</span></a></h3><p>目标:能够利用原型对象实现方法共享</p><ul><li>构造函数通过原型分配的函数是所有对象所 共享的，</li><li>JavaScript 规定，每一个构造函数都有一个 prototype 属性，指向另一个对象，所以我们也称为原型对象</li><li>这个对象可以挂载函数，对象实例化不会多次创建原型上函数，节约内存</li><li>我们可以把那些不变的方法，直接定义在 prototype 对象上，这样所有对象的实例就可以共享这些方法。</li><li>构造函数和原型对象中的this 都指向 实例化的对象</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 构造函数 公共的属性和方法 封装到Star 构造函数里面了</span></span>
<span class="line"><span class="token comment">// 1.公共的属性写到 构造函数里面</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token parameter">uname<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>uname <span class="token operator">=</span> uname<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// this.sing = function () {</span></span>
<span class="line">        <span class="token comment">//     console.log(&quot;我会唱歌&quot;);</span></span>
<span class="line">        <span class="token comment">// };</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 2.公共的方法写道原型身上</span></span>
<span class="line"><span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sing</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;我会唱歌&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> ldh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">&quot;刘德华&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> zxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">&quot;张学友&quot;</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">ldh<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//调用</span></span>
<span class="line">zxy<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//调用</span></span>
<span class="line"><span class="token comment">// 判断调用的地址是否是一个</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ldh<span class="token punctuation">.</span>sing <span class="token operator">===</span> zxy<span class="token punctuation">.</span>sing<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-2-2-原型对象上函数中this指向" tabindex="-1"><a class="header-anchor" href="#_12-2-2-原型对象上函数中this指向"><span>12.2.2 原型对象上函数中this指向</span></a></h3><p>构造函数和原型里面的this都指向-&gt; 实例化的对象</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> that</span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token parameter">uname</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    that <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>uname <span class="token operator">=</span> uname</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 原型对象上的函数也指向 实例对象ldh</span></span>
<span class="line"><span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sing</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;唱歌&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 实例对象ldh</span></span>
<span class="line"><span class="token comment">// 构造函数里面的 this 就是实例对象 ldh</span></span>
<span class="line"><span class="token keyword">const</span> ldh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token string">&#39;刘德华&#39;</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>that <span class="token operator">===</span> ldh<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// true</span></span>
<span class="line">ldh<span class="token punctuation">.</span><span class="token function">sing</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-3-案例" tabindex="-1"><a class="header-anchor" href="#_12-3-案例"><span>12.3 案例</span></a></h2><p>需求:</p><p>①:给数组扩展求最大值方法和求和方法</p><p>比如: 以前学过</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 结果是[3,2,1]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>扩展完毕之后:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">arr<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// 返回的结果是 6</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 自己定义 数组扩展方法 求和 和 最大值</span></span>
<span class="line"><span class="token comment">// 1.我们定义的这个方法，任何一个数组实例对象都可以使用</span></span>
<span class="line"><span class="token comment">// 2.自定义的方法写道 数组.prototype 身上</span></span>
<span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 1.最大值</span></span>
<span class="line"><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">max</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// return Math.max(...arr)</span></span>
<span class="line">    <span class="token comment">// 由于是当前数组使用，this指向的也是当前数组 直接使用this</span></span>
<span class="line">    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2.最小值</span></span>
<span class="line"><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">min</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3.求和 方法</span></span>
<span class="line"><span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> prev <span class="token operator">+</span> item<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//3</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//6</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-4-constructor-属性" tabindex="-1"><a class="header-anchor" href="#_12-4-constructor-属性"><span>12.4 constructor 属性</span></a></h2><p>在哪里? 每个原型对象里面都有个constructor属性(constructor 构造函数)</p><p>作用: 该属性指向该原型对象的构造函数，简单理解，就是指向我的爸爸，我是有爸爸的孩子</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// constructor 单词 构造函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> ldh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Star<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 原型上的 prototype.constructor 指回原来的 函数</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Star.prototype.sing = function(){</span></span>
<span class="line"><span class="token comment">//     console.log(&quot;唱歌&quot;);</span></span>
<span class="line"><span class="token comment">// }</span></span>
<span class="line"><span class="token comment">// Star.prototype.dance = function(){</span></span>
<span class="line"><span class="token comment">//     console.log(&quot;跳舞&quot;);</span></span>
<span class="line"><span class="token comment">// }</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//{}</span></span>
<span class="line"><span class="token class-name">Star</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 重新指回创建这个原型对象的 构造函数</span></span>
<span class="line">    <span class="token literal-property property">constructor</span><span class="token operator">:</span> Star<span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">sing</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;唱歌&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">dance</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;唱歌&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//sing:{},dance:{}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-5-对象原型" tabindex="-1"><a class="header-anchor" href="#_12-5-对象原型"><span>12.5 对象原型</span></a></h2><p>对象都会有一个属性__proto__指向构造函数的 prototype 原型对象，之所以我们对象可以使用构造函数 prototype原型对象的属性和方法，就是因为对象有__proto__原型的存在。</p><p>注意</p><ul><li>__proto__是JS非标准属性</li><li>[[prototype]]和__proto__意义相同</li><li>用来表明当前实例对象指向哪个原型对象prototype</li><li>proto 对象原型里面也有一个 constructor属性，指向创建该实例对象的构造函数</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Star</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> ldh <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Star</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 对象原型 __proto__ 指向原型对象 protorype</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ldh<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Star</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//true</span></span>
<span class="line"><span class="token comment">// 对象原型里面有 constructor 指向 构造函数 Star</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ldh<span class="token punctuation">.</span><span class="token class-name">__proto__</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Star<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>prototype是什么？哪里来的？ <ul><li>原型（原型对象）</li><li>构造函数都自动有原型</li></ul></li><li>constructor属性在哪里？作用干啥的？ <ul><li>prototype原型和对象原型__proto__里面都有</li><li>都指向创建实例对象/原型的构造函数</li></ul></li><li>__proto__属性在哪里？指向谁？ <ul><li>在实例对象里面</li><li>指向原型prototype</li></ul></li></ol><p>6.原型继承 继承是面向对象编程的另一个特征，通过继承进一步提升代码封装的程度，JavaScript 中大多是借助原型对象实现继承的特性。</p><p>// 公共部分放到原型上 const Person = { eays: 2, head: 1, }; // 女人 构造函数 继承 想要 继承Person function Women() { this.gender = &quot;女&quot;; } // Women 通过原型继承 Person // 父构造函数（父类） 子构造函数（子类） // 子类的原型 = new 父类 Women.prototype = new Person(); // 指回原来的构造函数 Women.prototype.constructor = Women; const red = new Women(); console.log(red); console.log(Women.prototype); function Man() { this.gender = &quot;男&quot;; } // 第二种继承方式 Man.prototype = Person; Man.prototype.constructor = Man; const pink = new Man(); console.log(pink); console.log(Man.prototype); // 原型有多种继承方式 是因为js原本的语言缺陷</p><p>7 原型链 基于原型对象的继承使得不同构造函数的原型对象关联在一起，并且这种关联的关系是一种链状的结构，我们将原型对象的链状结构关系称为原型链</p><p>原型链-查找规则 ① 当访问一个对象的属性(包括方法)时，首先查找这个对象自身有没有该属性。 ② 如果没有就查找它的原型(也就是proto 指向的 prototype 原型对象) ③ 如果还没有就查找原型对象的原型(0bject的原型对象) ④ 依此类推一直找到 Object 为止(null) ⑤ <strong>proto</strong> 对象原型的意义就在于为对象成员查找机制提供一个方向，或者说一条路线 ⑥ 可以使用 instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上</p><p>// 判断原型链上的值 function Person() {} console.log(Person.prototype.<strong>proto</strong> === Object.prototype); //true console.log(Object.prototype); console.log(Object.prototype.<strong>proto</strong> == null); //true</p><p>// 判断是否属于原型链上 const ldh = new Person(); console.log(ldh instanceof Person); //true console.log(ldh instanceof Object); //true console.log(ldh instanceof Array); //false</p>`,38)]))}const i=s(e,[["render",o],["__file","12.html.vue"]]),u=JSON.parse('{"path":"/script/JavaScript/difficulty/12.html","title":"十二、原型","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"12.1 构造函数的问题","slug":"_12-1-构造函数的问题","link":"#_12-1-构造函数的问题","children":[]},{"level":2,"title":"12.2 原型","slug":"_12-2-原型","link":"#_12-2-原型","children":[{"level":3,"title":"12.2.1 使用","slug":"_12-2-1-使用","link":"#_12-2-1-使用","children":[]},{"level":3,"title":"12.2.2 原型对象上函数中this指向","slug":"_12-2-2-原型对象上函数中this指向","link":"#_12-2-2-原型对象上函数中this指向","children":[]}]},{"level":2,"title":"12.3 案例","slug":"_12-3-案例","link":"#_12-3-案例","children":[]},{"level":2,"title":"12.4 constructor 属性","slug":"_12-4-constructor-属性","link":"#_12-4-constructor-属性","children":[]},{"level":2,"title":"12.5 对象原型","slug":"_12-5-对象原型","link":"#_12-5-对象原型","children":[]}],"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}]},"filePathRelative":"script/JavaScript/difficulty/12.md"}');export{i as comp,u as data};
