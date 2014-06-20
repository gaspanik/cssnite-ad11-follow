var PSD = Framer.Importer.load("cc"); // Generatorなどで書き出したフォルダを指定。変数名（この場合はPSD）は適当でOK

/*
shortcuts-for-framerを使う場合は以下を有効にすることで、上記の変数「PSD」みたいなのを付けなくても画像の情報にアクセスできる
https://github.com/facebook/shortcuts-for-framer

ダウンロードして、library.jsをindex.htmlで読み込みましょう。

*/

Framer.Shortcuts.initialize(PSD); 

notifyScreen.draggable.enable = true  // ドラッグを有効に
notifyScreen.draggable.speedX = 0  // x軸の移動を禁止

/*

Y軸の移動速度を調整する場合は、以下のように移動速度を指定
notifyScreen.draggable.speedY = 3

*/

notifyScreen.y = -1136 // 初期ロード時に画面サイズ分上に移動させて隠す。

/* 

statusBarの画像にタッチしたらnotifyScreenのアニメーションを実行する。

*/

statusBar.on(Events.TouchStart, function() {
  notifyScreen.animate({
    properties: {
      y: 0 // もともとの0の位置まで移動する
    },
    curve: "cubic-bezier(0.86, 0, 0.07, 1)", // アニメーションカーブの指定
    time: 0.5 // 実行時間
  })
})

/*

curveの指定は、あらかじめ用意されている「"spring(100,20,10)"」のような指示以外に、CSS3のアニメーションの指示を直接記述してもOK。
Flashやアニメーションをやられてないとイージングの動きがわからないと思うので、以下のサイトで望む動きを決めてそのCSS3の記述をペーストするとよいでしょう。

http://easings.net/

上のアニメーションはこの動き。

http://easings.net/#easeInOutQuint

*/

notifyScreen.on(Events.DragEnd, function() {
  notifyScreen.animate({
    properties: {
      y: -1136
    },
    curve: "spring(100,20,10)",
    time: 1
  })
})
