import { showGreeting } from "./time-and-greeting";
import { getWeather } from "./weather";
import { getQuote } from "./quotes";
import { todoTranslate } from "./todo-list";
import { lanSettings } from "./settings";

const en = document.querySelector('.lan-en');
const ru = document.querySelector('.lan-ru');
const name = document.querySelector('.name');
const myName = document.querySelector('.my-name');

let lanKey = 'en';

function checkedEn() {
    lanKey = 'en';
    en.checked = true;
    ru.checked = false;
    showGreeting(lanKey);
    getWeather();
    getQuote();
    todoTranslate();
    name.placeholder = '[Enter name]';
    myName.innerHTML = 'Tatsiana Dashuk';
    localStorage.setItem('lan', 'en');
    localStorage.setItem('isCheckedEn', 'true');
    lanSettings();
}

function checkedRu() {
    lanKey = 'ru';
    en.checked = false;
    ru.checked = true;
    showGreeting(lanKey);
    getWeather();
    getQuote();
    todoTranslate();
    name.placeholder = '[Введите имя]';
    myName.innerHTML = 'Татьяна Дашук';
    localStorage.setItem('lan', 'ru');
    localStorage.setItem('isCheckedEn', 'false');
    lanSettings();
}

en.addEventListener('click', function () {
    if (lanKey === 'en') {
       en.checked = true;
    } else {
        checkedEn();
    }
});

ru.addEventListener('click', function () {
    if (lanKey === 'ru') {
        ru.checked = true;
    } else {
        checkedRu();
    }
});

window.addEventListener('load', function () {
    // if (localStorage.getItem('isCheckedEn') === 'true') {
    //     en.checked = true;
    //     localStorage.setItem('isCheckedEn', 'true');
    //     checkedEn();
    // } else
    if (localStorage.getItem('isCheckedEn') === 'false') {
        ru.checked = true;
        localStorage.setItem('isCheckedEn', 'false');
        checkedRu();
    } else {
        en.checked = true;
        localStorage.setItem('isCheckedEn', 'true');
        checkedEn();
    }
});

export {
    checkedEn,
    lanKey,
}

