import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="title">Bem-vindo à Lanchonete Braseiro</h1>
        <p className="subtitle">Faça login ou cadastre-se para continuar</p>
        <div className="button-container">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-secondary">Cadastro</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
