import { memo, useCallback, useRef, useState } from 'react'
import useIntersectionObserver from '@bakunya/intersectionobserver-hooks'

const LastElement = memo(({ itm }) => {
    const ref = useRef()
    const options = useRef({
        root: null,
        rootMargin: '0px',
        threshold: 0
    })
    
    useIntersectionObserver(
        ref,
        options, 
        useCallback((observer, entries, ref) => {
            alert('Last element is visible on screen')

            // You can disconnected observer by uncomment this code
            // observer.disconnect(ref.current)
        }, [])
    )

    return <p ref={ref} className='m-5 my-[50vh'>{itm}</p>
})

const App = () => {
    const [arr, _setarr] = useState(Array.from({ length: 30 }).map(() => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'))
    
    return (
        <main className="min-h-screen bg-dark-400 grid place-content-center">
            {
                arr.map((itm, i) => (
                    i === (arr.length - 1)
                        ? <LastElement key={i} itm={itm} />
                        : <p className='m-5 my-[50vh]' key={i}>{itm}</p>
                ))
            }
        </main>
    )
}

export default App