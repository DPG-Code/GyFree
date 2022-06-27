import { useGifs } from 'hooks/useGifs';
import GifList from "./GifList";
import './ListOfGifs.css'

export default function ListOfGifs ({params}) {
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({keyword})

    const handleNextPage = () => {
      setPage(prevPage => prevPage + 1)
    }

    return (
      < section className='result-search'>
        { loading
        ? <p>Cargando...</p>
        : <>
            <h3 className='title-results'>{decodeURI(keyword)}</h3>
            <GifList gifs={gifs} />
          </>
        }
        <button className='load-more' onClick={handleNextPage}>Load More</button>
      </ section>
    )
}