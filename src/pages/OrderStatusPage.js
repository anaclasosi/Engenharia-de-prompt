import React, { useEffect, useState } from 'react';
import { getPaymentStatus } from '../Services/api';
import './OrderStatusPage.css';

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
    <div className="order-status-page">
      <div className="overlay">
        <h1 className="title">Status do Pedido</h1>
        <p className="status-text">
          <strong>Status:</strong> {status}
        </p>
        <div className="button-container">
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Atualizar Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusPage;
