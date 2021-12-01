const consumption = document.querySelector('#consumption');
const gasPrice = document.querySelector('#gas-price');
const WarmingUpTheCar = document.querySelector('#Warming-up-the-car');

const uklonBefore = document.querySelector('#uklon-before');
const uklonAfter = document.querySelector('#uklon-after');

const boltBefore = document.querySelector('#bolt-before');
const boltAfter = document.querySelector('#bolt-after');

const Before838 = document.querySelector('#before838');
const After838 = document.querySelector('#after838');

const cashBefore = document.querySelector('#cash-before');
const cashAfter = document.querySelector('#cash-after');

const idMileage = document.querySelector('#idMileage');

const privat = document.querySelector('#privat');

const button = document.querySelector('#button');
const buttonReverse = document.querySelector('#button-reverse');

const earned = document.querySelector('#earned');



// Шлушаем клик по кнопке Рассчитать и при клики запускаем фуекцию miscalculation
button.addEventListener('click', miscalculation);

// Шлушаем клик по кнопке Реверс и при клики запускаем фуекцию reverseValue
buttonReverse.addEventListener('click', reverseValue);


// Рсчитует заработок
function miscalculation(){

  const uklon = uklonAfter.value - uklonBefore.value;
  const bolt = boltAfter.value - boltBefore.value;
  const v838 = after838.value - before838.value;
  const cash = cashAfter.value - cashBefore.value;

  // -----------------------------------------------------------
  // переводим мили в километры
  const mileageKm = idMileage.value * 1.60934;
   // витрата на газ
  const priceKm = consumption.value * (mileageKm / 100) * gasPrice.value;
  // -----------------------------------------------------------
  
  // Высчитует м виводит на страницу мой зароботок
  earned.innerHTML = Math.round(uklon + bolt + v838 + Number(privat.value) + cash - priceKm - WarmingUpTheCar.value);
}

// при фокусе на input убераем placeholder
function validity(){
  // находим все импуты
  const inputs = document.querySelectorAll('input');
  // для каждого инпута
  inputs.forEach(function (input) {
  // при фокусе на input убераем placeholder
  input.onfocus = function () {
     input.placeholder = '';
    };
  });
}
validity();

// миняет value в инпутах
function reverseValue() {
  uklonBefore.value = uklonAfter.value;
  uklonAfter.value = '';
  
  boltBefore.value = boltAfter.value;
  boltAfter.value = '';

  Before838.value = After838.value;
  After838.value = '';

  cashBefore.value = cashAfter.value;
  cashAfter.value = '';
  
}