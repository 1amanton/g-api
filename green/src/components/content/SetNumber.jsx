import classes from './SetNumber.module.scss'
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
        <div className={classes.setNumber}>

            {/* <form onSubmit={handleSubmitNumber}>

                <label htmlFor="telnumber">Телефон адресата  +</label>
                <input type="number" id='telnumber' onChange={handleChangeNumber} required />
                <button>submit</button>

            </form> */}


            <form className={classes.form} onSubmit={handleSubmitNumber}>
                <span className={classes.spn}>+</span>
                <div className={classes.form__group}>
                    <input type="number" className={classes.form__field} placeholder="Введите телефон адресата" name="tel" id='tel'
                        required
                        onChange={handleChangeNumber}
                    />
                    <label htmlFor="tel" className={classes.form__label}>Телефон адресата :</label>

                </div>
                <button className={classes.send}>Принять</button>
            </form>

        </div>
    )
}