const Game = require('./Game');
const SpanishDeck = require('./SpanishDeck');
const SpanishCard = require('./SpanishCard');

module.exports = class CinquilloGame extends Game {
  constructor(id, players) {
    super(id, players);

    this.deck = new SpanishDeck();
  }

  start() {
    this.deck.shuffle();

    this.deal();

    this.turn = this.whoHas(new SpanishCard(0, 5));

    for (let player of this.players) {
      player.socket.emit('turn', this.turn);
    }
  }
}