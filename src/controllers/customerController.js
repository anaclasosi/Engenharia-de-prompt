const CustomerService = require('../services/customerService');

exports.createCustomer = async (req, res) => {
  try {
    const { nome, email, cpf } = req.body;
    const customer = await CustomerService.createCustomer(nome, email, cpf);
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getCustomerByCpf = async (req, res) => {
  try {
    const { cpf } = req.params;
    const customer = await CustomerService.getCustomerByCpf(cpf);
    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json({ message: 'Cliente não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
