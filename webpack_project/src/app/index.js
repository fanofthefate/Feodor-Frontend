import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import Swiper from 'swiper';

//Font Avesome
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import 'bootstrap-select';

import '../style/app.scss';

(function ($) {
  $('.card__exam').on('click', function(){
   $('.personal-cabinet__home-page').hide();
   $('.personal-cabinet__interface').show();
 });

  $('[data-toggle="popover"]').popover();
  $('select').selectpicker();


  let  schoolItemsSlider = new Swiper('.school-items-slider', {
    slidesPerView: 5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.school-items-slider__navigation__next',
      prevEl: '.school-items-slider__navigation__prev',
    },
    mousewheel: {
      sensitivity: 1
    },
    on:{
      observerUpdate: function(){
        this.updateSize();
      }
    }
  });


  $('[data-sidebar]').on('click', function(){
    let sidebar_push = $(this).data('sidebar');
    $('.sidebar-'+sidebar_push).toggleClass('sidebar-mini');
    if (sidebar_push == 'left') {
      $('body').toggleClass('sidebar-'+sidebar_push+'-collapse');
    }
  });

  $('.sidebar__link[data-toggle="pill"]').on('click', function(e){
    if ($('.sidebar-right').hasClass('sidebar-mini') == false) {
      $('.sidebar-right').addClass('sidebar-mini');
    }

    if ($('.messanger-wrapper').hasClass('open') == false) {
      $('.messanger-wrapper').addClass('open');
    }

if ($('.messanger-wrapper').hasClass('open') == false) {
        $('.messanger-wrapper').addClass('open');
      }
    

    });

  $('[data-action]').on('click' , function(){
    let target_type = $(this).data('action'),
    target = $(this).data('target');
    switch(target_type){
      case 'dialog':
      $(target).show();
      break;
      case 'back-link':
      $(target).hide();
      break;
      case 'switch-logo':
      $('.sign-logo').hide();
      $(target).show();
      break;
      case 'sign-submit':
      $('.sign__form__phone').hide(); 
      $('.sign__form__verifiled').show(); 
      $('#btnSignSubmit').html('Отправить <i class="fas fa-arrow-right"></i>'); 
      $('[name="typeSignForm"]').attr('disabled', 'disabled'); 
    }
  });

})(jQuery);



