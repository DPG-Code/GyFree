import { Helmet } from "react-helmet"
import { useGifs } from "hooks/useGifs"
import SearchForm from "components/SeacrhForm/SearchForm"
import ListOfGifs from 'components/ListOfGifs'
import TrendinsSearches from "components/TrendingSearch/TrendingSearches"
import './Home.css'

function Home () {
    const {loading, gifs} = useGifs()

    return (
        <>
            <Helmet>
                <title>GiFree</title>
                <meta name="description" content='Home'></meta>
            </Helmet>
            <section className="App-container">
                <h1 className="title">GiFree</h1>
                <p className="description">Encontraras gifs de lo que imagines!</p>
                <SearchForm />
                <TrendinsSearches />
                <h3 className="recientes">Gifs recientes</h3>
                {
                    loading
                    ? <p>Loading...</p>
                    : <ListOfGifs gifs={gifs}/>
                }
            </section>
        </>
    )

}

export default Home