const { response } = require('express');
const cardRepository = require('../../../repositories/cardRepository');

const createCard = async(req, res = response) => {
    try {
        const card = await cardRepository.save(req.body);
        res.status(201).json({
            message: 'Se creo una nueva tarjeta',
            response: card
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error interno del servidor',
            err: error
        });
    }
}

module.exports = {
    createCard
}