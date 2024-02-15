import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
function Genres() {
    const [genredata,setGenreData]= useState()
    let genremovies
    const location = useLocation()
    const {id} = location.state
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}&api_key=88d5e99c9a09da71d60f244737284795`)
        .then(res => res.json())
        .then(res =>{setGenreData(res["results"])})
        .catch(err => console.error(err))
    },[])
    if(genredata){
            genremovies = genredata.map((element)=>{
                return(
                    <div className='box' key={element["id"]}>
                
                    <img src={`https://image.tmdb.org/t/p/original/${element["poster_path"]}`}  alt={element["title"]}/>
                            <div className="in-box">
                            <center><span>{element["title"]}</span> <br/> 
                            <button className="btndl" id="${id}"> <NavLink to={'Details'} state={{movieData:element}}><i className="fa fa-download"></i> Download </NavLink> </button>
                            </center>
                            </div>
                    
                </div>
            )})
    }
  return (
    <div className='container'style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>{genredata && genremovies}</div>
  )
}

export default Genres