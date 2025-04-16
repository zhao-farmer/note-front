import{_ as a,c as n,b as t,o as l}from"./app-DzsfPIyd.js";const e="/note-front/style/htmlcss/html4/003.png",p="/note-front/style/htmlcss/html4/004.png",i="/note-front/style/htmlcss/html4/005.png",c="/note-front/style/htmlcss/html4/006.png",o="/note-front/style/htmlcss/html4/007.png",u={};function r(d,s){return l(),n("div",null,s[0]||(s[0]=[t('<h1 id="四、html-入门" tabindex="-1"><a class="header-anchor" href="#四、html-入门"><span>四、HTML 入门</span></a></h1><h2 id="_4-1-html-初体验" tabindex="-1"><a class="header-anchor" href="#_4-1-html-初体验"><span>4.1 HTML 初体验</span></a></h2><ol><li>第一步：鼠标右键 =&gt; 新建 =&gt; 文本文档 =&gt; 输入以下内容，并保存。</li><li>第二步：修改后缀为 .html ，然后双击打开即可。 <ul><li>这里的后缀名，使用 .htm 也可以，但推荐使用更标准的 .html 。</li></ul></li><li>程序员写的叫 源代码，要交给浏览器进行渲染。</li><li>借助浏览器看网页的 源代码，具体操作： <ul><li>在网页空白处：鼠标右键 ==&gt; 查看网页源代码</li></ul></li></ol><h2 id="_4-2-html-标签" tabindex="-1"><a class="header-anchor" href="#_4-2-html-标签"><span>4.2 HTML 标签</span></a></h2><ol><li>标签 又称 元素，是HTML的基本组成单位。</li><li>标签分为：双标签 与 单标签 （绝大多数都是双标签）。</li><li>标签名不区分大小写，但推荐小写，因为小写更规范。</li><li>双标签：</li></ol><p><img src="'+e+`" alt=""></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span><span class="token punctuation">&gt;</span></span>尚硅谷，让天下没有难学的技术！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="5"><li>单标签：</li></ol><p><img src="`+p+`" alt=""></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="6"><li>标签之间的关系：并列关系、嵌套关系，可以使用 tab 键进行缩进：</li></ol><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  尚硅谷，让天下没有难学的技术！</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-3-html-标签属性" tabindex="-1"><a class="header-anchor" href="#_4-3-html-标签属性"><span>4.3 HTML 标签属性</span></a></h2><ol><li>用于给标签提供 附加信息。</li><li>可以写在：起始标签 或 单标签中，形式如下：</li></ol><p><img src="`+i+`" alt=""></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">bgcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>orange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>尚硅谷，让天下没有难学的技术!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>有些特殊的属性，没有属性名，只有属性值，例如：</li></ol><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>注意点： <ul><li>不同的标签，有不同的属性；也有一些通用属性（在任何标签内都能写，后面会详细总结）。</li><li>属性名、属性值不能乱写，都是W3C规定好的。</li><li>属性名、属性值，都不区分大小写，但推荐小写。</li><li>双引号，也可以写成单引号，甚至不写都行，但还是推荐写双引号。</li><li>标签中不要出现同名属性，否则后写的会失效，例如：</li></ul></li></ol><h2 id="_4-4、html-基本结构" tabindex="-1"><a class="header-anchor" href="#_4-4、html-基本结构"><span>4.4、HTML 基本结构</span></a></h2><ol><li><p>在网页中，如何查看某段结构的具体代码？—— 点击鼠标右键，选择“检查”。</p></li><li><p>【检查】 和 【查看网页源代码】的区别：</p><ul><li>【查看网页源代码】看到的是：程序员编写的源代码。</li><li>【检查】看到的是：经过浏览器 “处理” 后的源代码。</li><li>备注：日常开发中，【检查】用的最多。</li></ul></li><li><p>网页的 基本结构 如下：</p><ul><li>想要呈现在网页中的内容写在 body 标签中。</li><li>head 标签中的内容不会出现在网页中。</li><li>head 标签中的 title 标签可以指定网页的标题。</li><li>图示：</li></ul><p><img src="`+c+`" alt=""></p><ul><li>代码：</li></ul><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>网页标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    ......</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_4-5-安装-vscode" tabindex="-1"><a class="header-anchor" href="#_4-5-安装-vscode"><span>4.5 安装 VSCode</span></a></h2><ol><li>安装中文语言包。</li><li>使用 VSCode打开文件夹的两种方式。</li><li>调整字体大小。</li><li>设置主题。</li><li>安装图标主题： vscode-icons 。</li></ol><h2 id="_4-6-安装-live-server-插件" tabindex="-1"><a class="header-anchor" href="#_4-6-安装-live-server-插件"><span>4.6 安装 Live Server 插件</span></a></h2><ol><li>可以更加方便的打开网页。</li><li>打开网页的方式更贴近项目上线。</li><li>代码出现改动后，可以自动刷新。</li><li>根据自己的情况，去配置一下 VSCode 的自动保存。</li></ol><blockquote><ul><li>注意1：务必使用VSCode打开的是文件夹，否则 Live Server 插件无法正常工作！</li><li>注意2：打开的网页必须是标准的HTML结构，否则无法自动刷新！</li></ul></blockquote><h2 id="_4-7-html-注释" tabindex="-1"><a class="header-anchor" href="#_4-7-html-注释"><span>4.7 HTML 注释</span></a></h2><ol><li>特点：注释的内容会被浏览器所忽略，不会呈现到页面中，但源代码中依然可见。</li><li>作用：对代码进行解释和说明。</li><li>写法：</li></ol><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token comment">&lt;!-- 下面的文字只能滚动一次 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span> <span class="token attr-name">loop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>尚硅谷<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 下面的文字可以无限滚动 --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>marquee</span><span class="token punctuation">&gt;</span></span>尚硅谷123<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>marquee</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>注释不可以嵌套，以下这么写是错的（反例）。</li></ol><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!--我是一段注释</span></span>
<span class="line"><span class="token attr-name">&lt;!--</span> <span class="token attr-name">我是一段注释</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">--&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-8-html-文档声明" tabindex="-1"><a class="header-anchor" href="#_4-8-html-文档声明"><span>4.8 HTML 文档声明</span></a></h2><ol><li>作用：告诉浏览器当前网页的版本。</li><li>写法： <ul><li><p>旧写法：要依网页所用的HTML版本而定，写法有很多。 具体有哪些写法请参考 ：W3C官网-文档声明（了解即可，千万别背！）</p></li><li><p>新写法：一切都变得简单了！W3C 推荐使用 HTML 5 的写法。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li><li>注意：文档声明，必须在网页的第一行，且在 html 标签的外侧。</li></ol><h2 id="_4-9-html-字符编码" tabindex="-1"><a class="header-anchor" href="#_4-9-html-字符编码"><span>4.9 HTML 字符编码</span></a></h2><ol><li><p>计算机对数据的操作： 存储时，对数据进行：编码。 读取时，对数据进行：解码。</p></li><li><p>编码、解码，会遵循一定的规范 —— 字符集。</p></li><li><p>字符集有很多中，常见的有（了解）：</p><ul><li>ASCII ：大写字母、小写字母、数字、一些符号，共计128个。</li><li>ISO 8859-1 ：在 ASCII 基础上，扩充了一些希腊字符等，共计是256个。</li><li>GB2312 ：继续扩充，收录了 6763 个常用汉字、682个字符。</li><li>GBK ：收录了的汉字和符号达到 20000+ ，支持繁体中文。</li><li>UTF-8 ：包含世界上所有语言的：所有文字与符号。—— 很常用。</li></ul></li><li><p>使用原则是怎样的？</p><ul><li><p>原则1：存储时，务必采用合适的字符编码 。 否则：无法存储，数据会丢失！</p></li><li><p>原则2：存储时采用哪种方式编码 ，读取时就采用哪种方式解码。 否则：数据错乱（乱码）！</p></li><li><p>例如下面文字中，包含有：中文、英文、泰文、缅甸文</p></li></ul><p><img src="`+o+`" alt=""></p><blockquote><ul><li>若使用 ISO8859-1 编码存储，在存入的那一刻，就出问题了，因为 ISO8859-1 仅支持英 文！</li><li>为保证所有的输入，都能正常存储和读取，现在几乎全都采用： UFT-8 编码。</li><li>所以我们编写 html 文件时，也都统一用 UFT-8 编码。</li></ul></blockquote></li><li><p>总结：</p><ul><li>平时编写代码时，统一采用 UTF-8 编码（最稳妥）。</li><li>为了让浏览器在渲染 html 文件时，不犯错误，可以通过 meta 标签配合 charset 属性指 定字符编码。</li></ul><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_4-10-html-设置语言" tabindex="-1"><a class="header-anchor" href="#_4-10-html-设置语言"><span>4.10 HTML 设置语言</span></a></h2><ol><li>主要作用： <ul><li>让浏览器显示对应的翻译提示。</li><li>有利于搜索引擎优化。</li></ul></li><li>具体写法：</li></ol><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>扩展知识： lang 属性的编写规则（作为一个课外扩展知识，了解即可）。 <ul><li>第一种写法（ 语言-国家/地区 ），例如： <ul><li>zh-CN ：中文-中国大陆（简体中文）</li><li>zh-TW ：中文-中国台湾（繁体中文）</li><li>zh ：中文 en-US ：英语-美国</li><li>en-GB ：英语-英国</li></ul></li><li>第二种写法（ 语言—具体种类）已不推荐使用，例如： <ul><li>zh-Hans ：中文—简体</li><li>zh-Hant ：中文—繁体</li></ul></li><li>W3School 上的说明：《语言代码参考手册》、《国家/地区代码参考手册》</li><li>W3C官网上的说明：《Language tags in HTML》</li></ul></li></ol><h2 id="_4-11-html标准结构" tabindex="-1"><a class="header-anchor" href="#_4-11-html标准结构"><span>4.11 HTML标准结构</span></a></h2><ol><li>HTML标准结构如下：</li></ol><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line">    <span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>我是一个标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>输入 <code>!</code> ，随后回车即可快速生成标准结构。 生成的结构中，有两个meta标签，我们暂时用不到，可以先删掉。</li><li>配置 VScode 的内置插件 emmet ，可以对生成结构的属性进行定制。</li><li>在存放代码的文件夹中，存放一个 favicon.ico 图片，可配置网站图标。</li></ol>`,43)]))}const h=a(u,[["render",r],["__file","04.html.vue"]]),k=JSON.parse('{"path":"/style/base_htmlcss/html4/04.html","title":"四、HTML 入门","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"4.1 HTML 初体验","slug":"_4-1-html-初体验","link":"#_4-1-html-初体验","children":[]},{"level":2,"title":"4.2 HTML 标签","slug":"_4-2-html-标签","link":"#_4-2-html-标签","children":[]},{"level":2,"title":"4.3 HTML 标签属性","slug":"_4-3-html-标签属性","link":"#_4-3-html-标签属性","children":[]},{"level":2,"title":"4.4、HTML 基本结构","slug":"_4-4、html-基本结构","link":"#_4-4、html-基本结构","children":[]},{"level":2,"title":"4.5 安装 VSCode","slug":"_4-5-安装-vscode","link":"#_4-5-安装-vscode","children":[]},{"level":2,"title":"4.6 安装 Live Server 插件","slug":"_4-6-安装-live-server-插件","link":"#_4-6-安装-live-server-插件","children":[]},{"level":2,"title":"4.7 HTML 注释","slug":"_4-7-html-注释","link":"#_4-7-html-注释","children":[]},{"level":2,"title":"4.8 HTML 文档声明","slug":"_4-8-html-文档声明","link":"#_4-8-html-文档声明","children":[]},{"level":2,"title":"4.9  HTML 字符编码","slug":"_4-9-html-字符编码","link":"#_4-9-html-字符编码","children":[]},{"level":2,"title":"4.10 HTML 设置语言","slug":"_4-10-html-设置语言","link":"#_4-10-html-设置语言","children":[]},{"level":2,"title":"4.11 HTML标准结构","slug":"_4-11-html标准结构","link":"#_4-11-html标准结构","children":[]}],"git":{"updatedTime":1744806830000,"contributors":[{"name":"zhao-farmer","username":"zhao-farmer","email":"857899180@qq.com","commits":1,"url":"https://github.com/zhao-farmer"}]},"filePathRelative":"style/base_htmlcss/html4/04.md"}');export{h as comp,k as data};
