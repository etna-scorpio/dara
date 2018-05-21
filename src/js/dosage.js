import $ from 'jquery';

var dosageBtn = $('.js-change-dosage');
var priceForItem;

if (dosageBtn) showPriceForItem();

function showPriceForItem() {
  dosageBtn.click(function() {
    priceForItem = $(this).closest('.js-dosage').find('.js-price-for-item');

    priceForItem.addClass('is-visible');
    setTimeout(function() {
      priceForItem.removeClass('is-visible');
    }, 1500);
  });
}
