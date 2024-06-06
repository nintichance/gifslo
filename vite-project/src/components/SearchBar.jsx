import React from 'react'
import { useGifContext } from '../contexts/GifContext'


const SearchBar = () => {
    const { getGifs, search, setSearch  } = useGifContext()

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getGifs()
    }
    return(
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
    )
}

export default SearchBar