import React from 'react'
import './Programs.css'
import programe from '../../assets/programe.png'
import programes from '../../assets/programes.png'
import programess from '../../assets/programess.png'
import icon from '../../assets/icon.png'
import icons from '../../assets/icons.png'
import iconss from '../../assets/iconss.png'
const Programs = () => {
  return (
    <div className='programs'>
    <div className='program'>
      <img src={programe} alt="" />
      <div className='caption'>
        <img src={icon} alt="" />
        <p>Graduation Degree</p>
        </div>  
    </div>
    <div className='program'>
      <img src={programes} alt="" /> 
      <div className='caption'>
        <img src={icons} alt="" />
        <p>Master Degree</p>
        </div>  
    </div>
    <div className='program'>
      <img src={programess} alt="" />  
      <div className='caption'>
        <img src={iconss} alt="" />
        <p>Post Graduation</p>
        </div> 
    </div>

    </div>
  )
}

export default Programs