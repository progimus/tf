const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);

const Lobby = require('./clases/Lobby');
const Player = require('./clases/Player');
const cinquilloLobby = new Lobby('cinquillo');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', socket => {
  const player = new Player(socket.id, socket);

  /* socket.on('joinLobby', () => cinquilloLobby.join(player)); */
  cinquilloLobby.join(player);
  socket.on('joinQueue', () => cinquilloLobby.joinQueue(player.id));
});

http.listen(3000, () => console.log('Server running!'));