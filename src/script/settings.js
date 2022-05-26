import { lanKey } from "./language";

const settings = document.querySelector('.settings');
const settingsListContainer = document.querySelector('.list-settings-container');
const buttonSettings = document.querySelector('.settings-icon');
const hideElement = document.querySelector('.hide-elem');
const language = document.querySelector('.language');
const collectionImg = document.querySelector('.collection-img');
const enterTeg = document.querySelectorAll('.teg');
const hideTime = document.querySelector('.hide-time');
const hideDate = document.querySelector('.hide-date');
const hideGreeting = document.querySelector('.hide-greeting');
const hideQuotes = document.querySelector('.hide-quotes');
const hideWeather = document.querySelector('.hide-weather');
const hideAudio = document.querySelector('.hide-audio');
const hideTodo = document.querySelector('.hide-todo');

const overlay = document.querySelector('.overlay');
let isSettingsOpen = false;

function lanSettings() {
    if (lanKey === 'en') {
        language.innerHTML = 'Language:';
        collectionImg.innerHTML = 'Collection of images:';
        enterTeg[0].innerHTML = enterTeg[1].innerHTML = 'Enter teg:';
        hideElement.innerHTML = 'Show:';
        hideTime.innerHTML = 'Time';
        hideDate.innerHTML = 'Date';
        hideGreeting.innerHTML = 'Greeting';
        hideQuotes.innerHTML = 'Quotes';
        hideWeather.innerHTML = 'Weather';
        hideAudio.innerHTML = 'Audio player';
        hideTodo.innerHTML = 'ToDo list';
    } else {
        language.innerHTML = 'Язык:';
        collectionImg.innerHTML = 'Коллекция изображений:';
        enterTeg[0].innerHTML = enterTeg[1].innerHTML = 'Введите тег:';
        hideElement.innerHTML = 'Показать:';
        hideTime.innerHTML = 'Время';
        hideDate.innerHTML = 'Дата';
        hideGreeting.innerHTML = 'Приветствие';
        hideQuotes.innerHTML = 'Цитаты';
        hideWeather.innerHTML = 'Погода';
        hideAudio.innerHTML = 'Аудиоплеер';
        hideTodo.innerHTML = 'Список дел';
    }
}

function hideSettings() {
    settingsListContainer.style.opacity = '0';
    settingsListContainer.style.visibility = 'hidden';
    settings.style.zIndex = '1';
    isSettingsOpen = false;
    overlay.style.display = 'none';
}

function showSettings() {
    lanSettings();
    settingsListContainer.style.opacity = '1';
    settingsListContainer.style.visibility = 'visible';
    settings.style.zIndex = '15';
    isSettingsOpen = true;
    overlay.style.display = 'block';
}

buttonSettings.addEventListener('click', function () {
    !isSettingsOpen ? showSettings() : hideSettings();
});

overlay.addEventListener('click', hideSettings);

export {
    hideSettings,
    lanSettings,
}
