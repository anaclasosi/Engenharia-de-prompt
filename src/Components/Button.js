import React from 'react';

// Componente Button reutilizável
const Button = ({ onClick, children, className, disabled }) => {
  // Define a classe padrão para o botão
  const baseStyles =
    'font-bold py-2 px-4 rounded transition duration-300 ease-in-out';
  
  // Adiciona estilos específicos de cor dependendo da classe passada
  const buttonStyles = className
    ? `${baseStyles} ${className}`
    : `${baseStyles} bg-blue-500 hover:bg-blue-700 text-white`;

  return (
    <button
      onClick={onClick}
      className={buttonStyles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
