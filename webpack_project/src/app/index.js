import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import Swiper from 'swiper';

//Font Avesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import '../style/app.scss';


(function ($) {

  $('.card__exam').on('click', function(){
   $('.personal-cabinet__home-page').hide();
   $('.personal-cabinet__interface').show();
 });

  let  schoolItemsSlider = new Swiper('.school-items-slider', {
    slidesPerView: 5,
    spaceBetween: 20,
    mousewheel: {
      sensitivity: 1
    },
    on:{
      observerUpdate: function(){
        this.updateSize();
        console.log('update')
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

  function _autoHeightDialogHistory(){
    let msgDlg__header = document.querySelector('.messanger__dialog__header'),
    msgDlg__footer = document.querySelector('.messanger__dialog__footer'),
    msgDlg__history = document.querySelector('.messanger__dialog__history'),
    msgDlg__wrapper = document.querySelector('.messanger-wrapper');

    let msgDlg__wrapper_h = msgDlg__wrapper.offsetHeight,
    msgDlg__header_h = msgDlg__header.offsetHeight,
    msgDlg__footer_h = msgDlg__footer.offsetHeight,
    msgDlg__history_h = msgDlg__wrapper_h - msgDlg__footer_h - msgDlg__header_h;
    msgDlg__history.style.height = msgDlg__wrapper_h - msgDlg__footer_h - msgDlg__header_h+'px';
  }

  _autoHeightDialogHistory();
  window.onresize = function() {
    _autoHeightDialogHistory();
  };

  $('[data-target]').on('click' , function(){
    let target_type = $(this).data('target'),
    target = $(this).attr('href');

    switch(target_type){
      case 'messanger':
        $('.messanger-wrapper').toggleClass('open');
        $(target).toggleClass('active');
        $(this).toggleClass('active');
        break;
      case 'dialog':
        $(target).show();
        _autoHeightDialogHistory();
        break;
      case 'back-link':
         $(target).hide();
         break;
    }




  });
})(jQuery);



