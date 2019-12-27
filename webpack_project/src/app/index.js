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

  //Открывает левое меню https://prnt.sc/q9zp9n

  $('[data-widget="pushmenu"]').on('click', function(){
    $('body').toggleClass('main-sidebar-collapse');
  });

})(jQuery);
