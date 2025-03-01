import React from 'react'

const commentsData=[{
    name:"muni",
    text:"lorem ipsum deo djduf jjdfj",
    replies:[]
},
{
    name:"muni",
    text:"lorem ipsum deo djduf jjdfj",
    replies:[{
        name:"muni",
        text:"lorem ipsum deo ncmmcdjduf jjdfj",
        replies:[{
            name:"muni",
            text:"lorem ipsum deo djduf jjdfj",
            replies:[{
                name:"muni",
                text:"lorem ipsum deo djduf jjdfj",
                replies:[{
                    name:"muni",
                    text:"lorem ipsum deo djduf jjdfj",
                    replies:[{
                        name:"muni",
                        text:"lorem ipsum deo djduf jjdfj",
                        replies:[]
                    },]
                },]
            },]
        },]
    },]
},
{
    name:"muni",
    text:"lorem ipsum deo djduf jjdfj",
    replies:[{
        name:"muni",
        text:"lorem ipsum deo djduf jjdfj",
        replies:[]
    },]
},
{
    name:"muni",
    text:"lorem ipsum deo djduf jjdfj",
    replies:[]
},
{
    name:"muni",
    text:"lorem ipsum deo djduf jjdfj",
    replies:[]
},



]
const Comment=({data})=>{
    console.log(data);
    const {name,text,replies}=data;
    return <div className='flex shadow-sm bg-gray-100 rounded p-2 m-1'>
     <img alt='user' className='w-12 h-12'
     src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'/>
     
    <div>
    <p className='font-bold'>{name}</p>
     <p>{text}</p>
     {/* <p>{replies}</p> */}
    </div>
    </div>
}

const CommentsList=({comments})=>{
    return  comments.map((comment,index)=>
       <div key={index}>
       <Comment  data={comment}/>
       <div className='ml-5 pl-5 border-l-2 border-gray-400'>
            <CommentsList comments={comment.replies}/>
       </div>
       </div>
        
    )   
}
const CommentsContainer = () => {
  return (
    <div className='m-2 p-5 my-2'>
       <h1 className='text-bold text-3xl'>Comments:</h1> 
       <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;