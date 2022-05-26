import { lanKey } from "./language";

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherError = document.querySelector('.weather-error');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

weatherError.innerHTML = '';
function errorCity() {
    weatherIcon.style.display = 'none';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    humidity.textContent = '';
    lanKey === 'en' ? weatherError.innerHTML = 'City not found' : weatherError.innerHTML = 'Город не найден';
}

async function getWeather() {
    localStorage.getItem('city') ? city.value = localStorage.getItem('city') : (city.value = 'Minsk' && localStorage.setItem('city', 'Minsk'));
    weatherError.innerHTML = '';
    let url;

    if (lanKey === 'en') {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=2c511c66b2223a48419eb95dbe8ca344&units=metric`;
    } else if (lanKey === 'ru') {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=2c511c66b2223a48419eb95dbe8ca344&units=metric`;
    }

    const res = await fetch(url);
    const data = await res.json();

    if (res.status === 404 || res.status === 400) {
        lanKey === 'en' ? weatherError.innerHTML = 'City not found' : weatherError.innerHTML = 'Город не найден';
        weatherIcon.style.display = 'none';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        humidity.textContent = '';
        lanKey === 'en' ? localStorage.setItem('city', 'Minsk') : localStorage.setItem('city', 'Минск');
        return;
    }

    if (lanKey === 'ru' && localStorage.getItem('city') === 'Minsk') {
        city.value = 'Минск'
    } else if (lanKey === 'en' && localStorage.getItem('city') === 'Минск') {
        city.value = 'Minsk';
    }

    weatherIcon.style.display = 'block';
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C ${data.weather[0].description}`;

    if (lanKey === 'en') {
        weatherDescription.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity} %`;
    } else {
        weatherDescription.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
        humidity.textContent = `Влажность: ${data.main.humidity} %`;
    }
}

function setCity(e) {
    if (e.code === 'Enter') {
        localStorage.setItem('city', city.value);
        getWeather();
        city.blur();
    }
}

city.onblur = function () {
    if (city.value === '') {
        errorCity();
        lanKey === 'en' ? localStorage.setItem('city', 'Minsk') : localStorage.setItem('city', 'Минск');
        return;
    }

    localStorage.setItem('city', city.value);
    getWeather();
};

function enterCity() {
    city.style.color = 'white';
    city.value = '';
}

// window.onload = getWeather();
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('click', enterCity);
city.addEventListener('keypress', setCity);

export {
    getWeather,
}
