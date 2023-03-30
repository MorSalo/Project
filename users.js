const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.route('/')
    .get(usersController.getUsers)
    .post(usersController.createUser)

router.route('/:id')
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser)

router.route('/auth')
.post(usersController.validateUser)

module.exports = router;