import React, { useState, useEffect } from 'react';
import { checkout } from '../Services/api';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const CheckoutPage = () => {
  const [paymentLink, setPaymentLink] = useState('');
  const { orderId } = useParams();

  useEffect(() => {
    const initiateCheckout = async () => {
      try {
        const link = await checkout(orderId, 'MercadoPago');
        setPaymentLink(link);
      } catch (error) {
        alert(error.message);
      }
    };
    initiateCheckout();
  }, [orderId]);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
        <p className="text-lg text-gray-700 mb-6">Clique no link para realizar o pagamento</p>
        {paymentLink ? (
          <a href={paymentLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Pagar Agora
          </a>
        ) : (
          <p>Gerando link de pagamento...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;