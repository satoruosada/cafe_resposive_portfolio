$(function () {

  // フロートヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll', function() {
    $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
  });

  //DropDownmenu
 $(function(){
  $("ul.c-menu li").hover(function(){
    $("ul.sub:not(:animated)", this).slideDown();
  }, function(){
    $("ul.sub", this).slideUp();
  });
});

  //spメニュー
  $('.js-toggle-sp-menu').on('click',function(){
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });
});

//access
$(function(){
  $(window).scroll(function(){
    $('.js-slideDown').each(function(){
      var targetElement = $(this).offset().top;
       var scroll = $(window).scrollTop();
       var windowHeight = $(window).height();
       if(scroll > targetElement - windowHeight + 300){
         $(this).css('opacity','1');
         $(this).css('transform','translateX(0)');
       }
     });
   });
 });

//contact
 $(function(){
   $(window).scroll(function(){
     $('.js-fadeIn').each(function(){
       var targetElement = $(this).offset().top;
       var scroll = $(window).scrollTop();
       var windowHeight = $(window).height();
       if(scroll > targetElement - windowHeight + 300){
         $(this).css('opacity','1');
         $(this).css('transform','translateY(0)');
       }
     });
   });
 });


  $(function(){
    $(window).scroll(function (){
        $('.js-slideIn').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 300){
                $(this).css('opacity','2');
                $(this).css('transform','translateX(0)');
        }
      });
    });
  });
