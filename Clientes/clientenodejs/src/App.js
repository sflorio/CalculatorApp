
import ReactDOM from 'react-dom';
import socketClient  from "socket.io-client";

import CalcPanel from "./components/calcpanel";

const SERVER = "http://localhost:5896";
var socket;

function App() {
  socket = socketClient (SERVER);
  socket.on('connection', message => {
    console.log("conectado");
});
  return (    
    <div className="App">
      <header className="App-header">
        <p>          
          <CalcPanel></CalcPanel>
        </p>        
      </header>
    </div>
  );
}

export default App;
