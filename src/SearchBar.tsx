import React, { useContext } from "react";
import { SearchContext } from "./MovieScreen";

export interface SortByOption {
  value: string;
  text: string;
}

interface SearchBarProps {
  sortByOptions: SortByOption[];
}

function SearchBar({ sortByOptions }: SearchBarProps) {
  const { searchValue, setSearchValue, sortValue, setSortValue } =
    useContext(SearchContext);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function handleClearButtonClick() {
    setSearchValue("");
  }

  function handleOptionSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    setSortValue(event.target.value);
  }

  return (
    <div className="search-sort-container">
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

      {sortByOptions.length > 0 && (
        <div className="sort-container">
          <label className="sort-by-label">Sort by:</label>
          <select
            name="sortBy"
            id="sortBy"
            className="sort-by-select"
            value={sortValue}
            onChange={handleOptionSelect}
          >
            {sortByOptions.map((p, index) => (
              <option key={index} value={p.value}>
                {p.text}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
