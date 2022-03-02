const { Router } = require('express');
const { verifyToken } = require('../routers/validate-token');
const { getUsers, createUser, signin } = require('../user/userController');

const router = new Router();

router.get('/users', verifyToken, getUsers.getUsers);
router.get('/users/:id', verifyToken, getUsers.getUser);
router.post('/signup', createUser.createUser);
router.post('/signin', signin.signin);

module.exports = router;