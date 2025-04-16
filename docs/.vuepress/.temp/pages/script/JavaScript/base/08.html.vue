<template><div><h1 id="八、面向对象" tabindex="-1"><a class="header-anchor" href="#八、面向对象"><span>八、面向对象</span></a></h1>
<h2 id="_8-1-面向对象编程-oop" tabindex="-1"><a class="header-anchor" href="#_8-1-面向对象编程-oop"><span>8.1 面向对象编程（OOP）</span></a></h2>
<p>面向对象的理解</p>
<ul>
<li>程序是干嘛的
<ul>
<li>程序就是对现实世界的抽象（照片就是对人的抽象）</li>
</ul>
</li>
<li>对象是干嘛的
<ul>
<li>一个事物抽象到程序中后就变成了对象</li>
<li>在层序的世界中，一切皆对象</li>
</ul>
</li>
<li>面向对象的编程
<ul>
<li>面向对象的编程指，程序中所有操作都是通过对象来完成</li>
<li>做任何事情之前都需要先找到它的对象</li>
</ul>
</li>
</ul>
<p>抽象概念</p>
<ul>
<li>事务与对象
<ul>
<li>一个事务通常两部分组成：数据和功能</li>
<li>一个对象由两部分组成：属性和方法</li>
</ul>
</li>
<li>表现形式
<ul>
<li>事务的数据到了对象中，体现为属性</li>
<li>事务的功能到了对象中，体现为方法</li>
</ul>
</li>
<li>数据与功能的展示
<ul>
<li>数据：
姓名、年龄、身高、体重</li>
<li>功能：
睡、吃</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> five <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 添加属性</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"王老五"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 添加方法</span></span>
<span class="line">    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"睡觉了~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"吃饭了~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-2-类" tabindex="-1"><a class="header-anchor" href="#_8-2-类"><span>8.2 类</span></a></h2>
<p>使用object创建对象的问题</p>
<ul>
<li>无法区分出不同类型的对象</li>
<li>不方便批量创建对象</li>
</ul>
<p>在JS中可以通过（class）来解决上述问题</p>
<p>类的定义</p>
<ul>
<li>类是对象模板
<ul>
<li>可以将对象中的属性和方法直接定义在类中</li>
<li>定义后，就可以直接通过类来创建对象</li>
</ul>
</li>
<li>通过同一个类创建的对象，我们成为同类对象
<ul>
<li>可以使用instanceOf 来检查一个对象对否是同类对象</li>
<li>如果某个对象是由某个类所创建，则我们称该对象是这个类的实例</li>
</ul>
</li>
</ul>
<p>语法：</p>
<ul>
<li>class 类名 {} //类名要使用大驼峰命名</li>
<li>const 类名 = class {}</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用Object 并添加属性</span></span>
<span class="line"><span class="token keyword">const</span> five <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 添加属性</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"王老五"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">weight</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 添加方法</span></span>
<span class="line">    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"睡觉了~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"吃饭了~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> yellow <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'大黄'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"睡觉了~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"吃饭了~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* =========================开始使用类======================== */</span></span>
<span class="line"><span class="token comment">//Peson类是专门创建人的对象</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//Dog类是专门用来创建狗的对象</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//  new Person() //调用构造函数创建对象</span></span>
<span class="line"><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> d1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1 <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d1 <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-3-属性" tabindex="-1"><a class="header-anchor" href="#_8-3-属性"><span>8.3 属性</span></a></h2>
<p>类的代码块，默认就是严格模式</p>
<p>类的代码块是用来设置对象的属性的，不是什么代码都能写</p>
<p>实例属性</p>
<ul>
<li>属性的定义
<ul>
<li>属性名 = [属性值]</li>
</ul>
</li>
<li>访问
<ul>
<li>const 对象名 = new 类名();</li>
<li>对象名.属性值</li>
</ul>
</li>
<li>示例：
<ul>
<li>Person的实例属性name  p1.name</li>
<li>实例属性只能通过实例访问 p1.age</li>
</ul>
</li>
</ul>
<p>静态属性</p>
<ul>
<li>属性的定义
<ul>
<li>static 属性名 = [属性值]</li>
</ul>
</li>
<li>访问
<ul>
<li>类名.属性值</li>
</ul>
</li>
<li>示例：
<ul>
<li>使用static声明的属性，是静态属性（类属性） Person.test</li>
<li>静态属性只能通过类去访问 Person.hh</li>
</ul>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">'孙悟空'</span></span>
<span class="line">    age <span class="token operator">=</span> <span class="token number">18</span></span>
<span class="line">    <span class="token keyword">static</span> weapon <span class="token operator">=</span> <span class="token string">"金箍棒"</span></span>
<span class="line">    <span class="token keyword">static</span> nickname <span class="token operator">=</span> <span class="token string">"齐天大圣"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//访问实例属性</span></span>
<span class="line"><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">p1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'孙悟空'</span></span>
<span class="line">p1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//访问静态属性</span></span>
<span class="line">Person<span class="token punctuation">.</span>weapon <span class="token operator">=</span> <span class="token string">'定海神针'</span></span>
<span class="line">Person<span class="token punctuation">.</span>nickname <span class="token operator">=</span> <span class="token string">'美猴王'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>weapon<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-4-方法" tabindex="-1"><a class="header-anchor" href="#_8-4-方法"><span>8.4 方法</span></a></h2>
<p>方法的定义：对象或类中内部使用的函数</p>
<p>使用方式方式: 对象实例.方法名()</p>
<ol>
<li>普通方法
<ul>
<li>函数添加方法
方法名 = function(){}</li>
<li>实例直接定义
方法名(){}</li>
<li>调用
const 类对象 = new 类名()
类对象.方法名()</li>
<li>this指向
实例方法中this就是当前实例</li>
<li>使用属性
this.属性</li>
</ul>
</li>
<li>静态方法
<ul>
<li>定义
static 方法名(){}</li>
<li>调用
类名.方法名()</li>
<li>this指向
静态方法中this指向的是当前类</li>
<li>使用属性
只能使用静态属性 也是this.属性
不过由于指向当前类会有一些自己的特殊的属性 如： this.name = 类名</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//定义类</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">'孙悟空'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//添加方法的一种方式</span></span>
<span class="line">    <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//添加方法 （实例方法）</span></span>
<span class="line">    <span class="token function">sayHello2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"大家好，我是"</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">static</span> nickname <span class="token operator">=</span> <span class="token string">'齐天大圣'</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//添加静态方法</span></span>
<span class="line">    <span class="token keyword">static</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Person</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nickname<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//齐天大圣</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//实例调用</span></span>
<span class="line"><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">p1<span class="token punctuation">.</span><span class="token function">sayHello2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//静态调用</span></span>
<span class="line">Person<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-5-构造函数" tabindex="-1"><a class="header-anchor" href="#_8-5-构造函数"><span>8.5 构造函数</span></a></h2>
<ol>
<li>构造函数</li>
</ol>
<ul>
<li>功能描述
类似函数中传入的值，修改修改内部属性</li>
<li>定义
<ol>
<li>在类中可以添加一个特殊的方法 constructor 该方法我们成为构造函数</li>
<li>class 类名 <code v-pre>{ constructor(){}}</code></li>
</ol>
</li>
<li>调用时间
构造函数会在我们调用类创建对象时执行</li>
<li>this指向
在构造函数中，this表示当前所创建的对象
构造函数的this.name 指向的是类中定义的属性</li>
</ul>
<ol start="2">
<li>不使用构造函数-属性使用</li>
</ol>
<ul>
<li>使用默认的属性值
在类中直接指定实例属性的值时，创建的所有对象的属性都是这个值</li>
<li>修改属性 (实例化后进行赋值)
对象名.属性名 = 属性值</li>
</ul>
<ol start="3">
<li>使用构造函数-属性使用
<ol>
<li>创建时就进行使用，</li>
<li>可以在构造函数中，为实例属性进行赋值</li>
</ol>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person1</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">'孙悟空'</span></span>
<span class="line">    age <span class="token operator">=</span> <span class="token number">18</span></span>
<span class="line">    gender <span class="token operator">=</span> <span class="token string">"男"</span></span>
<span class="line">    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">p1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'美猴王'</span></span>
<span class="line"><span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">p2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">500</span></span>
<span class="line"><span class="token keyword">const</span> p3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">p3<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">'石猴'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span></span>
<span class="line">    name</span>
<span class="line">    age</span>
<span class="line">    gender</span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> p4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person2</span><span class="token punctuation">(</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> p5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person2</span><span class="token punctuation">(</span><span class="token string">'猪八戒'</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> p6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person2</span><span class="token punctuation">(</span><span class="token string">'唐僧'</span><span class="token punctuation">,</span> <span class="token number">38</span><span class="token punctuation">,</span> <span class="token string">'女'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>面向对象的特点</li>
</ol>
<p>封装，继承和多态</p>
<ul>
<li>封装 -- 安全性</li>
<li>继承 -- 扩展性</li>
<li>多态 -- 灵活性</li>
</ul>
<h2 id="_8-6-继承" tabindex="-1"><a class="header-anchor" href="#_8-6-继承"><span>8.6 继承</span></a></h2>
<ol>
<li>
<p>封装的作用：封装主要用来保证数据的安全</p>
</li>
<li>
<p>直接使用对象的问题</p>
<ul>
<li>对象就是一个存储不同属性的容器</li>
<li>对象不仅负责存储属性，还要负责数据的安全</li>
<li>直接添加到对象中的属性，并不安全，因为他们可以被任意修改</li>
</ul>
</li>
<li>
<p>如何确保数据的安全：</p>
<ol>
<li>私有化数据
将需要保护的数据设置为私有，只能哎类内部使用</li>
<li>提供setter与getter方法来开发对数据的操作
属性设置私有，通过getter setter方法操作属性带来的好处
<ol>
<li>可以控制控制属性的读取权限</li>
<li>可以在方法中对传入的值进行判断</li>
</ol>
</li>
</ol>
</li>
<li>
<p>实现封装的方式</p>
<ol>
<li>属性私有化 加#</li>
<li>通过getter和setter方法来操作属性</li>
</ol>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">get</span> <span class="token function">属性名</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#属性</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">set</span> <span class="token function">属性名</span><span class="token punctuation">(</span><span class="token parameter">参数</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>#属性 <span class="token operator">=</span> 参数</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    #address <span class="token operator">=</span> <span class="token string">"花果山"</span> <span class="token comment">//实例使用#开头就变成了私有属性，私有属性只能在类内部访问</span></span>
<span class="line">    #name</span>
<span class="line">    #age</span>
<span class="line">    #gender</span>
<span class="line"></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>#name <span class="token operator">=</span> name</span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>#age <span class="token operator">=</span> age</span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>#gender <span class="token operator">=</span> gender</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>#name<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#address<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//getter方法，用来读取属性</span></span>
<span class="line">    <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//setter方法，用来设置属性</span></span>
<span class="line">    <span class="token function">setName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>#name <span class="token operator">=</span> name</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token parameter">age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>#age <span class="token operator">=</span> age</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">// 非私有属性的赋值</span></span>
<span class="line">    <span class="token keyword">get</span> <span class="token function">gender</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'gender执行了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#gender<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">set</span> <span class="token function">gender</span><span class="token punctuation">(</span><span class="token parameter">gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>#gender <span class="token operator">=</span> gender</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"孙悟空"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">"男"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//进行赋值时 可以过滤不规则的数据</span></span>
<span class="line">p1<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">11</span><span class="token punctuation">)</span></span>
<span class="line">p1<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//直接赋值 是新建了一个属性 并不能使用私有数据</span></span>
<span class="line">p1<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">'女'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-7-多态" tabindex="-1"><a class="header-anchor" href="#_8-7-多态"><span>8.7 多态</span></a></h2>
<ul>
<li>在JS中不会检查参数的类型，所有就意味着任何数据都可以作为参数传递</li>
<li>要调用某个函数，无需执行的类型，只要对象满足某些条件即可</li>
<li>如果一个东西走路像鸭子，叫起来像鸭子，那么它就是鸭子</li>
<li>多态为我们提供了灵活性</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">/*</span>
<span class="line">    定义一个函数，这个函数将接收一个对象作为参数，他可以输出hello并打印对象的name属性</span>
<span class="line">*/</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">'旺财'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'孙悟空'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">,</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">sayHello</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">sayHello</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">sayHello</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-8-继承" tabindex="-1"><a class="header-anchor" href="#_8-8-继承"><span>8.8 继承</span></a></h2>
<p>可以通过extends关键 来完成继承</p>
<p>当一个类继承另一个类时，就相当于将另一个类中的代码复制到了当前类中（简单理解）</p>
<p>继承发生时，被继承的类称为父类（超类），继承的类称为 子类</p>
<p>通过继承可以减少重复的代码,并且可以在不修改一个类的前提下对其进行扩展</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'动物在叫~'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">'旺财'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">'汤姆'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">dog<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">cat<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-9-继承-重写" tabindex="-1"><a class="header-anchor" href="#_8-9-继承-重写"><span>8.9 继承-重写</span></a></h2>
<ol>
<li>继承
<ul>
<li>通过继承可以在不修改一个类的情况下对其进行扩展</li>
<li>OCP 开闭原则
程序应该对修改关闭，对扩展开放</li>
</ul>
</li>
<li>重写
<ul>
<li>继承父类的构造函数与方法，如果子类中由同名的方法，调用时只调用子类中的方法</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'动物在叫~'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'汪汪汪~'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//重写构造函数</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//重写构造函数时，构造函数的第一行代码必须为supper()</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">//调用父类的构造函数</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//调用父类的sayHello</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//在方法中可以使用super来引用父类的方法</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'喵喵喵~'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">'旺财'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">'汤姆'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">dog<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">cat<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cat<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-10-对象的结构" tabindex="-1"><a class="header-anchor" href="#_8-10-对象的结构"><span>8.10 对象的结构</span></a></h2>
<p>对象中存储属性的区域实际由两个</p>
<ol>
<li>对象自身
<ul>
<li>直接通过对象添加的属性，位于对象自身中</li>
<li>在类这种通过x = y 的形式添加的属性，位于对象自身中</li>
</ul>
</li>
<li>原型对象(prototy)
<ul>
<li>对象还有一些内容，会存储到其他的对象里</li>
<li>在对象中会有一个属性用来存储原型对象，这个属性中叫做_proto_</li>
<li>原型对象也负责为对象存储属性，
<ul>
<li>当我们访问对象中的属性时，会优先访问对象的属性</li>
<li>对象自身不包含该属性时，才会去原型对象中寻找</li>
</ul>
</li>
<li>会添加到原型对象中的情况：
<ol>
<li>在类中通过xxx(){}方式添加的方法，位于原型中</li>
<li>主动向原型中添加的属性或方法</li>
</ol>
</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">'孙悟空'</span></span>
<span class="line">    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"hello，我是"</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-11-原型对象" tabindex="-1"><a class="header-anchor" href="#_8-11-原型对象"><span>8.11 原型对象</span></a></h2>
<ol>
<li>访问一个对象的原型对象
<ul>
<li>对象.<strong>proto</strong></li>
<li>Object.getPrototypeOf(对象)</li>
</ul>
</li>
<li>原型对象中的数据
<ul>
<li>对象中的数据（属性、方法等）</li>
<li>constructor(对象的构造函数)</li>
</ul>
</li>
</ol>
<p>注意：</p>
<p>原型对象也有原型，这样就构成了一条原型链，根据对象的复杂程度不同，原型链的长度也不同</p>
<ul>
<li>p对象的原型链：p对象 -&gt; 原型 -&gt; 原型 -&gt; null</li>
<li>obj对象原型链： obj对象 -&gt; 原型 -&gt; null</li>
</ul>
<p>原型链：</p>
<p>读取对象属性时，会优先对象自身属性，</p>
<ul>
<li>如果对象中有，则使用，没有则去对象的原型中寻找</li>
<li>如果原型中有，则使用，没有则取原型的原型中寻找</li>
<li>直到找到Object对象的原(Object的原型没有对象（为null）)</li>
<li>如果依然没有找到，则返回undefined</li>
</ul>
<p>作用域链与原型链区别</p>
<ul>
<li>作用域链，是找变量的链，找不到变量会报错</li>
<li>原型链，是找属性链，找不到会返回undefined</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">'孙悟空'</span></span>
<span class="line">    age <span class="token operator">=</span> <span class="token number">18</span></span>
<span class="line">    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello,我是'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">===</span> p<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-12-原型对象的作用" tabindex="-1"><a class="header-anchor" href="#_8-12-原型对象的作用"><span>8.12 原型对象的作用</span></a></h2>
<p>所有的同类型对象他们的原型对象都是同一个</p>
<p>也就意味着，同类型对象的原型链是一样的</p>
<p>原型的作用：</p>
<p>原型就相当于是一个公告的区域，可以被所有该类实例访问。</p>
<p>可以将一个该类实例中，所有的公告属性（方法）同意存储到原型中 这样我们只需要创建一个属性，即可被所有实例访问</p>
<p>JS中继承就是通过原型来实现的 当继承时，子类的原型就是一个父类的实例</p>
<p>在对象中有些值是对象独有的，像属性（name,age,gender）每个对象都应该有自己的值,但是有些值对于每个对象来说都是一样的，各种方法，对于一样的值没必要重复的创建</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">class</span> <span class="token class-name">tomCat</span> <span class="token keyword">extends</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// tomCat -> cat -> animal实例 -> object -> object原型 -> null</span></span>
<span class="line">    <span class="token comment">// cat -> animal实例 -> object -> object原型 -> null</span></span>
<span class="line">    <span class="token comment">// p对象 ->object -> object原型 -> null</span></span>
<span class="line">    <span class="token keyword">const</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cat<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cat<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cat<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-13-修改原型" tabindex="-1"><a class="header-anchor" href="#_8-13-修改原型"><span>8.13 修改原型</span></a></h2>
<p>大部分情况下，我们是不需要修改原型对象</p>
<p>注意： 千万不要通过类的实例取修改原型</p>
<ol>
<li>通过一个对象影响所有同类对象，这么做不合适</li>
<li>修改原型先得创建实例，麻烦</li>
<li>危险</li>
</ol>
<p>处理通过__proto__能访问对象的原型外，还可以通过类的prototype属性，来访问实例的属性,修改原型时，最好通过类取修改</p>
<ul>
<li>好处：
<ol>
<li>已修改就是修改所有实例的原型</li>
<li>无需创建实例即可完成对类的修改</li>
</ol>
</li>
<li>原则：
<ol>
<li>原型尽量不要手动改</li>
<li>要改也不要通过实例对象去改</li>
<li>通过类.prototype属性去修改</li>
<li>最好不要直接给prototype去赋值</li>
</ol>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person1</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">'测试通过对象修改原型'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">'测试直接重赋予对象'</span></span>
<span class="line">        <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'狗在跑'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person3</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">'测试直接修改原型对象'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 通过对象修改原型，向原型中添加方法，修改后所有同类实例都能访问该方法  不要这么做</span></span>
<span class="line">    p1<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我在跑'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">p1<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//我在跑</span></span>
<span class="line">p2<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//我在跑</span></span>
<span class="line"><span class="token comment">//直接为对象赋值一个新的对象  不要这么做</span></span>
<span class="line"><span class="token keyword">const</span> p3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> p4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person2</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">p3<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p3<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//正确的做法</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person3</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//访问Person实例的原型对象</span></span>
<span class="line"><span class="token keyword">const</span> p5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person3</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> p6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person3</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token class-name">Person3</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">fly</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'我在飞'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">p5<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">p6<span class="token punctuation">.</span><span class="token function">fly</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-14-instanceof和hasown" tabindex="-1"><a class="header-anchor" href="#_8-14-instanceof和hasown"><span>8.14 instanceof和hasOwn</span></a></h2>
<ol>
<li>检查是否一个类的实例
<ul>
<li>instanceof  （对象是否是一个类的实例）
instanceof 真正检查的是对象的原型链上是否有该类实例，只要原型链上有该类实例，就会返回true</li>
</ul>
</li>
<li>检查是否含有属性
<ul>
<li>in
使用in运算符检查属性时，无论对象在对象自身还是原型中，都会返回true</li>
<li>对象.hasOwnProperty(属性名) （不推荐使用）
用来检查一个对象的自身是否含有某个属性 在Object对象中</li>
<li><code v-pre>Object.hasOwn</code>(对象，属性名）（官方推荐使用）
用来检查一个对象的自身是否含有某个属性 静态方法</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">/* </span>
<span class="line">    dog -> Animal的实例 -> Object实例 -> Object原型</span>
<span class="line">    - Object是所有对象的原型，所以任何和对象和Object进行instanceof运算都会返回true</span>
<span class="line">*/</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog <span class="token keyword">instanceof</span> <span class="token class-name">Dog</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog <span class="token keyword">instanceof</span> <span class="token class-name">Animal</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>dog <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// dog.__proto__  Dog.prototype</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    name <span class="token operator">=</span> <span class="token string">'孙悟空'</span></span>
<span class="line">    age <span class="token operator">=</span> <span class="token number">18</span></span>
<span class="line">    <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello，我是'</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'age'</span> <span class="token keyword">in</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'sayHello'</span> <span class="token keyword">in</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'sayHello'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//查看hasOwnProperty方法在哪里</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'hasOwnProperty'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'hasOwnProperty'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">'hasOwnProperty'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">hasOwn</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token string">'sayHello'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-15-旧类" tabindex="-1"><a class="header-anchor" href="#_8-15-旧类"><span>8.15 旧类</span></a></h2>
<p>早期JS中，直接通过函数来定义类</p>
<ul>
<li>一个函数如果直接调用xxx() 那么这个函数就是一个普通函数</li>
<li>一个函数如果通过new调用 new xxx() 那么这个函数就是一个构造函数</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> Person <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//在构造函数中，this表示新建的对象</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 向原型中添加属性 (方法)</span></span>
<span class="line">    <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 静态属性</span></span>
<span class="line">    Person<span class="token punctuation">.</span>staticProperty <span class="token operator">=</span> <span class="token string">'xxx'</span></span>
<span class="line">    <span class="token comment">// 静态犯法</span></span>
<span class="line">    Person<span class="token punctuation">.</span><span class="token function-variable function">staticMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> Person</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'孙悟空'</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span></span>
<span class="line">p<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//继承</span></span>
<span class="line"><span class="token keyword">var</span> Animal <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> Animal</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">var</span> Cat <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// 继承Animal</span></span>
<span class="line">    <span class="token class-name">Cat</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> Cat</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">var</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cat<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cat <span class="token keyword">instanceof</span> <span class="token class-name">Animal</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-16-new运算符" tabindex="-1"><a class="header-anchor" href="#_8-16-new运算符"><span>8.16 new运算符</span></a></h2>
<p>new 运算符是创建对象时要使用的运算符</p>
<p>当使用new去调用一个函数时，这个函数将会作为构造函数调用</p>
<p>使用new 调用函数时，将会发生这些事</p>
<ol>
<li>创建一个普通的JS对象(Object对象{}) 为了方便，我们称其为新对象</li>
<li>将构造函数的prototype属性设置为新对象的原型</li>
<li>使用实参执行构造函数，并且将新对象设置为函数中的this</li>
<li>如果构造函数返回的是一个非原始值,则该值会作为new 运算的返回值返回 (千万不要这么做)
<ul>
<li>如果构造函数的返回值是一个原始值(如：0 1 true)或者没有指定返回值，则新的对象将会作为返回值</li>
<li>通常不会为构造函数指定返回值</li>
</ul>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> newInstance <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    newInstance<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Myclass</span><span class="token punctuation">.</span>prototype</span>
<span class="line">    <span class="token comment">// return { name: '孙悟空' }</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">var</span> mc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Myclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mc<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// return {}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">person</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-17-总结" tabindex="-1"><a class="header-anchor" href="#_8-17-总结"><span>8.17 总结</span></a></h2>
<p>面向对象本质就是，编写代码时所有的操作都是通过对象来进行的。</p>
<p>面向对象的编程的步骤：</p>
<ul>
<li>找对象</li>
<li>搞对象</li>
</ul>
<p>学习对象：</p>
<ul>
<li>明确这个对象代表什么，有什么用</li>
<li>如何获取到这个对象</li>
<li>如何使用这个对象（对象中的属性和方法）</li>
</ul>
<p>对象的分类：</p>
<ul>
<li>内建对象
<ul>
<li>由ES标准所定义的对象</li>
<li>比如 Object Function String Number ...</li>
</ul>
</li>
<li>宿主对象
<ul>
<li>由浏览器提供的对象</li>
<li>BOM(操作浏览器)  DOM（操作页面）window document</li>
</ul>
</li>
<li>自定义对象
<ul>
<li>由开发者自己创建的对象</li>
</ul>
</li>
</ul>
</div></template>


