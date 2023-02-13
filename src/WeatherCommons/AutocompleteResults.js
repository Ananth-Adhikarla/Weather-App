import { Country, State, City } from 'country-state-city'

const FILTER_SIZE = 12

export const citiesFilter = cityName => {
  return City.getAllCities()
    .filter(c => c.name.toLowerCase().includes(cityName.toLowerCase()))
    .splice(0, FILTER_SIZE)
}

export const stateFilterByCountry = (stateCode, countryCode) => {
  return State.getAllStates()
    .filter(s => s.isoCode === stateCode && s.countryCode === countryCode)
    .pop()
}

export const countryFilter = countryCode => {
  return Country.getAllCountries()
    .filter(c => c.isoCode === countryCode)
    .pop()
}

// export const autoCompleteFilter = (
//   city = '',
//   state = '',
//   country = '',
//   filterSize = 0
// ) => {
//   return City.getAllCities()
//     .filter(
//       c =>
//         c.name.toLowerCase().includes(city.toLowerCase().trim()) &&
//         c.stateCode.toLowerCase().includes(state.toLowerCase().trim()) &&
//         c.countryCode.toLowerCase().includes(country.toLowerCase().trim())
//     )
//     .splice(0, filterSize > 0 ? filterSize : FILTER_SIZE)
// }

export const autoCompleteFilter = (inputText, filterSize = 0) => {
  let first = ''
  let second = ''
  let combined = []

  if (inputText.includes(',')) {
    let split = inputText.split(',').map(item => item.trim().toLowerCase())
    first = split[0]
    second = split[1]

    if (second !== undefined) {
      let states = State.getAllStates().filter(
        s =>
          s.name.toLowerCase() === second ||
          s.name.toLowerCase().includes(second) ||
          s.isoCode.toLowerCase().includes(second)
      )
      let countries = Country.getAllCountries().filter(
        c =>
          c.name.toLowerCase() === second ||
          c.name.toLowerCase().includes(second) ||
          c.isoCode.toLowerCase().includes(second)
      )
      combined = states.concat(countries)
    }
  } else {
    first = inputText.trim().toLowerCase()
  }

  let city = City.getAllCities().filter(
    c => c.name.toLowerCase() === first || c.name.toLowerCase().includes(first)
  )

  if (second !== '') {
    city = city.filter(city => {
      return combined.some(comb => {
        return (
          comb.isoCode === city.stateCode || comb.isoCode === city.countryCode
        )
      })
    })
  }

  return city.splice(0, filterSize > 0 ? filterSize : FILTER_SIZE)
}
