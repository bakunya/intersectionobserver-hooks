# Intersection Observer Hooks
An easy to use intersection observer hooks based on IntersectionObserver API

## [Live Preview / Demo In Here](https://bakunya-intersectionobserver-hooks.netlify.app)


## Installation
```bash
npm i @bakunya/intersectionobserver-hooks
```


## Basic Usage

**useIntersectionOpserver** accept 3 parameters
- ref, this is reference of components that will be watche by observer api
- options, this is options for pass on IntersectionObserver constructor
- callback, this is function which is called when the percentage of the target element is visible crosses a threshold.

### Note
- **Callback parameters must be function that wrapped on useCallback for avoid rerender**
- **Callback have 3 params, that is observer, entries, and ref**
    - **observer**, the IntersectionObserver for which the callback is being invoked.
    - **entries**, an array of IntersectionObserverEntry objects, each representing one threshold which was crossed, either becoming more or less visible than the percentage specified by that threshold.
    - **ref**, ref component that passed on **useIntersectionObserver()**


```jsx
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
    
        // some code
        
    }, [ //some dependencies ])
)

return <p ref={ref} className='m-5 my-[50vh'>{itm}</p>
```

## Another Example
### [You can check another example in here](https://github.com/bakunya/intersectionobserver-hooks)

## License
This project under MIT License.

## Support Developer
**You can support developer in [Here](https://trakteer.id/bakunya/tip). Thank you.**