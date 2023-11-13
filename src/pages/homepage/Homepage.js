import React from 'react'
import Header from '../../layouts/header/Header'
import HeroSection from '../../layouts/homepage/homepageHeroSection/HeroSection'
import ReasonsToJoin from '../../layouts/homepage/reasonsToJoin/ReasonsToJoin'
import Services from '../../layouts/homepage/services/Services'

const Homepage = () => {
  return (
    <>
      <Header />
      <main className='home-main'>
        <HeroSection />
        <section className='homeWrapper'>
          <ReasonsToJoin />
          <Services />
        </section>
      </main>
    </>
  )
}

export default Homepage