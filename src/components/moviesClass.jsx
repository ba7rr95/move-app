import React, { Component } from "react";

class MoviesClass extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.vercel.app/films")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data,
          loading: false
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div style={{ padding: "20px" }}>
        <h1>Movies</h1>

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div style={styles.container}>
            {movies.map((movie) => (
              <div key={movie.id} style={styles.card}>
                <h3>{movie.title}</h3>
                <p><strong>Director:</strong> {movie.director}</p>
                <p><strong>Year:</strong> {movie.release_date}</p>
                <p>{movie.description.slice(0, 100)}...</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center"
  },
  card: {
    width: "250px",
    padding: "15px",
    border: "1px solid #1e293b",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    background: "#1a2236",
    color: "#94a3b8"
  }
};

export default MoviesClass;