import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../API'
import "../css/GifCarousel.css"
const GifCarousel = () => {
 const [gifs, setGifs ] = useState([])
  
 useEffect(()=>{
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY
    axios.get(`${API_URL}/search?api_key=${apiKey}&q=cats&offset=0&limit=24&rating=g&lang=en&bundle=messaging_non_clips`)
    .then((res)=>{
        console.log("RES", res.data.data)
        setGifs(res.data.data)
    }).catch((err)=>{
        console.log(err)
    })
 }, [])

 const [ currentIndex, setCurrentIndex ] = useState(0)

 const carouselInfiniteScroll = () => {
    if (currentIndex === gifs.length-1){
        return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex+1)
 }

 useEffect(()=>{
    const interval = setInterval(()=>{carouselInfiniteScroll()}, 3000)
    return () => clearInterval(interval)
 })


 return (
    <div className="carousel">
        <div className="carousel-container">
           {gifs.map((gif, index)=>{
                return(<h1 key={index} 
                    className="carousel-item"
                    style={{transform: `translate(-${currentIndex*100}%)`}}>
                    <img className="carousel-image" src={gif.images.fixed_height.url} alt={gif.alt_text}/>
                </h1>)
           })}
        </div>
    </div>
 )
}

export default GifCarousel