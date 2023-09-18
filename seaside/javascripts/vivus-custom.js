//========================================================
//機能編   4-1-6 手書き風ロゴアニメーション
//========================================================
//SVGアニメーションの描画
const stroke = new Vivus("mask", { //アニメーションをするIDの指定
  start: "manual", //自動再生をせずスタートをマニュアルに
  type: "scenario-sync", // アニメーションのタイプを設定
  duration: 50, //アニメーションの時間設定。数字が小さくなるほど速い
  forceRender: false, //パスが更新された場合に再レンダリングさせない
  animTimingFunction: Vivus.EASE, //動きの加速減速設定
})

// ページ読み込み完了時に、以下が実行される。
window.addEventListener("load", (event) => {
  stroke.play()
})
