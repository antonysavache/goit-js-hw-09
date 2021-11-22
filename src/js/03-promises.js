import Notiflix from 'notiflix';
const form = document.querySelector('form');
form.addEventListener('submit', onSubmit)
function onSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget;
  let delayV = Number(delay.value);
  const stepV = Number(step.value);
  const amountV = Number(amount.value);
  
  for (let position = 1; position <= amountV; position += 1) {
    createPromise(position, delayV);
    delayV += stepV;
        console.log("delayPromise", delayV, "position", position);
  }
}




function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  // const values = { position, delay };

  const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }

    }, delay);
  })
   promise
  .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

};