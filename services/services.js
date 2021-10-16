const Player = require('../models/Player.js')

const addPlayer = async (datosPlayer)=>{
    const savePlayer = new Player(datosPlayer)

    return await savePlayer.save()
}

module.exports = { addPlayer }