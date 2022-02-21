const { response } = require('express');
const accountRepository = require('../../../repositories/accountRepository');

const createAccount = async(req, res = response) => {
    try {
        const account = await accountRepository.save(req.body);
        res.status(201).json({
            message: 'Se creo una nueva cuenta',
            response: account
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error interno del servidor',
            err: error
        });
    }
}

module.exports = {
    createAccount
}