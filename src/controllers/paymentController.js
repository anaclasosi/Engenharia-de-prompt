const PaymentService = require('../services/paymentService');

exports.checkout = async (req, res) => {
  try {
    const { orderId, paymentMethod } = req.body;
    const paymentLink = await PaymentService.createPaymentLink(orderId, paymentMethod);
    res.status(200).json({ paymentLink });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getPaymentStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const paymentStatus = await PaymentService.getPaymentStatus(orderId);
    res.status(200).json({ paymentStatus });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.paymentWebhook = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await PaymentService.processPaymentWebhook(orderId, status);
    res.status(200).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
