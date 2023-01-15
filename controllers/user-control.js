const { User, Thought } = require('../models')
module.exports = {
    // get all users
    find: async function (req, res) {
        try {
            const result = await User.find()
            res.json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    
    
    // get one user
    
    // create user
    
    // update user
    
    // delete user
}