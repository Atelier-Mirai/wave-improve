/*=====================================================================
  ナビゲーションメニュー
=====================================================================*/

// 発動要件となるスクロール量
const TRIGGER_POSITION = 300

const fixedAnimationForHeaderMenu = () => {
  // scroll という変数に、ウィンドウのスクロール量を取得して、代入する。
  let scroll = document.querySelector("html").scrollTop
  // ヘッダー（メニューバー）を取得
  let header = document.querySelector(".header")

  // もしスクロール量が200px以上ならば
  if (scroll >= TRIGGER_POSITION) {
    // ヘッダーを表示
    header.classList.remove("hidden")
    header.classList.add("shown")
    // 上から現れるよう、動きのためのクラス名を付与
    header.classList.remove("upward")
    header.classList.add("downward")
  }
  // そうでなければ
  else {
    // 画面上部に消えていく動きのためのクラス名を付与
    header.classList.remove("downward")
    header.classList.add("upward")
  }
}

// スクロールイベント発火で、fixedAnimationForHeaderMenu を呼ぶ。
document.addEventListener("scroll", (event) => {
  fixedAnimationForHeaderMenu()
})
