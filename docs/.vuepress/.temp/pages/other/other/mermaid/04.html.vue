<template><div><h1 id="三、类图" tabindex="-1"><a class="header-anchor" href="#三、类图"><span>三、类图</span></a></h1>
<blockquote>
<p>在软件工程中，统一建模语言（UML）中的类图是一种静态结构图，它通过显示系统的类、它们的属性、操作（或方法）以及对象之间的关系来描述系统的结构。</p>
</blockquote>
<p>类图是面向对象建模的主要构建块。它用于应用程序结构的一般概念建模，以及将模型转换为编程代码的详细建模。类图也可以用于数据建模。类图中的类既表示应用程序中的主要元素、交互，也表示要编程的类。</p>
<p>Mermaid可以渲染类图。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">---</span>
<span class="line">title: Animal example</span>
<span class="line">---</span>
<span class="line">classDiagram</span>
<span class="line">    note "From Duck till Zebra"</span>
<span class="line">    Animal &lt;|-- Duck</span>
<span class="line">    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"</span>
<span class="line">    Animal &lt;|-- Fish</span>
<span class="line">    Animal &lt;|-- Zebra</span>
<span class="line">    Animal : +int age</span>
<span class="line">    Animal : +String gender</span>
<span class="line">    Animal: +isMammal()</span>
<span class="line">    Animal: +mate()</span>
<span class="line">    class Duck{</span>
<span class="line">        +String beakColor</span>
<span class="line">        +swim()</span>
<span class="line">        +quack()</span>
<span class="line">    }</span>
<span class="line">    class Fish{</span>
<span class="line">        -int sizeInFeet</span>
<span class="line">        -canEat()</span>
<span class="line">    }</span>
<span class="line">    class Zebra{</span>
<span class="line">        +bool is_wild</span>
<span class="line">        +run()</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-buyj9bz">
            ---
title: Animal example
---
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }

          </pre>
          </code>
        <h2 id="_3-1-定义类" tabindex="-1"><a class="header-anchor" href="#_3-1-定义类"><span>3.1 定义类</span></a></h2>
<h3 id="_3-1-1-类标准" tabindex="-1"><a class="header-anchor" href="#_3-1-1-类标准"><span>3.1.1 类标准</span></a></h3>
<p>UML提供了表示类成员的机制，例如属性和方法，以及关于它们的附加信息。图中一个类的单个实例包含三个部分：</p>
<ul>
<li>最上面的隔层包含了类的名称。它以粗体居中印刷，第一个字母大写。它还可以包含描述类性质的可选注释文本。</li>
<li>中间的隔间包含类的属性。它们左对齐，第一个字母是小写的。</li>
<li>底层隔间包含类可以执行的操作。它们也是左对齐的，第一个字母是小写的。</li>
</ul>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">---</span>
<span class="line">title: Bank example</span>
<span class="line">---</span>
<span class="line">classDiagram</span>
<span class="line">    class BankAccount</span>
<span class="line">    BankAccount : +String owner</span>
<span class="line">    BankAccount : +Bigdecimal balance</span>
<span class="line">    BankAccount : +deposit(amount)</span>
<span class="line">    BankAccount : +withdrawal(amount)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-4wfg9t5">
            classDiagram
    class BankAccount
    BankAccount : +String owner
    BankAccount : +Bigdecimal balance
    BankAccount : +deposit(amount)
    BankAccount : +withdrawal(amount)

          </pre>
          </code>
        <h3 id="_3-1-2-定义类" tabindex="-1"><a class="header-anchor" href="#_3-1-2-定义类"><span>3.1.2 定义类</span></a></h3>
<p>定义类有两种方法：</p>
<ul>
<li>显式地使用关键字class，如 <code v-pre>class Animal</code> ，这将定义Animal类。</li>
<li>通过一个关系，一次定义两个类以及它们之间的关系。例如， <code v-pre>Vehicle &lt;|-- Car</code> 。</li>
</ul>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">    class Animal</span>
<span class="line">    Vehicle &lt;|-- Car</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-5hkdngk">
            classDiagram
    class Animal
    Vehicle <|-- Car

          </pre>
          </code>
        <p>命名约定：类名应该只由字母数字字符（包括unicode）、下划线和破折号（-）组成。</p>
<h3 id="_3-1-3-类标签" tabindex="-1"><a class="header-anchor" href="#_3-1-3-类标签"><span>3.1.3 类标签</span></a></h3>
<p>如果你需要为一个类提供一个标签，你可以使用以下语法：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">    class Animal["Animal with a label"]</span>
<span class="line">    class Car["Car with *! symbols"]</span>
<span class="line">    Animal --> Car</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-z7j4ziu">
            classDiagram
    class Animal["Animal with a label"]
    class Car["Car with *! symbols"]
    Animal --> Car

          </pre>
          </code>
        <p>还可以使用反号转义标签中的特殊字符：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">    class `Animal Class!`</span>
<span class="line">    class `Car Class`</span>
<span class="line">    `Animal Class!` --> `Car Class`</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-h6u3wg7">
            classDiagram
    class `Animal Class!`
    class `Car Class`
    `Animal Class!` --> `Car Class`

          </pre>
          </code>
        <p>Animal Class!</p>
<p>Car Class</p>
<h2 id="_3-2-定义类的成员" tabindex="-1"><a class="header-anchor" href="#_3-2-定义类的成员"><span>3.2 定义类的成员</span></a></h2>
<h3 id="_3-2-1-属性与方法" tabindex="-1"><a class="header-anchor" href="#_3-2-1-属性与方法"><span>3.2.1 属性与方法</span></a></h3>
<p>UML提供了表示类成员的机制，例如属性和方法，以及关于它们的附加信息。</p>
<p>Mermaid根据括号 <code v-pre>()</code> 是否存在来区分属性和函数/方法。 <code v-pre>()</code> 的被视为函数/方法，所有其他的作为属性。</p>
<p>有两种方法可以定义类的成员，无论使用哪种语法定义成员，输出都是相同的。两种不同的方式是：</p>
<ul>
<li>使用：（冒号）后跟成员名来关联类的成员，这对于一次定义一个成员很有用。例如:</li>
</ul>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">class BankAccount</span>
<span class="line">BankAccount : +String owner</span>
<span class="line">BankAccount : +BigDecimal balance</span>
<span class="line">BankAccount : +deposit(amount)</span>
<span class="line">BankAccount : +withdrawal(amount)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-mdgjzkf">
            classDiagram
class BankAccount
BankAccount : +String owner
BankAccount : +BigDecimal balance
BankAccount : +deposit(amount)
BankAccount : +withdrawal(amount)

          </pre>
          </code>
        <ul>
<li>使用{}括号的类的关联成员，其中成员被分组在花括号内。适合一次定义多个成员。例如:</li>
</ul>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">class BankAccount{</span>
<span class="line">    +String owner</span>
<span class="line">    +BigDecimal balance</span>
<span class="line">    +deposit(amount)</span>
<span class="line">    +withdrawal(amount)</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-8t5y6ii">
            classDiagram
class BankAccount{
    +String owner
    +BigDecimal balance
    +deposit(amount)
    +withdrawal(amount)
}

          </pre>
          </code>
        <h3 id="_3-2-2-方法返回类型" tabindex="-1"><a class="header-anchor" href="#_3-2-2-方法返回类型"><span>3.2.2 方法返回类型</span></a></h3>
<p>你可以选择用将要返回的数据类型结束方法/函数定义（注意：在最后的 <code v-pre>)</code> 和返回类型之间必须有一个空格）。一个例子:</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">class BankAccount{</span>
<span class="line">    +String owner</span>
<span class="line">    +BigDecimal balance</span>
<span class="line">    +deposit(amount) bool</span>
<span class="line">    +withdrawal(amount) int</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-g0b4dbg">
            classDiagram
class BankAccount{
    +String owner
    +BigDecimal balance
    +deposit(amount) bool
    +withdrawal(amount) int
}

          </pre>
          </code>
        <h3 id="_3-2-3-泛型类型" tabindex="-1"><a class="header-anchor" href="#_3-2-3-泛型类型"><span>3.2.3 泛型类型</span></a></h3>
<p>泛型可以表示为类定义的一部分，也可以表示为类成员/返回类型。为了将项目表示为通用类型，您将该类型包含在 <code v-pre>~</code> （波浪线）中。支持嵌套类型声明，如 <code v-pre>List&lt;List&lt;int&gt;&gt;</code> ，但目前不支持包含逗号的泛型。（如 <code v-pre>List&lt;List&lt;K, V&gt;&gt;</code> ）</p>
<blockquote>
<p>注意，当泛型在类定义中使用时，泛型类型不被视为类名的一部分。也就是说：对于任何需要你引用类名的语法，你需要去掉定义的类型部分。这也意味着mermaid目前不支持两个具有相同名称但不同泛型类型的类。</p>
</blockquote>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">class Square~Shape~{</span>
<span class="line">    int id</span>
<span class="line">    List~int~ position</span>
<span class="line">    setPoints(List~int~ points)</span>
<span class="line">    getPoints() List~int~</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">Square : -List~string~ messages</span>
<span class="line">Square : +setMessages(List~string~ messages)</span>
<span class="line">Square : +getMessages() List~string~</span>
<span class="line">Square : +getDistanceMatrix() List~List~int~~</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-2n6j038">
            classDiagram
class Square~Shape~{
    int id
    List~int~ position
    setPoints(List~int~ points)
    getPoints() List~int~
}

Square : -List~string~ messages
Square : +setMessages(List~string~ messages)
Square : +getMessages() List~string~
Square : +getDistanceMatrix() List~List~int~~

          </pre>
          </code>
        <h3 id="_3-2-4-可见性" tabindex="-1"><a class="header-anchor" href="#_3-2-4-可见性"><span>3.2.4 可见性</span></a></h3>
<p>为了描述作为类（即类成员）一部分的属性或方法/函数的可见性（或封装），可选符号可以放在成员名之前：</p>
<ul>
<li><code v-pre>+</code></li>
<li><code v-pre>-</code> 私有的</li>
<li><code v-pre>#</code> 保护</li>
<li><code v-pre>~</code> 包/内部</li>
</ul>
<blockquote>
<p>注意，你也可以通过在方法的末尾添加以下符号来在方法定义中包含额外的分类器，即：在 <code v-pre>()</code> 之后或在返回类型之后：</p>
<ul>
<li><code v-pre>*</code> 摘要例如： <code v-pre>someAbstractMethod()*</code> 或 <code v-pre>someAbstractMethod() int*</code></li>
<li><code v-pre>$</code> 静态例如： <code v-pre>someStaticMethod()$</code> 或 <code v-pre>someStaticMethod() String$</code></li>
</ul>
</blockquote>
<blockquote>
<p>注意，您还可以通过在字段定义的最后添加以下符号来包含额外的分类器：</p>
<ul>
<li><code v-pre>$</code> 静态例如： <code v-pre>String someField$</code></li>
</ul>
</blockquote>
<h2 id="_3-3-定义关系" tabindex="-1"><a class="header-anchor" href="#_3-3-定义关系"><span>3.3 定义关系</span></a></h2>
<h3 id="_3-3-1-基础定义" tabindex="-1"><a class="header-anchor" href="#_3-3-1-基础定义"><span>3.3.1 基础定义</span></a></h3>
<p>关系是一个通用术语，涵盖了在类图和对象图中发现的特定类型的逻辑连接。</p>
<ol>
<li>语法</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">[classA][Arrow][ClassB]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>关系类型与写法</li>
</ol>
<p>目前支持的UML中为类定义的关系有八种不同类型：</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;|--</code></td>
<td>继承</td>
</tr>
<tr>
<td><code v-pre>*--</code></td>
<td>作文</td>
</tr>
<tr>
<td><code v-pre>o--</code></td>
<td>聚合</td>
</tr>
<tr>
<td><code v-pre>--&gt;</code></td>
<td>协会</td>
</tr>
<tr>
<td><code v-pre>--</code></td>
<td>链接(固体)</td>
</tr>
<tr>
<td><code v-pre>..&gt;</code></td>
<td>依赖</td>
</tr>
<tr>
<td><code v-pre>..|&gt;</code></td>
<td>实现</td>
</tr>
<tr>
<td><code v-pre>..</code></td>
<td>链接(虚线)</td>
</tr>
</tbody>
</table>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">classA &lt;|-- classB</span>
<span class="line">classC *-- classD</span>
<span class="line">classE o-- classF</span>
<span class="line">classG &lt;-- classH</span>
<span class="line">classI -- classJ</span>
<span class="line">classK &lt;.. classL</span>
<span class="line">classM &lt;|.. classN</span>
<span class="line">classO .. classP</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-dxqjsxx">
            classDiagram
classA <|-- classB
classC *-- classD
classE o-- classF
classG <-- classH
classI -- classJ
classK <.. classL
classM <|.. classN
classO .. classP

          </pre>
          </code>
        <ol start="3">
<li>使用标签</li>
</ol>
<p>使用标签来描述两个类之间关系的性质。此外，箭头也可以用于相反的方向：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">classA --|> classB : Inheritance</span>
<span class="line">classC --* classD : Composition</span>
<span class="line">classE --o classF : Aggregation</span>
<span class="line">classG --> classH : Association</span>
<span class="line">classI -- classJ : Link(Solid)</span>
<span class="line">classK ..> classL : Dependency</span>
<span class="line">classM ..|> classN : Realization</span>
<span class="line">classO .. classP : Link(Dashed)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-jatzis3">
            classDiagram
classA --|> classB : Inheritance
classC --* classD : Composition
classE --o classF : Aggregation
classG --> classH : Association
classI -- classJ : Link(Solid)
classK ..> classL : Dependency
classM ..|> classN : Realization
classO .. classP : Link(Dashed)

          </pre>
          </code>
        <h3 id="_3-3-2-关系标签" tabindex="-1"><a class="header-anchor" href="#_3-3-2-关系标签"><span>3.3.2 关系标签</span></a></h3>
<p>可以将标签文本添加到关系中：</p>
<ul>
<li>语法</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">[classA][Arrow][ClassB]:LabelText</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">classA &lt;|-- classB : implements</span>
<span class="line">classC *-- classD : composition</span>
<span class="line">classE o-- classF : aggregation</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-1oiziyw">
            classDiagram
classA <|-- classB : implements
classC *-- classD : composition
classE o-- classF : aggregation

          </pre>
          </code>
        <h3 id="_3-3-3-双向关系" tabindex="-1"><a class="header-anchor" href="#_3-3-3-双向关系"><span>3.3.3 双向关系</span></a></h3>
<ol>
<li>关系可以在逻辑上表示一个N:M关联：</li>
</ol>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">    Animal &lt;|--|> Zebra</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-8ztwp7v">
            classDiagram
    Animal <|--|> Zebra

          </pre>
          </code>
        <ol start="2">
<li>语法</li>
</ol>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">[Relation Type][Link][Relation Type]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>其中 <code v-pre>Relation Type</code> 可以是：</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;|</code></td>
<td>继承</td>
</tr>
<tr>
<td><code v-pre>\*</code></td>
<td>作文</td>
</tr>
<tr>
<td><code v-pre>o</code></td>
<td>聚合</td>
</tr>
<tr>
<td><code v-pre>&gt;</code></td>
<td>协会</td>
</tr>
<tr>
<td><code v-pre>&lt;</code></td>
<td>协会</td>
</tr>
<tr>
<td><code v-pre>|&gt;</code></td>
<td>实现</td>
</tr>
</tbody>
</table>
<p><code v-pre>Link</code> 可以是：</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>--</td>
<td>固体</td>
</tr>
<tr>
<td>..</td>
<td>冲</td>
</tr>
</tbody>
</table>
<h3 id="‌3-3-4-lollipop-棒棒糖-的接口" tabindex="-1"><a class="header-anchor" href="#‌3-3-4-lollipop-棒棒糖-的接口"><span>‌3.3.4 Lollipop（棒棒糖）的接口</span></a></h3>
<p>目前好像只用于andriod</p>
<p>还可以给类指定一个特殊的关系类型，该类型在类上定义一个棒棒糖接口。棒棒糖接口使用以下语法定义：</p>
<ul>
<li><code v-pre>bar ()-- foo</code></li>
<li><code v-pre>foo --() bar</code></li>
</ul>
<p>带有棒棒糖的接口（bar）连接到类（foo）。</p>
<p>注意：定义的每个接口都是唯一的，意味着不能在类之间共享/有多个边连接到它。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">  bar ()-- foo</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-qr731fz">
            classDiagram
  bar ()-- foo

          </pre>
          </code>
        <ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">  class Class01 {</span>
<span class="line">    int amount</span>
<span class="line">    draw()</span>
<span class="line">  }</span>
<span class="line">  Class01 --() bar</span>
<span class="line">  Class02 --() bar</span>
<span class="line"></span>
<span class="line">  foo ()-- Class01</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-msz82pn">
            classDiagram
  class Class01 {
    int amount
    draw()
  }
  Class01 --() bar
  Class02 --() bar

  foo ()-- Class01

          </pre>
          </code>
        <h2 id="_3-4-定义命名空间" tabindex="-1"><a class="header-anchor" href="#_3-4-定义命名空间"><span>3.4 定义命名空间</span></a></h2>
<p>名称空间对类进行分组。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">namespace BaseShapes {</span>
<span class="line">    class Triangle</span>
<span class="line">    class Rectangle {</span>
<span class="line">      double width</span>
<span class="line">      double height</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-uqmdxp5">
            classDiagram
namespace BaseShapes {
    class Triangle
    class Rectangle {
      double width
      double height
    }
}

          </pre>
          </code>
        <h2 id="_3-5-关系的基数性-多重性" tabindex="-1"><a class="header-anchor" href="#_3-5-关系的基数性-多重性"><span>3.5 关系的基数性/多重性</span></a></h2>
<p>类图中的多重性或基数表示可以链接到另一个类的实例的一个类的实例的数量。例如，每个公司将有一个或多个员工（不是零），并且每个员工当前为零个或一个公司工作。</p>
<p>多重符号被放置在一个关联的末尾。</p>
<p>不同的基数选项有：</p>
<ul>
<li><code v-pre>1</code> 仅1</li>
<li><code v-pre>0..1</code>  0或1</li>
<li><code v-pre>1..*</code> 一个或多个</li>
<li><code v-pre>*</code> 很多</li>
<li><code v-pre>n</code>  n（其中n&gt;1）</li>
<li><code v-pre>0..n</code>  0到n（其中n&gt;为1）</li>
<li><code v-pre>1..n</code>  1到n（其中n&gt;1）</li>
</ul>
<p>基数可以通过在给定箭头之前或之后的引号 <code v-pre>&quot;</code> 中放置文本选项来轻松定义。例如:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">[classA] "cardinality1" [Arrow] "cardinality2" [ClassB]:LabelText</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">    Customer "1" --> "*" Ticket</span>
<span class="line">    Student "1" --> "1..*" Course</span>
<span class="line">    Galaxy --> "many" Star : Contains</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-cthq05e">
            classDiagram
    Customer "1" --> "*" Ticket
    Student "1" --> "1..*" Course
    Galaxy --> "many" Star : Contains

          </pre>
          </code>
        <h2 id="_3-6-类上的注释" tabindex="-1"><a class="header-anchor" href="#_3-6-类上的注释"><span>3.6 类上的注释</span></a></h2>
<p>可以用标记对类进行注释，以提供有关该类的额外元数据。这可以更清楚地说明它的性质。一些常见的注释包括：</p>
<ul>
<li><code v-pre>&lt;&lt;Interface&gt;&gt;</code> 表示一个接口类</li>
<li><code v-pre>&lt;&lt;Abstract&gt;&gt;</code> 表示一个抽象类</li>
<li><code v-pre>&lt;&lt;Service&gt;&gt;</code> 表示一个服务类</li>
<li><code v-pre>&lt;&lt;Enumeration&gt;&gt;</code> 表示枚举类（enum）</li>
</ul>
<p>注释定义在开头 <code v-pre>&lt;&lt;</code> 和结尾 <code v-pre>&gt;&gt;</code> 内。有两种方法可以向类中添加注释，无论哪种方式的输出都是相同的：</p>
<ul>
<li>在定义类之后的单独一行中：</li>
</ul>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">  class Shape</span>
<span class="line">  &lt;&lt;interface>> Shape</span>
<span class="line">  Shape : noOfVertices</span>
<span class="line">  Shape : draw()</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-rj3id80">
            classDiagram
  class Shape
  &lt;&lt;interface&gt;&gt; Shape
  Shape : noOfVertices
  Shape : draw()

          </pre>
          </code>
        <ul>
<li>在类定义的嵌套结构中：</li>
</ul>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">class Shape{</span>
<span class="line">    &lt;&lt;interface>></span>
<span class="line">    noOfVertices</span>
<span class="line">    draw()</span>
<span class="line">}</span>
<span class="line">class Color{</span>
<span class="line">    &lt;&lt;enumeration>></span>
<span class="line">    RED</span>
<span class="line">    BLUE</span>
<span class="line">    GREEN</span>
<span class="line">    WHITE</span>
<span class="line">    BLACK</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-tmmodq7">
            classDiagram
class Shape{
     &lt;&lt;interface&gt;&gt;
    noOfVertices
    draw()
}
class Color{
     &lt;&lt;enumeration&gt;&gt;
    RED
    BLUE
    GREEN
    WHITE
    BLACK
}

          </pre>
          </code>
        <h2 id="_3-7-注释" tabindex="-1"><a class="header-anchor" href="#_3-7-注释"><span>3.7 注释</span></a></h2>
<p>注释可以在类图中输入，解析器将忽略注释。注释需要在单独的行上，并且必须以 <code v-pre>%%</code> （双百分号）作为前缀。直到下一个换行符之前的任何文本都将被视为注释，包括任何类图语法。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">%% This whole line is a comment classDiagram class Shape &lt;&lt;interface>></span>
<span class="line">class Shape{</span>
<span class="line">    &lt;&lt;interface>></span>
<span class="line">    noOfVertices</span>
<span class="line">    draw()</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-j80vgza">
            classDiagram
%% This whole line is a comment classDiagram class Shape &lt;&lt;interface&gt;&gt;
class Shape{
    &lt;&lt;interface&gt;&gt;
    noOfVertices
    draw()
}

          </pre>
          </code>
        <h2 id="_3-8-设置图表的方向" tabindex="-1"><a class="header-anchor" href="#_3-8-设置图表的方向"><span>3.8 设置图表的方向</span></a></h2>
<p>对于类图，你可以使用direction语句来设置渲染图的方向：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">  direction RL</span>
<span class="line">  class Student {</span>
<span class="line">    -idCard : IdCard</span>
<span class="line">  }</span>
<span class="line">  class IdCard{</span>
<span class="line">    -id : int</span>
<span class="line">    -name : string</span>
<span class="line">  }</span>
<span class="line">  class Bike{</span>
<span class="line">    -id : int</span>
<span class="line">    -name : string</span>
<span class="line">  }</span>
<span class="line">  Student "1" --o "1" IdCard : carries</span>
<span class="line">  Student "1" --o "1" Bike : rides</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-53e461t">
            classDiagram
  direction RL
  class Student {
    -idCard : IdCard
  }
  class IdCard{
    -id : int
    -name : string
  }
  class Bike{
    -id : int
    -name : string
  }
  Student "1" --o "1" IdCard : carries
  Student "1" --o "1" Bike : rides

          </pre>
          </code>
        <h2 id="_3-9-交互" tabindex="-1"><a class="header-anchor" href="#_3-9-交互"><span>3.9 交互</span></a></h2>
<p>可以将单击事件绑定到节点。点击可以导致javascript回调或链接，这将在一个新的浏览器选项卡中打开。注意：当使用 <code v-pre>securityLevel='strict'</code> 时禁用此功能，当使用 <code v-pre>securityLevel='loose'</code> 时启用此功能。</p>
<p>在声明了所有类之后，您可以在单独的一行中定义这些操作。</p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code><span class="line">action className "reference" "tooltip"</span>
<span class="line">click className call callback() "tooltip"</span>
<span class="line">click className href "url" "tooltip"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Action要么 <code v-pre>link</code> ，要么 <code v-pre>callback</code> ，这取决于您想要调用的交互类型</li>
<li>className是操作将与之关联的节点的id</li>
<li>引用可以是url链接，也可以是回调函数的名称。</li>
<li>（可选）tooltip是悬停在元素上时显示的字符串（注意：工具提示的样式是由. mermaidtooltip类设置的）。</li>
<li>注意：回调函数将以nodeId作为参数调用。</li>
</ul>
<h2 id="_3-10-笔记-注释" tabindex="-1"><a class="header-anchor" href="#_3-10-笔记-注释"><span>3.10 笔记-注释</span></a></h2>
<p>可以使用 <code v-pre>note &quot;line1\nline2&quot;</code> 在图上添加注释。可以使用 <code v-pre>note for &lt;CLASS NAME&gt; &quot;line1\nline2&quot;</code> 为特定类添加注释。</p>
<h3 id="_3-10-1-例子" tabindex="-1"><a class="header-anchor" href="#_3-10-1-例子"><span>3.10.1 例子</span></a></h3>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">    note "This is a general note"</span>
<span class="line">    note for MyClass "This is a note for a class"</span>
<span class="line">    class MyClass{</span>
<span class="line">    }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-xbkzij9">
            classDiagram
    note "This is a general note"
    note for MyClass "This is a note for a class"
    class MyClass {

    }
end

          </pre>
          </code>
        <ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">class Shape</span>
<span class="line">link Shape "https://www.github.com" "This is a tooltip for a link"</span>
<span class="line">class Shape2</span>
<span class="line">click Shape2 href "https://www.github.com" "This is a tooltip for a link"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-0ztkbn0">
            classDiagram
class Shape
link Shape "https://www.github.com" "This is a tooltip for a link"
class Shape2
click Shape2 href "https://www.github.com" "This is a tooltip for a link"

          </pre>
          </code>
        <ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">class Shape</span>
<span class="line">callback Shape "callbackFunction" "This is a tooltip for a callback"</span>
<span class="line">class Shape2</span>
<span class="line">click Shape2 call callbackFunction() "This is a tooltip for a callback"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-46f6o22">
            classDiagram
class Shape
callback Shape "callbackFunction" "This is a tooltip for a callback"
class Shape2
click Shape2 call callbackFunction() "This is a tooltip for a callback"

          </pre>
          </code>
        <div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">callbackFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'A callback was triggered'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">    class Class01</span>
<span class="line">    class Class02</span>
<span class="line">    callback Class01 "callbackFunction" "Callback tooltip"</span>
<span class="line">    link Class02 "https://www.github.com" "This is a link"</span>
<span class="line">    class Class03</span>
<span class="line">    class Class04</span>
<span class="line">    click Class03 call callbackFunction() "Callback tooltip"</span>
<span class="line">    click Class04 href "https://www.github.com" "This is a link"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-7xhn4wd">
            classDiagram
    class Class01
    class Class02
    callback Class01 "callbackFunction" "Callback tooltip"
    link Class02 "https://www.github.com" "This is a link"
    class Class03
    class Class04
    click Class03 call callbackFunction() "Callback tooltip"
    click Class04 href "https://www.github.com" "This is a link"

          </pre>
          </code>
        <h3 id="_3-10-2-html页面展示" tabindex="-1"><a class="header-anchor" href="#_3-10-2-html页面展示"><span>3.10.2 html页面展示</span></a></h3>
<p>初学者提示——在HTML页面中使用交互式链接的完整示例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mermaid<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    classDiagram</span>
<span class="line">    Animal &lt;|-- Duck</span>
<span class="line">    Animal &lt;|-- Fish</span>
<span class="line">    Animal &lt;|-- Zebra</span>
<span class="line">    Animal : +int age</span>
<span class="line">    Animal : +String gender</span>
<span class="line">    Animal: +isMammal()</span>
<span class="line">    Animal: +mate()</span>
<span class="line">    class Duck{</span>
<span class="line">      +String beakColor</span>
<span class="line">      +swim()</span>
<span class="line">      +quack()</span>
<span class="line">      }</span>
<span class="line">    class Fish{</span>
<span class="line">      -int sizeInFeet</span>
<span class="line">      -canEat()</span>
<span class="line">      }</span>
<span class="line">    class Zebra{</span>
<span class="line">      +bool is_wild</span>
<span class="line">      +run()</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      callback Duck callback "Tooltip"</span>
<span class="line">      link Zebra "https://www.github.com" "This is a link"</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'A callback was triggered'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">startOnLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">securityLevel</span><span class="token operator">:</span> <span class="token string">'loose'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    mermaid<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-11-样式" tabindex="-1"><a class="header-anchor" href="#_3-11-样式"><span>3.11 样式</span></a></h2>
<h3 id="_3-11-1-样式化节点" tabindex="-1"><a class="header-anchor" href="#_3-11-1-样式化节点"><span>3.11.1 样式化节点</span></a></h3>
<p>可以使用 <code v-pre>style</code> 关键字对单个节点应用特定样式，例如更厚的边框或不同的背景颜色。</p>
<p>注意，注释和名称空间不能单独设置样式，但它们支持主题。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">  class Animal</span>
<span class="line">  class Mineral</span>
<span class="line">  style Animal fill:#f9f,stroke:#333,stroke-width:4px</span>
<span class="line">  style Mineral fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-bssu1am">
            classDiagram
  class Animal
  class Mineral
  style Animal fill:#f9f,stroke:#333,stroke-width:4px
  style Mineral fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

          </pre>
          </code>
        <h3 id="_3-11-2-样式中类定义" tabindex="-1"><a class="header-anchor" href="#_3-11-2-样式中类定义"><span>3.11.2 样式中类定义</span></a></h3>
<p>比每次定义样式更方便的方法是定义一个样式类，并将该类附加到应该具有不同外观的节点上。</p>
<p>类定义看起来像下面的例子：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDef className fill:#f9f,stroke:#333,stroke-width:4px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>此外，可以在一个语句中定义多个类的样式：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDef firstClassName,secondClassName font-size:12pt;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>将类附加到节点的操作如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">cssClass "nodeId1" className;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>也可以在一条语句中将一个类附加到节点列表：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">cssClass "nodeId1,nodeId2" className;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>添加类的较短形式是使用 <code v-pre>:::</code> 操作符将类名附加到节点上：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">    class Animal:::someclass</span>
<span class="line">    classDef someclass fill:#f96</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-e2auhjc">
            classDiagram
    class Animal:::someclass
    classDef someclass fill:#f96

          </pre>
          </code>
        <p>或者:</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">    class Animal:::someclass {</span>
<span class="line">        -int sizeInFeet</span>
<span class="line">        -canEat()</span>
<span class="line">    }</span>
<span class="line">    classDef someclass fill:#f96</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-o1qmecl">
            classDiagram
    class Animal:::someclass {
        -int sizeInFeet
        -canEat()
    }
    classDef someclass fill:#f96

          </pre>
          </code>
        <h3 id="_3-11-3-默认的类" tabindex="-1"><a class="header-anchor" href="#_3-11-3-默认的类"><span>3.11.3 默认的类</span></a></h3>
<p>如果一个类被命名为default，它将应用于所有节点。之后应该定义特定的样式和类来覆盖应用的默认样式。</p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre v-pre><code><span class="line">classDef default fill:#f9f,stroke:#333,stroke-width:4px;</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">  class Animal:::pink</span>
<span class="line">  class Mineral</span>
<span class="line"></span>
<span class="line">  classDef default fill:#f96,color:red</span>
<span class="line">  classDef pink color:#f9f</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-qyayt5k">
            classDiagram
  class Animal:::pink
  class Mineral

  classDef default fill:#f96,color:red
  classDef pink color:#f9f

          </pre>
          </code>
        <h3 id="_3-11-4-css类" tabindex="-1"><a class="header-anchor" href="#_3-11-4-css类"><span>3.11.4 CSS类</span></a></h3>
<p>也可以在CSS样式中预定义类，这些类可以从图形定义中应用，如下例所示：</p>
<p><strong>例子的风格</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">  <span class="token selector">.styleClass > * > g</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">fill</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">stroke</span><span class="token punctuation">:</span> #ffff00<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">stroke-width</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例定义</strong></p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">    class Animal:::styleClass</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-sxxoe9z">
            classDiagram
    class Animal:::styleClass

          </pre>
          </code>
        <blockquote>
<p>不能将此简写方法与关系语句同时添加cssClasses。</p>
</blockquote>
<h2 id="_3-12-配置" tabindex="-1"><a class="header-anchor" href="#_3-12-配置"><span>3.12 配置</span></a></h2>
<h3 id="_3-12-1-成员框" tabindex="-1"><a class="header-anchor" href="#_3-12-1-成员框"><span>3.12.1 成员框</span></a></h3>
<p>可以隐藏类节点的空成员框。</p>
<p>这是通过更改类图配置的hideEmptyMembersBox值来完成的。有关如何编辑Mermaid配置的详细信息，请参阅配置页面。</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">---</span>
<span class="line">  config:</span>
<span class="line">    class:</span>
<span class="line">      hideEmptyMembersBox: true</span>
<span class="line">---</span>
<span class="line">classDiagram</span>
<span class="line">  class Duck</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-0jfuwll">
            ---
  config:
    class:
      hideEmptyMembersBox: true
---
classDiagram
  class Duck

          </pre>
          </code>
        </div></template>


