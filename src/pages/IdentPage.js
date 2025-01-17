import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthPage.css';

const IdentPage = () => {
  const [nome, setNome] = useState('');
  const [cpfEmail, setCpfEmail] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    // Lógica para cadastro
    navigate('/fazer-pedido');
  };

  const handleNomeChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setNome(value);
    }
  };

  const handleCpfEmailChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9@._-]*$/.test(value)) {
      setCpfEmail(value);
    }
  };

  return (
    <div className="auth-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/fazer-pedido">Fazer Pedido</Link>
        <Link to="/acompanhar-pedido">Acompanhar Pedido</Link>
      </nav>
      <div className="overlay">
        <h1 className="title">Identificação</h1>
        <p className="subtitle" style={{ fontSize: '1rem' }}>Forneça os dados para continuar o pedido</p>
        <form onSubmit={handleCadastro}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={handleNomeChange}
            required
          />
          <input
            type="text"
            placeholder="CPF ou Email"
            value={cpfEmail}
            onChange={handleCpfEmailChange}
            required
          />
          <button type="submit" className="btn btn-primary">Continuar</button>
        </form>
      </div>
    </div>
  );
};

export default IdentPage;
