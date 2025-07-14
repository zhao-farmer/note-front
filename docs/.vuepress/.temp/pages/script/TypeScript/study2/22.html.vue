<template><div><h1 id="二十二、tsconfig-json" tabindex="-1"><a class="header-anchor" href="#二十二、tsconfig-json"><span>二十二、tsconfig.json</span></a></h1>
<h2 id="_22-1-简介" tabindex="-1"><a class="header-anchor" href="#_22-1-简介"><span>22.1 简介</span></a></h2>
<p><code v-pre>tsconfig.json</code>是 TypeScript 项目的配置文件，放在项目的根目录。反过来说，如果一个目录里面有<code v-pre>tsconfig.json</code>，TypeScript 就认为这是项目的根目录。</p>
<p>如果项目源码是 JavaScript，但是想用 TypeScript 处理，那么配置文件的名字是<code v-pre>jsconfig.json</code>，它跟<code v-pre>tsconfig</code>的写法是一样的。</p>
<p><code v-pre>tsconfig.json</code>文件主要供<code v-pre>tsc</code>编译器使用，它的命令行参数<code v-pre>--project</code>或<code v-pre>-p</code>可以指定<code v-pre>tsconfig.json</code>的位置（目录或文件皆可）。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">$ tsc <span class="token parameter variable">-p</span> ./dir</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果不指定配置文件的位置，<code v-pre>tsc</code>就会在当前目录下搜索<code v-pre>tsconfig.json</code>文件，如果不存在，就到上一级目录搜索，直到找到为止。</p>
<p><code v-pre>tsconfig.json</code>文件的格式，是一个 JSON 对象，最简单的情况可以只放置一个空对象<code v-pre>{}</code>。下面是一个示例。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"outDir"</span><span class="token operator">:</span> <span class="token string">"./built"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"es5"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/**/*"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本章后面会详细介绍<code v-pre>tsconfig.json</code>的各个属性，这里简单说一下，上面示例的四个属性的含义。</p>
<ul>
<li>include：指定哪些文件需要编译。</li>
<li>allowJs：指定源目录的 JavaScript 文件是否原样拷贝到编译后的目录。</li>
<li>outDir：指定编译产物存放的目录。</li>
<li>target：指定编译产物的 JS 版本。</li>
</ul>
<p><code v-pre>tsconfig.json</code>文件可以不必手写，使用 tsc 命令的<code v-pre>--init</code>参数自动生成。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">$ tsc <span class="token parameter variable">--init</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>上面命令生成的<code v-pre>tsconfig.json</code>文件，里面会有一些默认配置。</p>
<p>你也可以使用别人预先写好的 tsconfig.json 文件，npm 的<code v-pre>@tsconfig</code>名称空间下面有很多模块，都是写好的<code v-pre>tsconfig.json</code>样本，比如 <code v-pre>@tsconfig/recommended</code>和<code v-pre>@tsconfig/node16</code>。</p>
<p>这些模块需要安装，以<code v-pre>@tsconfig/deno</code>为例。</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">$ <span class="token function">npm</span> <span class="token function">install</span> --save-dev @tsconfig/deno</span>
<span class="line"><span class="token comment"># 或者</span></span>
<span class="line">$ <span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">--dev</span> @tsconfig/deno</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装以后，就可以在<code v-pre>tsconfig.json</code>里面引用这个模块，相当于继承它的设置，然后进行扩展。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"@tsconfig/deno/tsconfig.json"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@tsconfig</code>空间下包含的完整 tsconfig 文件目录，可以查看 <a href="https://github.com/tsconfig/bases/tree/main/bases" target="_blank" rel="noopener noreferrer">GitHub</a>。</p>
<p><code v-pre>tsconfig.json</code>的一级属性并不多，只有很少几个，但是<code v-pre>compilerOptions</code>属性有很多二级属性。下面先逐一介绍一级属性，然后再介绍<code v-pre>compilerOptions</code>的二级属性，按照首字母排序。</p>
<h2 id="_22-2-exclude" tabindex="-1"><a class="header-anchor" href="#_22-2-exclude"><span>22.2 exclude</span></a></h2>
<p><code v-pre>exclude</code>属性是一个数组，必须与<code v-pre>include</code>属性一起使用，用来从编译列表中去除指定的文件。它也支持使用与<code v-pre>include</code>属性相同的通配符。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"**/*"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"**/*.spec.ts"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_22-3-extends" tabindex="-1"><a class="header-anchor" href="#_22-3-extends"><span>22.3 extends</span></a></h2>
<p><code v-pre>tsconfig.json</code>可以继承另一个<code v-pre>tsconfig.json</code>文件的配置。如果一个项目有多个配置，可以把共同的配置写成<code v-pre>tsconfig.base.json</code>，其他的配置文件继承该文件，这样便于维护和修改。</p>
<p><code v-pre>extends</code>属性用来指定所要继承的配置文件。它可以是本地文件。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"../tsconfig.base.json"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果<code v-pre>extends</code>属性指定的路径不是以<code v-pre>./</code>或<code v-pre>../</code>开头，那么编译器将在<code v-pre>node_modules</code>目录下查找指定的配置文件。</p>
<p><code v-pre>extends</code>属性也可以继承已发布的 npm 模块里面的 tsconfig 文件。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"@tsconfig/node12/tsconfig.json"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>extends</code>指定的<code v-pre>tsconfig.json</code>会先加载，然后加载当前的<code v-pre>tsconfig.json</code>。如果两者有重名的属性，后者会覆盖前者。</p>
<h2 id="_22-4-files" tabindex="-1"><a class="header-anchor" href="#_22-4-files"><span>22.4 files</span></a></h2>
<p><code v-pre>files</code>属性指定编译的文件列表，如果其中有一个文件不存在，就会报错。</p>
<p>它是一个数组，排在前面的文件先编译。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"a.ts"</span><span class="token punctuation">,</span> <span class="token string">"b.ts"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该属性必须逐一列出文件，不支持文件匹配。如果文件较多，建议使用<code v-pre>include</code>和<code v-pre>exclude</code>属性。</p>
<h2 id="_22-5-include" tabindex="-1"><a class="header-anchor" href="#_22-5-include"><span>22.5 include</span></a></h2>
<p><code v-pre>include</code>属性指定所要编译的文件列表，既支持逐一列出文件，也支持通配符。文件位置相对于当前配置文件而定。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/**/*"</span><span class="token punctuation">,</span> <span class="token string">"tests/**/*"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>include</code>属性支持三种通配符。</p>
<ul>
<li><code v-pre>?</code>：指代单个字符</li>
<li><code v-pre>*</code>：指代任意字符，不含路径分隔符</li>
<li><code v-pre>**</code>：指定任意目录层级。</li>
</ul>
<p>如果不指定文件后缀名，默认包括<code v-pre>.ts</code>、<code v-pre>.tsx</code>和<code v-pre>.d.ts</code>文件。如果打开了<code v-pre>allowJs</code>，那么还包括<code v-pre>.js</code>和<code v-pre>.jsx</code>。</p>
<h2 id="_22-6-references" tabindex="-1"><a class="header-anchor" href="#_22-6-references"><span>22.6 references</span></a></h2>
<p><code v-pre>references</code>属性是一个数组，数组成员为对象，适合一个大项目由许多小项目构成的情况，用来设置需要引用的底层项目。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"references"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">"../pkg1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token string-property property">"path"</span><span class="token operator">:</span> <span class="token string">"../pkg2/tsconfig.json"</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>references</code>数组成员对象的<code v-pre>path</code>属性，既可以是含有文件<code v-pre>tsconfig.json</code>的目录，也可以直接是该文件。</p>
<p>与此同时，引用的底层项目的<code v-pre>tsconfig.json</code>必须启用<code v-pre>composite</code>属性。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"composite"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_22-7-compileoptions" tabindex="-1"><a class="header-anchor" href="#_22-7-compileoptions"><span>22.7 compileOptions</span></a></h2>
<p><code v-pre>compilerOptions</code>属性用来定制编译行为。这个属性可以省略，这时编译器将使用默认设置。</p>
<ol>
<li>allowJs</li>
</ol>
<p><code v-pre>allowJs</code>允许 TypeScript 项目加载 JS 脚本。编译时，也会将 JS 文件，一起拷贝到输出目录。</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>alwaysStrict</li>
</ol>
<p><code v-pre>alwaysStrict</code>确保脚本以 ECMAScript 严格模式进行解析，因此脚本头部不用写<code v-pre>&quot;use strict&quot;</code>。它的值是一个布尔值，默认为<code v-pre>true</code>。</p>
<ol start="3">
<li>allowSyntheticDefaultImports</li>
</ol>
<p><code v-pre>allowSyntheticDefaultImports</code>允许<code v-pre>import</code>命令默认加载没有<code v-pre>default</code>输出的模块。</p>
<p>比如，打开这个设置，就可以写<code v-pre>import React from &quot;react&quot;;</code>，而不是<code v-pre>import * as React from &quot;react&quot;;</code>。</p>
<ol start="4">
<li>allowUnreachableCode</li>
</ol>
<p><code v-pre>allowUnreachableCode</code>设置是否允许存在不可能执行到的代码。它的值有三种可能。</p>
<ul>
<li><code v-pre>undefined</code>： 默认值，编辑器显示警告。</li>
<li><code v-pre>true</code>：忽略不可能执行到的代码。</li>
<li><code v-pre>false</code>：编译器报错。</li>
</ul>
<ol start="5">
<li>allowUnusedLabels</li>
</ol>
<p><code v-pre>allowUnusedLabels</code>设置是否允许存在没有用到的代码标签（label）。它的值有三种可能。</p>
<ul>
<li><code v-pre>undefined</code>： 默认值，编辑器显示警告。</li>
<li><code v-pre>true</code>：忽略没有用到的代码标签。</li>
<li><code v-pre>false</code>：编译器报错。</li>
</ul>
<ol start="6">
<li>baseUrl</li>
</ol>
<p><code v-pre>baseUrl</code>的值为字符串，指定 TypeScript 项目的基准目录。</p>
<p>由于默认是以 tsconfig.json 的位置作为基准目录，所以一般情况不需要使用该属性。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"./"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>baseUrl</code>为当前目录<code v-pre>./</code>。那么，当遇到下面的语句，TypeScript 将以<code v-pre>./</code>为起点，寻找<code v-pre>hello/world.ts</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> helloWorld <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"hello/world"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="7">
<li>checkJs</li>
</ol>
<p><code v-pre>checkJS</code>设置对 JS 文件同样进行类型检查。打开这个属性，也会自动打开<code v-pre>allowJs</code>。它等同于在 JS 脚本的头部添加<code v-pre>// @ts-check</code>命令。</p>
<p>json</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"checkJs"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li>composite</li>
</ol>
<p><code v-pre>composite</code>打开某些设置，使得 TypeScript 项目可以进行增量构建，往往跟<code v-pre>incremental</code>属性配合使用。</p>
<ol start="9">
<li>declaration</li>
</ol>
<p><code v-pre>declaration</code>设置编译时是否为每个脚本生成类型声明文件<code v-pre>.d.ts</code>。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"declaration"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10">
<li>declarationDir</li>
</ol>
<p><code v-pre>declarationDir</code>设置生成的<code v-pre>.d.ts</code>文件所在的目录。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"declaration"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"declarationDir"</span><span class="token operator">:</span> <span class="token string">"./types"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11">
<li>declarationMap</li>
</ol>
<p><code v-pre>declarationMap</code>设置生成<code v-pre>.d.ts</code>类型声明文件的同时，还会生成对应的 Source Map 文件。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"declaration"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"declarationMap"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12">
<li>emitBOM</li>
</ol>
<p><code v-pre>emitBOM</code>设置是否在编译结果的文件头添加字节顺序标志 BOM，默认值是<code v-pre>false</code>。</p>
<ol start="13">
<li>emitDeclarationOnly</li>
</ol>
<p><code v-pre>emitDeclarationOnly</code>设置编译后只生成<code v-pre>.d.ts</code>文件，不生成<code v-pre>.js</code>文件。</p>
<ol start="14">
<li>esModuleInterop</li>
</ol>
<p><code v-pre>esModuleInterop</code>修复了一些 CommonJS 和 ES6 模块之间的兼容性问题。</p>
<p>如果<code v-pre>module</code>属性为<code v-pre>node16</code>或<code v-pre>nodenext</code>，则<code v-pre>esModuleInterop</code>默认为<code v-pre>true</code>，其他情况默认为<code v-pre>false</code>。</p>
<p>打开这个属性，使用<code v-pre>import</code>命令加载 CommonJS 模块时，TypeScript 会严格检查兼容性问题是否存在。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">"moment"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，根据 ES6 规范，<code v-pre>import * as moment</code>里面的<code v-pre>moment</code>是一个对象，不能当作函数调用，所以第二行报错了。</p>
<p>解决方法就是改写上面的语句，改成加载默认接口。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">"moment"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>打开<code v-pre>esModuleInterop</code>以后，如果将上面的代码编译成 CommonJS 模块格式，就会加入一些辅助函数，保证编译后的代码行为正确。</p>
<p>注意，打开<code v-pre>esModuleInterop</code>，将自动打开<code v-pre>allowSyntheticDefaultImports</code>。</p>
<ol start="15">
<li>exactOptionalPropertyTypes</li>
</ol>
<p><code v-pre>exactOptionalPropertyTypes</code>设置可选属性不能赋值为<code v-pre>undefined</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// 打开 exactOptionalPropertyTypes</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">MyObj</span> <span class="token punctuation">{</span></span>
<span class="line">  foo<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">"A"</span> <span class="token operator">|</span> <span class="token string">"B"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> obj<span class="token operator">:</span> MyObj <span class="token operator">=</span> <span class="token punctuation">{</span> foo<span class="token operator">:</span> <span class="token string">"A"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">obj<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// 报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>foo</code>是可选属性，打开<code v-pre>exactOptionalPropertyTypes</code>以后，该属性就不能显式赋值为<code v-pre>undefined</code>。</p>
<ol start="16">
<li>forceConsistentCasingInFileNames</li>
</ol>
<p><code v-pre>forceConsistentCasingInFileNames</code>设置文件名是否为大小写敏感，默认为<code v-pre>true</code>。</p>
<ol start="17">
<li>incremental</li>
</ol>
<p><code v-pre>incremental</code>让 TypeScript 项目构建时产生文件<code v-pre>tsbuildinfo</code>，从而完成增量构建。</p>
<ol start="18">
<li>inlineSourceMap</li>
</ol>
<p><code v-pre>inlineSourceMap</code>设置将 SourceMap 文件写入编译后的 JS 文件中，否则会单独生成一个<code v-pre>.js.map</code>文件。</p>
<ol start="19">
<li>inlineSources</li>
</ol>
<p><code v-pre>inlineSources</code>设置将原始的<code v-pre>.ts</code>代码嵌入编译后的 JS 中。</p>
<p>它要求<code v-pre>sourceMap</code>或<code v-pre>inlineSourceMap</code>至少打开一个。</p>
<ol start="20">
<li>isolatedModules</li>
</ol>
<p><code v-pre>isolatedModules</code>设置如果当前 TypeScript 脚本作为单个模块编译，是否会因为缺少其他脚本的类型信息而报错，主要便于非官方的编译工具（比如 Babel）正确编译单个脚本。</p>
<ol start="21">
<li>jsx</li>
</ol>
<p><code v-pre>jsx</code>设置如何处理<code v-pre>.tsx</code>文件。它一般以下三个值。</p>
<ul>
<li><code v-pre>preserve</code>：保持 jsx 语法不变，输出的文件名为 jsx。</li>
<li><code v-pre>react</code>：将<code v-pre>&lt;div /&gt;</code>编译成<code v-pre>React.createElement(&quot;div&quot;)</code>，输出的文件名为<code v-pre>.js</code>。</li>
<li><code v-pre>react-native</code>：保持 jsx 语法不变，输出的文件后缀名为<code v-pre>.js</code>。</li>
</ul>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"jsx"</span><span class="token operator">:</span> <span class="token string">"preserve"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="22">
<li>lib</li>
</ol>
<p><code v-pre>lib</code>值是一个数组，描述项目需要加载的 TypeScript 内置类型描述文件，跟三斜线指令<code v-pre>/// &lt;reference lib=&quot;&quot; /&gt;</code>作用相同。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"dom"</span><span class="token punctuation">,</span> <span class="token string">"es2021"</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 内置的类型描述文件，主要有以下一些，完整的清单可以参考 <a href="https://github.com/microsoft/TypeScript/tree/main/src/lib" target="_blank" rel="noopener noreferrer">TypeScript 源码</a>。</p>
<ul>
<li>ES5</li>
<li>ES2015</li>
<li>ES6</li>
<li>ES2016</li>
<li>ES7</li>
<li>ES2017</li>
<li>ES2018</li>
<li>ES2019</li>
<li>ES2020</li>
<li>ES2021</li>
<li>ES2022</li>
<li>ESNex</li>
<li>DOM</li>
<li>WebWorker</li>
<li>ScriptHost</li>
</ul>
<ol start="23">
<li>listEmittedFiles</li>
</ol>
<p><code v-pre>listEmittedFiles</code>设置编译时在终端显示，生成了哪些文件。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"listEmittedFiles"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="24">
<li>listFiles</li>
</ol>
<p><code v-pre>listFiles</code>设置编译时在终端显示，参与本次编译的文件列表。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"listFiles"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="25">
<li>mapRoot</li>
</ol>
<p><code v-pre>mapRoot</code>指定 SourceMap 文件的位置，而不是默认的生成位置。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"mapRoot"</span><span class="token operator">:</span> <span class="token string">"https://my-website.com/debug/sourcemaps/"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="26">
<li>module</li>
</ol>
<p><code v-pre>module</code>指定编译产物的模块格式。它的默认值与<code v-pre>target</code>属性有关，如果<code v-pre>target</code>是<code v-pre>ES3</code>或<code v-pre>ES5</code>，它的默认值是<code v-pre>commonjs</code>，否则就是<code v-pre>ES6/ES2015</code>。</p>
<p>json</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"module"</span><span class="token operator">:</span> <span class="token string">"commonjs"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它可以取以下值：none、commonjs、amd、umd、system、es6/es2015、es2020、es2022、esnext、node16、nodenext。</p>
<ol start="27">
<li>moduleResolution</li>
</ol>
<p><code v-pre>moduleResolution</code>确定模块路径的算法，即如何查找模块。它可以取以下四种值。</p>
<ul>
<li><code v-pre>node</code>：采用 Node.js 的 CommonJS 模块算法。</li>
<li><code v-pre>node16</code>或<code v-pre>nodenext</code>：采用 Node.js 的 ECMAScript 模块算法，从 TypeScript 4.7 开始支持。</li>
<li><code v-pre>classic</code>：TypeScript 1.6 之前的算法，新项目不建议使用。</li>
</ul>
<p>它的默认值与<code v-pre>module</code>属性有关，如果<code v-pre>module</code>为<code v-pre>AMD</code>、<code v-pre>UMD</code>、<code v-pre>System</code>或<code v-pre>ES6/ES2015</code>，默认值为<code v-pre>classic</code>；如果<code v-pre>module</code>为<code v-pre>node16</code>或<code v-pre>nodenext</code>，默认值为这两个值；其他情况下,默认值为<code v-pre>Node</code>。</p>
<ol start="28">
<li>moduleSuffixes</li>
</ol>
<p><code v-pre>moduleSuffixes</code>指定模块的后缀名。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"moduleSuffixes"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".ios"</span><span class="token punctuation">,</span> <span class="token string">".native"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的设置使得 TypeScript 对于语句<code v-pre>import * as foo from &quot;./foo&quot;;</code>，会搜索以下脚本<code v-pre>./foo.ios.ts</code>、<code v-pre>./foo.native.ts</code>和<code v-pre>./foo.ts</code>。</p>
<ol start="29">
<li>newLine</li>
</ol>
<p><code v-pre>newLine</code>设置换行符为<code v-pre>CRLF</code>（Windows）还是<code v-pre>LF</code>（Linux）。</p>
<ol start="30">
<li>noEmit</li>
</ol>
<p><code v-pre>noEmit</code>设置是否产生编译结果。如果不生成，TypeScript 编译就纯粹作为类型检查了。</p>
<ol start="31">
<li>noEmitHelpers</li>
</ol>
<p><code v-pre>noEmitHelpers</code>设置在编译结果文件不插入 TypeScript 辅助函数，而是通过外部引入辅助函数来解决，比如 NPM 模块<code v-pre>tslib</code>。</p>
<ol start="32">
<li>noEmitOnError</li>
</ol>
<p><code v-pre>noEmitOnError</code>指定一旦编译报错，就不生成编译产物，默认为<code v-pre>false</code>。</p>
<ol start="33">
<li>noFallthroughCasesInSwitch</li>
</ol>
<p><code v-pre>noFallthroughCasesInSwitch</code>设置是否对没有<code v-pre>break</code>语句（或者<code v-pre>return</code>和<code v-pre>throw</code>语句）的 switch 分支报错，即<code v-pre>case</code>代码里面必须有终结语句（比如<code v-pre>break</code>）。</p>
<ol start="34">
<li>noImplicitAny</li>
</ol>
<p><code v-pre>noImplicitAny</code>设置当一个表达式没有明确的类型描述、且编译器无法推断出具体类型时，是否允许将它推断为<code v-pre>any</code>类型。</p>
<p>它是一个布尔值，默认为<code v-pre>true</code>，即只要推断出<code v-pre>any</code>类型就报错。</p>
<ol start="35">
<li>noImplicitReturns</li>
</ol>
<p><code v-pre>noImplicitReturns</code>设置是否要求函数任何情况下都必须返回一个值，即函数必须有<code v-pre>return</code>语句。</p>
<ol start="36">
<li>noImplicitThis</li>
</ol>
<p><code v-pre>noImplicitThis</code>设置如果<code v-pre>this</code>被推断为<code v-pre>any</code>类型是否报错。</p>
<ol start="37">
<li>noUnusedLocals</li>
</ol>
<p><code v-pre>noUnusedLocals</code>设置是否允许未使用的局部变量。</p>
<ol start="38">
<li>noUnusedParameters</li>
</ol>
<p><code v-pre>noUnusedParameters</code>设置是否允许未使用的函数参数。</p>
<ol start="39">
<li>outDir</li>
</ol>
<p><code v-pre>outDir</code>指定编译产物的存放目录。如果不指定，编译出来的<code v-pre>.js</code>文件存放在对应的<code v-pre>.ts</code>文件的相同位置。</p>
<ol start="40">
<li>outFile</li>
</ol>
<p><code v-pre>outFile</code>设置将所有非模块的全局文件，编译在同一个文件里面。它只有在<code v-pre>module</code>属性为<code v-pre>None</code>、<code v-pre>System</code>、<code v-pre>AMD</code>时才生效，并且不能用来打包 CommonJS 或 ES6 模块。</p>
<ol start="41">
<li>paths</li>
</ol>
<p><code v-pre>paths</code>设置模块名和模块路径的映射，也就是 TypeScript 如何导入<code v-pre>require</code>或<code v-pre>imports</code>语句加载的模块。</p>
<p><code v-pre>paths</code>基于<code v-pre>baseUrl</code>进行加载，所以必须同时设置后者。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"b"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"bar/b"</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它还可以使用通配符“*”。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"@bar/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"bar/*"</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="42">
<li>preserveConstEnums</li>
</ol>
<p><code v-pre>preserveConstEnums</code>将<code v-pre>const enum</code>结构保留下来，不替换成常量值。</p>
<p>javascript</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"preserveConstEnums"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="43">
<li>pretty</li>
</ol>
<p><code v-pre>pretty</code>设置美化输出终端的编译信息，默认为<code v-pre>true</code>。</p>
<ol start="44">
<li>removeComments</li>
</ol>
<p><code v-pre>removeComments</code>移除 TypeScript 脚本里面的注释，默认为<code v-pre>false</code>。</p>
<ol start="45">
<li>resolveJsonModule</li>
</ol>
<p><code v-pre>resolveJsonModule</code>允许 import 命令导入 JSON 文件。</p>
<ol start="46">
<li>rootDir</li>
</ol>
<p><code v-pre>rootDir</code>设置源码脚本所在的目录，主要跟编译后的脚本结构有关。<code v-pre>rootDir</code>对应目录下的所有脚本，会成为输出目录里面的顶层脚本。</p>
<ol start="47">
<li>rootDirs</li>
</ol>
<p><code v-pre>rootDirs</code>把多个不同目录，合并成一个目虚拟目录，便于模块定位。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"rootDirs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"bar"</span><span class="token punctuation">,</span> <span class="token string">"foo"</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，<code v-pre>rootDirs</code>将<code v-pre>bar</code>和<code v-pre>foo</code>组成一个虚拟目录。</p>
<ol start="48">
<li>sourceMap</li>
</ol>
<p><code v-pre>sourceMap</code>设置编译时是否生成 SourceMap 文件。</p>
<ol start="49">
<li>sourceRoot</li>
</ol>
<p><code v-pre>sourceRoot</code>在 SourceMap 里面设置 TypeScript 源文件的位置。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"sourceMap"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"sourceRoot"</span><span class="token operator">:</span> <span class="token string">"https://my-website.com/debug/source/"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="50">
<li>strict</li>
</ol>
<p><code v-pre>strict</code>用来打开 TypeScript 的严格检查。它的值是一个布尔值，默认是关闭的。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个设置相当于同时打开以下的一系列设置。</p>
<ul>
<li>alwaysStrict</li>
<li>strictNullChecks</li>
<li>strictBindCallApply</li>
<li>strictFunctionTypes</li>
<li>strictPropertyInitialization</li>
<li>noImplicitAny</li>
<li>noImplicitThis</li>
<li>useUnknownInCatchVaria</li>
</ul>
<p>打开<code v-pre>strict</code>的时候，允许单独关闭其中一项。</p>
<p>json</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"strict"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"alwaysStrict"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="51">
<li>strictBindCallApply</li>
</ol>
<p><code v-pre>strictBindCallApply</code>设置是否对函数的<code v-pre>call()</code>、<code v-pre>bind()</code>、<code v-pre>apply()</code>这三个方法进行类型检查。</p>
<p>如果不打开<code v-pre>strictBindCallApply</code>编译选项，编译器不会对以三个方法进行类型检查，参数类型都是<code v-pre>any</code>，传入任何参数都不会产生编译错误。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// strictBindCallApply:false</span></span>
<span class="line"><span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 以上不报错</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="52">
<li>strictFunctionTypes</li>
</ol>
<p><code v-pre>strictFunctionTypes</code>允许对函数更严格的参数检查。具体来说，如果函数 B 的参数是函数 A 参数的子类型，那么函数 B 不能替代函数 A。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> x<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">StringOrNumberFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>ns<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 打开 strictFunctionTypes，下面代码会报错</span></span>
<span class="line"><span class="token keyword">let</span> func<span class="token operator">:</span> StringOrNumberFunc <span class="token operator">=</span> fn<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，函数<code v-pre>fn()</code>的参数是<code v-pre>StringOrNumberFunc</code>参数的子集，因此<code v-pre>fn</code>不能替代<code v-pre>StringOrNumberFunc</code>。</p>
<ol start="53">
<li>strictNullChecks</li>
</ol>
<p><code v-pre>strictNullChecks</code>设置对<code v-pre>null</code>和<code v-pre>undefined</code>进行严格类型检查。如果打开<code v-pre>strict</code>属性，这一项就会自动设为<code v-pre>true</code>，否则为<code v-pre>false</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> value<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// strictNullChecks:false</span></span>
<span class="line"><span class="token comment">// 下面语句不报错</span></span>
<span class="line">value <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它可以理解成只要打开，就需要显式检查<code v-pre>null</code>或<code v-pre>undefined</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// do nothing</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello, "</span> <span class="token operator">+</span> x<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="54">
<li>strictPropertyInitialization</li>
</ol>
<p><code v-pre>strictPropertyInitialization</code>设置类的实例属性都必须初始化，包括以下几种情况。</p>
<ul>
<li>设为<code v-pre>undefined</code>类型</li>
<li>显式初始化</li>
<li>构造函数中赋值</li>
</ul>
<p>注意，使用该属性的同时，必须打开<code v-pre>strictNullChecks</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token comment">// strictPropertyInitialization：true</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 报错，属性 username 没有初始化</span></span>
<span class="line">  username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 解决方法一</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  username <span class="token operator">=</span> <span class="token string">"张三"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 解决方法二</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  username<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 解决方法三</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 或者</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 解决方法四：赋值断言</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span></span>
<span class="line">  username<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">private</span> <span class="token function">initialize</span><span class="token punctuation">(</span>username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>username <span class="token operator">=</span> username<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="55">
<li>suppressExcessPropertyErrors</li>
</ol>
<p><code v-pre>suppressExcessPropertyErrors</code>关闭对象字面量的多余参数的报错。</p>
<ol start="56">
<li>target</li>
</ol>
<p><code v-pre>target</code>指定编译出来的 JavaScript 代码的 ECMAScript 版本，比如<code v-pre>es2021</code>，默认是<code v-pre>es3</code>。</p>
<p>它可以取以下值。</p>
<ul>
<li>es3</li>
<li>es5</li>
<li>es6/es2015</li>
<li>es2016</li>
<li>es2017</li>
<li>es2018</li>
<li>es2019</li>
<li>es2020</li>
<li>es2021</li>
<li>es2022</li>
<li>esnext</li>
</ul>
<p>注意，如果编译的目标版本过老，比如<code v-pre>&quot;target&quot;: &quot;es3&quot;</code>，有些语法可能无法编译，<code v-pre>tsc</code>命令会报错。</p>
<ol start="57">
<li>traceResolution</li>
</ol>
<p><code v-pre>traceResolution</code>设置编译时，在终端输出模块解析的具体步骤。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"traceResolution"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="58">
<li>typeRoots</li>
</ol>
<p><code v-pre>typeRoots</code>设置类型模块所在的目录，默认是<code v-pre>node_modules/@types</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"typeRoots"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./typings"</span><span class="token punctuation">,</span> <span class="token string">"./vendor/types"</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="59">
<li>types</li>
</ol>
<p><code v-pre>types</code>设置<code v-pre>typeRoots</code>目录下需要包括在编译之中的类型模块。默认情况下，该目录下的所有类型模块，都会自动包括在编译之中。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"types"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"node"</span><span class="token punctuation">,</span> <span class="token string">"jest"</span><span class="token punctuation">,</span> <span class="token string">"express"</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="60">
<li>useUnknownInCatchVariables</li>
</ol>
<p><code v-pre>useUnknownInCatchVariables</code>设置<code v-pre>catch</code>语句捕获的<code v-pre>try</code>抛出的返回值类型，从<code v-pre>any</code>变成<code v-pre>unknown</code>。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">someExternalFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  err<span class="token punctuation">;</span> <span class="token comment">// 类型 any</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，默认情况下，<code v-pre>catch</code>语句的参数<code v-pre>err</code>类型是<code v-pre>any</code>，即可以是任何值。</p>
<p>打开<code v-pre>useUnknownInCatchVariables</code>以后，<code v-pre>err</code>的类型抛出的错误将是<code v-pre>unknown</code>类型。这带来的变化就是使用<code v-pre>err</code>之前，必须缩小它的类型，否则会报错。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">someExternalFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>err <span class="token keyword">instanceof</span> <span class="token class-name">Error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


