import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './PagamentoPage.css';

const PagamentoPage = () => {
  const { id } = useParams();
  const qrCodeLink = 'https://www.mercadopago.com.br/checkout/v1/qr?preference-id=YOUR_PREFERENCE_ID';

  return (
    <div className="pagamento-page">
      <Header />
      <div className="content">
        <h1 className="page-title">Pagamento</h1>
        <p>Escaneie o QR Code abaixo para realizar o pagamento do pedido #{id}:</p>
        <img src={qrCodeLink} alt="QR Code de Pagamento" className="qr-code" />
      </div>
      <Footer />
    </div>
  );
};

export default PagamentoPage;
