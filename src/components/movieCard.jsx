import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteMovie } from "../redux/slices/movieSlice";
import { addFavorite, removeFavorite } from "../redux/slices/favoriteSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favorites = useSelector(state => state.favorites.items);
  const isFavorite = favorites.find(m => m.id === movie.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
    dispatch(removeFavorite(movie.id)); 
  };

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />

      <h3>{movie.title}</h3>
      <p>{movie.year}</p>

      <button onClick={() => navigate(`/movie/${movie.id}`)}>
        Details
      </button>

      <button onClick={handleFavorite}>
        {isFavorite ? "Remove ❤️" : "Favorite 🤍"}
      </button>

      <button onClick={() => navigate(`/edit/${movie.id}`)}>
        Edit
      </button>

      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default MovieCard;