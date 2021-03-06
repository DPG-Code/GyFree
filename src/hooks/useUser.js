import context from "context/UserContext";
import { useCallback, useContext, useState } from "react";
import loginService from "services/login";
import addFavService from "services/addFav";

export default function useUser() {
    const {jwt, setJWT, favs, setFavs} = useContext(context)
    const [state, setState] = useState({ loading : false, error: false })

    const login = useCallback(({username, password}) => {
        setState({ loading : true, error: false })
        loginService({ username, password })
            .then(jwt => {
                window.sessionStorage.setItem('jwt', jwt)
                setState({ loading : false, error: false })
                setJWT(jwt)
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt')
                setState({ loading : true, error: true })
                console.error(err)
            })
    }, [setJWT])

    const addFav = useCallback(({ id }) => {
        addFavService({ id, jwt })
            .then(setFavs)
            .catch(err => console.log(err))
    }, [jwt, setFavs])

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    return (
        {
            isLogged : Boolean(jwt),
            isLogindLoading : state.loading,
            hasLoginError : state.error,
            login,
            logout,
            addFav,
            favs
        }
    )
}