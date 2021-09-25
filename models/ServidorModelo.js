const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

class ServidorModelo{
    constructor(){
        this.app = express()
        this.app.use(morgan('dev'))
        this.app.set('port', process.env.PORT || 3000)
    }

    routeRequests(){
        this.app.get('/api/v1/jugadores', (req, res)=>{
            res.send('Todos los jugadores')
          })
          
        this.app.get('/api/v1/jugadores/id', (req, res)=>{
            res.send('Un solo jugador')
          })
          
        this.app.post('/api/v1/jugadores', (req, res)=>{
            res.send('LLevar')
          })
          
        this.app.put('/api/v1/jugadores/id', (req, res)=>{
            res.send('Actualizar')
          })
          
        this.app.delete('/api/v1/jugadores/id', (req, res)=>{
            res.send('Eliminar')
          })
    }

    beginListen(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Listening on port ${this.app.get('port')}...`)
        })
    }
}

module.exports = ServidorModelo