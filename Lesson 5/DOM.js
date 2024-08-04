// Методы для получения доступа к вложенным тегам HTML

// firstChild  - 1й вложенный узел (для JS - узел, для HTML это тег)
// lastChild - последний вложенный узел
// previousSibling - предыдущий соседний узел
//nextSibling - следующий соседний узел
//parentNode - родительский узел

// const h1 = document.body.firstChild.nextSibling;
// const p = document.body.firstChild.nextSibling.nextSibling.nextSibling
// console.log(p);


// Методы добавления узлов (тегов)

// const elementList = document.getElementById('elementList'); // получили доступ к ul

// const button = document.getElementById('myButton');// получили доступ к button

// let newLi = document.createElement('li'); // Создали новый тег li
// let newTextForLi = document.createTextNode('Этот элемент является новым благодаря нажатию на кнопку'); // Создали новый текст для li
// newLi.appendChild(newTextForLi); // Добавление текста в конец тега li

// const CreateElement = () => {
//     elementList.appendChild(newLi); // Добавление в конец элемента li в ul
//     elementList.prepend(newLi);// Добавление в начало элемента li в ul
//     elementList.before(newLi); // Добавление перед узлом (тегом)
//     elementList.after(newLi); // Добавление после узла (тега)
// }


const myToDo = document.getElementById('myToDo');
const toDoButton = document.getElementById('toDoButton');

function addNewToDo() {
    let newToDoTag = document.createElement('li');
    let newTextToDo = document.createTextNode('- Сделать ДЗ');
    newToDoTag.appendChild(newTextToDo);
    myToDo.append(newToDoTag);
}

let newDiv = document.createElement('div');
newDiv.setAttribute('class', 'box');
newDiv.setAttribute('id', 'myDiv');
let newTextDiv = document.createTextNode('Я созданный новый блок при помощи JS');
newDiv.appendChild(newTextDiv);
document.body.appendChild(newDiv);

const myNewDiv = document.getElementById('myDiv');
myNewDiv.style.width = '300px';
myNewDiv.style.height = '300px';
myNewDiv.style.backgroundColor = 'orange';
myNewDiv.style.padding = '20px';
myNewDiv.style.boxSizing = 'border-box';
myNewDiv.style.color = 'white';
myNewDiv.addEventListener('click', () => {
    alert ('Это окно выведенное через JS');
})
console.log(myNewDiv);












// Методы изменения элементов 

const setAtribute = document.getElementById('setAtribute');
const myImage = document.getElementById('myImage');
const myParagraph = document.getElementById('myParagraph');
const myDiv = document.getElementById('myDiv');

// const changeAtribute = () => {
//     myImage.alt = 'Новая картинка'; // Изменение alt
// }


// const changeText = () => {
//     myParagraph.innerHTML = 'Замененный текст'; // изменение текста элемента
// }

// Изменение стилей в js

const changeStyle = () => {
    myDiv.style.width = '300px';
    myDiv.style.height = '300px';
    myDiv.style.backgroundColor = 'green'; // Изменение стилей

}


