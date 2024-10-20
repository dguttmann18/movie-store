import React, { useContext, useState } from "react";
import { UserContext } from "./MovieScreen";

function SearchBar() {
  const [tempSearchValue, setTempSearchValue] = useState("");
  const { searchValue, setSearchValue } = useContext(UserContext);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTempSearchValue(event.target.value);
  }

  function handleSearchButtonClick() {
    setSearchValue(tempSearchValue); // Update global search value
    console.log("Search initiated with value:", tempSearchValue);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={tempSearchValue}
        onChange={handleInputChange}
      />
      <button type="submit" onClick={handleSearchButtonClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
