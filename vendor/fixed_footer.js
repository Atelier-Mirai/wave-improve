/*---------------------------------------------------------------------
150px以上スクロールしたら、activeクラスを付与、
電話をかけるを表示させる
---------------------------------------------------------------------*/
let fixed_footer = () => {
  const $fixed_footer = $('#fixed_footer');
  const trigger_position = 150;
  let   current_position = $(this).scrollTop();

  if (current_position > trigger_position) {
    $fixed_footer.addClass('active');
  } else {
    $fixed_footer.removeClass('active');
  }
}

/* 画面スクロールやページ読み込みの際に fixed_footer 関数を呼ぶ
-------------------------------------------------------------------------*/
$(window).scroll(() => {
  fixed_footer();
});

$(window).on("load", () => {
  fixed_footer();
});
