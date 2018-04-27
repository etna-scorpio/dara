import $ from 'jquery';

var win = $(window);
var header = $('.js-dara-header');
var startButton = $('.js-dara-button-start');
var logo = $('.js-dara-header-logo');

changeHeaderBg();
moveLogo();
showHeaderStartButton();

win.scroll(function() {
  changeHeaderBg();
  moveLogo();
  showHeaderStartButton();
});

win.resize(function() {
  showHeaderStartButton();
});

function changeHeaderBg() {
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

function showHeaderStartButton() {
  if (startButton.length) {
    if (win.scrollTop() > startButton.offset().top + startButton.height()) {
      header.addClass('is-start');
    } else {
      header.removeClass('is-start');
    }
  }
}
