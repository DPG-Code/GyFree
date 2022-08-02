import React, {Suspense} from "react"
import { useNearScreen } from "hooks/useNearScreen"

const TrendingSearchesCalls = React.lazy(
    () => import('./TrendingSearchesCalls')
)

export default function LazyTranding (){
    const {isNearScreen, fromRef} = useNearScreen({distance : '200px'})

    return (
        <section className='trending-container' ref={fromRef}>
            <Suspense fallback={'Cargando...'}>
                { isNearScreen ? <TrendingSearchesCalls /> : 'Cargando...' }
            </Suspense>
        </section>
    )
}