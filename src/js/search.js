var search = $('.js-search');
var autocomplete = $('.js-search-autocomplete');

showAutocomplete();
hideAutocomplete();

function showAutocomplete() {
  search.on('keyup', function() {
  	if($(this).val().length > 0) {
    	autocomplete.addClass('is-active');
  	} else {
  		autocomplete.removeClass('is-active');
  	}
  });
}

function hideAutocomplete() {
  search.on('blur', function() {
    autocomplete.removeClass('is-active');
  });
}
