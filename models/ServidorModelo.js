const express = require('express')
const morgan = require('morgan')
const { connectDB } = require('../Database/connection.js')
const routes = require('../routes/routes.js')
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('../swagger.json');
const cors = require('cors')
require('dotenv').config()

class ServidorModelo{
    constructor(){
        this.app = express()
        this.app.use(morgan('dev'))
        this.app.set('port', process.env.PORT || 3000)
        this.connectionDB()
        this.callMiddlewares()
    }

    routeRequests(){
       this.app.use('/api/v1/',routes) 
    }

    connectionDB(){
      connectDB()
    }

    beginListen(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Listening on port ${this.app.get('port')}...`)
        })

        this.routeRequests()
    }

    callMiddlewares(){
        this.app.use((express.json()))
        this.app.use(cors())
        // this.app.use('/api/v1/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))     
    }
}

module.exports = ServidorModelo