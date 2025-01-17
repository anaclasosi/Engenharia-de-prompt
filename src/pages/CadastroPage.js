import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthPage.css';

const CadastroPage = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    if (senha.length < 8) {
      setError('A senha deve ter no mínimo 8 caracteres.');
      return;
    }
    // Lógica para cadastro
  };

  return (
    <div className="auth-page">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/fazer-pedido">Fazer Pedido</Link>
        <Link to="/acompanhar-pedido">Acompanhar Pedido</Link>
      </nav>
      <div className="overlay">
        <h1 className="title">Cadastro</h1>
        <form onSubmit={handleCadastro}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value.replace(/\D/g, ''))} // Aceita apenas números
            required
          />
          <input
            type="password"
            placeholder="Senha (mínimo 8 caracteres)"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="btn btn-primary">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroPage;
