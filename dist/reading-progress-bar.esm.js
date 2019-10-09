function readingProgressBar(_ref) {
  var parentElement = _ref.parentElement,
      backgroundColor = _ref.backgroundColor,
      height = _ref.height,
      gradientFirstColor = _ref.gradientFirstColor,
      gradientSecondColor = _ref.gradientSecondColor;
  //Container element
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.width = '100%';
  container.style.height = '5px';
  container.style.backgroundColor = backgroundColor;
  container.style.left = 0;
  container.style.top = 0; //progress bar element

  var progressBar = document.createElement('div');
  progressBar.style.width = '0px';
  progressBar.style.height = height;
  progressBar.style.backgroundImage = "linear-gradient(to right, ".concat(gradientFirstColor, ", ").concat(gradientSecondColor, " )");
  container.appendChild(progressBar);
  parentElement.appendChild(container);
  var windowScrollPixels = 0;
  var windowScrollPercents = 0;
  var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  window.addEventListener('scroll', function () {
    windowScrollPixels = document.body.scrollTop || document.documentElement.scrollTop;
    windowScrollPercents = windowScrollPixels / scrollHeight * 100;
    progressBar.style.width = "".concat(windowScrollPercents, "%");
  });
}

var options = {
  parentElement: document.body,
  backgroundColor: '#f3f3f3',
  height: '10px',
  gradientFirstColor: '#42b5f0',
  gradientSecondColor: '#22dca7'
};

var init = function init(optionsUser) {
  options = Object.assign(options, optionsUser);
  readingProgressBar(options);
};

export default init;
