import React from 'react'
import './Campus.css'
import gallery from '../../assets/gallery.png'
import gallerye from '../../assets/gallerye.png'
import galleryes from '../../assets/galleryes.png'
import galleryess from '../../assets/galleryess.png'
import warrow from '../../assets/warrow.png'

const Campus = () => {
  return (
    <div className='campus'>
   <div className='gallery'>
   <img src={gallery} alt="" />
   <img src={gallerye} alt="" />
   <img src={galleryes} alt="" />
   <img src={galleryess} alt="" />
   </div>
    <button className='btn dark-btn'>See more here <img src={warrow} alt="" /></button>
    </div>
  )
}

export default Campus