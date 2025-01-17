import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderStatus from './Components/OrderStatus';
import Header from './Components/Header';
import Footer from './Components/Footer';
import IdentPage from './pages/IdentPage';
import FazerPedidoPage from './pages/FazerPedidoPage';
import PagamentoPage from './pages/PagamentoPage';

const App = () => {
  const [order, setOrder] = useState(null); // Estado para armazenar o pedido

  const handleAddToOrder = (category, product) => {
    let newOrder;
    if (!order) {
      newOrder = {
        id: new Date().getTime(), // ID único para o pedido
        items: [],
        total: 0,
      };
    } else {
      newOrder = { ...order };
    }

    // Adicionar item ao pedido
    newOrder.items.push(product);
    newOrder.total += product.preco;
    setOrder(newOrder);
  };

  const handleRemoveFromOrder = (product) => {
    if (!order) return;

    // Remover item do pedido
    const newOrder = { ...order };
    const index = newOrder.items.findIndex(item => item.nome === product.nome);
    if (index !== -1) {
      newOrder.items.splice(index, 1);
      newOrder.total -= product.preco;
      setOrder(newOrder);
    }
  };

  const handleConfirmPayment = () => {
    // Lógica para confirmar o pagamento
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/acompanhar-pedido" element={
          <main className="flex flex-col items-center mt-6">
            <h1 className="text-3xl font-semibold mb-4">Status do Pedido</h1>
            {order && order.items.length > 0 ? (
              <OrderStatus status="Recebido" />
            ) : (
              <OrderStatus status="Aguardando" />
            )}
          </main>
        } />
        <Route path="/identificacao" element={<IdentPage />} />
        <Route path="/fazer-pedido" element={
          <FazerPedidoPage
            order={order}
            handleConfirmPayment={handleConfirmPayment}
            handleAddToOrder={handleAddToOrder}
            handleRemoveFromOrder={handleRemoveFromOrder}
          />
        } />
        <Route path="/pagamento/:id" element={<PagamentoPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;