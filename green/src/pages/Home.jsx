import { useState } from "react"
import { useNavigate } from "react-router-dom"



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
        <div>
            <form onSubmit={handleSubmit}>
                name <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
                ins<input type="text" value={ins} onChange={(e) => setIns(e.target.value)} />
                token <input type="text" value={token} onChange={(e) => setToken(e.target.value)} />
                <button>Login</button>
            </form>
        </div>
    )
}