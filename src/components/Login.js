import useUser from "hooks/useUser";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function Login({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [, navigate] = useLocation()
    const {isLogged, isLogindLoading, hasLoginError, login} = useUser()

    useEffect(() => {
        if (isLogged) {
            navigate('/')
            onLogin && onLogin()
        }
    }, [isLogged, navigate, onLogin])

    const handleSubmit = (e) => {
        e.preventDefault()
        login(username, password)
    };

    return (
        <div>
            {isLogindLoading && <p>Checking credentials...</p>}
            {!isLogindLoading &&
                <form onSubmit={handleSubmit}>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="username"
                        value={username}
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="password"
                        value={password}
                    />
                    <button>Login</button>
                </form>
            }
            {hasLoginError && <p>¡Credentials are invalid!</p>}
        </div>
    );
}
