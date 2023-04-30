import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RawPost.css'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import axios from '../../axios'
function RawPost(props) {
  const [movie, setMovie] = useState([])
  const [urlid,setUrlId]=useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data);
      setMovie(response.data.results)
    }).catch(err=>{
     // alert('network error')
    })
  }, [])
 
    const opts = {
      height: '600',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
   const handleMovie =(id)=>{
    console.log(id);
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }else{
          console.log("array empty");
        }
      })
   }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
           {movie.map((obj)=>
             <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
           )}
        </div>
       {urlid && <YouTube opts={opts} videoId={urlid.key}/>}
    </div>
  )
}

export default RawPost