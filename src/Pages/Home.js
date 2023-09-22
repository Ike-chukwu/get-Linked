import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Introduction from '../components/Introduction/Introduction'
import Rules from '../components/Rules/Rules'
import JudgingCriteria from '../components/JudgingCriteria/JudgingCriteria'
import Faqs from '../components/Faqs/Faqs'
import TimeLine from '../components/TimeLine/TimeLine'
import Prizes from '../components/Prizes/Prizes'
import Partners from '../components/Partners/Partners'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Introduction/>
        <Rules/>
        <JudgingCriteria/>
        <Faqs/>
        <TimeLine/>
        <Prizes/>
        <Partners/>
    </div>
  )
}

export default Home