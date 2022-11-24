function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function changeBodyColor() {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
  timerID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

startBtn.addEventListener('click', changeBodyColor);

stopBtn.addEventListener('click', () => {
  stopBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
  clearInterval(timerID);
});
