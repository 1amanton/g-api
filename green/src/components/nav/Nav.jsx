import { useNavigate } from 'react-router-dom'
import classes from './Nav.module.scss'

export const Nav = ({ socket }) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('ins')
        localStorage.removeItem('token')
        socket.emit('userLogout', socket.id)
        navigate('/')
    }

    return (
        <div className={classes.nav}>
            <div className={classes.logo}></div>
            <button className={classes.logout} onClick={handleLogout}>Покинуть чат</button>
        </div>
    )
}