import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector(state => state.favorites.items.length);

  return (
    <nav className="navbar">
      <h1>🎬 Be7irybest</h1>

      <div className="nav-links">
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/add" >Add Movie</Link>
        <Link to="/favorites">❤️({count})</Link>
      </div>
    </nav>
  );
};

export default Navbar;