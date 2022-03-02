import React,{useState,useEffect} from 'react'
import axios from '../../Axios'
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../../constants/constants'
import './RowPost.css'

function RowPost(props) {
    const [Originals, setOriginals] = useState([])
    const [urlId,seturlId]=useState('')
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data);
             setOriginals(response.data.results)
        }).catch((err)=>{
            alert('error')
        })
     },[])
     const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        }
    } 
    const handleMovie = (id) =>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            if(response.data.results.length!==0){
                seturlId(response.data.results[0])
            }else{
                console.log("Trailer not available");
            }
        })
    }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className='posters'>
                {Originals.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
                )}
                
            </div>
            {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
        </div>
    )
}

export default RowPost
 