import React from 'react'
import './Posts.css'
import Post from '../post/Post'
import postsData from '../../data/postsData'

const Posts = () => {
  return (
    <div className='Posts'>
        {postsData.map((post, id) => {
            return <Post  post={post} id={id}/>
        })}
       
    </div>
  )
}

export default Posts