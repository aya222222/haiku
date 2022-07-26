import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import PostBtnCard from '../postBtnCard/PostBtnCard'
import './ProfileSide.css'
const ProfileSide = () => {
  return (
    <div className='ProfileSide'>
       <LogoSearch />
       <ProfileCard />
       <PostBtnCard />
    </div>
  )
}

export default ProfileSide