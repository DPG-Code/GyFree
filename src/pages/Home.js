import { Link, useLocation } from "wouter"
import { useState } from "react"
import { useGifs } from "../hooks/useGifs"
import GifList from '../components/GifList'
import './Home.css'

const POPULAR_GIFS = ['valorant', 'rick', 'league of legends']

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
            <GifList gifs={gifs}/>
            <h3 className="populares">Gifs mas populares</h3>
            <ul>
            {
            POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>Gif de {popularGif}</Link>
                </li>
            ))
            }
            </ul>
        </section>
    )

}

export default Home