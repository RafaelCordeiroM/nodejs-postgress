const Tech = require("../Models/Tech");
const User = require("../Models/User");

module.exports = {
    async index(req, res) {
        try {
            const {user_id} = req.params
            const user = await User.findByPk(user_id,{
                include: { association: 'techs',attributes:['id','name'],through:{attributes:[]} }
            })

            //if user was not found return 404 status
            if(!user) return res.status(404).json({
                error: 'user was not found'
            })

            res.send(user.techs)

        } catch (error) {
            res.status(400).send()
        }
    },
    async store(req, res) {
            try {
                const { user_id } = req.params
                const {name} = req.body
        
                const user = await User.findByPk(user_id)
        
                if (!user) return res.status(404).json({ error: 'user was not found' })
        
                const [tech] = await Tech.findOrCreate({
                    where: { name }
                }) 
        
                await user.addTech(tech)
                res.status(201).json(tech)
            } catch (error) {
                res.status(400).send(error)
            }
    },
    async delete(req,res){
       try{ const {user_id} = req.params
        const {name} = req.body

        const user = await User.findByPk(user_id)
        if(!user) return res.status(400).json({error: 'User not found'})

         const tech = await Tech.findOne({
             where: {name}
         })

         await user.removeTech(tech)

         return res.json()
        }catch(error){
            res.status(400).send()
        }
    }
}