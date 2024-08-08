// fetch(url,options)

// url - адрес ресурса, к которому отправляется запрос
// options - необязательный объект  с некоторыми настройками запроса (метод запроса, заголовки, тело)

// const getUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(e => console.log('Error: ', e));

// GET - получение данных с сервера

// const getUsers = fetch('https://jsonplaceholder.typicode.com/userss')
// .then(response => {
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.log('Error: ', error))

// POST - отправка данных на сервер

// const myPosts = {
//     "userId": 99,
//     "id": 2,
//     "title": "its my Post",
//     "body": "lorem ipsum"
// }

// const PostFetch = fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(myPosts)
// }).then(response => {
//     if(!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     return response.json();
// }).then(responseData => console.log(responseData))
// .catch(e => console.log(e))

// JSON

// const jsonString = '{"key": "value"}' // переводим строку в объект
// const jsonObject = JSON.parse(jsonString)

// console.log(jsonObject); // {key: 'value'}
// console.log(jsonObject.key); // value


// const jsonObject = {"key": "value"} // переводим объект в строку
// const jsonString = JSON.stringify(jsonObject)

// console.log(jsonString); //{"key":"value"}

//////////////////////////////////////////////////


    // const addPosts = () => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(items => {
    //     const listElemensts = document.getElementById('listElemensts')
    //     items.forEach(element => {
    //        const listItemElement = document.createElement('li');
    //        listItemElement.textContent = element.title;
    //        listElemensts.appendChild(listItemElement)
    //     });
    // })
    // .catch(e => console.log(e));
    // }
    