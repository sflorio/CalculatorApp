const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);    
const port = 5896;
const calculator = require("./calculator.js");


// app.get('/', (req, res) => {
//   //res.send("");
//   res.sendFile(__dirname + '/index.html');
  
// });

io.on('connection', (socket) => {
    console.log('a user connected: id '+ socket.id);
  });
  
  io.on('calculate-request', function(data) {      
      console.log(data);
      var res = calculator.calcApp(data);
      console.log(res);
      io.sockets.emit('calculate-response', res);
  });

http.listen(port, () => {
  console.log('listening on *:' + port);
});

