import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsByCategory, checkout } from '../Services/api';

const OrderPage = () => {
  const [customerId, setCustomerId] = useState(null);
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  const handleAddToOrder = (product) => {
    setOrder([...order, product]);
  };

  const handleCheckout = async () => {
    try {
      const paymentLink = await checkout(order.id, 'mercadopago');
      navigate(`/checkout/${order.id}`);
    } catch (error) {
      console.error('Erro ao realizar checkout', error);
    }
  };

  return (
    <div>
      <h1>Order Page</h1>
      {/* Renderização dos produtos e lógica de adição ao pedido */}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default OrderPage;
