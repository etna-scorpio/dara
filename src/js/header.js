import $ from 'jquery';

var win = $(window);
var header = $('.js-header');
var logo = $('.js-header-logo');

changeHeaderBg();
transformHeader();
moveLogo();

function changeHeaderBg() {
  win.scroll(function() {
    transformHeader();
    moveLogo();
  });
}

function transformHeader() {
  if( win.scrollTop() > 0 ) {
    header.addClass('is-active');
  } else {
    header.removeClass('is-active');
  }
}

function moveLogo() {
  if (logo.length) {
    if (win.scrollTop() === 0) {
      logo.addClass('header__logo--move');
    } else {
      logo.removeClass('header__logo--move');
    }
  }
}
