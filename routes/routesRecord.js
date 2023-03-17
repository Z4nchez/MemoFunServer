const express = require("express");
const router = express.Router();
const recordSchema = require("../models/record.model.js");

router.get("/", async (req, res) => {  // Leer todos los registros de la coleccion
    const records = await recordSchema.find();
    res.json(records);
})
router.get("/:_id", async (req, res) => { // Leer un registro de la coleccion segun id
    const record = await recordSchema.findById(req.params._id);
    res.json(record);
})
router.post("/", async (req, res) => { // Añadir a la coleccion un nuevo registro pasado desde req
    const {pName, pLogo, pLog1, pLog2, pScore} = req.body;
    const newRecord = new recordSchema({pName, pLogo, pLog1, pLog2, pScore});
    await recordSchema.insertMany(newRecord);
})
router.put("/:_id", async (req, res) => { // Editar un registro existente de la coleccion segun id
    const {pName, pLogo, pLog1, pLog2, pScore} = req.body;
    const newRecord = {pName, pLogo, pLog1, pLog2, pScore};
    await recordSchema.findByIdAndUpdate(req.params._id, newRecord);
})
router.delete("/:_id", async (req, res) => { // Borrar un registro de la coleccion segun id
    await recordSchema.findByIdAndRemove(req.params._id);
})
router.delete("/", async (req, res) => { // Borrar todos los registros de la coleccion
    await recordSchema.remove();
})

module.exports = router;