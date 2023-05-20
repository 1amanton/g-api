import classes from './Home.module.scss'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Login } from '../components/buttons/Login'


export const Home = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState('')
    const [ins, setIns] = useState('')
    const [token, setToken] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('user', user)
        localStorage.setItem('ins', ins)
        localStorage.setItem('token', token)

        // socket.emit('loginData', {
        //     user: localStorage.getItem('user'),
        //     idInstance: localStorage.getItem('ins'),
        //     apiTokenInstance: localStorage.getItem('token')
        // })

        navigate('/chat')
    }


    return (
        <div className={classes.home}>
            <h1 className={classes.title}>MESSENGER</h1>
            <form onSubmit={handleSubmit} className={classes.loginForm}>

                <div className={classes.form__group}>
                    <input type="input" className={classes.form__field} placeholder="Name" name="name" id='name'
                        required
                        value={user} onChange={(e) => setUser(e.target.value)}
                    />
                    <label htmlFor="name" className={classes.form__label}>Name</label>
                </div>


                <div className={classes.form__group}>
                    <input type="input" className={classes.form__field} placeholder="Name" name="id" id='id'
                        required
                        value={ins} onChange={(e) => setIns(e.target.value)}
                    />
                    <label htmlFor="id" className={classes.form__label}>Id</label>

                </div>


                <div className={classes.form__group}>
                    <input type="input" className={classes.form__field} placeholder="Name" name="token" id='token'
                        required
                        value={token} onChange={(e) => setToken(e.target.value)}
                    />
                    <label htmlFor="token" className={classes.form__label}>Token</label>
                </div>

                <Login name={"Login"} setColor={"#38ef7d"} />


            </form>

        </div >
    )
}