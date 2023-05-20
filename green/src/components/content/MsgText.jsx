import { useState } from 'react'
import classes from './MsgText.module.scss'

export const MsgText = ({ socket, outMessages, setOutMessages }) => {

    const [text, setText] = useState('')


    const handleChangeMsg = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    const handleSend = (e) => {
        e.preventDefault()
        console.log("addmsg", outMessages)
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
        <div className={classes.msgtext}>
            <form className={classes.form} onSubmit={handleSend}>
                <div className={classes.form__group}>
                    <input type="input" className={classes.form__field} placeholder="Введите сообщение" name="msg" id='msg'
                        required
                        value={text} onChange={handleChangeMsg}
                    />
                    <label htmlFor="msg" className={classes.form__label}>Ваше сообщение</label>

                </div>
                <button className={classes.send}>Отправить</button>
            </form>
        </div>
    )
}