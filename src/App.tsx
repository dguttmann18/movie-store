import LoginCard from "./LoginCard";
import MovieCard, { MovieCardData } from "./MovieCard";
import robinsons from "./assets/robinsons.jpg";
import nottingHill from "./assets/nottinghill.jpg";
import barryLyndon from "./assets/barrylyndon.jpg";
import SearchBar from "./SearchBar";

function App() {
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
      id: 3,
      title: "Barry Lyndon",
      year: 1975,
      picture: barryLyndon,
    },
  ];

  return (
    <>
      <SearchBar />

      <div className="movie-card-screen">
        {movies.map((movie) => (
        <MovieCard
          id={movie.id}
          title={movie.title}
          year={movie.year}
          picture={movie.picture}
          key={movie.id}
        />
      ))}
      </div>
    </>
  );
}

export default App;
