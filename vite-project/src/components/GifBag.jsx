import React from 'react'
import { useGifContext } from '../contexts/GifContext'
import SearchBar from './SearchBar'

const GifBag = () => {
    const { gifs  } = useGifContext()

    return (
        <div className="gif-bag-wrapper">
            <SearchBar/>
            <div className="gif-bag">
              {gifs.map((gif, index)=>{
                return (
                    <div key={index}>
                        <img src={gif.images.fixed_height.url} alt={gif.alt_text}/>
                    </div>
                )
              })}
            </div>
        </div>
    )
}

export default GifBag