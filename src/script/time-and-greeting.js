import { isGitHubCollection, isUnsplashCollection, isFlickrCollection, inputTegUnsplash, inputTegFlickr } from "./img-collection";
import { lanKey } from "./language";

const timeAndGreeting = document.querySelector('.time');
const curDate = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
let randomNum;
let textForGreeting = 'Good';
const greetingTranslation = {
    en : ['night', 'morning', 'afternoon', 'evening'],
    ru: ['ночи', 'утро', 'день', 'вечер'],
}

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();

    timeAndGreeting.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    let currentDate;
    if (lanKey === 'en') {
        currentDate = date.toLocaleDateString( 'en-US', options);
    } else {
        currentDate = date.toLocaleDateString( 'ru-Ru', options).charAt(0).toUpperCase() +  date.toLocaleDateString( 'ru-Ru', options).slice(1);
    }

    curDate.textContent = currentDate;
}

function showGreeting() {
    const timeOfDay = getTimeOfDay(lanKey);

    lanKey === 'en' ? greeting.textContent = `Good ${timeOfDay},` : greeting.textContent =  textForGreeting + ' ' + timeOfDay + ',';
}

function getTimeOfDay(greeting) {
    const date = new Date();
    let hours = date.getHours();

    if (hours >= 0 && hours < 6) {
        if (greeting === 'ru') {
            textForGreeting = 'Доброй';
        }
        return greetingTranslation[greeting][0];
    }

    if (hours > 5 && hours < 12) {
        if (greeting === 'ru') {
            textForGreeting = 'Доброе';
        }
        return greetingTranslation[greeting][1];
    }

    if (hours > 11 && hours < 18) {
        if (greeting === 'ru') {
            textForGreeting = 'Добрый';
        }
        return greetingTranslation[greeting][2];
    }

    if (hours > 17 && hours < 24) {
        if (greeting === 'ru') {
            textForGreeting = 'Добрый';
        }
        return greetingTranslation[greeting][3];
    }
}

function setLocalStorageName() {
    localStorage.setItem('name', name.value);
}

window.addEventListener('beforeunload', setLocalStorageName);

function getLocalStorageName() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

window.addEventListener('load', getLocalStorageName);

function enterName() {
    name.value = '';
}

getRandomNum();
function getRandomNum() {
    let min = Math.ceil(1);
    let max = Math.floor(20);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}

function setBg() {
    if (!isGitHubCollection) {
        return;
    }

    const img = new Image();
    let timeOfDay = getTimeOfDay('en');
    let numBg = randomNum.toString().padStart(2, '0');

    img.src = `https://raw.githubusercontent.com/taleatg/stage1-tasks/assets/images/${timeOfDay}/${numBg}.jpg`;
    img.onload = () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/taleatg/stage1-tasks/assets/images/${timeOfDay}/${numBg}.jpg')`;
    }
}

async function getLinkToImageUnsplash () {
    if (!isUnsplashCollection) {
        return;
    }

    const img = new Image();
    let timeOfDay;
    if (inputTegUnsplash.value !== '') {
        timeOfDay = inputTegUnsplash.value;
    } else {
        timeOfDay = getTimeOfDay('en');
    }

    const url = `https://api.unsplash.com/photos/random?query=${timeOfDay}&client_id=2SKD7e_vbpcwEtEj43Hu3rKLu6_rCUYWZxnryigev48`;
    const res = await fetch(url);
    const data = await res.json();

    img.src = data.urls.regular;
    img.onload = () => {
        body.style.backgroundImage = `url(${data.urls.regular})`;
    }
}

async function getLinkToImageFlickr () {
    if (!isFlickrCollection) {
        return;
    }

    const img = new Image();
    let timeOfDay;
    if (inputTegFlickr.value !== '') {
        timeOfDay = inputTegFlickr.value;
    } else {
        timeOfDay = getTimeOfDay('en');
    }

    let numBg = randomNum;
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0243e2f827147a38f02ee8b1ec5f02ac&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();

    img.src = body.style.backgroundImage = data.photos.photo[numBg].url_l;
    img.onload = () => {
        body.style.backgroundImage = `url(${data.photos.photo[numBg].url_l})`;
    }
}

function getSlideNext() {
    randomNum++;

    if (randomNum > 20) {
        randomNum = 1;
    }

    if (isGitHubCollection === true) {
        setBg();
    } else if (isUnsplashCollection === true) {
        getLinkToImageUnsplash();
    } else if (isFlickrCollection === true) {
        getLinkToImageFlickr();
    }
}

function getSlidePrev() {
    randomNum--;

    if (randomNum < 1) {
        randomNum = 20;
    }

    if (isGitHubCollection === true) {
        setBg();
    } else if (isUnsplashCollection === true) {
        getLinkToImageUnsplash();
    } else if (isFlickrCollection === true) {
        getLinkToImageFlickr();
    }
}

name.addEventListener('click', enterName);
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

export {
    showTime,
    setBg,
    getLinkToImageUnsplash,
    getLinkToImageFlickr,
    showGreeting,
}
