import io  from "socket.io-client";

let client  = new io("ws://localhost:5896");

export default client;