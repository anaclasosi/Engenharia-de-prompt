import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlay">
        <h1 className="title">Bem-vindo à Lanchonete Braseiro</h1>
        <p className="subtitle">Onde cada mordida é um momento de felicidade!</p>
        <div className="button-container">
          <Link to="/identificacao">
            <button className="btn btn-primary">Identificação</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
