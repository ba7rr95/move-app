import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
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
          Have questions or suggestions? We'd love to hear from you!
        </p>
        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.8', marginBottom: '8px' }}>
          📧 <strong style={{ color: '#f1f5f9' }}>Email:</strong>{' '}
          <span style={{ color: '#38bdf8' }}>Ahmedelbehiry95@gmail.com</span>
        </p>
        <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.8', marginBottom: '8px' }}>
          📱 <strong style={{ color: '#f1f5f9' }}>Phone:</strong>{' '}
          <span style={{ color: '#38bdf8' }}>01023800786</span>
        </p>
        <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginTop: '20px' }}>
          ahmed elbehiry
        </p>
      </div>
    </div>
  );
};

export default Contact;