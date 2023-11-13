import React from 'react'
import style from './Services.module.css'

const Services = () => {
  return (
    <div className={style.services}>
        <h2 className={style.servicesTitle}>Services</h2>
        <div className={style.servicesContent}>
            <div className={style.contentOne}>
                <h3 className={style.contentTitleMain}>gym</h3>
                <p className={style.contentDescription}>Expect a heart-pumping workout that will leave you feeling energized and accomplished. Our supportive community of like-minded individuals.</p>
            </div>
            <div className={style.contentTwo}>
                <h3 className={style.contentTitle}>gym products</h3>
                <button className={style.contentButton}>explore</button>
            </div>
            <div className={style.contentThree}>
                <h3 className={style.contentTitle}>personal training</h3>
                <button className={style.contentButton}>learn more</button>
            </div>
            <div className={style.contentFour}>
                <h3 className={style.contentTitle}>regime plans</h3>
                <button className={style.contentButton}>learn more</button>
            </div>
        </div>
    </div>
  )
}

export default Services