const { Router } = require('express');
const { getClients, createClient } = require('../client/clientController');
const { getAccounts, createAccount } = require('../account/accountController');
const { getTransactions, createTransaction } = require('../transaction/transactionController');
const { getLoans, createLoan } = require('../loan/loanController');
const { getClientLoans, createClientLoan } = require('../clientLoan/clientLoanController');

const router = new Router();

router.get('/clients', getClients.getClients);
router.get('/clients/:id', getClients.getClient);
router.post('/clients', createClient.createClient);

router.get('/accounts', getAccounts.getAccounts);
router.get('/accounts/:id', getAccounts.getAccount);
router.post('/accounts', createAccount.createAccount);

router.get('/transactions', getTransactions.getTransactions);
router.get('/transactions/:id', getTransactions.getTransaction);
router.post('/transactions', createTransaction.createTransaction);

router.get('/loans', getLoans.getLoans);
router.get('/loans/:id', getLoans.getLoan);
router.post('/loans', createLoan.createLoan);

router.get('/clientLoans', getClientLoans.getClientLoans);
router.get('/clientLoans/:id', getClientLoans.getClientLoan);
router.post('/clientLoans', createClientLoan.createClientLoan);

module.exports = router;