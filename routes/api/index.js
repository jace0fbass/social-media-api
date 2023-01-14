const router = require('express').Router()
const userRoutes = require('./api/user-routes')
const thoughtRoutes = require('./api/thought-routes')

router.use('/api/user', userRoutes)
router.use('/api/thought', thoughtRoutes)

module.exports = router