import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import Swiper from 'swiper';

//Font Avesome
import '@fortawesome/fontawesome-free/js/all'

import 'bootstrap-select';

import '../style/app.scss';

(function ($) {

  let sidebarRight = $('.sidebar-right');

  $('.card__exam').on('click', function(){
   $('.personal-cabinet__home-page').hide();
   $('.personal-cabinet__interface').show();
 });

  $('[data-toggle="popover"]').popover();
  $('select').selectpicker();
  $('[data-toggle="tooltip"]').tooltip()


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

  $('.messanger-control__close').on('click', function(){
    $('.messanger-wrapper').toggleClass('open');
  });

  $('[data-sidebar]').on('click', function(){
    let sidebar_push = $(this).data('sidebar');
    $('.sidebar-'+sidebar_push).toggleClass('sidebar-mini');
    if (sidebar_push == 'left') {
      $('body').toggleClass('sidebar-'+sidebar_push+'-collapse');
    }
  });

  $('[data-toggle="pill"]').on('click', function(e){
    let navLink = $('[data-toggle="nav-link"]');
    let navLinkTarget = $('[data-toggle="nav-link"]').attr('href');
    let wrapper = $('.messanger-wrapper');

    if (!wrapper.hasClass('open')) {
      wrapper.addClass('open');
    }   

    if (!sidebarRight.hasClass('sidebar-mini')) {
      sidebarRight.addClass('sidebar-mini');
    }
    
    

  });

  $('[data-action]').on('click' , function(e){
    let target_type = $(this).data('action'),
    target = $(this).data('target');
    switch(target_type){
      case 'dialog':
      $(target).show();
      break;
      case 'back-link':

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



