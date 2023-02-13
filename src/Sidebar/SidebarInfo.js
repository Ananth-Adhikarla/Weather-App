import React, { useContext } from 'react'
import styles from './SidebarInfo.module.css'
import WeatherContext from '../WeatherCommons/WeatherContext'
import { getIcon } from '../WeatherCommons/ImageMapper'
import moment from 'moment'
import { convertDegrees } from '../WeatherCommons/HelperFunctions'

const SidebarInfo = () => {
  const context = useContext(WeatherContext)

  let data = context.apiData
  if (data.length === 0) return
  let description = data.weather[0].description
  let icon = getIcon(description)
  let current_temprature = convertDegrees(data.main.temp, context.metric)
  let city = data.name
  let datetime = moment().format('Do MMM YYYY hh:mm a')

  return (
    <div className={styles.card}>
      <div className={styles.sidebarIcon}>
        <img src={icon} alt='icon' />
      </div>
      <span className={styles.temprature}>
        {current_temprature}
        <sup className={styles.degree}>
          {context.metric === 'C' ? '°C' : '°F'}
        </sup>
      </span>
      <span className={styles.currentStatus}>{description}</span>
      <span className={styles.currentCity}>{city}</span>
      <span className={styles.currentTime}>{datetime}</span>
      <span
        className={styles.changeMetrics}
        onClick={() => context.ChangeMetrics()}
      >
        Toggle {context.metric === 'C' ? 'Farenheit' : 'Celsius'}
      </span>
    </div>
  )
}

export default SidebarInfo
