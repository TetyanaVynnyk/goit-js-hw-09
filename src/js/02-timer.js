// Описаний в документації
import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const startBtn = document.querySelector('[data-start]');
let futureDate;
let selectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    futureDate = selectedDates[0];
    selectedDate = futureDate.getTime();
    if (selectedDate <= Date.now()) {
      // window.alert(`Please choose a date in the future`);
      Notify.failure('Please choose a date in the future');
    }
    startBtn.removeAttribute('disabled');
  },
};

flatpickr('#datetime-picker', options);

const timer = {
  start() {
    const startTime = selectedDate;
    const timerID = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedDate - currentTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      if (deltaTime < 1000) {
        clearInterval(timerID);
        startBtn.removeAttribute('disabled');
      }
      console.log(deltaTime);
      updateClockFace({ days, hours, minutes, seconds });
    }, 1000);
  },
};

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', true);
  timer.start();
});

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

const refs = {
  clockFace: document.querySelector('.timer'),
  day: document.querySelector('[data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
};

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.day.textContent = `${days}`;
  refs.hour.textContent = `${hours}`;
  refs.minute.textContent = `${minutes}`;
  refs.second.textContent = `${seconds}`;
}
