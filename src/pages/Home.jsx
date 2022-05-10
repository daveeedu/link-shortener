import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import LinkShortener from '../components/LinkShortener'
import Process from '../components/Process'
import Results from '../components/Results'
import Stats from '../components/Stats'

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
    <div className="container">
        {/* <Header /> */}
        <HeroSection />
        <LinkShortener setInputValue={setInputValue} />
        <Results inputValue={inputValue} />
        <Stats />
        <Process />
    </div>
    <Footer />
    </div>
  )
}

export default Home;