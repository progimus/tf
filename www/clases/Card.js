module.exports = class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
  
  equal(card) {
    return this.suit === card.suit && this.value === card.value
  }
}