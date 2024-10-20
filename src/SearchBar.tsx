import React, { useContext } from "react";
import { UserContext } from "./MovieScreen";

function SearchBar() {
    const { searchValue, setSearchValue } = useContext(UserContext);

  function handleSearchBoxChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("text changed");
    setSearchValue(event.target.value);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a move..."
        value={searchValue}
        onChange={handleSearchBoxChange}
      />
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchBar;
