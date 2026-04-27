import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../redux/slices/movieSlice";
import MovieCard from "../components/movieCard";

const Home = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(state => state.movies);
  // console.log(list);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>Movies</h1>

      <div className="movies-grid">
        {list.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;