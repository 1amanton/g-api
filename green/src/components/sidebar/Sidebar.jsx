import { useNavigate } from 'react-router-dom'
import classes from './Sidebar.module.scss'
import { SidebarItem } from './SidebarItem'

export const Sidebar = ({ socket, messages }) => {



    return (
        <div className={classes.sidebar}>
            <span className={classes.title}>УВЕДОМЛЕНИЯ</span>

            {messages.map((msg, idx) =>
                <SidebarItem
                    key={idx} author={msg.senderData.senderName} text={msg.messageData.textMessageData.textMessage} tel={msg.senderData.sender} />)
            }
        </div>
    )
}