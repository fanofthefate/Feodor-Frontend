import $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import Swiper from 'swiper';

//Font Avesome
import '@fortawesome/fontawesome-free/js/all'

import 'bootstrap-select';

import '../style/app.scss';

(function ($) {

  let sidebarRight = $('.sidebar-right');

  $('[data-toggle="popover"]').popover();
  $('select').selectpicker();
  $('[data-toggle="tooltip"]').tooltip();
  $('#selectPartner').selectpicker('hide'); //Скрываем по умолчанию выбор типа регестрации
  let  schoolItemsSlider = new Swiper('.courses-level-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.courses-level__navigation__next',
      prevEl: '.courses-level__navigation__prev',
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
    $('body').toggleClass('chat-open');
  });

  $('[data-sidebar]').on('click', function(){
    let sidebar_push = $(this).data('sidebar');
    $('.sidebar-'+sidebar_push).toggleClass('sidebar-mini');
  });



  $('[data-toggle="pill"]').on('click', function(e){
    let navLink = $('[data-toggle="nav-link"]');
    let navLinkTarget = $('[data-toggle="nav-link"]').attr('href');
    let wrapper = $('.messanger-wrapper');

    if (!wrapper.hasClass('open')) {
      wrapper.addClass('open');
      $('body').addClass('chat-open');
    } 

    if (!sidebarRight.hasClass('sidebar-mini')) {
      sidebarRight.addClass('sidebar-mini');
    }

  });
  $('[data-type-sign]').on('click', function(){
    let activeTypeSign = $(this).data('type-sign');

  });

  $('[data-action]').on('click' , function(e){
    let target_type = $(this).data('action'),
    target = $(this).data('target');
    switch(target_type){
      case 'dialog':
      $(target).show();
      break;
      case 'switch-logo':
      $('.sign-logo').hide();
      $(target).show();
      break;
      case 'formConfirm':
      $('#formField').hide(); //Скрыли поля для заполнения 
      $('#formConfirm').show();  //Показали подтверждение по СМС
      break;
      case 'chose-type-sign': // Выбрать тип регистрации
      if ($('.sign-teacher').hasClass('active')) {
        $('#selectPartner').selectpicker('show');
        $('#SignLogoStudent').hide();
        $('#SignLogoTeacher').show();
      } else{
        $('#selectPartner').selectpicker('hide');
        $('#selectPartner').val('noselect'); // Сброс селекта
        $('#selectPartner').selectpicker('refresh'); // Сброс селекта
        $('#SignLogoTeacher').hide();
        $('#SignLogoStudent').show();
        
      }
      break;
    }
  });

})(jQuery);



