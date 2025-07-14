<template><div><h1 id="html中input输入框" tabindex="-1"><a class="header-anchor" href="#html中input输入框"><span>HTML中input输入框</span></a></h1>
<h2 id="_1、input介绍" tabindex="-1"><a class="header-anchor" href="#_1、input介绍"><span>1、input介绍</span></a></h2>
<h3 id="_1-1-概念" tabindex="-1"><a class="header-anchor" href="#_1-1-概念"><span>1.1 概念</span></a></h3>
<p><code v-pre>&lt;input&gt;</code> 元素是HTML表单中最常见的元素之一，用于收集用户的输入数据。它可以包含多种类型的输入，如文本、密码、数字等。通过指定不同的 type 属性，可以定义不同类型的输入字段。</p>
<h3 id="_1-2-好处" tabindex="-1"><a class="header-anchor" href="#_1-2-好处"><span>1.2 好处</span></a></h3>
<ol>
<li>用户输入收集： <code v-pre>&lt;input&gt;</code> 元素允许网站收集用户输入的信息，例如注册表单、搜索框等。</li>
<li>表单交互： 它是构建交互式表单的基础，可以创建用户可以填写、提交和交互的表单。</li>
<li>数据传输： 用户在输入框中输入的数据可以通过表单提交到服务器，用于处理或保存数据。</li>
</ol>
<h3 id="_1-3-用法" tabindex="-1"><a class="header-anchor" href="#_1-3-用法"><span>1.3 用法</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 示例：创建一个文本输入框 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入用户名<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>type 属性指定输入框的类型，如文本、密码、数字等。</li>
<li>name 属性定义输入框的名称，用于标识提交的数据。</li>
<li>placeholder 属性定义输入框中的提示文本。</li>
</ul>
<h3 id="_1-4-应用" tabindex="-1"><a class="header-anchor" href="#_1-4-应用"><span>1.4 应用</span></a></h3>
<ul>
<li>注册表单： 用户输入用户名、密码等信息进行注册。</li>
<li>搜索框： 用户在搜索框中输入关键词进行网页搜索。</li>
<li>联系表单： 用户输入姓名、电子邮件、消息等信息与网站联系。</li>
<li>用户反馈： 用户输入反馈或评论的文本信息。</li>
</ul>
<h2 id="_2、input语法" tabindex="-1"><a class="header-anchor" href="#_2、input语法"><span>2、input语法</span></a></h2>
<table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>disabled</td>
<td>规定输入字段是禁用的</td>
</tr>
<tr>
<td>max</td>
<td>规定允许的最大值</td>
</tr>
<tr>
<td>maxlength</td>
<td>规定输入字段的最大字符长度</td>
</tr>
<tr>
<td>min</td>
<td>规定允许的最小值</td>
</tr>
<tr>
<td>pattern</td>
<td>规定用于验证输入字段的模式</td>
</tr>
<tr>
<td>readonly</td>
<td>规定输入字段的值无法修改</td>
</tr>
<tr>
<td>required</td>
<td>规定输入字段的值是必需的</td>
</tr>
<tr>
<td>size</td>
<td>规定输入字段中的可见字符数</td>
</tr>
<tr>
<td>step</td>
<td>规定输入字段的合法数字间隔</td>
</tr>
<tr>
<td>value</td>
<td>规定输入字段的默认值</td>
</tr>
</tbody>
</table>
<h3 id="_2-1-文本输入框-type-text" tabindex="-1"><a class="header-anchor" href="#_2-1-文本输入框-type-text"><span>2.1 文本输入框 (type=&quot;text&quot;)</span></a></h3>
<ul>
<li>用途：接受用户输入任意文本。</li>
<li>属性：
<ul>
<li>maxlength：限制输入的最大字符数。</li>
<li>size：定义输入框的宽度，以字符数为单位。</li>
<li>autocomplete：指定是否启用输入框的自动完成功能。</li>
</ul>
</li>
</ul>
<h3 id="_2-2-密码输入框-type-password" tabindex="-1"><a class="header-anchor" href="#_2-2-密码输入框-type-password"><span>2.2 密码输入框 (type=&quot;password&quot;)</span></a></h3>
<ul>
<li>用途：用于接受用户输入的密码，输入内容将被隐藏。</li>
<li>属性：与文本输入框相同。</li>
</ul>
<h3 id="_2-3-数字输入框-type-number" tabindex="-1"><a class="header-anchor" href="#_2-3-数字输入框-type-number"><span>2.3 数字输入框 (type=&quot;number&quot;)</span></a></h3>
<ul>
<li>用途：接受数值输入。</li>
<li>属性：
<ul>
<li>min：定义可接受的最小值。</li>
<li>max：定义可接受的最大值。</li>
<li>step：定义增量（用户点击上下箭头时的增量）。</li>
</ul>
</li>
</ul>
<h3 id="_2-4-电子邮件输入框-type-email" tabindex="-1"><a class="header-anchor" href="#_2-4-电子邮件输入框-type-email"><span>2.4 电子邮件输入框 (type=&quot;email&quot;)</span></a></h3>
<ul>
<li>用途：接受电子邮件地址输入，浏览器会验证输入是否符合电子邮件格式。</li>
<li>属性：与文本输入框相同。</li>
</ul>
<h3 id="_2-5-复选框-type-checkbox" tabindex="-1"><a class="header-anchor" href="#_2-5-复选框-type-checkbox"><span>2.5 复选框 (type=&quot;checkbox&quot;)</span></a></h3>
<ul>
<li>用途：允许用户从多个选项中选择一个或多个选项。</li>
<li>属性：
<ul>
<li>value：定义复选框的值。</li>
<li>checked：定义复选框是否默认选中。</li>
</ul>
</li>
</ul>
<h3 id="_2-6-单选按钮-type-radio" tabindex="-1"><a class="header-anchor" href="#_2-6-单选按钮-type-radio"><span>2.6 单选按钮 (type=&quot;radio&quot;)</span></a></h3>
<ul>
<li>用途：允许用户在一组选项中选择一个选项。</li>
<li>属性：与复选框相同。</li>
</ul>
<h3 id="_2-7-文件上传-type-file" tabindex="-1"><a class="header-anchor" href="#_2-7-文件上传-type-file"><span>2.7 文件上传 (type=&quot;file&quot;)</span></a></h3>
<ul>
<li>用途：允许用户选择上传文件。</li>
<li>属性：
<ul>
<li>accept：定义可接受的文件类型。</li>
<li>multiple：定义是否允许上传多个文件。</li>
</ul>
</li>
</ul>
<h3 id="_2-8-隐藏字段-type-hidden" tabindex="-1"><a class="header-anchor" href="#_2-8-隐藏字段-type-hidden"><span>2.8 隐藏字段 (type=&quot;hidden&quot;)</span></a></h3>
<ul>
<li>用途：用于在表单中存储不希望用户看到或修改的值，通常用于服务器端处理。</li>
</ul>
<h3 id="_2-9-color类型" tabindex="-1"><a class="header-anchor" href="#_2-9-color类型"><span>2.9 color类型</span></a></h3>
<p>color 类型用在input字段主要用于选取颜色，如下所示：</p>
<p>实例：从拾色器中选择一个颜色:</p>
<p>选择你喜欢的颜色:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>favcolor<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-10-data类型" tabindex="-1"><a class="header-anchor" href="#_2-10-data类型"><span>2.10 data类型</span></a></h3>
<p>date 类型允许你从一个日期选择器选择一个日期。</p>
<p>实例：定义一个时间控制器:</p>
<p>生日:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bday<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-11-datatime类型" tabindex="-1"><a class="header-anchor" href="#_2-11-datatime类型"><span>2.11 datatime类型</span></a></h3>
<p>datetime 类型允许你选择一个日期（UTC 时间）。</p>
<p>实例：定义一个日期和时间控制器（本地时间）:</p>
<p>生日 (日期和时间):</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>datetime<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bdaytime<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-12-datetime-local类型" tabindex="-1"><a class="header-anchor" href="#_2-12-datetime-local类型"><span>2.12 datetime-local类型</span></a></h3>
<p>datetime-local 类型允许你选择一个日期和时间 (无时区).</p>
<p>实例：定义一个日期和时间 (无时区):</p>
<p>生日 (日期和时间):</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>datetime-local<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bdaytime<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-13-month类型" tabindex="-1"><a class="header-anchor" href="#_2-13-month类型"><span>2.13 month类型</span></a></h3>
<p>month 类型允许你选择一个月份。</p>
<p>实例：定义月与年 (无时区):</p>
<p>生日 (月和年):</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>month<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bdaymonth<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-14-range类型" tabindex="-1"><a class="header-anchor" href="#_2-14-range类型"><span>2.14 range类型</span></a></h3>
<p>range 类型用于应该包含一定范围内数字值的输入域。</p>
<p>range 类型显示为滑动条。</p>
<p>实例：定义一个不需要非常精确的数值（类似于滑块控制）:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>range<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>points<span class="token punctuation">"</span></span> <span class="token attr-name">min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>max - 规定允许的最大值</li>
<li>min - 规定允许的最小值</li>
<li>step - 规定合法的数字间隔</li>
<li>value - 规定默认值</li>
</ul>
<h3 id="_2-15-search类型" tabindex="-1"><a class="header-anchor" href="#_2-15-search类型"><span>2.15 search类型</span></a></h3>
<p>search 类型用于搜索域，比如站点搜索或 Google 搜索。</p>
<p>实例：定义一个搜索字段 (类似站点搜索或者Google搜索):</p>
<p>Search Google:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>googlesearch<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-16-tel类型" tabindex="-1"><a class="header-anchor" href="#_2-16-tel类型"><span>2.16 tel类型</span></a></h3>
<p>定义输入电话号码字段:</p>
<p>电话号码:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>usrtel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-17-url类型" tabindex="-1"><a class="header-anchor" href="#_2-17-url类型"><span>2.17 url类型</span></a></h3>
<p>url 类型用于应该包含 URL 地址的输入域。</p>
<p>在提交表单时，会自动验证 url 域的值。</p>
<p>定义输入URL字段:</p>
<p>添加您的主页:</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>url<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>homepage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_3、实例" tabindex="-1"><a class="header-anchor" href="#_3、实例"><span>3、实例</span></a></h2>
<h3 id="_3-1-用户名和密码登录" tabindex="-1"><a class="header-anchor" href="#_3-1-用户名和密码登录"><span>3.1 用户名和密码登录</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Username:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>username<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"> </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Password:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"> </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-多步骤表单" tabindex="-1"><a class="header-anchor" href="#_3-2-多步骤表单"><span>3.2 多步骤表单</span></a></h3>
<p>展示了一个多步骤的表单，用户需要在第一步填写个人信息，然后点击“Next”按钮转到第二步填写地址信息，最后点击“Submit”按钮提交表单。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">></span></span>Step 1: Personal Information<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Name:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span></span>
<span class="line"> </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Email:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">nextStep</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Next<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">></span></span></span>
<span class="line"> </span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fieldset</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>step2<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>legend</span><span class="token punctuation">></span></span>Step 2: Address Information<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>legend</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Address:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>address<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">prevStep</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Previous<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">submitForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fieldset</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line"> </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">nextStep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'step2'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'block'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">prevStep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'step2'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">submitForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 实现表单提交逻辑</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-动态添加输入字段" tabindex="-1"><a class="header-anchor" href="#_3-3-动态添加输入字段"><span>3.3 动态添加输入字段</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dynamic-form<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>input-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 这里将动态添加输入字段 --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">addInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Add Input<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Submit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span></span>
<span class="line"> </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">let</span> counter <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">addInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'input-container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    input<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">'text'</span><span class="token punctuation">;</span></span>
<span class="line">    input<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'input_'</span> <span class="token operator">+</span> counter<span class="token punctuation">;</span></span>
<span class="line">    input<span class="token punctuation">.</span>placeholder <span class="token operator">=</span> <span class="token string">'Input '</span> <span class="token operator">+</span> counter<span class="token punctuation">;</span></span>
<span class="line">    container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    counter<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示了一个表单，用户可以点击“Add Input”按钮动态添加文本输入字段。每次点击按钮都会添加一个新的输入字段。</p>
<h3 id="_3-4-带有自动完成功能的输入字段" tabindex="-1"><a class="header-anchor" href="#_3-4-带有自动完成功能的输入字段"><span>3.4 带有自动完成功能的输入字段</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Search:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search<span class="token punctuation">"</span></span> <span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>suggestions<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>suggestions<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Apple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Banana<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Orange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Pineapple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示了一个带有自动完成功能的文本输入字段。用户在输入时会显示一个下拉列表，提供可能的建议选项。</p>
<h2 id="_4、总结" tabindex="-1"><a class="header-anchor" href="#_4、总结"><span>4、总结</span></a></h2>
<ol>
<li>类型（type）属性：
<ul>
<li>定义输入字段的类型，如文本框、密码框、单选按钮、复选框等。</li>
<li>常见类型包括 text、password、radio、checkbox、file 等。</li>
</ul>
</li>
<li>名称（name）属性：
<ul>
<li>用于标识输入字段的名称，以便在表单提交时能够将数据传输到服务器。</li>
<li>对于单选按钮和复选框，相同名称的一组按钮被视为一个组，只能选择其中的一个或多个。</li>
</ul>
</li>
<li>值（value）属性：
<ul>
<li>用于指定输入字段的值，例如文本输入框中的默认文本、单选按钮和复选框的选项等。</li>
</ul>
</li>
<li>必填（required）属性：
<ul>
<li>指定输入字段是否必须填写才能提交表单。</li>
<li>对于必填字段，如果用户未填写，提交表单时会出现警告。</li>
</ul>
</li>
<li>占位符（placeholder）属性：
<ul>
<li>提供输入字段中的占位符文本，用于指示用户应该输入的内容。</li>
</ul>
</li>
<li>最小值（min）和最大值（max）属性（对于类型为数字的输入字段）：
<ul>
<li>限制用户输入的数字范围。</li>
</ul>
</li>
<li>列表（list）属性（对于类型为文本的输入字段）：
<ul>
<li>关联一个 <code v-pre>&lt;datalist&gt;</code> 元素，提供可能的自动完成选项。</li>
</ul>
</li>
<li>禁用（disabled）属性：
<ul>
<li>用于禁用输入字段，使其不可编辑或不可选择。</li>
</ul>
</li>
<li>自动聚焦（autofocus）属性：
<ul>
<li>在页面加载时自动将焦点设置到输入字段，使用户无需手动点击即可开始输入。</li>
</ul>
</li>
</ol>
</div></template>


