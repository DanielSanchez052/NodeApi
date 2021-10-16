const { request, response } = require('express')
const {addPlayer } = require('../services/services.js')

const insertPlayer = async (req, res)=>{
    const {name, age, position, team, shirt, image} = req.body
    try {
        const savedPlayer = await addPlayer({
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

const getPlayer = (req, res)=>{
    res.json({message:"Buscar Jugador"})
} 

const getPlayerById = (req, res)=>{
    const idUser =req.params.id
    res.json({message:idUser})
}

const updatePlayer = (req, res)=>{
    res.json({message:"Actualizar Jugador"})
} 

const deletePlayer = (req, res)=>{
    res.json({message:"Eliminar Jugador"})
} 

module.exports = {insertPlayer, 
                    getPlayer, getPlayerById, updatePlayer, deletePlayer}