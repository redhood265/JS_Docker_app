import React, { useState } from "react";

const Search = (props) => {

  const [searchValue, setSearchValue] = setState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value)
  }

  const callSearchFunction =(e) => {
    e.preventDefault();
    props.search(searchValue)
    setSearchValue("");
  }

  return (
    <form classNmae="searc_comp">
      <input value={searchValue} onChange={handleSearchInputChanges} type="text" />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
}

export default Search;