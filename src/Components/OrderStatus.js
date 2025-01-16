import React from 'react';

const OrderStatus = ({ status }) => {
  let statusMessage;
  switch (status) {
    case 'Recebido':
      statusMessage = 'Seu pedido foi recebido!';
      break;
    case 'Em Preparação':
      statusMessage = 'Seu pedido está sendo preparado!';
      break;
    case 'Pronto':
      statusMessage = 'Seu pedido está pronto para ser retirado!';
      break;
    case 'Finalizado':
      statusMessage = 'Pedido retirado. Obrigado!';
      break;
    default:
      statusMessage = 'Aguardando status do pedido...';
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Status do Pedido</h2>
      <p className="text-lg">{statusMessage}</p>
    </div>
  );
};

export default OrderStatus;
