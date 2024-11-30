import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Program/Programs'
import Tittle from './Components/Tittle/Tittle'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tittle subTitle='Our Program' title='What We Offer'/>
      <div className='container'>
      <Programs />
      <About />
      <Tittle subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Tittle subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      </div>
    </div>
  )
} 

export default App