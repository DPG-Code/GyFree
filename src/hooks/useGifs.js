import {useState, useEffect, useContext} from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs ({keyword} = {keyword : null}) {
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

    useEffect(function(){
    setLoading(true)
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'gifs'
    getGifs({keyword : keywordToUse})
        .then(gifs => {
        setGifs(gifs)
        localStorage.setItem('lastKeyword', keyword)
        setLoading(false)
        })
    }, [keyword, setGifs])

    return {loading, gifs}
}