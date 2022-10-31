// ======================================================================
// 使い方 例
// p.js-scroll hi
// ↑のpが画面の9割地点に入ったら.js-activeを追加する
// animationの仕方はcss(scss)に記述する
//
// ======================================================================

export const scrollAddClass = function () {
  //Classを追加する要素を取得
  const target = document.querySelectorAll('.js-scroll');
  //Classを追加する位置を指定（ビューポート内）
  let position = Math.floor(window.innerHeight * 0.9); //左記はビューポート内の上から90%の位置を指定
  //要素の数だけループする
  for (var i = 0; i < target.length; i++) {
    //要素の上部座標を取得する（小数点切り捨て）
    let offsetTop = Math.floor(target[i].getBoundingClientRect().top);
    //要素の上部座標がpositionの位置を通過したら
    if (offsetTop < position) {
      //要素にClassを追加する
      target[i].classList.add('js-active');
    }
  }
};
