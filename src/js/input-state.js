import $ from 'jquery';

var input = $('.js-input');

moveInputLabelUp();
moveInputLabelDown();

function moveInputLabelUp() {
  input.on('focus', function() {
  	console.log($(this), $(this).parent());
    $(this).parent().addClass('is-active');
  });
}

function moveInputLabelDown() {
  input.on('blur', function(e) {
    if ($(e.target).val().length === 0) {
    	$(this).parent().removeClass('is-active');
    }
  });
}
