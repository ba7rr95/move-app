import React from 'react';

const MoviesShow = ({ data }) => {
    return (
        <div className="movies-list">
            <h2>Movies List</h2>

            {data.length === 0 ? (
                <p>No movies added yet</p>
            ) : (
                data.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <p><strong>Title:</strong> {movie.title}</p>
                        <p><strong>Year:</strong> {movie.year}</p>
                        <p><strong>Rating:</strong> {movie.rating}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default MoviesShow;