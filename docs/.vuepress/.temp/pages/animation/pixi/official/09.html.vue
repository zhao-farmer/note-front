<template><div><h1 id="九、滤镜-混合模式" tabindex="-1"><a class="header-anchor" href="#九、滤镜-混合模式"><span>九、滤镜/混合模式</span></a></h1>
<p>PixiJS滤镜允许您对任何场景对象及其子对象应用后处理视觉效果。滤镜可用于诸如模糊、颜色调整、噪声或基于自定义着色器的操作等效果。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Sprite<span class="token punctuation">,</span> BlurFilter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Apply the filter</span></span>
<span class="line">sprite<span class="token punctuation">.</span>filters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">BlurFilter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> strength<span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-1-应用过滤器" tabindex="-1"><a class="header-anchor" href="#_9-1-应用过滤器"><span>9.1 应用过滤器</span></a></h2>
<p>应用过滤器很简单。您可以将过滤器实例分配给任何场景对象的 <code v-pre>filters</code> 属性，例如 <code v-pre>Sprite</code> ,  <code v-pre>Container</code> ，或 <code v-pre>Graphics</code> 。 您可以通过传递筛选器实例数组来应用多个筛选器。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BlurFilter<span class="token punctuation">,</span> NoiseFilter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">sprite<span class="token punctuation">.</span>filters <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlurFilter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> strength<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">sprite<span class="token punctuation">.</span>filters <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">BlurFilter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> strength<span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">NoiseFilter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> noise<span class="token operator">:</span> <span class="token number">0.2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>信息</p>
<p>顺序很重要——过滤器是按顺序应用的。</p>
<hr>
<h2 id="_9-2-高级混合模式" tabindex="-1"><a class="header-anchor" href="#_9-2-高级混合模式"><span>9.2 高级混合模式</span></a></h2>
<p>PixiJS v8为滤镜引入了高级混合模式，允许更复杂的合成效果。这些混合模式可以用来创建独特的视觉风格和效果。 要使用像 <code v-pre>HARD_LIGHT</code> 这样的高级模式，你必须手动导入高级混合模式扩展：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">'pixi.js/advanced-blend-modes'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HardMixBlend <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">sprite<span class="token punctuation">.</span>filters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">HardMixBlend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_9-3-内置过滤器概述" tabindex="-1"><a class="header-anchor" href="#_9-3-内置过滤器概述"><span>9.3 内置过滤器概述</span></a></h2>
<p>PixiJS v8提供了多种现成的过滤器：</p>
<table>
<thead>
<tr>
<th>过滤器类</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>AlphaFilter</code></td>
<td>对对象应用透明度。</td>
</tr>
<tr>
<td><code v-pre>BlurFilter</code></td>
<td>高斯模糊。</td>
</tr>
<tr>
<td><code v-pre>ColorMatrixFilter</code></td>
<td>通过矩阵应用颜色变换。</td>
</tr>
<tr>
<td><code v-pre>DisplacementFilter</code></td>
<td>使用另一个纹理扭曲对象。</td>
</tr>
<tr>
<td><code v-pre>NoiseFilter</code></td>
<td>为颗粒效果添加随机噪声。</td>
</tr>
</tbody>
</table>
<p>信息</p>
<p>要探索更多的社区过滤器，请参阅pixi-filters。</p>
<p>混合过滤器：用于自定义合成模式</p>
<table>
<thead>
<tr>
<th>过滤器类</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>ColorBurnBlend</code></td>
<td>使基色变暗以反映混合色。</td>
</tr>
<tr>
<td><code v-pre>ColorDodgeBlend</code></td>
<td>提亮底色。</td>
</tr>
<tr>
<td><code v-pre>DarkenBlend</code></td>
<td>保留最暗的颜色成分。</td>
</tr>
<tr>
<td><code v-pre>DivideBlend</code></td>
<td>将基色除以混合色。</td>
</tr>
<tr>
<td><code v-pre>HardMixBlend</code></td>
<td>高对比度的融合。</td>
</tr>
<tr>
<td><code v-pre>LinearBurnBlend</code></td>
<td>使用线性公式变暗。</td>
</tr>
<tr>
<td><code v-pre>LinearDodgeBlend</code></td>
<td>使用线性公式进行减亮。</td>
</tr>
<tr>
<td><code v-pre>LinearLightBlend</code></td>
<td>线性闪避和燃烧的组合。</td>
</tr>
<tr>
<td><code v-pre>PinLightBlend</code></td>
<td>选择性更换颜色。</td>
</tr>
<tr>
<td><code v-pre>SubtractBlend</code></td>
<td>从底色中减去混合色。</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="_9-4-创建自定义过滤器" tabindex="-1"><a class="header-anchor" href="#_9-4-创建自定义过滤器"><span>9.4 创建自定义过滤器</span></a></h2>
<p>要在PixiJS v8中定义自定义过滤器，您可以在着色程序和GPU资源中使用 <code v-pre>Filter.from()</code> 。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Filter<span class="token punctuation">,</span> GlProgram<span class="token punctuation">,</span> Texture <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pixi.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> vertex <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">  in vec2 aPosition;</span>
<span class="line">  out vec2 vTextureCoord;</span>
<span class="line"></span>
<span class="line">  uniform vec4 uInputSize;</span>
<span class="line">  uniform vec4 uOutputFrame;</span>
<span class="line">  uniform vec4 uOutputTexture;</span>
<span class="line"></span>
<span class="line">  vec4 filterVertexPosition( void )</span>
<span class="line">  {</span>
<span class="line">      vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;</span>
<span class="line"></span>
<span class="line">      position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;</span>
<span class="line">      position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;</span>
<span class="line"></span>
<span class="line">      return vec4(position, 0.0, 1.0);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  vec2 filterTextureCoord( void )</span>
<span class="line">  {</span>
<span class="line">      return aPosition * (uOutputFrame.zw * uInputSize.zw);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  void main(void)</span>
<span class="line">  {</span>
<span class="line">      gl_Position = filterVertexPosition();</span>
<span class="line">      vTextureCoord = filterTextureCoord();</span>
<span class="line">  }</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> fragment <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">  in vec2 vTextureCoord;</span>
<span class="line">  in vec4 vColor;</span>
<span class="line"></span>
<span class="line">  uniform sampler2D uTexture;</span>
<span class="line">  uniform float uTime;</span>
<span class="line"></span>
<span class="line">  void main(void)</span>
<span class="line">  {</span>
<span class="line">      vec2 uvs = vTextureCoord.xy;</span>
<span class="line"></span>
<span class="line">      vec4 fg = texture2D(uTexture, vTextureCoord);</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      fg.r = uvs.y + sin(uTime);</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">      gl_FragColor = fg;</span>
<span class="line"></span>
<span class="line">  }</span>
<span class="line"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> customFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Filter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    glProgram<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">GlProgram</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        fragment<span class="token punctuation">,</span></span>
<span class="line">        vertex<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    resources<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        timeUniforms<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            uTime<span class="token operator">:</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">0.0</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'f32'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 应用过滤器</span></span>
<span class="line">sprite<span class="token punctuation">.</span>filters <span class="token operator">=</span> <span class="token punctuation">[</span>customFilter<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 更新 uniform</span></span>
<span class="line">app<span class="token punctuation">.</span>ticker<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ticker<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    filter<span class="token punctuation">.</span>resources<span class="token punctuation">.</span>timeUniforms<span class="token punctuation">.</span>uniforms<span class="token punctuation">.</span>uTime <span class="token operator">+=</span> <span class="token number">0.04</span> <span class="token operator">*</span> ticker<span class="token punctuation">.</span>deltaTime<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>提示</strong></p>
<p>着色器必须与WebGL或webgpu兼容。对于双渲染器支持，包括 <code v-pre>gpuProgram</code> 。</p>
</div></template>


