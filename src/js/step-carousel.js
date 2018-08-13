import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
  $('.js-step-carousel').slick({
    dots: true,
    arrows: false,
    draggable: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

});
