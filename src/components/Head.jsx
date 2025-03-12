import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const searchCache=useSelector((store)=>store.search);
  const dispatch=useDispatch();
 // console.log(searchQuery);
 useEffect(()=>{
  const timer=setTimeout(()=>{
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    }else{
      getSearchSuggestion();
    }
    
  },200);
  //console.log(searchQuery);
  return ()=>{
    clearTimeout(timer);
  }
 },[searchQuery]);
 const getSearchSuggestion=async()=>{
  console.log("api call for-",searchQuery);
  const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json=await data.json();
  setSuggestions(json[1]);
  dispatch(cacheResults({[searchQuery]:json[1]}))
  console.log(json);
 }
  
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col p-3 m-3  h-16 shadow-lg '>
    <div className='flex  col-span-1'>
      
      <img onClick={()=>{
        toggleMenuHandler()
      }} className='h-8  cursor-pointer' alt="menu" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEX///8AAABLS0vPz8+Wlpb39/fFxcWQkJCmpqaCgoI4ODhiYmLr6+vh4eGxsbF0dHQbGxvX19cQEBCIiIh6enpXV1egoKC7u7tcXFxvb28ZGRl6p2Y9AAACVUlEQVR4nO3di04CMRCF4QrsglwE8e77P6jZqEGjmXZpk8mZ/t8TzMkuLS1DmxIAAAAAAAAAAAAAAAAAdGBc7xY6dutxXrz9442ex315wLV3sVdaF+Ybtt6VXm07FAU8e9dZ4VwSUfcJTrb5gLfeNVa6zQU8eFdY7ZBJuPMusNrODjh419eAPdjceZfXwJ2Z8OhdXgNHM6H2VPHJnjC8q2ui84Qn7+oaOJkJn7zLa+DJTKi6bvrJXkMtvctr4N5MGGGosQOmjXd91TaZhPKjqT2STu69S6yU+RTqv6fZd3Ty7F1lheeSgCmN3nVerXhbeNBcRB2L9hK/7Fdq66jtasaW99eDPCx1HOY8PgAAAAAAAAAAIGYYNysdm3HuDxcvC+/fkmZbvMzIt9RsVzgtSwPqNrNn29g/vXrXWeG1JOCbd5VV3vIB1Tu97S7vFKFZPzdtPHgXWO0hk9C7vgbsgLrNQhd225DuVHhhT4p6X9b+WpgJlf9d+e1sJvSuronOn2H8z2H8sTT+fBhhqLEDdvC9NP7aIv76sIM1fgf7NMqjTeFeWwf7pSn+nvck+u8WAAAAAAAAAABASPBzoqKf9RX+vDbdtqHCM/fCn5sY/uzL+OeXvnuXWCl7Bq32OzrJvafe9TVgB4x/nnf8M9njn6uv2e71mz2aelfXROcJ1dZM/7HvmdFcNv1m3xWk3uU9sTu99Vv1s8364e9d6+DuPPn/dhU0s2tPGAV3WKZBeQ1cdA9p/Ltkk+4aqvQ+4NTBnc6T4PdyAwAAAAAAAAAAAAAAAICmD8U+UWQoPgYYAAAAAElFTkSuQmCC' />
     <a href='/'>
      <img  className='h-8 mx-4' alt="youtube-logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png'/>
      </a> 
      </div>
    <div className='col-span-10  px-2'>
      <div>
        <input type='text' className='w-1/2 border border-gray-300 p-2 rounded-l-full' value={searchQuery} 
        onChange={(e)=>{
          setSearchQuery(e.target.value);
        }}
       onFocus={()=>{setShowSuggestions(true)}} 
       onBlur={()=>{setShowSuggestions(false)}}
        />
        <button className='px-5 py-2 border border-gray-300 rounded-r-full '>🔍 Search</button>
        </div>
       {showSuggestions && <div className='fixed bg-white py-2 px-5 w-[37rem] rounded-lg shadow-lg border border-gray-200'>
          <ul>
           { suggestions.map((suggestion)=>{
              return <li key={suggestion}className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {suggestion}</li>
            })
          }
            
          </ul>
          </div>
       }

        
      </div>
      
      <div className='col-span-1'>
        <img className='h-8' src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" alt="user-icon" />
        </div>
        
      </div>
  )
}

export default Head