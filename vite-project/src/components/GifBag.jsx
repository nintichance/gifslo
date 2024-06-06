import React from 'react'
import { useGifContext } from '../contexts/GifContext'



const GifBag = () => {
    const { gifs, getGifs, search, setSearch } = useGifContext()

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