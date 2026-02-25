import { Container, Graphics, Sprite } from "../../js/pixi.mjs";
import { intersect } from "./intersect.js";

/* ---------------------------------------
变化形式1 正方形径向变化
-------------------------------------- */
export function generateSpinner1(app, position) {
  // 新建一个容器
  const container = new Container();

  //容器的位置
  container.position = position;
  //将容器加载到页面上
  app.stage.addChild(container);

  //上面展示图片
  const base = Sprite.from("../images/bg_scene_rotate.jpg");
  const size = 100;

  base.width = size;
  base.height = size;

  //下面展示图片
  const bottom = Sprite.from("../images/bg_rotate.jpg");

  bottom.width = size;
  bottom.height = size;

  const mask = new Graphics();

  mask.position.set(size / 2, size / 2);
  //基础精灵加载上遮罩
  base.mask = mask;
  //整个页面也加上纹理
  window.mask = mask;

  //容器中将三者都加入子元素中
  container.addChild(bottom);
  //这个精灵在上面 但是mask 并没有大小 还是显示的是这个精灵  后续如果增大 会将整个纹理覆盖 只会显示下面的精灵
  container.addChild(base);
  container.addChild(mask);

  // 阶段
  let phase = 0;

  //改变的是mask遮罩，这个数据以自身为中心点，所以会有负值 以坐标轴为原点调整要展示的数据
  return (delta) => {
    // 更新阶段
    // 每次加上每帧时间的的60分之一
    phase += delta / 60;
    // 阶段每次除以360度 如果能除下 phase会第一次等于0
    phase %= Math.PI * 2;

    // 计算目标点
    //通过正弦与余弦计算 位置

    // 2π 一个循环
    // 开始值(phase - Math.PI / 2)  负二分之一π 值为0
    // sin 0 到1 1到-1 -1到0
    const x = Math.cos(phase - Math.PI / 2) * size;
    // 2π 一个循环
    // 开始值(phase - Math.PI / 2)  负二分之一π 值为-1
    // sin -1 到1 然后1到-1
    const y = Math.sin(phase - Math.PI / 2) * size;
    // console.log(delta, phase, phase - Math.PI / 2, x, y);

    // 四个边 每两个数字是一个点
    const segments = [
      [-size / 2, -size / 2, size / 2, -size / 2], // 上部
      [size / 2, -size / 2, size / 2, size / 2], // 右边
      [-size / 2, size / 2, size / 2, size / 2], // 下边
      [-size / 2, -size / 2, -size / 2, size / 2], // 左边
    ];

    // 找到线段相交的点
    let intersection = null;
    //弯曲值为0
    let winding = 0;

    // 每次循环都按照顺时针循环
    // 循环中每次都按照 每条边进行循环
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      //获取相交的x与y点
      const hit = intersect(0, 0, x, y, segment[0], segment[1], segment[2], segment[3]);

      //如果相交点存在
      if (hit) {
        intersection = hit;
        //判断如果相交的点为负数 就是第五部分
        // 从最上边的中间开始走到末尾 winding等于0
        // 从最上边开始走到中间 winding 等于 4
        if (i === 0) winding = hit.x > 0 ? 0 : 4;
        else winding = i;
        break;
      }
    }

    //角度
    const corners = [
      size / 2,
      -size / 2, // 右上角
      size / 2,
      size / 2, // 右下角
      -size / 2,
      size / 2, // 左下角
      -size / 2,
      -size / 2, // 左上角
      0,
      -size / 2, // 结束点
    ];

    // 重绘遮罩
    mask
      .clear()
      .moveTo(0, -size / 2)
      .lineTo(0, 0)
      .lineTo(intersection.x, intersection.y);

    // 充满角
    // 直接连接可以连接的每个点 越往后连接的越少
    // 开始值为0 形成一个 缺少（0度 - 45度）的多边形
    // 值为1 形成一个 缺少0度到135度的多边形
    // 值为2 形成一个 缺少0度到225度的多边形
    // 值为3 形成一个 缺少0度到315度的多边形
    // 值为4 形成一个 缺少0度到360度的多边形

    for (let i = winding; i < corners.length / 2; i++) {
      //连接x与y点
      mask.lineTo(corners[i * 2], corners[i * 2 + 1]);
    }

    //填充红色 只要填充颜色都会展示数据
    mask.fill({ color: 0xff0000 });
  };
}
