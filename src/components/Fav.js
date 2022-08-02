import useUser from "hooks/useUser"
import { useState } from "react"
import { useLocation } from "wouter"
import Login from "./Login"
import Modal from "./Modal"

export default function Fav({ id }) {
    const { isLogged, addFav, favs } = useUser()
    const [, navigate] = useLocation()
    const [showModal, setShowModal] = useState(false)

    const isFaved = favs.some(favId => favId === id)

    const handleClick = () => {
        if(!isLogged) return setShowModal(true)
        //isFaved ? deleteFav({id}) : addFav({id})
        addFav({id})
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const handleLogin = () => {
        setShowModal(false)
    }

    const [label, emoji] = isFaved ? ['Remove from Favorites', 'Remove'] : ['Add to Favorites', 'Add']

    return (
        <>
            <button onClick={handleClick}>
                <span aria-label={label}>
                    {emoji}
                </span>
            </button>
            {showModal && <Modal onClose={handleClose}><Login onLogin={handleLogin} /></Modal>}
        </>
    )
}