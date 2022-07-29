import React from 'react'
import './HaikuModal.css'
const HaikuModal = () => {
  return (
    <div className='HaikuModal'>
        <div className="modalInner">
        <span class="fa-solid fa-xmark"></span>
        <div className="haikuSection">
        <textarea name="haiku-text" id="" cols="30" rows="10"placeholder='post haiku'>        </textarea>
         <div className="haikuBtn">
         <button className='post'>POST</button>    
         <button className='delete'>DELETE</button>    
        </div>   
        </div>
        </div>
    </div>
  )
}

export default HaikuModal