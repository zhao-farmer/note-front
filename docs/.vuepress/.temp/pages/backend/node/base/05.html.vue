<template><div><h1 id="五、发布npm包" tabindex="-1"><a class="header-anchor" href="#五、发布npm包"><span>五、发布npm包</span></a></h1>
<h2 id="_5-1-发布npm包的基本流程" tabindex="-1"><a class="header-anchor" href="#_5-1-发布npm包的基本流程"><span>5.1 发布npm包的基本流程</span></a></h2>
<ol>
<li>
<p><strong>环境准备</strong></p>
<ul>
<li>‌安装Node.js和npm‌
<br>确保本地已安装Node.js及npm，可通过命令 node -v 和 npm -v 验证安装是否成功‌。</li>
<li>注册npm账号‌
<br>前往npm官网注册账号，并完成邮箱验证。</li>
</ul>
</li>
<li>
<p><strong>项目初始化与配置</strong></p>
<ul>
<li>初始化项目‌
<br>在项目目录中执行 npm init -y 生成 package.json 文件，或使用 npm create vite 选择模板快速初始化。</li>
<li>置关键字段‌
<ul>
<li>name‌：包名需唯一（建议发布前在npm官网搜索验证）。</li>
<li>version‌：初始版本号建议为 0.0.1，每次更新需递增‌。</li>
<li>main‌：指定入口文件（如 index.js）‌。</li>
<li>private‌：必须设置为 false（公开包）‌。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>代码开发与测试</strong></p>
<ul>
<li>‌编写功能代码‌
<br>在入口文件（如 index.js）中实现功能逻辑，并通过 module.exports 导出模块‌。</li>
<li>本地调试‌
<br>使用 npm link 或本地安装包验证功能是否正常‌。</li>
</ul>
</li>
<li>
<p><strong>登录与发布</strong></p>
<ul>
<li>‌登录npm账号‌
<br>执行 <code v-pre>npm login --registry https://registry.npmjs.org</code>，输入用户名、密码及邮箱验证码‌。</li>
<li>发布包‌
<br>运行 <code v-pre>npm publish --registry https://registry.npmjs.org</code> 完成发布‌。</li>
</ul>
</li>
<li>
<p><strong>更新与维护</strong></p>
<ul>
<li>‌版本号更新‌
<br>通过 <code v-pre>npm version patch/minor/major</code> 自动更新版本号，再重新发布‌。</li>
<li>‌验证发布结果‌
<br>登录npm官网查看已发布的包，或通过 <code v-pre>npm install &lt;包名&gt;</code> 验证安装是否成功‌</li>
</ul>
</li>
</ol>
<h2 id="_5-2-发布npm规则" tabindex="-1"><a class="header-anchor" href="#_5-2-发布npm规则"><span>5.2 发布npm规则</span></a></h2>
<ol>
<li><strong>唯一性</strong>：
<br>包名必须是唯一的。你不能使用已经存在于 npm 注册表中的包名。</li>
<li><strong>版本控制</strong>：
<br> 使用 <a href="https://semver.org/" target="_blank" rel="noopener noreferrer">语义化版本控制</a>（Semantic Versioning，SemVer）。每次发布都需要更新版本号，如果已有 1.0.0，下次至少更新为 1.0.1（补丁更新）、1.1.0（次要更新）或 2.0.0（主要更新），根据更改的性质来决定。</li>
<li><strong><code v-pre>package.json</code> 文件</strong>：
<ul>
<li><code v-pre>name</code> 和 <code v-pre>version</code> 字段是必须的。</li>
<li><code v-pre>main</code> 字段指定了包的入口文件。</li>
<li><code v-pre>scripts</code> 字段可以包含运行测试和构建等脚本。</li>
<li><code v-pre>dependencies</code> 和 <code v-pre>devDependencies</code> 字段定义了包所需的其他 npm 包。</li>
<li><code v-pre>repository</code>、<code v-pre>keywords</code>、<code v-pre>author</code>、<code v-pre>license</code> 等字段虽然不是必须的，但非常有助于包的发现和使用。</li>
</ul>
</li>
<li><strong>许可证</strong>：
<br>包应该明确指出许可证类型，确保其他人知道如何合法地使用你的包。</li>
<li><strong>README 文件</strong>：
<br>包应该包含一个 <code v-pre>README.md</code> 文件，介绍包的功能、安装方法、使用示例和API文档。这是正规的做法，最好还是要遵守一下</li>
<li><strong>代码质量</strong>：
<br> 包应该通过单元测试，有明确的代码风格和良好的文档。</li>
<li><strong>公共与私有</strong>：
<br>  默认情况下，npm 包是公开的。如果你想发布一个私有包，你需要在 <code v-pre>package.json</code> 中设置 <code v-pre>&quot;private&quot;: true</code>，或者使用付费的 npm 组织账户。</li>
<li><strong><code v-pre>.npmignore</code> 文件</strong>：
<br>   如果你不希望某些文件或目录包含在你的包中，可以使用 <code v-pre>.npmignore</code> 文件来排除它们，类似于 <code v-pre>.gitignore</code>。
<br>   .npmignore文件是排除的，与之相反的是package.json的<code v-pre>&quot;files&quot;</code>配置，如果想发的文件就比较少，就可以使用这个，他的作用是发布上传的时候只会上传写在这里面的文件</li>
</ol>
<h2 id="_5-3-发布npm实操" tabindex="-1"><a class="header-anchor" href="#_5-3-发布npm实操"><span>5.3 发布npm实操</span></a></h2>
<h3 id="_5-3-1-项目初始化与配置" tabindex="-1"><a class="header-anchor" href="#_5-3-1-项目初始化与配置"><span>5.3.1 项目初始化与配置</span></a></h3>
<p>在开始开发npm插件包之前，首先需要进行项目的初始化与配置。这一步骤是确保项目结构清晰、配置正确，并为后续的开发和发布打下坚实的基础。</p>
<ol>
<li>创建项目文件夹</li>
</ol>
<p>首先，你需要在本地创建一个新的文件夹，用于存放你的项目文件。这个文件夹将作为你的项目根目录。在命令行中，可以使用以下命令来创建一个新的文件夹：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">mkdir</span> my-npm-package</span>
<span class="line"><span class="token builtin class-name">cd</span> my-npm-package</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里， <code v-pre>my-npm-package</code> 是项目文件夹的名称，你可以根据你的项目内容来命名。</p>
<ol start="2">
<li>初始化npm项目</li>
</ol>
<p>创建了项目文件夹后，接下来需要初始化一个新的npm项目。这可以通过在项目根目录下运行 <code v-pre>npm init</code> 命令来完成。这个命令会引导你通过一系列问题来设置 <code v-pre>package.json</code> 文件。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> init</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在运行 <code v-pre>npm init</code> 时，系统会提示你输入项目的相关信息，如项目名称、版本、描述、入口文件等。这些信息将被记录在 <code v-pre>package.json</code> 文件中，是npm识别和管理你的包的关键。</p>
<ol start="3">
<li>配置package.json</li>
</ol>
<p><code v-pre>package.json</code> 文件是npm项目的核心配置文件，它包含了项目的所有元数据和依赖信息。在初始化过程中，你可能已经填写了一些基本信息，但你可能还需要进一步配置，例如添加脚本命令、设置依赖等。</p>
<p>例如，你可能需要添加项目的主入口文件：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者添加一些脚本命令，如构建和测试脚本：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"jest"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确保你的 <code v-pre>package.json</code> 文件清晰地描述了你的项目，这对于其他开发者理解和使用你的包至关重要。</p>
<ol start="4">
<li>选择合适的开源协议</li>
</ol>
<p>开源协议定义了其他人可以使用你的代码的条件。选择一个合适的开源协议是非常重要的，它可以帮助你保护你的代码同时允许其他人合法地使用和贡献。</p>
<p>常见的开源协议包括MIT、Apache 2.0和GPL等。例如，MIT协议是一种非常宽松的协议，允许用户自由地使用、修改和分发代码，只需保留版权声明和许可声明。</p>
<p>在 <code v-pre>package.json</code> 文件中，你可以通过 <code v-pre>license</code> 字段来指定你的项目使用的开源协议：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">"MIT"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>选择合适的开源协议后，你的项目初始化与配置工作就基本完成了。接下来，你可以开始编写代码和开发你的npm插件包了。</p>
<h3 id="_5-3-2-代码编写与组件开发" tabindex="-1"><a class="header-anchor" href="#_5-3-2-代码编写与组件开发"><span>5.3.2 代码编写与组件开发</span></a></h3>
<ol>
<li>编写插件代码</li>
</ol>
<p>在开发npm插件时，首先需要明确插件的功能和目标用户群体。插件代码的编写应遵循模块化、可复用和易于维护的原则。以下是编写插件代码的基本步骤：</p>
<ul>
<li><strong>需求分析</strong> ：确定插件需要实现的功能，分析可能的使用场景。</li>
<li><strong>设计API</strong> ：设计插件的接口，确保接口简洁、直观，易于集成到其他项目中。</li>
<li><strong>编码实现</strong> ：使用JavaScript或其他支持的语言编写代码。代码应遵循最佳实践，如使用ES6+特性、模块化等。</li>
<li><strong>代码审查</strong> ：进行代码审查，确保代码质量。</li>
</ul>
<p>例如，如果开发一个基于Vue的工具类插件，可以在 <code v-pre>index.js</code> 中编写如下代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">install</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$isEmail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>开发Vue或其他框架组件</li>
</ol>
<p>开发Vue或其他框架的组件时，需要考虑组件的独立性和可复用性。以下是开发组件的基本步骤：</p>
<ul>
<li><strong>组件设计</strong> ：设计组件的结构和功能，确定组件的props、events和slots。</li>
<li><strong>组件实现</strong> ：编写组件的模板、样式和逻辑代码。</li>
<li><strong>组件测试</strong> ：在不同的使用场景下测试组件，确保其功能正常。</li>
<li><strong>文档编写</strong> ：编写组件的使用文档，包括安装、配置和示例代码。</li>
</ul>
<p>例如，开发一个简单的Vue按钮组件：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>buttonClass<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    {{ buttonText }}</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">buttonText</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">buttonClass</span><span class="token operator">:</span> String</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* 样式 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 <code v-pre>index.js</code> 一直在与下方一直使用</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'index.js测试调用的方法'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token string">"预期结果"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  doSomething</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>编写README.md</li>
</ol>
<p><code v-pre>README.md</code> 文件是项目的门面，它提供了项目的基本信息和使用指南。一个好的 <code v-pre>README.md</code> 应包括以下内容：</p>
<ul>
<li><strong>项目简介</strong> ：简要描述项目的目的和功能。</li>
<li><strong>安装指南</strong> ：提供安装和配置项目的步骤。</li>
<li><strong>使用示例</strong> ：展示如何使用项目，提供代码示例。</li>
<li><strong>贡献指南</strong> ：说明如何为项目贡献代码或报告问题。</li>
<li><strong>许可证信息</strong> ：指明项目的许可证类型。</li>
</ul>
<ol start="4">
<li>编写LICENSE文件</li>
</ol>
<p><code v-pre>LICENSE</code> 文件定义了项目的法律许可条款。选择合适的开源许可证对于项目的长期发展至关重要。常见的开源许可证包括MIT、Apache 2.0和GPL等。例如，MIT许可证的 <code v-pre>LICENSE</code> 文件内容如下：</p>
<div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain" data-title="plain"><pre v-pre><code><span class="line">MIT License</span>
<span class="line"></span>
<span class="line">Copyright (c) [year] [your name]</span>
<span class="line"></span>
<span class="line">Permission is hereby granted, free of charge, to any person obtaining a copy</span>
<span class="line">of this software and associated documentation files (the "Software"), to deal</span>
<span class="line">in the Software without restriction, including without limitation the rights</span>
<span class="line">to use, copy, modify, merge, publish, distribute, sublicense, and/or sell</span>
<span class="line">copies of the Software, and to permit persons to whom the Software is</span>
<span class="line">furnished to do so, subject to the following conditions:</span>
<span class="line"></span>
<span class="line">The above copyright notice and this permission notice shall be included in all</span>
<span class="line">copies or substantial portions of the Software.</span>
<span class="line"></span>
<span class="line">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR</span>
<span class="line">IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,</span>
<span class="line">FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE</span>
<span class="line">AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER</span>
<span class="line">LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,</span>
<span class="line">OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE</span>
<span class="line">SOFTWARE.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过以上步骤，可以确保插件或组件的开发不仅功能完善，而且在文档和法律层面也准备充分，便于用户理解和使用。</p>
<h3 id="_5-3-3-项目配置与优化" tabindex="-1"><a class="header-anchor" href="#_5-3-3-项目配置与优化"><span>5.3.3 项目配置与优化</span></a></h3>
<p>在开发npm插件包的过程中，项目配置与优化是确保代码质量和性能的关键步骤。本节将详细介绍如何配置webpack或其他打包工具，设置 <code v-pre>.gitignore</code> 和 <code v-pre>.npmignore</code> 文件，以及使用Babel转义代码。</p>
<h4 id="_5-3-3-1-配置webpack或其他打包工具" tabindex="-1"><a class="header-anchor" href="#_5-3-3-1-配置webpack或其他打包工具"><span>5.3.3.1 配置webpack或其他打包工具</span></a></h4>
<p><strong>为什么需要打包工具</strong></p>
<p>打包工具如webpack可以帮助我们处理模块依赖、代码压缩、文件合并等任务，使得最终发布的插件包更加高效和易于使用。</p>
<p><strong>配置步骤</strong></p>
<ol>
<li>
<p><strong>安装webpack</strong> ：首先确保项目中已经安装了webpack。可以通过以下命令安装：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack webpack-cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>创建webpack配置文件</strong> ：在项目根目录下创建一个名为 <code v-pre>webpack.config.js</code> 的文件，并添加以下基础配置：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">'./src/index.js'</span><span class="token punctuation">,</span> <span class="token comment">// 入口文件</span></span>
<span class="line">  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">'bundle.js'</span><span class="token punctuation">,</span> <span class="token comment">// 输出文件名</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'dist'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 输出路径</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">// 配置各种加载器</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// 配置插件</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>配置加载器和插件</strong> ：根据项目需要，配置相应的加载器（如babel-loader、css-loader等）和插件（如HtmlWebpackPlugin、MiniCssExtractPlugin等）。</p>
</li>
<li>
<p><strong>运行webpack</strong> ：在package.json中添加构建脚本，例如：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --config webpack.config.js"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后通过 <code v-pre>npm run build</code> 命令运行webpack。</p>
</li>
</ol>
<h4 id="_5-3-3-2-设置-gitignore和-npmignore" tabindex="-1"><a class="header-anchor" href="#_5-3-3-2-设置-gitignore和-npmignore"><span>5.3.3.2 设置.gitignore和.npmignore</span></a></h4>
<p>为了确保在版本控制和npm发布时不会包含不必要的文件，我们需要设置 <code v-pre>.gitignore</code> 和 <code v-pre>.npmignore</code> 文件。</p>
<ol>
<li>.gitignore</li>
</ol>
<p><code v-pre>.gitignore</code> 用于指定Git版本控制系统忽略的文件或目录。例如，可以忽略 <code v-pre>node_modules</code> 、 <code v-pre>dist</code> 等目录，以及一些临时文件。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># .gitignore示例</span></span>
<span class="line">node_modules/</span>
<span class="line">dist/</span>
<span class="line">*.log</span>
<span class="line">*.swp</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>.npmignore</li>
</ol>
<p><code v-pre>.npmignore</code> 用于在发布npm包时忽略某些文件或目录。如果项目中没有 <code v-pre>.npmignore</code> 文件， <code v-pre>.gitignore</code> 会被用作替代。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># .npmignore示例</span></span>
<span class="line">src/</span>
<span class="line">tests/</span>
<span class="line">*.md</span>
<span class="line">*.log</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意， <code v-pre>.npmignore</code> 的优先级高于 <code v-pre>.gitignore</code> ，因此在设置时需要特别注意不要遗漏了应该被忽略的文件。</p>
<h4 id="_5-3-3-3-使用babel转义代码" tabindex="-1"><a class="header-anchor" href="#_5-3-3-3-使用babel转义代码"><span>5.3.3.3 使用Babel转义代码</span></a></h4>
<p>Babel是一个广泛使用的JavaScript编译器，它可以将最新版本的JavaScript代码转换为向后兼容的代码，以便在各种环境中运行。</p>
<p><strong>配置步骤</strong></p>
<ol>
<li>
<p><strong>安装Babel依赖</strong> ：首先安装Babel及其相关插件和预设。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev @babel/core @babel/preset-env babel-loader</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>创建Babel配置文件</strong> ：在项目根目录下创建一个名为 <code v-pre>.babelrc</code> 或 <code v-pre>babel.config.js</code> 的文件，并添加预设配置。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// .babelrc示例</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"@babel/preset-env"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>在webpack中配置babel-loader</strong> ：在 <code v-pre>webpack.config.js</code> 中添加babel-loader到module的rules中。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">'babel-loader'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p>通过以上步骤，我们可以确保项目中的JavaScript代码能够被正确转义，以便在不同的环境中运行。</p>
<h3 id="_5-3-4-本地测试与调试" tabindex="-1"><a class="header-anchor" href="#_5-3-4-本地测试与调试"><span>5.3.4 本地测试与调试</span></a></h3>
<p>在发布npm插件包之前，进行彻底的本地测试和调试是确保插件功能符合预期且无错误的关键步骤。这不仅有助于提升用户体验，还能增强插件的可靠性和维护性。</p>
<h4 id="_5-3-4-1-在本地环境中测试插件" tabindex="-1"><a class="header-anchor" href="#_5-3-4-1-在本地环境中测试插件"><span>5.3.4.1 在本地环境中测试插件</span></a></h4>
<ol>
<li>设置本地开发环境</li>
</ol>
<p>在开始测试之前，首先需要确保本地开发环境已经配置好。这通常包括安装Node.js和npm，以及可能需要的其他依赖项。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装Node.js和npm</span></span>
<span class="line"><span class="token comment"># 可以通过官方网站下载安装包进行安装</span></span>
<span class="line"><span class="token comment"># 或者使用包管理器安装，例如在Ubuntu上：</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> update</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nodejs <span class="token function">npm</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>运行插件</li>
</ol>
<p>在本地环境中测试插件，首先需要确保插件的入口文件和依赖项正确无误。可以通过创建一个简单的测试脚本来运行插件。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 假设插件的入口文件是index.js</span></span>
<span class="line"><span class="token keyword">const</span> myPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./index'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用插件</span></span>
<span class="line">myPlugin<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>调试</li>
</ol>
<p>如果插件在运行时出现问题，可以使用Node.js的调试工具进行调试。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 使用Node.js的调试模式运行脚本</span></span>
<span class="line"><span class="token function">node</span> inspect my-test-script.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>在调试模式下，可以使用 <code v-pre>cont</code> , <code v-pre>next</code> , <code v-pre>step</code> , <code v-pre>out</code> 等命令来控制程序的执行流程，帮助定位问题。</p>
<h4 id="_5-3-4-2-使用单元测试确保代码质量" tabindex="-1"><a class="header-anchor" href="#_5-3-4-2-使用单元测试确保代码质量"><span>5.3.4.2 使用单元测试确保代码质量</span></a></h4>
<p>单元测试是确保代码质量的重要手段，它可以帮助开发者验证代码的每个部分是否按预期工作。</p>
<ol>
<li>选择测试框架</li>
</ol>
<p>有许多流行的JavaScript测试框架，如Jest, Mocha, Jasmine等。选择一个适合你项目需求的测试框架。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 安装Jest作为测试框架</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev jest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>编写测试用例</li>
</ol>
<p>编写测试用例是单元测试的核心。每个测试用例应该独立地验证代码的一个特定功能。</p>
<p>在项目目录下创建<code v-pre>test.js</code>,jest自动识别.spec.js或.test.js结尾</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用Jest编写测试用例</span></span>
<span class="line"><span class="token keyword">const</span> myPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./index'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'测试插件的某个功能'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">expect</span><span class="token punctuation">(</span>myPlugin<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">'预期结果'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>运行测试</li>
</ol>
<p>编写完测试用例后，需要运行它们来检查代码是否通过测试。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 运行Jest测试</span></span>
<span class="line"><span class="token function">npm</span> <span class="token builtin class-name">test</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>持续集成</li>
</ol>
<p>为了确保代码质量，可以考虑将单元测试集成到持续集成(CI)流程中。这样，每次代码提交时都会自动运行测试。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token comment"># 示例：在GitHub Actions中配置Jest测试</span></span>
<span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Node.js CI</span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>push<span class="token punctuation">]</span></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">build</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2</span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js</span>
<span class="line">      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2</span>
<span class="line">      <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">14</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install</span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm test</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上述步骤，你可以在本地环境中有效地测试和调试你的npm插件，确保其质量和稳定性。这将为插件的成功发布打下坚实的基础。</p>
<h3 id="_5-3-5-打包与发布准备" tabindex="-1"><a class="header-anchor" href="#_5-3-5-打包与发布准备"><span>5.3.5 打包与发布准备</span></a></h3>
<p>在发布npm包之前，进行适当的打包和准备工作是至关重要的。这不仅确保了包的质量，还保护了开发者的知识产权和用户的数据安全。以下是打包与发布准备的具体步骤。</p>
<h4 id="_5-3-5-1-执行npm-run-build进行打包" tabindex="-1"><a class="header-anchor" href="#_5-3-5-1-执行npm-run-build进行打包"><span>5.3.5.1 执行npm run build进行打包</span></a></h4>
<p>在发布npm包之前，首先需要确保所有的代码都已经被正确打包。这通常涉及到使用构建工具如Webpack或Rollup来打包代码。以下是执行打包命令的基本步骤：</p>
<ol>
<li>
<p><strong>打开命令行工具</strong> ：在项目根目录下打开命令行或终端。</p>
</li>
<li>
<p><strong>执行打包命令</strong> ：输入 <code v-pre>npm run build</code> 命令。这个命令通常在 <code v-pre>package.json</code> 文件的 <code v-pre>scripts</code> 部分定义，例如：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"webpack --config webpack.config.js"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的 <code v-pre>webpack.config.js</code> 是你的Webpack配置文件。</p>
</li>
<li>
<p><strong>检查输出</strong> ：打包完成后，检查 <code v-pre>dist</code> 或 <code v-pre>build</code> 目录下的输出文件，确保所有必要的文件都已生成。</p>
</li>
</ol>
<h4 id="_5-3-5-2-审查包内容以确保无敏感信息" tabindex="-1"><a class="header-anchor" href="#_5-3-5-2-审查包内容以确保无敏感信息"><span>5.3.5.2 审查包内容以确保无敏感信息</span></a></h4>
<p>在打包完成后，审查包内容是非常重要的一步，以确保没有包含任何敏感信息，如密钥、密码或个人数据。以下是审查包内容的步骤：</p>
<ol>
<li><strong>检查文件内容</strong> ：手动或使用自动化工具检查所有打包后的文件，确保没有硬编码的敏感信息。</li>
<li><strong>使用 <code v-pre>.gitignore</code> 和 <code v-pre>.npmignore</code></strong> ：确保这些文件中列出了所有不应包含在版本控制或npm包中的文件和目录。</li>
<li><strong>清理临时文件</strong> ：删除任何不必要的临时文件或构建工件，以减少包的大小并提高安全性。</li>
</ol>
<h4 id="_5-3-5-3-登录npm账户" tabindex="-1"><a class="header-anchor" href="#_5-3-5-3-登录npm账户"><span>5.3.5.3 登录npm账户</span></a></h4>
<p>在发布npm包之前，你需要登录到npm账户。以下是登录npm账户的步骤：</p>
<ol>
<li>
<p><strong>打开命令行工具</strong> ：在项目根目录下打开命令行或终端。</p>
</li>
<li>
<p><strong>登录npm</strong> ：输入 <code v-pre>npm login</code> 命令，然后按照提示输入你的用户名、密码和邮箱。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> login</span>
<span class="line">Username: your-username</span>
<span class="line">Password: your-password</span>
<span class="line">Email: your-email@example.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>验证登录</strong> ：登录成功后，你可以通过输入 <code v-pre>npm whoami</code> 来验证是否成功登录，该命令会显示当前登录的用户名。</p>
</li>
</ol>
<p>完成以上步骤后，你的npm包就已经准备好发布到npm仓库了。这些准备工作不仅确保了包的质量和安全性，也为用户提供了更好的使用体验。</p>
<h3 id="_5-3-6-发布npm包" tabindex="-1"><a class="header-anchor" href="#_5-3-6-发布npm包"><span>5.3.6 发布npm包</span></a></h3>
<h4 id="_5-3-6-1-执行npm-publish发布包" tabindex="-1"><a class="header-anchor" href="#_5-3-6-1-执行npm-publish发布包"><span>5.3.6.1 执行npm publish发布包</span></a></h4>
<p>发布npm包是一个关键步骤，它将你的插件或组件分享给全球的开发者社区。以下是发布npm包的详细步骤：</p>
<ol>
<li>
<p><strong>确保账户登录</strong> ：在发布之前，你需要确保已经在npm上登录了你的账户。可以通过命令行输入以下命令进行登录：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> login</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>按照提示输入你的用户名、密码和邮箱。</p>
</li>
<li>
<p><strong>检查package.json</strong> ：在发布之前，再次检查 <code v-pre>package.json</code> 文件，确保 <code v-pre>name</code> 字段没有问题，且 <code v-pre>version</code> 字段是最新的。</p>
</li>
<li>
<p><strong>执行发布命令</strong> ：在项目根目录下，运行以下命令来发布你的npm包：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> publish</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果一切设置正确，你的包将被上传到npm仓库。</p>
</li>
</ol>
<h4 id="_5-3-6-2-处理发布过程中可能遇到的问题" tabindex="-1"><a class="header-anchor" href="#_5-3-6-2-处理发布过程中可能遇到的问题"><span>5.3.6.2 处理发布过程中可能遇到的问题</span></a></h4>
<p>在发布npm包的过程中，可能会遇到一些常见问题，以下是一些问题的解决方法：</p>
<ol>
<li>
<p><strong>包名重复</strong> ：如果你的包名已经被占用，npm会拒绝发布。你需要更改 <code v-pre>package.json</code> 中的 <code v-pre>name</code> 字段为一个未被使用的名称。</p>
</li>
<li>
<p><strong>版本号问题</strong> ：如果你尝试发布一个与之前版本完全相同的版本号，npm也会拒绝发布。确保每次发布时 <code v-pre>version</code> 字段都有所更新。</p>
</li>
<li>
<p><strong>权限问题</strong> ：如果你不是包的所有者或没有足够的权限，也会导致发布失败。确保你登录的账户有权限发布该包。</p>
</li>
<li>
<p><strong>网络问题</strong> ：有时网络不稳定也会导致发布失败。检查你的网络连接，或者尝试使用VPN。</p>
</li>
</ol>
<h4 id="_5-3-6-3-查看发布的插件" tabindex="-1"><a class="header-anchor" href="#_5-3-6-3-查看发布的插件"><span>5.3.6.3 查看发布的插件</span></a></h4>
<p>发布成功后，你可以通过以下步骤来查看你的插件：</p>
<ol>
<li>
<p><strong>访问npm官网</strong> ：打开浏览器，访问<a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm官网</a></p>
</li>
<li>
<p><strong>搜索你的包</strong> ：在搜索框中输入你的包名，查看是否能找到你的包。</p>
</li>
<li>
<p><strong>查看包详情</strong> ：点击你的包名，可以查看包的详细信息，包括版本、依赖、下载次数等。</p>
</li>
<li>
<p><strong>管理包</strong> ：如果你需要对包进行管理，如更新版本、设置访问权限等，可以在npm官网的个人账户中进行操作。</p>
</li>
</ol>
<p>通过以上步骤，你可以成功发布并管理你的npm包，使其为全球的开发者所使用。</p>
<h3 id="_5-3-7-版本更新与维护" tabindex="-1"><a class="header-anchor" href="#_5-3-7-版本更新与维护"><span>5.3.7 版本更新与维护</span></a></h3>
<h4 id="_5-3-7-1-手动或自动更新版本号" tabindex="-1"><a class="header-anchor" href="#_5-3-7-1-手动或自动更新版本号"><span>5.3.7.1 手动或自动更新版本号</span></a></h4>
<p>在软件开发中，版本号的更新是一个关键环节，它帮助用户和开发者了解软件的更新状态和内容。版本号遵循
<a href="https://semver.org/" target="_blank" rel="noopener noreferrer">Semantic Versioning</a></p>
<p>规范，通常由主版本号、次版本号和修订号组成，例如 <code v-pre>1.2.3</code> 。</p>
<ol>
<li>手动更新版本号</li>
</ol>
<p>手动更新版本号通常涉及直接编辑 <code v-pre>package.json</code> 文件中的 <code v-pre>version</code> 字段。例如，如果当前版本是 <code v-pre>1.0.0</code> ，并且你添加了一个新功能，你可能需要将版本更新为 <code v-pre>1.1.0</code> 。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"your-package-name"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.1.0"</span><span class="token punctuation">,</span></span>
<span class="line">  ...</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>自动更新版本号</li>
</ol>
<p>为了自动化版本更新的过程，可以使用工具如 <code v-pre>npm version</code> 命令，或者使用如 <code v-pre>standard-version</code> 这样的工具，它可以根据提交的commit信息自动更新版本号。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment"># 自动更新补丁版本号</span></span>
<span class="line"><span class="token function">npm</span> version patch</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 自动更新次版本号</span></span>
<span class="line"><span class="token function">npm</span> version minor</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 自动更新主版本号</span></span>
<span class="line"><span class="token function">npm</span> version major</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些命令会自动更新 <code v-pre>package.json</code> 中的版本号，并创建一个新的Git提交和标签。</p>
<h4 id="_5-3-7-2-重新发布更新后的插件" tabindex="-1"><a class="header-anchor" href="#_5-3-7-2-重新发布更新后的插件"><span>5.3.7.2 重新发布更新后的插件</span></a></h4>
<p>更新版本号后，下一步是重新发布你的npm包，以便用户可以获取到最新的版本。</p>
<ol>
<li><strong>确保你已经登录到npm</strong> ：使用 <code v-pre>npm login</code> 命令登录你的npm账户。</li>
<li><strong>发布更新</strong> ：使用 <code v-pre>npm publish</code> 命令发布更新。</li>
</ol>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> publish</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在发布之前，确保你的包中没有包含敏感信息，并且所有的变更都已经经过测试。</p>
<h4 id="_5-3-7-3-维护和更新插件文档" tabindex="-1"><a class="header-anchor" href="#_5-3-7-3-维护和更新插件文档"><span>5.3.7.3 维护和更新插件文档</span></a></h4>
<p>随着插件的更新，文档也需要相应地进行维护和更新，以确保用户能够理解新功能、变更和修复。</p>
<ul>
<li><strong>更新README.md</strong> ：更新README文件，添加新功能的描述、使用示例和任何重要的变更说明。</li>
<li><strong>更新CHANGELOG.md</strong> ：维护一个CHANGELOG文件，记录每个版本的变更内容，这有助于用户了解每个版本的更新细节。</li>
<li><strong>更新API文档</strong> ：如果插件有API文档，确保所有API的变更都被记录和更新。</li>
</ul>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line"><span class="token title important"><span class="token punctuation">#</span> Changelog</span></span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [1.1.0] - 2023-01-01</span></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> Added</span></span>
<span class="line"><span class="token list punctuation">-</span> Added a new feature that improves performance.</span>
<span class="line"></span>
<span class="line"><span class="token title important"><span class="token punctuation">##</span> [1.0.0] - 2022-12-01</span></span>
<span class="line"><span class="token title important"><span class="token punctuation">###</span> Added</span></span>
<span class="line"><span class="token list punctuation">-</span> Initial release of the plugin.</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过定期维护和更新文档，可以提高插件的用户体验，并帮助用户更好地理解和使用你的插件。</p>
<h3 id="_5-3-8-高级发布技巧" tabindex="-1"><a class="header-anchor" href="#_5-3-8-高级发布技巧"><span>5.3.8 高级发布技巧</span></a></h3>
<h4 id="_5-3-8-1-使用np工具简化发布流程" tabindex="-1"><a class="header-anchor" href="#_5-3-8-1-使用np工具简化发布流程"><span>5.3.8.1 使用np工具简化发布流程</span></a></h4>
<p>在npm包的发布过程中，手动执行 <code v-pre>npm publish</code> 可能会比较繁琐，尤其是在需要频繁更新版本时。为了简化这一流程，可以使用 <code v-pre>np</code> 这个工具。 <code v-pre>np</code> 是一个npm包，它提供了一系列的功能来帮助开发者更高效地发布npm包。</p>
<ol>
<li>安装np</li>
</ol>
<p>首先，需要在本地安装 <code v-pre>np</code> 。可以通过以下命令进行安装：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> np</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>使用np发布包</li>
</ol>
<p>使用 <code v-pre>np</code> 发布包非常简单，只需在项目目录下运行以下命令：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">np</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><code v-pre>np</code> 会自动执行一系列检查，包括：</p>
<ul>
<li>检查是否有未提交的更改</li>
<li>检查是否有未发布的版本</li>
<li>提示选择版本类型（如patch, minor, major）</li>
<li>自动更新 <code v-pre>CHANGELOG.md</code></li>
<li>自动创建git标签</li>
<li>自动推送代码和标签到远程仓库</li>
<li>最后执行 <code v-pre>npm publish</code></li>
</ul>
<p>这样，通过 <code v-pre>np</code> 工具，可以大大简化npm包的发布流程，减少出错的可能性。</p>
<h4 id="_5-3-8-2-在ci-cd环境中自动发布" tabindex="-1"><a class="header-anchor" href="#_5-3-8-2-在ci-cd环境中自动发布"><span>5.3.8.2 在CI/CD环境中自动发布</span></a></h4>
<p>持续集成/持续部署（CI/CD）是现代软件开发中的重要实践，它可以帮助团队自动化构建、测试和部署流程。在npm包的发布中，也可以利用CI/CD工具来自动化发布流程。</p>
<ol>
<li>配置CI/CD</li>
</ol>
<p>以GitHub Actions为例，可以在项目的 <code v-pre>.github/workflows</code> 目录下创建一个YAML文件来定义CI/CD流程。以下是一个简单的示例：</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">name</span><span class="token punctuation">:</span> Publish Package</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">on</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">push</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">tags</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">'v*'</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">jobs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">publish</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest</span>
<span class="line">    <span class="token key atrule">steps</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout code</span>
<span class="line">      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2</span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use Node.js</span>
<span class="line">      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v1</span>
<span class="line">      <span class="token key atrule">with</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">'14'</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies</span>
<span class="line">      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm ci</span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build</span>
<span class="line">      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build</span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Publish</span>
<span class="line">      <span class="token key atrule">run</span><span class="token punctuation">:</span> npm publish</span>
<span class="line">      <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">NODE_AUTH_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.NPM_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个配置中，每当有新的tag被推送到仓库时，GitHub Actions会自动执行以下步骤：</p>
<ol>
<li>检出代码</li>
<li>设置Node.js环境</li>
<li>安装依赖</li>
<li>构建项目</li>
<li>发布npm包</li>
</ol>
<p>其中， <code v-pre>NODE_AUTH_TOKEN</code> 是一个环境变量，它包含了用于发布npm包的认证令牌。这个令牌需要预先在GitHub仓库的Secrets中设置。</p>
<p>通过这种方式，可以确保每次发布都是自动化的，减少人为错误，提高效率。</p>
<h4 id="_5-3-8-3-管理多个注册表账户和私有包" tabindex="-1"><a class="header-anchor" href="#_5-3-8-3-管理多个注册表账户和私有包"><span>5.3.8.3 管理多个注册表账户和私有包</span></a></h4>
<p>在某些情况下，开发者可能需要管理多个npm注册表账户，或者发布私有npm包。npm提供了相应的功能来支持这些需求。</p>
<ol>
<li>使用.npmrc配置多个账户</li>
</ol>
<p>可以通过创建多个 <code v-pre>.npmrc</code> 文件来管理不同的npm注册表账户。例如，可以在项目根目录下创建一个名为 <code v-pre>.npmrc.private</code> 的文件，用于配置私有包的发布：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre v-pre><code><span class="line">registry=https://registry.npmjs.com/</span>
<span class="line">//registry.npmjs.com/:_authToken=your-private-token</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在发布私有包时，只需切换到这个配置文件：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npmjs.com/ <span class="token parameter variable">--userconfig</span><span class="token operator">=</span>.npmrc.private publish</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>发布私有包</li>
</ol>
<p>要发布私有包，首先需要在npm官网上创建一个组织，并设置相应的权限。然后，在发布时，使用组织的命名空间来发布包：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> publish <span class="token parameter variable">--access</span><span class="token operator">=</span>restricted</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这样，发布的包就只能被组织内的成员访问。</p>
<p>通过这些高级发布技巧，开发者可以更加灵活和高效地管理npm包的发布流程。</p>
</div></template>


