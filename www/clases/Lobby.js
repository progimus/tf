const CinquilloGame = require('./CinquilloGame');

module.exports = class Lobby {
  constructor(name) {
    this.players = {};
    this.queue = [];
    this.games = {};
    this.game = name;
    this.room = 'lobby';
  }

  join(player) {
    this.players[player.id] = player;
    player.socket.join(this.room);
  }

  leave(player) {
    delete this.players[player.id];
    player.socket.leave(this.room);
  }

  joinQueue(id) {
    this.queue.push(this.players[id]);

    if (this.queue.length < 3) return;

    const players = this.queue.splice(0, 3);

    this.startGame(players);
  }

  startGame(players) {
    const game = new CinquilloGame(this.games.length, players);

    this.games[game.id] = game;

    game.start();
  }
}