import { useEffect, useState } from 'react'
import classes from './Window.module.scss'

export const Window = ({ socket, outMessages, setOutMessages }) => {

    const [currentMessages, setCurrentMessages] = useState([])

    useEffect(() => {
        //socket.emit('showCurrentMessages', { id: socket.id, socketID: socket.id })
        // socket.on('currentMsgResponse', (data) => {
        //     console.log("from WINDOW", data)
        //     setCurrentMessages(() => [...data])
        // })
        socket.on('msgResponse', (data) => setCurrentMessages(() => [...data]))
    }, [])

    useEffect(() => {
        console.log("from useefect")
        socket.on('msgResponse', (data) => setCurrentMessages(() => [...data]))

    }, [socket, currentMessages])

    return (
        <div className={classes.chat}>
            <div className={classes.left}>
                {currentMessages.map((msg, idx) =>
                    <div key={idx} className={classes.msg}>
                        <h5>{msg.messageData.textMessageData.textMessage}</h5>
                    </div>
                )}

            </div>


            <div className={classes.right}>

                {outMessages.map((msg, idx) =>
                    <div key={idx} className={classes.msg}>
                        <h5>{msg.text}</h5>
                    </div>

                )}

            </div>
        </div>
    )
}