import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api-url.com', // Substitua pela URL da sua API
});

export const getProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar produtos');
  }
};

export const checkout = async (orderId, paymentMethod) => {
  try {
    const response = await api.post('/checkout', { orderId, paymentMethod });
    return response.data.paymentLink;
  } catch (error) {
    throw new Error('Erro ao realizar checkout');
  }
};

export const getPaymentStatus = async (orderId) => {
  try {
    const response = await api.get(`/payments/${orderId}`);
    return response.data.paymentStatus;
  } catch (error) {
    throw new Error('Erro ao consultar status do pagamento');
  }
};

export default api;