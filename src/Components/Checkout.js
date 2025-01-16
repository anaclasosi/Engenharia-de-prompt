import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ orderDetails, onConfirmPayment }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulação do processo de pagamento
    const link = 'https://mercadopago.com.br/pagamento'; // Link de pagamento (real)
    onConfirmPayment(orderDetails.id, link);
    navigate(`/checkout/${orderDetails.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-4">Detalhes do Pedido</h1>
      <div className="mb-4">
        <p>Itens do Pedido:</p>
        <ul>
          {orderDetails.items.map((item, index) => (
            <li key={index} className="text-lg">
              {item.nome} - R${item.preco}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-lg">Total: R${orderDetails.total}</p>
      </div>
      <button
        onClick={handlePayment}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      >
        Confirmar Pagamento
      </button>
    </div>
  );
};

export default Checkout;