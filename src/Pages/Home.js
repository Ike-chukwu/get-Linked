import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Introduction from '../components/Introduction/Introduction'
import Rules from '../components/Rules/Rules'
import JudgingCriteria from '../components/JudgingCriteria/JudgingCriteria'
import Faqs from '../components/Faqs/Faqs'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Introduction/>
        <Rules/>
        <JudgingCriteria/>
        <Faqs/>
    </div>
  )
}

export default Home