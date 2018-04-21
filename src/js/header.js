import $ from 'jquery';

var win = $(window);
var header = $('.js-header');
var logo = $('.js-header-logo');

function changeHeaderBg() {
  win.scroll(function() {
	  if( win.scrollTop() > 0 ) {
	    header.addClass('is-active');
	    if (logo.length) logo.removeClass('header__logo--move');
	  } else {
	    header.removeClass('is-active');
	    if (logo.length) logo.addClass('header__logo--move');
	  }

  });
}

changeHeaderBg();
