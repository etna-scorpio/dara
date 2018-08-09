import $ from 'jquery';
import 'owl.carousel';

$(document).ready(function() {
  $('.js-step-carousel').owlCarousel({
  	margin: 20,
    dots: true,
    mouseDrag: false,
    responsiveRefreshRate: 100,
  	responsive:{
  		0:{
  			items: 1
  		},
  		600:{
  			items: 2
  		}
  	}
  });
});

