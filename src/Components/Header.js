import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 w-full py-4 text-center text-gray-400 text-lg">
      <nav>
        <Link to="/" className="mx-4">Home</Link>
        <Link to="/fazer-pedido" className="mx-4">Fazer Pedido</Link>
        <Link to="/acompanhar-pedido" className="mx-4">Acompanhar Pedido</Link>
      </nav>
    </header>
  );
};

export default Header;