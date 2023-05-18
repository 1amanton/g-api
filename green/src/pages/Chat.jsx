import classes from './Chat.module.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Chat = ({ socket }) => {
    console.log("CHAAAAAAAAT LOADED")


    // useEffect(() => {
    //     handleEmit()
    // }, [])

    const [messages, setMessages] = useState([])

    const [outMessages, setOutMessages] = useState([])

    const [text, setText] = useState('')





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

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('ins')
        localStorage.removeItem('token')
        socket.emit('userLogout', socket.id)
        navigate('/')
    }


    return (
        <div >

            <div className="right">
                INC MSGS
                {messages.map((msg, idx) => <h5 key={idx}>{msg.messageData.textMessageData.textMessage}  + {msg.idMessage}</h5>)}
            </div>


            <div className="left">
                <form>
                    <input type="text" onChange={handleChangeMsg} />
                    <button onClick={handleSend}>send</button>
                </form>
                {outMessages.map((msg, idx) => <h5 key={idx}>{msg.text}</h5>)}
            </div>

            <button className={classes.logout} onClick={handleLogout}>Покинуть чат</button>

            {/* <button onClick={handleEmit}>emit</button> */}

        </div>
    )
}

export default Chat;