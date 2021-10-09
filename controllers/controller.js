const { request, response } = require('express')


// const insertPlayer = (req=request, res=response)=>{
const insertPlayer = (req, res)=>{
    res.status(201).json({message:"Insertar Jugador"})
} 

const getPlayer = (req, res)=>{
    res.json({message:"Buscar Jugador"})
} 

const getPlayerById = (req, res)=>{
    res.json({message:"Buscar Jugador por id"})
}

const updatePlayer = (req, res)=>{
    res.json({message:"Actualizar Jugador"})
} 

const deletePlayer = (req, res)=>{
    res.json({message:"Eliminar Jugador"})
} 

module.exports = {insertPlayer, 
                    getPlayer, getPlayerById, updatePlayer, deletePlayer}