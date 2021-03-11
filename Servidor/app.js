var http = require('http');

console.log("inicializando");

//create a server object:
http.createServer(function (req, res) {
    var mensaje = req.readable;
    
    console.log(mensaje);

  res.write('El nUBe-Server!'); //write a response to the client
  res.end(); //end the response
}).listen(5896); //the server object listens on port 8080


console.log("inicializado");