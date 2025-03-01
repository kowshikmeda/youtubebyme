import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-3 '> <div >
    <img className='h-8' src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" alt="user-icon" />
    </div>
    <span className='font-bold px-2'>
        {name}
    </span>
    <span>{message}</span>
    </div>
  )
}

export default ChatMessage