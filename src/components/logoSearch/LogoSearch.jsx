import React from 'react'
import './LogoSearch.css'
import Logo from '../../img/logo.png'
const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
        <img src={Logo} alt="logo" />
        <div className="search">
           
                <input type="text" placeholder='Search' />
           
        </div>
    </div>
  )
}

export default LogoSearch