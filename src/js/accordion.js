import $ from 'jquery';

var collapseTitle = $('.js-dara-collapse-bar'),
  collapseContent = $('.js-dara-collapse-content');


function slideToggleContent() {
  collapseTitle.click(function() {
  	$(this).toggleClass('is-active');
    $(this).siblings(collapseContent).slideToggle();
  });
}

slideToggleContent();
