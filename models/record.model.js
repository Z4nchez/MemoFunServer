const mongoose = require("mongoose");
const schema = mongoose.Schema;

const recordSchema = new schema({
    pName: String,
    pLogo: String,
    pLog1: String,
    pLog2: String,
    pScore: Number
})

const Record = mongoose.model("Record", recordSchema, "Record");

module.exports = Record;