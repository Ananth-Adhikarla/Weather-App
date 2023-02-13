import React from 'react'
import SearchItem from './SearchItem.js'
import styles from './SearchResults.module.css'

const SearchResults = ({ data, onClick, hide, searchResultsRef }) => {
  return (
    <div
      className={`${styles.searchResult} ${
        data.length === 0 || hide ? styles.hide : ''
      }`}
      ref={searchResultsRef}
    >
      <div className={styles.searchResultBox}>
        {data.length === 0
          ? ''
          : data.map((city, index) => {
              return <SearchItem key={index} data={city} onClick={onClick} />
            })}
      </div>
    </div>
  )
}

export default SearchResults
