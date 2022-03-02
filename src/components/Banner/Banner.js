import React,{useEffect,useState} from 'react'
import axios from '../../Axios'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState()
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[getRndInteger(0,19)])
        })
    }, [])
    return (
        <div 
         style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : ""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title || movie.name: ""}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview:""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
