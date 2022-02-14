const { response } = require('express');
const clientRepository = require('../../../repositories/clientRepository');

const getClients = async(req, res = response) => {
    try {
        const clients = await clientRepository.getAll();
        const count = await clientRepository.count();
        if (!clients) {
            return res.status(404).json({
                message: 'Not Found'
            });
        }
        res.status(200).json({
            message: 'Clients',
            response: clients,
            total: count
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error interno del servidor',
            err: error
        });
    }
}

module.exports = {
    getClients
}