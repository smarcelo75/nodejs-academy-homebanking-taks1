const { response } = require('express');
const userRepository = require('../../../repositories/userRepository');
const jwt = require('jsonwebtoken');

const signin = async(req, res = response) => {
    const { email, password } = req.body;
    const user = await userRepository.signin(email, password);
    if (!user) {
        return res.status(400).json({
            message: 'Usuario o contraseña no válida'
        });
    }
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.SECRET_KEY);
    res.json({
        message: `¡Bienvenido ${user.name}!`,
        token
    });
}

module.exports = {
    signin
}