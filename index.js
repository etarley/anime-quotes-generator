import { quotes } from './quotes.js';

const chooseRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getQuoteButton = document.getElementById('get-quote');
const quoteBlock = document.getElementById('quote');
const characterSpan = document.getElementById('character');
const animeSpan = document.getElementById('anime-name');

const displayQuote = () => {
  const quote = chooseRandom(quotes);
  quoteBlock.innerHTML = `"${quote.quote}"`;
  characterSpan.innerHTML = `-${quote.character} from`;
  animeSpan.innerHTML = quote.anime;
};

getQuoteButton.addEventListener('click', displayQuote);
