const express = require('express')
const app = express()
const path = require('path')


//setup view
require('./config/view')(app)

//setup database
require('./database/db')

//setup routes
require('./config/web')(app)

//default files directory
app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "storage", "uploads"))
  );

//setup server
require('./config/server')(app)


