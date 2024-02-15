import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function Card() {
    const [data,setData] = React.useState()
    const [popular,setPopular]= React.useState()
    let trending = []
    let popularset = []
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=88d5e99c9a09da71d60f244737284795")
        .then(res => res.json())
        .then(res =>{setData(res["results"])})
        .catch(err => console.error(err))
    },[])
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=88d5e99c9a09da71d60f244737284795")
        .then(res => res.json())
        .then(res =>{setPopular(res["results"])})
        .catch(err => console.error(err))
    },[])
    if(data){
        trending = data.map((element)=>{
            return (
                <div className='box' key={element["id"]}>
                
                <img src={`https://image.tmdb.org/t/p/original/${element["poster_path"]}`}  alt={element["title"]}/>
                        <div className="in-box">
                        <center><span style={{overflow: 'hidden'}}>{element["title"]}</span> <br/> 
                        <button className="btndl" id="xxxx"> <NavLink to={'Details'} state={{movieData:element}}><i className="fa fa-download"></i> Download </NavLink> </button>
                        </center>
                        </div>
                
            </div>
        )
    }
    )
}
if(popular){
    popularset = popular.map((element)=>{
        return (
            <div className='box' key={element["id"]}>
            
            <img src={`https://image.tmdb.org/t/p/original/${element["poster_path"]}`}  alt={element["title"]}/>
                    <div className="in-box">
                    <center><span>{element["title"]}</span> <br/> 
                    <button className="btndl" id="xxxx"> <NavLink to={'Details'} state={{movieData:element}}><i className="fa fa-download"></i> Download </NavLink> </button>
                    </center>
                    </div>
            
        </div>
    )
}
)
}
  return (
    <>
    {data && <>
    <div className='container' style={{display:'flex',flexDirection:'column'}}>
    <h2>Trending</h2>
        <main id='main' style={{display: 'flex', flexWrap: 'nowrap', overflowX:'auto'}}>
            {trending}
            </main>
            </div>
    </>}
    {popular && <>
    <div className='container'style={{display:'flex',flexDirection:'column'}}>
    <h2>Popular</h2>
        <main id='main' style={{display: 'flex', flexWrap: 'nowrap', overflowX:'auto'}}>
            {popularset}
            </main>
            </div>
    </>}
    </>
  
  )
}

export default Card