<template><div><h1 id="五、简单-mermaid-使用" tabindex="-1"><a class="header-anchor" href="#五、简单-mermaid-使用"><span>五、简单 mermaid 使用</span></a></h1>
<h2 id="_1-常见图表类型及语法示例" tabindex="-1"><a class="header-anchor" href="#_1-常见图表类型及语法示例"><span>1. 常见图表类型及语法示例</span></a></h2>
<h3 id="_1-流程图-flowchart" tabindex="-1"><a class="header-anchor" href="#_1-流程图-flowchart"><span>（1） 流程图（Flowchart）</span></a></h3>
<ul>
<li>
<p><strong>方向控制</strong>：<code v-pre>TD</code>（从上到下）、<code v-pre>LR</code>（从左到右）、<code v-pre>BT</code>（从下到上）、<code v-pre>RL</code>（从右到左）</p>
</li>
<li>
<p><strong>节点类型</strong>：</p>
<ul>
<li>矩形：<code v-pre>A[节点名称]</code></li>
<li>菱形（判断）：<code v-pre>B{选择分支}</code></li>
<li>圆形：<code v-pre>C((圆角节点))</code></li>
<li>平行四边形（输入输出）：<code v-pre>D[/输入信息/]</code></li>
</ul>
</li>
<li>
<p>代码</p>
</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">graph LR</span>
<span class="line">  登录模块 --> 权限验证</span>
<span class="line">  权限验证 -->|管理员| 后台管理系统</span>
<span class="line">  权限验证 -->|普通用户| 用户中心</span>
<span class="line">  用户中心 --> 订单查询</span>
<span class="line">  用户中心 --> 个人设置</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-b8r955l">
            graph LR
  登录模块 --> 权限验证
  权限验证 -->|管理员| 后台管理系统
  权限验证 -->|普通用户| 用户中心
  用户中心 --> 订单查询
  用户中心 --> 个人设置

          </pre>
          </code>
        <h3 id="_2-序列图-sequence-diagram" tabindex="-1"><a class="header-anchor" href="#_2-序列图-sequence-diagram"><span>（2） 序列图（Sequence Diagram）</span></a></h3>
<p>用于描述对象之间的交互顺序，关键词：<code v-pre>participant</code>（参与者）、<code v-pre>-&gt;</code>不带箭头实线 <code v-pre>-&gt;&gt;</code> 带箭头实线、<code v-pre>--&gt;</code> 带箭头虚线、<code v-pre>&lt;&lt;-&gt;&gt;</code> 双向箭头实线</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">sequenceDiagram</span>
<span class="line">    用户->>服务器: 发送登录请求</span>
<span class="line">    服务器->>数据库: 验证用户信息</span>
<span class="line">    数据库-->>服务器: 返回验证结果</span>
<span class="line">    服务器-->>用户: 返回登录状态</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-kdu700k">
            sequenceDiagram
    用户->>服务器: 发送登录请求
    服务器->>数据库: 验证用户信息
    数据库-->>服务器: 返回验证结果
    服务器-->>用户: 返回登录状态

          </pre>
          </code>
        <h3 id="_3-甘特图-gantt-chart" tabindex="-1"><a class="header-anchor" href="#_3-甘特图-gantt-chart"><span>（3） 甘特图（Gantt Chart）</span></a></h3>
<p>项目管理神器，支持任务时间规划、依赖关系</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">gantt</span>
<span class="line">  title 项目进度计划</span>
<span class="line">  dateFormat  YYYY-MM-DD</span>
<span class="line">  section 需求阶段</span>
<span class="line">  需求调研       :done, des1, 2025-04-01, 7d</span>
<span class="line">  方案评审       :done, des2, 2025-04-08, 3d</span>
<span class="line">  section 开发阶段</span>
<span class="line">  后端开发       :active, dev1, 2025-04-12, 15d</span>
<span class="line">  前端开发       :dev2, 2025-04-12, 15d</span>
<span class="line">  section 测试阶段</span>
<span class="line">  集成测试       :test1, 2025-05-01, 7d</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-gdmiltq">
            gantt
  title 项目进度计划
  dateFormat  YYYY-MM-DD
  section 需求阶段
  需求调研       :done, des1, 2025-04-01, 7d
  方案评审       :done, des2, 2025-04-08, 3d
  section 开发阶段
  后端开发       :active, dev1, 2025-04-12, 15d
  前端开发       :dev2, 2025-04-12, 15d
  section 测试阶段
  集成测试       :test1, 2025-05-01, 7d

          </pre>
          </code>
        <h3 id="_4-类图-class-diagram" tabindex="-1"><a class="header-anchor" href="#_4-类图-class-diagram"><span>（4） 类图（Class Diagram）</span></a></h3>
<p>面向对象设计必备，支持继承（<code v-pre>--|&gt;</code>）、实现（<code v-pre>..|&gt;</code>）、关联（<code v-pre>--</code>）、依赖（<code v-pre>..&gt;</code>）：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">classDiagram</span>
<span class="line">  class Animal {</span>
<span class="line">    - name: string</span>
<span class="line">    + speak(): void</span>
<span class="line">  }</span>
<span class="line">  class Dog {</span>
<span class="line">    + breed: string</span>
<span class="line">    + bark(): void</span>
<span class="line">  }</span>
<span class="line">  class Cat {</span>
<span class="line">    + color: string</span>
<span class="line">    + meow(): void</span>
<span class="line">  }</span>
<span class="line">  Animal &lt;|-- Dog</span>
<span class="line">  Animal &lt;|-- Cat</span>
<span class="line">  Dog "1" -- "*" Bone</span>
<span class="line">  class Bone {</span>
<span class="line">    - material: string</span>
<span class="line">  }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-yoxy89t">
            classDiagram
  class Animal {
    - name: string
    + speak(): void
  }
  class Dog {
    + breed: string
    + bark(): void
  }
  class Cat {
    + color: string
    + meow(): void
  }
  Animal <|-- Dog
  Animal <|-- Cat
  Dog "1" -- "*" Bone
  class Bone {
    - material: string
  }

          </pre>
          </code>
        <h3 id="_5-状态图-state-diagram" tabindex="-1"><a class="header-anchor" href="#_5-状态图-state-diagram"><span>（5） 状态图（State Diagram）</span></a></h3>
<p>描述对象状态转换逻辑：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">stateDiagram-v2</span>
<span class="line">  [*] --> 初始状态</span>
<span class="line">  初始状态 --> 运行中</span>
<span class="line">  运行中 --> 错误状态: 发生异常</span>
<span class="line">  运行中 --> 完成状态: 任务结束</span>
<span class="line">  错误状态 --> 运行中: 重试成功</span>
<span class="line">  错误状态 --> [*]: 放弃重试</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-refhccd">
            stateDiagram-v2
  [*] --> 初始状态
  初始状态 --> 运行中
  运行中 --> 错误状态: 发生异常
  运行中 --> 完成状态: 任务结束
  错误状态 --> 运行中: 重试成功
  错误状态 --> [*]: 放弃重试

          </pre>
          </code>
        <h3 id="_6-饼图-pie-chart" tabindex="-1"><a class="header-anchor" href="#_6-饼图-pie-chart"><span>（6） 饼图（Pie Chart）</span></a></h3>
<p>数据可视化场景：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">pie</span>
<span class="line">  title 浏览器市场份额</span>
<span class="line">  "Chrome" : 60</span>
<span class="line">  "Edge" : 15</span>
<span class="line">  "Firefox" : 10</span>
<span class="line">  "Safari" : 15</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-fpwzvyr">
            pie
  title 浏览器市场份额
  "Chrome" : 60
  "Edge" : 15
  "Firefox" : 10
  "Safari" : 15

          </pre>
          </code>
        <h2 id="_2-高级技巧-让图表更专业" tabindex="-1"><a class="header-anchor" href="#_2-高级技巧-让图表更专业"><span>2. 高级技巧：让图表更专业</span></a></h2>
<h3 id="_1-自定义样式" tabindex="-1"><a class="header-anchor" href="#_1-自定义样式"><span>（1） 自定义样式</span></a></h3>
<p>通过 <code v-pre>class</code> 和 CSS 自定义节点样式：</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">graph TD</span>
<span class="line">  A[普通节点]:::normal</span>
<span class="line">  B{判断节点}:::decision</span>
<span class="line">  C[特殊节点]:::special</span>
<span class="line"></span>
<span class="line">  classDef normal fill:#f9f,stroke:#333</span>
<span class="line">  classDef decision fill:#b8d9a9,stroke:#2c7</span>
<span class="line">  classDef special fill:#a9d9d9,stroke:#2c7,stroke-width:2px</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-byk3r4c">
            graph TD
  A[普通节点]:::normal
  B{判断节点}:::decision
  C[特殊节点]:::special

  classDef normal fill:#f9f,stroke:#333
  classDef decision fill:#b8d9a9,stroke:#2c7
  classDef special fill:#a9d9d9,stroke:#2c7,stroke-width:2px

          </pre>
          </code>
        <h3 id="_2-子图-subgraph" tabindex="-1"><a class="header-anchor" href="#_2-子图-subgraph"><span>（2） 子图（Subgraph）</span></a></h3>
<p>组织复杂图表结构</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">graph TD</span>
<span class="line">  subgraph 订单处理系统</span>
<span class="line">    A[接收订单] --> B[库存校验]</span>
<span class="line">    B --> C{库存是否充足}</span>
<span class="line">    C -->|是| D[生成物流单]</span>
<span class="line">    C -->|否| E[触发采购流程]</span>
<span class="line">  end</span>
<span class="line">  D --> F[通知用户发货]</span>
<span class="line">  E --> F</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-fofh3yq">
            graph TD
  subgraph 订单处理系统
    A[接收订单] --> B[库存校验]
    B --> C{库存是否充足}
    C -->|是| D[生成物流单]
    C -->|否| E[触发采购流程]
  end
  D --> F[通知用户发货]
  E --> F

          </pre>
          </code>
        <h3 id="_3-数学公式集成" tabindex="-1"><a class="header-anchor" href="#_3-数学公式集成"><span>（3） 数学公式集成</span></a></h3>
<p>在节点中插入 LaTeX 公式（需配合渲染工具）</p>
<ul>
<li>代码</li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">graph LR</span>
<span class="line">  A[计算面积] --> B{公式选择}</span>
<span class="line">  B -->|圆面积| C[$$S = \pi r^2$$]</span>
<span class="line">  B -->|矩形面积| D[$$S = a \times b$$]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展示图</li>
</ul>

          <code>
          <pre class="mermaid" id="mermaid-d8qpcfm">
            graph LR
  A[计算面积] --> B{公式选择}
  B -->|圆面积| C[$$S = \pi r^2$$]
  B -->|矩形面积| D[$$S = a \times b$$]

          </pre>
          </code>
        </div></template>


