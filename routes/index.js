const router = require('express').Router()
const userRoutes = require('./api/user-routes')
const thoughtRoutes = require('./api/thought-routes')

router.use('/user', userRoutes)
router.use('/thought', thoughtRoutes)

module.exports = router