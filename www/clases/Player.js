module.exports = class Player {
  constructor(id, socket) {
    this.id = id;
    this.socket = socket;
    this.hand = [];
  }

  hasCard(card1) {
    return this.hand.some(card2 => card1.equal(card2));
  }
}