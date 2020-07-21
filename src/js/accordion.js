import $ from 'jquery';

var collapseTitle = $('.js-product-collapse-bar'),
  collapseContent = $('.js-product-collapse-content');


function slideToggleContent() {
  collapseTitle.click(function() {
  	$(this).toggleClass('is-active');
    $(this).siblings(collapseContent).slideToggle();
  });
}

slideToggleContent();
