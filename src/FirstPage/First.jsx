import React from 'react'
import './first.css'
import pic from '../assets/IMG_20230912_133100.jpg'
const First = () => {
  return (
    <div className="background_container">

      <div className='gridConatiner'>
        <div className='box '>
          <h1 className='animated_text'>hi,i'm Lichin Chandran</h1> <br />
          <h5 className=''>I develop Full Stack  Web Application, using <span className='mernstack'>MERN Stack</span></h5>
        </div>
        <div className='image'>
          <img src={pic} alt="" className='mypic' />

        </div>
      </div>
    </div>
  )
}

export default First