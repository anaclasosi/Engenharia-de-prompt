import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importando o CSS

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/fazer-pedido" className="nav-link">Fazer Pedido</Link>
        <Link to="/acompanhar-pedido" className="nav-link">Acompanhar Pedido</Link>
      </nav>
    </header>
  );
};

export default Header;