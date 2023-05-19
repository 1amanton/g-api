import { useState } from "react"


export const SetNumber = ({ socket, setIsNumberSetted }) => {

    const [sendNumber, setSendNumber] = useState("")

    const handleChangeNumber = (e) => {
        e.preventDefault()
        setSendNumber(e.target.value)
    }

    const handleSubmitNumber = (e) => {
        e.preventDefault()
        socket.emit('setSendNumber', { sendNumber: sendNumber })
        setIsNumberSetted(true)
    }

    return (
        <div>

            <form onSubmit={handleSubmitNumber}>

                <label htmlFor="telnumber">Телефон адресата  +</label>
                <input type="text" id='telnumber' onChange={handleChangeNumber} required />
                <button>submit</button>

            </form>

        </div>
    )
}