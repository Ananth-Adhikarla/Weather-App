import React from 'react'
import styles from './Card.module.css'

const Card = ({ title, image, high, low, metric }) => {
  let symbol = metric === 'C' ? '°C' : '°F'

  return (
    <div className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.icon}>
        <img src={image} alt='icon' />
      </div>
      <div className={styles.temprature}>
        <span className={styles.high}>
          {high} <sup className={styles.degree}>{symbol}</sup>
        </span>
        <span className={styles.low}>
          {low} <sup className={styles.degree}>{symbol}</sup>
        </span>
      </div>
    </div>
  )
}

export const CardSmall = ({ image, title, data, symbol }) => {
  return (
    <div className={styles.cardSmall}>
      <div className={styles.icon}>
        <img src={image} alt='icon' />
      </div>
      <div className={styles.smalltitle}>{title}</div>
      <div className={styles.temprature}>
        <span className={styles.high}>
          {data}
          {symbol.includes('C') || symbol.includes('F') ? (
            <sup className={styles.degree}>{symbol}</sup>
          ) : (
            <span className={styles.degree}>{symbol}</span>
          )}
        </span>
      </div>
    </div>
  )
}

export default Card
