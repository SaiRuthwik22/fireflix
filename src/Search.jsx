import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function Search() {
    const [searchdata,setSearchData] = useState()
    const [inputdata,setInputData] = useState(null)
    let xoxo = null
    let msg = ""
    let yyy = function(){
        fetch(inputdata?'https://api.themoviedb.org/3/search/movie?query='+inputdata+'&include_adult=false&language=en-US&page=1&api_key=88d5e99c9a09da71d60f244737284795':setSearchData())
        .then(response => response.json())
        .then(response => {setSearchData(response["results"])})
        .catch(err => console.log(err));
    }
    useEffect(yyy,[inputdata]) 
    if(searchdata){
        if(searchdata.length!=0){
          xoxo= searchdata.map((element)=>{
            return (
                <div className='box' key={element["id"]}>
                
                <img src={`https://image.tmdb.org/t/p/original/${element["poster_path"]}`}  alt={element["title"]}/>
                        <div className="in-box">
                        <center><span>{element["title"]}</span> <br/> 
                        <button className="btndl" id="xxxx"> <NavLink to={'Details'} state={{movieData:element}}><i className="fa fa-download"></i> Download </NavLink> </button>
                        </center>
                        </div>
                
            </div>
     
     ) })
        }
      else{
        msg = <h1>no data found</h1>
     }
     }

    return(
        <>
        <input  type="text" onChange={(e)=>{setInputData(e.target.value)}}/>
        <div className='container' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>{msg || xoxo}</div>
        {inputdata ?"": (<NavLink to="Genres" state={{id:28}}><button>Action</button></NavLink>)}
        {inputdata ?"": (<NavLink to="Genres" state={{id:10749}}><button>Romance</button></NavLink>)}
        {inputdata ?"": (<NavLink to="Genres" state={{id:14}}><button>Fantasy</button></NavLink>)}
        {inputdata ?"": (<NavLink to="Genres" state={{id:9648}}><button>History</button></NavLink>)}
        </>
        
    )
}

export default Search