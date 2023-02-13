import { createContext } from 'react'

const WeatherContext = createContext({
  searchValue: '',
  filteredResults: [],
  errorText: '',
  cityObject: {},
  apiData: [],
  apiDailyData: [],
  showAutocompleteResults: true,
  metric: 'C',
  cache: [],
  UpdateSearchValue: (searchValue, errorText) => {},
  SelectedCity: (searchValue, cityObject) => {},
  SetError: errorText => {},
  UpdateData: data => {},
  UpdateDailyData: data => {},
  UpdateShowAutocompleteResults: showAutocomplete => {},
  ChangeMetrics: () => {},
  addToCache: data => {}
})

export default WeatherContext
