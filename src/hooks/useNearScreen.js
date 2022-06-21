import { useState, useEffect, useRef } from "react"

export function useNearScreen ({ distance = '100px' } = {}) {
    const fromRef = useRef()
    const [isNearScreen, setShow] = useState(false)
    
    useEffect(function(){
        let observer
        const onChange = (entries, observer) => {
            const element = entries[0]
            if (element.isIntersecting){
                setShow(true)
                // observer.unobserve(element) --> Para dejar de ver arriba y abajo
                observer.disconnect()
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== "undefined"
            ? IntersectionObserver
            : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin : distance
            })
    
            observer.observe(fromRef.current)
        })

        return () => observer && observer.disconnect()
    })
    return {isNearScreen, fromRef}
}