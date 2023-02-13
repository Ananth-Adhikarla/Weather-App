import React from 'react'
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import { getIcon } from '../WeatherCommons/ImageMapper'
import styles from './WeatherGrids.module.css'
import Card from './Card'
import moment from 'moment'
import { convertDegrees } from '../WeatherCommons/HelperFunctions'

const DailyCards = ({ data, metric }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, EffectCoverflow]}
      spaceBetween={0}
      // slidesPerView={4}
      // loop={true}
      slidesPerView={'auto'}
      centeredSlides={true}
      grabCursor={true}
      initialSlide='2'
      rewind={true}
      coverflowEffect={{
        rotate: 25,
        stretch: 25,
        depth: 250,
        modifier: 1,
        slideShadows: false
      }}
      effect={'coverflow'}
      navigation={true}
      pagination={{ clickable: true }}
      className={styles.swiper}
      style={{
        '--swiper-navigation-size': '25px'
      }}
    >
      {data.map(item => {
        let key = item.dt
        let title = moment(item.dt_txt).format('dddd')
        let description = item.weather[0].description
        let icon = getIcon(description)
        let high = convertDegrees(item.main.temp_max, metric)
        let low = convertDegrees(item.main.temp_min, metric)
        return (
          <SwiperSlide key={key} className={styles.swiperSlide}>
            <Card
              title={title}
              image={icon}
              high={high}
              low={low}
              metric={metric}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default DailyCards
