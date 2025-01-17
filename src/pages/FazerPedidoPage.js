import React, { useState } from 'react';
import Checkout from '../Components/Checkout'; // Importar o componente Checkout
import './FazerPedidoPage.css';

const FazerPedidoPage = ({ order, handleConfirmPayment, handleAddToOrder, handleRemoveFromOrder }) => {
  const [selectedCategory, setSelectedCategory] = useState('Lanches');

  const categories = {
    Lanches: [
      { nome: 'Bauru', descricao: 'Pão, presunto e mussarela', preco: 10 },
      { nome: 'Sanduíche Australiano', descricao: 'Pão australiano, carne e queijo', preco: 15 },
      { nome: 'Hambúrguer Simples', descricao: 'Pão, carne e queijo', preco: 12 },
      { nome: 'Hambúrguer Duplo', descricao: 'Pão, carne dupla e queijo', preco: 18 },
    ],
    Acompanhamentos: [
      { nome: 'Batata Frita', descricao: 'Batata frita crocante', preco: 8 },
      { nome: 'Onion Rings', descricao: 'Anéis de cebola empanados', preco: 10 },
      { nome: 'Salada', descricao: 'Salada mista', preco: 7 },
    ],
    Bebidas: [
      { nome: 'Refrigerante', descricao: 'Coca-Cola, Pepsi', preco: 5 },
      { nome: 'Suco Natural', descricao: 'Suco de laranja, limão', preco: 6 },
      { nome: 'Água', descricao: 'Água mineral', preco: 3 },
    ],
    Sobremesas: [
      { nome: 'Sobremesa de Chocolate', descricao: 'Bolo de chocolate', preco: 10 },
      { nome: 'Sorvete', descricao: 'Sorvete de baunilha', preco: 8 },
      { nome: 'Pudim', descricao: 'Pudim de leite condensado', preco: 7 },
    ],
  };

  return (
    <div className="fazer-pedido-page">
      <div className="overlay">
        <h1 className="page-title">Faça seu pedido</h1>
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
                    <li key={item.nome}>
                      <div>{item.nome}</div>
                      <div>{item.descricao}</div>
                      <div>R$ {item.preco.toFixed(2)}</div>
                      <button onClick={() => handleAddToOrder(category, item)}>Adicionar</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </main>
        {order && (
          <section className="checkout-section">
            <Checkout 
              orderDetails={order} 
              onConfirmPayment={handleConfirmPayment} 
              onRemoveItem={handleRemoveFromOrder} 
            />
          </section>
        )}
      </div>
    </div>
  );
};

export default FazerPedidoPage;
