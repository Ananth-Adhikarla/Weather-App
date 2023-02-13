import React from 'react'
import { countryFilter } from '../WeatherCommons/AutocompleteResults'
import styles from './SearchItem.module.css'

const SearchItem = ({ data, onClick }) => {
  let space = Array(2).fill('\xa0').join('')
  let city = data.name
  let state = data.stateCode
  let country = countryFilter(data.countryCode).name
  let format = `${city} ${space} ${state} ${space} ${country}`

  let cityObject = {
    latitude: data.latitude,
    longitude: data.longitude,
    city: city,
    state: state,
    country: country
  }

  return (
    <span
      className={styles.dataItem}
      onClick={() => onClick(cityObject, format)}
    >
      <span>{format}</span>
    </span>
  )
}

export default SearchItem
