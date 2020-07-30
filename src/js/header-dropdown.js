import $ from 'jquery';

var BODY = $('body');
var dropdown = '.js-header-dropdown';
var dropdownLink = $('.js-header-dropdown-link');
var dropdownList = '.js-header-dropdown-list';

showDropdown();

function showDropdown() {
  dropdownLink.click(function(e) {
    e.preventDefault();
    $(this).siblings(dropdownList).toggleClass('is-visible');
  });
}

function hideDropdown(el) {
  $(dropdownList).removeClass('is-visible');
}

BODY.click(function(e) {
  if (!e.target.closest(dropdown) && $(dropdownList).hasClass('is-visible')) {
    hideDropdown();
  }
});
