import React, { useState, useEffect, useRef, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './SearchBar.module.css'
import SearchResults from './SearchResults'
import WeatherContext from '../WeatherCommons/WeatherContext'
import { FetchData, FetchDailyData } from '../WeatherCommons/WeatherAPI'
import { autoCompleteFilter } from '../WeatherCommons/AutocompleteResults'
import parse from 'html-react-parser'

const SearchBar = () => {
  const [filteredResults, setFilteredResults] = useState([])
  const searchRef = useRef(null)
  const errorDiv = useRef(null)
  const searchResultsRef = useRef(null)

  const context = useContext(WeatherContext)

  const onSearchChange = async e => {
    context.UpdateSearchValue(e.target.value, '')
    context.UpdateShowAutocompleteResults(false)
  }

  const getSelectedCity = async (cityObject, selectValue) => {
    context.SelectedCity(selectValue, cityObject)
    let data = await FetchData(cityObject.latitude, cityObject.longitude)
    let dailyData = await FetchDailyData(
      cityObject.latitude,
      cityObject.longitude
    )
    context.UpdateData(data)
    context.UpdateDailyData(dailyData.list)
  }

  const getCity = event => {
    event.preventDefault()
    context.UpdateShowAutocompleteResults(true)
    let errorText = ''

    let results = autoCompleteFilter(context.searchValue)[0]

    if (results === undefined) {
      errorText = `<span className=${styles.fadeIn}>Please enter a valid name <br/> Format: CITY | CITY , STATE | CITY , COUNTRY</span>`
      context.SetError(errorText)
      return
    }

    let cityObject = {
      latitude: results.latitude,
      longitude: results.longitude,
      city: results.name,
      state: results.stateCode,
      country: results.countryCode
    }

    getSelectedCity(cityObject, searchRef.current.value.trim())
  }

  useEffect(() => {
    if (context.searchValue === '') return
    let results = autoCompleteFilter(context.searchValue)
    setFilteredResults(results)
    return () => {
      setFilteredResults([])
    }
  }, [context.searchValue])

  useEffect(() => {
    if (context.errorText === '') return

    let counter = setInterval(() => {
      errorDiv.current.classList.add(styles.fadeIn)
    }, 500)

    return () => {
      clearInterval(counter)
    }
  }, [context.errorText])

  useEffect(() => {
    document.addEventListener('click', hideAutocompleteResults, true)

    return () => {
      document.removeEventListener('click', hideAutocompleteResults, true)
    }
  }, [])

  const hideAutocompleteResults = e => {
    if (
      !searchResultsRef.current.contains(e.target) &&
      !context.showAutocompleteResults
    ) {
      context.UpdateShowAutocompleteResults(true)
    }
  }

  return (
    <div className={`${styles.container} `}>
      <form onSubmit={getCity}>
        <div className={styles.search}>
          <input
            autoFocus
            ref={searchRef}
            className={styles.search_input}
            type='search'
            autoComplete='off'
            value={context.searchValue}
            onChange={onSearchChange}
            required
          />
          <button className={styles.search_button}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={styles.errorText} ref={errorDiv}>
          {parse(context.errorText)}
        </div>
        <SearchResults
          searchResultsRef={searchResultsRef}
          data={filteredResults}
          onClick={getSelectedCity}
          hide={context.showAutocompleteResults}
        />
      </form>
    </div>
  )
}

export default SearchBar
