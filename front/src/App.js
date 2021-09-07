import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';
import React, {useState ,useEffect} from 'react'

let socket = io('http://localhost:5000');




function App() {

  const [test, setTest] = useState([]);

  

  useEffect(() => {
    socket.on('message', (data) => {
      console.log(data);
      // setTest(data);
    })
  },[test])


console.log(test)

function submitHandler(event) {
  event.preventDefault();
  console.log(event.target.firstChild.value)
  
  socket.emit('chatMessage', event.target.firstChild.value)
  setTest(...test,event.target.firstChild.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <div>{test}</div>
      </header>
      <form id='messageForm' action='' onSubmit={submitHandler}>
        <input type='text' name='message' />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
