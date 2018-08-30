import $ from 'jquery';

var ingredientsBtn = $('.js-filter-add-ingredients');
var filter = $('.js-filter');
var addBtn = $('.js-ingredient-add-button');

ingredientsBtn.click(function(e) {
  e.preventDefault();
  $(this).hide();
  filter.addClass('is-visible');
  addBtn.addClass('is-visible').siblings().hide();
});
