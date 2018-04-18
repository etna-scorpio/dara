import $ from 'jquery';

var header = $('.js-header');
var win = $(window);

function changeHeaderBg() {
  win.scroll(function() {
	  if( win.scrollTop() > 0 ) {
	    header.addClass('is-active');
	  } else {
	    header.removeClass('is-active');
	  }

  });
}

changeHeaderBg();
