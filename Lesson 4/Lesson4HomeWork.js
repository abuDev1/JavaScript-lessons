// const myEvent = new Event("myEvent");

// document.addEventListener("myEvent", () => {
//     console.log("Событие myEvent произошло");
// })

// document.dispatchEvent(myEvent);


//**************************************** Click ************************************

// 1.

// const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", () => {
//         console.log("Кнопка была нажата!");
//     })

//***************************************DoubleClick ****************************************/


// 1.

// const myButton = document.getElementById('myButton');

// myButton.addEventListener('dblclick', () => {
//     myButton.classList.toggle('change');
    
// })

// 2.

// document.addEventListener('dblclick', () => {
//         console.log("Double click activated!");
//     })

// 3. !!!!!!!!!!!!!!!!!!!!!!!!!! Не получается обратиться ко всем td !!!!!!!!!!!!!!!!!!!!!!!!

// const changeTd = document.getElementById("td");

//   function changeContent() {
//     changeTd.innerHTML = '<td>Double clicked!</td>';
//   }

//   changeTd.addEventListener('dblclick', changeContent);



// 4. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Не получается обратиться ко всем li и не знаю как вывести alt !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const imgShowAlt = document.getElementById('li1');

// imgShowAlt.addEventListener('dblclick', () => {
//     console.log();
// })

// 5. 

// const changeHead = document.getElementById('head');

// changeHead.addEventListener('dblclick', () => {
//     changeHead.innerHTML = 'Double clicked!';
// })


// ******************************************** keyDown ********************************************

// 1.

// document.addEventListener("keydown", (btn) => {
//     console.log("Кнопка, которая была нажата: " + btn.key);
// })

// 2. !!!!!!!!!!!!!!!!!!!!!!! Выводит введеные данные в консоль только после нажатия какой-нибудь кнопки !!!!!!!!!!!!!!!!!

// let someText = prompt("Введите что-нибудь ...");

// document.addEventListener('keydown', () => {
//     console.log(someText);
// })


// ********************************************* keyUp *********************************************

// 1.

// document.addEventListener("keyup", (btn) => {
//     console.log("Кнопка, которая отпущена: " + btn.key);
// })
