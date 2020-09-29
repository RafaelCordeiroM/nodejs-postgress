const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        message:'GOD IS GOOD ALL THE TIME'
    })
})

module.exports = router