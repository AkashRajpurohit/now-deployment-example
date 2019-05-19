const { Router } = require('express')

const user = require('./api/user/user.routes')

const router = Router()

router.use('/user', user)

module.exports = router