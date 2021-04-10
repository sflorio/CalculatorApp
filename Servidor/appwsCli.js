var net = require('net');

var client = new net.Socket();
client.connect(5896, 'localhost', function() {
	console.log('Connected');
	client.write("1+2");


});


client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});

// var io = require('socket.io-client');

// var socket = io.connect('http://localhost:5896');
//  socket.on('connect', function(data) {
//     socket.emit('requestCalc', '1-2');

    
//     // socket.on('response', function(data) { 
//     //   console.log("La respuesta es: " + data);
//     // });

//  });