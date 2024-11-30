import React from 'react'
import './Testimonials.css'
import next from '../../assets/next.png'
import back from '../../assets/back.png'
import user from '../../assets/user.png'
import usere from '../../assets/usere.png'
import useres from '../../assets/useres.png'
import useress from '../../assets/useress.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
    <img src={next} alt="" className='next-btn'/>
    <img src={back} alt="" className='back-btn'/>
    <div className='slider'>
        <ul>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user} alt="" />
                        <div>
                            <h3>Maryam</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Edusity is an innovative online learning platform designed to provide accessible, flexible, and high-quality education to students worldwide. It offers a wide range of courses across various disciplines, allowing learners to enhance their skills and knowledge at their own pace.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={usere} alt="" />
                        <div>
                            <h3>Abdul Muqeet</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>The platform integrates interactive features such as live classes, discussion forums, and quizzes, fostering an engaging learning environment. Edusity is dedicated to bridging the gap in education by connecting students with expert instructors, making education more inclusive and tailored to individual needs.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={useres} alt="" />
                        <div>
                            <h3>Sana</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Whether for professional development or personal growth, Edusity empowers learners to achieve their goals through its comprehensive and user-friendly platform.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={useress} alt="" />
                        <div>
                            <h3>Muhammad Ahmad</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Edusity is an innovative online learning platform designed to provide accessible, flexible, and high-quality education to students worldwide. It offers a wide range of courses across various disciplines, allowing learners to enhance their skills and knowledge at their own pace.</p>
                </div>
            </li>
        </ul>
    </div>

    </div>
  )
}

export default Testimonials