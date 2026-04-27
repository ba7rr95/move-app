import { useSelector } from "react-redux";
import MovieCard from "../components/movieCard";

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.items);

  return (
    <div className="container">
      <h1>Favorite Movies</h1>

      <div className="movies-grid">
        {favorites.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;