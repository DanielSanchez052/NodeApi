const {model, Schema} = require('mongoose')

const Player= Schema({
    name: { 
        type: String, 
        required: true
    },
    age: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    shirt: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    } 
},{
    timestamps: true
})
module.exports=model("Player",Player)