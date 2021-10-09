const {Router} = require('express');
const {insertPlayer, 
        getPlayer, 
        getPlayerById, 
        updatePlayer, 
        deletePlayer} = require('../controllers/controller.js')
const routes = Router()

routes.get('/jugadores',getPlayer)
  
routes.get('/jugadores/id', getPlayerById)
  
routes.post('/jugadores', insertPlayer)
  
routes.put('/jugadores/id', updatePlayer)
  
routes.delete('/jugadores/id', deletePlayer)

module.exports=routes