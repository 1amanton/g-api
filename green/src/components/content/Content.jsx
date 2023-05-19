import { Window } from './Window'
import classes from './Content.module.scss'
import { SendMsg } from './SendMsg'
import { useState } from 'react'


export const Content = ({ socket }) => {

    const [outMessages, setOutMessages] = useState([])

    return (
        <div className={classes.content}>

            <Window socket={socket} outMessages={outMessages} setOutMessages={setOutMessages} />

            <SendMsg socket={socket} outMessages={outMessages} setOutMessages={setOutMessages} />

        </div>
    )
}