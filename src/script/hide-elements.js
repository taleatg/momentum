const time = document.querySelector('.time');
const inputTime = document.querySelector('.input-time');

const date = document.querySelector('.date');
const inputDate = document.querySelector('.input-date');

const greeting = document.querySelector('.greeting-container');
const inputGreeting = document.querySelector('.input-greeting');

const quotes = document.querySelector('.quote-container');
const inputQuotes = document.querySelector('.input-quotes');

const weather= document.querySelector('.weather');
const inputWeather = document.querySelector('.input-weather');

const player = document.querySelector('.player');
const inputAudio = document.querySelector('.input-audio');

const todo = document.querySelector('.todo');
const inputTodo = document.querySelector('.input-todo');

let isHideTime = false;
let isHideDate = false;
let isHideGreeting = false;
let isHideQuotes = false;
let isHideWeather = false;
let isHidePlayer = false;
let isHideTodo = false;

function hideOrShowTime() {
    if (!isHideTime) {
        time.style.opacity = '0';
        time.style.visibility = 'hidden';
        isHideTime = true;
    } else {
        time.style.opacity = '1';
        time.style.visibility = 'visible';
        inputTime.checked = true;
        isHideTime = false;
    }
    localStorage.setItem('hideOrShowTime', isHideTime);
}

function hideOrShowDate() {
    if (!isHideDate) {
        date.style.opacity = '0';
        date.style.visibility = 'hidden';
        isHideDate = true;
    } else {
        date.style.opacity = '1';
        date.style.visibility = 'visible';
        inputDate.checked = true;
        isHideDate = false;
    }
    localStorage.setItem('hideOrShowDate', isHideDate);
}

function hideOrShowGreeting() {
    if (!isHideGreeting) {
        greeting.style.opacity = '0';
        greeting.style.visibility = 'hidden';
        isHideGreeting = true;
    } else {
        greeting.style.opacity = '1';
        greeting.style.visibility = 'visible';
        inputGreeting.checked = true;
        isHideGreeting = false;
    }
    localStorage.setItem('hideOrShowGreeting', isHideGreeting);
}

function hideOrShowQuotes() {
    if (!isHideQuotes) {
        quotes.style.opacity = '0';
        quotes.style.visibility = 'hidden';
        isHideQuotes = true;
    } else {
        quotes.style.opacity = '1';
        quotes.style.visibility = 'visible';
        inputQuotes.checked = true;
        isHideQuotes = false;
    }
    localStorage.setItem('hideOrShowQuotes', isHideQuotes);
}

function hideOrShowWeather() {
    if (!isHideWeather) {
        weather.style.opacity = '0';
        weather.style.visibility = 'hidden';
        isHideWeather = true;
    } else {
        weather.style.opacity = '1';
        weather.style.visibility = 'visible';
        inputWeather.checked = true;
        isHideWeather = false;
    }
    localStorage.setItem('hideOrShowWeather', isHideWeather);
}

function hideOrShowPlayer() {
    if (!isHidePlayer) {
        player.style.opacity = '0';
        player.style.visibility = 'hidden';
        isHidePlayer = true;
    } else {
        player.style.opacity = '1';
        player.style.visibility = 'visible';
        inputAudio.checked = true;
        isHidePlayer = false;
    }
    localStorage.setItem('hideOrShowPlayer', isHidePlayer);
}

function hideOrShowTodo() {
    if (!isHideTodo) {
        todo.style.opacity = '0';
        todo.style.visibility = 'hidden';
        isHideTodo = true;
    } else {
        todo.style.opacity = '1';
        todo.style.visibility = 'visible';
        inputTodo.checked = true;
        isHideTodo = false;
    }
    localStorage.setItem('hideOrShowTodo', isHideTodo);
}

window.onload = function () {
    if (localStorage.getItem('hideOrShowTime') === 'true') {
        time.style.opacity = '0';
        time.style.visibility = 'hidden';
        inputTime.checked = false;
        isHideTime = true;
    }

   if (localStorage.getItem('hideOrShowDate') === 'true') {
        date.style.opacity = '0';
        date.style.visibility = 'hidden';
        inputDate.checked = false;
        isHideDate = true;
    }

   if (localStorage.getItem('hideOrShowGreeting') === 'true') {
        greeting.style.opacity = '0';
        greeting.style.visibility = 'hidden';
        inputGreeting.checked = false;
        isHideGreeting = true;
    }

   if (localStorage.getItem('hideOrShowQuotes') === 'true') {
        quotes.style.opacity = '0';
        quotes.style.visibility = 'hidden';
        inputQuotes.checked = false;
        isHideQuotes = true;
    }

   if (localStorage.getItem('hideOrShowWeather') === 'true') {
        weather.style.opacity = '0';
        weather.style.visibility = 'hidden';
        inputWeather.checked = false;
        isHideWeather = true;
   }

   if (localStorage.getItem('hideOrShowPlayer') === 'true') {
        player.style.opacity = '0';
        player.style.visibility = 'hidden';
        inputAudio.checked = false;
        isHidePlayer = true;
   }

   if (localStorage.getItem('hideOrShowTodo') === 'true') {
        todo.style.opacity = '0';
        todo.style.visibility = 'hidden';
        inputTodo.checked = false;
        isHideTodo = true;
   }
};

inputTime.addEventListener('click', hideOrShowTime);
inputDate.addEventListener('click', hideOrShowDate);
inputGreeting.addEventListener('click', hideOrShowGreeting);
inputQuotes.addEventListener('click', hideOrShowQuotes);
inputWeather.addEventListener('click', hideOrShowWeather);
inputAudio.addEventListener('click', hideOrShowPlayer);
inputTodo.addEventListener('click', hideOrShowTodo);

export {
    hideOrShowTime,
    inputTime,
    inputDate,
    inputQuotes,
    inputGreeting,
    inputWeather,
    inputTodo,
    inputAudio,
}