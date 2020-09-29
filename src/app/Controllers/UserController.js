const User = require('../Models/User')
module.exports = {
    async store(req,res){
        try {
            
            const {name,email} = req.body
            const user = await User.create({name,email})
            return res.status(201).json(user)

        } catch (error) {
            res.status(400).json(error)
        }
    },
    async index(req,res){
        try {
            const users = await User.findAll()
            return res.json(users)
        } catch (error) {
            res.json(users)
        }
    }
}