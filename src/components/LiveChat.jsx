import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice';
import  { generate,generateRandomString } from '../utils/helper';
const LiveChat = () => {
    const [LiveMessage,setLiveMessage]=useState("");
   const dispatch=useDispatch();
   const ChatMessages=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const i=setInterval(()=>{
            console.log("api pollig happens");
            dispatch(addMessage({
                name:generate(),
                message:generateRandomString(10)
            })  )
        },1000)
        return ()=>{
            clearInterval(i);
        }
    },[])



  return (
    <>    <div className='w-[100%] ml-2 h-[500px] p-2 border border-black bg-slate-100 rounded-lg flex flex-col-reverse overflow-y-scroll'>
       <div> {
            ChatMessages.map((chat,index)=>{
                return <ChatMessage  key={index} name={chat.name} message={chat.message}/>
        
            })
        }
        </div>
        
    </div>
    <form className='w-full p-2 ml-2 border border-black'
    onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"akshay",
            message:LiveMessage
        }))
        setLiveMessage("");
    }}> 
        <input 
        className='w-96 px-2' 
        type='text' 
        value={LiveMessage} 
        onChange={(e)=>{
            setLiveMessage(e.target.value);
        }} />
        <button className='px-2 mx-2 bg-green-200'>Send</button>
        </form>
    </>

  )
}

export default LiveChat