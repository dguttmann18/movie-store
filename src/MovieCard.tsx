export interface MovieCardData {
    id: number;
    title: string;
    year: number;
    picture: string;
};

function MovieCard(props : MovieCardData) {

  return (
    <div className="card">
      <img className="card-image" src={props.picture} alt="profile picture"></img>
      <h2 className="card-title">{props.title}</h2>
      <h3 className="card-year">({props.year})</h3>

      <div className="card-commands">
        <button className="reviews-button">Reviews</button>
        <button className="trailer-button">Trailer</button>
        <button className="watchlist-button">Add to Watch List</button>
      </div>
    </div>
  );
}

export default MovieCard;
