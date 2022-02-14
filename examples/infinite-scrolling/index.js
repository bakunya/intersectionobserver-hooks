import { memo, useCallback, useEffect, useRef, useState } from 'react'
import useIntersectionObserver from '@bakunya/intersectionobserver-hooks'

const LastElement = memo(({ itm, fetchApi }) => {
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
            fetchApi()
        }, [fetchApi])
    )

    return <p ref={ref} className='m-5 my-[50vh'>{itm}</p>
})

const App = () => {
    const [arr, setarr] = useState([])
    const [err, seterr] = useState('')
    const [next, setnext] = useState(1)

    const fetchApi = useCallback(async () => {

        try {
            if(!err) {
                let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${next}`)
                res = await res.json()
                console.log(res);
                setarr(prev => [...prev, res?.body ?? ''])
                setnext(prev => (prev + 1))
            }
        } catch (er) { seterr(er.message) }

    }, [setarr, seterr, err, next])

    useEffect(() => { fetchApi() }, [])
    
    return (
        <main className="min-h-screen bg-dark-400 grid place-content-center">
            {
                arr.map((itm, i) => (
                    i === (arr.length - 1)
                        ? <LastElement key={i} itm={itm} fetchApi={fetchApi} />
                        : <p className='m-5 my-[50vh]' key={i}>{itm}</p>
                ))
            }
        </main>
    )
}

export default memo(App)