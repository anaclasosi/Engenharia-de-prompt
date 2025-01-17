import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ orderDetails, onConfirmPayment, onRemoveItem }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulação do processo de pagamento via QR Code do Mercado Pago
    const link = 'https://www.mercadopago.com.br/checkout/v1/qr?preference-id=YOUR_PREFERENCE_ID'; // Link de pagamento via QR Code
    onConfirmPayment(orderDetails.id, link);
    window.open(link, '_blank'); // Abrir o link do QR Code em uma nova aba
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
              <button onClick={() => onRemoveItem(item)} className="ml-4 remove-button">Remover</button>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-lg">Total: R${orderDetails.total}</p>
      </div>
      <button
        onClick={handlePayment}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
      >
        Realizar Pagamento
      </button>
    </div>
  );
};

export default Checkout;