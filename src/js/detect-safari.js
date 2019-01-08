import $ from 'jquery';

function detectSafari() {
  var ua = navigator.userAgent.toLowerCase();
  var isSafari = (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1);

  if (isSafari) {
  	$('body').addClass('is-safari');
  }

}

detectSafari();
