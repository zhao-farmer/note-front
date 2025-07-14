<template><div><h1 id="十一、c4图" tabindex="-1"><a class="header-anchor" href="#十一、c4图"><span>十一、C4图</span></a></h1>
<blockquote>
<p>C4图：这是一个实验图。语法和属性可以在以后的版本中更改。当语法稳定时，将提供适当的文档。</p>
</blockquote>
<h2 id="_11-1-c4图基础使用" tabindex="-1"><a class="header-anchor" href="#_11-1-c4图基础使用"><span>11.1 C4图基础使用</span></a></h2>
<p>Mermaid的C4图语法与plantUML兼容。请看下面的例子：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">    C4Context</span>
<span class="line">      title System Context diagram for Internet Banking System</span>
<span class="line">      Enterprise_Boundary(b0, "BankBoundary0") {</span>
<span class="line">        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")</span>
<span class="line">        Person(customerB, "Banking Customer B")</span>
<span class="line">        Person_Ext(customerC, "Banking Customer C", "desc")</span>
<span class="line"></span>
<span class="line">        Person(customerD, "Banking Customer D", "A customer of the bank, &lt;br/> with personal bank accounts.")</span>
<span class="line"></span>
<span class="line">        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")</span>
<span class="line"></span>
<span class="line">        Enterprise_Boundary(b1, "BankBoundary") {</span>
<span class="line"></span>
<span class="line">          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")</span>
<span class="line"></span>
<span class="line">          System_Boundary(b2, "BankBoundary2") {</span>
<span class="line">            System(SystemA, "Banking System A")</span>
<span class="line">            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")</span>
<span class="line">          }</span>
<span class="line"></span>
<span class="line">          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")</span>
<span class="line">          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")</span>
<span class="line"></span>
<span class="line">          Boundary(b3, "BankBoundary3", "boundary") {</span>
<span class="line">            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")</span>
<span class="line">            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      BiRel(customerA, SystemAA, "Uses")</span>
<span class="line">      BiRel(SystemAA, SystemE, "Uses")</span>
<span class="line">      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")</span>
<span class="line">      Rel(SystemC, customerA, "Sends e-mails to")</span>
<span class="line"></span>
<span class="line">      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")</span>
<span class="line">      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")</span>
<span class="line">      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")</span>
<span class="line">      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")</span>
<span class="line">      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")</span>
<span class="line"></span>
<span class="line">      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-2cn46p5">
            C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, "BankBoundary0") {
        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
        Person(customerB, "Banking Customer B")
        Person_Ext(customerC, "Banking Customer C", "desc")

        Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

        Enterprise_Boundary(b1, "BankBoundary") {

          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

          System_Boundary(b2, "BankBoundary2") {
            System(SystemA, "Banking System A")
            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")
          }

          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

          Boundary(b3, "BankBoundary3", "boundary") {
            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")
            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
          }
        }
      }

      BiRel(customerA, SystemAA, "Uses")
      BiRel(SystemAA, SystemE, "Uses")
      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
      Rel(SystemC, customerA, "Sends e-mails to")

      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")

          </pre>
          </code>
        <p>例如，请参阅源代码demos/index.html</p>
<p>支持5种C4图表。</p>
<ul>
<li>System Context 系统背景（C4Context）</li>
<li>Container diagram 容器图（C4Container）</li>
<li>Component diagram 组件图（C4Component）</li>
<li>Dynamic diagram 动态图（C4Dynamic）</li>
<li>Deployment diagram 部署图（C4Deployment）</li>
</ul>
<p>关于如何编写C4图，请参阅链接的文档C4- plantuml语法。</p>
<p>C4图是固定样式，如css颜色，所以不同的皮肤下不提供不同的css。updateElementStyle和updateElementStyle写在图的最后一部分。updateElementStyle与原始定义不一致，并更新关系的样式，包括文本标签相对于原始位置的偏移量。</p>
<p>布局不使用完全自动化的布局算法。形状的位置可以通过改变语句的书写顺序来调整。因此不存在支持以下Layout语句的计划。每行形状的数量和边界的数量可以使用UpdateLayoutConfig进行调整。</p>
<p>有两种方法可以用问号来分配参数。一个按参数顺序使用非命名参数赋值方法，另一个使用命名参数赋值方法，其中名称必须以$符号开头。</p>
<p>示例：UpdateRelStyle（from, to, ?textColor, ?lineColor, ?offsetX, ?offsetY）</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">UpdateRelStyle(customerA, bankA, "red", "blue", "-40", "60")</span>
<span class="line">UpdateRelStyle(customerA, bankA, $offsetX="-40", $offsetY="60", $lineColor="blue", $textColor="red")</span>
<span class="line">UpdateRelStyle(customerA, bankA, $offsetY="60")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-2-c4系统背景图-c4context" tabindex="-1"><a class="header-anchor" href="#_11-2-c4系统背景图-c4context"><span>11.2 C4系统背景图（C4Context）</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">    C4Context</span>
<span class="line">      title System Context diagram for Internet Banking System</span>
<span class="line">      Enterprise_Boundary(b0, "BankBoundary0") {</span>
<span class="line">        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")</span>
<span class="line">        Person(customerB, "Banking Customer B")</span>
<span class="line">        Person_Ext(customerC, "Banking Customer C", "desc")</span>
<span class="line"></span>
<span class="line">        Person(customerD, "Banking Customer D", "A customer of the bank, &lt;br/> with personal bank accounts.")</span>
<span class="line"></span>
<span class="line">        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")</span>
<span class="line"></span>
<span class="line">        Enterprise_Boundary(b1, "BankBoundary") {</span>
<span class="line"></span>
<span class="line">          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")</span>
<span class="line"></span>
<span class="line">          System_Boundary(b2, "BankBoundary2") {</span>
<span class="line">            System(SystemA, "Banking System A")</span>
<span class="line">            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")</span>
<span class="line">          }</span>
<span class="line"></span>
<span class="line">          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")</span>
<span class="line">          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")</span>
<span class="line"></span>
<span class="line">          Boundary(b3, "BankBoundary3", "boundary") {</span>
<span class="line">            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")</span>
<span class="line">            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      BiRel(customerA, SystemAA, "Uses")</span>
<span class="line">      BiRel(SystemAA, SystemE, "Uses")</span>
<span class="line">      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")</span>
<span class="line">      Rel(SystemC, customerA, "Sends e-mails to")</span>
<span class="line"></span>
<span class="line">      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")</span>
<span class="line">      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")</span>
<span class="line">      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")</span>
<span class="line">      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")</span>
<span class="line">      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")</span>
<span class="line"></span>
<span class="line">      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-ritwh51">
            C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, "BankBoundary0") {
        Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
        Person(customerB, "Banking Customer B")
        Person_Ext(customerC, "Banking Customer C", "desc")

        Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

        System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

        Enterprise_Boundary(b1, "BankBoundary") {

          SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

          System_Boundary(b2, "BankBoundary2") {
            System(SystemA, "Banking System A")
            System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")
          }

          System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
          SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

          Boundary(b3, "BankBoundary3", "boundary") {
            SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")
            SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
          }
        }
      }

      BiRel(customerA, SystemAA, "Uses")
      BiRel(SystemAA, SystemE, "Uses")
      Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
      Rel(SystemC, customerA, "Sends e-mails to")

      UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
      UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
      UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
      UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
      UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

      UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")

          </pre>
          </code>
        <h2 id="_11-3-c4集装箱图-c4container" tabindex="-1"><a class="header-anchor" href="#_11-3-c4集装箱图-c4container"><span>11.3 C4集装箱图（C4Container）</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">    C4Container</span>
<span class="line">    title Container diagram for Internet Banking System</span>
<span class="line"></span>
<span class="line">    System_Ext(email_system, "E-Mail System", "The internal Microsoft Exchange system", $tags="v1.0")</span>
<span class="line">    Person(customer, Customer, "A customer of the bank, with personal bank accounts", $tags="v1.0")</span>
<span class="line"></span>
<span class="line">    Container_Boundary(c1, "Internet Banking") {</span>
<span class="line">        Container(spa, "Single-Page App", "JavaScript, Angular", "Provides all the Internet banking functionality to customers via their web browser")</span>
<span class="line">        Container_Ext(mobile_app, "Mobile App", "C#, Xamarin", "Provides a limited subset of the Internet banking functionality to customers via their mobile device")</span>
<span class="line">        Container(web_app, "Web Application", "Java, Spring MVC", "Delivers the static content and the Internet banking SPA")</span>
<span class="line">        ContainerDb(database, "Database", "SQL Database", "Stores user registration information, hashed auth credentials, access logs, etc.")</span>
<span class="line">        ContainerDb_Ext(backend_api, "API Application", "Java, Docker Container", "Provides Internet banking functionality via API")</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    System_Ext(banking_system, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")</span>
<span class="line"></span>
<span class="line">    Rel(customer, web_app, "Uses", "HTTPS")</span>
<span class="line">    UpdateRelStyle(customer, web_app, $offsetY="60", $offsetX="90")</span>
<span class="line">    Rel(customer, spa, "Uses", "HTTPS")</span>
<span class="line">    UpdateRelStyle(customer, spa, $offsetY="-40")</span>
<span class="line">    Rel(customer, mobile_app, "Uses")</span>
<span class="line">    UpdateRelStyle(customer, mobile_app, $offsetY="-30")</span>
<span class="line"></span>
<span class="line">    Rel(web_app, spa, "Delivers")</span>
<span class="line">    UpdateRelStyle(web_app, spa, $offsetX="130")</span>
<span class="line">    Rel(spa, backend_api, "Uses", "async, JSON/HTTPS")</span>
<span class="line">    Rel(mobile_app, backend_api, "Uses", "async, JSON/HTTPS")</span>
<span class="line">    Rel_Back(database, backend_api, "Reads from and writes to", "sync, JDBC")</span>
<span class="line"></span>
<span class="line">    Rel(email_system, customer, "Sends e-mails to")</span>
<span class="line">    UpdateRelStyle(email_system, customer, $offsetX="-45")</span>
<span class="line">    Rel(backend_api, email_system, "Sends e-mails using", "sync, SMTP")</span>
<span class="line">    UpdateRelStyle(backend_api, email_system, $offsetY="-60")</span>
<span class="line">    Rel(backend_api, banking_system, "Uses", "sync/async, XML/HTTPS")</span>
<span class="line">    UpdateRelStyle(backend_api, banking_system, $offsetY="-50", $offsetX="-140")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-7azlsle">
            C4Container
    title Container diagram for Internet Banking System

    System_Ext(email_system, "E-Mail System", "The internal Microsoft Exchange system", $tags="v1.0")
    Person(customer, Customer, "A customer of the bank, with personal bank accounts", $tags="v1.0")

    Container_Boundary(c1, "Internet Banking") {
        Container(spa, "Single-Page App", "JavaScript, Angular", "Provides all the Internet banking functionality to customers via their web browser")
        Container_Ext(mobile_app, "Mobile App", "C#, Xamarin", "Provides a limited subset of the Internet banking functionality to customers via their mobile device")
        Container(web_app, "Web Application", "Java, Spring MVC", "Delivers the static content and the Internet banking SPA")
        ContainerDb(database, "Database", "SQL Database", "Stores user registration information, hashed auth credentials, access logs, etc.")
        ContainerDb_Ext(backend_api, "API Application", "Java, Docker Container", "Provides Internet banking functionality via API")

    }

    System_Ext(banking_system, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

    Rel(customer, web_app, "Uses", "HTTPS")
    UpdateRelStyle(customer, web_app, $offsetY="60", $offsetX="90")
    Rel(customer, spa, "Uses", "HTTPS")
    UpdateRelStyle(customer, spa, $offsetY="-40")
    Rel(customer, mobile_app, "Uses")
    UpdateRelStyle(customer, mobile_app, $offsetY="-30")

    Rel(web_app, spa, "Delivers")
    UpdateRelStyle(web_app, spa, $offsetX="130")
    Rel(spa, backend_api, "Uses", "async, JSON/HTTPS")
    Rel(mobile_app, backend_api, "Uses", "async, JSON/HTTPS")
    Rel_Back(database, backend_api, "Reads from and writes to", "sync, JDBC")

    Rel(email_system, customer, "Sends e-mails to")
    UpdateRelStyle(email_system, customer, $offsetX="-45")
    Rel(backend_api, email_system, "Sends e-mails using", "sync, SMTP")
    UpdateRelStyle(backend_api, email_system, $offsetY="-60")
    Rel(backend_api, banking_system, "Uses", "sync/async, XML/HTTPS")
    UpdateRelStyle(backend_api, banking_system, $offsetY="-50", $offsetX="-140")


          </pre>
          </code>
        <h2 id="_11-4-c4组件图-c4component" tabindex="-1"><a class="header-anchor" href="#_11-4-c4组件图-c4component"><span>11.4 C4组件图（C4Component）</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">    C4Component</span>
<span class="line">    title Component diagram for Internet Banking System - API Application</span>
<span class="line"></span>
<span class="line">    Container(spa, "Single Page Application", "javascript and angular", "Provides all the internet banking functionality to customers via their web browser.")</span>
<span class="line">    Container(ma, "Mobile App", "Xamarin", "Provides a limited subset to the internet banking functionality to customers via their mobile mobile device.")</span>
<span class="line">    ContainerDb(db, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")</span>
<span class="line">    System_Ext(mbs, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")</span>
<span class="line"></span>
<span class="line">    Container_Boundary(api, "API Application") {</span>
<span class="line">        Component(sign, "Sign In Controller", "MVC Rest Controller", "Allows users to sign in to the internet banking system")</span>
<span class="line">        Component(accounts, "Accounts Summary Controller", "MVC Rest Controller", "Provides customers with a summary of their bank accounts")</span>
<span class="line">        Component(security, "Security Component", "Spring Bean", "Provides functionality related to singing in, changing passwords, etc.")</span>
<span class="line">        Component(mbsfacade, "Mainframe Banking System Facade", "Spring Bean", "A facade onto the mainframe banking system.")</span>
<span class="line"></span>
<span class="line">        Rel(sign, security, "Uses")</span>
<span class="line">        Rel(accounts, mbsfacade, "Uses")</span>
<span class="line">        Rel(security, db, "Read &amp; write to", "JDBC")</span>
<span class="line">        Rel(mbsfacade, mbs, "Uses", "XML/HTTPS")</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    Rel_Back(spa, sign, "Uses", "JSON/HTTPS")</span>
<span class="line">    Rel(spa, accounts, "Uses", "JSON/HTTPS")</span>
<span class="line"></span>
<span class="line">    Rel(ma, sign, "Uses", "JSON/HTTPS")</span>
<span class="line">    Rel(ma, accounts, "Uses", "JSON/HTTPS")</span>
<span class="line"></span>
<span class="line">    UpdateRelStyle(spa, sign, $offsetY="-40")</span>
<span class="line">    UpdateRelStyle(spa, accounts, $offsetX="40", $offsetY="40")</span>
<span class="line"></span>
<span class="line">    UpdateRelStyle(ma, sign, $offsetX="-90", $offsetY="40")</span>
<span class="line">    UpdateRelStyle(ma, accounts, $offsetY="-40")</span>
<span class="line"></span>
<span class="line">        UpdateRelStyle(sign, security, $offsetX="-160", $offsetY="10")</span>
<span class="line">        UpdateRelStyle(accounts, mbsfacade, $offsetX="140", $offsetY="10")</span>
<span class="line">        UpdateRelStyle(security, db, $offsetY="-40")</span>
<span class="line">        UpdateRelStyle(mbsfacade, mbs, $offsetY="-40")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-bvkqbt8">
             C4Component
    title Component diagram for Internet Banking System - API Application

    Container(spa, "Single Page Application", "javascript and angular", "Provides all the internet banking functionality to customers via their web browser.")
    Container(ma, "Mobile App", "Xamarin", "Provides a limited subset to the internet banking functionality to customers via their mobile mobile device.")
    ContainerDb(db, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
    System_Ext(mbs, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

    Container_Boundary(api, "API Application") {
        Component(sign, "Sign In Controller", "MVC Rest Controller", "Allows users to sign in to the internet banking system")
        Component(accounts, "Accounts Summary Controller", "MVC Rest Controller", "Provides customers with a summary of their bank accounts")
        Component(security, "Security Component", "Spring Bean", "Provides functionality related to singing in, changing passwords, etc.")
        Component(mbsfacade, "Mainframe Banking System Facade", "Spring Bean", "A facade onto the mainframe banking system.")

        Rel(sign, security, "Uses")
        Rel(accounts, mbsfacade, "Uses")
        Rel(security, db, "Read & write to", "JDBC")
        Rel(mbsfacade, mbs, "Uses", "XML/HTTPS")
    }

    Rel_Back(spa, sign, "Uses", "JSON/HTTPS")
    Rel(spa, accounts, "Uses", "JSON/HTTPS")

    Rel(ma, sign, "Uses", "JSON/HTTPS")
    Rel(ma, accounts, "Uses", "JSON/HTTPS")

    UpdateRelStyle(spa, sign, $offsetY="-40")
    UpdateRelStyle(spa, accounts, $offsetX="40", $offsetY="40")

    UpdateRelStyle(ma, sign, $offsetX="-90", $offsetY="40")
    UpdateRelStyle(ma, accounts, $offsetY="-40")

        UpdateRelStyle(sign, security, $offsetX="-160", $offsetY="10")
        UpdateRelStyle(accounts, mbsfacade, $offsetX="140", $offsetY="10")
        UpdateRelStyle(security, db, $offsetY="-40")
        UpdateRelStyle(mbsfacade, mbs, $offsetY="-40")

          </pre>
          </code>
        <h2 id="c4动态图-c4dynamic" tabindex="-1"><a class="header-anchor" href="#c4动态图-c4dynamic"><span>C4动态图（C4Dynamic）</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">    C4Dynamic</span>
<span class="line">    title Dynamic diagram for Internet Banking System - API Application</span>
<span class="line"></span>
<span class="line">    ContainerDb(c4, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")</span>
<span class="line">    Container(c1, "Single-Page Application", "JavaScript and Angular", "Provides all of the Internet banking functionality to customers via their web browser.")</span>
<span class="line">    Container_Boundary(b, "API Application") {</span>
<span class="line">      Component(c3, "Security Component", "Spring Bean", "Provides functionality Related to signing in, changing passwords, etc.")</span>
<span class="line">      Component(c2, "Sign In Controller", "Spring MVC Rest Controller", "Allows users to sign in to the Internet Banking System.")</span>
<span class="line">    }</span>
<span class="line">    Rel(c1, c2, "Submits credentials to", "JSON/HTTPS")</span>
<span class="line">    Rel(c2, c3, "Calls isAuthenticated() on")</span>
<span class="line">    Rel(c3, c4, "select * from users where username = ?", "JDBC")</span>
<span class="line"></span>
<span class="line">    UpdateRelStyle(c1, c2, $textColor="red", $offsetY="-40")</span>
<span class="line">    UpdateRelStyle(c2, c3, $textColor="red", $offsetX="-40", $offsetY="60")</span>
<span class="line">    UpdateRelStyle(c3, c4, $textColor="red", $offsetY="-40", $offsetX="10")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-v4jtvxg">
            C4Dynamic
    title Dynamic diagram for Internet Banking System - API Application

    ContainerDb(c4, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
    Container(c1, "Single-Page Application", "JavaScript and Angular", "Provides all of the Internet banking functionality to customers via their web browser.")
    Container_Boundary(b, "API Application") {
      Component(c3, "Security Component", "Spring Bean", "Provides functionality Related to signing in, changing passwords, etc.")
      Component(c2, "Sign In Controller", "Spring MVC Rest Controller", "Allows users to sign in to the Internet Banking System.")
    }
    Rel(c1, c2, "Submits credentials to", "JSON/HTTPS")
    Rel(c2, c3, "Calls isAuthenticated() on")
    Rel(c3, c4, "select * from users where username = ?", "JDBC")

    UpdateRelStyle(c1, c2, $textColor="red", $offsetY="-40")
    UpdateRelStyle(c2, c3, $textColor="red", $offsetX="-40", $offsetY="60")
    UpdateRelStyle(c3, c4, $textColor="red", $offsetY="-40", $offsetX="10")

          </pre>
          </code>
        <h2 id="c4部署图-c4deployment" tabindex="-1"><a class="header-anchor" href="#c4部署图-c4deployment"><span>C4部署图（C4Deployment）</span></a></h2>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">    C4Deployment</span>
<span class="line">    title Deployment Diagram for Internet Banking System - Live</span>
<span class="line"></span>
<span class="line">    Deployment_Node(mob, "Customer's mobile device", "Apple IOS or Android"){</span>
<span class="line">        Container(mobile, "Mobile App", "Xamarin", "Provides a limited subset of the Internet Banking functionality to customers via their mobile device.")</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    Deployment_Node(comp, "Customer's computer", "Microsoft Windows or Apple macOS"){</span>
<span class="line">        Deployment_Node(browser, "Web Browser", "Google Chrome, Mozilla Firefox,&lt;br/> Apple Safari or Microsoft Edge"){</span>
<span class="line">            Container(spa, "Single Page Application", "JavaScript and Angular", "Provides all of the Internet Banking functionality to customers via their web browser.")</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    Deployment_Node(plc, "Big Bank plc", "Big Bank plc data center"){</span>
<span class="line">        Deployment_Node(dn, "bigbank-api*** x8", "Ubuntu 16.04 LTS"){</span>
<span class="line">            Deployment_Node(apache, "Apache Tomcat", "Apache Tomcat 8.x"){</span>
<span class="line">                Container(api, "API Application", "Java and Spring MVC", "Provides Internet Banking functionality via a JSON/HTTPS API.")</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        Deployment_Node(bb2, "bigbank-web*** x4", "Ubuntu 16.04 LTS"){</span>
<span class="line">            Deployment_Node(apache2, "Apache Tomcat", "Apache Tomcat 8.x"){</span>
<span class="line">                Container(web, "Web Application", "Java and Spring MVC", "Delivers the static content and the Internet Banking single page application.")</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        Deployment_Node(bigbankdb01, "bigbank-db01", "Ubuntu 16.04 LTS"){</span>
<span class="line">            Deployment_Node(oracle, "Oracle - Primary", "Oracle 12c"){</span>
<span class="line">                ContainerDb(db, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        Deployment_Node(bigbankdb02, "bigbank-db02", "Ubuntu 16.04 LTS") {</span>
<span class="line">            Deployment_Node(oracle2, "Oracle - Secondary", "Oracle 12c") {</span>
<span class="line">                ContainerDb(db2, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    Rel(mobile, api, "Makes API calls to", "json/HTTPS")</span>
<span class="line">    Rel(spa, api, "Makes API calls to", "json/HTTPS")</span>
<span class="line">    Rel_U(web, spa, "Delivers to the customer's web browser")</span>
<span class="line">    Rel(api, db, "Reads from and writes to", "JDBC")</span>
<span class="line">    Rel(api, db2, "Reads from and writes to", "JDBC")</span>
<span class="line">    Rel_R(db, db2, "Replicates data to")</span>
<span class="line"></span>
<span class="line">    UpdateRelStyle(spa, api, $offsetY="-40")</span>
<span class="line">    UpdateRelStyle(web, spa, $offsetY="-40")</span>
<span class="line">    UpdateRelStyle(api, db, $offsetY="-20", $offsetX="5")</span>
<span class="line">    UpdateRelStyle(api, db2, $offsetX="-40", $offsetY="-20")</span>
<span class="line">    UpdateRelStyle(db, db2, $offsetY="-10")</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-9qlb12j">
             C4Deployment
    title Deployment Diagram for Internet Banking System - Live

    Deployment_Node(mob, "Customer's mobile device", "Apple IOS or Android"){
        Container(mobile, "Mobile App", "Xamarin", "Provides a limited subset of the Internet Banking functionality to customers via their mobile device.")
    }

    Deployment_Node(comp, "Customer's computer", "Microsoft Windows or Apple macOS"){
        Deployment_Node(browser, "Web Browser", "Google Chrome, Mozilla Firefox,<br/> Apple Safari or Microsoft Edge"){
            Container(spa, "Single Page Application", "JavaScript and Angular", "Provides all of the Internet Banking functionality to customers via their web browser.")
        }
    }

    Deployment_Node(plc, "Big Bank plc", "Big Bank plc data center"){
        Deployment_Node(dn, "bigbank-api*** x8", "Ubuntu 16.04 LTS"){
            Deployment_Node(apache, "Apache Tomcat", "Apache Tomcat 8.x"){
                Container(api, "API Application", "Java and Spring MVC", "Provides Internet Banking functionality via a JSON/HTTPS API.")
            }
        }
        Deployment_Node(bb2, "bigbank-web*** x4", "Ubuntu 16.04 LTS"){
            Deployment_Node(apache2, "Apache Tomcat", "Apache Tomcat 8.x"){
                Container(web, "Web Application", "Java and Spring MVC", "Delivers the static content and the Internet Banking single page application.")
            }
        }
        Deployment_Node(bigbankdb01, "bigbank-db01", "Ubuntu 16.04 LTS"){
            Deployment_Node(oracle, "Oracle - Primary", "Oracle 12c"){
                ContainerDb(db, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
            }
        }
        Deployment_Node(bigbankdb02, "bigbank-db02", "Ubuntu 16.04 LTS") {
            Deployment_Node(oracle2, "Oracle - Secondary", "Oracle 12c") {
                ContainerDb(db2, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
            }
        }
    }

    Rel(mobile, api, "Makes API calls to", "json/HTTPS")
    Rel(spa, api, "Makes API calls to", "json/HTTPS")
    Rel_U(web, spa, "Delivers to the customer's web browser")
    Rel(api, db, "Reads from and writes to", "JDBC")
    Rel(api, db2, "Reads from and writes to", "JDBC")
    Rel_R(db, db2, "Replicates data to")

    UpdateRelStyle(spa, api, $offsetY="-40")
    UpdateRelStyle(web, spa, $offsetY="-40")
    UpdateRelStyle(api, db, $offsetY="-20", $offsetX="5")
    UpdateRelStyle(api, db2, $offsetX="-40", $offsetY="-20")
    UpdateRelStyle(db, db2, $offsetY="-10")

          </pre>
          </code>
        </div></template>


