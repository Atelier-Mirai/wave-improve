/*=====================================================================
  固定フッター

  200px以上のスクロールで activeクラスを付与
  「電話をかける」を表示させる
=====================================================================*/

// 発動要件となるスクロール量
const TRIGGER_POSITION = 200

const fixedFooter = () => {
  // scroll という変数に、ウィンドウのスクロール量を取得して、代入する。
  let scroll = document.querySelector("html").scrollTop
  // 固定フッターを取得
  let footer = document.getElementById("fixed_footer")

  // もしスクロール量が200px以上ならば
  if (scroll > TRIGGER_POSITION) {
    footer.classList.add("active")
  } else {
    footer.classList.remove("active")
  }
}

// 画面スクロールやページ読み込みの際に fixedFooter 関数を呼ぶ
document.addEventListener("scroll", (event) => { fixedFooter() })
window.addEventListener("load", (event) => { fixedFooter() })
