import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full py-4 text-center text-white font-bold text-2xl">
        Sistema de Autoatendimento
      </header>
      <main className="flex flex-col items-center mt-6">
        <h1 className="text-3xl font-semibold mb-4">Bem-vindo!</h1>
        <p className="text-lg text-gray-700 mb-6">Selecione uma opção para começar:</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Fazer Pedido
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Acompanhar Pedido
          </button>
        </div>
      </main>
      <footer className="mt-auto bg-gray-800 w-full py-2 text-center text-gray-400 text-sm">
        © 2025 - Sistema de Autoatendimento Lanchonete
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
