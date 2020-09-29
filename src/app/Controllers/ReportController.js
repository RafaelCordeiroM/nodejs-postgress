const User = require('../Models/User')
const { Op } = require('sequelize')

module.exports = {
    async show(req, res) {
        try {
            //find all users that end with gmail.com -> find all that lives in street Rua José Mendes -> find technologies that start with react
            const users = await User.findAll({
                attributes: ['name', 'email'],
                where: {
                    email: {
                        [Op.like]: '%gmail.com'
                    }
                },
                include: [
                    { association: 'addresses', where: { street: 'Rua José Mendes' } },
                    {
                        association: 'techs',
                        required: false,
                        where: {
                            name: {
                                [Op.like]: 'React%'
                            }
                        }
                    },
                ]
            })

            res.send(users)
        } catch (error) {
            res.status(400).send()
        }
    }
}