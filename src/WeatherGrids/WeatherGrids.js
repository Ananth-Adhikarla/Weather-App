import React, { useContext } from 'react'
import styles from './WeatherGrids.module.css'
import DailyCards from './DailyCards'
import WeatherContext from '../WeatherCommons/WeatherContext'
import Highlights from './Highlights'

const WeatherGrids = () => {
  const context = useContext(WeatherContext)

  let dailyData = context.apiDailyData

  if (dailyData.length === 0) return

  let filteredData = []
  for (let i = 3; i < dailyData.length; i += 8) {
    filteredData.push(dailyData[i])
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.title}>Open Weather App</span>
      </div>
      <div className={styles.daily}>
        <DailyCards data={filteredData} metric={context.metric} />
      </div>
      <div className={styles.header}>
        <span className={styles.subtitle}>Today’s Highlight</span>
      </div>
      <div className={styles.highlights}>
        <Highlights />
      </div>
    </div>
  )
}

export default WeatherGrids
