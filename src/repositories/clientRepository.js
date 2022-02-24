const Client = require('../models/client');

const getAll = async() => await Client.find();
const getOne = async(id) => await Client.findById(id);
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