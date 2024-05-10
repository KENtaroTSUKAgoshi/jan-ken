function kick(direction) {
  var resultElement = document.getElementById('result');

  // ゴールを決めたか判定
  var isGoal = Math.random() < 0.3; // 33%の確率でゴール
  var message = '';

  if (isGoal) {
    message = '〇 ⚽ゴール⚽ゴール⚽！';
    resultElement.style.color = 'green'; // 正解メッセージの色を緑に変更
  } else {
    message = '× 🧤キーパーが止めた🧤！';
    resultElement.style.color = 'red'; // 不正解メッセージの色を赤に変更
  }

  // キックの方向によってメッセージを変更
  switch (direction) {
    case 'front':
      message = '左にシュート：' + message;
      break;
    case 'right':
      message = '正面にシュート：' + message;
      break;
    case 'left':
      message = '右にシュート：' + message;
      break;
    default:
      break;
  }

  resultElement.textContent = message;
}
