import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/aboutUs/aboutUs.jsx';
import Header from './components/common/header.jsx';
import Footer from './components/common/footer.jsx';
import Menu from './components/menu/menu.jsx';
import Order from './components/order/order.jsx';
import Promo from './components/promo/promo.jsx';
import Ubication from './components/ubication/ubication.jsx';
import Form from './components/menu/form.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const appStyles = {
    backgroundColor: darkMode ? '#A0BDFF' : '#FFE9E0',
    color: darkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
  };

  const buttonStyles = {
    backgroundColor: darkMode ? '#FF956B' : '#5A8DFF',
    borderColor: darkMode ? '#FF4F08' : '#004AEF',
    color: darkMode ? '#000000' : '#ffffff',
  };

  return (
    <Router>
      <div style={appStyles}>
        <Header />
        <div className="container mt-4">
          <button
            className="btn mb-4"
            style={buttonStyles}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/ubication" element={<Ubication />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
