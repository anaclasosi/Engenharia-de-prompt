import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importando o CSS
import './Components/Header.css'; // Importando o CSS do Header
import './Components/Footer.css'; // Importando o CSS do Footer
import './Components/Login.css'; // Importando o CSS do Login
import './Components/Register.css'; // Importando o CSS do Register
import reportWebVitals from './reportWebVitals';
import App from './App'; // Componente principal
import { BrowserRouter as Router } from 'react-router-dom'; // Para o roteamento

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

reportWebVitals();