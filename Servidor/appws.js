const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);    
const port = 5896;
const cookie = require("cookie");

app.get('/', (req, res) => {
  //res.send("");
  res.sendFile(__dirname + '/index.html');
  
});

io.on('connection', (socket) => {
    console.log('a user connected: id '+ socket.id);

    var cli = socket.client;
    var conn = socket.conn;
    var req = socket.request;
    console.log('Las cookies: id '+ cookies);

  });

  io.on('disconnecting', (socket) => {
    console.log('a user disconnected: id '+ socket.id);
  });

  
  socket.on('new-message', function(data) {
      messages.push(data);
  
      io.sockets.emit('messages', messages);
  });

http.listen(port, () => {
  console.log('listening on *:'+ port);
});


// io.on('connection', function(socket) {
//     console.log('Un cliente se ha conectado');
//     socket.emit('messages', messages);
// });

// socket.on('messages', function(data) {
//       console.log(data);
// });