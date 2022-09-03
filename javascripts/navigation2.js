// アニメーション関数(デスクトップ用)を定義する
const fixedAnimationForDesktop = () => {
  // スクロール量を取得
  let scroll = $(window).scrollTop();

  // 300px以上、スクロールしたら
  if (scroll >= 300) {
    // ヘッダーを表示
    $(".header").removeClass("hidden");
    $(".header").addClass("shown");
    // 上から現れるよう、動きのためのクラス付与
    $(".header").removeClass("upward");
    $(".header").addClass("downward");
  }
  // そうでなければ
  else {
    // 画面上部に消えていく動きのためのクラス付与
    $(".header").removeClass("downward");
    $(".header").addClass("upward");
    // ヘッダーを非表示
    $(".header").removeClass("shown");
    $(".header").addClass("hidden");
  }
}

// アニメーション関数（モバイル用）を定義する
const fixedAnimationForMobile = () => {
  // スクロール量を取得
  let scroll = $(window).scrollTop();

  // 300px以上、スクロールしたら
  if (scroll >= 300) {
    $(".open-button").addClass("appearance");
  }
  // そうでなければ
  else {
    $(".header").addClass("hidden");
    $(".open-button").removeClass("appearance");
  }
}

// 画面幅を取得
let windowWidth = $(window).width();

// 画面がスクロールときに、メニュー表示を行う
if (windowWidth <= 768) {
  // モバイル版のメニュー表示
  $(window).scroll(fixedAnimationForMobile);
  // ハンバーガーボタンをクリックした際の処理
  $(".open-button").on("click", () => {
    $(".open-button").toggleClass("active");
    $(".header").toggleClass("hidden");
  });
  // リンクをクリックした際の処理
  $(".header .menu li a").on("click", () => {
    $(".open-button").removeClass("active");
    $(".header").removeClass("hidden");
    $(".open-button").removeClass("appearance");
  });
} else {
  // デスクトップ版のメニュー表示
  $(window).scroll(fixedAnimationForDesktop);
}
