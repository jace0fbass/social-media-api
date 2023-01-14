const router = require('express').Router()
const userRoutes = require('./user-routes.js')
const thoughtRoutes = require('./thought-routes.js')

router.use('/user', userRoutes)
router.use('/thought', thoughtRoutes)

module.exports = router