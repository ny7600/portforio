

// burger-icon,burger-menu

const btn = document.getElementById('burger-icon');
const menu = document.getElementById('burger-menu');
const right = document.getElementsByClassName('right');




btn.addEventListener ('click', function() {

  this.classList.toggle('clicked');
  menu.classList.toggle('open');
  for(let i = 0; i < right.length; ++i) {
    right[i].classList.toggle('move');
  };

});

(()=>{

  const doc = document;
  const tab = doc.getElementById("js-tabs")
  const nav = doc.querySelectorAll("[data-nav]")
  const content = doc.querySelectorAll("[data-content]")

  // 初期化
  const init = () => {
    content[0].style.display = "block";
  };
  init();

  // クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault();

    // クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;

    console.log("targetVal!", targetVal);

    // 対象外のnav、contentをリセットする
    let index = 0;
    while(index < nav.length) {
      content[index].style.display = "none";
      nav[index].classList.remove("active");
      index++;
    }

    // 対象のコンテンツをアクティブ化する
    tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = "block";
    nav[targetVal].classList.add("active");
  };

  // 全navに対して関数を適用・発火
  let index = 0;
  while(index < nav.length) {
    nav[index].addEventListener("click", (e) => handleClick(e));
    index++;
  }
})();








