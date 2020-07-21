import $ from 'jquery';

var win = $(window);
var header = $('.js-header');
var startButton = $('.js-button-start');
// var logo = $('.js-header-logo');

changeHeaderBg();
// moveLogo();
if (startButton.length > 0) showHeaderStartButton();

win.scroll(function() {
  changeHeaderBg();
  // moveLogo();
  if (startButton.length > 0) showHeaderStartButton();
});

win.resize(function() {
  if (startButton.length > 0) showHeaderStartButton();
});

function changeHeaderBg() {
  if( win.scrollTop() > 0 ) {
    header.addClass('is-active');
  } else {
    header.removeClass('is-active');
  }
}

// function moveLogo() {
//   if (logo.length) {
//     if (win.scrollTop() === 0) {
//       logo.addClass('header__logo--move');
//     } else {
//       logo.removeClass('header__logo--move');
//     }
//   }
// }

function showHeaderStartButton() {
  var startButtonPos = startButton.offset().top + startButton.outerHeight();
  if (startButton.length) {
    if (win.scrollTop() + header.height() > startButtonPos) {
      header.addClass('is-start');
    } else {
      header.removeClass('is-start');
    }
  }
}
