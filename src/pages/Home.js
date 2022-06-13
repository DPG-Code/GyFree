import { Link, useLocation } from "wouter"
import { useState } from "react"

const POPULAR_GIFS = ['valorant', 'rick', 'league of legends']

function Home () {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <section className="App-container">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword}/>
            </form>
            <h3>Gifs mas populares</h3>
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