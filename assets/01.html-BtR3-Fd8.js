import{ar as a,as as e,at as s,au as i}from"./app-5nod3Nrs.js";const t="/note-front/application/react-native/001.png",l="/note-front/application/react-native/002.png",p="/note-front/application/react-native/003.png",r="/note-front/application/react-native/004.png",o="/note-front/application/react-native/005.png",c={};function d(u,n){return i(),e("div",null,[...n[0]||(n[0]=[s(`<h1 id="一、认识​​react-native" tabindex="-1"><a class="header-anchor" href="#一、认识​​react-native"><span>一、认识​​React Native</span></a></h1><h2 id="_1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_1-1-介绍"><span>1.1 介绍</span></a></h2><ol><li><p>核心定义 ​​ React Native（通常缩写为 RN）是一个由 Facebook（现 Meta）开发的开源框架，用于使用 JavaScript 和 React 来构建真正的、原生的移动应用程序（iOS 和 Android）。​</p></li><li><p>核心特点与工作原理</p><ol><li><p>不是 WebView 应用</p><p>这是最关键的区别。与 Cordova、Ionic 等框架不同，React Native ​​不运行在 WebView 中​​。你编写的 JavaScript 代码会通过一个“桥接”（Bridge）机制与手机的原生组件（如 UIView、 div）进行通信和交互。</p></li><li><p>工作原理：“桥接”机制</p><p>你的 JavaScript 代码运行在一个独立的线程中（JavaScript 线程）。当需要更新界面时（例如，改变一个文本内容），它会将一串​​序列化后的消息​​通过“桥接”发送到原生（Native）线程。</p></li></ol></li><li><p>传统 Bridge</p><ul><li><p>架构流程图</p><code><pre class="mermaid" id="mermaid-cuhahcw">            graph TB
    subgraph JavaScript 线程
        A[JS 代码调用] --&gt; B[Bridge 序列化]
    end
    
    subgraph Native 线程
        C[Bridge 反序列化] --&gt; D[Native 模块处理]
        D --&gt; E[Bridge 序列化响应]
    end
    
    subgraph 通信桥梁
        F[MessageQueue] --&gt; G[BatchedBridge]
        G --&gt; H[异步通信通道]
    end
    
    B --&gt; F
    H --&gt; C
    E --&gt; H
    
    style A fill:#e1f5fe
    style D fill:#f3e5f5
    style F fill:#fff3e0

          </pre></code></li><li><p>详细通信流程</p><code><pre class="mermaid" id="mermaid-ll31p4r">            sequenceDiagram
    participant JS as JavaScript
    participant BQ as Bridge Queue
    participant NM as Native Modules
    participant UI as UI 更新

    Note over JS,UI: 异步通信流程
    
    JS-&gt;&gt;BQ: 调用 Native 方法 (序列化)
    Note right of JS: 数据被 JSON 序列化
    
    BQ-&gt;&gt;NM: 批量传递消息
    NM-&gt;&gt;NM: 处理原生逻辑
    
    NM-&gt;&gt;BQ: 返回结果 (序列化)
    BQ-&gt;&gt;JS: 回调 JavaScript
    
    JS-&gt;&gt;UI: 触发 UI 更新
    Note over JS,UI: 整个流程都是异步的

          </pre></code></li></ul></li><li><p>JSI</p><ul><li><p>架构流程图</p><code><pre class="mermaid" id="mermaid-lltimsb">            graph TB
    subgraph JavaScript 运行时
        A[JS 代码调用] --&gt; B[直接 JSI 调用]
    end
    
    subgraph JSI 层
        C[JavaScript 引擎] --&gt; D[JSI 绑定]
        D --&gt; E[Host Objects]
    end
    
    subgraph Native 层
        F[C++ 模块] --&gt; G[同步执行]
        G --&gt; H[直接内存访问]
    end
    
    B --&gt; D
    E --&gt; F
    G --&gt; B
    
    style A fill:#e8f5e8
    style F fill:#fce4ec
    style D fill:#fff3e0

          </pre></code></li><li><p>详细通信流程</p><code><pre class="mermaid" id="mermaid-ll90nd1">            sequenceDiagram
    participant JS as JavaScript
    participant JSI as JSI 层
    participant NM as Native 模块
    participant MEM as 共享内存

    Note over JS,MEM: 同步直接调用
    
    JS-&gt;&gt;JSI: 调用 JSI 绑定方法
    Note right of JS: 无需序列化
    
    JSI-&gt;&gt;NM: 直接方法调用
    NM-&gt;&gt;MEM: 读写共享内存
    
    MEM-&gt;&gt;NM: 直接数据访问
    NM-&gt;&gt;JSI: 同步返回结果
    
    JSI-&gt;&gt;JS: 立即返回
    Note over JS,MEM: 同步执行完成

          </pre></code></li></ul></li></ol><h2 id="_1-2-准备工作" tabindex="-1"><a class="header-anchor" href="#_1-2-准备工作"><span>1.2 准备工作</span></a></h2><p>react native 官网 <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer">https://reactnative.dev</a> react native 中文网 <a href="https://reactnative.cn/" target="_blank" rel="noopener noreferrer">https://reactnative.cn/</a></p><ol><li><p>安装andriod</p><ol><li><p>安装node工具</p><p>node 官网 <a href="https://nodejs.org/zh-cn" target="_blank" rel="noopener noreferrer">https://nodejs.org/</a></p></li><li><p>andriod Studio 下载 <a href="https://developer.android.google.cn/studio?hl=zh-cn" target="_blank" rel="noopener noreferrer">https://developer.android.google.cn/studio?hl=zh-cn</a>,确保选中了以下几项：</p><ul><li>Android SDK</li><li>Android SDK Platform</li><li>Android Virtual Device</li></ul></li><li><p>当前react native对应的版本(Appearance &amp; Behavior → System Settings → Android SDK)</p><ul><li><p>Android 15</p><p><img src="`+t+'" alt=""></p></li><li><p>Android SDK Platform 35</p><p><img src="'+l+'" alt=""></p></li><li><p>Intel x86 Atom_64 System Image（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）</p><blockquote><p>windows Hyper-V一定要启用</p></blockquote></li></ul></li><li><p>配置 ANDROID_HOME 环境变量</p><p><img src="'+p+'" alt=""></p></li><li><p>把工具目录添加到环境变量 Path</p><p><img src="'+r+`" alt=""></p></li></ol></li><li><p>安装ios环境</p><ol><li><p>安装 watch 与 node</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">brew <span class="token function">install</span> node@18</span>
<span class="line">brew <span class="token function">install</span> watchman</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装xcode</p></li><li><p>安装CocoaPods</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">brew <span class="token function">install</span> cocoapods</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol></li></ol><h2 id="_1-3-初始化项目" tabindex="-1"><a class="header-anchor" href="#_1-3-初始化项目"><span>1.3 初始化项目</span></a></h2><ol><li><p>创建项目</p><ul><li><p>初始化项目</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 初始化项目</span></span>
<span class="line">npx @react-native-community/cli init myproject</span>
<span class="line"><span class="token comment"># 加上特定版本</span></span>
<span class="line">px @react-native-community/cli init myproject <span class="token parameter variable">--version</span> X.XX.X</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>进入项目</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token builtin class-name">cd</span> myproject</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>运行项目</p><ul><li><p>在package.json中查看脚本</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;android&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-native run-android&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;ios&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-native run-ios&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint .&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;react-native start&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jest&quot;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行脚本</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">npm</span> run android</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li></ul></li><li><p>安装 vscode 插件</p><p><img src="`+o+'" alt=""></p></li><li><p>调试工具</p><ul><li>模拟器调试 <ul><li>模拟器是安装在电脑上的，虚拟的手机界面</li><li>模拟器一般跟随 Andriod Studio 和 Xcode 一起安装</li><li>启动应用，模拟器会一起启动</li></ul></li><li>真机调试 <ul><li>打开USB调试模式</li><li>通过USB线将电脑和手机连起来</li><li>启动应用，在手机上安装应用</li></ul></li></ul></li><li><p>模拟器调试</p><ul><li><p>点击模拟器(使模拟器获取焦点)</p></li><li><p>快捷键 ctrl + m</p></li><li><p>点选 open DevTools</p><div style="display:flex;align-items:center;justify-content:space-between;"><image src="/note-front/application/react-native/006.png" width="45%"></image> -&gt; <image src="/note-front/application/react-native/007.png" width="45%"></image></div></li><li><p>自动跳转到浏览器控制台</p><image src="/note-front/application/react-native/008.png"></image></li></ul></li></ol>',8)])])}const m=a(c,[["render",d]]),v=JSON.parse('{"path":"/application/react-native/base/01.html","title":"一、认识​​React Native","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1760180855000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"9f3295c0574c7f2831d776c327aa475c8d03fcc6","time":1760180855000,"email":"857899180@qq.com","author":"zhao-farmer","message":"提交代码"}]},"filePathRelative":"application/react-native/base/01.md"}');export{m as comp,v as data};
