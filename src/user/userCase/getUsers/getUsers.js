const { response } = require('express');
const userRepository = require('../../../repositories/userRepository');

const getUsers = async(req, res = response) => {
    try {
        const users = await userRepository.getAll();
        const count = await userRepository.count();
        if (!users) {
            return res.status(404).json({
                message: 'Not Found'
            });
        }
        res.json({
            message: 'Users',
            response: users,
            total: count
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error interno del servidor',
            err: error
        });
    }
}

const getUser = async(req, res = response) => {
    const id = req.params.id;
    try {
        const user = await userRepository.getOne(id);
        if (!user) {
            return res.status(404).json({
                message: 'Not Found'
            });
        }
        res.json({
            message: 'User',
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
    getUsers,
    getUser
}