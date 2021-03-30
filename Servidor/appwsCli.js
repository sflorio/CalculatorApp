//socket.emit('CH01', 'me', 'test msg');
// var io = require('socket.io');

// var socket = io.connect('http://localhost:8080', { 
//   'forceNew': true 
// }); 

// var socket = io.connect('http://localhost:5896', { 
//   'forceNew': true 
// }); 

// var math = "1+2+3+4+5+6+7+8+9+10";
// socket.emit('calculate-request', math);

// socket.on('calculate-response', function(data) { 
//     console.log(data);

// });

// function addMessage(e) {
// //     var mensaje = {
// //     author: document.getElementById('username').value,
// //     text: document.getElementById('texto').value
// //   };

//   socket.emit('new-message', mensaje);
//   return false;
// }

/*
var socket = require('socket.io-client')('http://localhost:5896');
  
  socket.on('connect', () => {
      console.log("Connected to server")
  });
  
  socket.on('calculate-response', (data) => {
    console.log(data);
  });


  var math = "1+2+3+4+5+6+7+8+9+10";
  socket.emit('calculate-request', "1+2+3+4+5+6+7+8+9+10");
*/
var io = require('socket.io-client');

// var socket = io.connect('http://localhost:5896', { 
//   'forceNew': true
// }); 

var socket = io.connect('http://localhost:5896');
 socket.on('connect', function(data) {
    socket.emit('request', '1+2+3+4+5+6+7+8+9+10');

    socket.on('response', function(data) { 
      console.log("La respuesta es: " + data);
    });

 });