function Movie({ movies }) {
    const style = {
        color: '#f1f5f9',
        fontSize: '24px',
        textAlign: 'center',
        marginTop: '20px',
        padding: '20px',
    };

    return (
        <div style={style}>
            <h1>Hello from Movies Component</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>Year: {movie.year}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Movie;