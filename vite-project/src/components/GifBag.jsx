import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../API'

const GifBag = () => {
    const [gifs, setGifs] = useState([])
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

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("BUTTON", e.target.value)
        getGifs()
    }
    return (
        <div className="gif-bag-wrapper">
            <div className="search-bar">
                <form className="form" name="gif-form"> 
                    <input 
                        type="text" 
                        plaeholder="Search Gifs" 
                        className="input" 
                        onChange={handleChange} 
                        value={search}
                        id="gif-input"
                        />
                        <button id="gif-button" type="submit" className="button" onClick={handleSubmit}> Go </button>
                </form>
            </div>
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