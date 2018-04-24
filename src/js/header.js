import $ from 'jquery';

var win = $(window);
var header = $('.js-dara-header');
var logo = $('.js-dara-header-logo');

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
      logo.addClass('dara-header__logo--move');
    } else {
      logo.removeClass('dara-header__logo--move');
    }
  }
}
