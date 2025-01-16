import React, { useEffect, useState } from 'react';
import { getPaymentStatus } from '../Services/api';

const OrderStatusPage = ({ orderId }) => {
  const [status, setStatus] = useState('Aguardando');

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const paymentStatus = await getPaymentStatus(orderId);
        setStatus(paymentStatus);
      } catch (error) {
        console.error('Erro ao consultar status do pagamento', error);
      }
    };

    fetchStatus();
  }, [orderId]);

  return (
    <div>
      <h1>Status do Pedido</h1>
      <p>Status: {status}</p>
    </div>
  );
};

export default OrderStatusPage;