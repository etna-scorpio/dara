import $ from 'jquery';

const BODY = $('body');
var showMenuBtn = $('.js-show-menu-btn');
var closeMenuBtn = $('.js-close-menu-btn');
var menu = $('.js-menu');

function showMenu() {
  menu.addClass('is-active');
}

function hideMenu() {
  menu.removeClass('is-active');
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
