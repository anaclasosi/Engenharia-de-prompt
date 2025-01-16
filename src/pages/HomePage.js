import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold mb-4">Bem-vindo!</h1>
        <p className="text-lg text-gray-700 mb-6">Selecione uma opção para começar:</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link to="/order">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Fazer Pedido
            </button>
          </Link>
          <Link to="/order-status">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Acompanhar Pedido
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
