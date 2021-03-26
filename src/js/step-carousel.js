import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
  var slider = $('.js-step-carousel');

  if (slider.find('.quiz-item').length > 1) {
    $('.js-step-carousel').slick({
      dots: true,
      arrows: false,
      draggable: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      prevArrow: '<button type="button" class="slick-prev"><svg viewBox="0 0 12 20"><path d="M3.716 3.79L9.729 10l-6.014 6.208a.774.774 0 0 0 0 1.07.719.719 0 0 0 1.038 0l6.532-6.743a.773.773 0 0 0 0-1.07L4.753 2.721a.72.72 0 0 0-1.039 0 .774.774 0 0 0 .002 1.07z"></path></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg viewBox="0 0 12 20"><path d="M3.716 3.79L9.729 10l-6.014 6.208a.774.774 0 0 0 0 1.07.719.719 0 0 0 1.038 0l6.532-6.743a.773.773 0 0 0 0-1.07L4.753 2.721a.72.72 0 0 0-1.039 0 .774.774 0 0 0 .002 1.07z"></path></svg></button>',
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true
          }
        }
      ]
    });
  }



});
