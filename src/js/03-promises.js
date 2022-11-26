import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
  formSubmit: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });

  return promise;
}

function addPromisses(event) {
  event.preventDefault(); // prevent form from reloading during submit
  let item_delay = parseInt(refs.delay.value);
  for (let i = 0; i < refs.amount.value; i += 1) {
    const position = i;
    createPromise(position, item_delay)
      .then(e => {
        // console.log(`✅ Fulfilled promise ${e.position} in ${e.delay}ms`);
        Notify.success(`✅ Fulfilled promise ${e.position} in ${e.delay}ms`);
      })
      .catch(e => {
        // console.log(`❌ Rejected promise ${e.position} in ${e.delay}ms`);
        Notify.failure(`❌ Rejected promise ${e.position} in ${e.delay}ms`);
      });

    item_delay += parseInt(refs.step.value);
  }
}

refs.formSubmit.addEventListener('submit', addPromisses);
