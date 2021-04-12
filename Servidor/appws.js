const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  },
  allowEIO3: true
});    
const port = 5896;
const calculator = require("./calculator.js");


io.on('connection', (socket) => {
    console.log('a user connected: id '+ socket.id);
    
    // socket.on("requestcalculo", data => {

    //   console.log(data.toString('ascii'));
      
    //   var operacion = data.toString('ascii');
    //   var res = calculator.calcApp(operacion);
      
    //   socket.emit("respuestacalculo",res);
      
    // });

    socket.on("data", data => {

      console.log(data.toString('ascii'));
      
      var operacion = data.toString('ascii');
      var res = calculator.calcApp(operacion);
      
      socket.emit("data",res);
      
    });

});
  
  

http.listen(port, () => {
  console.log('listening on *:' + port);
});

