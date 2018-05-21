import $ from 'jquery';

var inputData = $('.js-input-data');

moveInputLabelUp(inputData);
moveInputLabelDown(inputData);

function moveInputLabelUp(el) {
  el.on('focus', function() {
    $(this).parent().addClass('is-active');
  });
}

function moveInputLabelDown(el) {
  el.on('blur', function() {
    if (!$(this).val()) {
    	$(this).parent().removeClass('is-active');
    }
  });
}
