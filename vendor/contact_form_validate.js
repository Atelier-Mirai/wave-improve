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
  全角英数字から半角英数字への変換
-----------------------------------------------------------------------------*/
const replaceZenkakuToHankaku = (str) => {
  return str.replace(/[！-～]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
}

/*-----------------------------------------------------------------------------
  CSS疑似クラスを活用した、モダンでインタラクティブなフォームの作り方
  https://ics.media/entry/200413/

  // MDN クライアント側のフォームデータ検証 も参考になります
  // https://developer.mozilla.org/ja/docs/Learn/Forms/Form_validation
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
  どの施工例を見てからの問い合わせか分かるよう、
  参照元URLをセット
-----------------------------------------------------------------------------*/
document.getElementById("referrer_url").value = document.referrer;

/*-----------------------------------------------------------------------------
  フォーム送信前にタブを閉じる際に、確認アラートを表示する。
  【JavaScript】ページ離脱時に beforeunload でアラート表示
  https://qiita.com/naoki_koreeda/items/bf0f512dbd91b450c671
-----------------------------------------------------------------------------*/
let confirmation_alert = (event) => {
  // カスタムメッセージの設定（IE/Edgeのみ有効)
  const confirmMessage = '入力欄を破棄し、離脱します。よろしいですか？';
  event.returnValue = confirmMessage;
  return confirmMessage;
};

// beforeunloadイベントの登録
// submit ボタンが押されたときには、離脱アラートを表示しない。
window.addEventListener('beforeunload', confirmation_alert, false);

// submit時はアラート表示させない
document.getElementById('submit').addEventListener('click', () => {
  window.removeEventListener('beforeunload', confirmation_alert, false);
});
