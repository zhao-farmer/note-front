import{aq as s,ar as n,as as a,at as i}from"./app-Cok9BT0p.js";const d={};function r(l,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="二十、架构图" tabindex="-1"><a class="header-anchor" href="#二十、架构图"><span>二十、架构图</span></a></h1><blockquote><p>在mermaid-js上下文中，架构图用于显示云或CI/CD部署中常见的服务和资源之间的关系。在架构图中，服务（节点）通过边连接。可以将相关服务放在组中，以便更好地说明它们是如何组织的。</p></blockquote><h2 id="_20-1-例子" tabindex="-1"><a class="header-anchor" href="#_20-1-例子"><span>20.1 例子</span></a></h2><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">architecture-beta</span>
<span class="line">    group api(cloud)[API]</span>
<span class="line"></span>
<span class="line">    service db(database)[Database] in api</span>
<span class="line">    service disk1(disk)[Storage] in api</span>
<span class="line">    service disk2(disk)[Storage] in api</span>
<span class="line">    service server(server)[Server] in api</span>
<span class="line"></span>
<span class="line">    db:L -- R:server</span>
<span class="line">    disk1:T -- B:server</span>
<span class="line">    disk2:T -- B:db</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-dnwfopp">            architecture-beta
    group api(cloud)[API]

    service db(database)[Database] in api
    service disk1(disk)[Storage] in api
    service disk2(disk)[Storage] in api
    service server(server)[Server] in api

    db:L -- R:server
    disk1:T -- B:server
    disk2:T -- B:db

          </pre></code><p>DatabaseStorageStorageServerAPI</p><h2 id="_20-2-语法" tabindex="-1"><a class="header-anchor" href="#_20-2-语法"><span>20.2 语法</span></a></h2><p>体系结构的构建块为 <code>groups</code> ,  <code>services</code> ,  <code>edges</code> ,  <code>junctions</code> 。</p><p>对于支持组件，图标是通过在图标名称周围加上 <code>()</code> 来声明的，而标签是通过在文本周围加上 <code>[]</code> 来声明的。</p><p>要开始架构图，请使用关键字 <code>architecture-beta</code> ，然后是组、服务、边缘和连接。虽然这3个构建块中的每一个都可以按任意顺序声明，但必须注意确保标识符之前已由另一个组件声明过。</p><h3 id="_20-2-1-组" tabindex="-1"><a class="header-anchor" href="#_20-2-1-组"><span>20.2.1 组</span></a></h3><p>声明组的语法是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">group {group id}({icon name})[{title}] (in {parent id})?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>放在一起:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">group public_api(cloud)[Public API]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建标识为 <code>public_api</code> 的组，图标为 <code>cloud</code> ，标签为 <code>Public API</code> 。</p><p>此外，可以使用可选的 <code>in</code> 关键字将组置于组中</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">group private_api(cloud)[Private API] in public_api</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_20-2-2-服务" tabindex="-1"><a class="header-anchor" href="#_20-2-2-服务"><span>20.2.2 服务</span></a></h3><p>声明服务的语法是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">service {service id}({icon name})[{title}] (in {parent id})?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>放在一起:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">service database1(database)[My Database]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建标识为 <code>database1</code> 的服务，使用图标 <code>database</code> ，标签为 <code>My Database</code> 。</p><p>如果该服务属于某个组，可以通过可选的 <code>in</code> 关键字将其放入该组</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">service database1(database)[My Database] in private_api</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_20-2-3-边缘" tabindex="-1"><a class="header-anchor" href="#_20-2-3-边缘"><span>20.2.3 边缘</span></a></h3><p>声明边的语法是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{serviceId}{{group}}?:{T|B|L|R} {&lt;}?--{&gt;}? {T|B|L|R}:{serviceId}{{group}}?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>边的方向</li></ol><p>通过在连接到箭头的服务的一侧添加一个冒号（ <code>:</code> ）并添加 <code>L|R|T|B</code>来指定边缘所来自的服务的一侧</p><p>例如:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">db:R -- L:server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在 <code>db</code> 和 <code>server</code> 之间创建一个边缘，边缘从 <code>db</code> 的右侧和 <code>server</code> 的左侧出来。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">db:T -- L:server</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在服务 <code>db</code> 和 <code>server</code> 之间创建一个90度的边缘，边缘从 <code>db</code> 的顶部和 <code>server</code> 的左侧伸出。</p><ol start="2"><li>箭头</li></ol><p>可以在边的每一边添加箭头，在左边方向前添加 <code>&lt;</code> ，在右边方向后添加 <code>&gt;</code> 。</p><p>例如:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">subnet:R --&gt; L:gateway</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建一个边缘，箭头指向 <code>gateway</code> 服务</p><ol start="3"><li>将边缘移出群组</li></ol><p>如果需要将一个边缘从一个组转移到另一个组或另一个组内的业务，可以在 <code>serviceId</code> 后添加 <code>{group}</code> 修饰符。</p><p>例如:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">service server[Server] in groupOne</span>
<span class="line">service subnet[Subnet] in groupTwo</span>
<span class="line"></span>
<span class="line">server{group}:B --&gt; T:subnet{group}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一条边，从 <code>groupOne</code> 出发，毗邻 <code>server</code> ，并进入 <code>groupTwo</code> ，毗邻 <code>subnet</code> 。</p><p>重要的是要注意， <code>groupId</code> s不能用于指定边缘， <code>{group}</code> 修饰符只能用于组内的服务。</p><h3 id="_20-3-4-连接" tabindex="-1"><a class="header-anchor" href="#_20-3-4-连接"><span>20.3.4 连接</span></a></h3><p>结点是一种特殊类型的节点，它在边缘之间充当潜在的4向分裂。</p><p>声明连接的语法是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">junction {junction id} (in {parent id})?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">architecture-beta</span>
<span class="line">    service left_disk(disk)[Disk]</span>
<span class="line">    service top_disk(disk)[Disk]</span>
<span class="line">    service bottom_disk(disk)[Disk]</span>
<span class="line">    service top_gateway(internet)[Gateway]</span>
<span class="line">    service bottom_gateway(internet)[Gateway]</span>
<span class="line">    junction junctionCenter</span>
<span class="line">    junction junctionRight</span>
<span class="line"></span>
<span class="line">    left_disk:R -- L:junctionCenter</span>
<span class="line">    top_disk:B -- T:junctionCenter</span>
<span class="line">    bottom_disk:T -- B:junctionCenter</span>
<span class="line">    junctionCenter:R -- L:junctionRight</span>
<span class="line">    top_gateway:B -- T:junctionRight</span>
<span class="line">    bottom_gateway:T -- B:junctionRight</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-agt4dcv">            architecture-beta
    service left_disk(disk)[Disk]
    service top_disk(disk)[Disk]
    service bottom_disk(disk)[Disk]
    service top_gateway(internet)[Gateway]
    service bottom_gateway(internet)[Gateway]
    junction junctionCenter
    junction junctionRight

    left_disk:R -- L:junctionCenter
    top_disk:B -- T:junctionCenter
    bottom_disk:T -- B:junctionCenter
    junctionCenter:R -- L:junctionRight
    top_gateway:B -- T:junctionRight
    bottom_gateway:T -- B:junctionRight

          </pre></code><h2 id="_20-3-图标" tabindex="-1"><a class="header-anchor" href="#_20-3-图标"><span>20.3 图标</span></a></h2><p>默认情况下，架构图支持以下图标： <code>cloud</code> ,  <code>database</code> ,  <code>disk</code> ,  <code>internet</code> ,  <code>server</code> 。用户可以使用iconify.design中提供的200,000个图标中的任何一个，或者按照下面的步骤添加他们自己的自定义图标。</p><p>图标安装完成后，可以使用“name:icon-name”格式在架构图中使用它们，其中name是注册图标包时使用的值。</p><ul><li>代码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">architecture-beta</span>
<span class="line">    group api(logos:aws-lambda)[API]</span>
<span class="line"></span>
<span class="line">    service db(logos:aws-aurora)[Database] in api</span>
<span class="line">    service disk1(logos:aws-glacier)[Storage] in api</span>
<span class="line">    service disk2(logos:aws-s3)[Storage] in api</span>
<span class="line">    service server(logos:aws-ec2)[Server] in api</span>
<span class="line"></span>
<span class="line">    db:L -- R:server</span>
<span class="line">    disk1:T -- B:server</span>
<span class="line">    disk2:T -- B:db</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>展示图</li></ul><code><pre class="mermaid" id="mermaid-923d56e">            architecture-beta
    group api(logos:aws-lambda)[API]

    service db(logos:aws-aurora)[Database] in api
    service disk1(logos:aws-glacier)[Storage] in api
    service disk2(logos:aws-s3)[Storage] in api
    service server(logos:aws-ec2)[Server] in api

    db:L -- R:server
    disk1:T -- B:server
    disk2:T -- B:db

          </pre></code>`,64)]))}const t=s(d,[["render",r]]),p=JSON.parse('{"path":"/other/other/mermaid/21.html","title":"二十、架构图","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752490925000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}],"changelog":[{"hash":"08d014805d6447d2221b34fe03fdc2ca18411d66","time":1752490925000,"email":"857899180@qq.com","author":"zhao-farmer","message":"2025年7月更新"}]},"filePathRelative":"other/other/mermaid/21.md"}');export{t as comp,p as data};
