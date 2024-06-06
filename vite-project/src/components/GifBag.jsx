import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../API'
import SearchBar from './SearchBar'

const GifBag = () => {
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

    return (
        <div className="gif-bag-wrapper">
            <SearchBar/>
            <div className="gif-bag">
                {gifs &&
                    gifs.map((gif, index)=>{
                        return(
                            <div key={index}>
                                <img src={gif.images.fixed_height.url} alt={gif.alt_text}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GifBag