import { getImage } from '../WeatherCommons/GetImage'

export const getIcon = name => {
  name = name.toLowerCase().trim()

  if (name === 'clear sky') {
    return getImage('clear-day')
  }

  if (
    name === 'few clouds' ||
    name === 'broken clouds' ||
    name === 'scattered clouds' ||
    name === 'overcast clouds' ||
    name.includes('clouds')
  ) {
    return getImage('cloudy')
  }

  if (
    name === 'shower rain' ||
    name === 'rain' ||
    (name.includes('rain') && !name.includes('snow'))
  ) {
    return getImage('rain')
  }

  if (name.includes('snow')) {
    if (name.includes('rain') && name.includes('snow')) {
      return getImage('sleet')
    } else if (name.includes('sleet')) {
      return getImage('sleet')
    } else {
      return getImage('snow')
    }
  }

  if (name === 'mist') {
    return getImage('mist')
  }

  if (name === 'smoke' || name.includes('volcanic') || name.includes('ash')) {
    return getImage('smoke')
  }

  if (
    name === 'haze' ||
    name.includes('sand') ||
    name.includes('dust') ||
    name.includes('whirls')
  ) {
    return getImage('haze')
  }

  if (name === 'fog') {
    return getImage('fog')
  }

  if (name === 'squalls') {
    return getImage('wind')
  }

  if (name === 'tornado') {
    return getImage('tornado')
  }

  if (name.includes('thunderstorm')) {
    if (name.includes('rain') || name.includes('drizzle')) {
      return getImage('thunderstorms-rain')
    } else {
      return getImage('thunderstorms')
    }
  }

  if (name.includes('drizzle')) {
    if (name.includes('rain')) {
      return getImage('rain')
    } else {
      return getImage('drizzle')
    }
  }
}
