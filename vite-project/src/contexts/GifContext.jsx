import React, { createContext, useState, useContext} from 'react'
import axios from 'axios'
import { API_URL } from '../API'

const GifContext = createContext(null)

export const useGifContext = () => {
    const context = useContext(GifContext)
    if (context === undefined) {
        throw new Error("Cannot use GifContext outside of GifContextProvider")
    }
    return context
}

const GifContextProvider = ({children}) => {
const [ gifs, setGifs ] = useState([])
const [search, setSearch] = useState("")
const getGifs = () => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY
  axios.get(`${API_URL}/search?api_key=${apiKey}&q=${search}&offset=0&limit=24&rating=g&lang=en&bundle=messaging_non_clips`)
  .then((res)=>{
      console.log("RES", res.data.data)
      setGifs(res.data.data)
  }).catch((err)=>{
      console.log(err)
  })
}

const values = {
  gifs,
  getGifs, 
  search,
  setSearch
}
    return (
        <GifContext.Provider value={values}>
            {children}
        </GifContext.Provider>
    )
}

export default GifContextProvider