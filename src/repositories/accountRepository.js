const Account = require('../models/account');

const getAll = async() => await Account.find();
const getOne = async(id) => await Account.findById(id);
const count = async() => await Account.count();

const save = async(body) => {
    const account = new Account({
        number: body.number,
        balance: body.balance,
        creationDate: body.creationDate,
        client: body.client
    });
    await account.save();
    return account;
}

module.exports = {
    getAll,
    getOne,
    count,
    save
}