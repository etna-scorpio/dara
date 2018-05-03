import $ from 'jquery';

const BODY = $('body');
var modal = $('.js-modal');
var showModalField = $('.js-show-account-pane');
var closeModalBtn = $('.js-close-modal');


function showModal() {
  modal.addClass('is-visible');
  BODY.addClass('is-overflow');
}

function hideModal() {
  modal.removeClass('is-visible');
  BODY.removeClass('is-overflow');
}

showModalField.click(function(e) {
  e.preventDefault();
  showModal();
});

closeModalBtn.click(function(e) {
  e.preventDefault();
 	hideModal();
});

BODY.click(function(e) {
  if ( !e.target.closest('.js-modal')
    && !e.target.closest('.js-show-account-pane')
  	&& modal.hasClass('is-visible')) {
    hideModal();
  }
});
