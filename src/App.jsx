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
        }, [])
    )

    return <p ref={ref} className='m-5 my-[50vh'>{itm}</p>
})

const App = () => {
    const [arr, _setarr] = useState(Array.from({ length: 15 }).map(() => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'))
    
    return (
        <main className="min-h-screen bg-dark-400 grid place-content-center">
            <h2>Infinite scrolling example: <a href="https://github.com/bakunya/intersectionobserver-hooks/examples/infinite-scrolling">available in my github</a></h2>
            <br />
            <br />
            <h2>Support Developer</h2>
            <h3>
                <a href="https://trakteer.id/bakunya/tip">Support me on Trakteer</a>
            </h3>
            <h3>
                <a href="https://github.com/bakunya/intersectionobserver-hooks">Github repository</a>
            </h3>
            <br />
            <br />
            <h2>Alert Example</h2>
            <p>Alert will appear when last element is visible on screen</p>
            <br />
            <br />
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