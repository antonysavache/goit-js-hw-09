import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
let dateInput = document.querySelector('#datetime-picker')
let btnMain =  document.querySelector('[data-start]')
btnMain.disabled = true;
let timeDiff = 0;

let time = {
  days:document.querySelector('[data-days]'),
  hours:document.querySelector('[data-hours]'),
  minutes:document.querySelector('[data-minutes]'),
  seconds:document.querySelector('[data-seconds]'),
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  time.days.textContent = days;
  time.hours.textContent = hours;
  time.minutes.textContent = minutes;
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
      if (currentDate.getTime() > selectedDate.getTime())
      {
          window.alert('выбрал прошлое')
      }
      btnMain.disabled = false;


      function difFunc(e) {


        currentDate = new Date();
        timeDiff = selectedDate.getTime() - currentDate.getTime();
        console.log(convertMs(timeDiff));
      }
      
      setInterval(difFunc,1000)
      

    },
  };




flatpickr(dateInput, options)




