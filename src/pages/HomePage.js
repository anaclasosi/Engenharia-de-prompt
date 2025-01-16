import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlay">
        <h1 className="title">Bem-vindo à Lanchonete Braseiro</h1>
        <p className="subtitle">Faça seu pedido de forma rápida e fácil!</p>
        <div className="button-container">
          <Link to="/fazer-pedido">
            <button className="btn btn-primary">Fazer Pedido</button>
          </Link>
          <Link to="/acompanhar-pedido">
            <button className="btn btn-secondary">Acompanhar Pedido</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
