// Работа с событиями в JavaScript

// ****************************************** Мы создали свое новое событие при помощи конструктора Event() *****************************

// const myEvent = new Event("myEvent");


// ************************************************ Обработка нашего события ************************************************************

// document.addEventListener("myEvent", () => {
//     console.log("Событие myEvent произошло");
// })

// *********************************************** Генерация события *********************************************************************

// document.dispatchEvent(myEvent)

// ********************************************** click (нажатие на мышку 1 раз) **************************************************************

// const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", () => {
//     console.log("Кнопка нажата!");
// })

//*************************************** */ dbclick (двойное нажатие мышки) **********************************************************

// const myButton = document.getElementById("myButton");

// myButton.addEventListener("dblclick", () => {
//     console.log("Кнопка нажата 2 раза!");
// })

// ************************************************ keydown (нажатие кнопки на клавиатуре) ***************************************************


// document.addEventListener("keydown", (event) => {
//     console.log("Кнопка, которая была нажата: " + event.key);
// })

// ************************************************* keyup (отпускание клавиши на клавиатуре) ************************************************


// document.addEventListener("keyup", (event) => {
//     console.log("Кнопка, которая отпущена: " + event.key);
// })


// *************************************************** change (для форм, а также для чекбоксов) ***********************************************

// const result = document.getElementById("result");
// const sms = document.getElementById('sms');

// const showCount = () => {
//     result.innerHTML = sms.value.length
// }

// sms.onkeyup = sms.oninput = showCount;

// sms.onpropertychange = () => {
//     if(event.propertyName == 'value') showCount();
// }

// sms.oncut = () => {
//     setTimeout(showCount, 0)
// }

// ****************************************************** scroll (срабатывает при прокрутке страницы) *****************************************

// document.addEventListener('scroll', () => {
//     console.log("Был скролл");
// })

