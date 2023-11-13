import React from 'react'
import style from './ReasonsToJoin.module.css'
import reasonIcon1 from '../../../assets/reasons-to-join-1.png'
import reasonIcon2 from '../../../assets/reasons-to-join-2.png'
import reasonIcon3 from '../../../assets/reasons-to-join-3.png'
import reasonIcon4 from '../../../assets/reasons-to-join-4.png'

const ReasonsToJoin = () => {
  return (
    <div className={style.reasonsToJoin}>
        <h2 className={style.reasonsToJoinTitle}>Reasons to join</h2>
        <div className={style.reasonsToJoinContent}>
            <div className={style.content}>
                <img className={style.contentImage} src={reasonIcon1} alt='icon1' />
                <div className={style.contentText}>
                    <h3 className={style.contentTextTitle}>15000 sq.m.</h3>
                    <p className={style.contentTextDescription}>A spacious gym for sports - a safe distance between exercise machines</p>
                </div>
            </div>
            <div className={style.content}>
                <img className={style.contentImage} src={reasonIcon2} alt='icon2' />
                <div className={style.contentText}>
                    <h3 className={style.contentTextTitle}>More than 200 equipments</h3>
                    <p className={style.contentTextDescription}>No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.</p>
                </div>
            </div>
            <div className={style.content}>
                <img className={style.contentImage} src={reasonIcon3} alt='icon3' />
                <div className={style.contentText}>
                    <h3 className={style.contentTextTitle}>4 Fitness zones</h3>
                    <p className={style.contentTextDescription}>From cardio to functional and cycle, Separate area for boxing and mixed martial arts</p>
                </div>
            </div>
            <div className={style.content}>
                <img className={style.contentImage} src={reasonIcon4} alt='icon4' />
                <div className={style.contentText}>
                    <h3 className={style.contentTextTitle}>Round the clock operation</h3>
                    <p className={style.contentTextDescription}>The gym is open 24 hours a day, also works on all holidays and weekends</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReasonsToJoin