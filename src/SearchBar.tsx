import React, { useContext, useState } from "react";
import { UserContext } from "./MovieScreen";

function SearchBar() {
  const [tempSearchValue, setTempSearchValue] = useState("");
  const { searchValue, setSearchValue } = useContext(UserContext);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    //setTempSearchValue(event.target.value);
    setSearchValue(event.target.value);
  }

  function handleSearchButtonClick() {
    setSearchValue(tempSearchValue); // Update global search value
    console.log("Search initiated with value:", tempSearchValue);
  }

  function handleClearButtonClick() {
    setSearchValue("");
    //setTempSearchValue("");
  }

  return (
    <>
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchValue}
        onChange={handleInputChange}
      />
      {searchValue === "" ? (
        <button type="button" className="empty-button"></button>
      ) : (
        <button
          type="submit"
          className="clear-button"
          onClick={handleClearButtonClick}
        >
          X
        </button>
      )}
    </div>
    <label className="sort-by-label">Sort by:</label>
    <select name="sortBy" id="sortBy" className="sort-by-select">
        <option value="title">Title</option>
        <option value="yearOfRelease">Year of Release</option>
    </select>
    </>
  );
}

export default SearchBar;
