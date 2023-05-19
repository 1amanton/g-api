import classes from "./Login.module.css"

export const Login = ({ name, setColor }) => {
    return (
        <button
            className={classes.btn}
            style={{ backgroundColor: { setColor } }}
        >
            {name}
        </button>
    )
}