import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PagamentoPage.css';
import QRCODE_Pagamento from '../Assets/QRCODE_Pagamento.png'; // Corrigir o caminho da imagem do QR Code

const PagamentoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/acompanhar-pedido');
  };

  return (
    <div className="pagamento-page">
      <div className="content">
        <h1 className="page-title">Pagamento</h1>
        <p>Escaneie o QR Code abaixo para realizar o pagamento do pedido #{id}:</p>
        <img src={QRCODE_Pagamento} alt="QR Code de Pagamento" className="qr-code" />
        <p className="mt-4">Caso já tenha efetuado pagamento, continue:</p>
        <button onClick={handleContinue} className="btn btn-primary mt-2">Continue</button>
      </div>
    </div>
  );
};

export default PagamentoPage;
