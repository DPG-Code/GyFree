import Gif from "./Gif"
import { useGifs } from '../hooks/useGifs';

export default function ListOfGifs ({params}) {
    const {keyword} = params

    const {loading, gifs} = useGifs({keyword})

    return (
      <>
        { loading
        ? <p>Cargando...</p>
        : gifs.map(singleGif => <Gif key={singleGif.id} title={singleGif.title} url={singleGif.url} id={singleGif.id}/>)
        }
      </>
    )
}