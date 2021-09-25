const ServidorModelo = require('./models/ServidorModelo.js')

const server = new ServidorModelo()

server.routeRequests()

server.beginListen()
