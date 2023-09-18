/*---------------------------------------------------------------------
// 上から出現するアニメーション
---------------------------------------------------------------------*/
const appearsFromAbove = () => {
  let elements = document.querySelectorAll(".above")
  elements.forEach((element) => {
    // 要素の画面上部からの現在位置を取得
    let position = element.getBoundingClientRect().top
    // ウィンドウのスクロール量を取得
    let scroll = document.querySelector("html").scrollTop
    // ウィンドウの高さを取得
    let windowHeight = document.querySelector("html").clientHeight
    if (scroll >= position - windowHeight) {
      // 画面内に入っているので、クラス名fadeDownというクラス名を付与
      element.classList.add("appear")
    } else {
      // 画面外に出ているので、クラス名fadeDownというクラス名を削除
      element.classList.remove("appear")
    }
  })
}

/*---------------------------------------------------------------------
// 下から出現するアニメーション
---------------------------------------------------------------------*/
const appearsFromBelow = () => {
  let elements = document.querySelectorAll(".below")
  elements.forEach((element) => {
    // 要素の画面上部からの現在位置を取得
    let position = element.getBoundingClientRect().top
    // ウィンドウのスクロール量を取得
    let scroll = document.querySelector("html").scrollTop
    // ウィンドウの高さを取得
    let windowHeight = document.querySelector("html").clientHeight
    if (scroll >= position - windowHeight) {
      // 画面内に入っているので、クラス名fadeDownというクラス名を付与
      element.classList.add("appear")
    } else {
      // 画面外に出ているので、クラス名fadeDownというクラス名を削除
      element.classList.remove("appear")
    }
  })
}

/*---------------------------------------------------------------------
// モバイルナビゲーション
---------------------------------------------------------------------*/
// hamburger ボタン要素を取得
const hamburger    = document.querySelector(".hamburger")
// (装飾用の)拡大縮小する円盤要素(scaling_disk)を取得
const scaling_disk = document.querySelector(".scaling_disk")
// ナビゲーション要素を取得
const nav          = document.querySelector(".nav")

// ハンバーガーボタンがクリックされたら
hamburger.addEventListener("click", (event) => {
  // active クラスの有無を検査
  if (!event.target.classList.contains("active")){
  // ハンバーガーボタンに active クラスが付与されていない
  // (=メニューを開くとき)であれば
    // ハンバーガーボタンに active クラス付与
    event.target.classList.add("active")
    // scaling_diskに active クラス付与
    scaling_disk.classList.add("active")
    // ナビゲーション要素に active クラス付与
    nav.classList.add("active")
  } else {
    // ハンバーガーボタンに active クラスが付与されている
    // (=メニューを閉じるとき)であれば
    // ハンバーガーボタンから active クラス削除
    event.target.classList.remove("active")
    // scaling_diskから active クラス削除
    scaling_disk.classList.remove("active")
    // ナビゲーション要素から active クラス削除
    nav.classList.remove("active")
  }
})

// メニュー内のリンク要素を取得
const menu_links   = document.querySelectorAll(".menu a")
// メニュー内のリンクがクリックされたら
menu_links.forEach((link) => {
  link.addEventListener("click", () => {
    // ハンバーガーボタンから active クラス削除
    hamburger.classList.remove("active")
    // scaling_diskから active クラス削除
    scaling_disk.classList.remove("active")
    // ナビゲーション要素から active クラス削除
    nav.classList.remove("active")
  })
})

/*---------------------------------------------------------------------
// ページ読み込み完了時に、以下が実行される。
---------------------------------------------------------------------*/
window.addEventListener("load", (event) => {
  // 待機関数
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  //ロゴを1.5秒（1500ms）待機
  wait(1500)
    // ローディングエリア（splashエリア）を1.5秒でフェードアウト
    .then(() => document.getElementById("splash").classList.add("fadeout"))
    // 黒い背景色が円形状に中央へ縮小するアニメーションを実施
    .then(() => document.querySelector("body").classList.add("appear"))

  // splash_circle 要素を取得
  const splash_circle = document.getElementById("splash_circle")
  // splash_circle 要素のアニメーションが終了したら
  splash_circle.addEventListener("animationend", () => {
    // テキスト出現に関する関数を呼び、アニメーション表示させる。
    appearsFromAbove()
    appearsFromBelow()
  })
})
