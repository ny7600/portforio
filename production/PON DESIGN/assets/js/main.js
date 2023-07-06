

const menuBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open")
  burgerMenu.classList.toggle("open")
});

const header = document.querySelector(".header")
window.addEventListener("scroll", () => {
  let scroll_Y = window.scrollY;
  if(scroll_Y > 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

//ボタン
const returnTop = document.querySelector('.return-top');

//クリックイベントを追加
returnTop.addEventListener( 'click' , scroll_to_top );

function scroll_to_top(){
	window.scroll({top: 0, behavior: 'smooth'});
};


//スクロール時のイベントを追加
window.addEventListener( 'scroll' , scroll_event );

function scroll_event(){
	
	if(window.pageYOffset > 400){
		returnTop.style.opacity = '1';
	}else	if(window.pageYOffset < 300){
		returnTop.style.opacity = '0';
	}
	
};


