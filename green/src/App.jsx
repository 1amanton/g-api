import { useEffect, useState } from 'react';
import './App.css';
import socketIO from 'socket.io-client'

const socket = socketIO.connect('http://localhost:5000')



export const App = () => {


  const [messages, setMessages] = useState([])

  const [outMessages, setOutMessages] = useState([])

  const [text, setText] = useState('')

  useEffect(() => {
    socket.on('response', (data) => setMessages(() => [...data]))

  }, [socket, messages])


  const handleEmit = () => {
    socket.emit('showMessages', { id: socket.id, socketID: socket.id })
  }

  const handleSend = (e) => {
    e.preventDefault()
    setOutMessages([...outMessages, {
      id: socket.id,
      text: text
    }])
    handleEmit()
  }

  const handleChangeMsg = (e) => {
    e.preventDefault()
    setText(e.target.value)
  }



  console.log(messages)

  return (
    <div className="App">

      <div className="right">
        ZAZA
        {messages.map((msg, idx) => <h5 key={idx}>{msg.messageData.textMessageData.textMessage}  + {msg.idMessage}</h5>)}
      </div>


      <div className="left">
        <form>
          <input type="text" onChange={handleChangeMsg} />
          <button onClick={handleSend}>send</button>
        </form>
        {outMessages.map((msg, idx) => <h5 key={idx}>{msg.text}</h5>)}
      </div>

      {/* <button onClick={handleEmit}>emit</button> */}



    </div>
  );
}


