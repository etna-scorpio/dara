import $ from 'jquery';

var BODY = $('body');
var filter = $('.js-filter');
var dropdown = '.js-filter-dropdown';
var dropdownLink = $('.js-filter-dropdown-link');
var dropdownHide = $('.js-filter-dropdown-hide');
var dropdownRadiobox = $('.js-filter-radio');

showDropdown();
clearDropdown();

function showDropdown() {
  dropdownLink.click(function(e) {
    e.preventDefault();
    $(this).closest(dropdown).addClass('is-open');
    BODY.addClass('is-overlay');
    filter.addClass('is-overlay');
  });
}

function hideDropdown(el) {
  if (el) {
    el.closest(dropdown).removeClass('is-open');
  } else {
    $(dropdown).removeClass('is-open');
  }
  BODY.removeClass('is-overlay');
  filter.removeClass('is-overlay');
}

function clearDropdown() {
  dropdownHide.click(function(e) {
    e.preventDefault();
    let item = $(this);

    dropdownRadiobox.each(function(index,item) {
      if( $(item).prop('checked') ) $(item).prop('checked', false);
    });

    hideDropdown(item);

  });
}

BODY.click(function(e) {
  if ( !e.target.closest('.js-filter-dropdown') && $(dropdown).hasClass('is-open')) {
    hideDropdown();
  }
});
