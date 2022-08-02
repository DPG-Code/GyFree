import useUser from "hooks/useUser"
const { Link, useRoute } = require("wouter")

export default function Header() {
    const { isLogged, logout } = useUser()
    const [match] = useRoute("/login")

    const handleClick = (e) => {
        e.preventDefault()
        logout()
    }

    const renderLoginButtons = ({isLogged}) => {
        return isLogged
            ? <Link to="#" onClick={handleClick}>
                Logout
            </Link>
            : <>
                <Link to='/login'>
                    Login
                </Link>
                <Link to='/register'>
                    Register
                </Link>
            </>
    }

    const content = match
    ? null
    : renderLoginButtons({isLogged})

    return (
        <header>
            {content}
        </header>
    )
}