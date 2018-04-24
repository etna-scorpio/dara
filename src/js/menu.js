import $ from 'jquery';

const BODY = $('body');
var showMenuBtn = $('.js-dara-show-menu-btn');
var closeMenuBtn = $('.js-dara-close-menu-btn');
var menu = $('.js-dara-menu');

function showMenu() {
  menu.addClass('is-active');
  BODY.addClass('is-overflow');
}

function hideMenu() {
  menu.removeClass('is-active');
  BODY.removeClass('is-overflow');
}

showMenuBtn.click(function(e) {
  e.preventDefault();
  showMenu();
});

closeMenuBtn.click(function(e) {
  e.preventDefault();
 	hideMenu();
});

BODY.click(function(e) {
  if ( !e.target.closest('.js-dara-menu')
  	&& !e.target.closest('.js-dara-show-menu-btn')
  	&& menu.hasClass('is-active')) {
    hideMenu();
  }
});
