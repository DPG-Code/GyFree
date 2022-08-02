import {useRoute, Link} from "wouter"
import useUser from "hooks/useUser"
import './Header.css'

export default function Header() {
    const { isLogged, logout } = useUser()
    const [match] = useRoute("/login")

    const handleClick = (e) => {
        e.preventDefault()
        logout()
    }

    const renderLoginButtons = ({isLogged}) => {
        return isLogged
            ? <Link className="register-link" to="#" onClick={handleClick}>
                Logout
            </Link>
            : <>
                <Link className="login-link" to='/login'>
                    Login
                </Link>
                <Link className="register-link" to='/register'>
                    Register
                </Link>
            </>
    }

    const content = match
    ? null
    : renderLoginButtons({isLogged})

    return (
        <header>
            <Link className='home-link' to="/">Home</Link>
            {content}
        </header>
    )
}