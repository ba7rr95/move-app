import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = "http://localhost:3000/movies";

// GET
export const fetchMovies = createAsyncThunk("movies/fetch", async () => {
  const res = await fetch(API);
  return res.json();
});

// ADD
export const addMovie = createAsyncThunk("movies/add", async (movie) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie)
  });
  return res.json();
});

// DELETE
export const deleteMovie = createAsyncThunk("movies/delete", async (id) => {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  return id;
});

// UPDATE
export const updateMovie = createAsyncThunk(
  "movies/update",
  async ({ id, updated }) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated)
    });
    return res.json();
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    loading: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })

      .addCase(addMovie.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.list = state.list.filter(m => m.id !== action.payload);
      })

      .addCase(updateMovie.fulfilled, (state, action) => {
        state.list = state.list.map(m =>
          m.id === action.payload.id ? action.payload : m
        );
      });
  }
});

export default movieSlice.reducer;