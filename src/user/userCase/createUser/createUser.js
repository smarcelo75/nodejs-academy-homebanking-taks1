const { response } = require('express');
const userRepository = require('../../../repositories/userRepository');

const createUser = async(req, res = response) => {
    try {
        const user = await userRepository.save(req.body);
        res.status(201).json({
            message: 'Se creó el nuevo usuario',
            response: user
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error interno del servidor',
            err: error
        });
    }
}

module.exports = {
    createUser
}