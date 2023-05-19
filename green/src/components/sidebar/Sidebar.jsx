import { useNavigate } from 'react-router-dom'
import classes from './Sidebar.module.scss'

export const Sidebar = ({ socket, messages }) => {



    return (
        <div className={classes.sidebar}>
            <span className={classes.title}>УВЕДОМЛЕНИЯ</span>
            {messages.map((msg, idx) => <h5 key={idx}>Sender: {msg.senderData.senderName} text {msg.messageData.textMessageData.textMessage}  + {msg.idMessage}</h5>)}
        </div>
    )
}