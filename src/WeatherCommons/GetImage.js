function importAll (r) {
  let images = {}
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}

export const getImage = name => {
  const images = importAll(
    require.context('../assets/weather-icons/', false, /\.(png|jpe?g|svg)$/)
  )
  return images[name + '.svg']
}
