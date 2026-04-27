import React from 'react';
import MoviesShow from './moviesShow';
import MoviesForm from './moviesForm';
import '../styles/styles.css';

const ParentComponent = () => {
    const [movies, setMovies] = React.useState([]);

    const getFormValue = (movieData) => {
        setMovies((prevMovies) => [...prevMovies, movieData]);
    };

    return (
        <div className="container">
            <h1>Movie App</h1>
            <MoviesForm getFormValue={getFormValue} />
            <MoviesShow data={movies} />
        </div>
    );
};

export default ParentComponent;