import React, { useContext } from 'react'
import { CardSmall } from './Card'
import {
  convertDegrees,
  convertPressure,
  convertSpeed,
  convertDegToCompass
} from '../WeatherCommons/HelperFunctions'
import { getImage } from '../WeatherCommons/GetImage'
import WeatherContext from '../WeatherCommons/WeatherContext'
import moment from 'moment'

const Highlights = () => {
  const context = useContext(WeatherContext)

  let data = context.apiData
  if (data.length === 0) return

  let feels_like = convertDegrees(data.main.feels_like, context.metric)
  let feels_like_icon =
    context.metric === 'C' ? 'thermometer-celsius' : 'thermometer-fahrenheit'
  let humidity = data.main.humidity
  let pressure = convertPressure(data.main.pressure, context.metric)
  let windSpeed = convertSpeed(data.wind.speed, context.metric)
  let windDirection = convertDegToCompass(data.wind.deg)
  let sunrise = moment.unix(data.sys.sunrise).local().format('hh:mm a')
  let sunset = moment.unix(data.sys.sunset).local().format('hh:mm a')
  let cloudiness = data?.clouds.all
  let temp_symbol = context.metric === 'C' ? '°C' : '°F'
  let pressure_symbol = context.metric === 'C' ? 'kPa' : 'psi'
  let wind_symbol = context.metric === 'C' ? 'meter/sec' : 'miles/hour'

  return (
    <>
      <CardSmall
        image={getImage(feels_like_icon)}
        title='Feels Like'
        data={feels_like}
        symbol={temp_symbol}
      />
      <CardSmall
        image={getImage('humidity')}
        title='Humidity'
        data={humidity}
        symbol='%'
      />
      <CardSmall
        image={getImage('barometer')}
        title='Atmospheric Pressure'
        data={pressure}
        symbol={pressure_symbol}
      />
      <CardSmall
        image={getImage('windsock')}
        title='Wind Speed'
        data={windSpeed}
        symbol={wind_symbol}
      />
      <CardSmall
        image={getImage('compass')}
        title='Wind Direction'
        data={windDirection}
        symbol=''
      />
      <CardSmall
        image={getImage('sunrise')}
        title='Sunrise'
        data={sunrise}
        symbol=''
      />
      <CardSmall
        image={getImage('falling-stars')}
        title='Sunset'
        data={sunset}
        symbol=''
      />
      <CardSmall
        image={getImage('cloudy')}
        title='Cloudiness'
        data={cloudiness}
        symbol='%'
      />
    </>
  )
}

export default Highlights
