import $ from 'jquery';

const BODY = $('body');
var showMenuBtn = $('.js-show-menu-btn');
var closeMenuBtn = $('.js-close-menu-btn');
var menu = $('.js-menu');

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
  if ( !e.target.closest('.js-menu')
  	&& !e.target.closest('.js-show-menu-btn')
  	&& menu.hasClass('is-active')) {
    hideMenu();
  }
});
