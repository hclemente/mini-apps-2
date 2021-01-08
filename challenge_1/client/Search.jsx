import React from 'react'

const Search = (props) => {
  return (
    <div>
    <input
      type="text"
      name="name"
      placeholder="search"
      value={props.searchValue}
      onChange={props.onChange}
    />
    <button type="submit">search</button>
    </div>
  )
}

export default Search;