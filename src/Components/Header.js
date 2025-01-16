import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import OrderPage from '../pages/OrderPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderStatusPage from '../pages/OrderStatusPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/checkout/:orderId" element={<CheckoutPage />} />
        <Route path="/order-status" element={<OrderStatusPage />} />
      </Routes>
    </Router>
  );
};

export default App;