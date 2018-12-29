module.exports = class Game {
  constructor(id, players) {
    this.id = id;
    this.players = players;
    this.room = `game${id}`;

    for (let player of this.players) {
      player.socket.join(this.room);
    }
  }

  deal(number = null) {
    const {players, deck} = this;

    number = number || Math.floor(deck.cards.length / players.length);

    for (let i = 0; i < number; i++) {
      for (let player of players) {
        player.hand.push(deck.cards.shift());
      }
    }

    for (let player of players) {
      player.socket.emit('deal', player.hand);
    }
  }

  whoHas(card) {
    for (let player of this.players) {
      if (player.hasCard(card)) return player.id;
    }
  }
}