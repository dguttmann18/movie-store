import MovieCard, { MovieCardData } from "./MovieCard";
import robinsons from "./assets/robinsons.jpg";
import nottingHill from "./assets/nottinghill.jpg";
import barryLyndon from "./assets/barrylyndon.jpg";
import SearchBar, { SortByOption } from "./SearchBar";
import { useState, createContext } from "react";

export const SearchContext = createContext({
  searchValue: "",
  setSearchValue: (value: string) => {},
  sortValue: "",
  setSortValue: (value: string) => {},
});

function MovieScreen() {
  const movies: MovieCardData[] = [
    {
      id: 1,
      title: "Meet the Robinsons",
      year: 2007,
      picture: robinsons,
    },
    {
      id: 2,
      title: "Notting Hill",
      year: 1999,
      picture: nottingHill,
    },
    {
      id: 3,
      title: "Barry Lyndon",
      year: 1975,
      picture: barryLyndon,
    },
    {
      id: 4,
      title: "Barry Lyndon",
      year: 1975,
      picture: barryLyndon,
    },
  ];

  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  const movieContains = (m: MovieCardData, s: string): boolean => {
    if (m.title.toLowerCase().includes(s.toLowerCase())) return true;

    const yearAsString = m.year.toString();
    if (yearAsString.includes(s)) return true;

    return false;
  };

  const filteredMovies =
    searchValue === ""
      ? movies
      : movies.filter((m) => movieContains(m, searchValue));

  const sortedMovies = [...filteredMovies].sort((a, b) => {
    if (sortValue === "year") {
      return a.year - b.year;
    }

    if (sortValue === "title") {
      return a.title.localeCompare(b.title);
    }

    return 0;
  });

  const sortByOptions: SortByOption[] = [
    { value: "year", text: "Year" },
    { value: "title", text: "Title" },
  ];

  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, sortValue, setSortValue }}
    >
      <div className="movie-screen">
        <SearchBar sortByOptions={sortByOptions} />

        <div className="movie-card-screen">
          {filteredMovies.length === 0 ? (
            <label>No movies to display</label>
          ) : (
            sortedMovies.map((movie: MovieCardData) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                picture={movie.picture}
              />
            ))
          )}
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default MovieScreen;
