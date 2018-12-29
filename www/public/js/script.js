const socket = io();

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('joinLobby')
    .addEventListener('click', socket.emit('joinLobby'));

  document.getElementById('joinQueue')
    .addEventListener('click', socket.emit('joinQueue'));
});