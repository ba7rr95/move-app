import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1>About Mustflix</h1>
      <div style={{
        background: '#1a2236',
        padding: '32px',
        borderRadius: '16px',
        border: '1px solid #1e293b',
        boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
          Welcome to <strong style={{ color: '#38bdf8' }}>be7irybest</strong> — your premium destination for discovering and managing your favorite movies.
        </p>
        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.8', marginBottom: '16px' }}>
          Built with React, Redux, and love, this platform lets you browse, add, edit, and curate your personal movie collection with a beautiful dark-themed interface.
        </p>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6' }}>
          Created with ahmed elbehiry
        </p>
      </div>
    </div>
  );
};

export default About;