import { lanKey } from "./language";

const todoList = document.querySelector('.todo-list');
const todo = document.querySelector('.todo');
const todoTitle = document.querySelector('.todo-title');
const list = document.querySelector('.the-whole-list');
const todoButton = document.querySelector('.todo-icon');
let todoPoint = document.querySelectorAll('.one-point');
let onePointDone = document.querySelectorAll('.one-point-done');
let onePointRemove = document.querySelectorAll('.list-icon');
const createPoint = document.querySelector('.input-add');
const buttonAdd = document.querySelector('.add');
const todoText = document.querySelector('.todo-text');

let isTodoOpen = false;
let isOnePointDone = [];

function todoTranslate() {
    if (lanKey === 'en') {
        todoButton.textContent = 'Todo';
        todoTitle.textContent = 'Todo list';
        buttonAdd.textContent = 'Enter';
    } else {
        todoButton.textContent = 'Список дел';
        todoTitle.textContent = 'Список дел';
        buttonAdd.textContent = 'Ввод';
    }
}

function showTodo() {
    todoList.style.opacity = '1';
    todoList.style.visibility = 'visible';
    todo.style.zIndex = '10';
    isTodoOpen = true;
}

function hideTodo() {
    todoList.style.opacity = '0';
    todoList.style.visibility = 'hidden';
    todo.style.zIndex = '1';
    isTodoOpen = false;
}

function updateArrayElements() {
    todoPoint = document.querySelectorAll('.one-point');
    onePointDone = document.querySelectorAll('.one-point-done');
    onePointRemove = document.querySelectorAll('.list-icon');
}

function madeOnePoint(ind) {
    if (!isOnePointDone[ind]) {
        onePointDone[ind].style.opacity = 0.1;
        onePointDone[ind].classList.add('one-point-done__active');
        isOnePointDone[ind] = true;
    } else {
        onePointDone[ind].style.opacity = 1;
        onePointDone[ind].style.visibility = 'visible';
        onePointDone[ind].classList.remove('one-point-done__active');
        isOnePointDone[ind] = false;
    }
}

function createOnePoint() {
    let li = document.createElement('li');
    let divText = document.createElement('div');
    let divButtonX = document.createElement('div');
    let button = document.createElement('button');
    let ind;

    li.className = 'one-point';
    list.appendChild(li);

    divText.className = 'one-point-done';
    divText.innerHTML = createPoint.value;
    li.append(divText);

    divButtonX.className = 'list-icon';
    li.append(divButtonX);

    button.innerHTML = 'X'

    list.appendChild(li);
    divButtonX.appendChild(button);

    createPoint.value = '';
    list.scrollTo(0, li.offsetTop)
    updateArrayElements();

    if (todoPoint.length > 0)  {
        todoText.style.opacity = '0';
        todoText.style.visibility = 'hidden';
    }

    ind = todoPoint.length - 1;

    li.addEventListener('click', function () {
        madeOnePoint(ind);
    })

    divButtonX.addEventListener('click', function () {
        removeOnePoint(ind);
    })
}

function removeOnePoint(ind) {
    list.removeChild(todoPoint[ind]);

    if (todoPoint.length === 1)  {
        todoText.style.opacity = '1';
        todoText.style.visibility = 'visible';
    }
}

todoPoint.forEach((item, index) => {
    item.addEventListener('click', function () {
        madeOnePoint(index);
    })
})

onePointRemove.forEach((item, index) => {
    item.addEventListener('click', function () {
        removeOnePoint(index);
    })
})

todoButton.addEventListener('click', function () {
    !isTodoOpen ? showTodo() : hideTodo();
});

buttonAdd.addEventListener('click', createOnePoint);
createPoint.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        createOnePoint();
    }
});

export {
    hideTodo,
    todoTranslate,
}
