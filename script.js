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
const cashbox = document.querySelector('#cashbox');

const button = document.querySelector('#button');
const buttonReverse = document.querySelector('#button-reverse');

const earned = document.querySelector('#earned');
const earnedPosition = document.querySelector('#earnedPosition');


// Cлушаем клик по кнопке Рассчитать и при клики запускаем фуекцию miscalculation
button.addEventListener('click', miscalculation);

// Слушаем клик по кнопке Реверс и при клики запускаем фуекцию reverseValue
buttonReverse.addEventListener('click', reverseValue);


// Рсчитует заработок
function miscalculation(){
  // Если мили введены то делаем прощот
  if (idMileage.value){
    if (idMileage.classList.contains('arror')){
      idMileage.classList.remove('arror');
    }
    const uklon = uklonAfter.value - uklonBefore.value;
    const bolt = boltAfter.value - boltBefore.value;
    const v838 = after838.value - before838.value;
    const cash = cashAfter.value - cashBefore.value;

    // переводим мили в километры
    const mileageKm = idMileage.value * 1.60934;
    // витрата на газ
    const priceKm = consumption.value * (mileageKm / 100) * gasPrice.value;


    // Высчитует и виводит на страницу мой зароботок
    earned.innerHTML = Math.round(uklon + bolt + v838 + Number(privat.value) + Number(cashbox.value) + cash - priceKm - WarmingUpTheCar.value);
  }else{
    // Если мили не введены то выдаем ошыбку
    idMileage.classList.add('arror');
    earned.innerHTML = '--';
    idMileage.placeholder = 'Введите мили';
  }
  
} 

// миняет value в инпутах при нажатии на кнорку реверс
function reverseValue() {
  idMileage.placeholder = 'Всего';
  if (idMileage.classList.contains('arror')) {
    idMileage.classList.remove('arror');
  }

  if (uklonAfter.value){
    uklonBefore.value = uklonAfter.value;
    uklonAfter.value = '';
  }
  
  if (boltAfter.value){
    boltBefore.value = boltAfter.value;
    boltAfter.value = '';
  }

  if (After838.value){
    Before838.value = After838.value;
    After838.value = '';
  }

  if (cashAfter.value){
    cashBefore.value = cashAfter.value;
    cashAfter.value = '';
  }

  idMileage.value = '';

  cashbox.value = '';

  privat.value = '';

  earned.innerHTML = '--';
  
}


// при фокусе на input убераем error и миняем плесхолдер
idMileage.onfocus = function () {
  if (idMileage.classList.contains('arror')) {
    idMileage.classList.remove('arror');
    idMileage.placeholder = 'Всего';
  }
};



// делает фиксированим елемент в котором выводим зароботок
function earnedFixed(){
  // ростояния от верха страницы к "грн"
  let topDocumentheightElement = earnedPosition.getBoundingClientRect().top;
  // высота окна браузера
  let clientHeight = document.documentElement.clientHeight;
  // высота елемента в котором выводим зароботок
  let heightElement = earned.offsetHeight;

  if (topDocumentheightElement > clientHeight - heightElement) {
    earned.classList.add('active');
  } else {
    earned.classList.remove('active');
  }
}

// при прокрутке странице запускаем функцию earnedFixed
window.addEventListener('scroll', earnedFixed);
// делает фиксированим елемент в котором выводим зароботок при запуске странице
earnedFixed();