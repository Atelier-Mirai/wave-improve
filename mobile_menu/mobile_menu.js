/*=====================================================================
  ハンバーがメニュー
=====================================================================*/

// ハンバーガーボタンが押された際に、メニューを表示する
document.querySelector(".navbtn.hamburger").addEventListener("click", () => {
  document.querySelector("html").classList.toggle("open")
  document.querySelector(".navbtn.hamburger").classList.toggle("is-active")
})

// ナビゲーションメニュー内のリンクがクリックされたときに、メニューを閉じる
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("html").classList.toggle("open")
    document.querySelector(".navbtn.hamburger").classList.toggle("is-active")
  })
})
