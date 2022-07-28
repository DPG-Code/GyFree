import { useCallback } from "react"
import { useLocation } from "wouter"
import { Helmet } from "react-helmet"
import { useGifs } from "hooks/useGifs"
import SearchForm from "components/SearchForm"
import ListOfGifs from 'components/ListOfGifs'
import TrendinsSearches from "components/TrendingSearch/TrendingSearches"
import './Home.css'

function Home () {
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <>
            <Helmet>
                <title>GiFree</title>
                <meta name="description" content='Home'></meta>
            </Helmet>
            <section className="App-container">
                <h1>GiFree</h1>
                <p className="description">Encontraras gifs de lo que imagines!</p>
                <SearchForm onSubmit={handleSubmit}/>
                <h3 className="recientes">Gifs recientes</h3>
                <ListOfGifs gifs={gifs}/>
                <TrendinsSearches />
            </section>
        </>
    )

}

export default Home