// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const selectedDate = selectedDates[0].getTime();
    if (selectedDate <= Date.now()) {
      window.alert(`Please choose a date in the future`);
    }
    startBtn.removeAttribute('disabled');
  },
};

flatpickr('#datetime-picker', options);
