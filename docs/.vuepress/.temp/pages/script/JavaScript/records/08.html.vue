<template><div><h1 id="_08-sessionstorage-与-localstorage" tabindex="-1"><a class="header-anchor" href="#_08-sessionstorage-与-localstorage"><span>08 sessionStorage 与 localStorage</span></a></h1>
<h2 id="_1-引言" tabindex="-1"><a class="header-anchor" href="#_1-引言"><span>1. 引言</span></a></h2>
<p>在 Web 开发中，浏览器提供了多种方式来存储数据，其中 sessionStorage 和 localStorage 是两种常用的存储机制。它们都允许 JavaScript 网站和应用在用户的浏览器中存储数据，但它们在存储数据的生命周期和作用域上有所不同。本文将深入探讨 sessionStorage 与 localStorage 的使用差异，帮助开发者更好地理解并选择合适的存储方案。</p>
<h2 id="_2-基本概念" tabindex="-1"><a class="header-anchor" href="#_2-基本概念"><span>2. 基本概念</span></a></h2>
<ol>
<li>sessionStorage 简介</li>
</ol>
<p>sessionStorage 用于临时保存同一窗口（或标签页）的数据，当页面会话结束（即窗口或标签页被关闭）时，数据会被清除。这种存储方式适用于临时保存只需要在当前会话中使用的数据。</p>
<ol start="2">
<li>localStorage 简介</li>
</ol>
<p>localStorage 则提供了更持久的存储方式，除非网页被明确清除，否则数据会永久保存在浏览器中。它适用于长期存储数据，如用户的偏好设置、登录状态等。</p>
<p>以下是一个简单的示例，展示了如何使用 sessionStorage 和 localStorage。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 设置sessionStorage和localStorage</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'sessionKey'</span><span class="token punctuation">,</span> <span class="token string">'sessionValue'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'localKey'</span><span class="token punctuation">,</span> <span class="token string">'localValue'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取sessionStorage和localStorage</span></span>
<span class="line"><span class="token keyword">const</span> sessionData <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'sessionKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> localData <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'localKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 打印数据</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sessionData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: sessionValue</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localData<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: localValue</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 清除sessionStorage</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'sessionKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 清除localStorage</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'localKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-存储特性" tabindex="-1"><a class="header-anchor" href="#_3-存储特性"><span>3. 存储特性</span></a></h2>
<ol>
<li>数据生命周期</li>
</ol>
<p>sessionStorage 的数据生命周期仅限于当前会话，当用户关闭浏览器窗口或标签页时，数据将被清除。而 localStorage 的数据生命周期是长期的，直到用户手动清除或者通过代码删除。</p>
<ol start="2">
<li>存储限制</li>
</ol>
<p>两者都有存储限制，大多数浏览器的存储容量限制为 5MB。但是，这个限制可能会根据不同的浏览器和用户的具体设置而有所不同。</p>
<ol start="3">
<li>作用域</li>
</ol>
<p>sessionStorage 和 localStorage 都具有特定的作用域，它们只能被同源（相同的协议、域名和端口）下的页面访问。不过，sessionStorage 的数据仅在创建它的页面或标签页内可访问，而 localStorage 的数据可以被同一域下的所有页面访问。</p>
<p>以下是一个示例，展示了如何设置和获取 sessionStorage 和 localStorage 中的数据，并演示了它们的生命周期特性。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 设置数据</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'sessionKey'</span><span class="token punctuation">,</span> <span class="token string">'sessionValue'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'localKey'</span><span class="token punctuation">,</span> <span class="token string">'localValue'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在新标签页中访问数据，将看到localStorage的数据，但sessionStorage的数据可能不存在</span></span>
<span class="line"><span class="token keyword">const</span> sessionData <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'sessionKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> localData <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'localKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 打印数据</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sessionData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可能输出: null（如果是在新标签页中）</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localData<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出: localValue</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 关闭当前标签页或窗口，再次打开时，sessionStorage的数据将不存在</span></span>
<span class="line"><span class="token comment">// 而localStorage的数据仍然存在</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-存储容量限制" tabindex="-1"><a class="header-anchor" href="#_4-存储容量限制"><span>4. 存储容量限制</span></a></h2>
<p>sessionStorage 和 localStorage 虽然为 Web 应用提供了方便的数据存储方式，但它们都受到存储容量的限制。大多数现代浏览器为每个域设置了大约 5MB 的存储容量限制，但这个限制并不是固定的，它可能会根据不同的浏览器和用户的具体设置有所变化。</p>
<ol>
<li>存储容量限制的影响</li>
</ol>
<p>当存储容量达到限制时，任何试图添加新数据的操作都会失败，并且可能会抛出一个 QuotaExceededError 错误。因此，开发者在设计应用时需要考虑到这一点，确保应用程序能够优雅地处理存储空间不足的情况。</p>
<ol start="2">
<li>检查存储容量</li>
</ol>
<p>开发者可以使用 navigator.webkitPersistentStorage 或 navigator.webkitTemporaryStorage 的 queryUsageAndQuota 方法来检查当前的使用情况和配额（这些 API 通常是 Webkit 内核特有的，如 Chrome 和 Safari 浏览器）。</p>
<p>以下是一个示例代码，展示了如何检查 localStorage 的使用情况：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">navigator<span class="token punctuation">.</span>webkitPersistentStorage<span class="token punctuation">.</span><span class="token function">queryUsageAndQuota</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">usage<span class="token punctuation">,</span> quota</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Used:'</span><span class="token punctuation">,</span> usage<span class="token punctuation">,</span> <span class="token string">'bytes'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Total quota:'</span><span class="token punctuation">,</span> quota<span class="token punctuation">,</span> <span class="token string">'bytes'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>处理存储空间不足</li>
</ol>
<p>当存储空间不足时，开发者可以采取以下措施：</p>
<ul>
<li>清除不再需要的数据。</li>
<li>提醒用户数据存储空间不足，并建议用户手动清理。</li>
<li>使用 IndexedDB，它提供了更大的存储空间和更复杂的数据管理能力。</li>
<li>开发者应该在设计应用时考虑到存储容量限制，并确保应用程序能够适应这些限制。</li>
</ul>
<h2 id="_5-访问权限" tabindex="-1"><a class="header-anchor" href="#_5-访问权限"><span>5. 访问权限</span></a></h2>
<ol>
<li>访问权限概述</li>
</ol>
<p>sessionStorage 和 localStorage 都遵循同源策略，这意味着它们只能被同一协议、域名和端口的页面访问。然而，尽管它们都遵循这一基本策略，但在具体的访问权限上仍有一些差异。</p>
<ol start="2">
<li>sessionStorage 的访问权限</li>
</ol>
<p>sessionStorage 的数据只能被创建它的页面或标签页访问。这意味着如果你在一个标签页中保存了一些数据到 sessionStorage，这些数据不能被同一域下的其他标签页或窗口访问。这种限制确保了数据的隔离性，适用于不需要跨标签页共享的数据。</p>
<ol start="3">
<li>localStorage 的访问权限</li>
</ol>
<p>与 sessionStorage 不同，localStorage 的数据可以被同一域下的所有页面访问。这意味着一旦数据被存储，任何同一域下的页面都可以读取和修改这些数据，这对于需要跨页面或标签页共享数据的应用程序来说非常有用。</p>
<p>以下是一个示例，展示了 sessionStorage 和 localStorage 在访问权限上的差异：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 在页面A中设置sessionStorage和localStorage</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'sessionKey'</span><span class="token punctuation">,</span> <span class="token string">'sessionValue'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'localKey'</span><span class="token punctuation">,</span> <span class="token string">'localValue'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在页面A的不同标签页中尝试访问数据</span></span>
<span class="line"><span class="token comment">// sessionStorage的数据只能在创建它的标签页中访问</span></span>
<span class="line"><span class="token comment">// localStorage的数据可以在所有标签页中访问</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在页面B（同一域下的另一个页面）中尝试访问数据</span></span>
<span class="line"><span class="token comment">// 可以访问localStorage的数据</span></span>
<span class="line"><span class="token keyword">const</span> localData <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'localKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 尝试访问sessionStorage的数据将失败，因为它是页面A特有的</span></span>
<span class="line"><span class="token comment">// const sessionData = sessionStorage.getItem('sessionKey');</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>跨域访问限制</li>
</ol>
<p>无论是 sessionStorage 还是 localStorage，它们都不支持跨域访问。如果你尝试从不同的源访问这些存储的数据，浏览器会抛出安全错误。这确保了用户数据的安全性，防止了潜在的跨站脚本攻击（XSS）。</p>
<p>开发者需要牢记这些访问权限的规则，以确保数据的安全性和正确性，并在设计应用程序时做出适当的考虑。</p>
<h2 id="_6-api-使用对比" tabindex="-1"><a class="header-anchor" href="#_6-api-使用对比"><span>6. API 使用对比</span></a></h2>
<p>sessionStorage 和 localStorage 共享相似的 API，这使得它们的使用非常直观和相似。以下是它们 API 的基本使用方法对比。</p>
<ol>
<li>设置和获取数据</li>
</ol>
<p>sessionStorage 和 localStorage 都提供了 setItem 和 getItem 方法来设置和获取数据。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 设置数据</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'sessionKey'</span><span class="token punctuation">,</span> <span class="token string">'sessionValue'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'localKey'</span><span class="token punctuation">,</span> <span class="token string">'localValue'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取数据</span></span>
<span class="line"><span class="token keyword">const</span> sessionData <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'sessionKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> localData <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'localKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>删除数据
如果你需要删除特定的数据项，可以使用 removeItem 方法。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 删除数据</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'sessionKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">'localKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>清除所有数据</li>
</ol>
<p>如果你需要清除所有的存储数据，可以使用 clear 方法。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 清除所有数据</span></span>
<span class="line">sessionStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>获取存储数据的长度
你可以使用 length 属性来获取当前存储的数据项数量。</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 获取存储数据的长度</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sessionStorage<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出当前sessionStorage的数据项数量</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出当前localStorage的数据项数量</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>遍历存储数据</li>
</ol>
<p>虽然 sessionStorage 和 localStorage 没有直接提供遍历所有键值对的方法，但你可以使用 key 方法结合 length 属性来遍历所有的数据。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 遍历sessionStorage中的所有数据</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sessionStorage<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> key <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> value <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 遍历localStorage中的所有数据</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> localStorage<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> key <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">const</span> value <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>API 兼容性</li>
</ol>
<p>sessionStorage 和 localStorage 的 API 在现代浏览器中得到了广泛支持，但在一些旧的浏览器中可能不受支持或存在限制。开发者在使用这些 API 时，应该检查目标浏览器的兼容性，并在必要时提供回退方案。</p>
<p>总的来说，sessionStorage 和 localStorage 的 API 使用非常相似，开发者可以根据需要选择合适的存储方式来实现应用的特定需求。</p>
<h2 id="_7-跨域问题" tabindex="-1"><a class="header-anchor" href="#_7-跨域问题"><span>7. 跨域问题</span></a></h2>
<p>在 Web 开发中，跨域问题是一个常见的安全限制，它确保了用户数据的安全性和隐私。对于 sessionStorage 和 localStorage 来说，跨域问题同样重要，因为它们都受到同源策略的约束。</p>
<ol>
<li>
<p>同源策略限制
同源策略是浏览器安全的基础，它限制了不同源之间的交互。对于 sessionStorage 和 localStorage，这意味着只有当页面的协议、域名和端口都相同时，这些存储的数据才能被访问。如果尝试从不同源的页面访问这些存储，浏览器会抛出一个安全错误。</p>
</li>
<li>
<p>跨域访问尝试
以下是一个尝试跨域访问 localStorage 的示例代码，它会导致一个安全错误：</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 假设当前页面是 http://example.com</span></span>
<span class="line"><span class="token comment">// 尝试从 http://another.com 访问 localStorage</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 这行代码将抛出一个安全错误</span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'http://another.com'</span><span class="token punctuation">,</span> <span class="token string">'_blank'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'localKey'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Cross-origin access attempt to localStorage failed:'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>跨域解决方案</li>
</ol>
<p>尽管同源策略限制了跨域访问，但在某些情况下，你可能需要在不同源的页面间共享数据。以下是一些可能的解决方案：</p>
<p>使用 PostMessage API: 通过 window.postMessage 方法，可以在不同源的页面间安全地传递消息和数据。</p>
<p>服务器端代理: 在服务器端设置代理，使得不同源的页面可以通过服务器端转发请求来共享数据。</p>
<p>使用第三方存储服务: 利用第三方提供的存储服务，如 Firebase 或 localStorage 数据库，来实现跨域数据共享。</p>
<ol start="4">
<li>考虑安全性</li>
</ol>
<p>在处理跨域问题时，开发者必须始终考虑安全性。确保任何跨域数据共享都是安全的，并且不会暴露用户的敏感信息。使用 HTTPS 协议可以增加数据传输的安全性，同时，对数据进行加密也是保护用户隐私的有效手段。</p>
<p>总之，sessionStorage 和 localStorage 都受到同源策略的限制，不能跨域访问。开发者需要采取适当的方法来解决跨域数据共享的问题，同时确保用户数据的安全和隐私。</p>
<h2 id="_8-最佳实践" tabindex="-1"><a class="header-anchor" href="#_8-最佳实践"><span>8. 最佳实践</span></a></h2>
<p>在使用 sessionStorage 和 localStorage 时，有一些最佳实践可以帮助开发者更有效地管理存储，并确保应用的性能和安全性。</p>
<ol>
<li>选择合适的存储类型</li>
</ol>
<p>使用 sessionStorage：当你需要存储仅在当前会话中使用的临时数据时，比如用户的临时偏好设置或临时缓存的数据，应该使用 sessionStorage。这些数据在用户关闭浏览器标签页或窗口时会被清除，有助于避免长期保留不必要的数据。</p>
<p>使用 localStorage：如果你需要跨会话存储数据，例如用户的登录状态、偏好设置或长期数据，应该使用 localStorage。这些数据会一直保留，直到用户手动清除或通过代码删除。</p>
<ol start="2">
<li>优化存储容量</li>
</ol>
<p>避免存储大量数据：尽管 sessionStorage 和 localStorage 提供了方便的数据存储方式，但它们的存储容量有限。开发者应该避免存储大量数据，尤其是大型的对象或数组。</p>
<p>定期清理数据：定期检查并清除不再需要的数据可以帮助避免存储空间不足的问题。</p>
<ol start="3">
<li>处理存储异常</li>
</ol>
<p>捕获异常：当存储空间不足时，尝试写入数据会抛出 QuotaExceededError。开发者应该捕获这些异常，并给用户一个清晰的提示或者采取其他应对措施。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'key'</span><span class="token punctuation">,</span> <span class="token string">'value'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'QuotaExceededError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 处理存储空间不足的情况</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>确保数据安全</li>
</ol>
<p>使用 HTTPS：通过 HTTPS 协议传输数据可以增加数据的安全性，防止中间人攻击。</p>
<p>对敏感数据进行加密：在存储敏感信息之前，对其进行加密可以保护用户隐私。</p>
<ol start="5">
<li>考虑用户体验</li>
</ol>
<p>提供用户控制：允许用户查看和控制存储在 sessionStorage 和 localStorage 中的数据，可以提高透明度并增强用户信任。</p>
<p>避免不必要的数据写入：频繁地写入存储可能会影响页面性能，尤其是在低性能设备上。只有在必要时才写入数据。</p>
<ol start="6">
<li>兼容性考虑</li>
</ol>
<p>检查存储支持：在较旧的浏览器中，sessionStorage 和 localStorage 可能不受支持。开发者应该检查浏览器是否支持这些存储机制，并提供回退方案。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>Storage<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">"undefined"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 支持存储</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 不支持存储，提供回退方案</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过遵循这些最佳实践，开发者可以确保 sessionStorage 和 localStorage 被高效且安全地使用，从而提升 Web 应用的性能和用户体验。</p>
</div></template>


