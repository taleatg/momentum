import { lanKey } from "./language";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

async function getQuote() {
    let quotes;
    lanKey === 'en' ? quotes = './script/data-en.json' : quotes = './script/data-ru.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let min = Math.ceil(0);
    let max = Math.floor(19);
    let index = Math.floor(Math.random() * (max - min + 1)) + min;

    quote.textContent = data[index].text;
    author.textContent = data[index].author;
}

changeQuote.addEventListener('click', getQuote);

export {
    getQuote,
}
