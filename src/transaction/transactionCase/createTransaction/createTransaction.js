const { response } = require('express');
const transactionRepository = require('../../../repositories/transactionRepository');

const createTransaction = async(req, res = response) => {
    try {
        const transaction = await transactionRepository.save(req.body);
        res.status(201).json({
            message: 'Se creo una nueva transacción',
            response: transaction
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error interno del servidor',
            err: error
        });
    }
}

module.exports = {
    createTransaction
}