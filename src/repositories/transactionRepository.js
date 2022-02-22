const Account = require('../models/account');
const Transaction = require('../models/transaction');

const getAll = async() => await Transaction.find();
const getOne = async(id) => await Transaction.findById(id);
const count = async() => await Transaction.count();

const save = async(body) => {
    const transaction = new Transaction({
        type: body.type,
        amount: (body.type === 'DEBITO') ? body.amount * -1 : body.amount,
        description: body.description,
        account: body.account
    });
    const transactionSaved = await transaction.save();
    const account = await Account.findById(transactionSaved.account);
    account.transactions.push(transactionSaved._id);
    await Account.updateOne({ _id: account._id }, { transactions: account.transactions });
    return transaction;
}

module.exports = {
    getAll,
    getOne,
    count,
    save
}