import { setBg, getLinkToImageUnsplash, getLinkToImageFlickr } from "./time-and-greeting";
import {getWeather} from "./weather";

const githubCollection = document.querySelector('.github-collection');
const unsplashCollection = document.querySelector('.unsplash-collection');
const flickrCollection = document.querySelector('.flickr-collection');

const tegUnsplash = document.querySelector('.enter-teg-unsplash');
const tegFlickr = document.querySelector('.enter-teg-flickr');
const inputTegUnsplash = document.querySelector('.text-teg-unsplash');
const inputTegFlickr = document.querySelector('.text-teg-flickr');

let isGitHubCollection = localStorage.getItem('isGitHubCollection');
let isUnsplashCollection = localStorage.getItem('isUnsplashCollection');
let isFlickrCollection = localStorage.getItem('isFlickrCollection');
inputTegUnsplash.value = localStorage.getItem('teg') || '';

inputTegUnsplash.value = localStorage.getItem('tegUnsplash') || '';
inputTegFlickr.value = localStorage.getItem('tegFlickr') || '';

inputTegUnsplash.disabled = true;
inputTegFlickr.disabled = true;

function setTegUnsplash(e) {
    if (e.code === 'Enter') {
        localStorage.setItem('tegUnsplash', inputTegUnsplash.value);
        if (isUnsplashCollection === true) {
            getLinkToImageUnsplash();
        }
        inputTegUnsplash.blur();
    }
}

inputTegUnsplash.onblur = function () {
    localStorage.setItem('tegUnsplash', inputTegUnsplash.value);
    if (isUnsplashCollection === true) {
        if (inputTegUnsplash.value === '') {
            return;
        } else {
            getLinkToImageUnsplash();
        }
    }
    inputTegUnsplash.blur();
};

function enterTegUnsplash() {
    inputTegUnsplash.value = '';
}

function setTegFlickr(e) {
    if (e.code === 'Enter') {
        localStorage.setItem('tegFlickr', inputTegFlickr.value);
        if (isFlickrCollection === true) {
            getLinkToImageFlickr();
        }
        inputTegFlickr.blur();
    }
}

inputTegFlickr.onblur = function () {
    localStorage.setItem('tegFlickr', inputTegFlickr.value);
    if (isFlickrCollection === true) {
        if (inputTegFlickr.value === '') {
            return;
        } else {
            getLinkToImageFlickr();
        }
    }
    inputTegFlickr.blur();
};

function enterTegFlickr() {
    inputTegFlickr.value = '';
}

function showImageCollection() {
    if (isGitHubCollection === 'true') {
        inputTegUnsplash.disabled = true;
        inputTegFlickr.disabled = true;
        isGitHubCollection = true;
        githubCollection.checked = true;
        unsplashCollection.checked = false;
        flickrCollection.checked = false;
        setBg();
    } else if (isUnsplashCollection === 'true') {
        inputTegUnsplash.disabled = false;
        inputTegFlickr.disabled = true;
        isUnsplashCollection = true;
        githubCollection.checked = false;
        unsplashCollection.checked = true;
        flickrCollection.checked = false;
        getLinkToImageUnsplash();
    } else if (isFlickrCollection === 'true') {
        inputTegUnsplash.disabled = true;
        inputTegFlickr.disabled = false;
        isFlickrCollection = true;
        githubCollection.checked = false;
        unsplashCollection.checked = false;
        flickrCollection.checked = true;
        getLinkToImageFlickr();
    } else {
        isGitHubCollection = true;
        localStorage.setItem('isGitHubCollection', isGitHubCollection);
        githubCollection.checked = true;
        setBg();
    }
}

function showGitHubCollection() {
    inputTegUnsplash.disabled = true;
    inputTegFlickr.disabled = true;
    isGitHubCollection = true;
    isUnsplashCollection = false;
    isFlickrCollection = false;
    githubCollection.checked = true;
    unsplashCollection.checked = false;
    flickrCollection.checked = false;
    setLocalStorageCollection(isGitHubCollection, isUnsplashCollection, isFlickrCollection);

    setBg();
}

function showUnsplashCollection() {
    inputTegUnsplash.disabled = false;
    inputTegFlickr.disabled = true;
    isGitHubCollection = false;
    isUnsplashCollection = true;
    isFlickrCollection = false;
    githubCollection.checked = false;
    unsplashCollection.checked = true;
    flickrCollection.checked = false;
    setLocalStorageCollection(isGitHubCollection, isUnsplashCollection, isFlickrCollection);

    getLinkToImageUnsplash();
}

function showFlickrCollection() {
    inputTegUnsplash.disabled = true;
    inputTegFlickr.disabled = false;
    isGitHubCollection = false;
    isUnsplashCollection = false;
    isFlickrCollection = true;
    githubCollection.checked = false;
    unsplashCollection.checked = false;
    flickrCollection.checked = true;
    setLocalStorageCollection(isGitHubCollection, isUnsplashCollection, isFlickrCollection);

    getLinkToImageFlickr();
}

function setLocalStorageCollection(github, unsplash, flickr) {
    localStorage.setItem('isGitHubCollection', github);
    localStorage.setItem('isUnsplashCollection', unsplash);
    localStorage.setItem('isFlickrCollection', flickr);
}

window.addEventListener('beforeunload', function () {
    setLocalStorageCollection(isGitHubCollection, isUnsplashCollection, isFlickrCollection);
})

window.onload = function () {
    localStorage.getItem('isGitHubCollection');
    localStorage.getItem('isUnsplashCollection');
    localStorage.getItem('isFlickrCollection');

    showImageCollection();
}

githubCollection.addEventListener('click', showGitHubCollection);
unsplashCollection.addEventListener('click', function () {
    localStorage.getItem('isUnsplashCollection') === 'true' ? unsplashCollection.checked = true : showUnsplashCollection();
});

flickrCollection.addEventListener('click', function () {
    localStorage.getItem('isFlickrCollection') === 'true' ? flickrCollection.checked = true : showFlickrCollection();
});

inputTegUnsplash.addEventListener('click', enterTegUnsplash);
inputTegUnsplash.addEventListener('keypress', setTegUnsplash);
inputTegFlickr.addEventListener('click', enterTegFlickr);
inputTegFlickr.addEventListener('keypress', setTegFlickr);

export {
    isGitHubCollection,
    isUnsplashCollection,
    isFlickrCollection,
    inputTegUnsplash,
    inputTegFlickr,
    showImageCollection,
}
