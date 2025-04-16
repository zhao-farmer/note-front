<template><div><h1 id="四、npm命令解析" tabindex="-1"><a class="header-anchor" href="#四、npm命令解析"><span>四、npm命令解析</span></a></h1>
<h2 id="_4-1-npm-install原理" tabindex="-1"><a class="header-anchor" href="#_4-1-npm-install原理"><span>4.1 npm install原理</span></a></h2>
<h3 id="_4-1-1-执行npm-install流程" tabindex="-1"><a class="header-anchor" href="#_4-1-1-执行npm-install流程"><span>4.1.1 执行npm install流程</span></a></h3>
<ol>
<li><strong>解析 <code v-pre>package.json</code> 文件</strong>：
<ul>
<li>npm首先读取项目根目录下的 <code v-pre>package.json</code> 文件。</li>
<li>解析该文件中的 <code v-pre>dependencies</code> 和 <code v-pre>devDependencies</code> 对象，获取项目所需的所有依赖包及其版本号。</li>
</ul>
</li>
<li><strong>查询并解析依赖</strong>：
<ul>
<li>对于每个依赖，npm会查询npm注册中心，找到与<code v-pre>package.json</code>中指定的版本号相匹配的依赖版本。</li>
<li>如果依赖还包含自己的依赖（子依赖），npm也会递归地进行查询和解析(需要注意的是，这里采用的是广度优先算法)。</li>
</ul>
</li>
<li><strong>检查本地缓存</strong>：
<ul>
<li>npm会检查本地缓存中是否已经存在所需依赖的副本。</li>
<li>如果本地缓存中已有所需版本的依赖，则直接从缓存中获取，而不会从npm注册中心下载。</li>
</ul>
</li>
<li><strong>下载依赖</strong>：
<ul>
<li>对于本地缓存中不存在的依赖，npm会从npm注册中心下载依赖包。</li>
<li>下载的依赖包包含了依赖的代码和它自己的 <code v-pre>package.json</code> 文件。</li>
</ul>
</li>
<li><strong>安装依赖</strong>：
<ul>
<li>下载后的依赖包被解压到 <code v-pre>node_modules</code> 目录中。</li>
<li>如果依赖包含子依赖，npm也会递归地安装这些子依赖。</li>
</ul>
</li>
<li><strong>执行生命周期脚本</strong>：
<ul>
<li>在安装过程中，npm会检查依赖的 <code v-pre>package.json</code> 文件中是否定义了生命周期脚本（如 <code v-pre>preinstall</code>、<code v-pre>install</code>、<code v-pre>postinstall</code> 等）。</li>
<li>如果有定义，npm会在相应的时机执行这些脚本。</li>
</ul>
</li>
<li><strong>生成或更新 <code v-pre>package-lock.json</code> 或 <code v-pre>npm-shrinkwrap.json</code> 文件</strong>：
<ul>
<li>npm会生成或更新 <code v-pre>package-lock.json</code> 文件，以确保未来安装时能够得到相同版本的依赖。</li>
<li>这有助于项目在不同环境和不同开发者之间保持依赖的一致性。</li>
</ul>
</li>
<li><strong>整理 <code v-pre>node_modules</code> 目录结构</strong>：
<ul>
<li>为了避免冗余和冲突，npm可能会对 <code v-pre>node_modules</code> 目录进行整理，优化依赖的存储结构。</li>
<li>从npm v3开始，尽可能将依赖<strong>扁平化</strong>，以减少目录深度和重复的依赖副本。</li>
<li>node_modules文件夹内部文件在进行排序的时候，以.开头的放在最前面，例如启动命令的.bin文件夹，接着就是@开头的文件夹，最后则是普通的文件夹</li>
</ul>
</li>
</ol>
<h3 id="_4-1-2-扁平化处理" tabindex="-1"><a class="header-anchor" href="#_4-1-2-扁平化处理"><span>4.1.2 扁平化处理</span></a></h3>
<p><img src="/backend/node/base/007.png" alt=""></p>
<ol>
<li>如上图，Vue和React都用到同一个babel，且版本和名称都一样。所以babel会提到这个相同等级(一级模块)的一个依赖。</li>
<li>所以<code v-pre>Vue</code>和<code v-pre>React</code>就能够复用同一个<code v-pre>Babel</code>模块，而不至于两个框架都要重新装一遍<code v-pre>Babel</code>，这样对于节省我们的电脑存储空间有好处。毕竟npm包是很大的，一不小心就占掉电脑好几G了</li>
<li>上面就是一种理想状态下的扁平化，扁平扁平就是同一层级下的意思(但需要名称、版本，均相同)</li>
</ol>
<p>非理想状态</p>
<ul>
<li>当要复用的那个模块，需要的版本不同时。就像下面就不知道要复用C1.0还是C2.0</li>
<li>像这种不理想情况下，就会单独安装，出现模块冗余的情况，给B继续搞一层node_modules，就无法节省空间了(非扁平化)</li>
</ul>
<p><img src="/backend/node/base/008.png" alt=""></p>
<h3 id="_4-1-3-npm-install-再次执行流程" tabindex="-1"><a class="header-anchor" href="#_4-1-3-npm-install-再次执行流程"><span>4.1.3 npm install 再次执行流程</span></a></h3>
<ol>
<li><strong>执行 <code v-pre>npm install</code></strong>：
<ul>
<li>用户在终端或命令行界面中输入 <code v-pre>npm install</code> 命令并执行。</li>
</ul>
</li>
<li><strong>读取配置文件</strong>：
<ul>
<li><code v-pre>npm</code> 查看是否有配置文件（如 <code v-pre>.npmrc</code>），可能存在于项目目录（局部配置，先找这个）或用户主目录（全局配置，后找这个）中，如果都没找到就会去找npm内置的。</li>
<li><code v-pre>npm</code> 根据这些配置文件来决定如何进行安装，例如代理服务器、镜像源等设置。</li>
</ul>
</li>
<li><strong>解析 <code v-pre>package.json</code> 和 <code v-pre>package-lock.json</code> 文件</strong>：
<ul>
<li><code v-pre>npm</code> 读取并解析项目中的 <code v-pre>package.json</code> 和 <code v-pre>package-lock.json</code> 文件来确定要安装的依赖包及版本。</li>
</ul>
</li>
<li><strong>检查 node_modules 目录和 package-lock.json</strong>：
<ul>
<li><code v-pre>npm</code> 检查 <code v-pre>node_modules</code> 目录和 <code v-pre>package-lock.json</code> 文件，确定是否已经存在满足版本要求的依赖包。</li>
<li>如果 <code v-pre>package-lock.json</code> 和<code v-pre>package.json</code>版本不一致，并且 <code v-pre>npm</code> 版本是5.4(高版本)及以上，那么将会优先按照 <code v-pre>package.json</code> 中记录的版本来安装，并且更新lock文件。</li>
<li><code v-pre>package-lock.json</code> 和<code v-pre>package.json</code>版本一致的话，就会遵循lock文件了</li>
</ul>
</li>
<li><strong>安装依赖</strong>：
<ul>
<li>根据解析出来的依赖信息，<code v-pre>npm</code> 开始安装依赖到 <code v-pre>node_modules</code> 目录中。</li>
<li>如果在 <code v-pre>node_modules</code> 中检查缓存，已经存在符合版本要求的包，则不会重复安装，直接就解压了，没有就走另一条<code v-pre>下载包资源=&gt;检查完整性=&gt;添加到缓存=&gt;更新package.lock.json文件=&gt;解压到node_modules</code>的道路。</li>
</ul>
</li>
<li><strong>生命周期脚本执行</strong>：
<ul>
<li>在依赖安装的不同阶段，会执行相关的生命周期脚本，如 <code v-pre>preinstall</code>、<code v-pre>install</code>、<code v-pre>postinstall</code> 等。</li>
</ul>
</li>
<li><strong>生成或更新 package-lock.json 文件</strong>：
<ul>
<li>在安装过程结束后，<code v-pre>npm</code> 会生成或更新 <code v-pre>package-lock.json</code> 文件。</li>
<li>这保证了以后在其他环境中运行 <code v-pre>npm install</code> 能够安装到相同版本的包。</li>
</ul>
</li>
</ol>
<h3 id="_4-1-4-npmrc配置信息" tabindex="-1"><a class="header-anchor" href="#_4-1-4-npmrc配置信息"><span>4.1.4 npmrc配置信息</span></a></h3>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line">registry=http<span class="token punctuation">:</span>//registry.npmjs.org/</span>
<span class="line"><span class="token comment"># 定义npm的registry，即npm的包下载源</span></span>
<span class="line"></span>
<span class="line">proxy=http<span class="token punctuation">:</span>//proxy.example.com<span class="token punctuation">:</span>8080/</span>
<span class="line"><span class="token comment"># 定义npm的代理服务器，用于访问网络</span></span>
<span class="line"></span>
<span class="line">https<span class="token punctuation">-</span>proxy=http<span class="token punctuation">:</span>//proxy.example.com<span class="token punctuation">:</span>8080/</span>
<span class="line"><span class="token comment"># 定义npm的https代理服务器，用于访问网络</span></span>
<span class="line"></span>
<span class="line">strict<span class="token punctuation">-</span>ssl=true</span>
<span class="line"><span class="token comment"># 是否在SSL证书验证错误时退出</span></span>
<span class="line"></span>
<span class="line">cafile=/path/to/cafile.pem</span>
<span class="line"><span class="token comment"># 定义自定义CA证书文件的路径</span></span>
<span class="line"></span>
<span class="line">user<span class="token punctuation">-</span>agent=npm/<span class="token punctuation">{</span>npm<span class="token punctuation">-</span>version<span class="token punctuation">}</span> node/<span class="token punctuation">{</span>node<span class="token punctuation">-</span>version<span class="token punctuation">}</span> <span class="token punctuation">{</span>platform<span class="token punctuation">}</span></span>
<span class="line"><span class="token comment"># 自定义请求头中的User-Agent</span></span>
<span class="line"></span>
<span class="line">save=true</span>
<span class="line"><span class="token comment"># 安装包时是否自动保存到package.json的dependencies中</span></span>
<span class="line"></span>
<span class="line">save<span class="token punctuation">-</span>dev=true</span>
<span class="line"><span class="token comment"># 安装包时是否自动保存到package.json的devDependencies中</span></span>
<span class="line"></span>
<span class="line">save<span class="token punctuation">-</span>exact=true</span>
<span class="line"><span class="token comment"># 安装包时是否精确保存版本号</span></span>
<span class="line"></span>
<span class="line">engine<span class="token punctuation">-</span>strict=true</span>
<span class="line"><span class="token comment"># 是否在安装时检查依赖的node和npm版本是否符合要求</span></span>
<span class="line"></span>
<span class="line">scripts<span class="token punctuation">-</span>prepend<span class="token punctuation">-</span>node<span class="token punctuation">-</span>path=true</span>
<span class="line"><span class="token comment"># 是否在运行脚本时自动将node的路径添加到PATH环境变量中</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-5-package-lock-json-的作用" tabindex="-1"><a class="header-anchor" href="#_4-1-5-package-lock-json-的作用"><span>4.1.5 package-lock.json 的作用</span></a></h3>
<p>可以锁定版本记录依赖树详细信息，还有如下作用</p>
<ol>
<li>version 该参数指定了当前包的版本号</li>
<li>resolved 该参数指定了当前包的下载地址</li>
<li>integrity 用于验证包的完整性，是一串哈希值</li>
<li>dev 该参数指定了当前包是一个开发依赖包(参数需要是true)</li>
<li>bin 该参数指定了当前包中可执行文件的路径和名称，也就是说有bin就表示这里有可执行文件</li>
<li>engines 该参数指定了当前包所依赖的Node.js版本范围</li>
</ol>
<blockquote>
<p>package-lock.json 帮我们做了缓存，他会通过 <code v-pre>name + version + integrity</code> 信息生成一个唯一的key，这个key能找到对应的index-v5 下的缓存记录 也就是npm cache 文件夹下的</p>
</blockquote>
<ol>
<li>通过<code v-pre>npm config list</code>在终端查找缓存文件在哪</li>
</ol>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line">cache = "D://tool//node-v22.12.0//node_cache"</span>
<span class="line">prefix = "D://tool//node-v22.12.0//node_globa"</span>
<span class="line">registry = "https:registry.npmmirror.com"</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>通过这个路径进行查找文件</li>
</ol>
<p><img src="/backend/node/base/009.png" alt=""></p>
<ul>
<li>
<p>index-v5是一个索引目录，记录content-v2的一个索引或者说是位置，也就是<code v-pre>name + version + integrity</code>的一个哈希值。如果lock锁文件内的这三者和index-v5能够对上，就会去content-v2找到你缓存的那个文件。</p>
<ul>
<li>其实就是把项目中<code v-pre>name + version + integrity</code>组成的哈希值的看成一个钥匙就够了，而<code v-pre>content-v2</code>则是一个宝箱，<code v-pre>index-v5</code>则是一个钥匙孔。他们之前的关系就非常清晰了</li>
</ul>
</li>
<li>
<p><strong><code v-pre>name + version + integrity</code> 哈希值</strong>：这相当于是一个钥匙。在npm中，每个包都有一个唯一的名称（<code v-pre>name</code>）、版本号（<code v-pre>version</code>），以及一个完整性校验值（<code v-pre>integrity</code>），这个校验值通常是一个SHA值，用于确保包的内容没有被篡改。将这三者组合起来，就形成了一个能唯一标识和验证一个包的“钥匙”。</p>
</li>
<li>
<p><strong>content-v2</strong>：这个目录可以被看作是一个宝箱。它存储了你电脑上缓存的npm包的实际内容。每个缓存的内容都通过一种散列算法（如SHA-512）生成了一个独特的哈希值。</p>
</li>
<li>
<p><strong>index-v5</strong>：这个目录就像一个钥匙孔，或者说是一本索引册。它记录了缓存内容的索引信息，这些信息将包的名字、版本和完整性校验值映射到它们在 <code v-pre>content-v2</code> 宝箱中的具体位置。</p>
</li>
</ul>
<p>当运行<code v-pre>npm install</code>时，如果<code v-pre>package-lock.json</code>中的包信息（即钥匙）与<code v-pre>index-v5</code>的索引信息（即钥匙孔）匹配，npm就知道它可以直接使用<code v-pre>content-v2</code>中对应的缓存内容（即宝箱里的宝藏），而无需重新下载相同的包。这种机制加快了安装过程，同时确保了安装的一致性和包的完整性。</p>
<h2 id="_4-2-npm-run-原理" tabindex="-1"><a class="header-anchor" href="#_4-2-npm-run-原理"><span>4.2 npm run 原理</span></a></h2>
<h3 id="_4-2-1-npm-run-流程" tabindex="-1"><a class="header-anchor" href="#_4-2-1-npm-run-流程"><span>4.2.1 npm run 流程</span></a></h3>
<p>项目启动命令npm run dev来举例</p>
<ol>
<li>
<p><strong>读取 <code v-pre>package.json</code></strong>：</p>
<ul>
<li><code v-pre>npm</code> 会读取项目根目录下的 <code v-pre>package.json</code> 文件，特别是它的 <code v-pre>scripts</code> 对象。</li>
</ul>
</li>
<li>
<p><strong>解析脚本命令</strong>：</p>
<ul>
<li>在 <code v-pre>scripts</code> 对象中，查找 <code v-pre>dev</code> 属性对应的值，这通常是一条可执行的命令。在我们的例子中，这个值是 <code v-pre>dev:vite</code>，其中 <code v-pre>vite</code> 是一个可执行的脚本。</li>
</ul>
</li>
<li>
<p><strong>查找 <code v-pre>vite</code> 可执行命令</strong>：</p>
<ul>
<li><code v-pre>npm</code> 会首先在当前项目的 <code v-pre>node_modules/.bin</code> 目录中查找名为 <code v-pre>vite</code> 的可执行命令。</li>
<li>如果在项目的 <code v-pre>node_modules/.bin</code> 中没有找到，它会尝试在全局的 <code v-pre>node_modules</code> 目录中查找 <code v-pre>vite</code>。</li>
<li>如果全局目录中也没有，npm 会继续在系统的环境变量中查找。</li>
<li>如果这些位置都没有找到，<code v-pre>npm</code> 会报错，指出无法找到命令。</li>
</ul>
</li>
<li>
<p>不同平台的可执行文件：</p>
</li>
</ol>
<ul>
<li>成功找到vite命令后，它会有不同的文件供不同的操作系统使用：
<ul>
<li><code v-pre>.sh</code> 文件用于 Linux、Unix 和 MacOS。</li>
<li><code v-pre>.cmd</code> 文件用于 Windows 的 CMD。</li>
<li><code v-pre>.ps1</code> 文件用于 Windows 的 PowerShell。</li>
</ul>
</li>
<li>所以能够看出Node是一个跨平台运行的</li>
</ul>
<p><img src="/backend/node/base/010.png" alt=""></p>
<h3 id="_4-2-2-npm-生命周期" tabindex="-1"><a class="header-anchor" href="#_4-2-2-npm-生命周期"><span>4.2.2 npm 生命周期</span></a></h3>
<ol>
<li>npm生命周期的基本概念</li>
</ol>
<p>npm生命周期允许你定义在npm脚本执行前后自动运行的额外脚本。这对于在特定阶段执行检查、构建、清理或其他自动化任务非常有用。例如，你可以在安装依赖之前运行一些预检脚本，或者在测试运行之后执行清理工作。</p>
<ol start="2">
<li>
<p>npm生命周期的命名规则
npm生命周期的命名遵循一定的规则。对于任何在 package.json 的 scripts 字段中定义的命令，你都可以通过添加 pre 或 post 前缀来定义该命令执行前后的生命周期脚本。例如，如果你有一个名为 build 的脚本，你可以定义 prebuild 和 postbuild 生命周期来分别在该脚本执行前后运行额外的任务。</p>
</li>
<li>
<p>npm生命周期的使用示例</p>
</li>
</ol>
<p>假设你在 package.json 中定义了以下脚本：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"prebuild"</span><span class="token operator">:</span> <span class="token string">"echo 'Building project...'"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"node build.js"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"postbuild"</span><span class="token operator">:</span> <span class="token string">"echo 'Build completed!'"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你运行 npm run build 时，npm将按照以下顺序执行脚本：</p>
<ul>
<li>prebuild ：在 build 脚本执行之前运行，输出&quot;Building project…&quot;。</li>
<li>build ：你的主要构建脚本，运行 node build.js 。</li>
<li>postbuild ：在 build 脚本执行之后运行，输出&quot;Build completed!&quot;。</li>
</ul>
<ol start="4">
<li>npm提供的默认生命周期</li>
</ol>
<p>除了用户自定义的生命周期外，npm还提供了一些默认的生命周期，它们与npm的生命周期事件相关联。以下是一些常见的npm默认生命周期：</p>
<ul>
<li>preinstall 和 postinstall ：在依赖项安装之前和之后运行。</li>
<li>prepublish 和 postpublish ：在包发布之前和之后运行。</li>
<li>pretest 和 posttest ：在测试运行之前和之后运行。</li>
<li>prestop 和 poststop ：在停止服务之前和之后运行。</li>
<li>prestart 和 poststart ：在启动服务之前和之后运行。</li>
<li>prerestart 和 postrestart ：在重启服务之前和之后运行。</li>
</ul>
</div></template>


