const { Router } = require('express');
const { verifyToken } = require('../routers/validate-token');
const { getClients, createClient } = require('../client/clientController');
const { getAccounts, createAccount } = require('../account/accountController');
const { getTransactions, createTransaction } = require('../transaction/transactionController');
const { getLoans, createLoan } = require('../loan/loanController');
const { getClientLoans, createClientLoan } = require('../clientLoan/clientLoanController');
const { getUsers, createUser, signin } = require('../user/userController');

const router = new Router();

router.get('/clients', getClients.getClients);
router.get('/clients/:id', getClients.getClient);
router.post('/clients', createClient.createClient);

router.get('/accounts', verifyToken, getAccounts.getAccounts);
router.get('/accounts/:id', verifyToken, getAccounts.getAccount);
router.post('/accounts', verifyToken, createAccount.createAccount);

router.get('/transactions', getTransactions.getTransactions);
router.get('/transactions/:id', getTransactions.getTransaction);
router.post('/transactions', createTransaction.createTransaction);

router.get('/loans', getLoans.getLoans);
router.get('/loans/:id', getLoans.getLoan);
router.post('/loans', createLoan.createLoan);

router.get('/clientLoans', getClientLoans.getClientLoans);
router.get('/clientLoans/:id', getClientLoans.getClientLoan);
router.post('/clientLoans', createClientLoan.createClientLoan);

router.get('/users', verifyToken, getUsers.getUsers);
router.get('/users/:id', verifyToken, getUsers.getUser);
router.post('/signup', verifyToken, createUser.createUser);
router.post('/signin', signin.signin);

module.exports = router;