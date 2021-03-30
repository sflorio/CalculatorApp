var net = require('net');
const calculator = require("./calculator.js");

var server = net.createServer(connection => {
    console.log("new connection");

    connection.on("data", data => {

        console.log(data.toString('ascii'));
        var operacion = data.toString('ascii');
        var res = calculator.calcApp(operacion);
        connection.write(res.toString());
    });


    //socket.pipe(socket);
});

server.listen(5896, () => {
    console.log("waiting for a connection");
});