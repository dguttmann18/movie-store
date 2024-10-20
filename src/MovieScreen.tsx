import MovieCard, { MovieCardData } from "./MovieCard";
import robinsons from "./assets/robinsons.jpg";
import nottingHill from "./assets/nottinghill.jpg";
import barryLyndon from "./assets/barrylyndon.jpg";
import SearchBar from "./SearchBar";
import React, { useState, createContext, useContext } from "react";

export const UserContext = createContext({
    searchValue: "",
    setSearchValue: (value: string) => {}
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

  return (
    <UserContext.Provider value={{ searchValue, setSearchValue }}>
            <div className="movie-screen">
                <SearchBar />
                
                <div className="movie-card-screen">
                    {filteredMovies.map((movie: MovieCardData) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            year={movie.year}
                            picture={movie.picture}
                        />
                    ))}
                </div>
            </div>
        </UserContext.Provider>
  );
}

export default MovieScreen;
