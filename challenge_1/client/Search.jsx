import React from 'react'

const Search = (props) => {
  return (
    <div>
    <input
      type="text"
      id="searchValue"
      placeholder="search"
      value={props.searchValue}
      onChange={props.onChange}
    />
    <button type="submit" onClick={props.onSubmit}>search</button>
    </div>
  )
}

export default Search;