import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlay">
        <h1 className="title">Bem-vindo à Lanchonete Braseiro</h1>
        <p className="subtitle">Faça seu cadastro ou login para continuar!</p>
        <div className="button-container">
          <Link to="/cadastro">
            <button className="btn btn-primary">Cadastro</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-secondary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
