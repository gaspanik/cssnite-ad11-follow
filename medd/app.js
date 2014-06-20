var medium = Framer.Importer.load("imported/med");

startusBar = new Layer({
  x: 0,
  y: 0,
  width: 640,
  height: 41,
  image: "images/statusBar.png"
});

medium.med.draggable.enabled;
medium.med.draggable.speedY = 2;
medium.med.draggable.speedX = 0;

/*

medレイヤーをドラッグし始めたら、headerImageの画像をぼかしてアルファ値を下げる

*/
medium.med.on(Events.DragStart, function() {
  medium.headerImage.animate({
    properties: {
      blur: 8,
      opacity: 0.3
    }
  })
})

/*

medレイヤーに触れてるのが終わったら、medレイヤーの位置を一番上に戻す。その際のアニメーションはスプリング。ついでにheaderImageのぼかしを解除してアルファ値ももどす。

*/
medium.med.on(Events.TouchEnd, function(next) {
  medium.med.animate({
    properties: {
      y: 0
    },
    curve: "spring(600,15,30)"
  })
  medium.headerImage.animate({
    properties: {
      blur: 0,
      opacity: 1
    }
  })
})
