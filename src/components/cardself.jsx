import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cardself = ({movie}) => {
    const navigate = useNavigate();
    return (
        <div style={styles.card}>
            <h1>{movie.original_title}</h1> 
            <h3>{movie.release_date}</h3> 
            <h3>{movie.vote_average}</h3> 

            <button style={styles.button} onClick={()=>{navigate(`/movies/${movie.id}`)} }>Show Movie Details</button>         
        </div>
    );
}

const styles = {
  card: {
    border: "1px solid #1e293b",
    padding: "18px",
    width: "220px",
    borderRadius: "12px",
    background: "#1a2236",
    color: "#f1f5f9",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  },

  button: {
    background: "#38bdf8",
    color: "#0a0e1a",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    marginTop: "10px",
    transition: "all 0.3s ease"
  }
};

export default Cardself;
