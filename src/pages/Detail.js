import useSingleGifs from 'hooks/useSingleGif'
//import useSEO from 'hooks/useSEO'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'
import './Detail.css'

export default function Detail({params}){
    const { gif, isLoading, isError } = useSingleGifs({ id : params.id })

    const title = gif ? gif.title : ''
    //useSEO({ description : `Detail od ${title}`, title })

    if(isLoading) return (
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <p>Loading...</p>
            </>
        )
    if(isError) return <Redirect  to='/404'/>
    if(!gif) return null

    return (
        <>
            <Helmet>
                <title>GiFree | {title}</title>
                <meta name="description" content={title}></meta>
            </Helmet>
            <div className='gif-detail'>
                <img src={gif.url} alt={gif.title} />
                <div className='info'>
                    <h3>{gif.title}</h3>
                    <input type='text' defaultValue={gif.url}/>
                    <p>{gif.id}</p>
                </div>
            </div>
        </>
    )
}