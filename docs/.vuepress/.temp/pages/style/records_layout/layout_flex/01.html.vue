<template><div><h1 id="一、认识flex" tabindex="-1"><a class="header-anchor" href="#一、认识flex"><span>一、认识flex</span></a></h1>
<h2 id="_1-1-flex概述" tabindex="-1"><a class="header-anchor" href="#_1-1-flex概述"><span>1.1 Flex概述</span></a></h2>
<blockquote>
<p>Flex布局，全称为“Flexible Box Layout”，意为“弹性盒布局”。它是一种现代的CSS布局模式，旨在提供一种更有效的方式来布局、对齐和分配容器中项目之间的空间，即使它们的大小未知或动态变化。</p>
</blockquote>
<p>Flex布局的主要特点和优势包括：</p>
<ul>
<li>灵活性：Flex布局允许项目在容器中灵活地扩展和收缩，以填充可用空间或调整大小以适应内容。</li>
<li>对齐方式：Flex布局提供了各种对齐选项，可以轻松地实现水平和垂直对齐。</li>
<li>方向控制：可以方便地改变主轴的方向，使项目在水平或垂直方向上排列。</li>
<li>空间分配：Flex布局可以自动处理项目之间的空间分配，使其看起来更加整洁和平衡。</li>
<li>简化布局：Flex布局使得复杂的布局变得简单，减少了传统布局方式中需要使用的浮动、定位等技巧。</li>
</ul>
<h2 id="_1-2-flex容器属性介绍" tabindex="-1"><a class="header-anchor" href="#_1-2-flex容器属性介绍"><span>1.2 Flex容器属性介绍</span></a></h2>
<ul>
<li>flex-direction: 设置主轴的方向</li>
<li>justify-content: 主轴上的子元素排列方式</li>
<li>align-items: 设置侧轴上的子元素排列方式（单行）</li>
<li>align-content: 设置侧轴上的子元素排列方式（多行）</li>
<li>flex-wrap: 设置子元素是否换行</li>
<li>flex-flow: 复合属性，相当于同时设置了flex-direction和flex-wrap</li>
<li>gap: 元素间隔距离</li>
</ul>
<h2 id="_1-3-flex子项属性介绍" tabindex="-1"><a class="header-anchor" href="#_1-3-flex子项属性介绍"><span>1.3 flex子项属性介绍</span></a></h2>
<ul>
<li>order: order定义自身排列顺序。</li>
<li>flex-grow: 定义自身放大比例，默认为0不放大</li>
<li>flex-shrink: 定义了空间不足时自身缩小比例，默认为1自动缩小，0不缩小。</li>
<li>flex-basis: 定义最小空间，默认值为auto，即自身的本来大小。</li>
<li>flex: flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</li>
<li>align-self属性 :align-self定义自身对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</li>
</ul>
<h2 id="_1-4-flex主轴交叉轴介绍" tabindex="-1"><a class="header-anchor" href="#_1-4-flex主轴交叉轴介绍"><span>1.4 flex主轴交叉轴介绍</span></a></h2>
<p><img src="/style/records_layout/layout_flex/001.png" alt=""></p>
<p>如图，水平轴称为 main axis 主轴，纵轴称为 cross start 交叉轴。各自方向的起点、终点用 start 和 end 表示，如 main start，cross end。内部子项的尺寸，用 main size，cross size 表示。这些内容将用于后续排版。此外，主轴和交叉轴方向并不是只能如此，也可以将纵轴设为主轴。</p>
</div></template>


