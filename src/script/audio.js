import { playList } from './playList.js';

const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const buttonPlay = document.querySelector('.play');
const buttonVolume = document.querySelector('.volume');
const progressBar = document.querySelector('.progress-bar');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.current-time');
let nameAudio = document.querySelector('.name-audio');
let generalTime = document.querySelector('.general-time');
const playListContainer = document.querySelector('.play-list');
let activeLi;
let liIcon;
const audio = new Audio();
let isPlay = false;
let index = 0;
let currentTimeAudio = 0;

audio.volume = 0.5;
progressBar.style.background = '#C4C4C4';
nameAudio.innerHTML = playList[0].title;

function playAudio(num) {
    let playNum = playList[num].title;
    generalTime.innerHTML = playList[num].duration;
    nameAudio.innerHTML = playList[num].title;
    audio.src = `./assets/sounds/${playNum}.mp3`;
    audio.currentTime = currentTimeAudio;
    audio.play();
    isPlay = true;

    activeLi.forEach((el, index) => {
       index === num ? el.classList.add('play-item_active') : el.classList.remove('play-item_active');
    })

    liIcon.forEach((item, index) => {
        index === num ?  item.classList.toggle('pause') : item.classList.remove('pause');
    })
}

function pauseAudio() {
    currentTimeAudio = audio.currentTime;
    audio.pause();
    isPlay = false;
}

function playOrPause() {
    !isPlay ? playAudio(index) : pauseAudio();

    if (!isPlay) {
        liIcon.forEach(item => {
            item.classList.remove('pause');
        })
    }

    toggleBtn();
}

function toggleBtn() {
    buttonPlay.classList.toggle('pause');
}

function playPrevAudio() {
    index--;
    currentTimeAudio = 0;
    if (index < 0) {
        index = 4;
    }

    buttonPlay.classList.add('pause');
    playAudio(index);
    updateProgress();
}

function playNextAudio() {
    index++;
    currentTimeAudio = 0;
    if (index > 4) {
        index = 0;
    }

    buttonPlay.classList.add('pause');
    playAudio(index);
    updateProgress();
}

createPlayList();

function createPlayList() {
    for (let i = 0; i < playList.length; i++) {
        const div = document.createElement('div')
        const li = document.createElement('li');
        const button = document.createElement('button');
        let classForLi = ['play', 'player-icon', 'li-icon'];

        div.classList.add('li-container');
        li.classList.add('play-item');
        li.textContent = playList[i].title;
        button.classList.add(...classForLi);
        playListContainer.append(div);
        div.append(button);
        div.append(li);
    }

    activeLi = document.querySelectorAll('.play-item');
}

function updateProgress() {
    progressBar.value = (audio.currentTime / audio.duration) * 100 || 0;
    progressBar.style.background = `linear-gradient(to right, darkgreen 0%, darkgreen ${progressBar.value}%, #C4C4C4 ${progressBar.value}%, #C4C4C4 100%)`;
    let timeAudio = Math.round(audio.currentTime);
    currentTimeAudio =timeAudio;

    if (timeAudio < 10) {
        currentTime.innerHTML = `00:0${timeAudio}`;
    } else if (timeAudio > 9 && timeAudio < 60) {
        currentTime.innerHTML = `00:${timeAudio}`;
    } else if (timeAudio > 59) {
        if (timeAudio % 60 < 10) {
            currentTime.innerHTML = `0${Math.floor(timeAudio / 60)}:0${timeAudio % 60}`;
        } else {
            currentTime.innerHTML = `0${Math.floor(timeAudio / 60)}:${timeAudio % 60}`;
        }
    }
}

function changeProgress(e) {
    audio.currentTime = e.target.value * audio.duration / 100;
    updateProgress();
}

function volumeONOff() {
    let volumeValue = audio.volume;

    if (!audio.muted || volumeValue === 0) {
        audio.muted = true;
        buttonVolume.style.backgroundImage = 'url(./assets/svg/mute.svg)';
        volumeBar.value = 0;
        volumeBar.style.background = `linear-gradient(to right, #C4C4C4 0%, #C4C4C4 100%)`;
    } else {
        audio.muted = false;
        buttonVolume.style.backgroundImage = 'url(./assets/svg/volume.svg)';
        volumeBar.value = volumeValue;
        volumeBar.style.background = `linear-gradient(to right, darkgreen 0%, darkgreen ${volumeValue * 100}%, #C4C4C4 ${volumeValue * 100}%, #C4C4C4 100%)`;
    }
}

function rangeUpdateVolume() {
    audio.volume = volumeBar.value;
    if (volumeBar.value === '0') {
        buttonVolume.style.backgroundImage = 'url(./assets/svg/mute.svg)';
    } else {
        buttonVolume.style.backgroundImage = 'url(./assets/svg/volume.svg)';
        audio.muted = false;
    }
}

function updateValueProgressBar() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, darkgreen 0%, darkgreen ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
}
function updateValueProgressVolume() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, darkgreen 0%, darkgreen ${value * 100}%, #C4C4C4 ${value * 100}%, #C4C4C4 100%)`;
}

liIcon = document.querySelectorAll('.li-icon');

liIcon.forEach((item, ind) => {
    currentTimeAudio = 0;
    item.addEventListener('click', function () {
        if (item.classList.contains('pause')) {
            playOrPause();
            item.classList.remove('pause');
        } else {
            if (ind === index) {
                playAudio(ind);
                buttonPlay.classList.add('pause');
            } else {
                index = ind;
                currentTimeAudio = 0;
                playAudio(ind);
                buttonPlay.classList.add('pause');
            }
        }
    })
})

audio.addEventListener('ended', playNextAudio);

buttonVolume.addEventListener('click', volumeONOff);
volumeBar.addEventListener('input', rangeUpdateVolume);
volumeBar.addEventListener('input', updateValueProgressVolume);

audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', changeProgress);
progressBar.addEventListener('input', updateValueProgressBar);

buttonPlay.addEventListener('click', playOrPause);
playNext.addEventListener('click', playNextAudio);
playPrev.addEventListener('click', playPrevAudio);
