import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderStatusPage from './pages/OrderStatusPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import OrderStatus from './Components/OrderStatus';
import Checkout from './Components/Checkout';
import Button from './Components/Button'; 

const App = () => {
  const navigate = useNavigate(); // Substitui useHistory por useNavigate

  const [order, setOrder] = useState(null); // Estado para armazenar o pedido

  const handleAddToOrder = (category, product) => {
    if (!order) {
      setOrder({
        id: new Date().getTime(), // ID único para o pedido
        items: [],
        total: 0,
      });
    }

    // Adicionar item ao pedido
    const newOrder = { ...order };
    newOrder.items.push(product);
    newOrder.total += product.preco;
    setOrder(newOrder);
  };

  const handleConfirmPayment = () => {
    // Lógica para confirmar o pagamento
    navigate('/acompanhar-pedido'); // Navega para a página de acompanhamento do pedido
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fazer-pedido" element={
            <main className="flex flex-col items-center mt-6">
              <h1 className="text-3xl font-semibold mb-4">Escolha seus produtos</h1>
              <ProductList
                products={[
                  { id: 1, nome: 'Hambúrguer Simples', preco: 15.0 },
                  { id: 2, nome: 'Hambúrguer Duplo', preco: 20.0 },
                  { id: 3, nome: 'Batata Frita', preco: 5.0 },
                  { id: 4, nome: 'Refrigerante', preco: 4.0 },
                  { id: 5, nome: 'Sobremesa de Chocolate', preco: 7.0 },
                ]}
                onSelectItem={handleAddToOrder}
                category="Lanches"
              />
              <Checkout orderDetails={order} onConfirmPayment={handleConfirmPayment} />
            </main>
          } />
          <Route path="/acompanhar-pedido" element={
            <main className="flex flex-col items-center mt-6">
              <h1 className="text-3xl font-semibold mb-4">Status do Pedido</h1>
              <OrderStatus status={order ? 'Recebido' : 'Aguardando'} />
            </main>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;