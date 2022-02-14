const { Router } = require('express');
const { getClients } = require('../client/clientController');

const router = new Router();

router.get('/clients', getClients.getClients);

module.exports = router;