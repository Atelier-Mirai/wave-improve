/*=====================================================================
  レーダーチャートの説明 （Charts.js 公式）
  https://www.chartjs.org/docs/latest/charts/radar.html
=====================================================================*/

// 色の設定
const colorSet = {
  // 線の色に用いる
  red   : "#ff251e",
  orange: "#f19072",
  yellow: "#ffec47",
  green : "#67a70c",
  blue  : "#2ca9e1",
  purple: "#674196",
  grey  : "#9ea1a3",

  // 背景色に用いる
  red_a   : "#ff251e80",
  orange_a: "#f1907280",
  yellow_a: "#ffec4780",
  green_a : "#67a70c80",
  blue_a  : "#2ca9e180",
  purple_a: "#67419680",
  grey_a  : "#9ea1a380",
}

// データ
const data = {
  labels: ["麺の味", "汁の味", "具の味", "ラーメンの量", "価格", "雰囲気", "立地"],
  datasets: [{
    label: "櫻幕ラーメン",
    data: [75, 79, 90, 70, 100, 55, 40],
    fill: true,                         // 塗りつぶす
    backgroundColor: colorSet.orange_a, // 背景色
    borderColor: colorSet.orange,       // 線の色
  }, {
    label: "平均",
    data: [58, 48, 40, 65, 56, 47, 50],
    fill: false,
    backgroundColor: colorSet.blue_a,
    borderColor: colorSet.blue,
  }]
};

// 調整
const config = {
  type: "radar",
  data: data,
  options: {
    plugins: {
      legend: {
        position: "bottom",     // 凡例は図の下に表示
      }
    },
    maintainAspectRatio: false, // 親要素の大きさに合わせ、図を描画する
    elements: {
      line: {
        borderWidth: 3          // 線の太さは 3px
      }
    },
    scales: {
      r: {
        suggestedMin: 0,     // 最小値 0
        suggestedMax: 100    // 最大値 100 の図を描画する
      }
    }
  }
}

// Canvas要素を取得
const ctx  = document.getElementById("myChart")

// 取得したCanvas要素に、config に基づき、図を描画する
const myChart = new Chart(ctx, config)
