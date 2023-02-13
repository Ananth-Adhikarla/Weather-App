import React from 'react'
import styles from './Sidebar.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SidebarInfo from './SidebarInfo'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <SidebarInfo />
    </div>
  )
}

export default Sidebar
