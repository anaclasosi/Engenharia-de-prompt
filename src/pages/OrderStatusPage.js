import React, { useState, useEffect } from 'react';
import { getOrders } from '../Services/api';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const OrderStatusPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrders();
      setOrders(orders);
    };
    fetchOrders();
  }, []);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold mb-4">Acompanhar Pedido</h1>
        <div>
          {orders.map((order) => (
            <div key={order.id} className="mb-4">
              <h2 className="text-xl">{`Pedido #${order.id} - Status: ${order.status}`}</h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderStatusPage;
