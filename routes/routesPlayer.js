const express = require("express");
const router = express.Router();
const playerSchema = require("../models/player.model.js");

router.get("/", async (req, res) => {  // Leer todos los registros de la coleccion
    const players = await playerSchema.find();
    res.json(players);
})
router.get("/:_id", async (req, res) => { // Leer un registro de la coleccion segun id
    const player = await playerSchema.findById(req.params._id);
    res.json(player);
})
router.post("/", async (req, res) => { // Añadir a la coleccion un nuevo registro pasado desde req
    const {pName, pLogo, pLog1, pLog2, pScore, range, rangeN, pass} = req.body;
    const newPlayer = new playerSchema({pName, pLogo, pLog1, pLog2, pScore, range, rangeN, pass});
    await playerSchema.insertMany(newPlayer);
})
router.put("/:_id", async (req, res) => { // Editar un registro existente de la coleccion segun id
    const {pName, pLogo, pLog1, pLog2, pScore, range, rangeN, pass} = req.body;
    const newPlayer = {pName, pLogo, pLog1, pLog2, pScore, range, rangeN, pass};
    await playerSchema.findByIdAndUpdate(req.params._id, newPlayer);
})
router.delete("/:_id", async (req, res) => { // Borrar un registro de la coleccion segun id
    await playerSchema.findByIdAndRemove(req.params._id);
})
router.delete("/", async (req, res) => { // Borrar todos los registros de la coleccion
    await playerSchema.remove();
})

module.exports = router;