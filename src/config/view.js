const path = require('path')
const express = require('express')
module.exports = (app)=>{
    app.set('views',path.join(__dirname,'../resources/views'))
    app.use(express.static(path.join(__dirname,'../public')))
}