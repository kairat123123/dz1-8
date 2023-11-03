// HW 1
//
const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')


//регулярное выражение которое имеет правила ввода GMAIL
const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,15}@gmail.com$/

//ивент в котором при нажатии на кнопку высветится то что либо GMAIL правильно введен или нет
gmailButton.addEventListener( 'click',() => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Ваш GMAIL правильно введен'
        gmailResult.style.color = '#00aff6'
    } else {
        gmailResult.innerHTML = 'Ваш GMAIL неправильно введен!!!'
        gmailResult.style.color = '#c90000'
    }
})

//ТУТ Я ПЫТАЛСЯ СДЕЛАТЬ ТАК ЧТОБЫ ЦВЕТ МЕНЯЛСЯ В ТЕКСТЕ ПРИ ПРАВИЛЬНОМ НАБОРЕ GMAIL ИЛИ НЕ ПРАВИЛЬНОМ НЕ ПОЛУЧИЛОСЬ С ТЕМ ТО ЧТО ПРИ ВВЕДЕНИИ 11111@gmail.com ИЛИ ggggg@gmail.com ИЛИ GGGGG@Ggmail.com 4-ТЕКСТ НЕ МЕНЯЛСЯ НА ЗЕЛЕНЫЙ ТАК ЖЕ МОГУТ БЫТЬ И ДРУГИЕ ОШИБКИ


const smallLetter = /[a-z].{0,15}@gmail.com/
const bigLetter = /[A-Z].{0,15}@gmail.com/
const number = /\d.{0,15}@gmail.com/
const length = /^[a-zA-Z\d]{4,15}@gmail\.com$/;



gmailButton.addEventListener( 'click',() => {
    if (bigLetter.test(gmailInput.value)) {

        document.getElementById('1_password_requirement').style.color = '#00aff6' ;

    }
    else {
        document.getElementById('1_password_requirement').style.color = '#c90000' ;
    }
})

gmailButton.addEventListener( 'click',() => {
    if (smallLetter.test(gmailInput.value)) {

        document.getElementById('2_password_requirement').style.color = '#00aff6' ;

    }
    else {
        document.getElementById('2_password_requirement').style.color = '#c90000' ;
    }
})

gmailButton.addEventListener( 'click',() => {
    if (number.test(gmailInput.value)) {

        document.getElementById('3_password_requirement').style.color = '#00aff6' ;

    }
    else {
        document.getElementById('3_password_requirement').style.color = '#c90000' ;
    }
})

gmailButton.addEventListener( 'click',() => {
    if (length.test(gmailInput.value)) {

        document.getElementById('4_password_requirement').style.color = '#00aff6' ;

    }
    else {
        document.getElementById('4_password_requirement').style.color = '#c90000' ;
    }
})



// 2 Задание


const childBlock = document.querySelector('.child_block');


let positionX = 0;
let positionY = 0;
let counter = 0;



const moveChild = () => {
  if (positionX <= 449 && positionY === 0) {
    positionX++;
    childBlock.style.left = positionX + 'px';
    setTimeout(moveChild, 31);
  } else if (positionX === 450 && positionY <= 449) {
    positionY++;
    childBlock.style.top = positionY + 'px';
    setTimeout(moveChild, 31);
  } else if (positionX >= 1 && positionY === 450) {
    positionX--;
    childBlock.style.left = positionX + 'px';
    setTimeout(moveChild, 31);
  } else if (positionX === 0 && positionY >= 1) {
    positionY--;
    childBlock.style.top = positionY + 'px';
    setTimeout(moveChild, 31);
  }
  if (positionX === 0 && positionY === 0) {
    counter++;
    const minutes = Math.floor(counter / 60);
    console.log("Elapsed time:", minutes, "minute(s)");
  }
   if (positionX === 0 && positionY === 0) {
    counter++;
    const minutes = Math.floor(counter / 60);
    console.log("Elapsed time:", minutes, "minute(s)");
  }
};

moveChild();






// Получаем элементы счетчика времени
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');

let intervalId; // Переменная для хранения идентификатора интервала

// Функция для форматирования числа, добавляющая ведущий ноль при необходимости
function formatNumber(number) {
  return number < 10 ? '0' + number : number;
}

// Функция для обновления счетчика времени
function updateTimer() {
  let hours = parseInt(hoursElement.textContent, 10);
  let minutes = parseInt(minutesElement.textContent, 10);
  let seconds = parseInt(secondsElement.textContent, 10);
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  hoursElement.textContent = formatNumber(hours);
  minutesElement.textContent = formatNumber(minutes);
  secondsElement.textContent = formatNumber(seconds);
}

// Функция для запуска секундомера
function startTimer() {
  if (!intervalId) { // Если секундомер уже запущен, пропускаем запуск
    intervalId = setInterval(updateTimer, 1000);
  }
}

// Функция для остановки секундомера
function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

// Обработчик нажатия на кнопку "Start"
document.getElementById("start").addEventListener("click", function() {
startTimer();
});

// Обработчик нажатия на кнопку "Stop"
document.getElementById("stop").addEventListener("click", function() {
stopTimer();
});






// Обработчик нажатия на кнопку "Reset"
document.getElementById("reset").addEventListener("click", function() {
  stopTimer();
  hoursElement.textContent = '00';
  minutesElement.textContent = '00';
  secondsElement.textContent = '00';
});