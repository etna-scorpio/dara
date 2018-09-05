import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function() {
  $('.js-dara-product-carousel').slick({
    dots: true,
    arrows: false,
    draggable: false,
    infinite: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging : function(slider, i) {
      var pathToImg = $(slider.$slides[i]).find('img').attr('src');
      return '<img src="' + pathToImg + '" class="slick-dots__img" />';
    }
  });

});
