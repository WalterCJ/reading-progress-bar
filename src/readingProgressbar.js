function readingProgressBar({
  parentElement,
  backgroundColor,
  height,
  gradientFirstColor,
  gradientSecondColor
}) {
  //Container element
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.width = '100%';
  container.style.height = '5px';
  container.style.backgroundColor = backgroundColor;
  container.style.left = 0;
  container.style.top = 0;
  //progress bar element
  const progressBar = document.createElement('div');
  progressBar.style.width = '0px';
  progressBar.style.height = height;
  progressBar.style.backgroundImage = `linear-gradient(to right, ${gradientFirstColor}, ${gradientSecondColor} )`;

  container.appendChild(progressBar);
  parentElement.appendChild(container);

  let windowScrollPixels = 0;
  let windowScrollPercents = 0;
  const scrollHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

  window.addEventListener('scroll', () => {
    windowScrollPixels = document.body.scrollTop || document.documentElement.scrollTop;

    windowScrollPercents = (windowScrollPixels / scrollHeight) * 100;
    progressBar.style.width = `${windowScrollPercents}%`;
  });
}

export default readingProgressBar;
