import { useGifs } from '../hooks/useGifs';
import GifList from "./GifList";

export default function ListOfGifs ({params}) {
    const {keyword} = params

    const {loading, gifs} = useGifs({keyword})

    return (
      <>
        { loading
        ? <p>Cargando...</p>
        : <GifList gifs={gifs} />
        }
      </>
    )
}