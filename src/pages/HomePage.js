import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <img src="/Assets/logo.png" alt="Logo da Lanchonete" className="w-32 h-32 mb-8" />
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à Lanchonete Braseiro</h1>
      <p className="text-lg mb-8">Faça seu pedido de forma rápida e fácil!</p>
      <div className="flex space-x-4">
        <Link to="/fazer-pedido">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Fazer Pedido
          </button>
        </Link>
        <Link to="/acompanhar-pedido">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Acompanhar Pedido
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;