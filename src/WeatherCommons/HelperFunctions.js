export const convertDegrees = (temprature, metric) => {
  let convertedValue = 0

  if (metric === 'C') {
    convertedValue = Math.floor(temprature - 273.15)
  }

  if (metric === 'F') {
    convertedValue = Math.floor((temprature - 273.15) * 1.8 + 32)
  }

  return convertedValue
}

export const convertPressure = (pressure, metric) => {
  let convertedValue = 0

  if (metric === 'C') {
    convertedValue = Math.floor(pressure * 0.1)
  }

  if (metric === 'F') {
    convertedValue = Math.floor(pressure / 68.948)
  }

  return convertedValue
}

export const convertSpeed = (speed, metric) => {
  let convertedValue = 0

  if (metric === 'C') {
    return speed
  }

  if (metric === 'F') {
    convertedValue = Math.floor(speed * 2.237)
  }

  return convertedValue
}

export const convertDegToCompass = degree => {
  let val = Math.floor(degree / 22.5 + 0.5)
  let arr = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW'
  ]
  return arr[val % 16]
}
