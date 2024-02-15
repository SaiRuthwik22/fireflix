import React from 'react'
import { useLocation } from 'react-router-dom'

function Details() {
    const location = useLocation()
    const {movieData}= location.state
    console.log(movieData)
    let ddd = `https://image.tmdb.org/t/p/original/${movieData["backdrop_path"]}`
  return (
    <div className='container'>
      <main id="main" style={{display: 'flex',flexWrap: 'wrap',justifyContent: 'center',flexDirection: 'column'}}>
      <div className='inmainbox'>
      <div className="infobox" style={{backgroundImage: `url(${ddd})`,backgroundSize: "cover", backgroundRepeat: "no-repeat"}} >
      <img src={`https://image.tmdb.org/t/p/original/${movieData["poster_path"]}`}  alt="" id='poster'/>
      <div className="infotextbox" >
          <h1> {movieData["title"]}</h1> <br/>
          <span><b>User Rating </b>: {movieData["vote_average"]} </span> <br/> 
          <span><b>Runtime </b> : ${movieData["runtime"]}Min </span> <br/> 
          <span><b>Release Date</b>     : ${movieData["release_date"]}</span><br/> 
          <span><strong> Genre</strong>  : ${movieData["genres[0].name"]} </span> <br/>
          <h4>OVERVEIW</h4> 
          <span>${movieData["overview"]}</span>
          <br/> <br/> 
          <center className='downloadbtn'>
              <button className="btndl"> <a href=""> <i className="fa fa-download"></i> Download 720p  </a></button>
              <button className="btndl"> <a href=""> <i className="fa fa-download"></i> Download 1080p </a></button>
              <button className="btndl"> <a href=""> <i className="fa fa-download"></i> Download <span style={{fontSize: '12px',color: 'whitesmoke'}}>from fastest server</span>  </a></button>   
          </center>
        </div>
    </div>

    </div>
      </main>
    </div>
  )
}

export default Details