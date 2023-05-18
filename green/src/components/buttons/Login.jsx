import classes from "./Login.module.css"

export const Login = ({ name }) => {
    return (
        <button
            className={classes.btn}
        >
            {name}
        </button>
    )
}