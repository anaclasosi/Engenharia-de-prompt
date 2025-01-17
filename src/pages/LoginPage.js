import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';

const LoginPage = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica para login
  };

  return (
    <div className="auth-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/fazer-pedido">Fazer Pedido</Link>
        <Link to="/acompanhar-pedido">Acompanhar Pedido</Link>
      </nav>
      <div className="overlay">
        <h1 className="title">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
