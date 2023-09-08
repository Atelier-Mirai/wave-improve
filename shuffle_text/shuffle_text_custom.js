// ページ読み込み時に実行されるよう、イベントリスナを指定。
window.addEventListener("load", init)

// 初期化処理を行う関数
function init() {
  // ShuffleTextのインスタンス達を格納する配列
  let effectList = []
  // shuffle クラスが付与された全ての要素を取得する。
  let elementList = document.querySelectorAll(".shuffle")

  // elementListの全てのメンバーに対して、繰り返し処理を行う。
  for (let i = 0; i < elementList.length; i++) {
    // i番目のメンバーを取得して、elementという変数に代入する。
    let element = elementList[i]
    // カスタムdata属性を付与する。
    // (元のHTMLは <li class="shuffle">01/01「トップページ」更新</li>
    // であったが、これを
    // <li class="shuffle" data-index="1">01/01「トップページ」更新</li>
    // にする。つまり data-index="1" とカスタムdata属性を付与する。)
    element.dataset.index = i
    // ShuffleTextクラスのインスタンスを生成しeffectListに格納する。
    effectList[i] = new ShuffleText(element)

    // マウスを載せたときに再生するよう、イベントリスナを指定。
    element.addEventListener("mouseenter", () => {
      // <li>要素は、次のようになっている。
      // <li class="shuffle" data-index="1">01/01「トップページ」更新</li>
      // this.dataset.index と書いて、data-index="1" の 1 を取得する。
      effectList[element.dataset.index].start()
      // effectList[1].start() と等価。
    })

    // マウスを離した時に再生するよう、イベントリスナを指定。
    element.addEventListener("mouseleave", () => {
      effectList[element.dataset.index].start()
    })

    // ページを読み込んだときに、初回を再生する。
    effectList[i].start()
  }
}
