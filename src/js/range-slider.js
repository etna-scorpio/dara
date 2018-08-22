import noUiSlider from 'nouislider';

var slider = document.getElementById('range-slider');

noUiSlider.create(slider, {
  start: [30],
  connect: [true, false],
  range: {
    'min': 0,
    'max': 100
  }
});
