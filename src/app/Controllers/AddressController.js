const Address = require('../Models/Address')
const User = require('../Models/User')

module.exports = {
    async index(req,res){
        try {
            const {user_id} = req.params
            const user = await User.findByPk(user_id,{
                include: { association: 'addresses' }
            })

            //if user was not found return 404 status
            if(!user) return res.status(404).json({
                error: 'user was not found'
            })

            res.send(user.addresses)

        } catch (error) {
            res.status(400).send()
        }
    },
    async store(req,res){
        try {
            const {user_id} = req.params
            const {zipcode, street, number} = req.body

            const user = await User.findByPk(user_id)

            if(!user) return res.status(404).json({error: 'User not found'})

            const address = await Address.create({
                zipcode,
                street,
                number,
                user_id
            })
            res.status(201).json(address)
        } catch (error) {
            res.status(400).json(error)
        }
    }
}