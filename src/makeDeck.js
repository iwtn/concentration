const makeCard = (num, suit, color) => {
  return {
    num: num,
    suit: suit,
    side: 'back',
    textColor: color,
    got: false,
  }
}

const makeDeck = () => {
  let deck = [];

  [
    {suit: '♠', color: 'black'},
    {suit: '♣', color: 'black'},
    {suit: '♠', color: 'red'},
    {suit: '♣', color: 'red'},
  ].forEach( (d) => {
    for (let i=0; i<10; i++) {
      deck.push(makeCard(i+1, d.suit, d.color))
    }
    ['J', 'Q', 'K'].forEach( (n) => {
      deck.push(makeCard(n, d.suit, d.color))
    })
  });
  deck.sort(() => (Math.random() - 0.5));

  return deck
}

export default makeDeck
