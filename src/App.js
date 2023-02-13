import React from 'react'
import WeatherProvider from './WeatherCommons/WeatherProvider'
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import WeatherGrids from './WeatherGrids/WeatherGrids'

function App () {
  return (
    <div className='App'>
      <WeatherProvider>
        <Sidebar />
        <WeatherGrids />
      </WeatherProvider>
    </div>
  )
}

export default App
