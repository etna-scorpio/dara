import $ from 'jquery';

var BODY = $('body');
var searchBox = '.js-search-box';
var search = $('.js-search');
var autocomplete = $('.js-search-autocomplete');
var searchIcon = $('.js-search-loop');
var closeIcon = $('.js-search-close');

if (search.length) {
  toggleSearchField();
  clearSearchField();

  BODY.click(function(e) {
    if (!e.target.closest(searchBox) && $(searchBox).hasClass('is-active')) {
      hideSearchField();
      hideAutocomplete();
      closeIcon.hide();
    }
  });
}

search.on('keyup', function() {
  if($(this).val().length > 0) {
    showAutocomplete();
    closeIcon.show();
  } else {
    hideAutocomplete();
    closeIcon.hide();
  }
});

function toggleSearchField() {
  searchIcon.click(function() {
    $(searchBox).toggleClass('is-active');
    if ($(searchBox).hasClass('is-active')) {
      search.focus();
      if(search.val().length > 0) closeIcon.show();
    } else {
      closeIcon.hide();
      hideAutocomplete();
    }
  });
}

function showAutocomplete() {
  autocomplete.addClass('is-active');
}

function hideAutocomplete() {
  autocomplete.removeClass('is-active');
}

function hideSearchField() {
  $(searchBox).removeClass('is-active');
}

function clearSearchField() {
  closeIcon.click(function() {
    search.val('');
    search.focus();
    closeIcon.hide();
    hideAutocomplete();
  });
}
