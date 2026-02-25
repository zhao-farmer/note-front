import { Container, Sprite } from "../../js/pixi.mjs";
/* -----------------------
Spinner 缩放球
---------------------- */
export function generateSpinner2(app, position) {
  //新建一个容器
  const container = new Container();

  //容器位置判断
  container.position = position;
  //在舞台上添加
  app.stage.addChild(container);

  //设置大小
  const size = 100;
  //小球数量
  const ballAmount = 7;
  //球的集合
  const balls = [];

  //数量循环
  for (let i = 0; i < ballAmount; i++) {
    //加载纹理
    const ball = Sprite.from("../images/circle.png");

    //设置锚点
    ball.anchor.set(0.5);
    //加入舞台上
    container.addChild(ball);
    //设置球的位置
    //通过余弦与正弦设置x与y 环绕着中心点放位置
    //(i / ballAmount) * Math.PI * 2  计算结果: 0  2π/7（约0.88）  4π/7（约1.76）   6π/7（约2.64）   8π/7（约3.52）  10π/7（约4.40）  12π/7（约5.28）
    //cos 1 0.62 -0.22 -0.90 -0.90 -0.22 0.62
    //sin 0 0.78 0.97 0.43 -0.43 -0.97 -0.78
    //最后除以3 防止超过设定的值的二分之一
    //以size/2为坐标轴原点，所有的数据围绕着这个点循环

    //最终的x与y的坐标   83.3 50   70.7 76.0   42.5 82.4   19.9 64.4   19.9 35.5   42.5 17.5   70.7 23.9
    ball.position.set(size / 2 + (Math.cos((i / ballAmount) * Math.PI * 2) * size) / 3, size / 2 + (Math.sin((i / ballAmount) * Math.PI * 2) * size) / 3);

    //加入集合
    balls.push(ball);
  }

  // 阶段
  let phase = 0;

  return (delta) => {
    // 更新阶段
    phase += delta / 60;
    phase %= Math.PI * 2;

    // 修改球的大小
    balls.forEach((b, i) => {
      //根据页面缓缓增大
      //使用这些数据 0  π/7  2π/7  3π/7 4π/7  5π/7  6π/7 减去一个0-2π的值
      // 最后值都在-1到1之间循环
      //因为减去的相同，都是按照曲线获取的值 相隔一个π/7
      const sin = Math.sin((i / ballAmount) * Math.PI - phase);

      // 将sin与自身相乘，得到更陡峭的边缘。
      // 0.5 - 0.9 再0.9 - 0.5 定期修改
      // 最低是0.5 也是值为0的时候
      // Math.abs 计算数据的绝对值，不管是什么最后都等于正数
      b.scale.set(Math.abs(sin * sin * sin * 0.5) + 0.5);
    });
  };
}
