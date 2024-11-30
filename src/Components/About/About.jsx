import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play from '../../assets/play.png'

const About = () => {
  return (
    <div className='about'>
     <div className='about-left'>
     <img src={about} alt="" className='about-img' />
     <img src={play} alt="" className='play-icon' />

     </div>
     <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today </h2>
        <p>About Unversity stands as a beacon of academic excellence and innovation, offering a diverse and inclusive environment where students are encouraged to explore their passions and reach their full potential.</p>
        <p>This paragraph can be adjusted to fit the specific characteristics and achievements of the university you are describing. If you have more details about the university, feel free to share, and I can help tailor the paragraph further.</p>
        <p>it's important to capture the essence of the institution, highlighting its strengths, values, and unique features. Here a general template you can follow, which you can customize based on the specific university</p>
     </div>

    </div>
  )
}

export default About