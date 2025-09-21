import { Container, Graphics, Sprite } from "../../js/pixi.mjs";

/* ---------------------
Spinner 3. 径向遮罩
-------------------- */
export function generateSpinner3(app, position) {
  //新建一个容器
  const container = new Container();

  //判断位置
  container.position = position;
  //容器加载到舞台上
  app.stage.addChild(container);

  //加载精灵
  const base = Sprite.from("../images/bg_scene_rotate.jpg");
  const size = 100;

  //设置大小
  base.width = size;
  base.height = size;

  //设置遮罩
  const mask = new Graphics();

  //遮罩中心位置
  mask.position.set(size / 2, size / 2);
  //设置遮罩
  base.mask = mask;
  //也是整个页面的遮罩
  window.mask = mask;

  //精灵与遮罩都加入到容器中
  container.addChild(base);
  container.addChild(mask);

  //阶段
  let phase = 0;

  return (delta) => {
    // 更新阶段 phase 是一个不断增大的数 如果大于2π 就会重新开始
    phase += delta / 60;
    phase %= Math.PI * 2;

    //开始角度 -90°  -0.44 也是坐标轴上方的竖线
    const angleStart = 0 - Math.PI / 2;
    //角度
    const angle = phase + angleStart;
    //圆角
    const radius = 50;

    // x1与y1 根据余弦与正弦获取正确的数据
    const x1 = Math.cos(angleStart) * radius;
    const y1 = Math.sin(angleStart) * radius;

    // 重新绘制遮罩
    // 从0点开始 目标点x1与y1 不停变化的数据
    // arc 前两个参数 弧的中心点 弧度的半径  弧度的开始点 弧度的结束点 是否逆时针(false代表顺时针)
    // 代表先从原点画 画到目标点 连接一个弧线  再次连接到原点 形成一个扇形  最后加入颜色
    mask.clear().moveTo(0, 0).lineTo(x1, y1).arc(0, 0, radius, angleStart, angle, false).lineTo(0, 0).fill({ color: 0xff0000 });
  };
}
