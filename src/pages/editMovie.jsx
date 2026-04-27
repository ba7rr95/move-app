import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMovie } from "../redux/slices/movieSlice";
import { useParams, useNavigate } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movie = useSelector(state =>
    state.movies.list.find(m => m.id === Number(id))
  );

  const [form, setForm] = useState(null);

  useEffect(() => {
    if (movie) setForm(movie);
  }, [movie]);

  if (!form) return <h2>Loading...</h2>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateMovie({ id, updated: form }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} />
      <input name="year" value={form.year} onChange={handleChange} />
      <input name="rating" value={form.rating} onChange={handleChange} />
      <input name="genre" value={form.genre} onChange={handleChange} />
      <input name="director" value={form.director} onChange={handleChange} />
      <input name="duration" value={form.duration} onChange={handleChange} />
      <input name="language" value={form.language} onChange={handleChange} />
      <input name="image" value={form.image} onChange={handleChange} />
      <textarea name="description" value={form.description} onChange={handleChange} />
      <button>Update</button>
    </form>
  );
};

export default EditMovie;