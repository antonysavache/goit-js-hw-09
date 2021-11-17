import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
let dateInput = document.querySelector('#datetime-picker')
let btnMain =  document.querySelector('[data-start]')
btnMain.disabled = true;

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
      btnMain.disabled = false
    },
  };


flatpickr(dateInput, options)


