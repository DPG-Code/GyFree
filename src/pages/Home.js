import { useLocation } from "wouter"
import { useState } from "react"
import { useGifs } from "hooks/useGifs"
import ListOfGifs from 'components/ListOfGifs'
import TrendinsSearches from "components/TrendingSearch/TrendingSearches"
import './Home.css'

function Home () {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = (e) => {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <section className="App-container">
            <h1>GiFree</h1>
            <p className="description">Encontraras gifs de lo que imagines!</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword} placeholder="Buscar gifs"/>
            </form>
            <h3 className="recientes">Gifs recientes</h3>
            <ListOfGifs gifs={gifs}/>
            <TrendinsSearches />
        </section>
    )

}

export default Home