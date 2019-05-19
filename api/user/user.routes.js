const router = require('express').Router();
const getUsers = require('./user.controller');

router.get('/', getUsers);
router.get('/:id', getUsers);

module.exports = router;