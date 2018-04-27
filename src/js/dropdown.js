var filter = $('.js-dara-filter');
var dropdown = '.js-filter-dropdown';
var dropdownLink = $('.js-filter-dropdown-link');
var dropdownList = '.js-filter-dropdown-list';
var dropdownHide = $('.js-filter-dropdown-hide');

showDropdown();
hideDropdown();

function showDropdown() {
  dropdownLink.click(function(e) {
    e.preventDefault();
    $(this).closest(dropdown).addClass('is-open');
    $('body').addClass('is-overlay');
    filter.addClass('is-overlay');
  });
}

function hideDropdown() {
  dropdownHide.click(function(e) {
    e.preventDefault();
    $(this).closest(dropdown).removeClass('is-open');
    $('body').removeClass('is-overlay');
    filter.removeClass('is-overlay');
  });
}
