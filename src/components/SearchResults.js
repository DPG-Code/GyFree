import { useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useGifs } from 'hooks/useGifs';
import { useNearScreen } from 'hooks/useNearScreen';
import ListOfGifs from "./ListOfGifs";
import debounce from 'just-debounce-it';
import './SearchResults.css'
//import useSEO from 'hooks/useSEO';

export default function SearchResults ({params}) {
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({ keyword })
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({ distance : '200px' , externalRef : loading ? null : externalRef, once : false })

    const title = gifs ? `${gifs.length} ${decodeURI(keyword)} results` : ''
    //useSEO({ title })

    const debounceHandleNextPage = useCallback(debounce(
      () => setPage(prevPage => prevPage + 1), 200
      ), [setPage])

    useEffect(() => {
      if (isNearScreen) debounceHandleNextPage()
    }, [isNearScreen, debounceHandleNextPage])

    return (
      < section className='result-search'>
        { loading
        ? <p>Cargando...</p>
        : <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title}></meta>
            </Helmet>
            <h3 className='title-results'>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            <div id='visor' ref={externalRef}></div>
          </>
        }
      </ section>
    )
}