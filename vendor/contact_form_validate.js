/*=============================================================================
  問い合わせフォーム用 JavaScript
=============================================================================*/

/*-----------------------------------------------------------------------------
  文字数を数える
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length
-----------------------------------------------------------------------------*/
// 文字数を返すための関数
let getCharacterLength = (str) => {
  return [...str].length;
}

// ユーザーが何かを入力するたびに、文字数を表示します。
const message      = document.getElementById('message');
const message_size = document.getElementById('message_size');
message.addEventListener("input", (event) => {
  let size = getCharacterLength(message.value);
  message_size.innerText = `${ size } 文字入力しました。`;
});

/*-----------------------------------------------------------------------------
  CSS疑似クラスを活用した、モダンでインタラクティブなフォームの作り方
  https://ics.media/entry/200413/
  今どきの入力フォームはこう書く！inputタグの書き方まとめ
  https://ics.media/entry/11221/
-----------------------------------------------------------------------------*/
// フォーム全体の妥当性を判定する為の関数の定義
let validate = () => {
  let validForm         = document.querySelector("form:valid");
  let submitButton      = document.getElementById("submit");
  submitButton.disabled = (validForm === null);
};

// (送信ボタンが押せないようにするために) 初回読み込み時に、validate関数を実行。
validate();

// フォームに入力されたら、validate関数を実行
document.querySelectorAll("input, textarea").forEach((input) => {
  input.addEventListener("input", validate);
});

/*-----------------------------------------------------------------------------
  どの記事を見てからの問い合わせか分かるよう、参照元URLを取得する
-----------------------------------------------------------------------------*/
document.getElementById("referrer_url").value = document.referrer;

/*-----------------------------------------------------------------------------
  フォーム送信前にタブを閉じる際に、確認アラートを表示する。
  Window: beforeunload イベント
  https://developer.mozilla.org/ja/docs/Web/API/Window/beforeunload_event
  beforeunload イベントは、ウィンドウ、文書、およびそのリソースがアンロードされる直前に発生します。文書はまだ表示されており、この時点ではイベントはキャンセル可能です。
  このイベントによって、ウェブページがダイアログボックスを表示し、ユーザーにページを終了するかどうかの確認が求めることができます。ユーザーが確認すれば、ブラウザーは新しいページへ遷移し、そうでなければ遷移をキャンセルします。

  ページ離脱時にアラート表示
  https://qiita.com/naoki_koreeda/items/bf0f512dbd91b450c671
-----------------------------------------------------------------------------*/
let confirmationAlert = (event) => {
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = '';
};

// ページ離脱しようとした際に、アラートを表示する。
window.addEventListener('beforeunload', confirmationAlert, false);

// 但し、#submit が押された際には、アラートを表示させない。
document.getElementById('submit').addEventListener('click', () => {
  window.removeEventListener('beforeunload', confirmation_alert, false);
});
