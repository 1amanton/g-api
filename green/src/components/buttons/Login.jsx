import classes from "./Login.module.scss"

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