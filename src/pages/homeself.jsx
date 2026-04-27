import React, { useEffect, useState } from 'react';
import Cardself from '../components/cardself';

const Homeself = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
            .then(res => res.json())
            .then(data => setMovies(data.results))
    }, [])
    return (
        <div>
            <h1> Welcome To <strike>Netflix</strike> BehiryFlix</h1>
            <div style={styles.grid}>
                {movies.map(movie => (
                    <Cardself key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

const styles = {
    grid: {
        display: "flex",
        flexWrap: "wrap",
        gap: "15px"
    }
};

export default Homeself;
