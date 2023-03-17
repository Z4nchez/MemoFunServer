const mongoose = require("mongoose");
const schema = mongoose.Schema;

const playerSchema = new schema({
    pName: String,
    pLogo: String,
    pLog1: String,
    pLog2: String,
    pScore: Number,
    range: String,
    rangeN: Number,
    pass: String
})

const Player = mongoose.model("Player", playerSchema, "Player");

module.exports = Player;