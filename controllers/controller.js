const { request, response } = require('express')
const { PlayerService } = require('../services/services.js')

const insertPlayer = async (req, res)=>{
    const {name, age, position, team, shirt, image} = req.body
    try {
        const savedPlayer = await PlayerService.addPlayer({
            name, 
            age,
            position, 
            team, 
            shirt, 
            image
        })
        res.status(201).json({message:"jugador Insertado"})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Error al procesar la solicitud", data:error})
    }
} 

const getPlayer = async (req, res)=>{
    try {
        const players =await PlayerService.getPlayers()
        res.json({data: players})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Error al procesar la solicitud", data:error})
    }
} 

const getPlayerById = async (req, res)=>{
    const idUser =req.params.id
    try {
        const player = await PlayerService.getPlayerById(idUser)
        res.json(player)
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Error al procesar la solicitud", data:error})
    }
} 

const updatePlayer = async (req, res)=>{
    const { name, age, position, team, shirt, image} = req.body
    const id = req.params.id
    try {
        const updatedPlayer = await PlayerService.updatePlayer(
            id,
            {name, age,position, team, shirt, image}
            )
        res.status(200).json({message:"jugador actualizado "})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Error al procesar la solicitud", data:error})
    }
} 

const deletePlayer = async (req, res)=>{
    const id =req.params.id
    try {
        const player = await PlayerService.deletePlayer(id)
        res.json({message:"jugador eliminado "})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({message:"Error al procesar la solicitud", data:error})
    }
} 

module.exports = {insertPlayer, 
                    getPlayer, getPlayerById, updatePlayer, deletePlayer}