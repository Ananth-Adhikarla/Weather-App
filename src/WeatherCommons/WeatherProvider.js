import React, { useReducer, useEffect } from 'react'
import WeatherContext from './WeatherContext'
import { FetchData, FetchDailyData } from './WeatherAPI'

const initState = {
  searchValue: '',
  filteredResults: [],
  errorText: '',
  cityObject: {},
  apiData: [],
  apiDailyData: [],
  showAutocompleteResults: false,
  metric: 'C'
}

export function weatherReducer (state, action) {
  switch (action.type) {
    case 'UpdateSearchValue': {
      return {
        ...state,
        searchValue: action.searchValue,
        errorText: action.errorText
      }
    }
    case 'SelectedCity': {
      return {
        ...state,
        searchValue: action.searchValue,
        cityObject: action.cityObject
      }
    }
    case 'SetError': {
      return {
        ...state,
        errorText: action.errorText
      }
    }
    case 'UpdateData': {
      return {
        ...state,
        apiData: action.data
      }
    }
    case 'UpdateDailyData': {
      return {
        ...state,
        apiDailyData: action.data
      }
    }
    case 'UpdateShowAutoCompleteResults': {
      return {
        ...state,
        showAutocompleteResults: action.showAutocomplete
      }
    }
    case 'ChangeMetrics': {
      return {
        ...state,
        metric: state.metric === 'C' ? 'F' : 'C'
      }
    }
    default:
      return state
  }
}

const WeatherProvider = ({ children }) => {
  const [weatherState, dispatchWeather] = useReducer(weatherReducer, initState)

  const UpdateSearchValue = (searchValue, errorText) => {
    dispatchWeather({
      type: 'UpdateSearchValue',
      searchValue: searchValue,
      errorText: errorText
    })
  }

  const SelectedCity = (searchValue, cityObject) => {
    dispatchWeather({
      type: 'SelectedCity',
      searchValue: searchValue,
      cityObject: cityObject
    })
  }

  const SetError = errorText => {
    dispatchWeather({
      type: 'SetError',
      errorText: errorText
    })
  }

  const UpdateData = data => {
    dispatchWeather({
      type: 'UpdateData',
      data: data
    })
  }

  const UpdateDailyData = data => {
    dispatchWeather({
      type: 'UpdateDailyData',
      data: data
    })
  }

  const UpdateShowAutocompleteResults = showAutocomplete => {
    dispatchWeather({
      type: 'UpdateShowAutoCompleteResults',
      showAutocomplete: showAutocomplete
    })
  }

  const ChangeMetrics = () => {
    dispatchWeather({
      type: 'ChangeMetrics'
    })
  }

  const pageLoad = async () => {
    if (weatherState.apiData.length === 0) {
      let data = await FetchData(43.7001, -79.4163)
      let dailyData = await FetchDailyData(43.7001, -79.4163)
      UpdateData(data)
      UpdateDailyData(dailyData.list)
    }
  }

  useEffect(() => {
    pageLoad()
  }, [])

  const weatherContext = {
    searchValue: weatherState.searchValue,
    filteredResults: weatherState.filteredResults,
    errorText: weatherState.errorText,
    cityObject: weatherState.cityObject,
    apiData: weatherState.apiData,
    apiDailyData: weatherState.apiDailyData,
    showAutocompleteResults: weatherState.showAutocompleteResults,
    metric: weatherState.metric,
    UpdateSearchValue: UpdateSearchValue,
    SelectedCity: SelectedCity,
    SetError: SetError,
    UpdateData: UpdateData,
    UpdateDailyData: UpdateDailyData,
    UpdateShowAutocompleteResults: UpdateShowAutocompleteResults,
    ChangeMetrics: ChangeMetrics
  }

  return (
    <WeatherContext.Provider value={weatherContext}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
