const express = require('express')
const router = express.Router()
const controller = require('../app/Controllers/ReportController')

router.route('/')
.get(controller.show)

module.exports = router