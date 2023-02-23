'use strict';
// Події
let redBtn = document.querySelector('.red-btn'); // отримуємо кнопку
let counter = localStorage.getItem('russophobiaLevel') || 0; // отримуємо дані з локалсторджа або записуємо 0

let hatredLevel = document.querySelector('.hatred-level-counter'); // отримуємо каунтер
hatredLevel.textContent = counter + '👿'; // записуємо значення каунтера + емоджі в спан

function updateAndShowRussophobiaLevel(event) { 
	counter++; // збільшуємо каунтер на + 1
    console.log(`Current russophobia level: ${counter}`);
    console.log(`It is not high enough! 👿`);
    localStorage.setItem('russophobiaLevel', counter); // записуємо в локалсторедж каунтер
    hatredLevel.textContent = counter+'👿'; // змінюємо контент спану
}

redBtn.addEventListener('click', updateAndShowRussophobiaLevel);

//для елементу з текстом 'Навігація по DOM дереву'
let spanWithNav = document.getElementById('header-two'); 

//для першого елементу <section>
let firstScetionElement = document.body.firstElementChild.nextElementSibling;  

//для елементу списку з текстом 'Пункт 5'
let listWithFive = [...document.querySelectorAll('ul > li')] //якщо добавити код в кiнцi та закоментити строку знизу теж буде потрiбний елемент .find((elem)=> elem.textContent == 'Пункт 5')
listWithFive = listWithFive.find((elem)=> elem.textContent == 'Пункт 5') // так наче бiльш корректно

// для елементу з класом 'hatredLevelBlock'
let divWithClass = document.querySelector('.hatred-level-block');

console.log(spanWithNav);
console.log(firstScetionElement);
console.log(listWithFive);
console.log(divWithClass);