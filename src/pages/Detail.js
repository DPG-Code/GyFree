import useGlobalGifs from 'hooks/useGlobalGifs'
import './Detail.css'

export default function Detail({params}){
    const gifs = useGlobalGifs()
    const gif = gifs.find(singleGif => singleGif.id === params.id)

    return (
        <div className='gif-detail'>
            <img src={gif.url} alt={gif.title} />
            <div className='info'>
                <h3>{gif.title}</h3>
                <input type='text' defaultValue={gif.url}/>
                <p>{gif.id}</p>
            </div>
        </div>
    )
}