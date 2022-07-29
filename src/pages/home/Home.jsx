import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/postSide/PostSide'
import HaikuModal from './haikuModal/HaikuModal'
const Home = () => {
  return (
    <>
   <div className="Home">
     <ProfileSide />
     <PostSide />
     
   </div>
   <HaikuModal />
   </>
  )
}

export default Home