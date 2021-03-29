const app = require('express')();
//const http = require('http').ClientRequest(app);
const io = require('socket.io')(http);

function addMessage(e) {
//     var mensaje = {
//     author: document.getElementById('username').value,
//     text: document.getElementById('texto').value
//   };

  socket.emit('new-message', mensaje);
  return false;
}