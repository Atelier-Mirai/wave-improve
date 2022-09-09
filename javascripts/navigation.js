const fixedAnimationForHeaderMenu = () => {
  // スクロール量を取得
  let scroll = $(window).scrollTop();

  // 300px以上、スクロールしたら
  if (scroll >= 300) {
    // ヘッダーを表示
    $(".header").removeClass("hidden");
    $(".header").addClass("shown");
    // 上から現れるよう、動きのためのクラス名を付与
    $(".header").removeClass("upward");
    $(".header").addClass("downward");
  }
  // そうでなければ
  else {
    // 画面上部に消えていく動きのためのクラス名を付与
    $(".header").removeClass("downward");
    $(".header").addClass("upward");
  }
}

// スクロールイベント発火で、fixedAnimationForHeaderMenu を呼ぶ。
$(window).scroll(fixedAnimationForHeaderMenu);
