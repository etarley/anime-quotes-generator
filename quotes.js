class Quote {
  constructor(quote, character, anime) {
    this._quote = quote;
    this._character = character;
    this._anime = anime;
  }
  get quote() {
    return this._quote;
  }
  get character() {
    return this._character;
  }
  get anime() {
    return this._anime;
  }
}
const quotes = [];
const addQuote = (quote, anime, character) => {
  const animeQuote = new Quote(quote, anime, character);
  quotes.push(animeQuote);
};
addQuote(
  'If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be!',
  'Naruto',
  'Naruto Uzumaki'
);
addQuote(
  'Religion, ideology, resources, land, spite, love or just because… No matter how pathetic the reason, it’s enough to start a war. War will never cease to exist… reasons can be thought up after the fact… Human nature pursues strife.',
  'Paine',
  'Naruto Shippuden'
);
addQuote(
  'Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!',
  'Izuku Midoriya',
  'My Hero Academia'
);
addQuote(
  'The moment you find the courage to give up your life for someone… would be the moment you understand love.',
  'Kenshin Himura',
  'Samurai X'
);
addQuote(
  'If you feel yourself hitting up against your limit, remember for what cause you clench your fists! Remember why you started down this path, and let that memory carry you beyond your limit.',
  'All Might',
  'My Hero Academia'
);
export { quotes };
