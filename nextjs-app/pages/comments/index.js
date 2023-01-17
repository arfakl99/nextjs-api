import React from 'react'
import { useState } from 'react'


const fetchComments = () => {

    const[comments,setComments]=useState([])

    const fetchdata=async()=>{

        const response =await fetch('/api/comments')
        const data =await response.json()
        setComments(data)
        

    }
  return (
    <>
    <button onClick={fetchdata}>Load Comments</button>
    {
        comments.map((comment)=>{
            return(
                <div key={comment.id}>
                    {comment.id}{comment.text}

                </div>
            )
        })
    }
    </>
  )
}

export default fetchComments