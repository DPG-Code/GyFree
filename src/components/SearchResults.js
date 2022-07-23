import { useEffect, useRef, useCallback } from 'react';
import { useGifs } from 'hooks/useGifs';
import { useNearScreen } from 'hooks/useNearScreen';
import ListOfGifs from "./ListOfGifs";
import './SearchResults.css'
import debounce from 'just-debounce-it';

export default function SearchResults ({params}) {
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({ keyword })

    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({ distance : '200px' , externalRef : loading ? null : externalRef, once : false })

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
            <h3 className='title-results'>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            <div id='visor' ref={externalRef}></div>
          </>
        }
      </ section>
    )
}