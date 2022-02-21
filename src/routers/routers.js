const { Router } = require('express');
const { getClients, createClient } = require('../client/clientController');
const { getAccounts, createAccount } = require('../account/accountController');

const router = new Router();

router.get('/clients', getClients.getClients);
router.get('/clients/:id', getClients.getClient);
router.post('/clients', createClient.createClient);

router.get('/accounts', getAccounts.getAccounts);
router.get('/accounts/:id', getAccounts.getAccount);
router.post('/accounts', createAccount.createAccount);

module.exports = router;