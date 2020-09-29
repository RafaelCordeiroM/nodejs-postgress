const express = require('express')

module.exports = (app)=>{
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    app.use(require('../routes/home'))
    app.use('/user',require('../routes/user'))
    app.use('/report',require('../routes/report'))
    
     //404 page
     app.use(function(req, res, next){
        res.status(404)
        // respond with json
        if (req.accepts('json')) {
          return res.send({ error: 'Not found' })
        }
      
        // default to plain-text. send()
        res.type('txt').send('Not found')
      });

}