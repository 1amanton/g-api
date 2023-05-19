import { Window } from './Window'
import classes from './Content.module.scss'
import { SendMsg } from './SendMsg'


export const Content = ({ socket }) => {
    return (
        <div className={classes.content}>

            <Window />

            <SendMsg socket={socket} />

        </div>
    )
}