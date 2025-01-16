import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Lógica de cadastro
  };

  return (
    <div className="register-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
