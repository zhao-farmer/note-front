<template><div><h1 id="一、概述" tabindex="-1"><a class="header-anchor" href="#一、概述"><span>一、概述</span></a></h1>
<blockquote>
<p>Nodejs 不是 JavaScript 应用和编程语言，而是其运行时。它基于 Google 的 V8 引擎，采用异步 I/O 和事件驱动架构，使用 npm 包管理器，适合 I/O 密集型应用。其架构分层，有多种应用场景，涵盖前端、后端、爬虫等多领域，也适用于单元测试、CICD、反向代理等方面。</p>
</blockquote>
<h2 id="_1-1-基本介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-基本介绍"><span>1.1 基本介绍</span></a></h2>
<ol>
<li>
<p>nodejs 并不是JavaScript应用，也不是编程语言，因为编程语言使用的JavaScript,Nodejs是JavaScript的运行时。</p>
<ul>
<li>Node.js并不是JavaScript应用：这里的&quot;JavaScript应用&quot;通常指用JavaScript编写的程序或软件。而Node.js本身并不是用JavaScript编写的一个应用程序；它是一个提供环境让JavaScript应用程序运行的平台。</li>
<li>Node.js也不是编程语言：编程语言是一种用于编写程序的标准化通信方法，例如JavaScript、Python和C++等。Node.js并不引入新的编程语言，它使用的是JavaScript这门已经存在的语言。</li>
<li>Node.js是JavaScript的运行时：运行时（runtime）指的是程序运行时的环境，它提供了程序运行所需的内置库、工具和其他资源。Node.js为JavaScript提供了一个运行时环境，这意味着它让JavaScript代码可以在服务器端运行，而不仅仅是在浏览器中。在此之前，JavaScript主要用于浏览器环境中，用于增强网页的交互性。Node.js的出现扩展了JavaScript的使用范围，让开发者可以用JavaScript编写服务器端软件，进行文件操作，以及进行网络通信等。</li>
</ul>
</li>
<li>
<p>Node.js是建立在Google的V8 JavaScript引擎上的，这个引擎用C++编写，使得我们写的JavaScript代码能够被转换并执行。Node.js采用了异步I/O和事件驱动的架构，这让它在处理大量并发请求时变得非常高效。它利用非阻塞I/O接口和一个名为libuv的库来实现事件循环，从而使开发者能够创建高性能且易于扩展的应用程序。</p>
</li>
<li>
<p>Node.js使用npm（Node Package Manager）作为其包管理器，这和Python的pip或Java的Maven相似。Npm是一个巨大的库，提供了数以百万计的可复用代码模块，可通过官网访问。</p>
</li>
<li>
<p>Node.js特别适合于I/O密集型的应用，比如网络服务器或数据库操作，因为它的I/O处理能力非常强大。但对于CPU密集型任务，比如图像处理或大量的计算操作，Node.js可能不是最佳选择，因为它的单线程模型可能会导致性能瓶颈。不过，对于需要执行CPU密集型任务的场景，可以通过编写C++插件或使用Node.js的Cluster模块来提升性能。</p>
</li>
</ol>
<p>在计算机术语中，I/O代表输入/输出（Input/Output），它涵盖了系统进行数据传输的所有操作，包括从磁盘读取数据、向磁盘写入数据、通过网络发送数据、从网络接收数据等。当我们提到Node.js适合I/O密集型的应用时，我们指的是那些涉及大量读写操作、网络请求或者任何需要频繁访问外部资源的应用。</p>
<p>I/O密集型应用的典型场景包括：</p>
<ul>
<li>网络服务，如Web服务器或API端点，它们需要处理大量并发的客户端请求。</li>
<li>文件处理系统，涉及对文件的频繁读写操作。</li>
<li>数据库操作，尤其是那些需要频繁查询和更新数据库的应用。</li>
<li>实时通信服务，比如聊天服务器或协同编辑工具，它们需要快速、频繁地在用户之间传递信息。</li>
</ul>
<p>Node.js之所以适合这些场景，是因为它的非阻塞I/O模型使得在一个事件循环中并行处理大量的I/O请求成为可能，而不必为每个I/O操作启动新的线程，从而提高资源利用率和应用性能。</p>
<h2 id="_1-2-nodejs架构图" tabindex="-1"><a class="header-anchor" href="#_1-2-nodejs架构图"><span>1.2 NodeJS架构图</span></a></h2>
<p><img src="/backend/node/base/001.jpeg" alt=""></p>
<p>这张图展示了Node.js的架构和流程，从JavaScript代码的运行到底层的系统调用。图中的结构可以从上到下解释如下：</p>
<ol>
<li>Node.js API: 最上层是Node.js提供的各种内置模块的API，例如文件系统（fs）、HTTP、操作系统信息（os）、网络（net）、数据压缩（zlib）等。这是开发者直接与之交互的层面。</li>
<li>Node.js bindings (JS和C/C++的接口): 这一层是JavaScript和C/C++之间的桥梁。Node.js的很多API在JavaScript层面是无法直接访问操作系统功能的，它们需要通过这一层的绑定调用C/C++编写的库。</li>
<li>C/C++ 层面的 addon 和 Napi: 这是一些高级的接口和模块，它们使用C/C++编写，可以通过Node.js的API访问。开发者可以编写addon来扩展Node.js的功能。</li>
<li>底层技术支持:
<ul>
<li>V8: 这是JavaScript执行的引擎，负责编译和运行JavaScript代码。</li>
<li>libuv: 这是提供事件驱动的I/O的库，支持异步操作和跨平台功能。</li>
<li>DNS解析 (c-ares): 这是一个异步DNS请求库，Node.js用它来执行非阻塞的名称解析。</li>
<li>SSL/TLS (OpenSSL): 这里的SSL或者是TSL证书都是使用这个C or C++编写的OpenSSL解析的</li>
<li>http-parser: 这是解析HTTP消息的工具。</li>
</ul>
</li>
</ol>
<p>整个图的意图是展示Node.js从接收JavaScript调用到最终的系统级执行是如何通过不同层次交互的，确保高性能和高扩展性。这种分层架构让Node.js能够在保持JavaScript编写的简单性的同时，利用C/C++的强大能力来进行系统级别的操作。</p>
<h2 id="_1-3-nodejs-应用场景" tabindex="-1"><a class="header-anchor" href="#_1-3-nodejs-应用场景"><span>1.3 Nodejs 应用场景</span></a></h2>
<p>以下展示并不是所有东西都是nodejs编写而是运行环境可以配合nodejs或者依靠nodejs运行。</p>
<ol>
<li>
<p>前端</p>
<ul>
<li>Vue, Angular, React: 这些是流行的前端JavaScript框架，开发者通常会使用Node.js来运行前端构建工具，如Webpack，或者在开发阶段运行开发服务器。</li>
<li>Nuxt.js, Next.js: 分别为Vue和React的服务端渲染(SSR)框架，可以用Node.js来执行SSR，提高首次加载性能和SEO效果。</li>
</ul>
</li>
<li>
<p>后端</p>
<ul>
<li>Serverless: Node.js可以在无服务器架构中作为执行运行时，处理事件驱动的函数。</li>
<li>Web应用 (Express, NestJS, Koa): 这些是Node.js的Web框架，用于快速开发Web服务和API。</li>
<li>gRPC: 一个高性能的远程过程调用(RPC)框架，Node.js支持gRPC服务器和客户端。</li>
</ul>
</li>
<li>
<p>爬虫</p>
<ul>
<li>Puppeteer, Cheerio: Node.js库，用于Web爬取，Puppeteer提供了一个高层次的API来控制Chrome，Cheerio用于解析HTML。</li>
</ul>
</li>
<li>
<p>BFF层/网关层</p>
<ul>
<li>Socket.io: 一个实时、双向和基于事件的通信库，常用于Node.js来构建实时Web应用。</li>
</ul>
</li>
<li>
<p>桌面端</p>
<ul>
<li>Electron, Tauri, NWjs: 这些框架允许开发者使用Node.js和前端技术来构建跨平台的桌面应用。</li>
</ul>
</li>
<li>
<p>移动端</p>
<ul>
<li>Weex, Ionic, React Native: 允许使用JavaScript开发移动应用，Node.js通常用于提供CLI工具，编译或打包应用。</li>
</ul>
</li>
<li>
<p>基建端</p>
<ul>
<li>Webpack, Vite, Rollup, Gulp: 前端打包和构建工具，运行在Node.js环境中，处理资源编译、打包、优化等任务。</li>
<li>Less, Scss, PostCSS: CSS预处理器，Node.js用于运行这些工具，将代码转换为浏览器可识别的CSS。</li>
<li>Babel, SWC: JavaScript编译器，将ES6+代码转译为向后兼容的JavaScript代码。</li>
<li>Inquirer, Command, Shelljs: Node.js库，用于创建命令行应用、处理命令行输入和执行Unix shell命令。</li>
</ul>
</li>
<li>
<p>嵌入式</p>
<ul>
<li>Ruff.js: Ruff.js 是一个基于 JavaScript 的嵌入式软件开发框架，它可以让开发者使用 JavaScript 或 TypeScript 来开发嵌入式应用。这种情况下，Node.js 可能被用来运行一些开发工具，或者Ruff提供了与Node.js类似的API。</li>
</ul>
</li>
<li>
<p>单元测试</p>
<ul>
<li>Jest: Jest 是一个流行的JavaScript测试框架，它对异步测试支持良好，易于配置，还自带断言库。它经常用于Node.js应用的单元测试。</li>
<li>Vitest: Vitest 是一个由 Vite 驱动的单元测试框架，它借鉴了 Jest 的API设计，用于在 Vite 项目中进行快速单元测试。</li>
<li>e2e (端对端测试): 端对端测试是一种测试方法，通常用于测试应用的流程从开始到结束是否按预期工作。这些测试可以在 Node.js 环境中运行，使用诸如 Puppeteer、Playwright 等工具模拟用户交互。</li>
</ul>
</li>
<li>
<p>CICD (持续集成和持续部署)</p>
<ul>
<li>Jenkins: Jenkins 是一个开源的自动化服务器，用于自动化软件开发过程中的构建、测试和部署。它可以与Node.js项目集成，自动化JavaScript的构建和测试过程。</li>
<li>Docker: Docker 是一个开源的容器化平台，它可以将应用及其环境打包在一个容器中运行。对于Node.js，你可以创建包含Node.js环境的容器来运行应用。</li>
<li>Husky: Husky 是一个工具，可以防止不良的git commit或git push，通过在git钩子中运行测试和linters。它常用于Node.js项目来提高代码质量。</li>
<li>miniprogram-ci: 这是微信小程序的持续集成工具，Node.js可以用来执行这个工具，自动化小程序的构建和发布过程。</li>
</ul>
</li>
<li>
<p>反向代理</p>
<ul>
<li>http-proxy: http-proxy 是一个Node.js的库，为实现HTTP代理的功能提供了支持。它可以用于Node.js应用中创建反向代理服务器，转发客户端请求到其他服务器。</li>
<li>AnyProxy: AnyProxy 是一个可扩展的HTTP代理服务器，用Node.js编写，可以用来拦截和修改HTTP请求/响应，用于测试或开发。</li>
</ul>
</li>
</ol>
</div></template>


