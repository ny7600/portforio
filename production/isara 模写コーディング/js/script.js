
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

$(function(){
  //.flow-innerの中の.flow-leftがクリックされたら
  $('.flow-pc .flow-inner .flow-left').click(function(){
    //クリックされた.flow-innerの中の.flow-leftに隣接する.flow-rightが開いたり閉じたりする。
    $(this).next('.flow-right').slideToggle();
    $(this).toggleClass("open");
    //クリックされた.flow-innerの中の.flow-left以外の.flow-innerの中の.flow-leftに隣接する.flow-innerの中の.flow-rightを閉じる
    $('.flow-pc .flow-inner .flow-left').not($(this)).next('.flow-inner .flow-right').slideUp();
    $('.flow-pc .flow-inner .flow-left').not($(this)).removeClass("open");
  });
});

$(function(){
  $(".accordion-2 .accordion-2-item .accordion-2-head").click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass("open");
  });
});






