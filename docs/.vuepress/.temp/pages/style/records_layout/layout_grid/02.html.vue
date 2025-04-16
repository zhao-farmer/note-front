<template><div><h1 id="二、-grid布局和flex布局的区别" tabindex="-1"><a class="header-anchor" href="#二、-grid布局和flex布局的区别"><span>二、 Grid布局和flex布局的区别</span></a></h1>
<p><strong>Grid布局</strong></p>
<ul>
<li>二维布局系统：Grid布局是为了 解决二维布局系统而设计的，允许同时控制行和列的布局，非常适合创建复杂的网格结构。</li>
<li>定义结构：通过定义grid-template-columns和grid-template-rows定义网格的行和列。通过grid-area定义网格区域，以及grid-column和grid-row等属性在项目上控制当个网格项的位置</li>
<li>单元格：Grid布局强调的是将页面划分为一个个单元格，每个单元格可以换分不同的元素，非常适合对称和不对称的布局。</li>
</ul>
<p><strong>flex布局</strong></p>
<ul>
<li>一维布局系统：Flex布局主要用于一维空间的布局，即沿着一个轴（横向或纵向分配空间，非常适合列表、导航条、工具栏、页脚等元素的排列）</li>
<li>流动和对齐：通过flex-direction控制元素的排列方向，justify-content和align-items等属性控制元素在主轴和交叉轴上的布局方式</li>
<li>自适应：flex布局擅长让容器内的项目自动调整大小以适应可用的空间。</li>
</ul>
<p><img src="/style/records_layout/layout_grid/images/002.png" alt=""></p>
</div></template>


