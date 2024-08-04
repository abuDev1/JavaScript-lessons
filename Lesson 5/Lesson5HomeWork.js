let newLi = document.getElementById('myList');
// let buttonForNewLiEnd = document.getElementById('button1');

// 1.

function addLiEnd () {
    let newLiTag = document.createElement('li');
    newLiTag.setAttribute('class', 'list-item');
    let newTextForLi = document.createTextNode('Создан новый элемент в конце списка');
    newLiTag.appendChild(newTextForLi);
    newLi.appendChild(newLiTag);  
}

// 2.

function addLiStart () {
    let newLiTagStart = document.createElement('li');
    newLiTagStart.setAttribute('class', 'list-item');
    let newTextForLiStart = document.createTextNode('Создан новый элемент в начале списка');
    newLiTagStart.prepend(newTextForLiStart);
    newLi.prepend(newLiTagStart);
}

// 3.

function deleteFirstLi () {
    let elStart = document.body.firstElementChild.firstElementChild;
    elStart.remove();
}

// 4.

function deleteLastLi () {
    let elEnd = document.body.firstElementChild.lastElementChild;
    elEnd.remove();
}

// 5. !!!!!!!!!!!!!!!!!! После скрытия или удаления не получается покрасить body !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function deleteBody () {
    let elBody = document.body.hidden = true;
    // elBody.remove();
    // let newBody = document.createElement('body');
    // newBody.setAttribute('id', 'body');
    // let myNewBody = document.getElementById('body');
    // myNewBody.style.backgroundColor = 'black';
}

   
    