const { Router } = require('express');
const { getClients, createClient } = require('../client/clientController');

const router = new Router();

router.get('/clients', getClients.getClients);
router.get('/clients/:id', getClients.getClient);
router.post('/clients', createClient.createClient);

module.exports = router;