import React, { useState, useEffect } from 'react';
import { getProductsByCategory, createOrder } from '../Services/api';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const OrderPage = () => {
  const [products, setProducts] = useState({ lanche: [], acompanhamento: [], bebida: [], sobremesa: [] });
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerId, setCustomerId] = useState('');  // Aqui você pode pegar o ID do cliente, por exemplo, via login
  const history = useHistory();

  useEffect(() => {
    const fetchProducts = async () => {
      const lanche = await getProductsByCategory('Lanche');
      const acompanhamento = await getProductsByCategory('Acompanhamento');
      const bebida = await getProductsByCategory('Bebida');
      const sobremesa = await getProductsByCategory('Sobremesa');
      setProducts({ lanche, acompanhamento, bebida, sobremesa });
    };
    fetchProducts();
  }, []);

  const handleSelectItem = (category, product) => {
    setSelectedItems((prevItems) => [...prevItems, { category, ...product }]);
  };

  const handleCreateOrder = async () => {
    try {
      const order = await createOrder(customerId, selectedItems);
      history.push(`/checkout/${order.id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold mb-4">Fazer Pedido</h1>
        <div>
          {Object.keys(products).map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-bold">{category}</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {products[category].map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelectItem(category, product)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {product.nome} - R${product.preco}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleCreateOrder}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-6"
        >
          Confirmar Pedido
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default OrderPage;
