import $ from 'jquery';

var BODY = $('body');
var searchBox = '.js-search-box';
var search = $('.js-search');
var autocomplete = $('.js-search-autocomplete');
var searchIcon = $('.js-search-loop');
var closeIcon = $('.js-search-close');

if (search.length) {
  toggleSearchField();
  showAutocomplete();
  hideAutocomplete();
  clearSearchField();

  BODY.click(function(e) {
    if ( search.val().length <= 0
				 && !e.target.closest(searchBox)
				 && search.hasClass('is-visible')) {
      hideSearchField();
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

search.on('blur', function() {
  if($(this).val().length < 1) {
    hideSearchField();
    hideAutocomplete();
  }
});

function toggleSearchField() {
  searchIcon.click(function() {
    search.toggleClass('is-visible');
  });
}

function showAutocomplete() {
  autocomplete.addClass('is-active');
}

function hideAutocomplete() {
  autocomplete.removeClass('is-active');
}

function hideSearchField() {
  search.removeClass('is-visible');
}

function clearSearchField() {
  closeIcon.click(function() {
    $(this).hide();
    search.val('');
    hideAutocomplete();
  });
}


