import React from 'react'
import './Post.css'
import like from '../../img/like.png'
import notlike from '../../img/notlike.png'
import comment from '../../img/comment.png'
 

const Post = ({post}) => {
  console.log(post.comment)
  return (
    <div className='Post'>
        <div className="authorName">
            {post.name}
        </div>
      
        <div className="haiku">
           <p>{post.haiku}</p> 
           {post.img ? <img src={post.img}></img> : null}
        </div>
        <div className='reaction'>
          <div className="reactionLikes">
          <img src={post.liked ? like : notlike } alt="" />
          {post.likes >= 2 ? (<><p>{post.likes} </p> <p>likes</p></>)
             : post.likes == 1 ? (<><p>{post.likes} </p> <p>like</p></>) : null}
          </div>
          <div className="reactionComments">
          <img src={comment} alt="" />
         
            {post.comment >= 2 ? (<><p>{post.comment} </p> <p>comments</p></>)
             : post.comment == 1 ? (<><p>{post.comment} </p> <p>comment</p></>) : null}
          </div>
        </div>
    </div>
  )
}

export default Post