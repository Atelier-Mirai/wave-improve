const scroll_animation_class      = 'sa';
const scroll_animation_show_class = 'show';
const trigger_margin_dafault      = 300;

let scroll_animation_elements
  = document.querySelectorAll(`.${scroll_animation_class}`);

let scroll_animation_function = function () {
  // 表示タイミング位置を指定
  // 例) data-sa_margin="200"
  // その要素が画面の下から200px上に上がって来たら表示する
  let data_margin  = `${scroll_animation_class}_margin`;
  // 表示タイミングの基準の要素を指定
  // 例) data-sa_trigger="#elem1"
  // #elem1の出現と同時に、その要素も表示させる
  let data_trigger = `${scroll_animation_class}_trigger`;
  // 表示タイミング時間を指定
  // 例) data-sa_delay="500"
  // 500ms 後にその要素を表示する
  let data_delay   = `${scroll_animation_class}_delay`;

  // saクラスの要素を対象に処理を行う
  for(let i = 0; i < scroll_animation_elements.length; i++){
    let elm = scroll_animation_elements[i];

    // もしdata-sa_marginに値があれば、その数値に置き換える
    let trigger_margin = trigger_margin_dafault;
    if (elm.dataset[data_margin] != null) {
      trigger_margin = parseInt(elm.dataset[data_margin]);
    }

    // data-sa_trigger属性に値があれば指定の要素、
    // 無ければその要素自身の位置を判定基準にする
    let show_position = 0;
    if (elm.dataset[data_trigger]) {
      show_position
        = document
            .querySelector(elm.dataset[data_trigger])
            .getBoundingClientRect()
            .top + trigger_margin;
    } else {
      show_position = elm.getBoundingClientRect().top + trigger_margin;
    }

    // data-sa_delay があれば、その時間だけずらして表示する。
    if (window.innerHeight > show_position) {
      let delay = (elm.dataset[data_delay]) ? elm.dataset[data_delay] : 0;
      setTimeout(function(index) {
        scroll_animation_elements[index].classList
                                    .add(scroll_animation_show_class);
      }.bind(null, i), delay);
    }
  }
}

// イベントリスナ
window.addEventListener('load',   scroll_animation_function);
window.addEventListener('scroll', scroll_animation_function);
