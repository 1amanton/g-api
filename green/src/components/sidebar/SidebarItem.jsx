import { useEffect } from 'react'
import classes from './SidebarItem.module.scss'


export const SidebarItem = ({ author, text, tel }) => {


    return (
        <div className={classes.sbitem}>
            <h3>От: {author}</h3>
            <h3>+{tel.slice(0, -5)}</h3>
            <p>Сообщение: {text}</p>
        </div>
    )
}