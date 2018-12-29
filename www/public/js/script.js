const socket = io();

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('joinLobby')
    .addEventListener('click', () => socket.emit('joinLobby'));

  document.getElementById('joinQueue')
    .addEventListener('click', () => socket.emit('joinQueue'));

  socket.on('deal', deal);
  socket.on('turn', turn);
});

function deal(cards) {
  console.log(cards);
}

function turn(turn) {
  console.log(turn);
}