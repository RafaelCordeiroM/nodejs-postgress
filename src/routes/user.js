const express = require('express')
const router = express.Router()
const UserController = require('../app/Controllers/UserController')
const AddressController = require('../app/Controllers/AddressController')
const TechController = require('../app/Controllers/TechController')

//router
router.post('/',UserController.store)
router.get('/',UserController.index)

//address
router.route('/:user_id/address')
.post(AddressController.store)
.get(AddressController.index)

//tech
router.post('/:user_id/tech')
.post(TechController.store)
.get(TechController.index)
.delete(TechController.delete)




module.exports = router