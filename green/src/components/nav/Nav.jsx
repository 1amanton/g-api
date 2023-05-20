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
            <div className={classes.logoutSection} onClick={handleLogout}>
                <h4 name='logout' id='logout' className={classes.logout}>Покинуть чат</h4>
                <label htmlFor="logout"><img className={classes.lblImg} src="https://allmakers.fr/wp-content/uploads/2021/03/envoi_fichier-150x150.png" alt="" /></label>
            </div>
        </div>
    )
}