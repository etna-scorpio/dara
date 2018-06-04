import $ from 'jquery';

var BODY = $('body');
var searchBox = '.js-search-box';
var search = $('.js-search');
var autocomplete = $('.js-search-autocomplete');
var searchIcon = $('.js-search-loop');
var closeIcon = $('.js-search-close');

if (search.length) {
  toggleSearchField();

  BODY.click(function(e) {
    if ( search.val().length <= 0
				 && !e.target.closest(searchBox)
				 && $(searchBox).hasClass('is-active')) {
      console.log('body click');
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

// search.on('blur', function() {
//   if($(this).val().length < 1) {
//     hideSearchField();
//     hideAutocomplete();
//   }
// });

function toggleSearchField() {
  searchIcon.click(function() {
    $(searchBox).toggleClass('is-active');
    if ($(searchBox).hasClass('is-active')) {
      search.focus();
    } else {
      search.val('');
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


