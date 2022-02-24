const { response } = require('express');
const clientLoanRepository = require('../../../repositories/clientLoanRepository');

const createClientLoan = async(req, res = response) => {
    try {
        const clientLoan = await clientLoanRepository.save(req.body);
        res.status(201).json({
            message: 'Se solicitó un nuevo prestamo para el cliente',
            response: clientLoan
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error interno del servidor',
            err: error
        });
    }
}

module.exports = {
    createClientLoan
}