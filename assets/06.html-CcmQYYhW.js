import{aq as s,ar as e,as as a,at as i}from"./app-Cok9BT0p.js";const l={};function d(r,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="五、实体关系图" tabindex="-1"><a class="header-anchor" href="#五、实体关系图"><span>五、实体关系图</span></a></h1><h2 id="_5-1-介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-介绍"><span>5.1 介绍</span></a></h2><blockquote><p>实体-关系模型（或ER模型）描述特定知识领域中感兴趣的相互关联的事物。基本的ER模型由实体类型（对感兴趣的事物进行分类）组成，并指定实体（这些实体类型的实例）之间可以存在的关系。</p></blockquote><p>请注意，ER建模的实践者几乎总是将实体类型简单地称为实体。例如， <code>CUSTOMER</code> 实体类型可以简单地称为 <code>CUSTOMER</code> 实体。这是非常常见的，不建议做任何其他事情，但从技术上讲，实体是实体类型的抽象实例，这就是ER图所显示的-抽象实例以及它们之间的关系。这就是为什么实体总是用单数名词命名。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">---</span>
<span class="line">title: Order example</span>
<span class="line">---</span>
<span class="line">erDiagram</span>
<span class="line">    CUSTOMER ||--o{ ORDER : places</span>
<span class="line">    ORDER ||--|{ LINE-ITEM : contains</span>
<span class="line">    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-qn8sk6i">            ---
title: Order example
---
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses

          </pre></code><p>实体名称通常是大写的，尽管在这方面没有公认的标准，在Mermaid中也不是必需的。</p><p>实体之间的关系由线条表示，线条的结束标记表示基数。美人鱼使用最流行的鱼尾纹符号。鱼尾纹直观地传达了它所连接的实体的许多实例的可能性。</p><p>ER图可以用于各种目的，从缺乏任何实现细节的抽象逻辑模型，到关系数据库表的物理模型。在ER图中包含属性定义有助于理解实体的目的和含义，这是很有用的。这些并不一定需要详尽无遗；通常，一小部分属性就足够了。Mermaid允许根据它们的类型和名称定义它们。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    CUSTOMER ||--o{ ORDER : places</span>
<span class="line">    CUSTOMER {</span>
<span class="line">        string name</span>
<span class="line">        string custNumber</span>
<span class="line">        string sector</span>
<span class="line">    }</span>
<span class="line">    ORDER ||--|{ LINE-ITEM : contains</span>
<span class="line">    ORDER {</span>
<span class="line">        int orderNumber</span>
<span class="line">        string deliveryAddress</span>
<span class="line">    }</span>
<span class="line">    LINE-ITEM {</span>
<span class="line">        string productCode</span>
<span class="line">        int quantity</span>
<span class="line">        float pricePerUnit</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-f0a1jt9">            erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }

          </pre></code><p>在ER图中包含属性时，必须决定是否将外键作为属性包含。这可能取决于您试图表示关系表结构的程度。如果您的图是一个逻辑模型，并不意味着隐含关系实现，那么最好省略这些，因为关联关系已经传达了实体关联的方式。例如，JSON数据结构可以使用数组实现一对多关系，而不需要外键属性。类似地，面向对象编程语言可以使用指针或对集合的引用。即使对于用于关系实现的模型，您也可能认为包含外键属性会重复关系已经描述的信息，并且不会为实体增加意义。最终，这是你的选择。</p><h2 id="_5-2-实体和关系" tabindex="-1"><a class="header-anchor" href="#_5-2-实体和关系"><span>5.2 实体和关系</span></a></h2><p>用于ER图的Mermaid语法与PlantUML兼容，并带有标记关系的扩展。每个语句由以下部分组成：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    &lt;first-entity&gt; [&lt;relationship&gt; &lt;second-entity&gt; : &lt;relationship-label&gt;]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>地点:</p><ul><li><code>first-entity</code> 为实体名称。名称支持任何unicode字符，如果被双引号包围，可以包括空格(例如：“name with space”)。</li><li><code>relationship</code> 描述了两个实体相互关联的方式。见下文。</li><li><code>second-entity</code> 是另一个实体的名称。</li><li><code>relationship-label</code> 从第一个实体的角度描述关系。</li></ul><p>例如:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    PROPERTY ||--|{ ROOM : contains</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这个语句可以被理解为一个属性包含一个或多个房间，一个房间是一个且只有一个属性的一部分。您可以看到这里的标签是从第一个实体的角度来看的：属性包含房间，但房间不包含属性。当从第二个实体的角度考虑时，等效标签通常很容易推断出来。（一些ER图从两个透视图标记关系，但这里不支持，而且通常是多余的）。</p><p>语句中只有 <code>first-entity</code> 部分是必须的。这使得显示没有关系的实体成为可能，这在图的迭代构建过程中是有用的。如果指定了语句的任何其他部分，则所有部分都是强制性的。</p><h2 id="_5-3-文本格式化" tabindex="-1"><a class="header-anchor" href="#_5-3-文本格式化"><span>5.3 文本格式化</span></a></h2><h3 id="_5-3-1-unicode文本" tabindex="-1"><a class="header-anchor" href="#_5-3-1-unicode文本"><span>5.3.1 Unicode文本</span></a></h3><p>实体名称、关系和属性都支持unicode文本。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    &quot;This ❤ Unicode&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-qw4zu5z">            erDiagram
    &quot;This ❤ Unicode&quot;

          </pre></code><h3 id="_5-3-2-markdown格式化" tabindex="-1"><a class="header-anchor" href="#_5-3-2-markdown格式化"><span>5.3.2 markdown格式化</span></a></h3><p>还支持Markdown格式和文本。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    &quot;This **is** _Markdown_&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-bwmhfly">            erDiagram
    &quot;This **is** _Markdown_&quot;

          </pre></code><h3 id="_5-4-语法的关系" tabindex="-1"><a class="header-anchor" href="#_5-4-语法的关系"><span>5.4 语法的关系</span></a></h3><p>每条语句的 <code>relationship</code> 部分可以分解为三个子组件：</p><ul><li>第一个实体相对于第二个实体的基数</li><li>关系是否赋予“子”实体身份</li><li>第二个实体相对于第一个实体的基数</li></ul><p>基数是一种属性，它描述了另一个实体中有多少元素可以与所讨论的实体相关。在上面的例子中， <code>PROPERTY</code> 可以关联一个或多个 <code>ROOM</code> 实例，而 <code>ROOM</code> 只能关联一个 <code>PROPERTY</code> 。在每个基数标记中有两个字符。最外面的字符表示最大值，最里面的字符表示最小值。下表总结了可能的基数。</p><table><thead><tr><th>值(左)</th><th>值(右)</th><th>意义</th></tr></thead><tbody><tr><td><code>|o</code></td><td><code>o|</code></td><td>0或1</td></tr><tr><td><code>|</code></td><td><code>|</code></td><td>一个</td></tr><tr><td><code>}o</code></td><td><code>o{</code></td><td>零或更多（没有上限）</td></tr><tr><td><code>}|</code></td><td><code>|{</code></td><td>一个或多个（没有上限）</td></tr></tbody></table><p><strong>别名</strong></p><table><thead><tr><th>Value (left)</th><th>Value (right)</th><th>别名</th></tr></thead><tbody><tr><td>one or zero</td><td>one or zero</td><td>Zero or one</td></tr><tr><td>zero or one</td><td>zero or one</td><td>Zero or one</td></tr><tr><td>one or more</td><td>one or more</td><td>One or more</td></tr><tr><td>one or many</td><td>one or many</td><td>One or more</td></tr><tr><td>many(1)</td><td>many(1)</td><td>One or more</td></tr><tr><td>1+</td><td>1+</td><td>One or more</td></tr><tr><td>zero or more</td><td>zero or more</td><td>Zero or more</td></tr><tr><td>zero or many</td><td>zero or many</td><td>Zero or more</td></tr><tr><td>many(0)</td><td>many(0)</td><td>Zero or more</td></tr><tr><td>0+</td><td>0+</td><td>Zero or more</td></tr><tr><td>only one</td><td>only one</td><td>Exactly one</td></tr><tr><td>1</td><td>1</td><td>Exactly one</td></tr></tbody></table><h2 id="_5-5-序列化" tabindex="-1"><a class="header-anchor" href="#_5-5-序列化"><span>5.5 序列化</span></a></h2><p>关系可以被分类为标识或非标识，它们分别用实线或虚线表示。当问题中的一个实体不能独立存在而没有另一个实体时，这是相关的。例如，一家为人们驾驶汽车提供保险的公司可能需要将数据存储在 CAR 可以由许多 <code>PERSON</code> 实例驱动，而 <code>PERSON</code> 可以驱动许多 <code>CAR</code> -两个实体可以独立存在，因此这是一个非识别关系，我们可以在Mermaid中指定为： <code>PERSON }|..|{ CAR : &quot;driver&quot;</code> 。请注意，关系中间的两个点将导致在两个实体之间绘制虚线。但是，当这种多对多关系被分解成两个一对多关系时，我们观察到，如果没有 <code>PERSON</code> 和 <code>CAR</code> ，则 <code>NAMED-DRIVER</code> 就不可能存在——这些关系变得具有识别性，并且将使用连字符来指定，它转换为实线：</p><table><thead><tr><th>Value</th><th>别名</th></tr></thead><tbody><tr><td>--</td><td><em>identifying</em></td></tr><tr><td>..</td><td><em>non-identifying</em></td></tr></tbody></table><p><strong>别名</strong></p><table><thead><tr><th>Value</th><th>别名</th></tr></thead><tbody><tr><td>to</td><td><em>identifying</em></td></tr><tr><td>optionally to</td><td><em>non-identifying</em></td></tr></tbody></table><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    CAR ||--o{ NAMED-DRIVER : allows</span>
<span class="line">    PERSON }o..o{ NAMED-DRIVER : is</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-11mp6v8">            erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    PERSON }o..o{ NAMED-DRIVER : is

          </pre></code><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    CAR 1 to zero or more NAMED-DRIVER : allows</span>
<span class="line">    PERSON many(0) optionally to 0+ NAMED-DRIVER : is</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-w6eitb6">            erDiagram
    CAR 1 to zero or more NAMED-DRIVER : allows
    PERSON many(0) optionally to 0+ NAMED-DRIVER : is

          </pre></code><h2 id="_5-6-实体属性" tabindex="-1"><a class="header-anchor" href="#_5-6-实体属性"><span>5.6 实体属性</span></a></h2><p>实体定义属性的方法是：指定实体名，后跟一个包含多个 <code>type name</code> 对的块，其中一个块由开头 <code>{</code> 和结束 <code>}</code> 分隔。属性在实体框内呈现。例如:</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    CAR ||--o{ NAMED-DRIVER : allows</span>
<span class="line">    CAR {</span>
<span class="line">        string registrationNumber</span>
<span class="line">        string make</span>
<span class="line">        string model</span>
<span class="line">    }</span>
<span class="line">    PERSON ||--o{ NAMED-DRIVER : is</span>
<span class="line">    PERSON {</span>
<span class="line">        string firstName</span>
<span class="line">        string lastName</span>
<span class="line">        int age</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-wmkl440">            erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber
        string make
        string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string firstName
        string lastName
        int age
    }

          </pre></code><p><code>type</code> 必须以字母开头，可以包含数字、连字符、下划线、圆括号和方括号。 <code>name</code> 值遵循与 <code>type</code> 类似的格式，但可以以星号开头，作为另一个选项，表明属性是主键。除此之外，没有任何限制，也没有隐含的有效数据类型集。</p><h2 id="_5-7-实体名称别名" tabindex="-1"><a class="header-anchor" href="#_5-7-实体名称别名"><span>5.7 实体名称别名</span></a></h2><p>可以使用方括号将别名添加到实体中。如果提供了别名，将在图中显示，而不是实体名称。别名遵循与实体名称相同的所有规则。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    p[Person] {</span>
<span class="line">        string firstName</span>
<span class="line">        string lastName</span>
<span class="line">    }</span>
<span class="line">    a[&quot;Customer Account&quot;] {</span>
<span class="line">        string email</span>
<span class="line">    }</span>
<span class="line">    p ||--o| a : has</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-93xutht">            erDiagram
    p[Person] {
        string firstName
        string lastName
    }
    a[&quot;Customer Account&quot;] {
        string email
    }
    p ||--o| a : has

          </pre></code><h2 id="_5-8-属性键和注释" tabindex="-1"><a class="header-anchor" href="#_5-8-属性键和注释"><span>5.8 属性键和注释</span></a></h2><p>属性也可以有 <code>key</code> 或注释定义。对于主键、外键或唯一键，键可以是 <code>PK</code> ,  <code>FK</code> 或 <code>UK</code> （键不支持标记格式和unicode）。要在单个属性上指定多个键约束，用逗号分隔它们（例如， <code>PK, FK</code> ）。A  <code>comment</code> 由属性末尾的双引号定义。注释本身不能包含双引号字符。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    CAR ||--o{ NAMED-DRIVER : allows</span>
<span class="line">    CAR {</span>
<span class="line">        string registrationNumber PK</span>
<span class="line">        string make</span>
<span class="line">        string model</span>
<span class="line">        string[] parts</span>
<span class="line">    }</span>
<span class="line">    PERSON ||--o{ NAMED-DRIVER : is</span>
<span class="line">    PERSON {</span>
<span class="line">        string driversLicense PK &quot;The license #&quot;</span>
<span class="line">        string(99) firstName &quot;Only 99 characters are allowed&quot;</span>
<span class="line">        string lastName</span>
<span class="line">        string phone UK</span>
<span class="line">        int age</span>
<span class="line">    }</span>
<span class="line">    NAMED-DRIVER {</span>
<span class="line">        string carRegistrationNumber PK, FK</span>
<span class="line">        string driverLicence PK, FK</span>
<span class="line">    }</span>
<span class="line">    MANUFACTURER only one to zero or more CAR : makes</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-4wms3hu">            erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber PK
        string make
        string model
        string[] parts
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string driversLicense PK &quot;The license #&quot;
        string(99) firstName &quot;Only 99 characters are allowed&quot;
        string lastName
        string phone UK
        int age
    }
    NAMED-DRIVER {
        string carRegistrationNumber PK, FK
        string driverLicence PK, FK
    }
    MANUFACTURER only one to zero or more CAR : makes

          </pre></code><h2 id="_5-9-方向" tabindex="-1"><a class="header-anchor" href="#_5-9-方向"><span>5.9 方向</span></a></h2><p>direction语句声明了图的方向。</p><p>这声明了图是从上到下的（ <code>TB</code> ）。这可以反过来从下到上（ <code>BT</code> ）。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    direction TB</span>
<span class="line">    CUSTOMER ||--o{ ORDER : places</span>
<span class="line">    CUSTOMER {</span>
<span class="line">        string name</span>
<span class="line">        string custNumber</span>
<span class="line">        string sector</span>
<span class="line">    }</span>
<span class="line">    ORDER ||--|{ LINE-ITEM : contains</span>
<span class="line">    ORDER {</span>
<span class="line">        int orderNumber</span>
<span class="line">        string deliveryAddress</span>
<span class="line">    }</span>
<span class="line">    LINE-ITEM {</span>
<span class="line">        string productCode</span>
<span class="line">        int quantity</span>
<span class="line">        float pricePerUnit</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-wdm5x03">            erDiagram
    direction TB
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }

          </pre></code><p>这声明了图是从左到右的（ <code>LR</code> ）。这可以反过来从右到左（ <code>RL</code> ）。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    direction LR</span>
<span class="line">    CUSTOMER ||--o{ ORDER : places</span>
<span class="line">    CUSTOMER {</span>
<span class="line">        string name</span>
<span class="line">        string custNumber</span>
<span class="line">        string sector</span>
<span class="line">    }</span>
<span class="line">    ORDER ||--|{ LINE-ITEM : contains</span>
<span class="line">    ORDER {</span>
<span class="line">        int orderNumber</span>
<span class="line">        string deliveryAddress</span>
<span class="line">    }</span>
<span class="line">    LINE-ITEM {</span>
<span class="line">        string productCode</span>
<span class="line">        int quantity</span>
<span class="line">        float pricePerUnit</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-eeisnym">            erDiagram
    direction LR
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER {
        string name
        string custNumber
        string sector
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }

          </pre></code><p>可能的图表方向有：</p><ul><li>TB -从上到下</li><li>从下到上</li><li>RL -从右到左</li><li>LR -从左到右</li></ul><h2 id="_5-10-样式" tabindex="-1"><a class="header-anchor" href="#_5-10-样式"><span>5.10 样式</span></a></h2><h3 id="_5-10-1-样式直接定义" tabindex="-1"><a class="header-anchor" href="#_5-10-1-样式直接定义"><span>5.10.1 样式直接定义</span></a></h3><p>可以对节点应用特定的样式，例如更厚的边框或不同的背景颜色。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    id1||--||id2 : label</span>
<span class="line">    style id1 fill:#f9f,stroke:#333,stroke-width:4px</span>
<span class="line">    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-hovtjs2">            erDiagram
    id1||--||id2 : label
    style id1 fill:#f9f,stroke:#333,stroke-width:4px
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5

          </pre></code><h3 id="_5-10-2-样式-类" tabindex="-1"><a class="header-anchor" href="#_5-10-2-样式-类"><span>5.10.2 样式-类</span></a></h3><p>比每次定义样式更方便的方法是定义一个样式类，并将该类附加到应该具有不同外观的节点上。</p><p>类定义看起来像下面的例子：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    classDef className fill:#f9f,stroke:#333,stroke-width:4px</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>也可以在一个语句中定义多个类：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    classDef firstClassName,secondClassName font-size:12pt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>将类附加到节点的操作如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    class nodeId1 className</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>也可以在一条语句中将一个类附加到节点列表：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    class nodeId1,nodeId2 className</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>也可以同时附加多个类：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    class nodeId1,nodeId2 className1,className2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>添加类的较短形式是使用 <code>:::</code> 操作符将类名附加到节点上，如下所示：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    direction TB</span>
<span class="line">    CAR:::someclass {</span>
<span class="line">        string registrationNumber</span>
<span class="line">        string make</span>
<span class="line">        string model</span>
<span class="line">    }</span>
<span class="line">    PERSON:::someclass {</span>
<span class="line">        string firstName</span>
<span class="line">        string lastName</span>
<span class="line">        int age</span>
<span class="line">    }</span>
<span class="line">    HOUSE:::someclass</span>
<span class="line"></span>
<span class="line">    classDef someclass fill:#f96</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-si1m5ua">            erDiagram
    direction TB
    CAR:::someclass {
        string registrationNumber
        string make
        string model
    }
    PERSON:::someclass {
        string firstName
        string lastName
        int age
    }
    HOUSE:::someclass

    classDef someclass fill:#f96

          </pre></code><p>这种形式可以在声明实体之间的关系时使用：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    CAR {</span>
<span class="line">        string registrationNumber</span>
<span class="line">        string make</span>
<span class="line">        string model</span>
<span class="line">    }</span>
<span class="line">    PERSON {</span>
<span class="line">        string firstName</span>
<span class="line">        string lastName</span>
<span class="line">        int age</span>
<span class="line">    }</span>
<span class="line">    PERSON:::foo ||--|| CAR : owns</span>
<span class="line">    PERSON o{--|| HOUSE:::bar : has</span>
<span class="line"></span>
<span class="line">    classDef foo stroke:#f00</span>
<span class="line">    classDef bar stroke:#0f0</span>
<span class="line">    classDef foobar stroke:#00f</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-fkuidkb">            erDiagram
    CAR {
        string registrationNumber
        string make
        string model
    }
    PERSON {
        string firstName
        string lastName
        int age
    }
    PERSON:::foo ||--|| CAR : owns
    PERSON o{--|| HOUSE:::bar : has

    classDef foo stroke:#f00
    classDef bar stroke:#0f0
    classDef foobar stroke:#00f

          </pre></code><p>与class语句类似，简写语法也可以一次应用多个类：</p><div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre><code><span class="line">    nodeId:::className1,className2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-10-3-默认的类-样式" tabindex="-1"><a class="header-anchor" href="#_5-10-3-默认的类-样式"><span>5.10.3 默认的类(样式)</span></a></h3><p>如果一个类被命名为default，它将被分配给所有的类，而不需要特定的类定义。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    classDef default fill:#f9f,stroke:#333,stroke-width:4px;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>注意：来自style或其他类语句的自定义样式具有优先级，并将覆盖默认样式。（例如， <code>default</code> 类为节点提供粉红色的背景色，但 <code>blue</code> 类将为该节点提供蓝色的背景色。）</p></blockquote><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">erDiagram</span>
<span class="line">    CAR {</span>
<span class="line">        string registrationNumber</span>
<span class="line">        string make</span>
<span class="line">        string model</span>
<span class="line">    }</span>
<span class="line">    PERSON {</span>
<span class="line">        string firstName</span>
<span class="line">        string lastName</span>
<span class="line">        int age</span>
<span class="line">    }</span>
<span class="line">    PERSON:::foo ||--|| CAR : owns</span>
<span class="line">    PERSON o{--|| HOUSE:::bar : has</span>
<span class="line"></span>
<span class="line">    classDef default fill:#f9f,stroke-width:4px</span>
<span class="line">    classDef foo stroke:#f00</span>
<span class="line">    classDef bar stroke:#0f0</span>
<span class="line">    classDef foobar stroke:#00f</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-w3ojxyn">            erDiagram
    CAR {
        string registrationNumber
        string make
        string model
    }
    PERSON {
        string firstName
        string lastName
        int age
    }
    PERSON:::foo ||--|| CAR : owns
    PERSON o{--|| HOUSE:::bar : has

    classDef default fill:#f9f,stroke-width:4px
    classDef foo stroke:#f00
    classDef bar stroke:#0f0
    classDef foobar stroke:#00f

          </pre></code><h2 id="_5-11-配置" tabindex="-1"><a class="header-anchor" href="#_5-11-配置"><span>5.11 配置</span></a></h2><h3 id="_5-11-1-渲染器" tabindex="-1"><a class="header-anchor" href="#_5-11-1-渲染器"><span>5.11.1 渲染器</span></a></h3><p>图的布局是用渲染器完成的。默认的渲染器是dagre。</p><p>您可以通过编辑配置来选择使用名为elk的替代渲染器。elk渲染器更适合大型和/或更复杂的图表。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">---</span>
<span class="line">    config:</span>
<span class="line">        layout: elk</span>
<span class="line">---</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,135)]))}const c=s(l,[["render",d]]),p=JSON.parse('{"path":"/other/other/mermaid/06.html","title":"五、实体关系图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/06.md"}');export{c as comp,p as data};
