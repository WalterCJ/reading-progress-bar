import progressBar from './readingProgressbar';

let options = {
  parentElement: document.body,
  backgroundColor: '#f3f3f3',
  height: '10px',
  gradientFirstColor: '#42b5f0',
  gradientSecondColor: '#22dca7'
};

const init = function(optionsUser) {
  options = Object.assign(options, optionsUser);
  progressBar(options);
};

export default init;
