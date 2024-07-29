// Работа с объектами

// const { log, Console } = require("console");

// 1. Создание объекта с использованием литерала объекта

// let cat = {
//   name: 'Nicki',
//   age: 3
// }

// 2. Создание объекта с использованием конструктора объекта

// function Person (name, age) {
//   this.name = name;
//   this.age = age;
// }

// let person1 = new Person("Nicki", 3);

// 1. Изменение свойства объекта

// let person = {
//   name: "John",
//   age: 25
// }

// person.age = 26; // Способ 1
// person["name"] = "Mike";// Способ 2

// console.log(person);

// 2. Добавление к объектам новых свойств

// let person = {
//   name: "Mike",
//   age: 30
// }

// person.city = "New-York"; // Способ 1
// person["from"] = "Russia";// Способ 2

// console.log(person);

// 3. Удаление свойства объекта

// let person = {
// name: "Tom",
// age: 18
// }

// person.city = "New-York";
// person["from"] = "Russia";

// delete person.age; // Удалили age

// console.log(person);

// 4. Методы объектов - это функции объектов, которые связанны с самим объектом

// let person = {
//   name: "Ripley",
//   age: 36,
//   sayHello: function() {
//     console.log("Hello, my name is " + this.name);
//   }
// }

// person.sayHello();

// 5. Прототипы объектов

// let Person = {
//     name: "",
//     age: 0,
//     sayHello: function() {
//       console.log("Hello, my name is " + this.name);
//   }
// }
  
//   let person1 = Object.create(Person);
//   person1.name = "Layla";
//   age = 23;
//   person1.sayHello();
  
  
//   let person2 = Object.create(Person);
//   person2.name = "Khalid";
//   age = 20;
//   person2.sayHello();
  
// 6. Методы set и get для объектов

// let person = {
//     firstName: "Khasan",
//     lastName: "Abu",
//     get fullName() {
//         return this.firstName + ' ' + this.lastName
//     },
//     set fullName(name) {
//         let parts = name.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// }


// person.fullName = "Ibn Musa";

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);

// 7. Контексты объектов (ключевое слово this)

// let person = {
//   name: "Ripley",
//   age: 36,
//   sayHello: function() {
//     console.log("Hello, my name is " + this.name + " and i am " + this.age + " years old.");
//   }
// }

// person.sayHello();

// / Работа с массивами в javascript

// 1. Литерал массива

// const fruits = ['apple', 'banana', 'orange'];

// const numbers = [1, 2, 3, 4, 5];

// const mixed = ["hello", 2, 5, true];

// 2. new Array()

// const emptyArray = new Array();

// const arrayWithLength = new Array(5, 3, 7);

// console.log(emptyArray);
// console.log(arrayWithLength);

// 3. Array.from()

// const str = "hello";
// const arr = Array.from(str);

// console.log(arr);

// const psevdoArray = {
//     length: 3,
//     0: "a",
//     1: "b",
//     2: "c"
// }

// const arr = Array.from(psevdoArray);

// console.log(arr);

// Манипуляции с массивами

// 1. методы push и pop (добавление и удаление последних элементов массива)

// const fruits = ['apple', 'banana', 'orange'];

// fruits.push ("pear");

// fruits.pop();

// console.log(fruits);

// 2. методы shift() и unshift() -  (удаление и добавление[c заменой] первого элемента массива)

// const fruits = ['apple', 'banana', 'orange'];

// fruits.shift();

// fruits.unshift('tomato');

// console.log(fruits);

// 3. Метод slice()

// const numbers = [1, 2, 3, 4, 5];

// const subArray = numbers.slice(0,3);

// console.log(subArray);


// Метод splice()

// const numbers = [1, 2, 3, 4, 5];

// numbers.splice(2,2);

// numbers.splice(1, 0, 6, 7);

// console.log(numbers);

// Метод concat() - объединение/соединение массивов

// const numbers = [1, 2, 3, 4, 5];

// const letters = ['a', 'b', 'c', 'd', 'e'];

// const combine = numbers.concat(letters);

// console.log(combine);


// Методы массивов для обработки данных в JavaScript

// map()

// const numbers = [1, 2, 3];

// const doublesNumbers = numbers.map(function(number) {
//     return number * 2;
// })

// console.log(doublesNumbers);

// filter()

// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// })

// console.log(evenNumbers);

// reduce() 

// const numbers = [1, 2, 3, 4, 5, 6];

// const sum = numbers.reduce(function (accumilator, currentValue) {
//     return accumilator + currentValue;
// }, 0)

// console.log(sum);

// sort()


// const fruits = ['banana', 'apple', 'cherry'];

// fruits.sort();

// console.log(fruits);

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.sort(function (a, b) {
//     return b - a;
// })

// console.log(numbers);

// forEach ()

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function (number) {
//     console.log(number);
// })

// find()

// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.find(function(number) {
//     return number % 2 === 0;
// })

// console.log(evenNumbers);


// const str = ["Muslim", "Akmad", "Khusein"];

// const result = str.find(function(name) {
//     return name === "Khusein";
// })

// console.log(result);
