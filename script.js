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

const beforeMileage = document.querySelector('#before-mileage');
const afterMileage = document.querySelector('#after-mileage');

const privat = document.querySelector('#privat');

const button = document.querySelector('.button');

const earned = document.querySelector('#earned');




button.addEventListener('click', miscalculation);

function miscalculation(){

  const uklon = uklonAfter.value - uklonBefore.value;
  const bolt = boltAfter.value - boltBefore.value;
  const v838 = after838.value - before838.value;
  const cash = cashAfter.value - cashBefore.value;

  // -----------------------------------------------------------
  // розрахунок по заправке газа
  const mileage = afterMileage.value - beforeMileage.value;
  const mileageKm = mileage * 1.60934;
   // витрата на газ
  const priceKm = consumption.value * (mileageKm / 100) * gasPrice.value;
  // -----------------------------------------------------------
  
  earned.innerHTML = Math.round(uklon + bolt + v838 + Number(privat.value) + cash - priceKm - WarmingUpTheCar.value);
}

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
