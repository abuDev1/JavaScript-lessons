const loadUser = () => {
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(items => {
    const userNameUl = document.getElementById('userNameUl')
    const listItemElement = document.createElement('li');
    listItemElement.textContent = items.name;
    userNameUl.appendChild(listItemElement)
    const emailUl = document.getElementById('emailUl')
    const listItemElement2 = document.createElement('li');
    listItemElement2.textContent = items.email;
    emailUl.appendChild(listItemElement2)
})
.catch(e => console.log(e));
}
