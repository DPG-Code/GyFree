import { useGifs } from 'hooks/useGifs';
import GifList from "./GifList";

export default function ListOfGifs ({params}) {
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({keyword})

    const handleNextPage = () => {
      setPage(prevPage => prevPage + 1)
    }

    return (
      <>
        { loading
        ? <p>Cargando...</p>
        : <>
            <h3>{decodeURI(keyword)}</h3>
            <GifList gifs={gifs} />
          </>
        }
        <button onClick={handleNextPage}>Next Page</button>
      </>
    )
}