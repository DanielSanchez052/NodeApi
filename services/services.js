const Player = require('../models/Player.js')

const PlayerService = {
    addPlayer: async (datosPlayer)=>{
        const savePlayer = new Player(datosPlayer)
        return await savePlayer.save()
    },

    getPlayers : async ()=> await Player.find({}),

    getPlayerById : async (id)=> await Player.findOne({_id:id}),

    updatePlayer : async (id,player)=>await Player.findByIdAndUpdate(id,player),

    deletePlayer : async (id)=> await Player.findByIdAndDelete(id)
}

module.exports = { PlayerService }