import{aq as e,ar as t,as as s,at as o}from"./app-Cok9BT0p.js";const a={};function i(u,n){return o(),t("div",null,n[0]||(n[0]=[s(`<h1 id="十一、c4图" tabindex="-1"><a class="header-anchor" href="#十一、c4图"><span>十一、C4图</span></a></h1><blockquote><p>C4图：这是一个实验图。语法和属性可以在以后的版本中更改。当语法稳定时，将提供适当的文档。</p></blockquote><h2 id="_11-1-c4图基础使用" tabindex="-1"><a class="header-anchor" href="#_11-1-c4图基础使用"><span>11.1 C4图基础使用</span></a></h2><p>Mermaid的C4图语法与plantUML兼容。请看下面的例子：</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    C4Context</span>
<span class="line">      title System Context diagram for Internet Banking System</span>
<span class="line">      Enterprise_Boundary(b0, &quot;BankBoundary0&quot;) {</span>
<span class="line">        Person(customerA, &quot;Banking Customer A&quot;, &quot;A customer of the bank, with personal bank accounts.&quot;)</span>
<span class="line">        Person(customerB, &quot;Banking Customer B&quot;)</span>
<span class="line">        Person_Ext(customerC, &quot;Banking Customer C&quot;, &quot;desc&quot;)</span>
<span class="line"></span>
<span class="line">        Person(customerD, &quot;Banking Customer D&quot;, &quot;A customer of the bank, &lt;br/&gt; with personal bank accounts.&quot;)</span>
<span class="line"></span>
<span class="line">        System(SystemAA, &quot;Internet Banking System&quot;, &quot;Allows customers to view information about their bank accounts, and make payments.&quot;)</span>
<span class="line"></span>
<span class="line">        Enterprise_Boundary(b1, &quot;BankBoundary&quot;) {</span>
<span class="line"></span>
<span class="line">          SystemDb_Ext(SystemE, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)</span>
<span class="line"></span>
<span class="line">          System_Boundary(b2, &quot;BankBoundary2&quot;) {</span>
<span class="line">            System(SystemA, &quot;Banking System A&quot;)</span>
<span class="line">            System(SystemB, &quot;Banking System B&quot;, &quot;A system of the bank, with personal bank accounts. next line.&quot;)</span>
<span class="line">          }</span>
<span class="line"></span>
<span class="line">          System_Ext(SystemC, &quot;E-mail system&quot;, &quot;The internal Microsoft Exchange e-mail system.&quot;)</span>
<span class="line">          SystemDb(SystemD, &quot;Banking System D Database&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span>
<span class="line"></span>
<span class="line">          Boundary(b3, &quot;BankBoundary3&quot;, &quot;boundary&quot;) {</span>
<span class="line">            SystemQueue(SystemF, &quot;Banking System F Queue&quot;, &quot;A system of the bank.&quot;)</span>
<span class="line">            SystemQueue_Ext(SystemG, &quot;Banking System G Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      BiRel(customerA, SystemAA, &quot;Uses&quot;)</span>
<span class="line">      BiRel(SystemAA, SystemE, &quot;Uses&quot;)</span>
<span class="line">      Rel(SystemAA, SystemC, &quot;Sends e-mails&quot;, &quot;SMTP&quot;)</span>
<span class="line">      Rel(SystemC, customerA, &quot;Sends e-mails to&quot;)</span>
<span class="line"></span>
<span class="line">      UpdateElementStyle(customerA, $fontColor=&quot;red&quot;, $bgColor=&quot;grey&quot;, $borderColor=&quot;red&quot;)</span>
<span class="line">      UpdateRelStyle(customerA, SystemAA, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetX=&quot;5&quot;)</span>
<span class="line">      UpdateRelStyle(SystemAA, SystemE, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetY=&quot;-10&quot;)</span>
<span class="line">      UpdateRelStyle(SystemAA, SystemC, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetY=&quot;-40&quot;, $offsetX=&quot;-50&quot;)</span>
<span class="line">      UpdateRelStyle(SystemC, customerA, $textColor=&quot;red&quot;, $lineColor=&quot;red&quot;, $offsetX=&quot;-50&quot;, $offsetY=&quot;20&quot;)</span>
<span class="line"></span>
<span class="line">      UpdateLayoutConfig($c4ShapeInRow=&quot;3&quot;, $c4BoundaryInRow=&quot;1&quot;)</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-tqnefrv">            C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, &quot;BankBoundary0&quot;) {
        Person(customerA, &quot;Banking Customer A&quot;, &quot;A customer of the bank, with personal bank accounts.&quot;)
        Person(customerB, &quot;Banking Customer B&quot;)
        Person_Ext(customerC, &quot;Banking Customer C&quot;, &quot;desc&quot;)

        Person(customerD, &quot;Banking Customer D&quot;, &quot;A customer of the bank, <br> with personal bank accounts.&quot;)

        System(SystemAA, &quot;Internet Banking System&quot;, &quot;Allows customers to view information about their bank accounts, and make payments.&quot;)

        Enterprise_Boundary(b1, &quot;BankBoundary&quot;) {

          SystemDb_Ext(SystemE, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)

          System_Boundary(b2, &quot;BankBoundary2&quot;) {
            System(SystemA, &quot;Banking System A&quot;)
            System(SystemB, &quot;Banking System B&quot;, &quot;A system of the bank, with personal bank accounts. next line.&quot;)
          }

          System_Ext(SystemC, &quot;E-mail system&quot;, &quot;The internal Microsoft Exchange e-mail system.&quot;)
          SystemDb(SystemD, &quot;Banking System D Database&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)

          Boundary(b3, &quot;BankBoundary3&quot;, &quot;boundary&quot;) {
            SystemQueue(SystemF, &quot;Banking System F Queue&quot;, &quot;A system of the bank.&quot;)
            SystemQueue_Ext(SystemG, &quot;Banking System G Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)
          }
        }
      }

      BiRel(customerA, SystemAA, &quot;Uses&quot;)
      BiRel(SystemAA, SystemE, &quot;Uses&quot;)
      Rel(SystemAA, SystemC, &quot;Sends e-mails&quot;, &quot;SMTP&quot;)
      Rel(SystemC, customerA, &quot;Sends e-mails to&quot;)

      UpdateElementStyle(customerA, $fontColor=&quot;red&quot;, $bgColor=&quot;grey&quot;, $borderColor=&quot;red&quot;)
      UpdateRelStyle(customerA, SystemAA, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetX=&quot;5&quot;)
      UpdateRelStyle(SystemAA, SystemE, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetY=&quot;-10&quot;)
      UpdateRelStyle(SystemAA, SystemC, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetY=&quot;-40&quot;, $offsetX=&quot;-50&quot;)
      UpdateRelStyle(SystemC, customerA, $textColor=&quot;red&quot;, $lineColor=&quot;red&quot;, $offsetX=&quot;-50&quot;, $offsetY=&quot;20&quot;)

      UpdateLayoutConfig($c4ShapeInRow=&quot;3&quot;, $c4BoundaryInRow=&quot;1&quot;)

          </pre></code><p>例如，请参阅源代码demos/index.html</p><p>支持5种C4图表。</p><ul><li>System Context 系统背景（C4Context）</li><li>Container diagram 容器图（C4Container）</li><li>Component diagram 组件图（C4Component）</li><li>Dynamic diagram 动态图（C4Dynamic）</li><li>Deployment diagram 部署图（C4Deployment）</li></ul><p>关于如何编写C4图，请参阅链接的文档C4- plantuml语法。</p><p>C4图是固定样式，如css颜色，所以不同的皮肤下不提供不同的css。updateElementStyle和updateElementStyle写在图的最后一部分。updateElementStyle与原始定义不一致，并更新关系的样式，包括文本标签相对于原始位置的偏移量。</p><p>布局不使用完全自动化的布局算法。形状的位置可以通过改变语句的书写顺序来调整。因此不存在支持以下Layout语句的计划。每行形状的数量和边界的数量可以使用UpdateLayoutConfig进行调整。</p><p>有两种方法可以用问号来分配参数。一个按参数顺序使用非命名参数赋值方法，另一个使用命名参数赋值方法，其中名称必须以$符号开头。</p><p>示例：UpdateRelStyle（from, to, ?textColor, ?lineColor, ?offsetX, ?offsetY）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">UpdateRelStyle(customerA, bankA, &quot;red&quot;, &quot;blue&quot;, &quot;-40&quot;, &quot;60&quot;)</span>
<span class="line">UpdateRelStyle(customerA, bankA, $offsetX=&quot;-40&quot;, $offsetY=&quot;60&quot;, $lineColor=&quot;blue&quot;, $textColor=&quot;red&quot;)</span>
<span class="line">UpdateRelStyle(customerA, bankA, $offsetY=&quot;60&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-2-c4系统背景图-c4context" tabindex="-1"><a class="header-anchor" href="#_11-2-c4系统背景图-c4context"><span>11.2 C4系统背景图（C4Context）</span></a></h2><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    C4Context</span>
<span class="line">      title System Context diagram for Internet Banking System</span>
<span class="line">      Enterprise_Boundary(b0, &quot;BankBoundary0&quot;) {</span>
<span class="line">        Person(customerA, &quot;Banking Customer A&quot;, &quot;A customer of the bank, with personal bank accounts.&quot;)</span>
<span class="line">        Person(customerB, &quot;Banking Customer B&quot;)</span>
<span class="line">        Person_Ext(customerC, &quot;Banking Customer C&quot;, &quot;desc&quot;)</span>
<span class="line"></span>
<span class="line">        Person(customerD, &quot;Banking Customer D&quot;, &quot;A customer of the bank, &lt;br/&gt; with personal bank accounts.&quot;)</span>
<span class="line"></span>
<span class="line">        System(SystemAA, &quot;Internet Banking System&quot;, &quot;Allows customers to view information about their bank accounts, and make payments.&quot;)</span>
<span class="line"></span>
<span class="line">        Enterprise_Boundary(b1, &quot;BankBoundary&quot;) {</span>
<span class="line"></span>
<span class="line">          SystemDb_Ext(SystemE, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)</span>
<span class="line"></span>
<span class="line">          System_Boundary(b2, &quot;BankBoundary2&quot;) {</span>
<span class="line">            System(SystemA, &quot;Banking System A&quot;)</span>
<span class="line">            System(SystemB, &quot;Banking System B&quot;, &quot;A system of the bank, with personal bank accounts. next line.&quot;)</span>
<span class="line">          }</span>
<span class="line"></span>
<span class="line">          System_Ext(SystemC, &quot;E-mail system&quot;, &quot;The internal Microsoft Exchange e-mail system.&quot;)</span>
<span class="line">          SystemDb(SystemD, &quot;Banking System D Database&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span>
<span class="line"></span>
<span class="line">          Boundary(b3, &quot;BankBoundary3&quot;, &quot;boundary&quot;) {</span>
<span class="line">            SystemQueue(SystemF, &quot;Banking System F Queue&quot;, &quot;A system of the bank.&quot;)</span>
<span class="line">            SystemQueue_Ext(SystemG, &quot;Banking System G Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span>
<span class="line">          }</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      BiRel(customerA, SystemAA, &quot;Uses&quot;)</span>
<span class="line">      BiRel(SystemAA, SystemE, &quot;Uses&quot;)</span>
<span class="line">      Rel(SystemAA, SystemC, &quot;Sends e-mails&quot;, &quot;SMTP&quot;)</span>
<span class="line">      Rel(SystemC, customerA, &quot;Sends e-mails to&quot;)</span>
<span class="line"></span>
<span class="line">      UpdateElementStyle(customerA, $fontColor=&quot;red&quot;, $bgColor=&quot;grey&quot;, $borderColor=&quot;red&quot;)</span>
<span class="line">      UpdateRelStyle(customerA, SystemAA, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetX=&quot;5&quot;)</span>
<span class="line">      UpdateRelStyle(SystemAA, SystemE, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetY=&quot;-10&quot;)</span>
<span class="line">      UpdateRelStyle(SystemAA, SystemC, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetY=&quot;-40&quot;, $offsetX=&quot;-50&quot;)</span>
<span class="line">      UpdateRelStyle(SystemC, customerA, $textColor=&quot;red&quot;, $lineColor=&quot;red&quot;, $offsetX=&quot;-50&quot;, $offsetY=&quot;20&quot;)</span>
<span class="line"></span>
<span class="line">      UpdateLayoutConfig($c4ShapeInRow=&quot;3&quot;, $c4BoundaryInRow=&quot;1&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-1d8vmhq">            C4Context
      title System Context diagram for Internet Banking System
      Enterprise_Boundary(b0, &quot;BankBoundary0&quot;) {
        Person(customerA, &quot;Banking Customer A&quot;, &quot;A customer of the bank, with personal bank accounts.&quot;)
        Person(customerB, &quot;Banking Customer B&quot;)
        Person_Ext(customerC, &quot;Banking Customer C&quot;, &quot;desc&quot;)

        Person(customerD, &quot;Banking Customer D&quot;, &quot;A customer of the bank, <br> with personal bank accounts.&quot;)

        System(SystemAA, &quot;Internet Banking System&quot;, &quot;Allows customers to view information about their bank accounts, and make payments.&quot;)

        Enterprise_Boundary(b1, &quot;BankBoundary&quot;) {

          SystemDb_Ext(SystemE, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)

          System_Boundary(b2, &quot;BankBoundary2&quot;) {
            System(SystemA, &quot;Banking System A&quot;)
            System(SystemB, &quot;Banking System B&quot;, &quot;A system of the bank, with personal bank accounts. next line.&quot;)
          }

          System_Ext(SystemC, &quot;E-mail system&quot;, &quot;The internal Microsoft Exchange e-mail system.&quot;)
          SystemDb(SystemD, &quot;Banking System D Database&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)

          Boundary(b3, &quot;BankBoundary3&quot;, &quot;boundary&quot;) {
            SystemQueue(SystemF, &quot;Banking System F Queue&quot;, &quot;A system of the bank.&quot;)
            SystemQueue_Ext(SystemG, &quot;Banking System G Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)
          }
        }
      }

      BiRel(customerA, SystemAA, &quot;Uses&quot;)
      BiRel(SystemAA, SystemE, &quot;Uses&quot;)
      Rel(SystemAA, SystemC, &quot;Sends e-mails&quot;, &quot;SMTP&quot;)
      Rel(SystemC, customerA, &quot;Sends e-mails to&quot;)

      UpdateElementStyle(customerA, $fontColor=&quot;red&quot;, $bgColor=&quot;grey&quot;, $borderColor=&quot;red&quot;)
      UpdateRelStyle(customerA, SystemAA, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetX=&quot;5&quot;)
      UpdateRelStyle(SystemAA, SystemE, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetY=&quot;-10&quot;)
      UpdateRelStyle(SystemAA, SystemC, $textColor=&quot;blue&quot;, $lineColor=&quot;blue&quot;, $offsetY=&quot;-40&quot;, $offsetX=&quot;-50&quot;)
      UpdateRelStyle(SystemC, customerA, $textColor=&quot;red&quot;, $lineColor=&quot;red&quot;, $offsetX=&quot;-50&quot;, $offsetY=&quot;20&quot;)

      UpdateLayoutConfig($c4ShapeInRow=&quot;3&quot;, $c4BoundaryInRow=&quot;1&quot;)

          </pre></code><h2 id="_11-3-c4集装箱图-c4container" tabindex="-1"><a class="header-anchor" href="#_11-3-c4集装箱图-c4container"><span>11.3 C4集装箱图（C4Container）</span></a></h2><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    C4Container</span>
<span class="line">    title Container diagram for Internet Banking System</span>
<span class="line"></span>
<span class="line">    System_Ext(email_system, &quot;E-Mail System&quot;, &quot;The internal Microsoft Exchange system&quot;, $tags=&quot;v1.0&quot;)</span>
<span class="line">    Person(customer, Customer, &quot;A customer of the bank, with personal bank accounts&quot;, $tags=&quot;v1.0&quot;)</span>
<span class="line"></span>
<span class="line">    Container_Boundary(c1, &quot;Internet Banking&quot;) {</span>
<span class="line">        Container(spa, &quot;Single-Page App&quot;, &quot;JavaScript, Angular&quot;, &quot;Provides all the Internet banking functionality to customers via their web browser&quot;)</span>
<span class="line">        Container_Ext(mobile_app, &quot;Mobile App&quot;, &quot;C#, Xamarin&quot;, &quot;Provides a limited subset of the Internet banking functionality to customers via their mobile device&quot;)</span>
<span class="line">        Container(web_app, &quot;Web Application&quot;, &quot;Java, Spring MVC&quot;, &quot;Delivers the static content and the Internet banking SPA&quot;)</span>
<span class="line">        ContainerDb(database, &quot;Database&quot;, &quot;SQL Database&quot;, &quot;Stores user registration information, hashed auth credentials, access logs, etc.&quot;)</span>
<span class="line">        ContainerDb_Ext(backend_api, &quot;API Application&quot;, &quot;Java, Docker Container&quot;, &quot;Provides Internet banking functionality via API&quot;)</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    System_Ext(banking_system, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)</span>
<span class="line"></span>
<span class="line">    Rel(customer, web_app, &quot;Uses&quot;, &quot;HTTPS&quot;)</span>
<span class="line">    UpdateRelStyle(customer, web_app, $offsetY=&quot;60&quot;, $offsetX=&quot;90&quot;)</span>
<span class="line">    Rel(customer, spa, &quot;Uses&quot;, &quot;HTTPS&quot;)</span>
<span class="line">    UpdateRelStyle(customer, spa, $offsetY=&quot;-40&quot;)</span>
<span class="line">    Rel(customer, mobile_app, &quot;Uses&quot;)</span>
<span class="line">    UpdateRelStyle(customer, mobile_app, $offsetY=&quot;-30&quot;)</span>
<span class="line"></span>
<span class="line">    Rel(web_app, spa, &quot;Delivers&quot;)</span>
<span class="line">    UpdateRelStyle(web_app, spa, $offsetX=&quot;130&quot;)</span>
<span class="line">    Rel(spa, backend_api, &quot;Uses&quot;, &quot;async, JSON/HTTPS&quot;)</span>
<span class="line">    Rel(mobile_app, backend_api, &quot;Uses&quot;, &quot;async, JSON/HTTPS&quot;)</span>
<span class="line">    Rel_Back(database, backend_api, &quot;Reads from and writes to&quot;, &quot;sync, JDBC&quot;)</span>
<span class="line"></span>
<span class="line">    Rel(email_system, customer, &quot;Sends e-mails to&quot;)</span>
<span class="line">    UpdateRelStyle(email_system, customer, $offsetX=&quot;-45&quot;)</span>
<span class="line">    Rel(backend_api, email_system, &quot;Sends e-mails using&quot;, &quot;sync, SMTP&quot;)</span>
<span class="line">    UpdateRelStyle(backend_api, email_system, $offsetY=&quot;-60&quot;)</span>
<span class="line">    Rel(backend_api, banking_system, &quot;Uses&quot;, &quot;sync/async, XML/HTTPS&quot;)</span>
<span class="line">    UpdateRelStyle(backend_api, banking_system, $offsetY=&quot;-50&quot;, $offsetX=&quot;-140&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-qxy6a4z">            C4Container
    title Container diagram for Internet Banking System

    System_Ext(email_system, &quot;E-Mail System&quot;, &quot;The internal Microsoft Exchange system&quot;, $tags=&quot;v1.0&quot;)
    Person(customer, Customer, &quot;A customer of the bank, with personal bank accounts&quot;, $tags=&quot;v1.0&quot;)

    Container_Boundary(c1, &quot;Internet Banking&quot;) {
        Container(spa, &quot;Single-Page App&quot;, &quot;JavaScript, Angular&quot;, &quot;Provides all the Internet banking functionality to customers via their web browser&quot;)
        Container_Ext(mobile_app, &quot;Mobile App&quot;, &quot;C#, Xamarin&quot;, &quot;Provides a limited subset of the Internet banking functionality to customers via their mobile device&quot;)
        Container(web_app, &quot;Web Application&quot;, &quot;Java, Spring MVC&quot;, &quot;Delivers the static content and the Internet banking SPA&quot;)
        ContainerDb(database, &quot;Database&quot;, &quot;SQL Database&quot;, &quot;Stores user registration information, hashed auth credentials, access logs, etc.&quot;)
        ContainerDb_Ext(backend_api, &quot;API Application&quot;, &quot;Java, Docker Container&quot;, &quot;Provides Internet banking functionality via API&quot;)

    }

    System_Ext(banking_system, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)

    Rel(customer, web_app, &quot;Uses&quot;, &quot;HTTPS&quot;)
    UpdateRelStyle(customer, web_app, $offsetY=&quot;60&quot;, $offsetX=&quot;90&quot;)
    Rel(customer, spa, &quot;Uses&quot;, &quot;HTTPS&quot;)
    UpdateRelStyle(customer, spa, $offsetY=&quot;-40&quot;)
    Rel(customer, mobile_app, &quot;Uses&quot;)
    UpdateRelStyle(customer, mobile_app, $offsetY=&quot;-30&quot;)

    Rel(web_app, spa, &quot;Delivers&quot;)
    UpdateRelStyle(web_app, spa, $offsetX=&quot;130&quot;)
    Rel(spa, backend_api, &quot;Uses&quot;, &quot;async, JSON/HTTPS&quot;)
    Rel(mobile_app, backend_api, &quot;Uses&quot;, &quot;async, JSON/HTTPS&quot;)
    Rel_Back(database, backend_api, &quot;Reads from and writes to&quot;, &quot;sync, JDBC&quot;)

    Rel(email_system, customer, &quot;Sends e-mails to&quot;)
    UpdateRelStyle(email_system, customer, $offsetX=&quot;-45&quot;)
    Rel(backend_api, email_system, &quot;Sends e-mails using&quot;, &quot;sync, SMTP&quot;)
    UpdateRelStyle(backend_api, email_system, $offsetY=&quot;-60&quot;)
    Rel(backend_api, banking_system, &quot;Uses&quot;, &quot;sync/async, XML/HTTPS&quot;)
    UpdateRelStyle(backend_api, banking_system, $offsetY=&quot;-50&quot;, $offsetX=&quot;-140&quot;)


          </pre></code><h2 id="_11-4-c4组件图-c4component" tabindex="-1"><a class="header-anchor" href="#_11-4-c4组件图-c4component"><span>11.4 C4组件图（C4Component）</span></a></h2><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    C4Component</span>
<span class="line">    title Component diagram for Internet Banking System - API Application</span>
<span class="line"></span>
<span class="line">    Container(spa, &quot;Single Page Application&quot;, &quot;javascript and angular&quot;, &quot;Provides all the internet banking functionality to customers via their web browser.&quot;)</span>
<span class="line">    Container(ma, &quot;Mobile App&quot;, &quot;Xamarin&quot;, &quot;Provides a limited subset to the internet banking functionality to customers via their mobile mobile device.&quot;)</span>
<span class="line">    ContainerDb(db, &quot;Database&quot;, &quot;Relational Database Schema&quot;, &quot;Stores user registration information, hashed authentication credentials, access logs, etc.&quot;)</span>
<span class="line">    System_Ext(mbs, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)</span>
<span class="line"></span>
<span class="line">    Container_Boundary(api, &quot;API Application&quot;) {</span>
<span class="line">        Component(sign, &quot;Sign In Controller&quot;, &quot;MVC Rest Controller&quot;, &quot;Allows users to sign in to the internet banking system&quot;)</span>
<span class="line">        Component(accounts, &quot;Accounts Summary Controller&quot;, &quot;MVC Rest Controller&quot;, &quot;Provides customers with a summary of their bank accounts&quot;)</span>
<span class="line">        Component(security, &quot;Security Component&quot;, &quot;Spring Bean&quot;, &quot;Provides functionality related to singing in, changing passwords, etc.&quot;)</span>
<span class="line">        Component(mbsfacade, &quot;Mainframe Banking System Facade&quot;, &quot;Spring Bean&quot;, &quot;A facade onto the mainframe banking system.&quot;)</span>
<span class="line"></span>
<span class="line">        Rel(sign, security, &quot;Uses&quot;)</span>
<span class="line">        Rel(accounts, mbsfacade, &quot;Uses&quot;)</span>
<span class="line">        Rel(security, db, &quot;Read &amp; write to&quot;, &quot;JDBC&quot;)</span>
<span class="line">        Rel(mbsfacade, mbs, &quot;Uses&quot;, &quot;XML/HTTPS&quot;)</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    Rel_Back(spa, sign, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;)</span>
<span class="line">    Rel(spa, accounts, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;)</span>
<span class="line"></span>
<span class="line">    Rel(ma, sign, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;)</span>
<span class="line">    Rel(ma, accounts, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;)</span>
<span class="line"></span>
<span class="line">    UpdateRelStyle(spa, sign, $offsetY=&quot;-40&quot;)</span>
<span class="line">    UpdateRelStyle(spa, accounts, $offsetX=&quot;40&quot;, $offsetY=&quot;40&quot;)</span>
<span class="line"></span>
<span class="line">    UpdateRelStyle(ma, sign, $offsetX=&quot;-90&quot;, $offsetY=&quot;40&quot;)</span>
<span class="line">    UpdateRelStyle(ma, accounts, $offsetY=&quot;-40&quot;)</span>
<span class="line"></span>
<span class="line">        UpdateRelStyle(sign, security, $offsetX=&quot;-160&quot;, $offsetY=&quot;10&quot;)</span>
<span class="line">        UpdateRelStyle(accounts, mbsfacade, $offsetX=&quot;140&quot;, $offsetY=&quot;10&quot;)</span>
<span class="line">        UpdateRelStyle(security, db, $offsetY=&quot;-40&quot;)</span>
<span class="line">        UpdateRelStyle(mbsfacade, mbs, $offsetY=&quot;-40&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-ubzuoe7">             C4Component
    title Component diagram for Internet Banking System - API Application

    Container(spa, &quot;Single Page Application&quot;, &quot;javascript and angular&quot;, &quot;Provides all the internet banking functionality to customers via their web browser.&quot;)
    Container(ma, &quot;Mobile App&quot;, &quot;Xamarin&quot;, &quot;Provides a limited subset to the internet banking functionality to customers via their mobile mobile device.&quot;)
    ContainerDb(db, &quot;Database&quot;, &quot;Relational Database Schema&quot;, &quot;Stores user registration information, hashed authentication credentials, access logs, etc.&quot;)
    System_Ext(mbs, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)

    Container_Boundary(api, &quot;API Application&quot;) {
        Component(sign, &quot;Sign In Controller&quot;, &quot;MVC Rest Controller&quot;, &quot;Allows users to sign in to the internet banking system&quot;)
        Component(accounts, &quot;Accounts Summary Controller&quot;, &quot;MVC Rest Controller&quot;, &quot;Provides customers with a summary of their bank accounts&quot;)
        Component(security, &quot;Security Component&quot;, &quot;Spring Bean&quot;, &quot;Provides functionality related to singing in, changing passwords, etc.&quot;)
        Component(mbsfacade, &quot;Mainframe Banking System Facade&quot;, &quot;Spring Bean&quot;, &quot;A facade onto the mainframe banking system.&quot;)

        Rel(sign, security, &quot;Uses&quot;)
        Rel(accounts, mbsfacade, &quot;Uses&quot;)
        Rel(security, db, &quot;Read &amp; write to&quot;, &quot;JDBC&quot;)
        Rel(mbsfacade, mbs, &quot;Uses&quot;, &quot;XML/HTTPS&quot;)
    }

    Rel_Back(spa, sign, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;)
    Rel(spa, accounts, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;)

    Rel(ma, sign, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;)
    Rel(ma, accounts, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;)

    UpdateRelStyle(spa, sign, $offsetY=&quot;-40&quot;)
    UpdateRelStyle(spa, accounts, $offsetX=&quot;40&quot;, $offsetY=&quot;40&quot;)

    UpdateRelStyle(ma, sign, $offsetX=&quot;-90&quot;, $offsetY=&quot;40&quot;)
    UpdateRelStyle(ma, accounts, $offsetY=&quot;-40&quot;)

        UpdateRelStyle(sign, security, $offsetX=&quot;-160&quot;, $offsetY=&quot;10&quot;)
        UpdateRelStyle(accounts, mbsfacade, $offsetX=&quot;140&quot;, $offsetY=&quot;10&quot;)
        UpdateRelStyle(security, db, $offsetY=&quot;-40&quot;)
        UpdateRelStyle(mbsfacade, mbs, $offsetY=&quot;-40&quot;)

          </pre></code><h2 id="c4动态图-c4dynamic" tabindex="-1"><a class="header-anchor" href="#c4动态图-c4dynamic"><span>C4动态图（C4Dynamic）</span></a></h2><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    C4Dynamic</span>
<span class="line">    title Dynamic diagram for Internet Banking System - API Application</span>
<span class="line"></span>
<span class="line">    ContainerDb(c4, &quot;Database&quot;, &quot;Relational Database Schema&quot;, &quot;Stores user registration information, hashed authentication credentials, access logs, etc.&quot;)</span>
<span class="line">    Container(c1, &quot;Single-Page Application&quot;, &quot;JavaScript and Angular&quot;, &quot;Provides all of the Internet banking functionality to customers via their web browser.&quot;)</span>
<span class="line">    Container_Boundary(b, &quot;API Application&quot;) {</span>
<span class="line">      Component(c3, &quot;Security Component&quot;, &quot;Spring Bean&quot;, &quot;Provides functionality Related to signing in, changing passwords, etc.&quot;)</span>
<span class="line">      Component(c2, &quot;Sign In Controller&quot;, &quot;Spring MVC Rest Controller&quot;, &quot;Allows users to sign in to the Internet Banking System.&quot;)</span>
<span class="line">    }</span>
<span class="line">    Rel(c1, c2, &quot;Submits credentials to&quot;, &quot;JSON/HTTPS&quot;)</span>
<span class="line">    Rel(c2, c3, &quot;Calls isAuthenticated() on&quot;)</span>
<span class="line">    Rel(c3, c4, &quot;select * from users where username = ?&quot;, &quot;JDBC&quot;)</span>
<span class="line"></span>
<span class="line">    UpdateRelStyle(c1, c2, $textColor=&quot;red&quot;, $offsetY=&quot;-40&quot;)</span>
<span class="line">    UpdateRelStyle(c2, c3, $textColor=&quot;red&quot;, $offsetX=&quot;-40&quot;, $offsetY=&quot;60&quot;)</span>
<span class="line">    UpdateRelStyle(c3, c4, $textColor=&quot;red&quot;, $offsetY=&quot;-40&quot;, $offsetX=&quot;10&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-810m4ls">            C4Dynamic
    title Dynamic diagram for Internet Banking System - API Application

    ContainerDb(c4, &quot;Database&quot;, &quot;Relational Database Schema&quot;, &quot;Stores user registration information, hashed authentication credentials, access logs, etc.&quot;)
    Container(c1, &quot;Single-Page Application&quot;, &quot;JavaScript and Angular&quot;, &quot;Provides all of the Internet banking functionality to customers via their web browser.&quot;)
    Container_Boundary(b, &quot;API Application&quot;) {
      Component(c3, &quot;Security Component&quot;, &quot;Spring Bean&quot;, &quot;Provides functionality Related to signing in, changing passwords, etc.&quot;)
      Component(c2, &quot;Sign In Controller&quot;, &quot;Spring MVC Rest Controller&quot;, &quot;Allows users to sign in to the Internet Banking System.&quot;)
    }
    Rel(c1, c2, &quot;Submits credentials to&quot;, &quot;JSON/HTTPS&quot;)
    Rel(c2, c3, &quot;Calls isAuthenticated() on&quot;)
    Rel(c3, c4, &quot;select * from users where username = ?&quot;, &quot;JDBC&quot;)

    UpdateRelStyle(c1, c2, $textColor=&quot;red&quot;, $offsetY=&quot;-40&quot;)
    UpdateRelStyle(c2, c3, $textColor=&quot;red&quot;, $offsetX=&quot;-40&quot;, $offsetY=&quot;60&quot;)
    UpdateRelStyle(c3, c4, $textColor=&quot;red&quot;, $offsetY=&quot;-40&quot;, $offsetX=&quot;10&quot;)

          </pre></code><h2 id="c4部署图-c4deployment" tabindex="-1"><a class="header-anchor" href="#c4部署图-c4deployment"><span>C4部署图（C4Deployment）</span></a></h2><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    C4Deployment</span>
<span class="line">    title Deployment Diagram for Internet Banking System - Live</span>
<span class="line"></span>
<span class="line">    Deployment_Node(mob, &quot;Customer&#39;s mobile device&quot;, &quot;Apple IOS or Android&quot;){</span>
<span class="line">        Container(mobile, &quot;Mobile App&quot;, &quot;Xamarin&quot;, &quot;Provides a limited subset of the Internet Banking functionality to customers via their mobile device.&quot;)</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    Deployment_Node(comp, &quot;Customer&#39;s computer&quot;, &quot;Microsoft Windows or Apple macOS&quot;){</span>
<span class="line">        Deployment_Node(browser, &quot;Web Browser&quot;, &quot;Google Chrome, Mozilla Firefox,&lt;br/&gt; Apple Safari or Microsoft Edge&quot;){</span>
<span class="line">            Container(spa, &quot;Single Page Application&quot;, &quot;JavaScript and Angular&quot;, &quot;Provides all of the Internet Banking functionality to customers via their web browser.&quot;)</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    Deployment_Node(plc, &quot;Big Bank plc&quot;, &quot;Big Bank plc data center&quot;){</span>
<span class="line">        Deployment_Node(dn, &quot;bigbank-api*** x8&quot;, &quot;Ubuntu 16.04 LTS&quot;){</span>
<span class="line">            Deployment_Node(apache, &quot;Apache Tomcat&quot;, &quot;Apache Tomcat 8.x&quot;){</span>
<span class="line">                Container(api, &quot;API Application&quot;, &quot;Java and Spring MVC&quot;, &quot;Provides Internet Banking functionality via a JSON/HTTPS API.&quot;)</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        Deployment_Node(bb2, &quot;bigbank-web*** x4&quot;, &quot;Ubuntu 16.04 LTS&quot;){</span>
<span class="line">            Deployment_Node(apache2, &quot;Apache Tomcat&quot;, &quot;Apache Tomcat 8.x&quot;){</span>
<span class="line">                Container(web, &quot;Web Application&quot;, &quot;Java and Spring MVC&quot;, &quot;Delivers the static content and the Internet Banking single page application.&quot;)</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        Deployment_Node(bigbankdb01, &quot;bigbank-db01&quot;, &quot;Ubuntu 16.04 LTS&quot;){</span>
<span class="line">            Deployment_Node(oracle, &quot;Oracle - Primary&quot;, &quot;Oracle 12c&quot;){</span>
<span class="line">                ContainerDb(db, &quot;Database&quot;, &quot;Relational Database Schema&quot;, &quot;Stores user registration information, hashed authentication credentials, access logs, etc.&quot;)</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">        Deployment_Node(bigbankdb02, &quot;bigbank-db02&quot;, &quot;Ubuntu 16.04 LTS&quot;) {</span>
<span class="line">            Deployment_Node(oracle2, &quot;Oracle - Secondary&quot;, &quot;Oracle 12c&quot;) {</span>
<span class="line">                ContainerDb(db2, &quot;Database&quot;, &quot;Relational Database Schema&quot;, &quot;Stores user registration information, hashed authentication credentials, access logs, etc.&quot;)</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    Rel(mobile, api, &quot;Makes API calls to&quot;, &quot;json/HTTPS&quot;)</span>
<span class="line">    Rel(spa, api, &quot;Makes API calls to&quot;, &quot;json/HTTPS&quot;)</span>
<span class="line">    Rel_U(web, spa, &quot;Delivers to the customer&#39;s web browser&quot;)</span>
<span class="line">    Rel(api, db, &quot;Reads from and writes to&quot;, &quot;JDBC&quot;)</span>
<span class="line">    Rel(api, db2, &quot;Reads from and writes to&quot;, &quot;JDBC&quot;)</span>
<span class="line">    Rel_R(db, db2, &quot;Replicates data to&quot;)</span>
<span class="line"></span>
<span class="line">    UpdateRelStyle(spa, api, $offsetY=&quot;-40&quot;)</span>
<span class="line">    UpdateRelStyle(web, spa, $offsetY=&quot;-40&quot;)</span>
<span class="line">    UpdateRelStyle(api, db, $offsetY=&quot;-20&quot;, $offsetX=&quot;5&quot;)</span>
<span class="line">    UpdateRelStyle(api, db2, $offsetX=&quot;-40&quot;, $offsetY=&quot;-20&quot;)</span>
<span class="line">    UpdateRelStyle(db, db2, $offsetY=&quot;-10&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-vv94kz2">             C4Deployment
    title Deployment Diagram for Internet Banking System - Live

    Deployment_Node(mob, &quot;Customer&#39;s mobile device&quot;, &quot;Apple IOS or Android&quot;){
        Container(mobile, &quot;Mobile App&quot;, &quot;Xamarin&quot;, &quot;Provides a limited subset of the Internet Banking functionality to customers via their mobile device.&quot;)
    }

    Deployment_Node(comp, &quot;Customer&#39;s computer&quot;, &quot;Microsoft Windows or Apple macOS&quot;){
        Deployment_Node(browser, &quot;Web Browser&quot;, &quot;Google Chrome, Mozilla Firefox,<br> Apple Safari or Microsoft Edge&quot;){
            Container(spa, &quot;Single Page Application&quot;, &quot;JavaScript and Angular&quot;, &quot;Provides all of the Internet Banking functionality to customers via their web browser.&quot;)
        }
    }

    Deployment_Node(plc, &quot;Big Bank plc&quot;, &quot;Big Bank plc data center&quot;){
        Deployment_Node(dn, &quot;bigbank-api*** x8&quot;, &quot;Ubuntu 16.04 LTS&quot;){
            Deployment_Node(apache, &quot;Apache Tomcat&quot;, &quot;Apache Tomcat 8.x&quot;){
                Container(api, &quot;API Application&quot;, &quot;Java and Spring MVC&quot;, &quot;Provides Internet Banking functionality via a JSON/HTTPS API.&quot;)
            }
        }
        Deployment_Node(bb2, &quot;bigbank-web*** x4&quot;, &quot;Ubuntu 16.04 LTS&quot;){
            Deployment_Node(apache2, &quot;Apache Tomcat&quot;, &quot;Apache Tomcat 8.x&quot;){
                Container(web, &quot;Web Application&quot;, &quot;Java and Spring MVC&quot;, &quot;Delivers the static content and the Internet Banking single page application.&quot;)
            }
        }
        Deployment_Node(bigbankdb01, &quot;bigbank-db01&quot;, &quot;Ubuntu 16.04 LTS&quot;){
            Deployment_Node(oracle, &quot;Oracle - Primary&quot;, &quot;Oracle 12c&quot;){
                ContainerDb(db, &quot;Database&quot;, &quot;Relational Database Schema&quot;, &quot;Stores user registration information, hashed authentication credentials, access logs, etc.&quot;)
            }
        }
        Deployment_Node(bigbankdb02, &quot;bigbank-db02&quot;, &quot;Ubuntu 16.04 LTS&quot;) {
            Deployment_Node(oracle2, &quot;Oracle - Secondary&quot;, &quot;Oracle 12c&quot;) {
                ContainerDb(db2, &quot;Database&quot;, &quot;Relational Database Schema&quot;, &quot;Stores user registration information, hashed authentication credentials, access logs, etc.&quot;)
            }
        }
    }

    Rel(mobile, api, &quot;Makes API calls to&quot;, &quot;json/HTTPS&quot;)
    Rel(spa, api, &quot;Makes API calls to&quot;, &quot;json/HTTPS&quot;)
    Rel_U(web, spa, &quot;Delivers to the customer&#39;s web browser&quot;)
    Rel(api, db, &quot;Reads from and writes to&quot;, &quot;JDBC&quot;)
    Rel(api, db2, &quot;Reads from and writes to&quot;, &quot;JDBC&quot;)
    Rel_R(db, db2, &quot;Replicates data to&quot;)

    UpdateRelStyle(spa, api, $offsetY=&quot;-40&quot;)
    UpdateRelStyle(web, spa, $offsetY=&quot;-40&quot;)
    UpdateRelStyle(api, db, $offsetY=&quot;-20&quot;, $offsetX=&quot;5&quot;)
    UpdateRelStyle(api, db2, $offsetX=&quot;-40&quot;, $offsetY=&quot;-20&quot;)
    UpdateRelStyle(db, db2, $offsetY=&quot;-10&quot;)

          </pre></code>`,42)]))}const r=e(a,[["render",i]]),q=JSON.parse('{"path":"/other/other/mermaid/12.html","title":"十一、C4图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/12.md"}');export{r as comp,q as data};
