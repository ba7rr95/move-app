import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/slices/movieSlice";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    year: "",
    rating: "",
    genre: "",
    director: "",
    duration: "",
    language: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.year) {
      alert("Title and Year are required");
      return;
    }
    dispatch(addMovie(form));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" onChange={handleChange} placeholder="Title" />
      <input name="year" onChange={handleChange} placeholder="Year" />
      <input name="rating" onChange={handleChange} placeholder="Rating" />
      <input name="genre" onChange={handleChange} placeholder="Genre" />
      <input name="director" onChange={handleChange} placeholder="Director" />
      <input name="duration" onChange={handleChange} placeholder="Duration" />
      <input name="language" onChange={handleChange} placeholder="Language" />
      <input name="image" onChange={handleChange} placeholder="Image URL" />
      <textarea name="description" onChange={handleChange} />
      <button>Add</button>
    </form>
  );
};

export default AddMovie;