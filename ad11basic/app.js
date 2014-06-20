/* 

iPhoneサイズの箱を用意する

*/

demoLayer = new Layer({
  x: 0,
  y: 0,
  width: 640,
  height: 1136,
  backgroundColor: "red"
})

/* 

作ったdemoLayerをドラッグできるように

*/

demoLayer.draggable = true;
demoLayer.draggable.speedX = 0;

/* 

もうひとつレイヤーを作ってみる

*/

childLayer = new Layer({width:128, height:128, image:"images/Icon.png"})

/*

ここでとめると、demoLayerとchildLayerは別々に動くので、childLayerをdemoLayerの子レイヤーにする。

*/

demoLayer.addSubLayer(childLayer)
childLayer.center()

/*

子レイヤーをアニメーションさせる。
この場合は、Z軸を中心に180度回転。
画面がロードされたらすぐ実行せず、2秒後に実行するように「delay: 2」を指定。

*/

childLayer.animate({
  properties: {
    rotationZ: 180
  },
  curve: "spring(1500,12,10)",
  delay: 2
})