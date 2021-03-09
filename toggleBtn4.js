$(function(){
  // 요소의 기본 성격 제거
  $('a[href="#"]').on('click',function(e){
    e.preventDefault();
  });

  // 배너
  /*
  $('.close').on('click',function(){
    $('.banner').toggleClass('on');
  });
  */

  if($.cookie('popup')=='none') { // 만들어 놓은 쿠키 'popup'의 값이 'none'과 같으면
    $('.banner').hide(); //배너 숨김
  }

  // 선언함수: 이름이 있는 함수. 이름으로 호출할 수 있으므로 작성 위치가 자유로움
  function closeBanner(){ // closeBanner <- 사용자가 정의한 이름

    let $limit = $('#limit');
    if($limit.is(':checked')){ // 체크박스에 체크되면, 
      $.cookie('popup','none',{expires:3, path: '/'})// 지정된 기간 동안 열지 않음.

    }

    $('.banner').toggleClass('on');
  };

  $('.close_btn').on('click', closeBanner);


  //슬라이드
  $('.tab li').on('click',function(){
    let idx = $(this).index();
    $('.slide').animate({marginLeft:-640 * idx},600);
  });
});