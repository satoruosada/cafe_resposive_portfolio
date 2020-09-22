(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

 $(function(){
  $(window).scroll(function(){
    $('.js-slideUp').each(function(){
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
            if (scroll > targetElement - windowHeight + 100){
                $(this).css('opacity','14');
                $(this).css('transform','translateX(0)');
        }
      });
    });
  });

  $(function(){
 
    const MSG_TEXT_MAX = '20文字以内で入力してください。';
    const MSG_EMPTY = '入力必須です。';
    const MSG_EMIL_TYPE = 'emailの形式ではありません。';
    const MSG_TEXTAREA_MAX = '100文字以内で入力してください。';
     
    $(".valid-text").keyup(function(){
     
      var form_g = $(this).closest('.form-group');
     
      if($(this).val().length > 20 ){
        form_g.removeClass('has-success').addClass('has-error');
        form_g.find('.help-block').text(MSG_TEXT_MAX);
      }else{
        form_g.removeClass('has-error').addClass('has-success');
        form_g.find('.help-block').text('');
      }
    });
     
    $(".valid-email").keyup(function(){
     
      var form_g = $(this).closest('.form-group');
     
      if( $(this).val().length === 0 ){
        form_g.removeClass('has-success').addClass('has-error');
        form_g.find('.help-block').text(MSG_EMPTY);
      }else if($(this).val().length > 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/) ){
        form_g.removeClass('has-success').addClass('has-error');
        form_g.find('.help-block').text(MSG_EMIL_TYPE);
      }else{
        form_g.removeClass('has-error').addClass('has-success');
        form_g.find('.help-block').text('');
      }
    });
     
    $(".valid-textarea").keyup(function(){
     
      var form_g = $(this).closest('.form-group');
     
      if($(this).val().length === 0){
        form_g.removeClass('has-success').addClass('has-error');
        form_g.find('.help-block').text(MSG_EMPTY);
      }else if( $(this).val().length > 100 ){
        form_g.removeClass('has-success').addClass('has-error');
        form_g.find('.help-block').text(MSG_TEXTAREA_MAX);
      }else{
        form_g.removeClass('has-error').addClass('has-success');
        form_g.find('.help-block').text('');
      }
    });
     
    });
},{}]},{},[1]);
