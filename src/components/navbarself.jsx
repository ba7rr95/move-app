import React from 'react';
import { Link } from 'react-router-dom';

const Navbarself = () => {
    return (
        <nav style={styles.nav}>
            <Link style={styles.link} to={'/'}>Home Page</Link>
            <Link style={styles.link} to={'/aboutself'}>About me</Link>
            <Link style={styles.link} to={'/contactself'}>Contact me</Link>
        </nav>
    );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    background: "linear-gradient(135deg, #0a0e1a, #111827)",
    color: "#f1f5f9",
    fontSize: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
    borderBottom: "1px solid #1e293b",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  link: {
    color: "#94a3b8",
    marginLeft: "20px",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    transition: "color 0.3s ease",
    padding: "8px 14px",
    borderRadius: "8px"
  }
};

export default Navbarself;
