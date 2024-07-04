import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState('');
  const [inputUsername, setInputUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername(inputUsername);
    setShowLoginForm(false);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center no-hover" to="/">
          <img src={process.env.PUBLIC_URL + '/images/utmaico.png'} alt="UTMASTORE" style={{ width: '40px', marginRight: '10px' }} />
          UTMA store
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menú</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/promo">Promociones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/order">Ordenar Online</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ubication">Ubicaciones</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutUs">Nosotros</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn login-btn" onClick={handleLoginClick}>
                <FaUser style={{ marginRight: '8px' }} />
                {username ? username : 'Log In'}
              </button>
              {showLoginForm && (
                <form onSubmit={handleSubmit} className="login-form">
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={inputUsername}
                      onChange={(e) => setInputUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
