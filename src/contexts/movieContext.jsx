import React, { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const API = "http://localhost:3000/movies";

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  // GET
  const fetchMovies = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setMovies(data);
  };

  // ADD
  const addMovie = async (movie) => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie)
    });
    fetchMovies();
  };

  // DELETE
  const deleteMovie = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchMovies();
  };

  // UPDATE
  const updateMovie = async (id, updatedMovie) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMovie)
    });
    fetchMovies();
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ movies, addMovie, deleteMovie, updateMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;