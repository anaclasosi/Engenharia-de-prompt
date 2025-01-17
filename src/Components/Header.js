import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../Assets/background.png'; // Importar a imagem background.png como logo

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" /> {/* Adicionar a logo */}
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/fazer-pedido" className="nav-link">Fazer Pedido</Link>
        <Link to="/acompanhar-pedido" className="nav-link">Acompanhar Pedido</Link>
      </nav>
    </header>
  );
};

export default Header;