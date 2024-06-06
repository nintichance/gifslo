import { createContext } from 'react'

const GifContext = createContext(null)

export const useGifContext = () => {
    const context = useContext(AppContext)
    if (context === undefined){
        throw new Error("GifContext must be within gifContextProvider")
    }
    return context
}
const GifContextProvider = (children) => {
    const [gifs, setGifs ] = useState([])
    useEffect(()=> {
        const apiKey = import.meta.env.VITE_GIPHY_API_KEY
        axios.get(`${API_URL}/search?api_key=${apiKey}&q=celebration&offset=0&limit=24&rating=g&lang=en&bundle=messaging_non_clips`)
        .then((res)=>{
            console.log("RES", res.data.data)

            setGifs(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    const values = {
        gifs,
        setGifs
    }
    return (
        <GifContext.Provider value={values}>
            {children}
        </GifContext.Provider>
    )
}

export default GifContextProvider