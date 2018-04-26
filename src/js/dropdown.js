var filter = $('.js-dara-filter');
var dropdown = '.js-filter-dropdown';
var dropdownLink = $('.js-filter-dropdown-link');
var dropdownList = '.js-filter-dropdown-list';

showDropdown();
hideDropdown();

function showDropdown() {
  dropdownLink.click(function(e) {
    e.preventDefault();
    $(this).closest(dropdown).toggleClass('is-open');
    // $('body').addClass('is-overlay');
    // filter.addClass('is-overlay');
  });
}

function hideDropdown() {

}
