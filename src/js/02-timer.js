import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
let dateInput = document.querySelector('#datetime-picker');
let btnMain = document.querySelector('[data-start]');
btnMain.disabled = true;
let timeDiff = 0;

let time = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

function addLeadingZero(value) {
  value = value.toString(10);
  value = value.padStart(2, '0');
  return value
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  let days = Math.floor(ms / day);
  // Remaining hours
  let hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  let minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  let seconds = Math.floor((((ms % day) % hour) % minute) / second);

  days = addLeadingZero(days);
  time.days.textContent = days;

  hours = addLeadingZero(hours);
  time.hours.textContent = hours;

  minutes = addLeadingZero(minutes);
  time.minutes.textContent = minutes;

  seconds = addLeadingZero(seconds);
  time.seconds.textContent = seconds;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedDate = selectedDates[0];
    let currentDate = new Date();
    if (currentDate.getTime() > selectedDate.getTime()) {
      window.alert('выбрал прошлое');
    }
    btnMain.disabled = false;
    function difFunc(e) {
      currentDate = new Date();
      timeDiff = selectedDate.getTime() - currentDate.getTime();
      console.log(convertMs(timeDiff));
    }
    function fStart(e) {
      setInterval(difFunc, 1000);
    }
    btnMain.addEventListener('click', fStart)
console.log(typeof(time.hours.textContent))
    
  },
};

flatpickr(dateInput, options);
