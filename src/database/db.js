    const Sequelize = require('sequelize')
    const dbConfig = require('../config/database')

    const User = require('../app/Models/User')
    const Address = require('../app/Models/Address')
    const Tech = require('../app/Models/Tech')

    //connection
    const connection = new Sequelize(dbConfig)

    User.init(connection)
    Address.init(connection)
    Tech.init(connection)

    //relationships
    Address.associate(connection.models)
    User.associate(connection.models)
    Tech.associate(connection.models)


    