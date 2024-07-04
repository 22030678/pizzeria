import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = ({ darkMode }) => {
  const footerStyle = {
    backgroundColor: darkMode ? '#333' : '#f8f9fa',
    color: darkMode ? '#fff' : '#333',
    textAlign: 'center',
    padding: '1rem 0',
    boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const columnStyle = {
    flex: '1',
    minWidth: '200px',
    marginBottom: '1rem',
    textAlign: 'left',
  };

  const headingStyle = {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#333',
    marginBottom: '0.5rem',
  };

  const linkStyle = {
    color: darkMode ? '#ccc' : '#333',
    textDecoration: 'none',
    margin: '0 0.5rem',
    fontSize: '1.5rem',
  };

  const linkContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const copyrightStyle = {
    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.2)',
    padding: '1rem',
    color: darkMode ? '#ccc' : '#333',
    marginTop: '1rem',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={columnStyle}>
          <h5 style={headingStyle}>UTMA store</h5>
          <p>
            Adquiere los productos oficiales de la Universidad Tecnológica Metropolitana.
          </p>
        </div>
        <div style={{ ...columnStyle, textAlign: 'center'}}>
          <h5 style={headingStyle}>¡Síguenos!</h5>
          <div style={linkContainerStyle}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div style={copyrightStyle}>
        © 2024 Copyright:
        <a href="https://www.utmastore.com/" style={{ ...linkStyle, textDecoration: 'underline', fontSize: '1.1rem' }}>utmastore.com</a>
      </div>
    </footer>
  );
};

export default Footer;
