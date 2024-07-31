//Объекты

// 1. Создание объектов с помощью литерала объекта 

//1. Создайте объект person с полями name, age и job. Присвойте полям значения, например, "John", 25 и "developer" соответственно.

// let person = {
//     name: "John",
//     age: 25,
//     job: "developer"
// }

// console.log(person);

// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "blue"
// }

// console.log(car);

// 2. Создание объекта с использованием конструктора объекта

// function Person (name, age, job) {
//     this.name = name,
//     this.age = age,
//     this.job = job
// }

// let person1 = new Person ("Khalid", 33, "driver");

// console.log(person1);

// function Car (brand, model, year, color) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.color = color
// }

// let carNew = new Car ("Mercedes", "GLE", 2024, "black");

// console.log(carNew);

// ////////////////////// 3.Изменение свойств объекта ////////////////////////////


// let person = {
//     name: "John",
//     age: 25,
//     job: "developer"
// }

// person.name = "Muslim";
// person.age = 45;

// console.log(person);

// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "blue"
// }

// car["brand"] = "BMW";
// car["model"] = "M5";
// car["year"] = 2024;

// console.log(car);


////////////////////////////// 4. Добавление новых свойств в объект /////////////////////

// let person = {
//     name: "John",
//     age: 25,
//     job: "developer"
// }

// person.country = "USA";
// person.status = "married"
// console.log(person);

// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "blue"
// }

// car["country"] = "South Korea";
// console.log(car);

///////////////////////////////////// 5. Удаление свойств из объекта ////////////////////


// let person = {
//     name: "John",
//     age: 25,
//     job: "developer"
// }

// person.country = "USA";
// person.status = "married"

// delete person.age;

// console.log(person);

// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "blue"
// }

// car["country"] = "South Korea";

// delete car.color;

// console.log(car);


/////////////////////////////////////////////// Методы объектов ////////////////////////////

///// 1.

// let person = {
//     name: "Abu",
//     age: 30,
//     greet: function() {
//         console.log("Hello, my name is " + this.name + " and i'm " + this.age);
//     }
// }

// person.greet();

///// 2.

// let calculator = {
//     add: function (a, b) {
//         return a + b;
//     },
//     subtraction: function (a, b) {
//         return a - b;
//     },
//     multiply: function (a, b) {
//         return a * b;
//     },
//     divide: function (a, b) {
//         return a / b;
//     }
// }

// console.log(calculator.add (5, 4));
// console.log(calculator.subtraction(45, 20));
// console.log(calculator.multiply(21, 7));
// console.log(calculator.divide(72, 9));


//////// 3.

// let car = {
//     start: function () {
//         console.log("Машина запущена");
//     },
//     stop: function () {
//         console.log("Машина остановлена");
//     }
// }

// car.start();
// car.stop();



/////////////////////////////////////////// Прототипы объекта ////////////////////////////


//// 1.

// let person = {
//     name: "",
//     age: 0
// }

// let John = Object.create(person);
// John.name = "John";
// John.age = 33;

// console.log(John);


///// 2.

// let animal = {
//     eat: function () {
//         console.log("Животное кушает");
//     }
// }

// let dog = Object.create(animal);
// dog.eat();


////// 3.

// let shape = {
//     draw: function () {
//         console.log("Фигура рисуется");
//     }
// }

// let rectangle = Object.create(shape);
// rectangle.draw();


////////////////////////////////////////////// Массивы //////////////////////////////////////////////


/// Создание массивов

// 1.

// const cars = ["bmw", "mercedes", "Audi", "Toyota"];

// console.log(cars);

// 2.

// const arr = new Array(1, 2, 3, 4, 5);

// console.log(arr);

// 3.

// const str = "Chechnya";
// const arr = Array.from(str);

// console.log(arr);

// const spell = "English";
// const arrSpell = Array.from(spell);

// console.log(arrSpell);

///////////////////////////////////////////////////// Методы массивов //////////////////////////////////////////


// const cars = ["bmw", "mercedes", "Audi", "Toyota"];

// cars.push("Lexus");

// cars.pop();

// cars.shift();

// cars.unshift("Lada");

// console.log(cars);


///////////////////////////////////////////// slice() ///////////////////////////////////////

// 1. 

// const numbers = [1, 2, 3, 4, 5, 6];

// const newArr = numbers.slice(0,3);

// console.log(newArr);

// 2.

// const str = "The capital of Great Britain is London";

// const newStr = str.slice(0,14);

// console.log(newStr);

// 3.

// const strArr = ["Muslim", "Khalid", "Abu", "Salah", "Akhmad"];

// const newArr = strArr.slice(3,5);

// console.log(newArr);

// 4.

// const str = "One more time";

// const newStr = str.slice(1,3);

// console.log(newStr);

// 5.

// const Arr = {
//     length:5,
//     0: "A",
//     1: "B",
//     2: "C",
//     3: "D", 
//     4: "E"
// }

// const newArr = Array.from(Arr);

// console.log(newArr.slice(0,2));

////////////////////////////////////////////////// splice() //////////////////////////////////////////

// 1.

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.splice(0,1);

// console.log(numbers);

// 2.

// const str = ["a", 'b', 'c', 'd', 'e'];

// str.splice(0,1);

// console.log(str);

// 3.

// const str = ["a", 'b', 'c', 'd', 'e'];

// str.splice(1,1);

// console.log(str);

// 4.

// const str = ["a", 'b', 'c', 'd', 'e'];

// str.splice(0,3);

// console.log(str);

// 5.

// const arrObject = {
//     length: 3,
//     0: "Audi",
//     1: "Mercedes",
//     2: "BMW"
// }

// const newArr = Array.from(arrObject);

// console.log(newArr.splice(1));

////////////////////////////////////////////////// concat() ////////////////////////////////////////

// 1. 

// const numbers1 = [1,2,3,4,5];

// const numbers2 = [10,11,12,13,14];

// const mergeNumb = numbers1.concat(numbers2);

// console.log(mergeNumb);

// 2.

// const str1 = "Hello ";

// const str2 = "Everyone!";

// const mergeStr = str1.concat(str2);

// console.log(mergeStr);

// 3. 

// const arr1 = ["A", "B", "C"];

// const arr2 = ["E", "F", "G"];

// console.log(arr1.concat(arr2));

// 4.

// const arr1 = ["&", "!", "+"];

// const arr2 = ["_", "-", "/"];

// console.log(arr1.concat(arr2));


// 5.

// const arr1 = [1, 'A', 54, 'J', -1, 'Z'];

// const arr2 = [99, 777, 888];

// console.log(arr1.concat(arr2));

/////////////////////////////////////////// map() ///////////////////////////////////////////////

// 1.

// const arr = [25, 35, 45, 55];

// const increaseArr = arr.map(function (number) {
//     return number + 1;
// })

// console.log(increaseArr);


// 2.

// const str = ["hi", "hello", "goodbye", "see you"];

// const upperStr = str.map(function (str) {
//     return str.toUpperCase();
// })

// console.log(upperStr);

// 3. Не уверен, что правильно понял задание (т.е что от меня требуется сделать)

// const objectArr1 = [{name: " ", age: 0}];
// const objectArr2 = [{name: " ", age: 0}];

// const newProperty1 = objectArr1.map(function (fullName) {
//     console.log(objectArr1.fullName = "Abu, 33");
// })

// const newProperty2 = objectArr2.map(function (fullName) {
//     console.log(objectArr2.fullName = "Ayub, 25");
// })

// console.log(objectArr);

// 4. 

// const numbers = [9, 2, 3, 4, 5];

// const squareNumb = numbers.map(function(num) {
//     return num * num;
// })

// console.log(squareNumb);

// 5. 

// const str = ["HI", "HELLO", "GOODBYE", "SEE YOU"];

// const lowCaseStr = str.map(function(str) {
//     return str.toLowerCase();
// })

// console.log(lowCaseStr);

/////////////////////////////////////////////// filter() /////////////////////////////////////////////////////

// 1.

// const arr = [1, 2, 3, 4, 5, 6];

// const isEven = arr.filter(function(num) {
//     return num % 2 === 0;
// })

// console.log(isEven);

// 2.

// const str = ["Hi", "Hello", "See you", "Goodbye"];

// const isLarger = str.filter(function (str) {
//     return str.length >= 5;
// })

// console.log(isLarger);

// 3.

// const car1 = {
//     price: 999
// }

// const car2 = {
//     price: 1099
// }

// const car3 = {
//     price: 1500
// }

// const carArr = [car1, car2, car3];

// const isPrice = carArr.filter(function (car) {
//     return car.price > 1000;
// })

// console.log(isPrice);

//////////////////////////////////////////////////////// reduce() /////////////////////////////////////////////////////////

// 1.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumNumbers = numbers.reduce(function(sum, current){
//     return sum + current;
// }, 0)

// console.log(sumNumbers);

// 2.

// const strArr = ["a", "b", "c", "d", "e"];

// const unitedStrArr = strArr.reduce(function(acc, current){
//     return acc + " " + current;
// })

// console.log(unitedStrArr);

// 3. 

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multiplyNumb = numbers.reduce(function(acc, current){
//     return acc * current;
// })

// console.log(multiplyNumb);

// 4.  

// const arr = [ {name: "Maximus", age: 45}, {name: "Cesar", age: 65}, {name: "Avreliy", age: 50}];

// const averageAge = arr.reduce(function(sum, current){
//     return (current.age + sum);
// }, 0)

// console.log(averageAge / 3);



/////////////////////////////////////////////////// Sort () ////////////////////////////////////////////////////////


// 1. 

// const numbers = [3, 5, 1, 6, 24, 642, 9, 55, -4, 2];

// numbers.sort(function(a, b){
//     return a - b;
// });

// console.log(numbers);

// 2. 

// const arr = [ {name: "Maximus", age: 45}, {name: "Cesar", age: 65}, {name: "Avreliy", age: 50}];

// arr.sort(function(a, b){
//     return a.age - b.age;
// })

// console.log(arr);

// 3.

// const numbers = [3, 5, 1, 6, 24, 642, 9, 55, -4, 2];

// numbers.sort(function(a, b){
//         return b - a;
//     });

//     console.log(numbers);

// 4.

// const str = ["A", "L", "S", "H", "V", "F"];


// str.sort(function(a, b){
//     return b.localeCompare(a);
// });

// console.log(str);

///////////////////////////////////////////////////////////// forEach() ////////////////////////////////////////////////////////////////////


//1.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function(numb){
//     console.log(numb);
// })

//2.

// const str = ["A", "L", "S", "H", "V", "F"];

// str.forEach(function(strEach){
//     console.log(strEach);
// })

//3.

// const arr = [ {name: "Maximus", age: 45}, {name: "Cesar", age: 65}, {name: "Avreliy", age: 50}];

// arr.forEach(function(str){
//     console.log(str);
// })

//4.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = 0;

// numbers.forEach(function(current){
//     return result += current;
// })

// console.log(result);

//5.

// const str = ["Khalid", "Ayub", "Khasan", "Akmad", "Muslim"];

// str.forEach(function(strLength){
//     console.log(strLength.length);
// })

////////////////////////////////////////////////////////////////// find() ///////////////////////////////////////////////////////

//1.

// const numbers = [3, 5, 1, 6, 24, 642, 9, 55, -4, 2];

// const numb = numbers.find(function(isNumb){
//     return isNumb > 10;
// })

// console.log(numb);

//2.

// const str = ["L", "S", "H", "V", "F","A"];

// const isA = str.find(function(letter){
//     return letter === "A";
// })

// console.log(isA);

//3.

// const arr = [ {name: "Maximus", age: 25}, {name: "Cesar", age: 65}, {name: "Avreliy", age: 50}];

// const isAge = arr.find(function(a){
//     return a.age > 30;
// })

// console.log(isAge);

//4.

// const numbers = [3, 5, 1, 6, 24, 642, 9, 55, -4, 2];

// const isEven = numbers.find(function(numb){
//     return numb % 2 === 0;
// })

// console.log(isEven);

//5.

// const str = ["Khalid", "Ayub", "Khasan", "Akmad", "Muslim"];

// const isStart = str.find(function(x){
//     return x[0] === "A";
// })

// console.log(isStart);