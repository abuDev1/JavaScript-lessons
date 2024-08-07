// Методы для получения доступа к вложенным тегам HTML

// firstChild  - 1й вложенный узел (для JS - узел, для HTML это тег)
// lastChild - последний вложенный узел
// previousSibling - предыдущий соседний узел
//nextSibling - следующий соседний узел
//parentNode - родительский узел

////////////////////////////////////////////

// const html = document.documentElement; // Получили доступ к тегу html;

// console.log(html);

// const head = document.head; // Получили доступ к тегу head;

// console.log(head);

// const body = document.body; // Получили доступ к тегу body;

// console.log(body);

/////////////////////////////////////////////


// const firstMetaTag = document.head.firstChild.nextSibling; // Получили доступ к 1му тегу meta
// console.log(firstMetaTag);

// const secondMetaTag = firstMetaTag.nextSibling.nextSibling; // Получили доступ ко 2му тегу meta
// console.log(secondMetaTag);

// const titleTag = secondMetaTag.nextSibling.nextSibling; // Получили доступ к тегу title;
// console.log(titleTag);

// const titleTagText = secondMetaTag.nextSibling.nextSibling.firstChild; // Получили доступ к тексту тега tite
// console.log(titleTagText);

// const prevTag = titleTag.previousSibling.previousSibling; // Получили доступ к meta
// console.log(prevTag);

// const divCont = document.body.firstChild.nextSibling; // Получили доступ к div "container"
// console.log(divCont);

// const ulTag = document.body.firstChild.nextSibling.firstChild.nextSibling; // Получили доступ к ul
// console.log(ulTag);

/////////////////////////////////////////////

///////////////////////////////////////////// Rest оператор

// function myFunction(...myArray) {
//     console.log(myArray); // [1, 2, 3, 4, 5] 
// }

// myFunction(1,2,3,4,5);

///////////////////////////////////////////// Spread оператор

// function myFunction(a,b,c) {
//     console.log(a,b,c);
// }

// const myArray = [1,2,3];
// myFunction(...myArray);

// const Array1 = [1,2,3];
// const Array2 = [4,5,6];

// const newArray = [...Array1, ...Array2];

// console.log(newArray); // [1, 2, 3, 4, 5, 6]

///////////////////////////////////////////// Promise

// const promise = new Promise((resolve, rejected) => {
//     let a = 1000;
//     let b = 990;
//     let c = a !== b;
//     if(c) {
//         resolve(console.log(`Данная операция была выполнена успешно! Результат выполнения ${c}`));
//     } else {
//         rejected(console.log("ERROR"))
//     }
// })

// promise.then((result) => {
//     return console.log(result);;
// }).catch((error) => {
//     console.log(error);
// })

//////////////////////

// const getUsers = () => {
//     return fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Не удалось получить список пользователей")
//         } 
//         return response.json();
//     })
// }

// getUsers()
// .then((users) => {
//     console.log(users);
// }).catch((e) => {
//    console.log(e); 
// })


//////////////////////////////////////// Модули

// import { addNumbers } from "./export.module";

// console.log(addNumbers(10, 990));


/////////////////////////////////////// Деструктуризация

// const [a,b,c] = [1,2,3]; // Деструктуризация массива
// console.log(a);
// console.log(b);
// console.log(c);

// const obj = {a:1, b:2, c:3}; // Деструктуризация объекта
// const {a,b,c} = obj;

// console.log(a);
// console.log(b);
// console.log(c);

// function func(a, b, c) {// Деструктуризация функции для arr
// function func({a, b, c}){ // Деструктуризация функции для obj
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const obj = {a:1, b:2};
// const arr = [1,2,3];

// func(obj)

// func(...arr)


// const [a,b, ...rest] = [1,2,3,4,5];
// console.log(a);
// console.log(b);
// console.log(rest);
