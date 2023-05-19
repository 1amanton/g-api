import classes from './Chat.module.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/sidebar/Sidebar';
import { Nav } from '../components/nav/Nav';
import { Content } from '../components/content/Content';


const Chat = ({ socket }) => {
    console.log("CHAAAAAAAAT LOADED")

    const [messages, setMessages] = useState([])

    useEffect(() => {
        console.log("from useefect empty array")

        socket.emit('showMessages', { id: socket.id, socketID: socket.id })
        socket.on('msgResponse', (data) => setMessages(() => [...data]))
    }, [])

    useEffect(() => {
        console.log("from useefect")
        socket.on('msgResponse', (data) => setMessages(() => [...data]))

    }, [socket, messages])

    console.log(messages)

    return (
        <div className={classes.container}>

            <div className={classes.left}>
                <Sidebar socket={socket} messages={messages} />
            </div>
            <div className={classes.right}>
                <Nav socket={socket} />
                <Content socket={socket} />

            </div>

            {/* 
            <div className="right">
                INC MSGS
                {messages.map((msg, idx) => <h5 key={idx}>{msg.messageData.textMessageData.textMessage}  + {msg.idMessage}</h5>)}
            </div> */}

        </div>
    )
}

export default Chat;