import { useState } from 'react'
import classes from './MsgText.module.scss'

export const MsgText = ({ socket }) => {

    const [text, setText] = useState('')
    const [outMessages, setOutMessages] = useState([])

    const handleChangeMsg = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    const handleSend = (e) => {
        e.preventDefault()
        setOutMessages([...outMessages, {
            id: socket.id,
            text: text
        }])
        console.log("addmsg", outMessages)

        socket.emit('sendMsg', text)
        setText("")
        socket.emit('showMessages', { id: socket.id, socketID: socket.id })
        // handleEmit()
    }


    return (
        <div>
            MSGTEXT


            <form onSubmit={handleSend}>
                <input type="text" value={text} onChange={handleChangeMsg} />
                <button>send</button>
            </form>
            {outMessages.map((msg, idx) => <h5 key={idx}>{msg.text}</h5>)}

        </div>
    )
}