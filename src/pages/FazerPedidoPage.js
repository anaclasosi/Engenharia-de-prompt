import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Checkout from '../Components/Checkout'; // Importar o componente Checkout
import './FazerPedidoPage.css';

const FazerPedidoPage = ({ order, handleConfirmPayment }) => {
  const [selectedCategory, setSelectedCategory] = useState('Lanches');

  const categories = {
    Lanches: ['Bauru', 'Sanduíche Australiano', 'Hambúrguer Simples', 'Hambúrguer Duplo'],
    Acompanhamentos: ['Batata Frita', 'Onion Rings', 'Salada'],
    Bebidas: ['Refrigerante', 'Suco Natural', 'Água'],
    Sobremesas: ['Sobremesa de Chocolate', 'Sorvete', 'Pudim'],
  };

  return (
    <div className="fazer-pedido-page">
      <Header /> {/* Barra de navegação no topo */}
      <div className="overlay">
        <main className="flex flex-col items-center justify-center mt-6">
          {Object.keys(categories).map((category) => (
            <div key={category} className="category-container">
              <button
                className="category-title"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
              {selectedCategory === category && (
                <ul className="category-list">
                  {categories[category].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {order && <Checkout orderDetails={order} onConfirmPayment={handleConfirmPayment} />}
        </main>
      </div>
      <Footer /> {/* Rodapé no final */}
    </div>
  );
};

export default FazerPedidoPage;
