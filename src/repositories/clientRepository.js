const Client = require('../models/client');

const getAll = async() => await Client.find().populate('accounts');
const getOne = async(id) => await Client.findById(id).populate('accounts');
const count = async() => await Client.count();

const save = async(body) => {
    const client = new Client({
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
    });
    await client.save();
    return client;
}

module.exports = {
    getAll,
    getOne,
    count,
    save
}