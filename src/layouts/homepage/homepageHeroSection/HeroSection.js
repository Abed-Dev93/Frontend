import React from 'react'
import style from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <>
        <section className={style.heroSection}>
            <div className={style.heroSectionDescription}>
                <h1 className={style.homepageTitle}>work <span className={style.homepageTitleSpan}>harder</span> get stronger</h1>
                <button className={style.heroSectionButton}>join us</button>
            </div>
        </section>
    </>
  )
}

export default HeroSection