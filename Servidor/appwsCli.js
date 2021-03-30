var io = require('socket.io-client');

var socket = io.connect('http://localhost:5896');
 socket.on('connect', function(data) {
    socket.emit('request', '1+2+3+4+5+6+7+8+9+10');

    socket.on('response', function(data) { 
      console.log("La respuesta es: " + data);
    });

 });