import { useState } from 'react'
import classes from './SendMsg.module.scss'
import { MsgText } from './MsgText'
import { SetNumber } from './SetNumber'


export const SendMsg = ({ socket, outMessages, setOutMessages }) => {

    const [isNumberSetted, setIsNumberSetted] = useState(false)


    const handleEmit = () => {
        socket.emit('showMessages', { id: socket.id, socketID: socket.id })
    }


    return (
        <div className={classes.send}>

            {/* <div>
                {isNumberSetted ? "Чат с пользователем " : "НЕ УСТАНОВИЛ"}
            </div> */}

            <div>
                {isNumberSetted ? <MsgText socket={socket} outMessages={outMessages} setOutMessages={setOutMessages} /> : <SetNumber socket={socket} setIsNumberSetted={setIsNumberSetted} />}
            </div>
        </div>
    )
}