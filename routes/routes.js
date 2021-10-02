const {Router} = require('express');

const routes = Router()

routes.get('/jugadores', (req, res)=>{
    res.send('Todos los jugadores')
  })
  
routes.get('/jugadores/id', (req, res)=>{
    res.send('Un solo jugador')
  })
  
routes.post('/jugadores', (req, res)=>{
    res.send('LLevar')
  })
  
routes.put('/jugadores/id', (req, res)=>{
    res.send('Actualizar')
  })
  
routes.delete('/jugadores/id', (req, res)=>{
    res.send('Eliminar')
  })

module.exports=routes