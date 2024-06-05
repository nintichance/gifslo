import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from '../API'

const GifBag = () => {
    const makeApiCall = () => {
        const apiKey = import.meta.env.VITE_GIPHY_API_KEY
        console.log("ENV", apiKey)
        axios.get(`${API_URL}/search?api_key=${apiKey}&q=celebration&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
        .then((res)=>{
            console.log(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
           <button onClick={makeApiCall}>Make API call</button>
        </div>
    )
}

export default GifBag