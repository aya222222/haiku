import React from 'react'
import  './ProfileCard.css'
import profileImage from '../../img/profileImg.jpg'
import cover from '../../img/cover.jpg'
const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
        <div className="profileImages">
            <img src={cover} alt="" />
            <img src={profileImage} alt="" />
        </div>
        <div className="profileName">
            <h4>Aya Loulou</h4>
            <p>I'm a software engineer</p>
           
        </div>
        <hr />
        <div className="followStatus">
            <div className="followNumber">
                <h4>28</h4>
                <p>follower</p>
            </div>
            <div className="vl"></div>
            <div className="followNumber">
                <h4>25</h4>
                <p>following</p>
            </div>
            <div className="vl"></div>
            <div className="followNumber">
                <h4>2</h4>
                <p>posts</p>
            </div>
        </div>
      <hr></hr>
    </div>
  )
}

export default ProfileCard