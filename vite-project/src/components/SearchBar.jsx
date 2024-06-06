import React from 'react'

const SearchBar = () => {
    const [ search, setSearch ] = useState("")
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="search-bar">
            <form className="form"> 
                <input 
                    type="text" 
                    plaeholder="Search Gifs" 
                    className="input" 
                    onChange={handleChange} 
                    value={search}
                    />
                    <button type="submit" className="button" onClick={handleSubmit}> Go </button>
            </form>
        </div>
    )
}

export default SearchBar