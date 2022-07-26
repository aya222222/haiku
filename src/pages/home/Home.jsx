import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/postSide/PostSide'
const Home = () => {
  return (
   <div className="Home">
     <ProfileSide />
     <PostSide />
   </div>
  )
}

export default Home